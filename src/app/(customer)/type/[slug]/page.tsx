'use client';

import React, { useState, useEffect, useCallback, useMemo, use } from 'react';
import { useRouter } from 'next/navigation';
import TypeHero from '@/components/type/TypeHero';
import CategoryPageTagsNav from '@/components/products/CategoryPageTagsNav';
import TypeFilterBar, { BY_TYPE_CATEGORIES } from '@/components/type/TypeFilterBar';
import ProductsGrid from '@/components/products/ProductsGrid';
import {
  getProductsService,
  ProductItem,
} from '@/services/customer/product/product.service';
import { PaginationResponse } from '@/@core/models/pagination.model';

interface TypeSlugPageProps {
  params: Promise<{ slug: string }>;
}

export default function TypeSlugPage({ params }: TypeSlugPageProps) {
  const router = useRouter();
  const resolvedParams = use(params);
  const currentSlug = resolvedParams.slug || 'all';

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

  const activeCategoryObj = useMemo(() => {
    return (
      BY_TYPE_CATEGORIES.find((cat) => cat.slug === currentSlug) ||
      BY_TYPE_CATEGORIES[0]
    );
  }, [currentSlug]);

  const fetchProducts = useCallback(async () => {
    const res = await getProductsService({
      page,
      pageSize,
      search: searchQuery,
      typeSlug: currentSlug,
      priceRange: selectedPriceRange,
      sortBy,
    });
    setProductData(res);
  }, [page, pageSize, searchQuery, currentSlug, selectedPriceRange, sortBy]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const hasActiveFilters = Boolean(
    searchQuery || selectedPriceRange !== 'All' || (currentSlug !== 'all' && currentSlug !== '')
  );

  const resetAllFilters = () => {
    setSearchQuery('');
    setSelectedPriceRange('All');
    setSortBy('featured');
    setPage(1);
    if (currentSlug !== 'all') {
      router.push('/type/all', { scroll: false });
    }
  };

  return (
    <main className="w-full min-h-screen bg-white select-none pt-24 sm:pt-28 pb-20">
      {/* 1. By Type Hero Banner */}
      <TypeHero
        activeTypeTitle={activeCategoryObj.label}
        totalCount={productData.total}
      />

      {/* 2. Top Category Navigation Bar */}
      <CategoryPageTagsNav />

      {/* 3. By Type Subcategories Filter Bar */}
      <TypeFilterBar
        searchQuery={searchQuery}
        setSearchQuery={(q) => { setSearchQuery(q); setPage(1); }}
        selectedTypeSlug={currentSlug}
        setSelectedTypeSlug={(slug) => router.push(`/type/${slug}`, { scroll: false })}
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
