import { PaginationQueryParams } from '@/@core/models/pagination.model';

export type CommunityCategory = 'news' | 'faq';

export interface CommunityArticleItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: CommunityCategory;
  categoryLabel: string;
  author: string;
  authorRole?: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  sourceUrl?: string;
  faqAnswer?: string;
  content?: string[];
  keyHighlights?: string[];
  tags?: string[];
}

export interface CommunityFilterParams extends PaginationQueryParams {
  category?: string;
}
