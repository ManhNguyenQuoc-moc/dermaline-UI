'use client';

import React from 'react';
import Link from 'next/link';
import ImageWithSkeleton from '@/components/common/ImageWithSkeleton';
import { CommunityArticleItem } from '@/services/customer/community/community.service';
import { Calendar, Clock, ArrowUpRight } from 'lucide-react';

interface CommunityArticleCardProps {
  article: CommunityArticleItem;
}

export default function CommunityArticleCard({ article }: CommunityArticleCardProps) {
  return (
    <article className="group bg-white border border-slate-200/90 rounded-none sm:rounded-sm overflow-hidden flex flex-col h-full shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-300">
      {/* Article Image Container */}
      <div className="relative w-full h-52 sm:h-60 overflow-hidden bg-slate-100">
        <ImageWithSkeleton
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />

        {/* Category Tag Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="px-3 py-1 bg-slate-900/90 backdrop-blur-md text-white text-[11px] font-label font-bold uppercase tracking-wider rounded-none sm:rounded-sm shadow-xs">
            {article.categoryLabel}
          </span>
        </div>
      </div>

      {/* Article Body Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          {/* Metadata Row: Date & Read Time */}
          <div className="flex items-center gap-4 text-xs font-label font-semibold text-slate-400">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 stroke-[1.75]" />
              {article.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 stroke-[1.75]" />
              {article.readTime}
            </span>
          </div>

          {/* Article Title */}
          <h3 className="font-headline font-semibold text-lg sm:text-xl text-slate-900 group-hover:text-brand-primary transition-colors leading-snug line-clamp-2">
            {article.title}
          </h3>

          {/* Article Excerpt */}
          <p className="font-body text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
            {article.excerpt}
          </p>
        </div>

        {/* Card Footer: Author & Read More Link */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-label text-xs font-bold text-slate-900">
              {article.author}
            </span>
            {article.authorRole && (
              <span className="font-body text-[11px] text-slate-400">
                {article.authorRole}
              </span>
            )}
          </div>

          <Link
            href={`/community/${article.category}/${article.slug}`}
            className="inline-flex items-center gap-1 text-xs font-label font-bold text-brand-primary group-hover:translate-x-1 transition-transform"
          >
            <span>READ MORE</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2]" />
          </Link>
        </div>
      </div>
    </article>
  );
}
