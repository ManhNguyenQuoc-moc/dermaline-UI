import { PaginationQueryParams } from '@/@core/models/pagination.model';

export type CommunityCategory = 'news' | 'faq' | 'gallery';

export interface CommunityArticleItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: CommunityCategory;
  categoryLabel: string;
  author: string;
  authorRole?: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  sourceUrl?: string;
  faqAnswer?: string;
  faqCategoryTag?: 'pdrn-tech' | 'post-laser' | 'routines' | 'salon-1000ml' | 'safety';
  faqCategoryLabel?: string;
  detailedAnswer?: string[];
  usageSteps?: string[];
  doctorAdvice?: string;
  recommendedProducts?: {
    name: string;
    category: string;
    link: string;
  }[];
  content?: string[];
  keyHighlights?: string[];
  tags?: string[];
}

export interface CustomerUsedProduct {
  id: string;
  name: string;
  image: string;
  category: string;
  link: string;
}

export interface RealCustomerShowcaseItem {
  id: string;
  slug: string;
  customerName: string;
  customerAge: number;
  skinType: string;
  concern: string; // e.g. "Post-Laser Damage & Redness", "Severe Barrier Breakdown", "Loss of Elasticity"
  categoryTag: 'post-laser' | 'pdrn-glow' | 'barrier-repair' | 'trouble-cica';
  categoryTagLabel: string;
  beforeImage: string;
  afterImage: string;
  treatmentDuration: string; // e.g. "4 Weeks Daily PDRN Care"
  rating: number;
  reviewTitle: string;
  reviewContent: string;
  verifiedClinicBuyer: boolean;
  clinicName?: string;
  usedProducts: CustomerUsedProduct[];
  date: string;
}

export interface CommunityFilterParams extends PaginationQueryParams {
  category?: string;
  concernTag?: string;
}
