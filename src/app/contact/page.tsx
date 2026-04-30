import { ContactForm } from '@/components/contact-form';
import { AMapComponent } from '@/components/amap-component';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: '孙凤',
    content: '189-8002-0731',
    phone: '18980020731',
    description: '创始人 · 执业注册税务师 · 全天接待',
  },
  {
    icon: Phone,
    title: '孙瑾',
    content: '136-7811-4295',
    phone: '13678114295',
    description: '联合创始人 · 企业增长顾问 · 全天接待',
  },
  {
    icon: Mail,
    title: '电子邮箱',
    content: '327039492@qq.com',
    description: '我们会在24小时内回复',
  },
  {
    icon: Clock,
    title: '工作时间',
    content: '周一至周六 9:00-18:00',
    description: '节假日安排另行通知',
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-foreground">
              联系我们
            </h1>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              专业财税团队，随时为您解答疑问、提供方案
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* 在线咨询表单 - 上方 */}
          <div className="mx-auto max-w-2xl mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6 text-center">
              在线咨询
            </h2>
            <ContactForm />
          </div>

          {/* 联系方式 - 下方网格 */}
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6 text-center">
              联系方式
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="flex items-start gap-4 p-5">
                      <div className="rounded-md bg-primary/10 p-3 flex-shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-base">{info.title}</h3>
                        <p className="mt-0.5 text-base text-foreground">
                          {info.phone ? (
                            <a href={`tel:${info.phone}`} className="hover:text-primary transition-colors font-medium">
                              {info.content}
                            </a>
                          ) : (
                            info.content
                          )}
                        </p>
                        <p className="mt-0.5 text-sm text-muted-foreground">
                          {info.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-muted/50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              我们的地址
            </h2>
            <p className="mt-3 text-lg text-foreground font-medium">
              成都市柯洋税务师事务所
            </p>
            <p className="mt-1 text-muted-foreground">
              成都市高新区环球中心E5区9楼915号
            </p>
          </div>
          <div className="mx-auto mt-6">
            <AMapComponent />
          </div>
        </div>
      </section>
    </div>
  );
}
