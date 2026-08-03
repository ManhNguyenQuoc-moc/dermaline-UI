'use client';

import React, { useState, useEffect, useCallback } from 'react';
import ProductsHero from '@/components/products/ProductsHero';
import CategoryPageTagsNav from '@/components/products/CategoryPageTagsNav';
import ProductsFilterBar from '@/components/products/ProductsFilterBar';
import ProductsGrid from '@/components/products/ProductsGrid';
import {
  getProductsService,
  ProductItem,
} from '@/services/customer/product/product.service';
import { PaginationResponse } from '@/@core/models/pagination.model';

export default function ProductsListingPage() {
  // E-Commerce Filter States
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedLine, setSelectedLine] = useState<string>('All');
  const [selectedConcern, setSelectedConcern] = useState<string>('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(6);

  // Async Service State returning PaginationResponse<ProductItem>
  const [productData, setProductData] = useState<PaginationResponse<ProductItem>>({
    data: [],
    total: 0,
    page: 1,
    pageSize: 6,
  });

  const CATEGORIES = [
    'All',
    'Special Ampoule',
    'Cellular Bio-Booster',
    'Lifting Thread',
    'Exo-Peptide',
    'Barrier Care',
    'Cosmeceuticals',
  ];

  const LINES = [
    'All',
    'Tension Master Series',
    'Cellular Bio-Booster',
    'Exo-Peptide Series',
  ];

  const CONCERNS = [
    'All',
    'Skin Recovery',
    'Lifting & Elasticity',
    'Deep Hydration',
    'Barrier Repair',
    'Brightening',
  ];

  const PRICE_RANGES = [
    'All',
    'Under $50',
    '$50 - $100',
    'Over $100',
  ];

  // Fetch Async Product Data Service
  const fetchProducts = useCallback(async () => {
    const res = await getProductsService({
      page,
      pageSize,
      search: searchQuery,
      category: selectedCategory,
      line: selectedLine,
      concern: selectedConcern,
      priceRange: selectedPriceRange,
      sortBy,
    });
    setProductData(res);
  }, [page, pageSize, searchQuery, selectedCategory, selectedLine, selectedConcern, selectedPriceRange, sortBy]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Reset page to 1 when filters change
  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setPage(1);
  };

  const hasActiveFilters = Boolean(
    searchQuery ||
      selectedCategory !== 'All' ||
      selectedLine !== 'All' ||
      selectedConcern !== 'All' ||
      selectedPriceRange !== 'All'
  );

  const resetAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedLine('All');
    setSelectedConcern('All');
    setSelectedPriceRange('All');
    setSortBy('featured');
    setPage(1);
  };

  return (
    <main className="w-full min-h-screen bg-white select-none pt-24 sm:pt-28 pb-20">
      {/* 1. Modular Hero Banner Component */}
      <ProductsHero totalCount={productData.total} />

      {/* 2. Quick Category Gateway Navigation Bar */}
      <CategoryPageTagsNav />

      {/* 3. Modular Filter Bar & Search Component */}
      <ProductsFilterBar
        searchQuery={searchQuery}
        setSearchQuery={handleSearchChange}
        selectedCategory={selectedCategory}
        setSelectedCategory={handleCategoryChange}
        selectedLine={selectedLine}
        setSelectedLine={(l) => { setSelectedLine(l); setPage(1); }}
        selectedConcern={selectedConcern}
        setSelectedConcern={(c) => { setSelectedConcern(c); setPage(1); }}
        selectedPriceRange={selectedPriceRange}
        setSelectedPriceRange={(p) => { setSelectedPriceRange(p); setPage(1); }}
        sortBy={sortBy}
        setSortBy={(s) => { setSortBy(s); setPage(1); }}
        hasActiveFilters={hasActiveFilters}
        resetAllFilters={resetAllFilters}
        categories={CATEGORIES}
        lines={LINES}
        concerns={CONCERNS}
        priceRanges={PRICE_RANGES}
      />

      {/* 4. Modular Product Grid Component with GPagination */}
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
