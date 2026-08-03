'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { GInput } from '@/@core/component/Antd';
import { SearchOutlined, CloseOutlined, FireOutlined, RightOutlined } from '@/@core/component/Antd/Icons';
import ImageWithSkeleton from '@/components/common/ImageWithSkeleton';

interface HeaderSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const POPULAR_SEARCH_KEYWORDS = [
  'PDRN 99.5%',
  'Bio-Exosome',
  'Salmon PDRN Concentrate',
  'Trouble Care Ampoule',
  'Sun Care BB',
  'Modeling Mask Pack',
];

const MOCK_PRODUCTS = [
  {
    id: 'p1',
    name: 'PDRN Solution Salmon Ampoule 99.5%',
    category: 'Ampoule Care',
    price: 38.0,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'p2',
    name: 'Bio-Exosome Skin Recovery Lotion 200ml',
    category: 'Oil/Moisture Balancing',
    price: 45.0,
    image: 'https://images.unsplash.com/photo-1608248597263-00079996576f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'p3',
    name: 'Clinical Peptide Trouble Repair Cream 100g',
    category: 'Cream/Eye Cream',
    price: 52.0,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop',
  },
];

export default function HeaderSearchModal({ isOpen, onClose }: HeaderSearchModalProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isRendered, setIsRendered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Manage Mount / Unmount State Transition for Smooth Open & Close Animations
  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      const timer = setTimeout(() => setIsVisible(true), 20);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => setIsRendered(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isRendered) return null;

  const filteredProducts = MOCK_PRODUCTS.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/60 backdrop-blur-md transition-opacity duration-300 ease-out select-none ${
        isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Modal Card with Scale-Up & Slide-Down Physics */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-2xl bg-white border border-slate-200/90 shadow-2xl rounded-none sm:rounded-sm overflow-hidden space-y-6 p-6 sm:p-8 transform transition-all duration-300 ease-out ${
          isVisible
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 -translate-y-4'
        }`}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 text-slate-400 hover:text-slate-900 transition-colors cursor-pointer rounded-full hover:bg-slate-100"
        >
          <CloseOutlined className="text-lg" />
        </button>

        {/* Header Title */}
        <div className="space-y-1">
          <span className="font-label text-xs font-bold text-brand-primary uppercase tracking-widest block">
            DERMALINE CLINICAL SEARCH
          </span>
          <h2 className="font-headline font-semibold text-xl sm:text-2xl text-slate-900">
            Search Products & Formulations
          </h2>
        </div>

        {/* Input Box */}
        <div className="relative">
          <GInput
            prefix={<SearchOutlined className="text-slate-400 text-lg mr-2" />}
            placeholder="Search PDRN 99.5%, Exosomes, Ampoules, Cleansers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="!h-13 !text-base"
            autoFocus
          />
        </div>

        {/* Popular Keywords */}
        <div className="space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-label font-bold text-slate-700 uppercase tracking-wider">
            <FireOutlined className="text-amber-500" />
            <span>Popular Clinic Searches:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {POPULAR_SEARCH_KEYWORDS.map((kw, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSearchTerm(kw)}
                className="px-3 py-1 bg-slate-100 hover:bg-sky-50 text-slate-700 hover:text-brand-primary text-xs font-label font-semibold border border-slate-200 transition-all active:scale-95 cursor-pointer"
              >
                {kw}
              </button>
            ))}
          </div>
        </div>

        {/* Live Search Preview Results */}
        {searchTerm.trim() !== '' && (
          <div className="space-y-3 pt-2 border-t border-slate-100">
            <span className="font-label text-xs font-bold text-slate-500 uppercase tracking-wider block">
              Search Results ({filteredProducts.length})
            </span>

            {filteredProducts.length === 0 ? (
              <p className="font-body text-xs text-slate-400 py-4 text-center">
                No hospital formulations found matching "{searchTerm}".
              </p>
            ) : (
              <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                {filteredProducts.map((p) => (
                  <Link
                    key={p.id}
                    href={`/product/${p.id}`}
                    onClick={onClose}
                    className="flex items-center justify-between p-2.5 bg-slate-50 hover:bg-sky-50/50 border border-slate-200/80 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white border border-slate-200 shrink-0 overflow-hidden">
                        <ImageWithSkeleton src={p.image} alt={p.name} containerClassName="w-full h-full" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-headline font-semibold text-xs text-slate-900 group-hover:text-brand-primary transition-colors">{p.name}</h4>
                        <span className="font-label text-[11px] text-slate-500 block">{p.category}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-headline font-bold text-xs text-slate-900">${p.price.toFixed(2)}</span>
                      <RightOutlined className="text-[10px] text-slate-400 group-hover:text-brand-primary" />
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
