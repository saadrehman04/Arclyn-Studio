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
  Compass
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
  { title: 'Hero & Showcase', href: '/#showcase', desc: 'Interactive live production websites' },
  { title: 'Capabilities & 3D Torus', href: '/#capabilities', desc: 'AI-accelerated development & testing' },
  { title: 'Bento Grid System', href: '/#bento', desc: 'Where AI meets human engineering' },
  { title: 'Verified Case Studies', href: '/#work', desc: 'Audited production architectures' },
  { title: 'Milestone Pricing', href: '/#pricing', desc: 'Transparent sprint-based investment' },
];

const PAGES_LINKS = [
  { title: 'Our Work', href: '/work', desc: 'Complete verified project portfolio', icon: Briefcase },
  { title: 'Industries', href: '/industries', desc: 'Real Estate, Health, Dining, SaaS & more', icon: Compass },
  { title: 'Partner Program', href: '/partner-program', desc: 'High-earning 10-15% agency referral rewards', icon: Users },
  { title: 'About Arclyn', href: '/about', desc: 'Our engineering philosophy and team', icon: Sparkles },
];

const SEARCH_ITEMS = [
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

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setHomeDropdownOpen(false);
    setServicesDropdownOpen(false);
    setPagesDropdownOpen(false);
    setSearchOpen(false);
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
            <div className="shrink-0">
              <Logo size="md" />
            </div>

            {/* 2. Sleek Glassmorphic Floating Pill Bar (Matching Reference Image) */}
            <nav className="hidden lg:flex items-center bg-[#0A0E21]/80 hover:bg-[#0C122B]/90 backdrop-blur-2xl border border-white/12 rounded-full px-6 py-2.5 shadow-[0_10px_35px_rgba(0,0,0,0.5)] transition-all">
              <div className="flex items-center gap-6 text-sm font-medium">
                
                {/* Home Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setHomeDropdownOpen(true)}
                  onMouseLeave={() => setHomeDropdownOpen(false)}
                >
                  <Link
                    href="/"
                    className={`flex items-center gap-1.5 py-1 text-slate-200 hover:text-white transition-colors group ${
                      pathname === '/' ? 'text-white font-semibold' : ''
                    }`}
                  >
                    <span>Home</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-transform duration-200 ${
                        homeDropdownOpen ? 'rotate-180 text-cyan-400' : ''
                      }`}
                    />
                  </Link>

                  {homeDropdownOpen && (
                    <div className="absolute top-full left-0 w-72 pt-3 z-50">
                      <div className="bg-[#090E26] border border-white/12 rounded-2xl p-2 shadow-2xl shadow-purple-950/40 backdrop-blur-2xl">
                        <div className="px-3 py-1.5 border-b border-white/5 mb-1 text-[11px] font-semibold text-purple-400 uppercase tracking-wider">
                          Quick Jump
                        </div>
                        {HOME_SECTIONS.map((sec) => (
                          <Link
                            key={sec.href}
                            href={sec.href}
                            className="block p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                          >
                            <div className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors">
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
                    className={`flex items-center gap-1.5 py-1 text-slate-200 hover:text-white transition-colors group ${
                      pathname.startsWith('/services') ? 'text-white font-semibold' : ''
                    }`}
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-transform duration-200 ${
                        servicesDropdownOpen ? 'rotate-180 text-cyan-400' : ''
                      }`}
                    />
                  </Link>

                  {servicesDropdownOpen && (
                    <div className="absolute top-full -left-20 w-84 pt-3 z-50">
                      <div className="bg-[#090E26] border border-white/12 rounded-2xl p-2.5 shadow-2xl shadow-purple-950/50 backdrop-blur-2xl">
                        <div className="px-3 py-1.5 border-b border-white/5 mb-1 flex items-center justify-between">
                          <span className="text-[11px] font-semibold text-purple-400 uppercase tracking-wider">
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
                                <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 group-hover:bg-purple-500/20 group-hover:border-purple-500/40 transition-colors shrink-0">
                                  <IconComponent className="w-3.5 h-3.5 text-purple-400 group-hover:text-cyan-400 transition-colors" />
                                </div>
                                <div>
                                  <div className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors">
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
                            className="flex items-center justify-between text-xs font-medium text-purple-400 hover:text-cyan-300 py-1 transition-colors"
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
                  className={`py-1 text-slate-200 hover:text-white transition-colors ${
                    pathname === '/pricing' ? 'text-white font-semibold' : ''
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
                    className={`flex items-center gap-1.5 py-1 text-slate-200 hover:text-white transition-colors group ${
                      ['/work', '/industries', '/partner-program', '/about'].includes(pathname)
                        ? 'text-white font-semibold'
                        : ''
                    }`}
                  >
                    <span>Pages</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-transform duration-200 ${
                        pagesDropdownOpen ? 'rotate-180 text-cyan-400' : ''
                      }`}
                    />
                  </button>

                  {pagesDropdownOpen && (
                    <div className="absolute top-full -left-12 w-76 pt-3 z-50">
                      <div className="bg-[#090E26] border border-white/12 rounded-2xl p-2 shadow-2xl shadow-purple-950/40 backdrop-blur-2xl">
                        <div className="px-3 py-1.5 border-b border-white/5 mb-1 text-[11px] font-semibold text-purple-400 uppercase tracking-wider">
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
                              <div className="p-1.5 rounded-lg bg-white/5 text-purple-400 group-hover:text-cyan-400">
                                <IconComp className="w-3.5 h-3.5" />
                              </div>
                              <div>
                                <div className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors">
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
                  className={`py-1 text-slate-200 hover:text-white transition-colors ${
                    pathname === '/contact' ? 'text-white font-semibold' : ''
                  }`}
                >
                  Contacts
                </Link>

                {/* Search Icon Trigger */}
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                  aria-label="Search Studio"
                  title="Search services & projects (⌘K)"
                >
                  <Search className="w-4 h-4" />
                </button>

              </div>
            </nav>

            {/* 3. Glowing Gradient Pill Button: "Start Your Project" matching the bottom hero CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                href="/contact"
                className="px-6 py-2.5 rounded-full text-sm font-bold text-white btn-pill-primary inline-flex items-center gap-2 group"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile Controls (Search & Hamburger) */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 border border-white/10 transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 border border-white/10 transition-colors"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-[#060913]/98 backdrop-blur-2xl px-4 pt-4 pb-8 space-y-4 shadow-2xl mt-3">
            <div className="flex flex-col space-y-1">
              <Link
                href="/"
                className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between ${
                  pathname === '/' ? 'text-white bg-white/10' : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>Home</span>
                <ArrowRight className="w-4 h-4 opacity-50" />
              </Link>

              <Link
                href="/services"
                className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between ${
                  pathname.startsWith('/services') ? 'text-white bg-white/10' : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>Services (6 Core Disciplines)</span>
                <ArrowRight className="w-4 h-4 opacity-50" />
              </Link>

              <Link
                href="/work"
                className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between ${
                  pathname === '/work' ? 'text-white bg-white/10' : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>Our Work (Live Case Studies)</span>
                <ArrowRight className="w-4 h-4 opacity-50" />
              </Link>

              <Link
                href="/pricing"
                className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between ${
                  pathname === '/pricing' ? 'text-white bg-white/10' : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>Pricing</span>
                <ArrowRight className="w-4 h-4 opacity-50" />
              </Link>

              <Link
                href="/industries"
                className="px-4 py-3 rounded-xl text-base font-medium text-slate-300 hover:text-white flex items-center justify-between"
              >
                <span>Industries</span>
                <ArrowRight className="w-4 h-4 opacity-50" />
              </Link>

              <Link
                href="/partner-program"
                className="px-4 py-3 rounded-xl text-base font-medium text-slate-300 hover:text-white flex items-center justify-between"
              >
                <span>Partner Program</span>
                <ArrowRight className="w-4 h-4 opacity-50" />
              </Link>

              <Link
                href="/about"
                className="px-4 py-3 rounded-xl text-base font-medium text-slate-300 hover:text-white flex items-center justify-between"
              >
                <span>About</span>
                <ArrowRight className="w-4 h-4 opacity-50" />
              </Link>

              <Link
                href="/contact"
                className="px-4 py-3 rounded-xl text-base font-medium text-slate-300 hover:text-white flex items-center justify-between"
              >
                <span>Contacts</span>
                <ArrowRight className="w-4 h-4 opacity-50" />
              </Link>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-sm font-bold text-white btn-pill-primary group"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Spotlight Quick Search Command Palette Modal */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center pt-24 px-4"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="w-full max-w-xl bg-[#090D22] border border-white/15 rounded-3xl p-4 shadow-2xl shadow-purple-950/60 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-3 py-2 border-b border-white/10">
              <Search className="w-5 h-5 text-cyan-400 shrink-0" />
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
                      <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        {item.subtitle}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300">
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
