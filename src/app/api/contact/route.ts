import { NextRequest, NextResponse } from 'next/server';

// 飞书应用配置
const FEISHU_APP_ID = process.env.FEISHU_APP_ID || 'cli_a957705597f89bb4';
const FEISHU_APP_SECRET = process.env.FEISHU_APP_SECRET || 'xYeZPc2alDnk9pgBnY9bBetLvRhDVGpL';
const FEISHU_BASE_TOKEN = process.env.FEISHU_BASE_TOKEN || 'KUthbYz09aChwOspADDcipUgnWd';
const FEISHU_TABLE_ID = process.env.FEISHU_TABLE_ID || 'tbld6QHlg9ZYQhYb';

// 获取飞书访问令牌
async function getAccessToken(): Promise<string> {
  const response = await fetch('https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      app_id: FEISHU_APP_ID,
      app_secret: FEISHU_APP_SECRET,
    }),
  });

  const data = await response.json();
  if (data.code !== 0) {
    throw new Error(`获取访问令牌失败: ${data.msg}`);
  }
  return data.tenant_access_token;
}

// 向飞书表格添加记录
async function addRecord(accessToken: string, fields: Record<string, any>) {
  const url = `https://open.feishu.cn/open-apis/bitable/v1/apps/${FEISHU_BASE_TOKEN}/tables/${FEISHU_TABLE_ID}/records`;
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      fields: fields,
    }),
  });

  const data = await response.json();
  if (data.code !== 0) {
    throw new Error(`添加记录失败: ${data.msg}`);
  }
  return data.data;
}

// 发送邮件通知
async function sendEmailNotification(record: { name: string; phone: string; email: string; company: string; message: string }) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  
  if (!RESEND_API_KEY) {
    console.log('RESEND_API_KEY 未配置，跳过邮件通知');
    return false;
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: '柯洋税所官网 <noreply@keyang-tax.com>',
        to: '327039492@qq.com',
        subject: '【官网询盘】新客户提交',
        html: `
          <h2>官网收到新的询盘信息</h2>
          <table border="1" cellpadding="10" style="border-collapse: collapse;">
            <tr><td><strong>姓名</strong></td><td>${record.name}</td></tr>
            <tr><td><strong>电话</strong></td><td>${record.phone}</td></tr>
            <tr><td><strong>邮箱</strong></td><td>${record.email}</td></tr>
            <tr><td><strong>公司</strong></td><td>${record.company || '未填写'}</td></tr>
            <tr><td><strong>留言</strong></td><td>${record.message}</td></tr>
            <tr><td><strong>提交时间</strong></td><td>${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}</td></tr>
          </table>
          <p>请尽快联系客户。</p>
        `,
      }),
    });

    if (response.ok) {
      console.log('邮件通知已发送');
      return true;
    } else {
      console.error('邮件发送失败:', await response.text());
      return false;
    }
  } catch (error) {
    console.error('邮件发送错误:', error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  let feishuSuccess = false;
  let emailSuccess = false;

  try {
    const body = await request.json();
    const { name, phone, email, company, message } = body;

    // 验证必填字段（邮箱改为选填）
    if (!name || !phone || !message) {
      return NextResponse.json(
        { success: false, message: '请填写所有必填字段' },
        { status: 400 }
      );
    }

    // 验证手机号格式
    const phoneRegex = /^1[3-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { success: false, message: '请输入正确的手机号码' },
        { status: 400 }
      );
    }

    const record = { name, phone, email, company: company || '', message };

    // 尝试写入飞书表格
    try {
      const accessToken = await getAccessToken();
      await addRecord(accessToken, {
        '姓名': name,
        '电话': phone,
        '邮箱': email,
        '公司': company || '',
        '留言': message,
      });
      feishuSuccess = true;
    } catch (error) {
      console.error('飞书写入失败:', error);
    }

    // 发送邮件通知（无论飞书是否成功都发送）
    emailSuccess = await sendEmailNotification(record);

    // 如果两者都失败了
    if (!feishuSuccess && !emailSuccess) {
      return NextResponse.json(
        { success: false, message: '提交失败，请稍后重试或直接拨打我们的电话' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: '提交成功，我们会尽快与您联系',
    });
  } catch (error) {
    console.error('表单提交错误:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: error instanceof Error ? error.message : '提交失败，请稍后重试' 
      },
      { status: 500 }
    );
  }
}
