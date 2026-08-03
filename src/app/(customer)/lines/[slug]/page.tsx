'use client';

import React, { useState, useEffect, useCallback, useMemo, use } from 'react';
import { useRouter } from 'next/navigation';
import LinesHero from '@/components/lines/LinesHero';
import CategoryPageTagsNav from '@/components/products/CategoryPageTagsNav';
import LinesFilterBar, { LINE_BY_LINE_CATEGORIES } from '@/components/lines/LinesFilterBar';
import ProductsGrid from '@/components/products/ProductsGrid';
import {
  getProductsService,
  ProductItem,
} from '@/services/customer/product/product.service';
import { PaginationResponse } from '@/@core/models/pagination.model';

interface LineSlugPageProps {
  params: Promise<{ slug: string }>;
}

export default function LineSlugPage({ params }: LineSlugPageProps) {
  const router = useRouter();
  const resolvedParams = use(params);
  const initialSlug = resolvedParams.slug || 'all';

  const [selectedLineSlug, setSelectedLineSlug] = useState<string>(initialSlug);
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

  // Keep state synced with route parameter changes
  useEffect(() => {
    if (resolvedParams.slug) {
      setSelectedLineSlug(resolvedParams.slug);
      setPage(1);
    }
  }, [resolvedParams.slug]);

  const handleLineSlugChange = (slug: string) => {
    setSelectedLineSlug(slug);
    setPage(1);
    router.push(`/lines/${slug}`);
  };

  const activeCategoryObj = useMemo(() => {
    return (
      LINE_BY_LINE_CATEGORIES.find((cat) => cat.slug === selectedLineSlug) ||
      LINE_BY_LINE_CATEGORIES[0]
    );
  }, [selectedLineSlug]);

  const fetchProducts = useCallback(async () => {
    const res = await getProductsService({
      page,
      pageSize,
      search: searchQuery,
      lineSlug: selectedLineSlug,
      priceRange: selectedPriceRange,
      sortBy,
    });
    setProductData(res);
  }, [page, pageSize, searchQuery, selectedLineSlug, selectedPriceRange, sortBy]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const hasActiveFilters = Boolean(
    searchQuery || selectedPriceRange !== 'All' || (selectedLineSlug !== 'all' && selectedLineSlug !== '')
  );

  const resetAllFilters = () => {
    setSearchQuery('');
    setSelectedPriceRange('All');
    setSortBy('featured');
    handleLineSlugChange('all');
  };

  return (
    <main className="w-full min-h-screen bg-white select-none pt-24 sm:pt-28 pb-20">
      {/* 1. Line By Line Hero Banner */}
      <LinesHero
        activeLineTitle={activeCategoryObj.label}
        totalCount={productData.total}
      />

      {/* 2. Top Category Navigation Bar */}
      <CategoryPageTagsNav />

      {/* 3. Line By Line Subcategories Filter Bar */}
      <LinesFilterBar
        searchQuery={searchQuery}
        setSearchQuery={(q) => { setSearchQuery(q); setPage(1); }}
        selectedLineSlug={selectedLineSlug}
        setSelectedLineSlug={handleLineSlugChange}
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
