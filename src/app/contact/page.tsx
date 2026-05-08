'use client';

import { ContactForm } from '@/components/contact-form';
import { AMapComponent } from '@/components/amap-component';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/scroll-animation';

const contactInfo = [
  { icon: Phone, title: '孙凤', content: '189-8002-0731', phone: '18980020731', description: '创始人 · 执业注册税务师 · 全天接待' },
  { icon: Phone, title: '孙瑾', content: '136-7811-4295', phone: '13678114295', description: '联合创始人 · 企业增长顾问 · 全天接待' },
  { icon: Mail, title: '电子邮箱', content: '327039492@qq.com', description: '我们会在24小时内回复' },
  { icon: Clock, title: '工作时间', content: '周一至周六 9:00-18:00', description: '节假日安排另行通知' },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pb-20" style={{ backgroundColor: '#0a1628' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(212,168,83,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,83,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white font-[family-name:var(--font-noto-serif-sc)]">
              联系我们
            </h1>
            <p className="mt-4 text-lg leading-8" style={{ color: '#9ca3af' }}>
              专业财税团队，随时为您解答疑问、提供方案
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: '#f8f7f4' }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            {/* Left - Contact Info */}
            <div>
              <ScrollReveal>
                <h2 className="text-2xl font-bold tracking-tight mb-6 font-[family-name:var(--font-noto-serif-sc)]" style={{ color: '#0a1628' }}>
                  联系方式
                </h2>
              </ScrollReveal>
              <StaggerContainer>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <StaggerItem key={index}>
                        <div className="rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 bg-white border border-gray-100 hover:border-[#d4a853]/30" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                          <div className="flex items-start gap-4">
                            <div className="rounded-md p-3 flex-shrink-0" style={{ backgroundColor: 'rgba(212,168,83,0.1)' }}>
                              <Icon className="h-5 w-5" style={{ color: '#d4a853' }} />
                            </div>
                            <div>
                              <h3 className="font-semibold text-base" style={{ color: '#0a1628' }}>{info.title}</h3>
                              <p className="mt-0.5 text-base" style={{ color: '#0a1628' }}>
                                {info.phone ? (
                                  <a href={`tel:${info.phone}`} className="font-medium transition-colors" style={{ color: '#d4a853' }}>
                                    {info.content}
                                  </a>
                                ) : (
                                  info.content
                                )}
                              </p>
                              <p className="mt-0.5 text-sm" style={{ color: '#6b7280' }}>
                                {info.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </StaggerItem>
                    );
                  })}
                </div>
              </StaggerContainer>
            </div>

            {/* Right - Contact Form */}
            <div>
              <ScrollReveal direction="right">
                <h2 className="text-2xl font-bold tracking-tight mb-6 font-[family-name:var(--font-noto-serif-sc)]" style={{ color: '#0a1628' }}>
                  在线咨询
                </h2>
              </ScrollReveal>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center mb-8">
              <h2 className="text-2xl font-bold tracking-tight font-[family-name:var(--font-noto-serif-sc)]" style={{ color: '#0a1628' }}>
                我们的地址
              </h2>
              <p className="mt-3 text-lg font-medium" style={{ color: '#0a1628' }}>
                成都市柯洋税务师事务所
              </p>
              <p className="mt-1" style={{ color: '#6b7280' }}>
                成都市高新区环球中心E5区9楼915号
              </p>
            </div>
          </ScrollReveal>
          <div className="mx-auto mt-6 rounded-2xl overflow-hidden" style={{ border: '2px solid rgba(212,168,83,0.15)' }}>
            <AMapComponent />
          </div>
        </div>
      </section>
    </div>
  );
}
