'use client';

import React from 'react';
import ScrollReveal from '@/components/common/ScrollReveal';
import ProductCard from '@/components/common/ProductCard';
import { ProductItem } from '@/services/customer/product/product.service';

interface ProductsGridProps {
  products: ProductItem[];
  resetAllFilters: () => void;
  onAddToCart?: (product: ProductItem) => void;
  onAddToWishlist?: (product: ProductItem) => void;
}

export default function ProductsGrid({
  products,
  resetAllFilters,
  onAddToCart,
  onAddToWishlist,
}: ProductsGridProps) {
  return (
    <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
      {products.length === 0 ? (
        /* Empty State */
        <div className="w-full py-20 text-center flex flex-col items-center justify-center space-y-4 border border-dashed border-slate-300 rounded-2xl bg-slate-50/50">
          <span className="font-headline font-semibold text-2xl text-slate-900">
            No Clinical Products Found
          </span>
          <p className="font-body text-slate-500 text-sm max-w-[40ch]">
            We couldn’t find any products matching your selected filter criteria.
          </p>
          <button
            type="button"
            onClick={resetAllFilters}
            className="px-6 py-2.5 bg-slate-900 text-white text-xs font-label font-bold uppercase tracking-wider hover:bg-brand-primary transition-colors rounded-xl cursor-pointer"
          >
            RESET FILTERS
          </button>
        </div>
      ) : (
        /* 3 Columns x N Rows Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {products.map((product, idx) => (
            <ScrollReveal
              key={product.id}
              variant="fade-up"
              delay={100 + (idx % 3) * 100}
              duration={750}
              className="h-full"
            >
              <ProductCard
                product={product}
                onAddToCart={() => onAddToCart?.(product)}
                onToggleWishlist={() => onAddToWishlist?.(product)}
              />
            </ScrollReveal>
          ))}
        </div>
      )}
    </section>
  );
}
