'use client';

import React from 'react';
import ScrollReveal from '@/components/common/ScrollReveal';
import { useTranslation } from '@/i18n/useTranslation';

interface LinesHeroProps {
  activeLineTitle: string;
  totalCount: number;
}

export default function LinesHero({ activeLineTitle, totalCount }: LinesHeroProps) {
  const { t } = useTranslation();

  return (
    <section className="relative w-full py-12 sm:py-16 bg-gradient-to-b from-slate-50 via-sky-50/30 to-white border-b border-slate-200/60 overflow-hidden select-none">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <ScrollReveal variant="slide-left" delay={100} duration={800}>
              <span className="text-brand-primary text-xs font-label font-extrabold tracking-[1.8px] uppercase block">
                {t.linesHero.tag}
              </span>
            </ScrollReveal>

            <ScrollReveal variant="slide-left" delay={200} duration={800}>
              <h1 className="font-headline text-3xl sm:text-4xl lg:text-[46px] font-semibold text-slate-900 tracking-tight leading-none">
                {t.linesHero.title}{' '}
                <span className="font-serif-display italic font-normal text-brand-primary">
                  {activeLineTitle}
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal variant="slide-left" delay={300} duration={800}>
              <p className="font-body text-slate-600 text-sm sm:text-base max-w-[55ch] leading-relaxed">
                {t.linesHero.desc}
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal variant="fade-in" delay={350} duration={800}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-800 text-xs font-label font-bold uppercase tracking-wider rounded-none sm:rounded-sm shadow-xs">
              <span>{t.linesHero.showingCount.replace('{count}', String(totalCount))}</span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
