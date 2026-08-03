export interface ShippingAddressModel {
  fullName: string;
  phone: string;
  email: string;
  country: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  stateProvince: string;
  postalCode: string;
  saveForNextTime?: boolean;
}

export type PaymentMethodType = 'CREDIT_CARD' | 'PAYPAL' | 'BANK_TRANSFER' | 'EMS_COD';

export interface CheckoutOrderPayload {
  shippingAddress: ShippingAddressModel;
  paymentMethod: PaymentMethodType;
  couponCode?: string;
  orderNotes?: string;
  items: Array<{
    productId: string;
    quantity: number;
    price: number;
  }>;
}

export interface OrderResultModel {
  orderId: string;
  orderNumber: string;
  status: 'PENDING' | 'CONFIRMED' | 'PAID';
  totalAmount: number;
  createdAt: string;
}
