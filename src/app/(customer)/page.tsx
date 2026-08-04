import React from 'react';
import HeroBanner from '@/components/home/HeroBanner';
import EventCountdownSection from '@/components/home/EventCountdownSection';
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
      {/* 1. Hero Banner Section */}
      <HeroBanner data={data.hero} />

      {/* 2. Event Countdown Section (Positioned directly below Hero) */}
      <EventCountdownSection />

      {/* 3. About Dermaline Section */}
      <AboutBanner data={data.about} />

      {/* Transition 2: Silky Ribbon Wave with Clinical R&D Stamp Badge */}
      <SectionDivider mode="silk-stamp" stampText="DERMALINE MEDICAL AESTHETICS R&D" />

      {/* 4. Top 3 Best Seller Skincare Bento Grid Section */}
      <InnovatorsBento innovators={data.innovators} />

      {/* Transition 3: Multi-Layered Silky Flowing Wave Ribbon */}
      <SectionDivider mode="silk-flow" />

      {/* 5. Brand Video Showcase Section */}
      <BrandVideoShowcase />

      {/* 6. Product Collection Grid Section */}
      <ProductGridSection products={data.products} />

      {/* 7. Modern Recommendation Section */}
      <RecommendationSection recommendations={data.recommendations} />
    </main>
  );
}
