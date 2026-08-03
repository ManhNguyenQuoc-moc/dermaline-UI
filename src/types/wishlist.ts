// Centralized Wishlist Domain Types

import { ProductTag } from './common';

export interface WishlistItem {
  id: string;
  name: string;
  subtitle?: string;
  subTitle?: string;
  category?: string;
  line?: string;
  price: number;
  originalPrice?: number;
  rating?: number;
  reviewCount?: number;
  image: string;
  tag?: ProductTag;
}
