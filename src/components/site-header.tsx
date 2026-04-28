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
  { name: '常见问题', href: '/faq' },
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
        {/* Logo + 公司名称 + 导航区域 */}
        <div className="bg-white shadow-sm">
          <div className="flex items-center justify-between">
            {/* Logo + 公司名称 */}
            <div className="flex-shrink-0 z-10 flex items-center pl-4 lg:pl-6">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/company-logo.jpg"
                  alt="成都市柯洋税务师事务所有限公司"
                  width={160}
                  height={48}
                  className="h-12 w-auto object-contain"
                  priority
                />
                <div className="hidden sm:flex flex-col justify-center border-l border-gray-200 pl-3">
                  <span className="text-sm font-semibold tracking-wide text-black">成都柯洋</span>
                  <span className="text-xs tracking-wider text-black">税务师事务所</span>
                </div>
              </Link>
            </div>

            {/* 导航链接 - 桌面端 */}
            <div className="hidden lg:flex lg:items-center lg:gap-x-6 xl:gap-x-8 pr-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    pathname === item.href
                      ? 'text-[#0066CC] font-bold'
                      : 'text-black hover:text-[#0066CC]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="ml-4 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-md transition-all duration-200 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #0066CC 0%, #00CC99 100%)' }}
              >
                咨询孙老师 18980020731
              </Link>
            </div>

            {/* 移动端菜单按钮 */}
            <div className="flex lg:hidden pr-4">
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
        </div>

        {/* 品牌实力条 - 导航栏下方，始终显示 */}
        <div style={{ backgroundColor: '#1a2744' }}>
          <div className="max-w-7xl mx-auto px-4 lg:px-6 py-2">
            <div className="flex items-center justify-center gap-4 sm:gap-6 text-xs text-white">
              {credentials.map((c, i) => (
                <span key={i} className="whitespace-nowrap flex items-center gap-1.5">
                  <CheckCircle2 className="h-3 w-3 flex-shrink-0 text-orange-400" />
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 z-40 shadow-lg" style={{ backgroundColor: 'white' }}>
            <div className="space-y-1 px-2 pb-3 pt-2">
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
