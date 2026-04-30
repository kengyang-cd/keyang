'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  FileText,
  ShieldCheck,
  Calculator,
  Trash2,
  BookOpen,
  Users,
  Building2,
  CheckCircle,
  ArrowRight,
  ClipboardCheck,
  TrendingUp,
  Network,
  Flame,
  BadgeCheck,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';

const coreServices = [
  {
    icon: Building2,
    title: '工商注册 / 变更 / 注销',
    description: '公司设立、变更、注销一站式办理，流程合规高效。',
    color: 'bg-blue-500',
  },
  {
    icon: FileText,
    title: '代理记账与账务规范',
    description: '专业团队提供规范化代理记账服务，账目清晰、合规可查。',
    color: 'bg-emerald-500',
  },
  {
    icon: Calculator,
    title: '税务申报与发票管理',
    description: '按期完成各税种申报，发票领用、开具、认证全流程管理。',
    color: 'bg-purple-500',
  },
  {
    icon: Trash2,
    title: '历史乱账清理与整改',
    description: '梳理历史账务乱象，重建规范化账务体系。',
    color: 'bg-cyan-500',
  },
  {
    icon: ShieldCheck,
    title: '税务合规规划与风险排查',
    description: '系统性税务合规体检与风险识别，合法合规规划税务方案，精准落地税收优惠。',
    color: 'bg-amber-500',
  },
  {
    icon: BookOpen,
    title: '内部审计与内控体系搭建',
    description: '全面内部审计服务，搭建规范化内部控制制度。',
    color: 'bg-indigo-500',
  },
  {
    icon: CheckCircle,
    title: '涉税鉴证服务',
    description: '专业出具汇算清缴鉴证及其他涉税鉴证报告，保障企业税务合规。',
    color: 'bg-teal-500',
  },
  {
    icon: Network,
    title: '股权设计 / 搭建',
    description: '根据企业架构与发展阶段，设计合理股权结构，优化持股比例与控制权安排。',
    color: 'bg-sky-500',
  },
  {
    icon: Flame,
    title: '高企认定',
    description: '提供高新技术企业认定全流程辅导，助力企业享受税收优惠与政策扶持。',
    color: 'bg-rose-500',
  },
  {
    icon: BadgeCheck,
    title: '资质办理',
    description: '各类行业资质、经营许可申请与维护，保障企业合规运营。',
    color: 'bg-violet-500',
  },
  {
    icon: ClipboardCheck,
    title: '财税尽调 / 投资风控',
    description: '项目资金穿透核查、成本合规性核验、税务风险识别、资金流向追溯、投资决策支撑报告。',
    color: 'bg-orange-500',
  },
  {
    icon: Sparkles,
    title: 'AI + GEO 数字化服务',
    description: '融合人工智能与生成式引擎优化，助力企业财税数字化升级与线上品牌曝光。',
    color: 'bg-fuchsia-500',
  },
  {
    icon: Users,
    title: '常年财税顾问服务',
    description: '长期陪伴式顾问支持，实时解答企业财税疑问。',
    color: 'bg-slate-500',
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-foreground">
              核心服务
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              成都市柯洋税务师事务所专注财税服务近 30 年，围绕企业全生命周期，
              <br className="hidden sm:block" />
              提供从基础账务到高端规划、亿元级投资风控的一站式专业支持。
            </p>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              核心服务
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              覆盖企业全生命周期的财税服务需求，含亿元级投资风控
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <CardContent className="p-8">
                    <div className={`inline-flex rounded-xl ${service.color} p-4 mb-6`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Due Diligence Highlight */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground mb-6">
              财税尽调 / 投资风控
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              针对大额投资项目，提供全方位财税尽调服务，帮您识别风险、规避损失
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-10">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="text-3xl mb-3">🔍</div>
                <h3 className="font-bold text-foreground mb-2">项目资金穿透</h3>
                <p className="text-sm text-muted-foreground">对项目资金流向进行全流程追溯核查</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="text-3xl mb-3">📋</div>
                <h3 className="font-bold text-foreground mb-2">成本合规核验</h3>
                <p className="text-sm text-muted-foreground">穿透式核查成本明细，识别虚增问题</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="text-3xl mb-3">⚠️</div>
                <h3 className="font-bold text-foreground mb-2">税务风险识别</h3>
                <p className="text-sm text-muted-foreground">全面排查税务合规风险点</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="font-bold text-foreground mb-2">决策支撑报告</h3>
                <p className="text-sm text-muted-foreground">出具专业尽调报告，支撑投资决策</p>
              </div>
            </div>
            <Button asChild size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white hover:text-white px-8 py-6 rounded-full shadow-lg shadow-amber-500/25">
              <Link href="/contact">
                立即咨询尽调服务 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Philosophy */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
              服务理念
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                <div className="text-4xl font-bold text-amber-400 mb-2">合规为先</div>
                <p className="text-white/80">合法合规是一切服务的基础</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                <div className="text-4xl font-bold text-amber-400 mb-2">专业为本</div>
                <p className="text-white/80">持证上岗，实战经验丰富</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                <div className="text-4xl font-bold text-amber-400 mb-2">长期陪伴</div>
                <p className="text-white/80">适配企业全生命周期发展</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              了解您的企业需要什么服务？
            </h2>
            <p className="mx-auto mt-6 text-lg text-primary-foreground/90">
              立即咨询，柯洋专家团队将为您量身定制财税服务方案。
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
