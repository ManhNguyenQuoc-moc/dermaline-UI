'use client';

import React from 'react';
import Link from 'next/link';
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-bg-footer text-white border-t border-slate-800 pt-12 sm:pt-16 pb-10 sm:pb-12 transition-all select-none overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid Links: 2 Cols on Mobile, 5 Cols on Desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-slate-800">
          {/* Brand Info (Spans Full Width on Mobile, 2 Cols on Desktop) */}
          <div className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-2 space-y-4">
            <div className="pl-[38px] sm:pl-10">
              <Link href="/" className="inline-flex items-center justify-start shrink-0 overflow-visible">
                <Logo className="h-9 sm:h-12 w-auto brightness-0 invert" rotate="rotate-90" scale="scale-[3.0] sm:scale-[4.2]" />
              </Link>
            </div>
            <p className="font-body text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed pt-1">
              Global leader in medical aesthetics research and professional clinical supplies. Defined by K-aesthetic precision science.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-brand-primary hover:text-white transition-all active:scale-95"
              >
                <FacebookOutlined className="text-sm sm:text-base" />
              </a>
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-brand-primary hover:text-white transition-all active:scale-95"
              >
                <InstagramOutlined className="text-sm sm:text-base" />
              </a>
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-brand-primary hover:text-white transition-all active:scale-95"
              >
                <LinkedinOutlined className="text-sm sm:text-base" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="col-span-1 space-y-3 sm:space-y-4">
            <h4 className="font-label text-xs font-bold tracking-widest text-brand-primary uppercase">
              PRODUCT
            </h4>
            <ul className="space-y-2 font-body text-xs sm:text-sm">
              <li>
                <Link href="/products" className="text-slate-400 hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/lines" className="text-slate-400 hover:text-white transition-colors">
                  Line By Line
                </Link>
              </li>
              <li>
                <Link href="/type" className="text-slate-400 hover:text-white transition-colors">
                  By Skincare Type
                </Link>
              </li>
              <li>
                <Link href="/specialty" className="text-slate-400 hover:text-white transition-colors">
                  Specialty Care
                </Link>
              </li>
              <li>
                <Link href="/by-brand" className="text-slate-400 hover:text-white transition-colors">
                  Hospital Brands
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="col-span-1 space-y-3 sm:space-y-4">
            <h4 className="font-label text-xs font-bold tracking-widest text-brand-primary uppercase">
              COMPANY
            </h4>
            <ul className="space-y-2 font-body text-xs sm:text-sm">
              <li>
                <Link href="/brand/story" className="text-slate-400 hover:text-white transition-colors">
                  Brand Story
                </Link>
              </li>
              <li>
                <Link href="/brand/contact" className="text-slate-400 hover:text-white transition-colors">
                  Research Center
                </Link>
              </li>
              <li>
                <Link href="/community/news" className="text-slate-400 hover:text-white transition-colors">
                  News & Press
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="col-span-2 sm:col-span-1 space-y-3 sm:space-y-4">
            <h4 className="font-label text-xs font-bold tracking-widest text-brand-primary uppercase">
              SUPPORT
            </h4>
            <ul className="space-y-2 font-body text-xs sm:text-sm flex flex-wrap sm:block gap-x-6 gap-y-2 sm:gap-0">
              <li>
                <Link href="/brand/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact Sales
                </Link>
              </li>
              <li>
                <Link href="/community/faq" className="text-slate-400 hover:text-white transition-colors">
                  Clinical FAQ
                </Link>
              </li>
              <li>
                <Link href="/account" className="text-slate-400 hover:text-white transition-colors">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-slate-400 hover:text-white transition-colors">
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Corporate Fine Print */}
        <div className="pt-6 sm:pt-8 space-y-3 font-label text-[11px] sm:text-xs text-slate-400 leading-relaxed">
          <div className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-1.5 sm:gap-y-2">
            <p>
              <span className="font-semibold text-slate-300">Company Name:</span> DERMALINE Medical Cosmetics
            </p>
            <p>
              <span className="font-semibold text-slate-300">CEO:</span> Min-Hyuk Kang
            </p>
            <p>
              <span className="font-semibold text-slate-300">Business Registration No:</span> 214-88-00921
            </p>
            <p>
              <span className="font-semibold text-slate-300">Mail-order Sales Reg:</span> No. 2024-Seoul-01922
            </p>
          </div>
          <div className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-1.5 sm:gap-y-2">
            <p>
              <span className="font-semibold text-slate-300">Address:</span> 8F, Aesthetic Innovation Tower, Gangnam-daero, Seoul, South Korea
            </p>
            <p>
              <span className="font-semibold text-slate-300">Contact:</span> +82 2-123-4567 | info@dermaline.com
            </p>
            <p>
              <span className="font-semibold text-slate-300">Privacy Officer:</span> Ji-Soo Kim
            </p>
          </div>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-800 text-slate-500 text-center sm:text-left">
            <p>© 2026 DERMALINE Korea Co., Ltd. All rights reserved.</p>
            <div className="flex items-center justify-center gap-6">
              <Link href="/terms" className="hover:text-slate-300 transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="hover:text-slate-300 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
