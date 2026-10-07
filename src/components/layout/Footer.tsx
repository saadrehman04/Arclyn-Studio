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
          Matching the exact Laptop rounded card aesthetic, typography,
          navigation, action buttons, and signature Arclyn Studio wordmark.
          ========================================================= */}
      <div className="block lg:hidden relative w-full bg-black p-3 sm:p-4 text-white overflow-hidden">
        {/* Single Rounded Footer Card matching laptop */}
        <div className="relative w-full bg-[#131415] rounded-[24px] sm:rounded-[36px] border border-white/[0.08] overflow-hidden flex flex-col pt-6 px-5 sm:px-7 pb-0 shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
          
          {/* Mission Tagline */}
          <div className="mb-6">
            <p className="text-lg sm:text-xl font-bold text-white tracking-tight leading-[1.3]">
              Build standout websites and AI systems with Arclyn Studio.
            </p>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 font-normal">
              Full-stack design, web engineering, and automation built for growth.
            </p>
          </div>

          {/* Navigation Links: Explore & Socials in clean 2-column grid */}
          <div className="grid grid-cols-2 gap-6 sm:gap-10 py-5 border-y border-white/[0.08]">
            {/* Explore */}
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white mb-2.5 tracking-tight">
                Explore
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm font-medium text-[#9ba1a5]">
                <li>
                  <Link href="/work" className="hover:text-white transition-colors block py-0.5">
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors block py-0.5">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors block py-0.5">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-white transition-colors block py-0.5">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white mb-2.5 tracking-tight">
                Socials
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm font-medium text-[#9ba1a5]">
                <li>
                  <a
                    href="https://twitter.com/arclyn_studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors block py-0.5"
                  >
                    𝕏 @arclyn_studio
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/saadrehman04/Arclyn-Studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors block py-0.5"
                  >
                    ▶ @saadrehman04
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/arclyn_studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors block py-0.5"
                  >
                     @arclyn_studio
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Signature Action Buttons matching laptop ('Book a call' & 'View work') */}
          <div className="flex flex-col gap-3.5 py-6">
            <Link
              href="/contact"
              className="group flex items-center justify-between w-full py-1 transition-transform active:scale-[0.98]"
            >
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#0080ff] group-hover:text-blue-400 transition-colors">
                Book a call
              </span>
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0080ff] text-white flex items-center justify-center shadow-[0_0_18px_rgba(0,128,255,0.45)] group-hover:scale-105 transition-transform">
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </Link>

            <Link
              href="/work"
              className="group flex items-center justify-between w-full py-1 transition-transform active:scale-[0.98]"
            >
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-slate-200 transition-colors">
                View work
              </span>
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-[#131415] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </Link>
          </div>

          {/* Bottom Stage: Big Bold Wordmark 'Arclyn Studio' matching laptop */}
          <div className="relative w-full overflow-hidden pt-4 pb-2 text-center border-t border-white/[0.06]">
            <div
              className="w-full text-center select-none text-[clamp(2.6rem,11.5vw,5.5rem)] font-black tracking-[-0.08em] text-white leading-none"
              aria-label="Arclyn Studio"
            >
              {ARCLYN_WORDMARK}
            </div>
          </div>

        </div>

        {/* Bottom Meta Credits Bar matching laptop */}
        <div className="pt-3 px-2 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-[10px] sm:text-xs text-[#9ba1a5]">
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <span>Copyright &copy; {new Date().getFullYear()} Arclyn Studio. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#222426] text-slate-300 text-[10px] sm:text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Full-Stack &amp; AI Systems</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
