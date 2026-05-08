import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="border-t" style={{ backgroundColor: '#0a1628', borderColor: 'rgba(212,168,83,0.1)' }}>
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div>
            <h3 className="text-sm font-semibold" style={{ color: '#d4a853' }}>快速链接</h3>
            <ul role="list" className="mt-3 space-y-2">
              <li>
                <Link href="/" className="text-sm" style={{ color: '#9ca3af' }}>
                  首页
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm" style={{ color: '#9ca3af' }}>
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm" style={{ color: '#9ca3af' }}>
                  核心服务
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-sm" style={{ color: '#9ca3af' }}>
                  行业解决方案
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold" style={{ color: '#d4a853' }}>更多内容</h3>
            <ul role="list" className="mt-3 space-y-2">
              <li>
                <Link href="/cases" className="text-sm" style={{ color: '#9ca3af' }}>
                  标杆案例
                </Link>
              </li>
              <li>
                <Link href="/policy" className="text-sm" style={{ color: '#9ca3af' }}>
                  政策法规
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-sm" style={{ color: '#9ca3af' }}>
                  专家团队
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm" style={{ color: '#9ca3af' }}>
                  联系我们
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold" style={{ color: '#d4a853' }}>服务项目</h3>
            <ul role="list" className="mt-3 space-y-2">
              <li>
                <Link href="/services" className="text-sm" style={{ color: '#9ca3af' }}>
                  企业税务规划
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm" style={{ color: '#9ca3af' }}>
                  税务代理申报
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm" style={{ color: '#9ca3af' }}>
                  财务审计服务
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm" style={{ color: '#9ca3af' }}>
                  税务风险咨询
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold" style={{ color: '#d4a853' }}>联系方式</h3>
            <ul role="list" className="mt-3 space-y-2">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5" style={{ color: '#d4a853' }} />
                <div className="text-sm" style={{ color: '#9ca3af' }}>
                  <a href="tel:18980020731">孙凤 18980020731</a>
                  <br />
                  <a href="tel:13678114295">孙瑾 13678114295</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5" style={{ color: '#d4a853' }} />
                <span className="text-sm" style={{ color: '#9ca3af' }}>327039492@qq.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" style={{ color: '#d4a853' }} />
                <span className="text-sm" style={{ color: '#9ca3af' }}>成都市高新区环球中心E5区9楼915号</span>
              </li>
              <li className="flex items-start gap-2">
                <Globe className="h-4 w-4 mt-0.5" style={{ color: '#d4a853' }} />
                <span className="text-sm" style={{ color: '#9ca3af' }}>www.cdkeyang.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold" style={{ color: '#d4a853' }}>关注我们</h3>
            <div className="mt-3 flex gap-4">
              <div className="text-center">
                <div className="relative w-28 h-28 rounded-lg overflow-hidden" style={{ border: '1px solid rgba(212,168,83,0.2)' }}>
                  <Image
                    src="/wechat-qr.jpg"
                    alt="成都市柯洋税务师事务所公众号"
                    width={112}
                    height={112}
                    className="object-cover"
                  />
                </div>
                <p className="text-xs mt-2" style={{ color: '#9ca3af' }}>公众号</p>
              </div>
              <div className="text-center">
                <div className="relative w-28 h-28 rounded-lg overflow-hidden" style={{ border: '1px solid rgba(212,168,83,0.2)' }}>
                  <Image
                    src="/douyin/qrcode.jpg"
                    alt="柯洋税所抖音"
                    width={112}
                    height={112}
                    className="object-cover"
                  />
                </div>
                <p className="text-xs mt-2" style={{ color: '#9ca3af' }}>抖音</p>
              </div>
            </div>
            <p className="text-xs mt-2" style={{ color: '#6b7280' }}>扫码关注，获取更多财税干货</p>
          </div>
        </div>
        <div className="mt-8 pt-8 text-center space-y-2" style={{ borderTop: '1px solid rgba(212,168,83,0.1)' }}>
          <p className="text-sm" style={{ color: '#6b7280' }}>
            © {new Date().getFullYear()} 成都市柯洋税务师事务所. 保留所有权利.
          </p>
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm"
            style={{ color: '#6b7280' }}
          >
            蜀ICP备2026007879号-1
          </a>
        </div>
      </div>
    </footer>
  );
}
