// Centralized Cart & Order Checkout Domain Types

export interface CartItem {
  productId: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  quantity: number;
}

export interface OrderSummary {
  subtotal: number;
  shippingFee: number;
  estimatedCashbackPoints: number;
  totalPayableAmount: number;
}

export interface ShippingAddressDto {
  fullName: string;
  phone: string;
  address: string;
  city: string;
  notes?: string;
}
