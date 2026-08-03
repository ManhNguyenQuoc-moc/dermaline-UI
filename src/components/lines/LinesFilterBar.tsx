'use client';

import React from 'react';
import GSelect from '@/@core/component/Antd/Select';

export const LINE_BY_LINE_CATEGORIES = [
  { id: 'all', label: 'All Lines', slug: 'all' },
  { id: 'cleansing', label: 'Cleansing', slug: 'cleansing' },
  { id: 'pdrn-care', label: 'PDRN Care', slug: 'pdrn-care' },
  { id: 'oil-moisture-balancing', label: 'Oil/Moisture Balancing', slug: 'oil-moisture-balancing' },
  { id: 'ampoule-care', label: 'Ampoule Care', slug: 'ampoule-care' },
  { id: 'special-ampoule-care', label: 'Special Ampoule Care', slug: 'special-ampoule-care' },
  { id: 'trouble-care', label: 'Trouble Care', slug: 'trouble-care' },
  { id: 'sun-care', label: 'Sun Care', slug: 'sun-care' },
  { id: 'keratin-care', label: 'Keratin Care', slug: 'keratin-care' },
];

interface LinesFilterBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedLineSlug: string;
  setSelectedLineSlug: (slug: string) => void;
  selectedPriceRange: string;
  setSelectedPriceRange: (range: string) => void;
  sortBy: 'featured' | 'price-low' | 'price-high' | 'rating';
  setSortBy: (sort: 'featured' | 'price-low' | 'price-high' | 'rating') => void;
  hasActiveFilters: boolean;
  resetAllFilters: () => void;
  priceRanges: string[];
}

export default function LinesFilterBar({
  searchQuery,
  setSearchQuery,
  selectedLineSlug,
  setSelectedLineSlug,
  selectedPriceRange,
  setSelectedPriceRange,
  sortBy,
  setSortBy,
  hasActiveFilters,
  resetAllFilters,
  priceRanges,
}: LinesFilterBarProps) {
  // Price Options for GSelect
  const priceOptions = priceRanges.map((p) => ({
    value: p,
    label: p === 'All' ? 'Price: All' : p,
  }));

  // Sort Options for GSelect
  const sortOptions = [
    { value: 'featured', label: 'SORT: FEATURED' },
    { value: 'price-low', label: 'PRICE: LOW TO HIGH' },
    { value: 'price-high', label: 'PRICE: HIGH TO LOW' },
    { value: 'rating', label: 'HIGHEST RATED' },
  ];

  return (
    <section className="sticky top-16 z-30 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-3 shadow-xs select-none">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Search Input Bar */}
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search in Line By Line products..."
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
              className="w-44 sm:w-48 [&_.ant-select-selection-item]:!text-brand-primary [&_.ant-select-selection-item]:!font-extrabold"
            />

            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetAllFilters}
                className="h-11 px-4 text-xs font-label font-bold text-red-600 hover:bg-red-50 border border-red-200 rounded-none sm:rounded-sm transition-colors uppercase tracking-wider cursor-pointer"
              >
                CLEAR ALL FILTERS
              </button>
            )}
          </div>
        </div>

        {/* 8 Official Dermaline Line By Line Subcategory Tags Row (Wrapping to next line, zero horizontal scrollbar) */}
        <div className="flex flex-wrap items-center gap-2 pt-3 pb-1 border-t border-slate-100 mt-3">
          {LINE_BY_LINE_CATEGORIES.map((cat) => (
            <button
              key={cat.slug}
              type="button"
              onClick={() => setSelectedLineSlug(cat.slug)}
              className={`px-3.5 py-1.5 text-xs font-label font-bold uppercase tracking-wider transition-all rounded-none sm:rounded-sm cursor-pointer ${
                selectedLineSlug === cat.slug
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
