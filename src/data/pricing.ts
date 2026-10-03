export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  priceUSD: string;
  pricePKR?: string;
  billingPeriod: string;
  timeline: string;
  description: string;
  features: string[];
  notIncluded?: string[];
  ctaText: string;
  ctaHref: string;
}

export interface AddOnItem {
  id: string;
  title: string;
  pricePKR: string;
  priceUSD: string;
  description: string;
  timeline: string;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'starter-website',
    name: 'Starter Website',
    badge: 'Fast Turnaround',
    priceUSD: '$750',
    pricePKR: 'PKR 140,000',
    billingPeriod: 'one-time investment',
    timeline: '1–2 weeks delivery',
    description: 'Perfect for startups, service professionals, and modern boutiques needing a high-impact digital presence.',
    features: [
      'Up to 5 bespoke custom pages',
      'Ultra-responsive mobile-first design',
      'Next.js 14/15 & Tailwind CSS engineering',
      'Core Web Vitals 95+ score guarantee',
      'SEO meta tags & OpenGraph social cards',
      'Interactive contact / inquiry form',
      'Domain & Vercel deployment setup',
      '14 days complimentary post-launch support',
    ],
    ctaText: 'Start Your Website',
    ctaHref: '/contact?tier=starter-website',
  },
  {
    id: 'business-website',
    name: 'Business Website',
    badge: 'Most Popular',
    popular: true,
    priceUSD: '$1,850',
    pricePKR: 'PKR 350,000',
    billingPeriod: 'one-time investment',
    timeline: '2–3 weeks delivery',
    description: 'For growing companies needing advanced content workflows, custom animations, and lead capture funnels.',
    features: [
      'Up to 10–12 custom coded pages',
      'Headless CMS integration (Sanity or Strapi)',
      'Custom Framer Motion micro-animations',
      'Multi-step lead capture / quote funnel',
      'CRM integration (HubSpot, Mailchimp, etc.)',
      'Blog & editorial publication system',
      'Google Analytics 4 & Meta Pixel setup',
      '30 days post-launch hyper-care & training',
    ],
    ctaText: 'Build Your Business Site',
    ctaHref: '/contact?tier=business-website',
  },
  {
    id: 'ecommerce-store',
    name: 'E-Commerce Store',
    badge: 'High Conversion',
    priceUSD: '$2,900',
    pricePKR: 'PKR 550,000',
    billingPeriod: 'one-time investment',
    timeline: '3–4 weeks delivery',
    description: 'Full-featured online store engineered for sub-second checkout speeds and elevated brand aesthetics.',
    features: [
      'Complete online catalog & collection pages',
      'Headless Shopify or custom Next.js storefront',
      'Stripe / Local payment gateway checkout',
      'Product variant picker & bundle logic',
      'Dynamic cart drawer with upsells',
      'Automated order confirmation emails',
      'Inventory management sync',
      '45 days post-launch warranty & maintenance',
    ],
    ctaText: 'Launch Your Store',
    ctaHref: '/contact?tier=ecommerce-store',
  },
  {
    id: 'custom-software-ai',
    name: 'Custom Software & AI Systems',
    badge: 'Bespoke Quote',
    priceUSD: 'Custom Quote',
    pricePKR: 'Tailored Scope',
    billingPeriod: 'milestone or monthly retainer',
    timeline: '4–8+ weeks scope dependent',
    description: 'For founders and enterprises building proprietary AI agents, internal automation tools, or full SaaS platforms.',
    features: [
      'Custom AI Agents (LangChain, LangGraph, RAG)',
      'Full-stack SaaS architecture (Supabase / Postgres)',
      'Multi-tenant authentication & RBAC matrices',
      'Stripe subscription billing & usage metering',
      'Custom n8n / Make automation pipelines',
      'Enterprise SLA & dedicated cloud architecture',
      'Weekly engineering demos & sprint planning',
      'Comprehensive code handoff & documentation',
    ],
    ctaText: 'Request Custom Scope',
    ctaHref: '/contact?tier=custom-software-ai',
  },
];

export const ADD_ONS: AddOnItem[] = [
  {
    id: 'booking-system',
    title: 'Interactive Booking & Scheduling System',
    pricePKR: 'Starting around 20,000–30,000 PKR',
    priceUSD: 'From $120',
    description: 'Real-time calendar booking, automated customer reminders via SMS/Email, and Google/Outlook Calendar sync.',
    timeline: '+2–3 days',
  },
  {
    id: 'payment-gateway',
    title: 'Payment Gateway Integration',
    pricePKR: 'Starting around 25,000–35,000 PKR',
    priceUSD: 'From $150',
    description: 'Seamless integration for local Pakistani gateways (JazzCash, EasyPaisa, PayFast) or international (Stripe, LemonSqueezy).',
    timeline: '+3–4 days',
  },
  {
    id: 'admin-cms-dashboard',
    title: 'Custom Admin & CMS Management Panel',
    pricePKR: 'Starting around 30,000–45,000 PKR',
    priceUSD: 'From $180',
    description: 'Tailored dashboard for managing inventory, viewing leads, editing copy, and downloading CSV reports without touching code.',
    timeline: '+4–5 days',
  },
  {
    id: 'ai-chatbot-widget',
    title: 'AI Chatbot & Knowledge Base Widget',
    pricePKR: 'Starting around 35,000–50,000 PKR',
    priceUSD: 'From $200',
    description: 'Domain-trained GPT chatbot integrated directly onto your site to answer customer questions and capture lead contacts 24/7.',
    timeline: '+3–5 days',
  },
  {
    id: 'multilingual-localization',
    title: 'Multi-Language Localization',
    pricePKR: 'Starting around 20,000–30,000 PKR',
    priceUSD: 'From $120',
    description: 'Dynamic language switcher (e.g. English, Urdu, Arabic) with RTL support and localized URL paths for international SEO.',
    timeline: '+2–3 days',
  },
];

export const PAYMENT_STRUCTURE = {
  milestones: [
    {
      percentage: '50%',
      stage: 'Advance Deposit',
      desc: 'Project kickoff, requirements lock, and architecture wireframing.',
    },
    {
      percentage: '30%',
      stage: 'On Design & Demo Approval',
      desc: 'Interactive staging prototype review and full visual sign-off.',
    },
    {
      percentage: '20%',
      stage: 'Before Final Production Launch',
      desc: 'Final QA, DNS cutover, source code handover, and production release.',
    },
  ],
  guarantee: 'Fixed pricing. Clear milestones. No surprise invoices.',
  note: 'All add-on scopes receive an itemized quote following our discovery call before any work begins.',
};
