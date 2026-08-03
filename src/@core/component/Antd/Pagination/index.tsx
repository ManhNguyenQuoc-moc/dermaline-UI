'use client';

import React from 'react';
import { Pagination as AntdPagination, PaginationProps as AntdPaginationProps } from 'antd';

export interface GPaginationProps extends AntdPaginationProps {
  className?: string;
}

export default function GPagination({
  current = 1,
  pageSize = 9,
  total = 0,
  onChange,
  className = '',
  showSizeChanger = false,
  ...props
}: GPaginationProps) {
  return (
    <div className={`flex items-center justify-center py-6 select-none ${className}`}>
      <AntdPagination
        current={current}
        pageSize={pageSize}
        total={total}
        onChange={onChange}
        showSizeChanger={showSizeChanger}
        className="font-label font-bold text-xs sm:text-sm [&_.ant-pagination-item]:!border-slate-200 [&_.ant-pagination-item]:!rounded-none sm:[&_.ant-pagination-item]:!rounded-sm [&_.ant-pagination-item]:!transition-colors [&_.ant-pagination-item-active]:!bg-brand-primary [&_.ant-pagination-item-active]:!border-brand-primary [&_.ant-pagination-item-active_a]:!text-white [&_.ant-pagination-prev_.ant-pagination-item-link]:!rounded-none sm:[&_.ant-pagination-prev_.ant-pagination-item-link]:!rounded-sm [&_.ant-pagination-next_.ant-pagination-item-link]:!rounded-none sm:[&_.ant-pagination-next_.ant-pagination-item-link]:!rounded-sm"
        {...props}
      />
    </div>
  );
}
