'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import CheckoutStepBar from '@/components/common/CheckoutStepBar';
import ScrollReveal from '@/components/common/ScrollReveal';
import { CheckCircleFilled, ShoppingCartOutlined, UserOutlined } from '@/@core/component/Antd/Icons';

interface OrderCompletePageProps {
  params: Promise<{ id: string }>;
}

export default function OrderCompletePage({ params }: OrderCompletePageProps) {
  const resolvedParams = use(params);
  const searchParams = useSearchParams();

  const orderId = resolvedParams.id;
  const orderNumber = searchParams.get('orderNumber') || `DLM-${orderId.slice(-6)}`;
  const totalAmount = searchParams.get('total') ? Number(searchParams.get('total')) : 185;

  return (
    <main className="w-full min-h-screen bg-white select-none pt-24 sm:pt-28 pb-20">
      {/* 1. Header Hero Banner */}
      <section className="relative w-full py-10 sm:py-14 bg-gradient-to-b from-slate-50 via-sky-50/30 to-white border-b border-slate-200/60 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-3">
            <ScrollReveal variant="slide-left" delay={100} duration={800}>
              <span className="text-brand-primary text-xs font-label font-extrabold tracking-[1.8px] uppercase block">
                DERMALINE CLINICAL ORDER CONFIRMATION
              </span>
            </ScrollReveal>

            <ScrollReveal variant="slide-left" delay={200} duration={800}>
              <h1 className="font-headline text-3xl sm:text-4xl lg:text-[46px] font-semibold text-slate-900 tracking-tight leading-none">
                Order Complete{' '}
                <span className="font-serif-display italic font-normal text-brand-primary">
                  Confirmation
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal variant="slide-left" delay={300} duration={800}>
              <p className="font-body text-slate-600 text-sm sm:text-base max-w-[55ch] leading-relaxed">
                Thank you for your clinical order. Your hospital-grade PDRN & Exosomes formulations are being prepared for dispatch.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. Full-Width Chevron Step Bar (Step 3 Active) */}
      <CheckoutStepBar currentStep={3} />

      {/* 3. Main Confirmation Card Container */}
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
        <ScrollReveal variant="fade-up" delay={200} duration={800}>
          <div className="bg-white border border-slate-200 rounded-none sm:rounded-sm shadow-md p-6 sm:p-10 text-center space-y-8">
            
            {/* Animated Success Badge */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-100/80 text-emerald-600 shadow-inner">
              <CheckCircleFilled className="text-5xl" />
            </div>

            <div className="space-y-2">
              <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 font-label text-xs font-bold rounded-full uppercase tracking-widest border border-emerald-200">
                Order Placed Successfully
              </span>
              <h2 className="font-headline text-2xl sm:text-3xl font-bold text-slate-900">
                Order #{orderNumber}
              </h2>
              <p className="font-body text-slate-600 text-sm max-w-md mx-auto">
                A confirmation email with clinical tracking details has been dispatched to your email address.
              </p>
            </div>

            {/* Key Order Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 bg-slate-50 border border-slate-200/80 text-left rounded-sm">
              <div>
                <span className="font-label text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Order Number
                </span>
                <span className="font-label text-sm font-extrabold text-slate-900 block mt-0.5">
                  {orderNumber}
                </span>
              </div>

              <div>
                <span className="font-label text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Estimated Delivery
                </span>
                <span className="font-label text-sm font-extrabold text-brand-primary block mt-0.5">
                  2 - 3 Business Days
                </span>
              </div>

              <div>
                <span className="font-label text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Total Paid
                </span>
                <span className="font-label text-sm font-extrabold text-slate-900 block mt-0.5">
                  ${totalAmount.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/products"
                className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 hover:bg-brand-primary text-white font-label text-xs font-bold tracking-widest uppercase transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <ShoppingCartOutlined className="text-sm" />
                <span>CONTINUE SHOPPING</span>
              </Link>

              <Link
                href="/account"
                className="w-full sm:w-auto px-8 py-3.5 bg-white border border-slate-300 hover:border-slate-800 text-slate-800 font-label text-xs font-bold tracking-widest uppercase transition-colors flex items-center justify-center gap-2"
              >
                <UserOutlined className="text-sm" />
                <span>VIEW IN MY ACCOUNT</span>
              </Link>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
