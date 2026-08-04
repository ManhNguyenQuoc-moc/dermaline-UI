'use client';

import React, { useState, useEffect } from 'react';
import ScrollReveal from '@/components/common/ScrollReveal';
import ProductCard from '@/components/common/ProductCard';
import { ProductItem } from '@/types/product';
import { useTranslation } from '@/i18n/useTranslation';

interface ActiveEventBlockProps {
  index: number;
  event: {
    id: string;
    tag: string;
    name: string;
    desc: string;
    targetDays: number;
    targetHours: number;
    targetMins: number;
    discountBadge?: string;
  };
  products: ProductItem[];
}

export default function ActiveEventBlock({ index, event, products }: ActiveEventBlockProps) {
  const { t } = useTranslation();

  const [timeLeft, setTimeLeft] = useState({
    days: event.targetDays,
    hours: event.targetHours,
    minutes: event.targetMins,
    seconds: 45,
  });

  useEffect(() => {
    const targetTime =
      new Date().getTime() +
      (event.targetDays * 24 * 60 * 60 * 1000 +
        event.targetHours * 60 * 60 * 1000 +
        event.targetMins * 60 * 1000);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [event.targetDays, event.targetHours, event.targetMins]);

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  const defaultDiscount = index === 0 ? 'SAVE UP TO 78%' : index === 1 ? 'SAVE UP TO 40%' : 'SAVE UP TO 35%';
  const discountBadgeText = event.discountBadge || defaultDiscount;

  return (
    <div className="w-full bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden select-none">
      {/* Side Accent Line */}
      <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-brand-primary via-sky-400 to-slate-900 rounded-l-3xl" />

      {/* Header Info & Timer */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100 mb-6">
        <div className="space-y-2 max-w-2xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-brand-primary/10 text-brand-primary">
              EVENT 0{index + 1}
            </span>
            <span className="font-label text-xs font-extrabold text-slate-400 uppercase tracking-widest">
              {event.tag}
            </span>
            <span className="font-label text-[11px] font-extrabold px-3 py-1 bg-slate-900 text-white rounded-md uppercase tracking-wider shadow-2xs">
              {discountBadgeText}
            </span>
          </div>

          <h3 className="font-headline text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
            {event.name}
          </h3>

          <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed">
            {event.desc}
          </p>
        </div>

        {/* ⏱️ LIGHT CLINICAL ICE-CYAN COUNTDOWN TIMER */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0 bg-gradient-to-r from-sky-50 via-white to-cyan-50/80 text-slate-900 px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl border border-sky-200/90 shadow-xs relative overflow-hidden group">
          <div className="flex items-center gap-2 relative z-10">
            <span className="font-label text-[10px] sm:text-xs font-extrabold text-brand-primary uppercase tracking-widest block">
              {t.eventSection.endingSoon || 'PROMOTION ENDS IN'}
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 relative z-10">
            <div className="flex flex-col items-center justify-center bg-white border border-sky-200/80 rounded-lg px-2.5 py-1 min-w-[38px] sm:min-w-[44px] shadow-2xs">
              <span key={timeLeft.days} className="font-mono text-sm sm:text-base font-black text-slate-900 tracking-wider leading-none animate-countdown-flip">
                {formatNumber(timeLeft.days)}
              </span>
              <span className="text-[8px] font-label font-bold text-slate-400 uppercase tracking-tighter mt-1">
                DAYS
              </span>
            </div>

            <span className="text-sky-300 font-mono font-bold text-xs -mt-2.5">:</span>

            <div className="flex flex-col items-center justify-center bg-white border border-sky-200/80 rounded-lg px-2.5 py-1 min-w-[38px] sm:min-w-[44px] shadow-2xs">
              <span key={timeLeft.hours} className="font-mono text-sm sm:text-base font-black text-slate-900 tracking-wider leading-none animate-countdown-flip">
                {formatNumber(timeLeft.hours)}
              </span>
              <span className="text-[8px] font-label font-bold text-slate-400 uppercase tracking-tighter mt-1">
                HRS
              </span>
            </div>

            <span className="text-sky-300 font-mono font-bold text-xs -mt-2.5">:</span>

            <div className="flex flex-col items-center justify-center bg-white border border-sky-200/80 rounded-lg px-2.5 py-1 min-w-[38px] sm:min-w-[44px] shadow-2xs">
              <span key={timeLeft.minutes} className="font-mono text-sm sm:text-base font-black text-slate-900 tracking-wider leading-none animate-countdown-flip">
                {formatNumber(timeLeft.minutes)}
              </span>
              <span className="text-[8px] font-label font-bold text-slate-400 uppercase tracking-tighter mt-1">
                MINS
              </span>
            </div>

            <span className="text-sky-300 font-mono font-bold text-xs -mt-2.5">:</span>

            <div className="flex flex-col items-center justify-center bg-brand-primary/10 border border-brand-primary/40 rounded-lg px-2.5 py-1 min-w-[38px] sm:min-w-[44px] shadow-2xs animate-glow-ring">
              <span key={timeLeft.seconds} className="font-mono text-sm sm:text-base font-black text-brand-primary tracking-wider leading-none animate-countdown-flip">
                {formatNumber(timeLeft.seconds)}
              </span>
              <span className="text-[8px] font-label font-bold text-brand-primary uppercase tracking-tighter mt-1">
                SECS
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Dedicated Product Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch">
        {products.map((product, idx) => {
          const scrollVariant = idx === 0 ? 'slide-left' : idx === 1 ? 'fade-up' : 'slide-right';
          const scrollDelay = 150 + idx * 100;

          const formattedProduct = {
            ...product,
            categoryTag: product.category,
            subtitle: product.subtitle || product.subTitle,
          };

          return (
            <ScrollReveal key={product.id} variant={scrollVariant} delay={scrollDelay} duration={800} className="h-full">
              <ProductCard product={formattedProduct} />
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}
