'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#1A1918] text-[#FBF9F5] border-t border-[#33312E] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Brand Banner */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-12 border-b border-[#2C2926] gap-6">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 flex-shrink-0 bg-white/5 rounded-full p-2">
              <Image
                src="/images/034_watermark2-1-e1767947751893-120x113.png"
                alt="Studio Kintsugi Logo"
                fill
                className="object-contain filter invert opacity-90"
              />
            </div>
            <div>
              <h3 className="font-serif text-2xl tracking-[0.2em] font-light text-[#FBF9F5]">
                STUDIO KINTSUGI
              </h3>
              <p className="text-xs tracking-[0.25em] text-[#C5A880] uppercase mt-1">
                SPACES CRAFTED WITH MEANING
              </p>
            </div>
          </div>

          <a
            href="https://wa.link/hb34lu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#C5A880] text-xs font-medium uppercase tracking-[0.2em] text-[#C5A880] hover:bg-[#C5A880] hover:text-[#1A1918] transition-all duration-300"
          >
            Book A Consultation
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* 4 Column Links & Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12 border-b border-[#2C2926]">
          
          {/* Col 1: Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-medium mb-5">
              EXPLORE
            </h4>
            <ul className="space-y-3 text-sm text-[#A09C94]">
              <li>
                <Link href="/about" className="hover:text-[#FBF9F5] transition-colors">
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#FBF9F5] transition-colors">
                  PROJECTS
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#FBF9F5] transition-colors">
                  SERVICES
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-[#FBF9F5] transition-colors">
                  SHOP
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#FBF9F5] transition-colors">
                  BLOG
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FBF9F5] transition-colors">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Contact Info */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-medium mb-5">
              CONTACT
            </h4>
            <div className="space-y-3 text-sm text-[#A09C94]">
              <p className="flex items-center gap-2">
                <span className="text-[#C5A880]">Phone:</span>
                <a href="tel:+917017881694" className="hover:text-[#FBF9F5] transition-colors">
                  +91 7017 881694
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#C5A880]">Email:</span>
                <a href="mailto:hello@studiokintsugi.in" className="hover:text-[#FBF9F5] transition-colors">
                  hello@studiokintsugi.in
                </a>
              </p>
              <p className="pt-2 text-xs leading-relaxed text-[#7A7670]">
                Dehradun, Uttarakhand, India
              </p>
            </div>
          </div>

          {/* Col 3: Studio Hours */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-medium mb-5">
              STUDIO HOURS
            </h4>
            <div className="space-y-2 text-sm text-[#A09C94]">
              <p className="text-white font-medium">Mon – Sat</p>
              <p>10:00 AM – 7:00 PM</p>
              <p className="text-xs text-[#C5A880] pt-2">By Appointment Only</p>
            </div>
          </div>

          {/* Col 4: Information & Social */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-medium mb-5">
              INFORMATION
            </h4>
            <ul className="space-y-3 text-sm text-[#A09C94] mb-6">
              <li>
                <a href="#" className="hover:text-[#FBF9F5] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FBF9F5] transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FBF9F5] transition-colors">
                  Design Process
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FBF9F5] transition-colors">
                  Consultation
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-4 text-[#A09C94]">
              <a
                href="https://instagram.com/studiokintsugi.design"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C5A880] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/studiokintsugi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C5A880] transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://pinterest.com/studiokintsugidesign"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C5A880] transition-colors"
                aria-label="Pinterest"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.357-.053.224-.174.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 12-5.373 12-12 0-6.628-5.393-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com/@Studiokintsugi.design"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C5A880] transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-[#7A7670] gap-4">
          <p>© 2026 STUDIO KINTSUGI. All rights reserved.</p>
          <p className="tracking-widest uppercase text-[10px] text-[#A09C94]">
            Crafted with precision & reverence for every detail
          </p>
        </div>

      </div>
    </footer>
  );
}
