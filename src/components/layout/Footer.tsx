import React from 'react';
import Link from 'next/link';
import { Logo } from '../shared/Logo';
import { SERVICES } from '@/data/services';
import { 
  ArrowUpRight, 
  Mail, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Users 
} from 'lucide-react';
import { InstagramIcon } from '../shared/SocialIcons';

export const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-white/10 bg-[#04060E] overflow-hidden pt-20 pb-12">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-radial-hero pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Logo size="lg" />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Arclyn Studio combines full-stack engineering with AI automation to turn ambitious ideas into market-ready products. Websites, apps, and intelligent systems built to actually grow your business.
            </p>

            {/* Trust row pills */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs text-purple-300">
                <Users className="w-3.5 h-3.5 text-purple-400" />
                <span>150k+ Community</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-cyan-300">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>50+ Projects Delivered</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>3+ Yrs AI & Full-Stack</span>
              </div>
            </div>

            {/* Direct Contact links */}
            <div className="flex flex-col space-y-2 pt-2 text-sm text-slate-300">
              <a
                href="mailto:hello@arclynstudio.com"
                className="inline-flex items-center gap-2 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>hello@arclynstudio.com</span>
              </a>
              <a
                href="https://instagram.com/arclynstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-purple-300 transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-pink-400" />
                <span>@arclynstudio on Instagram</span>
              </a>
            </div>
          </div>

          {/* Core Services Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/work" className="text-slate-400 hover:text-white transition-colors">
                  Our Work & Case Studies
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-slate-400 hover:text-white transition-colors">
                  Industries We Build For
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-slate-400 hover:text-white transition-colors">
                  Pricing & Add-Ons
                </Link>
              </li>
              <li>
                <Link href="/partner-program" className="text-slate-400 hover:text-white transition-colors">
                  Partner & Referral Program (Up to 40%)
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Us & Engineering Philosophy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Schedule Discovery Call
                </Link>
              </li>
            </ul>
          </div>

          {/* Client Portal / Partner Card */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Partner With Us
            </h3>
            <div className="glass-panel p-5 rounded-2xl relative overflow-hidden group">
              <div className="flex items-center gap-2 text-xs font-semibold text-purple-400 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Earn up to 40%</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Know a company that needs high-performance web apps or AI automation? Refer them and earn generous recurring commissions.
              </p>
              <Link
                href="/partner-program"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group-hover:gap-2 transition-all"
              >
                <span>Explore Partner Program</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Arclyn Studio (arclynstudio.com). All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-slate-400">Build Smarter. Launch Faster.</span>
            <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
              Contact Us
            </Link>
            <a
              href="https://saadr.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-purple-300 transition-colors"
            >
              Founder Portfolio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
