import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex flex-col gap-4">
              <div className="relative h-16 w-auto">
                <Image
                  src="/logo.png"
                  alt="成都市柯洋税务师事务所有限公司"
                  width={200}
                  height={64}
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                深耕财税服务近 30 年，提供从账务规范、税务合规到常年顾问的一站式全周期解决方案。
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">快速链接</h3>
            <ul role="list" className="mt-4 space-y-3">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                  首页
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">
                  核心服务
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-sm text-muted-foreground hover:text-primary">
                  行业解决方案
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">更多内容</h3>
            <ul role="list" className="mt-4 space-y-3">
              <li>
                <Link href="/cases" className="text-sm text-muted-foreground hover:text-primary">
                  标杆案例
                </Link>
              </li>
              <li>
                <Link href="/policy" className="text-sm text-muted-foreground hover:text-primary">
                  政策法规
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-sm text-muted-foreground hover:text-primary">
                  专家团队
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                  联系我们
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">服务项目</h3>
            <ul role="list" className="mt-4 space-y-3">
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">
                  企业税务规划
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">
                  税务代理申报
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">
                  财务审计服务
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">
                  税务风险咨询
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">联系方式</h3>
            <ul role="list" className="mt-4 space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <div className="text-sm text-muted-foreground">
                  <a href="tel:18980020731" className="hover:text-primary">孙凤 18980020731</a>
                  <br />
                  <a href="tel:13678114295" className="hover:text-primary">孙瑾 13678114295</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">327039492@qq.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">成都市高新区环球中心E5区9楼915号</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} 成都市柯洋税务师事务所. 保留所有权利.
          </p>
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            蜀ICP备2026007879号-1
          </a>
        </div>
      </div>
    </footer>
  );
}