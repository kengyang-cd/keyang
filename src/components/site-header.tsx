'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, CheckCircle2, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* 主导航 */}
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5'
            : 'bg-white/0 backdrop-blur-0'
        }`}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo + 公司名称 */}
          <div className="min-w-0 z-10 flex items-center pl-4 lg:pl-8 flex-1">
            <Link href="/" className="flex items-center gap-3 min-w-0 py-3">
              <Image
                src="/company-logo.jpg"
                alt="成都市柯洋税务师事务所有限公司"
                width={160}
                height={48}
                className="h-10 w-auto object-contain flex-shrink-0"
                priority
              />
              <div className="hidden sm:flex items-center border-l border-gray-200 pl-3">
                <span className={`text-base font-bold tracking-wide transition-colors duration-500 ${
                  scrolled ? 'text-[#0a1628]' : 'text-white'
                }`}>
                  成都市柯洋税务师事务所
                </span>
              </div>
            </Link>
          </div>

          {/* 导航链接 - 桌面端 */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-1 pr-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-300 relative ${
                  pathname === item.href
                    ? scrolled
                      ? 'text-[#d4a853] bg-amber-50/50'
                      : 'text-[#d4a853] bg-white/10'
                    : scrolled
                      ? 'text-gray-700 hover:text-[#d4a853] hover:bg-amber-50/30'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:18980020731"
              className={`ml-3 inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-full border transition-all duration-300 ${
                scrolled
                  ? 'border-[#d4a853] text-[#d4a853] hover:bg-[#d4a853] hover:text-white'
                  : 'border-white/40 text-white hover:bg-white hover:text-[#0a1628]'
              }`}
            >
              189-8002-0731
            </a>
          </div>

          {/* 移动端菜单按钮 */}
          <div className="flex lg:hidden pr-4">
            <button
              type="button"
              className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-colors ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">打开主菜单</span>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 品牌实力条 */}
      <div
        className="transition-all duration-500"
        style={{ backgroundColor: 'rgba(10, 22, 40, 0.85)' }}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-2">
          <div className="flex items-center justify-center gap-4 sm:gap-8 text-xs text-white/80">
            {credentials.map((c, i) => (
              <span key={i} className="whitespace-nowrap flex items-center gap-1.5">
                <CheckCircle2 className="h-3 w-3 flex-shrink-0" style={{ color: '#d4a853' }} />
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl shadow-xl"
          >
            <div className="space-y-1 px-4 pb-4 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block rounded-lg px-4 py-2.5 text-base font-medium transition-colors ${
                    pathname === item.href
                      ? 'text-[#d4a853] bg-amber-50'
                      : 'text-gray-700 hover:text-[#d4a853] hover:bg-amber-50/50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-3">
                <a
                  href="tel:18980020731"
                  className="block w-full text-center px-4 py-3 text-sm font-medium text-white rounded-full gold-gradient"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  立即咨询 18980020731
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
