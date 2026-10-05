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
    displayNumber: '01 / 05',
    title: 'Web Development',
    desc: 'Websites and digital experiences built to convert.',
    route: '/services/web-development',
    image: '/images/services/web-development.jpg',
  },
  {
    id: 'app-development',
    number: '02',
    displayNumber: '02 / 05',
    title: 'App Development',
    desc: 'Scalable mobile applications built around your users.',
    route: '/services/app-development',
    image: '/images/services/app-development.jpg',
  },
  {
    id: 'ai-automation',
    number: '03',
    displayNumber: '03 / 05',
    title: 'AI & Automation',
    desc: 'AI-powered systems that automate and accelerate business.',
    route: '/services/ai-automation',
    image: '/images/services/ai-automation.jpg',
  },
  {
    id: 'saas-development',
    number: '04',
    displayNumber: '04 / 05',
    title: 'SaaS Development',
    desc: 'From product idea to scalable SaaS platform.',
    route: '/services/saas-development',
    image: '/images/services/saas-development.jpg',
  },
  {
    id: 'custom-software',
    number: '05',
    displayNumber: '05 / 05',
    title: 'Custom Software',
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
    if (!isDesktop) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

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
        const availableWidth = track.parentElement?.clientWidth || window.innerWidth * 0.7;
        return Math.max(0, trackWidth - availableWidth + 80);
      };

      const horizontalTween = gsap.to(track, {
        x: () => -calculateScrollDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: () => `+=${calculateScrollDistance() + 600}`,
          pin: pinWrapper,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            setProgress(self.progress);
            const idx = Math.min(
              SERVICES_GALLERY.length - 1,
              Math.floor(self.progress * SERVICES_GALLERY.length)
            );
            setActiveIndex(idx);
          },
        },
      });

      // Subtle depth scale on pinWrapper as horizontal scroll completes, setting up parallax transition
      gsap.to(pinWrapper, {
        scale: 0.96,
        opacity: 0.92,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: container,
          start: () => `+=${calculateScrollDistance() + 200}`,
          end: () => `+=${calculateScrollDistance() + 600}`,
          scrub: true,
        },
      });

      // Subtle entrance scaling & opacity transitions for individual cards
      cardRefs.current.forEach((card) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { scale: 0.96, opacity: 0.8 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: card,
              containerAnimation: horizontalTween,
              start: 'left right-=12%',
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
      className="relative w-full bg-[#E8E8E8] select-none text-[#1A1A1A] font-helvetica-neue"
    >
      {/* =========================================================
          DESKTOP VIEW: PINNED FIXED LEFT PANEL + HORIZONTAL SCROLL
          (Active on >= 1024px screens)
          ========================================================= */}
      <div className="hidden lg:block w-full">
        <div 
          ref={pinWrapperRef}
          className="w-full h-screen relative flex flex-row overflow-hidden bg-[#E8E8E8]"
        >
          {/* ─────────────────────────────────────────────────────────
              LEFT: PINNED EDITORIAL INTRODUCTION PANEL
              ───────────────────────────────────────────────────────── */}
          <div className="w-[32%] xl:w-[28%] shrink-0 h-full flex flex-col justify-between pl-8 sm:pl-12 lg:pl-16 pr-8 pt-28 pb-16 z-20 pointer-events-auto border-r border-[#1A1A1A]/10 bg-[#E8E8E8]">
            
            {/* Top Area: Title & Link */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase text-[#1A1A1A]/50 mb-6">
                <span>✦</span>
                <span>SERVICES &amp; CAPABILITIES</span>
              </div>

              <h2 className="text-4xl sm:text-5xl xl:text-6xl font-light tracking-tight leading-[1.05] text-[#1A1A1A] mb-8">
                Selected services <br />
                &amp; capabilities
              </h2>

              <Link 
                href="/services"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-[#1A1A1A] border-b border-[#1A1A1A]/30 hover:border-[#1A1A1A] pb-1 transition-all group"
              >
                <span>VIEW ALL SERVICES</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Bottom Area: Active Counter & Scroll Progress */}
            <div className="pt-8 border-t border-[#1A1A1A]/10 flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs font-mono font-bold text-[#1A1A1A]">
                <span>0{activeIndex + 1} / 05</span>
                <span className="tracking-widest uppercase text-[10px] text-[#1A1A1A]/50">SCROLL TO EXPLORE ↓</span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full h-[2px] bg-[#1A1A1A]/10 rounded-full overflow-hidden relative">
                <div 
                  className="absolute top-0 bottom-0 left-0 bg-[#1A1A1A] rounded-full transition-all duration-150"
                  style={{ width: `${Math.max(12, progress * 100)}%` }}
                />
              </div>
            </div>

          </div>

          {/* ─────────────────────────────────────────────────────────
              RIGHT: HORIZONTALLY SCROLLING SERVICE GALLERY
              ───────────────────────────────────────────────────────── */}
          <div className="flex-1 h-full overflow-hidden flex items-center relative pl-8 lg:pl-12 pr-12 z-10">
            <div 
              ref={trackRef}
              className="flex flex-row items-center gap-8 xl:gap-12 pr-28 will-change-transform transform-gpu"
            >
              {SERVICES_GALLERY.map((service, index) => (
                <div
                  key={service.id}
                  ref={(el) => { cardRefs.current[index] = el; }}
                  className="w-[380px] lg:w-[420px] xl:w-[460px] shrink-0 flex flex-col group will-change-transform"
                >
                  <Link 
                    href={service.route}
                    className="block overflow-hidden rounded-2xl mb-5 bg-black/5 aspect-[16/10] relative shadow-[0_12px_32px_rgba(0,0,0,0.06)] border border-[#1A1A1A]/10 group-hover:border-[#1A1A1A]/30 transition-all duration-500"
                  >
                    <Image 
                      src={service.image} 
                      alt={service.title}
                      fill
                      sizes="(max-width: 1280px) 420px, 460px"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </Link>

                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-xs font-mono text-[#1A1A1A]/50 mb-1">
                      <span className={activeIndex === index ? 'text-[#1A1A1A] font-bold' : ''}>
                        {service.displayNumber}
                      </span>
                      <span className="uppercase tracking-wider text-[10px]">
                        DISCIPLINE
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#1A1A1A] group-hover:text-black transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-[#1A1A1A]/70 leading-relaxed line-clamp-2">
                      {service.desc}
                    </p>

                    <div className="pt-2">
                      <Link 
                        href={service.route}
                        className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.08em] uppercase text-[#1A1A1A]/80 hover:text-[#1A1A1A] border-b border-[#1A1A1A]/20 hover:border-[#1A1A1A] pb-1 transition-colors"
                      >
                        <span>EXPLORE SERVICE</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* =========================================================
          MOBILE & TABLET VIEW: CLEAN VERTICAL EDITORIAL LAYOUT
          (Active on < 1024px screens)
          ========================================================= */}
      <div className="block lg:hidden w-full py-20 px-6 sm:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="mb-14">
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight leading-[1.05] text-[#1A1A1A] mb-6">
              Selected services <br />
              &amp; capabilities
            </h2>
            <Link 
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-[#1A1A1A] border-b border-[#1A1A1A]/30 hover:border-[#1A1A1A] pb-1 transition-all"
            >
              <span>VIEW ALL SERVICES</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Cards List */}
          <div className="flex flex-col gap-12">
            {SERVICES_GALLERY.map((service) => (
              <div key={service.id} className="flex flex-col group">
                <Link href={service.route} className="block overflow-hidden rounded-xl mb-5 bg-black/5 aspect-[16/10] relative shadow-sm border border-[#1A1A1A]/10">
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 640px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-mono text-[#1A1A1A]/50">
                    {service.displayNumber}
                  </span>
                  <h3 className="text-2xl font-medium tracking-tight text-[#1A1A1A]">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#1A1A1A]/70 leading-relaxed">
                    {service.desc}
                  </p>
                  <div className="pt-2">
                    <Link 
                      href={service.route}
                      className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.08em] uppercase text-[#1A1A1A]/80 hover:text-[#1A1A1A] border-b border-[#1A1A1A]/20 hover:border-[#1A1A1A] pb-1 transition-colors"
                    >
                      <span>EXPLORE SERVICE</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesEditorialShowcase;
