'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ChevronDown,
  ChevronUp,
  Building2,
  Calculator,
  FileText,
  Settings,
  HelpCircle,
  CheckCircle2,
  Phone,
  MessageCircle,
  ArrowRight,
  X,
} from 'lucide-react';

// FAQ 数据
const faqData = {
  '一、基础认知类': {
    icon: Building2,
    color: 'blue',
    questions: [
      {
        q: 'Q1：成都注册公司需要多长时间？',
        a: '正常流程：7–15个工作日完成全部注册手续。\n\n• 核名：1–3个工作日\n• 提交资料：3–5个工作日\n• 领取执照+刻章：1–2个工作日\n• 银行开户：3–5个工作日\n• 税务登记：1–2个工作日\n\n**柯洋服务**：全程代办，最快3–5个工作日可拿营业执照，加急可进一步缩短时间。',
      },
      {
        q: 'Q2：成都注册公司需要准备哪些材料？',
        a: '| 材料 | 说明 |\n| ---- | ---- |\n| 股东身份证 | 全体股东身份证正反面 |\n| 注册地址证明 | 房产证+租赁合同（自有房产只需房产证） |\n| 公司名称 | 准备3–5个备选名称，提高核名通过率 |\n| 注册资本 | 实行认缴制，无需实缴 |\n| 经营范围 | 根据实际业务填写，可参考同行 |\n\n注意：成都部分区域（如高新区）对外地身份证有额外要求，建议先咨询。',
      },
      {
        q: 'Q3：成都注册公司需要多少钱？（对标全网同行）',
        a: '| 项目 | 费用 |\n| ---- | ---- |\n| 工商注册 | 0元（官方取消收费） |\n| 刻章（公章/财务章/法人章） | 200–500元（全套3枚，不含合同章） |\n| 银行开户 | 0–500元（部分银行免费） |\n| 注册地址 | 800–3000元/年（合规集群/挂靠） |\n| 代理记账 | 小规模200元起/月 |\n\n**柯洋套餐**：注册+首月代理记账980元起，含执照、公章、财务章、税务登记，无隐形收费。',
      },
      {
        q: 'Q4：成都公司注册地址怎么选？',
        a: '| 地址类型 | 优点 | 适合人群 |\n| ---- | ---- | ---- |\n| 实际办公地址 | 合规、可经营 | 有实体办公 |\n| 集群注册地址 | 费用低、办理快 | 电商、初创 |\n| 挂靠地址 | 性价比高 | 多数初创公司 |\n\n建议：高新区、天府新区政策优惠大，优先考虑。\n\n柯洋提供合规备案集群地址，最低99元/月，可核验、可签收。',
      },
      {
        q: 'Q5：什么是代理记账？中小企业为什么要找代理记账？',
        a: '代理记账：将企业的会计核算、记账、报税等工作委托给专业财税机构。\n\n**4大理由：**\n\n1. **省钱**：小规模纳税人代账服务200元/月起，比专职会计节省90%以上人力成本，同时享受注册税务师、会计师、合规师三重把关的专业服务。\n\n2. **省心**：专业团队处理账务与报税，避免错报、漏报、迟报导致的罚款与信用风险。\n\n3. **合规**：紧跟国家最新税务政策，确保账务处理与纳税申报全流程合规。\n\n4. **专注**：让您把精力集中在核心业务上，财税问题由专业团队兜底处理。\n\n**柯洋优势**：核心团队均为执业注册税务师、会计师、合规师，可提供税务合规规划等高端增值服务。',
      },
    ],
  },
  '二、小规模纳税人': {
    icon: Calculator,
    color: 'green',
    questions: [
      {
        q: 'Q6：成都小规模纳税人代理记账多少钱一个月？（全网同行对标）',
        a: '| 服务内容 | 市场低价 | 正规价 | 柯洋服务 |\n| ---- | ---- | ---- | ---- |\n| 日常记账报税 | 150–200元/月 | 200–400元/月 | 透明报价，无隐形收费 |\n| 年度汇算清缴 | 300–500元/年 | 500–800元/年 | 套餐内含 |\n| 工商年报 | 100–200元/年 | 200–300元/年 | 套餐内含 |\n\n价格影响：业务量、行业、是否开票。\n\n**柯洋承诺**：价格透明、无隐形收费，提供免费财税诊断。',
      },
      {
        q: 'Q7：小规模纳税人和一般纳税人有什么区别？',
        a: '| 对比项 | 小规模纳税人 | 一般纳税人 |\n| ---- | ---- | ---- |\n| 认定标准 | 年应征增值税销售额≤500万元 | 年应征增值税销售额＞500万元，或自愿登记 |\n| 税率 | 3%征收率减按1%（2026–2027） | 6%/9%/13%（按行业） |\n| 进项抵扣 | 不可抵扣 | 可抵扣 |\n| 申报周期 | 季度 | 月度 |\n| 免税额度 | 季度＜30万普票免税 | 无免税，可抵扣 |\n\n**怎么选**：\n• 进项多、客户要专票 → 一般纳税人更省\n• 初创、业务小 → 小规模更划算\n\n柯洋提供**免费纳税人类型评估**。',
      },
      {
        q: 'Q8：成都抖音/淘宝电商卖家怎么选财税服务？',
        a: '**电商痛点**：\n• 店铺不能当注册地址\n• 微信/支付宝收款需合规入账\n• 佣金、刷单、跨境外汇处理复杂\n\n**选代账4个标准**：\n1. 懂电商平台结算规则\n2. 有同类客户成功案例\n3. 熟悉电商税收优惠\n4. 成立3年以上、资质齐全\n\n**柯洋优势**：深耕成都电商财税5年+，服务抖音/淘宝客户，擅长佣金入账、刷单合规、私户转公、跨境申报。',
      },
      {
        q: 'Q9：小规模纳税人免税额度是多少？2026年最新政策',
        a: '依据**财政部 税务总局公告2026年第10号**（2026.1.1–2027.12.31）：\n\n• 季度销售额＜30万元：开具普通发票免征增值税\n• 开具专票：按1%征收率正常缴税\n• 季度销售额≥30万元（含刚好30万）：全额按1%缴税\n\n**常见误区**：\n• ❌ 免税额度是每月30万 → ✅ 季度30万\n• ❌ 开专票也能免税 → ✅ 开专票需缴税\n• ❌ 超30万仅超额缴 → ✅ ≥30万全额缴税\n\n柯洋提供**免费政策解读+申报指导**。',
      },
      {
        q: 'Q10：电商卖家需要了解哪些税务风险？',
        a: '| 风险 | 说明 | 后果 |\n| ---- | ---- | ---- |\n| 隐匿收入 | 私户收货款不做账 | 补税+罚款+滞纳金 |\n| 成本票缺失 | 采购无票，利润虚高 | 多缴企业所得税 |\n| 私户发薪 | 微信/支付宝发工资 | 逃税风险 |\n| 刷单收入 | 未合规申报 | 稽查风险 |\n| 跨年报销 | 发票跨年入账 | 不予抵扣 |\n| 优惠未享 | 不懂政策多缴税 | 经济损失 |\n\n柯洋提供**年度财税体检+风险预警**。',
      },
    ],
  },
  '三、一般纳税人': {
    icon: FileText,
    color: 'purple',
    questions: [
      {
        q: 'Q11：成都一般纳税人代理记账收费标准？（全网同行对标）',
        a: '| 服务 | 价格 | 说明 |\n| ---- | ---- | ---- |\n| 日常记账报税 | 500–800元/月 | 月度申报，账务复杂 |\n| 年度汇算清缴 | 800–1500元/年 | 企业所得税汇算 |\n| 税务合规规划 | 定制报价 | 合法降负 |\n\n影响因素：进项票量、行业、出口退税、多家公司账务。\n\n**柯洋优势**：注册税务师亲自把关，提供税务合规规划、稽查应对、账务规范。',
      },
      {
        q: 'Q12：一般纳税人如何做税务合规规划？',
        a: '1. **进项发票管理**：必收专票、及时用途确认\n2. **加计抵减**：现代服务业可享10%/15%\n3. **供应商选择**：一般纳税人/小规模综合比价\n4. **业务拆分**：不同税率业务分开核算，避免从高适用\n5. **优惠用足**：高新、小微、区域返还等\n\n柯洋：**定制化税务合规规划**，合法合规降低税负。',
      },
      {
        q: 'Q13：一般纳税人专票抵扣是怎么回事？',
        a: '**公式**：销项税额 − 进项税额 = 应纳税额\n\n例：销项13万，进项9万 → 实缴4万。\n\n✅ **可抵扣项目**（一般纳税人取得合规增值税专用发票，且用于应税项目）：\n• 采购货物、设备、办公用品\n• 因公出差的住宿费（取得专票）\n• 广告服务、咨询服务等\n\n❌ **不可抵扣项目**（即使取得专票也不能抵扣）：\n• 用于集体福利、个人消费的支出（如员工福利、个人消费）\n• 业务招待费（含招待餐费、礼品等）\n• 用于简易计税项目、免税项目、非应税项目的支出\n• 非正常损失对应的进项税额\n\n**官方政策依据**（国家税务总局公告2019年第45号）：2017年1月1日后开具的专票已取消认证期限，无360天限制。',
      },
      {
        q: 'Q14：什么情况下企业需要升级为一般纳税人？',
        a: '1. **连续12个月销售额＞500万**：强制升级\n2. **客户要求开13%/9%/6%专票抵扣**\n3. **进项票多，抵扣空间大**\n4. **投标/资质要求一般纳税人资格**\n\n**升级提醒**：\n• 税率从1%变为6%/9%/13%\n• 改为月度申报，财务要求更高\n\n建议：接近500万时**提前6个月规划**。柯洋提供**免费升级评估**。',
      },
    ],
  },
  '四、特殊场景': {
    icon: Settings,
    color: 'orange',
    questions: [
      {
        q: 'Q15：成都公司注销需要多少钱？需要多久？（全网同行对标）',
        a: '| 注销类型 | 费用 | 周期 |\n| ---- | ---- | ---- |\n| 简易注销 | 1000–2000元 | 1–2个月 |\n| 一般注销 | 2000–5000元 | 2–3个月 |\n| 疑难注销 | 5000–20000元+ | 6个月–1年+ |\n\n费用差异：税务异常、未年报、债权债务、证照遗失等。\n\n**柯洋服务**：\n• 简易注销：1500元起，1–2个月办结\n• 疑难注销：先查账再报价，先处理后付费\n\n提示：异常越久，罚款越多，越早注销越省钱。',
      },
      {
        q: 'Q16：成都企业税务异常怎么处理？',
        a: '**常见异常**：\n• 未按时报税：补申报+罚款（50–200元/次）\n• 长期零申报：提供经营证明\n• 发票异常：配合核查\n• 地址异常：变更地址或解锁\n\n**处理流程**：查原因→补申报/整改→提交材料→解除异常。\n\n**柯洋强项**：已帮上百家企业解除税务/工商异常，熟悉成都各区流程。',
      },
      {
        q: 'Q17：公司股权变更需要交哪些税？',
        a: '| 税种 | 主体 | 税率 | 说明 |\n| ---- | ---- | ---- | ---- |\n| 个人所得税 | 自然人股东 | 20% | （转让收入−原值）×20% |\n| 企业所得税 | 企业股东 | 25% | 并入所得计税 |\n| 印花税 | 双方 | 0.05% | 转让协议 |\n\n示例：原值100万，转让200万 → 个税20万。\n\n柯洋：**变更前税务合规规划**，合法降低税负。',
      },
      {
        q: 'Q18：成都创业初期有哪些税务优惠政策？',
        a: '• **小规模**：季度＜30万普票免税（财政部 税务总局2026年第10号）\n• **六税两费**：减半征收（小规模/小微/个体，2026–2027有效，财政部2023年12号）\n• **高新企业**：所得税15%\n• **天府新区/高新区**：额外税收返还\n• **高校毕业生/返乡创业**：补贴、贴息贷款\n\n柯洋：**免费评估可享政策**，确保应享尽享。',
      },
    ],
  },
  '五、选服务商标准': {
    icon: HelpCircle,
    color: 'indigo',
    questions: [
      {
        q: 'Q19：成都代理记账公司怎么选？哪家好？',
        a: '**5大标准**：\n\n1. **资质**：有代理记账许可证+税务师事务所资质（⭐⭐⭐⭐⭐）\n2. **专业**：核心是注册税务师、会计师、合规师，不是普通会计（⭐⭐⭐⭐⭐）\n3. **稳定**：成立3年以上、口碑好（⭐⭐⭐⭐）\n4. **透明**：报价清晰，无隐形收费（⭐⭐⭐⭐）\n5. **响应**：及时回复、上门服务（⭐⭐⭐）\n\n**避坑**：\n• 99元/月低价陷阱，后期乱加价\n• 无资质、小作坊，易跑路\n• 只做流水账，不懂规划与风控\n\n**柯洋实力**：\n• 成立9年，服务企业1000+\n• 正规税务师事务所\n• 价格透明，7×12小时响应\n• AI+税务师双核，合规更稳',
      },
      {
        q: 'Q20：找代理记账公司需要注意什么？',
        a: '**签约前必问6问**：\n1. 有代理记账许可证吗？\n2. 做过我这个行业吗？\n3. 报税延误谁负责？\n4. 税务稽查会协助吗？\n5. 费用全包吗，有无隐形收费？\n6. 账本保管多少年？\n\n**签约必做3件事**：\n1. 材料交接清单（执照、章、许可证）\n2. 明确服务范围（哪些做、哪些不做）\n3. 固定对接人、汇报频次\n\n**柯洋承诺**：签约前免费上门沟通，费用透明，服务不满意可随时终止。',
      },
    ],
  },
};

const colorMap: Record<string, { bg: string; text: string; border: string; icon: string }> = {
  blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', icon: 'bg-blue-100' },
  green: { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200', icon: 'bg-emerald-100' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200', icon: 'bg-purple-100' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200', icon: 'bg-orange-100' },
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-200', icon: 'bg-indigo-100' },
};

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [activeCategory, setActiveCategory] = useState<string>('一、基础认知类');

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const allCategories = Object.keys(faqData);
  const flatQuestions = allCategories.flatMap((cat) =>
    faqData[cat as keyof typeof faqData].questions.map((q) => ({ ...q, category: cat }))
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-[#1a2744] to-[#1e3a5f] text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-white/10 text-amber-300 border border-amber-400/30">
            <CheckCircle2 className="h-3.5 w-3.5 mr-1.5" />
            2026年最新版
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            常见问题
            <span className="block mt-2 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              快速解答
            </span>
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
            整理了企业主最常问的20个问题，涵盖注册公司、代理记账、税务规划等全流程
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-8 py-5 rounded-full">
              <Link href="/contact">
                <MessageCircle className="h-4 w-4 mr-2" />
                在线咨询
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-5 rounded-full">
              <Link href="tel:18980020731">
                <Phone className="h-4 w-4 mr-2" />
                189-8002-0731
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-white border-b">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
            {[
              { num: '20', label: '精选问题' },
              { num: '5', label: '知识分类' },
              { num: '9年', label: '行业经验' },
              { num: '1000+', label: '服务企业' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {stat.num}
                </div>
                <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar - Category Navigation */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="lg:sticky lg:top-24">
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">知识分类</h3>
                <nav className="space-y-1">
                  {allCategories.map((category) => {
                    const data = faqData[category as keyof typeof faqData];
                    const Icon = data.icon;
                    const colors = colorMap[data.color];
                    return (
                      <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                          activeCategory === category
                            ? `${colors.bg} ${colors.text} font-medium`
                            : 'text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        <Icon className="h-5 w-5 flex-shrink-0" />
                        <span className="text-sm">{category}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* FAQ List */}
            <div className="flex-1">
              {allCategories.map((category) => {
                const data = faqData[category as keyof typeof faqData];
                const Icon = data.icon;
                const colors = colorMap[data.color];

                if (activeCategory !== category) return null;

                return (
                  <div key={category} className="space-y-4">
                    {/* Category Header */}
                    <div className={`flex items-center gap-3 p-4 rounded-xl ${colors.bg} ${colors.text}`}>
                      <Icon className="h-6 w-6" />
                      <h2 className="text-lg font-semibold">{category}</h2>
                      <Badge variant="outline" className={`ml-auto ${colors.border} ${colors.text}`}>
                        {data.questions.length} 个问题
                      </Badge>
                    </div>

                    {/* Questions */}
                    <div className="space-y-3">
                      {data.questions.map((item, idx) => {
                        const itemId = `${category}-${idx}`;
                        const isOpen = openItems.has(itemId);

                        return (
                          <Card key={idx} className={`border-2 transition-all ${isOpen ? colors.border : 'border-slate-100'}`}>
                            <button
                              onClick={() => toggleItem(itemId)}
                              className="w-full text-left"
                            >
                              <CardContent className="p-4 sm:p-5 flex items-start gap-4">
                                <div className={`flex-shrink-0 w-8 h-8 rounded-full ${colors.icon} flex items-center justify-center`}>
                                  <span className={`text-sm font-semibold ${colors.text}`}>
                                    {item.q.match(/Q(\d+)/)?.[1] || idx + 1}
                                  </span>
                                </div>
                                <div className="flex-1">
                                  <h3 className="font-medium text-slate-900 leading-relaxed">
                                    {item.q.replace(/^Q\d+：/, '')}
                                  </h3>
                                </div>
                                <div className={`flex-shrink-0 ${colors.text}`}>
                                  {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                                </div>
                              </CardContent>
                            </button>

                            {isOpen && (
                              <div className={`px-5 pb-5 pt-0 border-t ${colors.border} mt-0`}>
                                <div className="pt-4 text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                                  {item.a}
                                </div>
                              </div>
                            )}
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-[#1a2744] to-[#1e3a5f] text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">
            没找到您的问题？
          </h2>
          <p className="mt-4 text-slate-300 text-lg">
            直接联系我们，专业顾问为您一对一解答
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-10 py-6 text-base rounded-full shadow-xl shadow-amber-500/20">
              <Link href="/contact">
                <MessageCircle className="mr-2 h-4 w-4" />
                立即咨询
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base rounded-full">
              <Link href="tel:18980020731">
                <Phone className="mr-2 h-4 w-4" />
                孙凤 189-8002-0731
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
