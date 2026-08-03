'use client';

import React from 'react';
import GSelect from '@/@core/component/Antd/Select';
import { useTranslation } from '@/i18n/useTranslation';

interface ProductsFilterBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedLine: string;
  setSelectedLine: (line: string) => void;
  selectedConcern: string;
  setSelectedConcern: (concern: string) => void;
  selectedPriceRange: string;
  setSelectedPriceRange: (range: string) => void;
  sortBy: 'featured' | 'price-low' | 'price-high' | 'rating';
  setSortBy: (sort: 'featured' | 'price-low' | 'price-high' | 'rating') => void;
  hasActiveFilters: boolean;
  resetAllFilters: () => void;
  categories: string[];
  lines: string[];
  concerns: string[];
  priceRanges: string[];
}

export default function ProductsFilterBar({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedLine,
  setSelectedLine,
  selectedConcern,
  setSelectedConcern,
  selectedPriceRange,
  setSelectedPriceRange,
  sortBy,
  setSortBy,
  hasActiveFilters,
  resetAllFilters,
  categories,
  lines,
  concerns,
  priceRanges,
}: ProductsFilterBarProps) {
  const { t } = useTranslation();

  // Concern Options for Ant Design GSelect
  const concernOptions = concerns.map((c) => ({
    value: c,
    label: c === 'All' ? t.filters.allCategories : c,
  }));

  // Line Options for Ant Design GSelect
  const lineOptions = lines.map((l) => ({
    value: l,
    label: l === 'All' ? t.filters.allCategories : l,
  }));

  // Price Options for Ant Design GSelect
  const priceOptions = priceRanges.map((p) => ({
    value: p,
    label: p === 'All' ? t.filters.allPrices : p,
  }));

  // Sort Options for Ant Design GSelect
  const sortOptions = [
    { value: 'featured', label: t.filters.sortFeatured },
    { value: 'price-low', label: t.filters.sortLowHigh },
    { value: 'price-high', label: t.filters.sortHighLow },
    { value: 'rating', label: t.filters.sortRating },
  ];

  return (
    <section className="sticky top-16 z-30 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-3 shadow-xs select-none">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Search Input Bar */}
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder={t.filters.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-11 px-4 text-xs sm:text-sm font-body border border-slate-300 focus:border-brand-primary focus:outline-none rounded-none sm:rounded-sm bg-slate-50/50 text-slate-900 transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-label font-bold text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                CLEAR
              </button>
            )}
          </div>

          {/* Ant Design GSelect Dropdown Selectors */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Skin Concern GSelect */}
            <GSelect
              value={selectedConcern}
              onChange={(val) => setSelectedConcern(val as string)}
              options={concernOptions}
              className="w-44 sm:w-48"
            />

            {/* Line GSelect */}
            <GSelect
              value={selectedLine}
              onChange={(val) => setSelectedLine(val as string)}
              options={lineOptions}
              className="w-44 sm:w-48"
            />

            {/* Price Range GSelect */}
            <GSelect
              value={selectedPriceRange}
              onChange={(val) => setSelectedPriceRange(val as string)}
              options={priceOptions}
              className="w-36 sm:w-40"
            />

            {/* Sort GSelect */}
            <GSelect
              value={sortBy}
              onChange={(val) => setSortBy(val as any)}
              options={sortOptions}
              className="w-44 sm:w-48"
            />

            {/* Reset Filters Button */}
            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetAllFilters}
                className="h-11 px-4 font-label text-xs font-bold text-slate-600 hover:text-brand-primary border border-slate-300 hover:border-brand-primary rounded-none sm:rounded-sm bg-white transition-colors cursor-pointer uppercase shrink-0"
              >
                {t.filters.resetFilters}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
