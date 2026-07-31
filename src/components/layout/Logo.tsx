'use client';

import React from 'react';

export interface LogoProps {
  className?: string;
  rotate?: 'rotate-90' | '-rotate-90' | 'rotate-0';
  scale?: string;
}

export default function Logo({
  className = 'h-12',
  rotate = 'rotate-90',
  scale = 'scale-[3.8]',
}: LogoProps) {
  return (
    <div className="relative inline-flex items-center justify-start overflow-visible p-0">
      <img
        src="/images/nav_logo.png"
        alt="DERMALINE Logo"
        className={`object-contain transform origin-center transition-all ${rotate} ${scale} ${className}`}
      />
    </div>
  );
}
