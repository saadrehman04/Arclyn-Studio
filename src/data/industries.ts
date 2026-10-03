export interface Industry {
  id: string;
  name: string;
  tagline: string;
  description: string;
  styleInspiration: string;
  conversionFocus: string[];
  keyFeatures: string[];
  arclynExample?: {
    name: string;
    url?: string;
    note: string;
  };
  mockupTheme: {
    accentColor: string;
    bgStyle: string;
    demoHeadline: string;
    demoSub: string;
    demoTags: string[];
    demoCta: string;
  };
}

export const INDUSTRIES: Industry[] = [
  {
    id: 'restaurants-hospitality',
    name: 'Restaurants & Hospitality',
    tagline: 'Appetite-driven, sensory digital experiences for culinary brands',
    description: 'We craft immersive restaurant and dining web platforms featuring high-res sensory photography, fluid digital menu browsing, reservation integrations (OpenTable/Resy), and direct delivery checkout to avoid aggregator commission fees.',
    styleInspiration: 'Inspired by the appetite-inducing typography and tactile editorial compositions seen in Pinza and modern Michelin-guide dining web experiences.',
    conversionFocus: [
      'Instant table reservation flow',
      'Mobile-optimized interactive digital menus',
      'Direct order pickup/delivery without 30% platform commissions',
      'Private dining and event inquiry funnels',
    ],
    keyFeatures: [
      'Multi-location menus with dietary tagging',
      'Chef tasting menu stories & ingredient origins',
      'VIP reservation calendar syncing',
      'Instagram live feeds & press clippings',
    ],
    mockupTheme: {
      accentColor: '#F97316',
      bgStyle: 'from-amber-950/30 via-slate-900/60 to-black',
      demoHeadline: 'Artisan Woodfired Dining & Sommelier Pairings',
      demoSub: 'Crafted with heirloom grains, hand-pulled burrata, and sustainable local harvests.',
      demoTags: ['Sensory Photography', 'OpenTable API', 'Direct Delivery', 'Zero Commissions'],
      demoCta: 'Reserve Your Table',
    },
  },
  {
    id: 'ecommerce-retail',
    name: 'E-Commerce & DTC Retail',
    tagline: 'Sub-second headless storefronts engineered for maximum average order value',
    description: 'Elevate physical products into coveted luxury brands. We construct headless e-commerce storefronts with instant variant switching, bundle builders, customer reviews, and zero-latency mobile checkout funnels.',
    styleInspiration: 'Inspired by the elevated product grids, typography, and tactile material textures of contemporary retail pioneers like Made.com and Zoku Home.',
    conversionFocus: [
      'Frictionless 1-click mobile checkout',
      'Dynamic cross-sell & bundle recommendations',
      'Micro-animations on add-to-cart interactions',
      'Sub-second search with instant autocomplete',
    ],
    keyFeatures: [
      'Headless Shopify or Stripe backend',
      'Custom product customizers & previewers',
      'Real-time inventory sync & backorder alerts',
      'Post-purchase review automation',
    ],
    arclynExample: {
      name: 'Vinzlu — Premium Pantry',
      url: 'https://vinzlu.com',
      note: 'Our real-world production e-commerce platform selling artisan staples globally.',
    },
    mockupTheme: {
      accentColor: '#06B6D4',
      bgStyle: 'from-cyan-950/30 via-slate-900/60 to-black',
      demoHeadline: 'Curated Artisan Pantry & Global Heritage Spices',
      demoSub: 'Small-batch, ethically sourced pantry staples delivered directly to discerning home chefs.',
      demoTags: ['Headless Storefront', '1-Click Checkout', 'Bundle Builder', 'Klaviyo Sync'],
      demoCta: 'Explore Collection',
    },
  },
  {
    id: 'real-estate-architecture',
    name: 'Real Estate & Luxury Developments',
    tagline: 'Architectural storytelling for multi-million dollar residential & commercial assets',
    description: 'Ultra-luxury property brokerages and development firms require digital presence that reflects architectural caliber. We build cinematic property platforms with full-bleed media galleries, interactive neighborhood maps, and private client portals.',
    styleInspiration: 'Inspired by the refined editorial pacing and architectural reverence of global luxury developments in Manhattan, Beverly Hills, and the French Riviera.',
    conversionFocus: [
      'VIP private showing scheduling',
      'Interactive floorplan & 3D tour viewers',
      'Foreign currency converters for international buyers',
      'Direct confidential broker contact funnels',
    ],
    keyFeatures: [
      'High-res video & drone footage hero embeds',
      'Filterable MLS/IDX property database sync',
      'Neighborhood amenity guides with interactive GIS maps',
      'Investor prospectus download gates',
    ],
    arclynExample: {
      name: 'Prestige Estates',
      url: 'https://real-estate-website-topaz-mu.vercel.app/',
      note: 'Our real-world production luxury real estate platform featuring estates across Beverly Hills and Malibu.',
    },
    mockupTheme: {
      accentColor: '#8B5CF6',
      bgStyle: 'from-purple-950/30 via-slate-900/60 to-black',
      demoHeadline: 'The Malibu Ridge Sanctuary — $28,500,000',
      demoSub: 'Unobstructed Pacific ocean horizons, infinity glass pools, and private helicopter landing pads.',
      demoTags: ['Cinematic 4K Tours', 'Interactive Floorplans', 'Broker WhatsApp Direct', 'VIP Portals'],
      demoCta: 'Request Private Tour',
    },
  },
  {
    id: 'fitness-athletics',
    name: 'Gyms, Fitness & Athletics',
    tagline: 'High-energy, conversion-driven digital platforms for performance clubs',
    description: 'Fuel member signups and community engagement with athletic, high-contrast digital designs. Features class schedule booking, trainer profile cards, automated trial passes, and member dashboard portals.',
    styleInspiration: 'Inspired by the electric kinetic typography, dark-mode grit, and high-impact motion found in leading performance athletic brands.',
    conversionFocus: [
      'Instant 3-day guest pass claiming',
      'Real-time class schedule booking with spot reserve',
      'Trainer credibility & specialty showcase',
      'Member transformation proof galleries',
    ],
    keyFeatures: [
      'Live class calendar with instructor filters',
      'Integrated membership tier checkout',
      'Nutrition and workout resource libraries',
      'Automated SMS trial reminder workflows',
    ],
    mockupTheme: {
      accentColor: '#10B981',
      bgStyle: 'from-emerald-950/30 via-slate-900/60 to-black',
      demoHeadline: 'High-Performance Strength & Conditioning Club',
      demoSub: 'Olympic lifting platforms, cold plunges, and expert biometric coaching to push your limits.',
      demoTags: ['Live Class Schedules', 'Instant Free Trial', 'Trainer Portals', 'Automated SMS'],
      demoCta: 'Claim Your 3-Day Pass',
    },
  },
  {
    id: 'home-services-trades',
    name: 'Home Services & Specialized Trades',
    tagline: 'Cinematic trust-building funnels for technicians, electricians, and contractors',
    description: 'Transform blue-collar services into premier on-demand operations. We design high-converting emergency booking platforms featuring transparent upfront pricing estimators, technician verification badges, and warranty guarantees.',
    styleInspiration: 'Inspired by modern tech-forward dispatch platforms that replace clunky directories with instant, transparent service booking.',
    conversionFocus: [
      'Same-day emergency dispatch booking',
      'Instant diagnostic price estimator calculator',
      'Licensed & insured warranty badges',
      '5-star verified customer photo reviews',
    ],
    keyFeatures: [
      'Zip-code availability verification',
      'Live technician status dispatch tracker',
      'Before & after project galleries with sliders',
      'Click-to-call sticky mobile CTA bar',
    ],
    arclynExample: {
      name: 'Fixora — Instant Repair',
      url: 'https://instant-repair.vercel.app/',
      note: 'Our real-world production service booking platform with 5,000+ clients served and 90-day warranties.',
    },
    mockupTheme: {
      accentColor: '#3B82F6',
      bgStyle: 'from-blue-950/30 via-slate-900/60 to-black',
      demoHeadline: 'Same-Day Certified Device & Electrical Repair',
      demoSub: 'Licensed master technicians at your doorstep in under 60 minutes with a full 90-day warranty.',
      demoTags: ['Instant Price Estimator', '5,000+ Clients', '90-Day Warranty', 'Live Dispatch'],
      demoCta: 'Book Service In 60s',
    },
  },
  {
    id: 'medical-clinics',
    name: 'Medical & Dental Clinics',
    tagline: 'Reassuring, accessible, and HIPAA-compliant healthcare portals',
    description: 'Instill immediate patient confidence with clean, trust-forward layouts. We engineer healthcare web platforms featuring physician credential highlights, patient intake onboarding, procedure explanations, and verified patient reviews.',
    styleInspiration: 'Inspired by leading clinical wellness centers that merge clinical precision with empathetic, comforting visual environments.',
    conversionFocus: [
      'Online appointment scheduling with calendar select',
      'Insurance accepted instant eligibility lookup',
      'Physician board certifications & affiliations',
      'New patient registration digital forms',
    ],
    keyFeatures: [
      'Condition and treatment educational guides',
      'Doctor bio videos and clinical backgrounds',
      'Patient portal login & telehealth links',
      'WCAG AA accessible contrast & typography',
    ],
    arclynExample: {
      name: 'Rahma Medical Center',
      url: 'https://medicalclinicwebsite.vercel.app/',
      note: 'Our real-world production clinic platform built for Dr. Ahmed Al-Rashid in Houston.',
    },
    mockupTheme: {
      accentColor: '#0EA5E9',
      bgStyle: 'from-sky-950/30 via-slate-900/60 to-black',
      demoHeadline: 'Compassionate Primary & Specialized Internal Care',
      demoSub: 'Board-certified physicians, state-of-the-art diagnostic testing, and same-day consultations.',
      demoTags: ['HIPAA Compliant', 'Online Scheduling', 'Insurance Checker', 'Patient Portal'],
      demoCta: 'Schedule Consultation',
    },
  },
];
