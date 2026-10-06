import React from 'react';
import type { Metadata } from 'next';
import { PartnerForm } from '@/components/partner/PartnerForm';

export const metadata: Metadata = {
  title: 'Partner Program — 30% Commission',
  description:
    'Refer a client or partner with Arclyn Studio. Earn 30% commission on qualifying web, software, and AI projects.',
};

const PARTNERSHIP_STEPS = [
  { number: '01', title: 'Introduce', detail: 'Connect us with a client who needs digital product work.' },
  { number: '02', title: 'We deliver', detail: 'Our team scopes, builds, and supports the project.' },
  { number: '03', title: 'You earn', detail: 'Receive 30% as the client clears project milestones.' },
];

const SERVICE_CARDS = [
  { name: 'Website packages', amount: '12k+', detail: 'Landing pages, portfolios, and ecommerce stores.' },
  { name: 'SaaS & software', amount: '30k+', detail: 'Client portals, product builds, and internal tools.' },
  { name: 'AI automation', amount: '10k+', detail: 'Agents, bots, and workflow automation.' },
  { name: 'Retainers', amount: '30%', detail: 'Monthly revenue share on retainers.' },
];

export default function PartnerProgramPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#090909] pb-16 pt-24 text-[#f5f5f5] sm:pb-24 sm:pt-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(circle at center, black 45%, transparent 100%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <section className="border-b border-white/10 pb-10 sm:pb-12 lg:pb-14">
          <div className="mb-8 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.22em] text-[#ff1010] sm:mb-10">
            <span className="inline-block h-px w-8 bg-[#ff1010]" />
            <span>Partner Program</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-[2.8rem] font-black leading-[0.88] tracking-[-0.065em] text-white sm:text-[4.2rem] lg:text-[6.5rem]">
                <span className="block">EARN</span>
                <span className="block text-[#ff1010]">30%</span>
                <span className="block">ON EVERY</span>
                <span className="block">REFERRAL</span>
              </h1>
            </div>

            <div className="max-w-xl lg:justify-self-end">
              <p className="text-base leading-relaxed text-[#8a8a8a] sm:text-lg">
                You make the introduction. We handle the delivery, scope, and client handoff.
              </p>
              <a
                href="#apply"
                className="mt-6 inline-flex items-center gap-3 border-b border-white/25 pb-1 text-sm font-medium uppercase tracking-[0.12em] text-[#f5f5f5] transition-colors hover:border-[#ff1010] hover:text-[#ff1010]"
              >
                Apply to partner <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 py-8 sm:py-10 lg:py-12">
          <div className="rounded-[18px] border border-white/10 bg-[#0d0d0d] p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col gap-5 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex items-baseline gap-4">
                <span className="text-5xl font-black tracking-[-0.08em] text-white sm:text-6xl lg:text-7xl">30%</span>
                <div>
                  <div className="mb-1 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#ff1010]">
                    <span className="inline-block h-px w-6 bg-[#ff1010]" />
                    <span>Revenue share</span>
                  </div>
                  <p className="text-sm text-[#8a8a8a]">Paid on milestone sign-off</p>
                </div>
              </div>

              <span className="inline-flex items-center gap-2 self-start rounded-full border border-[#ff1010]/35 bg-[#ff1010]/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#ff9a9a] sm:self-auto">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff1010]" />
                Instant payouts
              </span>
            </div>

            <div className="pt-5">
              <h2 className="max-w-3xl text-xl font-semibold tracking-[-0.04em] text-white sm:text-2xl">
                Direct commission on every web and AI project
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#8a8a8a] sm:text-base">
                You introduce the client. We handle discovery, scoping, delivery, and handoff. No tiers, no minimum quota.
              </p>
            </div>

            <div className="mt-6">
              <div className="mb-3 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#ff1010]">
                <span className="inline-block h-px w-6 bg-[#ff1010]" />
                <span>Milestone payouts</span>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { label: 'TRANCHE 01', value: '30%', title: 'Proposal sign-off', detail: 'Released on kickoff.' },
                  { label: 'TRANCHE 02', value: '20%', title: 'Staging demo', detail: 'Released on review.' },
                  { label: 'TRANCHE 03', value: '50%', title: 'Production handoff', detail: 'Released on launch.' },
                ].map((item) => (
                  <div key={item.label} className="rounded-[14px] border border-white/10 bg-[#111111] p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ff1010]/50">
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <span className="text-[9px] font-medium uppercase tracking-[0.17em] text-[#ff1010]">{item.label}</span>
                      <span className="rounded-full border border-[#ff1010]/30 bg-[#ff1010]/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-[#ffb0b0]">{item.value}</span>
                    </div>
                    <h3 className="text-base font-medium text-white">{item.title}</h3>
                    <p className="mt-1 text-xs text-[#8a8a8a]">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {SERVICE_CARDS.map((item) => (
                <div
                  key={item.name}
                  className="flex items-start justify-between gap-4 rounded-[14px] border border-white/10 bg-[#111111] p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ff1010]/40 hover:bg-[#121212]"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-lg font-medium text-white">{item.name}</h3>
                      <span className="font-mono text-sm font-bold uppercase tracking-[0.08em] text-[#ff1010]">{item.amount}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-[#8a8a8a]">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-10 lg:py-12">
          <div className="mb-7 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.22em] text-[#ff1010]">
            <span className="inline-block h-px w-8 bg-[#ff1010]" />
            <span>How it works</span>
          </div>

          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-4xl text-[2.3rem] font-black leading-[0.9] tracking-[-0.07em] text-white sm:text-[3.2rem] lg:text-[5rem]">
              SIMPLE, TRANSPARENT <span className="text-[#ff1010]">PROCESS</span>
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-[#8a8a8a] md:text-right">
              From booking to completion — we keep you informed every step of the way.
            </p>
          </div>

          <div className="space-y-4">
            {PARTNERSHIP_STEPS.map((step) => (
              <div
                key={step.number}
                className="grid gap-4 border-t border-white/10 py-6 md:grid-cols-[200px_1fr_180px] md:items-center"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ff1010] text-sm font-bold text-white shadow-[0_0_24px_rgba(255,16,16,0.35)]">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#ff1010]">Step {step.number}</span>
                </div>

                <div>
                  <h3 className="text-[1.4rem] font-black uppercase tracking-[-0.06em] text-white sm:text-[1.8rem]">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#8a8a8a]">{step.detail}</p>
                </div>

                <div className="text-right text-[2.8rem] font-black leading-none tracking-[-0.08em] text-white/20 md:text-[4rem]">
                  {step.number}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="apply" className="grid gap-8 border-t border-white/10 pt-10 sm:pt-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-[#ff1010]">Get started</p>
            <h2 className="text-[2.2rem] font-black leading-[0.92] tracking-[-0.065em] text-white sm:text-[2.8rem]">
              Let&apos;s work together.
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#8a8a8a]">
              Share a few details and we&apos;ll follow up about the right partnership track.
            </p>
            <a
              href="mailto:saadrehman034@gmail.com"
              className="mt-5 inline-block text-sm text-[#f5f5f5] underline decoration-[#ff1010]/50 underline-offset-4 transition-colors hover:text-[#ff1010]"
            >
              saadrehman034@gmail.com
            </a>
          </div>

          <div className="rounded-[18px] border border-white/10 bg-[#0d0d0d] p-4 sm:p-6">
            <PartnerForm />
          </div>
        </section>
      </div>
    </main>
  );
}
