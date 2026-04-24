import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Users,
  Award,
  Target,
  Heart,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';
import Image from 'next/image';

const milestones = [
  { year: '2019', title: '公司成立', description: '成都市柯洋税务师事务所有限公司正式成立，开始为中小企业提供税务服务。' },
  { year: '2020', title: '业务扩张', description: '服务范围扩大到企业税务规划和财务审计领域。' },
  { year: '2021', title: '团队壮大', description: '专业团队超过20人，服务企业超过500家。' },
  { year: '2023', title: '行业领先', description: '成为当地领先的税务师事务所，获得多项行业荣誉。' },
  { year: '2024', title: '创新发展', description: '引入数字化税务管理系统，提升服务效率和质量。' },
  { year: '2026', title: '持续领先', description: '服务企业超过1000家，团队超过50人。' },
];

const values = [
  {
    icon: CheckCircle2,
    title: '专业',
    description: '拥有多年税务从业经验的专业团队，熟悉各类税务政策和法规。',
  },
  {
    icon: Award,
    title: '诚信',
    description: '严格遵守职业道德，确保所有服务合规合法，让客户放心。',
  },
  {
    icon: Heart,
    title: '客户至上',
    description: '以客户需求为导向，提供个性化的税务解决方案。',
  },
  {
    icon: TrendingUp,
    title: '创新',
    description: '持续学习和创新，不断提升服务质量和技术水平。',
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-foreground">
              关于我们
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              专业、可靠、高效的税务服务合作伙伴，为企业提供全生命周期财税以及股权服务
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                公司简介
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                成都市柯洋税务师事务所有限公司是一家专业的税务服务机构，成立于2019年，拥有多年的税务服务经验。我们的团队由注册税务师、注册会计师等专业人士组成，致力于为企业提供全生命周期财税以及股权服务。
              </p>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                多年来，我们始终坚持"专业、诚信、客户至上"的服务理念，为数千家企业提供了专业的税务服务，帮助企业降低税务成本，规避税务风险，实现了合规经营和健康发展。
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-semibold">50+ 专业团队</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-semibold">7+ 年经验</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-semibold">1000+ 服务企业</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-semibold">多项行业荣誉</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-lg">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <div className="relative aspect-[4/3] w-full bg-muted">
                    <Image
                      src="/office-lobby.jpg"
                      alt="成都市柯洋税务师事务所有限公司前台"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                <p className="mt-4 text-center text-sm text-muted-foreground">
                  成都市柯洋税务师事务所前台
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development History */}
      <section className="bg-muted/50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              发展历程
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              见证我们的成长与进步
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            {milestones.map((milestone, index) => (
              <Card key={index}>
                <CardHeader>
                  <Badge className="w-fit bg-primary text-primary-foreground">{milestone.year}</Badge>
                  <CardTitle className="mt-3">{milestone.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{milestone.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              核心价值观
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              我们的价值观指引我们前进
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="rounded-md bg-primary/10 p-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-base text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-muted/50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-12 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <Card>
              <CardHeader>
                <Target className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4 text-2xl">企业使命</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  为企业提供专业、可靠、高效的税务服务，帮助企业降低税务成本，规避税务风险，实现合规经营和健康发展，成为企业信赖的税务服务合作伙伴。
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4 text-2xl">企业愿景</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  成为国内领先的税务服务提供商，通过持续创新和服务升级，为客户提供更优质的税务解决方案，推动税务服务行业的健康发展。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Qualification Certificates */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              资质证书
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              合法合规经营，值得信赖的合作伙伴
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">营业执照</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-muted">
                  <Image
                    src="/business-license.jpg"
                    alt="成都市柯洋税务师事务所有限公司营业执照"
                    fill
                    className="object-contain"
                  />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">行政登记证书</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-muted">
                  <Image
                    src="/admin-certificate.jpg"
                    alt="成都市柯洋税务师事务所有限公司行政登记证书"
                    fill
                    className="object-contain"
                  />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">服务信用等级</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-muted">
                  <Image
                    src="/service-credit-rating.jpg"
                    alt="成都市柯洋税务师事务所有限公司服务信用等级证书"
                    fill
                    className="object-contain"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}