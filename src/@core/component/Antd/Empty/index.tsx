'use client';

import React from 'react';
import { Empty as AntdEmpty } from 'antd';
import GButton from '../Button';
import styles from './Empty.module.css';

export interface GEmptyProps {
  title?: string;
  description?: string;
  actionText?: string;
  onAction?: () => void;
  className?: string;
}

export default function GEmpty({
  title = 'No Data Available',
  description = 'There are no items to display at this moment.',
  actionText,
  onAction,
  className = '',
}: GEmptyProps) {
  return (
    <div className={`${styles.gEmptyContainer} ${className}`}>
      <AntdEmpty description={false} />
      <h3 className={styles.gEmptyTitle}>{title}</h3>
      <p className={styles.gEmptyDescription}>{description}</p>

      {actionText && onAction && (
        <GButton
          type="primary"
          onClick={onAction}
          className="mt-6 !h-11 !px-6"
        >
          {actionText}
        </GButton>
      )}
    </div>
  );
}
