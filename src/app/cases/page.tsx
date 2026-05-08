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
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/scroll-animation';

const cases = [
  {
    icon: TrendingUp,
    title: '集团化新消费饮品龙头企业',
    industry: '新消费饮品',
    revenue: '营收破亿',
    period: '2022年4月至今',
    challenge: '客户为低度饮品行业链主企业，旗下10多家子公司，产品覆盖全国并出口多国，面临多子公司账务混乱、融资合规不足等难题。',
    solution: '2022年4月起，孙凤出任客户财务总监，全面梳理企业历史账务、搭建标准化集团财税体系、提供专业融资合规支撑，助力企业成功获得大额融资。后续伴随企业全渠道扩张，营收顺利突破亿元。',
    results: ['全渠道扩张营收破亿', '成功获得大额融资', '全程零税务风险', '零稽查处罚记录'],
    gradient: 'linear-gradient(135deg, #1a3a5c, #0a1628)',
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
    results: ['多年纳税信用A级', '零税务处罚', '零稽查风险', '支撑资质升级与市场拓展'],
    gradient: 'linear-gradient(135deg, #d4a853, #b8913a)',
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
    results: ['连续4年全面审计', '5亿+营收合规安全', '内控制度落地搭建', '支撑资质维护与业务扩张'],
    gradient: 'linear-gradient(135deg, #1a3a5c, #0a1628)',
    image: '/cases/media.jpg',
    highlight: '字节系全牌照服务商，5亿+营收合规护航',
  },
  {
    icon: Search,
    title: '内蒙古矿产项目财税尽调',
    industry: '矿产能源',
    revenue: '规避2.8亿投资损失',
    period: '专项尽调',
    challenge: '某投资方计划对内蒙古某矿产项目进行大额投资，该项目前期已由被投资方自行投入1.2亿元，后续投资方仍需追加投资2.8亿元，整体投资规模预计达4亿元。',
    solution: '成都市柯洋税务师事务所快速组建专项尽调团队，通过跨区域实地走访、原始凭证逐笔核查、成本明细穿透核验、税务合规全面审查、资金流向全程追溯等全维度核查方式，精准发现项目存在成本虚增、部分支出无合规凭证、资金流向存疑、财税核算不规范等重大风险点。',
    results: ['发现成本虚增问题', '识别无合规凭证支出', '成功规避2.8亿追加投资损失', '规避1.2亿前期投入连带风险'],
    gradient: 'linear-gradient(135deg, #d4a853, #b8913a)',
    image: '/cases/mining-new.jpg',
    highlight: '4亿级投资尽调，成功规避2.8亿追加损失',
  },
];

export default function CasesPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="relative overflow-hidden pt-28 pb-20 sm:pb-28" style={{ backgroundColor: '#0a1628' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(212,168,83,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,83,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white font-[family-name:var(--font-noto-serif-sc)]">
              标杆案例
            </h1>
            <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto" style={{ color: '#9ca3af' }}>
              近 30 年实战经验，亿元级企业服务案例
              <br className="hidden sm:block" />
              覆盖建筑、新消费、文化传媒、矿产能源等多行业
            </p>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: '#f8f7f4' }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-12">
            {cases.map((caseItem, index) => {
              const Icon = caseItem.icon;
              return (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="overflow-hidden rounded-2xl bg-white" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                    <div className="grid lg:grid-cols-2">
                      {/* Left - Case Image */}
                      <div className="relative min-h-[260px] lg:min-h-[400px]">
                        <Image src={caseItem.image} alt={caseItem.industry} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6 z-10">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="rounded-xl p-2.5" style={{ backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)' }}>
                              <Icon className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-sm font-medium text-white px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)' }}>
                              {caseItem.industry}
                            </span>
                          </div>
                          <h3 className="text-xl lg:text-2xl font-bold text-white font-[family-name:var(--font-noto-serif-sc)] mb-2">
                            {caseItem.title}
                          </h3>
                          <div className="flex items-center gap-2">
                            <DollarSign className="h-4 w-4 text-[#d4a853]" />
                            <span className="text-sm font-semibold text-[#d4a853]">{caseItem.revenue}</span>
                          </div>
                        </div>
                      </div>

                      {/* Right - Details */}
                      <div className="p-8 lg:p-10">
                        <div className="space-y-6">
                          {/* Period */}
                          <div className="flex items-center gap-2" style={{ color: '#0a1628' }}>
                            <Users className="h-5 w-5" style={{ color: '#1a3a5c' }} />
                            <span className="font-medium">合作周期：{caseItem.period}</span>
                          </div>

                          {/* Challenge */}
                          <div>
                            <h4 className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: '#6b7280' }}>客户挑战</h4>
                            <p style={{ color: '#374151' }}>{caseItem.challenge}</p>
                          </div>

                          {/* Solution */}
                          <div>
                            <h4 className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: '#6b7280' }}>柯洋方案</h4>
                            <p style={{ color: '#374151' }}>{caseItem.solution}</p>
                          </div>

                          {/* Results */}
                          <div>
                            <h4 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#6b7280' }}>服务成果</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {caseItem.results.map((result, i) => (
                                <div key={i} className="flex items-center gap-3">
                                  <div className="rounded-full p-1 shrink-0" style={{ backgroundColor: 'rgba(212,168,83,0.15)' }}>
                                    <Shield className="h-4 w-4" style={{ color: '#b8913a' }} />
                                  </div>
                                  <span className="text-sm" style={{ color: '#374151' }}>{result}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Highlight */}
                          <div className="pt-4" style={{ borderTop: '1px solid #e5e7eb' }}>
                            <p className="font-medium italic" style={{ color: '#d4a853' }}>
                              &ldquo;{caseItem.highlight}&rdquo;
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: '#0a1628' }}>
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(212,168,83,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,83,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { num: '30+', label: '年实战经验' },
              { num: '1000+', label: '服务企业' },
              { num: '5亿+', label: '服务营收体量' },
              { num: '0', label: '稽查处罚记录' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-bold mb-2 font-[family-name:var(--font-noto-serif-sc)]" style={{ color: '#d4a853' }}>{stat.num}</div>
                <div style={{ color: 'rgba(255,255,255,0.7)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: '#f8f7f4' }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-[family-name:var(--font-noto-serif-sc)]" style={{ color: '#0a1628' }}>
                成为下一个标杆案例
              </h2>
              <p className="mx-auto mt-6 text-lg" style={{ color: '#6b7280' }}>
                联系柯洋，让专业团队为您的企业保驾护航。
              </p>
              <div className="mt-10">
                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium rounded-full gold-gradient gold-glow transition-all duration-300 hover:scale-105" style={{ color: '#0a1628' }}>
                  立即咨询 <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
