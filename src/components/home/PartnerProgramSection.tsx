'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { MagneticButton } from '../shared/MagneticButton';
import { Reveal, SplitText } from '@/components/motion/Reveal';

const STEPS = [
  { n: '01', t: 'Introduce', d: 'Tell a business owner — family, friends or anyone in your city — about Arclyn.' },
  { n: '02', t: 'We deliver', d: 'We handle the proposal, the build and the launch. You stay in the loop.' },
  { n: '03', t: 'You earn', d: 'Receive 30% of the project revenue once the client pays.' },
];

export const PartnerProgramSection: React.FC = () => {
  return (
    <section id="partner-program" className="relative isolate overflow-hidden bg-[var(--bg)] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-white/[0.09] bg-[#111113] px-6 py-14 sm:rounded-[44px] sm:px-12 sm:py-20 lg:px-16">
        {/* Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-48 h-[640px] w-[640px] rounded-full opacity-60"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.087), rgba(255,255,255,0.02) 45%, transparent 68%)' }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse 60% 70% at 80% 20%, #000, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse 60% 70% at 80% 20%, #000, transparent 75%)',
          }}
        />

        <div className="relative grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div>
            <Reveal as="p" variant="fade" className="eyebrow mb-6">
              Partner program
            </Reveal>
            <SplitText
              text={'Bring us a client.\nKeep 30% of the project.'}
              accentWords={[4, 5]}
              accentClassName="text-[var(--accent)]"
              className="font-display text-[clamp(2.25rem,5.4vw,4.75rem)] font-semibold leading-[1] tracking-[-0.045em] text-white"
            />
            <Reveal as="p" variant="up" delay={150} className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              Introduce Arclyn Studio to businesses in your family, among your friends, or across your city. No sales
              experience needed — we do the heavy lifting.
            </Reveal>
            <Reveal variant="up" delay={250} className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
              <MagneticButton>
                <Link href="/partner-program" className="btn-primary">
                  <span>Become a partner</span>
                  <span className="btn-arrow">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </MagneticButton>
              <a
                href="https://wa.me/923196762317?text=Hi%20Saad,%20I%20want%20to%20learn%20more%20about%20the%20Arclyn%20Studio%2030%%20partner%20program."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition-colors hover:text-white"
              >
                <MessageCircle className="h-4 w-4 text-emerald-400" />
                <span className="link-underline">Ask us on WhatsApp</span>
              </a>
            </Reveal>
          </div>

          <div>
            <Reveal variant="scale" className="flex items-end gap-4">
              <span className="font-display text-[clamp(6rem,14vw,11rem)] font-semibold leading-[0.8] tracking-[-0.07em] text-white">
                30%
              </span>
              <span className="mb-3 max-w-[7rem] font-mono text-[11px] uppercase leading-relaxed tracking-[0.14em] text-zinc-500">
                of project revenue
              </span>
            </Reveal>
            <ol className="mt-10 divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {STEPS.map((s, i) => (
                <Reveal as="li" key={s.n} variant="up" delay={i * 90} className="flex gap-5 py-4">
                  <span className="font-mono text-xs text-zinc-300">{s.n}</span>
                  <div>
                    <p className="text-sm font-semibold text-white">{s.t}</p>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-500">{s.d}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerProgramSection;
