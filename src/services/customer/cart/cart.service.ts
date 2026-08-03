import { CartItemModel, CartSummaryModel, AddToCartPayload } from './models/cart.model';

/**
 * Service Layer for Cart Operations.
 * Designed with async methods ready for seamless backend REST API integration.
 */

export async function getCartAsync(): Promise<CartItemModel[]> {
  // Mock async fetch from Backend API or local storage
  return [];
}

export async function addItemAsync(payload: AddToCartPayload): Promise<CartItemModel> {
  const newItem: CartItemModel = {
    id: `cart-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
    productId: payload.productId,
    name: payload.name,
    subtitle: payload.subtitle,
    image: payload.image,
    price: payload.price,
    originalPrice: payload.originalPrice,
    quantity: payload.quantity || 1,
    capacity: payload.capacity || '200ml / 6.76 fl. oz.',
    sku: payload.sku || `DERMA-${payload.productId.toUpperCase()}-2026`,
    selected: true,
    rewardPoints: Math.round(payload.price * 0.05 * 100) / 100,
  };
  return newItem;
}

export async function updateQuantityAsync(cartItemId: string, quantity: number): Promise<{ id: string; quantity: number }> {
  return { id: cartItemId, quantity };
}

export async function removeItemAsync(cartItemId: string): Promise<string> {
  return cartItemId;
}

export async function clearCartAsync(): Promise<boolean> {
  return true;
}

export function calculateCartSummary(items: CartItemModel[]): CartSummaryModel {
  const selectedItems = items.filter((item) => item.selected);
  const selectedCount = selectedItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = selectedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const rewardPointsTotal = Math.round(subtotal * 0.05 * 100) / 100;
  const shippingFee = subtotal >= 100 || subtotal === 0 ? 0 : 15.0;
  const discountAmount = 0;
  const grandTotal = Math.max(0, subtotal + shippingFee - discountAmount);

  return {
    selectedCount,
    totalCount,
    subtotal,
    shippingFee,
    discountAmount,
    rewardPointsTotal,
    grandTotal,
  };
}
