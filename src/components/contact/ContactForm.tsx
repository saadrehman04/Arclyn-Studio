'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Mail, MessageCircle } from 'lucide-react';

const PROJECT_TYPES = [
  'Website & E-Commerce',
  'Mobile App Development',
  'AI Agent Development',
  'AI Integration & Automation',
  'Custom Software & SaaS',
  'Cloud Architecture & DevOps',
];

const TARGET_EMAILS = ['rehmansaad209@gmail.com', 'saadrehman034@gmail.com'];
const WHATSAPP_NUMBER = '923196762317';

const EMPTY = { name: '', email: '', company: '', projectType: PROJECT_TYPES[0], message: '' };

const inputClass =
  'w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-zinc-600 transition-colors focus:border-violet-400 focus:outline-none';
const labelClass = 'mb-1.5 block text-xs font-medium text-zinc-400';

export const ContactForm: React.FC<{ initialTier?: string; initialService?: string }> = ({ initialTier, initialService }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    ...EMPTY,
    projectType: initialService || PROJECT_TYPES[0],
    message: initialTier ? `Interested in tier: ${initialTier}` : '',
  });

  const mailtoUrl = () => {
    const subject = encodeURIComponent(`[Arclyn Studio Inquiry] ${formData.name} - ${formData.projectType}`);
    const body = encodeURIComponent(
      `Hello Saad,\n\nName: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'N/A'}\nProject Type: ${formData.projectType}\n\nProject Details:\n${formData.message}\n`,
    );
    return `mailto:${TARGET_EMAILS[0]}?cc=${TARGET_EMAILS[1]}&subject=${subject}&body=${body}`;
  };

  const whatsappUrl = () => {
    const text = encodeURIComponent(
      `Hi Saad, I'd like to discuss a project:\nName: ${formData.name}\nProject: ${formData.projectType}\nEmail: ${formData.email}\nDetails: ${formData.message}`,
    );
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || 'We could not send your inquiry.');
      }
      setSubmitted(true);
    } catch {
      // Never pretend it worked — offer the direct channels instead.
      setErrorMsg('Your message could not be sent right now. Please use email or WhatsApp below — your details are pre-filled.');
    } finally {
      setLoading(false);
    }
  };

  const fallbackButtons = (
    <div className="flex flex-col gap-2 sm:flex-row">
      <a href={mailtoUrl()} className="btn-ghost h-11 flex-1 text-sm">
        <Mail className="h-4 w-4" />
        Send by email
      </a>
      <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn-ghost h-11 flex-1 text-sm">
        <MessageCircle className="h-4 w-4 text-emerald-400" />
        Send on WhatsApp
      </a>
    </div>
  );

  if (submitted) {
    return (
      <div className="space-y-6 rounded-3xl border border-white/10 bg-[#0c0c12] p-6 text-center sm:p-12">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-400/10 text-emerald-400">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <div>
          <h3 className="font-display text-2xl font-semibold tracking-tight text-white">Inquiry received</h3>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-zinc-400">
            Thanks, <span className="text-white">{formData.name}</span>. Your brief is with Saad Rehman — expect a reply at{' '}
            <span className="text-white">{formData.email}</span> within 12 hours.
          </p>
        </div>
        <div className="mx-auto max-w-md text-left">
          <p className="mb-3 text-center text-xs text-zinc-500">Want a faster answer? Follow up directly:</p>
          {fallbackButtons}
        </div>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData(EMPTY);
          }}
          className="text-sm text-zinc-400 underline underline-offset-4 hover:text-white"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-panel space-y-5 rounded-3xl p-5 sm:p-10">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={labelClass}>
            Your name *
          </label>
          <input
            id="cf-name"
            type="text"
            required
            autoComplete="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Tariq Vance"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="cf-email" className={labelClass}>
            Work email *
          </label>
          <input
            id="cf-email"
            type="email"
            required
            autoComplete="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="tariq@company.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-company" className={labelClass}>
            Company / project name
          </label>
          <input
            id="cf-company"
            type="text"
            autoComplete="organization"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="e.g. Acme Health"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="cf-type" className={labelClass}>
            Project type *
          </label>
          <select
            id="cf-type"
            value={formData.projectType}
            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
            className={`${inputClass} bg-[#0c0c12]`}
          >
            {PROJECT_TYPES.map((pt) => (
              <option key={pt} value={pt}>
                {pt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="cf-message" className={labelClass}>
          About your project &amp; goals *
        </label>
        <textarea
          id="cf-message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="What are you building or automating? Any deadlines?"
          className={inputClass}
        />
      </div>

      {errorMsg && (
        <div role="alert" className="space-y-3 rounded-2xl border border-red-400/25 bg-red-400/[0.06] p-4">
          <p className="flex items-start gap-2 text-sm text-red-200">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            {errorMsg}
          </p>
          {fallbackButtons}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="btn-primary-gradient w-full gap-2 py-4 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Send className="h-4 w-4" />
        {loading ? 'Sending…' : 'Submit project inquiry'}
      </button>

      <p className="text-center text-xs text-zinc-500">
        Goes straight to the founder&apos;s inbox. We never share your details.
      </p>
    </form>
  );
};
