import React from 'react';
import BrandStoryHero from '@/components/brand/BrandStoryHero';
import BrandPhilosophySection from '@/components/brand/BrandPhilosophySection';
import BrandTimelineSection from '@/components/brand/BrandTimelineSection';
import BrandTechnologySection from '@/components/brand/BrandTechnologySection';
import BrandManifestoQuote from '@/components/brand/BrandManifestoQuote';

export const metadata = {
  title: 'Brand Story | DERMALINE Korean Hospital Dermacosmetics',
  description:
    'Discover the hospital R&D origin, 15+ years clinical heritage, and bio-cellular skin recovery technology of DERMALINE.',
};

export default function BrandStoryPage() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden bg-white">
      {/* 1. Hero Banner Section */}
      <BrandStoryHero />

      {/* 2. Brand Clinical Philosophy (3 Pillars Bento Grid) */}
      <BrandPhilosophySection />

      {/* 3. 15+ Years Hospital R&D Heritage Timeline */}
      <BrandTimelineSection />

      {/* 4. Bio-Cellular Formulation Technology (PDRN & Exosomes) */}
      <BrandTechnologySection />

      {/* 5. Official Dermaline Manifesto Quote */}
      <BrandManifestoQuote />
    </main>
  );
}
