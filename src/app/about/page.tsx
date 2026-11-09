import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Code2, Users, ShieldCheck, Zap, ExternalLink, ArrowRight } from 'lucide-react';
import { PageHero, PageCta } from '@/components/shared/PageHero';
import { Reveal, SplitText } from '@/components/motion/Reveal';
import { TeamSection } from '@/components/home/TeamSection';

export const metadata: Metadata = {
  title: 'About Us — Engineering Philosophy & Story',
  description:
    'Learn about Arclyn Studio: a digital agency combining senior full-stack engineering with autonomous AI automation to build products that actually grow businesses.',
};

const VALUES = [
  {
    icon: Code2,
    title: 'Craft over templates',
    desc: 'We never wrap generic WordPress themes or bloated page builders. Every line is purpose-built in modern TypeScript and Next.js for sub-second performance.',
  },
  {
    icon: Zap,
    title: 'AI acceleration, not AI toys',
    desc: 'We use AI where it moves the needle — rapid prototyping, refactoring and autonomous workflows — while senior humans stay in charge of architecture.',
  },
  {
    icon: ShieldCheck,
    title: 'Zero vendor lock-in',
    desc: 'You own 100% of your source code, design assets and deployment pipelines from day one. Full IP handover with clean documentation.',
  },
  {
    icon: Users,
    title: 'Direct engineering access',
    desc: 'No non-technical account managers playing telephone. You talk directly to the engineers building your product.',
  },
];

const STATS = [
  { value: '150k+', label: 'Developer community audience' },
  { value: '50+', label: 'Web apps, AI agents & stores shipped' },
  { value: '95+', label: 'Average Core Web Vitals score' },
  { value: '2–4 wks', label: 'Typical kickoff-to-launch timeline' },
];

const TECH_ARSENAL = [
  { category: 'Frontend', items: ['Next.js App Router', 'TypeScript', 'React 19', 'Tailwind CSS', 'GSAP / Motion'] },
  { category: 'Backend & APIs', items: ['Node.js', 'Python', 'FastAPI', 'REST', 'WebSockets', 'GraphQL'] },
  { category: 'Data & Cloud', items: ['Supabase', 'PostgreSQL', 'Redis', 'Vercel Edge', 'AWS', 'Google Cloud'] },
  { category: 'AI & Automation', items: ['LangChain', 'LangGraph', 'OpenAI', 'Pinecone', 'n8n', 'Make.com', 'Whisper'] },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[var(--bg)]">
      <PageHero
        eyebrow="About Arclyn"
        title={'We build real products.\nNot generic templates.'}
        accentWords={[4, 5, 6]}
        description="Arclyn Studio was founded to fix what founders hate about agencies: slow delivery, bloated templates and a lack of real engineering depth."
      />

      {/* Story + stats */}
      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <Reveal as="p" variant="fade" className="eyebrow mb-6">
              Our story
            </Reveal>
            <SplitText
              text={'Backed by 50+ real deployments\nand a 150k+ developer audience.'}
              accentWords={[2, 3]}
              accentClassName="text-[var(--accent)]"
              className="section-title"
            />
            <Reveal variant="up" delay={120} className="mt-8 space-y-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
              <p>
                Founded by <strong className="font-semibold text-white">Saad Rehman</strong> — an AI &amp; ML engineer and
                full-stack developer with 3+ years building high-scale automation systems and digital products — Arclyn
                Studio combines developer craftsmanship with automated velocity.
              </p>
              <p>
                Having taught a community of over 150,000 developers across LinkedIn and technical channels, we bring the same
                transparency and engineering rigor to every client engagement.
              </p>
            </Reveal>
            <Reveal variant="up" delay={200} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="https://saadr.tech" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                Founder portfolio
                <ExternalLink className="h-4 w-4" />
              </a>
              <Link href="/work" className="btn-ghost">
                Client case studies
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-px self-start overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08]">
            {STATS.map((s, i) => (
              <Reveal key={s.label} variant="up" delay={i * 90} className="flex min-h-[150px] flex-col justify-end bg-[var(--bg)] p-5 sm:min-h-[190px] sm:p-7">
                <div className="font-display text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">{s.value}</div>
                <p className="mt-2 text-sm leading-snug text-zinc-500">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal as="p" variant="fade" className="eyebrow mb-6">
            Principles
          </Reveal>
          <SplitText
            text={'How we work\ndifferently.'}
            accentWords={[3]}
            accentClassName="text-[var(--accent)]"
            className="section-title"
          />
          <div className="mt-12 grid gap-4 sm:gap-5 md:grid-cols-2">
            {VALUES.map((val, i) => {
              const Icon = val.icon;
              return (
                <Reveal key={val.title} variant="up" delay={(i % 2) * 90} className="glass-panel rounded-3xl p-6 sm:p-9">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.03] text-zinc-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white">{val.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-zinc-400">{val.desc}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal as="p" variant="fade" className="eyebrow mb-6">
            Our stack
          </Reveal>
          <SplitText
            text={'Production tools,\nzero bloat.'}
            accentWords={[2, 3]}
            accentClassName="text-[var(--accent)]"
            className="section-title"
          />
          <div className="mt-12 grid grid-cols-1 border-t border-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
            {TECH_ARSENAL.map((group, i) => (
              <Reveal
                key={group.category}
                variant="up"
                delay={i * 80}
                className="border-b border-white/[0.08] py-7 sm:px-6 sm:[&:nth-child(odd)]:border-r lg:border-r lg:last:border-r-0"
              >
                <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-300">{group.category}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-sm text-zinc-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TeamSection />

      <PageCta
        title={'Want to collaborate\non your next build?'}
        accentWords={[5, 6]}
        description="We're accepting new client projects for the upcoming sprint cycle."
        primary={{ href: '/contact', label: 'Start your project' }}
        secondary={{ href: '/work', label: 'Explore our work' }}
      />
    </div>
  );
}
