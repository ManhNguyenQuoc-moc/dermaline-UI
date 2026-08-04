'use client';

import React from 'react';
import ScrollReveal from '@/components/common/ScrollReveal';

interface EventHeroProps {
  totalCount: number;
}

export default function EventHero({ totalCount }: EventHeroProps) {
  return (
    <section className="relative w-full py-12 sm:py-16 bg-gradient-to-b from-slate-50/80 via-sky-50/40 to-white border-b border-slate-200/60 overflow-hidden select-none">
      {/* Soft Ambient Studio Glow */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[450px] h-[450px] bg-sky-200/25 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <ScrollReveal variant="slide-left" delay={100} duration={800}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-brand-primary text-xs font-label font-extrabold tracking-[1.6px] uppercase shadow-2xs">
                <span>DERMALINE HOSPITAL EVENTS & PROMOTIONS</span>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="slide-left" delay={200} duration={800}>
              <h1 className="font-headline text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-snug max-w-[26ch]">
                Clinical Special{' '}
                <span className="font-serif-display italic font-normal text-brand-primary block sm:inline">
                  Promotions
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal variant="slide-left" delay={300} duration={800}>
              <p className="font-body text-slate-600 text-sm sm:text-base max-w-[60ch] leading-relaxed">
                Discover hospital-grade aesthetic skincare promotions, active PDRN & Exosome booster set discounts up to 78% off, and limited seasonal clinical offers.
              </p>
            </ScrollReveal>
          </div>

          {/* Live Counter Badge (0 Dot Icons) */}
          <ScrollReveal variant="fade-in" delay={350} duration={800}>
            <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200/90 text-slate-800 text-xs font-label font-extrabold uppercase tracking-wider rounded-xl shadow-xs">
              <span>{totalCount} SPECIAL EVENT ITEMS</span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
