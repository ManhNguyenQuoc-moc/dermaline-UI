'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, Heart, Check } from 'lucide-react';
import { message } from 'antd';
import ImageWithSkeleton from '@/components/common/ImageWithSkeleton';
import { useCartStore } from '@/store/useCartStore';
import { useWishlistStore } from '@/store/useWishlistStore';
import { useTranslation } from '@/i18n/useTranslation';

export interface ProductCardData {
  id: number | string;
  name: string;
  price: string | number;
  originalPrice?: string | number;
  image: string;
  categoryTag?: string;
  category?: string;
  tag?: string;
  subtitle?: string;
  subTitle?: string;
  line?: string;
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
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const addItemToCart = useCartStore((s) => s.addItem);
  const { t } = useTranslation();

  // Dynamic Product Name & Subtitle Localization
  const localizedInfo = (t.productNames as any)?.[product.id];
  const productName = localizedInfo?.name || product.name;

  // Zustand Wishlist Store Integration
  const isInWishlist = useWishlistStore((s) => s.isInWishlist);
  const toggleWishlistStore = useWishlistStore((s) => s.toggleItem);
  const isFav = isInWishlist(String(product.id));

  // Product Tag Rule: Only "NEW" tag or nothing!
  const isNewTag = product.tag === 'NEW';

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const numericPrice =
      typeof product.price === 'number'
        ? product.price
        : parseFloat(String(product.price).replace(/[^0-9.]/g, '')) || 38.0;

    const numericOrigPrice =
      typeof product.originalPrice === 'number'
        ? product.originalPrice
        : product.originalPrice
        ? parseFloat(String(product.originalPrice).replace(/[^0-9.]/g, '')) || 0
        : 0;

    toggleWishlistStore({
      id: String(product.id),
      name: productName,
      subtitle: localizedInfo?.subtitle || product.subtitle || product.subTitle || '',
      category: product.categoryTag || product.category || 'PDRN CARE',
      line: product.line || 'DERMALINE',
      price: numericPrice,
      originalPrice: numericOrigPrice,
      rating: 4.9,
      reviewCount: 120,
      image: product.image,
      tag: isNewTag ? 'NEW' : undefined,
    });

    const nextFav = !isFav;
    onToggleWishlist?.(product, nextFav);

    if (nextFav) {
      message.success({ content: t.products.savedToWishlist.replace('{name}', productName), duration: 2 });
    } else {
      message.info({ content: t.products.removedFromWishlist.replace('{name}', productName), duration: 2 });
    }
  };

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdded(true);

    const numericPrice =
      typeof product.price === 'number'
        ? product.price
        : parseFloat(String(product.price).replace(/[^0-9.]/g, '')) || 38.0;

    const numericOrigPrice =
      typeof product.originalPrice === 'number'
        ? product.originalPrice
        : product.originalPrice
        ? parseFloat(String(product.originalPrice).replace(/[^0-9.]/g, '')) || undefined
        : undefined;

    await addItemToCart({
      productId: String(product.id),
      name: productName,
      image: product.image,
      price: numericPrice,
      originalPrice: numericOrigPrice,
      quantity: 1,
    });

    onAddToCart?.(product);
    message.success({ content: t.products.addedToCartMsg.replace('{name}', productName), duration: 2.5 });
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  const formatPriceString = (val?: string | number) => {
    if (val === undefined || val === null || val === '') return null;
    if (typeof val === 'number') return `$${val.toFixed(2)}`;
    return String(val).startsWith('$') ? String(val) : `$${val}`;
  };

  const displayPrice = formatPriceString(product.price);
  const displayOriginalPrice = formatPriceString(product.originalPrice);

  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:border-brand-primary/60 transition-all duration-500 flex flex-col justify-between group h-full relative select-none">
      {/* Product Image Box */}
      <Link href={`/product/${product.id}`} className="block relative w-full overflow-hidden bg-slate-50 shrink-0">
        <div className="h-[260px] sm:h-[300px] lg:h-[320px] w-full relative flex items-center justify-center p-5">
          <ImageWithSkeleton
            src={product.image}
            alt={productName}
            containerClassName="w-full h-full flex items-center justify-center"
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-700 drop-shadow-md"
          />
          <div className="absolute inset-0 bg-slate-950/5 opacity-0 group-hover:opacity-100 transition-opacity" />

          {/* Top Left Tag Badge: ONLY "NEW" OR NOTHING */}
          {isNewTag && (
            <div className="absolute top-4 left-4 z-20">
              <span className="inline-block text-[10px] font-label font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs bg-brand-primary text-white">
                NEW
              </span>
            </div>
          )}

          {/* Top Right Favorite Button */}
          <button
            type="button"
            onClick={toggleFavorite}
            aria-label="Add to Wishlist"
            className={`absolute top-4 right-4 z-20 p-2.5 rounded-full backdrop-blur-md shadow-sm transition-all duration-300 active:scale-[0.92] cursor-pointer ${
              isFav
                ? 'bg-rose-50 text-rose-500 border border-rose-200'
                : 'bg-white/90 text-slate-400 hover:text-rose-500 hover:bg-white border border-slate-200/60'
            }`}
          >
            <Heart className={`w-4 h-4 transition-colors ${isFav ? 'fill-rose-500 text-rose-500' : ''}`} />
          </button>
        </div>
      </Link>

      {/* Card Body Info & Add to Cart Button */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 space-y-4 bg-white border-t border-slate-100">
        <div className="space-y-1.5">
          <span className="text-brand-primary font-label font-bold text-xs tracking-wider uppercase block">
            {product.categoryTag || product.category || product.line || 'DERMALINE'}
          </span>
          <Link href={`/product/${product.id}`} className="block">
            <h3 className="font-headline font-semibold text-base sm:text-lg text-slate-900 group-hover:text-brand-primary transition-colors line-clamp-2 leading-snug">
              {productName}
            </h3>
          </Link>
        </div>

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
              <span>{t.products.addedToCart}</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-4 h-4 text-white" />
              <span>{t.products.addToCart}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
