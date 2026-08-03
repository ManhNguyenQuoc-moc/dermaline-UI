'use client';

import React from 'react';
import { Checkbox as AntdCheckbox, CheckboxProps as AntdCheckboxProps } from 'antd';
import styles from './Checkbox.module.css';

export interface GCheckboxProps extends AntdCheckboxProps {
  className?: string;
  children?: React.ReactNode;
}

export default function GCheckbox({ className = '', children, ...props }: GCheckboxProps) {
  return (
    <AntdCheckbox className={`${styles.gCheckbox} ${className}`} {...props}>
      {children}
    </AntdCheckbox>
  );
}
