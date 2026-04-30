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
  ExternalLink,
  Search,
  ClipboardCheck,
  TrendingDown,
  DollarSign,
  Calculator,
  Settings,
  HelpCircle,
} from 'lucide-react';

// 资质背书数据
const credentials = [
  '执业注册税务师机构',
  '涉税专业服务机构',
  'TSC5 信用等级',
  '公安备案',
  '服务企业1000+',
  '亿元级投资风险规避案例',
];

// 核心优势
const advantages = [
  {
    icon: Award,
    title: '持证专业团队',
    description: '核心成员均为注册税务师、会计师，创始人孙凤亲自带队实战',
    color: 'from-blue-500 to-indigo-600',
    bg: 'bg-blue-50',
    iconBg: 'bg-blue-100',
  },
  {
    icon: ShieldCheck,
    title: '合规有保障',
    description: '帮助企业提前排雷，全流程合规闭环，长期护航零税务风险',
    color: 'from-amber-500 to-orange-500',
    bg: 'bg-amber-50',
    iconBg: 'bg-amber-100',
  },
  {
    icon: DollarSign,
    title: '大额投资风控',
    description: '亿元级企业服务与投资风控双重经验，多行业标杆案例',
    color: 'from-emerald-500 to-teal-500',
    bg: 'bg-emerald-50',
    iconBg: 'bg-emerald-100',
  },
  {
    icon: Heart,
    title: '长期陪伴式服务',
    description: '不只是做账，更是您可以信赖的财税顾问，适配企业全生命周期',
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
  { icon: ShieldCheck, title: '财税合规', description: '专业保障，让企业远离风险', color: 'bg-emerald-50 text-emerald-600', hoverColor: 'group-hover:bg-emerald-100' },
  { icon: ClipboardCheck, title: '财税尽调', description: '投资风控・成本核验・风险识别', color: 'bg-orange-50 text-orange-600', hoverColor: 'group-hover:bg-orange-100' },
  { icon: CheckCircle2, title: '历史账清理', description: '梳理乱账旧账，让账目清晰合规', color: 'bg-slate-50 text-slate-600', hoverColor: 'group-hover:bg-slate-100' },
];

// 标杆案例
const cases = [
  {
    title: '新消费饮品集团企业',
    subtitle: '15家子公司规范・集团财税搭建・融资合规支撑・营收破亿',
    tags: ['集团化运营', '融资尽调', '全周期服务'],
    color: 'bg-blue-50 border-blue-100',
    accent: 'text-blue-600',
    bgGradient: 'from-blue-500/10 to-indigo-500/10',
  },
  {
    title: '建筑工程实体企业',
    subtitle: '15年零风险・资质维护・汇算鉴证・2亿营收稳健运营',
    tags: ['建筑行业', '资质维护', '零稽查'],
    color: 'bg-amber-50 border-amber-100',
    accent: 'text-amber-600',
    bgGradient: 'from-amber-500/10 to-orange-500/10',
  },
  {
    title: '文化传媒数字营销集团',
    subtitle: '4年全周期审计・5亿+营收合规・内控体系搭建・字节系资质支撑',
    tags: ['传媒行业', '内部审计', '亿级营收'],
    color: 'bg-emerald-50 border-emerald-100',
    accent: 'text-emerald-600',
    bgGradient: 'from-emerald-500/10 to-teal-500/10',
  },
  {
    title: '内蒙古矿产项目财税尽调',
    subtitle: '跨区域实地核查・穿透式成本核验・规避上亿投资损失',
    tags: ['矿产能源', '投资尽调', '风险规避'],
    color: 'bg-rose-50 border-rose-100',
    accent: 'text-rose-600',
    bgGradient: 'from-rose-500/10 to-pink-500/10',
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
                近30年财税深耕 · 亿元级风险管控案例
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.15]">
                专业铸根基
                <br />
                <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                  合规行致远
                </span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-white/70 leading-relaxed max-w-xl mx-auto lg:mx-0">
                成都市柯洋税务师事务所 · 近30年财税深耕 · 全周期企业服务 · 亿元级风险管控案例背书
              </p>

              {/* 核心数字 */}
              <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-8 sm:gap-12">
                {[
                  { num: '30年', label: '深耕行业' },
                  { num: '1000+', label: '服务企业' },
                  { num: '亿元级', label: '风控案例' },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">{item.num}</p>
                    <p className="text-sm text-white/50 mt-0.5">{item.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white hover:text-white px-8 py-6 text-base rounded-full shadow-xl shadow-amber-500/25 font-semibold w-full sm:w-auto">
                  <Link href="/contact">
                    <Phone className="mr-2 h-4 w-4" />
                    立即咨询
                  </Link>
                </Button>
                <Button asChild size="lg" className="bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white hover:text-white px-8 py-6 text-base rounded-full w-full sm:w-auto backdrop-blur-md transition-colors">
                  <Link href="/cases">
                    查看案例
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
                      {['疑难账务', '投资尽调', '矿产风控'].map((tag, i) => (
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

              {/* 孙瑾 - 第三卡片 */}
              <Card className="w-full max-w-sm shadow-lg shadow-black/10 border border-white/10 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md">
                <CardContent className="p-5">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl overflow-hidden bg-white/20 ring-2 ring-amber-400/50">
                      <Image src="/team/孙瑾.jpg" alt="孙瑾" width={56} height={56} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-base">孙瑾</p>
                      <p className="text-amber-400 text-sm">联合创始人</p>
                      <p className="text-white/50 text-xs mt-0.5">企业增长顾问</p>
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
          <div className="text-center mb-10">
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
            <Button asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white hover:text-white px-8 py-5 rounded-full text-sm font-medium shadow-lg shadow-blue-500/20">
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
          <div className="text-center mb-10">
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

      {/* ========== 标杆案例 ========== */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <Badge className="mb-4 bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-50">
              <TrendingUp className="h-3.5 w-3.5 mr-1.5 inline" />
              标杆案例
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              多行业实战经验
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              从集团企业到矿产能源，亿元级风险管控实战背书
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cases.map((caseItem, index) => (
              <Link key={index} href="/cases">
                <Card className={`h-full relative overflow-hidden border-2 ${caseItem.color} hover:shadow-lg transition-all duration-300 rounded-2xl cursor-pointer group`}>
                  <CardContent className="p-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${caseItem.bgGradient} opacity-50`} />
                    <div className="relative">
                      <div className="flex items-center gap-2 mb-3">
                        <h3 className="text-xl font-bold text-slate-900">{caseItem.title}</h3>
                        <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-slate-600 transition-colors" />
                      </div>
                      <p className={`${caseItem.accent} text-sm font-medium mb-4`}>{caseItem.subtitle}</p>
                      <div className="flex flex-wrap gap-2">
                        {caseItem.tags.map((tag, i) => (
                          <span key={i} className="px-2.5 py-1 bg-white/80 text-slate-600 text-xs rounded-full border border-slate-200">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white hover:text-white px-8 py-5 rounded-full text-sm font-medium shadow-lg shadow-rose-500/20">
              <Link href="/cases">
                查看全部案例
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ========== 政策法规模块 ========== */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-50 to-blue-50/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-50">
              官网重点新增
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              财税政策 · 官方直达
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              同步国家税务总局最新政策，权威来源、实时更新，助力企业合规经营
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {officialLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="h-full border-2 border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden">
                  <CardContent className="p-5 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span className="font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">
                        {link.name}
                      </span>
                      <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="border-2 border-blue-200 text-blue-700 hover:bg-blue-50 px-6 py-5 rounded-full">
              <Link href="/policy">
                查看更多政策资源
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ========== 常见问题 FAQ ========== */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-50">
              <Search className="h-3.5 w-3.5 mr-1.5 inline" />
              常见问题
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              您关心的问题，答案都在这里
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              整理了企业主最常问的21个问题，涵盖注册公司、代理记账、税务规划等
            </p>
          </div>

          {/* FAQ 分类预览 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {[
              { name: '企业财税基础类', count: 4, icon: Building2, color: 'bg-blue-50 text-blue-600' },
              { name: '小规模纳税人', count: 4, icon: Calculator, color: 'bg-emerald-50 text-emerald-600' },
              { name: '一般纳税人', count: 4, icon: FileText, color: 'bg-purple-50 text-purple-600' },
              { name: '特殊行业财税', count: 5, icon: Settings, color: 'bg-orange-50 text-orange-600' },
              { name: '选服务机构', count: 4, icon: HelpCircle, color: 'bg-indigo-50 text-indigo-600' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className={`p-4 rounded-xl ${item.color} text-center`}>
                  <Icon className="h-6 w-6 mx-auto mb-2 opacity-80" />
                  <p className="font-medium text-sm">{item.name}</p>
                  <p className="text-xs opacity-70 mt-1">{item.count} 个问题</p>
                </div>
              );
            })}
          </div>

          {/* 热门问答 */}
          <div className="grid gap-3 max-w-3xl mx-auto mb-8">
            {[
              { q: '新公司成立后，财税方面需要做哪些基础工作？', a: '及时办理税务登记、银行账户备案、税种核定，按期完成纳税申报' },
              { q: '小规模和一般纳税人有什么区别？', a: '主要根据客户类型、进项发票、行业税负综合判断' },
              { q: '企业长期零申报有什么风险？', a: '易被列为异常监控对象，影响纳税信用等级' },
              { q: '大额投资前为什么要做财税尽调？', a: '提前识别隐性负债、税务风险，避免重大损失' },
            ].map((item, i) => (
              <Card key={i} className="border border-slate-100 hover:border-indigo-200 hover:shadow-md transition-all">
                <CardContent className="p-4">
                  <p className="font-medium text-slate-900 text-sm mb-1">{item.q}</p>
                  <p className="text-slate-500 text-xs">{item.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white hover:text-white px-8 py-5 rounded-full text-sm font-medium shadow-lg shadow-indigo-500/20">
              <Link href="/faq">
                查看全部21个问题
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
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
              柯洋税所来帮您
            </span>
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            不管是新公司注册、日常记账报税，还是税务规划、财税合规，
            <br className="hidden sm:block" />有问题随时联系我们，专业团队为您解答。
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white hover:text-white px-10 py-6 text-base rounded-full shadow-xl shadow-blue-500/20 font-semibold w-full sm:w-auto">
              <Link href="/contact">
                <MessageCircle className="mr-2 h-4 w-4" />
                在线咨询
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-700 px-8 py-6 text-base rounded-full w-full sm:w-auto font-medium">
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
