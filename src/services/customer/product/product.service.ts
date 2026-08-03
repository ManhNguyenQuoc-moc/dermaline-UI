import { MOCK_PRODUCTS } from './product.mock';
import { ProductItem } from '@/types/product';

export type { ProductItem };

export const ALL_PRODUCTS: ProductItem[] = MOCK_PRODUCTS;

export interface PaginationResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
}

export interface ProductFilterParams {
  searchQuery?: string;
  search?: string;
  selectedCategory?: string;
  category?: string;
  selectedLine?: string;
  line?: string;
  selectedType?: string;
  selectedBrand?: string;
  selectedConcern?: string;
  concern?: string;
  selectedPriceRange?: string;
  priceRange?: string;
  lineSlug?: string;
  typeSlug?: string;
  brandSlug?: string;
  isEvent?: boolean;
  isBest?: boolean;
  isSpecialty?: boolean;
  sortBy?: 'featured' | 'price-low' | 'price-high' | 'rating';
  page?: number;
  pageSize?: number;
}

export async function getProductsService(params: ProductFilterParams = {}): Promise<PaginationResponse<ProductItem>> {
  let filtered = [...ALL_PRODUCTS];

  const searchKeyword = params.search || params.searchQuery;
  if (searchKeyword) {
    const q = searchKeyword.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        (p.subtitle && p.subtitle.toLowerCase().includes(q)) ||
        (p.subTitle && p.subTitle.toLowerCase().includes(q))
    );
  }

  const cat = params.category || params.selectedCategory;
  if (cat && cat.toLowerCase() !== 'all') {
    filtered = filtered.filter((p) => p.category.toLowerCase() === cat.toLowerCase());
  }

  const lineVal = params.line || params.selectedLine;
  if (lineVal && lineVal.toLowerCase() !== 'all') {
    filtered = filtered.filter((p) => p.line.toLowerCase() === lineVal.toLowerCase());
  }

  if (params.lineSlug && params.lineSlug.toLowerCase() !== 'all') {
    filtered = filtered.filter((p) => p.lineSlug === params.lineSlug);
  }

  if (params.typeSlug && params.typeSlug.toLowerCase() !== 'all') {
    filtered = filtered.filter((p) => p.typeSlug === params.typeSlug);
  }

  if (params.brandSlug && params.brandSlug.toLowerCase() !== 'all') {
    filtered = filtered.filter((p) => p.brandSlug === params.brandSlug);
  }

  if (params.isEvent) {
    filtered = filtered.filter((p) => p.isEvent);
  }

  if (params.isBest) {
    filtered = filtered.filter((p) => p.isBest);
  }

  if (params.isSpecialty) {
    filtered = filtered.filter((p) => p.isSpecialty);
  }

  if (params.sortBy) {
    if (params.sortBy === 'price-low') {
      filtered.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (params.sortBy === 'price-high') {
      filtered.sort((a, b) => Number(b.price) - Number(a.price));
    } else if (params.sortBy === 'rating') {
      filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }
  }

  const page = params.page || 1;
  const pageSize = params.pageSize || 12;
  const startIndex = (page - 1) * pageSize;
  const paginatedData = filtered.slice(startIndex, startIndex + pageSize);

  return {
    data: paginatedData,
    total: filtered.length,
    page,
    pageSize,
  };
}
