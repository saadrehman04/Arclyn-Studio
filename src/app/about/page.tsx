import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Sparkles, 
  ArrowRight, 
  Code2, 
  Users, 
  ShieldCheck, 
  Cpu, 
  Zap, 
  Layers, 
  Award,
  Terminal,
  ExternalLink
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us — Engineering Philosophy & Story',
  description:
    'Learn about Arclyn Studio: a digital agency combining senior full-stack engineering with autonomous AI automation to build products that actually grow businesses.',
};

const VALUES = [
  {
    icon: Code2,
    title: 'Code Craftsmanship Over Templates',
    desc: 'We never wrap generic WordPress themes or bloated visual page builders. Every line of code is purpose-built in modern TypeScript and Next.js for sub-second performance.',
  },
  {
    icon: Zap,
    title: 'AI Acceleration, Not AI Toys',
    desc: 'We leverage AI where it moves the needle — rapid prototyping, code refactoring, and autonomous workflows — while keeping senior humans at the helm of architecture.',
  },
  {
    icon: ShieldCheck,
    title: 'Zero Vendor Lock-In',
    desc: 'You own 100% of your source code, design assets, and cloud deployment pipelines from day one. Full IP handover with clean documentation.',
  },
  {
    icon: Users,
    title: 'Direct Engineering Access',
    desc: 'No non-technical account managers playing telephone. You communicate directly with the engineers and architects building your product.',
  },
];

const TECH_ARSENAL = [
  { category: 'Frontend', items: ['Next.js 14/15 App Router', 'TypeScript', 'React 19', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'Backend & APIs', items: ['Node.js', 'Python', 'FastAPI', 'REST APIs', 'WebSockets', 'GraphQL'] },
  { category: 'Databases & Cloud', items: ['Supabase', 'PostgreSQL', 'Redis', 'Vercel Edge', 'AWS', 'Google Cloud'] },
  { category: 'AI & Automation', items: ['LangChain', 'LangGraph', 'OpenAI GPT-4o', 'Pinecone', 'n8n', 'Make.com', 'Whisper'] },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-cosmic-grid min-h-screen">
      {/* Background ambient lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-radial-hero pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Hero */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 w-fit mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-300">
              The Arclyn Philosophy
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            We Build Real Products. <br />
            <span className="text-gradient">Not Generic Templates.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            Arclyn Studio is a technical digital studio founded to solve the core frustration with traditional agencies: slow delivery cycles, bloated templates, and a lack of true engineering depth.
          </p>
        </div>

        {/* Real Story & Background */}
        <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-white/10 mb-24 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Founder Background &amp; Engineering Origin
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Backed by 50+ Real Deployments and a 150k+ Developer Audience
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Founded by <strong className="text-white">Saad Rehman</strong> — an AI &amp; ML Engineer and Full Stack Developer with over 3+ years of experience building high-scale automation systems and digital products — Arclyn Studio represents the synthesis of developer craftsmanship and automated velocity.
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Having educated and inspired a global community of over 150,000 developers across LinkedIn and technical channels, we take that same transparency and engineering rigor into every client engagement.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://saadr.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-purple-600/30 hover:bg-purple-600/50 border border-purple-500/40 transition-colors"
                >
                  <span>Explore Founder Portfolio (saadr.tech)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                >
                  <span>View Verified Client Case Studies</span>
                </Link>
              </div>
            </div>

            {/* Right Side Stats Window */}
            <div className="lg:col-span-5">
              <div className="p-7 rounded-2xl bg-[#080D22] border border-white/10 space-y-6 shadow-2xl">
                <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold font-mono">
                    AS
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Arclyn Studio Vital Metrics</div>
                    <div className="text-[11px] text-slate-400">Verified track record</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-extrabold text-white">150k+</div>
                    <div className="text-xs text-slate-400">Community audience across developer channels</div>
                  </div>
                  <div className="pt-3 border-t border-white/5">
                    <div className="text-3xl font-extrabold text-white">50+</div>
                    <div className="text-xs text-slate-400">Production web apps, AI agents &amp; stores shipped</div>
                  </div>
                  <div className="pt-3 border-t border-white/5">
                    <div className="text-3xl font-extrabold text-white">95+</div>
                    <div className="text-xs text-slate-400">Average Google Core Web Vitals score on client builds</div>
                  </div>
                  <div className="pt-3 border-t border-white/5">
                    <div className="text-3xl font-extrabold text-white">2–4 Wks</div>
                    <div className="text-xs text-slate-400">Standard project turnaround from kickoff to live launch</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
              Core Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              How We Work Differently
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="p-8 rounded-3xl glass-panel border border-white/10 flex items-start gap-5"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-cyan-400 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tech Stack Matrix */}
        <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-white/10 mb-24">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Our Technical Stack
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Production Frameworks &amp; Tooling
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              We select tools that offer exceptional speed, robust type safety, and zero bloat.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TECH_ARSENAL.map((group) => (
              <div key={group.category} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-4">
                  {group.category}
                </h3>
                <div className="space-y-2">
                  {group.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <div className="rounded-3xl glass-panel p-8 sm:p-12 text-center max-w-3xl mx-auto border border-white/15">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Want to collaborate on your next build?
          </h2>
          <p className="text-sm text-slate-300 mb-8 max-w-lg mx-auto">
            We are currently accepting new client projects for the upcoming sprint cycle.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-semibold text-white btn-primary-gradient"
            >
              Start Your Project
            </Link>
            <Link
              href="/work"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-sm font-semibold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10"
            >
              Explore Our Work
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
