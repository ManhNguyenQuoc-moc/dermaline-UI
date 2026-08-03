'use client';

import React from 'react';
import { Input as AntdInput, InputProps as AntdInputProps } from 'antd';
import styles from './Input.module.css';

export interface GInputProps extends AntdInputProps {
  className?: string;
}

export type GTextAreaProps = React.ComponentProps<typeof AntdInput.TextArea>;

export function GInput({ className = '', ...props }: GInputProps) {
  return <AntdInput className={`${styles.gInput} ${className}`} {...props} />;
}

export function GTextArea({ className = '', ...props }: GTextAreaProps) {
  return <AntdInput.TextArea className={`${styles.gTextArea} ${className}`} {...props} />;
}

export default GInput;
