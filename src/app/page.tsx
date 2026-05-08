'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  FileText,
  Building2,
  ArrowRight,
  Award,
  Phone,
  MessageCircle,
  Heart,
  Star,
  Briefcase,
  ExternalLink,
  Search,
  ClipboardCheck,
  DollarSign,
  Calculator,
  Settings,
  HelpCircle,
  Sparkles,
} from 'lucide-react';
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  AnimatedCounter,
} from '@/components/scroll-animation';

// 核心优势
const advantages = [
  {
    icon: Award,
    title: '持证专业团队',
    description: '核心成员均为注册税务师、会计师，创始人孙凤亲自带队实战',
    gradient: 'from-[#1a3a5c] to-[#0a1628]',
  },
  {
    icon: ShieldCheck,
    title: '合规有保障',
    description: '帮助企业提前排雷，全流程合规闭环，长期护航零税务风险',
    gradient: 'from-[#d4a853] to-[#b8913a]',
  },
  {
    icon: DollarSign,
    title: '大额投资风控',
    description: '亿元级企业服务与投资风控双重经验，多行业标杆案例',
    gradient: 'from-[#1a3a5c] to-[#0a1628]',
  },
  {
    icon: Heart,
    title: '长期陪伴式服务',
    description: '不只是做账，更是您可以信赖的财税顾问，适配企业全生命周期',
    gradient: 'from-[#d4a853] to-[#b8913a]',
  },
];

// 服务项目
const services = [
  { icon: FileText, title: '工商注册', description: '公司设立、变更、注销，一站式服务' },
  { icon: Building2, title: '代理记账', description: '专业会计团队，账务清晰、申报准时' },
  { icon: TrendingUp, title: '税务规划', description: '合法合规，帮您省下该省的钱' },
  { icon: ShieldCheck, title: '财税合规', description: '专业保障，让企业远离风险' },
  { icon: ClipboardCheck, title: '财税尽调', description: '投资风控・成本核验・风险识别' },
  { icon: CheckCircle2, title: '历史账清理', description: '梳理乱账旧账，让账目清晰合规' },
];

// 标杆案例
const cases = [
  {
    title: '新消费饮品集团企业',
    subtitle: '15家子公司规范・集团财税搭建・融资合规支撑・营收破亿',
    tags: ['集团化运营', '融资尽调', '全周期服务'],
    tagColor: 'border-[#d4a853]/30 text-[#d4a853] bg-[#d4a853]/5',
    borderColor: 'border-[#d4a853]/20 hover:border-[#d4a853]/50',
    bgGradient: 'from-[#d4a853]/5 to-amber-50/50',
  },
  {
    title: '建筑工程实体企业',
    subtitle: '15年零风险・资质维护・汇算鉴证・2亿营收稳健运营',
    tags: ['建筑行业', '资质维护', '零稽查'],
    tagColor: 'border-[#1a3a5c]/30 text-[#1a3a5c] bg-[#1a3a5c]/5',
    borderColor: 'border-[#1a3a5c]/20 hover:border-[#1a3a5c]/50',
    bgGradient: 'from-[#1a3a5c]/5 to-blue-50/50',
  },
  {
    title: '文化传媒数字营销集团',
    subtitle: '4年全周期审计・5亿+营收合规・内控体系搭建・字节系资质支撑',
    tags: ['传媒行业', '内部审计', '亿级营收'],
    tagColor: 'border-[#d4a853]/30 text-[#d4a853] bg-[#d4a853]/5',
    borderColor: 'border-[#d4a853]/20 hover:border-[#d4a853]/50',
    bgGradient: 'from-[#d4a853]/5 to-amber-50/50',
  },
  {
    title: '内蒙古矿产项目财税尽调',
    subtitle: '跨区域实地核查・穿透式成本核验・规避上亿投资损失',
    tags: ['矿产能源', '投资尽调', '风险规避'],
    tagColor: 'border-[#1a3a5c]/30 text-[#1a3a5c] bg-[#1a3a5c]/5',
    borderColor: 'border-[#1a3a5c]/20 hover:border-[#1a3a5c]/50',
    bgGradient: 'from-[#1a3a5c]/5 to-blue-50/50',
  },
];

// 官方链接数据
const officialLinks = [
  { name: '国家税务总局', url: 'https://www.chinatax.gov.cn/' },
  { name: '政策法规库', url: 'https://fgk.chinatax.gov.cn/' },
  { name: '12366 纳税服务', url: 'https://12366.chinatax.gov.cn/' },
  { name: '国家法律法规库', url: 'https://flk.npc.gov.cn/' },
];

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* ========== Hero Section ========== */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: '#0a1628' }}>
        {/* 装饰光效 - 金色 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, rgba(212,168,83,0.3) 0%, transparent 70%)' }} />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, rgba(212,168,83,0.2) 0%, transparent 70%)' }} />
          {/* 装饰网格 */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(212,168,83,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,83,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
          {/* 装饰圆环 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-[#d4a853]/5 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-[#d4a853]/5 rounded-full" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-28 lg:py-36 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">
            {/* 左侧 */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Badge className="mb-6 bg-[#d4a853]/10 text-[#d4a853] border border-[#d4a853]/30 hover:bg-[#d4a853]/15 px-4 py-1.5 text-sm backdrop-blur-sm rounded-full">
                  <Sparkles className="h-3.5 w-3.5 mr-1.5 inline" />
                  近30年财税深耕 · 亿元级风险管控案例
                </Badge>
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.15] font-[family-name:var(--font-noto-serif-sc)]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{ color: '#e8dcc8' }}
              >
                专业铸根基
                <br />
                <span className="gold-text">
                  合规行致远
                </span>
              </motion.h1>

              <motion.p
                className="mt-6 text-lg sm:text-xl text-white/60 leading-relaxed max-w-xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                成都市柯洋税务师事务所 · 近30年财税深耕 · 全周期企业服务 · 亿元级风险管控案例背书
              </motion.p>

              {/* 核心数字 */}
              <motion.div
                className="mt-10 flex flex-wrap justify-center lg:justify-start gap-8 sm:gap-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                {[
                  { num: 30, label: '深耕行业', suffix: '年' },
                  { num: 1000, label: '服务企业', suffix: '+' },
                  { num: 0, label: '风控案例', text: '亿元级' },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold gold-text">
                      {item.text || <><AnimatedCounter value={item.num} suffix={item.suffix || ''} /></>}
                    </div>
                    <p className="text-sm text-white/40 mt-0.5">{item.label}</p>
                  </div>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.div
                className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-[#0a1628] rounded-full gold-gradient gold-glow transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  立即咨询
                </a>
                <a
                  href="/cases"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full border-2 border-[#d4a853]/40 text-white hover:bg-[#d4a853]/10 transition-all duration-300 w-full sm:w-auto"
                >
                  查看案例
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </motion.div>
            </motion.div>

            {/* 右侧团队展示 */}
            <motion.div
              className="hidden lg:flex flex-col items-center gap-4"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {[
                { name: '孙凤', title: '创始人 · 执业注册税务师', desc: '近30年实战经验', tags: ['疑难账务', '投资尽调', '矿产风控'], img: '/team/孙凤.png', size: 64 },
                { name: '丁汝彬', title: '联合创始人', desc: '懂税的股权架构师', tags: ['股权架构设计', '企业增长顾问'], img: '/team/丁汝彬.png', size: 56 },
                { name: '孙瑾', title: '联合创始人', desc: '企业增长顾问', tags: ['代理记账', '税务申报'], img: '/team/孙瑾.jpg', size: 56 },
              ].map((member, idx) => (
                <motion.div
                  key={member.name}
                  className={`w-full max-w-sm rounded-3xl overflow-hidden border border-white/10 transition-all duration-500 gold-glow ${
                    idx === 0 ? 'bg-white/[0.08]' : 'bg-white/[0.05]'
                  }`}
                  style={idx === 0 ? { boxShadow: '0 0 40px rgba(212,168,83,0.08)' } : {}}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + idx * 0.15 }}
                  whileHover={{ y: -4, transition: { duration: 0.3 } }}
                >
                  <div className={idx === 0 ? 'p-6' : 'p-5'}>
                    <div className="flex items-center gap-4">
                      <div className={`${idx === 0 ? 'w-16 h-16' : 'w-14 h-14'} rounded-2xl overflow-hidden bg-white/10 flex-shrink-0`} style={{ boxShadow: '0 0 0 2px rgba(212,168,83,0.3)' }}>
                        <Image src={member.img} alt={member.name} width={member.size} height={member.size} className="w-full h-full object-cover" />
                      </div>
                      <div className="min-w-0">
                        <p className={`font-bold text-white ${idx === 0 ? 'text-lg' : 'text-base'}`}>{member.name}</p>
                        <p className="text-sm" style={{ color: '#d4a853' }}>{member.title}</p>
                        <p className="text-white/40 text-xs mt-0.5">{member.desc}</p>
                      </div>
                    </div>
                    {member.tags && (
                      <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                        <div className="flex flex-wrap gap-2">
                          {member.tags.map((tag) => (
                            <span key={tag} className="px-2.5 py-1 bg-white/[0.06] text-white/60 text-xs rounded-full">{tag}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== 服务项目 ========== */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: '#f8f7f4' }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#d4a853]/10 text-[#b8913a] border border-[#d4a853]/20 hover:bg-[#d4a853]/15 rounded-full px-4 py-1.5">
                全方位服务
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-[family-name:var(--font-noto-serif-sc)]" style={{ color: '#0a1628' }}>
                一站式企业财税服务
              </h2>
              <p className="mt-4 text-lg" style={{ color: '#6b7280' }}>
                从公司注册到税务规划，覆盖企业全生命周期的财税需求
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <StaggerItem key={index}>
                    <div className="group bg-white rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-1 border border-[#d4a853]/10 hover:border-[#d4a853]/30 cursor-pointer h-full" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                      <div className="w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{ background: 'linear-gradient(135deg, #d4a853, #b8913a)' }}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-bold text-sm mb-1.5" style={{ color: '#0a1628' }}>{service.title}</h3>
                      <p className="text-xs leading-relaxed" style={{ color: '#6b7280' }}>{service.description}</p>
                    </div>
                  </StaggerItem>
                );
              })}
            </div>
          </StaggerContainer>

          <ScrollReveal delay={0.3}>
            <div className="mt-12 text-center">
              <a
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white rounded-full transition-all duration-300 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #1a3a5c, #0a1628)' }}
              >
                查看全部服务
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== 核心优势 ========== */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: '#ffffff' }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#d4a853]/10 text-[#b8913a] border border-[#d4a853]/20 hover:bg-[#d4a853]/15 rounded-full px-4 py-1.5">
                为什么要选我们
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-[family-name:var(--font-noto-serif-sc)]" style={{ color: '#0a1628' }}>
                专业团队，值得信赖
              </h2>
              <p className="mt-4 text-lg" style={{ color: '#6b7280' }}>
                不只是找会计，更是找了一个财税顾问团队
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {advantages.map((item, index) => {
                const Icon = item.icon;
                return (
                  <StaggerItem key={index}>
                    <div className="group bg-white rounded-2xl p-6 text-center transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-[#d4a853]/30 cursor-pointer h-full" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                      <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-bold text-base mb-2" style={{ color: '#0a1628' }}>{item.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>{item.description}</p>
                    </div>
                  </StaggerItem>
                );
              })}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* ========== 标杆案例 ========== */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: '#f8f7f4' }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#d4a853]/10 text-[#b8913a] border border-[#d4a853]/20 hover:bg-[#d4a853]/15 rounded-full px-4 py-1.5">
                <TrendingUp className="h-3.5 w-3.5 mr-1.5 inline" />
                标杆案例
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-[family-name:var(--font-noto-serif-sc)]" style={{ color: '#0a1628' }}>
                多行业实战经验
              </h2>
              <p className="mt-4 text-lg" style={{ color: '#6b7280' }}>
                从集团企业到矿产能源，亿元级风险管控实战背书
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cases.map((caseItem, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction={index % 2 === 0 ? 'left' : 'right'}>
                <Link href="/cases">
                  <div className={`h-full relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1 border ${caseItem.borderColor} cursor-pointer group bg-white`}>
                    <div className="p-6 relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${caseItem.bgGradient} opacity-50`} />
                      <div className="relative">
                        <div className="flex items-center gap-2 mb-3">
                          <h3 className="text-xl font-bold font-[family-name:var(--font-noto-serif-sc)]" style={{ color: '#0a1628' }}>{caseItem.title}</h3>
                          <ArrowRight className="h-5 w-5 transition-colors" style={{ color: '#d4a853' }} />
                        </div>
                        <p className="text-sm font-medium mb-4" style={{ color: '#b8913a' }}>{caseItem.subtitle}</p>
                        <div className="flex flex-wrap gap-2">
                          {caseItem.tags.map((tag, i) => (
                            <span key={i} className={`px-3 py-1 text-xs rounded-full border ${caseItem.tagColor}`}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-12 text-center">
              <a
                href="/cases"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white rounded-full transition-all duration-300 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #1a3a5c, #0a1628)' }}
              >
                查看全部案例
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== 政策法规模块 ========== */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: '#ffffff' }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#d4a853]/10 text-[#b8913a] border border-[#d4a853]/20 hover:bg-[#d4a853]/15 rounded-full px-4 py-1.5">
                官网重点新增
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-[family-name:var(--font-noto-serif-sc)]" style={{ color: '#0a1628' }}>
                财税政策 · 官方直达
              </h2>
              <p className="mt-4 text-lg" style={{ color: '#6b7280' }}>
                同步国家税务总局最新政策，权威来源、实时更新，助力企业合规经营
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
              {officialLinks.map((link, i) => (
                <StaggerItem key={i}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className="h-full rounded-xl border border-gray-100 hover:border-[#d4a853]/30 transition-all duration-300 hover:-translate-y-1 bg-white p-5 text-center flex flex-col items-center justify-center">
                      <div className="flex items-center justify-center gap-2">
                        <span className="font-semibold transition-colors" style={{ color: '#1a3a5c' }}>
                          {link.name}
                        </span>
                        <ExternalLink className="h-4 w-4 transition-colors" style={{ color: '#d4a853' }} />
                      </div>
                    </div>
                  </a>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          <ScrollReveal delay={0.3}>
            <div className="mt-10 text-center">
              <a
                href="/policy"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full border-2 transition-all duration-300"
                style={{ borderColor: '#d4a853', color: '#b8913a' }}
              >
                查看更多政策资源
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== 常见问题 FAQ ========== */}
      <section className="py-20 sm:py-24" style={{ backgroundColor: '#f8f7f4' }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#d4a853]/10 text-[#b8913a] border border-[#d4a853]/20 hover:bg-[#d4a853]/15 rounded-full px-4 py-1.5">
                <Search className="h-3.5 w-3.5 mr-1.5 inline" />
                常见问题
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-[family-name:var(--font-noto-serif-sc)]" style={{ color: '#0a1628' }}>
                您关心的问题，答案都在这里
              </h2>
              <p className="mt-4 text-lg" style={{ color: '#6b7280' }}>
                整理了企业主最常问的21个问题，涵盖注册公司、代理记账、税务规划等
              </p>
            </div>
          </ScrollReveal>

          {/* FAQ 分类预览 */}
          <StaggerContainer>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
              {[
                { name: '企业财税基础类', count: 4, icon: Building2 },
                { name: '小规模纳税人', count: 4, icon: Calculator },
                { name: '一般纳税人', count: 4, icon: FileText },
                { name: '特殊行业财税', count: 5, icon: Settings },
                { name: '选服务机构', count: 4, icon: HelpCircle },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <StaggerItem key={i}>
                    <div className="p-5 rounded-xl text-center transition-all duration-300 hover:-translate-y-1 cursor-pointer" style={{ backgroundColor: '#f5e8c8' }}>
                      <Icon className="h-6 w-6 mx-auto mb-2" style={{ color: '#b8913a' }} />
                      <p className="font-medium text-sm" style={{ color: '#0a1628' }}>{item.name}</p>
                      <p className="text-xs mt-1" style={{ color: '#b8913a' }}>{item.count} 个问题</p>
                    </div>
                  </StaggerItem>
                );
              })}
            </div>
          </StaggerContainer>

          {/* 热门问答 */}
          <div className="grid gap-3 max-w-3xl mx-auto mb-8">
            {[
              { q: '新公司成立后，财税方面需要做哪些基础工作？', a: '及时办理税务登记、银行账户备案、税种核定，按期完成纳税申报' },
              { q: '小规模和一般纳税人有什么区别？', a: '主要根据客户类型、进项发票、行业税负综合判断' },
              { q: '企业长期零申报有什么风险？', a: '易被列为异常监控对象，影响纳税信用等级' },
              { q: '大额投资前为什么要做财税尽调？', a: '提前识别隐性负债、税务风险，避免重大损失' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="bg-white rounded-xl p-5 border border-gray-100 hover:border-[#d4a853]/30 hover:-translate-y-0.5 transition-all duration-300">
                  <p className="font-medium text-sm mb-1" style={{ color: '#0a1628' }}>{item.q}</p>
                  <p className="text-xs" style={{ color: '#6b7280' }}>{item.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.2}>
            <div className="text-center">
              <a
                href="/faq"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white rounded-full transition-all duration-300 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #1a3a5c, #0a1628)' }}
              >
                查看全部21个问题
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== CTA Section ========== */}
      <section className="relative py-20 sm:py-28 overflow-hidden" style={{ backgroundColor: '#0a1628' }}>
        {/* 背景装饰 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, rgba(212,168,83,0.3) 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, rgba(212,168,83,0.2) 0%, transparent 70%)' }} />
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(212,168,83,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,83,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <Badge className="mb-6 bg-[#d4a853]/10 text-[#d4a853] border border-[#d4a853]/30 hover:bg-[#d4a853]/15 rounded-full px-4 py-1.5">
              <Briefcase className="h-3.5 w-3.5 mr-1.5" />
              立即开始
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-[family-name:var(--font-noto-serif-sc)] text-white">
              财税问题不用愁
              <br />
              <span className="gold-text">
                柯洋税所来帮您
              </span>
            </h2>
            <p className="mt-6 text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#9ca3af' }}>
              不管是新公司注册、日常记账报税，还是税务规划、财税合规，
              <br className="hidden sm:block" />有问题随时联系我们，专业团队为您解答。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-4 text-base font-medium rounded-full gold-gradient gold-glow transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                style={{ color: '#0a1628' }}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                在线咨询
              </a>
              <a
                href="tel:18980020731"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full border-2 border-[#d4a853]/40 text-white hover:bg-[#d4a853]/10 transition-all duration-300 w-full sm:w-auto"
              >
                <Phone className="mr-2 h-4 w-4" />
                孙凤 189-8002-0731
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <p className="mt-8 text-sm" style={{ color: '#6b7280' }}>
              工作时间：周一至周六 9:00-18:00 · 环球中心E5区9楼915号
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
