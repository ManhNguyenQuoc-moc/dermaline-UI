'use client';

import React, { useState } from 'react';
import ImageWithSkeleton from './ImageWithSkeleton';

interface ImageMagnifierProps {
  src: string;
  alt?: string;
  zoomLevel?: number;
  className?: string;
  containerClassName?: string;
}

export default function ImageMagnifier({
  src,
  alt = '',
  zoomLevel = 2.5,
  className = '',
  containerClassName = '',
}: ImageMagnifierProps) {
  const [showZoom, setShowZoom] = useState(false);
  const [{ x, y, xRatio, yRatio }, setPosition] = useState({
    x: 0,
    y: 0,
    xRatio: 0,
    yRatio: 0,
  });

  const lensWidth = 140;
  const lensHeight = 140;

  const handleMouseEnter = () => {
    setShowZoom(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const elem = e.currentTarget;
    const { top, left, width, height } = elem.getBoundingClientRect();

    let mouseX = e.clientX - left;
    let mouseY = e.clientY - top;

    let lensX = Math.max(lensWidth / 2, Math.min(width - lensWidth / 2, mouseX));
    let lensY = Math.max(lensHeight / 2, Math.min(height - lensHeight / 2, mouseY));

    const xRatio = (lensX - lensWidth / 2) / (width - lensWidth);
    const yRatio = (lensY - lensHeight / 2) / (height - lensHeight);

    setPosition({
      x: lensX - lensWidth / 2,
      y: lensY - lensHeight / 2,
      xRatio,
      yRatio,
    });
  };

  const handleMouseLeave = () => {
    setShowZoom(false);
  };

  const previewBoxSize = 520;
  const zoomedImageWidth = previewBoxSize * zoomLevel;
  const zoomedImageHeight = previewBoxSize * zoomLevel;

  const translateX = -xRatio * (zoomedImageWidth - previewBoxSize);
  const translateY = -yRatio * (zoomedImageHeight - previewBoxSize);

  return (
    <div className="relative w-full h-full">
      {/* Main Image Container */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`relative w-full h-full overflow-hidden cursor-crosshair ${containerClassName}`}
      >
        <ImageWithSkeleton
          src={src}
          alt={alt}
          containerClassName="w-full h-full"
          className={`w-full h-full object-cover object-center ${className}`}
        />

        {/* Translucent Highlight Lens Box */}
        {showZoom && (
          <div
            style={{
              position: 'absolute',
              top: `${y}px`,
              left: `${x}px`,
              width: `${lensWidth}px`,
              height: `${lensHeight}px`,
              pointerEvents: 'none',
            }}
            className="bg-sky-400/25 border border-brand-primary/60 shadow-xs z-20"
          />
        )}
      </div>

      {/* Side Flyout Zoom Window (Pure White Background, No Border, Clean Zoom View) */}
      {showZoom && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 'calc(100% + 20px)',
            width: `${previewBoxSize}px`,
            height: `${previewBoxSize}px`,
            zIndex: 100,
          }}
          className="hidden lg:block bg-white shadow-2xl rounded-none sm:rounded-sm overflow-hidden pointer-events-none"
        >
          {/* Zoomed Image Container */}
          <div className="relative w-full h-full overflow-hidden bg-white">
            <img
              src={src}
              alt={alt}
              style={{
                width: `${zoomedImageWidth}px`,
                height: `${zoomedImageHeight}px`,
                maxWidth: 'none',
                maxHeight: 'none',
                transform: `translate(${translateX}px, ${translateY}px)`,
              }}
              className="object-cover transition-transform duration-75 ease-out"
            />
          </div>
        </div>
      )}
    </div>
  );
}
