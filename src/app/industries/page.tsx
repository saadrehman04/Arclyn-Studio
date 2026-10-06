import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { INDUSTRIES } from '@/data/industries';
import { 
  Building2, 
  Utensils, 
  ShoppingBag, 
  Dumbbell, 
  Wrench, 
  Stethoscope, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  ExternalLink,
  Layers,
  ShieldAlert
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Industries We Serve — Concept Architecture Showcases',
  description:
    'Explore original concept architectures crafted by Arclyn Studio for Restaurants, E-Commerce, Real Estate, Fitness, Home Services, and Medical Clinics.',
};

const ICON_MAP: Record<string, React.ElementType> = {
  'restaurants-hospitality': Utensils,
  'ecommerce-retail': ShoppingBag,
  'real-estate-architecture': Building2,
  'fitness-athletics': Dumbbell,
  'home-services-trades': Wrench,
  'medical-clinics': Stethoscope,
};

export default function IndustriesPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#090909] pb-16 pt-24 text-[#f5f5f5] sm:pb-24 sm:pt-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'linear-gradient(to bottom, black, transparent 92%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-16">
          <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-[#ff1010]/30 bg-[#ff1010]/10 px-3.5 py-1.5">
            <Layers className="h-3.5 w-3.5 text-[#ff1010]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#ff1010]">
              Vertical Blueprints
            </span>
          </div>

          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-[#f5f5f5] sm:text-5xl lg:text-6xl">
            Industries We Serve <br />
            <span className="text-[#ff1010]">&amp; Concept Architectures</span>
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-[#8a8a8a] sm:text-lg">
            Every business category demands its own visual language, psychological triggers, and conversion funnel. Below is a showcase of the type of tailored websites and platforms Arclyn Studio designs and engineers.
          </p>

          {/* Explicit disclaimer banner as requested */}
          <div className="mx-auto mt-6 flex max-w-2xl items-start gap-3 rounded-xl border border-white/10 bg-[#0d0d0d] p-4 text-left sm:rounded-2xl">
            <ShieldAlert className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#ff1010]" />
            <p className="text-xs leading-relaxed text-[#8a8a8a]">
              <strong className="text-white">Editorial Notice:</strong> The concept prototypes below represent original design blueprints and aesthetic explorations created by Arclyn Studio to demonstrate vertical expertise. They are not presented as past client endorsements, nor do they duplicate proprietary brand assets.
            </p>
          </div>
        </div>

        {/* 6 Industry Full Showcases */}
          <div className="space-y-10 sm:space-y-16">
          {INDUSTRIES.map((ind, index) => {
            const Icon = ICON_MAP[ind.id] || Building2;
            const isEven = index % 2 === 1;

            return (
              <div
                key={ind.id}
                id={ind.id}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d] p-4 sm:rounded-3xl sm:p-8 lg:p-12"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Left: Strategy, Conversion focus, & Real project link */}
                  <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#111111] text-[#ff1010] sm:h-12 sm:w-12 sm:rounded-2xl">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                          {ind.name}
                        </h2>
                        <span className="text-xs font-semibold text-[#ff1010]">
                          {ind.tagline}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed text-[#b0b0b0]">
                      {ind.description}
                    </p>

                    {/* Style Inspiration */}
                    <div className="rounded-xl border border-white/10 bg-[#111111] p-3 text-xs leading-relaxed text-[#8a8a8a] sm:rounded-2xl sm:p-4">
                      <strong className="text-white">Aesthetic Moodboard Direction:</strong>{' '}
                      {ind.styleInspiration}
                    </div>

                    {/* Conversion Focus Checklist */}
                    <div className="space-y-2.5">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#ff1010]">
                        High-Converting Capabilities:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {ind.conversionFocus.map((c) => (
                          <div key={c} className="flex items-start gap-2 text-xs text-[#b0b0b0]">
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[#ff1010]" />
                            <span>{c}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Verified Arclyn Production Example if available */}
                    {ind.arclynExample && (
                      <div className="flex flex-col justify-between gap-3 rounded-xl border border-[#ff1010]/20 bg-[#111111] p-3 sm:flex-row sm:items-center sm:rounded-2xl sm:p-4">
                        <div>
                          <div className="flex items-center gap-1.5 text-xs font-bold text-[#ff1010]">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Verified Production Project:</span>
                          </div>
                          <div className="mt-0.5 text-xs text-[#b0b0b0]">
                            {ind.arclynExample.name} — {ind.arclynExample.note}
                          </div>
                        </div>
                        {ind.arclynExample.url && (
                          <a
                            href={ind.arclynExample.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg border border-[#ff1010]/30 px-3 py-1.5 text-xs font-semibold text-[#ff1010] transition-colors hover:bg-[#ff1010] hover:text-white"
                          >
                            <span>Live Site</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    )}

                    {/* CTA */}
                    <div className="pt-2">
                      <Link
                        href={`/contact?industry=${ind.id}`}
                        className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#ff1010] px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-[#e00000] sm:rounded-xl sm:px-6 sm:text-sm"
                      >
                        <span>Build for {ind.name.split('&')[0].trim()}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Right: Original Concept Mockup Preview */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : ''}`}>
                    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#111111] p-4 sm:rounded-2xl sm:p-8">
                      
                      {/* Browser header */}
                      <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                        </div>
                        <span className="text-[11px] font-mono text-slate-400">
                          preview.arclynstudio.com/{ind.id}
                        </span>
                      </div>

                      {/* Simulated UI layout */}
                      <div className="space-y-4">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[10px] font-bold text-white tracking-wider uppercase">
                          <span>Original Concept Demo</span>
                        </div>

                        <h3 className="text-2xl font-extrabold text-white leading-tight">
                          {ind.mockupTheme.demoHeadline}
                        </h3>

                        <p className="text-xs leading-relaxed text-[#8a8a8a] sm:text-sm">
                          {ind.mockupTheme.demoSub}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                          {ind.mockupTheme.demoTags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-md border border-white/10 bg-[#090909] px-2.5 py-1 text-[10px] font-semibold text-[#d5d5d5]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="pt-4 flex items-center gap-3">
                          <button
                            type="button"
                            className="rounded-lg bg-[#ff1010] px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#e00000] sm:rounded-xl sm:px-5"
                          >
                            {ind.mockupTheme.demoCta}
                          </button>
                          <span className="text-[11px] text-[#8a8a8a]">
                            Mobile-first responsive flow
                          </span>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-white/10 bg-[#0d0d0d] p-5 text-center sm:mt-20 sm:rounded-3xl sm:p-12">
          <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
            Operating in a Different Vertical?
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-sm text-[#8a8a8a]">
            Our architectural process adapts to any high-intent commercial niche — B2B fintech, legal practices, educational academies, and industrial logistics.
          </p>
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#ff1010] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#e00000] sm:rounded-xl sm:px-8"
          >
            <span>Discuss Your Industry Requirements</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
