'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ImageWithSkeleton from '@/components/common/ImageWithSkeleton';
import ScrollReveal from '@/components/common/ScrollReveal';
import GButton from '@/@core/component/Antd/Button';
import { Modal } from 'antd';
import { RealCustomerShowcaseItem } from '@/services/customer/community/community.service';

interface RealCustomerShowcaseProps {
  cases: RealCustomerShowcaseItem[];
  title?: string;
  subtitle?: string;
}

export default function RealCustomerShowcase({
  cases,
  title = 'Real Patient & Customer Skin Recovery Cases',
  subtitle = 'Empirical dermatological proof. Real before & after transformations verified by board-certified Korean clinics and everyday users.',
}: RealCustomerShowcaseProps) {
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [selectedCase, setSelectedCase] = useState<RealCustomerShowcaseItem | null>(null);

  const TAGS = [
    { id: 'all', label: 'All Real Cases' },
    { id: 'post-laser', label: 'Post-Laser Recovery' },
    { id: 'pdrn-glow', label: 'PDRN Glass Glow' },
    { id: 'barrier-repair', label: 'Barrier Repair' },
    { id: 'trouble-cica', label: 'Trouble & Cica Care' },
  ];

  const filteredCases = selectedTag === 'all'
    ? cases
    : cases.filter((c) => c.categoryTag === selectedTag);

  return (
    <section className="relative w-full bg-white py-20 sm:py-28 overflow-hidden select-none border-b border-slate-200/60">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-0 w-[550px] h-[550px] bg-sky-100/50 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Brand Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-14 sm:mb-16">
          <ScrollReveal variant="fade-up" delay={100} duration={850}>
            <span className="text-brand-primary text-xs sm:text-sm font-label font-bold tracking-[1.6px] uppercase block">
              VERIFIED CLINICAL & PATIENT PROOF
            </span>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={200} duration={850}>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-[44px] font-semibold text-slate-900 leading-[1.2] tracking-tight max-w-[32ch]">
              Real Patient & Customer{' '}
              <span className="font-serif-display italic font-normal text-brand-primary">
                Skin Recovery Cases
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={300} duration={850}>
            <p className="font-body text-slate-600 text-base sm:text-lg leading-relaxed max-w-[62ch]">
              {subtitle}
            </p>
          </ScrollReveal>

          {/* Pill Tabs Filter */}
          <ScrollReveal variant="fade-up" delay={350} duration={850}>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-6">
              {TAGS.map((tag) => (
                <button
                  key={tag.id}
                  type="button"
                  onClick={() => setSelectedTag(tag.id)}
                  className={`px-6 py-2.5 rounded-full font-label text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    selectedTag === tag.id
                      ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/30 scale-105'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {tag.label}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* 2-Column Bento Grid matching Brand Philosophy Card Aesthetics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {filteredCases.map((item, idx) => (
            <ScrollReveal
              key={item.id}
              variant="fade-up"
              delay={150 + idx * 100}
              duration={850}
            >
              <div className="group relative h-full bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-brand-primary/60 rounded-tl-2xl rounded-tr-[48px] sm:rounded-tr-[56px] rounded-br-2xl rounded-bl-[48px] sm:rounded-bl-[56px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 overflow-hidden">
                {/* Subtle Background Radial Gradient Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="relative z-10 space-y-5">
                  {/* Top Customer Info Header */}
                  <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/90 flex items-center justify-center text-brand-primary font-headline font-bold text-base shadow-sm group-hover:scale-105 group-hover:border-brand-primary/40 transition-all duration-500">
                        {item.customerName.charAt(0)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-headline font-bold text-lg text-slate-900 group-hover:text-brand-primary transition-colors">
                            {item.customerName}
                          </h4>
                          <span className="text-xs text-slate-400 font-body">({item.customerAge} yrs)</span>
                        </div>
                        <p className="font-body text-xs text-slate-500 font-medium">
                          {item.skinType}
                        </p>
                      </div>
                    </div>

                    {item.verifiedClinicBuyer && (
                      <span className="px-3 py-1 bg-white border border-emerald-200 text-emerald-700 text-[11px] font-label font-bold tracking-wider uppercase rounded-full shadow-2xs">
                        VERIFIED CLINIC
                      </span>
                    )}
                  </div>

                  {/* Split Before & After Images */}
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3 relative">
                      {/* Before Image Card */}
                      <div className="relative h-[210px] sm:h-[250px] rounded-tl-xl rounded-tr-[32px] rounded-br-xl rounded-bl-[32px] overflow-hidden border border-slate-200 shadow-sm group-hover:border-slate-300 transition-all">
                        <ImageWithSkeleton
                          src={item.beforeImage}
                          alt={`${item.customerName} Before Treatment`}
                          fill
                          sizes="(max-width: 768px) 50vw, 25vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <span className="absolute top-3 left-3 px-3 py-1 bg-slate-900/90 backdrop-blur-md text-white text-[10px] font-label font-extrabold uppercase tracking-widest rounded-full shadow-md">
                          BEFORE
                        </span>
                      </div>

                      {/* After Image Card */}
                      <div className="relative h-[210px] sm:h-[250px] rounded-tl-xl rounded-tr-[32px] rounded-br-xl rounded-bl-[32px] overflow-hidden border border-sky-300 shadow-sm group-hover:border-brand-primary transition-all">
                        <ImageWithSkeleton
                          src={item.afterImage}
                          alt={`${item.customerName} After Treatment`}
                          fill
                          sizes="(max-width: 768px) 50vw, 25vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <span className="absolute top-3 right-3 px-3 py-1 bg-brand-primary/95 backdrop-blur-md text-white text-[10px] font-label font-extrabold uppercase tracking-widest rounded-full shadow-md">
                          AFTER
                        </span>
                      </div>
                    </div>

                    {/* Clinical Duration & Category Badge Bar */}
                    <div className="flex items-center justify-between text-xs font-label font-bold text-slate-700 bg-white border border-slate-200/90 px-4 py-2 rounded-full shadow-2xs">
                      <span className="text-brand-primary uppercase tracking-wider">
                        {item.categoryTagLabel}
                      </span>
                      <span className="text-slate-600">
                        {item.treatmentDuration}
                      </span>
                    </div>
                  </div>

                  {/* Customer Review Content */}
                  <div className="space-y-2 pt-1">
                    <div className="font-label text-xs font-bold text-amber-500 uppercase tracking-wider">
                      RATING: {item.rating} / 5
                    </div>
                    <h3 className="font-headline font-bold text-base sm:text-lg text-slate-900 leading-snug group-hover:text-brand-primary transition-colors">
                      “{item.reviewTitle}”
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {item.reviewContent}
                    </p>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="relative z-10 pt-6 border-t border-slate-200/80 mt-4 flex items-center justify-between gap-4">
                  <div className="text-xs font-body text-slate-500">
                    Clinic: <span className="font-semibold text-slate-700">{item.clinicName || 'Dermaline Official'}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedCase(item)}
                    className="px-5 py-2 bg-white border border-slate-300 hover:border-brand-primary text-slate-900 hover:text-brand-primary text-xs font-label font-extrabold uppercase tracking-wider rounded-full shadow-2xs hover:shadow-md transition-all duration-300 cursor-pointer"
                  >
                    VIEW CASE JOURNAL
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Customer Case Details Modal with Hidden Scrollbar */}
      <Modal
        open={Boolean(selectedCase)}
        onCancel={() => setSelectedCase(null)}
        footer={null}
        width={880}
        centered
        className="[&_.ant-modal-content]:!p-0 [&_.ant-modal-content]:!rounded-tl-2xl [&_.ant-modal-content]:!rounded-tr-[48px] [&_.ant-modal-content]:!rounded-br-2xl [&_.ant-modal-content]:!rounded-bl-[48px] overflow-hidden"
      >
        {selectedCase && (
          <div className="w-full bg-white max-h-[90vh] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {/* Modal Header */}
            <div className="bg-slate-900 text-white p-6 sm:p-8 space-y-3 relative">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3.5 py-1 bg-brand-primary text-white text-[11px] font-label font-bold uppercase tracking-wider rounded-full">
                  {selectedCase.categoryTagLabel}
                </span>
                {selectedCase.verifiedClinicBuyer && (
                  <span className="px-3 py-1 bg-white/10 text-emerald-300 border border-white/20 text-[11px] font-label font-bold rounded-full">
                    VERIFIED CLINICAL CASE
                  </span>
                )}
              </div>

              <h2 className="font-headline font-bold text-xl sm:text-2xl text-white">
                {selectedCase.customerName}’s Skin Recovery Journal
              </h2>

              <div className="flex flex-wrap items-center gap-4 text-xs font-label text-slate-300">
                <span>Age: <strong>{selectedCase.customerAge}</strong></span>
                <span>Skin Type: <strong>{selectedCase.skinType}</strong></span>
                <span>Duration: <strong>{selectedCase.treatmentDuration}</strong></span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-8">
              {/* Before vs After Large View */}
              <div className="space-y-3">
                <h3 className="font-headline font-bold text-base text-slate-900 uppercase tracking-wider">
                  Clinical Before & After Image Comparison
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Before */}
                  <div className="space-y-1.5">
                    <div className="relative h-[260px] sm:h-[300px] rounded-tl-xl rounded-tr-[32px] rounded-br-xl rounded-bl-[32px] overflow-hidden border border-slate-200">
                      <ImageWithSkeleton
                        src={selectedCase.beforeImage}
                        alt="Before Treatment"
                        fill
                        sizes="50vw"
                        className="object-cover"
                      />
                      <span className="absolute top-3 left-3 px-3.5 py-1 bg-slate-900 text-white text-xs font-label font-extrabold uppercase rounded-full shadow-md">
                        BEFORE TREATMENT
                      </span>
                    </div>
                    <p className="font-body text-xs text-slate-500">Condition: {selectedCase.concern}</p>
                  </div>

                  {/* After */}
                  <div className="space-y-1.5">
                    <div className="relative h-[260px] sm:h-[300px] rounded-tl-xl rounded-tr-[32px] rounded-br-xl rounded-bl-[32px] overflow-hidden border border-brand-primary">
                      <ImageWithSkeleton
                        src={selectedCase.afterImage}
                        alt="After Treatment"
                        fill
                        sizes="50vw"
                        className="object-cover"
                      />
                      <span className="absolute top-3 right-3 px-3.5 py-1 bg-brand-primary text-white text-xs font-label font-extrabold uppercase rounded-full shadow-md">
                        AFTER {selectedCase.treatmentDuration.toUpperCase()}
                      </span>
                    </div>
                    <p className="font-body text-xs text-brand-primary font-bold">Result: Restored Barrier & Radiance</p>
                  </div>
                </div>
              </div>

              {/* Full Review Story */}
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-tl-xl rounded-tr-[32px] rounded-br-xl rounded-bl-[32px] space-y-3">
                <div className="font-label text-xs font-bold text-amber-500 uppercase tracking-wider">
                  RATING: {selectedCase.rating} / 5 — “{selectedCase.reviewTitle}”
                </div>
                <p className="font-body text-sm text-slate-700 leading-relaxed italic">
                  “{selectedCase.reviewContent}”
                </p>
                <div className="text-xs font-label text-slate-400 pt-3 border-t border-slate-200/80 flex justify-between">
                  <span>Verified Clinic: <strong>{selectedCase.clinicName}</strong></span>
                  <span>Date: <strong>{selectedCase.date}</strong></span>
                </div>
              </div>

              {/* Used Dermaline Products Routine Section */}
              <div className="space-y-4">
                <h3 className="font-headline font-bold text-base text-slate-900 uppercase tracking-wider">
                  Dermaline Products Used In Clinical Routine
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedCase.usedProducts.map((prod) => (
                    <div
                      key={prod.id}
                      className="p-4 border border-slate-200 rounded-xl bg-white hover:border-brand-primary transition-colors flex items-center justify-between gap-3 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                          <ImageWithSkeleton
                            src={prod.image}
                            alt={prod.name}
                            fill
                            sizes="80px"
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <span className="text-[10px] font-label font-bold text-brand-primary uppercase tracking-wider block">
                            {prod.category}
                          </span>
                          <h5 className="font-headline font-bold text-xs sm:text-sm text-slate-900 line-clamp-2">
                            {prod.name}
                          </h5>
                        </div>
                      </div>

                      <Link href={prod.link} onClick={() => setSelectedCase(null)}>
                        <button
                          type="button"
                          className="px-3 py-1.5 rounded-full bg-slate-100 hover:bg-brand-primary hover:text-white text-slate-600 text-xs font-label font-bold uppercase transition-colors cursor-pointer"
                        >
                          VIEW
                        </button>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Close Action */}
              <div className="pt-4 flex justify-end">
                <GButton type="primary" onClick={() => setSelectedCase(null)}>
                  CLOSE JOURNAL
                </GButton>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
