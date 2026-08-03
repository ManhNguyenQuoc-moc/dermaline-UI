import { CheckoutOrderPayload, OrderResultModel } from './models/checkout.model';

/**
 * Service Layer for Checkout & Order Placement Operations.
 * Designed with async methods ready for seamless backend REST API integration.
 */

export async function createOrderAsync(payload: CheckoutOrderPayload): Promise<OrderResultModel> {
  // Mock async API order creation
  const orderNumber = `DLM-${Date.now().toString().slice(-6)}`;
  return {
    orderId: `ord-${Date.now()}`,
    orderNumber,
    status: 'CONFIRMED',
    totalAmount: payload.items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    createdAt: new Date().toISOString(),
  };
}

export async function applyCouponAsync(couponCode: string): Promise<{ valid: boolean; discountPercentage: number; message: string }> {
  if (couponCode.toUpperCase() === 'DERMA10') {
    return { valid: true, discountPercentage: 10, message: '10% Clinic Discount Applied!' };
  }
  return { valid: false, discountPercentage: 0, message: 'Invalid or expired coupon code.' };
}
