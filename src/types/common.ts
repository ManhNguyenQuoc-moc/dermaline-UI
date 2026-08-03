// Centralized Shared Common Types & UI Interfaces for Dermaline Medical Cosmetics Platform

export type BadgeVariant = 'brand' | 'gold' | 'emerald' | 'rose' | 'sky' | 'slate';

export type ProductTag = 'NEW' | 'BEST SELLER' | 'CLINIC FAVORITE' | string | undefined;

export interface BaseProductItem {
  id: number | string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  hoverImage?: string;
  categoryTag?: string;
  badgeTag?: string;
  discountBadge?: string;
  tag?: ProductTag;
  subtitle?: string;
  subTitle?: string;
  line?: string;
  rating?: number;
  reviewCount?: number;
  reviewsCount?: number;
  slug?: string;
  lineSlug?: string;
  typeSlug?: string;
  brandSlug?: string;
  isBest?: boolean;
  isEvent?: boolean;
  isNew?: boolean;
  isSpecialty?: boolean;
}

export interface ProductCardData extends BaseProductItem {}

export interface NavDropdownChildItem {
  key: string;
  label: string;
  href: string;
}

export interface RawSubItem {
  key: string;
  label: string;
  href: string;
  children?: NavDropdownChildItem[];
}

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  rawDropdownItems?: RawSubItem[];
}
