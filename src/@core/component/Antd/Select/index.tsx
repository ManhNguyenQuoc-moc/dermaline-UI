'use client';

import React from 'react';
import { Select as AntdSelect, SelectProps as AntdSelectProps } from 'antd';

export interface GSelectProps extends AntdSelectProps {
  className?: string;
}

export default function GSelect({
  className = '',
  popupClassName = '',
  size = 'large',
  ...props
}: GSelectProps) {
  return (
    <AntdSelect
      size={size}
      className={`font-label text-xs sm:text-sm font-semibold rounded-none sm:rounded-sm [&_.ant-select-selector]:!border-slate-300 [&_.ant-select-selector]:!rounded-none [&_.ant-select-selector]:sm:!rounded-sm [&_.ant-select-selector]:!h-11 [&_.ant-select-selection-item]:!flex [&_.ant-select-selection-item]:!items-center ${className}`}
      popupClassName={`font-label text-xs sm:text-sm ${popupClassName}`}
      {...props}
    />
  );
}
