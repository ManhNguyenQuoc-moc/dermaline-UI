import React from 'react';
import HeroBanner from '@/components/home/HeroBanner';
import AboutBanner from '@/components/home/AboutBanner';
import InnovatorsBento from '@/components/home/InnovatorsBento';
import BrandVideoShowcase from '@/components/home/BrandVideoShowcase';
import ProductGridSection from '@/components/home/ProductGridSection';
import RecommendationSection from '@/components/home/RecommendationSection';
import SectionDivider from '@/components/common/SectionDivider';
import { getHomeDataService } from '@/services/customer/home/home.service';

export default function CustomerHomePage() {
  const data = getHomeDataService();

  return (
    <main className="w-full min-h-screen overflow-x-hidden">
      {/* 1. Hero Banner Section (Includes Soft Studio Organic Wave Arc Transition at top & bottom) */}
      <HeroBanner data={data.hero} />

      {/* 2. About Dermaline Section */}
      <AboutBanner data={data.about} />

      {/* Transition 2: Silky Ribbon Wave with Clinical R&D Stamp Badge */}
      <SectionDivider mode="silk-stamp" stampText="DERMALINE MEDICAL AESTHETICS R&D" />

      {/* 3. Top 3 Best Seller Skincare Bento Grid Section */}
      <InnovatorsBento innovators={data.innovators} />

      {/* Transition 3: Multi-Layered Silky Flowing Wave Ribbon */}
      <SectionDivider mode="silk-flow" />

      {/* 4. Brand Video Showcase Section (Figma Node 6:113) */}
      <BrandVideoShowcase />

      {/* 5. Product Collection Grid Section (3 Columns x 3 Rows = 9 Product Cards) */}
      <ProductGridSection products={data.products} />

      {/* 6. 2026 Modern Recommendation Section (Clinical Skincare Routine Selection) */}
      <RecommendationSection recommendations={data.recommendations} />
    </main>
  );
}
