import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '成都税务规划_代理记账_财税顾问 | 成都柯洋税务师事务所',
    template: '%s | 成都柯洋税务师事务所',
  },
  description:
    '成都柯洋税务师事务所，专注企业税务规划、税务顾问与财税合规咨询，12年行业经验，服务千家成都企业，电商企业财税合规是我们的核心优势。',
  keywords: [
    '成都税务规划',
    '税务规划咨询',
    '成都代理记账',
    '成都注册公司',
    '成都财税顾问',
    '财税合规',
    '电商财税合规',
    '成都税务师事务所',
    '成都柯洋税务师事务所',
    '成都代理记账公司',
    '成都注册公司代办',
    '财税合规咨询',
    '税务师',
    '会计服务',
    '税务代理',
    '企业财税',
  ],
  authors: [{ name: '成都市柯洋税务师事务所有限公司' }],
  openGraph: {
    title: '成都税务规划_代理记账_财税顾问 | 成都柯洋税务师事务所',
    description:
      '成都柯洋税务师事务所，专注企业税务规划、税务顾问与财税合规咨询，12年行业经验，服务千家成都企业。',
    siteName: '成都柯洋税务师事务所',
    locale: 'zh_CN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://keyang-tax-website.vercel.app',
    types: {
      'application/rss+xml': '/sitemap.xml',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <html lang="zh-CN">
      <body className={`antialiased`}>
        {isDev && <Inspector />}
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}