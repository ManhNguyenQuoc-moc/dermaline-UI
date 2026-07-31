'use client';

import React from 'react';
import Link from 'next/link';
import GButton from '@/@core/component/Antd/Button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollReveal from '@/components/common/ScrollReveal';

export default function NotFoundPage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white text-slate-900 overflow-x-hidden select-none">
      {/* Header Layout */}
      <Header />

      {/* Main 404 Hero Section */}
      <main className="flex-1 relative w-full min-h-[90dvh] pt-32 pb-20 sm:pt-40 sm:pb-28 flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 via-sky-50/40 to-white">
        {/* Ambient Studio Glow Blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-brand-primary/12 rounded-full blur-[220px] pointer-events-none" />

        {/* Large Subtle 404 Watermark Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <span className="font-headline font-extrabold text-[180px] sm:text-[300px] lg:text-[380px] text-sky-100/60 tracking-tighter leading-none select-none">
            404
          </span>
        </div>

        <div className="max-w-[840px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center flex flex-col items-center">
          {/* Tagline Badge */}
          <ScrollReveal variant="fade-up" delay={100} duration={850}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-sky-200 shadow-sm text-brand-primary text-xs font-label font-extrabold tracking-[1.6px] uppercase mb-6">
              <span>PAGE NOT FOUND • ERROR 404</span>
            </div>
          </ScrollReveal>

          {/* Main 404 Heading with Luxury Playfair Display Italic */}
          <ScrollReveal variant="fade-up" delay={220} duration={850}>
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-[58px] font-semibold text-slate-900 leading-[1.15] tracking-tight mb-6">
              This Path Seems To Be{' '}
              <span className="font-serif-display italic font-normal text-brand-primary inline-block px-2">
                Out of Reach
              </span>
            </h1>
          </ScrollReveal>

          {/* Paragraph Description */}
          <ScrollReveal variant="fade-up" delay={340} duration={850}>
            <p className="font-body text-slate-600 text-base sm:text-xl leading-[1.7] max-w-[58ch] mb-10">
              The page or clinical product link you are searching for has been moved, renamed, or is currently undergoing hospital formulation updates.
            </p>
          </ScrollReveal>

          {/* Quick Navigation Action Buttons */}
          <ScrollReveal variant="fade-up" delay={460} duration={850}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/">
                <GButton
                  type="primary"
                  size="large"
                  className="!px-8 !h-13 !text-sm font-label font-bold uppercase tracking-wider rounded-xl shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/45 transition-all duration-300"
                >
                  <span>RETURN TO HOMEPAGE</span>
                </GButton>
              </Link>

              <Link href="/products">
                <GButton
                  size="large"
                  className="!px-7 !h-13 !text-sm font-label font-semibold tracking-wider rounded-xl border border-slate-300 text-slate-700 hover:text-brand-primary hover:border-brand-primary transition-all duration-300"
                >
                  <span>BROWSE PRODUCTS</span>
                </GButton>
              </Link>

              <Link href="/brand/story">
                <GButton
                  size="large"
                  className="!px-7 !h-13 !text-sm font-label font-semibold tracking-wider rounded-xl border border-slate-300 text-slate-700 hover:text-brand-primary hover:border-brand-primary transition-all duration-300"
                >
                  <span>OUR BRAND STORY</span>
                </GButton>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </main>

      {/* Footer Layout */}
      <Footer />
    </div>
  );
}
