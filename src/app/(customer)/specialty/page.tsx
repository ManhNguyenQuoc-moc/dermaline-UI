'use client';

import React, { useState, useEffect, useCallback } from 'react';
import SpecialtyHero from '@/components/specialty/SpecialtyHero';
import CategoryPageTagsNav from '@/components/products/CategoryPageTagsNav';
import SpecialtyFilterBar from '@/components/specialty/SpecialtyFilterBar';
import ProductsGrid from '@/components/products/ProductsGrid';
import {
  getProductsService,
  ProductItem,
} from '@/services/customer/product/product.service';
import { PaginationResponse } from '@/@core/models/pagination.model';

export default function SpecialtyListingPage() {
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
      category: 'Specialty Products',
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
      {/* 1. Specialty Products Hero Banner */}
      <SpecialtyHero totalCount={productData.total} />

      {/* 2. Pure Minimalist Category Tab Bar */}
      <CategoryPageTagsNav />

      {/* 3. Specialty Products Filter Bar */}
      <SpecialtyFilterBar
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

      {/* 4. Products Grid with GPagination */}
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
    </main>
  );
}
