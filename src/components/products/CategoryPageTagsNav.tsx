'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from '@/i18n/useTranslation';

export default function CategoryPageTagsNav() {
  const pathname = usePathname();
  const { t } = useTranslation();

  const NAV_ITEMS = [
    { label: t.categoryNav.allProducts, href: '/products' },
    { label: t.categoryNav.lineByLine, href: '/lines/all' },
    { label: t.categoryNav.byType, href: '/type/all' },
    { label: t.categoryNav.specialty, href: '/specialty' },
    { label: t.categoryNav.byBrand, href: '/by-brand/all' },
  ];

  return (
    <nav className="w-full bg-white border-b border-slate-200/80 py-3.5 select-none">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start sm:justify-center flex-wrap gap-6 sm:gap-8 lg:gap-10">
          {NAV_ITEMS.map((item) => {
            const baseRoute = item.href.replace('/all', '');
            const isActive =
              item.href === '/products'
                ? pathname === '/products'
                : pathname.startsWith(baseRoute);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-label text-xs sm:text-sm font-bold tracking-wider transition-all duration-200 py-1 shrink-0 ${
                  isActive
                    ? 'text-brand-primary border-b-2 border-brand-primary font-extrabold'
                    : 'text-slate-600 hover:text-brand-primary'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
