'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import GButton from '@/@core/component/Antd/Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '@/components/common/ScrollReveal';

interface SolutionTag {
  id: string;
  tag: string;
  title: string;
  description: string;
  benefit: string;
  techCode: string;
  statsLabel: string;
  statsValue: string;
}

const SOLUTION_TAGS: SolutionTag[] = [
  {
    id: 'pdrn',
    tag: '#PDRN',
    title: 'Salmon PDRN Cellular Activation',
    description: 'High-purity wild salmon DNA PDRN stimulating fibroblast proliferation and rapid dermal tissue repair.',
    benefit: 'Accelerates collagen synthesis & skin renewal',
    techCode: 'BIO-PDRN 99.5% PURITY',
    statsLabel: 'Active DNA Purity',
    statsValue: '99.5%',
  },
  {
    id: 'homeostatic',
    tag: '#Homeostatic',
    title: 'Homeostatic Barrier Balance',
    description: 'Restores skin pH homeostasis and lipid matrix to protect against external environmental stressors.',
    benefit: 'Maintains optimal 24h skin barrier resilience',
    techCode: 'pH 5.5 ISO-BALANCED MATRIX',
    statsLabel: 'Barrier Protection',
    statsValue: '24 Hours',
  },
  {
    id: 'derma',
    tag: '#DermaSolution',
    title: 'Dermatological Science',
    description: 'Hospital-tested formulas engineered specifically for sensitive, damaged, and post-procedure skin.',
    benefit: 'Hypoallergenic 0.0% skin irritation index',
    techCode: 'HOSPITAL CLINICAL FORMULA',
    statsLabel: 'Irritation Score',
    statsValue: '0.0%',
  },
  {
    id: 'anti-aging',
    tag: '#Anti-agingLine',
    title: 'Anti-Aging Elevation',
    description: 'Multi-peptide nanospheres restoring elastic firmness, smoothing fine lines, and lifting skin contours.',
    benefit: 'Visibly tightens & firms skin texture',
    techCode: '5-PEPTIDE NANOSPHERE COMPLEX',
    statsLabel: 'Tensile Firmness',
    statsValue: '+38.4%',
  },
  {
    id: 'moisturizing',
    tag: '#MoisturizingLine',
    title: 'Deep Moisture Retention',
    description: '8-layer hyaluronic acid matrix locking in 72-hour moisture for immediate plump glass-skin radiance.',
    benefit: '72-Hour continuous dermal hydration lock',
    techCode: '8-LAYER HYALURONIC MATRIX',
    statsLabel: 'Moisture Retention',
    statsValue: '72 Hours',
  },
  {
    id: 'trouble',
    tag: '#TroubleLine',
    title: 'Trouble & Redness Calming',
    description: 'Centella Asiatica exosomes and Cica complex instantly calming redness and soothing irritation.',
    benefit: 'Instant soothing & barrier reconstruction',
    techCode: 'CICA EXOSOME 10B NANOSPHERES',
    statsLabel: 'Soothing Speed',
    statsValue: '15 Mins',
  },
  {
    id: 'skincare',
    tag: '#Skincare',
    title: 'Korean Derma-Cosmetics',
    description: 'Daily skincare luxury combining medical purity with Korean glass-skin beauty aesthetics.',
    benefit: 'Pure dermatologist-backed daily routine',
    techCode: '100% KOREAN BEAUTY FORMULA',
    statsLabel: 'Customer Satisfaction',
    statsValue: '99.8%',
  },
];

export default function BrandVideoShowcase() {
  const [activeTabId, setActiveTabId] = useState<string>('pdrn');

  const activeTagData = SOLUTION_TAGS.find((item) => item.id === activeTabId) || SOLUTION_TAGS[0];

  return (
    <section className="relative w-full bg-gradient-to-b from-white via-sky-50/40 to-slate-50 py-10 sm:py-12 lg:py-14 border-t border-slate-200/70 overflow-hidden select-none">
      {/* Soft Ambient Studio Glow Spheres */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[600px] h-[600px] bg-sky-200/30 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Outer-Left Entrance for Science Content (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-5 sm:space-y-6">
            <ScrollReveal variant="slide-left" delay={150} duration={900}>
              <div className="space-y-5 sm:space-y-6 flex flex-col items-start">
                {/* Eyebrow Subtitle Badge - Pure Text (No Icon) */}
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-brand-primary text-xs font-label font-extrabold tracking-[1.4px] uppercase shadow-xs">
                  <span>Brand With Skin Science</span>
                </div>

                {/* Main Section Heading */}
                <div className="space-y-2">
                  <h2 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-none">
                    Dermaline
                  </h2>
                  <p className="font-body text-slate-600 text-base sm:text-lg leading-relaxed pt-1">
                    Advanced Korean derma-cosmetics formulated with homeostatic cellular science for healthy, resilient skin.
                  </p>
                </div>

                {/* Interactive Derma Solution Pill Selector Tabs */}
                <div className="w-full space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-label font-bold text-slate-600 uppercase tracking-wider block">
                      EXPLORE DERMA SOLUTIONS:
                    </span>
                    <span className="text-[11px] font-label font-medium text-brand-primary animate-pulse">
                      Live Tech Filter
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {SOLUTION_TAGS.map((item) => {
                      const isActive = item.id === activeTabId;
                      return (
                        <button
                          key={item.id}
                          onClick={() => setActiveTabId(item.id)}
                          className={`px-3.5 py-1.5 rounded-full font-label text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 active:scale-[0.98] cursor-pointer ${isActive
                              ? 'bg-brand-primary text-white border border-brand-primary shadow-md shadow-brand-primary/30 scale-[1.02]'
                              : 'bg-white text-slate-600 border border-slate-200/90 hover:border-brand-primary hover:text-brand-primary shadow-xs'
                            }`}
                        >
                          {item.tag}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Dynamic Solution Benefit Card */}
                <div className="w-full bg-white/95 backdrop-blur-md border-l-4 border-l-brand-primary border-y border-r border-sky-200/80 rounded-2xl p-5 shadow-lg shadow-sky-900/5 space-y-3 transition-all duration-500 relative">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-brand-primary font-label font-bold text-xs uppercase tracking-wider">
                      {activeTagData.tag} ACTIVE FOCUS
                    </span>
                    <span className="inline-flex items-center text-[11px] font-label font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md border border-sky-200/60">
                      {activeTagData.techCode}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-headline font-semibold text-lg text-slate-900 leading-snug">
                      {activeTagData.title}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {activeTagData.description}
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between gap-2 text-xs font-label font-semibold">
                    <div className="flex items-center gap-1.5 text-brand-primary">
                      <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" />
                      <span>{activeTagData.benefit}</span>
                    </div>
                    <div className="text-slate-900 font-headline font-bold text-sm shrink-0">
                      {activeTagData.statsValue} <span className="text-[10px] text-slate-500 font-normal font-label">{activeTagData.statsLabel}</span>
                    </div>
                  </div>
                </div>

                {/* GO TO SHOP CTA Button */}
                <div className="pt-1">
                  <Link href="/products">
                    <GButton
                      type="primary"
                      size="large"
                      className="!px-8 !h-13 !text-sm font-label font-bold uppercase tracking-wider rounded-xl shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/45 active:scale-[0.98] transition-all duration-300 flex items-center gap-2 group"
                    >
                      <span>GO TO SHOP</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </GButton>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Outer-Right Entrance for Video Embed Frame (7 Cols) */}
          <div className="lg:col-span-7 relative w-full">
            <ScrollReveal variant="slide-right" delay={300} duration={900}>
              <div className="relative rounded-none overflow-hidden shadow-[0px_25px_60px_-15px_rgba(0,102,136,0.18)] bg-slate-950 border-0 aspect-video group transition-all duration-500">
                <iframe
                  src="https://www.youtube.com/embed/UBOdJ_hB_0U?rel=0&modestbranding=1"
                  title="DERMALINE MODEL Lim Chaewon - 더마라인 모델 임채원"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full object-cover border-0 relative z-10"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
