'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '../shared/Logo';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight, 
  Globe, 
  Smartphone, 
  Bot, 
  Zap, 
  Code2, 
  Cloud 
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

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

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
    setServicesDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services', isDropdown: true },
    { name: 'Our Work', href: '/work' },
    { name: 'Industries', href: '/industries' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Partner Program', href: '/partner-program' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#060913]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Logo size="md" />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.isDropdown && pathname.startsWith('/services'));

              if (link.isDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href="/services"
                      className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'text-white bg-white/10'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          servicesDropdownOpen ? 'rotate-180 text-cyan-400' : 'text-slate-400'
                        }`}
                      />
                    </Link>

                    {/* Dropdown Menu */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 pt-2 z-50">
                        <div className="bg-[#0A0F26] border border-white/10 rounded-2xl p-2 shadow-2xl shadow-purple-950/40 backdrop-blur-2xl">
                          <div className="px-3 py-2 border-b border-white/5 mb-1">
                            <span className="text-[11px] font-semibold text-purple-400 uppercase tracking-wider">
                              Our Capabilities
                            </span>
                          </div>
                          <div className="space-y-1">
                            {SERVICE_LINKS.map((sub) => {
                              const IconComponent = sub.icon;
                              return (
                                <Link
                                  key={sub.href}
                                  href={sub.href}
                                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 group transition-colors"
                                >
                                  <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 group-hover:bg-purple-500/20 group-hover:border-purple-500/40 transition-colors">
                                    <IconComponent className="w-4 h-4 text-purple-400 group-hover:text-cyan-400 transition-colors" />
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
                              className="flex items-center justify-between text-xs font-medium text-purple-400 hover:text-cyan-400 py-1 px-1 transition-colors"
                            >
                              <span>View All Services & Process</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-white/10'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white btn-primary-gradient"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center lg:hidden">
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
        <div className="lg:hidden border-t border-white/10 bg-[#060913]/98 backdrop-blur-2xl px-4 pt-4 pb-8 space-y-4 shadow-2xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-colors ${
                  pathname === link.href ? 'text-white bg-white/10' : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 opacity-50" />
              </Link>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 px-2">
              Our 6 Core Services
            </div>
            <div className="grid grid-cols-1 gap-1">
              {SERVICE_LINKS.map((sub) => (
                <Link
                  key={sub.href}
                  href={sub.href}
                  className="px-3 py-2 text-xs text-slate-300 hover:text-cyan-300 hover:bg-white/5 rounded-lg flex items-center gap-2"
                >
                  <sub.icon className="w-3.5 h-3.5 text-purple-400" />
                  <span>{sub.title}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-3">
            <Link
              href="/contact"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold text-white btn-primary-gradient"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
