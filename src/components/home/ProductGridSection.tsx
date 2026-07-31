'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ProductItem } from '@/services/customer/home/models/home.model';
import { ArrowRight, ShoppingBag, Heart, Check } from 'lucide-react';
import { message } from 'antd';
import ScrollReveal from '@/components/common/ScrollReveal';

export interface ProductGridSectionProps {
  products?: ProductItem[];
}

export default function ProductGridSection({ products = [] }: ProductGridSectionProps) {
  const [favorites, setFavorites] = useState<Record<number, boolean>>({});
  const [addedItems, setAddedItems] = useState<Record<number, boolean>>({});

  if (!products || products.length === 0) return null;

  const toggleFavorite = (e: React.MouseEvent, id: number, name: string) => {
    e.preventDefault();
    e.stopPropagation();
    const isFav = !favorites[id];
    setFavorites((prev) => ({ ...prev, [id]: isFav }));
    if (isFav) {
      message.success({ content: `Saved "${name}" to your wishlist!`, duration: 2 });
    }
  };

  const handleAddToCart = (e: React.MouseEvent, id: number, name: string) => {
    e.preventDefault();
    e.stopPropagation();
    setAddedItems((prev) => ({ ...prev, [id]: true }));
    message.success({ content: `Added "${name}" to your shopping cart!`, duration: 2.5 });
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [id]: false }));
    }, 2000);
  };

  return (
    <section className="relative w-full bg-white py-10 sm:py-12 lg:py-14 border-t border-slate-200/70 overflow-hidden select-none">
      {/* Background Soft Studio Ambient Glow */}
      <div className="absolute top-1/3 left-0 w-[550px] h-[550px] bg-sky-100/40 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header Row - Outer Left Entrance */}
        <ScrollReveal variant="slide-left" delay={100} duration={850}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-8 sm:mb-10 border-b border-slate-200/60">
            <div className="space-y-1">
              <span className="text-brand-primary text-xs sm:text-sm font-label font-bold tracking-[1.4px] uppercase block">
                ALL PRODUCTS SELECTION
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-[40px] font-semibold text-slate-900 tracking-tight leading-tight">
                Dermaline Skincare Collection
              </h2>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 font-label text-sm font-semibold text-brand-primary hover:text-sky-700 tracking-[0.7px] transition-colors group shrink-0"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        {/* 3 Columns x 3 Rows = 9 Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {products.slice(0, 9).map((product, idx) => {
            const isFav = !!favorites[product.id];
            const isAdded = !!addedItems[product.id];

            const col = idx % 3;
            const variant = col === 0 ? 'slide-left' : col === 1 ? 'fade-up' : 'slide-right';
            const delay = 150 + Math.floor(idx / 3) * 120 + col * 90;

            return (
              <ScrollReveal key={product.id} variant={variant} delay={delay} duration={850} className="h-full">
                <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:border-brand-primary/60 transition-all duration-500 flex flex-col justify-between group h-full relative">
                  {/* Product Image Box */}
                  <Link href={`/product/${product.id}`} className="block relative w-full overflow-hidden bg-slate-50 shrink-0">
                    <div className="h-[260px] sm:h-[300px] lg:h-[320px] w-full relative flex items-center justify-center p-5">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-slate-950/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                      {/* Top Left Tag Badge */}
                      {product.tag && (
                        <div className="absolute top-4 left-4 z-20">
                          <span
                            className={`inline-block text-[10px] font-label font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs ${
                              product.tag === 'NEW'
                                ? 'bg-brand-primary text-white'
                                : 'bg-slate-900 text-white'
                            }`}
                          >
                            {product.tag}
                          </span>
                        </div>
                      )}

                      {/* Top Right Favorite Button */}
                      <button
                        type="button"
                        onClick={(e) => toggleFavorite(e, product.id, product.name)}
                        aria-label="Add to Wishlist"
                        className={`absolute top-4 right-4 z-20 p-2.5 rounded-full backdrop-blur-md shadow-sm transition-all duration-300 active:scale-[0.92] ${
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
                        {product.category}
                      </span>
                      <Link href={`/product/${product.id}`} className="block">
                        <h3 className="font-headline font-semibold text-base sm:text-lg text-slate-900 group-hover:text-brand-primary transition-colors line-clamp-2 leading-snug">
                          {product.name}
                        </h3>
                      </Link>
                    </div>

                    {/* Price Row */}
                    <div className="flex items-baseline gap-2 pt-1">
                      <span className="font-headline font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="font-label text-xs sm:text-sm text-slate-400 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      type="button"
                      onClick={(e) => handleAddToCart(e, product.id, product.name)}
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
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
