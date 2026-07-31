'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Tabs } from 'antd';
import { RecommendationCategory } from '@/services/customer/home/models/home.model';
import ScrollReveal from '@/components/common/ScrollReveal';
import ProductCard from '@/components/common/ProductCard';

export interface RecommendationSectionProps {
  recommendations?: RecommendationCategory[];
}

export default function RecommendationSection({ recommendations = [] }: RecommendationSectionProps) {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(
    recommendations[0]?.id || 'special-ampoule'
  );
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Automatic category switching every 4.5 seconds (Pauses when customer hovers over section/cards)
  useEffect(() => {
    if (recommendations.length === 0 || isHovered) return;

    timerRef.current = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveCategoryId((prevId) => {
          const currentIndex = recommendations.findIndex((item) => item.id === prevId);
          const nextIndex = (currentIndex + 1) % recommendations.length;
          return recommendations[nextIndex].id;
        });
        setIsTransitioning(false);
      }, 200);
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [recommendations, isHovered]);

  if (!recommendations || recommendations.length === 0) return null;

  const activeCategory =
    recommendations.find((item) => item.id === activeCategoryId) || recommendations[0];

  const handleTabChange = (key: string) => {
    if (key === activeCategoryId) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveCategoryId(key);
      setIsTransitioning(false);
    }, 200);
  };

  // Ant Design Tabs Items Configuration
  const tabItems = recommendations.map((cat) => ({
    key: cat.id,
    label: <span className="font-label text-sm sm:text-base font-semibold px-1">{cat.tag}</span>,
  }));

  return (
    <section
      className="relative w-full bg-gradient-to-b from-white via-sky-50/30 to-slate-50 py-10 sm:py-12 lg:py-14 border-t border-slate-200/70 overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Soft Ambient Studio Glow */}
      <div className="absolute top-1/3 left-10 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Left-Aligned Header Block */}
        <ScrollReveal variant="slide-left" delay={100} duration={850}>
          <div className="flex flex-col items-start text-left space-y-2.5 max-w-2xl mb-6">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-brand-primary text-xs font-label font-extrabold tracking-[1.4px] uppercase shadow-2xs">
              <span>CLINICAL ROUTINE SELECTION</span>
            </div>

            <h2 className="font-headline text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-tight">
              Recommendation
            </h2>
            <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed">
              The best skincare routine for skin concerns.
            </p>
          </div>
        </ScrollReveal>

        {/* Ant Design Native Tabs Header Left Aligned */}
        <ScrollReveal variant="fade-down" delay={220} duration={850}>
          <div className="w-full mb-8 flex justify-start">
            <div className="w-full">
              <Tabs
                activeKey={activeCategoryId}
                onChange={handleTabChange}
                size="large"
                tabBarStyle={{ marginBottom: 0, borderBottom: '1px solid rgba(226, 232, 240, 0.8)' }}
                items={tabItems}
              />
            </div>
          </div>
        </ScrollReveal>

        {/* 3 Recommended Product Cards Using Shared ProductCard */}
        <div
          className={`w-full transition-all duration-500 ease-out transform ${
            isTransitioning ? 'opacity-0 scale-[0.98] translate-y-2' : 'opacity-100 scale-100 translate-y-0'
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {activeCategory.products.map((product, idx) => {
              const variant = idx === 0 ? 'slide-left' : idx === 1 ? 'fade-up' : 'slide-right';
              const delay = 320 + idx * 140;

              return (
                <ScrollReveal key={product.id} variant={variant} delay={delay} duration={850} className="h-full">
                  <ProductCard product={product} />
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
