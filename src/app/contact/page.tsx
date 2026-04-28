import { ContactForm } from '@/components/contact-form';
import { AMapComponent } from '@/components/amap-component';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: '联系电话',
    content: '18980020731',
    description: '孙凤 - 全天接待',
  },
  {
    icon: Phone,
    title: '联系电话',
    content: '13678114295',
    description: '孙瑾 - 全天接待',
  },
  {
    icon: Mail,
    title: '电子邮箱',
    content: '327039492@qq.com',
    description: '我们会在24小时内回复',
  },
  {
    icon: MapPin,
    title: '公司地址',
    content: '成都市高新区环球中心E5区9楼915号',
    description: '欢迎莅临咨询',
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-foreground">
              联系我们
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              我们随时为您提供专业的税务咨询服务
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                联系方式
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                您可以通过以下方式联系我们，我们会在最短时间内回复您的咨询。
              </p>
              <div className="mt-10 space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card key={index}>
                      <CardContent className="flex items-start gap-4 p-6">
                        <div className="rounded-md bg-primary/10 p-3">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{info.title}</h3>
                          <p className="mt-1 text-base text-foreground">
                            {info.icon === Phone ? (
                              <a href={`tel:${info.content.replace(/-/g, '')}`} className="hover:text-primary transition-colors">
                                {info.content}
                              </a>
                            ) : (
                              info.content
                            )}
                          </p>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {info.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-muted/50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              我们的地址
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              欢迎莅临我们办公室咨询
            </p>
          </div>
          <div className="mx-auto mt-10">
            <AMapComponent />
          </div>
        </div>
      </section>
    </div>
  );
}