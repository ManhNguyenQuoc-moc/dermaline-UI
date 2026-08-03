'use client';

import React from 'react';
import { Button as AntdButton, ButtonProps as AntdButtonProps } from 'antd';
import styles from './Button.module.css';

export interface GButtonProps extends Omit<AntdButtonProps, 'type'> {
  type?: AntdButtonProps['type'] | 'outline';
  className?: string;
  children?: React.ReactNode;
}

export default function GButton({ className = '', children, type = 'default', ...props }: GButtonProps) {
  const isPrimary = type === 'primary';
  const antdType = type === 'outline' ? 'default' : type;

  return (
    <AntdButton
      type={antdType}
      className={`${styles.gButton} ${isPrimary ? styles.gButtonPrimary : ''} ${className}`}
      {...props}
    >
      {children}
    </AntdButton>
  );
}
