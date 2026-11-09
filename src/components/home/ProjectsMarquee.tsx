'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PROJECTS, type Project } from '@/data/projects';
import { Reveal, SplitText } from '@/components/motion/Reveal';
import { useOffscreenPause } from '@/components/motion/useOffscreenPause';
import { MagneticButton } from '@/components/shared/MagneticButton';

const rowA = PROJECTS.filter((_, i) => i % 2 === 0);
const rowB = PROJECTS.filter((_, i) => i % 2 === 1);

const Card: React.FC<{ project: Project; hidden?: boolean }> = ({ project, hidden }) => {
  const [title] = project.name.split(' — ');
  return (
    <Link
      href={`/work#${project.id}`}
      tabIndex={hidden ? -1 : undefined}
      className="group relative mx-2.5 block w-[260px] shrink-0 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#131315] sm:mx-3 sm:w-[360px] sm:rounded-3xl"
    >
      <div className="relative aspect-[16/11] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={hidden ? '' : `${title} website`}
          fill
          sizes="(max-width: 640px) 260px, 360px"
          className="object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#131315] via-transparent to-transparent" />
        <span className="absolute right-3 top-3 grid h-9 w-9 scale-75 place-items-center rounded-full bg-white text-black opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
      <div className="flex items-end justify-between gap-3 px-4 pb-4 sm:px-5 sm:pb-5">
        <div className="min-w-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">{project.category}</p>
          <h3 className="mt-1 truncate text-base font-semibold tracking-tight text-white sm:text-lg">{title}</h3>
        </div>
        <span className="shrink-0 font-mono text-[11px] text-zinc-600">{project.year}</span>
      </div>
    </Link>
  );
};

const Row: React.FC<{ projects: Project[]; reverse?: boolean; duration: string }> = ({ projects, reverse, duration }) => (
  <div className="marquee-pause">
    <div className={`marquee ${reverse ? 'marquee-reverse' : ''}`} style={{ ['--marquee-duration' as string]: duration }}>
      {[0, 1].map((dup) => (
        <div key={dup} aria-hidden={dup === 1} className="flex shrink-0">
          {projects.map((p) => (
            <Card key={`${dup}-${p.id}`} project={p} hidden={dup === 1} />
          ))}
        </div>
      ))}
    </div>
  </div>
);

export const ProjectsMarquee: React.FC = () => {
  const ref = useOffscreenPause<HTMLElement>();
  return (
    <section ref={ref} id="portfolio" className="relative overflow-hidden bg-[var(--bg)] py-24 sm:py-32">
      <div className="mx-auto mb-14 flex max-w-7xl flex-col gap-6 px-5 sm:px-8 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Reveal as="p" variant="fade" className="eyebrow mb-6">
            The full portfolio
          </Reveal>
          <SplitText
            text={`${PROJECTS.length} launches.\nNine industries.`}
            accentWords={[2, 3]}
            accentClassName="text-[var(--accent)]"
            className="font-display text-[clamp(2.5rem,6vw,5.25rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-white"
          />
        </div>
        <Reveal variant="up" delay={150}>
          <MagneticButton>
            <Link href="/work" className="btn-ghost">
              Explore all work
              <ArrowRight className="h-4 w-4" />
            </Link>
          </MagneticButton>
        </Reveal>
      </div>

      <div className="mask-fade-x flex flex-col gap-5 sm:gap-6">
        <Row projects={rowA} duration="70s" />
        <Row projects={rowB} duration="80s" reverse />
      </div>
    </section>
  );
};

export default ProjectsMarquee;
