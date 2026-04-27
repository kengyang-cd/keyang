import Link from 'next/link';
import Image from 'next/image';
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
  Zap,
  Award,
  Phone,
  MessageCircle,
  Clock,
  Heart,
  Star,
  Users,
  Briefcase,
} from 'lucide-react';

// 资质背书数据
const credentials = [
  '执业注册税务师机构',
  '涉税专业服务机构',
  'TSC5 信用等级',
  '公安备案',
];

// 团队成员数据
const teamMembers = [
  {
    name: '孙凤',
    role: '创始人',
    title: '执业注册税务师 · 会计师 · 合规师',
    highlight: '近30年实战经验',
    description: '深耕财税领域近30年，累计服务企业上千家，擅长解决企业关键难题',
    specialties: ['疑难账务清理', '税务稽查应对', '股权架构优化'],
    image: '/team/孙凤.png',
    color: 'bg-blue-50 border-blue-100',
    textColor: 'text-blue-700',
  },
  {
    name: '丁汝彬',
    role: '联合创始人',
    title: '执业注册税务师 · 会计师 · AI商业培训导师',
    highlight: '懂税的股权架构师',
    description: '20余年深耕财税领域，帮助企业解决钱留不住、做不大、增长没方法的问题',
    specialties: ['股权架构', '企业增长', 'AI赋能'],
    image: '/team/丁汝彬.png',
    color: 'bg-amber-50 border-amber-100',
    textColor: 'text-amber-700',
  },
  {
    name: '马晓兰',
    role: '财税顾问',
    title: '执业注册税务师 · 会计师',
    highlight: '12年大型企业经验',
    description: '曾任大型民营企业财务经理，熟悉税务申报及财税合规全流程',
    specialties: ['财务核算', '税务申报', '风险控制'],
    image: '/team/马晓兰.png',
    color: 'bg-slate-50 border-slate-100',
    textColor: 'text-slate-700',
  },
  {
    name: '郑琴',
    role: '财税顾问',
    title: '执业注册税务师 · 会计师',
    highlight: '专注中小企业',
    description: '7年专注服务中小企业，逻辑清晰、沟通顺畅，能快速定位财税问题',
    specialties: ['账务处理', '税务合规', '合规咨询'],
    image: '/team/郑琴.png',
    color: 'bg-emerald-50 border-emerald-100',
    textColor: 'text-emerald-700',
  },
  {
    name: '袁媛',
    role: '财税顾问',
    title: '执业注册税务师 · 会计师',
    highlight: '财税合规优化专家',
    description: '8年经验，擅长将财税管理与企业经营深度融合，提供可落地方案',
    specialties: ['内控体系', '预算管理', '合规优化'],
    image: '/team/袁媛.png',
    color: 'bg-purple-50 border-purple-100',
    textColor: 'text-purple-700',
  },
];

// 核心优势
const advantages = [
  {
    icon: Award,
    title: '持证专业团队',
    description: '核心成员均为注册税务师、会计师，不是普通代账会计',
    color: 'from-blue-500 to-indigo-600',
    bg: 'bg-blue-50',
    iconBg: 'bg-blue-100',
  },
  {
    icon: Clock,
    title: '服务稳定可靠',
    description: '专注企业财税服务，不跑路、不断档',
    color: 'from-slate-600 to-slate-700',
    bg: 'bg-slate-50',
    iconBg: 'bg-slate-100',
  },
  {
    icon: ShieldCheck,
    title: '合规有保障',
    description: '帮助企业提前排雷，远离税务风险和稽查风险',
    color: 'from-amber-500 to-orange-500',
    bg: 'bg-amber-50',
    iconBg: 'bg-amber-100',
  },
  {
    icon: Heart,
    title: '服务有温度',
    description: '不只是做账，更是您可以信赖的财税顾问',
    color: 'from-rose-500 to-pink-500',
    bg: 'bg-rose-50',
    iconBg: 'bg-rose-100',
  },
];

// 服务项目
const services = [
  { icon: FileText, title: '工商注册', description: '公司设立、变更、注销，一站式服务', color: 'bg-blue-50 text-blue-600', hoverColor: 'group-hover:bg-blue-100' },
  { icon: Building2, title: '代理记账', description: '专业会计团队，账务清晰、申报准时', color: 'bg-indigo-50 text-indigo-600', hoverColor: 'group-hover:bg-indigo-100' },
  { icon: TrendingUp, title: '税务规划', description: '合法合规，帮您省下该省的钱', color: 'bg-amber-50 text-amber-600', hoverColor: 'group-hover:bg-amber-100' },
  { icon: Zap, title: '财税咨询', description: '随时答疑，有问题随时问', color: 'bg-orange-50 text-orange-600', hoverColor: 'group-hover:bg-orange-100' },
  { icon: ShieldCheck, title: '财税合规', description: '专业保障，让企业远离风险', color: 'bg-emerald-50 text-emerald-600', hoverColor: 'group-hover:bg-emerald-100' },
  { icon: CheckCircle2, title: '历史账清理', description: '梳理乱账旧账，让账目清晰合规', color: 'bg-slate-50 text-slate-600', hoverColor: 'group-hover:bg-slate-100' },
];

// 客户证言
const testimonials = [
  {
    quote: '合作了2年，账务从来没出过问题，而且税务规划帮我们省了不少冤枉钱。',
    author: '某电商企业 创始人',
    industry: '抖音电商',
    rating: 5,
  },
  {
    quote: '之前找的代账公司跑路了，账目一塌糊涂。柯洋帮我们把历史账全部梳理清楚。',
    author: '某科技公司 负责人',
    industry: '软件开发',
    rating: 5,
  },
  {
    quote: '注册公司的时候朋友推荐过来的，服务专业、响应及时，很放心。',
    author: '某咨询公司 创始人',
    industry: '企业咨询',
    rating: 5,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* ========== 顶部资质条 ========== */}
      <div className="bg-[#1a2744] text-white/80 text-sm">
        <div className="mx-auto max-w-7xl px-6 py-2.5 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          {credentials.map((c, i) => (
            <span key={i} className="flex items-center gap-1.5 whitespace-nowrap">
              <CheckCircle2 className="h-3.5 w-3.5 text-amber-400 flex-shrink-0" />
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* ========== Hero Section ========== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-[#1a2744] to-[#1e3a5f] text-white">
        {/* 装饰光效 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">
            {/* 左侧 */}
            <div className="text-center lg:text-left">
              <Badge className="mb-6 bg-white/10 text-amber-300 border border-amber-400/30 hover:bg-white/15 px-4 py-1.5 text-sm backdrop-blur-sm">
                <Star className="h-3.5 w-3.5 mr-1.5 inline" />
                成都12年本土品牌 · 服务企业1000+
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.15]">
                让成都企业
                <br />
                <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                  财税无忧
                </span>
                <br />
                经营更安心
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-white/70 leading-relaxed max-w-xl mx-auto lg:mx-0">
                成都柯洋税务师事务所，专注企业<span className="text-white font-semibold">税务规划</span>、
                <span className="text-white font-semibold">财税合规</span>与顾问服务，
                <br className="hidden sm:block" />专业团队，让您的企业行稳致远。
              </p>

              {/* 核心数字 */}
              <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-8 sm:gap-12">
                {[
                  { num: '12年', label: '深耕行业' },
                  { num: '1000+', label: '服务企业' },
                  { num: '持证', label: '专业团队' },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">{item.num}</p>
                    <p className="text-sm text-white/50 mt-0.5">{item.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-6 text-base rounded-full shadow-xl shadow-amber-500/25 font-semibold w-full sm:w-auto">
                  <Link href="/contact">
                    <Phone className="mr-2 h-4 w-4" />
                    立即咨询
                  </Link>
                </Button>
                <Button asChild size="lg" className="bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white px-8 py-6 text-base rounded-full w-full sm:w-auto backdrop-blur-md transition-all">
                  <Link href="/services">
                    了解服务
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* 右侧团队展示 - 孙凤在上，丁汝彬在下 */}
            <div className="hidden lg:flex flex-col items-center gap-4">
              {/* 孙凤 - 主卡片 */}
              <Card className="w-full max-w-sm shadow-2xl shadow-black/20 border border-white/10 rounded-3xl overflow-hidden bg-white/10 backdrop-blur-md">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white/20 flex-shrink-0 ring-2 ring-amber-400/50">
                      <Image src="/team/孙凤.png" alt="孙凤" width={64} height={64} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-lg">孙凤</p>
                      <p className="text-amber-400 text-sm font-medium">创始人 · 执业注册税务师</p>
                      <p className="text-white/50 text-xs mt-0.5">近30年实战经验</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex flex-wrap gap-2">
                      {['疑难账务', '税务稽查', '股权架构'].map((tag, i) => (
                        <span key={i} className="px-2.5 py-1 bg-white/10 text-white/70 text-xs rounded-full">{tag}</span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 丁汝彬 - 次卡片 */}
              <Card className="w-full max-w-sm shadow-xl shadow-black/10 border border-white/10 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md">
                <CardContent className="p-5">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl overflow-hidden bg-white/20 ring-2 ring-amber-400/50">
                      <Image src="/team/丁汝彬.png" alt="丁汝彬" width={56} height={56} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-base">丁汝彬</p>
                      <p className="text-amber-400 text-sm">联合创始人</p>
                      <p className="text-white/50 text-xs mt-0.5">懂税的股权架构师</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 服务项目 ========== */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-50">
              全方位服务
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              一站式企业财税服务
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              从公司注册到税务规划，覆盖企业全生命周期的财税需求
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-slate-100 hover:border-slate-200 rounded-2xl overflow-hidden">
                  <CardContent className="p-5 text-center">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-xl ${service.color} ${service.hoverColor} transition-colors flex items-center justify-center`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-1.5 text-sm">{service.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-5 rounded-full text-sm font-medium shadow-lg shadow-blue-500/20">
              <Link href="/services">
                查看全部服务
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ========== 核心优势 ========== */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-50 to-blue-50/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-50">
              为什么要选我们
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              专业团队，值得信赖
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              不只是找会计，更是找了一个财税顾问团队
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="bg-white/90 backdrop-blur border border-slate-100 hover:shadow-lg hover:border-slate-200 transition-all duration-300 rounded-2xl overflow-hidden">
                  <CardContent className="p-6 text-center">
                    <div className={`w-14 h-14 mx-auto mb-5 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2 text-base">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== 团队介绍 ========== */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-100">
              认识我们
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              专业的财税团队
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              经验丰富、各有所长，帮您解决各种财税难题
            </p>
          </div>

          {/* 创始人卡片 - 大尺寸 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {teamMembers.slice(0, 2).map((member, index) => (
              <Card key={index} className="overflow-hidden border-2 border-slate-100 hover:border-slate-200 transition-all rounded-2xl hover:shadow-lg">
                <CardContent className="p-7">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden bg-slate-50 flex-shrink-0 mx-auto sm:mx-0 ring-2 ring-slate-100">
                      <Image src={member.image} alt={member.name} width={144} height={144} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-2">
                        {member.role}
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">{member.name}</h3>
                      <p className="text-blue-600 font-medium text-sm mt-0.5">{member.title}</p>
                      <p className="text-amber-600 text-sm mt-1">{member.highlight}</p>
                      <p className="text-slate-600 mt-3 text-sm leading-relaxed">{member.description}</p>
                      <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-4">
                        {member.specialties.map((specialty, i) => (
                          <span key={i} className="px-2.5 py-1 bg-slate-50 text-slate-600 text-xs rounded-full border border-slate-100">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 其他成员 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.slice(2).map((member, index) => (
              <Card key={index} className={`overflow-hidden border-2 ${member.color} transition-all rounded-2xl hover:shadow-md`}>
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 mx-auto rounded-2xl overflow-hidden bg-slate-50 mb-4 ring-2 ring-white">
                    <Image src={member.image} alt={member.name} width={80} height={80} className="w-full h-full object-cover" />
                  </div>
                  <div className="inline-block px-3 py-1 rounded-full bg-white/80 text-slate-700 text-sm font-medium mb-1.5">
                    {member.role}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                  <p className="text-blue-600 text-sm font-medium mt-0.5">{member.title}</p>
                  <p className={`${member.textColor} text-sm mt-1`}>{member.highlight}</p>
                  <p className="text-slate-600 mt-3 text-sm leading-relaxed">{member.description}</p>
                  <div className="flex flex-wrap justify-center gap-1.5 mt-4">
                    {member.specialties.map((specialty, i) => (
                      <span key={i} className="px-2 py-0.5 bg-white/80 text-slate-600 text-xs rounded-full border border-slate-200">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 客户证言 ========== */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-900 via-[#1a2744] to-[#1e3a5f] text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/10 text-amber-300 border border-amber-400/30 hover:bg-white/15 px-4 py-1">
              <Star className="h-3.5 w-3.5 mr-1.5 inline fill-amber-400" />
              真实客户评价
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              客户说好，才是真的好
            </h2>
            <p className="mt-4 text-lg text-white/60">
              来自服务过的企业真实反馈
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, i) => (
              <Card key={i} className="bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/[0.13] transition-colors rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: item.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed italic">"{item.quote}"</p>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-white font-medium text-sm">{item.author}</p>
                    <p className="text-white/40 text-xs mt-0.5">{item.industry}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA Section ========== */}
      <section className="relative py-20 sm:py-28 bg-white overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl -translate-y-1/2" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-50 rounded-full blur-3xl translate-y-1/2" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-50">
            <Briefcase className="h-3.5 w-3.5 mr-1.5" />
            立即开始
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            财税问题不用愁
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              柯洋财税来帮您
            </span>
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            不管是新公司注册、日常记账报税，还是税务规划、财税合规，
            <br className="hidden sm:block" />有问题随时联系我们，专业团队为您解答。
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-6 text-base rounded-full shadow-xl shadow-blue-500/20 font-semibold w-full sm:w-auto">
              <Link href="/contact">
                <MessageCircle className="mr-2 h-4 w-4" />
                在线咨询
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-slate-200 text-slate-700 hover:bg-slate-50 px-8 py-6 text-base rounded-full w-full sm:w-auto font-medium">
              <Link href="tel:18980020731">
                <Phone className="mr-2 h-4 w-4" />
                孙凤 189-8002-0731
              </Link>
            </Button>
          </div>

          {/* 小字说明 */}
          <p className="mt-8 text-sm text-slate-400">
            工作时间：周一至周六 9:00-18:00 · 环球中心E5区9楼915号
          </p>
        </div>
      </section>
    </div>
  );
}
