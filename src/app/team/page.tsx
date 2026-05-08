'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Award,
  BookOpen,
  ShieldCheck,
  Users,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/scroll-animation';

const certifications = [
  { name: '注册税务师', icon: ShieldCheck },
  { name: '会计师', icon: BookOpen },
  { name: '企业合规师', icon: Award },
  { name: '纳税筹划师', icon: BookOpen },
  { name: '管理会计师', icon: Users },
];

const teamMembers = [
  {
    name: '孙凤',
    title: '创始人',
    credentials: '执业注册税务师',
    description: '近 30 年财税实战专家，多家亿元级企业特聘财务总监、财税顾问，擅长建筑、新消费、文化传媒、律所、电商、制造、矿产能源等多领域财税服务、内控体系搭建及大额投资财税尽调，曾成功为投资方规避上亿投资损失。',
    highlight: '亿元级投资尽调实战，亲自带队',
    image: '/team/孙凤.png',
    featured: true,
  },
  {
    name: '丁汝彬',
    title: '联合创始人',
    credentials: '执业注册税务师',
    description: '懂税的股权架构师，20余年深耕财税领域，帮助企业解决钱留不住、做不大、增长没方法的问题。',
    highlight: '股权架构设计，企业增长顾问',
    image: '/team/丁汝彬.png',
    featured: true,
  },
  {
    name: '孙瑾',
    title: '财税顾问',
    credentials: '执业注册税务师',
    description: '企业增长顾问，专注代理记账与税务申报服务，为企业提供规范化、日常化财税支持。',
    highlight: '规范高效，稳健交付',
    image: '/team/孙瑾.jpg',
    featured: false,
  },
  {
    name: '马晓兰',
    title: '财税顾问',
    credentials: '执业注册税务师',
    description: '12年大型企业经验，曾任大型民营企业财务经理，熟悉税务申报及财税合规全流程。',
    highlight: '财务核算，风险控制',
    image: '/team/马晓兰.png',
    featured: false,
  },
  {
    name: '郑琴',
    title: '财税顾问',
    credentials: '执业注册税务师',
    description: '7年专注服务中小企业，逻辑清晰、沟通顺畅，能快速定位财税问题。',
    highlight: '账务处理，税务合规',
    image: '/team/郑琴.png',
    featured: false,
  },
  {
    name: '袁媛',
    title: '财税顾问',
    credentials: '执业注册税务师',
    description: '8年经验，擅长将财税管理与企业经营深度融合，提供可落地方案。',
    highlight: '内控体系，合规优化',
    image: '/team/袁媛.png',
    featured: false,
  },
];

export default function TeamPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="relative overflow-hidden pt-28 pb-20 sm:pb-28" style={{ backgroundColor: '#0a1628' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(212,168,83,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,83,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white font-[family-name:var(--font-noto-serif-sc)]">
              专家团队
            </h1>
            <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto" style={{ color: '#9ca3af' }}>
              柯洋税所由资深财税专家孙凤创立，团队持有注册税务师、会计师、企业合规师、
              <br className="hidden sm:block" />
              纳税筹划师、管理会计师等专业资质，深耕财税服务近 30 年。
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: '#f8f7f4' }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center mb-10">
              <h2 className="text-2xl font-bold tracking-tight font-[family-name:var(--font-noto-serif-sc)]" style={{ color: '#0a1628' }}>
                专业资质认证
              </h2>
              <p className="mt-2" style={{ color: '#6b7280' }}>
                团队成员持证上岗，合法合规执业
              </p>
            </div>
          </ScrollReveal>
          <StaggerContainer>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <StaggerItem key={index}>
                    <div className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium shadow-sm bg-white min-w-[130px]" style={{ border: '1px solid rgba(212,168,83,0.2)' }}>
                      <Icon className="h-4 w-4 flex-shrink-0" style={{ color: '#d4a853' }} />
                      <span style={{ color: '#0a1628' }}>{cert.name}</span>
                    </div>
                  </StaggerItem>
                );
              })}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Team Members - Featured */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: '#ffffff' }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-[family-name:var(--font-noto-serif-sc)]" style={{ color: '#0a1628' }}>
                核心创始人
              </h2>
            </div>
          </ScrollReveal>
          <StaggerContainer>
            <div className="grid gap-8 lg:grid-cols-2 max-w-4xl mx-auto">
              {teamMembers.filter(m => m.featured).map((member, index) => (
                <StaggerItem key={index}>
                  <div className="overflow-hidden rounded-2xl bg-white border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:border-[#d4a853]/30 h-full" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                    <div className="p-8 flex justify-center" style={{ background: 'linear-gradient(135deg, rgba(212,168,83,0.1), rgba(10,22,40,0.05))' }}>
                      <div className="relative h-40 w-40">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover rounded-full ring-4 ring-white shadow-lg"
                        />
                      </div>
                    </div>
                    <div className="p-6 text-center">
                      <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium mb-3" style={{ backgroundColor: 'rgba(212,168,83,0.1)', color: '#b8913a' }}>
                        {member.credentials}
                      </div>
                      <h3 className="text-2xl font-bold mb-1 font-[family-name:var(--font-noto-serif-sc)]" style={{ color: '#0a1628' }}>
                        {member.name}
                      </h3>
                      <p className="mb-4" style={{ color: '#6b7280' }}>{member.title}</p>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: '#6b7280' }}>
                        {member.description}
                      </p>
                      <div className="flex items-center justify-center gap-2 text-sm font-medium" style={{ color: '#d4a853' }}>
                        <CheckCircle2 className="h-4 w-4" />
                        <span>{member.highlight}</span>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Team Members - Others */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: '#f8f7f4' }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-2xl font-bold tracking-tight font-[family-name:var(--font-noto-serif-sc)]" style={{ color: '#0a1628' }}>
                专业团队
              </h2>
            </div>
          </ScrollReveal>
          <StaggerContainer>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
              {teamMembers.filter(m => !m.featured).map((member, index) => (
                <StaggerItem key={index}>
                  <div className="overflow-hidden rounded-2xl bg-white border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:border-[#d4a853]/30 h-full" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                    <div className="p-6 flex justify-center" style={{ background: 'linear-gradient(135deg, rgba(212,168,83,0.08), rgba(10,22,40,0.03))' }}>
                      <div className="relative h-24 w-24">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover rounded-full ring-2 ring-white shadow-md"
                        />
                      </div>
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-bold mb-1 font-[family-name:var(--font-noto-serif-sc)]" style={{ color: '#0a1628' }}>
                        {member.name}
                      </h3>
                      <p className="text-xs mb-2" style={{ color: '#6b7280' }}>{member.title}</p>
                      <p className="text-xs leading-relaxed line-clamp-3" style={{ color: '#6b7280' }}>
                        {member.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: '#0a1628' }}>
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(212,168,83,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,83,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-white font-[family-name:var(--font-noto-serif-sc)]">
                团队服务理念
              </h2>
              <div className="grid gap-8 sm:grid-cols-3">
                <div className="rounded-2xl p-8 backdrop-blur text-center" style={{ backgroundColor: 'rgba(212,168,83,0.1)' }}>
                  <div className="text-4xl font-bold mb-4 font-[family-name:var(--font-noto-serif-sc)]" style={{ color: '#d4a853' }}>合规为先</div>
                  <p style={{ color: 'rgba(255,255,255,0.7)' }}>合法合规是一切服务的基础</p>
                </div>
                <div className="rounded-2xl p-8 backdrop-blur text-center" style={{ backgroundColor: 'rgba(212,168,83,0.1)' }}>
                  <div className="text-4xl font-bold mb-4 font-[family-name:var(--font-noto-serif-sc)]" style={{ color: '#d4a853' }}>专业为本</div>
                  <p style={{ color: 'rgba(255,255,255,0.7)' }}>持证上岗，实战经验丰富</p>
                </div>
                <div className="rounded-2xl p-8 backdrop-blur text-center" style={{ backgroundColor: 'rgba(212,168,83,0.1)' }}>
                  <div className="text-4xl font-bold mb-4 font-[family-name:var(--font-noto-serif-sc)]" style={{ color: '#d4a853' }}>长期陪伴</div>
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
                与专家团队直接沟通
              </h2>
              <p className="mx-auto mt-6 text-lg" style={{ color: '#6b7280' }}>
                立即联系柯洋，让专业团队为您的企业保驾护航。
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium rounded-full gold-gradient gold-glow transition-all duration-300 hover:scale-105" style={{ color: '#0a1628' }}>
                  立即咨询 <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <a href="tel:18980020731" className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium rounded-full border-2 transition-all duration-300" style={{ borderColor: '#d4a853', color: '#d4a853' }}>
                  电话咨询：189-8002-0731
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
