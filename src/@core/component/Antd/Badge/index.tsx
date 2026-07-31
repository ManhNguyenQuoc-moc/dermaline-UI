'use client';

import React from 'react';
import { Tag as AntdTag, TagProps as AntdTagProps } from 'antd';

export interface GBadgeProps extends Omit<AntdTagProps, 'variant'> {
  variant?: 'gold' | 'dark' | 'outline' | 'soft' | 'primary';
  children?: React.ReactNode;
}

export default function GBadge({
  children,
  variant = 'soft',
  className = '',
  ...props
}: GBadgeProps) {
  let variantClass = '';

  switch (variant) {
    case 'gold':
      variantClass = 'bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 font-label font-semibold tracking-wider uppercase px-3 py-1 rounded-full';
      break;
    case 'dark':
      variantClass = 'bg-brand-secondary text-white border-none font-label font-medium tracking-wide uppercase px-3 py-1 rounded-md';
      break;
    case 'outline':
      variantClass = 'bg-transparent text-brand-secondary border border-border-default font-label font-medium tracking-wide px-3 py-1 rounded-md';
      break;
    case 'primary':
      variantClass = 'bg-brand-primary text-white border-none font-label font-semibold tracking-wide uppercase px-3 py-1 rounded-md';
      break;
    case 'soft':
    default:
      variantClass = 'bg-brand-primary-alpha text-brand-secondary border-none font-label font-semibold tracking-wider text-xs px-3 py-1 rounded-md';
      break;
  }

  return (
    <AntdTag
      className={`inline-flex items-center justify-center transition-all ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </AntdTag>
  );
}
