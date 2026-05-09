import http from 'node:http';
import { createServer } from 'node:http';

// 飞书配置（通过环境变量覆盖，代码内为默认值）
const FEISHU_APP_ID = process.env.FEISHU_APP_ID || 'cli_a957705597f89bb4';
const FEISHU_APP_SECRET = process.env.FEISHU_APP_SECRET || 'xYeZPc2alDnk9pgBnY9bBetLvRhDVGpL';
const FEISHU_BASE_TOKEN = process.env.FEISHU_BASE_TOKEN || 'KUthbYz09aChwOspADDcipUgnWd';
const FEISHU_TABLE_ID = process.env.FEISHU_TABLE_ID || 'tbld6QHlg9ZYQhYb';

const PORT = parseInt(process.env.PORT || '3001', 10);

async function getAccessToken() {
  const res = await fetch('https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ app_id: FEISHU_APP_ID, app_secret: FEISHU_APP_SECRET }),
  });
  const data = await res.json();
  if (data.code !== 0) throw new Error(`飞书令牌获取失败: ${data.msg}`);
  return data.tenant_access_token;
}

async function addFeishuRecord(token, fields) {
  const url = `https://open.feishu.cn/open-apis/bitable/v1/apps/${FEISHU_BASE_TOKEN}/tables/${FEISHU_TABLE_ID}/records`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ fields }),
  });
  const data = await res.json();
  if (data.code !== 0) throw new Error(`飞书记录写入失败: ${data.msg}`);
  return data.data;
}

async function sendEmail(record) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return false;
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: '柯洋税所官网 <noreply@keyang-tax.com>',
        to: '327039492@qq.com',
        subject: '【官网询盘】新客户提交',
        html: `<h2>官网收到新的询盘信息</h2>
<table border="1" cellpadding="10" style="border-collapse:collapse;">
<tr><td><strong>姓名</strong></td><td>${record.name}</td></tr>
<tr><td><strong>电话</strong></td><td>${record.phone}</td></tr>
<tr><td><strong>邮箱</strong></td><td>${record.email}</td></tr>
<tr><td><strong>公司</strong></td><td>${record.company || '未填写'}</td></tr>
<tr><td><strong>留言</strong></td><td>${record.message}</td></tr>
<tr><td><strong>时间</strong></td><td>${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}</td></tr>
</table>`,
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

const server = createServer(async (req, res) => {
  // 只处理 POST /api/contact
  if (req.method !== 'POST' || req.url !== '/api/contact') {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found' }));
    return;
  }

  let body = '';
  req.on('data', chunk => (body += chunk));
  req.on('end', async () => {
    try {
      const { name, phone, email, company, message } = JSON.parse(body);

      if (!name || !phone || !message) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: '请填写所有必填字段' }));
        return;
      }

      if (!/^1[3-9]\d{9}$/.test(phone)) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: '请输入正确的手机号码' }));
        return;
      }

      let feishuOk = false;
      try {
        const token = await getAccessToken();
        await addFeishuRecord(token, { 姓名: name, 电话: phone, 邮箱: email || '', 公司: company || '', 留言: message });
        feishuOk = true;
      } catch (err) {
        console.error('飞书写入失败:', err);
      }

      const emailOk = await sendEmail({ name, phone, email, company, message });

      if (!feishuOk && !emailOk) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: '提交失败，请稍后重试或直接拨打我们的电话' }));
        return;
      }

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true, message: '提交成功，我们会尽快与您联系' }));
    } catch (err) {
      console.error('请求处理错误:', err);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, message: '提交失败，请稍后重试' }));
    }
  });
});

server.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
