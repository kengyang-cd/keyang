'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
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

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-6 py-3" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1 flex items-center gap-2 -mt-3">
            <div className="relative h-5 w-auto">
              <Image
                src="/logo.png"
                alt="成都市柯洋税务师事务所有限公司"
                width={120}
                height={24}
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
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild>
            <Link href="/contact">立即咨询</Link>
          </Button>
        </div>
      </nav>
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
  );
}