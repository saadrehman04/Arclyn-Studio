import React from 'react';
import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact/ContactForm';
import { Mail, Calendar, Clock, ShieldCheck, MessageCircle, ExternalLink } from 'lucide-react';
import { InstagramIcon } from '@/components/shared/SocialIcons';
import { PageHero } from '@/components/shared/PageHero';
import { Reveal } from '@/components/motion/Reveal';

export const metadata: Metadata = {
  title: 'Contact Us — Start Your Project',
  description:
    'Get in touch with Arclyn Studio. Request a proposal, book a discovery call, or discuss full-stack web and AI automation engineering for your business.',
};

interface Props {
  searchParams: Promise<{ tier?: string; service?: string }>;
}

const CHANNELS = [
  { icon: Mail, label: 'Email', value: 'saadrehman034@gmail.com', href: 'mailto:saadrehman034@gmail.com', color: 'text-zinc-300' },
  { icon: MessageCircle, label: 'WhatsApp', value: '+92 319 6762317', href: 'https://wa.me/923196762317', color: 'text-emerald-300' },
  { icon: InstagramIcon, label: 'Instagram', value: '@arclyn_studio', href: 'https://instagram.com/arclyn_studio', color: 'text-zinc-300' },
];

const EXPECT = [
  'NDA signed upfront if proprietary IP is involved',
  'Transparent fixed milestone pricing (50% / 30% / 20%)',
  'No pressure, no aggressive sales follow-ups',
];

export default async function ContactPage({ searchParams }: Props) {
  const { tier, service } = await searchParams;

  return (
    <div className="relative min-h-screen bg-[var(--bg)]">
      <PageHero
        eyebrow="Contact"
        title={'Let’s build something\nexceptional together.'}
        accentWords={[3]}
        description="Fill out the brief below or book a 15-minute call. We reply within 12 hours with a preliminary architecture and milestone plan."
      />

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-start gap-6 lg:grid-cols-12 lg:gap-10">
          {/* Form first on mobile — it is the main action */}
          <Reveal variant="up" className="lg:order-2 lg:col-span-7">
            <ContactForm initialTier={tier} initialService={service} />
          </Reveal>

          <div className="space-y-4 lg:order-1 lg:col-span-5">
            <Reveal variant="up" className="glass-panel flex items-start gap-4 rounded-3xl p-6">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-emerald-400/10 text-emerald-300">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-base font-semibold text-white">Reply within 12 hours</h2>
                <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                  Every inquiry is reviewed directly by our engineers — not a sales team.
                </p>
              </div>
            </Reveal>

            <Reveal variant="up" delay={80} className="glass-panel divide-y divide-white/[0.06] rounded-3xl px-6">
              {CHANNELS.map((c) => {
                const Icon = c.icon;
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 py-5"
                  >
                    <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/[0.04] ${c.color}`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs text-zinc-500">{c.label}</span>
                      <span className="block truncate text-[15px] font-medium text-white">{c.value}</span>
                    </span>
                    <ExternalLink className="h-4 w-4 shrink-0 text-zinc-600 transition-colors group-hover:text-white" />
                  </a>
                );
              })}
            </Reveal>

            <Reveal variant="up" delay={160} className="relative overflow-hidden rounded-3xl border border-white/25 bg-white/[0.03] p-6">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300">
                  <Calendar className="h-4 w-4" />
                  Prefer a live call?
                </span>
                <span className="rounded-full border border-white/10 px-2.5 py-0.5 font-mono text-[11px] text-zinc-300">15 min</span>
              </div>
              <h2 className="mt-4 text-xl font-semibold tracking-tight text-white">Book a scoping call</h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Walk through your scope and stack, and get direct architectural feedback from Saad Rehman.
              </p>
              <a href="https://calendly.com/saadrehman" target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 w-full">
                <span>Pick a time on Calendly</span>
                <span className="btn-arrow">
                  <ExternalLink className="h-3.5 w-3.5" />
                </span>
              </a>
            </Reveal>

            <Reveal variant="up" delay={240} className="glass-panel rounded-3xl p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500">What happens next</p>
              <ul className="mt-4 space-y-3">
                {EXPECT.map((e) => (
                  <li key={e} className="flex items-start gap-3 text-sm text-zinc-300">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-zinc-300" />
                    {e}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
