import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICES } from '@/data/services';
import { PROJECTS } from '@/data/projects';
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  ExternalLink, 
  HelpCircle,
  Clock,
  Layers,
  Check
} from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

const SLUG_ALIASES: Record<string, string> = {
  'web-development': 'website-ecommerce-development',
  'app-development': 'mobile-app-development',
  'ai-automation': 'ai-agent-development',
  'ui-ux-design': 'ui-ux-design',
  'saas-development': 'custom-software-saas-development',
  'custom-software': 'cloud-architecture-devops',
};

export async function generateStaticParams() {
  const base = SERVICES.map((service) => ({
    slug: service.slug,
  }));
  const custom = Object.keys(SLUG_ALIASES).map((slug) => ({ slug }));
  return [...base, ...custom];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resolvedSlug = SLUG_ALIASES[slug] || slug;
  const service = SERVICES.find((s) => s.slug === resolvedSlug) || SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} — Arclyn Studio`,
    description: service.shortDesc,
    openGraph: {
      title: `${service.title} | Arclyn Studio`,
      description: service.longDesc,
    },
  };
}

import { PageHeroRibbon } from '@/components/shared/PageHeroRibbon';

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const resolvedSlug = SLUG_ALIASES[slug] || slug;
  const service = SERVICES.find((s) => s.slug === resolvedSlug) || SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Find relevant case study
  const caseStudy = PROJECTS.find((p) => p.id === service.caseStudyId);

  return (
    <div className="pt-32 pb-24 bg-cosmic-grid min-h-screen relative overflow-hidden">
      {/* 3D Liquid Chrome Ribbon Background */}
      <PageHeroRibbon />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-radial-hero pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Capabilities</span>
          </Link>
        </div>

        {/* Hero Intro */}
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 w-fit mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-300">
              {service.badge}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            {service.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8">
            {service.longDesc}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={`/contact?service=${service.slug}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white btn-primary-gradient"
            >
              <span>Request Service Scope</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://calendly.com/saadrehman"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <span>Book Discovery Call</span>
            </a>
          </div>
        </div>

        {/* What's Included Deliverables Grid */}
        <div className="mb-24">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Deliverables &amp; Scope
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              What Is Included in Every Engagement
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.deliverables.map((item, index) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl glass-panel border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center font-mono text-xs font-bold mb-4">
                    0{index + 1}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4-Step Process */}
        <div className="mb-24 p-8 sm:p-12 rounded-3xl bg-[#090E26] border border-white/10 relative overflow-hidden">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
              Execution Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Our 4-Step Delivery Process
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              Engineered to eliminate ambiguity, provide continuous visibility, and guarantee on-time deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((p) => (
              <div
                key={p.step}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 relative group"
              >
                <div className="text-3xl font-extrabold font-mono text-white/20 group-hover:text-purple-400/40 mb-3 transition-colors">
                  {p.step}
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Grid */}
        <div className="mb-24">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Technical Arsenal
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Technologies &amp; Frameworks Deployed
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {service.technologies.map((tech) => (
              <div
                key={tech}
                className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 font-mono text-xs sm:text-sm font-semibold flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Relevant Real Case Study Banner */}
        {caseStudy && (
          <div className="mb-24 rounded-3xl glass-panel p-8 sm:p-10 border border-purple-500/30 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-300">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                  <span>Featured Case Study for this Service</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {caseStudy.name}
                </h3>
                <div className="text-sm font-semibold text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{caseStudy.stat}</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {caseStudy.shortDesc}
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    href="/work"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-white btn-primary-gradient"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  {caseStudy.liveUrl && (
                    <a
                      href={caseStudy.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              <div className="lg:col-span-5 relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-slate-900">
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        )}

        {/* FAQs Accordion */}
        <div className="mb-24 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
              Clear Answers
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq) => (
              <div
                key={faq.question}
                className="p-6 rounded-2xl glass-panel border border-white/10"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-bold text-white mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA for this Service */}
        <div className="p-8 sm:p-12 rounded-3xl glass-panel text-center max-w-3xl mx-auto border border-white/15">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to Build Your {service.title}?
          </h2>
          <p className="text-sm text-slate-300 max-w-lg mx-auto mb-8">
            Tell us about your requirements. We provide an architectural roadmap, scope breakdown, and fixed quote within 12 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/contact?service=${service.slug}`}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-semibold text-white btn-primary-gradient"
            >
              Start Your Service Scope
            </Link>
            <Link
              href="/pricing"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10"
            >
              View Pricing Tiers
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
