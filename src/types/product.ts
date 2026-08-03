// Centralized Product Domain Types for Dermaline Cosmetics

import { BaseProductItem, ProductTag } from './common';

export type SkincareCategoryTag =
  | 'PDRN CARE'
  | 'EXOSOME CARE'
  | 'SOLUTION'
  | 'AMPOULE'
  | 'CLEANSING'
  | string;

export type FormulationLineTag =
  | 'Cleansing'
  | 'PDRN Care'
  | 'Oil/Moisture Balancing'
  | 'Ampoule Care'
  | 'Special Ampoule Care'
  | 'Trouble Care'
  | 'Sun Care'
  | 'Keratin Care'
  | string;

export type SkincareTypeTag =
  | 'Cleansing'
  | 'Toner/Mist'
  | 'Lotion/Emulsion'
  | 'Cream/Eye Cream'
  | 'Mask Pack'
  | 'Sun Care/BB'
  | 'Ampoule/Essence'
  | 'Special Ampoule'
  | 'Modeling Mask Pack'
  | 'SET'
  | string;

export type SkincareBrandTag =
  | 'DERMALINE'
  | "D'LEXO"
  | 'r:Eden'
  | string;

export type SkinConcernTag =
  | 'All'
  | 'Anti-Aging & Elasticity'
  | 'Moisture Barrier'
  | 'Sensitive & Soothing'
  | 'Skin Texture'
  | 'Acne & Blemish'
  | 'UV Protection'
  | string;

export interface ProductItem extends BaseProductItem {
  id: number | string;
  name: string;
  subtitle?: string;
  subTitle?: string;
  slug?: string;
  lineSlug?: string;
  typeSlug?: string;
  brandSlug?: string;
  hoverImage?: string;
  isBest?: boolean;
  isEvent?: boolean;
  isNew?: boolean;
  isSpecialty?: boolean;
  discountBadge?: string;
  category: SkincareCategoryTag;
  line: FormulationLineTag;
  type?: SkincareTypeTag;
  brand?: SkincareBrandTag;
  concern?: SkinConcernTag;
  price: number;
  originalPrice?: number;
  rating?: number;
  reviewCount?: number;
  reviewsCount?: number;
  image: string;
  tag?: ProductTag;
  description?: string;
  inStock?: boolean;
}

export interface ProductDetailData extends ProductItem {
  volume?: string;
  keyIngredients?: string[];
  benefits?: string[];
  howToUse?: string;
  fullIngredients?: string;
  images?: string[];
}

export interface ProductFilterParams {
  searchQuery?: string;
  selectedCategory?: string;
  selectedLine?: string;
  selectedType?: string;
  selectedBrand?: string;
  selectedConcern?: string;
  selectedPriceRange?: string;
  lineSlug?: string;
  typeSlug?: string;
  brandSlug?: string;
  isEvent?: boolean;
  isBest?: boolean;
  sortBy?: 'featured' | 'price-low' | 'price-high' | 'rating';
  page?: number;
  pageSize?: number;
  search?: string;
  category?: string;
  line?: string;
  concern?: string;
  priceRange?: string;
}

export interface ProductFilterState extends ProductFilterParams {
  searchQuery: string;
  selectedCategory: string;
  selectedLine: string;
  selectedConcern: string;
  selectedPriceRange: string;
  sortBy: 'featured' | 'price-low' | 'price-high' | 'rating';
}
