'use client';

import React from 'react';
import ScrollReveal from '@/components/common/ScrollReveal';
import GButton from '@/@core/component/Antd/Button';
import Link from 'next/link';

export default function BrandStoryHero() {
  return (
    <section className="relative w-full min-h-[85dvh] pt-32 pb-20 sm:pt-40 sm:pb-28 bg-gradient-to-b from-slate-50 via-sky-50/40 to-white overflow-hidden select-none flex items-center">
      {/* Soft Studio Ambient Glow Blobs */}
      <div className="absolute top-1/4 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/12 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[650px] h-[650px] bg-sky-200/35 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Asymmetric Brand Headline & Manifesto (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Tagline Badge (Pure Text, No Pulsing Dot) */}
            <ScrollReveal variant="slide-left" delay={100} duration={850}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-sky-200/90 shadow-sm text-brand-primary text-xs font-label font-extrabold tracking-[1.6px] uppercase">
                <span>HOSPITAL DERMACOSMETICS ORIGIN</span>
              </div>
            </ScrollReveal>

            {/* Main Headline with Luxury Serif Display Accent */}
            <ScrollReveal variant="slide-left" delay={220} duration={850}>
              <h1 className="font-headline text-4xl sm:text-5xl lg:text-[54px] font-semibold text-slate-900 leading-[1.15] tracking-tight">
                Fundamental Solutions For{' '}
                <span className="font-serif-display italic font-normal text-brand-primary inline-block pr-4 pb-1">
                  Healthy Skin
                </span>
              </h1>
            </ScrollReveal>

            {/* Subheading / Manifesto */}
            <ScrollReveal variant="slide-left" delay={340} duration={850}>
              <p className="font-body text-slate-600 text-base sm:text-xl leading-[1.7] max-w-[62ch]">
                Dermaline constantly agonized and studied to improve fundamental skin concerns. Based on the time and effort accumulated by developing skin care products at hospitals for many years, we take the lead as a dermatology brand providing hospital-grade solutions for healthy skin.
              </p>
            </ScrollReveal>

            {/* Trust Metrics Pill Bar */}
            <ScrollReveal variant="slide-left" delay={460} duration={850}>
              <div className="pt-2 grid grid-cols-3 gap-6 border-t border-slate-200/80 w-full max-w-[580px]">
                <div className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-headline font-bold text-slate-900">15+</span>
                  <span className="text-xs font-label text-slate-500 uppercase tracking-wider font-semibold">Years Hospital R&D</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-headline font-bold text-slate-900">30+</span>
                  <span className="text-xs font-label text-slate-500 uppercase tracking-wider font-semibold">Global Countries</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-headline font-bold text-brand-primary">99.5%</span>
                  <span className="text-xs font-label text-slate-500 uppercase tracking-wider font-semibold">Active Purity</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Action Buttons */}
            <ScrollReveal variant="slide-left" delay={580} duration={850}>
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link href="/products">
                  <GButton
                    type="primary"
                    size="large"
                    className="!px-8 !h-13 !text-sm font-label font-bold uppercase tracking-wider rounded-xl shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/45 transition-all duration-300"
                  >
                    <span>EXPLORE CLINICAL PRODUCTS</span>
                  </GButton>
                </Link>
                <Link href="/brand/rd">
                  <GButton
                    size="large"
                    className="!px-7 !h-13 !text-sm font-label font-semibold tracking-wider rounded-xl border border-slate-300 text-slate-700 hover:text-brand-primary hover:border-brand-primary transition-all duration-300"
                  >
                    <span>VISIT R&D FACILITY</span>
                  </GButton>
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Organic Wave Border Studio Image Showcase (5 Cols) */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <ScrollReveal variant="slide-right" delay={300} duration={950}>
              <div className="relative w-full max-w-[480px]">
                {/* Main Hero Image with Wave Border Styling (Top-Right & Bottom-Left Curved) */}
                <div className="relative rounded-tl-3xl rounded-tr-[72px] sm:rounded-tr-[88px] rounded-br-3xl rounded-bl-[72px] sm:rounded-bl-[88px] overflow-hidden shadow-[0px_30px_60px_-15px_rgba(0,0,0,0.22)] bg-white border border-slate-200/80 aspect-[4/5] group">
                  <img
                    src="/images/about/about_derma_lab.jpg"
                    alt="DERMALINE Medical Aesthetics Hospital Lab"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent z-10" />

                  {/* Floating Top Badge */}
                  <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-sky-200 text-brand-primary text-xs font-label font-bold tracking-wider uppercase shadow-md">
                    <span>EST. HOSPITAL R&D</span>
                  </div>
                </div>

                {/* Overlapping Floating Hospital Certificate Badge */}
                <div className="absolute -bottom-8 -left-6 sm:-bottom-10 sm:-left-8 z-20 max-w-[280px]">
                  <div className="bg-[#eceef0]/95 backdrop-blur-md border border-[#bec8cf] rounded-tl-2xl rounded-tr-[40px] rounded-br-2xl rounded-bl-[40px] shadow-[0px_20px_50px_rgba(0,0,0,0.16)] p-6 space-y-2 text-slate-900 transition-all duration-500 hover:shadow-3xl">
                    <span className="font-label text-xs font-extrabold uppercase tracking-wider text-brand-primary block">
                      DERMATOLOGIST CERTIFIED
                    </span>
                    <h3 className="font-headline font-semibold text-lg text-slate-900 leading-snug">
                      Hospital-Grade Formula
                    </h3>
                    <p className="font-body text-xs text-slate-600 leading-relaxed font-normal">
                      Developed in close partnership with top Korean aesthetic clinics and dermatologists.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
