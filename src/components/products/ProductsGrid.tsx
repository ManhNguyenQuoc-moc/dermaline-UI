'use client';

import React from 'react';
import ScrollReveal from '@/components/common/ScrollReveal';
import ProductCard from '@/components/common/ProductCard';
import GPagination from '@/@core/component/Antd/Pagination';
import GEmpty from '@/@core/component/Antd/Empty';
import { ProductItem } from '@/services/customer/product/product.service';

interface ProductsGridProps {
  products: ProductItem[];
  total?: number;
  page?: number;
  pageSize?: number;
  onPageChange?: (page: number, pageSize: number) => void;
  resetAllFilters: () => void;
  onAddToCart?: (product: ProductItem) => void;
  onAddToWishlist?: (product: ProductItem) => void;
}

export default function ProductsGrid({
  products,
  total = 0,
  page = 1,
  pageSize = 6,
  onPageChange,
  resetAllFilters,
  onAddToCart,
  onAddToWishlist,
}: ProductsGridProps) {
  return (
    <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
      {products.length === 0 ? (
        /* Ant Design Reusable Core GEmpty Component */
        <GEmpty
          title="No Clinical Products Found"
          description="We couldn’t find any products matching your selected filter criteria."
          actionText="RESET ALL FILTERS"
          onAction={resetAllFilters}
        />
      ) : (
        <>
          {/* 3 Columns x N Rows Grid */}
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

          {/* Ant Design GPagination Component */}
          {total > 0 && (
            <div className="mt-12 pt-6 border-t border-slate-100">
              <GPagination
                current={page}
                pageSize={pageSize}
                total={total}
                onChange={(p, ps) => onPageChange?.(p, ps)}
              />
            </div>
          )}
        </>
      )}
    </section>
  );
}
