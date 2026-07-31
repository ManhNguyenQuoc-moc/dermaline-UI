'use client';

import React, { useState } from 'react';
import ScrollReveal from '@/components/common/ScrollReveal';

export default function BrandTechnologySection() {
  const [activeTab, setActiveTab] = useState<'pdrn' | 'exosome' | 'homeostasis'>('pdrn');

  const techDetails = {
    pdrn: {
      title: '99.5% Active Purity Salmon PDRN',
      subtitle: 'Cellular Matrix Tissue Regeneration',
      description:
        'Salmon PDRN (Polydeoxyribonucleotide) shares a 95% DNA sequence homology with human DNA. Dermaline purifies Salmon DNA to an extraordinary 99.5% active purity, delivering key nucleotides directly into damaged dermal tissue to stimulate collagen synthesis and cell renewal.',
      metrics: [
        { label: 'DNA Sequence Homology', value: '95%' },
        { label: 'Active Purification Grade', value: '99.5%' },
        { label: 'Dermal Penetration Rate', value: '3.8x' },
      ],
      highlights: [
        'Accelerates post-laser dermal repair',
        'Stimulates endogenous collagen type I & III',
        'Reduces post-procedure inflammation',
      ],
      image: '/images/hero/hero_korean_model_1.jpg',
    },
    exosome: {
      title: 'Bio-Exosome Nano-Carrier Delivery',
      subtitle: 'Sub-Cellular Active Transport',
      description:
        'Exosomes are lipid nano-vesicles measuring 30-150nm that act as intercellular messengers. Dermaline encapsulates active peptides and growth factors inside bio-compatible plant exosomes to bypass the stratum corneum barrier and reach target fibroblast cells intact.',
      metrics: [
        { label: 'Nano-Vesicle Diameter', value: '30-150nm' },
        { label: 'Barrier Transport Efficiency', value: '94.2%' },
        { label: 'Stability Homogeneity', value: '100%' },
      ],
      highlights: [
        'Transports high-weight peptide complexes',
        'Protects active ingredients from enzymatic oxidation',
        'Deep epidermal & dermal absorption',
      ],
      image: '/images/hero/hero_korean_model_2.jpg',
    },
    homeostasis: {
      title: '24-Hour Homeostatic Barrier System',
      subtitle: 'pH Balance & Lipid Matrix Resilience',
      description:
        'Skin recovery requires stabilizing the acid mantle and rebuilding intercellular ceramides. Dermaline formulas regulate skin surface pH to optimal 5.5 acidic balance while reinforcing the ceramide-cholesterol lipid matrix.',
      metrics: [
        { label: 'Optimal Acid Mantle pH', value: '5.5' },
        { label: 'Barrier Retention Hours', value: '24 Hours' },
        { label: 'TEWL Reduction Rate', value: '-87.4%' },
      ],
      highlights: [
        'Prevents Trans-Epidermal Water Loss (TEWL)',
        'Restores natural microbiome balance',
        'Reduces hyper-reactivity & redness',
      ],
      image: '/images/hero/hero_korean_model_3.jpg',
    },
  };

  const currentTech = techDetails[activeTab];

  return (
    <section className="relative w-full py-20 sm:py-28 bg-white overflow-hidden select-none border-b border-slate-200/60">
      {/* Soft Ambient Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[550px] h-[550px] bg-brand-primary/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-14 sm:mb-16">
          <ScrollReveal variant="fade-up" delay={100} duration={850}>
            <span className="text-brand-primary text-xs sm:text-sm font-label font-bold tracking-[1.6px] uppercase block">
              ADVANCED MEDICAL BEAUTY R&D
            </span>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={200} duration={850}>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-[44px] font-semibold text-slate-900 leading-[1.2] tracking-tight max-w-[30ch]">
              Bio-Cellular Formulation{' '}
              <span className="font-serif-display italic font-normal text-brand-primary">
                Technology
              </span>
            </h2>
          </ScrollReveal>

          {/* Interactive Technology Tabs */}
          <ScrollReveal variant="fade-up" delay={300} duration={850}>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <button
                type="button"
                onClick={() => setActiveTab('pdrn')}
                className={`px-6 py-2.5 rounded-full font-label text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeTab === 'pdrn'
                    ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/30 scale-105'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                99.5% Salmon PDRN
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('exosome')}
                className={`px-6 py-2.5 rounded-full font-label text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeTab === 'exosome'
                    ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/30 scale-105'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                Plant Exosome Carriers
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('homeostasis')}
                className={`px-6 py-2.5 rounded-full font-label text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeTab === 'homeostasis'
                    ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/30 scale-105'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                24H Homeostasis System
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Tab Content Display Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center bg-slate-50/70 border border-slate-200/90 rounded-tl-2xl rounded-tr-[56px] sm:rounded-tr-[72px] rounded-br-2xl rounded-bl-[56px] sm:rounded-bl-[72px] p-8 sm:p-12 lg:p-14 shadow-xl">
          {/* Left Column: Tech Description & Metrics (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-brand-primary text-xs font-label font-extrabold tracking-widest uppercase block">
              {currentTech.subtitle}
            </span>

            <h3 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 leading-tight">
              {currentTech.title}
            </h3>

            <p className="font-body text-slate-600 text-base sm:text-lg leading-[1.7]">
              {currentTech.description}
            </p>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200/80">
              {currentTech.metrics.map((m, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-headline font-bold text-2xl sm:text-3xl text-brand-primary">
                    {m.value}
                  </span>
                  <span className="font-label text-[11px] sm:text-xs text-slate-500 font-semibold leading-tight pt-0.5">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Highlights List */}
            <div className="space-y-2 pt-2">
              {currentTech.highlights.map((h, idx) => (
                <div key={idx} className="flex items-center gap-2.5 font-body text-sm sm:text-base text-slate-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Image Display with Organic Wave Border (5 Cols) */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <div className="relative w-full max-w-[420px]">
              <div className="relative rounded-tl-2xl rounded-tr-[48px] sm:rounded-tr-[64px] rounded-br-2xl rounded-bl-[48px] sm:rounded-bl-[64px] overflow-hidden shadow-2xl bg-white border border-slate-200 aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] group">
                <img
                  src={currentTech.image}
                  alt={currentTech.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent z-10" />

                {/* Floating Badge */}
                <div className="absolute bottom-4 right-4 z-20 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-sky-200 text-brand-primary text-[10px] font-label font-bold tracking-wider uppercase shadow-md">
                  <span>HOSPITAL CLINICAL GRADE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
