'use client';

import React from 'react';
import { Dropdown as AntdDropdown, DropdownProps as AntdDropdownProps } from 'antd';

export interface GDropdownProps extends AntdDropdownProps {
  children: React.ReactNode;
}

export default function GDropdown({ children, ...props }: GDropdownProps) {
  return (
    <AntdDropdown
      placement="bottomLeft"
      arrow={{ pointAtCenter: true }}
      {...props}
    >
      {children}
    </AntdDropdown>
  );
}
