'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  User,
  Award,
  BookOpen,
  ShieldCheck,
  Users,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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
    credentials: '注册税务师',
    description: '近 30 年财税实战专家，多家亿元级企业特聘财务总监、财税顾问，擅长多行业财税服务与内控体系搭建。',
    highlight: '亲自带队，全程把控服务质量',
  },
  {
    name: '丁汝彬',
    title: '核心成员',
    credentials: '专业团队',
    description: '柯洋核心团队成员，持有注册税务师、会计师等专业资质，实战经验丰富，专注企业财税合规服务。',
    highlight: '持证上岗，专业可靠',
  },
  {
    name: '孙瑾',
    title: '核心成员',
    credentials: '专业团队',
    description: '柯洋核心团队成员，专注代理记账与税务申报服务，为企业提供规范化、日常化财税支持。',
    highlight: '规范高效，稳健交付',
  },
];

export default function TeamPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-foreground">
              专家团队
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              柯洋税务由资深财税专家孙凤创立，团队持有注册税务师、会计师、企业合规师、
              <br className="hidden sm:block" />
              纳税筹划师、管理会计师等专业资质，深耕财税服务近 30 年。
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 sm:py-20 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-10">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              专业资质认证
            </h2>
            <p className="mt-2 text-muted-foreground">
              团队成员持证上岗，合法合规执业
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 rounded-full bg-background px-5 py-3 text-sm font-medium shadow-sm border"
                >
                  <Icon className="h-4 w-4 text-primary" />
                  <span>{cert.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              核心团队
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              专业、可靠、长期陪伴
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  {/* Avatar Area */}
                  <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex justify-center">
                    <div className="relative h-32 w-32">
                      {member.name === '孙凤' ? (
                        <Image
                          src="/team/sunfeng.png"
                          alt={member.name}
                          fill
                          className="object-cover rounded-full ring-4 ring-white shadow-lg"
                          onError={() => {}}
                        />
                      ) : (
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center ring-4 ring-white shadow-lg">
                          <User className="h-16 w-16 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Info */}
                  <div className="p-6 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-3">
                      {member.credentials}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">{member.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {member.description}
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm text-primary font-medium">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>{member.highlight}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-12">
              团队服务理念
            </h2>
            <div className="grid gap-8 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/10 p-8 backdrop-blur text-center">
                <div className="text-4xl font-bold text-primary mb-4">合规为先</div>
                <p className="text-white/80">
                  合法合规是一切服务的基础
                </p>
              </div>
              <div className="rounded-2xl bg-white/10 p-8 backdrop-blur text-center">
                <div className="text-4xl font-bold text-primary mb-4">专业为本</div>
                <p className="text-white/80">
                  持证上岗，实战经验丰富
                </p>
              </div>
              <div className="rounded-2xl bg-white/10 p-8 backdrop-blur text-center">
                <div className="text-4xl font-bold text-primary mb-4">长期陪伴</div>
                <p className="text-white/80">
                  适配企业全生命周期发展
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              与专家团队直接沟通
            </h2>
            <p className="mx-auto mt-6 text-lg text-primary-foreground/90">
              立即联系柯洋，让专业团队为您的企业保驾护航。
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  立即咨询 <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <a href="tel:18980020731">
                  电话咨询：189-8002-0731
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
