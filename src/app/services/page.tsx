import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES } from '@/data/services';
import { Globe, Smartphone, Bot, Zap, Code2, Cloud, ArrowRight, Check, Palette } from 'lucide-react';
import { PageHero, PageCta } from '@/components/shared/PageHero';
import { Reveal } from '@/components/motion/Reveal';

export const metadata: Metadata = {
  title: 'Our Services & Capabilities',
  description:
    'Full-stack web & e-commerce development, mobile apps, autonomous AI agents, workflow automation, custom SaaS engineering, and cloud DevOps.',
};

const ICON_MAP: Record<string, React.ElementType> = { Globe, Smartphone, Bot, Zap, Code2, Cloud, Layers: Palette };

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-[var(--bg)]">
      <PageHero
        eyebrow={`Services · ${SERVICES.length} practice areas`}
        title={'Engineering precision.\nAI-accelerated speed.'}
        accentWords={[2, 3]}
        description="From high-conversion storefronts to autonomous agent orchestration and cloud architecture — one senior team, end to end."
      />

      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-5 sm:space-y-6">
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.iconName] || Globe;
            return (
              <Reveal
                key={service.id}
                id={service.slug}
                variant="up"
                className="glass-panel scroll-mt-28 overflow-hidden rounded-[28px] sm:rounded-[36px]"
              >
                <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1.25fr_1fr] lg:gap-14 lg:p-14">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-xs text-zinc-500">{String(index + 1).padStart(2, '0')}</span>
                      <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.03] text-violet-300">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">{service.badge}</span>
                    </div>
                    <h2 className="mt-6 font-display text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-zinc-400 sm:text-base">{service.longDesc}</p>

                    <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                      {service.deliverables.slice(0, 4).map((d) => (
                        <li key={d.title} className="flex gap-3 text-sm">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-violet-300" />
                          <span>
                            <span className="font-medium text-white">{d.title}</span>
                            <span className="block text-zinc-500">{d.desc}</span>
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <Link href={`/services/${service.slug}`} className="btn-primary">
                        <span>Process, scope &amp; FAQ</span>
                        <span className="btn-arrow">
                          <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </Link>
                      <Link href={`/contact?service=${service.slug}`} className="btn-ghost">
                        Request a quote
                      </Link>
                    </div>
                  </div>

                  <div className="self-start rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-7">
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-violet-300/80">Stack</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.technologies.map((t) => (
                        <span key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-zinc-300">
                          {t}
                        </span>
                      ))}
                    </div>
                    <p className="mt-7 font-mono text-[11px] uppercase tracking-[0.16em] text-violet-300/80">Business advantages</p>
                    <ul className="mt-4 space-y-2.5">
                      {service.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-sm text-zinc-300">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-7 border-t border-white/[0.06] pt-5 text-sm text-zinc-500">
                      Includes a 30-day hyper-care warranty after launch.
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <PageCta
        title={'Unsure which architecture\nfits your roadmap?'}
        accentWords={[4, 5]}
        description="Tell us your objectives. We'll draft an architecture recommendation and milestone timeline within 12 hours."
        primary={{ href: '/contact', label: 'Book a consultation' }}
        secondary={{ href: '/pricing', label: 'View pricing' }}
      />
    </div>
  );
}
