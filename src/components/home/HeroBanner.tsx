'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { Carousel } from 'antd';
import type { CarouselRef } from 'antd/es/carousel';
import GButton from '@/@core/component/Antd/Button';
import { HeroData } from '@/services/customer/home/models/home.model';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface HeroBannerProps {
  data: HeroData;
}

export default function HeroBanner({ data }: HeroBannerProps) {
  const carouselRef = useRef<CarouselRef>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = data?.slides || [];

  const handlePrev = () => {
    carouselRef.current?.prev();
  };

  const handleNext = () => {
    carouselRef.current?.next();
  };

  const handleGoTo = (index: number) => {
    carouselRef.current?.goTo(index, false);
  };

  if (!slides || slides.length === 0) return null;

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-white select-none">
      {/* 2026 Top Header Studio Wave Arc Transition Mask (Mờ Nhẹ Nhàng Giống Chân Hero Banner) */}
      <div className="absolute top-0 inset-x-0 h-10 sm:h-14 overflow-hidden z-20 pointer-events-none opacity-80">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-full object-fill text-sky-50/40 fill-current drop-shadow-xs transform rotate-180"
          preserveAspectRatio="none"
        >
          <path d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,480,120,360,120C240,120,120,120,60,120L0,120Z" />
        </svg>
      </div>

      {/* Main Full-Bleed Studio Hero Slider Area */}
      <div className="relative z-10 w-full flex-1 flex flex-col justify-center overflow-hidden">
        <Carousel
          ref={carouselRef}
          autoplay
          autoplaySpeed={6500}
          effect="fade"
          dots={false}
          beforeChange={(_, next) => setCurrentSlide(next)}
          className="w-full h-full"
        >
          {slides.map((slide, index) => {
            const isActive = currentSlide === index;

            return (
              <div key={slide.id} className="relative w-full min-h-screen flex items-center focus:outline-none overflow-hidden">
                {/* Full-Bleed Background Image Spanning 100% Width & Height */}
                <div className="absolute inset-0 z-0 overflow-hidden bg-slate-100">
                  <img
                    src={slide.productImage}
                    alt={slide.titlePart1}
                    className={`w-full h-full object-cover object-center lg:object-[80%_center] transform transition-transform duration-1000 ease-out ${isActive ? 'scale-100' : 'scale-105'
                      }`}
                  />
                  {/* Fine-Tuned Soft Radial Spotlight Text Blur Shield */}
                  <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_58%_78%_at_28%_45%,_rgba(224,242,254,0.85)_0%,_rgba(240,249,255,0.70)_45%,_rgba(255,255,255,0)_85%)] pointer-events-none" />
                  {/* Soft Brand Blue Ambient Glow */}
                  <div className="absolute top-[45%] left-[28%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/20 rounded-full blur-[130px] pointer-events-none z-10" />
                </div>

                {/* High-Contrast Soft Luxury Typography Container */}
                <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 pt-28 lg:pt-32 pb-24">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left Column: Soft Elegant Editorial Skincare Typography (7 Cols) */}
                    <div className="lg:col-span-7 flex flex-col items-start space-y-5 sm:space-y-6">
                      {/* Clean Subtitle Badge */}
                      <div
                        className={`transition-all duration-700 ease-out transform ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                          }`}
                      >
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-sky-300 text-brand-primary text-xs font-label font-bold tracking-[1.6px] uppercase shadow-md">
                          <span>{slide.badge}</span>
                        </div>
                      </div>

                      {/* Soft Luxury Editorial Title (Playfair Display & Plus Jakarta Sans) */}
                      <div
                        className={`space-y-1 transition-all duration-700 ease-out delay-75 transform ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                          }`}
                      >
                        <span className="block text-slate-500 font-label font-bold text-sm sm:text-base lg:text-lg uppercase tracking-[2px]">
                          {slide.titlePart1}
                        </span>
                        <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[76px] font-serif-display font-medium tracking-tight text-slate-900 leading-[1.18] overflow-visible py-1">
                          <span className="inline-block bg-gradient-to-r from-brand-primary via-sky-600 to-blue-700 bg-clip-text text-transparent font-serif-display italic font-semibold pr-6 pb-2 -mr-6">
                            {slide.titlePart2}
                          </span>
                        </h1>
                      </div>

                      {/* Clinical Description */}
                      <p
                        className={`text-slate-600 text-base sm:text-lg lg:text-xl font-body leading-relaxed max-w-xl font-normal transition-all duration-700 ease-out delay-150 transform ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                          }`}
                      >
                        {slide.description}
                      </p>

                      {/* Action CTA Buttons */}
                      <div
                        className={`flex flex-wrap items-center gap-4 pt-1 transition-all duration-700 ease-out delay-200 transform ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                          }`}
                      >
                        <Link href={slide.primaryCtaLink}>
                          <GButton
                            type="primary"
                            size="large"
                            className="!px-8 !h-13 !text-sm font-label font-bold uppercase tracking-wider rounded-xl shadow-lg shadow-brand-primary/30 hover:shadow-brand-primary/50 transition-all duration-300 flex items-center gap-2 group"
                          >
                            <span>{slide.primaryCtaText}</span>
                          </GButton>
                        </Link>

                        <Link href={slide.secondaryCtaLink}>
                          <GButton
                            type="outline"
                            size="large"
                            className="!px-7 !h-13 !text-sm font-label font-bold uppercase tracking-wider rounded-xl !border-slate-300 !text-slate-700 hover:!border-brand-primary hover:!text-brand-primary hover:bg-white/90 backdrop-blur-md transition-all duration-300"
                          >
                            {slide.secondaryCtaText}
                          </GButton>
                        </Link>
                      </div>

                      {/* Key Statistics Row */}
                      <div
                        className={`pt-5 border-t border-slate-200/90 w-full grid grid-cols-3 gap-4 transition-all duration-700 ease-out delay-300 transform ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                          }`}
                      >
                        {slide.stats.map((stat, i) => (
                          <div key={i} className="flex flex-col">
                            <span className="text-2xl sm:text-3xl font-bold font-serif-display text-brand-primary tracking-tight">
                              {stat.value}
                            </span>
                            <span className="text-[11px] font-label text-slate-500 font-semibold uppercase tracking-wider mt-0.5">
                              {stat.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Column: Un-obscured Studio Image Space (5 Cols) */}
                    <div className="hidden lg:block lg:col-span-5 relative pointer-events-none" />
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>

      {/* Side-Mounted Transition Arrow Buttons */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous Slide"
        className="absolute left-4 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-30 p-3.5 sm:p-4 rounded-full bg-white/85 hover:bg-white text-slate-800 hover:text-brand-primary border border-slate-200/90 shadow-xl backdrop-blur-md transition-all duration-300 active:scale-95 flex items-center justify-center group"
      >
        <ChevronLeft className="w-6 h-6 stroke-[2] group-hover:-translate-x-0.5 transition-transform" />
      </button>

      <button
        type="button"
        onClick={handleNext}
        aria-label="Next Slide"
        className="absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-30 p-3.5 sm:p-4 rounded-full bg-white/85 hover:bg-white text-slate-800 hover:text-brand-primary border border-slate-200/90 shadow-xl backdrop-blur-md transition-all duration-300 active:scale-95 flex items-center justify-center group"
      >
        <ChevronRight className="w-6 h-6 stroke-[2] group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Transparent Bottom Indicator Bar */}
      <div className="absolute bottom-12 inset-x-0 z-30 bg-transparent flex items-center shrink-0 pointer-events-none">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between gap-4">
          {/* Slide Counter */}
          <div className="flex items-center gap-3 pointer-events-auto bg-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200/80 shadow-sm">
            <span className="text-xl font-serif-display font-bold text-brand-primary">
              {String(currentSlide + 1).padStart(2, '0')}
            </span>
            <span className="text-slate-400 font-bold">/</span>
            <span className="text-xs font-label font-bold text-slate-500">
              {String(slides.length).padStart(2, '0')}
            </span>
          </div>

          {/* Center Carousel Dots */}
          <div className="flex items-center gap-2 pointer-events-auto bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200/80 shadow-sm">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleGoTo(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-500 ${currentSlide === idx
                    ? 'w-10 bg-brand-primary shadow-md shadow-brand-primary/40'
                    : 'w-3 bg-slate-300 hover:bg-slate-400'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 2026 Bottom Studio Organic Wave Arc Curve Transition Mask (Nối Hero & About Section) */}
      <div className="relative w-full h-12 sm:h-16 overflow-hidden z-20 pointer-events-none -mt-12 sm:-mt-16">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-full object-fill text-sky-50/40 fill-current drop-shadow-xs"
          preserveAspectRatio="none"
        >
          <path d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,480,120,360,120C240,120,120,120,60,120L0,120Z" />
        </svg>
      </div>
    </section>
  );
}
