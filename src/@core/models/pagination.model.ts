export interface PaginationResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
}

export interface PaginationQueryParams {
  page?: number;
  pageSize?: number;
  search?: string;
  sortBy?: 'featured' | 'price-low' | 'price-high' | 'rating';
}
