'use client';

import React from 'react';
import { Button as AntdButton, ButtonProps as AntdButtonProps } from 'antd';

export interface GButtonProps extends Omit<AntdButtonProps, 'type' | 'size'> {
  type?: 'primary' | 'default' | 'dashed' | 'link' | 'text' | 'outline' | 'gold' | 'ghost';
  variantType?: 'primary' | 'outline' | 'gold' | 'ghost';
  size?: 'large' | 'middle' | 'small' | 'md';
  children?: React.ReactNode;
}

export default function GButton({
  children,
  type = 'primary',
  variantType,
  size = 'middle',
  className = '',
  ...props
}: GButtonProps) {
  const buttonSize = size === 'md' ? 'middle' : size;
  let customClassName = className;
  let antdType: AntdButtonProps['type'] = 'primary';

  const selectedVariant = variantType || (['outline', 'gold', 'ghost'].includes(type) ? (type as any) : undefined);

  if (selectedVariant === 'outline') {
    antdType = 'default';
    customClassName += ' !border-border-subtle !text-text-primary hover:!border-brand-primary hover:!text-brand-primary font-label font-medium';
  } else if (selectedVariant === 'gold') {
    antdType = 'primary';
    customClassName += ' !bg-[#D4AF37] !border-[#D4AF37] !text-white hover:!bg-[#C5A028] font-label font-medium';
  } else if (selectedVariant === 'ghost') {
    antdType = 'text';
    customClassName += ' !text-text-secondary hover:!text-brand-primary font-label font-medium';
  } else if (type === 'primary') {
    antdType = 'primary';
    customClassName += ' !bg-brand-primary !border-brand-primary !text-white hover:!bg-brand-primary-hover font-label font-medium';
  } else {
    antdType = type as AntdButtonProps['type'];
  }

  return (
    <AntdButton
      type={antdType}
      size={buttonSize}
      className={`transition-all duration-200 ${customClassName}`}
      {...props}
    >
      {children}
    </AntdButton>
  );
}
