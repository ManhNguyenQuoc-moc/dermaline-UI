// Centralized Home & Hero Banner Domain Types

import { ProductItem } from './product';

export interface StatItem {
  value: string;
  label: string;
}

export interface HeroSlideItem {
  id: number | string;
  badge: string;
  floatingBadge?: string;
  titlePart1: string;
  titlePart2: string;
  productSpecsTitle?: string;
  productSpecs?: Array<{ label: string; value: string }>;
  description: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  productImage: string;
  bgGradient?: string;
  stats: StatItem[];
}

export interface HeroData {
  slides: HeroSlideItem[];
}

export interface AboutData {
  eyebrow?: string;
  tagline?: string;
  tag?: string;
  title: string;
  paragraph1?: string;
  paragraph2?: string;
  description: string;
  stats: StatItem[];
  statistics?: StatItem[];
  image: string;
}

export interface InnovatorItem {
  id: number | string;
  name: string;
  role: string;
  title?: string;
  category?: string;
  badge?: string;
  badgeVariant?: string;
  avatar: string;
  image?: string;
  quote: string;
  description?: string;
}

export interface RecommendationCategory {
  id: string;
  name: string;
  tag?: string;
  products: ProductItem[];
}

export interface HomeData {
  hero: HeroData;
  about?: AboutData;
  innovators?: InnovatorItem[];
  recommendations?: RecommendationCategory[];
  featuredProducts: ProductItem[];
}

export type HomeDataModel = HomeData;
