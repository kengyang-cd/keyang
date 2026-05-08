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
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/scroll-animation';

const coreServices = [
  { icon: Building2, title: '工商注册 / 变更 / 注销', description: '公司设立、变更、注销一站式办理，流程合规高效。', color: '#1a3a5c' },
  { icon: FileText, title: '代理记账与账务规范', description: '专业团队提供规范化代理记账服务，账目清晰、合规可查。', color: '#d4a853' },
  { icon: Calculator, title: '税务申报与发票管理', description: '按期完成各税种申报，发票领用、开具、认证全流程管理。', color: '#1a3a5c' },
  { icon: Trash2, title: '历史乱账清理与整改', description: '梳理历史账务乱象，重建规范化账务体系。', color: '#d4a853' },
  { icon: ShieldCheck, title: '税务合规规划与风险排查', description: '系统性税务合规体检与风险识别，合法合规规划税务方案。', color: '#1a3a5c' },
  { icon: BookOpen, title: '内部审计与内控体系搭建', description: '全面内部审计服务，搭建规范化内部控制制度。', color: '#d4a853' },
  { icon: CheckCircle, title: '涉税鉴证服务', description: '专业出具汇算清缴鉴证及其他涉税鉴证报告。', color: '#1a3a5c' },
  { icon: Network, title: '股权设计 / 搭建', description: '根据企业架构与发展阶段，设计合理股权结构。', color: '#d4a853' },
  { icon: Flame, title: '高企认定', description: '提供高新技术企业认定全流程辅导。', color: '#1a3a5c' },
  { icon: BadgeCheck, title: '资质办理', description: '各类行业资质、经营许可申请与维护。', color: '#d4a853' },
  { icon: ClipboardCheck, title: '财税尽调 / 投资风控', description: '项目资金穿透核查、成本合规性核验、投资决策支撑。', color: '#1a3a5c' },
  { icon: Sparkles, title: 'AI + GEO 数字化服务', description: '融合人工智能与生成式引擎优化，助力企业财税数字化升级。', color: '#d4a853' },
  { icon: Users, title: '常年财税顾问服务', description: '长期陪伴式顾问支持，实时解答企业财税疑问。', color: '#1a3a5c' },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="relative overflow-hidden pt-28 pb-20 sm:pb-28" style={{ backgroundColor: '#0a1628' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(212,168,83,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,83,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white font-[family-name:var(--font-noto-serif-sc)]">
              核心服务
            </h1>
            <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto" style={{ color: '#9ca3af' }}>
              成都市柯洋税务师事务所专注财税服务近 30 年，围绕企业全生命周期，
              <br className="hidden sm:block" />
              提供从基础账务到高端规划、亿元级投资风控的一站式专业支持。
            </p>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: '#f8f7f4' }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-[family-name:var(--font-noto-serif-sc)]" style={{ color: '#0a1628' }}>
                核心服务
              </h2>
              <p className="mt-4 text-lg" style={{ color: '#6b7280' }}>
                覆盖企业全生命周期的财税服务需求，含亿元级投资风控
              </p>
            </div>
          </ScrollReveal>
          <StaggerContainer>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {coreServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <StaggerItem key={index}>
                    <div className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1 bg-white border border-gray-100 hover:border-[#d4a853]/30 h-full" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                      <div className="p-8">
                        <div className="inline-flex rounded-xl p-4 mb-6" style={{ background: `linear-gradient(135deg, ${service.color}, ${service.color === '#d4a853' ? '#b8913a' : '#0a1628'})` }}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 group-hover:transition-colors font-[family-name:var(--font-noto-serif-sc)]" style={{ color: '#0a1628' }}>
                          {service.title}
                        </h3>
                        <p className="leading-relaxed" style={{ color: '#6b7280' }}>
                          {service.description}
                        </p>
                      </div>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(212,168,83,0.05), transparent)' }} />
                    </div>
                  </StaggerItem>
                );
              })}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Due Diligence Highlight */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: '#ffffff' }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 font-[family-name:var(--font-noto-serif-sc)]" style={{ color: '#0a1628' }}>
                财税尽调 / 投资风控
              </h2>
              <p className="text-lg mb-8" style={{ color: '#6b7280' }}>
                针对大额投资项目，提供全方位财税尽调服务，帮您识别风险、规避损失
              </p>
            </div>
          </ScrollReveal>
          <StaggerContainer>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-10 max-w-5xl mx-auto">
              {[
                { icon: '🔍', title: '项目资金穿透', desc: '对项目资金流向进行全流程追溯核查' },
                { icon: '📋', title: '成本合规核验', desc: '穿透式核查成本明细，识别虚增问题' },
                { icon: '⚠️', title: '税务风险识别', desc: '全面排查税务合规风险点' },
                { icon: '📊', title: '决策支撑报告', desc: '出具专业尽调报告，支撑投资决策' },
              ].map((item, i) => (
                <StaggerItem key={i}>
                  <div className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1" style={{ backgroundColor: '#f8f7f4' }}>
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h3 className="font-bold mb-2" style={{ color: '#0a1628' }}>{item.title}</h3>
                    <p className="text-sm" style={{ color: '#6b7280' }}>{item.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
          <ScrollReveal>
            <div className="text-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium rounded-full gold-gradient gold-glow transition-all duration-300 hover:scale-105" style={{ color: '#0a1628' }}>
                立即咨询尽调服务 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Philosophy */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: '#0a1628' }}>
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(212,168,83,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,83,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-white font-[family-name:var(--font-noto-serif-sc)]">
                服务理念
              </h2>
              <div className="grid gap-6 sm:grid-cols-3">
                <div className="rounded-2xl p-6 backdrop-blur" style={{ backgroundColor: 'rgba(212,168,83,0.1)' }}>
                  <div className="text-4xl font-bold mb-2 font-[family-name:var(--font-noto-serif-sc)]" style={{ color: '#d4a853' }}>合规为先</div>
                  <p style={{ color: 'rgba(255,255,255,0.7)' }}>合法合规是一切服务的基础</p>
                </div>
                <div className="rounded-2xl p-6 backdrop-blur" style={{ backgroundColor: 'rgba(212,168,83,0.1)' }}>
                  <div className="text-4xl font-bold mb-2 font-[family-name:var(--font-noto-serif-sc)]" style={{ color: '#d4a853' }}>专业为本</div>
                  <p style={{ color: 'rgba(255,255,255,0.7)' }}>持证上岗，实战经验丰富</p>
                </div>
                <div className="rounded-2xl p-6 backdrop-blur" style={{ backgroundColor: 'rgba(212,168,83,0.1)' }}>
                  <div className="text-4xl font-bold mb-2 font-[family-name:var(--font-noto-serif-sc)]" style={{ color: '#d4a853' }}>长期陪伴</div>
                  <p style={{ color: 'rgba(255,255,255,0.7)' }}>适配企业全生命周期发展</p>
                </div>
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
                了解您的企业需要什么服务？
              </h2>
              <p className="mx-auto mt-6 text-lg" style={{ color: '#6b7280' }}>
                立即咨询，柯洋专家团队将为您量身定制财税服务方案。
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
