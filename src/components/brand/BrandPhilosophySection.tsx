'use client';

import React from 'react';
import ScrollReveal from '@/components/common/ScrollReveal';
import { Microscope, Dna, HeartPulse } from 'lucide-react';

export default function BrandPhilosophySection() {
  const pillars = [
    {
      icon: Microscope,
      step: '01',
      title: 'Hospital Skincare Origin',
      subtitle: 'Derived From Clinical Practice',
      description:
        'Dermaline was born in Korean aesthetic hospitals. Every formulation originated from years of clinical studies focused on accelerating skin recovery following intensive laser and dermatological procedures.',
      badge: 'CLINICAL R&D HERITAGE',
      gradient: 'from-sky-500/10 via-brand-primary/5 to-transparent',
    },
    {
      icon: Dna,
      step: '02',
      title: '99.5% Bio-Cellular PDRN',
      subtitle: 'Salmon DNA & Exo-Peptides',
      description:
        'We harness ultra-purified Salmon PDRN (Polydeoxyribonucleotide) and plant exosomes. These bio-compatible active molecules stimulate natural cellular regeneration and collagen synthesis at a deep dermal layer.',
      badge: 'BIO-REGENERATIVE FORMULA',
      gradient: 'from-brand-primary/10 via-sky-400/5 to-transparent',
    },
    {
      icon: HeartPulse,
      step: '03',
      title: 'Homeostatic Skin Barrier',
      subtitle: 'Fundamental 24-Hour Balance',
      description:
        'Rather than temporary surface moisture, Dermaline restores skin pH homeostasis and strengthens damaged lipid barriers, providing permanent resilience against environmental stressors.',
      badge: 'HOMEOSTATIC BALANCE',
      gradient: 'from-sky-400/10 via-blue-500/5 to-transparent',
    },
  ];

  return (
    <section className="relative w-full py-20 sm:py-28 bg-white overflow-hidden select-none border-b border-slate-200/60">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-sky-100/50 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16 sm:mb-20">
          <ScrollReveal variant="fade-up" delay={100} duration={850}>
            <span className="text-brand-primary text-xs sm:text-sm font-label font-bold tracking-[1.6px] uppercase block">
              OUR CLINICAL PHILOSOPHY
            </span>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={200} duration={850}>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-[44px] font-semibold text-slate-900 leading-[1.2] tracking-tight max-w-[28ch]">
              3 Pillars of{' '}
              <span className="font-serif-display italic font-normal text-brand-primary">
                Dermaline Science
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={300} duration={850}>
            <p className="font-body text-slate-600 text-base sm:text-lg leading-relaxed max-w-[60ch]">
              How we combine hospital-proven medical aesthetic technology with daily skincare to achieve fundamental skin recovery.
            </p>
          </ScrollReveal>
        </div>

        {/* 3 Asymmetric Bento Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;

            return (
              <ScrollReveal
                key={pillar.step}
                variant="fade-up"
                delay={200 + idx * 150}
                duration={900}
              >
                <div className="group relative h-full bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-brand-primary/60 rounded-tl-2xl rounded-tr-[48px] sm:rounded-tr-[56px] rounded-br-2xl rounded-bl-[48px] sm:rounded-bl-[56px] p-8 sm:p-10 flex flex-col justify-between transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 overflow-hidden">
                  {/* Subtle Background Radial Gradient Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                  <div className="relative z-10 space-y-6">
                    {/* Top Row: Icon + Step Badge */}
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200/90 flex items-center justify-center text-brand-primary shadow-sm group-hover:scale-110 group-hover:border-brand-primary/40 transition-all duration-500">
                        <IconComponent className="w-7 h-7 stroke-[1.75]" />
                      </div>
                      <span className="font-headline font-bold text-3xl text-slate-300 group-hover:text-brand-primary/40 transition-colors duration-500">
                        {pillar.step}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="space-y-2.5">
                      <span className="text-[11px] font-label font-bold tracking-widest text-brand-primary uppercase block">
                        {pillar.subtitle}
                      </span>
                      <h3 className="font-headline font-semibold text-2xl text-slate-900 leading-snug group-hover:text-brand-primary transition-colors duration-300">
                        {pillar.title}
                      </h3>
                      <p className="font-body text-slate-600 text-sm sm:text-base leading-[1.7] pt-1">
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Badge */}
                  <div className="relative z-10 pt-8">
                    <span className="inline-block px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-[11px] font-label font-extrabold tracking-wider uppercase shadow-xs group-hover:border-sky-300 group-hover:text-brand-primary transition-all duration-300">
                      {pillar.badge}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
