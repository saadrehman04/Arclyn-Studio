'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { gsap } from '@/lib/gsap';
import { Reveal, SplitText } from '@/components/motion/Reveal';

interface ServiceGalleryItem {
  id: string;
  title: string;
  desc: string;
  route: string;
  image: string;
  tags: string[];
}

const SERVICES_GALLERY: ServiceGalleryItem[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    desc: 'Websites and digital experiences built to convert.',
    route: '/services/website-ecommerce-development',
    image: '/images/services/web-development.jpg',
    tags: ['Next.js', 'CMS', 'SEO'],
  },
  {
    id: 'app-development',
    title: 'App Development',
    desc: 'Scalable mobile applications built around your users.',
    route: '/services/mobile-app-development',
    image: '/images/services/app-development.jpg',
    tags: ['iOS', 'Android', 'React Native'],
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    desc: 'AI-powered systems that automate and accelerate your business.',
    route: '/services/ai-integration-automation',
    image: '/images/services/ai-automation.jpg',
    tags: ['Agents', 'LangGraph', 'n8n'],
  },
  {
    id: 'saas-development',
    title: 'SaaS Development',
    desc: 'From product idea to a scalable SaaS platform.',
    route: '/services/custom-software-saas-development',
    image: '/images/services/saas-development.jpg',
    tags: ['Billing', 'Auth', 'Dashboards'],
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    desc: 'Interfaces and brand systems people love to use — and that convert.',
    route: '/services/ui-ux-design',
    image: '/images/services/ui-ux-design.jpg',
    tags: ['Product design', 'Prototypes', 'Design systems'],
  },
];

const TOTAL = String(SERVICES_GALLERY.length).padStart(2, '0');

export const ServicesEditorialShowcase: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const mm = gsap.matchMedia(section);
    // Desktop only, and only when the user is fine with motion.
    mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
      const pin = pinRef.current;
      const track = trackRef.current;
      if (!pin || !track) return;

      const distance = () => Math.max(0, track.scrollWidth - (track.parentElement?.clientWidth ?? window.innerWidth));
      let lastIndex = -1;

      gsap.to(track, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: pin,
          start: 'top top',
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressRef.current) progressRef.current.style.transform = `scaleX(${Math.max(0.08, self.progress)})`;
            const idx = Math.min(SERVICES_GALLERY.length - 1, Math.floor(self.progress * SERVICES_GALLERY.length));
            if (idx !== lastIndex && counterRef.current) {
              lastIndex = idx;
              counterRef.current.textContent = String(idx + 1).padStart(2, '0');
            }
          },
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative w-full bg-[var(--paper)] text-[var(--paper-ink)]"
    >
      <div ref={pinRef} className="relative flex w-full flex-col overflow-hidden lg:h-screen lg:flex-row">
        {/* Intro panel */}
        <div className="relative z-10 flex shrink-0 flex-col justify-between gap-10 px-5 pb-10 pt-24 sm:px-8 lg:w-[34%] lg:border-r lg:border-black/10 lg:py-28 lg:pl-12 lg:pr-10 xl:w-[30%] xl:pl-16">
          <div>
            <Reveal as="p" variant="fade" className="eyebrow mb-6 !text-black/50">
              What we do
            </Reveal>
            <SplitText
              text={'Services built\nfor growth.'}
              accentWords={[2, 3]}
              accentClassName="text-black/35"
              className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.045em]"
            />
            <Reveal as="p" variant="up" delay={150} className="mt-6 max-w-xs text-[15px] leading-relaxed text-black/60">
              One senior team for design, engineering and AI — from the first wireframe to the systems that run your
              business.
            </Reveal>
            <Reveal variant="up" delay={250} className="mt-8">
              <Link
                href="/services"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-[var(--paper-ink)] px-5 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.03]"
              >
                All services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="hidden lg:block">
            <div className="flex items-baseline justify-between font-mono text-xs text-black/50">
              <span>
                <span ref={counterRef} className="text-base font-semibold text-black">
                  01
                </span>{' '}
                / {TOTAL}
              </span>
              <span className="uppercase tracking-[0.14em]">Scroll</span>
            </div>
            <div className="mt-3 h-[2px] w-full overflow-hidden rounded-full bg-black/10">
              <div
                ref={progressRef}
                className="h-full w-full origin-left rounded-full bg-black will-change-transform"
                style={{ transform: 'scaleX(0.08)' }}
              />
            </div>
          </div>
        </div>

        {/* Track — horizontal on desktop (driven by GSAP), native swipe on touch */}
        <div className="relative flex flex-1 items-center overflow-x-auto overflow-y-hidden no-scrollbar lg:overflow-hidden">
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-4 px-5 pb-16 sm:gap-6 sm:px-8 lg:snap-none lg:gap-8 lg:px-12 lg:pb-0 lg:pr-[12vw] will-change-transform"
          >
            {SERVICES_GALLERY.map((service, index) => (
              <Link
                key={service.id}
                href={service.route}
                className="group flex w-[78vw] max-w-[440px] shrink-0 snap-start flex-col sm:w-[400px] lg:w-[min(30vw,460px)]"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px] bg-black/5 lg:aspect-[4/4.6]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 78vw, 460px"
                    className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
                  <span className="absolute left-5 top-5 font-mono text-xs text-white/80">
                    {String(index + 1).padStart(2, '0')} / {TOTAL}
                  </span>
                  <span className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white text-black transition-transform duration-500 group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                  <div className="absolute inset-x-5 bottom-5 flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-black/45 px-2.5 py-1 text-[11px] font-medium text-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">{service.title}</h3>
                <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-black/60">{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesEditorialShowcase;
