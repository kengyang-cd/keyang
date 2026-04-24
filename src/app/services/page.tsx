import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  FileText,
  ShieldCheck,
  Building2,
  Zap,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Award,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const serviceSystems = [
  {
    icon: FileText,
    title: '企业基础财税服务体系',
    description: '为创业期及成长型企业提供稳定、规范、高效的基础财税支持，保障企业日常经营合规运行。',
    features: [
      '公司注册与工商登记',
      '工商变更与公司注销',
      '代理记账与账务处理',
      '纳税申报与税种管理',
      '发票管理与财务资料整理',
      '税务登记与税务备案事项',
    ],
    highlight: '通过标准化流程管理与项目负责人制度，确保基础业务交付准确、及时、可追溯。',
  },
  {
    icon: ShieldCheck,
    title: '财税合规与风险管理体系',
    description: '针对企业经营过程中可能出现的涉税风险与财务隐患，提供系统性风险排查与整改支持。',
    features: [
      '税务合规体检',
      '税务风险评估与整改建议',
      '税务稽查应对支持',
      '企业往来款梳理与规范',
      '历史账务重建与调整',
      '财务制度规范化建设',
      '长期股权投资与资本公积合规梳理',
    ],
    highlight: '帮助企业在复杂政策环境下保持风险可控，为后续融资、股权调整及资本运作奠定基础。',
  },
  {
    icon: Building2,
    title: '股权与资本结构财税支持',
    description: '围绕企业发展与股东结构调整需求，提供专业的股权与资本涉税支持。',
    features: [
      '股权转让税务方案设计',
      '股权架构设计与优化',
      '股东投资成本确认',
      '出资与资本公积合规处理',
      '投融资财税顾问支持',
      '企业估值及转让涉税分析',
    ],
    highlight: '通过合规前置规划，降低企业及股东潜在税务风险，实现结构清晰、责任明确。',
  },
  {
    icon: Zap,
    title: 'AI赋能企业财税升级体系',
    description: '将人工智能工具应用于资料管理、风险筛查、标准文书生成及内部流程优化等环节。',
    features: [
      'AI财税数字员工部署',
      'AI财务台账与自动化管理',
      'AI企业经营辅助系统',
      'AI内容获客与线索管理体系',
      'AI+财税顾问服务整合方案',
    ],
    highlight: '在保证专业判断由持证人员负责的前提下，提升服务效率与管理水平，实现传统财税服务与数字化能力融合升级。',
  },
];

const guaranteeMechanisms = [
  {
    title: '项目负责人制度',
    description: '每个服务项目都有专人负责，确保服务质量和进度可控。',
  },
  {
    title: '多级复核机制',
    description: '建立多级质量复核体系，确保服务结果的准确性和可靠性。',
  },
  {
    title: '资料清单制',
    description: '明确资料清单，确保信息完整，服务过程透明。',
  },
  {
    title: '过程留痕制',
    description: '完整记录服务过程，确保每一步都可追溯。',
  },
  {
    title: '结果确认制',
    description: '服务成果需经客户确认，确保满意度。',
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-foreground">
              服务体系介绍
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              成都市柯洋税务师事务所有限公司是一家依法设立并执业的专业涉税服务机构，专注于企业财税合规、税务风险管理及企业全生命周期财税支持。事务所以"专业、合规、稳健、可持续"为核心理念，围绕企业不同发展阶段，构建了系统化的财税服务体系。
            </p>
          </div>
        </div>
      </section>

      {/* Service Systems */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              四大服务体系
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              围绕企业不同发展阶段，提供系统化的财税服务支持
            </p>
          </div>
          <div className="mx-auto mt-16 space-y-16">
            {serviceSystems.map((system, index) => {
              const Icon = system.icon;
              return (
                <Card key={index} className="border-2 overflow-hidden">
                  <CardHeader className="bg-muted/50">
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-primary p-3">
                        <Icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl">{system.title}</CardTitle>
                        <p className="mt-2 text-base text-muted-foreground">
                          {system.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                          服务内容
                        </h4>
                        <ul className="space-y-2">
                          {system.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <ChevronRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-lg bg-primary/5 p-4 border-l-4 border-primary">
                        <p className="text-sm text-foreground font-medium">
                          {system.highlight}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Guarantee */}
      <section className="bg-muted/50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              服务保障机制
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              事务所实行项目负责人制度与多级复核机制，确保服务结果"说得清、做得到、可追溯"
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            {guaranteeMechanisms.map((mechanism, index) => (
              <Card key={index}>
                <CardHeader>
                  <CheckCircle2 className="h-10 w-10 text-primary" />
                  <CardTitle className="mt-3 text-lg">{mechanism.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {mechanism.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Credit Rating */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Award className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                服务信用等级
              </h2>
            </div>
            <p className="mt-4 text-lg text-muted-foreground">
              以专业合规的服务品质，获得权威机构认可
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-3xl">
            <Card className="border-2 shadow-xl">
              <CardContent className="p-8">
                <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden bg-muted">
                  <Image
                    src="/service-credit-rating.jpg"
                    alt="服务信用等级证书 - TSC5级"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm text-muted-foreground">评定单位：</span>
                    <span className="text-sm font-medium text-foreground">
                      国家税务总局成都高新技术产业开发区税务局
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm text-muted-foreground">评定时间：</span>
                    <span className="text-sm font-medium text-foreground">
                      2025年5月
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm text-muted-foreground">信用等级：</span>
                    <span className="text-lg font-bold text-primary">TSC5级</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Vision */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Card className="border-2 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">
                  企业愿景
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  柯洋税务师事务所致力于成为企业长期信任的专业财税顾问伙伴，在合法合规前提下，帮助企业稳健经营、降低风险、优化结构、提升效率，实现可持续发展。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              需要财税服务？
            </h2>
            <p className="mx-auto mt-6 text-lg text-primary-foreground/90">
              联系我们，获取专业的财税咨询服务，让您的企业合规经营，健康发展。
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