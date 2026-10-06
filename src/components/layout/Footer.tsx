'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ArrowRight, Mail } from 'lucide-react';
import { Logo } from '../shared/Logo';
import { subscribeScrollTriggerUpdate } from '@/lib/scroll-trigger-bridge';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ARCLYN_WORDMARK = 'Arclyn Studio';

export const Footer: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<HTMLDivElement>(null);
  const blueCircleRef = useRef<HTMLDivElement>(null);
  const whiteCircleRef = useRef<HTMLDivElement>(null);
  const topContentRef = useRef<HTMLDivElement>(null);

  // =========================================================
  // FRAMER FOOTER SCROLL SEQUENCE (stellar-apartment-381100)
  // ACTIVE ONLY ON DESKTOP (≥ 1024px)
  // =========================================================
  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) return;

    const track = trackRef.current;
    const svg = svgRef.current;
    const blueCircle = blueCircleRef.current;
    const whiteCircle = whiteCircleRef.current;
    const topContent = topContentRef.current;
    if (!track || !blueCircle || !whiteCircle) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      const svgWidth = svg ? svg.clientWidth : 1087;
      const targetScale = (svgWidth * (45.12 / 1087)) / 2500;
      gsap.set(whiteCircle, { scale: targetScale });
      gsap.set(blueCircle, { opacity: 0, scale: targetScale });
      return;
    }

    const lenis = (window as unknown as { __lenis?: { on: (event: string, cb: () => void) => void; off: (event: string, cb: () => void) => void } }).__lenis;
    const unsubscribeScrollUpdate = lenis
      ? subscribeScrollTriggerUpdate(lenis, () => ScrollTrigger.update())
      : undefined;

    const ctx = gsap.context(() => {
      // Dynamic target scale calculation based on actual rendered SVG width
      const computeTargetScale = () => {
        const svgWidth = svg && svg.clientWidth > 0 ? svg.clientWidth : 1087;
        const stemWidth = svgWidth * (45.12 / 1087);
        return Math.max(stemWidth / 2500, 0.005);
      };

      const targetScale = computeTargetScale();

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: track,
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });

      // 1. White Circle scales down from 1.0 (fills container) to exact 'i' dot (Screenshot 1 -> 4)
      tl.fromTo(
        whiteCircle,
        { scale: 1, transformOrigin: '50% 50%' },
        { scale: targetScale, ease: 'power2.inOut' },
        0
      );

      // 2. Blue Circle starts slightly larger (1.18) exposing the blue edge on right (Screenshot 1),
      // shrinks down concentrically (Screenshot 2 & 3), and fades to 0 as the white dot settles (Screenshot 4)
      tl.fromTo(
        blueCircle,
        { scale: 1.18, opacity: 1, transformOrigin: '50% 50%' },
        { scale: targetScale * 1.05, opacity: 0, ease: 'power2.inOut' },
        0
      );

      // 3. Top Content smoothly transitions to full brightness as circles shrink below it
      if (topContent) {
        tl.fromTo(
          topContent,
          { opacity: 0.35 },
          { opacity: 1, ease: 'power1.out' },
          0.15
        );
      }
    }, track);

    return () => {
      unsubscribeScrollUpdate?.();
      ctx.revert();
    };
  }, []);

  return (
    <footer id="footer" className="relative w-full bg-black select-none z-20">
      {/* =========================================================
          DESKTOP: SCROLL PINNING TRACK (180vh) - LOCKED FOR ≥1024px
          Preserves the exact approved Framer University interactive
          concentric circle sequence without touching a single pixel.
          ========================================================= */}
      <div ref={trackRef} className="hidden lg:block relative w-full bg-black">
        <div className="relative w-full p-2 sm:p-3 lg:p-4 flex flex-col overflow-hidden">
          
          {/* =========================================================
              THE SINGLE ROUNDED FOOTER CARD (framer-rrzsf3)
              Deep charcoal panel (#131415) with soft 60px-100px border radius
              ========================================================= */}
          <div
            ref={containerRef}
            className="relative w-full bg-[#131415] rounded-[28px] sm:rounded-[40px] lg:rounded-[52px] border border-white/[0.08] overflow-hidden flex flex-col justify-start pt-5 sm:pt-6 lg:pt-8 px-5 sm:px-7 lg:px-8 pb-0 shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
          >
            
            {/* =========================================================
                TOP CONTENT ROW (3 Columns matching Framer template)
                Col 1: Mission Tagline
                Col 2: Explore & Socials
                Col 3: Big Action Buttons ('Contact me' & 'Resources')
                ========================================================= */}
            <div
              ref={topContentRef}
              className="relative z-30 flex flex-col lg:flex-row items-start justify-between gap-4 sm:gap-5 lg:gap-6"
            >
              {/* Col 1: Tagline */}
              <div className="max-w-xs sm:max-w-sm">
                <p className="text-lg sm:text-xl lg:text-[22px] font-bold text-white tracking-tight leading-[1.3]">
                  Build standout websites and AI systems with Arclyn Studio.
                </p>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 font-normal">
                  Full-stack design, web engineering, and automation built for growth.
                </p>
              </div>

              {/* Col 2: Navigation Links (Explore & Socials) */}
              <div className="flex items-start gap-10 sm:gap-16 lg:gap-20">
                {/* Explore */}
                <div>
                  <h4 className="text-sm font-bold text-white mb-3 tracking-tight">
                    Explore
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm font-medium text-[#9ba1a5]">
                    <li>
                      <Link href="/work" className="hover:text-white transition-colors">
                        Work
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="hover:text-white transition-colors">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="/services" className="hover:text-white transition-colors">
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/pricing" className="hover:text-white transition-colors">
                        Pricing
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Socials */}
                <div>
                  <h4 className="text-sm font-bold text-white mb-3 tracking-tight">
                    Socials
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm font-medium text-[#9ba1a5]">
                    <li>
                      <a
                        href="https://twitter.com/arclyn_studio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                      >
                        𝕏 @arclyn_studio
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/saadrehman04/Arclyn-Studio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                      >
                        ▶ @saadrehman04
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://instagram.com/arclyn_studio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                      >
                         @arclyn_studio
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Col 3: Signature Framer Big Action Buttons */}
              <div className="flex flex-col items-start lg:items-end gap-3 sm:gap-4 w-full sm:w-auto">
                {/* Button 1: Contact me (Electric Blue Highlight) */}
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 sm:gap-4 transition-transform active:scale-[0.98]"
                >
                  <span className="text-xl sm:text-2xl lg:text-[28px] font-bold tracking-tight text-[#0080ff] group-hover:text-blue-400 transition-colors">
                    Book a call
                  </span>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#0080ff] text-white flex items-center justify-center transition-transform group-hover:scale-105 shadow-[0_0_20px_rgba(0,128,255,0.4)]">
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>

                {/* Button 2: View work (Pure White Highlight) */}
                <Link
                  href="/work"
                  className="group inline-flex items-center gap-3 sm:gap-4 transition-transform active:scale-[0.98]"
                >
                  <span className="text-xl sm:text-2xl lg:text-[28px] font-bold tracking-tight text-white group-hover:text-slate-200 transition-colors">
                    View work
                  </span>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white text-[#131415] flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm">
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              </div>

            </div>

            {/* =========================================================
                BOTTOM STAGE: EXPANDING CONCENTRIC CIRCLES & WORDMARK
                White and Blue circles settle on the dot of the 'i' in Studio.
                ========================================================= */}
            <div className="relative w-full flex flex-col items-center justify-end overflow-visible mt-6 pt-0 sm:mt-8">
              
              <div className="relative w-full max-w-[1088px] mx-auto overflow-visible select-none">
                
                {/* Anchor the circle reveal on the dot above the i in Studio. */}
                <div
                  className="absolute pointer-events-none z-20"
                  style={{
                    left: '76%',
                    bottom: '113.2%',
                    width: 0,
                    height: 0,
                  }}
                >
                  {/* Blue Outer Circle Layer (framer-7imuf3) */}
                  <div
                    ref={blueCircleRef}
                    className="absolute rounded-full aspect-square pointer-events-none will-change-transform"
                    style={{
                      width: '2500px',
                      height: '2500px',
                      backgroundColor: '#0080ff',
                      top: 0,
                      left: 0,
                      transform: 'translate(-50%, -50%) scale(1.18)',
                      transformOrigin: '50% 50%',
                      zIndex: 21,
                    }}
                  />

                  {/* White Inner Circle Layer (framer-zsxdj7) */}
                  <div
                    ref={whiteCircleRef}
                    className="absolute rounded-full aspect-square pointer-events-none will-change-transform"
                    style={{
                      width: '2500px',
                      height: '2500px',
                      backgroundColor: '#ffffff',
                      top: 0,
                      left: 0,
                      transform: 'translate(-50%, -50%) scale(1)',
                      transformOrigin: '50% 50%',
                      zIndex: 22,
                    }}
                  />
                </div>

                <div className="relative z-10 w-full overflow-hidden -mb-1 sm:-mb-2 lg:-mb-3">
                  <div
                    ref={svgRef}
                    className="w-full text-center select-none pointer-events-none text-[clamp(3.5rem,7vw,8rem)] font-black tracking-[-0.08em] text-white leading-none"
                    aria-label="Arclyn Studio"
                  >
                    {ARCLYN_WORDMARK}
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* =========================================================
              BOTTOM META CREDITS BAR (Outside card matching Framer)
              ========================================================= */}
          <div className="relative z-30 pt-2 sm:pt-3 px-2 flex items-center justify-between text-[10px] sm:text-xs text-[#9ba1a5]">
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-current">
                <path d="M 12 10.667 L 12 4 L 5.333 4 M 4 12 L 11.667 4.333" fill="transparent" strokeWidth="1.5" stroke="currentColor" strokeMiterlimit="10" />
              </svg>
              <span>Copyright &copy; {new Date().getFullYear()} Arclyn Studio. All rights reserved.</span>
            </div>

            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#222426] text-slate-300 text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Full-Stack &amp; AI Systems</span>
            </div>
          </div>

        </div>
      </div>

      {/* =========================================================
          MOBILE & TABLET: DEDICATED RESPONSIVE FOOTER (< 1024px)
          - No scroll trap or sticky sequence
          - Vertical stacked columns with comfortable touch targets (≥44px)
          - Zero horizontal overflow, fits 320px up to 1023px
          ========================================================= */}
      <div className="block lg:hidden relative w-full bg-[#080A10] border-t border-white/[0.08] px-5 sm:px-8 py-12 sm:py-16 text-white overflow-hidden">
        {/* Ambient background illumination */}
        <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[240px] h-[240px] bg-purple-600/10 rounded-full blur-[90px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col gap-10">
          
          {/* Top Row: Arclyn Studio Branding & Mission */}
          <div className="flex flex-col gap-4">
            <Logo size="md" />
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Engineering high-performance web applications, bespoke design systems, and autonomous AI automation pipelines with sub-second execution and zero technical debt.
            </p>
            <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Q1/Q2 Project Slots Open</span>
            </div>
          </div>

          {/* Action CTAs: Minimum 48px Touch Targets */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 min-h-[48px] rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-[0_0_25px_rgba(37,99,235,0.35)] active:scale-[0.98] transition-transform"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 min-h-[48px] rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/10 text-white font-semibold text-sm active:scale-[0.98] transition-all"
            >
              <span>Book Discovery Call</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </Link>
          </div>

          {/* Navigation & Services Stack: 2 columns on tablet, clean stack on mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-6 border-t border-white/[0.08]">
            {/* Services Column */}
            <div>
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 mb-4">
                Services
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li>
                  <Link href="/services" className="hover:text-white transition-colors block py-0.5">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors block py-0.5">
                    Autonomous AI
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors block py-0.5">
                    Creative 3D &amp; WebGL
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors block py-0.5">
                    Brand Systems
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors block py-0.5">
                    Mobile &amp; Apps
                  </Link>
                </li>
              </ul>
            </div>

            {/* Navigation Column */}
            <div>
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 mb-4">
                Ecosystem
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors block py-0.5">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="hover:text-white transition-colors block py-0.5">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-white transition-colors block py-0.5">
                    Pricing &amp; Plans
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors block py-0.5">
                    About Arclyn
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors block py-0.5">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact & Socials Column */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 mb-4">
                Direct Contact
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li>
                  <a
                    href="mailto:hello@arclynstudio.com"
                    className="hover:text-white transition-colors flex items-center gap-2 py-0.5"
                  >
                    <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>hello@arclynstudio.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/arclyn_studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors block py-0.5"
                  >
                    𝕏 Twitter / @arclyn_studio
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/saadrehman04/Arclyn-Studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors block py-0.5"
                  >
                    ⌨ GitHub / @saadrehman04
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/arclyn_studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors block py-0.5"
                  >
                     Instagram / @arclyn_studio
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright & Status */}
          <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-500 font-mono">
            <div>
              &copy; {new Date().getFullYear()} Arclyn Studio. All rights reserved.
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Full-Stack &amp; AI Systems</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
