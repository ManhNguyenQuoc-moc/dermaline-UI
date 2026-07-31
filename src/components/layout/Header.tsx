'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Badge, Dropdown, MenuProps } from 'antd';
import { Search, ShoppingBag, Globe, User, ChevronDown } from 'lucide-react';
import Logo from './Logo';

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: MenuProps['items'];
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Brand',
    href: '/brand/story',
    hasDropdown: true,
    dropdownItems: [
      { key: 'b1', label: <Link href="/brand/story">Brand Story</Link> },
      { key: 'b2', label: <Link href="/brand/rd">R&D Facility</Link> },
      { key: 'b3', label: <Link href="/brand/philosophy">Clinical Philosophy</Link> },
    ],
  },
  { label: 'All Products', href: '/products' },
  {
    label: 'Line By Line',
    href: '/lines',
    hasDropdown: true,
    dropdownItems: [
      { key: 'l1', label: <Link href="/lines/master">Tension Master Series</Link> },
      { key: 'l2', label: <Link href="/lines/booster">Cellular Bio-Booster</Link> },
      { key: 'l3', label: <Link href="/lines/exo">Exo-Peptide Series</Link> },
    ],
  },
  {
    label: 'By Type',
    href: '/by-type',
    hasDropdown: true,
    dropdownItems: [
      { key: 't1', label: <Link href="/type/lifting-thread">Lifting Threads</Link> },
      { key: 't2', label: <Link href="/type/skin-booster">Skin Boosters</Link> },
      { key: 't3', label: <Link href="/type/cosmeceuticals">Cosmeceuticals</Link> },
      { key: 't4', label: <Link href="/type/accessories">Clinical Accessories</Link> },
    ],
  },
  { label: 'Specialty Products', href: '/specialty' },
  {
    label: 'By Brand',
    href: '/by-brand',
    hasDropdown: true,
    dropdownItems: [
      { key: 'br1', label: <Link href="/brand/dermavline-master">DermaVline Master</Link> },
      { key: 'br2', label: <Link href="/brand/dermavline-bio">DermaVline Bio</Link> },
    ],
  },
  { label: 'EVENT', href: '/event' },
  {
    label: 'Community',
    href: '/community',
    hasDropdown: true,
    dropdownItems: [
      { key: 'c1', label: <Link href="/community/studies">Clinical Studies</Link> },
      { key: 'c2', label: <Link href="/community/press">Media & Press</Link> },
      { key: 'c3', label: <Link href="/community/seminars">Events & Seminars</Link> },
    ],
  },
];

export default function Header() {
  const [activeNav, setActiveNav] = useState('Home');
  const [cartCount, setCartCount] = useState(2);
  const [lang, setLang] = useState<'EN' | 'KR'>('EN');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languageMenuItems: MenuProps['items'] = [
    {
      key: 'EN',
      label: (
        <div className="flex items-center justify-between gap-4 font-label text-sm py-1 font-semibold">
          <span>English (EN)</span>
          {lang === 'EN' && <span className="text-brand-primary font-bold">✓</span>}
        </div>
      ),
      onClick: () => setLang('EN'),
    },
    {
      key: 'KR',
      label: (
        <div className="flex items-center justify-between gap-4 font-label text-sm py-1 font-semibold">
          <span>한국어 (KR)</span>
          {lang === 'KR' && <span className="text-brand-primary font-bold">✓</span>}
        </div>
      ),
      onClick: () => setLang('KR'),
    },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-500 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm'
          : 'bg-transparent border-b border-transparent shadow-none'
      }`}
    >
      <div
        className={`w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12 grid grid-cols-12 items-center transition-all duration-500 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] ${
          isScrolled ? 'h-16' : 'h-20 sm:h-22'
        }`}
      >
        {/* Zone 1 (Left 3 Cols): Brand Logo Shifted Inwards ~2cm (pl-6 sm:pl-8 lg:pl-10) */}
        <div className="col-span-4 lg:col-span-3 flex items-center justify-start pl-6 sm:pl-8 lg:pl-10">
          <Link
            href="/"
            className={`flex items-center justify-start w-44 sm:w-52 lg:w-56 shrink-0 group transition-all duration-500 hover:opacity-85 overflow-visible ${
              isScrolled ? 'h-16' : 'h-20 sm:h-22'
            }`}
          >
            <Logo className="h-14 sm:h-16 w-auto" rotate="rotate-90" scale="scale-[5.5]" />
          </Link>
        </div>

        {/* Zone 2 (Center 6 Cols): Perfectly Centered 9-Item Navigation Menu */}
        <div className="hidden lg:flex lg:col-span-6 items-center justify-center">
          <nav className="flex items-center gap-2 lg:gap-3 xl:gap-5 whitespace-nowrap">
            {NAV_ITEMS.map((item) => {
              const isActive = activeNav === item.label;

              if (item.hasDropdown && item.dropdownItems) {
                return (
                  <Dropdown
                    key={item.label}
                    menu={{ items: item.dropdownItems }}
                    placement="bottomLeft"
                    arrow={{ pointAtCenter: true }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setActiveNav(item.label)}
                      className={`font-label text-xs lg:text-sm font-semibold transition-all relative py-2 flex items-center gap-1 group shrink-0 ${
                        isActive
                          ? 'text-brand-primary border-b-2 border-brand-primary'
                          : 'text-slate-600 hover:text-brand-primary'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 stroke-[2] opacity-70 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </Dropdown>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveNav(item.label)}
                  className={`font-label text-xs lg:text-sm font-semibold transition-all relative py-2 shrink-0 ${
                    isActive
                      ? 'text-brand-primary border-b-2 border-brand-primary'
                      : 'text-slate-600 hover:text-brand-primary'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Zone 3 (Right 3 Cols): Action Control Icons */}
        <div className="col-span-8 lg:col-span-3 flex items-center justify-end gap-2 sm:gap-3 lg:gap-4">
          {/* Search Icon */}
          <button
            type="button"
            aria-label="Search"
            className="p-2.5 rounded-lg text-slate-600 hover:text-brand-primary hover:bg-slate-100/60 transition-all duration-200 cursor-pointer"
          >
            <Search className="w-5 h-5 stroke-[1.75]" />
          </button>

          {/* Cart Icon - Clean Cohesive Slate-600 Gray Icon */}
          <Link href="/cart">
            <button
              type="button"
              aria-label="Shopping Cart"
              className="p-2.5 rounded-lg text-slate-600 hover:text-brand-primary hover:bg-slate-100/60 transition-all duration-200 cursor-pointer relative"
            >
              <Badge
                count={cartCount}
                offset={[-2, 2]}
                size="small"
                className="[&_.ant-badge-count]:!bg-brand-primary [&_.ant-badge-count]:!text-white [&_.ant-badge-count]:!font-bold [&_.ant-badge-count]:!shadow-sm"
              >
                <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
              </Badge>
            </button>
          </Link>

          {/* Language Selector Dropdown */}
          <Dropdown menu={{ items: languageMenuItems }} placement="bottomRight" arrow={{ pointAtCenter: true }}>
            <button
              type="button"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-slate-600 hover:text-brand-primary hover:bg-slate-100/60 transition-all duration-200 cursor-pointer font-label text-xs sm:text-sm font-semibold"
            >
              <Globe className="w-4 h-4 stroke-[1.75]" />
              <span>{lang}</span>
              <ChevronDown className="w-3 h-3 opacity-70" />
            </button>
          </Dropdown>

          {/* User Profile Login / Account Icon */}
          <Link href="/account">
            <button
              type="button"
              aria-label="User Account"
              className="p-2.5 rounded-lg text-slate-600 hover:text-brand-primary hover:bg-slate-100/60 transition-all duration-200 cursor-pointer"
            >
              <User className="w-5 h-5 stroke-[1.75]" />
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
