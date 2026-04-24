import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  CheckCircle2,
  Users,
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
} from 'lucide-react';

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
  },
  {
    name: '孙瑾',
    role: '联合创始人',
    title: '执业注册税务师 · 会计师',
    highlight: '工商注册注销专家',
    description: '擅长工商注册、公司变更、注销等业务，服务企业数百家',
    specialties: ['工商注册', '公司变更', '注销清算'],
    image: '/team/孙瑾.jpg',
  },
  {
    name: '丁汝彬',
    role: '联合创始人',
    title: '执业注册税务师 · 会计师 · AI商业培训导师',
    highlight: '懂税的股权架构师',
    description: '20余年深耕财税领域，帮助企业解决钱留不住、做不大、增长没方法的问题',
    specialties: ['股权架构', '企业增长', 'AI赋能'],
    image: '/team/丁汝彬.png',
  },
  {
    name: '马晓兰',
    role: '财税顾问',
    title: '执业注册税务师 · 会计师',
    highlight: '12年大型企业经验',
    description: '曾任大型民营企业财务经理，熟悉税务申报及财税合规全流程',
    specialties: ['财务核算', '税务申报', '风险控制'],
    image: '/team/马晓兰.png',
  },
  {
    name: '郑琴',
    role: '财税顾问',
    title: '执业注册税务师 · 会计师',
    highlight: '专注中小企业',
    description: '7年专注服务中小企业，逻辑清晰、沟通顺畅，能快速定位财税问题',
    specialties: ['账务处理', '税务规划', '合规咨询'],
    image: '/team/郑琴.png',
  },
  {
    name: '袁媛',
    role: '财税顾问',
    title: '执业注册税务师 · 会计师',
    highlight: '财税合规优化专家',
    description: '8年经验，擅长将财税管理与企业经营深度融合，提供可落地方案',
    specialties: ['内控体系', '预算管理', '合规优化'],
    image: '/team/袁媛.png',
  },
];

// 核心优势
const advantages = [
  {
    icon: Award,
    title: '持证专业团队',
    description: '核心成员均为注册税务师、会计师，不是普通代账会计',
  },
  {
    icon: Clock,
    title: '服务稳定可靠',
    description: '专注企业财税服务，不跑路、不断档',
  },
  {
    icon: ShieldCheck,
    title: '合规有保障',
    description: '帮助企业提前排雷，远离税务风险和稽查风险',
  },
  {
    icon: Heart,
    title: '服务有温度',
    description: '不只是做账，更是您可以信赖的财税顾问',
  },
];

// 服务项目
const services = [
  {
    icon: FileText,
    title: '工商注册',
    description: '公司设立、变更、注销，一站式服务',
  },
  {
    icon: Building2,
    title: '代理记账',
    description: '专业会计团队，账务清晰、申报准时',
  },
  {
    icon: TrendingUp,
    title: '税务规划',
    description: '合法合规，帮您省下该省的钱',
  },
  {
    icon: Zap,
    title: '财税咨询',
    description: '随时答疑，有问题随时问',
  },
  {
    icon: ShieldCheck,
    title: '财税审计',
    description: '专业审计，规避风险，合规保障',
  },
  {
    icon: CheckCircle2,
    title: '历史账清理',
    description: '梳理乱账旧账，让账目清晰合规',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - 亲和力风格 */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-16 sm:py-24 lg:py-32">
        {/* 装饰背景 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 左侧文案 */}
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-100 px-4 py-1">
                🏆 成都6年老品牌 · 专注财税服务
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                帮成都老板
                <br />
                <span className="text-orange-600">省心做财税</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
                成都市柯洋税务师事务所，专业团队，<strong className="text-gray-800">帮您省心、<br className="hidden sm:block" />合规、放心做企业。</strong>
              </p>
              
              {/* 核心数字 */}
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8">
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-orange-600">6年+</p>
                  <p className="text-sm text-gray-500">深耕行业</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-orange-600">300+</p>
                  <p className="text-sm text-gray-500">服务企业</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-orange-600">12人</p>
                  <p className="text-sm text-gray-500">专业团队</p>
                </div>
              </div>
              
              {/* CTA按钮 */}
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-orange-200">
                  <Link href="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    立即咨询
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2 border-orange-200 hover:border-orange-300 px-8 py-6 text-lg rounded-full">
                  <Link href="/services">
                    了解服务
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* 右侧团队展示 */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* 创始人卡片 - 孙凤 */}
                <Card className="absolute -top-2 -left-4 z-10 w-72 shadow-xl border-orange-100 rounded-2xl overflow-hidden bg-white">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-orange-100 flex-shrink-0">
                        <Image
                          src="/team/孙凤.png"
                          alt="孙凤"
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">孙凤</p>
                        <p className="text-sm text-orange-600">创始人</p>
                        <p className="text-xs text-gray-500">近30年实战经验</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* 联合创始人卡片 - 孙瑾 */}
                <Card className="absolute -top-4 -left-6 z-20 w-72 shadow-xl border-blue-100 rounded-2xl overflow-hidden bg-white">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-blue-100 flex-shrink-0">
                        <Image
                          src="/team/孙瑾.jpg"
                          alt="孙瑾"
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">孙瑾</p>
                        <p className="text-sm text-orange-600">联合创始人</p>
                        <p className="text-xs text-gray-500">工商注册注销专家</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* 联合创始人卡片 - 丁汝彬 */}
                <Card className="absolute top-36 -right-4 z-20 w-72 shadow-xl border-amber-100 rounded-2xl overflow-hidden bg-white">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-amber-100 flex-shrink-0">
                        <Image
                          src="/team/丁汝彬.png"
                          alt="丁汝彬"
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">丁汝彬</p>
                        <p className="text-sm text-orange-600">联合创始人</p>
                        <p className="text-xs text-gray-500">懂税的股权架构师</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>


                

                
                {/* 背景装饰 */}
                <div className="w-full h-[500px] bg-gradient-to-br from-orange-100 to-amber-100 rounded-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 服务项目 */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              我们的服务
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              围绕企业发展，提供一站式财税服务
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-orange-200 rounded-2xl overflow-hidden">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-orange-50 flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                      <Icon className="h-7 w-7 text-orange-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 为什么选择我们 */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-100">
              核心优势
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              为什么选择柯洋财税？
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              不只是找会计，更是找了一个财税顾问团队
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="bg-white/80 backdrop-blur border-orange-100 rounded-2xl">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-400 to-amber-400 flex items-center justify-center shadow-lg shadow-orange-200">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 团队介绍 */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-amber-100 text-amber-700 hover:bg-amber-100">
              认识我们
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              专业的财税团队
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              经验丰富、各有所长，帮您解决各种财税难题
            </p>
          </div>
          
          {/* 创始人/联合创始人 - 大卡片 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {teamMembers.slice(0, 2).map((member, index) => (
              <Card key={index} className="overflow-hidden border-2 border-orange-100 hover:border-orange-200 transition-all rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden bg-orange-50 flex-shrink-0 mx-auto sm:mx-0">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={144}
                        height={144}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <div className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-2">
                        {member.role}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                      <p className="text-orange-600 font-medium">{member.title}</p>
                      <p className="text-amber-600 text-sm mt-1">{member.highlight}</p>
                      <p className="text-gray-600 mt-3 text-sm leading-relaxed">{member.description}</p>
                      <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-4">
                        {member.specialties.map((specialty, i) => (
                          <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
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
          
          {/* 其他成员 - 小卡片网格 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.slice(2).map((member, index) => (
              <Card key={index} className="overflow-hidden border-2 border-amber-100 hover:border-amber-200 transition-all rounded-2xl">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-orange-50 mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="inline-block px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-sm font-medium mb-2">
                    {member.role}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-orange-600 text-sm font-medium">{member.title}</p>
                  <p className="text-amber-600 text-sm mt-1">{member.highlight}</p>
                  <p className="text-gray-600 mt-3 text-sm leading-relaxed">{member.description}</p>
                  <div className="flex flex-wrap justify-center gap-2 mt-4">
                    {member.specialties.map((specialty, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
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

      {/* 客户评价 - 抖音真实好评 */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-100">
              真实反馈
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              抖音客户好评
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              来自抖音团购的真实评价 ⭐⭐⭐⭐⭐
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="border-2 border-orange-100 rounded-2xl hover:shadow-lg transition-shadow">
              <CardContent className="p-3">
                <div className="w-full flex justify-center bg-gray-100 rounded-xl overflow-hidden">
                  <Image
                    src="/reviews/review1.jpg"
                    alt="客户评价1"
                    width={280}
                    height={300}
                    className="object-contain max-h-[400px]"
                  />
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-orange-100 rounded-2xl hover:shadow-lg transition-shadow">
              <CardContent className="p-3">
                <div className="w-full flex justify-center bg-gray-100 rounded-xl overflow-hidden">
                  <Image
                    src="/reviews/review2.jpg"
                    alt="客户评价2"
                    width={280}
                    height={300}
                    className="object-contain max-h-[400px]"
                  />
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-orange-100 rounded-2xl hover:shadow-lg transition-shadow">
              <CardContent className="p-3">
                <div className="w-full flex justify-center bg-gray-100 rounded-xl overflow-hidden">
                  <Image
                    src="/reviews/review3.jpg"
                    alt="客户评价3"
                    width={280}
                    height={300}
                    className="object-contain max-h-[400px]"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* 抖音二维码 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 bg-white rounded-3xl p-8 shadow-lg border-2 border-orange-100">
            <div className="w-40 h-40 relative">
              <Image
                src="/douyin/qrcode.jpg"
                alt="抖音二维码"
                fill
                className="object-contain rounded-xl"
              />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                抖音搜索：成都市柯洋税务师事务所
              </h3>
              <p className="text-gray-600">
                关注我们，了解更多财税干货<br/>
                团购优惠享不停
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-orange-500 to-amber-500">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            财税问题不用愁
            <br />
            柯洋财税来帮您
          </h2>
          <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto">
            不管是新公司注册、日常记账报税，还是股权架构、税务规划，<br className="hidden sm:block" />
            有问题随时联系我们，专业团队为您解答。
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg rounded-full shadow-xl">
              <Link href="/contact">
                <MessageCircle className="mr-2 h-5 w-5" />
                在线咨询
              </Link>
            </Button>
            <Button asChild size="lg" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-orange-600 px-6 py-6 text-base rounded-full">
              <Link href="tel:18980020731">
                <Phone className="mr-2 h-5 w-5" />
                孙凤 18980020731
              </Link>
            </Button>

          </div>
        </div>
      </section>
    </div>
  );
}
