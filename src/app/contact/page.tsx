import React from 'react';
import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact/ContactForm';
import { 
  Sparkles, 
  Mail, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  MessageSquare,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { InstagramIcon } from '@/components/shared/SocialIcons';

export const metadata: Metadata = {
  title: 'Contact Us — Start Your Project',
  description:
    'Get in touch with Arclyn Studio. Request a proposal, book a discovery call, or discuss full-stack web and AI automation engineering for your business.',
};

interface Props {
  searchParams: Promise<{ tier?: string; service?: string }>;
}

import { PageHeroRibbon } from '@/components/shared/PageHeroRibbon';

export default async function ContactPage({ searchParams }: Props) {
  const { tier, service } = await searchParams;

  return (
    <div className="pt-32 pb-24 bg-cosmic-grid min-h-screen relative overflow-hidden">
      {/* 3D Liquid Chrome Ribbon Background */}
      <PageHeroRibbon variant="flow" opacity={0.7} />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-radial-hero pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 w-fit mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
              Start The Conversation
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Let’s Build Something <br />
            <span className="text-gradient">Exceptional Together</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            Fill out our intake form below or schedule a direct 15-minute scoping call. We respond within 12 hours with a preliminary technical architecture and milestone plan.
          </p>
        </div>

        {/* Form and Contact Channels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct channels & Calendly card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick response badge */}
            <div className="p-6 rounded-2xl glass-panel border border-emerald-500/30 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-white">
                  12-Hour Response Time Guarantee
                </h2>
                <p className="text-xs text-slate-300 leading-relaxed mt-1">
                  Every inquiry is evaluated directly by our technical architects — not non-technical sales agents.
                </p>
              </div>
            </div>

            {/* Direct Email Card */}
            <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Direct Inquiries</div>
                  <a
                    href="mailto:hello@arclynstudio.com"
                    className="text-sm font-bold text-white hover:text-cyan-300 transition-colors"
                  >
                    hello@arclynstudio.com
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 flex items-center justify-center">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Instagram Direct</div>
                  <a
                    href="https://instagram.com/arclynstudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-white hover:text-pink-300 transition-colors"
                  >
                    @arclynstudio
                  </a>
                </div>
              </div>
            </div>

            {/* Calendly Booking Placeholder Card */}
            <div className="p-6 rounded-2xl bg-[#090E26] border border-cyan-500/30 space-y-4 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400">
                  <Calendar className="w-4 h-4" />
                  <span>Prefer Live Video?</span>
                </div>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  15 Min Scoping
                </span>
              </div>

              <h2 className="text-lg font-bold text-white">
                Book a 15-Minute Scoping Call
              </h2>

              <p className="text-xs text-slate-300 leading-relaxed">
                Walk through your project scope, tech stack requirements, and get direct architectural feedback on the spot with Saad Rehman.
              </p>

              <a
                href="https://calendly.com/saadrehman"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl text-xs font-bold text-white btn-primary-gradient flex items-center justify-center gap-2"
              >
                <span>Select a Time on Calendly</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Reassurance Checklist */}
            <div className="p-6 rounded-2xl glass-panel border border-white/5 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                What to Expect After Contacting:
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span>NDA signed upfront if proprietary IP is involved</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span>Transparent fixed milestone pricing (50% / 30% / 20%)</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span>No pressure, no aggressive sales follow-ups</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Intake Form */}
          <div className="lg:col-span-7">
            <ContactForm initialTier={tier} initialService={service} />
          </div>

        </div>

      </div>
    </div>
  );
}
