import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { INDUSTRIES } from '@/data/industries';
import { 
  Building2, 
  Utensils, 
  ShoppingBag, 
  Dumbbell, 
  Wrench, 
  Stethoscope, 
  ArrowRight,
  Check,
  ExternalLink,
  Info,
} from 'lucide-react';
import { PageHero, PageCta } from '@/components/shared/PageHero';
import { Reveal } from '@/components/motion/Reveal';

export const metadata: Metadata = {
  title: 'Industries We Serve — Concept Architecture Showcases',
  description:
    'Explore original concept architectures crafted by Arclyn Studio for Restaurants, E-Commerce, Real Estate, Fitness, Home Services, and Medical Clinics.',
};

const ICON_MAP: Record<string, React.ElementType> = {
  'restaurants-hospitality': Utensils,
  'ecommerce-retail': ShoppingBag,
  'real-estate-architecture': Building2,
  'fitness-athletics': Dumbbell,
  'home-services-trades': Wrench,
  'medical-clinics': Stethoscope,
};

export default function IndustriesPage() {
  return (
    <div className="relative min-h-screen bg-[var(--bg)]">
      <PageHero
        eyebrow="Industries"
        title={'Built for the way\nyour industry sells.'}
        accentWords={[4, 5, 6]}
        description="Every category needs its own visual language, trust signals and conversion funnel. Here's how we approach the industries we know best."
      >
        <div className="mx-auto flex max-w-2xl items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-left">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-zinc-300" />
          <p className="text-xs leading-relaxed text-zinc-400 sm:text-sm">
            <strong className="font-medium text-white">Editorial note:</strong> the concept previews below are original design
            explorations by Arclyn Studio to show vertical expertise. They are not past client endorsements and do not reuse
            proprietary brand assets.
          </p>
        </div>
      </PageHero>

      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-5 sm:space-y-6">
          {INDUSTRIES.map((ind, index) => {
            const Icon = ICON_MAP[ind.id] || Building2;
            const flip = index % 2 === 1;
            return (
              <Reveal
                key={ind.id}
                id={ind.id}
                variant="up"
                className="glass-panel scroll-mt-28 overflow-hidden rounded-[28px] sm:rounded-[36px]"
              >
                <div className="grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-2 lg:gap-14 lg:p-14">
                  <div className={flip ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.03] text-zinc-300">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-mono text-xs text-zinc-500">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <h2 className="mt-6 font-display text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">{ind.name}</h2>
                    <p className="mt-2 text-sm font-medium text-zinc-300">{ind.tagline}</p>
                    <p className="mt-4 text-[15px] leading-relaxed text-zinc-400">{ind.description}</p>

                    <p className="mt-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 text-sm leading-relaxed text-zinc-400">
                      <span className="font-medium text-white">Design direction: </span>
                      {ind.styleInspiration}
                    </p>

                    <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                      {ind.conversionFocus.map((c) => (
                        <li key={c} className="flex items-start gap-2.5 text-sm text-zinc-300">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-zinc-300" />
                          {c}
                        </li>
                      ))}
                    </ul>

                    {ind.arclynExample && (
                      <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.04] p-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="text-sm">
                          <p className="font-medium text-emerald-300">Shipped example</p>
                          <p className="mt-0.5 text-zinc-400">
                            {ind.arclynExample.name} — {ind.arclynExample.note}
                          </p>
                        </div>
                        {ind.arclynExample.url && (
                          <a
                            href={ind.arclynExample.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full border border-white/15 px-3.5 py-2 text-xs font-medium text-white transition-colors hover:bg-white/[0.06] sm:self-auto"
                          >
                            Live site
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>
                    )}

                    <Link href="/contact" className="btn-primary mt-8 w-full sm:w-auto">
                      <span>Build for {ind.name.split('&')[0].trim()}</span>
                      <span className="btn-arrow">
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </Link>
                  </div>

                  {/* Concept preview */}
                  <div className={flip ? 'lg:order-1' : ''}>
                    <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#161618]">
                      <div className="flex items-center gap-1.5 border-b border-white/[0.08] px-4 py-3">
                        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                        <span className="ml-3 truncate font-mono text-[11px] text-zinc-500">concept.arclynstudio.com/{ind.id}</span>
                      </div>
                      <div className="relative p-6 sm:p-9">
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-50"
                          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.087), transparent 65%)' }}
                        />
                        <span className="relative rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                          Concept demo
                        </span>
                        <h3 className="relative mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-3xl">
                          {ind.mockupTheme.demoHeadline}
                        </h3>
                        <p className="relative mt-3 text-sm leading-relaxed text-zinc-400">{ind.mockupTheme.demoSub}</p>
                        <div className="relative mt-5 flex flex-wrap gap-2">
                          {ind.mockupTheme.demoTags.map((tag) => (
                            <span key={tag} className="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[11px] text-zinc-300">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="relative mt-7 flex flex-wrap items-center gap-3">
                          <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black">{ind.mockupTheme.demoCta}</span>
                          <span className="text-[11px] text-zinc-500">Mobile-first responsive flow</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <PageCta
        title={'Operating in a\ndifferent vertical?'}
        accentWords={[3, 4]}
        description="Our process adapts to any high-intent niche — B2B fintech, legal practices, education and logistics included."
        primary={{ href: '/contact', label: 'Discuss your industry' }}
        secondary={{ href: '/work', label: 'See our work' }}
      />
    </div>
  );
}
