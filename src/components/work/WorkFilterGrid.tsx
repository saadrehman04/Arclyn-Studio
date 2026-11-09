'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project, PROJECTS } from '@/data/projects';
import { ArrowUpRight, ExternalLink, X } from 'lucide-react';
import { SpotlightTab } from '@/components/ui/spotlight-tab';
import { Reveal } from '@/components/motion/Reveal';

const CATEGORIES = [
  'All',
  'Restaurants',
  'Ecommerce',
  'Real Estate',
  'Gyms',
  'Plumbers & Electricians',
  'Medical & Dental',
  'Farmhouses',
  'Education',
  'AI Agents & SaaS',
] as const;

export const WorkFilterGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === activeCategory);

  // Deep links: /work#project-id opens that case study.
  useEffect(() => {
    const openFromHash = () => {
      const id = window.location.hash.slice(1);
      const match = PROJECTS.find((p) => p.id === id);
      if (match) setSelectedProject(match);
    };
    openFromHash();
    window.addEventListener('hashchange', openFromHash);
    return () => window.removeEventListener('hashchange', openFromHash);
  }, []);

  // Lock page scroll (Lenis + native) while the modal is open; Esc closes it.
  useEffect(() => {
    if (!selectedProject) return;
    const lenis = window.__lenis;
    lenis?.stop();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setSelectedProject(null);
    window.addEventListener('keydown', onKey);
    return () => {
      lenis?.start();
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [selectedProject]);

  const closeModal = () => {
    setSelectedProject(null);
    if (window.location.hash) history.replaceState(null, '', window.location.pathname);
  };

  return (
    <div>
      {/* Category filter — swipeable row on phones, wrapped & centered on larger screens */}
      <div className="-mx-5 mb-10 overflow-x-auto px-5 no-scrollbar sm:mx-0 sm:mb-14 sm:overflow-visible sm:px-0">
        <div className="flex w-max gap-2 sm:w-auto sm:flex-wrap sm:justify-center">
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat;
            const count = cat === 'All' ? PROJECTS.length : PROJECTS.filter((p) => p.category === cat).length;
            return (
              <SpotlightTab
                key={cat}
                active={isSelected}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 text-sm"
                badge={
                  <span className={`rounded-full px-1.5 py-0.5 text-[10px] ${isSelected ? 'bg-black/10 text-black' : 'bg-white/5 text-zinc-500'}`}>
                    {count}
                  </span>
                }
              >
                <span>{cat}</span>
              </SpotlightTab>
            );
          })}
        </div>
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
        {filteredProjects.map((project, i) => {
          const [title, subtitle] = project.name.split(' — ');
          return (
            <Reveal
              key={project.id}
              variant="up"
              delay={(i % 3) * 80}
              id={project.id}
              className="group relative flex scroll-mt-28 cursor-pointer flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0c0c12] transition-colors duration-300 hover:border-white/20"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#15151d]">
                <Image
                  src={project.image}
                  alt={title}
                  fill
                  className="object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="absolute left-3 top-3 rounded-full bg-black/65 px-2.5 py-1 text-[11px] font-medium text-zinc-200">
                  {project.category}
                </span>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-white text-black transition-transform duration-500 hover:rotate-45"
                    aria-label={`Visit ${title} live site`}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex items-baseline justify-between gap-3 font-mono text-[11px] text-zinc-500">
                  <span>{project.year}</span>
                </div>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-white">{title}</h3>
                {subtitle && <p className="mt-0.5 text-sm text-zinc-400">{subtitle}</p>}
                <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-zinc-500">{project.shortDesc}</p>
                <p className="mt-4 text-[13px] font-medium text-emerald-300/90">{project.stat}</p>
                <div className="mt-auto flex items-center justify-between border-t border-white/[0.06] pt-4 text-sm text-zinc-300">
                  <span className="mt-0">View case study</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Case study modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedProject.name}
          data-lenis-prevent
          className="fixed inset-0 z-[120] flex items-end justify-center overflow-y-auto overscroll-contain bg-black/85 sm:items-center sm:p-6"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-3xl rounded-t-[28px] border border-white/10 bg-[#0c0c12] p-5 shadow-2xl sm:my-8 sm:rounded-[28px] sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition-colors hover:bg-white/10 hover:text-white sm:right-6 sm:top-6"
              aria-label="Close case study"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-6 pr-12">
              <p className="eyebrow">
                {selectedProject.category} · {selectedProject.year}
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                {selectedProject.name}
              </h2>
              <p className="mt-2 text-sm font-medium text-emerald-300/90">{selectedProject.stat}</p>
            </div>

            <div className="relative mb-6 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#15151d]">
              <Image src={selectedProject.image} alt={selectedProject.name} fill sizes="(max-width: 768px) 100vw, 768px" className="object-cover object-top" />
            </div>

            <div className="grid gap-3 text-sm sm:grid-cols-3">
              {[
                { label: 'The challenge', text: selectedProject.problem, color: 'text-rose-300' },
                { label: 'Our solution', text: selectedProject.solution, color: 'text-sky-300' },
                { label: 'The outcome', text: selectedProject.outcome, color: 'text-emerald-300' },
              ].map((block) => (
                <div key={block.label} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <p className={`font-mono text-[11px] uppercase tracking-[0.14em] ${block.color}`}>{block.label}</p>
                  <p className="mt-2 leading-relaxed text-zinc-300">{block.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {selectedProject.tech.map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-zinc-300">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              {selectedProject.liveUrl ? (
                <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <span>Visit live website</span>
                  <span className="btn-arrow">
                    <ExternalLink className="h-3.5 w-3.5" />
                  </span>
                </a>
              ) : (
                <span className="text-xs text-zinc-500">Internal deployment protected by client NDA</span>
              )}
              <Link href="/contact" className="btn-ghost">
                Build something similar
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
