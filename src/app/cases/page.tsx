'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import {
  TrendingUp,
  Building2,
  Film,
  Search,
  Shield,
  Users,
  ArrowRight,
  DollarSign,
} from 'lucide-react';
import Link from 'next/link';

const cases = [
  {
    icon: TrendingUp,
    title: '集团化新消费饮品龙头企业',
    industry: '新消费饮品',
    revenue: '营收破亿',
    period: '2022年4月至今',
    challenge: '客户为低度饮品行业链主企业，旗下10多家子公司，产品覆盖全国并出口多国，面临多子公司账务混乱、融资合规不足等难题。',
    solution: '2022年4月起，孙凤出任客户财务总监，全面梳理企业历史账务、搭建标准化集团财税体系、提供专业融资合规支撑，助力企业成功获得大额融资。后续伴随企业全渠道扩张，营收顺利突破亿元。',
    results: [
      '全渠道扩张营收破亿',
      '成功获得大额融资',
      '全程零税务风险',
      '零稽查处罚记录',
    ],
    color: 'from-pink-500 to-rose-600',
    image: '/cases/beverage.jpg',
    highlight: '从融资合规到营收破亿，合规与发展双提升',
  },
  {
    icon: Building2,
    title: '亿元级建筑实体企业',
    industry: '建筑工程',
    revenue: '营收近4亿元',
    period: '2010年至今',
    challenge: '客户2010年成立，深耕纯实体经营，拥有多项总承包壹级资质，营收规模常年稳定在亿元级别，峰值近4亿元，核心需求是长期税务合规与资质维护。',
    solution: '柯洋税务自企业成立起全程提供财税服务，搭建项目制核算体系、完善税务风控与内控流程，全方位支撑企业资质升级与市场拓展。',
    results: [
      '多年纳税信用A级',
      '零税务处罚',
      '零稽查风险',
      '支撑资质升级与市场拓展',
    ],
    color: 'from-amber-500 to-orange-600',
    image: '/cases/construction.jpg',
    highlight: '从成立起全程护航，多年零风险稳健经营',
  },
  {
    icon: Film,
    title: '文化传媒集团企业（数字营销）',
    industry: '文化传媒',
    revenue: '营收超5亿元',
    period: '2021—2024年',
    challenge: '客户为字节跳动全牌照服务商、抖音入海业务资质持有者，营收规模长期稳定在5亿元以上，需保障大额营收合规性与资质稳定。',
    solution: '柯洋税务为其提供连续四年的全面内部审计服务，细致核查账务真实性、合规性及各类税务风险点，出具权威审计报告，并搭建可落地的内部控制制度。',
    results: [
      '连续4年全面审计',
      '5亿+营收合规安全',
      '内控制度落地搭建',
      '支撑资质维护与业务扩张',
    ],
    color: 'from-purple-500 to-indigo-600',
    image: '/cases/media.jpg',
    highlight: '字节系全牌照服务商，5亿+营收合规护航',
  },
  {
    icon: Search,
    title: '内蒙古矿产项目财税尽调',
    industry: '矿产能源',
    revenue: '规避2.8亿投资损失',
    period: '专项尽调',
    challenge: '某投资方计划对内蒙古某矿产项目进行大额投资，该项目前期已由被投资方自行投入1.2亿元，后续投资方仍需追加投资2.8亿元，整体投资规模预计达4亿元，一旦把控不当，将面临巨额投资损失与合规风险。',
    solution: '成都市柯洋税务师事务所快速组建专项尽调团队，通过跨区域实地走访、原始凭证逐笔核查、成本明细穿透核验、税务合规全面审查、资金流向全程追溯等全维度核查方式，精准发现项目存在成本虚增、部分支出无合规凭证、资金流向存疑、财税核算不规范等重大风险点。',
    results: [
      '发现成本虚增问题',
      '识别无合规凭证支出',
      '成功规避2.8亿追加投资损失',
      '规避1.2亿前期投入连带风险',
    ],
    color: 'from-emerald-500 to-teal-600',
    image: '/cases/mining.jpg',
    highlight: '4亿级投资尽调，成功规避2.8亿追加损失',
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
                    <div className="grid lg:grid-cols-2">
                      {/* Left - Case Image */}
                      <div className="relative min-h-[320px] lg:min-h-[480px]">
                        <Image
                          src={caseItem.image}
                          alt={caseItem.industry}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/10" />
                        <div className="absolute bottom-6 left-6 right-6 z-10 lg:hidden">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="rounded-xl bg-white/20 backdrop-blur-sm p-2.5">
                              <Icon className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-sm font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white">
                              {caseItem.industry}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-white">
                            {caseItem.title}
                          </h3>
                        </div>
                      </div>

                      {/* Right - All Details */}
                      <div className="p-8 lg:p-10">
                        <div className="space-y-6">
                          {/* Title & Meta (desktop) */}
                          <div className="hidden lg:block">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="rounded-xl bg-primary/10 p-2.5">
                                <Icon className="h-6 w-6 text-primary" />
                              </div>
                              <span className="text-sm font-medium bg-primary/10 px-3 py-1 rounded-full text-primary">
                                {caseItem.industry}
                              </span>
                            </div>
                            <h3 className="text-2xl font-bold text-foreground">
                              {caseItem.title}
                            </h3>
                          </div>

                          {/* Revenue & Period */}
                          <div className="flex flex-wrap items-center gap-4">
                            <div className="flex items-center gap-2 text-foreground">
                              <DollarSign className="h-5 w-5 text-amber-500" />
                              <span className="font-semibold">{caseItem.revenue}</span>
                            </div>
                            <div className="flex items-center gap-2 text-foreground">
                              <Users className="h-5 w-5 text-primary" />
                              <span>合作周期：{caseItem.period}</span>
                            </div>
                          </div>

                          {/* Challenge */}
                          <div>
                            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                              客户挑战
                            </h4>
                            <p className="text-foreground leading-relaxed">
                              {caseItem.challenge}
                            </p>
                          </div>

                          {/* Solution */}
                          <div>
                            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                              柯洋方案
                            </h4>
                            <p className="text-foreground leading-relaxed">
                              {caseItem.solution}
                            </p>
                          </div>

                          {/* Results */}
                          <div>
                            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                              服务成果
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {caseItem.results.map((result, i) => (
                                <div key={i} className="flex items-center gap-3">
                                  <div className="rounded-full bg-emerald-100 p-1 shrink-0">
                                    <Shield className="h-4 w-4 text-emerald-600" />
                                  </div>
                                  <span className="text-sm text-foreground">{result}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Highlight */}
                          <div className="pt-4 border-t border-border">
                            <p className="text-primary font-medium italic">
                              "{caseItem.highlight}"
                            </p>
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

