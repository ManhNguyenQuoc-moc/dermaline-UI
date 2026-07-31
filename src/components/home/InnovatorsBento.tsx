'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { InnovatorItem } from '@/services/customer/home/models/home.model';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/common/ScrollReveal';

export interface InnovatorsBentoProps {
  innovators?: InnovatorItem[];
}

export default function InnovatorsBento({ innovators = [] }: InnovatorsBentoProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Automatic focal card rotation cycle (Card 1 -> Card 2 -> Card 3 -> Card 1)
  useEffect(() => {
    if (innovators.length === 0 || isHovered) return;

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % Math.min(innovators.length, 3));
    }, 3500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [innovators, isHovered]);

  if (!innovators || innovators.length === 0) return null;

  return (
    <section
      className="relative w-full bg-[#f7f9fb] py-10 sm:py-12 lg:py-14 border-t border-slate-200/70 overflow-hidden select-none"
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Soft Ambient Studio Glow */}
      <div className="absolute top-1/3 left-0 w-[550px] h-[550px] bg-sky-200/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-blue-200/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Figma 6:55 Header Row - Top 3 Best Seller Skincare Context */}
        <ScrollReveal variant="slide-left" delay={100} duration={850}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-8 border-b border-slate-200/60">
            <div className="space-y-1">
              <span className="text-brand-primary text-xs sm:text-sm font-label font-bold tracking-[1.4px] uppercase block">
                THE SELECTION
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-[40px] font-semibold text-slate-900 tracking-tight leading-tight">
                Top 3 Best Seller Skincare
              </h2>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 font-label text-sm font-semibold text-brand-primary hover:text-sky-700 tracking-[0.7px] transition-colors group shrink-0"
            >
              <span>Shop All Skincare</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Top 3 Rotating Focal Cards Grid (1 -> 2 -> 3 -> 1 Continuous Enlargement Cycle) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch py-2">
          {innovators.slice(0, 3).map((item, idx) => {
            const isFeatured = activeIndex === idx;

            // Outer-edge entrance directions: Card 0: slide-left, Card 1: fade-up, Card 2: slide-right
            const variant = idx === 0 ? 'slide-left' : idx === 1 ? 'fade-up' : 'slide-right';
            const delay = 200 + idx * 150;

            return (
              <ScrollReveal key={item.id} variant={variant} delay={delay} duration={900} className="h-full">
                <div
                  onMouseEnter={() => {
                    setIsHovered(true);
                    setActiveIndex(idx);
                  }}
                  className="h-full"
                >
                  <Link
                    href="/products"
                    className={`bg-white rounded-2xl overflow-hidden flex flex-col justify-between group h-full relative cursor-pointer block transition-all duration-700 ease-out transform ${
                      isFeatured
                        ? 'scale-[1.04] sm:scale-[1.05] border-2 border-brand-primary shadow-2xl ring-4 ring-brand-primary/15 z-20 -translate-y-2'
                        : 'scale-[0.97] opacity-85 border border-[#bec8cf] shadow-sm hover:opacity-100 hover:scale-[1.01] z-10 translate-y-0'
                    }`}
                  >
                    {/* Product Image Frame */}
                    <div className="h-[300px] sm:h-[340px] lg:h-[380px] relative w-full overflow-hidden bg-slate-100 shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className={`w-full h-full object-cover object-center transition-transform duration-1000 ease-out ${
                          isFeatured ? 'scale-108' : 'scale-100 group-hover:scale-105'
                        }`}
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent z-10 transition-opacity duration-700 ${
                          isFeatured ? 'opacity-30' : 'opacity-60'
                        }`}
                      />

                      {/* Top Badge Overlay */}
                      {item.badge && (
                        <div
                          className={`absolute top-4 left-4 z-20 font-label font-bold text-[10px] uppercase tracking-[0.5px] px-3 py-1 rounded-sm shadow-md transition-all duration-500 ${
                            isFeatured
                              ? 'bg-brand-primary text-white scale-105 shadow-brand-primary/40'
                              : 'bg-slate-900/90 text-white'
                          }`}
                        >
                          {item.badge}
                        </div>
                      )}

                      {/* Active Focal Highlight Indicator Pill */}
                      {isFeatured && (
                        <div className="absolute top-4 right-4 z-20 bg-brand-primary/95 text-white font-label font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md backdrop-blur-md shadow-md animate-pulse">
                          TOP #{idx + 1} FOCUS
                        </div>
                      )}
                    </div>

                    {/* Card Body Content */}
                    <div className="p-5 sm:p-7 flex flex-col justify-between flex-1 space-y-2.5 bg-white">
                      <div className="space-y-1.5">
                        <span
                          className={`font-label font-bold text-xs sm:text-sm tracking-[0.7px] block transition-colors duration-500 ${
                            isFeatured ? 'text-brand-primary font-extrabold' : 'text-slate-500'
                          }`}
                        >
                          {item.category}
                        </span>
                        <h3
                          className={`font-headline font-semibold text-xl sm:text-2xl tracking-tight leading-snug transition-colors duration-500 ${
                            isFeatured ? 'text-brand-primary font-bold' : 'text-slate-900 group-hover:text-brand-primary'
                          }`}
                        >
                          {item.title}
                        </h3>
                        <p className="font-body text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Carousel Progress Dots Selector */}
        <div className="flex items-center justify-center gap-2 pt-4">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-label={`Highlight Card ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${
                activeIndex === i
                  ? 'w-10 bg-brand-primary shadow-md shadow-brand-primary/40'
                  : 'w-3 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
