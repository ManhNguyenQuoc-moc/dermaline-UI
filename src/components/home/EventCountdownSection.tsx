'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/common/ScrollReveal';
import ProductCard from '@/components/common/ProductCard';
import { useTranslation } from '@/i18n/useTranslation';
import { getEventGroupedProductsService } from '@/services/customer/product/product.service';
import { ArrowRight, Tag, Clock, Sparkles } from 'lucide-react';

const AUTO_PLAY_INTERVAL = 5000;

const EVENT_BANNERS: Record<number, { image: string; tag: string; discountBadge: string; ctaText: string }> = {
  0: {
    image: '/images/hero/dermaline_store_interior.jpg',
    tag: 'EXOSOME & PDRN CLINICAL FESTIVAL',
    discountBadge: 'SAVE UP TO 78%',
    ctaText: 'EXPLORE PDRN DEALS',
  },
  1: {
    image: '/images/hero/dermaline_store_interior.jpg',
    tag: 'HYDROGEL MASK RECOVERY WEEK',
    discountBadge: 'SAVE UP TO 40%',
    ctaText: 'EXPLORE MASK DEALS',
  },
  2: {
    image: '/images/hero/dermaline_store_interior.jpg',
    tag: 'PEPTIDE & RETINOL ANTI-AGING',
    discountBadge: 'SAVE UP TO 35%',
    ctaText: 'EXPLORE ANTI-AGING DEALS',
  },
};

export default function EventCountdownSection() {
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
    desc: 'Special hospital-grade aesthetic promotion with bio-active PDRN and exosome complex.',
    targetDays: 5,
    targetHours: 14,
    targetMins: 32,
  };

  const activeBanner = EVENT_BANNERS[activeEventIndex] || EVENT_BANNERS[0];

  // Automatic category switching
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveEventIndex((prevIndex) => (prevIndex + 1) % 3);
        setIsTransitioning(false);
      }, 200);
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [isHovered]);

  // Target event countdown timer
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

  // Staggered Sequential Tab Switch Handler
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
      className="relative w-full bg-gradient-to-b from-sky-50/60 via-white to-slate-50/50 text-slate-900 select-none py-5 sm:py-7 border-b border-slate-200/90 z-20 overflow-hidden"
    >
      {/* 🌊 SILKY WAVE DIVIDER (TOP TRANSITION FROM HERO) */}
      <div className="absolute top-0 inset-x-0 w-full h-8 sm:h-10 overflow-hidden pointer-events-none select-none opacity-80 z-20">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-full object-fill text-sky-100/80 fill-current"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C360,90 720,-10 1080,70 C1260,100 1380,30 1440,20 L1440,0 L0,0 Z" />
        </svg>
      </div>

      {/* 🖼️ ELEGANT STORE INTERIOR BACKGROUND WITH LIGHT OVERLAY SHIELD */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-sky-50/60">
        <Image
          src={activeBanner.image}
          alt={activeEvent.name}
          fill
          priority
          sizes="100vw"
          quality={90}
          className={`object-cover object-center transform transition-all duration-1000 ease-out ${
            isTransitioning ? 'scale-105 opacity-0' : 'scale-100 opacity-20 sm:opacity-25'
          }`}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-white/95 via-sky-50/90 to-white/95" />
      </div>

      {/* ✨ SIDE AMBIENT CYAN GRADIENT AURA */}
      <div className="absolute inset-y-0 left-0 w-24 sm:w-44 bg-gradient-to-r from-brand-primary/10 via-sky-200/20 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-24 sm:w-44 bg-gradient-to-l from-brand-primary/10 via-sky-200/20 to-transparent pointer-events-none z-10" />

      {/* MAIN CONTAINER */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-20 pt-2">
        
        {/* 1. DUAL SLIDING ANIMATED BANNER HEADER (LEFT SLIDES FROM LEFT, RIGHT SLIDES FROM RIGHT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center pb-4 border-b border-sky-200/80 overflow-hidden">
          
          {/* 👈 LEFT COLUMN: SLIDES IN FROM LEFT TO RIGHT */}
          <ScrollReveal variant="slide-right" delay={90} duration={850} className="lg:col-span-5">
            <div className={`space-y-3 transform transition-all duration-700 ease-out ${
              isTransitioning ? 'opacity-0 -translate-x-12 blur-2xs' : 'opacity-100 translate-x-0 blur-none'
            }`}>
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100/90 border border-sky-200 text-brand-primary text-xs font-label font-extrabold uppercase tracking-wider shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5 text-brand-primary" />
                  <span>{activeBanner.tag}</span>
                </span>

                <span className="inline-block px-3.5 py-1 rounded-full bg-slate-900 text-white text-xs font-label font-black uppercase tracking-wider shadow-sm">
                  {activeBanner.discountBadge}
                </span>
              </div>

              {/* ⏱️ ELEGANT GLASSMORPHIC COUNTDOWN CARD BOX */}
              <div className="w-full max-w-[350px] bg-gradient-to-br from-white via-sky-50/90 to-cyan-50/80 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-sky-200/90 shadow-sm space-y-2">
                <div className="flex items-center justify-between gap-2 border-b border-sky-200/70 pb-2">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-brand-primary animate-pulse" />
                    <span className="font-label text-xs font-extrabold text-brand-primary uppercase tracking-widest">
                      {t.eventSection.endingSoon || 'PROMOTION ENDS IN'}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-1.5 pt-0.5">
                  {/* DAYS */}
                  <div className="flex-1 flex flex-col items-center justify-center bg-white border border-sky-200/80 rounded-xl py-1.5 shadow-2xs">
                    <span key={timeLeft.days} className="font-mono text-base sm:text-lg font-black text-slate-900 leading-none animate-countdown-flip">
                      {formatNumber(timeLeft.days)}
                    </span>
                    <span className="text-[8px] font-label font-extrabold text-slate-400 uppercase tracking-wider mt-1">
                      DAYS
                    </span>
                  </div>

                  <span className="text-sky-300 font-mono font-bold text-xs">:</span>

                  {/* HOURS */}
                  <div className="flex-1 flex flex-col items-center justify-center bg-white border border-sky-200/80 rounded-xl py-1.5 shadow-2xs">
                    <span key={timeLeft.hours} className="font-mono text-base sm:text-lg font-black text-slate-900 leading-none animate-countdown-flip">
                      {formatNumber(timeLeft.hours)}
                    </span>
                    <span className="text-[8px] font-label font-extrabold text-slate-400 uppercase tracking-wider mt-1">
                      HRS
                    </span>
                  </div>

                  <span className="text-sky-300 font-mono font-bold text-xs">:</span>

                  {/* MINS */}
                  <div className="flex-1 flex flex-col items-center justify-center bg-white border border-sky-200/80 rounded-xl py-1.5 shadow-2xs">
                    <span key={timeLeft.minutes} className="font-mono text-base sm:text-lg font-black text-slate-900 leading-none animate-countdown-flip">
                      {formatNumber(timeLeft.minutes)}
                    </span>
                    <span className="text-[8px] font-label font-extrabold text-slate-400 uppercase tracking-wider mt-1">
                      MINS
                    </span>
                  </div>

                  <span className="text-sky-300 font-mono font-bold text-xs">:</span>

                  {/* SECS WITH CYAN GLOW */}
                  <div className="flex-1 flex flex-col items-center justify-center bg-brand-primary/10 border border-brand-primary/40 rounded-xl py-1.5 shadow-2xs animate-glow-ring">
                    <span key={timeLeft.seconds} className="font-mono text-base sm:text-lg font-black text-brand-primary leading-none animate-countdown-flip">
                      {formatNumber(timeLeft.seconds)}
                    </span>
                    <span className="text-[8px] font-label font-extrabold text-brand-primary uppercase tracking-wider mt-1">
                      SECS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 👉 RIGHT COLUMN: SLIDES IN FROM RIGHT TO LEFT */}
          <ScrollReveal variant="slide-left" delay={150} duration={850} className="lg:col-span-7">
            <div className={`flex flex-col justify-between space-y-3 transform transition-all duration-700 ease-out ${
              isTransitioning ? 'opacity-0 translate-x-12 blur-2xs' : 'opacity-100 translate-x-0 blur-none'
            }`}>
              <div className="space-y-2">
                <span className="text-brand-primary text-xs font-label font-extrabold tracking-[2px] uppercase block">
                  {activeEvent.tag}
                </span>

                <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {activeEvent.name}
                </h2>

                <p className="font-body text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl line-clamp-2">
                  {activeEvent.desc}
                </p>
              </div>

              <div className="pt-1">
                <Link
                  href="/event"
                  className="inline-flex items-center gap-2.5 text-brand-primary hover:text-brand-primary-hover font-label text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-colors group/cta cursor-pointer py-0.5"
                >
                  <span>{activeBanner.ctaText}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover/cta:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* 2. EVENT TAB SELECTOR BAR */}
        <ScrollReveal variant="fade-up" delay={110} duration={800}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-1">
            <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto scrollbar-none w-full sm:w-auto">
              {eventsList.map((ev, idx) => {
                const isActive = idx === activeEventIndex;
                return (
                  <button
                    key={ev.id || idx}
                    type="button"
                    onClick={() => handleSelectEvent(idx)}
                    className={`py-1.5 px-3.5 rounded-xl font-label text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer shrink-0 ${
                      isActive
                        ? 'bg-slate-900 text-white font-extrabold shadow-md'
                        : 'bg-white hover:bg-slate-100 text-slate-600 font-bold border border-slate-200/90 shadow-2xs'
                    }`}
                  >
                    <span>0{idx + 1} {ev.tag}</span>
                  </button>
                );
              })}
            </div>

            <span className="hidden md:inline-flex items-center gap-1.5 text-xs font-label font-bold text-slate-400 uppercase tracking-widest">
              <span>FEATURED EVENT PRODUCTS</span>
            </span>
          </div>
        </ScrollReveal>

        {/* 3. PRODUCT CARDS GRID */}
        <div className="w-full pt-1 pb-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
            {currentProducts.map((product, idx) => {
              const scrollDelay = 130 + idx * 80;
              const transitionDelayStyle = isTransitioning ? '0ms' : `${idx * 80}ms`;

              const formattedProduct = {
                ...product,
                categoryTag: product.category,
                subtitle: product.subtitle || product.subTitle,
              };

              return (
                <ScrollReveal key={product.id} variant="fade-up" delay={scrollDelay} duration={800} className="h-full">
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
