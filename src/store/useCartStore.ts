'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItemModel, AddToCartPayload } from '@/services/customer/cart/models/cart.model';
import { addItemAsync, calculateCartSummary } from '@/services/customer/cart/cart.service';

interface CartState {
  items: CartItemModel[];
  isLoading: boolean;
  
  // Actions
  addItem: (payload: AddToCartPayload) => Promise<void>;
  removeItem: (id: string) => void;
  removeSelectedItems: () => void;
  updateQuantity: (id: string, quantity: number) => void;
  toggleSelect: (id: string) => void;
  toggleSelectAll: (checked: boolean) => void;
  clearCart: () => void;
  getSummary: () => ReturnType<typeof calculateCartSummary>;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [
        {
          id: 'cart-init-1',
          productId: 'p-4',
          name: "[Available at USA Costco] D'LEXO NAD Power Solution Bubble Toner 200ml",
          subtitle: 'Micro-Bubble Hydration & Cellular Rejuvenation Toner',
          image: 'https://images.unsplash.com/photo-1617897903246-719242758050?w=800&auto=format&fit=crop&q=80',
          price: 38.73,
          originalPrice: 48.00,
          quantity: 1,
          capacity: '200ml / 6.76 fl. oz.',
          sku: 'DERMA-P-4-2026',
          selected: true,
          rewardPoints: 1.94,
        },
        {
          id: 'cart-init-2',
          productId: 'p-2',
          name: 'Capturing Step 2: Schisandra Serum 50ml',
          subtitle: 'Deep Dermal Elasticity & Anti-Oxidant Bio-Serum',
          image: 'https://images.unsplash.com/photo-1608248597261-729994c65330?w=800&auto=format&fit=crop&q=80',
          price: 24.65,
          originalPrice: 34.00,
          quantity: 1,
          capacity: '50ml / 1.69 fl. oz.',
          sku: 'DERMA-P-2-2026',
          selected: true,
          rewardPoints: 1.23,
        },
      ],
      isLoading: false,

      addItem: async (payload: AddToCartPayload) => {
        set({ isLoading: true });
        const existing = get().items.find((item) => item.productId === payload.productId);

        if (existing) {
          set({
            items: get().items.map((item) =>
              item.productId === payload.productId
                ? { ...item, quantity: item.quantity + (payload.quantity || 1), selected: true }
                : item
            ),
            isLoading: false,
          });
        } else {
          const newItem = await addItemAsync(payload);
          set({
            items: [newItem, ...get().items],
            isLoading: false,
          });
        }
      },

      removeItem: (id: string) => {
        set({ items: get().items.filter((item) => item.id !== id) });
      },

      removeSelectedItems: () => {
        set({ items: get().items.filter((item) => !item.selected) });
      },

      updateQuantity: (id: string, quantity: number) => {
        if (quantity < 1) return;
        set({
          items: get().items.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        });
      },

      toggleSelect: (id: string) => {
        set({
          items: get().items.map((item) =>
            item.id === id ? { ...item, selected: !item.selected } : item
          ),
        });
      },

      toggleSelectAll: (checked: boolean) => {
        set({
          items: get().items.map((item) => ({ ...item, selected: checked })),
        });
      },

      clearCart: () => {
        set({ items: [] });
      },

      getSummary: () => {
        return calculateCartSummary(get().items);
      },
    }),
    {
      name: 'dermaline-cart-storage',
    }
  )
);
