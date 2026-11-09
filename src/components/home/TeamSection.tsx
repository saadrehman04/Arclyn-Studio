'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Reveal, SplitText } from '@/components/motion/Reveal';

interface TeamMember {
  name: string;
  role: string;
  secondaryRole?: string;
  image: string;
  isLead?: boolean;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Saad Rehman',
    role: 'Founder & CEO',
    secondaryRole: 'Senior Developer',
    image: '/images/team/saad-rehman-zoomed.jpg',
    isLead: true,
  },
  { name: 'Saad Rabbani', role: 'Meta Ads Specialist', image: '/images/team/saad-rabbani-zoomed.jpg' },
  { name: 'Nadeem', role: 'Full Stack AI Engineer', image: '/images/team/nadeem.jpg' },
  { name: 'Abdullah', role: 'AI Automation Specialist', image: '/images/team/abdullah.jpg' },
];

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="relative bg-[var(--bg)] px-5 py-24 sm:px-8 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-6 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal as="p" variant="fade" className="eyebrow mb-6">
              The team
            </Reveal>
            <SplitText
              text={'The minds behind\nthe machines.'}
              accentWords={[4]}
              accentClassName="text-[var(--accent)]"
              className="font-display text-[clamp(2.5rem,6vw,5.25rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-white"
            />
          </div>
          <Reveal variant="up" delay={150} className="max-w-sm">
            <p className="text-base leading-relaxed text-zinc-400">
              A small senior team that blends engineering rigor and strategic thinking with AI innovation. You work
              directly with the people building your product.
            </p>
            <Link href="/about" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white">
              <span className="link-underline">More about Arclyn</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {TEAM_MEMBERS.map((member, idx) => (
            <Reveal key={member.name} variant="up" delay={idx * 90} className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#161618] sm:rounded-3xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-top grayscale transition-[filter,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                {member.isLead && (
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white sm:left-4 sm:top-4">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Founder
                  </span>
                )}
                <div className="absolute inset-x-3 bottom-3 sm:inset-x-5 sm:bottom-5">
                  <h3 className="text-base font-semibold tracking-tight text-white sm:text-2xl">{member.name}</h3>
                  <p className="mt-0.5 text-xs text-zinc-300 sm:text-sm">
                    {member.role}
                    {member.secondaryRole ? <span className="text-zinc-400"> · {member.secondaryRole}</span> : null}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
