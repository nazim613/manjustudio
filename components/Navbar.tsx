'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { name: 'ABOUT', href: '/about', num: '01' },
  { name: 'PROJECTS', href: '/projects', num: '02' },
  { name: 'SERVICES', href: '/services', num: '03' },
  { name: 'SHOP', href: '/shop', num: '04' },
  { name: 'POSTS', href: '/blog', num: '05' },
  { name: 'CONTACT', href: '/contact', num: '06' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Track scroll position to subtly expand/contract or add elevation to the island
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* ========================================================
          1. DYNAMIC ISLAND FLOATING NAVBAR (DESKTOP & MOBILE)
         ======================================================== */}
      <header className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-5xl pointer-events-none transition-all duration-500 ease-out">
        <nav
          className={`pointer-events-auto w-full rounded-full transition-all duration-500 ease-out ${
            scrolled
              ? 'bg-[#121110]/90 backdrop-blur-2xl border border-white/20 shadow-[0_12px_40px_rgba(0,0,0,0.45)] py-2 sm:py-2.5 px-4 sm:px-6'
              : 'bg-[#161514]/80 backdrop-blur-xl border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.35)] py-2.5 sm:py-3 px-4 sm:px-6'
          } relative flex items-center justify-between before:absolute before:inset-x-8 before:top-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent`}
        >
          {/* Left: Brand Logo & Title */}
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-3 group flex-shrink-0"
            aria-label="Studio Kintsugi Home"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-white/20 bg-white/5 flex-shrink-0 group-hover:border-[#E5A885] transition-colors duration-300">
              <Image
                src="/images/034_watermark2-1-e1767947751893-120x113.png"
                alt="Studio Kintsugi"
                fill
                className="object-contain p-1 group-hover:scale-110 transition-transform duration-300"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xs sm:text-sm tracking-[0.22em] font-medium text-white uppercase group-hover:text-[#F3EFE6] transition-colors">
                STUDIO KINTSUGI
              </span>
              <span className="text-[8px] sm:text-[9px] tracking-[0.28em] text-[#E5A885] uppercase -mt-0.5">
                INTERIORS • ARCHITECTURE
              </span>
            </div>
          </Link>

          {/* Center: Desktop Navigation Links (Pill Style) */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[11px] lg:text-xs uppercase tracking-[0.2em] font-medium px-3.5 py-1.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-white/15 text-white shadow-inner'
                      : 'text-white/75 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Consultation CTA Pill (Desktop) */}
            <a
              href="https://wa.link/hb34lu"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white text-[#121110] text-[11px] font-semibold uppercase tracking-[0.16em] hover:bg-[#F3EFE6] hover:scale-105 shadow-md transition-all duration-300"
            >
              <span>Consultation</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            {/* Mobile Menu Trigger Button (Dynamic Island Toggle) */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all duration-300 active:scale-95"
              aria-label="Open mobile navigation"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* ========================================================
          2. ANIMATED LEFT SLIDE-IN MOBILE DRAWER
         ======================================================== */}
      {/* Backdrop */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        className={`fixed inset-0 z-[60] bg-black/75 backdrop-blur-sm transition-opacity duration-500 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      {/* Drawer Panel (Slides smoothly from LEFT to RIGHT) */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-[70] w-[84%] max-w-sm h-full bg-[#121110] border-r border-white/10 flex flex-col justify-between p-6 sm:p-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          mobileMenuOpen
            ? 'translate-x-0 shadow-[20px_0_50px_rgba(0,0,0,0.8)] opacity-100 pointer-events-auto visible'
            : '-translate-x-full shadow-none opacity-0 pointer-events-none invisible'
        }`}
        aria-label="Mobile Navigation"
      >
        {/* Drawer Header */}
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5"
            >
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20 bg-white/5">
                <Image
                  src="/images/034_watermark2-1-e1767947751893-120x113.png"
                  alt="Studio Kintsugi"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xs tracking-[0.2em] font-medium text-white uppercase">
                  STUDIO KINTSUGI
                </span>
                <span className="text-[8px] tracking-[0.25em] text-[#E5A885] uppercase -mt-0.5">
                  DEHRADUN • NEW DELHI
                </span>
              </div>
            </Link>

            {/* Elegant Close Button ('X') */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-9 h-9 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white/80 hover:text-white transition-all duration-300"
              aria-label="Close navigation"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Staggered Navigation Links */}
          <nav className="mt-8 flex flex-col space-y-3">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`group flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-300 ${
                    isActive
                      ? 'bg-white/10 text-white font-medium pl-4 border-l-2 border-[#E5A885]'
                      : 'text-white/70 hover:text-white hover:bg-white/5 hover:pl-4'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] tracking-widest text-[#E5A885] font-mono">
                      {link.num}
                    </span>
                    <span className="text-sm font-serif uppercase tracking-[0.22em]">
                      {link.name}
                    </span>
                  </div>
                  <svg
                    className="w-4 h-4 text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Drawer Bottom Actions & Contacts */}
        <div className="pt-6 border-t border-white/10 space-y-4">
          {/* WhatsApp Direct Consultation */}
          <a
            href="https://wa.link/hb34lu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-white text-[#121110] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#F3EFE6] shadow-lg transition-all duration-300"
          >
            <span>Book Consultation</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          {/* Social Links & Info */}
          <div className="flex items-center justify-between px-2 pt-2 text-white/60 text-xs">
            <span className="text-[10px] tracking-widest uppercase text-white/40">Connect</span>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/studiokintsugi.design"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E5A885] transition-colors"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <span className="text-white/20">•</span>
              <a
                href="https://youtube.com/@Studiokintsugi.design"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E5A885] transition-colors"
                aria-label="YouTube"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
