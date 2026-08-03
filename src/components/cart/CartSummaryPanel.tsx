'use client';

import React from 'react';
import Link from 'next/link';
import { GButton } from '@/@core/component/Antd';
import { ShoppingCartOutlined, SafetyCertificateOutlined, CarOutlined } from '@/@core/component/Antd/Icons';
import { CartSummaryModel } from '@/services/customer/cart/models/cart.model';

interface CartSummaryPanelProps {
  summary: CartSummaryModel;
  onProceedCheckout: () => void;
}

export default function CartSummaryPanel({
  summary,
  onProceedCheckout,
}: CartSummaryPanelProps) {
  const isFreeShipping = summary.subtotal >= 100 || summary.subtotal === 0;

  return (
    <div className="w-full bg-slate-50 border border-slate-200/90 p-6 rounded-none sm:rounded-sm space-y-6 select-none shadow-xs sticky top-32">
      <h3 className="font-headline font-semibold text-xl text-slate-900 border-b border-slate-200 pb-4">
        Order Summary
      </h3>

      {/* Summary Breakdown */}
      <div className="space-y-3 font-body text-xs sm:text-sm">
        <div className="flex items-center justify-between text-slate-600">
          <span>Selected Products ({summary.selectedCount}):</span>
          <span className="font-headline font-bold text-slate-900">
            ${summary.subtotal.toFixed(2)}
          </span>
        </div>

        <div className="flex items-center justify-between text-slate-600">
          <span>Estimated Shipping Fee:</span>
          <span className="font-headline font-bold text-slate-900">
            {isFreeShipping ? (
              <span className="text-emerald-700 font-bold uppercase text-xs">FREE</span>
            ) : (
              `$${summary.shippingFee.toFixed(2)}`
            )}
          </span>
        </div>

        <div className="flex items-center justify-between text-slate-600">
          <span>Estimated Cashback Points:</span>
          <span className="font-label font-bold text-brand-primary">
            +${summary.rewardPointsTotal.toFixed(2)} pts
          </span>
        </div>

        {!isFreeShipping && summary.subtotal > 0 && (
          <div className="p-2.5 bg-sky-50 border border-sky-200 text-sky-900 text-[11px] font-label font-semibold rounded-none sm:rounded-xs flex items-center gap-1.5">
            <CarOutlined className="text-brand-primary text-sm shrink-0" />
            <span>Add ${(100 - summary.subtotal).toFixed(2)} more for FREE Worldwide EMS Shipping!</span>
          </div>
        )}
      </div>

      {/* Total Amount Box */}
      <div className="border-t border-slate-200 pt-4 flex items-baseline justify-between">
        <span className="font-label font-bold text-sm text-slate-900 uppercase tracking-wider">
          Grand Total:
        </span>
        <span className="font-headline font-extrabold text-2xl sm:text-3xl text-slate-900">
          USD ${summary.grandTotal.toFixed(2)}
        </span>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 pt-2">
        <GButton
          type="primary"
          onClick={onProceedCheckout}
          disabled={summary.selectedCount === 0}
          className="w-full !h-13 flex items-center justify-center gap-2 !bg-slate-950 hover:!bg-brand-primary !text-white"
        >
          <ShoppingCartOutlined className="text-base" />
          <span>PROCEED TO CHECKOUT</span>
        </GButton>

        <Link href="/products" className="block w-full">
          <GButton
            type="default"
            className="w-full !h-12 !border-slate-300 hover:!border-slate-400 !bg-white !text-slate-700"
          >
            CONTINUE SHOPPING
          </GButton>
        </Link>
      </div>

      {/* Guarantee Badge */}
      <div className="pt-2 border-t border-slate-200 text-center space-y-1">
        <div className="flex items-center justify-center gap-1.5 text-xs font-label font-bold text-slate-700">
          <SafetyCertificateOutlined className="text-brand-primary text-base" />
          <span>100% Authentic Dermaline Hospital Guarantee</span>
        </div>
        <p className="font-body text-[10px] text-slate-400">
          Direct dispatch from Seoul, South Korea with tracking number.
        </p>
      </div>
    </div>
  );
}
