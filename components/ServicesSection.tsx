'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SERVICES = [
  {
    id: 'residential',
    num: '01',
    title: 'Residential Design',
    category: 'Villas • Penthouses • Living',
    description:
      'Custom interior architecture for private residences, balancing organic textures, calm proportions, and personal lifestyle.',
    image: '/images/service_residential.png',
    features: ['Spatial Planning', 'Custom Joinery', 'Atmospheric Lighting'],
    href: '/services',
  },
  {
    id: 'commercial',
    num: '02',
    title: 'Commercial Design',
    category: 'Offices • Cafes • Hospitality',
    description:
      'Immersive commercial spaces, boutique workspaces, and restaurants engineered to amplify brand prestige and customer flow.',
    image: '/images/service_commercial.png',
    features: ['Brand Experience', 'Acoustic Architecture', 'Ergonomic Flow'],
    href: '/services',
  },
  {
    id: 'turnkey',
    num: '03',
    title: 'Turnkey Solutions',
    category: 'Full Design & Build Delivery',
    description:
      'End-to-end execution managing architectural civil works, precision carpentry, material procurement, and final handover.',
    image: '/images/service_turnkey.png',
    features: ['Single-Point Ownership', 'Material Curation', 'Quality Assurance'],
    href: '/services',
  },
  {
    id: 'consultation',
    num: '04',
    title: 'Online Consultation',
    category: 'Virtual 3D • Global Advisory',
    description:
      'Expert remote spatial guidance, photorealistic 3D architectural renders, and curated specifications for clients globally.',
    image: '/images/service_consultation.png',
    features: ['3D Photorealism', 'Material Spec Sheets', 'Virtual Walkthrough'],
    href: '/services',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#FBF9F5] border-b border-[#EAE6DF] relative overflow-hidden">
      
      {/* Subtle Architectural Grid Lines in Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#EAE6DF_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#DFD9CF] bg-white/80 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A76D58]" />
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#A76D58]">
                Capabilities & Scope
              </span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#1A1918] tracking-tight">
              OUR SERVICES
            </h2>

            <p className="text-base sm:text-lg text-[#55524E] leading-relaxed font-light">
              From spatial drafting and 3D visualization to turnkey architectural execution, we craft spaces that harmonize aesthetics, functional warmth, and longevity.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#1A1918] hover:text-[#A76D58] transition-colors group flex-shrink-0"
          >
            <span>Explore All Capabilities</span>
            <span className="w-8 h-8 rounded-full border border-[#1A1918]/20 flex items-center justify-center group-hover:border-[#A76D58] group-hover:bg-[#A76D58] group-hover:text-white transition-all duration-300">
              <svg className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Link>
        </div>

        {/* 4 Architectural Monograph Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group relative aspect-[3/4.2] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 flex flex-col justify-between p-6 sm:p-7 border border-[#EAE6DF]/80 hover:border-[#C5A880]/60 transform hover:-translate-y-1.5"
            >
              {/* Full-Bleed Architectural Photography */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out brightness-[0.88] group-hover:brightness-95"
              />

              {/* Multi-Stop Cinematic Vignette Overlays for Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/25 group-hover:via-black/30 transition-colors duration-500 pointer-events-none" />

              {/* Card Header: Number Pill & Category */}
              <div className="relative z-10 flex items-center justify-between w-full">
                <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[#E5A885] text-[11px] font-mono font-medium tracking-widest">
                  {service.num}
                </span>

                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/80 text-[9px] uppercase tracking-[0.2em] font-light">
                  {service.category.split('•')[0].trim()}
                </span>
              </div>

              {/* Card Bottom: Title, Description, Micro-Tags & CTA */}
              <div className="relative z-10 space-y-3">
                
                {/* Category Full Line */}
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#E5A885] font-medium block">
                  {service.category}
                </span>

                {/* Title */}
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal tracking-wide group-hover:text-[#FBF9F5] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light line-clamp-3">
                  {service.description}
                </p>

                {/* Key Deliverables Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {service.features.map((feat) => (
                    <span
                      key={feat}
                      className="text-[9px] px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-sm text-white/70 border border-white/10 font-light"
                    >
                      {feat}
                    </span>
                  ))}
                </div>

                {/* Action CTA */}
                <div className="pt-3 border-t border-white/15 flex items-center justify-between text-white/90 group-hover:text-white transition-colors">
                  <span className="text-[11px] uppercase tracking-[0.2em] font-medium">
                    Learn Details
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-white group-hover:text-[#121110] border border-white/25 flex items-center justify-center transition-all duration-300">
                    <svg
                      className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
