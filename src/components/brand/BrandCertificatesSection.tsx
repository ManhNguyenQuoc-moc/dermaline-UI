'use client';

import React, { useState } from 'react';
import ScrollReveal from '@/components/common/ScrollReveal';
import ImageWithSkeleton from '@/components/common/ImageWithSkeleton';
import { Modal } from 'antd';
import { Award, ShieldCheck, ZoomIn, FileText, CheckCircle2, X } from 'lucide-react';

export interface CertificateItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'ISO' | 'GMP' | 'GOVERNMENT' | 'GLOBAL';
  image: string;
}

const OFFICIAL_CERTIFICATES: CertificateItem[] = [
  // Row 1
  {
    id: 'cert-1',
    title: 'EN ISO 13485:2016',
    subtitle: 'Medical Devices Quality Management System',
    category: 'ISO',
    image: 'https://en.dermaline.co.kr/web/upload/category/editor/2024/12/02/9525cceae1c70e30eb49a888bdf218cf.jpg',
  },
  {
    id: 'cert-2',
    title: 'EC DEC',
    subtitle: 'European Conformity Declaration',
    category: 'GLOBAL',
    image: '/images/hero/hero_studio_1.jpg',
  },
  {
    id: 'cert-3',
    title: 'EC CERTIFICATE',
    subtitle: 'European Medical Aesthetic Certification',
    category: 'GLOBAL',
    image: '/images/hero/hero_studio_2.jpg',
  },
  {
    id: 'cert-4',
    title: 'Certificate of GMP',
    subtitle: 'Good Manufacturing Practice (Korea)',
    category: 'GMP',
    image: '/images/about/about_derma_lab.jpg',
  },

  // Row 2
  {
    id: 'cert-5',
    title: 'Declaration-of-Conformity',
    subtitle: 'International Standards Compliance',
    category: 'GLOBAL',
    image: '/images/hero/hero_korean_model_1.jpg',
  },
  {
    id: 'cert-6',
    title: 'EAC',
    subtitle: 'Eurasian Economic Union Compliance',
    category: 'GLOBAL',
    image: '/images/hero/hero_korean_model_2.jpg',
  },
  {
    id: 'cert-7',
    title: 'EAC',
    subtitle: 'Eurasian Customs Union Approval',
    category: 'GLOBAL',
    image: '/images/hero/hero_korean_model_3.jpg',
  },
  {
    id: 'cert-8',
    title: 'R&D Department Certificate',
    subtitle: 'Ministry of Science & ICT R&D Designation',
    category: 'GOVERNMENT',
    image: '/images/hero/hero_model_layer_1.jpg',
  },

  // Row 3
  {
    id: 'cert-9',
    title: 'ISO 22716:2007',
    subtitle: 'Cosmetics GMP Standard (Korean)',
    category: 'ISO',
    image: '/images/hero/hero_model_layer_2.jpg',
  },
  {
    id: 'cert-10',
    title: 'ISO 22716:2007',
    subtitle: 'Cosmetics GMP Standard (English)',
    category: 'ISO',
    image: '/images/hero/hero_model_layer_3.jpg',
  },
  {
    id: 'cert-11',
    title: 'Cosmetics Manufacture Registration Certificate',
    subtitle: 'Official Manufacturer Permit (MFDS)',
    category: 'GOVERNMENT',
    image: '/images/hero/hero_studio_3.jpg',
  },
  {
    id: 'cert-12',
    title: 'Cosmetics Distribution Registration Certificate',
    subtitle: 'Responsible Cosmetics Distributor Permit',
    category: 'GOVERNMENT',
    image: '/images/hero/hero_bg_1.jpg',
  },

  // Row 4
  {
    id: 'cert-13',
    title: 'ISO 9001:2015',
    subtitle: 'Quality Management System (Korean)',
    category: 'ISO',
    image: '/images/hero/hero_bg_2.jpg',
  },
  {
    id: 'cert-14',
    title: 'ISO 9001:2015 [EN]',
    subtitle: 'Quality Management System (English)',
    category: 'ISO',
    image: '/images/hero/hero_bg_3.jpg',
  },
  {
    id: 'cert-15',
    title: 'ISO 14001:2015',
    subtitle: 'Environmental Management System (Korean)',
    category: 'ISO',
    image: '/images/about/about_derma_lab.jpg',
  },
  {
    id: 'cert-16',
    title: 'ISO 14001:2015 [EN]',
    subtitle: 'Environmental Management System (English)',
    category: 'ISO',
    image: '/images/hero/hero_studio_1.jpg',
  },
];

export default function BrandCertificatesSection() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <section className="relative w-full py-20 sm:py-28 bg-white border-b border-slate-200/60 overflow-hidden select-none">
      {/* Cursive Background Watermark Header matching Dermaline Korea */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 font-serif-display italic text-slate-100 text-6xl sm:text-8xl lg:text-9xl font-light opacity-60 pointer-events-none select-none tracking-widest whitespace-nowrap">
        Certificate
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16 sm:mb-20">
          <ScrollReveal variant="fade-up" delay={100} duration={850}>
            <p className="font-headline font-semibold text-xl sm:text-2xl lg:text-3xl text-slate-900 leading-relaxed max-w-[34ch]">
              We promise to lead as a dermatology brand that provides solutions for skin health.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={200} duration={850}>
            <div className="inline-flex items-center gap-3 text-slate-800 font-label font-extrabold text-sm sm:text-base tracking-[3px] uppercase">
              <span>· CERTIFICATE ·</span>
            </div>
          </ScrollReveal>
        </div>

        {/* 16 Official Certificates Grid (4 Columns on Desktop, 2 on Tablet, 1 on Mobile) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {OFFICIAL_CERTIFICATES.map((cert, idx) => (
            <ScrollReveal
              key={cert.id}
              variant="fade-up"
              delay={80 + (idx % 4) * 80}
              duration={750}
              className="h-full"
            >
              <div
                onClick={() => setSelectedCert(cert)}
                className="group cursor-pointer bg-white border border-slate-200 hover:border-brand-primary/60 rounded-none sm:rounded-sm overflow-hidden p-3.5 sm:p-4 flex flex-col justify-between h-full transition-all duration-300 shadow-2xs hover:shadow-lg hover:-translate-y-1"
              >
                {/* Certificate Document Paper Frame */}
                <div className="relative w-full aspect-[1/1.4] bg-slate-50 border border-slate-200/80 rounded-none sm:rounded-xs overflow-hidden mb-3 group-hover:border-sky-200 transition-colors">
                  <ImageWithSkeleton
                    src={cert.image}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                    className="object-cover object-top filter group-hover:contrast-105 transition-all duration-500"
                  />
                  
                  {/* Subtle Document Hover Overlay & Zoom Icon */}
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-2.5 rounded-full bg-white/95 text-brand-primary shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                      <ZoomIn className="w-5 h-5 stroke-[2]" />
                    </div>
                  </div>

                  {/* Top Seal Badge */}
                  <div className="absolute top-2 left-2 z-10 px-2 py-0.5 bg-slate-900/85 backdrop-blur-md text-white font-label text-[9px] font-bold uppercase tracking-wider">
                    {cert.category}
                  </div>
                </div>

                {/* Certificate Title Label */}
                <div className="text-center pt-1 pb-1 space-y-0.5 flex-1 flex flex-col justify-center">
                  <h4 className="font-label font-bold text-xs sm:text-sm text-slate-900 group-hover:text-brand-primary transition-colors leading-tight line-clamp-2">
                    {cert.title}
                  </h4>
                  <p className="font-body text-[11px] text-slate-400 line-clamp-1">
                    {cert.subtitle}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Certificate Lightbox Preview Modal */}
      {selectedCert && (
        <Modal
          open={Boolean(selectedCert)}
          onCancel={() => setSelectedCert(null)}
          footer={null}
          centered
          width={640}
          className="[&_.ant-modal-content]:!p-0 [&_.ant-modal-content]:!rounded-none [&_.ant-modal-content]:!overflow-hidden"
        >
          <div className="bg-white p-6 sm:p-8 space-y-6">
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
              <div className="space-y-1">
                <span className="px-2.5 py-1 bg-sky-100 text-brand-primary text-[10px] font-label font-extrabold uppercase tracking-widest">
                  OFFICIAL {selectedCert.category} CERTIFICATION
                </span>
                <h3 className="font-headline font-semibold text-xl text-slate-900">
                  {selectedCert.title}
                </h3>
                <p className="font-body text-xs text-slate-500">
                  {selectedCert.subtitle}
                </p>
              </div>
            </div>

            {/* Document Large Display */}
            <div className="relative w-full aspect-[1/1.3] bg-slate-100 border border-slate-200 overflow-hidden shadow-inner">
              <ImageWithSkeleton
                src={selectedCert.image}
                alt={selectedCert.title}
                fill
                className="object-cover object-top"
              />
            </div>

            <div className="flex items-center justify-between text-xs font-label text-slate-500 font-semibold pt-2">
              <span className="flex items-center gap-1.5 text-emerald-600">
                <CheckCircle2 className="w-4 h-4 stroke-[2]" />
                Official Dermaline Korea R&D Document
              </span>
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 bg-slate-900 text-white font-label text-xs font-bold uppercase tracking-wider hover:bg-brand-primary transition-colors cursor-pointer"
              >
                CLOSE
              </button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
