'use client';

import React from 'react';
import ScrollReveal from '@/components/common/ScrollReveal';

export default function BrandManifestoQuote() {
  return (
    <div className="relative w-full overflow-hidden select-none bg-slate-900 text-white">
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto text-center z-10">
        <ScrollReveal variant="zoom-in" delay={100} duration={900}>
          <div className="space-y-6">
            <span className="text-sky-300 text-xs sm:text-sm font-label font-bold tracking-[2px] uppercase block">
              OFFICIAL DERMALINE BRAND MANIFESTO
            </span>

            <blockquote className="font-serif-display italic text-2xl sm:text-3xl lg:text-4xl leading-[1.4] text-sky-50 font-normal max-w-[34ch] mx-auto">
              &ldquo;Based on the time and effort accumulated by developing skincare products at hospitals for many years, I promise to take the lead as a dermatology brand that provides solutions for healthy skin.&rdquo;
            </blockquote>

            <div className="pt-4 flex flex-col items-center space-y-1">
              <span className="font-headline font-semibold text-base sm:text-lg text-white">
                DERMALINE R&D COMMITTEE
              </span>
              <span className="font-label text-xs text-sky-300/80 font-medium tracking-wider uppercase">
                Seoul Hospital Dermatology Research Center
              </span>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
