'use client';

import React, { useState } from 'react';
import { GCheckbox, GButton } from '@/@core/component/Antd';
import {
  StarFilled,
  PlusOutlined,
  MinusOutlined,
  ShoppingCartOutlined,
  HeartOutlined,
  HeartFilled,
  CheckOutlined,
  CarOutlined,
  SafetyCertificateOutlined,
  SyncOutlined,
} from '@/@core/component/Antd/Icons';
import { ProductDetailData } from '@/services/customer/product/detail.service';
import { useCartStore } from '@/store/useCartStore';
import { message } from 'antd';

interface ProductPurchasePanelProps {
  product: ProductDetailData;
}

export default function ProductPurchasePanel({ product }: ProductPurchasePanelProps) {
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const addItemToCart = useCartStore((s) => s.addItem);

  const toggleAddon = (addonId: string) => {
    setSelectedAddons((prev) =>
      prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]
    );
  };

  const addonTotal = product.frequentlyBoughtTogether
    .filter((item) => selectedAddons.includes(String(item.id)))
    .reduce((sum, item) => sum + Number(item.price), 0);

  const handleAddToCart = async () => {
    setIsAddedToCart(true);

    await addItemToCart({
      productId: String(product.id),
      name: product.name,
      image: product.image,
      price: Number(product.price),
      quantity,
    });

    for (const addonId of selectedAddons) {
      const addon = product.frequentlyBoughtTogether.find((a) => String(a.id) === addonId);
      if (addon) {
        await addItemToCart({
          productId: String(addon.id),
          name: addon.name,
          image: addon.image,
          price: Number(addon.price),
          quantity: 1,
        });
      }
    }

    message.success({ content: `Added ${product.name} to your shopping cart!`, duration: 2.5 });
    setTimeout(() => setIsAddedToCart(false), 3000);
  };

  const priceNum = Number(product.price);
  const origPriceNum = product.originalPrice ? Number(product.originalPrice) : undefined;
  const ratingNum = product.rating ? Number(product.rating) : 5.0;

  return (
    <div className="w-full space-y-6 select-none">
      {/* Brand & Subtitle Header */}
      <div className="space-y-2 border-b border-slate-100 pb-5">
        <div className="flex items-center justify-between gap-2">
          <span className="px-3 py-1 bg-sky-50 text-brand-primary font-label text-xs font-bold uppercase tracking-widest border border-sky-200">
            {product.brandSlug?.toUpperCase() || 'DERMALINE KOREA'}
          </span>
          <span className="font-label text-xs font-semibold text-slate-400">
            SKU: {product.sku}
          </span>
        </div>

        <h1 className="font-headline font-semibold text-2xl sm:text-3xl text-slate-900 leading-snug">
          {product.name}
        </h1>

        <p className="font-body text-xs sm:text-sm text-slate-600 leading-relaxed">
          {product.subtitle || product.subTitle}
        </p>

        {/* Rating & Review Summary */}
        <div className="flex items-center gap-3 pt-1">
          <div className="flex items-center text-amber-400 gap-0.5">
            {[...Array(5)].map((_, i) => (
              <StarFilled key={i} className="text-sm" />
            ))}
          </div>
          <span className="font-label text-xs font-bold text-slate-900">
            {ratingNum.toFixed(1)}
          </span>
          <span className="text-slate-300">|</span>
          <a href="#reviews" className="font-body text-xs text-slate-500 underline hover:text-brand-primary">
            {product.reviewCount || product.reviewsCount || 100} Verified Clinic Reviews
          </a>
        </div>
      </div>

      {/* Pricing Row */}
      <div className="bg-slate-50/80 p-4 border border-slate-200/80 rounded-none sm:rounded-sm space-y-1">
        <div className="flex items-baseline gap-3">
          <span className="font-headline font-bold text-3xl text-slate-900">
            USD ${priceNum.toFixed(2)}
          </span>
          {origPriceNum && origPriceNum > priceNum && (
            <span className="font-body text-sm text-slate-400 line-through">
              USD ${origPriceNum.toFixed(2)}
            </span>
          )}
          {origPriceNum && origPriceNum > priceNum && (
            <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-label font-bold uppercase">
              SAVE {(100 - (priceNum / origPriceNum) * 100).toFixed(0)}%
            </span>
          )}
        </div>
        <p className="font-body text-xs text-slate-500">
          Earn <strong className="text-brand-primary">${product.rewardPoints}</strong> reward points (5% Clinic Cashback)
        </p>
      </div>

      {/* Capacity & Skin Type Badges */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-label font-bold text-slate-700 uppercase tracking-wider">
          <span>Capacity:</span>
          <span className="px-2.5 py-1 bg-white border border-slate-300 text-slate-900">
            {product.capacity}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          <span className="text-xs font-label text-slate-400 font-bold uppercase tracking-wider mr-1">
            Skin Suitability:
          </span>
          {product.skinTypes.map((st, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[11px] font-body rounded-none sm:rounded-xs"
            >
              {st}
            </span>
          ))}
        </div>
      </div>

      {/* Buy Together (Add-on Package) Section */}
      {product.frequentlyBoughtTogether.length > 0 && (
        <div className="border border-sky-100 bg-sky-50/40 p-4 rounded-none sm:rounded-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-label text-xs font-bold text-slate-900 uppercase tracking-wider">
              Frequently Bought Together (Save Extra)
            </span>
            <span className="text-[11px] font-label text-brand-primary font-bold">
              +ADD TO ROUTINE
            </span>
          </div>

          <div className="space-y-2.5">
            {product.frequentlyBoughtTogether.map((item) => {
              const itemIdStr = String(item.id);
              const isChecked = selectedAddons.includes(itemIdStr);

              return (
                <div
                  key={itemIdStr}
                  onClick={() => toggleAddon(itemIdStr)}
                  className={`flex items-center justify-between gap-3 p-3 bg-white border transition-all cursor-pointer rounded-none sm:rounded-xs ${
                    isChecked ? 'border-brand-primary shadow-2xs' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <GCheckbox
                    checked={isChecked}
                    onChange={() => toggleAddon(itemIdStr)}
                    className="font-body text-xs text-slate-800 font-semibold"
                  >
                    <span className="line-clamp-1">{item.name}</span>
                  </GCheckbox>

                  <span className="font-headline text-xs font-bold text-slate-900 shrink-0">
                    +${Number(item.price).toFixed(2)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Quantity & CTA Action Buttons */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-3">
          {/* Quantity Counter */}
          <div className="flex items-center border border-slate-300 rounded-none sm:rounded-xs bg-white">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="p-3 text-slate-600 hover:text-brand-primary transition-colors cursor-pointer"
            >
              <MinusOutlined className="text-xs" />
            </button>
            <span className="px-4 font-headline font-bold text-sm text-slate-900 min-w-[36px] text-center">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity((q) => q + 1)}
              className="p-3 text-slate-600 hover:text-brand-primary transition-colors cursor-pointer"
            >
              <PlusOutlined className="text-xs" />
            </button>
          </div>

          {/* Add to Cart Primary Button */}
          <GButton
            type="primary"
            size="large"
            onClick={handleAddToCart}
            className={`flex-1 !h-12 !font-label !font-bold !text-xs sm:!text-sm uppercase tracking-wider transition-all duration-300 ${
              isAddedToCart
                ? '!bg-emerald-600 hover:!bg-emerald-700'
                : '!bg-slate-900 hover:!bg-brand-primary'
            }`}
          >
            {isAddedToCart ? (
              <span className="flex items-center justify-center gap-2">
                <CheckOutlined className="text-base" /> ADDED TO CART (USD ${(priceNum * quantity + addonTotal).toFixed(2)})
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <ShoppingCartOutlined className="text-base" /> ADD TO CART • USD ${(priceNum * quantity + addonTotal).toFixed(2)}
              </span>
            )}
          </GButton>

          {/* Wishlist Button */}
          <GButton
            type="outline"
            size="large"
            onClick={() => {
              setIsWishlisted(!isWishlisted);
              message.success(isWishlisted ? 'Removed from wishlist' : 'Saved to your clinic wishlist');
            }}
            className={`!w-12 !h-12 !p-0 flex items-center justify-center border transition-all ${
              isWishlisted
                ? '!border-red-300 !bg-red-50 !text-red-600'
                : '!border-slate-300 hover:!border-slate-400 !bg-white !text-slate-700'
            }`}
          >
            {isWishlisted ? (
              <HeartFilled className="text-base text-red-600" />
            ) : (
              <HeartOutlined className="text-base" />
            )}
          </GButton>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100 text-center">
        <div className="space-y-1 p-2">
          <CarOutlined className="text-xl text-brand-primary block mx-auto" />
          <span className="font-label text-[11px] font-bold text-slate-800 uppercase block">
            Express Shipping
          </span>
          <span className="font-body text-[10px] text-slate-400 block">Worldwide EMS</span>
        </div>

        <div className="space-y-1 p-2">
          <SafetyCertificateOutlined className="text-xl text-brand-primary block mx-auto" />
          <span className="font-label text-[11px] font-bold text-slate-800 uppercase block">
            100% Authentic
          </span>
          <span className="font-body text-[10px] text-slate-400 block">Dermaline Hospital</span>
        </div>

        <div className="space-y-1 p-2">
          <SyncOutlined className="text-xl text-brand-primary block mx-auto" />
          <span className="font-label text-[11px] font-bold text-slate-800 uppercase block">
            Dermatest Certified
          </span>
          <span className="font-body text-[10px] text-slate-400 block">5-Star Safety</span>
        </div>
      </div>
    </div>
  );
}
