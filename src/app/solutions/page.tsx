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
} from 'lucide-react';
import Link from 'next/link';

const industries = [
  {
    icon: Building,
    title: '建筑工程行业',
    description: '专注建筑企业全流程财税服务，保障资质维护与项目合规。',
    services: [
      '项目制核算与成本归集',
      '跨区域预缴税务处理',
      '资质维护与升级支持',
      '汇算清缴鉴证报告',
      '长期税务风险管控',
    ],
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: Coffee,
    title: '新消费 / 集团企业',
    description: '支撑多子公司集团化运营，助力融资扩张与合规管控。',
    services: [
      '多子公司并账管理',
      '集团管控架构搭建',
      '融资尽调财税支持',
      '全渠道营收合规',
      '股权架构优化',
    ],
    color: 'from-pink-500 to-rose-600',
  },
  {
    icon: Film,
    title: '文化传媒 / 数字营销',
    description: '保障字节系等大型平台资质合规，支撑业务高速扩张。',
    services: [
      '年度全面内部审计',
      '合规风险全面排查',
      '资质维护与申请支持',
      '进出口财税处理',
      '内控制度搭建',
    ],
    color: 'from-purple-500 to-indigo-600',
  },
  {
    icon: Scale,
    title: '律所 / 电商 / 制造等通用行业',
    description: '标准化合规体系搭建，适配多行业企业通用需求。',
    services: [
      '合规体系建设',
      '成本管控优化',
      '审计鉴证服务',
      '内控流程优化',
      '常年顾问支持',
    ],
    color: 'from-blue-500 to-cyan-600',
  },
];

export default function SolutionsPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-foreground">
              行业解决方案
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              近 30 年实战经验，覆盖建筑、新消费、文化传媒、律所、电商、制造等
              <br className="hidden sm:block" />
              多领域实体企业，提供行业专属财税解决方案。
            </p>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-16">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              const isEven = index % 2 === 1;
              return (
                <Card
                  key={index}
                  className={`overflow-hidden ${
                    isEven ? 'bg-muted/30' : ''
                  }`}
                >
                  <CardContent className="p-8 lg:p-12">
                    <div className={`grid gap-8 lg:grid-cols-2 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                      <div className={`flex flex-col ${isEven ? 'lg:order-2' : ''}`}>
                        <div className={`inline-flex rounded-2xl bg-gradient-to-br ${industry.color} p-5 w-fit mb-6`}>
                          <Icon className="h-10 w-10 text-white" />
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                          {industry.title}
                        </h3>
                        <p className="text-lg text-muted-foreground mb-8">
                          {industry.description}
                        </p>
                        <div className="mt-auto">
                          <Button asChild>
                            <Link href="/contact">
                              咨询此行业方案 <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                      <div className={`${isEven ? 'lg:order-1' : ''}`}>
                        <div className="rounded-2xl bg-card border-2 p-6">
                          <h4 className="font-semibold text-foreground mb-4 text-lg">
                            核心服务内容
                          </h4>
                          <ul className="space-y-4">
                            {industry.services.map((service, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                                  <div className="h-2 w-2 rounded-full bg-primary" />
                                </div>
                                <span className="text-muted-foreground">{service}</span>
                              </li>
                            ))}
                          </ul>
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

      {/* Industry Coverage */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
              服务行业覆盖
            </h2>
            <p className="text-lg text-white/80 mb-12">
              除上述四大核心行业外，柯洋税务还服务众多其他行业客户
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                '餐饮连锁',
                '教育培训',
                '医疗器械',
                '科技互联网',
                '物流运输',
                '新能源',
                '房地产',
                '国际贸易',
              ].map((industry, i) => (
                <div
                  key={i}
                  className="rounded-full bg-white/10 px-6 py-3 text-white backdrop-blur hover:bg-white/20 transition-colors"
                >
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              获取您的行业专属方案
            </h2>
            <p className="mx-auto mt-6 text-lg text-primary-foreground/90">
              立即咨询，柯洋专家将根据您的行业特点和业务需求，定制财税解决方案。
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
