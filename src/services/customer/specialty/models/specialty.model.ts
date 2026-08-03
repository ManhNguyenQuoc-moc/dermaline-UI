import { PaginationQueryParams } from '@/@core/models/pagination.model';

export interface SpecialtyProductFilterParams extends PaginationQueryParams {
  priceRange?: string;
}
