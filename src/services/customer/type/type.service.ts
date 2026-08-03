import { TypeCategoryItem } from './models/type.model';
import { MOCK_TYPE_CATEGORIES } from './type.mock';

export * from './models/type.model';
export * from './type.mock';

export async function getTypeCategoriesService(): Promise<TypeCategoryItem[]> {
  return MOCK_TYPE_CATEGORIES;
}
