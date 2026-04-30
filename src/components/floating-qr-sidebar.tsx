'use client';

import Image from 'next/image';

export function FloatingQRSidebar() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {/* 公众号二维码 */}
      <div className="relative group">
        <div className="bg-white rounded-l-lg shadow-lg p-2 cursor-pointer hover:shadow-xl transition-shadow">
          <div className="relative w-14 h-14 md:w-16 md:h-16 overflow-hidden">
            <Image
              src="/wechat-qr.jpg"
              alt="关注公众号"
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
        </div>
        {/* 悬停显示大图 */}
        <div className="absolute right-full mr-2 top-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="bg-white rounded-lg shadow-2xl p-3">
            <div className="relative w-32 h-32 md:w-40 md:h-40 overflow-hidden">
              <Image
                src="/wechat-qr.jpg"
                alt="成都市柯洋税务师事务所公众号"
                width={160}
                height={160}
                className="object-cover"
              />
            </div>
            <p className="text-xs text-center text-gray-600 mt-2">扫码关注公众号</p>
          </div>
        </div>
        {/* 标签 */}
        <div className="absolute -left-1 top-1/2 -translate-y-1/2 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-l">
          公众号
        </div>
      </div>

      {/* 抖音二维码 */}
      <div className="relative group">
        <div className="bg-white rounded-l-lg shadow-lg p-2 cursor-pointer hover:shadow-xl transition-shadow">
          <div className="relative w-14 h-14 md:w-16 md:h-16 overflow-hidden">
            <Image
              src="/douyin/qrcode.jpg"
              alt="关注抖音"
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
        </div>
        {/* 悬停显示大图 */}
        <div className="absolute right-full mr-2 top-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="bg-white rounded-lg shadow-2xl p-3">
            <div className="relative w-32 h-32 md:w-40 md:h-40 overflow-hidden">
              <Image
                src="/douyin/qrcode.jpg"
                alt="柯洋税所抖音"
                width={160}
                height={160}
                className="object-cover"
              />
            </div>
            <p className="text-xs text-center text-gray-600 mt-2">扫码关注抖音</p>
          </div>
        </div>
        {/* 标签 */}
        <div className="absolute -left-1 top-1/2 -translate-y-1/2 bg-pink-500 text-white text-xs px-1.5 py-0.5 rounded-l">
          抖音
        </div>
      </div>
    </div>
  );
}
