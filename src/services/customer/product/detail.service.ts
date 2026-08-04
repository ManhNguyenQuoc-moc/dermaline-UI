import { ProductItem } from './models/product.model';
import { MOCK_PRODUCTS } from './product.mock';

export interface ProductDetailData extends ProductItem {
  galleryImages: string[];
  sku: string;
  stockStatus: 'IN_STOCK' | 'LOW_STOCK' | 'OUT_OF_STOCK';
  rewardPoints: number;
  capacity: string;
  skinTypes: string[];
  keyIngredients: Array<{
    name: string;
    percentage?: string;
    function: string;
  }>;
  howToUseSteps: Array<{
    step: number;
    title: string;
    description: string;
  }>;
  frequentlyBoughtTogether: ProductItem[];
}

export async function getProductDetailService(idOrSlug: string): Promise<ProductDetailData | null> {
  const product = MOCK_PRODUCTS.find(
    (p) => String(p.id) === idOrSlug || p.slug === idOrSlug
  ) || MOCK_PRODUCTS.find((p) => String(p.id) === 'p-4') || MOCK_PRODUCTS[0];

  if (!product) return null;

  const galleryImages = [
    product.image,
    product.hoverImage || product.image,
    'https://en.dermaline.co.kr/web/upload/category/editor/2024/12/02/9525cceae1c70e30eb49a888bdf218cf.jpg',
    'https://en.dermaline.co.kr/web/upload/category/editor/2024/12/02/5f242db1ebf22a5789f28d82d92bb3ee.jpg',
  ];

  const frequentlyBoughtTogether = MOCK_PRODUCTS.filter(
    (p) => String(p.id) !== String(product.id)
  ).slice(0, 2);

  return {
    ...product,
    galleryImages,
    sku: `DERMA-${String(product.id).toUpperCase()}-2026`,
    stockStatus: 'IN_STOCK',
    rewardPoints: Math.round(Number(product.price) * 0.05 * 100) / 100,
    capacity: product.category === 'Cleansing' ? '1000ml / 33.8 fl. oz.' : '200ml / 6.76 fl. oz.',
    skinTypes: ['All Skin Types', 'Sensitive Skin', 'Post-Procedure Skin', 'Aging Skin'],
    keyIngredients: [
      {
        name: 'NAD+ (Nicotinamide Adenine Dinucleotide)',
        percentage: '5,000ppm',
        function: 'Cellular ATP energy recharge & anti-aging dermal matrix repair.',
      },
      {
        name: '10 Billion Plant Exosomes',
        percentage: '10,000ppm',
        function: 'Deep dermal liposomal transport & collagen synthesis booster.',
      },
      {
        name: '5-Layer Hyaluronic Acid Complex',
        function: 'Multi-depth moisture retention and lipid barrier lockdown.',
      },
      {
        name: '99.5% Salmon PDRN Bio-Booster',
        percentage: '99.5%',
        function: 'Tissue regeneration and skin elasticity revival.',
      },
    ],
    howToUseSteps: [
      {
        step: 1,
        title: 'Dispense Active Formulation',
        description: 'Pump 2-3 times directly onto clean palms or fingertips without using cotton pads.',
      },
      {
        step: 2,
        title: 'Gentle Dermal Absorption',
        description: 'Apply over face and neck, gently pressing until absorbed deep into dermal layers.',
      },
      {
        step: 3,
        title: 'Moisture Lock Protocol',
        description: 'Follow up with Dermaline PDRN Serum or D\'LEXO Cream for 24-hour hydration lock.',
      },
    ],
    frequentlyBoughtTogether,
  };
}
