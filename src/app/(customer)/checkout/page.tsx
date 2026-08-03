'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import CheckoutHeaderSteps from '@/components/checkout/CheckoutHeaderSteps';
import ShippingAddressForm from '@/components/checkout/ShippingAddressForm';
import PaymentMethodSelector from '@/components/checkout/PaymentMethodSelector';
import CheckoutOrderSummary from '@/components/checkout/CheckoutOrderSummary';
import ScrollReveal from '@/components/common/ScrollReveal';
import { GEmpty } from '@/@core/component/Antd';
import { useCartStore } from '@/store/useCartStore';
import { PaymentMethodType } from '@/services/customer/checkout/models/checkout.model';
import { createOrderAsync } from '@/services/customer/checkout/checkout.service';
import { Form, message } from 'antd';

export default function CheckoutPage() {
  const router = useRouter();
  const [form] = Form.useForm();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodType>('CREDIT_CARD');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { items, getSummary, clearCart } = useCartStore();
  const summary = getSummary();
  const selectedItems = items.filter((i) => i.selected);

  const handlePlaceOrder = async () => {
    try {
      const values = await form.validateFields();
      setIsSubmitting(true);

      const orderResult = await createOrderAsync({
        shippingAddress: values,
        paymentMethod,
        orderNotes: values.orderNotes,
        items: selectedItems.map((i) => ({ productId: i.productId, quantity: i.quantity, price: i.price })),
      });

      setIsSubmitting(false);
      message.success({ content: `Order ${orderResult.orderNumber} successfully placed!`, duration: 2 });
      
      // Clear purchased items & navigate directly to Step 3 Complete Page
      clearCart();
      router.push(`/order-complete/${orderResult.orderId}?orderNumber=${orderResult.orderNumber}&total=${orderResult.totalAmount}`);
    } catch (err) {
      message.error('Please fill in all required shipping address fields before placing your order.');
    }
  };

  return (
    <main className="w-full min-h-screen bg-white select-none pt-24 sm:pt-28 pb-20">
      {/* 1. Header Steps Bar (Step 2 Active) */}
      <CheckoutHeaderSteps />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        {selectedItems.length === 0 ? (
          <ScrollReveal variant="fade-up" delay={200} duration={850}>
            <div className="py-12 bg-slate-50/50 border border-slate-200/80 rounded-none sm:rounded-sm">
              <GEmpty
                title="No Products Selected for Checkout"
                description="Please select products in your shopping cart before proceeding."
                actionText="RETURN TO SHOPPING CART"
                onAction={() => router.push('/cart')}
              />
            </div>
          </ScrollReveal>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column (8 Cols): Shipping Form & Payment Selection */}
            <div className="lg:col-span-8 space-y-8">
              <ScrollReveal variant="fade-up" delay={150} duration={800}>
                <ShippingAddressForm form={form} />
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={250} duration={800}>
                <PaymentMethodSelector selectedMethod={paymentMethod} onSelectMethod={setPaymentMethod} />
              </ScrollReveal>
            </div>

            {/* Right Column (4 Cols): Sticky Checkout Order Summary */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 z-20">
              <ScrollReveal variant="fade-up" delay={300} duration={850}>
                <CheckoutOrderSummary
                  items={items}
                  summary={summary}
                  isSubmitting={isSubmitting}
                  onPlaceOrder={handlePlaceOrder}
                />
              </ScrollReveal>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
