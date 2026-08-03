'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import WishlistHero from '@/components/wishlist/WishlistHero';
import ProductCard from '@/components/common/ProductCard';
import ScrollReveal from '@/components/common/ScrollReveal';
import { GButton, GEmpty } from '@/@core/component/Antd';
import { DeleteOutlined } from '@/@core/component/Antd/Icons';
import { useWishlistStore } from '@/store/useWishlistStore';
import { useTranslation } from '@/i18n/useTranslation';
import { message } from 'antd';

export default function WishlistPage() {
  const router = useRouter();
  const { items: wishlistItems, clearWishlist } = useWishlistStore();
  const { t } = useTranslation();

  return (
    <main className="w-full min-h-screen bg-white select-none pt-24 sm:pt-28 pb-20">
      {/* 1. Unified Hero Header Banner */}
      <WishlistHero totalCount={wishlistItems.length} />

      {/* 2. Main Content Grid with Unified ProductCard */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        {wishlistItems.length > 0 && (
          <div className="flex justify-end pb-6">
            <GButton
              onClick={() => {
                clearWishlist();
                message.info(t.wishlist.clearAll);
              }}
              className="!h-10 !border-slate-300 hover:!border-red-300 hover:!text-red-600 flex items-center gap-2 font-label text-xs font-bold uppercase"
            >
              <DeleteOutlined />
              <span>{t.wishlist.clearAll}</span>
            </GButton>
          </div>
        )}

        {wishlistItems.length === 0 ? (
          <div className="py-16 text-center">
            {/* Single Clean GEmpty Component */}
            <GEmpty
              title={t.wishlist.emptyTitle}
              description={t.wishlist.emptyDesc}
              actionText={t.wishlist.exploreButton}
              onAction={() => router.push('/products')}
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {wishlistItems.map((product, idx) => (
              <ScrollReveal
                key={product.id}
                variant="fade-up"
                delay={100 + (idx % 3) * 100}
                duration={750}
                className="h-full"
              >
                <ProductCard
                  product={{
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    originalPrice: product.originalPrice,
                    image: product.image,
                    categoryTag: product.category || 'PDRN CARE',
                    tag: product.tag,
                    subtitle: product.subtitle || product.subTitle,
                    line: product.line,
                  }}
                />
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
