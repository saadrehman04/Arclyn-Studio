'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ArrowRight, Mail, Phone, ShieldCheck, Sparkles } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const shutterContentRef = useRef<HTMLDivElement>(null);

  // =========================================================
  // FOOTER SHUTTER REVEAL ANIMATION (Requested by user)
  // Reveals the footer smoothly like an architectural shutter
  // as the dark preceding section lifts away at the bottom
  // =========================================================
  useEffect(() => {
    const footer = footerRef.current;
    const content = shutterContentRef.current;
    if (!footer || !content) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = (window as unknown as { __lenis?: { on: (event: string, cb: () => void) => void; off: (event: string, cb: () => void) => void } }).__lenis;
    const lenisUpdate = () => ScrollTrigger.update();
    if (lenis) {
      lenis.on('scroll', lenisUpdate);
    }

    const ctx = gsap.context(() => {
      // Shutter curtain reveal: content translates up from behind the viewport
      gsap.fromTo(
        content,
        {
          yPercent: -30,
          opacity: 0.8,
        },
        {
          yPercent: 0,
          opacity: 1,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: footer,
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: 0.4,
          },
        }
      );
    }, footer);

    return () => {
      if (lenis) {
        lenis.off('scroll', lenisUpdate);
      }
      ctx.revert();
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      id="footer"
      className="relative w-full bg-[#F4F0EA] text-[#242424] overflow-hidden select-none z-0 border-t border-[#242424]/15 shadow-[0_-20px_50px_rgba(0,0,0,0.15)]"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      }}
    >
      <div ref={shutterContentRef} className="w-full will-change-transform transform-gpu">
        
        {/* =========================================================
            TOP ROW (Matches user reference screenshot typography & layout)
            Left: Lessons, Resources, Blogs, Services, Work
            Right: lowercase instagram, twitter, linkedin, github
            ========================================================= */}
        <div className="w-full border-b border-[#242424]/12 py-5 sm:py-6 px-4 sm:px-8 lg:px-14">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6">
            
            {/* Left Nav Links (Exact font, color, and spacing from sample) */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-10 lg:gap-12">
              <Link
                href="/about"
                className="text-base sm:text-[17px] font-normal text-[#242424] hover:text-[#000000] hover:underline underline-offset-4 transition-all"
              >
                Lessons
              </Link>
              <Link
                href="/industries"
                className="text-base sm:text-[17px] font-normal text-[#242424] hover:text-[#000000] hover:underline underline-offset-4 transition-all"
              >
                Resources
              </Link>
              <Link
                href="/services"
                className="text-base sm:text-[17px] font-normal text-[#242424] hover:text-[#000000] hover:underline underline-offset-4 transition-all"
              >
                Blogs
              </Link>
              <Link
                href="/work"
                className="text-base sm:text-[17px] font-normal text-[#242424] hover:text-[#000000] hover:underline underline-offset-4 transition-all"
              >
                Portfolio
              </Link>
              <Link
                href="/pricing"
                className="text-base sm:text-[17px] font-normal text-[#242424] hover:text-[#000000] hover:underline underline-offset-4 transition-all"
              >
                Pricing
              </Link>
            </div>

            {/* Right Social Links (Exact lowercase typography from sample) */}
            <div className="flex items-center gap-6 sm:gap-8">
              <a
                href="https://instagram.com/arclyn_studio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-normal lowercase text-[#242424]/85 hover:text-[#000000] transition-colors"
              >
                instagram
              </a>
              <a
                href="https://twitter.com/arclyn_studio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-normal lowercase text-[#242424]/85 hover:text-[#000000] transition-colors"
              >
                twitter
              </a>
              <a
                href="https://github.com/saadrehman04/Arclyn-Studio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-normal lowercase text-[#242424]/85 hover:text-[#000000] transition-colors"
              >
                github
              </a>
              <a
                href="https://wa.me/923196762317"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-normal lowercase text-[#242424]/85 hover:text-[#000000] transition-colors"
              >
                whatsapp
              </a>
            </div>

          </div>
        </div>

        {/* =========================================================
            MIDDLE MAIN FOOTER SECTION
            Clean, editorial layout on warm bone beige background
            ========================================================= */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14 pt-14 sm:pt-20 pb-12 sm:pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-16">
            
            {/* Column 1: Big Brand Statement (Editorial Swiss typography) */}
            <div className="lg:col-span-5 space-y-5">
              <Link href="/" className="inline-block group">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#181818] group-hover:opacity-80 transition-opacity">
                  Arclyn Studio
                </span>
              </Link>
              <p className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed max-w-md font-normal">
                Full-stack web engineering and autonomous AI automation. We architect high-performance digital platforms, web applications, and intelligent systems built for measurable scale.
              </p>

              <div className="pt-2">
                <a
                  href="mailto:saadrehman034@gmail.com"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#181818] border-b border-[#181818]/40 hover:border-[#181818] pb-0.5 transition-all"
                >
                  <Mail className="w-4 h-4 text-[#181818]" />
                  <span>saadrehman034@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Column 2: Capabilities */}
            <div className="lg:col-span-3 space-y-3.5">
              <h4 className="text-xs font-mono font-bold uppercase tracking-[0.16em] text-[#7A7A7A]">
                Engineering
              </h4>
              <ul className="space-y-2.5 text-sm font-normal text-[#383838]">
                <li>
                  <Link href="/services/website-ecommerce-development" className="hover:text-[#000000] transition-colors">
                    Web &amp; Headless E-Commerce
                  </Link>
                </li>
                <li>
                  <Link href="/services/mobile-app-development" className="hover:text-[#000000] transition-colors">
                    Mobile App Architecture
                  </Link>
                </li>
                <li>
                  <Link href="/services/ai-agent-development" className="hover:text-[#000000] transition-colors">
                    Autonomous AI Agents
                  </Link>
                </li>
                <li>
                  <Link href="/services/saas-development" className="hover:text-[#000000] transition-colors">
                    SaaS Platform Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/custom-software" className="hover:text-[#000000] transition-colors">
                    Custom Enterprise Systems
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Navigation & Blueprints */}
            <div className="lg:col-span-2 space-y-3.5">
              <h4 className="text-xs font-mono font-bold uppercase tracking-[0.16em] text-[#7A7A7A]">
                Platform
              </h4>
              <ul className="space-y-2.5 text-sm font-normal text-[#383838]">
                <li>
                  <Link href="/work" className="hover:text-[#000000] transition-colors">
                    Production Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/industries" className="hover:text-[#000000] transition-colors">
                    Industry Blueprints
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="hover:text-[#000000] transition-colors">
                    Verified Reviews
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-[#000000] transition-colors">
                    Pricing &amp; Engagements
                  </Link>
                </li>
                <li>
                  <Link href="/partner-program" className="hover:text-[#000000] transition-colors">
                    Partner Program (30% Share)
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Quick Action Box */}
            <div className="lg:col-span-2 space-y-3.5">
              <h4 className="text-xs font-mono font-bold uppercase tracking-[0.16em] text-[#7A7A7A]">
                Start Project
              </h4>
              <div className="p-4 rounded-xl bg-white/70 border border-[#242424]/10 space-y-3 shadow-sm">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#181818]">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>Q4 Project Availability</span>
                </div>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Accepting 2 new client systems for production build &amp; launch.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-between w-full px-3 py-2 rounded-lg bg-[#181818] hover:bg-[#000000] text-white text-xs font-medium transition-all"
                >
                  <span>Schedule Call</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

          </div>

          {/* =========================================================
              BOTTOM BAR: COPYRIGHT & POLICIES
              ========================================================= */}
          <div className="pt-8 border-t border-[#242424]/12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-normal text-[#666666]">
            <div>
              &copy; {new Date().getFullYear()} Arclyn Studio. Engineered with Next.js, TypeScript &amp; Tailwind CSS.
            </div>

            <div className="flex items-center gap-6">
              <Link href="/about" className="hover:text-[#000000] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/about" className="hover:text-[#000000] transition-colors">
                Terms of Service
              </Link>
              <span className="flex items-center gap-1.5 text-emerald-700 font-mono text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                All Systems Operational
              </span>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
