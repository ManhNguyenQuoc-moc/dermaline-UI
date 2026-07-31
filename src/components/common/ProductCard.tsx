'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, Check, Heart } from 'lucide-react';
import { message } from 'antd';

export interface ProductCardData {
  id: number | string;
  name: string;
  price: string | number;
  originalPrice?: string | number;
  image: string;
  categoryTag?: string;
  tag?: string;
  discountBadge?: string;
}

interface ProductCardProps {
  product: ProductCardData;
  onAddToCart?: (product: ProductCardData) => void;
  onToggleWishlist?: (product: ProductCardData, isFav: boolean) => void;
}

export default function ProductCard({
  product,
  onAddToCart,
  onToggleWishlist,
}: ProductCardProps) {
  const [isFav, setIsFav] = useState<boolean>(false);
  const [isAdded, setIsAdded] = useState<boolean>(false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const nextFav = !isFav;
    setIsFav(nextFav);
    onToggleWishlist?.(product, nextFav);
    if (nextFav) {
      message.success({ content: `Saved "${product.name}" to your wishlist!`, duration: 2 });
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdded(true);
    onAddToCart?.(product);
    message.success({ content: `Added "${product.name}" to your shopping cart!`, duration: 2.5 });
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  // Format price if numeric
  const displayPrice = typeof product.price === 'number' ? `$${product.price.toFixed(2)}` : product.price;
  const displayOriginalPrice =
    typeof product.originalPrice === 'number' ? `$${product.originalPrice.toFixed(2)}` : product.originalPrice;

  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs hover:shadow-xl hover:border-brand-primary/60 transition-all duration-500 flex flex-col justify-between group h-full relative select-none">
      {/* Product Image Pedestal Container */}
      <div className="relative w-full overflow-hidden bg-gradient-to-b from-slate-50/90 to-white rounded-xl mb-4 p-4 h-56 sm:h-60 flex items-center justify-center">
        <Link href={`/product/${product.id}`} className="w-full h-full flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full max-w-full object-contain group-hover:scale-108 transition-transform duration-700 drop-shadow-md"
          />
        </Link>

        {/* Favorite Heart Button Top Right */}
        <button
          type="button"
          onClick={toggleFavorite}
          aria-label="Add to Wishlist"
          className={`absolute top-3 right-3 z-10 p-2.5 rounded-full backdrop-blur-md shadow-2xs transition-all duration-300 active:scale-[0.92] cursor-pointer ${
            isFav
              ? 'bg-rose-50 text-rose-500 border border-rose-200'
              : 'bg-white/90 text-slate-400 hover:text-rose-500 hover:bg-white border border-slate-200/60'
          }`}
        >
          <Heart className={`w-4 h-4 transition-colors ${isFav ? 'fill-rose-500 text-rose-500' : ''}`} />
        </button>

        {/* Optional Tag Badges (Top Left) */}
        {(product.tag || product.discountBadge) && (
          <div className="absolute top-3 left-3 z-10 flex flex-col items-start gap-1 pointer-events-none">
            {product.tag && (
              <span className="px-2 py-0.5 bg-slate-900/90 text-white text-[9px] font-label font-extrabold uppercase tracking-wider rounded-md shadow-2xs">
                {product.tag}
              </span>
            )}
            {product.discountBadge && (
              <span className="px-2 py-0.5 bg-brand-primary text-white text-[9px] font-label font-extrabold uppercase tracking-wider rounded-md shadow-2xs">
                {product.discountBadge}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Minimal Card Content */}
      <div className="flex flex-col justify-between flex-1 space-y-4 pt-1">
        <Link href={`/product/${product.id}`} className="block">
          <h3 className="font-headline font-semibold text-base sm:text-lg text-slate-900 group-hover:text-brand-primary transition-colors line-clamp-2 leading-snug">
            {product.name}
          </h3>
        </Link>

        {/* Price Row */}
        <div className="flex items-baseline gap-2 pt-1">
          <span className="font-headline font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight">
            {displayPrice}
          </span>
          {displayOriginalPrice && (
            <span className="font-label text-xs sm:text-sm text-slate-400 line-through">
              {displayOriginalPrice}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          type="button"
          onClick={handleAddToCart}
          className={`w-full py-3 px-4 rounded-xl font-label font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 active:scale-[0.98] cursor-pointer shadow-xs ${
            isAdded
              ? 'bg-emerald-600 text-white'
              : 'bg-slate-950 hover:bg-brand-primary text-white shadow-slate-900/10'
          }`}
        >
          {isAdded ? (
            <>
              <Check className="w-4 h-4 text-white" />
              <span>ADDED TO CART</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-4 h-4 text-white" />
              <span>ADD TO CART</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
