'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, CheckCircle2 } from 'lucide-react';
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
  'TSC5 信用等级',
  '服务企业1000+',
  '亿元级投资风险规避案例',
];

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <header
        className="sticky top-0 z-50 w-full relative transition-colors duration-200"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Logo - 绝对定位，覆盖整个导航栏+品牌实力条 */}
        <div className="absolute left-0 top-0 h-full z-10 flex items-center px-4 lg:px-6">
          <Link href="/" className="h-full flex items-center">
            <Image
              src="/company-logo.png"
              alt="成都市柯洋税务师事务所有限公司"
              width={180}
              height={92}
              className="h-[92px] w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* 顶部渐变边框 */}
        <div className="absolute top-0 left-0 right-0 h-[2px] z-20" style={{ background: 'linear-gradient(90deg, #0066CC 0%, #00CC99 100%)' }} />

        {/* 导航 + 品牌实力条容器 - 偏移给logo留出空间 */}
        <div className="ml-[220px] lg:ml-[240px]">
          {/* 导航区域 */}
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-6 h-14" aria-label="Global">
            <div className="flex lg:flex-1 h-full items-center justify-end pr-4">
              {/* 移动端菜单按钮 */}
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
            </div>
            <div className="hidden lg:flex lg:gap-x-6 xl:gap-x-8 items-center">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    pathname === item.href
                      ? 'text-[#0066CC] font-bold'
                      : 'text-[#333333] hover:text-[#0066CC]'
                  }`}
                >
                  {item.name}
                  {pathname === item.href && (
                    <span
                      className="absolute bottom-0 left-0 w-full h-0.5"
                      style={{ background: 'linear-gradient(90deg, #0066CC 0%, #00CC99 100%)' }}
                    />
                  )}
                </Link>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-md transition-all duration-200 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #0066CC 0%, #00CC99 100%)' }}
              >
                咨询孙老师 189-8002-0731
              </Link>
            </div>
          </nav>

          {/* 品牌实力条 - 底部，白底蓝字 */}
          <div className="hidden lg:block text-[#0066CC] text-xs bg-white">
            <div className="mx-auto max-w-7xl px-6 flex items-center justify-end gap-6 py-1.5">
              {credentials.map((c, i) => (
                <span key={i} className="flex items-center gap-1.5 whitespace-nowrap">
                  <CheckCircle2 className="h-3 w-3 flex-shrink-0" style={{ color: '#0066CC' }} />
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 底部渐变边框 */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] z-10" style={{ background: 'linear-gradient(90deg, #0066CC 0%, #00CC99 100%)' }} />

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden" style={{ backgroundColor: 'white' }}>
            <div className="space-y-1 px-2 pb-3 pt-2" style={{ backgroundColor: isHovered ? '#E6F3FF' : '' }}>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block rounded-md px-3 py-2 text-base font-medium ${
                    pathname === item.href
                      ? 'text-white'
                      : 'text-[#333333] hover:bg-[#E6F3FF]'
                  }`}
                  style={pathname === item.href ? { background: 'linear-gradient(135deg, #0066CC 0%, #00CC99 100%)' } : {}}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 pt-2">
                <Link
                  href="/contact"
                  className="block w-full text-center px-4 py-2 text-sm font-medium text-white rounded-md"
                  style={{ background: 'linear-gradient(135deg, #0066CC 0%, #00CC99 100%)' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  立即咨询
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
