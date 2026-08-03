'use client';

import React from 'react';
import ScrollReveal from '@/components/common/ScrollReveal';
import CommunityArticleCard from '@/components/community/CommunityArticleCard';
import FaqAccordion from '@/components/community/FaqAccordion';
import GPagination from '@/@core/component/Antd/Pagination';
import GEmpty from '@/@core/component/Antd/Empty';
import { CommunityArticleItem } from '@/services/customer/community/community.service';

interface CommunityGridProps {
  articles: CommunityArticleItem[];
  total?: number;
  page?: number;
  pageSize?: number;
  isFaqCategory?: boolean;
  onPageChange?: (page: number, pageSize: number) => void;
  resetAllFilters: () => void;
}

export default function CommunityGrid({
  articles,
  total = 0,
  page = 1,
  pageSize = 6,
  isFaqCategory = false,
  onPageChange,
  resetAllFilters,
}: CommunityGridProps) {
  return (
    <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
      {articles.length === 0 ? (
        <GEmpty
          title="No Articles Found"
          description="We couldn’t find any community news or FAQ items matching your search criteria."
          actionText="RESET FILTERS"
          onAction={resetAllFilters}
        />
      ) : isFaqCategory ? (
        /* FAQ Accordion View */
        <FaqAccordion items={articles} />
      ) : (
        /* News Grid View */
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {articles.map((article, idx) => (
              <ScrollReveal
                key={article.id}
                variant="fade-up"
                delay={100 + (idx % 3) * 100}
                duration={750}
                className="h-full"
              >
                <CommunityArticleCard article={article} />
              </ScrollReveal>
            ))}
          </div>

          {total > 0 && (
            <div className="mt-12 pt-6 border-t border-slate-100">
              <GPagination
                current={page}
                pageSize={pageSize}
                total={total}
                onChange={(p, ps) => onPageChange?.(p, ps)}
              />
            </div>
          )}
        </>
      )}
    </section>
  );
}
