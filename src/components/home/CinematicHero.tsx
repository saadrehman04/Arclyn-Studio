'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export const CinematicHero: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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
            padding-left: clamp(20px, 5vw, 36px);
            padding-right: clamp(20px, 5vw, 36px);
            padding-top: max(80px, 11vh);
            padding-bottom: max(85px, 12vh);
            justify-content: flex-start;
          }
          .cinematic-content {
            max-width: 100%;
            z-index: 10;
          }
          .cinematic-headline {
            font-size: clamp(30px, 7vw, 48px);
            line-height: 1.1;
            margin-bottom: 12px;
          }
          .cinematic-sub {
            font-size: clamp(14px, 3.6vw, 16px);
            line-height: 1.5;
            max-width: 100%;
            margin-bottom: 22px;
            color: #d1d5db;
          }
          .cinematic-actions {
            width: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 12px;
          }
          .cinematic-pill-cta {
            min-height: 48px;
            padding: 0 24px;
            font-size: 15px;
          }
          .cinematic-ghost {
            min-height: 48px;
            padding: 0 20px;
            font-size: 15px;
          }
          .cinematic-plate-video {
            left: 52%;
            top: 50%;
            height: 100%;
            width: auto;
            opacity: 0.55;
          }
          .cinematic-plate::after {
            background: 
              linear-gradient(to bottom,
                rgba(5,5,5,0.85) 0%,
                rgba(5,5,5,0.38) 28%,
                rgba(5,5,5,0.32) 65%,
                rgba(5,5,5,0.92) 88%,
                #050505 100%),
              linear-gradient(to right,
                rgba(5,5,5,0.8) 0%,
                rgba(5,5,5,0.5) 60%,
                rgba(5,5,5,0.2) 100%);
          }
          .cinematic-logos {
            left: clamp(20px, 5vw, 36px);
            right: clamp(20px, 5vw, 36px);
            bottom: max(16px, 2.5vh);
          }
          .cinematic-logos-list {
            gap: 16px;
            justify-content: space-between;
            width: 100%;
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
            padding-top: max(75px, 10vh);
            padding-bottom: max(80px, 11vh);
          }
          .cinematic-headline {
            font-size: clamp(26px, 7.8vw, 34px);
            line-height: 1.15;
          }
          .cinematic-sub {
            font-size: 13.5px;
            margin-bottom: 18px;
          }
          .cinematic-actions {
            flex-direction: column;
            align-items: stretch;
            gap: 10px;
          }
          .cinematic-pill-cta, .cinematic-ghost {
            width: 100%;
            justify-content: center;
            min-height: 46px;
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
        }
        @keyframes cinematic-riseNav {
          from { opacity: 0; transform: translate(-50%, calc(-50% + calc(14 * var(--u)))); }
          to   { opacity: 1; transform: translate(-50%, -50%); }
        }
        @keyframes cinematic-fade {
          from { opacity: 0; }
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

      <div className={`cinematic-stage ${isOpen ? 'is-open' : ''}`}>
        
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
    </>
  );
};
