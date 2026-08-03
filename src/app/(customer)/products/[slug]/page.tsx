'use client';

import React, { use, useState, useEffect, useCallback } from 'react';
import ProductGallery from '@/components/product-detail/ProductGallery';
import ProductPurchasePanel from '@/components/product-detail/ProductPurchasePanel';
import ProductTabsSection from '@/components/product-detail/ProductTabsSection';
import RelatedProductsSection from '@/components/product-detail/RelatedProductsSection';
import GEmpty from '@/@core/component/Antd/Empty';
import {
  getProductDetailService,
  ProductDetailData,
} from '@/services/customer/product/detail.service';

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug || 'available-at-usa-costco-dlexo-nad-power-solution-bubble-toner-200ml';

  const [product, setProduct] = useState<ProductDetailData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchDetail = useCallback(async () => {
    setLoading(true);
    const data = await getProductDetailService(slug);
    setProduct(data);
    setLoading(false);
  }, [slug]);

  useEffect(() => {
    fetchDetail();
  }, [fetchDetail]);

  if (loading) {
    return (
      <main className="w-full min-h-screen bg-white select-none pt-28 pb-20 flex items-center justify-center">
        <div className="space-y-4 text-center">
          <div className="w-10 h-10 border-2 border-brand-primary border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="font-label text-xs font-bold text-slate-500 uppercase tracking-widest">
            LOADING DERMALINE CLINICAL FORMULA...
          </p>
        </div>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="w-full min-h-screen bg-white select-none pt-28 pb-20">
        <GEmpty
          title="Product Not Found"
          description="We couldn’t find the requested Dermaline clinical product."
          actionText="BROWSE ALL PRODUCTS"
          onAction={() => (window.location.href = '/products')}
        />
      </main>
    );
  }

  return (
    <main className="w-full min-h-screen bg-white select-none pt-24 sm:pt-28 pb-20">
      {/* Main Product Showcase Grid */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column (6 Cols): Product Image Gallery */}
          <div className="lg:col-span-6">
            <ProductGallery
              images={product.galleryImages}
              productName={product.name}
              tag={product.tag}
              isBest={product.isBest}
            />
          </div>

          {/* Right Column (6 Cols): Purchase & Pricing Panel */}
          <div className="lg:col-span-6">
            <ProductPurchasePanel product={product} />
          </div>
        </div>
      </section>

      {/* Product Description & Science Tabs Section */}
      <ProductTabsSection product={product} />

      {/* Complete Routine Related Products */}
      <RelatedProductsSection
        currentProductId={String(product.id)}
        brandSlug={product.brandSlug}
      />
    </main>
  );
}
