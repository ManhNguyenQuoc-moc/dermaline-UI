'use client';

import React, { useState, useEffect } from 'react';
import ScrollReveal from '@/components/common/ScrollReveal';
import ProductCard from '@/components/common/ProductCard';
import { useTranslation } from '@/i18n/useTranslation';
import { getEventGroupedProductsService } from '@/services/customer/product/product.service';

const AUTO_PLAY_INTERVAL = 5000;

export default function FeaturedEventShowcase() {
  const { t } = useTranslation();
  const [activeEventIndex, setActiveEventIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const groupedProducts = getEventGroupedProductsService();

  const eventsList = (t.eventSection.events || []) as Array<{
    id: string;
    tag: string;
    name: string;
    desc: string;
    targetDays: number;
    targetHours: number;
    targetMins: number;
  }>;

  const activeEvent = eventsList[activeEventIndex] || eventsList[0] || {
    tag: 'EXCLUSIVE CLINICAL EVENT',
    name: 'EXOSOME & PDRN 99.5% REGENERATION FESTIVAL',
    desc: 'Special hospital-grade aesthetic promotion',
    targetDays: 5,
    targetHours: 14,
    targetMins: 32,
  };

  // Auto-play timer with hover pause
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveEventIndex((prev) => (prev + 1) % 3);
        setIsTransitioning(false);
      }, 200);
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [isHovered]);

  // Countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: activeEvent.targetDays,
    hours: activeEvent.targetHours,
    minutes: activeEvent.targetMins,
    seconds: 45,
  });

  useEffect(() => {
    const targetTime =
      new Date().getTime() +
      (activeEvent.targetDays * 24 * 60 * 60 * 1000 +
        activeEvent.targetHours * 60 * 60 * 1000 +
        activeEvent.targetMins * 60 * 1000);

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
  }, [activeEventIndex, activeEvent.targetDays, activeEvent.targetHours, activeEvent.targetMins]);

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  const handleSelectEvent = (index: number) => {
    if (index === activeEventIndex || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveEventIndex(index);
      setIsTransitioning(false);
    }, 200);
  };

  const currentProducts = groupedProducts[activeEventIndex] || groupedProducts[0];

  return (
    <section
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full bg-gradient-to-b from-sky-50/50 via-white to-slate-50/40 text-slate-900 select-none py-10 sm:py-14 border-b border-slate-200/80 overflow-hidden"
    >
      {/* Side Ambient Cyan Glow Borders */}
      <div className="absolute inset-y-0 left-0 w-24 sm:w-44 bg-gradient-to-r from-brand-primary/10 via-sky-200/15 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-24 sm:w-44 bg-gradient-to-l from-brand-primary/10 via-sky-200/15 to-transparent pointer-events-none z-10" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
        
        {/* 1. EVENT SELECTION TAB NAVIGATION BAR */}
        <ScrollReveal variant="slide-left" delay={100} duration={800}>
          <div className="w-full border-b border-slate-200/80 flex flex-wrap items-center justify-between gap-4 pb-0.5">
            <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto scrollbar-none">
              {eventsList.map((ev, idx) => {
                const isActive = idx === activeEventIndex;
                return (
                  <button
                    key={ev.id || idx}
                    type="button"
                    onClick={() => handleSelectEvent(idx)}
                    className={`pb-3 px-3.5 sm:px-5 font-label text-xs sm:text-sm tracking-wider uppercase transition-colors duration-200 cursor-pointer relative shrink-0 ${
                      isActive
                        ? 'text-slate-900 font-extrabold border-b-2 border-brand-primary'
                        : 'text-slate-400 hover:text-slate-700 font-bold border-b-2 border-transparent'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono transition-colors ${
                        isActive ? 'bg-brand-primary/15 text-brand-primary font-bold' : 'bg-slate-100 text-slate-400'
                      }`}>
                        0{idx + 1}
                      </span>
                      <span>{ev.tag}</span>
                    </span>

                    {isActive && (
                      <span className="absolute bottom-0 inset-x-0 h-0.5 bg-brand-primary shadow-[0_0_12px_rgba(14,165,233,0.8)]" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="inline-flex items-center gap-2 text-xs font-label font-bold text-slate-500 uppercase tracking-widest pb-3 px-2">
              <span>LIVE HOSPITAL PROMOTIONS</span>
            </div>
          </div>
        </ScrollReveal>

        {/* 2. HEADER DETAILS & COUNTDOWN TIMER */}
        <ScrollReveal variant="fade-up" delay={200} duration={800}>
          <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-200/80">
            <div className={`space-y-1 max-w-[70ch] min-h-[78px] sm:min-h-[86px] flex flex-col justify-center transition-opacity duration-300 ease-out ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}>
              <span className="text-brand-primary text-xs font-label font-extrabold tracking-[1.8px] uppercase block">
                {activeEvent.tag}
              </span>
              <h2 className="font-headline text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight leading-tight line-clamp-2">
                {activeEvent.name}
              </h2>
              <p className="font-body text-slate-500 text-xs sm:text-sm leading-relaxed line-clamp-2">
                {activeEvent.desc}
              </p>
            </div>

            {/* ⏱️ LIGHT CLINICAL ICE-CYAN COUNTDOWN TIMER (FIXED CONTAINER) */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0 bg-gradient-to-r from-sky-50 via-white to-cyan-50/80 text-slate-900 px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl border border-sky-200/90 shadow-xs relative overflow-hidden group">
              <div className="flex items-center gap-2 relative z-10">
                <span className="font-label text-[10px] sm:text-xs font-extrabold text-brand-primary uppercase tracking-widest block">
                  {t.eventSection.endingSoon || 'TIME REMAINING'}
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
        </ScrollReveal>

        {/* 3. DYNAMIC 3-PRODUCT GRID WITH SHARED ProductCard */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch">
            {currentProducts.map((product, idx) => {
              const scrollVariant = idx === 0 ? 'slide-left' : idx === 1 ? 'fade-up' : 'slide-right';
              const scrollDelay = 300 + idx * 120;
              const transitionDelayStyle = isTransitioning ? '0ms' : `${idx * 120}ms`;

              const formattedProduct = {
                ...product,
                categoryTag: product.category,
                subtitle: product.subtitle || product.subTitle,
              };

              return (
                <ScrollReveal key={product.id} variant={scrollVariant} delay={scrollDelay} duration={800} className="h-full">
                  <div
                    style={{ transitionDelay: transitionDelayStyle }}
                    className={`h-full transition-all duration-500 ease-out transform ${
                      isTransitioning ? 'opacity-0 translate-y-3 blur-2xs' : 'opacity-100 translate-y-0 blur-none'
                    }`}
                  >
                    <ProductCard product={formattedProduct} />
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
