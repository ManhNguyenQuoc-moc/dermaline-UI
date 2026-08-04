'use client';

import React, { useState, useEffect, useCallback } from 'react';
import CommunityHero from '@/components/community/CommunityHero';
import CommunityFilterBar from '@/components/community/CommunityFilterBar';
import RealCustomerShowcase from '@/components/community/RealCustomerShowcase';
import {
  getRealCustomerShowcaseService,
  RealCustomerShowcaseItem,
} from '@/services/customer/community/community.service';

export default function CommunityGalleryPage() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [cases, setCases] = useState<RealCustomerShowcaseItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchCases = useCallback(async () => {
    setLoading(true);
    const data = await getRealCustomerShowcaseService('all');

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const filtered = data.filter(
        (c) =>
          c.customerName.toLowerCase().includes(q) ||
          c.concern.toLowerCase().includes(q) ||
          c.reviewTitle.toLowerCase().includes(q) ||
          c.reviewContent.toLowerCase().includes(q) ||
          c.categoryTagLabel.toLowerCase().includes(q)
      );
      setCases(filtered);
    } else {
      setCases(data);
    }
    setLoading(false);
  }, [searchQuery]);

  useEffect(() => {
    fetchCases();
  }, [fetchCases]);

  const hasActiveFilters = Boolean(searchQuery);

  const resetAllFilters = () => {
    setSearchQuery('');
  };

  return (
    <main className="w-full min-h-screen bg-white select-none pt-24 sm:pt-28 pb-20">
      {/* 1. Community Hero Banner */}
      <CommunityHero
        activeCategoryTitle="Real Patient & Customer Results"
        totalCount={cases.length}
      />

      {/* 2. Community Filter Bar with Active 'gallery' Tag */}
      <CommunityFilterBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategorySlug="gallery"
        setSelectedCategorySlug={() => {}}
        hasActiveFilters={hasActiveFilters}
        resetAllFilters={resetAllFilters}
      />

      {/* 3. Real Customer Before/After Showcase Section */}
      <RealCustomerShowcase
        cases={cases}
        title="Trưng Bày Kết Quả Phục Hồi Thực Tế Của Khách Hàng"
        subtitle="Hình ảnh và đánh giá thực tế từ khách hàng & bệnh nhân tại các phòng khám da liễu và sau liệu trình điều trị với Dermaline."
      />
    </main>
  );
}
