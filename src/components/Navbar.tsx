'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Mail, MapPin, Menu, X, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { siteConfig } from '@/data/siteData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white transition-all duration-200">
      {/* Top utility bar */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href={`tel:${siteConfig.phoneClean}`}
              className="flex items-center gap-1.5 hover:text-orange-400 transition-colors focus:outline-none focus:underline"
            >
              <Phone className="w-3.5 h-3.5 text-orange-500" />
              <span>{siteConfig.phone}</span>
            </a>
            <span className="hidden sm:inline text-slate-700">|</span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="hidden sm:flex items-center gap-1.5 hover:text-orange-400 transition-colors focus:outline-none focus:underline"
            >
              <Mail className="w-3.5 h-3.5 text-orange-500" />
              <span>{siteConfig.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-[11px] text-slate-400">
              <MapPin className="w-3 h-3 text-amber-500 shrink-0" />
              <span className="truncate max-w-[200px] sm:max-w-none">
                Nairobi HQ • Coast, Western, Central & Eastern
              </span>
            </div>
            <span className="hidden md:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 text-[10px] font-medium">
              <Zap className="w-3 h-3" /> Founded 2017
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div
        className={`w-full transition-all duration-200 ${
          isScrolled ? 'shadow-md py-3 bg-white/95 backdrop-blur-md' : 'py-4 bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <BrandLogo size="md" />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                    active
                      ? 'text-orange-600 bg-orange-50'
                      : 'text-slate-700 hover:text-orange-600 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold px-3 py-2 rounded-lg text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              WhatsApp Us
            </a>
            <Link
              href="/contact#quote"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold shadow-sm hover:shadow transition-all group"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/contact"
              className="px-3 py-1.5 rounded-lg bg-orange-600 text-white text-xs font-semibold"
            >
              Quote
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-lg text-base font-semibold flex items-center justify-between ${
                    active
                      ? 'text-orange-600 bg-orange-50 font-bold'
                      : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  {active && <span className="w-2 h-2 rounded-full bg-orange-600" />}
                </Link>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <Link
              href="/contact#quote"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-orange-600 text-white font-semibold text-sm shadow-md"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${siteConfig.phoneClean}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50"
            >
              <Phone className="w-4 h-4 text-orange-600" />
              <span>Call {siteConfig.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
