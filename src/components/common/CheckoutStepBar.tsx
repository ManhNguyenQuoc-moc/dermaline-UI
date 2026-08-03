'use client';

import React from 'react';
import Link from 'next/link';

interface CheckoutStepBarProps {
  currentStep: 1 | 2 | 3;
}

export default function CheckoutStepBar({ currentStep }: CheckoutStepBarProps) {
  const STEPS = [
    { step: 1, title: '01. SHOPPING CART', subtitle: 'Review Items', href: '/cart' },
    { step: 2, title: '02. CHECKOUT DETAILS', subtitle: 'Shipping & Payment', href: '/checkout' },
    { step: 3, title: '03. ORDER COMPLETE', subtitle: 'Confirmation', href: '#' },
  ];

  return (
    <div className="w-full bg-slate-100/80 border-y border-slate-200/80 select-none py-1 overflow-x-auto">
      <div className="max-w-[1400px] mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center w-full min-w-[640px]">
          {STEPS.map((item, idx) => {
            const isActive = item.step === currentStep;
            const isCompleted = item.step < currentStep;

            // Chevron Arrow Clip Path Formulas
            let clipPathStyle = '';
            if (idx === 0) {
              // First item: Arrow on right only
              clipPathStyle = 'polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%)';
            } else if (idx === STEPS.length - 1) {
              // Last item: Arrow notch on left only
              clipPathStyle = 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 18px 50%)';
            } else {
              // Middle item: Arrow notch on left & arrow point on right
              clipPathStyle = 'polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 18px 50%)';
            }

            const zIndex = STEPS.length - idx;

            let bgClass = 'bg-slate-200/90 text-slate-500';
            if (isActive) {
              bgClass = 'bg-slate-900 text-white font-bold shadow-xs';
            } else if (isCompleted) {
              bgClass = 'bg-slate-300/80 text-slate-800 font-semibold';
            }

            const isClickable = isCompleted || (item.step === 1 && currentStep === 2);

            const StepContent = (
              <div
                style={{ clipPath: clipPathStyle }}
                className={`relative flex-1 py-3.5 sm:py-4 px-6 sm:px-10 flex items-center justify-center gap-3 transition-all duration-300 -mr-4 ${bgClass} ${
                  isClickable ? 'hover:brightness-95 cursor-pointer' : 'cursor-default'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center font-label ${
                      isActive
                        ? 'bg-brand-primary text-white'
                        : isCompleted
                        ? 'bg-slate-700 text-white'
                        : 'bg-slate-300 text-slate-600'
                    }`}
                  >
                    {isCompleted ? '✓' : item.step}
                  </span>
                  <span className="font-label text-xs sm:text-sm font-bold tracking-wider uppercase whitespace-nowrap">
                    {item.title}
                  </span>
                </div>
              </div>
            );

            return (
              <React.Fragment key={item.step}>
                {isClickable ? (
                  <Link href={item.href} className="flex-1 block focus:outline-none" style={{ zIndex }}>
                    {StepContent}
                  </Link>
                ) : (
                  <div className="flex-1 block" style={{ zIndex }}>
                    {StepContent}
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
