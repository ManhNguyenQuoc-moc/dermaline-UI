'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import CommunityHero from '@/components/community/CommunityHero';
import CommunityFilterBar, { COMMUNITY_CATEGORIES } from '@/components/community/CommunityFilterBar';
import CommunityGrid from '@/components/community/CommunityGrid';
import {
  getCommunityArticlesService,
  CommunityArticleItem,
} from '@/services/customer/community/community.service';
import { PaginationResponse } from '@/@core/models/pagination.model';

export default function CommunityListingPage() {
  const [selectedCategorySlug, setSelectedCategorySlug] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(6);

  const [articleData, setArticleData] = useState<PaginationResponse<CommunityArticleItem>>({
    data: [],
    total: 0,
    page: 1,
    pageSize: 6,
  });

  const activeCategoryObj = useMemo(() => {
    return (
      COMMUNITY_CATEGORIES.find((cat) => cat.slug === selectedCategorySlug) ||
      COMMUNITY_CATEGORIES[0]
    );
  }, [selectedCategorySlug]);

  const fetchArticles = useCallback(async () => {
    const res = await getCommunityArticlesService({
      page,
      pageSize,
      search: searchQuery,
      category: selectedCategorySlug,
    });
    setArticleData(res);
  }, [page, pageSize, searchQuery, selectedCategorySlug]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  const hasActiveFilters = Boolean(
    searchQuery || selectedCategorySlug !== 'all'
  );

  const resetAllFilters = () => {
    setSearchQuery('');
    setSelectedCategorySlug('all');
    setPage(1);
  };

  return (
    <main className="w-full min-h-screen bg-white select-none pt-24 sm:pt-28 pb-20">
      {/* 1. Community Hero Banner */}
      <CommunityHero
        activeCategoryTitle={
          selectedCategorySlug === 'all'
            ? 'News & Clinical FAQ Hub'
            : activeCategoryObj.label
        }
        totalCount={articleData.total}
      />

      {/* 2. Community Filter Bar */}
      <CommunityFilterBar
        searchQuery={searchQuery}
        setSearchQuery={(q) => { setSearchQuery(q); setPage(1); }}
        selectedCategorySlug={selectedCategorySlug}
        setSelectedCategorySlug={(slug) => { setSelectedCategorySlug(slug); setPage(1); }}
        hasActiveFilters={hasActiveFilters}
        resetAllFilters={resetAllFilters}
      />

      {/* 3. Community Articles / FAQ Grid */}
      <CommunityGrid
        articles={articleData.data}
        total={articleData.total}
        page={articleData.page}
        pageSize={articleData.pageSize}
        isFaqCategory={selectedCategorySlug === 'faq'}
        onPageChange={(p, ps) => {
          setPage(p);
          if (ps) setPageSize(ps);
        }}
        resetAllFilters={resetAllFilters}
      />
    </main>
  );
}
