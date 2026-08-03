'use client';

import React from 'react';
import Link from 'next/link';
import { ProductItem } from '@/services/customer/home/models/home.model';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/common/ScrollReveal';
import ProductCard from '@/components/common/ProductCard';
import { useTranslation } from '@/i18n/useTranslation';

export interface ProductGridSectionProps {
  products?: ProductItem[];
}

export default function ProductGridSection({ products = [] }: ProductGridSectionProps) {
  const { t } = useTranslation();
  if (!products || products.length === 0) return null;

  return (
    <section className="relative w-full bg-white py-10 sm:py-12 lg:py-14 border-t border-slate-200/70 overflow-hidden select-none">
      {/* Background Soft Studio Ambient Glow */}
      <div className="absolute top-1/3 left-0 w-[550px] h-[550px] bg-sky-100/40 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header Row - Outer Left Entrance */}
        <ScrollReveal variant="slide-left" delay={100} duration={850}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-8 sm:mb-10 border-b border-slate-200/60">
            <div className="space-y-1">
              <span className="text-brand-primary text-xs sm:text-sm font-label font-bold tracking-[1.4px] uppercase block">
                {t.home.selectionTag}
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-[40px] font-semibold text-slate-900 tracking-tight leading-tight">
                {t.home.selectionTitle}
              </h2>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 font-label text-sm font-semibold text-brand-primary hover:text-sky-700 tracking-[0.7px] transition-colors group shrink-0"
            >
              <span>{t.home.viewAll}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        {/* 3 Columns x 3 Rows = 9 Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {products.slice(0, 9).map((product, idx) => {
            const col = idx % 3;
            const variant = col === 0 ? 'slide-left' : col === 1 ? 'fade-up' : 'slide-right';
            const delay = 150 + Math.floor(idx / 3) * 120 + col * 90;

            return (
              <ScrollReveal key={product.id} variant={variant} delay={delay} duration={850} className="h-full">
                <ProductCard
                  product={{
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    originalPrice: product.originalPrice,
                    image: product.image,
                    categoryTag: product.category,
                    tag: product.tag === 'NEW' ? 'NEW' : undefined,
                  }}
                />
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
