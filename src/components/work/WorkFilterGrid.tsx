'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project, PROJECTS } from '@/data/projects';
import { 
  ArrowUpRight, 
  ExternalLink, 
  CheckCircle2, 
  X, 
} from 'lucide-react';
import { SpotlightTab } from '@/components/ui/spotlight-tab';

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

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Category Tabs with Interactive Shine on Hover */}
      <div className="mb-8 flex flex-wrap items-center justify-center gap-1.5 sm:mb-12 sm:gap-3">
        {CATEGORIES.map((cat) => {
          const isSelected = activeCategory === cat;
          const count = cat === 'All'
            ? PROJECTS.length
            : PROJECTS.filter((p) => p.category === cat).length;

          return (
            <SpotlightTab
              key={cat}
              active={isSelected}
              onClick={() => setActiveCategory(cat)}
              glowColor="brand"
              className={`flex items-center gap-1.5 px-2.5 py-2 text-[10px] font-semibold transition-all duration-200 sm:gap-2 sm:px-5 sm:py-2.5 sm:text-sm ${
                isSelected ? 'scale-105' : ''
              }`}
              badge={
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-white/5 text-slate-400'}`}>
                  {count}
                </span>
              }
            >
              <span>{cat}</span>
            </SpotlightTab>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative flex flex-col justify-between overflow-hidden rounded-xl glass-panel cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-purple-950/40 sm:rounded-3xl"
            onClick={() => setSelectedProject(project)}
          >
            {/* Card Image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900 border-b border-white/10">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-transparent to-black/20 opacity-60 group-hover:opacity-30 transition-opacity" />

              {/* Category Pill */}
              <div className="absolute left-2 top-2 z-10 sm:left-4 sm:top-4">
                <span className="max-w-28 truncate rounded-full border border-white/15 bg-[#060913]/90 px-2 py-1 text-[9px] font-semibold text-purple-300 sm:px-3 sm:text-xs sm:backdrop-blur-md">
                  {project.category}
                </span>
              </div>

              {/* Live Link Button if available */}
              {project.liveUrl && (
                <div className="absolute right-2 top-2 z-10 sm:right-4 sm:top-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-[#060913]/85 text-white shadow-lg transition-all hover:scale-110 hover:bg-purple-600 sm:h-11 sm:w-11 sm:backdrop-blur-md"
                    title="Visit Live Deployment"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>

            {/* Card Content */}
            <div className="flex flex-1 flex-col justify-between p-2.5 sm:p-6">
              <div>
                <h3 className="mb-1 line-clamp-2 text-sm font-bold leading-tight text-white transition-colors group-hover:text-cyan-300 sm:mb-2 sm:text-xl">
                  {project.name}
                </h3>

                {/* Key Result Stat */}
                <div className="mb-2 flex items-start gap-1 text-[9px] font-semibold leading-tight text-emerald-400 sm:mb-3 sm:items-center sm:gap-1.5 sm:text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{project.stat}</span>
                </div>

                <p className="mb-3 line-clamp-3 text-[10px] leading-snug text-slate-300 sm:mb-6 sm:text-sm sm:leading-relaxed">
                  {project.shortDesc}
                </p>
              </div>

              <div>
                {/* Tech tags */}
                <div className="mb-3 flex flex-wrap gap-1 sm:mb-5 sm:gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-sm border border-white/10 bg-white/5 px-1.5 py-0.5 text-[8px] font-mono font-medium text-slate-300 sm:rounded-md sm:px-2 sm:text-[10px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Footer action */}
                <div className="flex items-center justify-between border-t border-white/5 pt-2 text-[9px] font-semibold text-purple-400 transition-colors group-hover:text-cyan-300 sm:pt-4 sm:text-xs">
                  <span className="sm:hidden">View case study</span>
                  <span className="hidden sm:inline">View Full Case Study</span>
                  <div className="w-6 h-6 rounded-full bg-white/5 group-hover:bg-cyan-500/20 flex items-center justify-center transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Case Study Modal Drawer */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-3xl rounded-3xl bg-[#0A0F26] border border-white/15 p-6 sm:p-8 shadow-2xl my-8 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors z-20"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6 pr-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-300 mb-3">
                <span>{selectedProject.category}</span>
                <span>•</span>
                <span>{selectedProject.year}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {selectedProject.name}
              </h2>
              <div className="text-sm font-semibold text-emerald-400 mt-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{selectedProject.stat}</span>
              </div>
            </div>

            {/* Modal Image */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-6 border border-white/10 bg-slate-900">
              <Image
                src={selectedProject.image}
                alt={selectedProject.name}
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Problem, Solution, Outcome breakdown */}
            <div className="space-y-6 text-sm text-slate-300">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-1">
                  The Problem &amp; Challenge
                </div>
                <p className="leading-relaxed text-slate-200">
                  {selectedProject.problem}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1">
                  The Arclyn Engineering Solution
                </div>
                <p className="leading-relaxed text-slate-200">
                  {selectedProject.solution}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-500/20">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
                  Measurable Business Outcome
                </div>
                <p className="leading-relaxed text-slate-200">
                  {selectedProject.outcome}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Technologies Deployed
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-white/5 border border-white/10 text-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal CTAs */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                {selectedProject.liveUrl ? (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white btn-primary-gradient"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <span className="text-xs text-slate-400">
                    * Internal enterprise deployment protected by client NDA
                  </span>
                )}

                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                >
                  <span>Build Something Similar</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};
