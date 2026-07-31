'use client';

import React, { useState, useMemo } from 'react';
import ProductsHero from '@/components/products/ProductsHero';
import ProductsFilterBar from '@/components/products/ProductsFilterBar';
import ProductsGrid from '@/components/products/ProductsGrid';
import { ALL_PRODUCTS, ProductItem } from '@/services/customer/product/product.service';

export default function ProductsListingPage() {
  // E-Commerce Filter States
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedLine, setSelectedLine] = useState<string>('All');
  const [selectedConcern, setSelectedConcern] = useState<string>('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');

  // Filter Categories
  const CATEGORIES = [
    'All',
    'Special Ampoule',
    'Cellular Bio-Booster',
    'Lifting Thread',
    'Exo-Peptide',
    'Barrier Care',
    'Cosmeceuticals',
  ];

  // Filter Lines
  const LINES = [
    'All',
    'Tension Master Series',
    'Cellular Bio-Booster',
    'Exo-Peptide Series',
  ];

  // Skin Concerns
  const CONCERNS = [
    'All',
    'Skin Recovery',
    'Lifting & Elasticity',
    'Deep Hydration',
    'Barrier Repair',
    'Brightening',
  ];

  // Price Ranges
  const PRICE_RANGES = [
    'All',
    'Under $50',
    '$50 - $100',
    'Over $100',
  ];

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter((product) => {
      // Search query
      if (
        searchQuery &&
        !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !product.subTitle?.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      // Category
      if (selectedCategory !== 'All' && product.category !== selectedCategory) {
        return false;
      }

      // Line
      if (selectedLine !== 'All' && product.line !== selectedLine) {
        return false;
      }

      // Concern
      if (selectedConcern !== 'All' && product.concern !== selectedConcern) {
        return false;
      }

      // Price Range
      if (selectedPriceRange === 'Under $50' && product.price >= 50) return false;
      if (selectedPriceRange === '$50 - $100' && (product.price < 50 || product.price > 100)) return false;
      if (selectedPriceRange === 'Over $100' && product.price <= 100) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured / default order
    });
  }, [searchQuery, selectedCategory, selectedLine, selectedConcern, selectedPriceRange, sortBy]);

  // Active filters check
  const hasActiveFilters = Boolean(
    searchQuery ||
      selectedCategory !== 'All' ||
      selectedLine !== 'All' ||
      selectedConcern !== 'All' ||
      selectedPriceRange !== 'All'
  );

  const resetAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedLine('All');
    setSelectedConcern('All');
    setSelectedPriceRange('All');
    setSortBy('featured');
  };

  const handleAddToCart = (product: ProductItem) => {
    // Add to cart handler
    console.log('Added to cart:', product.name);
  };

  const handleAddToWishlist = (product: ProductItem) => {
    // Wishlist handler
    console.log('Added to wishlist:', product.name);
  };

  return (
    <main className="w-full min-h-screen bg-white select-none pt-24 sm:pt-28 pb-20">
      {/* 1. Modular Hero Banner Component */}
      <ProductsHero totalCount={filteredProducts.length} />

      {/* 2. Modular Filter Bar & Search Component */}
      <ProductsFilterBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedLine={selectedLine}
        setSelectedLine={setSelectedLine}
        selectedConcern={selectedConcern}
        setSelectedConcern={setSelectedConcern}
        selectedPriceRange={selectedPriceRange}
        setSelectedPriceRange={setSelectedPriceRange}
        sortBy={sortBy}
        setSortBy={setSortBy}
        hasActiveFilters={hasActiveFilters}
        resetAllFilters={resetAllFilters}
        categories={CATEGORIES}
        lines={LINES}
        concerns={CONCERNS}
        priceRanges={PRICE_RANGES}
      />

      {/* 3. Modular Product Grid Component */}
      <ProductsGrid
        products={filteredProducts}
        resetAllFilters={resetAllFilters}
        onAddToCart={handleAddToCart}
        onAddToWishlist={handleAddToWishlist}
      />
    </main>
  );
}
