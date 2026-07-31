'use client';

import React from 'react';
import { Pagination as AntdPagination, PaginationProps as AntdPaginationProps } from 'antd';

export interface PaginationBarProps extends AntdPaginationProps {
  className?: string;
}

export default function PaginationBar({ className = '', ...props }: PaginationBarProps) {
  return (
    <div className={`flex justify-center py-4 ${className}`}>
      <AntdPagination
        showSizeChanger
        showQuickJumper
        {...props}
      />
    </div>
  );
}
