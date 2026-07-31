'use client';

import React from 'react';
import Link from 'next/link';
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-bg-footer text-white border-t border-border-default pt-16 pb-12 transition-all">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center justify-start w-44 h-12 overflow-visible">
              <Logo className="h-10 w-auto brightness-0 invert" />
            </Link>
            <p className="font-body text-sm text-slate-400 max-w-sm leading-relaxed">
              Global leader in medical aesthetics research and professional clinical supplies. Defined by K-aesthetic precision science.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-brand-primary hover:text-white transition-all"
              >
                <FacebookOutlined className="text-base" />
              </a>
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-brand-primary hover:text-white transition-all"
              >
                <InstagramOutlined className="text-base" />
              </a>
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-brand-primary hover:text-white transition-all"
              >
                <LinkedinOutlined className="text-base" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h4 className="font-label text-xs font-bold tracking-widest text-brand-primary uppercase">
              PRODUCT
            </h4>
            <ul className="space-y-2.5 font-body text-sm">
              <li>
                <Link href="/products/lifting-thread" className="text-slate-400 hover:text-white transition-colors">
                  Lifting Thread
                </Link>
              </li>
              <li>
                <Link href="/products/skin-booster" className="text-slate-400 hover:text-white transition-colors">
                  Skin Booster
                </Link>
              </li>
              <li>
                <Link href="/products/cosmeceuticals" className="text-slate-400 hover:text-white transition-colors">
                  Cosmeceuticals
                </Link>
              </li>
              <li>
                <Link href="/products/accessories" className="text-slate-400 hover:text-white transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="font-label text-xs font-bold tracking-widest text-brand-primary uppercase">
              COMPANY
            </h4>
            <ul className="space-y-2.5 font-body text-sm">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-slate-400 hover:text-white transition-colors">
                  Research Center
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-slate-400 hover:text-white transition-colors">
                  Global Partners
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
          <div className="space-y-4">
            <h4 className="font-label text-xs font-bold tracking-widest text-brand-primary uppercase">
              SUPPORT
            </h4>
            <ul className="space-y-2.5 font-body text-sm">
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact Sales
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-400 hover:text-white transition-colors">
                  Clinical FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-slate-400 hover:text-white transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="text-slate-400 hover:text-white transition-colors">
                  Newsletter Signup
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Corporate Fine Print */}
        <div className="pt-8 space-y-3 font-label text-xs text-slate-400 leading-relaxed">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <p>
              <span className="font-semibold text-slate-300">Company Name:</span> DERMALINE Medical Aesthetics
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
          <div className="flex flex-wrap gap-x-6 gap-y-2">
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
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800 text-slate-500">
            <p>© 2024 DERMALINE Medical Aesthetics. All rights reserved.</p>
            <div className="flex items-center gap-6">
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
