import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ProductItem } from '@/services/customer/product/models/product.model';

export const INITIAL_MOCK_WISHLIST: ProductItem[] = [
  {
    id: 'prod-1',
    name: 'PDRN Salmon Ampoule 99.5% Concentration',
    subtitle: 'Wrinkle, Whitening & Rejuvenation Care',
    category: 'pdrn-care',
    line: 'PDRN Care',
    lineSlug: 'pdrn-care',
    price: 85,
    originalPrice: 110,
    rating: 4.9,
    reviewCount: 128,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600&auto=format&fit=crop',
    tag: 'BEST SELLER',
    slug: 'pdrn-salmon-ampoule',
    isBest: true,
  },
  {
    id: 'prod-3',
    name: 'Bio-Exosome Skin Recovery Lotion 200ml',
    subtitle: 'Deep Moisturization & Cellular Recovery',
    category: 'lotion-emulsion',
    line: 'Lotion Care',
    typeSlug: 'lotion-emulsion',
    price: 45,
    originalPrice: 55,
    rating: 4.8,
    reviewCount: 94,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600&auto=format&fit=crop',
    tag: 'NEW',
    slug: 'bio-exosome-lotion',
    isNew: true,
  },
  {
    id: 'prod-4',
    name: 'Peptide Hydra Soothing Cream 100g',
    subtitle: 'Soothing & Moisture Barrier Strengthening',
    category: 'cream-eye-cream',
    line: 'Cream Care',
    typeSlug: 'cream-eye-cream',
    price: 52,
    originalPrice: 65,
    rating: 4.7,
    reviewCount: 61,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=600&auto=format&fit=crop',
    tag: 'CLINIC FAVORITE',
    slug: 'peptide-hydra-cream',
  },
];

interface WishlistState {
  items: ProductItem[];
  addItem: (product: ProductItem) => void;
  removeItem: (productId: string) => void;
  toggleItem: (product: ProductItem) => void;
  isInWishlist: (productId: string) => boolean;
  clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: INITIAL_MOCK_WISHLIST,

      addItem: (product) => {
        const { items } = get();
        if (!items.some((i) => i.id === product.id)) {
          set({ items: [...items, product] });
        }
      },

      removeItem: (productId) => {
        const { items } = get();
        set({ items: items.filter((i) => i.id !== productId) });
      },

      toggleItem: (product) => {
        const { items, addItem, removeItem } = get();
        if (items.some((i) => String(i.id) === String(product.id))) {
          removeItem(String(product.id));
        } else {
          addItem(product);
        }
      },

      isInWishlist: (productId) => {
        return get().items.some((i) => i.id === productId);
      },

      clearWishlist: () => {
        set({ items: [] });
      },
    }),
    {
      name: 'dermaline_wishlist_store',
    }
  )
);
