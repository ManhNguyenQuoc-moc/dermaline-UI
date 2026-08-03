'use client';

import React, { useState } from 'react';
import ImageWithSkeleton from '@/components/common/ImageWithSkeleton';
import ImageMagnifier from '@/components/common/ImageMagnifier';
import { Modal } from 'antd';
import { ZoomInOutlined, TrophyOutlined, CrownOutlined } from '@/@core/component/Antd/Icons';

interface ProductGalleryProps {
  images: string[];
  productName: string;
  tag?: string;
  isBest?: boolean;
}

export default function ProductGallery({
  images,
  productName,
  tag = 'USA COSTCO FEATURED',
  isBest = true,
}: ProductGalleryProps) {
  const [activeImage, setActiveImage] = useState(images[0] || '');
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4 sm:gap-6 w-full select-none">
      {/* Thumbnail Bar */}
      <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto shrink-0 pb-2 lg:pb-0">
        {images.map((img, idx) => {
          const isActive = activeImage === img;

          return (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveImage(img)}
              className={`relative w-16 h-16 sm:w-20 sm:h-20 border rounded-none sm:rounded-sm overflow-hidden transition-all shrink-0 cursor-pointer ${
                isActive
                  ? 'border-brand-primary ring-2 ring-brand-primary/20 shadow-xs'
                  : 'border-slate-200 hover:border-slate-300 opacity-70 hover:opacity-100'
              }`}
            >
              <ImageWithSkeleton
                src={img}
                alt={`${productName} thumbnail ${idx + 1}`}
                containerClassName="w-full h-full"
                className="w-full h-full object-cover"
              />
            </button>
          );
        })}
      </div>

      {/* Main Image Container (WITHOUT overflow-hidden so flyout zoom window can float freely) */}
      <div className="relative flex-1 w-full aspect-square bg-slate-50 border border-slate-200/90 rounded-none sm:rounded-sm group shadow-2xs">
        <ImageMagnifier
          src={activeImage}
          alt={productName}
          zoomLevel={2.5}
          containerClassName="w-full h-full rounded-none sm:rounded-sm"
        />

        {/* Top Badges with Ant Design Icons */}
        <div className="absolute top-4 left-4 z-10 flex flex-col items-start gap-2 pointer-events-none">
          {tag && (
            <span className="px-3 py-1 bg-slate-900/90 backdrop-blur-md text-white text-[11px] font-label font-bold uppercase tracking-wider rounded-none sm:rounded-sm shadow-xs flex items-center gap-1.5">
              <TrophyOutlined className="text-amber-400" />
              <span>{tag}</span>
            </span>
          )}

          {isBest && (
            <span className="px-3 py-1 bg-brand-primary/90 backdrop-blur-md text-white text-[11px] font-label font-bold uppercase tracking-wider rounded-none sm:rounded-sm shadow-xs flex items-center gap-1.5">
              <CrownOutlined className="text-white" />
              <span>CLINICAL BEST</span>
            </span>
          )}
        </div>

        {/* Bottom Hover Hint & Lightbox Button */}
        <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
          <span className="hidden sm:inline-block px-3 py-1 bg-white/90 backdrop-blur-md text-slate-700 text-[10px] font-label font-bold uppercase tracking-wider border border-slate-200 pointer-events-none shadow-2xs">
            HOVER TO ZOOM SIDE PREVIEW
          </span>
          <button
            type="button"
            onClick={() => setIsZoomModalOpen(true)}
            className="p-2.5 bg-white/90 backdrop-blur-md border border-slate-200 text-slate-700 hover:text-brand-primary rounded-full shadow-md transition-all cursor-pointer hover:scale-110 flex items-center justify-center"
            title="Expand Fullscreen"
          >
            <ZoomInOutlined className="text-base" />
          </button>
        </div>
      </div>

      {/* Lightbox Zoom Modal */}
      {isZoomModalOpen && (
        <Modal
          open={isZoomModalOpen}
          onCancel={() => setIsZoomModalOpen(false)}
          footer={null}
          centered
          width={720}
          className="[&_.ant-modal-content]:!p-0 [&_.ant-modal-content]:!rounded-none [&_.ant-modal-content]:!overflow-hidden"
        >
          <div className="relative w-full aspect-square bg-slate-900 flex items-center justify-center p-4">
            <ImageWithSkeleton
              src={activeImage}
              alt={productName}
              containerClassName="w-full h-full"
              className="w-full h-full object-contain"
            />
          </div>
        </Modal>
      )}
    </div>
  );
}
