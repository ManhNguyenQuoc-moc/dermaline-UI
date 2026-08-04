'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Badge, MenuProps, message } from 'antd';
import { Search, ShoppingBag, User, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import GDropdown from '@/@core/component/Antd/Dropdown';
import HeaderSearchModal from '@/components/common/HeaderSearchModal';
import { useCartStore } from '@/store/useCartStore';
import { useAuthStore } from '@/store/useAuthStore';
import { useTranslation } from '@/i18n/useTranslation';

interface SubChildItem {
  key: string;
  label: string;
  href: string;
}

interface RawSubItem {
  key: string;
  label: string;
  href: string;
  children?: SubChildItem[];
}

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  rawDropdownItems?: RawSubItem[];
}

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // i18n Translation Store
  const { t, lang, setLang } = useTranslation();

  // Dynamic real-time cart badge state from Zustand store
  const cartItems = useCartStore((s) => s.items);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Zustand Auth Store State
  const { user, isLoggedIn, logout } = useAuthStore();

  const CONSOLIDATED_NAV_ITEMS: NavItem[] = [
    { label: t.header.home, href: '/' },
    {
      label: t.header.brand,
      href: '/brand/story',
    },
    {
      label: t.header.allProducts,
      href: '/products',
      hasDropdown: true,
      rawDropdownItems: [
        { key: 'ap-main', label: t.header.allProductsCatalogue, href: '/products' },
        {
          key: 'ap-lines',
          label: t.header.lineByLine,
          href: '/lines/all',
          children: [
            { key: 'lbl1', label: t.header.lineCleansing, href: '/lines/cleansing' },
            { key: 'lbl2', label: t.header.linePdrnCare, href: '/lines/pdrn-care' },
            { key: 'lbl3', label: t.header.lineOilMoisture, href: '/lines/oil-moisture-balancing' },
            { key: 'lbl4', label: t.header.lineAmpouleCare, href: '/lines/ampoule-care' },
            { key: 'lbl5', label: t.header.lineSpecialAmpoule, href: '/lines/special-ampoule-care' },
            { key: 'lbl6', label: t.header.lineTroubleCare, href: '/lines/trouble-care' },
            { key: 'lbl7', label: t.header.lineSunCare, href: '/lines/sun-care' },
            { key: 'lbl8', label: t.header.lineKeratinCare, href: '/lines/keratin-care' },
          ],
        },
        {
          key: 'ap-type',
          label: t.header.byType,
          href: '/type/all',
          children: [
            { key: 'bt1', label: t.header.typeCleansing, href: '/type/cleansing' },
            { key: 'bt2', label: t.header.typeTonerMist, href: '/type/toner-mist' },
            { key: 'bt3', label: t.header.typeLotionEmulsion, href: '/type/lotion-emulsion' },
            { key: 'bt4', label: t.header.typeCreamEyeCream, href: '/type/cream-eye-cream' },
            { key: 'bt5', label: t.header.typeMaskPack, href: '/type/mask-pack' },
            { key: 'bt6', label: t.header.typeSunCareBB, href: '/type/sun-care-bb' },
            { key: 'bt7', label: t.header.typeAmpouleEssence, href: '/type/ampoule-essence' },
            { key: 'bt8', label: t.header.typeSpecialAmpoule, href: '/type/special-ampoule' },
            { key: 'bt9', label: t.header.typeModelingMask, href: '/type/modeling-mask-pack' },
            { key: 'bt10', label: t.header.typeSet, href: '/type/set' },
          ],
        },
        { key: 'ap-specialty', label: t.header.specialtyProducts, href: '/specialty' },
        {
          key: 'ap-brand',
          label: t.header.byBrand,
          href: '/by-brand/all',
          children: [
            { key: 'bb1', label: t.header.brandDermaline, href: '/by-brand/dermaline' },
            { key: 'bb2', label: t.header.brandDlexo, href: '/by-brand/dlexo' },
            { key: 'bb3', label: t.header.brandReden, href: '/by-brand/reden' },
          ],
        },
      ],
    },
    { label: t.header.event, href: '/event' },
    {
      label: t.header.community,
      href: '/community',
      hasDropdown: true,
      rawDropdownItems: [
        { key: 'c1', label: t.header.newsPress, href: '/community/news' },
        { key: 'c2', label: t.header.faqSupport, href: '/community/faq' },
      ],
    },
    { label: t.header.contactUs, href: '/brand/contact' },
  ];

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

  const languageSubItems: MenuProps['items'] = [
    {
      key: 'lang-en',
      label: (
        <div
          onClick={() => {
            setLang('EN');
            message.success('Language changed to English (EN)');
          }}
          className={`flex items-center justify-between py-1 px-3 font-label text-sm font-semibold cursor-pointer ${
            lang === 'EN' ? 'text-brand-primary font-bold' : 'text-slate-700 hover:text-brand-primary'
          }`}
        >
          <span>English (EN)</span>
          {lang === 'EN' && <span className="text-brand-primary font-bold">✓</span>}
        </div>
      ),
    },
    {
      key: 'lang-kr',
      label: (
        <div
          onClick={() => {
            setLang('KR');
            message.success('언어가 한국어로 변경되었습니다 (KR)');
          }}
          className={`flex items-center justify-between py-1 px-3 font-label text-sm font-semibold cursor-pointer ${
            lang === 'KR' ? 'text-brand-primary font-bold' : 'text-slate-700 hover:text-brand-primary'
          }`}
        >
          <span>한국어 (KR)</span>
          {lang === 'KR' && <span className="text-brand-primary font-bold">✓</span>}
        </div>
      ),
    },
    {
      key: 'lang-vie',
      label: (
        <div
          onClick={() => {
            setLang('VIE');
            message.success('Đã chuyển ngôn ngữ sang Tiếng Việt (VIE)');
          }}
          className={`flex items-center justify-between py-1 px-3 font-label text-sm font-semibold cursor-pointer ${
            lang === 'VIE' ? 'text-brand-primary font-bold' : 'text-slate-700 hover:text-brand-primary'
          }`}
        >
          <span>Tiếng Việt (VIE)</span>
          {lang === 'VIE' && <span className="text-brand-primary font-bold">✓</span>}
        </div>
      ),
    },
  ];

  // User Profile Dropdown Menu
  const userMenuItems: MenuProps['items'] = isLoggedIn
    ? [
        {
          key: 'user-info',
          label: (
            <div className="py-1.5 px-3 border-b border-slate-100 min-w-[180px]">
              <span className="font-headline font-bold text-sm text-slate-900 block truncate">
                {user?.fullName || 'Sophia Chen'}
              </span>
              <span className="font-body text-[11px] text-slate-400 block truncate">
                {user?.email || 'sophia.chen@dermaline-beauty.com'}
              </span>
            </div>
          ),
        },
        {
          key: 'my-account',
          label: (
            <Link href="/account" className="block py-1.5 px-3 font-label text-sm font-semibold text-slate-700 hover:text-brand-primary">
              {t.header.myAccount}
            </Link>
          ),
        },
        {
          key: 'my-orders',
          label: (
            <Link href="/cart" className="block py-1.5 px-3 font-label text-sm font-semibold text-slate-700 hover:text-brand-primary">
              {t.header.cart}
            </Link>
          ),
        },
        {
          key: 'wishlist',
          label: (
            <Link href="/wishlist" className="block py-1.5 px-3 font-label text-sm font-semibold text-slate-700 hover:text-brand-primary">
              {t.header.wishlist}
            </Link>
          ),
        },
        {
          type: 'divider',
        },
        {
          key: 'language-selector',
          label: (
            <div className="py-1 px-3 font-label text-xs font-bold text-slate-400 uppercase tracking-wider">
              {t.header.language} ({lang})
            </div>
          ),
          children: languageSubItems,
        },
        {
          type: 'divider',
        },
        {
          key: 'logout',
          label: (
            <div
              onClick={() => {
                logout();
                message.info(t.header.logout);
                router.push('/login');
              }}
              className="block py-1.5 px-3 font-label text-sm font-bold text-red-600 hover:text-red-800 cursor-pointer"
            >
              {t.header.logout}
            </div>
          ),
        },
      ]
    : [
        {
          key: 'login',
          label: (
            <Link href="/login" className="block py-1.5 px-3 font-label text-sm font-bold text-slate-900 hover:text-brand-primary">
              {t.header.login}
            </Link>
          ),
        },
        {
          key: 'signup',
          label: (
            <Link href="/signup" className="block py-1.5 px-3 font-label text-sm font-bold text-brand-primary hover:text-slate-900">
              {t.header.register}
            </Link>
          ),
        },
        {
          type: 'divider',
        },
        {
          key: 'language-selector',
          label: (
            <div className="py-1 px-3 font-label text-xs font-bold text-slate-400 uppercase tracking-wider">
              {t.header.language} ({lang})
            </div>
          ),
          children: languageSubItems,
        },
      ];

  const buildDropdownMenuItems = (rawItems: RawSubItem[]): MenuProps['items'] => {
    return rawItems.map((subItem) => {
      const cleanHref = subItem.href.replace(/\/all$/, '');
      const isChildActive =
        pathname === subItem.href ||
        (cleanHref !== '' && cleanHref !== '/' && pathname.startsWith(cleanHref));

      const hasChildren = subItem.children && subItem.children.length > 0;

      const childrenMenu: MenuProps['items'] = hasChildren
        ? subItem.children!.map((child) => {
            const isSubChildActive = pathname === child.href;
            return {
              key: child.key,
              label: (
                <Link
                  href={child.href}
                  className={`block w-full py-2 px-3.5 font-label text-sm sm:text-base font-semibold rounded-md transition-all ${
                    isSubChildActive
                      ? 'bg-sky-100/90 text-brand-primary font-extrabold border border-sky-200/90 shadow-2xs'
                      : 'text-slate-700 hover:text-brand-primary hover:bg-slate-100/70'
                  }`}
                >
                  {child.label}
                </Link>
              ),
            };
          })
        : undefined;

      return {
        key: subItem.key,
        label: (
          <Link
            href={subItem.href}
            className={`block w-full py-2 px-3.5 font-label text-sm sm:text-base font-semibold rounded-md transition-all ${
              isChildActive
                ? 'bg-sky-100/90 text-brand-primary font-extrabold border border-sky-200/90 shadow-2xs'
                : 'text-slate-700 hover:text-brand-primary hover:bg-slate-100/70'
            }`}
          >
            {subItem.label}
          </Link>
        ),
        children: childrenMenu,
      };
    });
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-500 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs'
            : 'bg-transparent border-b border-transparent shadow-none'
        }`}
      >
        <div
          className={`w-full max-w-[1800px] mx-auto px-3 sm:px-8 lg:px-12 grid grid-cols-12 items-center transition-all duration-500 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] ${
            isScrolled ? 'h-16' : 'h-18 sm:h-22'
          }`}
        >
          {/* Zone 1 (Left 3 Cols): Brand Logo */}
          <div className="col-span-7 sm:col-span-6 lg:col-span-3 flex items-center justify-start pl-[38px] sm:pl-10 lg:pl-14">
            <Link
              href="/"
              className={`flex items-center justify-start shrink-0 group transition-all duration-500 hover:opacity-85 overflow-visible ${
                isScrolled ? 'h-14 sm:h-16' : 'h-16 sm:h-22'
              }`}
            >
              <Logo className="h-11 sm:h-14 lg:h-16 w-auto" rotate="rotate-90" scale="scale-[3.4] sm:scale-[4.0] lg:scale-[4.8]" />
            </Link>
          </div>

          {/* Zone 2 (Center 6 Cols): Navigation Menu */}
          <div className="hidden lg:flex lg:col-span-6 items-center justify-center">
            <nav className="flex items-center gap-6 xl:gap-8 whitespace-nowrap">
              {CONSOLIDATED_NAV_ITEMS.map((item) => {
                const isHome = item.href === '/';
                let isActive = false;

                if (isHome) {
                  isActive = pathname === '/';
                } else if (item.href === '/products') {
                  const productRoutes = ['/products', '/lines', '/type', '/specialty', '/by-brand'];
                  isActive = productRoutes.some((route) => pathname.startsWith(route));
                } else if (item.href === '/brand/contact') {
                  isActive = pathname === '/brand/contact' || pathname.startsWith('/brand/contact') || pathname === '/contact';
                } else if (item.href === '/brand/story') {
                  isActive = pathname === '/brand/story' || (pathname.startsWith('/brand') && !pathname.startsWith('/brand/contact'));
                } else {
                  isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                }

                if (item.hasDropdown && item.rawDropdownItems) {
                  const dropdownMenuItems = buildDropdownMenuItems(item.rawDropdownItems);

                  return (
                    <GDropdown key={item.label} menu={{ items: dropdownMenuItems }}>
                      <Link
                        href={item.href}
                        className={`font-label text-sm lg:text-base font-semibold transition-all relative py-2 flex items-center gap-1 group shrink-0 ${
                          isActive
                            ? 'text-brand-primary border-b-2 border-brand-primary font-bold'
                            : 'text-slate-700 hover:text-brand-primary'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className="w-4 h-4 stroke-[2] opacity-70 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </GDropdown>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`font-label text-sm lg:text-base font-semibold transition-all relative py-2 shrink-0 ${
                      isActive
                        ? 'text-brand-primary border-b-2 border-brand-primary font-bold'
                        : 'text-slate-700 hover:text-brand-primary'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Zone 3 (Right 3 Cols): Action Control Icons */}
          <div className="col-span-5 sm:col-span-6 lg:col-span-3 flex items-center justify-end gap-1.5 sm:gap-3 lg:gap-4 pr-1 sm:pr-4">
            {/* Search Icon Trigger */}
            <button
              type="button"
              aria-label="Search"
              onClick={() => setIsSearchOpen(true)}
              className="p-2 sm:p-2.5 rounded-lg text-slate-600 hover:text-brand-primary hover:bg-slate-100/60 transition-all duration-200 cursor-pointer"
            >
              <Search className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[1.75]" />
            </button>

            {/* Cart Icon with Live Dynamic Badge State */}
            <Link href="/cart">
              <button
                type="button"
                aria-label="Shopping Cart"
                className="p-2 sm:p-2.5 rounded-lg text-slate-600 hover:text-brand-primary hover:bg-slate-100/60 transition-all duration-200 cursor-pointer relative"
              >
                <Badge
                  count={cartCount}
                  offset={[-2, 2]}
                  size="small"
                  className="[&_.ant-badge-count]:!bg-brand-primary [&_.ant-badge-count]:!text-white [&_.ant-badge-count]:!font-bold [&_.ant-badge-count]:!shadow-sm"
                >
                  <ShoppingBag className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[1.75]" />
                </Badge>
              </button>
            </Link>

            {/* User Profile Dropdown Menu (With EN, KR, VIE Language Integrated) */}
            <GDropdown menu={{ items: userMenuItems }} placement="bottomRight">
              <button
                type="button"
                aria-label="User Account"
                className="p-2 sm:p-2.5 rounded-lg text-slate-600 hover:text-brand-primary hover:bg-slate-100/60 transition-all duration-200 cursor-pointer relative"
              >
                <User className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[1.75]" />
                {isLoggedIn && (
                  <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-white" />
                )}
              </button>
            </GDropdown>
          </div>
        </div>
      </header>

      {/* Interactive Search Modal */}
      <HeaderSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
