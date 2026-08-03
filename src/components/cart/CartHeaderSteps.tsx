'use client';

import React from 'react';
import ScrollReveal from '@/components/common/ScrollReveal';
import CheckoutStepBar from '@/components/common/CheckoutStepBar';

export default function CartHeaderSteps() {
  return (
    <>
      <section className="relative w-full py-10 sm:py-14 bg-gradient-to-b from-slate-50 via-sky-50/30 to-white border-b border-slate-200/60 overflow-hidden select-none">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-3">
            <ScrollReveal variant="slide-left" delay={100} duration={800}>
              <span className="text-brand-primary text-xs font-label font-extrabold tracking-[1.8px] uppercase block">
                DERMALINE CLINICAL CART
              </span>
            </ScrollReveal>

            <ScrollReveal variant="slide-left" delay={200} duration={800}>
              <h1 className="font-headline text-3xl sm:text-4xl lg:text-[46px] font-semibold text-slate-900 tracking-tight leading-none">
                Shopping Cart{' '}
                <span className="font-serif-display italic font-normal text-brand-primary">
                  Management
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal variant="slide-left" delay={300} duration={800}>
              <p className="font-body text-slate-600 text-sm sm:text-base max-w-[55ch] leading-relaxed">
                Review your selected hospital-grade PDRN 99.5%, Exosomes & NAD+ skincare formulations before proceeding to secure checkout.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Chevron Ribbon Step Indicator Bar (Step 1 Active) */}
      <CheckoutStepBar currentStep={1} />
    </>
  );
}
