'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { gsap, prefersReducedMotion } from '@/lib/gsap';
import { PROJECTS, type Project } from '@/data/projects';
import { Reveal, SplitText } from '@/components/motion/Reveal';
import { MagneticButton } from '@/components/shared/MagneticButton';

const STACK_IDS = ['cheesecake-factory', 'prestige-estates', 'fitusion', 'mark-murphy-dds', 'querymind-ai-analyst'];

const items = STACK_IDS.map((id) => ({ project: PROJECTS.find((p) => p.id === id) as Project })).filter((x) => x.project);

function splitName(name: string) {
  const [title, subtitle] = name.split(' — ');
  return { title, subtitle };
}

export const WorkStack: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Desktop: each card scales back and dims as the next one slides over it.
  // On phones the cards are taller than the screen, so they simply stack.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || prefersReducedMotion()) return;

    const mm = gsap.matchMedia(section);
    mm.add('(min-width: 1024px)', () => {
      const cards = gsap.utils.toArray<HTMLElement>('[data-stack-card]');
      cards.forEach((card, i) => {
        const next = cards[i + 1];
        if (!next) return;
        const inner = card.querySelector('[data-stack-inner]');
        const shade = card.querySelector('[data-stack-shade]');
        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: next,
            start: 'top bottom',
            end: 'top top+=120',
            scrub: true,
          },
        });
        tl.to(inner, { scale: 0.92, yPercent: -2 }, 0).to(shade, { opacity: 0.65 }, 0);
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} id="work" className="relative bg-[var(--bg)] px-4 pb-24 sm:px-6 lg:px-8 lg:pb-36">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-8 px-1 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal as="p" variant="fade" className="eyebrow mb-6">
              Selected work · 2024 — 2025
            </Reveal>
            <SplitText
              text={'Products that\nmove the needle.'}
              accentWords={[3, 4]}
              accentClassName="text-[var(--accent)]"
              className="font-display text-[clamp(2.5rem,6.4vw,5.75rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-white"
            />
          </div>
          <Reveal variant="up" delay={200} className="max-w-sm">
            <p className="text-base leading-relaxed text-zinc-400">
              A few launches we&apos;re proud of — from national restaurant brands to AI data tools. Every one
              is live, fast and built to convert.
            </p>
            <Link href="/work" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white">
              <span className="link-underline">View all {PROJECTS.length} projects</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        {/* Stack */}
        <div className="relative">
          {items.map(({ project }, i) => {
            const { title, subtitle } = splitName(project.name);
            return (
              <article
                key={project.id}
                data-stack-card
                className="mb-6 lg:sticky lg:top-[var(--stack-top)] lg:mb-10"
                style={{ ['--stack-top' as string]: `calc(88px + ${i * 14}px)` }}
              >
                <div
                  data-stack-inner
                  className="relative origin-top overflow-hidden rounded-[28px] border border-white/[0.09] bg-[#111113] will-change-transform sm:rounded-[36px]"
                >
                  <div className="relative grid gap-8 p-5 sm:p-8 lg:min-h-[min(74vh,700px)] lg:grid-cols-[0.85fr_1.35fr] lg:gap-12 lg:p-12">
                    {/* Copy */}
                    <div className="flex flex-col justify-between gap-8">
                      <div>
                        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-500">
                          <span>
                            {String(i + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
                          </span>
                          <span>{project.year}</span>
                        </div>
                        <span className="mt-8 inline-flex rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-zinc-300">
                          {project.category}
                        </span>
                        <h3 className="mt-5 font-display text-4xl font-semibold leading-[1] tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.6rem]">
                          {title}
                        </h3>
                        {subtitle && <p className="mt-3 text-lg text-zinc-400">{subtitle}</p>}
                        <p className="mt-6 max-w-md text-[15px] leading-relaxed text-zinc-400">{project.shortDesc}</p>
                      </div>

                      <div>
                        <div className="border-t border-white/[0.08] pt-5">
                          <p className="text-sm font-medium text-white">{project.stat}</p>
                          <div className="mt-4 flex flex-wrap gap-1.5">
                            {project.tech.slice(0, 4).map((t) => (
                              <span
                                key={t}
                                className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-zinc-400"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="mt-6 flex flex-wrap items-center gap-3">
                          {project.liveUrl && (
                            <MagneticButton strength={0.2}>
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-black transition-transform duration-300 hover:scale-[1.03]"
                              >
                                Visit live site
                                <ArrowUpRight className="h-4 w-4" />
                              </a>
                            </MagneticButton>
                          )}
                          <Link
                            href={`/work#${project.id}`}
                            className="inline-flex h-11 items-center gap-2 rounded-full border border-white/15 px-5 text-sm font-medium text-white transition-colors hover:bg-white/[0.06]"
                          >
                            Case study
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Visual */}
                    <a
                      href={project.liveUrl ?? '/work'}
                      target={project.liveUrl ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a1d] sm:rounded-3xl"
                      aria-label={`Open ${title}`}
                    >
                      <div className="flex items-center gap-1.5 border-b border-white/[0.08] bg-[#161618] px-4 py-3">
                        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                        <span className="ml-3 truncate font-mono text-[11px] text-zinc-500">
                          {project.liveUrl?.replace(/^https?:\/\/(www\.)?/, '').replace(/\/.*$/, '') ?? 'arclynstudio.com'}
                        </span>
                      </div>
                      <div className="relative aspect-[16/10] w-full overflow-hidden lg:aspect-auto lg:h-[calc(100%-41px)]">
                        <Image
                          src={project.image}
                          alt={`${title} website`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 60vw"
                          className="object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                        />
                      </div>
                    </a>
                  </div>

                  {/* dimmer used while the next card covers this one */}
                  <div data-stack-shade aria-hidden="true" className="pointer-events-none absolute inset-0 bg-black opacity-0" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkStack;
