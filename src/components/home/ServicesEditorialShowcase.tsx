'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ServiceGalleryItem {
  id: string;
  number: string;
  displayNumber: string;
  title: string;
  desc: string;
  route: string;
  image: string;
}

const SERVICES_GALLERY: ServiceGalleryItem[] = [
  {
    id: 'web-development',
    number: '01',
    displayNumber: '01 / 06',
    title: 'WEB DEVELOPMENT',
    desc: 'Websites and digital experiences built to convert.',
    route: '/services/web-development',
    image: '/images/services/startup-growth.jpg',
  },
  {
    id: 'app-development',
    number: '02',
    displayNumber: '02 / 06',
    title: 'APP DEVELOPMENT',
    desc: 'Scalable mobile applications built around your users.',
    route: '/services/app-development',
    image: '/images/services/ai-product.jpg',
  },
  {
    id: 'ai-automation',
    number: '03',
    displayNumber: '03 / 06',
    title: 'AI & AUTOMATION',
    desc: 'AI-powered systems that automate and accelerate business.',
    route: '/services/ai-automation',
    image: '/images/services/ai-automation.jpg',
  },
  {
    id: 'ui-ux-design',
    number: '04',
    displayNumber: '04 / 06',
    title: 'UI/UX DESIGN',
    desc: 'Interfaces designed to make complex products feel simple.',
    route: '/services/ui-ux-design',
    image: '/images/services/prototyping-ux.jpg',
  },
  {
    id: 'saas-development',
    number: '05',
    displayNumber: '05 / 06',
    title: 'SAAS DEVELOPMENT',
    desc: 'From product idea to scalable SaaS platform.',
    route: '/services/saas-development',
    image: '/images/services/cloud-devops.jpg',
  },
  {
    id: 'custom-software',
    number: '06',
    displayNumber: '06 / 06',
    title: 'CUSTOM SOFTWARE',
    desc: 'Purpose-built software for unique business requirements.',
    route: '/services/custom-software',
    image: '/images/services/custom-software.jpg',
  },
];

export const ServicesEditorialShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinWrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    // Only initialize GSAP horizontal scroll on desktop
    if (!isDesktop) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Connect Lenis with GSAP ScrollTrigger if running
    const lenis = (window as unknown as { __lenis?: { on: (event: string, cb: () => void) => void; off: (event: string, cb: () => void) => void } }).__lenis;
    const lenisUpdate = () => ScrollTrigger.update();
    if (lenis) {
      lenis.on('scroll', lenisUpdate);
    }

    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const pinWrapper = pinWrapperRef.current;
      const track = trackRef.current;

      if (!container || !pinWrapper || !track) return;

      const calculateScrollDistance = () => {
        const trackWidth = track.scrollWidth;
        const viewportWidth = window.innerWidth;
        // Total horizontal distance to scroll through all 6 services
        return Math.max(0, trackWidth - viewportWidth + 480);
      };

      const horizontalTween = gsap.to(track, {
        x: () => -calculateScrollDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: () => `+=${calculateScrollDistance() + 800}`,
          pin: pinWrapper,
          scrub: true, // 1:1 hardware-accelerated direct sync with smooth scroll
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            setProgress(self.progress);
            const idx = Math.min(5, Math.floor(self.progress * 6));
            setActiveIndex(idx);
          },
        },
      });

      // Subtle entrance scaling & opacity transitions for individual service items
      cardRefs.current.forEach((card) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { scale: 0.97, opacity: 0.85 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: card,
              containerAnimation: horizontalTween,
              start: 'left right-=15%',
              end: 'center center',
              scrub: true,
            },
          }
        );
      });
    }, containerRef);

    return () => {
      if (lenis) {
        lenis.off('scroll', lenisUpdate);
      }
      ctx.revert();
    };
  }, [isDesktop]);

  return (
    <section 
      id="services" 
      ref={containerRef}
      className="relative w-full bg-[#050711] select-none overflow-hidden"
    >
      {/* =========================================================
          DESKTOP VIEW: PINNED EDITORIAL PANEL + HORIZONTAL GALLERY
          (Active on >= 1024px screens)
          ========================================================= */}
      <div className="hidden lg:block w-full">
        <div 
          ref={pinWrapperRef}
          className="w-full h-screen relative flex flex-row overflow-hidden bg-[#050711]"
        >
          {/* Subtle Ambient Studio Lighting */}
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.06)_0%,transparent_70%)]" />
            <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.05)_0%,transparent_70%)]" />
          </div>

          {/* ─────────────────────────────────────────────────────────
              LEFT: FIXED / STICKY EDITORIAL INTRODUCTION PANEL
              ───────────────────────────────────────────────────────── */}
          <div className="w-[30%] xl:w-[26%] shrink-0 h-full flex flex-col justify-between pl-8 sm:pl-12 lg:pl-16 pr-8 pt-28 pb-14 z-20 pointer-events-auto border-r border-white/[0.07] bg-[#050711]/95 backdrop-blur-md">
            
            {/* Top Area: Eyebrow + Huge Headline */}
            <div>
              <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-widest mb-6">
                <span className="text-cyan-400">✦</span>
                <span>OUR SERVICES</span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight text-white leading-[1.04] mb-6">
                WE BUILD <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                  WHAT&apos;S NEXT.
                </span>
              </h2>

              <p className="text-sm xl:text-base text-slate-400 font-normal leading-relaxed max-w-xs">
                We combine design, technology and AI to build digital experiences that move businesses forward.
              </p>
            </div>

            {/* Bottom Area: Services Count & Scroll Hint */}
            <div className="pt-8 border-t border-white/[0.08] flex flex-col gap-3">
              <span className="font-mono text-xs font-bold text-slate-300 tracking-wider">
                06 SERVICES
              </span>
              
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400">
                <span className="animate-bounce text-sm">↓</span>
                <span className="tracking-widest uppercase text-[11px] font-semibold">SCROLL TO EXPLORE</span>
              </div>
            </div>

          </div>

          {/* ─────────────────────────────────────────────────────────
              RIGHT: HORIZONTALLY SCROLLING SERVICE GALLERY
              ───────────────────────────────────────────────────────── */}
          <div className="flex-1 h-full overflow-hidden flex items-center relative pl-8 lg:pl-14 pr-16 z-10">
            <div 
              ref={trackRef}
              className="flex flex-row items-center gap-10 xl:gap-14 pr-32 will-change-transform transform-gpu"
            >
              {SERVICES_GALLERY.map((service, index) => (
                <div
                  key={service.id}
                  ref={(el) => { cardRefs.current[index] = el; }}
                  className="w-[380px] lg:w-[440px] xl:w-[480px] shrink-0 flex flex-col will-change-transform"
                >
                  <Link 
                    href={service.route}
                    className="group block cursor-pointer"
                  >
                    {/* Top Number Label */}
                    <div className="font-mono text-xs font-bold tracking-widest mb-3.5 flex items-center justify-between">
                      <span className={`transition-colors duration-300 ${
                        activeIndex === index ? 'text-cyan-400 font-bold' : 'text-slate-500'
                      }`}>
                        {service.displayNumber}
                      </span>
                    </div>

                    {/* Large Clear Image (Dominant Visual) */}
                    <div className="relative aspect-[16/10] w-full rounded-2xl xl:rounded-3xl overflow-hidden bg-slate-900 border border-white/[0.08] group-hover:border-cyan-400/50 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 1280px) 440px, 480px"
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                      {/* Subtle natural film contrast overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                    </div>

                    {/* Below the Image: Title, Description & Link */}
                    <div className="pt-6">
                      <h3 className="font-display text-2xl xl:text-3xl font-black text-white tracking-tight leading-tight group-hover:text-cyan-400 transition-colors mb-2.5">
                        {service.title}
                      </h3>

                      <p className="text-sm text-slate-400 font-normal leading-relaxed mb-5 line-clamp-2">
                        {service.desc}
                      </p>

                      <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-white/90 group-hover:text-cyan-400 transition-colors">
                        <span className="border-b border-white/20 group-hover:border-cyan-400 pb-0.5 transition-colors">
                          EXPLORE SERVICE
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────
              MINIMAL PROGRESS INDICATOR (Bottom Bar)
              Example: 01 ━━━━━━━━━●━━━━━━━━━━━━ 06
              ───────────────────────────────────────────────────────── */}
          <div className="absolute bottom-5 left-[33%] xl:left-[29%] right-12 z-30 flex items-center justify-between pointer-events-none">
            <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
              <span className="font-bold text-white text-sm">
                {SERVICES_GALLERY[activeIndex].number}
              </span>
              
              <div className="w-44 xl:w-64 h-[2px] bg-white/10 rounded-full relative overflow-hidden">
                <div 
                  className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full transition-all duration-150"
                  style={{ width: `${Math.max(5, progress * 100)}%` }}
                />
                <div 
                  className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee] transition-all duration-150"
                  style={{ left: `calc(${Math.min(96, Math.max(2, progress * 100))}% - 5px)` }}
                />
              </div>

              <span className="text-slate-500 font-semibold text-xs">
                06
              </span>
            </div>

            <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-slate-500">
              <span>AGENCY SERVICES</span>
              <span className="text-slate-700">•</span>
              <span className="text-cyan-400/80">06 DISCIPLINES</span>
            </div>
          </div>

        </div>
      </div>

      {/* =========================================================
          MOBILE & TABLET VIEW: CLEAN VERTICAL EDITORIAL LIST
          (Active on < 1024px screens — Does NOT force desktop pin)
          ========================================================= */}
      <div className="block lg:hidden px-4 sm:px-6 py-20 bg-[#050711]">
        <div className="max-w-xl mx-auto">
          
          {/* Editorial Introduction */}
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-widest mb-4">
              <span>✦</span>
              <span>OUR SERVICES</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight mb-4">
              WE BUILD <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                WHAT&apos;S NEXT.
              </span>
            </h2>

            <p className="text-sm text-slate-400 font-normal leading-relaxed mb-6">
              We combine design, technology and AI to build digital experiences that move businesses forward.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono font-semibold text-slate-300">
              <span>06 SERVICES</span>
              <span className="text-slate-600">•</span>
              <span className="text-cyan-400">DISCIPLINES</span>
            </div>
          </div>

          {/* Clean Vertical Services List */}
          <div className="flex flex-col gap-14">
            {SERVICES_GALLERY.map((service) => (
              <Link 
                key={service.id}
                href={service.route}
                className="group block cursor-pointer"
              >
                {/* Number */}
                <div className="font-mono text-xs font-bold tracking-widest text-slate-500 mb-3">
                  {service.displayNumber}
                </div>

                {/* Large Clear Image */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-900 border border-white/[0.08] group-hover:border-cyan-400/50 transition-all duration-300 shadow-xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-50" />
                </div>

                {/* Below Image */}
                <div className="pt-4">
                  <h3 className="font-display text-2xl font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors mb-2">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-400 font-normal leading-relaxed mb-4">
                    {service.desc}
                  </p>

                  <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-cyan-400">
                    <span className="border-b border-cyan-400/40 pb-0.5">
                      EXPLORE SERVICE
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesEditorialShowcase;
