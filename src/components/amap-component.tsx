'use client';

import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

declare global {
  interface Window {
    initAMap: () => void;
    AMap: any;
  }
}

export function AMapComponent() {
  const mapRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;

      // 加载高德地图JS API
    const script = document.createElement('script');
    script.src = 'https://webapi.amap.com/maps?v=2.0&key=2d89a259786c855a02649eea9823fcbb';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // 等待 AMap 加载完成
      const checkAMap = setInterval(() => {
        if (window.AMap) {
          clearInterval(checkAMap);
          console.log('AMap loaded, initializing map...');
          initMap();
        }
      }, 100);

      // 超时处理
      setTimeout(() => clearInterval(checkAMap), 10000);
    };

    function initMap() {
      if (!mapRef.current) return;

      try {
        // 环球中心E5区915号的准确经纬度
        const companyLng = 104.0648;
        const companyLat = 30.5712;

        const map = new window.AMap.Map(mapRef.current, {
          zoom: 18,
          center: new window.AMap.LngLat(companyLng, companyLat),
          viewMode: '2D',
        });

        // 添加标记
        const marker = new window.AMap.Marker({
          position: new window.AMap.LngLat(companyLng, companyLat),
          title: '成都柯洋税务师事务所',
        });

        // 信息窗体
        const infoWindow = new window.AMap.InfoWindow({
          content: `<div style="padding:10px;font-size:13px;line-height:1.6;">
            <strong style="font-size:14px;">成都柯洋税务师事务所</strong><br/>
            地址：成都市武侯区天府大道北段1751号环球中心E5-3-2-915<br/>
            <a href="tel:18980020731" style="color:#f97316;">电话：18980020731</a>
          </div>`,
        });

        map.add(marker);
        marker.on('click', () => {
          infoWindow.open(map, marker.getPosition());
        });

        // 自动打开信息窗体
        infoWindow.open(map, marker.getPosition());
        
        console.log('Map initialized successfully');
      } catch (error) {
        console.error('Map initialization error:', error);
      }
    }

    return () => {
      // 清理
    };
  }, []);

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        {/* 高德地图容器 */}
        <div ref={mapRef} id="amap-container" className="aspect-video w-full" />
        {/* 地址信息栏 */}
        <div className="p-4 bg-white border-t flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-orange-100 p-2">
              <MapPin className="h-5 w-5 text-orange-500" />
            </div>
            <div>
              <p className="font-medium text-foreground">成都市高新区环球中心E5区9楼915号</p>
              <p className="text-sm text-muted-foreground">成都柯洋税务师事务所</p>
            </div>
          </div>
          <a
            href="https://uri.amap.com/navigation?address=成都市高新区环球中心E5区9楼915号&mode=car&callnative=1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition-colors"
          >
            导航到这里
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
