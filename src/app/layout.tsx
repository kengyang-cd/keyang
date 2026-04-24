import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '成都市柯洋税务师事务所有限公司 | 税务规划与咨询',
    template: '%s | 成都市柯洋税务师事务所有限公司',
  },
  description:
    '成都市柯洋税务师事务所有限公司，提供企业税务规划、税务代理、财务咨询、审计服务、税务风险评估等全方位税务解决方案，助您合规经营，降低税务成本。',
  keywords: [
    '成都市柯洋税务师事务所有限公司',
    '税务师事务所',
    '税务规划',
    '税务代理',
    '税务咨询',
    '企业税务',
    '财务咨询',
    '税务审计',
    '税务申报',
    '税务风险',
  ],
  authors: [{ name: '成都市柯洋税务师事务所有限公司' }],
  openGraph: {
    title: '成都市柯洋税务师事务所有限公司 | 税务规划与咨询',
    description:
      '成都市柯洋税务师事务所有限公司，提供企业税务规划、税务代理、财务咨询、审计服务、税务风险评估等全方位税务解决方案。',
    siteName: '成都市柯洋税务师事务所有限公司',
    locale: 'zh_CN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
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