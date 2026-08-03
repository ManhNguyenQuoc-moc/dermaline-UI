'use client';

import React from 'react';
import { Tabs as AntdTabs, TabsProps as AntdTabsProps } from 'antd';
import styles from './Tabs.module.css';

export interface GTabsProps extends AntdTabsProps {
  className?: string;
}

export default function GTabs({ className = '', ...props }: GTabsProps) {
  return <AntdTabs className={`${styles.gTabs} ${className}`} {...props} />;
}
