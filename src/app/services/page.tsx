import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES } from '@/data/services';
import { 
  Globe, 
  Smartphone, 
  Bot, 
  Zap, 
  Code2, 
  Cloud, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services & Capabilities',
  description:
    'Full-stack web & e-commerce development, mobile apps, autonomous AI agents, workflow automation, custom SaaS engineering, and cloud DevOps.',
};

const ICON_MAP: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  Bot,
  Zap,
  Code2,
  Cloud,
};

import { PageHeroRibbon } from '@/components/shared/PageHeroRibbon';

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 bg-cosmic-grid min-h-screen relative overflow-hidden">
      {/* 3D Liquid Chrome Ribbon Background */}
      <PageHeroRibbon />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-radial-hero pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 w-fit mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
              Technical Capabilities
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Engineering Precision. <br />
            <span className="text-gradient">AI-Accelerated Speed.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            From high-conversion consumer storefronts to autonomous agent orchestration and enterprise cloud architecture — explore our 6 core practice areas.
          </p>
        </div>

        {/* 6 Services Deep Dive Cards */}
        <div className="space-y-12">
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.iconName] || Globe;
            const isEven = index % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.slug}
                className="rounded-3xl glass-panel p-8 sm:p-12 border border-white/10 hover:border-purple-500/40 transition-all duration-300 overflow-hidden relative"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Service Info */}
                  <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-cyan-500 text-white flex items-center justify-center shadow-lg">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-300">
                        {service.badge}
                      </span>
                    </div>

                    <div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                        {service.title}
                      </h2>
                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                        {service.longDesc}
                      </p>
                    </div>

                    {/* Deliverables Checklist */}
                    <div className="space-y-2.5 pt-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Key Deliverables Included:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.deliverables.slice(0, 4).map((d) => (
                          <div key={d.title} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <strong className="text-white font-medium">{d.title}:</strong>{' '}
                              <span className="text-slate-400">{d.desc}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action link */}
                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white btn-primary-gradient group"
                      >
                        <span>View Detailed Blueprint, Process &amp; FAQ</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                      >
                        <span>Request Service Quote</span>
                      </Link>
                    </div>
                  </div>

                  {/* Visual Blueprint Sidebar */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : ''}`}>
                    <div className="rounded-2xl bg-[#090E24] border border-white/10 p-6 space-y-5">
                      
                      <div className="text-xs font-bold uppercase tracking-wider text-purple-400">
                        Engineering Stack
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-white/5 border border-white/10 text-slate-200"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-white/5 space-y-3">
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          Primary Business Advantages
                        </div>
                        {service.benefits.map((b) => (
                          <div key={b} className="flex items-center gap-2 text-xs text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>

                      <div className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/20 flex items-center justify-between text-xs text-purple-300">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-emerald-400" />
                          <span>30-Day Hyper-Care Warranty</span>
                        </div>
                        <span className="text-[10px] text-slate-400">Standard</span>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Closing CTA */}
        <div className="mt-20 text-center">
          <div className="p-8 rounded-3xl glass-panel max-w-2xl mx-auto border border-white/10">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Unsure which architecture fits your roadmap?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-6">
              Tell us your objectives. We will draft an architectural recommendation and milestone timeline within 12 hours.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white btn-primary-gradient"
            >
              <span>Schedule Architecture Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
