'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: 'The Minimalist Sanctuary',
    category: 'Residential • Living & Lounge',
    location: 'Dehradun, Uttarakhand',
    image: '/images/transparent_1.png',
  },
  {
    id: 2,
    title: 'Contemporary Dining & Hearth',
    category: 'Residential • Dining & Kitchen',
    location: 'Mussoorie Hills',
    image: '/images/transparent_1_2.png',
  },
  {
    id: 3,
    title: 'Warm Terracotta Master Suite',
    category: 'Residential • Bedroom Suite',
    location: 'New Delhi Residence',
    image: '/images/transparent_1_3.png',
  },
  {
    id: 4,
    title: 'Executive Studio Workspace',
    category: 'Commercial • Creative Office',
    location: 'Dehradun Studio',
    image: '/images/transparent_1_4.png',
  },
  {
    id: 5,
    title: 'Boutique Hospitality Lounge',
    category: 'Commercial • Cafe & Lounge',
    location: 'Rishikesh Valley',
    image: '/images/transparent_1_5.png',
  },
  {
    id: 6,
    title: 'Artisan Bath & Powder Room',
    category: 'Residential • Luxury Bath',
    location: 'Private Villa',
    image: '/images/transparent_1_6.png',
  },
];

export default function ProjectsGallery() {
  return (
    <section className="py-20 lg:py-28 bg-[#EAE7E2] border-b border-[#DFDCD4] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#A76D58]">
              PORTFOLIO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1A1918] mt-2">
              FEATURED PROJECTS
            </h2>
            <p className="text-sm text-[#55524E] mt-2 max-w-xl font-light leading-relaxed">
              A curated selection of spaces reflecting thoughtful craftsmanship, balanced proportions, and customized materials.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center text-xs uppercase tracking-[0.2em] font-medium text-[#1A1918] hover:text-[#A76D58] transition-colors"
          >
            All Projects
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Seamless Moodboard Grid - No Box Borders, Blending Directly into #EAE7E2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {PORTFOLIO_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col transition-all duration-300"
            >
              {/* Image Container with seamless background */}
              <div className="relative aspect-[790/1024] w-full bg-transparent overflow-visible">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain transform group-hover:scale-[1.02] transition-transform duration-500 drop-shadow-sm"
                  priority={item.id <= 3}
                />
              </div>

              {/* Title & Metadata cleanly below the pinned board */}
              <div className="pt-3 text-center">
                <span className="text-[11px] uppercase tracking-widest text-[#A76D58] font-medium">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-normal text-[#1A1918] mt-0.5 group-hover:text-[#A76D58] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#7A7670] tracking-wider uppercase mt-0.5">
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
