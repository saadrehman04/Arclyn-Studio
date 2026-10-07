'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const CinematicHero: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Smooth scroll animations for mobile transition into next section
  const { scrollY } = useScroll();
  const heroContentY = useTransform(scrollY, [0, 420], [0, -85]);
  const heroContentOpacity = useTransform(scrollY, [0, 260], [1, 0]);
  const heroContentScale = useTransform(scrollY, [0, 420], [1, 0.92]);
  
  // Unified celestial glow circle & event horizon parallax transforms
  const portalScale = useTransform(scrollY, [0, 460], [1, 1.48]);
  const portalY = useTransform(scrollY, [0, 460], [0, 95]);
  const portalOpacity = useTransform(scrollY, [0, 360], [1, 0.25]);
  const cosmicNebulaY = useTransform(scrollY, [0, 460], [0, 50]);
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 70], [1, 0]);

  useEffect(() => {
    const handleResize = () => {
      const aspectRatio = window.innerWidth / window.innerHeight;
      if (aspectRatio > 1.1 && isOpen) {
        setIsOpen(false);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !('IntersectionObserver' in window)) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let isInView = false;
    let playbackTimer: number | null = null;
    const syncPlayback = () => {
      if (isInView && !document.hidden && !reducedMotion.matches) {
        if (video.paused && playbackTimer === null) {
          const delay = window.matchMedia('(max-width: 767px)').matches ? 500 : 0;
          playbackTimer = window.setTimeout(() => {
            playbackTimer = null;
            if (isInView && !document.hidden && !reducedMotion.matches) {
              void video.play().catch(() => {});
            }
          }, delay);
        }
      } else {
        if (playbackTimer !== null) {
          window.clearTimeout(playbackTimer);
          playbackTimer = null;
        }
        video.pause();
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      isInView = entry.isIntersecting;
      syncPlayback();
    }, { threshold: 0.05 });
    observer.observe(video.closest('.cinematic-plate') ?? video);
    document.addEventListener('visibilitychange', syncPlayback);
    reducedMotion.addEventListener('change', syncPlayback);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', syncPlayback);
      reducedMotion.removeEventListener('change', syncPlayback);
      if (playbackTimer !== null) window.clearTimeout(playbackTimer);
      video.pause();
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --u: calc(100vh / 1058);
          --uw: calc(100vw / 1487);
          --h: clamp(var(--u), calc(var(--u) * 0.65 + var(--uw) * 0.35), calc(var(--u) * 1.16));
          --ink: #fafafa;
          --muted: #a7a6a6;
          --nav: #b6b5b5;
          --strip: #8b8a8a;
          --pill: #ffffff;
          --pill-ink: #050505;
          --stage-bg: #050505;
        }
        @supports (height: 100dvh) {
          :root {
            --u: calc(100dvh / 1058);
          }
        }
        @media (max-aspect-ratio: 11/10) {
          :root {
            --m: min(calc(100vw / 430), 1.34px);
            --u: var(--m);
            --h: var(--m);
          }
        }
        @media (min-width: 600px) and (max-aspect-ratio: 11/10) {
          :root {
            --m: min(calc(100vw / 860), calc(100vh / 760), 1.25px);
            --u: var(--m);
            --h: var(--m);
          }
        }

        .cinematic-stage {
          position: relative;
          width: 100%;
          height: 100vh;
          height: 100dvh;
          background-color: var(--stage-bg);
          overflow: hidden;
          font-family: 'Manrope', system-ui, -apple-system, 'Segoe UI', sans-serif;
          color: var(--ink);
          text-rendering: geometricPrecision;
          -webkit-font-smoothing: antialiased;
        }

        /* Video Background Stage: Unified atmospheric cavern ambiance extending live shade and mist across entire stage */
        .cinematic-plate {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          transition: opacity 0.5s ease;
          background: 
            /* Volumetric ambient illumination radiating from doorway across the whole room */
            radial-gradient(
              ellipse 100% 80% at calc(50% + clamp(180px, 19vw, 320px)) 50%,
              rgba(255, 248, 235, 0.18) 0%,
              rgba(255, 240, 220, 0.10) 28%,
              rgba(42, 38, 36, 0.55) 54%,
              rgba(20, 18, 20, 0.85) 75%,
              #0c0b0e 100%
            ),
            /* Atmospheric directional gradient carrying the cavern mist and warmth across to the left */
            linear-gradient(
              100deg,
              #0d0c0e 0%,
              #121114 26%,
              #1a1716 56%,
              #26201b 84%,
              #0e0d10 100%
            );
        }

        /* Primary Crisp Video: High-fidelity doorway portal, walking character silhouette, and foreground rocky terrain */
        .cinematic-plate-video {
          position: absolute;
          top: 50%;
          left: calc(50% + clamp(180px, 19vw, 320px));
          transform: translate(-50%, -50%);
          height: 100%;
          width: auto;
          max-width: none;
          object-fit: cover;
          pointer-events: none;
          z-index: 1;
          -webkit-mask-image: 
            linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 12%, black 28%, black 72%, rgba(0,0,0,0.5) 88%, transparent 100%),
            linear-gradient(to bottom, transparent 0%, black 6%, black 94%, transparent 100%);
          -webkit-mask-composite: source-in;
          mask-image: 
            linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 12%, black 28%, black 72%, rgba(0,0,0,0.5) 88%, transparent 100%),
            linear-gradient(to bottom, transparent 0%, black 6%, black 94%, transparent 100%);
          mask-composite: intersect;
        }

        /* Shading & Vignettes: Feathered atmospheric left shading providing high text contrast while letting the living cavern mist and shade breathe */
        .cinematic-plate::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 2;
          background: 
            /* Subtle top-bottom vertical vignette */
            linear-gradient(to bottom,
              rgba(5,5,5,0.35) 0%,
              transparent 18%,
              transparent 72%,
              rgba(5,5,5,0.48) 88%,
              rgba(5,5,5,0.85) 96%,
              #050505 100%),
            /* Translucent atmospheric left shade for crisp text legibility */
            linear-gradient(to right,
              rgba(8,7,9,0.64) 0%,
              rgba(10,9,12,0.48) clamp(260px, 28vw, 440px),
              rgba(16,14,16,0.12) clamp(440px, 44vw, 640px),
              transparent clamp(580px, 58vw, 800px),
              transparent 88%,
              rgba(5,5,5,0.25) 100%);
          pointer-events: none;
        }

        /* Ambient light bloom & volumetric light wash radiating leftward from the portal */
        .cinematic-ambient-bloom {
          position: absolute;
          inset: 0;
          z-index: 3;
          background: 
            /* Broad volumetric light bloom sweeping leftward from the illuminated doorway */
            radial-gradient(
              ellipse 100% 80% at calc(50% + clamp(180px, 19vw, 320px)) 50%,
              rgba(255, 255, 255, 0.16) 0%,
              rgba(255, 248, 235, 0.08) 32%,
              rgba(255, 255, 255, 0.025) 60%,
              transparent 82%
            ),
            /* Soft horizontal atmospheric mist sweep illuminating the left side */
            linear-gradient(
              105deg,
              transparent 15%,
              rgba(255, 255, 255, 0.025) 42%,
              rgba(255, 248, 235, 0.07) 66%,
              transparent 88%
            );
          pointer-events: none;
        }

        @media (max-width: 1023px) {
          .cinematic-hero {
            padding-left: clamp(20px, 5.5vw, 40px);
            padding-right: clamp(20px, 5.5vw, 40px);
            padding-top: max(85px, 12vh);
            padding-bottom: max(95px, 13vh);
            justify-content: center;
            pointer-events: auto;
          }
          .cinematic-content {
            max-width: min(540px, 92vw);
            z-index: 10;
            padding: 12px 0;
            position: relative;
            opacity: 1 !important;
            transform: none !important;
            display: flex !important;
          }
          .cinematic-headline {
            font-size: clamp(30px, 7.8vw, 48px);
            line-height: 1.1;
            margin-bottom: 14px;
            letter-spacing: -0.03em;
            opacity: 1 !important;
            transform: none !important;
            animation: none !important;
          }
          .cinematic-title-brand {
            color: #ffffff !important;
            font-weight: 700 !important;
            opacity: 1 !important;
            transform: none !important;
            animation: none !important;
            text-shadow: 0 2px 20px rgba(0,0,0,0.95);
          }
          .cinematic-title-sub {
            background: none !important;
            -webkit-background-clip: unset !important;
            -webkit-text-fill-color: #f1f5f9 !important;
            color: #f1f5f9 !important;
            font-weight: 600 !important;
            opacity: 1 !important;
            transform: none !important;
            animation: none !important;
            text-shadow: 0 2px 20px rgba(0,0,0,0.95);
          }
          .cinematic-sub {
            font-size: clamp(14px, 3.8vw, 16px);
            line-height: 1.55;
            max-width: 480px;
            margin-bottom: 24px;
            color: #e2e8f0 !important;
            opacity: 1 !important;
            transform: none !important;
            animation: none !important;
            text-shadow: 0 1px 12px rgba(0,0,0,0.95);
          }
          .cinematic-actions {
            width: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 12px;
            opacity: 1 !important;
            transform: none !important;
            animation: none !important;
            pointer-events: auto !important;
          }
          .cinematic-pill-cta {
            min-height: 48px;
            padding: 0 24px;
            font-size: 15px;
            font-weight: 700;
            background: #ffffff !important;
            color: #000000 !important;
            box-shadow: 0 4px 20px rgba(0,0,0,0.6);
            opacity: 1 !important;
            pointer-events: auto !important;
          }
          .cinematic-ghost {
            min-height: 48px;
            padding: 0 20px;
            font-size: 15px;
            background: rgba(12,12,16,0.85) !important;
            border: 1px solid rgba(255,255,255,0.3) !important;
            color: #ffffff !important;
            opacity: 1 !important;
            pointer-events: auto !important;
          }
          .cinematic-plate-video {
            left: 70%;
            top: 50%;
            height: 100%;
            width: auto;
            opacity: 0.38;
            filter: brightness(0.8) contrast(1.1);
          }
          .cinematic-plate::after {
            background: 
              linear-gradient(to bottom,
                rgba(5,5,5,0.78) 0%,
                rgba(5,5,5,0.86) 30%,
                rgba(5,5,5,0.88) 70%,
                #050505 100%),
              linear-gradient(to right,
                rgba(5,5,5,0.96) 0%,
                rgba(5,5,5,0.88) 55%,
                rgba(5,5,5,0.40) 100%);
          }
          .cinematic-logos {
            left: clamp(20px, 5.5vw, 40px);
            right: clamp(20px, 5.5vw, 40px);
            bottom: max(18px, 2.8vh);
            opacity: 1 !important;
            transform: none !important;
          }
          .cinematic-logos-list {
            gap: 16px;
            justify-content: space-between;
            width: 100%;
            opacity: 1 !important;
          }
          .cinematic-lg {
            opacity: 0.75 !important;
            animation: none !important;
          }
          .cinematic-lg svg {
            height: 16px;
          }
          .cinematic-lg span {
            font-size: 12px;
          }
        }

        @media (max-width: 540px) {
          .cinematic-hero {
            padding-top: max(85px, 12vh);
            padding-bottom: max(95px, 13vh);
          }
          .cinematic-headline {
            font-size: clamp(27px, 8vw, 36px);
            line-height: 1.12;
            margin-bottom: 12px;
          }
          .cinematic-sub {
            font-size: 14px;
            line-height: 1.5;
            margin-bottom: 20px;
          }
          .cinematic-actions {
            flex-direction: column;
            align-items: stretch;
            gap: 10px;
          }
          .cinematic-pill-cta, .cinematic-ghost {
            width: 100%;
            justify-content: center;
            min-height: 48px;
          }
          .cinematic-logos-list {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 8px 16px;
          }
          .cinematic-lg svg {
            height: 14px;
          }
          .cinematic-lg span {
            font-size: 11px;
          }
        }

        /* Topbar & Header Elements */
        .cinematic-topbar {
          position: absolute;
          inset: 0;
          z-index: 10;
          pointer-events: none;
        }
        .cinematic-brand {
          position: absolute;
          left: calc(75 * var(--u));
          top: calc(27 * var(--u));
          width: calc(31.5 * var(--u));
          height: calc(48.5 * var(--u));
          pointer-events: auto;
          display: block;
          animation: cinematic-rise 0.8s cubic-bezier(.22, 1, .36, 1) both;
        }
        .cinematic-links {
          position: absolute;
          left: 50%;
          top: calc(51 * var(--u));
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          pointer-events: auto;
          animation: cinematic-riseNav 0.8s cubic-bezier(.22, 1, .36, 1) both;
        }
        .cinematic-links a {
          font-size: calc(19 * var(--u));
          font-weight: 400;
          color: var(--nav);
          text-decoration: none;
          transition: color 0.2s;
        }
        .cinematic-links a:hover { color: var(--ink); }
        .cinematic-links a:nth-child(1) { margin-right: calc(24.5 * var(--u)); }
        .cinematic-links a:nth-child(2) { margin-right: calc(23.5 * var(--u)); }
        .cinematic-links a:nth-child(3) { margin-right: calc(26.0 * var(--u)); }

        .cinematic-pill-nav {
          position: absolute;
          right: calc(75.4 * var(--u));
          top: calc(27 * var(--u));
          width: calc(175 * var(--u));
          height: calc(49 * var(--u));
          background: var(--pill);
          border-radius: 999px;
          color: var(--pill-ink);
          font-size: calc(20.6 * var(--u));
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          pointer-events: auto;
          animation: cinematic-rise 0.8s cubic-bezier(.22, 1, .36, 1) both;
          transition: transform 0.2s, opacity 0.2s;
        }
        .cinematic-pill-nav:hover { transform: scale(1.02); }
        .cinematic-pill-nav span { transform: translateY(calc(1 * var(--u))); }

        .cinematic-burger {
          display: none;
          position: absolute;
          right: calc(24 * var(--u));
          top: calc(24 * var(--u));
          width: calc(48 * var(--u));
          height: calc(48 * var(--u));
          border-radius: 999px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.14);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          pointer-events: auto;
          z-index: 50;
          cursor: pointer;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: calc(6 * var(--u));
        }
        .cinematic-burger i {
          display: block;
          width: calc(20 * var(--u));
          height: calc(1.5 * var(--u));
          background: #fff;
          border-radius: 2px;
          transition: transform 0.3s cubic-bezier(.22, 1, .36, 1);
        }

        @media (max-aspect-ratio: 11/10) {
          .cinematic-links, .cinematic-pill-nav { display: none; }
          .cinematic-burger { display: flex; }
          .cinematic-brand {
            left: calc(24 * var(--u));
            top: calc(24 * var(--u));
          }
        }

        .cinematic-stage.is-open .cinematic-burger i:first-child {
          transform: translateY(calc(3.75 * var(--u))) rotate(45deg);
        }
        .cinematic-stage.is-open .cinematic-burger i:last-child {
          transform: translateY(calc(-3.75 * var(--u))) rotate(-45deg);
        }

        /* Hero Content */
        .cinematic-hero {
          position: absolute;
          inset: 0;
          z-index: 5;
          pointer-events: none;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-left: clamp(24px, 5.5vw, 84px);
          padding-right: clamp(24px, 5.5vw, 84px);
          padding-top: clamp(60px, 10vh, 100px);
          padding-bottom: clamp(120px, 16vh, 180px);
        }
        .cinematic-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          max-width: min(560px, 46vw);
        }
        .cinematic-headline {
          font-size: clamp(34px, 4.8vw, 68px);
          line-height: 1.08;
          font-weight: 500;
          letter-spacing: -0.025em;
          color: var(--ink);
          margin: 0 0 clamp(14px, 2vh, 20px) 0;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .cinematic-title-brand {
          display: block;
          color: #ffffff;
          font-weight: 600;
          animation: cinematic-rise 0.9s cubic-bezier(.22, 1, .36, 1) both;
          animation-delay: 0.06s;
        }
        .cinematic-title-sub {
          display: block;
          background: linear-gradient(135deg, #ffffff 30%, #a3a3a3 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 400;
          animation: cinematic-rise 0.9s cubic-bezier(.22, 1, .36, 1) both;
          animation-delay: 0.12s;
        }
        .cinematic-sub {
          font-size: clamp(15px, 1.25vw, 18px);
          line-height: 1.55;
          font-weight: 400;
          color: #a7a6a6;
          max-width: 520px;
          margin: 0 0 clamp(24px, 3.2vh, 34px) 0;
          animation: cinematic-rise 0.9s cubic-bezier(.22, 1, .36, 1) both;
          animation-delay: 0.18s;
        }
        .cinematic-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: clamp(12px, 1.6vw, 20px);
          pointer-events: auto;
          animation: cinematic-rise 0.9s cubic-bezier(.22, 1, .36, 1) both;
          animation-delay: 0.24s;
        }
        .cinematic-pill-cta {
          height: clamp(44px, 3.6vw, 50px);
          padding: 0 clamp(22px, 2vw, 32px);
          background: #ffffff;
          border-radius: 999px;
          color: #050505;
          font-size: clamp(14px, 1.05vw, 16px);
          font-weight: 600;
          letter-spacing: -0.01em;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-decoration: none;
          transition: transform 0.2s cubic-bezier(.22, 1, .36, 1), box-shadow 0.2s;
          box-shadow: 0 4px 20px rgba(255, 255, 255, 0.15);
        }
        .cinematic-pill-cta:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 30px rgba(255, 255, 255, 0.3);
          background: #f8fafc;
        }
        .cinematic-ghost {
          height: clamp(44px, 3.6vw, 50px);
          padding: 0 clamp(18px, 1.8vw, 26px);
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          font-size: clamp(14px, 1.05vw, 16px);
          font-weight: 500;
          color: #e5e5e5;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .cinematic-ghost:hover {
          border-color: rgba(255, 255, 255, 0.4);
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          transform: translateY(-2px);
        }
        .cinematic-ghost-arrow {
          transition: transform 0.2s;
        }
        .cinematic-ghost:hover .cinematic-ghost-arrow {
          transform: translateY(2px);
        }

        /* Logos at the bottom of hero */
        .cinematic-logos {
          position: absolute;
          left: clamp(24px, 5.5vw, 84px);
          bottom: clamp(24px, 4vh, 48px);
          right: clamp(24px, 5.5vw, 84px);
          z-index: 6;
          pointer-events: none;
          display: flex;
          align-items: center;
        }
        .cinematic-logos-list {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: clamp(20px, 3.5vw, 48px);
          color: var(--strip);
        }
        .cinematic-lg {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          opacity: 0.65;
          transition: opacity 0.2s;
        }
        .cinematic-lg:hover { opacity: 0.95; }
        .cinematic-lg svg { fill: currentColor; stroke: currentColor; height: clamp(16px, 1.8vw, 22px); width: auto; }
        .cinematic-lg span {
          font-family: 'IpsumMark', 'Manrope', sans-serif;
          font-weight: 700;
          font-size: clamp(13px, 1.1vw, 16px);
          letter-spacing: 0.05em;
        }
        .cinematic-lg .dot {
          display: inline-block;
          width: 0.12em; height: 0.12em;
          background: currentColor;
          border-radius: 50%;
          vertical-align: 0.5em;
          margin-left: 0.06em;
        }

        /* Mobile Menu */
        .cinematic-menu {
          position: absolute;
          inset: 0;
          background: rgba(5,5,5,0.8);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          z-index: 40;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.42s, visibility 0.42s;
          display: flex;
          flex-direction: column;
          padding: calc(100 * var(--u)) calc(24 * var(--u));
        }
        .cinematic-stage.is-open .cinematic-menu {
          opacity: 1;
          visibility: visible;
        }
        .cinematic-menu-inner {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .cinematic-menu-eyebrow {
          font-size: calc(14 * var(--u));
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: calc(40 * var(--u));
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.4s 0.06s;
        }
        .cinematic-menu-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: calc(24 * var(--u));
        }
        .cinematic-menu-list a {
          font-size: max(calc(31 * var(--u)), 25px);
          color: #fff;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.4s;
        }
        .cinematic-menu-list a::after {
          content: "›";
          font-size: 1.2em;
          color: var(--muted);
        }
        .cinematic-stage.is-open .cinematic-menu-eyebrow { opacity: 1; transform: none; }
        .cinematic-stage.is-open .cinematic-menu-list li:nth-child(1) a { opacity: 1; transform: none; transition-delay: 0.10s; }
        .cinematic-stage.is-open .cinematic-menu-list li:nth-child(2) a { opacity: 1; transform: none; transition-delay: 0.16s; }
        .cinematic-stage.is-open .cinematic-menu-list li:nth-child(3) a { opacity: 1; transform: none; transition-delay: 0.22s; }
        .cinematic-stage.is-open .cinematic-menu-list li:nth-child(4) a { opacity: 1; transform: none; transition-delay: 0.28s; }

        .cinematic-menu-foot {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: calc(16 * var(--u));
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.4s 0.34s;
        }
        .cinematic-stage.is-open .cinematic-menu-foot { opacity: 1; transform: none; }

        /* Animations */
        @keyframes cinematic-rise {
          from { opacity: 0; transform: translateY(calc(14 * var(--u))); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes cinematic-riseNav {
          from { opacity: 0; transform: translate(-50%, calc(-50% + calc(14 * var(--u)))); }
          to   { opacity: 1; transform: translate(-50%, -50%); }
        }
        @keyframes cinematic-fade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .cinematic-brand, .cinematic-links, .cinematic-pill-nav, .cinematic-headline span, .cinematic-sub span, .cinematic-pill-cta, .cinematic-ghost, .cinematic-lg {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .cinematic-menu, .cinematic-menu-eyebrow, .cinematic-menu-list a, .cinematic-menu-foot {
            transition-duration: 0.001s !important;
            transition-delay: 0s !important;
          }
        }
      `}} />

      {/* Desktop Stage (LOCKED: >= 1024px) */}
      <div className={`cinematic-stage ${isOpen ? 'is-open' : ''} hidden lg:block`}>
        
        <div className="cinematic-plate">
          {/* Crisp primary video: Doorway portal, walking silhouette, and foreground rocky terrain */}
          <video 
            ref={videoRef}
            className="cinematic-plate-video" 
            muted 
            loop 
            playsInline 
            preload="none"
            aria-hidden="true"
          >
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260808_112712_da9d53df-6d27-4b12-bdf6-aa9dc2622bdf.mp4" type="video/mp4" />
          </video>

          {/* Volumetric light bloom emanating from portal toward left */}
          <div className="cinematic-ambient-bloom" />
        </div>

        <main className="cinematic-hero">
          <div id="hero-copy-block" className="cinematic-content will-change-transform">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/20 text-neutral-200 text-[11px] font-mono tracking-wider uppercase mb-3 sm:mb-4 shadow-sm backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
              <span>Full-Stack Web &amp; Autonomous AI</span>
            </div>

            <h1 className="cinematic-headline">
              <span className="cinematic-title-brand">Arclyn Studio</span> 
              <span className="cinematic-title-sub">Autonomous Web & AI Systems</span>
            </h1>

            <p className="cinematic-sub">
              Engineering bespoke digital platforms and autonomous AI systems.
            </p>

            <div className="cinematic-actions">
              <Link href="/contact" className="cinematic-pill-cta">
                <span>Start Your Project</span>
                <svg className="w-4 h-4 ml-1 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <a href="#project-showcase-section" className="cinematic-ghost">
                <span>Explore Live Systems</span>
                <span className="cinematic-ghost-arrow">↓</span>
              </a>
            </div>
          </div>
        </main>

        <div id="hero-logos-block" className="cinematic-logos will-change-transform">
          <div className="cinematic-logos-list">
            <div className="cinematic-lg">
              <svg viewBox="0 0 30 31" xmlns="http://www.w3.org/2000/svg">
                <mask id="bite"><rect width="30" height="31" fill="white"/><circle cx="19.5" cy="10.5" r="5.1" fill="black"/></mask>
                <rect width="24" height="24" x="0" y="3.5" fill="currentColor" mask="url(#bite)"/>
                <circle cx="19.5" cy="10.5" r="3.5" fill="currentColor"/>
              </svg>
              <span>MERIDIAN</span>
            </div>
            <div className="cinematic-lg">
              <svg viewBox="0 0 25 30" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="5" width="8" height="20" fill="currentColor"/>
                <path d="M12,15 a8,8 0 1,0 16,0 a8,8 0 1,0 -16,0" fill="currentColor"/>
              </svg>
              <span>STELLEX<span className="dot"></span></span>
            </div>
            <div className="cinematic-lg">
              <svg viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                <circle cx="14" cy="14" r="11" fill="none" stroke="currentColor" strokeWidth="3.1"/>
                <path d="M14 3 C 20 14, 8 14, 14 25" fill="none" stroke="currentColor" strokeWidth="3.1"/>
              </svg>
              <span>LUMINAR</span>
            </div>
            <div className="cinematic-lg">
              <svg viewBox="0 0 28 25.5" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12 Q 7 0, 14 12 T 28 12 L 28 25 L 0 25 Z" fill="currentColor"/>
                <path d="M0 6 Q 7 -6, 14 6 T 28 6" fill="none" stroke="currentColor" strokeWidth="2.5"/>
              </svg>
              <span>OVERLAND</span>
            </div>
          </div>
        </div>

      </div>

      {/* Mobile & Tablet Celestial Unified Glowing Portal Hero (< 1024px) */}
      <div className="block lg:hidden relative w-full h-[100dvh] bg-[#05020d] overflow-hidden flex flex-col justify-between pt-24 pb-6 px-4 sm:px-6 z-10 select-none">
        {/* Background Layer: Parallax Cosmic Nebulae */}
        <motion.div 
          style={{ y: cosmicNebulaY }}
          className="absolute inset-0 pointer-events-none"
        >
          {/* Deep celestial radial wash */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,_rgba(147,51,234,0.25)_0%,_rgba(88,28,135,0.14)_35%,_rgba(5,2,13,0.95)_80%)]" />
          
          {/* Subtle cosmic stardust particles */}
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#c084fc_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_45%,#000_70%,transparent_100%)]" />

          {/* Central subtle violet volumetric beam radiating upward */}
          <div className="absolute top-[28%] left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-purple-600/18 blur-3xl pointer-events-none" />
        </motion.div>

        {/* =========================================================================
            ONE UNIFIED CELESTIAL GLOW PORTAL & EVENT HORIZON RING (PARALLAX DEPTH)
            Merged into a single seamless, high-tech orbital design framing the hero.
            ========================================================================= */}
        <motion.div 
          style={{ scale: portalScale, y: portalY, opacity: portalOpacity }}
          className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] pointer-events-none z-10 flex items-center justify-center will-change-transform"
        >
          {/* Layer A: Atmospheric Backlight Glow Blooms */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-700/25 via-fuchsia-600/30 to-violet-500/20 blur-3xl" />
          <div className="absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] rounded-full bg-purple-500/30 blur-2xl" />

          {/* Layer B: Precision Celestial Vector Orbital Portal */}
          <svg 
            viewBox="0 0 320 320" 
            className="w-full h-full overflow-visible drop-shadow-[0_0_35px_rgba(192,132,252,0.85)]"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <radialGradient id="portalVoidGradMobile" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#05010a" stopOpacity="0.95" />
                <stop offset="65%" stopColor="#0a0316" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#2e0854" stopOpacity="0.2" />
              </radialGradient>
              <linearGradient id="portalRingGradMobile" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c084fc" stopOpacity="0.95" />
                <stop offset="35%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="70%" stopColor="#a855f7" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#6b21a8" stopOpacity="0.6" />
              </linearGradient>
              <filter id="portalGlowFilterMobile" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="6" result="blur1" />
                <feGaussianBlur stdDeviation="16" result="blur2" />
                <feMerge>
                  <feMergeNode in="blur2" />
                  <feMergeNode in="blur1" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Deep Obsidian Interior Void Disc */}
            <circle cx="160" cy="160" r="140" fill="url(#portalVoidGradMobile)" />

            {/* Outermost Soft Atmospheric Violet Halo */}
            <circle 
              cx="160" 
              cy="160" 
              r="142" 
              fill="none" 
              stroke="#a855f7" 
              strokeWidth="12" 
              opacity="0.4" 
              filter="url(#portalGlowFilterMobile)" 
            />

            {/* Concentric Telemetry Coordinate Rings */}
            <circle 
              cx="160" 
              cy="160" 
              r="136" 
              fill="none" 
              stroke="#e9d5ff" 
              strokeWidth="1" 
              strokeDasharray="4 8" 
              opacity="0.4" 
            />
            <circle 
              cx="160" 
              cy="160" 
              r="118" 
              fill="none" 
              stroke="#c084fc" 
              strokeWidth="0.75" 
              strokeDasharray="2 12" 
              opacity="0.3" 
            />

            {/* Brilliant White-to-Violet Luminous Perimeter Ring */}
            <circle 
              cx="160" 
              cy="160" 
              r="140" 
              fill="none" 
              stroke="url(#portalRingGradMobile)" 
              strokeWidth="3.2" 
              filter="url(#portalGlowFilterMobile)" 
            />

            {/* Soft Central Event Horizon Light Beam Streak */}
            <line 
              x1="20" 
              y1="160" 
              x2="300" 
              y2="160" 
              stroke="#ffffff" 
              strokeWidth="1.2" 
              strokeOpacity="0.75" 
              filter="url(#portalGlowFilterMobile)" 
            />
            <line 
              x1="40" 
              y1="160" 
              x2="280" 
              y2="160" 
              stroke="#c084fc" 
              strokeWidth="2.5" 
              strokeOpacity="0.4" 
              filter="url(#portalGlowFilterMobile)" 
            />
          </svg>
        </motion.div>

        {/* Content Stack: Centered & Framed by the Luminous Portal */}
        <motion.div 
          style={{ y: heroContentY, opacity: heroContentOpacity, scale: heroContentScale }}
          className="relative z-20 flex flex-col items-center text-center max-w-sm sm:max-w-md mx-auto my-auto pt-2 will-change-transform"
        >
          {/* Eyebrow Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-200 text-[11px] font-mono tracking-wider uppercase mb-4 backdrop-blur-xl shadow-[0_0_20px_rgba(168,85,247,0.25)]">
            <Sparkles className="w-3.5 h-3.5 text-purple-300 animate-pulse" />
            <span>Autonomous Web &amp; AI Systems</span>
          </div>

          {/* Hero Headline */}
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-[1.12] mb-3 drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]">
            Arclyn Studio
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-fuchsia-100 to-purple-300 font-bold mt-1 text-2xl sm:text-3xl">
              Autonomous Web &amp; AI
            </span>
          </h1>

          {/* Concise Subtitle */}
          <p className="text-sm sm:text-base text-purple-200/80 font-normal leading-relaxed max-w-xs sm:max-w-sm mb-6 drop-shadow-[0_1px_10px_rgba(0,0,0,0.8)]">
            Engineering bespoke digital platforms and autonomous AI systems built for measurable scale.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xs mx-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-3 rounded-full text-sm font-bold bg-white text-black hover:bg-slate-100 inline-flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(192,132,252,0.45)] active:scale-95 transition-all"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#production-showcase"
              onClick={(e) => {
                e.preventDefault();
                const nextSec = document.getElementById('production-showcase');
                if (nextSec) {
                  nextSec.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full sm:w-auto px-5 py-3 rounded-full text-sm font-medium text-white/90 bg-purple-950/50 hover:bg-purple-900/60 border border-purple-500/30 inline-flex items-center justify-center gap-1.5 backdrop-blur-md active:scale-95 transition-all cursor-pointer"
            >
              <span>Explore Systems</span>
              <span>↓</span>
            </a>
          </div>
        </motion.div>

        {/* Animated Scroll Prompt Indicator */}
        <motion.div 
          style={{ opacity: scrollIndicatorOpacity }}
          className="relative z-20 flex items-center justify-center gap-1.5 text-[10px] font-mono tracking-widest uppercase text-purple-300/70 pb-1"
        >
          <span>Scroll to explore</span>
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="inline-block"
          >
            ↓
          </motion.span>
        </motion.div>

        {/* Minimalist Client Marks at Bottom */}
        <div className="relative z-20 w-full pt-1 pb-1 flex items-center justify-center">
          <div className="flex items-center justify-center gap-5 sm:gap-7 opacity-50 text-purple-200/70 font-mono text-[10px] tracking-widest uppercase">
            <span>MERIDIAN</span>
            <span>STELLEX</span>
            <span>LUMINAR</span>
            <span>OVERLAND</span>
          </div>
        </div>

        {/* Seamless Bottom Gradient Fade into Next Section */}
        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#05020d] via-[#05020d]/75 to-transparent pointer-events-none z-15" />
      </div>
    </>
  );
};
