'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface ProductBreadcrumbProps {
  categoryName?: string;
  categoryHref?: string;
  productName: string;
}

export default function ProductBreadcrumb({
  categoryName = 'All Products',
  categoryHref = '/products',
  productName,
}: ProductBreadcrumbProps) {
  return (
    <nav className="w-full py-3.5 bg-gradient-to-r from-slate-50 via-sky-50/20 to-slate-50 border-b border-slate-200/80 select-none">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center flex-wrap gap-2 text-xs font-label font-semibold text-slate-500">
          <li>
            <Link
              href="/"
              className="flex items-center gap-1 hover:text-brand-primary transition-colors py-0.5"
            >
              <Home className="w-3.5 h-3.5 stroke-[1.75]" />
              <span>HOME</span>
            </Link>
          </li>

          <ChevronRight className="w-3.5 h-3.5 stroke-[2] text-slate-300 shrink-0" />

          <li>
            <Link
              href={categoryHref}
              className="hover:text-brand-primary transition-colors uppercase tracking-wider py-0.5"
            >
              {categoryName}
            </Link>
          </li>

          <ChevronRight className="w-3.5 h-3.5 stroke-[2] text-slate-300 shrink-0" />

          <li className="text-slate-900 font-extrabold truncate max-w-[24ch] sm:max-w-[48ch] py-0.5">
            {productName}
          </li>
        </ol>
      </div>
    </nav>
  );
}
