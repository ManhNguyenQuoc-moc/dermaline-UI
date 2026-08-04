'use client';

import React from 'react';
import ScrollReveal from '@/components/common/ScrollReveal';
import { ShieldCheck, Sparkles, Award } from 'lucide-react';

interface CommunityHeroProps {
  activeCategoryTitle?: string;
  totalCount: number;
}

export default function CommunityHero({
  activeCategoryTitle = 'Clinical News & Real Patient Results',
  totalCount,
}: CommunityHeroProps) {
  return (
    <section className="relative w-full py-12 sm:py-16 bg-gradient-to-b from-slate-50 via-sky-50/40 to-white border-b border-slate-200/60 overflow-hidden select-none">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <ScrollReveal variant="slide-left" delay={100} duration={800}>
              <span className="inline-flex items-center gap-1.5 text-brand-primary text-xs font-label font-extrabold tracking-[1.8px] uppercase">
                <ShieldCheck className="w-4 h-4 text-brand-primary" />
                DERMALINE KOREA CLINICAL COMMUNITY & PATIENT HUB
              </span>
            </ScrollReveal>

            <ScrollReveal variant="slide-left" delay={200} duration={800}>
              <h1 className="font-headline text-3xl sm:text-4xl lg:text-[44px] font-semibold text-slate-900 tracking-tight leading-snug max-w-[28ch]">
                {activeCategoryTitle}{' '}
                <span className="font-serif-display italic font-normal text-brand-primary block sm:inline">
                  & Evidence
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal variant="slide-left" delay={300} duration={800}>
              <p className="font-body text-slate-600 text-sm sm:text-base max-w-[65ch] leading-relaxed">
                Khám phá các nghiên cứu lâm sàng, thông tin từ 50+ quốc gia, câu hỏi thường gặp da liễu và <strong>kết quả phục hồi thực tế của khách hàng (Before & After)</strong> đạt chuẩn y khoa.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="slide-left" delay={350} duration={800}>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-label font-bold text-slate-600">
                <span className="inline-flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-brand-primary" /> ISO 13485 & KGMP Certified
                </span>
                <span className="inline-flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-brand-primary" /> 99.5% Salmon PDRN Purity
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Live Counter Badge */}
          <ScrollReveal variant="fade-in" delay={400} duration={800}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-800 text-xs font-label font-bold uppercase tracking-wider rounded-none sm:rounded-sm shadow-xs">
              <span>ACTIVE COMMUNITY RECORDS: {totalCount}</span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
