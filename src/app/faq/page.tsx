'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ChevronDown,
  Building2,
  Calculator,
  FileText,
  Settings,
  HelpCircle,
  CheckCircle2,
  Phone,
  MessageCircle,
  ChevronsUpDown,
} from 'lucide-react';

// FAQ 数据 - 5大类21个问题
const faqData = [
  {
    category: '企业财税基础类',
    icon: Building2,
    color: 'blue',
    questions: [
      {
        q: '新公司成立后，财税方面需要做哪些基础工作？',
        a: '新公司完成工商注册后，需及时办理税务登记、银行账户备案、税种核定，并按规定建立会计账簿，按期完成纳税申报，避免逾期产生风险。',
      },
      {
        q: '企业注册地址在财税上有哪些注意事项？',
        a: '注册地址需真实可联系，避免虚拟地址、异常地址导致税务核查风险；部分区域有行业限制与税源管理要求，需提前确认合规性。',
      },
      {
        q: '新办企业如何选择小规模纳税人或一般纳税人？',
        a: '主要根据客户类型、进项发票取得情况、行业税负水平综合判断。小规模纳税人征收率低、申报简单；一般纳税人可抵扣进项，适合规模较大、上下游规范的企业。',
      },
      {
        q: '企业长期零申报有什么风险？',
        a: '长期零申报易被税务系统列为异常监控对象，可能引发核查、纳税评估，影响纳税信用等级，建议根据实际经营情况合规申报。',
      },
    ],
  },
  {
    category: '小规模纳税人财税类',
    icon: Calculator,
    color: 'green',
    questions: [
      {
        q: '小规模纳税人最新税收优惠政策有哪些？',
        a: '小规模纳税人可按规定享受增值税减按规定征收率计税、附加税费减免等优惠，具体以国家税务总局及四川省税务局最新公告为准。',
      },
      {
        q: '小规模纳税人需要每月做账报税吗？',
        a: '小规模纳税人通常按季申报增值税及附加税费，但会计账簿需按月规范建立，确保账务真实、完整、可查。',
      },
      {
        q: '小规模纳税人可以开具专票吗？有哪些注意点？',
        a: '可以按规定自行开具或代开增值税专用发票，专票部分不享受相关免税优惠，需准确核算销售额并足额申报。',
      },
      {
        q: '小规模纳税人常见账务误区有哪些？',
        a: '常见误区包括：收入不入账、成本票据不合规、公私款混用、费用凭证缺失等，易导致账务混乱与税务风险。',
      },
    ],
  },
  {
    category: '一般纳税人财税类',
    icon: FileText,
    color: 'purple',
    questions: [
      {
        q: '一般纳税人进项抵扣需要注意什么？',
        a: '需取得合法合规的增值税扣税凭证，业务真实、三流一致，按规定时限认证抵扣，不得用于免税项目、集体福利等不得抵扣情形。',
      },
      {
        q: '一般纳税人税负偏高，如何实现合规优化？',
        a: '在合法合规前提下，通过规范成本核算、充分享受政策优惠、优化业务链条、完善内控流程等方式实现税负合理管控。',
      },
      {
        q: '增值税申报异常常见原因有哪些？',
        a: '常见原因包括：进项与销项比对不符、未开票收入未申报、红字发票处理错误、税款计算错误、系统数据不同步等。',
      },
      {
        q: '一般纳税人如何保持长期税务合规？',
        a: '建立规范账务体系，按期自查风险，留存完整凭证资料，及时学习最新政策，必要时引入专业财税机构进行风险体检。',
      },
    ],
  },
  {
    category: '特殊行业财税类',
    icon: Settings,
    color: 'orange',
    questions: [
      {
        q: '建筑企业异地项目财税需要注意什么？',
        a: '需按规定办理跨区域涉税事项报告，在项目地预缴税款，规范分包、材料、机械租赁等成本凭证，避免项目账混乱引发风险。',
      },
      {
        q: '文化传媒高营收企业如何做好财税合规？',
        a: '重点规范收入确认、成本列支、发票管理、个税与社保合规，建立内控体系，配合年度审计，确保大额营收全程可追溯。',
      },
      {
        q: '人力资源公司财税风险主要集中在哪些方面？',
        a: '主要风险点包括：业务真实性、代发工资合规性、社保个税匹配、发票开具与业务一致性、差额计税适用是否准确。',
      },
      {
        q: '股东要求查账，企业需要提前准备哪些资料？',
        a: '需准备完整会计账簿、记账凭证、银行流水、合同协议、纳税申报表、发票存根等，确保账务真实规范，避免争议风险。',
      },
      {
        q: '大额投资前为什么要做财税尽调？',
        a: '财税尽调可提前识别隐性负债、税务风险、账务虚假、违规操作等问题，避免投资后出现重大损失与连带法律风险。',
      },
    ],
  },
  {
    category: '如何选择专业财税服务机构',
    icon: HelpCircle,
    color: 'indigo',
    questions: [
      {
        q: '选择财税服务，只看价格合理吗？',
        a: '不合理。低价往往伴随简化账务、资料缺失、风险后置，企业更应关注机构资质、专业能力、风控经验与服务规范性。',
      },
      {
        q: '税务师事务所和普通代账公司有什么区别？',
        a: '税务师事务所具备执业资质，侧重税务合规、风险管控、审计尽调、高端财税规划；普通代账多以基础记账报税为主，专业深度不同。',
      },
      {
        q: '如何判断一家财税机构是否专业靠谱？',
        a: '可查看：执业资质、团队背景、行业案例、服务流程、风控体系、客户口碑，尤其关注是否有大额项目实战经验。',
      },
      {
        q: '企业什么时候需要引入外部财税专家？',
        a: '账务混乱、历史遗留问题多、面临稽查核查、融资上市、大额投资、跨区域经营、集团化管理时，建议及时引入专业财税团队。',
      },
    ],
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; icon: string; hoverBg: string }> = {
  blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', icon: 'bg-blue-100', hoverBg: 'hover:bg-blue-50' },
  green: { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200', icon: 'bg-emerald-100', hoverBg: 'hover:bg-emerald-50' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200', icon: 'bg-purple-100', hoverBg: 'hover:bg-purple-50' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200', icon: 'bg-orange-100', hoverBg: 'hover:bg-orange-50' },
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-200', icon: 'bg-indigo-100', hoverBg: 'hover:bg-indigo-50' },
};

// 统计总问题数
const totalQuestions = faqData.reduce((sum, cat) => sum + cat.questions.length, 0);

// FAQ 列表子组件
function FAQList({
  activeData,
  activeCategory,
  openItems,
  toggleItem,
}: {
  activeData: (typeof faqData)[number];
  activeCategory: string;
  openItems: Set<string>;
  toggleItem: (id: string) => void;
}) {
  const Icon = activeData.icon;
  const colors = colorMap[activeData.color];

  return (
    <div className="space-y-4">
      {/* 分类标题（桌面端显示） */}
      <div className="hidden lg:flex items-center gap-3 p-4 rounded-xl bg-slate-50">
        <Icon className={`h-6 w-6 ${colors.text}`} />
        <h2 className="text-lg font-semibold text-slate-900">{activeCategory}</h2>
        <Badge variant="outline" className={`ml-auto ${colors.border} ${colors.text}`}>
          {activeData.questions.length} 个问题
        </Badge>
      </div>

      {/* 问题卡片 */}
      <div className="space-y-3">
        {activeData.questions.map((item, idx) => {
          const itemId = `${activeCategory}-${idx}`;
          const isOpen = openItems.has(itemId);

          return (
            <Card
              key={idx}
              className={`border-2 transition-all duration-300 overflow-hidden ${
                isOpen ? `${colors.border} shadow-md` : 'border-slate-100 hover:border-slate-200'
              }`}
            >
              <button
                onClick={() => toggleItem(itemId)}
                className="w-full text-left"
              >
                <CardContent className="p-5 sm:p-6 flex items-start gap-4">
                  <div className={`flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full ${colors.icon} flex items-center justify-center transition-colors duration-300 ${isOpen ? colors.text : ''}`}>
                    <span className={`text-sm font-semibold ${isOpen ? colors.text : 'text-slate-500'}`}>
                      {idx + 1}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-base sm:text-lg leading-relaxed transition-all duration-300 ${
                      isOpen ? 'font-bold text-slate-900' : 'font-medium text-slate-800'
                    }`}>
                      {item.q}
                    </h3>
                  </div>
                  <div className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className={`h-5 w-5 transition-colors duration-300 ${isOpen ? colors.text : 'text-slate-400'}`} />
                  </div>
                </CardContent>
              </button>

              {/* 答案区域 - 平滑展开 */}
              <div
                className="transition-all duration-300 ease-in-out overflow-hidden"
                style={{
                  maxHeight: isOpen ? 500 : 0,
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <div className={`px-5 sm:px-6 pb-5 sm:pb-6 pt-0 border-t ${colors.border}`}>
                  <div className="pt-4">
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${colors.bg} ${colors.text} text-xs font-medium mb-3`}>
                      <CheckCircle2 className="h-3 w-3" />
                      柯洋税所解答
                    </div>
                    <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [activeCategory, setActiveCategory] = useState<string>(faqData[0].category);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const activeData = faqData.find((cat) => cat.category === activeCategory);
  const ActiveIcon = activeData?.icon;
  const activeColors = activeData ? colorMap[activeData.color] : null;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-[#1a2744] to-[#1e3a5f] text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-white/10 text-amber-300 border border-amber-400/30">
            <CheckCircle2 className="h-3.5 w-3.5 mr-1.5" />
            专业解答
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            常见问题
            <span className="block mt-2 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              快速解答
            </span>
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
            整理了企业主最常问的{totalQuestions}个问题，涵盖注册公司、代理记账、税务规划等全流程
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-8 py-5 rounded-full shadow-lg text-base">
              <Link href="/contact">
                <MessageCircle className="h-4 w-4 mr-2" />
                在线咨询
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-white/30 bg-transparent text-white hover:bg-white/10 px-8 py-5 rounded-full text-base">
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
              { num: String(totalQuestions), label: '精选问题' },
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
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* 移动端：顶部下拉菜单 */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-full flex items-center justify-between px-5 py-4 bg-slate-50 rounded-xl border-2 border-slate-200 text-left"
              >
                <div className="flex items-center gap-3">
                  {ActiveIcon && activeColors && (
                    <>
                      <ActiveIcon className={`h-5 w-5 ${activeColors.text}`} />
                      <span className="font-semibold text-slate-900 text-base">{activeCategory}</span>
                    </>
                  )}
                </div>
                <ChevronsUpDown className="h-5 w-5 text-slate-400" />
              </button>
              {mobileMenuOpen && (
                <div className="mt-2 bg-white rounded-xl border-2 border-slate-200 shadow-lg overflow-hidden">
                  {faqData.map((cat) => {
                    const Icon = cat.icon;
                    const colors = colorMap[cat.color];
                    return (
                      <button
                        key={cat.category}
                        onClick={() => {
                          setActiveCategory(cat.category);
                          setMobileMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-5 py-4 text-left transition-colors ${
                          activeCategory === cat.category
                            ? `${colors.bg} ${colors.text} font-semibold`
                            : 'text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <Icon className="h-5 w-5 flex-shrink-0" />
                        <span className="text-base">{cat.category}</span>
                        <Badge variant="outline" className={`ml-auto ${colors.border} ${colors.text} text-xs`}>
                          {cat.questions.length}
                        </Badge>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 桌面端：左侧分类导航 */}
            <div className="hidden lg:block lg:w-64 flex-shrink-0">
              <div className="sticky top-24">
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">知识分类</h3>
                <nav className="space-y-1">
                  {faqData.map((cat) => {
                    const Icon = cat.icon;
                    const colors = colorMap[cat.color];
                    return (
                      <button
                        key={cat.category}
                        onClick={() => setActiveCategory(cat.category)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                          activeCategory === cat.category
                            ? `${colors.bg} ${colors.text} font-medium`
                            : 'text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        <Icon className="h-5 w-5 flex-shrink-0" />
                        <span className="text-sm">{cat.category}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* FAQ 问答列表 */}
            <div className="flex-1">
              {activeData && <FAQList activeData={activeData} activeCategory={activeCategory} openItems={openItems} toggleItem={toggleItem} />}
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
            <Button asChild variant="outline" size="lg" className="border-2 border-white/30 bg-transparent text-white hover:bg-white/10 px-8 py-6 text-base rounded-full">
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
