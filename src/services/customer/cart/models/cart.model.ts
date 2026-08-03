export interface CartItemModel {
  id: string; // Unique cart item ID
  productId: string;
  name: string;
  subtitle?: string;
  image: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  capacity?: string;
  sku?: string;
  selected: boolean; // Whether checked for checkout
  rewardPoints?: number;
}

export interface CartSummaryModel {
  selectedCount: number;
  totalCount: number;
  subtotal: number;
  shippingFee: number;
  discountAmount: number;
  rewardPointsTotal: number;
  grandTotal: number;
}

export interface AddToCartPayload {
  productId: string;
  name: string;
  subtitle?: string;
  image: string;
  price: number;
  originalPrice?: number;
  quantity?: number;
  capacity?: string;
  sku?: string;
}
