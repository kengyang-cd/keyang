'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const navigation = [
  { name: '首页', href: '/' },
  { name: '关于我们', href: '/about' },
  { name: '核心服务', href: '/services' },
  { name: '行业解决方案', href: '/solutions' },
  { name: '标杆案例', href: '/cases' },
  { name: '政策法规', href: '/policy' },
  { name: '专家团队', href: '/team' },
  { name: '联系我们', href: '/contact' },
];

const credentials = [
  '执业注册税务师机构',
  '涉税专业服务机构',
  'TSC5 信用等级',
  '公安备案',
];

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [qrModalOpen, setQrModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        {/* 导航区域 */}
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-6 py-4" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
              <div className="relative h-10 w-auto">
                <Image
                  src="/logo.png"
                  alt="成都市柯洋税务师事务所有限公司"
                  width={200}
                  height={40}
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">打开主菜单</span>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-6 xl:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium leading-6 transition-colors hover:text-primary ${
                  pathname === item.href ? 'text-primary' : 'text-foreground/70'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => setQrModalOpen(true)}
              className="text-sm font-medium leading-6 text-green-600 hover:text-green-700 flex items-center gap-1"
            >
              关注公众号
            </button>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button asChild>
              <Link href="/contact">立即咨询</Link>
            </Button>
          </div>
        </nav>

        {/* 品牌实力条 - 底部 */}
        <div className="hidden lg:block bg-[#1a2744] text-white/80 text-xs">
          <div className="mx-auto max-w-7xl px-6 flex items-center justify-end gap-6 py-1.5">
            {credentials.map((c, i) => (
              <span key={i} className="flex items-center gap-1.5 whitespace-nowrap">
                <CheckCircle2 className="h-3 w-3 text-amber-400 flex-shrink-0" />
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block rounded-md px-3 py-2 text-base font-medium ${
                    pathname === item.href
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-muted'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  setQrModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left rounded-md px-3 py-2 text-base font-medium text-green-600 hover:bg-muted"
              >
                关注公众号
              </button>
              <div className="px-3 pt-2">
                <Button asChild className="w-full">
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    立即咨询
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 公众号二维码弹窗 */}
      {qrModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
          onClick={() => setQrModalOpen(false)}
        >
          <div
            className="bg-white rounded-xl shadow-2xl p-6 max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">关注公众号</h3>
              <button
                onClick={() => setQrModalOpen(false)}
                className="p-1 hover:bg-gray-100 rounded-full"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-48 h-48 rounded-lg overflow-hidden border border-gray-200">
                <Image
                  src="/wechat-qr.jpg"
                  alt="成都市柯洋税务师事务所公众号"
                  width={192}
                  height={192}
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-center text-sm text-gray-600">
                扫码关注公众号
              </p>
              <p className="text-center text-xs text-gray-500 mt-1">
                获取更多财税干货、案例解读
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
