'use client';

import React from 'react';
import ScrollReveal from '@/components/common/ScrollReveal';

export interface SectionDividerProps {
  mode?: 'silk-stamp' | 'silk-flow' | 'silk-wave' | 'dual-silk';
  stampText?: string;
  className?: string;
}

export default function SectionDivider({
  mode = 'silk-stamp',
  className = '',
}: SectionDividerProps) {
  // Seamless Dual Outward Silky Wave (Không có dải kẻ trắng, không có đường thẳng cắt ngang, dải sóng dính liền mượt mướt)
  if (mode === 'silk-stamp' || mode === 'silk-flow' || mode === 'dual-silk') {
    return (
      <ScrollReveal variant="fade-up" delay={100} duration={850}>
        <div className={`relative w-full h-16 sm:h-24 overflow-hidden pointer-events-none select-none z-20 ${className}`}>
          {/* Layer 1: Top Outward Wave (Sóng lộn ra phía trên) */}
          <svg
            viewBox="0 0 1440 120"
            className="absolute top-0 inset-x-0 w-full h-full object-fill text-sky-100/80 fill-current"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C360,100 720,-20 1080,80 C1260,110 1380,40 1440,30 L1440,120 L0,120 Z" />
          </svg>

          {/* Layer 2: Translucent Brand Glow Wave (Phủ màu nhã nhặn ở giữa xóa sạch vạch trắng) */}
          <svg
            viewBox="0 0 1440 120"
            className="absolute inset-0 w-full h-full object-fill text-brand-primary/20 fill-current opacity-70"
            preserveAspectRatio="none"
          >
            <path d="M0,40 C280,10 520,90 840,30 C1160,-30 1320,70 1440,20 L1440,120 L0,120 Z" />
          </svg>

          {/* Layer 3: Bottom Outward Wave (Sóng lộn ra phía dưới) */}
          <svg
            viewBox="0 0 1440 120"
            className="absolute bottom-0 inset-x-0 w-full h-full object-fill text-sky-50/70 fill-current transform rotate-180"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C360,100 720,-20 1080,80 C1260,110 1380,40 1440,30 L1440,120 L0,120 Z" />
          </svg>

          {/* Soft Center Glow Halo */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-10 bg-sky-200/40 blur-xl opacity-60" />
        </div>
      </ScrollReveal>
    );
  }

  // Soft Outward Dual Wave
  return (
    <ScrollReveal variant="fade-in" delay={100} duration={850}>
      <div className={`relative w-full h-16 sm:h-20 overflow-hidden pointer-events-none select-none z-20 ${className}`}>
        <svg
          viewBox="0 0 1440 100"
          className="absolute top-0 inset-x-0 w-full h-full object-fill text-sky-100/70 fill-current"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C320,90 640,-20 960,60 C1200,100 1360,20 1440,40 L1440,100 L0,100 Z" />
        </svg>
        <svg
          viewBox="0 0 1440 100"
          className="absolute bottom-0 inset-x-0 w-full h-full object-fill text-brand-primary/15 fill-current transform rotate-180"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C320,90 640,-20 960,60 C1200,100 1360,20 1440,40 L1440,100 L0,100 Z" />
        </svg>
      </div>
    </ScrollReveal>
  );
}
