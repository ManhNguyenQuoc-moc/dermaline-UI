'use client';

import React from 'react';
import { Form as AntdForm, FormProps as AntdFormProps, FormItemProps as AntdFormItemProps } from 'antd';
import styles from './Form.module.css';

export interface GFormProps extends AntdFormProps {
  className?: string;
  children?: React.ReactNode;
}

export interface GFormItemProps extends AntdFormItemProps {
  className?: string;
  children?: React.ReactNode;
}

export function GForm({ className = '', children, ...props }: GFormProps) {
  return (
    <AntdForm className={`${styles.gForm} ${className}`} {...props}>
      {children}
    </AntdForm>
  );
}

export function GFormItem({ className = '', children, ...props }: GFormItemProps) {
  return (
    <AntdForm.Item className={`${styles.gFormItem} ${className}`} {...props}>
      {children}
    </AntdForm.Item>
  );
}

export default GForm;
