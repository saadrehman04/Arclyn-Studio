import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Reveal, SplitText } from '@/components/motion/Reveal';

interface PageHeroProps {
  eyebrow: string;
  /** Use \n for line breaks */
  title: string;
  /** word indexes (across the whole title) rendered in the serif accent */
  accentWords?: number[];
  description?: React.ReactNode;
  align?: 'center' | 'left';
  back?: { href: string; label: string };
  children?: React.ReactNode;
}

/**
 * Shared inner-page hero: grid + brand arc horizon, masked headline intro.
 * Pure CSS on first paint (no hydration wait), so it is fast on mobile.
 */
export const PageHero: React.FC<PageHeroProps> = ({
  eyebrow,
  title,
  accentWords = [],
  description,
  align = 'center',
  back,
  children,
}) => {
  const centered = align === 'center';
  return (
    <section className="relative isolate overflow-hidden px-5 pb-28 pt-32 sm:px-8 sm:pb-36 sm:pt-40">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-grid" />
        <div className="absolute inset-x-0 top-[calc(100%-3.5rem)] h-full sm:top-[calc(100%-4.5rem)]">
          <div className="hero-arc" />
          <div className="hero-arc-flare top-0 opacity-70" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[var(--bg)]" />
      </div>

      <div className={`mx-auto max-w-5xl ${centered ? 'text-center' : ''}`}>
        {back && (
          <Reveal intro variant="fade" className={`mb-8 ${centered ? 'flex justify-center' : ''}`}>
            <Link
              href={back.href}
              className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              {back.label}
            </Link>
          </Reveal>
        )}
        <Reveal intro variant="fade" delay={60} className={`eyebrow mb-6 ${centered ? 'justify-center' : ''}`}>
          {eyebrow}
        </Reveal>
        <SplitText
          as="h1"
          intro
          text={title}
          accentWords={accentWords}
          accentClassName="text-[var(--accent)]"
          delay={120}
          stagger={60}
          className="font-display text-[clamp(2.5rem,7.5vw,6rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-white"
        />
        {description && (
          <Reveal
            intro
            as="p"
            variant="up"
            delay={380}
            className={`mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg ${centered ? 'mx-auto' : ''}`}
          >
            {description}
          </Reveal>
        )}
        {children && (
          <Reveal intro variant="up" delay={480} className="mt-8">
            {children}
          </Reveal>
        )}
      </div>
    </section>
  );
};

interface CtaLink {
  href: string;
  label: string;
  external?: boolean;
}

interface PageCtaProps {
  title: string;
  accentWords?: number[];
  description?: string;
  primary: CtaLink;
  secondary?: CtaLink;
}

const CtaAnchor: React.FC<{ link: CtaLink; className: string; children: React.ReactNode }> = ({ link, className, children }) =>
  link.external ? (
    <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  ) : (
    <Link href={link.href} className={className}>
      {children}
    </Link>
  );

/** Shared closing call-to-action card for inner pages. */
export const PageCta: React.FC<PageCtaProps> = ({ title, accentWords = [], description, primary, secondary }) => (
  <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
    <div className="relative isolate mx-auto max-w-6xl overflow-hidden rounded-[28px] border border-white/[0.09] bg-[#111113] px-6 pb-36 pt-14 text-center sm:rounded-[40px] sm:px-12 sm:pb-44 sm:pt-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-[calc(100%-6rem)] -z-10 h-full sm:top-[calc(100%-8rem)]">
        <div className="hero-arc" />
        <div className="hero-arc-flare top-0" />
      </div>
      <SplitText
        text={title}
        accentWords={accentWords}
        accentClassName="text-[var(--accent)]"
        className="mx-auto max-w-3xl font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-white"
      />
      {description && (
        <Reveal as="p" variant="up" delay={150} className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-zinc-400">
          {description}
        </Reveal>
      )}
      <Reveal variant="up" delay={250} className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
        <CtaAnchor link={primary} className="btn-primary">
          <span>{primary.label}</span>
          <span className="btn-arrow" aria-hidden="true">
            →
          </span>
        </CtaAnchor>
        {secondary && (
          <CtaAnchor link={secondary} className="btn-ghost">
            {secondary.label}
          </CtaAnchor>
        )}
      </Reveal>
    </div>
  </section>
);
