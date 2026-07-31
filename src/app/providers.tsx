'use client';

import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AntdRegistry>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#58B9E7',
            colorLink: '#58B9E7',
            colorText: '#0F172A',
            colorTextSecondary: '#64748B',
            colorBgContainer: '#FFFFFF',
            fontFamily: "'Manrope', sans-serif",
            borderRadius: 4,
          },
          components: {
            Button: {
              colorPrimary: '#58B9E7',
              colorPrimaryHover: '#38A5DC',
              borderRadius: 4,
              controlHeight: 44,
            },
            Tag: {
              borderRadius: 12,
            },
            Tabs: {
              itemSelectedColor: '#58B9E7',
              inkBarColor: '#58B9E7',
              itemHoverColor: '#38A5DC',
            },
          },
        }}
      >
        {children}
      </ConfigProvider>
    </AntdRegistry>
  );
}
