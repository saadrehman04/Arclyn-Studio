'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Logo } from '../shared/Logo';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight, 
  Search,
  Globe, 
  Smartphone, 
  Bot, 
  Zap, 
  Code2, 
  Cloud,
  Layers,
  Sparkles,
  Briefcase,
  Users,
  Compass,
  Star
} from 'lucide-react';

const SERVICE_LINKS = [
  {
    title: 'Website & E-Commerce',
    href: '/services/website-ecommerce-development',
    desc: 'High-converting headless digital storefronts',
    icon: Globe,
  },
  {
    title: 'Mobile App Development',
    href: '/services/mobile-app-development',
    desc: 'iOS & Android apps with native performance',
    icon: Smartphone,
  },
  {
    title: 'AI Agent Development',
    href: '/services/ai-agent-development',
    desc: 'LangChain, LangGraph & autonomous systems',
    icon: Bot,
  },
  {
    title: 'AI Integration & Automation',
    href: '/services/ai-integration-automation',
    desc: 'Automate workflows via n8n & custom APIs',
    icon: Zap,
  },
  {
    title: 'Custom Software & SaaS',
    href: '/services/custom-software-saas-development',
    desc: 'Bespoke web apps with auth & billing',
    icon: Code2,
  },
  {
    title: 'Cloud Architecture & DevOps',
    href: '/services/cloud-architecture-devops',
    desc: 'Resilient cloud infrastructure on AWS & Vercel',
    icon: Cloud,
  },
];

const HOME_SECTIONS = [
  { title: 'Hero (Start of Site)', href: '/#hero', desc: 'Interactive live production showcase' },
  { title: 'Capabilities & 3D Torus', href: '/#capabilities', desc: 'AI-accelerated development & testing' },
  { title: 'Bento Grid System', href: '/#bento', desc: 'Where AI meets human engineering' },
  { title: 'Smart Solutions (Services)', href: '/#services', desc: 'Custom architectures built to dominate' },
  { title: 'Verified Case Studies', href: '/#work', desc: 'Audited production architectures' },
  { title: 'Milestone Pricing', href: '/pricing', desc: 'Transparent sprint-based investment' },
];

const PAGES_LINKS = [
  { title: 'Our Work', href: '/work', desc: 'Complete verified project portfolio', icon: Briefcase },
  { title: 'Testimonials', href: '/testimonials', desc: 'Verified reviews & client success stories', icon: Star },
  { title: 'Industries', href: '/industries', desc: 'Real Estate, Health, Dining, SaaS & more', icon: Compass },
  { title: 'Partner Program', href: '/partner-program', desc: 'High-earning 10-15% agency referral rewards', icon: Users },
  { title: 'About Arclyn', href: '/about', desc: 'Our engineering philosophy and team', icon: Sparkles },
];

const SEARCH_ITEMS = [
  { title: 'Testimonials & Reviews', subtitle: 'Verified Client Stories & Ratings', href: '/testimonials', category: 'Reviews' },
  { title: 'Prestige Estates', subtitle: 'Luxury Real Estate Showcase', href: '/work#prestige-estates', category: 'Project' },
  { title: 'Fitusion', subtitle: 'Athletics & Fitness Platform', href: '/work#fitusion', category: 'Project' },
  { title: 'The Cheesecake Factory', subtitle: 'Dining & Hospitality Platform', href: '/work#cheesecake-factory', category: 'Project' },
  { title: 'Mark Murphy DDS', subtitle: 'Gentle, High-Tech Healthcare', href: '/work#mark-murphy-dds', category: 'Project' },
  { title: 'Website & E-Commerce', subtitle: 'Headless Next.js Storefronts', href: '/services/website-ecommerce-development', category: 'Service' },
  { title: 'Mobile App Development', subtitle: 'Cross-platform iOS & Android', href: '/services/mobile-app-development', category: 'Service' },
  { title: 'AI Agent Development', subtitle: 'Autonomous LangGraph Systems', href: '/services/ai-agent-development', category: 'Service' },
  { title: 'AI Automation & Workflows', subtitle: 'n8n & Enterprise Pipelines', href: '/services/ai-integration-automation', category: 'Service' },
  { title: 'Custom Software & SaaS', subtitle: 'Full-Stack Scalable Platforms', href: '/services/custom-software-saas-development', category: 'Service' },
  { title: 'Cloud & DevOps', subtitle: 'AWS, Vercel & Docker Infrastructure', href: '/services/cloud-architecture-devops', category: 'Service' },
  { title: 'Investment & Pricing', subtitle: 'Sprint & Milestone Packages', href: '/pricing', category: 'Pricing' },
  { title: 'Partner & Referral Program', subtitle: 'Earn 10–15% on Client Referrals', href: '/partner-program', category: 'Program' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  
  // Search state
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Home link: if clicked in menu, leads to the start of the site from hero
  const handleHomeClick = (e?: React.MouseEvent) => {
    setHomeDropdownOpen(false);
    setMobileMenuOpen(false);
    if (pathname === '/') {
      if (e) e.preventDefault();
      const hero = document.getElementById('hero');
      const lenis = (window as unknown as { __lenis?: { scrollTo: (t: number | HTMLElement, o?: { duration?: number }) => void } }).__lenis;
      if (lenis) {
        lenis.scrollTo(hero || 0, { duration: 1.2 });
      } else if (hero) {
        hero.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      if (window.location.hash) {
        window.history.replaceState(null, '', '/');
      }
    } else {
      if (e) e.preventDefault();
      router.push('/');
      setTimeout(() => {
        const hero = document.getElementById('hero');
        const lenis = (window as unknown as { __lenis?: { scrollTo: (t: number | HTMLElement, o?: { duration?: number }) => void } }).__lenis;
        if (lenis) {
          lenis.scrollTo(hero || 0, { duration: 1.0 });
        } else if (hero) {
          hero.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 150);
    }
  };

  // Close menus on route change
  useEffect(() => {
    const timer = setTimeout(() => {
      setMobileMenuOpen(false);
      setHomeDropdownOpen(false);
      setServicesDropdownOpen(false);
      setPagesDropdownOpen(false);
      setSearchOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  // Focus search input when modal opens
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 50);
    }
  }, [searchOpen]);

  // Handle ESC key for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSearchOpen(false);
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredSearch = SEARCH_ITEMS.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#050711]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl shadow-black/50'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* 1. Brand Logo on Left */}
            <div className="shrink-0 cursor-pointer" onClick={handleHomeClick}>
              <Logo size="md" />
            </div>

            <nav className="hidden lg:flex items-center relative rounded-full px-5 py-2 backdrop-blur-2xl bg-[#050505]/80 border border-white/10 hover:border-white/20 shadow-[0_0_35px_rgba(255,255,255,0.05),0_12px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_0_55px_rgba(255,255,255,0.1),0_14px_45px_rgba(0,0,0,0.7)] hover:scale-[1.02] transition-all duration-300 ease-out group/nav overflow-hidden">
              {/* Internal Sheen */}
              <div className="absolute -left-4 -top-8 w-44 h-24 bg-gradient-to-r from-white/10 via-white/5 to-transparent blur-xl pointer-events-none group-hover/nav:scale-125 group-hover/nav:opacity-100 transition-all duration-500" />
              <div className="absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r from-white/10 via-white/40 to-transparent pointer-events-none" />

              <div className="flex items-center gap-2 text-sm font-medium relative z-10">
                
                {/* Home Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setHomeDropdownOpen(true)}
                  onMouseLeave={() => setHomeDropdownOpen(false)}
                >
                  <Link
                    href="/"
                    onClick={handleHomeClick}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-slate-200 hover:text-white transition-all duration-200 ease-out hover:scale-110 active:scale-95 hover:bg-white/[0.08] hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] outline-none focus:outline-none focus-visible:outline-none ring-0 focus:ring-0 focus-visible:ring-0 group ${
                      pathname === '/' ? 'text-white font-semibold bg-white/[0.08] border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]' : ''
                    }`}
                  >
                    <span>Home</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-slate-400 group-hover:text-white group-hover:translate-y-0.5 transition-all duration-200 ${
                        homeDropdownOpen ? 'rotate-180 text-white' : ''
                      }`}
                    />
                  </Link>

                  {homeDropdownOpen && (
                    <div className="absolute top-full left-0 w-72 pt-3 z-50">
                      <div className="bg-[#0a0a0a] border border-white/12 rounded-2xl p-2 shadow-2xl shadow-black/50 backdrop-blur-2xl">
                        <div className="px-3 py-1.5 border-b border-white/5 mb-1 text-[11px] font-semibold text-slate-300 uppercase tracking-wider">
                          Quick Jump
                        </div>
                        {HOME_SECTIONS.map((sec) => (
                          <Link
                            key={sec.href}
                            href={sec.href}
                            onClick={(e) => {
                              if (sec.href === '/#hero' || sec.href === '/') {
                                handleHomeClick(e);
                              } else if (sec.href.startsWith('/#') && pathname === '/') {
                                setHomeDropdownOpen(false);
                                const hash = sec.href.replace('/', '');
                                const el = document.querySelector(hash) as HTMLElement | null;
                                if (el) {
                                  e.preventDefault();
                                  const lenis = (window as unknown as { __lenis?: { scrollTo: (t: HTMLElement, o?: { duration?: number }) => void } }).__lenis;
                                  if (lenis) {
                                    lenis.scrollTo(el, { duration: 1.0 });
                                  } else {
                                    el.scrollIntoView({ behavior: 'smooth' });
                                  }
                                  window.history.replaceState(null, '', sec.href);
                                }
                              } else {
                                setHomeDropdownOpen(false);
                              }
                            }}
                            className="block p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                          >
                            <div className="text-xs font-semibold text-white group-hover:text-white transition-colors">
                              {sec.title}
                            </div>
                            <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                              {sec.desc}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Services Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <Link
                    href="/services"
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-slate-200 hover:text-white transition-all duration-200 ease-out hover:scale-110 active:scale-95 hover:bg-white/[0.08] hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] outline-none focus:outline-none focus-visible:outline-none ring-0 focus:ring-0 focus-visible:ring-0 group ${
                      pathname.startsWith('/services') ? 'text-white font-semibold bg-white/[0.08] border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]' : ''
                    }`}
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-slate-400 group-hover:text-white group-hover:translate-y-0.5 transition-all duration-200 ${
                        servicesDropdownOpen ? 'rotate-180 text-white' : ''
                      }`}
                    />
                  </Link>

                  {servicesDropdownOpen && (
                    <div className="absolute top-full -left-20 w-84 pt-3 z-50">
                      <div className="bg-[#0a0a0a] border border-white/12 rounded-2xl p-2.5 shadow-2xl shadow-black/50 backdrop-blur-2xl">
                        <div className="px-3 py-1.5 border-b border-white/5 mb-1 flex items-center justify-between">
                          <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider">
                            Core Capabilities
                          </span>
                          <span className="text-[10px] text-slate-400">6 Specializations</span>
                        </div>
                        <div className="space-y-1">
                          {SERVICE_LINKS.map((sub) => {
                            const IconComponent = sub.icon;
                            return (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                className="flex items-start gap-3 p-2 rounded-xl hover:bg-white/5 group transition-colors"
                              >
                                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-colors shrink-0">
                                  <IconComponent className="w-3.5 h-3.5 text-slate-300 group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                  <div className="text-xs font-semibold text-white group-hover:text-white transition-colors">
                                    {sub.title}
                                  </div>
                                  <div className="text-[11px] text-slate-400 leading-tight mt-0.5 line-clamp-1">
                                    {sub.desc}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                        <div className="mt-2 pt-2 border-t border-white/5 px-2">
                          <Link
                            href="/services"
                            className="flex items-center justify-between text-xs font-medium text-slate-300 hover:text-white py-1 transition-colors"
                          >
                            <span>Explore All 6 Services</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Pricing (Direct Link) */}
                <Link
                  href="/pricing"
                  className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-slate-200 hover:text-white transition-all duration-200 ease-out hover:scale-110 active:scale-95 hover:bg-white/[0.08] hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] outline-none focus:outline-none focus-visible:outline-none ring-0 focus:ring-0 focus-visible:ring-0 ${
                    pathname === '/pricing' ? 'text-white font-semibold bg-white/[0.08] border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]' : ''
                  }`}
                >
                  Pricing
                </Link>

                {/* Pages Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setPagesDropdownOpen(true)}
                  onMouseLeave={() => setPagesDropdownOpen(false)}
                >
                  <button
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-slate-200 hover:text-white transition-all duration-200 ease-out hover:scale-110 active:scale-95 hover:bg-white/[0.08] hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] outline-none focus:outline-none focus-visible:outline-none ring-0 focus:ring-0 focus-visible:ring-0 group ${
                      ['/work', '/industries', '/partner-program', '/about'].includes(pathname)
                        ? 'text-white font-semibold bg-white/[0.08] border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]'
                        : ''
                    }`}
                  >
                    <span>Pages</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-slate-400 group-hover:text-white group-hover:translate-y-0.5 transition-all duration-200 ${
                        pagesDropdownOpen ? 'rotate-180 text-white' : ''
                      }`}
                    />
                  </button>

                  {pagesDropdownOpen && (
                    <div className="absolute top-full -left-12 w-76 pt-3 z-50">
                      <div className="bg-[#0a0a0a] border border-white/12 rounded-2xl p-2 shadow-2xl shadow-black/50 backdrop-blur-2xl">
                        <div className="px-3 py-1.5 border-b border-white/5 mb-1 text-[11px] font-semibold text-slate-300 uppercase tracking-wider">
                          Ecosystem Pages
                        </div>
                        {PAGES_LINKS.map((page) => {
                          const IconComp = page.icon;
                          return (
                            <Link
                              key={page.href}
                              href={page.href}
                              className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                            >
                              <div className="p-1.5 rounded-lg bg-white/5 text-slate-300 group-hover:text-white">
                                <IconComp className="w-3.5 h-3.5" />
                              </div>
                              <div>
                                <div className="text-xs font-semibold text-white group-hover:text-white transition-colors">
                                  {page.title}
                                </div>
                                <div className="text-[11px] text-slate-400 line-clamp-1">
                                  {page.desc}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Contacts (Direct Link) */}
                <Link
                  href="/contact"
                  className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-slate-200 hover:text-white transition-all duration-200 ease-out hover:scale-110 active:scale-95 hover:bg-white/[0.08] hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] outline-none focus:outline-none focus-visible:outline-none ring-0 focus:ring-0 focus-visible:ring-0 ${
                    pathname === '/contact' ? 'text-white font-semibold bg-white/[0.08] border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]' : ''
                  }`}
                >
                  Contacts
                </Link>

                {/* Search Icon Trigger */}
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 ease-out hover:scale-125 active:scale-90 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] outline-none focus:outline-none focus-visible:outline-none ring-0 focus:ring-0 focus-visible:ring-0"
                  aria-label="Search Studio"
                  title="Search services & projects (⌘K)"
                >
                  <Search className="w-4 h-4" />
                </button>

              </div>
            </nav>

            {/* 3. Glowing Gradient Pill Button on Desktop (≥ 1024px) */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="px-6 py-2.5 rounded-full text-sm font-bold bg-white text-black hover:bg-gray-100 inline-flex items-center gap-2 group hover:scale-105 active:scale-95 transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile Controls: [ARClyn LOGO] on left (above) and clean [☰] on right */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 border border-white/10 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 border border-white/15 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center active:scale-95"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Elegant Full-Screen Mobile Navigation Overlay - Direct body-level sibling so backdrop-filter on header cannot trap it */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[100] bg-[#050711]/98 backdrop-blur-2xl flex flex-col justify-between overflow-y-auto overscroll-contain">
          {/* Top Bar inside Overlay */}
          <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-white/10">
            <div className="cursor-pointer" onClick={handleHomeClick}>
              <Logo size="md" />
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 border border-white/15 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center active:scale-95"
              aria-label="Close Menu"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Navigation Links List */}
          <div className="flex-1 px-5 sm:px-6 py-6 flex flex-col justify-between gap-6 max-w-lg mx-auto w-full">
            <nav className="flex flex-col space-y-2">
              {/* 1. Home */}
              <Link
                href="/"
                onClick={handleHomeClick}
                className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-lg font-semibold tracking-tight transition-all min-h-[50px] ${
                  pathname === '/' 
                    ? 'text-white bg-white/10 border border-white/15 shadow-sm' 
                    : 'text-slate-200 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>Home</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </Link>

              {/* 2. Services */}
              <div>
                <div className="flex items-center justify-between">
                  <Link
                    href="/services"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex-1 flex items-center justify-between px-4 py-3.5 rounded-2xl text-lg font-semibold tracking-tight transition-all min-h-[50px] ${
                      pathname.startsWith('/services') 
                        ? 'text-white bg-white/10 border border-white/15' 
                        : 'text-slate-200 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>Services</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                    className="ml-1 p-3 rounded-2xl text-slate-400 hover:text-white hover:bg-white/5 min-h-[50px] min-w-[50px] flex items-center justify-center"
                    aria-label="Toggle Services submenu"
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180 text-white' : ''}`} />
                  </button>
                </div>
                {servicesDropdownOpen && (
                  <div className="pl-4 pr-2 pt-2 pb-1 space-y-1">
                    {SERVICE_LINKS.map((sub) => {
                      const Icon = sub.icon;
                      return (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-3 p-2.5 rounded-xl text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors min-h-[44px]"
                        >
                          <Icon className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span className="truncate">{sub.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* 3. Pricing */}
              <Link
                href="/pricing"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-lg font-semibold tracking-tight transition-all min-h-[50px] ${
                  pathname === '/pricing' 
                    ? 'text-white bg-white/10 border border-white/15' 
                    : 'text-slate-200 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>Pricing</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </Link>

              {/* 4. Pages */}
              <div>
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setPagesDropdownOpen(!pagesDropdownOpen)}
                    className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl text-lg font-semibold tracking-tight transition-all min-h-[50px] ${
                      ['/work', '/industries', '/partner-program', '/about', '/testimonials'].includes(pathname)
                        ? 'text-white bg-white/10 border border-white/15' 
                        : 'text-slate-200 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>Pages</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${pagesDropdownOpen ? 'rotate-180 text-white' : ''}`} />
                  </button>
                </div>
                {pagesDropdownOpen && (
                  <div className="pl-4 pr-2 pt-2 pb-1 space-y-1">
                    {PAGES_LINKS.map((page) => {
                      const Icon = page.icon;
                      return (
                        <Link
                          key={page.href}
                          href={page.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-3 p-2.5 rounded-xl text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors min-h-[44px]"
                        >
                          <Icon className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span className="truncate">{page.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* 5. Contacts */}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-lg font-semibold tracking-tight transition-all min-h-[50px] ${
                  pathname === '/contact' 
                    ? 'text-white bg-white/10 border border-white/15' 
                    : 'text-slate-200 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>Contacts</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </Link>
            </nav>

            {/* Bottom Actions inside Overlay: Primary CTA & Studio Info */}
            <div className="pt-4 border-t border-white/10 space-y-4">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-full text-base font-bold bg-white text-black hover:bg-slate-100 shadow-[0_0_25px_rgba(255,255,255,0.25)] min-h-[50px] active:scale-98 transition-all"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </Link>

              <div className="flex items-center justify-between text-xs text-slate-400 px-2 pt-1 font-mono">
                <span>contact@arclynstudio.com</span>
                <span>+92 319 6762317</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Spotlight Quick Search Command Palette Modal */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center pt-24 px-4"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="w-full max-w-xl bg-[#090D22] border border-white/15 rounded-3xl p-4 shadow-2xl shadow-black/50 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-3 py-2 border-b border-white/10">
              <Search className="w-5 h-5 text-white shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services, projects, capabilities..."
                className="w-full bg-transparent text-sm sm:text-base text-white placeholder-slate-400 focus:outline-none"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-80 overflow-y-auto pt-3 space-y-1.5">
              {filteredSearch.length > 0 ? (
                filteredSearch.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => {
                      setSearchOpen(false);
                      router.push(item.href);
                    }}
                    className="w-full text-left p-3 rounded-2xl hover:bg-white/5 flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-white transition-colors">
                        {item.title}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        {item.subtitle}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-slate-200">
                      {item.category}
                    </span>
                  </button>
                ))
              ) : (
                <div className="py-8 text-center text-sm text-slate-400">
                  No matching services or projects found for &quot;{searchQuery}&quot;
                </div>
              )}
            </div>

            {/* Modal Footer Keybind Info */}
            <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 px-3">
              <span>Quick Navigation</span>
              <span>Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-slate-200">ESC</kbd> to close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
