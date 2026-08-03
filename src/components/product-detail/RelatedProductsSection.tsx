'use client';

import React from 'react';
import ScrollReveal from '@/components/common/ScrollReveal';
import ProductCard from '@/components/products/ProductCard';
import { MOCK_PRODUCTS } from '@/services/customer/product/product.mock';

interface RelatedProductsSectionProps {
  currentProductId: string;
  brandSlug?: string;
}

export default function RelatedProductsSection({
  currentProductId,
  brandSlug = 'dlexo',
}: RelatedProductsSectionProps) {
  const relatedProducts = MOCK_PRODUCTS.filter(
    (p) => p.id !== currentProductId && (p.brandSlug === brandSlug || p.isBest)
  ).slice(0, 3);

  return (
    <section className="w-full py-16 sm:py-24 bg-slate-50 border-t border-slate-200/80 select-none">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-3 mb-12 sm:mb-16">
          <ScrollReveal variant="fade-up" delay={100} duration={850}>
            <span className="text-brand-primary font-label text-xs font-bold uppercase tracking-widest block">
              COMPLETE YOUR CLINICAL ROUTINE
            </span>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={200} duration={850}>
            <h2 className="font-headline font-semibold text-2xl sm:text-3xl lg:text-4xl text-slate-900 leading-snug">
              Recommended D'LEXO NAD+ Routine Solutions
            </h2>
          </ScrollReveal>
        </div>

        {/* 3 Columns Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {relatedProducts.map((prod, idx) => (
            <ScrollReveal
              key={prod.id}
              variant="fade-up"
              delay={100 + idx * 100}
              duration={750}
              className="h-full"
            >
              <ProductCard product={prod} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
