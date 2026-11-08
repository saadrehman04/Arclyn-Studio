'use client';

import React, { useEffect, useRef } from 'react';

/**
 * Lightweight scroll-reveal system.
 *
 * One shared IntersectionObserver for the entire site flips a `data-revealed`
 * attribute; the actual motion is a CSS transition on transform/opacity/clip-path
 * (see globals.css). Nothing runs per-frame in JavaScript, so hundreds of
 * revealed elements cost almost nothing while scrolling.
 */

let sharedObserver: IntersectionObserver | null = null;

function getObserver() {
  if (sharedObserver) return sharedObserver;
  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).dataset.revealed = 'true';
          sharedObserver?.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.01 },
  );
  return sharedObserver;
}

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      el.dataset.revealed = 'true';
      return;
    }
    const observer = getObserver();
    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);
  return ref;
}

type RevealVariant = 'up' | 'fade' | 'scale' | 'clip' | 'left' | 'right' | 'blur';

interface RevealProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  variant?: RevealVariant;
  /** delay in ms */
  delay?: number;
  /**
   * Above-the-fold content: animate with a pure-CSS intro on first paint
   * instead of waiting for hydration + IntersectionObserver (better LCP).
   */
  intro?: boolean;
  children?: React.ReactNode;
}

export const Reveal: React.FC<RevealProps> = ({
  as: Tag = 'div',
  variant = 'up',
  delay = 0,
  intro = false,
  style,
  children,
  ...rest
}) => {
  const ref = useReveal<HTMLElement>();
  if (intro) {
    return (
      <Tag data-intro={variant} style={{ ...style, ['--reveal-delay' as string]: `${delay}ms` }} {...rest}>
        {children}
      </Tag>
    );
  }
  return (
    <Tag
      ref={ref}
      data-reveal={variant}
      style={{ ...style, ['--reveal-delay' as string]: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

interface SplitTextProps {
  text: string;
  as?: React.ElementType;
  className?: string;
  delay?: number;
  /** ms between words */
  stagger?: number;
  /** words (by index) that get the accent serif style */
  accentWords?: number[];
  accentClassName?: string;
  /** Pure-CSS intro on first paint (use for the hero headline). */
  intro?: boolean;
}

/**
 * Headline that rises word-by-word out of a mask when it enters the viewport.
 * Words stay real text (accessible, selectable, SEO friendly).
 */
export const SplitText: React.FC<SplitTextProps> = ({
  text,
  as: Tag = 'h2',
  className,
  delay = 0,
  stagger = 55,
  accentWords = [],
  accentClassName = 'text-zinc-500',
  intro = false,
}) => {
  const ref = useReveal<HTMLElement>();
  const lines = text.split('\n');
  let wordIndex = 0;

  return (
    <Tag
      ref={intro ? undefined : ref}
      {...(intro ? { 'data-intro': 'split' } : { 'data-reveal': 'split' })}
      className={className}
      style={{ ['--reveal-delay' as string]: `${delay}ms` }}
      aria-label={text.replace(/\n/g, ' ')}
    >
      {lines.map((line, li) => (
        <span key={li} className="block" aria-hidden="true">
          {line.split(' ').map((word, wi, arr) => {
            const i = wordIndex++;
            const isAccent = accentWords.includes(i);
            return (
              <React.Fragment key={wi}>
                <span className="split-word">
                  <span
                    className={isAccent ? accentClassName : undefined}
                    style={{ ['--i' as string]: i, ['--stagger' as string]: `${stagger}ms` }}
                  >
                    {word}
                  </span>
                </span>
                {wi < arr.length - 1 ? ' ' : null}
              </React.Fragment>
            );
          })}
        </span>
      ))}
    </Tag>
  );
};
