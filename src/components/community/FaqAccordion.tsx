'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import SubmitFaqModal from '@/components/community/SubmitFaqModal';
import { CommunityArticleItem } from '@/services/customer/community/community.service';

interface FaqAccordionProps {
  items: CommunityArticleItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState<boolean>(false);

  const FAQ_TAGS = [
    { id: 'all', label: 'All FAQ Topics' },
    { id: 'pdrn-tech', label: 'PDRN & Exosome Bio-Tech' },
    { id: 'post-laser', label: 'Post-Procedure Recovery' },
    { id: 'salon-1000ml', label: 'Specialty 1000ml Salon' },
    { id: 'safety', label: 'Safety & ISO Certifications' },
  ];

  const filteredItems = selectedTag === 'all'
    ? items
    : items.filter((item) => item.faqCategoryTag === selectedTag);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 select-none">
      {/* Sub-category Filter Tabs & Submit FAQ Action */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-200/80 pb-6">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
          {FAQ_TAGS.map((tag) => (
            <button
              key={tag.id}
              type="button"
              onClick={() => setSelectedTag(tag.id)}
              className={`px-5 py-2 rounded-full font-label text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                selectedTag === tag.id
                  ? 'bg-brand-primary text-white shadow-md shadow-brand-primary/20 scale-105'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>

        {/* Submit Question Trigger Button */}
        <button
          type="button"
          onClick={() => setIsSubmitModalOpen(true)}
          className="px-5 py-2.5 bg-slate-900 hover:bg-brand-primary text-white font-label text-xs font-bold uppercase tracking-wider rounded-none sm:rounded-sm shadow-xs transition-all cursor-pointer shrink-0"
        >
          SUBMIT A QUESTION
        </button>
      </div>

      {/* Accordion Container with Clean Rectangular Cards & Smooth Height/Opacity Animation */}
      <div className="space-y-4">
        {filteredItems.map((item) => {
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
                <div className="space-y-1 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-label font-bold text-brand-primary uppercase tracking-widest block">
                      {item.faqCategoryLabel || item.authorRole || 'Clinical Guidelines'}
                    </span>
                    <span className="text-[10px] font-label font-bold text-slate-400 uppercase tracking-wider">
                      • {item.author}
                    </span>
                  </div>

                  <h3 className="font-headline font-semibold text-base sm:text-lg text-slate-900 leading-snug">
                    {item.title}
                  </h3>
                </div>

                {/* Animated Expand Indicator */}
                <div
                  className={`px-3 py-1 rounded-none sm:rounded-sm text-xs font-label font-extrabold uppercase transition-all duration-300 shrink-0 ${
                    isOpen
                      ? 'bg-brand-primary text-white'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {isOpen ? 'COLLAPSE' : 'EXPAND'}
                </div>
              </button>

              {/* Animated Expand Content Container */}
              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 border-t border-slate-100/80 pt-5 space-y-5">
                    {/* Summary Box */}
                    <div className="p-4 bg-white border-l-4 border-brand-primary rounded-none text-slate-800 font-body text-sm font-semibold leading-relaxed">
                      {item.faqAnswer || item.excerpt}
                    </div>

                    {/* Detailed Multi-Paragraph Answer */}
                    {item.detailedAnswer && item.detailedAnswer.length > 0 && (
                      <div className="space-y-3 font-body text-sm text-slate-700 leading-relaxed">
                        {item.detailedAnswer.map((para, idx) => (
                          <p key={idx}>{para}</p>
                        ))}
                      </div>
                    )}

                    {/* Step-by-Step Application Protocol */}
                    {item.usageSteps && item.usageSteps.length > 0 && (
                      <div className="bg-white border border-slate-200 p-5 rounded-none sm:rounded-sm space-y-3">
                        <h4 className="font-headline font-bold text-xs sm:text-sm text-slate-900 uppercase tracking-wider">
                          Standard Clinical Application Protocol
                        </h4>
                        <ol className="space-y-2 font-body text-xs sm:text-sm text-slate-700">
                          {item.usageSteps.map((step, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="font-bold text-brand-primary font-label">{idx + 1}.</span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}

                    {/* Doctor & Expert Advice Box */}
                    {item.doctorAdvice && (
                      <div className="bg-slate-900 text-white p-5 rounded-none sm:rounded-sm space-y-2">
                        <span className="text-[10px] font-label font-bold text-brand-primary uppercase tracking-widest block">
                          CLINICAL DERMATOLOGIST ADVICE
                        </span>
                        <p className="font-body text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                          “{item.doctorAdvice}”
                        </p>
                      </div>
                    )}

                    {/* Recommended Products */}
                    {item.recommendedProducts && item.recommendedProducts.length > 0 && (
                      <div className="pt-2 border-t border-slate-200/80 space-y-3">
                        <span className="text-xs font-label font-bold text-slate-900 uppercase tracking-wider block">
                          Recommended Dermaline Products:
                        </span>
                        <div className="flex flex-wrap gap-3">
                          {item.recommendedProducts.map((prod, idx) => (
                            <Link key={idx} href={prod.link}>
                              <button
                                type="button"
                                className="px-4 py-2 bg-white border border-slate-200 hover:border-brand-primary text-slate-900 hover:text-brand-primary text-xs font-label font-bold uppercase rounded-none sm:rounded-sm shadow-2xs transition-all cursor-pointer"
                              >
                                {prod.name} ({prod.category})
                              </button>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="pt-3 text-[11px] font-label text-slate-400 font-semibold flex justify-between">
                      <span>Verified: {item.date}</span>
                      <span>Source: {item.author}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {filteredItems.length === 0 && (
          <div className="text-center py-12 bg-slate-50 border border-slate-200 rounded-none sm:rounded-sm">
            <h4 className="font-headline font-bold text-slate-800 text-base mb-1">
              No FAQ items found in this category
            </h4>
            <p className="font-body text-xs text-slate-500">
              Please select another category tag above.
            </p>
          </div>
        )}
      </div>

      {/* Modal Submit FAQ */}
      <SubmitFaqModal
        open={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
      />
    </div>
  );
}
