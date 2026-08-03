'use client';

import React from 'react';
import Link from 'next/link';
import ImageWithSkeleton from '@/components/common/ImageWithSkeleton';
import { GCheckbox } from '@/@core/component/Antd';
import { PlusOutlined, MinusOutlined, DeleteOutlined } from '@/@core/component/Antd/Icons';
import { CartItemModel } from '@/services/customer/cart/models/cart.model';

interface CartItemRowProps {
  item: CartItemModel;
  onToggleSelect: (id: string) => void;
  onUpdateQuantity: (id: string, qty: number) => void;
  onRemoveItem: (id: string) => void;
}

export default function CartItemRow({
  item,
  onToggleSelect,
  onUpdateQuantity,
  onRemoveItem,
}: CartItemRowProps) {
  const lineTotal = item.price * item.quantity;

  return (
    <div className="p-4 sm:p-5 bg-white border border-slate-200/90 rounded-none sm:rounded-sm shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all hover:border-slate-300">
      {/* Left: Checkbox + Product Image & Title */}
      <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1">
        <GCheckbox
          checked={item.selected}
          onChange={() => onToggleSelect(item.id)}
          className="mt-1 sm:mt-0"
        />

        <Link
          href={`/product/${item.productId}`}
          className="relative w-20 h-20 sm:w-24 sm:h-24 bg-slate-50 border border-slate-200 rounded-none sm:rounded-xs overflow-hidden shrink-0 group"
        >
          <ImageWithSkeleton
            src={item.image}
            alt={item.name}
            containerClassName="w-full h-full"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>

        <div className="space-y-1 pr-2">
          <span className="font-label text-[10px] font-bold text-brand-primary uppercase tracking-wider block">
            SKU: {item.sku}
          </span>
          <Link
            href={`/product/${item.productId}`}
            className="font-headline font-semibold text-sm sm:text-base text-slate-900 hover:text-brand-primary transition-colors line-clamp-2 leading-snug"
          >
            {item.name}
          </Link>
          <div className="flex items-center gap-2 text-xs font-label text-slate-500">
            <span>Capacity: {item.capacity}</span>
          </div>
          <p className="font-body text-[11px] text-slate-400">
            Earn <strong className="text-brand-primary">${item.rewardPoints}</strong> pts per item
          </p>
        </div>
      </div>

      {/* Right: Price + Quantity Selector + Subtotal + Delete */}
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-between sm:justify-end gap-4 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-100">
        {/* Unit Price */}
        <div className="text-left sm:text-right min-w-[90px]">
          <span className="font-headline font-bold text-base text-slate-900 block">
            ${item.price.toFixed(2)}
          </span>
          {item.originalPrice && item.originalPrice > item.price && (
            <span className="font-body text-xs text-slate-400 line-through block">
              ${item.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center border border-slate-300 bg-white h-9">
          <button
            type="button"
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            className="w-8 h-full flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
          >
            <MinusOutlined className="text-[10px]" />
          </button>
          <span className="w-10 text-center font-headline font-bold text-xs text-slate-900">
            {item.quantity}
          </span>
          <button
            type="button"
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="w-8 h-full flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
          >
            <PlusOutlined className="text-[10px]" />
          </button>
        </div>

        {/* Line Subtotal */}
        <div className="text-right min-w-[100px]">
          <span className="font-headline font-extrabold text-base sm:text-lg text-slate-900">
            ${lineTotal.toFixed(2)}
          </span>
        </div>

        {/* Delete Button */}
        <button
          type="button"
          onClick={() => onRemoveItem(item.id)}
          className="p-2 text-slate-400 hover:text-red-600 transition-colors cursor-pointer"
          title="Remove Item"
        >
          <DeleteOutlined className="text-base" />
        </button>
      </div>
    </div>
  );
}
