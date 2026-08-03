'use client';

import React from 'react';
import ScrollReveal from '@/components/common/ScrollReveal';
import ImageWithSkeleton from '@/components/common/ImageWithSkeleton';

export interface TimelineMilestone {
  year: string;
  tag: string;
  title: string;
  description: string;
  details: string[];
  image: string;
  floatingText: string;
  metricLabel: string;
  metricValue: string;
}

const MILESTONES: TimelineMilestone[] = [
  {
    year: '2010',
    tag: 'CLINICAL ORIGIN',
    title: 'Hospital Skincare R&D Inception',
    description:
      'Initiated dedicated clinical research within top Korean aesthetic hospitals to develop post-procedure skin recovery solutions.',
    details: [
      'Post-laser treatment barrier care',
      'Clinical trial validation in aesthetic clinics',
    ],
    image: '/images/about/about_derma_lab.jpg',
    floatingText: 'SEOUL AESTHETIC HOSPITAL LAB',
    metricLabel: 'CLINICAL TRIALS',
    metricValue: '1,200+',
  },
  {
    year: '2015',
    tag: 'BRAND ESTABLISHMENT',
    title: 'Official DERMALINE Launch',
    description:
      'Commercialized hospital-proven formulas into specialized derma-cosmetics accessible to dermatologists and aesthetic professionals.',
    details: [
      'Launch of Bio-Booster professional series',
      'Certified medical aesthetic quality standard',
    ],
    image: '/images/hero/hero_korean_model_1.jpg',
    floatingText: 'HOSPITAL-GRADE FORMULATION',
    metricLabel: 'DERMA CLINICS',
    metricValue: '350+',
  },
  {
    year: '2018',
    tag: 'PDRN INNOVATION',
    title: '99.5% Salmon PDRN Formulation',
    description:
      'Breakthrough formulation integrating 99.5% active purity Salmon PDRN and Exo-peptides for deep dermal cellular matrix recovery.',
    details: [
      'Patented bio-cellular extraction technology',
      'Skin pH homeostasis restoration system',
    ],
    image: '/images/hero/hero_korean_model_2.jpg',
    floatingText: '99.5% PURIFIED SALMON DNA',
    metricLabel: 'PURITY GRADE',
    metricValue: '99.5%',
  },
  {
    year: '2022',
    tag: 'GLOBAL EXPANSION',
    title: 'Global Aesthetics Network (30+ Countries)',
    description:
      'Expanded international exports to medical aesthetic clinics and dermatology centers across Asia, USA, Europe, and Latin America.',
    details: [
      'Exporting to 30+ global markets',
      'International dermatologist endorsement',
    ],
    image: '/images/hero/hero_korean_model_3.jpg',
    floatingText: 'EXPORTED TO 30+ COUNTRIES',
    metricLabel: 'GLOBAL MARKETS',
    metricValue: '30+',
  },
  {
    year: '2026',
    tag: 'FUTURE CELLULAR CARE',
    title: 'Bio-Homeostasis & Tension Master Era',
    description:
      'Unveiling next-generation Tension Master lifting series and Exo-Booster lines providing 24-hour lipid barrier resilience.',
    details: [
      'Next-gen Exosome cellular transport system',
      '100% Hospital-grade clinical safety guarantee',
    ],
    image: '/images/hero/hero_model_layer_1.jpg',
    floatingText: 'HOMEOSTATIC CELLULAR REPAIR',
    metricLabel: 'BARRIER INTEGRITY',
    metricValue: '24 Hours',
  },
];

export default function BrandTimelineSection() {
  return (
    <section className="relative w-full py-20 sm:py-28 bg-gradient-to-b from-sky-50/30 via-white to-sky-50/20 overflow-hidden select-none border-b border-slate-200/60">
      {/* Background Studio Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[230px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16 sm:mb-24">
          <ScrollReveal variant="fade-up" delay={100} duration={850}>
            <span className="text-brand-primary text-xs sm:text-sm font-label font-bold tracking-[1.6px] uppercase block">
              15+ YEARS HERITAGE & EVOLUTION
            </span>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={200} duration={850}>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-[44px] font-semibold text-slate-900 leading-[1.2] tracking-tight max-w-[28ch]">
              The Evolution of{' '}
              <span className="font-serif-display italic font-normal text-brand-primary">
                Dermaline R&D
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={300} duration={850}>
            <p className="font-body text-slate-600 text-base sm:text-lg leading-relaxed max-w-[62ch]">
              From hospital clinical trials to a global dermatology brand trusted by medical aesthetics professionals worldwide.
            </p>
          </ScrollReveal>
        </div>

        {/* Milestone Container with Alternating Balanced Grid */}
        <div className="relative w-full">
          {/* Central Spine Thread (Desktop) */}
          <div className="absolute left-1/2 top-6 bottom-6 w-[1px] bg-gradient-to-b from-sky-200/40 via-brand-primary/30 to-sky-200/40 -translate-x-1/2 hidden lg:block pointer-events-none z-0" />

          <div className="space-y-16 sm:space-y-24 relative z-10">
            {MILESTONES.map((milestone, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={milestone.year}
                  className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white/70 lg:bg-transparent border lg:border-none border-slate-200 p-6 lg:p-0 rounded-none sm:rounded-sm"
                >
                  {/* Center Dot Indicator (Desktop) */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:flex items-center justify-center pointer-events-none">
                    <div className="w-5 h-5 rounded-full bg-white border border-brand-primary/60 shadow-sm flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-brand-primary" />
                    </div>
                  </div>

                  {/* Information Content (Left on even, Right on odd) */}
                  <div
                    className={`lg:col-span-6 flex flex-col items-start space-y-4 ${
                      isEven ? 'lg:order-1 lg:pr-10' : 'lg:order-2 lg:pl-10'
                    }`}
                  >
                    <ScrollReveal variant={isEven ? 'slide-left' : 'slide-right'} delay={100} duration={850}>
                      <div className="flex items-center gap-3">
                        <span className="font-headline font-bold text-4xl sm:text-5xl text-brand-primary tracking-tight">
                          {milestone.year}
                        </span>
                        <span className="px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-brand-primary text-xs font-label font-extrabold tracking-wider uppercase">
                          {milestone.tag}
                        </span>
                      </div>
                    </ScrollReveal>

                    <ScrollReveal variant={isEven ? 'slide-left' : 'slide-right'} delay={200} duration={850}>
                      <h3 className="font-headline font-semibold text-xl sm:text-2xl lg:text-3xl text-slate-900 leading-snug">
                        {milestone.title}
                      </h3>
                    </ScrollReveal>

                    <ScrollReveal variant={isEven ? 'slide-left' : 'slide-right'} delay={300} duration={850}>
                      <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed">
                        {milestone.description}
                      </p>
                    </ScrollReveal>

                    <ScrollReveal variant={isEven ? 'slide-left' : 'slide-right'} delay={400} duration={850}>
                      <ul className="space-y-2 pt-2 border-t border-slate-100 w-full font-body text-xs sm:text-sm text-slate-700 font-medium">
                        {milestone.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-center gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </ScrollReveal>
                  </div>

                  {/* Showcase Image (Right on even, Left on odd) */}
                  <div
                    className={`lg:col-span-6 w-full relative ${
                      isEven ? 'lg:order-2 lg:pl-4' : 'lg:order-1 lg:pr-4'
                    }`}
                  >
                    <ScrollReveal variant={isEven ? 'slide-right' : 'slide-left'} delay={200} duration={950}>
                      <div className="relative w-full max-w-lg mx-auto group">
                        {/* Main Image Container */}
                        <div className="relative rounded-none sm:rounded-sm overflow-hidden shadow-md bg-white border border-slate-200 aspect-[16/10] sm:aspect-[16/11]">
                          <ImageWithSkeleton
                            src={milestone.image}
                            alt={milestone.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent z-10" />

                          {/* Top Tag Badge */}
                          <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1 text-brand-primary text-[10px] sm:text-[11px] font-label font-bold tracking-wider uppercase border border-white/80">
                            <span>{milestone.tag}</span>
                          </div>

                          {/* Top Metric Counter Pill */}
                          <div className="absolute top-4 right-4 z-20 bg-slate-900/85 backdrop-blur-md px-3 py-1 text-white text-[10px] sm:text-[11px] font-headline font-bold flex items-center gap-1.5 border border-white/20">
                            <span className="text-sky-300 font-extrabold">{milestone.metricValue}</span>
                            <span className="text-[9px] text-slate-300 uppercase tracking-wider font-label">{milestone.metricLabel}</span>
                          </div>

                          {/* Bottom Floating Bar */}
                          <div className="absolute bottom-3 inset-x-3 z-20 bg-white/95 backdrop-blur-md border border-slate-200/80 px-4 py-2 flex items-center justify-between">
                            <span className="font-label font-bold text-xs text-slate-900 tracking-wider uppercase truncate">
                              {milestone.floatingText}
                            </span>
                            <span className="font-label text-[10px] font-extrabold text-brand-primary uppercase tracking-widest shrink-0 ml-2">
                              EST. {milestone.year}
                            </span>
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
