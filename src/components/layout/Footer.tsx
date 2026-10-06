'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowUpRight,
  ArrowRight,
  Mail,
  Phone,
  Sparkles,
  ShieldCheck,
  Send,
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const blueCircleRef = useRef<HTMLDivElement>(null);
  const whiteCircleRef = useRef<HTMLDivElement>(null);

  // =========================================================
  // FRAMER FOOTER SCROLL ANIMATION (stellar-apartment-381100)
  // Expanding Blue & White concentric circles bloom on scroll
  // behind the giant ARCLYN typography as you reach the bottom
  // =========================================================
  useEffect(() => {
    const footer = footerRef.current;
    const container = containerRef.current;
    const blueCircle = blueCircleRef.current;
    const whiteCircle = whiteCircleRef.current;
    if (!footer || !container || !blueCircle || !whiteCircle) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = (window as unknown as { __lenis?: { on: (event: string, cb: () => void) => void; off: (event: string, cb: () => void) => void } }).__lenis;
    const lenisUpdate = () => ScrollTrigger.update();
    if (lenis) {
      lenis.on('scroll', lenisUpdate);
    }

    const ctx = gsap.context(() => {
      // 1. Expanding Blue Circle Animation (Layer 1)
      gsap.fromTo(
        blueCircle,
        {
          scale: 0.03,
          transformOrigin: '50% 50%',
          opacity: 0.9,
        },
        {
          scale: 1,
          opacity: 1,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 85%',
            end: 'bottom bottom',
            scrub: 0.5,
          },
        }
      );

      // 2. Expanding White Circle Animation (Layer 2, follows with slight lag)
      gsap.fromTo(
        whiteCircle,
        {
          scale: 0.015,
          transformOrigin: '50% 50%',
          opacity: 0.95,
        },
        {
          scale: 1,
          opacity: 1,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 70%',
            end: 'bottom bottom',
            scrub: 0.5,
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
      className="relative w-full bg-[#050505] text-white p-3 sm:p-5 lg:p-7 overflow-hidden select-none z-10"
    >
      {/* =========================================================
          THE INNER ROUNDED LUXURY STAGE (framer-rrzsf3)
          Deep charcoal obsidian panel with large corner radius
          ========================================================= */}
      <div
        ref={containerRef}
        className="relative w-full bg-[#121316] border border-white/[0.08] rounded-[36px] sm:rounded-[60px] lg:rounded-[90px] shadow-[0_30px_90px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col justify-between pt-10 sm:pt-16 lg:pt-20 px-6 sm:px-12 lg:px-16 pb-6 sm:pb-8"
      >
        {/* Subtle ambient noise & top vignette */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none z-0" />

        {/* =========================================================
            TOP SUB-NAV STRIP (Preserved from current footer)
            Left: Lessons, Resources, Blogs, Portfolio, Pricing
            Right: lowercase social channels
            ========================================================= */}
        <div className="relative z-10 w-full border-b border-white/[0.08] pb-6 sm:pb-8 mb-10 sm:mb-14">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6">
            {/* Left Nav Links */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 lg:gap-10">
              <Link
                href="/about"
                className="text-sm sm:text-base font-medium text-slate-300 hover:text-white transition-colors"
              >
                Lessons
              </Link>
              <Link
                href="/industries"
                className="text-sm sm:text-base font-medium text-slate-300 hover:text-white transition-colors"
              >
                Resources
              </Link>
              <Link
                href="/services"
                className="text-sm sm:text-base font-medium text-slate-300 hover:text-white transition-colors"
              >
                Blogs
              </Link>
              <Link
                href="/work"
                className="text-sm sm:text-base font-medium text-slate-300 hover:text-white transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="/pricing"
                className="text-sm sm:text-base font-medium text-slate-300 hover:text-white transition-colors"
              >
                Pricing
              </Link>
            </div>

            {/* Right Social Links (Lowercase typography) */}
            <div className="flex items-center gap-5 sm:gap-7">
              <a
                href="https://instagram.com/arclyn_studio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-normal lowercase text-slate-400 hover:text-white transition-colors"
              >
                instagram
              </a>
              <a
                href="https://twitter.com/arclyn_studio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-normal lowercase text-slate-400 hover:text-white transition-colors"
              >
                twitter
              </a>
              <a
                href="https://github.com/saadrehman04/Arclyn-Studio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-normal lowercase text-slate-400 hover:text-white transition-colors"
              >
                github
              </a>
              <a
                href="https://wa.me/923196762317"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-normal lowercase text-slate-400 hover:text-white transition-colors"
              >
                whatsapp
              </a>
            </div>
          </div>
        </div>

        {/* =========================================================
            UPPER CONTENT GRID (3-Column Architecture matching Framer)
            Col 1: Mission & Contact
            Col 2: Explore & Capabilities
            Col 3: Framer's Signature Massive Action Buttons (28px)
            ========================================================= */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-12 sm:mb-16">
          
          {/* COLUMN 1: Brand Mission & Direct Contacts */}
          <div className="lg:col-span-5 space-y-5">
            <Link href="/" className="inline-block group">
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                Arclyn Studio
              </span>
            </Link>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-snug">
              Architecting high-performance digital platforms &amp; autonomous AI systems.
            </h3>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md font-normal">
              Full-stack web engineering, custom headless e-commerce, and intelligent workflow automation built for measurable scale.
            </p>

            {/* Direct Contacts & WhatsApp */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <a
                href="mailto:saadrehman034@gmail.com"
                className="inline-flex items-center gap-2 font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>saadrehman034@gmail.com</span>
              </a>

              <a
                href="https://wa.me/923196762317"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>+92 319 6762317</span>
              </a>
            </div>

            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-slate-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Accepting 2 new client systems for production build</span>
            </div>
          </div>

          {/* COLUMN 2: Explore Links (Engineering & Platform) */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-8">
            {/* Engineering */}
            <div className="space-y-3.5">
              <h4 className="text-xs font-mono font-bold uppercase tracking-[0.16em] text-slate-400">
                Services
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm font-normal text-slate-300">
                <li>
                  <Link href="/services/website-ecommerce-development" className="hover:text-white transition-colors">
                    Web &amp; E-Commerce
                  </Link>
                </li>
                <li>
                  <Link href="/services/mobile-app-development" className="hover:text-white transition-colors">
                    Mobile Apps
                  </Link>
                </li>
                <li>
                  <Link href="/services/ai-agent-development" className="hover:text-white transition-colors">
                    AI Agents
                  </Link>
                </li>
                <li>
                  <Link href="/services/saas-development" className="hover:text-white transition-colors">
                    SaaS Systems
                  </Link>
                </li>
                <li>
                  <Link href="/services/custom-software" className="hover:text-white transition-colors">
                    Custom Software
                  </Link>
                </li>
              </ul>
            </div>

            {/* Platform */}
            <div className="space-y-3.5">
              <h4 className="text-xs font-mono font-bold uppercase tracking-[0.16em] text-slate-400">
                Platform
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm font-normal text-slate-300">
                <li>
                  <Link href="/work" className="hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/industries" className="hover:text-white transition-colors">
                    Industries
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="hover:text-white transition-colors">
                    Client Reviews
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-white transition-colors">
                    Pricing Plans
                  </Link>
                </li>
                <li>
                  <Link href="/partner-program" className="hover:text-white transition-colors">
                    Partner Program
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* COLUMN 3: Framer's Signature Big Action Buttons */}
          <div className="lg:col-span-4 flex flex-col justify-start gap-4">
            {/* Button 1: Contact Us (Electric Blue Highlight) */}
            <Link
              href="/contact"
              className="group relative flex items-center justify-between px-7 py-5 sm:py-6 rounded-2xl bg-gradient-to-r from-[#0080ff] to-[#0ea5e9] hover:from-[#0070e0] hover:to-[#0284c7] text-white shadow-[0_10px_35px_rgba(0,128,255,0.35)] hover:shadow-[0_15px_45px_rgba(0,128,255,0.5)] transition-all duration-300 active:scale-[0.98]"
            >
              <span className="text-xl sm:text-2xl lg:text-[26px] font-bold tracking-tight">
                Contact Us
              </span>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 group-hover:bg-white text-white group-hover:text-[#0080ff] flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Link>

            {/* Button 2: Explore Work (Luxury White/Dark Button) */}
            <Link
              href="/work"
              className="group relative flex items-center justify-between px-7 py-5 sm:py-6 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 hover:border-white/30 text-white shadow-sm transition-all duration-300 active:scale-[0.98]"
            >
              <span className="text-xl sm:text-2xl lg:text-[26px] font-bold tracking-tight">
                Explore Work
              </span>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/[0.1] group-hover:bg-white text-white group-hover:text-[#0c0d12] flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Link>
          </div>

        </div>

        {/* =========================================================
            BOTTOM STAGE: CIRCLES AND GIANT TYPOGRAPHY (Framer Animation)
            Concentric Blue & White expanding circles that scale on scroll
            behind the massive silhouette brand lettering "ARCLYN"
            ========================================================= */}
        <div className="relative w-full h-[280px] sm:h-[380px] lg:h-[460px] overflow-hidden flex items-end justify-center rounded-b-[24px] sm:rounded-b-[40px] lg:rounded-b-[60px] mt-6 sm:mt-10">
          
          {/* Layer A: Blue Expanding Circle (framer-7imuf3) */}
          <div
            ref={blueCircleRef}
            className="absolute rounded-full aspect-square pointer-events-none z-10 will-change-transform"
            style={{
              width: '2400px',
              backgroundColor: '#0080ff',
              left: '50%',
              top: '76%',
              transform: 'translate(-50%, -50%) scale(0.03)',
              boxShadow: '0 0 120px rgba(0, 128, 255, 0.45)',
            }}
          />

          {/* Layer B: White Expanding Circle (framer-zsxdj7) */}
          <div
            ref={whiteCircleRef}
            className="absolute rounded-full aspect-square pointer-events-none z-20 will-change-transform"
            style={{
              width: '2400px',
              backgroundColor: '#ffffff',
              left: '50%',
              top: '76%',
              transform: 'translate(-50%, -50%) scale(0.015)',
              boxShadow: '0 0 90px rgba(255, 255, 255, 0.7)',
            }}
          />

          {/* Layer C: Giant Brand Typography "ARCLYN" (framer-16s07wq) */}
          <div className="relative z-30 w-full flex items-end justify-center pointer-events-none -mb-3 sm:-mb-6 lg:-mb-8">
            <svg
              viewBox="0 0 1087 215"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full max-w-[1100px] h-auto max-h-[190px] sm:max-h-[250px] lg:max-h-[300px]"
            >
              {/* Bold vector display typography for ARCLYN with high-contrast silhouette */}
              <text
                x="50%"
                y="190"
                textAnchor="middle"
                fontSize="220"
                fontWeight="900"
                letterSpacing="-0.04em"
                fill="#0c0d12"
                style={{
                  fontFamily: 'var(--font-outfit), var(--font-inter), sans-serif',
                }}
              >
                ARCLYN
              </text>
            </svg>
          </div>

        </div>

        {/* =========================================================
            BOTTOM META BAR: COPYRIGHT & POLICIES
            Clean, professional operational footer credits
            ========================================================= */}
        <div className="relative z-20 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-normal text-slate-400 mt-6">
          <div>
            &copy; {new Date().getFullYear()} Arclyn Studio. Engineered with Next.js, TypeScript &amp; Tailwind CSS.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span className="flex items-center gap-1.5 text-emerald-400 font-mono text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              All Systems Operational
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
