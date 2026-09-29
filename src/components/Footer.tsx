import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, Zap, MessageCircle } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { siteConfig, servicesData } from '@/data/siteData';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      {/* Pre-footer Call to Action Banner (from PDF Slide 8) */}
      <div className="border-b border-slate-800 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 rounded-full bg-black/20 text-white text-xs font-bold uppercase tracking-wider mb-3">
                Power Transmission & Load Optimization
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
                LET&apos;S MAXIMIZE YOUR SYSTEM&apos;S POWER TRANSMISSION AND LOAD CAPACITY TOGETHER
              </h2>
              <p className="mt-2 text-orange-100 text-sm sm:text-base font-medium">
                Reach out to our certified engineering consultants for inspections, solar sizing, or turnkey electro-mechanical projects.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                href={`tel:${siteConfig.phoneClean}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-white text-sm font-bold shadow-lg transition-transform hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                <span>Call {siteConfig.phone}</span>
              </a>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-lg transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
              <Link
                href="/contact#quote"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 text-sm font-bold shadow-lg transition-transform hover:-translate-y-0.5"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 text-orange-600" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo variant="light" size="lg" />
            <p className="text-slate-400 text-sm leading-relaxed">
              Wakisha is a premier engineering consultant company founded in 2017, strategically headquartered in Nairobi with an operational footprint extending across the Coast, Western, Central, and Eastern regions of Kenya.
            </p>
            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-orange-500" />
                <span>Austrian BauKG &amp; FIDIC Standards Compliance</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-500" />
                <span>Zero Power Waste &amp; Circuit Optimization</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-white text-sm font-bold uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-orange-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-orange-400 transition-colors">Services Offered</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-orange-400 transition-colors">Complete Projects</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-400 transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link href="/sitemap.xml" className="hover:text-orange-400 transition-colors text-xs text-slate-500">Sitemap (XML)</Link>
              </li>
              <li>
                <Link href="/robots.txt" className="hover:text-orange-400 transition-colors text-xs text-slate-500">Robots.txt</Link>
              </li>
            </ul>
          </div>

          {/* Key Services */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-white text-sm font-bold uppercase tracking-wider">Core Services</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              {servicesData.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="hover:text-orange-400 transition-colors line-clamp-1"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-white text-sm font-bold uppercase tracking-wider">Contact &amp; Hubs</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200 block">Nairobi Headquarters</strong>
                  <span className="text-xs">With operational presence in Coast, Western, Central &amp; Eastern regions</span>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <a href={`tel:${siteConfig.phoneClean}`} className="hover:text-orange-400 transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-orange-400 transition-colors">
                  {siteConfig.email}
                </a>
              </li>
            </ul>

            <div className="pt-3 border-t border-slate-800 text-xs text-slate-400">
              <div className="font-semibold text-slate-300">Office Working Hours</div>
              <div>Monday - Friday: 8:00 AM - 5:30 PM</div>
              <div>Saturday: 8:30 AM - 2:00 PM</div>
              <div className="text-amber-400 font-medium mt-1">24/7 Rapid Emergency Response</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
            <span>•</span>
            <a href="/sitemap.xml" className="hover:text-orange-400 transition-colors">XML Sitemap</a>
            <span>•</span>
            <a href="/robots.txt" className="hover:text-orange-400 transition-colors">Robots.txt</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
