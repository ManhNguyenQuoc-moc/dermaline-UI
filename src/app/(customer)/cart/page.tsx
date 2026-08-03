'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import CartHeaderSteps from '@/components/cart/CartHeaderSteps';
import CartItemRow from '@/components/cart/CartItemRow';
import CartSummaryPanel from '@/components/cart/CartSummaryPanel';
import ScrollReveal from '@/components/common/ScrollReveal';
import { GCheckbox, GEmpty } from '@/@core/component/Antd';
import { DeleteOutlined } from '@/@core/component/Antd/Icons';
import { useCartStore } from '@/store/useCartStore';
import { message } from 'antd';

export default function CartPage() {
  const router = useRouter();
  const {
    items,
    toggleSelect,
    toggleSelectAll,
    updateQuantity,
    removeItem,
    removeSelectedItems,
    getSummary,
  } = useCartStore();

  const summary = getSummary();
  const allSelected = items.length > 0 && items.every((i) => i.selected);

  const handleProceedCheckout = () => {
    if (summary.selectedCount === 0) {
      message.warning('Please select at least 1 product to proceed to checkout.');
      return;
    }
    router.push('/checkout');
  };

  return (
    <main className="w-full min-h-screen bg-white select-none pt-24 sm:pt-28 pb-20">
      {/* 1. Header Steps Indicator */}
      <CartHeaderSteps />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        {items.length === 0 ? (
          /* Empty Cart State */
          <ScrollReveal variant="fade-up" delay={200} duration={850}>
            <div className="py-12 bg-slate-50/50 border border-slate-200/80 rounded-none sm:rounded-sm">
              <GEmpty
                title="Your Shopping Cart is Empty"
                description="Explore Dermaline Korea's clinical PDRN 99.5%, Exosomes & NAD+ formulas."
                actionText="BROWSE CLINICAL PRODUCTS"
                onAction={() => router.push('/products')}
              />
            </div>
          </ScrollReveal>
        ) : (
          /* Main Cart Content Grid */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column (8 Cols): Cart Controls & Items List */}
            <div className="lg:col-span-8 space-y-4">
              {/* Batch Controls Row */}
              <ScrollReveal variant="fade-up" delay={150} duration={800}>
                <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-none sm:rounded-sm flex items-center justify-between shadow-2xs">
                  <GCheckbox
                    checked={allSelected}
                    onChange={(e) => toggleSelectAll(e.target.checked)}
                    className="font-label text-xs font-bold text-slate-800 uppercase tracking-wider"
                  >
                    Select All Items ({summary.selectedCount}/{summary.totalCount})
                  </GCheckbox>

                  <button
                    type="button"
                    onClick={removeSelectedItems}
                    disabled={summary.selectedCount === 0}
                    className="font-label text-xs font-bold text-red-600 hover:text-red-800 disabled:text-slate-400 transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <DeleteOutlined className="text-xs" />
                    <span>Delete Selected</span>
                  </button>
                </div>
              </ScrollReveal>

              {/* Product Item List */}
              <div className="space-y-3">
                {items.map((item, idx) => (
                  <ScrollReveal
                    key={item.id}
                    variant="fade-up"
                    delay={200 + idx * 80}
                    duration={750}
                  >
                    <CartItemRow
                      item={item}
                      onToggleSelect={toggleSelect}
                      onUpdateQuantity={updateQuantity}
                      onRemoveItem={removeItem}
                    />
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Right Column (4 Cols): Sticky Summary & Checkout Panel */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 z-20">
              <ScrollReveal variant="fade-up" delay={300} duration={850}>
                <CartSummaryPanel
                  summary={summary}
                  onProceedCheckout={handleProceedCheckout}
                />
              </ScrollReveal>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
