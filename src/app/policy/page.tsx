'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  ExternalLink,
  Scale,
  FileText,
  Phone,
  Building,
  Search,
  BookOpen,
  AlertCircle,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import Link from 'next/link';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/scroll-animation';

const officialLinks = [
  {
    name: '国家税务总局官网',
    url: 'https://www.chinatax.gov.cn/',
    description: '国家税务总局官方网站，权威发布税务政策、通知公告',
    icon: Building,
  },
  {
    name: '财政部官网',
    url: 'https://www.mof.gov.cn/',
    description: '财政部官方网站，权威发布财政政策、法规文件及通知公告',
    icon: Building,
  },
  {
    name: '四川省人民政府官网',
    url: 'https://www.sc.gov.cn/',
    description: '四川省人民政府门户网站，发布省级政策法规、政务公告',
    icon: Building,
  },
  {
    name: '国家税务总局四川省税务局官网',
    url: 'https://sichuan.chinatax.gov.cn/',
    description: '四川省税务局官方网站，发布本省税务政策、办税指南及通知公告',
    icon: Building,
  },
  {
    name: '四川省财政厅官网',
    url: 'https://czt.sc.gov.cn/',
    description: '四川省财政厅官方网站，发布本省财政政策、资金管理及法规文件',
    icon: Building,
  },
  {
    name: '国家税务总局政策法规库',
    url: 'https://fgk.chinatax.gov.cn/',
    description: '税务政策法规查询平台，支持文件分类检索与精准查找',
    icon: FileText,
  },
  {
    name: '财政部法规管理系统',
    url: 'http://fgk.mof.gov.cn/',
    description: '财政部法规数据库，支持财政法规检索与全文查阅',
    icon: FileText,
  },
  {
    name: '国家法律法规数据库',
    url: 'https://flk.npc.gov.cn/',
    description: '全国人大常委会法规数据库，覆盖国家法律法规全文检索',
    icon: Scale,
  },
  {
    name: '12366 纳税服务平台',
    url: 'https://12366.chinatax.gov.cn/',
    description: '纳税服务综合平台，提供咨询、查询、办税等一站式服务',
    icon: Phone,
  },
];

export default function PolicyPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pb-20" style={{ backgroundColor: '#0a1628' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(212,168,83,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,83,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 bg-[#d4a853]/10 text-[#d4a853] border border-[#d4a853]/30 rounded-full px-4 py-1.5">
              <Scale className="h-3.5 w-3.5 mr-1.5 inline" />
              官方直达
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white font-[family-name:var(--font-noto-serif-sc)]">
              财税政策 · 官方直达
            </h1>
            <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto" style={{ color: '#9ca3af' }}>
              同步国家税务总局、财政部最新政策
              <br className="hidden sm:block" />
              权威来源、实时更新，助力企业合规经营
            </p>
          </div>
        </div>
      </section>

      {/* Official Links */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: '#f8f7f4' }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center mb-16">
              <Badge className="mb-4 bg-[#d4a853]/10 text-[#b8913a] border border-[#d4a853]/20 rounded-full px-4 py-1.5">
                权威链接
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-[family-name:var(--font-noto-serif-sc)]" style={{ color: '#0a1628' }}>
                官方权威链接
              </h2>
              <p className="mt-4 text-lg" style={{ color: '#6b7280' }}>
                点击即可跳转至官方平台，获取第一手政策信息
              </p>
            </div>
          </ScrollReveal>
          <StaggerContainer>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {officialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <StaggerItem key={index}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <Card className="h-full border border-gray-100 hover:border-[#d4a853]/30 hover:-translate-y-1 transition-all duration-300 bg-white" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                        <CardContent className="p-6 lg:p-8">
                          <div className="flex items-start gap-4">
                            <div className="rounded-xl p-4 group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #d4a853, #b8913a)' }}>
                              <Icon className="h-6 w-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-lg font-bold" style={{ color: '#0a1628' }}>
                                  {link.name}
                                </h3>
                                <ExternalLink className="h-4 w-4" style={{ color: '#d4a853' }} />
                              </div>
                              <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>
                                {link.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </a>
                  </StaggerItem>
                );
              })}
            </div>
          </StaggerContainer>
          <p className="text-center text-sm mt-8" style={{ color: '#6b7280' }}>
            注：更多政策解读与实战干货，可关注公众号获取
          </p>
        </div>
      </section>

      {/* Policy Update Note */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl">
              <Card className="border border-[#d4a853]/20 bg-white" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full p-3 flex-shrink-0" style={{ backgroundColor: '#f5e8c8' }}>
                      <AlertCircle className="h-6 w-6" style={{ color: '#b8913a' }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 font-[family-name:var(--font-noto-serif-sc)]" style={{ color: '#0a1628' }}>
                        政策动态实时关注
                      </h3>
                      <p className="leading-relaxed" style={{ color: '#6b7280' }}>
                        柯洋税所团队实时关注国家税务总局、财政部等官方平台政策动态，
                        为企业提供最新政策解读与合规建议。如需专业政策分析支持，
                        欢迎联系我们。
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Policy Search Guide */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: '#f8f7f4' }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center mb-16">
              <Badge className="mb-4 bg-[#d4a853]/10 text-[#b8913a] border border-[#d4a853]/20 rounded-full px-4 py-1.5">
                查询指引
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-[family-name:var(--font-noto-serif-sc)]" style={{ color: '#0a1628' }}>
                常用政策查询指引
              </h2>
              <p className="mt-4 text-lg" style={{ color: '#6b7280' }}>
                快速找到您需要的政策文件
              </p>
            </div>
          </ScrollReveal>
          <StaggerContainer>
            <div className="grid gap-6 sm:grid-cols-3">
              <StaggerItem>
                <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 hover:border-[#d4a853]/30 transition-all duration-300 hover:-translate-y-1" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                  <Search className="h-10 w-10 mx-auto mb-4" style={{ color: '#d4a853' }} />
                  <h3 className="font-bold mb-2" style={{ color: '#0a1628' }}>精准检索</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>
                    使用政策法规库搜索栏，输入关键词精准定位政策文件
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 hover:border-[#d4a853]/30 transition-all duration-300 hover:-translate-y-1" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                  <BookOpen className="h-10 w-10 mx-auto mb-4" style={{ color: '#d4a853' }} />
                  <h3 className="font-bold mb-2" style={{ color: '#0a1628' }}>分类浏览</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>
                    按法律、行政法规、部门规章等分类浏览，快速定位所需层级
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 hover:border-[#d4a853]/30 transition-all duration-300 hover:-translate-y-1" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                  <Phone className="h-10 w-10 mx-auto mb-4" style={{ color: '#d4a853' }} />
                  <h3 className="font-bold mb-2" style={{ color: '#0a1628' }}>在线咨询</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>
                    通过 12366 平台在线咨询，或联系柯洋获取专业政策解读
                  </p>
                </div>
              </StaggerItem>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 sm:py-28 overflow-hidden" style={{ backgroundColor: '#0a1628' }}>
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(212,168,83,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,83,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white font-[family-name:var(--font-noto-serif-sc)]">
                需要政策解读支持？
              </h2>
              <p className="mx-auto mt-6 text-lg" style={{ color: '#9ca3af' }}>
                柯洋专家团队实时关注政策动态，为您提供专业政策分析与合规建议。
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full gold-gradient gold-glow transition-all duration-300 hover:scale-105" style={{ color: '#0a1628' }}>
                  <MessageCircle className="mr-2 h-4 w-4" />
                  立即咨询
                </Link>
                <a href="tel:18980020731" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full border-2 border-[#d4a853]/40 text-white hover:bg-[#d4a853]/10 transition-all duration-300">
                  <Phone className="mr-2 h-4 w-4" />
                  孙凤 189-8002-0731
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
