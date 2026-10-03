'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, Sparkles } from 'lucide-react';

const PROJECT_TYPES = [
  'Website & E-Commerce',
  'Mobile App Development',
  'AI Agent Development',
  'AI Integration & Automation',
  'Custom Software & SaaS',
  'Cloud Architecture & DevOps',
];

const BUDGET_RANGES = [
  '$750 – $1,500 (Starter)',
  '$1,500 – $3,500 (Business / Store)',
  '$3,500 – $7,500 (Custom SaaS)',
  '$7,500+ (Enterprise / Retainer)',
  'PKR Equivalent (Pakistani Rupees)',
];

export const ContactForm: React.FC<{ initialTier?: string; initialService?: string }> = ({
  initialTier,
  initialService,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: initialService || PROJECT_TYPES[0],
    budget: BUDGET_RANGES[1],
    timeline: 'Within 2–4 weeks',
    message: initialTier ? `Interested in tier: ${initialTier}` : '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-12 rounded-3xl bg-[#090E26] border border-emerald-500/40 text-center space-y-4 shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-white">
          Project Inquiry Received!
        </h3>
        <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
          Thank you, <strong className="text-white">{formData.name}</strong>. Our engineering leads are reviewing your project requirements and will reply to <span className="text-cyan-300">{formData.email}</span> within 12 hours with a preliminary scope roadmap.
        </p>
        <div className="pt-4">
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs font-semibold text-purple-400 hover:text-white underline underline-offset-4"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-8 sm:p-10 rounded-3xl glass-panel border border-white/10 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Your Name *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Tariq Vance"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Work Email Address *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="tariq@company.com"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Company / Project Name
          </label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="e.g. Acme Health or Personal Startup"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Project Type *
          </label>
          <select
            value={formData.projectType}
            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-[#090E26] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
          >
            {PROJECT_TYPES.map((pt) => (
              <option key={pt} value={pt}>
                {pt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Anticipated Budget Range
          </label>
          <select
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-[#090E26] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
          >
            {BUDGET_RANGES.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Desired Launch Timeline
          </label>
          <select
            value={formData.timeline}
            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-[#090E26] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
          >
            <option value="ASAP (within 2 weeks)">ASAP (within 2 weeks)</option>
            <option value="Within 2–4 weeks">Within 2–4 weeks</option>
            <option value="Within 1–2 months">Within 1–2 months</option>
            <option value="Flexible / Exploring Architecture">Flexible / Exploring Architecture</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
          Tell Us About Your Project &amp; Goals *
        </label>
        <textarea
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Describe your current situation, what you're trying to build or automate, and any specific deadlines..."
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 rounded-xl text-sm font-bold text-white btn-primary-gradient flex items-center justify-center gap-2 shadow-xl hover:shadow-cyan-500/25 transition-all"
      >
        <Send className="w-4 h-4" />
        <span>Submit Project Inquiry</span>
      </button>

      <div className="pt-2 text-center text-[11px] text-slate-400">
        We respect your privacy. No spam. Guaranteed response within 12 hours.
      </div>
    </form>
  );
};
