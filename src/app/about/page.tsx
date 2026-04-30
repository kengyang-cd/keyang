'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Users,
  Award,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-foreground">
              关于我们
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              成都市柯洋税务师事务所由资深财税专家孙凤创立
              <br className="hidden sm:block" />
              深耕财税服务近 30 年，具备公安备案资质
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6 text-center">
              公司简介
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                成都市柯洋税务师事务所由资深财税专家孙凤创立，团队拥有注册税务师、会计师、企业合规师、纳税筹划师、管理会计师等专业资质，2018 年高级会计师资格考试合格，深耕财税服务近 30 年，具备公安备案资质。
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                事务所专注为建筑工程、新消费饮品、文化传媒、律所、电商、制造企业、矿产能源等多领域实体企业，提供从账务规范、税务合规、内部审计、内控搭建、常年顾问到财税尽调 / 投资风控的一站式全周期财税解决方案。
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                曾成功为投资方完成内蒙古矿产项目财税尽调，规避上亿规模投资损失，具备亿元级大额投资项目财税尽调实战能力。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Philosophy */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-12">
              服务理念
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/10 p-8 backdrop-blur">
                <div className="text-4xl font-bold text-amber-400 mb-4">合规为先</div>
                <p className="text-white/80">合法合规是一切服务的基础</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-8 backdrop-blur">
                <div className="text-4xl font-bold text-amber-400 mb-4">专业为本</div>
                <p className="text-white/80">持证上岗，实战经验丰富</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-8 backdrop-blur">
                <div className="text-4xl font-bold text-amber-400 mb-4">长期陪伴</div>
                <p className="text-white/80">适配企业全生命周期发展</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Strengths */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              选择柯洋的五大理由
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-primary p-3">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">近 30 年实战团队</h3>
                    <p className="text-sm text-muted-foreground">创始人孙凤亲自带队，实战经验丰富</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-primary p-3">
                    <ShieldCheck className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">全流程合规闭环</h3>
                    <p className="text-sm text-muted-foreground">长期护航零税务风险</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-primary p-3">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">亿元级服务经验</h3>
                    <p className="text-sm text-muted-foreground">多行业标杆案例</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-primary p-3">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">长期陪伴式服务</h3>
                    <p className="text-sm text-muted-foreground">适配企业全生命周期</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 lg:col-span-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-primary p-3">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">政策实时同步</h3>
                    <p className="text-sm text-muted-foreground">权威政策链接直达</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="bg-muted/50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              资质认证
            </h2>
            <p className="mt-4 text-muted-foreground">
              持证经营，权威认证，值得信赖
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              {
                src: '/certs/zhiyeshuiwu.jpg',
                title: '执业注册税务师机构',
                desc: '国家税务总局认定执业资质，专业税务服务权威保障',
              },
              {
                src: '/certs/tsc5.jpg',
                title: 'TSC5 级信用等级',
                desc: '2024年度涉税专业服务机构最高信用等级',
              },
              {
                src: '/certs/dailijizhang.jpg',
                title: '代理记账许可证',
                desc: '财政部门审批许可，合法从事代理记账业务',
              },
              {
                src: '/certs/chengshihehuoren.jpg',
                title: '橙子财税集团城市合伙人',
                desc: '橙子财税集团授权城市合伙人，深度参与区域财税服务生态建设',
              },
              {
                src: '/certs/lishidanwei.jpg',
                title: '成都中小企业协会理事单位',
                desc: '获评理事单位，积极助力中小企业发展',
              },
              {
                src: '/certs/chengdudailijizhang.jpg',
                title: '成都代理记账协会会员',
                desc: '行业协会正式会员，接受行业自律监管',
              },
              {
                src: '/certs/chengxinguoyue.jpg',
                title: '诚信公约签署单位',
                desc: '成都市代理记账行业协会诚信公约签署单位',
              },
            ].map((cert) => (
              <Card
                key={cert.src}
                className="border-2 border-primary/20 overflow-hidden group hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-[4/3] bg-white overflow-hidden">
                  <Image
                    src={cert.src}
                    alt={cert.title}
                    fill
                    className="object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-foreground text-sm">{cert.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{cert.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              开启您的合规之旅
            </h2>
            <p className="mx-auto mt-6 text-lg text-primary-foreground/90">
              联系柯洋，让专业团队为您的企业保驾护航。
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
