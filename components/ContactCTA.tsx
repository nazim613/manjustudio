'use client';

import React from 'react';
import Link from 'next/link';

export default function ContactCTA() {
  return (
    <section className="py-20 lg:py-28 bg-[#1A1918] text-[#FBF9F5] relative overflow-hidden">
      
      {/* Subtle gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#C5A880]/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#C5A880]">
          START YOUR JOURNEY
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#FBF9F5] leading-tight">
          Ready to Transform Your Space?
        </h2>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#A09C94] leading-relaxed font-light">
          Whether you have an architectural blueprint ready or simply a collection of inspirations, we’d love to understand your vision and bring it to life.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="https://wa.link/hb34lu"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#C5A880] text-[#1A1918] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#D4AF37] hover:shadow-lg transition-all duration-300"
          >
            Chat on WhatsApp
          </a>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/20 text-[#FBF9F5] text-xs font-medium uppercase tracking-[0.2em] hover:bg-white/10 transition-all duration-300"
          >
            Send An Inquiry
          </Link>
        </div>

        <div className="pt-8 flex flex-wrap items-center justify-center gap-8 text-xs text-[#7A7670] uppercase tracking-widest">
          <span>• Dehradun, India</span>
          <span>• +91 7017 881694</span>
          <span>• hello@studiokintsugi.in</span>
        </div>

      </div>
    </section>
  );
}
