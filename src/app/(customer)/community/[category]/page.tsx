'use client';

import React, { useState, useEffect, useCallback, useMemo, use } from 'react';
import CommunityHero from '@/components/community/CommunityHero';
import CommunityFilterBar, { COMMUNITY_CATEGORIES } from '@/components/community/CommunityFilterBar';
import CommunityGrid from '@/components/community/CommunityGrid';
import RealCustomerShowcase from '@/components/community/RealCustomerShowcase';
import {
  getCommunityArticlesService,
  getRealCustomerShowcaseService,
  CommunityArticleItem,
  RealCustomerShowcaseItem,
} from '@/services/customer/community/community.service';
import { PaginationResponse } from '@/@core/models/pagination.model';

interface CommunityCategoryPageProps {
  params: Promise<{ category: string }>;
}

export default function CommunityCategoryPage({ params }: CommunityCategoryPageProps) {
  const resolvedParams = use(params);
  const currentCategory = resolvedParams.category || 'news';

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(6);
  const [customerCases, setCustomerCases] = useState<RealCustomerShowcaseItem[]>([]);

  const [articleData, setArticleData] = useState<PaginationResponse<CommunityArticleItem>>({
    data: [],
    total: 0,
    page: 1,
    pageSize: 6,
  });

  const activeCategoryObj = useMemo(() => {
    return (
      COMMUNITY_CATEGORIES.find((cat) => cat.slug === currentCategory) ||
      COMMUNITY_CATEGORIES[0]
    );
  }, [currentCategory]);

  const fetchArticles = useCallback(async () => {
    const res = await getCommunityArticlesService({
      page,
      pageSize,
      search: searchQuery,
      category: currentCategory,
    });
    setArticleData(res);
  }, [page, pageSize, searchQuery, currentCategory]);

  const fetchCustomerCases = useCallback(async () => {
    const cases = await getRealCustomerShowcaseService('all');
    setCustomerCases(cases);
  }, []);

  useEffect(() => {
    fetchArticles();
    if (currentCategory === 'gallery' || currentCategory === 'all') {
      fetchCustomerCases();
    }
  }, [fetchArticles, fetchCustomerCases, currentCategory]);

  const hasActiveFilters = Boolean(
    searchQuery || currentCategory !== 'all'
  );

  const resetAllFilters = () => {
    setSearchQuery('');
    setPage(1);
  };

  return (
    <main className="w-full min-h-screen bg-white select-none pt-24 sm:pt-28 pb-20">
      {/* 1. Community Hero Banner */}
      <CommunityHero
        activeCategoryTitle={activeCategoryObj.label}
        totalCount={currentCategory === 'gallery' ? customerCases.length : articleData.total}
      />

      {/* 2. Community Filter Bar */}
      <CommunityFilterBar
        searchQuery={searchQuery}
        setSearchQuery={(q) => { setSearchQuery(q); setPage(1); }}
        selectedCategorySlug={currentCategory}
        setSelectedCategorySlug={() => {}}
        hasActiveFilters={hasActiveFilters}
        resetAllFilters={resetAllFilters}
      />

      {/* 3. Render content depending on category */}
      {currentCategory === 'gallery' ? (
        <RealCustomerShowcase
          cases={customerCases}
          title="Trưng Bày Kết Quả Phục Hồi Thực Tế Của Khách Hàng"
          subtitle="Hình ảnh và đánh giá thực tế từ khách hàng & bệnh nhân tại các phòng khám da liễu và sau liệu trình điều trị với Dermaline."
        />
      ) : (
        <CommunityGrid
          articles={articleData.data}
          total={articleData.total}
          page={articleData.page}
          pageSize={articleData.pageSize}
          isFaqCategory={currentCategory === 'faq'}
          onPageChange={(p, ps) => {
            setPage(p);
            if (ps) setPageSize(ps);
          }}
          resetAllFilters={resetAllFilters}
        />
      )}
    </main>
  );
}
