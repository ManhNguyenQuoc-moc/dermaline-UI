import { PaginationResponse } from '@/@core/models/pagination.model';
import { CommunityArticleItem, CommunityFilterParams, RealCustomerShowcaseItem } from './models/community.model';
import { MOCK_COMMUNITY_ARTICLES, MOCK_REAL_CUSTOMER_SHOWCASE } from './community.mock';

export * from './models/community.model';
export * from './community.mock';

export async function getCommunityArticlesService(
  params: CommunityFilterParams = {}
): Promise<PaginationResponse<CommunityArticleItem>> {
  const {
    page = 1,
    pageSize = 6,
    search,
    category,
    sortBy = 'featured',
  } = params;

  let filtered = MOCK_COMMUNITY_ARTICLES.filter((article) => {
    // Search
    if (
      search &&
      !article.title.toLowerCase().includes(search.toLowerCase()) &&
      !article.excerpt.toLowerCase().includes(search.toLowerCase()) &&
      !article.author.toLowerCase().includes(search.toLowerCase())
    ) {
      return false;
    }

    // Category Filter
    if (category && category !== 'all' && article.category !== category) {
      return false;
    }

    return true;
  });

  // Sorting
  filtered = filtered.sort((a, b) => {
    if (sortBy === 'featured') {
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    }
    return 0;
  });

  const total = filtered.length;
  const startIndex = (page - 1) * pageSize;
  const paginatedData = filtered.slice(startIndex, startIndex + pageSize);

  return {
    data: paginatedData,
    total,
    page,
    pageSize,
  };
}

export async function getCommunityArticleBySlugService(
  slug: string
): Promise<CommunityArticleItem | null> {
  const article = MOCK_COMMUNITY_ARTICLES.find(
    (a) => a.slug.toLowerCase() === slug.toLowerCase() || a.id.toLowerCase() === slug.toLowerCase()
  );
  return article || MOCK_COMMUNITY_ARTICLES[0] || null;
}

export async function getRelatedArticlesService(
  currentSlug: string,
  category?: string,
  limit: number = 3
): Promise<CommunityArticleItem[]> {
  return MOCK_COMMUNITY_ARTICLES.filter(
    (a) => a.slug.toLowerCase() !== currentSlug.toLowerCase() && a.id.toLowerCase() !== currentSlug.toLowerCase()
  ).slice(0, limit);
}

export async function getRealCustomerShowcaseService(
  categoryTag: string = 'all'
): Promise<RealCustomerShowcaseItem[]> {
  if (categoryTag === 'all' || !categoryTag) {
    return MOCK_REAL_CUSTOMER_SHOWCASE;
  }
  return MOCK_REAL_CUSTOMER_SHOWCASE.filter(
    (item) => item.categoryTag === categoryTag
  );
}
