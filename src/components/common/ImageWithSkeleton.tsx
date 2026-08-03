'use client';

import React, { useState, useEffect } from 'react';

export interface ImageWithSkeletonProps {
  src: string;
  alt?: string;
  className?: string;
  containerClassName?: string;
  skeletonClassName?: string;
  fallbackSrc?: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  width?: number;
  height?: number;
  onLoad?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  [key: string]: any;
}

const DEFAULT_FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=80';

export default function ImageWithSkeleton({
  src,
  alt = '',
  className = '',
  containerClassName = '',
  skeletonClassName = '',
  fallbackSrc = DEFAULT_FALLBACK_IMAGE,
  fill = false,
  priority = false,
  sizes,
  width,
  height,
  onLoad,
  onError,
  ...props
}: ImageWithSkeletonProps) {
  const [imgSrc, setImgSrc] = useState<string>(src || DEFAULT_FALLBACK_IMAGE);

  useEffect(() => {
    if (src) {
      setImgSrc(src);
    }
  }, [src]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
    onError?.(e);
  };

  return (
    <div className={`relative overflow-hidden ${fill ? 'w-full h-full' : ''} ${containerClassName}`}>
      <img
        src={imgSrc}
        alt={alt}
        onError={handleImageError}
        onLoad={onLoad}
        className={`w-full h-full object-cover ${className}`}
        {...props}
      />
    </div>
  );
}
