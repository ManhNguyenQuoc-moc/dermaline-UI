'use client';

import React, { useState, useEffect, useRef } from 'react';
import GButton from '@/@core/component/Antd/Button';
import { AboutData } from '@/services/customer/home/models/home.model';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from '@/components/common/ScrollReveal';

export interface AboutBannerProps {
  data?: AboutData;
}

interface AboutSlideItem {
  id: number;
  image: string;
  floatingTitle: string;
  floatingDesc: string;
  floatingBadge: string;
}

const ABOUT_SLIDES: AboutSlideItem[] = [
  {
    id: 1,
    image: '/images/about/about_derma_lab.jpg',
    floatingTitle: 'SOLUTION FOR HEALTHY SKIN',
    floatingDesc: 'Years of hospital skincare R&D providing fundamental solutions for healthy skin.',
    floatingBadge: 'HOSPITAL CLINICAL FORMULA',
  },
  {
    id: 2,
    image: '/images/hero/hero_korean_model_2.jpg',
    floatingTitle: '100% CLINICAL PURITY',
    floatingDesc: 'Formulated with 99.5% active purity salmon PDRN and plant exosomes.',
    floatingBadge: 'BIO-CELLULAR PURITY',
  },
  {
    id: 3,
    image: '/images/hero/hero_korean_model_3.jpg',
    floatingTitle: 'BIO-CELLULAR REPAIR',
    floatingDesc: 'Restores skin pH homeostasis and 24-hour lipid matrix barrier resilience.',
    floatingBadge: 'HOMEOSTATIC MATRIX',
  },
];

export default function AboutBanner({ data }: AboutBannerProps) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Eyebrow badge text - Official Dermaline Tagline
  const eyebrowText = data?.eyebrow || 'DERMACOSMETICS FOR SKIN RECOVERY';
  const titleText = data?.title || 'About DERMALINE';
  const paragraph1 =
    data?.paragraph1 ||
    'Dermaline constantly agonized and studied to improve fundamental skin concerns.';
  const paragraph2 =
    data?.paragraph2 ||
    'Based on the time and effort accumulated by developing skin care products at hospitals for many years, I promise to take the lead as a dermatology brand that provides solutions for healthy skin.';

  // Statistics
  const stats =
    data?.statistics && data.statistics.length > 0
      ? data.statistics
      : [
          { value: '15+', label: 'Years Hospital Skincare R&D' },
          { value: '99.8%', label: 'Active Purity Standard' },
          { value: '100%', label: 'Dermatologist Approved' },
        ];

  // Automatic slide rotation cycle every 4.5 seconds (Pauses when user hovers)
  useEffect(() => {
    if (isHovered) return;

    timerRef.current = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % ABOUT_SLIDES.length);
        setIsTransitioning(false);
      }, 300);
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered]);

  const activeSlide = ABOUT_SLIDES[currentSlide];

  return (
    <section className="relative w-full bg-gradient-to-b from-white via-sky-50/40 to-white py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-slate-200/60 select-none">
      {/* Background Soft Studio Ambient Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[550px] h-[550px] bg-brand-primary/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[550px] h-[550px] bg-sky-200/35 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Story & Statistics (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-5 sm:space-y-6">
            {/* Eyebrow Header */}
            <ScrollReveal variant="slide-left" delay={100} duration={850}>
              <span className="text-brand-primary text-xs sm:text-sm font-label font-bold tracking-[1.4px] uppercase block">
                {eyebrowText}
              </span>
            </ScrollReveal>

            {/* Main Heading */}
            <ScrollReveal variant="slide-left" delay={220} duration={850}>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-[40px] font-semibold text-slate-900 leading-[1.2] tracking-tight">
                {titleText}
              </h2>
            </ScrollReveal>

            {/* Paragraphs - Official Dermaline Manifesto */}
            <ScrollReveal variant="slide-left" delay={340} duration={850}>
              <div className="space-y-3 font-body text-slate-600 text-base sm:text-lg leading-[1.65]">
                <p className="font-medium text-slate-800">{paragraph1}</p>
                {paragraph2 && <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{paragraph2}</p>}
              </div>
            </ScrollReveal>

            {/* Statistics Row */}
            <div className="pt-5 border-t border-slate-100 w-full grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
              {stats.map((stat, idx) => (
                <ScrollReveal key={idx} variant="fade-up" delay={450 + idx * 120} duration={800}>
                  <div className="flex flex-col space-y-1">
                    <span className="text-3xl sm:text-4xl font-semibold font-headline text-brand-primary tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-xs sm:text-sm font-label font-medium text-slate-600 tracking-[0.7px] leading-snug">
                      {stat.label}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* CTA Button */}
            <ScrollReveal variant="slide-left" delay={650} duration={850}>
              <div className="pt-1">
                <Link href="/brand/story">
                  <GButton
                    type="primary"
                    size="large"
                    className="!px-8 !h-13 !text-sm font-label font-bold uppercase tracking-wider rounded-xl shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/45 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span>LEARN MORE ABOUT DERMALINE</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </GButton>
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Generous Offset & Breathing Room */}
          <div
            className="lg:col-span-6 relative w-full pt-2 pb-6 pl-2 sm:pl-8 lg:pl-12"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <ScrollReveal variant="slide-right" delay={200} duration={950}>
              <div
                className={`relative w-full transition-all duration-700 ease-out transform ${
                  isTransitioning
                    ? 'opacity-0 scale-95 translate-y-3 blur-xs'
                    : 'opacity-100 scale-100 translate-y-0 blur-none'
                }`}
              >
                {/* Main Image Frame */}
                <div className="relative rounded-tl-2xl rounded-tr-[52px] sm:rounded-tr-[72px] rounded-br-2xl rounded-bl-[52px] sm:rounded-bl-[72px] overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.18)] bg-white border border-slate-200/80 aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] group max-h-[460px] transition-all duration-500 hover:shadow-3xl">
                  <img
                    src={activeSlide.image}
                    alt={activeSlide.floatingTitle}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent z-10" />

                  {/* Slide Indicator Badge Top Right */}
                  <div className="absolute top-4 right-6 z-20 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-sky-200 text-brand-primary text-[10px] font-label font-bold tracking-wider uppercase shadow-md">
                    <span>{activeSlide.floatingBadge}</span>
                  </div>
                </div>

                {/* Generously Offset Floating Card */}
                <div className="absolute -bottom-10 -left-6 sm:-bottom-12 sm:-left-8 lg:-bottom-12 lg:-left-10 z-20 max-w-[300px] sm:max-w-[360px]">
                  <div className="bg-[#eceef0]/95 backdrop-blur-md border border-[#bec8cf] rounded-tl-2xl rounded-tr-[38px] sm:rounded-tr-[48px] rounded-br-2xl rounded-bl-[38px] sm:rounded-bl-[48px] shadow-[0px_20px_50px_rgba(0,0,0,0.15)] p-6 sm:p-7 space-y-2 text-slate-900 transition-all duration-500 hover:shadow-3xl hover:border-brand-primary/80">
                    <h3 className="font-headline font-semibold text-lg sm:text-xl text-brand-primary leading-snug">
                      &ldquo;{activeSlide.floatingTitle}&rdquo;
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {activeSlide.floatingDesc}
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
