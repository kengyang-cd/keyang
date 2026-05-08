'use client';

import { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Users,
  Award,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/scroll-animation';

function CertCarousel({ items }: { items: { src: string; title: string; desc: string }[] }) {
  const [displayIndex, setDisplayIndex] = useState(items.length);
  const [isPaused, setIsPaused] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const total = items.length;
  const extendedItems = [...items, ...items, ...items];
  const currentIdx = displayIndex % total;

  // Auto-play: slide right to left
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setDisplayIndex(prev => {
        const next = prev + 1;
        if (next >= total * 2) {
          setTransitionEnabled(false);
          return total;
        }
        return next;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [total, isPaused]);

  // Re-enable transition after the jump-reset paints
  useEffect(() => {
    if (!transitionEnabled) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionEnabled(true);
        });
      });
    }
  }, [transitionEnabled]);

  const goTo = (dir: number) => {
    setDisplayIndex(prev => {
      const next = prev + dir;
      if (next >= total * 2) {
        setTransitionEnabled(false);
        return total;
      }
      if (next < 0) {
        setTransitionEnabled(false);
        return total * 2 - 1;
      }
      return next;
    });
  };

  const goToIndex = (i: number) => {
    setDisplayIndex(total + i);
  };

  // Each slot: 260px card + 16px gap (gap-4)
  const slotWidth = 276;
  // Center item `displayIndex` at container center (868/2 = 434)
  const offset = 434 - (displayIndex * slotWidth + 130);

  return (
    <div
      className="mx-auto max-w-[868px] px-4 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel window */}
      <div className="overflow-hidden rounded-2xl py-4">
        <div
          className="flex gap-4"
          style={{
            transform: `translateX(${offset}px)`,
            transition: transitionEnabled ? 'transform 0.5s ease' : 'none',
          }}
        >
          {extendedItems.map((item, i) => {
            const dist = i - displayIndex;
            const isCenter = dist === 0;
            const isSide = Math.abs(dist) === 1;
            const isVisible = Math.abs(dist) <= 1;

            return (
              <div
                key={i}
                className={`flex-shrink-0 w-[260px] transition-all duration-500 ${
                  isVisible ? '' : 'opacity-0 pointer-events-none'
                }`}
              >
                <div className="relative">
                  {/* Corner decorations - center only */}
                  {isCenter && (
                    <>
                      <div className="absolute -top-2 -left-2 w-8 h-8 z-10">
                        <div className="absolute top-0 left-0 w-7 h-7 border-t-2 border-l-2 border-[#d4a853]" />
                        <div className="absolute top-1.5 left-1.5 w-3 h-3 bg-[#d4a853]/15 rounded-full" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 z-10">
                        <div className="absolute top-0 right-0 w-7 h-7 border-t-2 border-r-2 border-[#d4a853]" />
                        <div className="absolute top-1.5 right-1.5 w-3 h-3 bg-[#d4a853]/15 rounded-full" />
                      </div>
                      <div className="absolute -bottom-2 -left-2 w-8 h-8 z-10">
                        <div className="absolute bottom-0 left-0 w-7 h-7 border-b-2 border-l-2 border-[#d4a853]" />
                        <div className="absolute bottom-1.5 left-1.5 w-3 h-3 bg-[#d4a853]/15 rounded-full" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 z-10">
                        <div className="absolute bottom-0 right-0 w-7 h-7 border-b-2 border-r-2 border-[#d4a853]" />
                        <div className="absolute bottom-1.5 right-1.5 w-3 h-3 bg-[#d4a853]/15 rounded-full" />
                      </div>
                    </>
                  )}

                  {/* Glow behind center */}
                  {isCenter && (
                    <div className="absolute -inset-4 rounded-3xl opacity-30 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(212,168,83,0.3), transparent 70%)' }} />
                  )}

                  {/* Card */}
                  <div
                    className={`relative rounded-xl overflow-hidden border-2 bg-white shadow-lg transition-all duration-300 ${
                      isCenter
                        ? 'border-[#d4a853] scale-100 blur-0 shadow-[0_0_25px_rgba(212,168,83,0.2)]'
                        : 'border-[#d4a853]/10 scale-[0.92] blur-[2px]'
                    }`}
                    style={{ opacity: isCenter ? 1 : 0.45 }}
                  >
                    <div className="aspect-[4/5] relative">
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        className="object-contain p-3"
                        sizes="260px"
                      />
                    </div>
                  </div>
                </div>

                {/* Title & description - center only */}
                <div
                  className={`text-center mt-4 transition-all duration-300 ${
                    isCenter ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
                  }`}
                >
                  <h3 className="text-sm font-bold font-[family-name:var(--font-noto-serif-sc)]" style={{ color: '#0a1628' }}>{item.title}</h3>
                  <p className="text-xs mt-0.5" style={{ color: '#6b7280' }}>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-2">
        <button
          onClick={() => goTo(-1)}
          className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[#d4a853] hover:text-white transition-all duration-300 border border-[#d4a853]/30 group flex-shrink-0"
          style={{ color: '#b8913a' }}
        >
          <ChevronLeft className="h-5 w-5 group-hover:scale-110 transition-transform" />
        </button>
        <div className="flex items-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => goToIndex(i)}
              className="h-2.5 rounded-full transition-all duration-300"
              style={{
                width: i === currentIdx ? '20px' : '8px',
                backgroundColor: i === currentIdx ? '#d4a853' : '#d1d5db',
              }}
            />
          ))}
        </div>
        <button
          onClick={() => goTo(1)}
          className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[#d4a853] hover:text-white transition-all duration-300 border border-[#d4a853]/30 group flex-shrink-0"
          style={{ color: '#b8913a' }}
        >
          <ChevronRight className="h-5 w-5 group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="relative overflow-hidden pt-28 pb-20 sm:pb-28" style={{ backgroundColor: '#0a1628' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(212,168,83,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,83,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white font-[family-name:var(--font-noto-serif-sc)]">
              关于我们
            </h1>
            <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto" style={{ color: '#9ca3af' }}>
              成都市柯洋税务师事务所由资深财税专家孙凤创立
              <br className="hidden sm:block" />
              深耕财税服务近 30 年，具备公安备案资质
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: '#f8f7f4' }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold tracking-tight mb-6 text-center font-[family-name:var(--font-noto-serif-sc)]" style={{ color: '#0a1628' }}>
                公司简介
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed" style={{ color: '#4b5563' }}>
                  成都市柯洋税务师事务所由资深财税专家孙凤创立，团队拥有注册税务师、会计师、企业合规师、纳税筹划师、管理会计师等专业资质，2018 年高级会计师资格考试合格，深耕财税服务近 30 年，具备公安备案资质。
                </p>
                <p className="text-lg leading-relaxed mt-6" style={{ color: '#4b5563' }}>
                  事务所专注为建筑工程、新消费饮品、文化传媒、律所、电商、制造企业、矿产能源等多领域实体企业，提供从账务规范、税务合规、内部审计、内控搭建、常年顾问到财税尽调 / 投资风控的一站式全周期财税解决方案。
                </p>
                <p className="text-lg leading-relaxed mt-6" style={{ color: '#4b5563' }}>
                  曾成功为投资方完成内蒙古矿产项目财税尽调，规避上亿规模投资损失，具备亿元级大额投资项目财税尽调实战能力。
                </p>
              </div>
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
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-white font-[family-name:var(--font-noto-serif-sc)]">
                服务理念
              </h2>
              <div className="grid gap-6 sm:grid-cols-3">
                <div className="rounded-2xl p-8 backdrop-blur" style={{ backgroundColor: 'rgba(212,168,83,0.1)' }}>
                  <div className="text-4xl font-bold mb-4 font-[family-name:var(--font-noto-serif-sc)]" style={{ color: '#d4a853' }}>合规为先</div>
                  <p style={{ color: 'rgba(255,255,255,0.7)' }}>合法合规是一切服务的基础</p>
                </div>
                <div className="rounded-2xl p-8 backdrop-blur" style={{ backgroundColor: 'rgba(212,168,83,0.1)' }}>
                  <div className="text-4xl font-bold mb-4 font-[family-name:var(--font-noto-serif-sc)]" style={{ color: '#d4a853' }}>专业为本</div>
                  <p style={{ color: 'rgba(255,255,255,0.7)' }}>持证上岗，实战经验丰富</p>
                </div>
                <div className="rounded-2xl p-8 backdrop-blur" style={{ backgroundColor: 'rgba(212,168,83,0.1)' }}>
                  <div className="text-4xl font-bold mb-4 font-[family-name:var(--font-noto-serif-sc)]" style={{ color: '#d4a853' }}>长期陪伴</div>
                  <p style={{ color: 'rgba(255,255,255,0.7)' }}>适配企业全生命周期发展</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Strengths */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: '#ffffff' }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-[family-name:var(--font-noto-serif-sc)]" style={{ color: '#0a1628' }}>
                选择柯洋的五大理由
              </h2>
            </div>
          </ScrollReveal>
          <StaggerContainer>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: Clock, title: '近 30 年实战团队', desc: '创始人孙凤亲自带队，实战经验丰富' },
                { icon: ShieldCheck, title: '全流程合规闭环', desc: '长期护航零税务风险' },
                { icon: Award, title: '亿元级服务经验', desc: '多行业标杆案例' },
                { icon: Users, title: '长期陪伴式服务', desc: '适配企业全生命周期' },
                { icon: CheckCircle2, title: '政策实时同步', desc: '权威政策链接直达' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <StaggerItem key={i} className={i === 4 ? 'lg:col-span-2' : ''}>
                    <div className="h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-[#d4a853]/30 bg-white" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                      <div className="flex items-start gap-4">
                        <div className="rounded-xl p-3 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #1a3a5c, #0a1628)' }}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold mb-2" style={{ color: '#0a1628' }}>{item.title}</h3>
                          <p className="text-sm" style={{ color: '#6b7280' }}>{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: '#f8f7f4' }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-[family-name:var(--font-noto-serif-sc)]" style={{ color: '#0a1628' }}>
                资质认证
              </h2>
              <p className="mt-4" style={{ color: '#6b7280' }}>
                持证经营，权威认证，值得信赖
              </p>
            </div>
          </ScrollReveal>
          {/* 资质证书轮播 */}
          <ScrollReveal>
            <CertCarousel
              items={[
                { src: '/certs/tsc5.jpg', title: 'TSC5 级信用等级', desc: '2024年度涉税专业服务机构最高信用等级' },
                { src: '/certs/zhiyeshuiwu.jpg', title: '执业注册税务师机构', desc: '国家税务总局认定执业资质' },
                { src: '/certs/chengdudailijizhang.jpg', title: '成都代理记账协会会员', desc: '行业协会正式会员' },
                { src: '/certs/lishidanwei.jpg', title: '成都中小企业协会理事单位', desc: '获评理事单位' },
                { src: '/certs/chengxinguoyue.jpg', title: '诚信公约签署单位', desc: '成都市代理记账行业协会诚信公约签署单位' },
                { src: '/certs/dailijizhang.jpg', title: '代理记账许可证', desc: '财政部门审批许可' },
                { src: '/certs/chengshihehuoren.jpg', title: '橙子财税集团城市合伙人', desc: '集团授权城市合伙人' },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: '#0a1628' }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white font-[family-name:var(--font-noto-serif-sc)]">
                开启您的合规之旅
              </h2>
              <p className="mx-auto mt-6 text-lg" style={{ color: '#9ca3af' }}>
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
