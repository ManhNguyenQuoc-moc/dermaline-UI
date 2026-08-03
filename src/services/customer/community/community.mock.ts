import { CommunityArticleItem } from './models/community.model';

export const MOCK_COMMUNITY_ARTICLES: CommunityArticleItem[] = [
  // 1. News Category
  {
    id: 'n-1',
    slug: 'dermaline-global-dermatology-expansion-2026',
    title: 'Dermaline Expands Clinical Distribution to 35 Global Aesthetic Clinics in 2026',
    excerpt: 'Official announcement regarding Dermaline’s latest international medical partnership expansion, bringing 99.5% Salmon PDRN tissue regenerator formulas to top dermatology R&D centers worldwide.',
    category: 'news',
    categoryLabel: 'News',
    author: 'Dermaline Corporate Communications',
    authorRole: 'Official Press Release',
    date: 'Jan 28, 2026',
    readTime: '4 min read',
    image: '/images/hero/hero_studio_1.jpg',
    featured: true,
    keyHighlights: [
      'Expanded direct clinical supply agreement with 35 top-tier dermatological institutes across Europe and Southeast Asia.',
      'Deployment of 99.5% Ultra-Pure Salmon PDRN and Bio-Exosome restorative formulations.',
      'Launch of joint clinical trials evaluating post-procedure skin barrier recovery timelines.'
    ],
    content: [
      'Dermaline Korea, a pioneer in clinical derma-cosmetics and hospital tissue regeneration technologies, officially announced today the strategic expansion of its clinical distribution network across 35 premier aesthetic surgery and dermatology clinics in 2026.',
      'Through this milestone international partnership, Dermaline will supply its flagship hospital-exclusive lines—including the PDRN Magic Ampoule, PDX5 Skin Booster Total Solution, and D\'LEXO Bio-Lifting series—directly to board-certified dermatologists and plastic surgery R&D institutions in Frankfurt, Tokyo, Singapore, and Los Angeles.',
      '“Our core commitment has always been grounded in empirical dermatological science,” stated Dr. Min-Woo Park, Chief Research Officer at Dermaline Bio R&D Institute. “By expanding our international clinical footprint, we enable dermatologists worldwide to utilize 99.5% ultra-pure salmon PDRN and plant exosomes to dramatically shorten patient recovery times following intensive laser treatments and micro-needling.”',
      'The expansion also includes a collaborative multi-center clinical study tracking skin hydration retention, epidermal barrier thickness, and inflammation reduction over a 12-week post-procedure observation protocol. Full clinical findings will be presented at the International Congress of Aesthetic Dermatology later this year.'
    ],
    tags: ['Clinical Expansion', 'PDRN Cá Hồi', 'Global Distribution', 'Dermatology R&D']
  },
  {
    id: 'n-2',
    slug: 'dlexo-bio-lifting-series-patent-approval',
    title: "D'LEXO Bio-Lifting Thread & Exosome Formula Secures Korea Patent Approval",
    excerpt: "Dermaline R&D Lab receives official patent certification for its 10 Billion Plant Exosome infusion method used in D'LEXO clinical bio-booster ampoules.",
    category: 'news',
    categoryLabel: 'News',
    author: 'Dermaline Bio R&D Center',
    authorRole: 'Patent & Clinical Affairs',
    date: 'Jan 12, 2026',
    readTime: '5 min read',
    image: 'https://en.dermaline.co.kr/web/upload/category/editor/2024/12/02/9525cceae1c70e30eb49a888bdf218cf.jpg',
    featured: true,
    keyHighlights: [
      'Official patent granted by the Korean Intellectual Property Office (KIPO) for Exosome Nano-Encapsulation Technology.',
      'Standardized density of 10 Billion Bio-Exosomes per 50ml clinical vial.',
      'Enhanced transdermal penetration depth by up to 340% compared to conventional serums.'
    ],
    content: [
      "Dermaline Bio Research Center has been awarded an official patent by the Korean Intellectual Property Office (KIPO) for its proprietary bio-compatible exosome encapsulation method utilized in the D'LEXO Bio-Lifting line.",
      "The patented technology stabilizes 10 Billion plant-derived micro-exosomes per vial, protecting fragile cell-signaling peptides from oxidation while optimizing cutaneous absorption speed.",
      "In clinical testing conducted on 120 subjects with sagging skin and loss of density, the D'LEXO formula demonstrated a statistically significant 42% increase in skin elasticity within 14 days of continuous post-treatment application.",
      "D'LEXO Bio-Lifting Ampoules are now available for clinical order through certified medical aesthetics distributors worldwide."
    ],
    tags: ['Patent Certified', "D'LEXO", 'Exosome Tech', 'Anti-Aging']
  },
  {
    id: 'n-3',
    slug: 'k-beauty-dermatology-award-winner',
    title: 'Dermaline Wins Grand Prize at 2025 K-Beauty Medical Skincare Awards',
    excerpt: 'Dermaline PDRN Magic Ampoule and PDX5 Skin Booster Total Solution awarded highest honors for outstanding post-procedure skin barrier recovery.',
    category: 'news',
    categoryLabel: 'News',
    author: 'K-Beauty Medical Journal',
    authorRole: 'Editorial News',
    date: 'Dec 20, 2025',
    readTime: '3 min read',
    image: '/images/hero/hero_korean_model_1.jpg',
    featured: false,
    keyHighlights: [
      'Grand Prize recipient in the Hospital Clinical Skincare Category.',
      'Recognized for exceptional purity standards (99.5% Salmon PDRN) and zero-irritation index.',
      'Evaluated by a panel of 50 leading Korean dermatologists and cosmetic chemists.'
    ],
    content: [
      'Dermaline Korea has been honored with the prestigious Grand Prize at the annual K-Beauty Medical Skincare Awards held in Seoul.',
      'The panel of judges, comprising leading clinical dermatologists and pharmaceutical research scientists, recognized Dermaline for its technical breakthroughs in PDRN extraction and sterile bio-booster formulation.',
      'Special recognition was given to the Dermaline PDRN Magic Ampoule for its rapid soothing efficacy on sensitive, reactive skin post-dermatological procedures.',
      'Dermaline continues to elevate standards in medical aesthetics through rigorous research, safety testing, and hospital-first product engineering.'
    ],
    tags: ['K-Beauty Awards', 'PDRN Magic Ampoule', 'Clinical Excellence', 'Seoul']
  },

  // 2. FAQ Category
  {
    id: 'faq-1',
    slug: 'what-is-salmon-pdrn-and-how-does-it-work',
    title: 'What is Salmon PDRN (Polydeoxyribonucleotide) and how does it regenerate skin?',
    excerpt: 'PDRN is a high-purity DNA fragment extracted from salmon germ cells, sharing a 95% structural similarity to human DNA. It stimulates dermal fibroblasts, accelerates tissue repair, and enhances skin elasticity.',
    faqAnswer: 'Salmon PDRN (Polydeoxyribonucleotide) activates the A2A adenosine receptors in dermal tissue, promoting micro-circulation, collagen synthesis, and rapid cellular regeneration without immune rejection.',
    category: 'faq',
    categoryLabel: 'FAQ',
    author: 'Dermaline Clinical Advisory Board',
    authorRole: 'Dermatology Q&A',
    date: 'Jan 10, 2026',
    readTime: 'Clinical FAQ',
    image: '/images/hero/hero_studio_2.jpg',
    featured: false,
  },
  {
    id: 'faq-2',
    slug: 'are-dermaline-products-suitable-for-sensitive-post-laser-skin',
    title: 'Are Dermaline products suitable for sensitive skin or post-procedure recovery?',
    excerpt: 'Yes. All Dermaline products are hypoallergenic, low-pH, and dermatologically tested under strict hospital standards, making them ideal for post-laser, needle, or peeling treatment recovery.',
    faqAnswer: 'Dermaline formulations are free from artificial fragrances, harsh parabens, and mineral oils. Products like PDX5 Skin Booster and Exo-Peptide Barrier Recovery Cream are specifically designed for post-procedure inflammation cooling.',
    category: 'faq',
    categoryLabel: 'FAQ',
    author: 'Dermaline Skin Care Experts',
    authorRole: 'Clinical Guidelines',
    date: 'Dec 15, 2025',
    readTime: 'Clinical FAQ',
    image: 'https://en.dermaline.co.kr/web/product/big/202603/7a7bef14e32eecfd07cd0508b6be29f5.jpg',
    featured: false,
  },
  {
    id: 'faq-3',
    slug: 'how-to-use-1000ml-specialty-salon-products',
    title: 'How should 1000ml large-capacity Specialty Products be applied in daily routines?',
    excerpt: 'Dermaline 1000ml salon products are formulated for both professional clinic procedures and high-volume home skincare regimens requiring intense moisture lock and barrier balancing.',
    faqAnswer: 'For daily use, dispense 2-3 pumps of Deep Clean Moisture Foam 1000ml or Hydro Refresh Toner 1000ml onto cleansed skin. Ultra Rich Aloe Vera Gel 1000ml can be applied as a cooling overnight pack or post-sun mask.',
    category: 'faq',
    categoryLabel: 'FAQ',
    author: 'Aesthetic Clinic Advisory',
    authorRole: 'Usage Protocol',
    date: 'Nov 28, 2025',
    readTime: 'Usage Protocol',
    image: '/images/hero/hero_korean_model_2.jpg',
    featured: false,
  },
];
