'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { CommunityArticleItem } from '@/services/customer/community/community.service';

interface FaqAccordionProps {
  items: CommunityArticleItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {items.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div
            key={item.id}
            className={`border transition-all duration-300 rounded-none sm:rounded-sm overflow-hidden ${
              isOpen
                ? 'border-brand-primary/60 bg-sky-50/30 shadow-xs'
                : 'border-slate-200 bg-white hover:border-slate-300'
            }`}
          >
            {/* Accordion Question Header */}
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer"
            >
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-full bg-slate-100 text-brand-primary shrink-0 mt-0.5">
                  <HelpCircle className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-label font-bold text-brand-primary uppercase tracking-widest block">
                    {item.authorRole || 'Clinical Guidelines'}
                  </span>
                  <h3 className="font-headline font-semibold text-base sm:text-lg text-slate-900 leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div
                className={`p-1.5 rounded-full text-slate-500 transition-transform duration-300 shrink-0 ${
                  isOpen ? 'rotate-180 text-brand-primary bg-sky-100' : 'bg-slate-100'
                }`}
              >
                <ChevronDown className="w-5 h-5 stroke-[2]" />
              </div>
            </button>

            {/* Accordion Answer Content */}
            {isOpen && (
              <div className="px-5 pb-6 sm:px-6 sm:pb-6 pl-14 sm:pl-16 border-t border-slate-100/80 pt-4 text-slate-600 font-body text-sm leading-relaxed space-y-3">
                <p>{item.faqAnswer || item.excerpt}</p>
                <div className="pt-2 text-xs font-label text-slate-400 font-semibold">
                  <span>Last Updated: {item.date}</span> · <span>Authored by: {item.author}</span>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
