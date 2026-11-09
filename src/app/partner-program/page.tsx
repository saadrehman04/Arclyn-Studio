import React from 'react';
import type { Metadata } from 'next';
import { PartnerForm } from '@/components/partner/PartnerForm';
import { PageHero } from '@/components/shared/PageHero';
import { Reveal, SplitText } from '@/components/motion/Reveal';

export const metadata: Metadata = {
  title: 'Partner Program — 30% Commission',
  description:
    'Refer a client or partner with Arclyn Studio. Earn 30% commission on qualifying web, software, and AI projects.',
};

const PARTNERSHIP_STEPS = [
  { number: '01', title: 'Introduce', detail: 'Connect us with a client who needs digital product work.' },
  { number: '02', title: 'We deliver', detail: 'Our team scopes, builds and supports the project.' },
  { number: '03', title: 'You earn', detail: 'Receive 30% as the client clears project milestones.' },
];

const TRANCHES = [
  { label: 'Tranche 01', value: '30%', title: 'Proposal sign-off', detail: 'Released on kickoff.' },
  { label: 'Tranche 02', value: '20%', title: 'Staging demo', detail: 'Released on review.' },
  { label: 'Tranche 03', value: '50%', title: 'Production handoff', detail: 'Released on launch.' },
];

const SERVICE_CARDS = [
  { name: 'Website packages', amount: '12k+', detail: 'Landing pages, portfolios and e-commerce stores.' },
  { name: 'SaaS & software', amount: '30k+', detail: 'Client portals, product builds and internal tools.' },
  { name: 'AI automation', amount: '10k+', detail: 'Agents, bots and workflow automation.' },
  { name: 'Retainers', amount: '30%', detail: 'Monthly revenue share on retainers.' },
];

export default function PartnerProgramPage() {
  return (
    <div className="relative min-h-screen bg-[var(--bg)]">
      <PageHero
        eyebrow="Partner program"
        title={'Earn 30% on\nevery referral.'}
        accentWords={[1]}
        description="You make the introduction. We handle discovery, scoping, delivery and handoff. No tiers, no minimum quota."
      >
        <a href="#apply" className="btn-primary">
          <span>Apply to partner</span>
          <span className="btn-arrow" aria-hidden="true">
            ↓
          </span>
        </a>
      </PageHero>

      {/* Payout structure */}
      <section className="px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        <Reveal variant="up" className="glass-panel mx-auto max-w-6xl rounded-[28px] p-6 sm:rounded-[36px] sm:p-10 lg:p-14">
          <div className="flex flex-col gap-6 border-b border-white/[0.08] pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex items-end gap-4">
              <span className="font-display text-7xl font-semibold leading-[0.8] tracking-[-0.07em] text-white sm:text-8xl">
                30%
              </span>
              <span className="pb-1 font-mono text-[11px] uppercase leading-relaxed tracking-[0.14em] text-zinc-500">
                Revenue share
                <br />
                paid on milestones
              </span>
            </div>
            <span className="inline-flex items-center gap-2 self-start rounded-full border border-emerald-400/25 bg-emerald-400/[0.08] px-3 py-1.5 text-xs font-medium text-emerald-300 sm:self-auto">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Instant payouts
            </span>
          </div>

          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-300">Milestone payouts</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {TRANCHES.map((t) => (
              <div key={t.label} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-500">
                  <span>{t.label}</span>
                  <span className="rounded-full bg-white/[0.06] px-2 py-0.5 text-zinc-300">{t.value}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{t.title}</h3>
                <p className="mt-1 text-sm text-zinc-500">{t.detail}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-300">Typical project values</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {SERVICE_CARDS.map((c) => (
              <div key={c.name} className="flex items-start justify-between gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                <div>
                  <h3 className="text-lg font-semibold text-white">{c.name}</h3>
                  <p className="mt-1 text-sm text-zinc-500">{c.detail}</p>
                </div>
                <span className="font-mono text-sm font-semibold text-zinc-300">{c.amount}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* How it works */}
      <section className="px-5 py-12 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal as="p" variant="fade" className="eyebrow mb-6">
            How it works
          </Reveal>
          <SplitText
            text={'Simple, transparent\nprocess.'}
            accentWords={[2]}
            accentClassName="text-[var(--accent)]"
            className="section-title"
          />
          <ol className="mt-12 border-t border-white/[0.08]">
            {PARTNERSHIP_STEPS.map((step, i) => (
              <Reveal
                as="li"
                key={step.number}
                variant="up"
                delay={i * 80}
                className="grid grid-cols-[auto_1fr] items-start gap-5 border-b border-white/[0.08] py-7 sm:grid-cols-[120px_1fr_auto] sm:items-center sm:gap-8 sm:py-9"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full border border-white/15 font-mono text-sm text-white">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">{step.title}</h3>
                  <p className="mt-1 text-[15px] text-zinc-400">{step.detail}</p>
                </div>
                <span className="hidden font-display text-6xl font-semibold tracking-[-0.06em] text-white/10 sm:block">
                  {step.number}
                </span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Apply */}
      <section id="apply" className="scroll-mt-24 px-4 pb-24 pt-12 sm:px-6 sm:pt-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <Reveal as="p" variant="fade" className="eyebrow mb-6">
              Get started
            </Reveal>
            <SplitText
              text={'Let’s work\ntogether.'}
              accentWords={[2]}
              accentClassName="text-[var(--accent)]"
              className="section-title"
            />
            <Reveal as="p" variant="up" delay={120} className="mt-5 max-w-sm text-[15px] leading-relaxed text-zinc-400">
              Share a few details and we&apos;ll follow up about the right partnership track.
            </Reveal>
            <Reveal variant="fade" delay={200} className="mt-5">
              <a href="mailto:saadrehman034@gmail.com" className="link-underline text-sm text-white">
                saadrehman034@gmail.com
              </a>
            </Reveal>
          </div>
          <Reveal variant="up" className="glass-panel rounded-3xl p-5 sm:p-8">
            <PartnerForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
