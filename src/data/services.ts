export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  badge: string;
  iconName: string;
  deliverables: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  technologies: string[];
  faqs: { question: string; answer: string }[];
  caseStudyId: string;
  benefits: string[];
}

export const SERVICES: Service[] = [
  {
    id: 'web-ecommerce',
    slug: 'website-ecommerce-development',
    title: 'Website & E-Commerce Development',
    badge: 'Core Offering',
    shortDesc: 'Ultra-fast, high-converting digital flagships and headless e-commerce stores designed for modern brands.',
    longDesc: 'We build digital storefronts and bespoke web platforms engineered for lightning speed, editorial visual aesthetics, and relentless conversion. No cookie-cutter WordPress themes or sluggish page builders — every pixel is custom-coded using Next.js, TypeScript, and modern CSS.',
    iconName: 'Globe',
    deliverables: [
      { title: 'Custom UI/UX Architecture', desc: 'Bespoke design systems tailored to your brand identity, optimized for mobile responsiveness and engagement.' },
      { title: 'Headless E-Commerce Integration', desc: 'Seamless integration with Shopify Storefront API, Stripe, LemonSqueezy, or custom checkout funnels.' },
      { title: 'Core Web Vitals & SEO Perfection', desc: 'Pre-rendered static & server-side pages scoring 95+ on Google Lighthouse with structured schema markup.' },
      { title: 'Interactive Micro-Animations', desc: 'Subtle motion design using Framer Motion that delights users without slowing down runtime performance.' },
      { title: 'Content Management Integration', desc: 'Sanity, Strapi, or headless CMS workflows so your marketing team can update content without code.' },
    ],
    process: [
      { step: '01', title: 'Discovery & Wireframing', desc: 'We audit your target market, define user journeys, and create clickable high-fidelity wireframes.' },
      { step: '02', title: 'Design & Component System', desc: 'We build custom interactive components matching your exact brand aesthetics and motion requirements.' },
      { step: '03', title: 'Full-Stack Engineering', desc: 'We develop your frontend in Next.js 14/15 App Router, hook up APIs, payments, and CMS data pipelines.' },
      { step: '04', title: 'QA, Optimization & Launch', desc: 'Cross-browser testing, Core Web Vitals profiling, DNS setup, and seamless production deployment.' },
    ],
    technologies: ['Next.js 14/15', 'TypeScript', 'Tailwind CSS', 'React', 'Framer Motion', 'Shopify Storefront API', 'Stripe', 'Sanity CMS'],
    faqs: [
      { question: 'How long does a website or e-commerce build typically take?', answer: 'Most starter websites take 1-2 weeks, while full custom e-commerce stores or complex multi-page platforms take 3-4 weeks from concept approval to production launch.' },
      { question: 'Can our internal team easily edit text, images, and products?', answer: 'Yes. We connect an intuitive headless CMS or e-commerce dashboard (such as Sanity or Shopify) allowing your team to update inventory, banners, and copy without developer assistance.' },
      { question: 'Do you optimize for mobile and search engines?', answer: 'Every build is strictly mobile-first with automated OpenGraph tags, semantic HTML5 structure, sitemaps, JSON-LD rich snippets, and sub-second load times.' },
      { question: 'What happens after the website launches?', answer: 'We include 30 days of post-launch hyper-care and warranty, followed by optional ongoing retainer plans for continuous performance optimization and feature releases.' },
    ],
    caseStudyId: 'vinzlu',
    benefits: ['Sub-second page transitions', 'Zero template bloat', 'Higher mobile checkout conversion', 'Turnkey CMS handoff'],
  },
  {
    id: 'mobile-app',
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    badge: 'Cross-Platform',
    shortDesc: 'Native-feel iOS and Android mobile apps crafted with Flutter and React Native for fluid mobile performance.',
    longDesc: 'From consumer apps with intuitive gestures to enterprise field tools, we engineer cross-platform mobile applications that feel completely native. We handle the entire lifecycle: architecture, offline data synchronization, push notifications, and App Store / Google Play submissions.',
    iconName: 'Smartphone',
    deliverables: [
      { title: 'Unified Cross-Platform Codebase', desc: 'Single high-performance codebase targeting both iOS and Android, cutting delivery timelines in half.' },
      { title: 'Offline-First Data Sync', desc: 'Local database caching and background synchronization for uninterrupted operation even without connectivity.' },
      { title: 'Push Notifications & Deep Linking', desc: 'Segmented push messaging workflows and universal links that guide users directly to specific screens.' },
      { title: 'Biometrics & Native Device APIs', desc: 'Haptic feedback, FaceID/fingerprint authentication, camera capture, and location tracking.' },
      { title: 'Store Submission & Compliance', desc: 'Complete management of Apple App Store Review Guidelines and Google Play Console release management.' },
    ],
    process: [
      { step: '01', title: 'Product Architecture', desc: 'Map screen states, API endpoints, authentication flows, and offline sync boundaries.' },
      { step: '02', title: 'Interactive Prototype', desc: 'Review native UI design system on physical test devices using TestFlight and internal testing tracks.' },
      { step: '03', title: 'Client & Backend Integration', desc: 'Connect state management, REST/GraphQL endpoints, Firebase/Supabase, and analytics.' },
      { step: '04', title: 'Production Release', desc: 'Automated CI/CD build distribution, store listing optimization, and launch support.' },
    ],
    technologies: ['React Native', 'Flutter', 'TypeScript', 'Dart', 'Expo', 'Supabase', 'Firebase', 'Fastlane'],
    faqs: [
      { question: 'Do you build native or cross-platform apps?', answer: 'We specialize in modern cross-platform frameworks (React Native and Flutter) which compile to native machine code, providing 60fps native performance while allowing a single codebase for iOS and Android.' },
      { question: 'Do you help get the app approved by Apple and Google?', answer: 'Yes, we manage the entire publishing pipeline including bundle signing, store listings, privacy compliance declarations, and responding to review feedback.' },
      { question: 'Can the app communicate with our existing web backend?', answer: 'Absolutely. We build clean API client layers that seamlessly integrate with your existing databases, authentication providers, and CRM tools.' },
    ],
    caseStudyId: 'fixora-instant-repair',
    benefits: ['Single codebase for iOS & Android', 'Smooth 60fps gesture physics', 'Store approval guarantee', 'Secure biometrics & offline support'],
  },
  {
    id: 'ai-agents',
    slug: 'ai-agent-development',
    title: 'AI Agent Development',
    badge: 'Specialized',
    shortDesc: 'Autonomous multi-agent systems, LangChain/LangGraph pipelines, RAG architectures, and custom tool-calling agents.',
    longDesc: 'We build autonomous AI agents that do real work — not just generic chat wrappers. Utilizing LangChain, LangGraph, tool-calling APIs, and production vector databases, we deploy agents capable of reasoning through multi-step workflows, querying proprietary databases, and taking real-world actions.',
    iconName: 'Bot',
    deliverables: [
      { title: 'Multi-Agent Orchestration Systems', desc: 'Collaborative agent swarms built with LangGraph for specialized division of labor and stateful reasoning.' },
      { title: 'Enterprise RAG & Vector Search', desc: 'Hybrid semantic and keyword search pipelines over PDF libraries, internal documents, and SQL data.' },
      { title: 'API Tool-Use & Function Calling', desc: 'Connecting LLMs to live CRM endpoints, databases, ticketing systems, and webhook triggers.' },
      { title: 'Evaluation & Guardrail Frameworks', desc: 'Deterministic validation rules, hallucination guards, and latency/cost tracking via LangSmith.' },
      { title: 'Voice & Multimodal Agents', desc: 'Real-time conversational agents combining Whisper voice transcription and ElevenLabs voice cloning.' },
    ],
    process: [
      { step: '01', title: 'Task & Logic Scoping', desc: 'We decompose complex human workflows into deterministic vs generative decision nodes.' },
      { step: '02', title: 'Knowledge Pipeline & Embeddings', desc: 'We chunk, vectorize, and index your company domain data into managed vector datastores.' },
      { step: '03', title: 'Graph & Agent Construction', desc: 'We implement LangGraph state machines, memory persistence, fallback triggers, and tool execution.' },
      { step: '04', title: 'Benchmarking & Deployment', desc: 'Rigorous regression testing against edge-case evaluation datasets before production rollout.' },
    ],
    technologies: ['LangChain', 'LangGraph', 'OpenAI GPT-4o', 'Anthropic Claude', 'Pinecone', 'Qdrant', 'Python', 'FastAPI', 'LangSmith'],
    faqs: [
      { question: 'What makes an AI Agent different from a chatbot?', answer: 'A chatbot simply responds to text prompts. An AI Agent has persistent memory, access to external tools (like database querying, CRM updates, and email sending), and can plan and execute multi-step workflows autonomously.' },
      { question: 'How do you prevent hallucinations in high-stakes environments?', answer: 'We implement Retrieval-Augmented Generation (RAG) with strict citation requirements, deterministic output schemas (Pydantic), and fallback confirmation steps for critical operations.' },
      { question: 'Can the agent integrate with our private internal systems?', answer: 'Yes. We build secure API connectors with role-based authentication that keep your data within your existing security perimeter.' },
    ],
    caseStudyId: 'ai-lead-qualification-agent',
    benefits: ['Zero manual triage for repetitive tasks', '24/7 autonomous execution', 'Guaranteed schema compliance', 'Full audit logging & traceability'],
  },
  {
    id: 'ai-automation',
    slug: 'ai-integration-automation',
    title: 'AI Integration & Automation',
    badge: 'High ROI',
    shortDesc: 'Eliminate repetitive manual operations by integrating AI workflows across n8n, Make, custom APIs, and CRMs.',
    longDesc: 'Most businesses leak hundreds of hours every month in manual data entry, lead qualification, and cross-platform copying and pasting. We build resilient end-to-end automation pipelines connecting your existing tools with intelligent AI decision engines.',
    iconName: 'Zap',
    deliverables: [
      { title: 'n8n & Make Workflow Engineering', desc: 'Self-hosted or cloud-managed workflows with retry logic, error handling, and alerting.' },
      { title: 'CRM & Marketing Automation', desc: 'Intelligent lead enrichment, intent classification, and automated routing in HubSpot, Salesforce, or Close.' },
      { title: 'Automated Document Extraction', desc: 'Parsing invoices, contracts, receipts, and forms directly into structured SQL database tables.' },
      { title: 'Custom Webhook Bridges', desc: 'Lightweight microservice bridges connecting disparate SaaS platforms that lack native integrations.' },
      { title: 'Omnichannel Notification Bots', desc: 'Slack and Discord internal operations bots providing instant notifications and quick approval buttons.' },
    ],
    process: [
      { step: '01', title: 'Operational Audit', desc: 'We analyze your team day-to-day bottlenecks to identify high-frequency, high-cost manual tasks.' },
      { step: '02', title: 'Pipeline Architecture', desc: 'We diagram data flows, error boundaries, rate limits, and fallback escalation channels.' },
      { step: '03', title: 'Workflow Build & Dry-Run', desc: 'We build the automation in staging environments using live sample payloads for verification.' },
      { step: '04', title: 'Live Cutover & Monitoring', desc: 'We monitor production execution with automated alerts for API downtime or schema drift.' },
    ],
    technologies: ['n8n', 'Make.com', 'Zapier', 'Python', 'Node.js', 'OpenAI API', 'HubSpot', 'Shopify API', 'Stripe API'],
    faqs: [
      { question: 'Do we need to switch our existing software stack?', answer: 'No. We build automations that connect into your existing tech stack (HubSpot, Shopify, Slack, Google Workspace, PostgreSQL) without disrupting current employee habits.' },
      { question: 'What happens if a third-party service goes down?', answer: 'Our workflows feature automated retry queues, exponential backoff, dead-letter notification channels, and persistent error logs to ensure no data is lost during outages.' },
      { question: 'How quickly do we see ROI on automation?', answer: 'Most clients recover their investment within 4 to 8 weeks by reclaiming 15 to 30+ staff hours every week and eliminating costly manual human errors.' },
    ],
    caseStudyId: 'ecommerce-automation-suite',
    benefits: ['Save 20-40 hours per week', 'Zero human copy-paste errors', 'Real-time multi-system sync', 'Self-healing retry logic'],
  },
  {
    id: 'saas-software',
    slug: 'custom-software-saas-development',
    title: 'Custom Software & SaaS Product Development',
    badge: 'End-to-End',
    shortDesc: 'Production-ready web apps and SaaS products built from scratch with modern architecture, auth, and billing.',
    longDesc: 'Turn your software vision into a market-ready product. We engineer scalable B2B and consumer web applications complete with multi-tenant architecture, role-based authorization, Stripe subscription billing, real-time analytics, and clean RESTful/GraphQL APIs.',
    iconName: 'Code2',
    deliverables: [
      { title: 'Full-Stack Architecture & Data Modeling', desc: 'Clean relational database schemas (PostgreSQL) optimized for speed, indexing, and data integrity.' },
      { title: 'Authentication & Access Control (RBAC)', desc: 'Secure OAuth, magic links, session management, and granular team permission matrices.' },
      { title: 'Stripe Billing & Subscription Engine', desc: 'Tiered pricing plans, metered usage billing, customer portal, and webhook handling.' },
      { title: 'Interactive Analytics Dashboards', desc: 'Rich visualization components with CSV export, filtering, and sub-100ms response times.' },
      { title: 'API & Developer Webhooks', desc: 'Public API endpoints, rate limiting, and webhook delivery infrastructure for third-party developers.' },
    ],
    process: [
      { step: '01', title: 'Product Spec & Database Design', desc: 'We outline data models, entity relationships, and core technical requirements.' },
      { step: '02', title: 'MVP Sprint 1 — Core Functionality', desc: 'We ship the primary user loop first so you can test value with real pilot users immediately.' },
      { step: '03', title: 'Billing, Auth & Multi-Tenancy', desc: 'We layer on team accounts, permission roles, and self-serve Stripe subscriptions.' },
      { step: '04', title: 'Scalability Audit & Deployment', desc: 'Database indexing, Redis caching, stress testing, and zero-downtime production deployment.' },
    ],
    technologies: ['Next.js 14/15', 'TypeScript', 'Supabase', 'PostgreSQL', 'Prisma / Drizzle', 'FastAPI / Python', 'Redis', 'Stripe'],
    faqs: [
      { question: 'Do we own 100% of the code and intellectual property?', answer: 'Yes. Upon final milestone payment, full ownership of all source code, design assets, and deployment keys is permanently transferred to your company.' },
      { question: 'How do you handle scalability as user count grows?', answer: 'We architect on modern serverless or containerized infrastructure with connection pooling, database read replicas, and CDN edge caching capable of handling millions of requests.' },
      { question: 'Can you help us build an MVP to pitch investors?', answer: 'Yes. We frequently build rapid, high-polish functional MVPs in 4-6 weeks so founders can secure pre-seed and seed funding with a real working product.' },
    ],
    caseStudyId: 'saas-analytics-dashboard',
    benefits: ['100% full IP & source code ownership', 'Enterprise-ready security & RBAC', 'Turnkey Stripe subscription billing', 'Designed for 100k+ concurrent users'],
  },
  {
    id: 'cloud-devops',
    slug: 'cloud-architecture-devops',
    title: 'Cloud Architecture & DevOps',
    badge: 'Enterprise',
    shortDesc: 'Secure, cost-optimized cloud infrastructure with automated CI/CD pipelines, Docker, and Kubernetes.',
    longDesc: 'Deploy with absolute confidence. We design resilient, high-availability cloud systems on AWS, Google Cloud, and Vercel. We eliminate configuration drift with Infrastructure as Code (Terraform), set up automated testing pipelines, and cut unnecessary cloud bills by up to 40%.',
    iconName: 'Cloud',
    deliverables: [
      { title: 'Automated CI/CD Pipelines', desc: 'GitHub Actions pipelines with automated linting, test suites, preview branches, and blue/green deploys.' },
      { title: 'Containerization & Orchestration', desc: 'Optimized Docker images and Docker Compose / Kubernetes setups for predictable deployments.' },
      { title: 'Cloud Cost Optimization', desc: 'Auditing over-provisioned compute, idle instances, and inefficient database queries to reduce monthly cloud spend.' },
      { title: 'Security & Secret Management', desc: 'Zero-trust IAM configurations, SSL automation, and secure environment variable vaults.' },
      { title: 'Telemetry & Observability', desc: 'Real-time error tracking (Sentry), performance APM (Datadog/NewRelic), and uptime status pages.' },
    ],
    process: [
      { step: '01', title: 'Infrastructure Audit', desc: 'Evaluate current server utilization, security risks, backup strategies, and monthly expenditures.' },
      { step: '02', title: 'Architecture Blueprint', desc: 'Design resilient, decoupled cloud topology adhering to Well-Architected Framework guidelines.' },
      { step: '03', title: 'Automated Pipeline Setup', desc: 'Configure staging/production environments, automated testing gates, and secrets vaults.' },
      { step: '04', title: 'Cutover & Monitoring', desc: 'Zero-downtime DNS cutover, setting up alert channels, and delivering runbook documentation.' },
    ],
    technologies: ['AWS', 'Google Cloud Platform', 'Vercel', 'Docker', 'Kubernetes', 'GitHub Actions', 'Terraform', 'PostgreSQL', 'Redis'],
    faqs: [
      { question: 'Which cloud provider do you recommend for our project?', answer: 'For modern web applications and SaaS MVPs, we usually recommend Vercel paired with Supabase or AWS RDS for maximum velocity. For high-compliance enterprise workloads, we build directly on AWS or Google Cloud.' },
      { question: 'Can you help reduce our existing AWS or GCP monthly bill?', answer: 'Yes. Our cloud audits typically discover 20% to 40% in immediate savings through rightsizing instances, eliminating orphan storage volumes, and implementing intelligent caching.' },
      { question: 'Do you offer 24/7 uptime monitoring?', answer: 'We configure proactive monitoring with automated incident alerting (via PagerDuty, Slack, and SMS) and can provide ongoing infrastructure SLA retainers.' },
    ],
    caseStudyId: 'querymind-ai-analyst',
    benefits: ['Zero-downtime deployment pipelines', '30-40% cloud cost reduction', 'Automated security & backups', 'Instant disaster recovery protocols'],
  },
  {
    id: 'ui-ux-design',
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    badge: 'Design Systems',
    shortDesc: 'Interfaces designed to make complex products feel simple.',
    longDesc: 'We craft bespoke design systems, high-converting product interfaces, and interactive motion prototypes that elevate brand perception and make complex workflows feel completely intuitive.',
    iconName: 'Layers',
    deliverables: [
      { title: 'Interactive High-Fidelity Prototypes', desc: 'Clickable Figma prototypes modeling micro-interactions, responsive states, and edge-case journeys.' },
      { title: 'Scalable Component Design System', desc: 'Production-ready Figma token libraries matching Tailwind CSS and React component architectures.' },
      { title: 'User Journey & Information Architecture', desc: 'Sitemap structuring, wireframing, and usability heuristics that minimize cognitive load.' },
      { title: 'Motion & Micro-Interaction Specs', desc: 'Choreographed spring animations and transition specs ready for engineering handoff.' },
    ],
    process: [
      { step: '01', title: 'User Research & Heuristic Audit', desc: 'Analyze user mental models, competitive landscape, and UX friction points.' },
      { step: '02', title: 'Wireframing & Core Flows', desc: 'Rapid low-fidelity layout exploration to establish visual hierarchy and flow.' },
      { step: '03', title: 'High-Fidelity Visual Design', desc: 'Apply brand typography, colors, dark mode tokens, and bespoke iconography.' },
      { step: '04', title: 'Interactive Prototype & Dev Handoff', desc: 'Clickable prototype validation and pixel-perfect design token handoff.' },
    ],
    technologies: ['Figma', 'Framer', 'Design Systems', 'Tailwind CSS', 'Framer Motion', 'Tokens Studio'],
    faqs: [
      { question: 'What deliverables do we receive at the end of the design phase?', answer: 'You receive a complete, organized Figma project containing the verified user flows, responsive layouts for desktop and mobile, and a tokenized design system ready for engineering.' },
      { question: 'Do you also implement the design into frontend code?', answer: 'Yes! Our studio is uniquely full-stack — the same team that designs your UI also engineers it with pixel-perfect accuracy in Next.js and Tailwind CSS.' },
    ],
    caseStudyId: 'vinzlu',
    benefits: ['Reduced user churn', 'Faster engineering velocity', 'Unified multi-platform consistency', 'Award-winning aesthetics'],
  },
];
