import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICES } from '@/data/services';
import { PROJECTS } from '@/data/projects';
import { ArrowRight, ExternalLink, Plus } from 'lucide-react';
import { PageHero, PageCta } from '@/components/shared/PageHero';
import { Reveal, SplitText } from '@/components/motion/Reveal';

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

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const resolvedSlug = SLUG_ALIASES[slug] || slug;
  const service = SERVICES.find((s) => s.slug === resolvedSlug) || SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const caseStudy = PROJECTS.find((p) => p.id === service.caseStudyId);
  const titleWords = service.title.split(' ').length;

  return (
    <div className="relative min-h-screen bg-[var(--bg)]">
      <PageHero
        eyebrow={service.badge}
        title={service.title}
        accentWords={[titleWords - 1]}
        description={service.longDesc}
        back={{ href: '/services', label: 'All services' }}
      >
        <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Link href={`/contact?service=${service.slug}`} className="btn-primary">
            <span>Request a scope</span>
            <span className="btn-arrow">
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
          <a href="https://calendly.com/saadrehman" target="_blank" rel="noopener noreferrer" className="btn-ghost">
            Book a discovery call
          </a>
        </div>
      </PageHero>

      {/* Deliverables */}
      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal as="p" variant="fade" className="eyebrow mb-6">
            Deliverables
          </Reveal>
          <SplitText
            text={'What every engagement\nincludes.'}
            accentWords={[3]}
            accentClassName="font-serif-accent text-gradient-brand"
            className="section-title"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.deliverables.map((item, index) => (
              <Reveal key={item.title} variant="up" delay={(index % 3) * 80} className="glass-panel rounded-3xl p-6 sm:p-7">
                <span className="font-mono text-xs text-violet-300/80">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal as="p" variant="fade" className="eyebrow mb-6">
            Process
          </Reveal>
          <SplitText
            text={'Four steps from\nkickoff to launch.'}
            accentWords={[3, 4, 5]}
            accentClassName="font-serif-accent text-gradient-brand"
            className="section-title"
          />
          <ol className="mt-12 grid border-t border-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((p, i) => (
              <Reveal
                as="li"
                key={p.step}
                variant="up"
                delay={i * 80}
                className="border-b border-white/[0.08] py-8 sm:px-6 sm:[&:nth-child(odd)]:border-r lg:border-r lg:last:border-r-0"
              >
                <span className="font-display text-5xl font-semibold tracking-[-0.05em] text-white/15">{p.step}</span>
                <h3 className="mt-4 text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{p.desc}</p>
              </Reveal>
            ))}
          </ol>

          <Reveal variant="up" className="mt-12 flex flex-wrap gap-2">
            {service.technologies.map((tech) => (
              <span key={tech} className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs text-zinc-300 sm:text-sm">
                {tech}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Case study */}
      {caseStudy && (
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <Reveal variant="up" className="glass-panel mx-auto grid max-w-7xl overflow-hidden rounded-[28px] sm:rounded-[36px] lg:grid-cols-2">
            <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14">
              <p className="eyebrow">Featured case study</p>
              <h3 className="mt-5 font-display text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">{caseStudy.name}</h3>
              <p className="mt-3 text-sm font-medium text-emerald-300/90">{caseStudy.stat}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-zinc-400">{caseStudy.shortDesc}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={`/work#${caseStudy.id}`} className="btn-primary">
                  <span>Read the case study</span>
                  <span className="btn-arrow">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
                {caseStudy.liveUrl && (
                  <a href={caseStudy.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                    Visit live site
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
            <div className="relative aspect-[16/11] bg-[#15151d] lg:aspect-auto lg:min-h-[420px]">
              <Image src={caseStudy.image} alt={caseStudy.name} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-top" />
            </div>
          </Reveal>
        </section>
      )}

      {/* FAQ */}
      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal as="p" variant="fade" className="eyebrow mb-6">
            FAQ
          </Reveal>
          <SplitText
            text={'Questions, answered.'}
            accentWords={[1]}
            accentClassName="font-serif-accent text-gradient-brand"
            className="section-title"
          />
          <div className="mt-10 border-t border-white/[0.08]">
            {service.faqs.map((faq) => (
              <details key={faq.question} className="group border-b border-white/[0.08]">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-left text-base font-medium text-white sm:text-lg [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <Plus className="mt-1 h-5 w-5 shrink-0 text-zinc-500 transition-transform duration-300 group-open:rotate-45" />
                </summary>
                <p className="-mt-2 pb-6 pr-10 text-[15px] leading-relaxed text-zinc-400">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title={`Ready to build your\n${service.title}?`}
        accentWords={Array.from({ length: titleWords }, (_, i) => 4 + i)}
        description="Tell us about your requirements. We'll send an architecture roadmap, scope breakdown and fixed quote within 12 hours."
        primary={{ href: `/contact?service=${service.slug}`, label: 'Start your scope' }}
        secondary={{ href: '/pricing', label: 'View pricing' }}
      />
    </div>
  );
}
