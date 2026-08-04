'use client';

import React, { useState, useEffect, useCallback } from 'react';
import EventHero from '@/components/event/EventHero';
import ActiveEventsSection from '@/components/event/ActiveEventsSection';
import EventFilterBar from '@/components/event/EventFilterBar';
import ProductsGrid from '@/components/products/ProductsGrid';
import ScrollReveal from '@/components/common/ScrollReveal';
import { ShieldCheck, Truck, Award } from 'lucide-react';
import {
  getProductsService,
  ProductItem,
} from '@/services/customer/product/product.service';
import { PaginationResponse } from '@/@core/models/pagination.model';

export default function EventListingPage() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(6);

  const [productData, setProductData] = useState<PaginationResponse<ProductItem>>({
    data: [],
    total: 0,
    page: 1,
    pageSize: 6,
  });

  const PRICE_RANGES = ['All', 'Under $50', '$50 - $100', 'Over $100'];

  const fetchProducts = useCallback(async () => {
    const res = await getProductsService({
      page,
      pageSize,
      search: searchQuery,
      isEvent: true,
      priceRange: selectedPriceRange,
      sortBy,
    });
    setProductData(res);
  }, [page, pageSize, searchQuery, selectedPriceRange, sortBy]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const hasActiveFilters = Boolean(
    searchQuery || selectedPriceRange !== 'All'
  );

  const resetAllFilters = () => {
    setSearchQuery('');
    setSelectedPriceRange('All');
    setSortBy('featured');
    setPage(1);
  };

  return (
    <main className="w-full min-h-screen bg-white select-none pt-24 sm:pt-28 pb-20">
      {/* 1. Event Hero Banner */}
      <EventHero totalCount={productData.total} />

      {/* 2. Structured Showcase of All 3 Active Hospital Events */}
      <ActiveEventsSection />

      {/* 3. Event Filter Bar & All Promotional Products Grid */}
      <EventFilterBar
        searchQuery={searchQuery}
        setSearchQuery={(q) => { setSearchQuery(q); setPage(1); }}
        selectedPriceRange={selectedPriceRange}
        setSelectedPriceRange={(p) => { setSelectedPriceRange(p); setPage(1); }}
        sortBy={sortBy}
        setSortBy={(s) => { setSortBy(s); setPage(1); }}
        hasActiveFilters={hasActiveFilters}
        resetAllFilters={resetAllFilters}
        priceRanges={PRICE_RANGES}
      />

      {/* 5. Products Grid with GPagination */}
      <ProductsGrid
        products={productData.data}
        total={productData.total}
        page={productData.page}
        pageSize={productData.pageSize}
        onPageChange={(p, ps) => {
          setPage(p);
          if (ps) setPageSize(ps);
        }}
        resetAllFilters={resetAllFilters}
      />

      {/* 6. Hospital Clinical Guarantee Trust Points */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-12 border-t border-slate-200/80">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScrollReveal variant="fade-up" delay={100} duration={800}>
            <div className="flex items-center gap-4 p-5 bg-slate-50/80 border border-slate-200/80 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-sky-100/80 text-brand-primary flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-0.5">
                <h4 className="font-headline text-base font-bold text-slate-900">100% Clinical Purity</h4>
                <p className="font-body text-xs text-slate-500">Hospital-grade salmon PDRN and plant exosome formulations.</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={200} duration={800}>
            <div className="flex items-center gap-4 p-5 bg-slate-50/80 border border-slate-200/80 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-sky-100/80 text-brand-primary flex items-center justify-center shrink-0">
                <Truck className="w-6 h-6" />
              </div>
              <div className="space-y-0.5">
                <h4 className="font-headline text-base font-bold text-slate-900">Free Express Delivery</h4>
                <p className="font-body text-xs text-slate-500">Complimentary hospital shipping on all orders over $100.</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={300} duration={800}>
            <div className="flex items-center gap-4 p-5 bg-slate-50/80 border border-slate-200/80 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-sky-100/80 text-brand-primary flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div className="space-y-0.5">
                <h4 className="font-headline text-base font-bold text-slate-900">Authentic Hospital Brands</h4>
                <p className="font-body text-xs text-slate-500">Formulated and certified by Dermaline Korea aesthetic clinics.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
