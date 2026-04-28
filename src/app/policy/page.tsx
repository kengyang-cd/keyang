'use client';

import { Button } from '@/components/ui/button';
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
} from 'lucide-react';

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
    name: '12366 纳税服务平台',
    url: 'https://12366.chinatax.gov.cn/',
    description: '纳税服务综合平台，提供咨询、查询、办税等一站式服务',
    icon: Phone,
  },
  {
    name: '国家法律法规数据库',
    url: 'https://flk.npc.gov.cn/',
    description: '全国人大常委会法规数据库，覆盖国家法律法规全文检索',
    icon: Scale,
  },
];

export default function PolicyPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-foreground">
              财税政策 · 官方直达
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              同步国家税务总局、财政部最新政策
              <br className="hidden sm:block" />
              权威来源、实时更新，助力企业合规经营
            </p>
          </div>
        </div>
      </section>

      {/* Official Links */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              官方权威链接
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              点击即可跳转至官方平台，获取第一手政策信息
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {officialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="h-full border-2 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 lg:p-8">
                      <div className="flex items-start gap-4">
                        <div className="rounded-xl bg-gradient-to-br from-primary to-primary/80 p-4 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                              {link.name}
                            </h3>
                            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {link.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              );
            })}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">
            注：更多政策解读与实战干货，可关注公众号获取
          </p>
        </div>
      </section>

      {/* Policy Update Note */}
      <section className="bg-muted/50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <AlertCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      政策动态实时关注
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      柯洋税务团队实时关注国家税务总局、财政部等官方平台政策动态，
                      为企业提供最新政策解读与合规建议。如需专业政策分析支持，
                      欢迎联系我们。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Policy Search Guide */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              常用政策查询指引
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              快速找到您需要的政策文件
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            <Card>
              <CardContent className="p-6 text-center">
                <Search className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">精准检索</h3>
                <p className="text-sm text-muted-foreground">
                  使用政策法规库搜索栏，输入关键词精准定位政策文件
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <BookOpen className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">分类浏览</h3>
                <p className="text-sm text-muted-foreground">
                  按法律、行政法规、部门规章等分类浏览，快速定位所需层级
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Phone className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">在线咨询</h3>
                <p className="text-sm text-muted-foreground">
                  通过 12366 平台在线咨询，或联系柯洋获取专业政策解读
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              需要政策解读支持？
            </h2>
            <p className="mx-auto mt-6 text-lg text-primary-foreground/90">
              柯洋专家团队实时关注政策动态，为您提供专业政策分析与合规建议。
            </p>
            <div className="mt-10">
              <Button asChild size="lg" variant="secondary">
                <a href="tel:18980020731">
                  立即咨询 <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
