'use client';

import React, { useState } from 'react';
import ImageWithSkeleton from '@/components/common/ImageWithSkeleton';
import { GButton, GInput } from '@/@core/component/Antd';
import { ShoppingCartOutlined, SafetyCertificateOutlined, CheckOutlined, TagOutlined } from '@/@core/component/Antd/Icons';
import { CartItemModel, CartSummaryModel } from '@/services/customer/cart/models/cart.model';
import { applyCouponAsync } from '@/services/customer/checkout/checkout.service';
import { message } from 'antd';

interface CheckoutOrderSummaryProps {
  items: CartItemModel[];
  summary: CartSummaryModel;
  isSubmitting: boolean;
  onPlaceOrder: () => void;
}

export default function CheckoutOrderSummary({
  items,
  summary,
  isSubmitting,
  onPlaceOrder,
}: CheckoutOrderSummaryProps) {
  const [couponInput, setCouponInput] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [isApplying, setIsApplying] = useState(false);

  const selectedItems = items.filter((i) => i.selected);

  const handleApplyCoupon = async () => {
    if (!couponInput.trim()) return;
    setIsApplying(true);
    const res = await applyCouponAsync(couponInput.trim());
    setIsApplying(false);

    if (res.valid) {
      setDiscountPercent(res.discountPercentage);
      message.success(res.message);
    } else {
      setDiscountPercent(0);
      message.error(res.message);
    }
  };

  const discountAmount = (summary.subtotal * discountPercent) / 100;
  const finalGrandTotal = Math.max(0, summary.grandTotal - discountAmount);

  return (
    <div className="w-full bg-slate-50 border border-slate-200/90 p-6 rounded-none sm:rounded-sm space-y-6 select-none shadow-xs sticky top-32">
      <h3 className="font-headline font-semibold text-xl text-slate-900 border-b border-slate-200 pb-4">
        Order Summary ({selectedItems.length} Products)
      </h3>

      {/* Selected Products Mini List */}
      <div className="max-h-60 overflow-y-auto space-y-3 pr-1">
        {selectedItems.map((item) => (
          <div key={item.id} className="flex items-center gap-3 p-2 bg-white border border-slate-200/80">
            <div className="w-12 h-12 bg-slate-50 border border-slate-200 shrink-0 overflow-hidden">
              <ImageWithSkeleton src={item.image} alt={item.name} containerClassName="w-full h-full" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-headline font-semibold text-xs text-slate-900 truncate">{item.name}</h4>
              <span className="font-label text-[11px] text-slate-500 block">Qty: {item.quantity} × ${item.price.toFixed(2)}</span>
            </div>
            <span className="font-headline font-bold text-xs text-slate-900">${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>

      {/* Coupon Code Input Box */}
      <div className="space-y-2 pt-2 border-t border-slate-200">
        <label className="font-label text-xs font-bold text-slate-700 uppercase tracking-wider block">
          Promo / Clinic Coupon Code
        </label>
        <div className="flex gap-2">
          <GInput
            prefix={<TagOutlined className="text-slate-400 mr-1" />}
            placeholder="Try DERMA10"
            value={couponInput}
            onChange={(e) => setCouponInput(e.target.value)}
          />
          <GButton
            onClick={handleApplyCoupon}
            loading={isApplying}
            className="!h-10 shrink-0 !bg-slate-900 !text-white hover:!bg-brand-primary"
          >
            APPLY
          </GButton>
        </div>
      </div>

      {/* Breakdown */}
      <div className="space-y-2.5 font-body text-xs sm:text-sm border-t border-slate-200 pt-4">
        <div className="flex items-center justify-between text-slate-600">
          <span>Subtotal Amount:</span>
          <span className="font-headline font-bold text-slate-900">${summary.subtotal.toFixed(2)}</span>
        </div>

        {discountAmount > 0 && (
          <div className="flex items-center justify-between text-emerald-700 font-semibold">
            <span>Coupon Discount ({discountPercent}%):</span>
            <span className="font-headline font-bold">-${discountAmount.toFixed(2)}</span>
          </div>
        )}

        <div className="flex items-center justify-between text-slate-600">
          <span>Worldwide EMS Express Delivery:</span>
          <span className="font-headline font-bold text-slate-900">
            {summary.subtotal >= 100 ? <span className="text-emerald-700 uppercase text-xs font-bold">FREE</span> : `$${summary.shippingFee.toFixed(2)}`}
          </span>
        </div>

        <div className="flex items-center justify-between text-slate-600">
          <span>Earned Cashback Points:</span>
          <span className="font-label font-bold text-brand-primary">+${summary.rewardPointsTotal.toFixed(2)} pts</span>
        </div>
      </div>

      {/* Grand Total Box */}
      <div className="border-t border-slate-200 pt-4 flex items-baseline justify-between">
        <span className="font-label font-bold text-sm text-slate-900 uppercase tracking-wider">
          Total Payable:
        </span>
        <span className="font-headline font-extrabold text-2xl sm:text-3xl text-slate-900">
          USD ${finalGrandTotal.toFixed(2)}
        </span>
      </div>

      {/* Place Order Primary Action Button */}
      <div className="pt-2">
        <GButton
          type="primary"
          onClick={onPlaceOrder}
          loading={isSubmitting}
          className="w-full !h-13 flex items-center justify-center gap-2 !bg-slate-950 hover:!bg-brand-primary !text-white"
        >
          <ShoppingCartOutlined className="text-base" />
          <span>PLACE ORDER NOW</span>
        </GButton>
      </div>

      {/* Security Guarantee */}
      <div className="pt-2 border-t border-slate-200 text-center space-y-1">
        <div className="flex items-center justify-center gap-1.5 text-xs font-label font-bold text-slate-700">
          <SafetyCertificateOutlined className="text-brand-primary text-base" />
          <span>Direct Dispatch from Seoul, South Korea</span>
        </div>
        <p className="font-body text-[10px] text-slate-400">
          All orders are dispatched directly from Dermaline Korea Central Warehouse with official tracking number.
        </p>
      </div>
    </div>
  );
}
