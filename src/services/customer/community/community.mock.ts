import { CommunityArticleItem, RealCustomerShowcaseItem } from './models/community.model';

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
    tags: ['Clinical Expansion', 'Salmon PDRN', 'Global Distribution', 'Dermatology R&D']
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

  // 2. Comprehensive Detailed FAQ Category (Pure English)
  {
    id: 'faq-1',
    slug: 'what-is-salmon-pdrn-and-how-does-it-work',
    title: 'What is Salmon PDRN (Polydeoxyribonucleotide) and how does it regenerate dermal tissue?',
    excerpt: 'PDRN is a 99.5% ultra-purified DNA fragment extracted from salmon germ cells, sharing a 95% sequence homology with human DNA. It stimulates A2A adenosine receptors to promote fibroblast collagen synthesis and epidermal repair.',
    category: 'faq',
    categoryLabel: 'FAQ',
    faqAnswer: 'Salmon PDRN activates A2A adenosine receptors in dermal tissue, promoting micro-capillary circulation, collagen synthesis, and accelerating tissue repair without triggering immune rejection.',
    faqCategoryTag: 'pdrn-tech',
    faqCategoryLabel: 'PDRN & Exosome Bio-Tech',
    author: 'Dermaline Korea Bio R&D Institute',
    authorRole: 'Biotechnology Specialist',
    date: 'Jan 10, 2026',
    readTime: 'Clinical Protocol',
    image: '/images/hero/hero_studio_2.jpg',
    featured: true,
    detailedAnswer: [
      'PDRN (Polydeoxyribonucleotide) is a low-molecular bio-compatible compound purified from salmon germ cell DNA through sterile microbiological filtration adhering to KGMP standards.',
      'The PDRN DNA sequence provides fundamental nucleotide blocks essential for cellular DNA salvage synthesis. Upon deep dermal absorption, PDRN binds to Adenosine A2A receptors, reducing pro-inflammatory cytokines (TNF-α and IL-6).',
      'Concurrently, PDRN stimulates Vascular Endothelial Growth Factor (VEGF), increasing local micro-vascular oxygen supply to rapidly revive damaged skin following laser, microneedling, or peel procedures.'
    ],
    usageSteps: [
      'Step 1: Cleanse skin gently using Dermaline Cica Soothing Cleanser.',
      'Step 2: Apply 3-4 drops of Dermaline PDRN Magic Ampoule directly onto the face.',
      'Step 3: Lightly pat with fingertips for 60 seconds until PDRN bio-molecules fully absorb into the dermal layer.',
      'Step 4: Seal moisture with Exo-Peptide Barrier Cream to maintain 24-hour hydration balance.'
    ],
    doctorAdvice: 'Apply PDRN Magic Ampoule twice daily (morning and evening) immediately following Fractional CO2 Laser or Chemical Peels to shorten peeling and recovery timelines by 3x.',
    recommendedProducts: [
      { name: 'Dermaline PDRN Magic Ampoule 35ml', category: 'PDRN Care Line', link: '/products' },
      { name: 'PDX5 Skin Booster Total Solution 100ml', category: 'Specialist Ampoule', link: '/products' }
    ]
  },
  {
    id: 'faq-2',
    slug: 'are-dermaline-products-suitable-for-sensitive-post-laser-skin',
    title: 'Are Dermaline products suitable for hyper-sensitive or post-procedure laser skin?',
    excerpt: 'Yes, completely. Every Dermaline product is clinically tested to achieve a 0.00 Primary Skin Irritation Index, featuring a pH 5.5 acidic mantle balance to cool redness and rebuild damaged lipid barriers.',
    category: 'faq',
    categoryLabel: 'FAQ',
    faqAnswer: 'Dermaline formulations are 100% free from synthetic fragrances, drying alcohols, and mineral oils. Range items like PDX5 Skin Booster and Exo-Peptide Cream are engineered specifically for hospital post-care soothing.',
    faqCategoryTag: 'post-laser',
    faqCategoryLabel: 'Post-Procedure Recovery',
    author: 'Dermaline Medical Advisory Board',
    authorRole: 'Clinical Dermatologist',
    date: 'Dec 15, 2025',
    readTime: 'Clinical Protocol',
    image: 'https://en.dermaline.co.kr/web/upload/category/editor/2024/12/02/7cf511574fe469cd67cd938c532abd20.jpg',
    featured: true,
    detailedAnswer: [
      'Following dermatological procedures such as Fractional CO2 Laser, RF Microneedling, or Chemical Peels, the protective lipid barrier is compromised, leading to elevated Trans-Epidermal Water Loss (TEWL) and prolonged erythema.',
      'Dermaline formulates Bio-Soothing complexes combining Centella Asiatica (Cica), Ceramide NP, and Panthenol (Vitamin B5) to cool surface heat within the first 15 minutes of application.',
      'The official Dermaline Clinical Zero-Irritation Index (0.00) confirms safety even for reactive, fragile, or steroid-compromised skin types.'
    ],
    usageSteps: [
      'Step 1: Cool skin with Dermaline Hydro Refresh Mist.',
      'Step 2: Smooth a thin layer of Dermaline Cica Gel or PDRN Solution.',
      'Step 3: Apply Bio-Cica Soothing Sheet Mask for 15-20 minutes.',
      'Step 4: Lock barrier with Exo-Peptide Barrier Recovery Cream before UV exposure.'
    ],
    doctorAdvice: 'Avoid high-concentration AHA/BHA or strong Retinoids for 7 days post-laser. Prioritize Cica Soothing and PDRN formulas to restore moisture homeostasis.',
    recommendedProducts: [
      { name: 'Exo-Peptide Barrier Recovery Cream 50g', category: 'Barrier Repair', link: '/products' },
      { name: 'Bio-Cica Soothing Sheet Mask (10 Pack)', category: 'Soothing Pack', link: '/products' }
    ]
  },
  {
    id: 'faq-3',
    slug: 'how-to-use-1000ml-specialty-salon-products',
    title: 'How to utilize the 1000ml Specialty Salon Range for professional spa and homecare routines?',
    excerpt: 'The 1000ml range is engineered for aesthetic spas, skin clinics, and everyday users desiring cost-effective professional clinical quality.',
    category: 'faq',
    categoryLabel: 'FAQ',
    faqAnswer: 'The 1000ml series accommodates high-frequency spa treatments. Hygienic pump dispensers ensure precise dosing for cleansing foams, toners, and soothing cooling gels.',
    faqCategoryTag: 'salon-1000ml',
    faqCategoryLabel: 'Specialty 1000ml Salon',
    author: 'Spa Protocol Specialist',
    authorRole: 'Clinic Technical Director',
    date: 'Nov 28, 2025',
    readTime: 'Standard Protocol',
    image: '/images/hero/hero_korean_model_2.jpg',
    featured: false,
    detailedAnswer: [
      'Dermaline Specialty 1000ml products (Cleansing Foam, Toner, Aloe Gel, Cooling Massager Gel) represent the top-selling large-capacity hospital line in Korean skin management centers.',
      'Featuring hygienic pump dispensers and dense active concentrations, these products enable spa estheticians to perform seamless skin prep while providing value-driven homecare volume.',
      'The formula maintains identical high-purity active ingredient ratios without dilution compared to retail size packaging.'
    ],
    usageSteps: [
      'Step 1: Pump 2 doses of Deep Clean Moisture Foam 1000ml to create dense micro-bubbles.',
      'Step 2: Wipe skin clean with cotton pads soaked in Hydro Refresh Toner 1000ml.',
      'Step 3: Apply Ultra Rich Aloe Vera Gel 1000ml with cryo-cooling massage devices for 10 minutes.'
    ],
    doctorAdvice: 'Store 1000ml bottles in a cool, dry area out of direct sunlight. Decant into 100ml travel pumps for portable convenience.',
    recommendedProducts: [
      { name: 'Deep Clean Moisture Foam Cleanser 1000ml', category: 'Spa Size Cleansing', link: '/products' },
      { name: 'Ultra Rich Aloe Vera Cooling Gel 1000ml', category: 'Spa Cooling Gel', link: '/products' }
    ]
  },
  {
    id: 'faq-4',
    slug: 'what-is-plant-exosome-technology-and-benefits',
    title: 'What are the benefits of Plant Exosome Technology in advanced anti-aging care?',
    excerpt: 'Exosomes are lipid nano-vesicles (30-150nm) acting as cellular messengers to transport peptides and growth factors deep beyond the stratum corneum without enzymatic oxidation.',
    category: 'faq',
    categoryLabel: 'FAQ',
    faqAnswer: 'Plant Exosome technology in D\'LEXO delivers bio-signaling peptides directly to fibroblast cells, increasing dermal elasticity by 42% within 14 days.',
    faqCategoryTag: 'pdrn-tech',
    faqCategoryLabel: 'PDRN & Exosome Bio-Tech',
    author: 'Dermaline Cellular R&D Team',
    authorRole: 'Cellular Biologist',
    date: 'Jan 05, 2026',
    readTime: 'Medical Science',
    image: 'https://en.dermaline.co.kr/web/upload/category/editor/2024/12/02/9525cceae1c70e30eb49a888bdf218cf.jpg',
    featured: false,
    detailedAnswer: [
      'Exosomes represent a breakthrough paradigm in modern medical aesthetics. Conventional cosmetics struggle because fragile peptides decompose before reaching target dermal layers.',
      'Dermaline utilizes nano-lipid vesicles encapsulating 10 Billion Bio-Exosomes per D\'LEXO Bio-Lifting vial, safeguarding active ingredients and releasing them intact inside the dermis.'
    ],
    usageSteps: [
      'Step 1: Apply following toner step in evening routine.',
      'Step 2: Dispense 4-5 drops of D\'LEXO Exosome Ampoule onto wrinkle-prone areas (nasolabial folds, forehead lines, cheek contour).',
      'Step 3: Massage upward in firm lifting motions for 2 minutes.'
    ],
    doctorAdvice: 'Ideal for ages 28+ when endogenous collagen density decreases by 1.5% annually.',
    recommendedProducts: [
      { name: "D'LEXO Bio-Lifting Exosome Ampoule 50ml", category: "D'LEXO Premium", link: '/products' }
    ]
  },
  {
    id: 'faq-5',
    slug: 'what-are-dermaline-international-certifications',
    title: 'What medical certifications and safety standards does Dermaline comply with?',
    excerpt: 'Dermaline complies with strict global regulatory standards: ISO 13485 (Medical Devices), ISO 22716 (Cosmetic GMP), Korean KGMP, European CE, and CPNP.',
    category: 'faq',
    categoryLabel: 'FAQ',
    faqAnswer: 'Dermaline is manufactured in sterile Korean medical R&D plants accredited with ISO 13485, ISO 22716, KGMP, and CE certifications, guaranteeing 100% sterile quality.',
    faqCategoryTag: 'safety',
    faqCategoryLabel: 'Safety & ISO Certifications',
    author: 'Dermaline Global Quality Assurance',
    authorRole: 'International Regulatory Affairs',
    date: 'Dec 02, 2025',
    readTime: 'Medical Certification',
    image: '/images/hero/hero_studio_1.jpg',
    featured: false,
    detailedAnswer: [
      'Prior to export across 50+ countries, every Dermaline product undergoes 18 stability and microbiological safety evaluations.',
      'Our ISO 13485 certification verifies that Dermaline manufacturing processes fulfill stringent international guidelines for medical equipment and clinical aesthetic formulations.'
    ],
    usageSteps: [
      'Every unit features authentic QR anti-counterfeiting seals and batch tracking codes on outer packaging.'
    ],
    doctorAdvice: 'Clinics and retail consumers can rely on complete batch traceability and absolute sterile purity.',
    recommendedProducts: [
      { name: 'Dermaline PDRN Magic Ampoule 35ml', category: 'KGMP Certified', link: '/products' }
    ]
  }
];

export const MOCK_REAL_CUSTOMER_SHOWCASE: RealCustomerShowcaseItem[] = [
  {
    id: 'rc-1',
    slug: 'post-laser-redness-pdrn-recovery-kim-min-ji',
    customerName: 'Kim Min-Ji',
    customerAge: 32,
    skinType: 'Sensitive & Post-Laser Reactive Skin',
    concern: 'Severe Post-Fractional Laser Redness & Epidermal Thinning',
    categoryTag: 'post-laser',
    categoryTagLabel: 'Post-Laser Recovery',
    beforeImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    afterImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    treatmentDuration: '3 Weeks of PDRN Magic Ampoule Routine',
    rating: 5,
    reviewTitle: 'Extremely fast redness cooling after my fractional CO2 laser treatment!',
    reviewContent: 'After my CO2 fractional laser at Seoul Dermatology Clinic, my face was intensely red and stinging. My dermatologist recommended the Dermaline PDRN Magic Ampoule paired with Exo-Peptide Cream. Within 5 days, the burning sensation stopped completely. At 3 weeks, my skin tone is smooth, hydrated, and radiant!',
    verifiedClinicBuyer: true,
    clinicName: 'Gangnam Dermatology Clinic (Seoul)',
    usedProducts: [
      {
        id: 'p-pdrn-magic',
        name: 'Dermaline PDRN Magic Ampoule 35ml',
        image: 'https://en.dermaline.co.kr/web/upload/category/editor/2024/12/02/9525cceae1c70e30eb49a888bdf218cf.jpg',
        category: 'PDRN Care Line',
        link: '/products',
      },
      {
        id: 'p-exo-cream',
        name: 'Exo-Peptide Barrier Recovery Cream 50g',
        image: 'https://en.dermaline.co.kr/web/upload/category/editor/2024/12/02/7cf511574fe469cd67cd938c532abd20.jpg',
        category: 'Barrier Repair',
        link: '/products',
      },
    ],
    date: 'Feb 02, 2026',
  },
  {
    id: 'rc-2',
    slug: 'pdrn-glass-skin-booster-sophia-chen',
    customerName: 'Sophia Chen',
    customerAge: 29,
    skinType: 'Dry & Dehydrated Skin with Fine Lines',
    concern: 'Loss of Dermal Density & Persistent Dullness',
    categoryTag: 'pdrn-glow',
    categoryTagLabel: 'PDRN Glass Skin Glow',
    beforeImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    afterImage: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80',
    treatmentDuration: '4 Weeks Daily PDX5 Bio-Booster',
    rating: 5,
    reviewTitle: 'True Korean Glass Skin without sticky residue or breakouts',
    reviewContent: 'I struggled with dull skin and dehydration creases around my eyes due to air conditioning. I started using PDX5 Skin Booster Total Solution 100ml every morning and night. The PDRN salmon DNA extract visibly plumped my cheek contour and restored natural moisture barrier in 4 weeks!',
    verifiedClinicBuyer: true,
    clinicName: 'Verified Dermaline Customer',
    usedProducts: [
      {
        id: 'p-pdx5-booster',
        name: 'PDX5 Skin Booster Total Solution 100ml',
        image: '/images/hero/hero_studio_1.jpg',
        category: 'Special Ampoule',
        link: '/products',
      },
    ],
    date: 'Jan 24, 2026',
  },
  {
    id: 'rc-3',
    slug: 'cica-trouble-soothing-park-seo-yeon',
    customerName: 'Park Seo-Yeon',
    customerAge: 26,
    skinType: 'Oily & Acne-Prone Reactive Skin',
    concern: 'Acne Scars, Active Flare-Ups & Irritated Red Patches',
    categoryTag: 'trouble-cica',
    categoryTagLabel: 'Trouble & Cica Care',
    beforeImage: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80',
    afterImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    treatmentDuration: '2 Weeks Cica Soothing Mask & Cleansing',
    rating: 5,
    reviewTitle: 'Calmed my stubborn hormonal breakouts in just 14 days!',
    reviewContent: 'My skin was constantly inflamed with redness around the T-zone. Dermaline Cica Solution Cleansing Foam and Bio-Cica Sheet Packs completely restored my skin balance. It controls sebum without drying my skin out.',
    verifiedClinicBuyer: true,
    clinicName: 'Pusan Skin Center (Busan)',
    usedProducts: [
      {
        id: 'p-cica-foam',
        name: 'Dermaline Cica Soothing Cleansing Gel 250ml',
        image: '/images/hero/hero_korean_model_2.jpg',
        category: 'Cleansing Line',
        link: '/products',
      },
    ],
    date: 'Jan 18, 2026',
  },
  {
    id: 'rc-4',
    slug: 'dlexo-bio-lifting-anti-aging-elena-rostova',
    customerName: 'Elena Rostova',
    customerAge: 44,
    skinType: 'Mature Skin with Deep Expression Wrinkles',
    concern: 'Sagging Jowls, Deep Smile Lines & Loss of Elasticity',
    categoryTag: 'barrier-repair',
    categoryTagLabel: 'Bio-Lifting & Barrier Repair',
    beforeImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    afterImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    treatmentDuration: '6 Weeks D\'LEXO Bio-Lifting Ampoule',
    rating: 5,
    reviewTitle: 'Clinic-grade lifting effect right at home. Remarkable elasticity!',
    reviewContent: "I was considering thread lifting at a spa, but decided to try D'LEXO Bio-Lifting Ampoule 50ml first. The 10 Billion Exosome formulation visibly tightened my jawline and smoothed out my forehead wrinkles. My skin feels firm and resilient!",
    verifiedClinicBuyer: true,
    clinicName: 'Beauty Clinic Frankfurt (Germany)',
    usedProducts: [
      {
        id: 'p-dlexo-lifting',
        name: "D'LEXO Bio-Lifting Exosome Ampoule 50ml",
        image: 'https://en.dermaline.co.kr/web/upload/category/editor/2024/12/02/9525cceae1c70e30eb49a888bdf218cf.jpg',
        category: "D'LEXO Line",
        link: '/products',
      },
    ],
    date: 'Jan 05, 2026',
  },
];
