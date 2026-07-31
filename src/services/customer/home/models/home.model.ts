export interface HeroSlideSpecItem {
  label: string;
  value: string;
}

export interface HeroSlideItem {
  id: number;
  badge: string;
  titlePart1: string;
  titlePart2: string;
  description: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  productImage: string;
  bgGradient: string;
  floatingBadge: string;
  productSpecsTitle: string;
  productSpecs: HeroSlideSpecItem[];
  stats: { value: string; label: string }[];
}

export interface HeroData {
  badge: string;
  titlePart1: string;
  titlePart2: string;
  description: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  bgImage: string;
  slides: HeroSlideItem[];
}

export interface StatisticItem {
  value: string;
  label: string;
}

export interface AboutFeatureItem {
  title: string;
  desc: string;
  badge: string;
}

export interface AboutData {
  eyebrow: string;
  title: string;
  paragraph1: string;
  paragraph2: string;
  tagline?: string;
  titleLine1?: string;
  titleLine2?: string;
  description?: string;
  statistics: StatisticItem[];
  bannerImage: string;
  floatingQuoteTitle: string;
  floatingQuoteDesc: string;
  features?: AboutFeatureItem[];
}

export interface InnovatorItem {
  id: number;
  title: string;
  category: string;
  badge: string;
  badgeVariant: 'gold' | 'dark' | 'outline' | 'soft' | 'primary';
  description: string;
  image: string;
}

export interface ProductItem {
  id: number;
  name: string;
  category: string;
  price: string;
  originalPrice?: string;
  tag: 'NEW' | 'BEST' | 'COSTCO' | 'SALE';
  image: string;
  isFavorite?: boolean;
}

export interface RecommendationProductItem {
  id: number;
  name: string;
  subTitle?: string;
  categoryTag: string;
  price: string;
  originalPrice?: string;
  discountBadge?: string;
  image: string;
  rating?: number;
  reviewsCount?: number;
  stepBadge?: string;
}

export interface RecommendationCategory {
  id: string;
  tag: string;
  label: string;
  subtitle: string;
  products: RecommendationProductItem[];
}

export interface HomeDataModel {
  hero: HeroData;
  about: AboutData;
  innovators: InnovatorItem[];
  products?: ProductItem[];
  recommendations?: RecommendationCategory[];
}
