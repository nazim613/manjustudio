'use client';

import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#1A1918]">
      
      {/* 1. Full-Width Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Desktop Video (16:9 widescreen) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-desktop.mp4" type="video/mp4" />
        </video>

        {/* Mobile Video (9:16 vertical) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="block md:hidden absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-mobile.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 2. Cinematic Gradient & Glass Overlays for High Legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/65 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/50 pointer-events-none" />

      {/* 3. Text & Content Layer Over Video */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 flex flex-col items-center justify-center">
        
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full border border-white/25 bg-black/40 backdrop-blur-md shadow-lg animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-[#E5A885] animate-pulse" />
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#F3EFE6] font-medium">
            Interiors • Furniture • Turnkey Design
          </span>
        </div>

        {/* Main Brand Typography */}
        <div className="space-y-1 mb-6">
          <h2 className="font-serif italic text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#EAE6DF] tracking-wide drop-shadow-md">
            Studio
          </h2>
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-[0.14em] text-white uppercase drop-shadow-2xl">
            KINTSUGI
          </h1>
        </div>

        {/* Brand Philosophy Subtext */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/90 leading-relaxed font-light mb-10 drop-shadow">
          We believe every space holds the potential to become something beautiful. Inspired by Kintsugi, we transform imperfections into timeless design.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link
            href="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-[#1A1918] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#F2EFE9] hover:scale-105 shadow-2xl transition-all duration-300"
          >
            View Projects
          </Link>
          <a
            href="https://wa.link/hb34lu"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/80 text-white text-xs font-semibold uppercase tracking-[0.2em] bg-white/10 backdrop-blur-md hover:bg-white hover:text-[#1A1918] shadow-lg transition-all duration-300"
          >
            Book Consultation
          </a>
        </div>

      </div>

      {/* 4. Subtle Bottom Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/60 pointer-events-none animate-bounce">
        <span className="text-[9px] uppercase tracking-[0.25em] font-light">Scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

    </section>
  );
}
