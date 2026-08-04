'use client';

import React from 'react';
import Link from 'next/link';

export const COMMUNITY_CATEGORIES = [
  { id: 'all', label: 'All Community', slug: 'all', href: '/community' },
  { id: 'news', label: 'Clinical News', slug: 'news', href: '/community/news' },
  { id: 'faq', label: 'Dermatology FAQ', slug: 'faq', href: '/community/faq' },
  { id: 'gallery', label: 'Real Customer Results', slug: 'gallery', href: '/community/gallery' },
];

interface CommunityFilterBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategorySlug: string;
  setSelectedCategorySlug: (slug: string) => void;
  hasActiveFilters: boolean;
  resetAllFilters: () => void;
}

export default function CommunityFilterBar({
  searchQuery,
  setSearchQuery,
  selectedCategorySlug,
  setSelectedCategorySlug,
  hasActiveFilters,
  resetAllFilters,
}: CommunityFilterBarProps) {
  return (
    <section className="sticky top-16 z-30 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-3 shadow-xs select-none">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Search Input Bar */}
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search news, clinical FAQs, or customer results..."
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

        {/* Category Link Tabs (News, FAQ, Real Customer Results) */}
        <div className="flex flex-wrap items-center gap-2 pt-3 pb-1 border-t border-slate-100 mt-3">
          {COMMUNITY_CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={cat.href}
              scroll={false}
              className={`px-4 py-1.5 text-xs font-label font-bold uppercase tracking-wider transition-all rounded-none sm:rounded-sm cursor-pointer ${
                selectedCategorySlug === cat.slug
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
