import { LineCategoryItem } from './models/line.model';
import { MOCK_LINE_CATEGORIES } from './line.mock';

export * from './models/line.model';
export * from './line.mock';

export async function getLineCategoriesService(): Promise<LineCategoryItem[]> {
  return MOCK_LINE_CATEGORIES;
}
