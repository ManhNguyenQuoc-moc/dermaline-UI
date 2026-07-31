'use client';

import React from 'react';
import { Tabs as AntdTabs, TabsProps as AntdTabsProps } from 'antd';

export interface GTabsProps extends AntdTabsProps {
  className?: string;
}

export default function GTabs({ className = '', ...props }: GTabsProps) {
  return (
    <AntdTabs
      className={`font-label ${className}`}
      {...props}
    />
  );
}
