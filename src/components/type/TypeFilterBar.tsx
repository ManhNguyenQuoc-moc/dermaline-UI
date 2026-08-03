'use client';

import React from 'react';
import GSelect from '@/@core/component/Antd/Select';

export const BY_TYPE_CATEGORIES = [
  { id: 'all', label: 'All Types', slug: 'all' },
  { id: 'cleansing', label: 'Cleansing', slug: 'cleansing' },
  { id: 'toner-mist', label: 'Toner & Mist', slug: 'toner-mist' },
  { id: 'lotion-emulsion', label: 'Lotion & Emulsion', slug: 'lotion-emulsion' },
  { id: 'cream-eye-cream', label: 'Cream & Eye Cream', slug: 'cream-eye-cream' },
  { id: 'mask-pack', label: 'Mask Pack', slug: 'mask-pack' },
  { id: 'sun-care-bb', label: 'Sun Care & BB', slug: 'sun-care-bb' },
  { id: 'ampoule-essence', label: 'Ampoule & Essence', slug: 'ampoule-essence' },
  { id: 'special-ampoule', label: 'Special Ampoule', slug: 'special-ampoule' },
  { id: 'modeling-mask-pack', label: 'Modeling Mask Pack', slug: 'modeling-mask-pack' },
  { id: 'set', label: 'SET', slug: 'set' },
];

interface TypeFilterBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedTypeSlug: string;
  setSelectedTypeSlug: (slug: string) => void;
  selectedPriceRange: string;
  setSelectedPriceRange: (range: string) => void;
  sortBy: 'featured' | 'price-low' | 'price-high' | 'rating';
  setSortBy: (sort: 'featured' | 'price-low' | 'price-high' | 'rating') => void;
  hasActiveFilters: boolean;
  resetAllFilters: () => void;
  priceRanges: string[];
}

export default function TypeFilterBar({
  searchQuery,
  setSearchQuery,
  selectedTypeSlug,
  setSelectedTypeSlug,
  selectedPriceRange,
  setSelectedPriceRange,
  sortBy,
  setSortBy,
  hasActiveFilters,
  resetAllFilters,
  priceRanges,
}: TypeFilterBarProps) {
  const priceOptions = priceRanges.map((p) => ({
    value: p,
    label: p === 'All' ? 'Price: All' : p,
  }));

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
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search in By Type products..."
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

          <div className="flex flex-wrap items-center gap-3">
            <GSelect
              value={selectedPriceRange}
              onChange={(val) => setSelectedPriceRange(val as string)}
              options={priceOptions}
              className="w-36 sm:w-40"
            />

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

        <div className="flex flex-wrap items-center gap-2 pt-3 pb-1 border-t border-slate-100 mt-3">
          {BY_TYPE_CATEGORIES.map((cat) => (
            <button
              key={cat.slug}
              type="button"
              onClick={() => setSelectedTypeSlug(cat.slug)}
              className={`px-3.5 py-1.5 text-xs font-label font-bold uppercase tracking-wider transition-all rounded-none sm:rounded-sm cursor-pointer ${
                selectedTypeSlug === cat.slug
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
