'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Building,
  Coffee,
  Film,
  Scale,
  ShoppingCart,
  Factory,
  ArrowRight,
  Gem,
} from 'lucide-react';
import Link from 'next/link';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/scroll-animation';

const industries = [
  {
    icon: Building,
    title: '建筑工程行业',
    description: '专注建筑企业全流程财税服务，保障资质维护与项目合规。',
    services: ['项目制核算与成本归集', '跨区域预缴税务处理', '资质维护与升级支持', '汇算清缴鉴证报告', '长期税务风险管控'],
    gradient: 'linear-gradient(135deg, #1a3a5c, #0a1628)',
    accentColor: '#1a3a5c',
  },
  {
    icon: Coffee,
    title: '新消费 / 集团企业',
    description: '支撑多子公司集团化运营，助力融资扩张与合规管控。',
    services: ['多子公司并账管理', '集团管控架构搭建', '融资尽调财税支持', '全渠道营收合规', '股权架构优化'],
    gradient: 'linear-gradient(135deg, #d4a853, #b8913a)',
    accentColor: '#d4a853',
  },
  {
    icon: Film,
    title: '文化传媒 / 数字营销',
    description: '保障字节系等大型平台资质合规，支撑业务高速扩张。',
    services: ['年度全面内部审计', '合规风险全面排查', '资质维护与申请支持', '进出口财税处理', '内控制度搭建'],
    gradient: 'linear-gradient(135deg, #1a3a5c, #0a1628)',
    accentColor: '#1a3a5c',
  },
  {
    icon: Gem,
    title: '矿产能源行业',
    description: '专注大额投资项目财税尽调，帮您规避上亿投资损失。',
    services: ['大额项目财税尽调', '成本穿透核验', '投资风险识别', '资金流向追溯', '合规性审查报告'],
    gradient: 'linear-gradient(135deg, #d4a853, #b8913a)',
    accentColor: '#d4a853',
  },
  {
    icon: Scale,
    title: '律所 / 电商 / 制造等通用行业',
    description: '标准化合规体系搭建，适配多行业企业通用需求。',
    services: ['合规体系建设', '成本管控优化', '审计鉴证服务', '内控流程优化', '常年顾问支持'],
    gradient: 'linear-gradient(135deg, #1a3a5c, #0a1628)',
    accentColor: '#1a3a5c',
  },
];

export default function SolutionsPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="relative overflow-hidden pt-28 pb-20 sm:pb-28" style={{ backgroundColor: '#0a1628' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(212,168,83,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,83,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white font-[family-name:var(--font-noto-serif-sc)]">
              行业解决方案
            </h1>
            <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto" style={{ color: '#9ca3af' }}>
              近 30 年实战经验，覆盖建筑、新消费、文化传媒、矿产能源、律所、电商、制造等
              <br className="hidden sm:block" />
              多领域实体企业，提供行业专属财税解决方案，含亿元级投资风控。
            </p>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: '#f8f7f4' }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-16">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              const isEven = index % 2 === 1;
              return (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className={`rounded-2xl overflow-hidden ${isEven ? '' : ''}`} style={isEven ? { backgroundColor: '#ffffff' } : { backgroundColor: '#ffffff' }}>
                    <div className="p-8 lg:p-12">
                      <div className={`grid gap-8 lg:grid-cols-2 ${isEven ? '' : ''}`}>
                        <div className={`flex flex-col relative overflow-hidden ${isEven ? 'lg:order-2' : ''}`}>
                          <div className="inline-flex rounded-2xl p-5 w-fit mb-6" style={{ background: industry.gradient }}>
                            <Icon className="h-10 w-10 text-white" />
                          </div>
                          <h3 className="text-2xl lg:text-3xl font-bold mb-4 font-[family-name:var(--font-noto-serif-sc)]" style={{ color: '#0a1628' }}>
                            {industry.title}
                          </h3>
                          <p className="text-lg mb-8" style={{ color: '#6b7280' }}>
                            {industry.description}
                          </p>
                          <div className="mt-auto">
                            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white rounded-lg transition-all duration-300" style={{ background: industry.gradient }}>
                              咨询此行业方案 <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </div>
                        </div>
                        <div className={isEven ? 'lg:order-1' : ''}>
                          <div className="rounded-2xl p-6" style={{ backgroundColor: '#f8f7f4' }}>
                            <h4 className="font-semibold mb-4 text-lg font-[family-name:var(--font-noto-serif-sc)]" style={{ color: '#0a1628' }}>
                              核心服务内容
                            </h4>
                            <ul className="space-y-4">
                              {industry.services.map((service, i) => (
                                <li key={i} className="flex items-start gap-3">
                                  <div className="rounded-full p-1 mt-0.5 flex-shrink-0" style={{ backgroundColor: 'rgba(212,168,83,0.15)' }}>
                                    <div className="h-2 w-2 rounded-full" style={{ backgroundColor: industry.accentColor }} />
                                  </div>
                                  <span style={{ color: '#6b7280' }}>{service}</span>
                                </li>
                              ))}
                            </ul>
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

      {/* Industry Coverage */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: '#0a1628' }}>
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(212,168,83,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,83,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-white font-[family-name:var(--font-noto-serif-sc)]">
                服务行业覆盖
              </h2>
              <p className="text-lg mb-12" style={{ color: '#9ca3af' }}>
                除上述四大核心行业外，柯洋税所同时还服务众多其他行业
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  '餐饮连锁', '教育培训', '医疗器械', '科技互联网',
                  '物流运输', '新能源', '房地产', '国际贸易',
                ].map((industry, i) => (
                  <div key={i} className="rounded-full px-6 py-3 text-white backdrop-blur transition-all duration-300 hover:scale-105" style={{ backgroundColor: 'rgba(212,168,83,0.1)' }}>
                    {industry}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: '#f8f7f4' }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-[family-name:var(--font-noto-serif-sc)]" style={{ color: '#0a1628' }}>
                获取您的行业专属方案
              </h2>
              <p className="mx-auto mt-6 text-lg" style={{ color: '#6b7280' }}>
                立即咨询，柯洋专家将根据您的行业特点和业务需求，定制财税解决方案。
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
