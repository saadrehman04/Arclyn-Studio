export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  pricePKR: string;
  priceUSD?: string;
  billingPeriod?: string;
  priceRange?: string;
  timeline: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
}

export interface AddOnItem {
  id: string;
  title: string;
  pricePKR: string;
  priceUSD?: string;
  description: string;
  timeline: string;
}

export interface AIAutomationService {
  id: string;
  title: string;
  pricePKR: string;
  timeline: string;
  problemSolved: string;
  whatClientGets: string;
  businessImpact: string;
  idealFit?: string;
}

// 1. Website Development Packages (PKR)
export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'starter-website',
    name: 'Starter Website',
    badge: 'Fast Turnaround',
    pricePKR: '40,000 – 50,000 PKR',
    timeline: '5 to 7 working days',
    description: 'Up to 5 pages, mobile responsive, and fully configured with essential business features.',
    features: [
      'Up to 5 custom responsive pages',
      'Mobile responsive across all screen sizes',
      'Interactive contact inquiry form',
      'Direct WhatsApp click-to-chat button',
      'Interactive Google Map integration',
      'Social media links & OpenGraph cards',
      'Free SSL security certificate',
      'Basic on-page SEO setup & meta tags',
      'Unlimited revisions during development',
      'Free hosting and maintenance for 1 year',
    ],
    ctaText: 'Start Starter Website',
    ctaHref: '/contact?tier=starter-website',
  },
  {
    id: 'business-website',
    name: 'Business Website',
    badge: 'Most Popular',
    popular: true,
    pricePKR: 'from 50,000 PKR',
    timeline: '5 to 7 working days',
    description: 'Up to 10 pages, fully custom design with blog setup, instant lead alerts, and CMS editor.',
    features: [
      'Up to 10 bespoke custom pages',
      '100% fully custom tailored UI/UX design',
      'Full blog publication setup',
      'Lead forms with instant email alerts',
      'Google Analytics & conversion tracking',
      'Core Web Vitals page speed optimization',
      'Comprehensive SEO setup & sitemaps',
      'Easy-to-use CMS editor for client updates',
      'Unlimited revisions during development',
      'Free hosting and maintenance for 1 year',
    ],
    ctaText: 'Build Business Website',
    ctaHref: '/contact?tier=business-website',
  },
  {
    id: 'ecommerce-store',
    name: 'E-commerce Store',
    badge: 'High Conversion',
    pricePKR: '50,000 – 70,000 PKR',
    timeline: '5 to 7 working days',
    description: 'Up to unlimited products, seamless checkout workflow, payment gateway, and admin dashboard.',
    features: [
      'Up to Unlimited products loaded',
      'Modern shopping cart & checkout workflow',
      'Payment gateway integration (Stripe / Local)',
      'Complete order management system',
      'Comprehensive administrative dashboard',
      'Mobile-first responsive storefront',
      'Free SSL certificate & speed optimization',
      'Basic SEO setup & product schema',
      'Unlimited revisions during development',
      'Free hosting and maintenance for 1 year',
    ],
    ctaText: 'Launch Online Store',
    ctaHref: '/contact?tier=ecommerce-store',
  },
];

// 2. AI Automation Services (PKR)
export const AI_AUTOMATION_SERVICES: AIAutomationService[] = [
  {
    id: 'customer-chatbot',
    title: 'Customer Chatbot Automation',
    pricePKR: '15,000 – 20,000 PKR',
    timeline: '2 to 3 days',
    problemSolved: 'Customers reach out after hours or during peak times; slow responses cause leads to bounce to competitors.',
    whatClientGets: 'A custom-trained website/WhatsApp chatbot answering daily FAQs (pricing, hours, services) instantly, with seamless human handoff for complex queries.',
    businessImpact: 'Instant 24/7 customer engagement improves lead conversion rates dramatically.',
    idealFit: 'E-commerce stores, real estate, restaurants, professional services',
  },
  {
    id: 'whatsapp-automation',
    title: 'WhatsApp Business Automation',
    pricePKR: '15,000 PKR',
    timeline: '2 to 3 days',
    problemSolved: "Manual messaging on WhatsApp doesn't scale past a few chats per day.",
    whatClientGets: 'Automated replies, order status notifications, appointment reminders, and support workflows integrated directly into their official WhatsApp Business account.',
    businessImpact: 'High-impact customer engagement on the primary communication channel in the market.',
    idealFit: 'Retailers, clinics, salons, local agencies, and online brands',
  },
  {
    id: 'booking-appointment',
    title: 'Booking & Appointment Automation',
    pricePKR: '15,000 – 20,000 PKR',
    timeline: '2 to 3 days',
    problemSolved: 'Back-and-forth scheduling wastes staff time, and missed appointments lead to lost revenue.',
    whatClientGets: 'Self-service online booking synced to staff calendars with automated SMS/WhatsApp reminders and confirmations.',
    businessImpact: 'Drastically reduces no-shows and recovers lost booking opportunities.',
    idealFit: 'Dental clinics, medical practices, salons, fitness gyms, and consultants',
  },
  {
    id: 'ai-voice-agent',
    title: 'AI Voice Agent',
    pricePKR: '30,000 PKR',
    timeline: '1 week (quoted after discovery)',
    problemSolved: 'Unanswered phone calls during busy hours or after-hours result in lost business.',
    whatClientGets: 'A conversational voice agent that handles inbound phone calls, answers FAQs, schedules bookings, and routes urgent calls seamlessly without a robotic phone tree.',
    businessImpact: '24/7 phone coverage without hiring additional receptionist staff.',
    idealFit: 'Clinics, restaurants, real estate agencies, and service providers with high call volumes',
  },
  {
    id: 'lead-qualification',
    title: 'Lead Capture & Qualification Automation',
    pricePKR: '20,000 PKR',
    timeline: '2 to 3 days',
    problemSolved: 'Leads scattered across email, Instagram, WhatsApp, and web forms go cold due to delayed follow-ups.',
    whatClientGets: 'Centralized lead aggregation, automated scoring/qualification, instant buyer auto-responses, and team notifications.',
    businessImpact: 'Faster lead response times significantly boost sales conversion rates.',
    idealFit: 'Real estate brokers, B2B agencies, education consultants, high-ticket services',
  },
  {
    id: 'ecommerce-suite',
    title: 'E-commerce Automation Suite',
    pricePKR: '20,000 – 30,000 PKR',
    timeline: '4 to 5 days',
    problemSolved: 'High cart abandonment rates and time-consuming manual order/inventory tasks.',
    whatClientGets: 'Automated cart abandonment recovery messages, stock alert notifications, automated post-purchase review requests, and order confirmation flows.',
    businessImpact: 'Recovers lost sales automatically and increases customer lifetime value.',
    idealFit: 'Direct-to-consumer online stores, apparel brands, electronics retailers',
  },
  {
    id: 'custom-ai-workflow',
    title: 'Custom AI Agent (Advanced Workflow)',
    pricePKR: 'from 30,000 PKR',
    timeline: '1 week (quoted after discovery)',
    problemSolved: 'Repetitive multi-step admin tasks consuming valuable employee hours.',
    whatClientGets: 'A tailored AI workflow system connecting multiple tools (e.g., email parsing, document data extraction, spreadsheet updates, and CRM sync).',
    businessImpact: 'Eliminates hours of manual work weekly with end-to-end task automation.',
    idealFit: 'Operations teams, logistics, finance, legal, and multi-tool businesses',
  },
];

// What's Included in Every AI Package
export const AI_PACKAGE_INCLUSIONS = [
  'A short discovery call first, so we build around how the business actually works, not a generic template',
  'Tested on their real use case before handover',
  'A simple walkthrough so their team knows how to use it day to day',
  '30 days of free fixes after launch',
  'Unlimited revisions during the build',
];

// Project Terms & Policies
export const PROJECT_TERMS_POLICIES = {
  timeline: '5 to 7 working days',
  revisions: 'Unlimited revisions during development',
  contentAndSeo: {
    title: 'Content, Images & SEO',
    description: 'The client provides the logo, copy, and images. We offer basic copywriting for a per-page fee and source licensed stock photos. Basic on-page SEO is included with every build (meta titles, descriptions, sitemap, Google Search Console, speed setup).',
  },
  paymentStructure: {
    title: 'Payment Structure',
    stages: [
      { percentage: '30%', stage: 'Design Approval', desc: 'Scope lock and design sign-off' },
      { percentage: '20%', stage: 'Before Launch', desc: 'Pre-launch validation and testing' },
      { percentage: '50%', stage: 'After Launch & Handover', desc: 'Final launch, domain cutover, and 100% handover' },
    ],
  },
  hostingAndMaintenance: {
    title: 'Hosting & Maintenance',
    description: 'Free hosting and maintenance for 1 year. Standard annual renewal charges apply thereafter.',
  },
  domainOwnership: {
    title: 'Domain Ownership',
    description: "The domain is registered in the client's name or transferred immediately upon purchase so the client retains 100% ownership. Domain costs are paid directly by the client.",
  },
  partnerCommission: {
    title: 'Partner Commission Structure',
    description: '30% fixed commission per client. Increases to 40% for all subsequent deals after your 3rd successful referral.',
    standardRate: '30%',
    vipRate: '40%',
  },
  clientHandlingWorkflow: {
    title: 'Client Handling Workflow',
    description: 'You manage initial contact and basic inquiries using this reference doc. Following the intro, our team handles discovery, quoting, contracts, technical execution, delivery, and ongoing support.',
  },
  cancellationAndRefund: {
    title: 'Cancellation & Refund Policy',
    description: 'Once work begins, advance payments are non-refundable as they cover allocated time and resources. Cancellations prior to work starting receive a full refund minus a minor admin fee. Mid-project cancellations require payment for completed work. No refunds are issued post-handover. Commissions are paid strictly on retained revenue.',
  },
};

export const ADD_ONS: AddOnItem[] = [
  {
    id: 'customer-chatbot',
    title: 'Customer Chatbot Automation',
    pricePKR: '15,000 – 20,000 PKR',
    priceUSD: 'from $55',
    description: 'Custom-trained website/WhatsApp chatbot answering daily FAQs with seamless human handoff.',
    timeline: '2 to 3 days',
  },
  {
    id: 'whatsapp-automation',
    title: 'WhatsApp Business Automation',
    pricePKR: '15,000 PKR',
    priceUSD: '$55',
    description: 'Automated replies, order alerts, appointment reminders in official WhatsApp Business account.',
    timeline: '2 to 3 days',
  },
  {
    id: 'booking-appointment',
    title: 'Booking & Appointment Automation',
    pricePKR: '15,000 – 20,000 PKR',
    priceUSD: 'from $55',
    description: 'Self-service online booking synced to staff calendars with SMS/WhatsApp reminders.',
    timeline: '2 to 3 days',
  },
  {
    id: 'ai-voice-agent',
    title: 'AI Voice Agent',
    pricePKR: '30,000 PKR',
    priceUSD: '$110',
    description: 'Conversational voice agent handling inbound calls, FAQs, bookings without robotic menus.',
    timeline: '1 week',
  },
  {
    id: 'lead-qualification',
    title: 'Lead Capture & Qualification',
    pricePKR: '20,000 PKR',
    priceUSD: '$75',
    description: 'Centralized lead aggregation, scoring, instant auto-responses, and team notifications.',
    timeline: '2 to 3 days',
  },
  {
    id: 'ecommerce-suite',
    title: 'E-commerce Automation Suite',
    pricePKR: '20,000 – 30,000 PKR',
    priceUSD: 'from $75',
    description: 'Cart abandonment recovery, stock alerts, post-purchase reviews, and order flows.',
    timeline: '4 to 5 days',
  },
];

export const PAYMENT_STRUCTURE = {
  milestones: [
    {
      percentage: '30%',
      stage: 'On Design Approval',
      desc: 'Project scope lock, custom wireframes, and design sign-off.',
    },
    {
      percentage: '20%',
      stage: 'Before Final Launch',
      desc: 'Interactive preview review, speed optimization, and QA validation.',
    },
    {
      percentage: '50%',
      stage: 'After Launch and Handover',
      desc: 'DNS cutover, live deployment, 100% domain handover, and post-launch support.',
    },
  ],
  guarantee: 'Fixed pricing. Clear milestones. 5–7 day delivery with unlimited revisions.',
  note: 'Free hosting & maintenance for 1 year. 100% domain ownership in client name.',
};

