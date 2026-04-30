'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  TrendingUp,
  Building2,
  Film,
  Search,
  Shield,
  Users,
  ArrowRight,
  AlertTriangle,
  DollarSign,
} from 'lucide-react';
import Link from 'next/link';

const cases = [
  {
    icon: TrendingUp,
    title: '集团化新消费饮品龙头企业',
    industry: '新消费饮品',
    revenue: '营收破亿',
    period: '2022年至今',
    challenge: '低度饮品行业链主企业，旗下 15 家子公司，产品全国销售并出口多国，集团化运营带来复杂财税挑战。',
    solution: '孙凤出任财务总监，全面梳理账务、搭建集团财税体系、提供融资合规支撑，助力企业完成大额融资。',
    results: [
      '2024—2025 年全渠道扩张',
      '2025 年营收突破亿元',
      '全程保持零税务风险',
      '零稽查处罚记录',
    ],
    color: 'from-pink-500 to-rose-600',
    highlight: '从融资合规到营收破亿，全程零风险',
    decorativeSvg: (
      <svg className="absolute right-6 top-6 w-24 h-24 opacity-10" viewBox="0 0 100 100" fill="none">
        <circle cx="30" cy="50" r="20" stroke="white" strokeWidth="2" />
        <circle cx="60" cy="35" r="15" stroke="white" strokeWidth="2" />
        <circle cx="75" cy="60" r="18" stroke="white" strokeWidth="2" />
        <line x1="45" y1="42" x2="55" y2="38" stroke="white" strokeWidth="1.5" />
        <line x1="42" y1="58" x2="60" y2="58" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    icon: Building2,
    title: '亿元级建筑实体企业',
    industry: '建筑工程',
    revenue: '营收约 2 亿元',
    period: '2010年至今',
    challenge: '拥有多项总承包壹级资质企业，2010 年成立，2025 年营收约 2 亿元，需要全程专业财税护航。',
    solution: '搭建项目制核算、税务风控与内控体系，连续出具汇算清缴鉴证报告，全方位支撑资质升级。',
    results: [
      '15 年纳税信用 A 级',
      '零税务处罚',
      '零稽查风险',
      '支撑多项壹级资质维护',
    ],
    color: 'from-amber-500 to-orange-600',
    highlight: '15 年零风险，服务亿元级建筑企业',
    decorativeSvg: (
      <svg className="absolute right-6 top-6 w-24 h-24 opacity-10" viewBox="0 0 100 100" fill="none">
        <rect x="10" y="40" width="25" height="50" rx="2" stroke="white" strokeWidth="2" />
        <rect x="40" y="20" width="25" height="70" rx="2" stroke="white" strokeWidth="2" />
        <rect x="70" y="50" width="20" height="40" rx="2" stroke="white" strokeWidth="2" />
        <polygon points="5,40 22,15 40,40" stroke="white" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
  {
    icon: Film,
    title: '文化传媒集团企业（数字营销）',
    industry: '文化传媒',
    revenue: '营收超 5 亿元',
    period: '2021—2024年',
    challenge: '字节跳动全牌照服务商、抖音入海业务资质持有者，营收体量大，需要全面合规审计支撑。',
    solution: '提供 2021—2024 年度全面内部审计，核查账务合规性、收支真实性、税务风险点，出具权威审计报告。',
    results: [
      '连续 4 年全面审计',
      '5 亿+ 营收合规安全',
      '内控制度落地搭建',
      '支撑资质维护与业务扩张',
    ],
    color: 'from-purple-500 to-indigo-600',
    highlight: '字节系全牌照服务商，5 亿+ 营收合规护航',
    decorativeSvg: (
      <svg className="absolute right-6 top-6 w-24 h-24 opacity-10" viewBox="0 0 100 100" fill="none">
        <rect x="10" y="20" width="80" height="55" rx="4" stroke="white" strokeWidth="2" />
        <polygon points="40,35 40,60 60,47.5" fill="white" opacity="0.5" />
      </svg>
    ),
  },
  {
    icon: Search,
    title: '内蒙古矿产项目财税尽调',
    industry: '矿产能源',
    revenue: '规避上亿投资损失',
    period: '2024年底',
    challenge: '某投资方计划对内蒙古某矿产项目进行 3.7 亿元大额投资，项目前期已投入 1.1834 亿元，后续仍需投入 2–2.5 亿元。',
    solution: '组建专项尽调团队，通过跨区域实地走访、原始凭证核查、成本明细穿透、税务合规审查、资金流向追溯等全维度核查，出具正式财税尽调报告。',
    results: [
      '发现成本虚增问题',
      '识别无合规凭证支出',
      '追溯存疑资金流向',
      '出具专业尽调报告',
    ],
    color: 'from-emerald-500 to-teal-600',
    highlight: '亿元级投资风险规避，避免上亿损失',
    decorativeSvg: (
      <svg className="absolute right-6 top-6 w-24 h-24 opacity-10" viewBox="0 0 100 100" fill="none">
        <polygon points="50,10 85,40 75,90 25,90 15,40" stroke="white" strokeWidth="2" fill="none" />
        <line x1="50" y1="10" x2="50" y2="90" stroke="white" strokeWidth="1" />
        <line x1="15" y1="40" x2="85" y2="40" stroke="white" strokeWidth="1" />
      </svg>
    ),
  },
];

export default function CasesPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-foreground">
              标杆案例
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              近 30 年实战经验，亿元级企业服务案例
              <br className="hidden sm:block" />
              覆盖建筑、新消费、文化传媒、矿产能源等多行业
            </p>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-12">
            {cases.map((caseItem, index) => {
              const Icon = caseItem.icon;
              return (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-5">
                      {/* Left - Case Info */}
                      <div className={`lg:col-span-2 bg-gradient-to-br ${caseItem.color} p-8 lg:p-12 text-white relative overflow-hidden`}>
                        {caseItem.decorativeSvg}
                        <div className="flex items-center gap-3 mb-6">
                          <div className="rounded-xl bg-white/20 p-3">
                            <Icon className="h-8 w-8 text-white" />
                          </div>
                          <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                            {caseItem.industry}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">
                          {caseItem.title}
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-white/90">
                            <DollarSign className="h-5 w-5" />
                            <span>{caseItem.revenue}</span>
                          </div>
                          <div className="flex items-center gap-2 text-white/90">
                            <Users className="h-5 w-5" />
                            <span>合作周期：{caseItem.period}</span>
                          </div>
                        </div>
                        <div className="mt-8 pt-6 border-t border-white/20">
                          <p className="text-white/90 font-medium italic">
                            "{caseItem.highlight}"
                          </p>
                        </div>
                      </div>

                      {/* Right - Details */}
                      <div className="lg:col-span-3 p-8 lg:p-12">
                        <div className="space-y-8">
                          <div>
                            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                              客户挑战
                            </h4>
                            <p className="text-foreground leading-relaxed">
                              {caseItem.challenge}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                              柯洋方案
                            </h4>
                            <p className="text-foreground leading-relaxed">
                              {caseItem.solution}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                              服务成果
                            </h4>
                            <div className="grid grid-cols-2 gap-4">
                              {caseItem.results.map((result, i) => (
                                <div key={i} className="flex items-center gap-3">
                                  <div className="rounded-full bg-emerald-100 p-1">
                                    <Shield className="h-4 w-4 text-emerald-600" />
                                  </div>
                                  <span className="text-sm text-foreground">{result}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-400 mb-2">30+</div>
              <div className="text-white/80">年实战经验</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-400 mb-2">1000+</div>
              <div className="text-white/80">服务企业</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-400 mb-2">5亿+</div>
              <div className="text-white/80">服务营收体量</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-400 mb-2">0</div>
              <div className="text-white/80">稽查处罚记录</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              成为下一个标杆案例
            </h2>
            <p className="mx-auto mt-6 text-lg text-primary-foreground/90">
              联系柯洋，让专业团队为您的企业保驾护航。
            </p>
            <div className="mt-10">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  立即咨询 <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
