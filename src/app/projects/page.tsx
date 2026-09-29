'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin,
  CheckCircle,
  ArrowRight,
  Sun,
  ShieldAlert,
  Building2,
  Sliders,
  Sparkles,
  Phone
} from 'lucide-react';
import { projectsData, siteConfig } from '@/data/siteData';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Solar Energy',
    'Security Systems',
    'Hospitality',
    'Commercial & Retail',
    'Smart Automation',
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ea580c_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider mb-4">
            Proven Field Execution Across Kenya
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
            SOME OF OUR COMPLETE PROJECTS
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            From high-efficiency solar arrays in Utawala and perimeter fencing in Wajir to luxury retail lighting at Westgate Mall and Hayat Hotel suites.
          </p>
        </div>
      </section>

      {/* Filter Tabs & Gallery */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-orange-600 text-white shadow-md'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col group"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-white/20 text-white text-xs font-bold">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <div className="flex items-center gap-1.5 font-bold drop-shadow">
                      <MapPin className="w-4 h-4 text-orange-400" />
                      <span>{project.location}</span>
                    </div>
                    <span className="bg-amber-400 text-slate-950 px-2.5 py-1 rounded-md font-black text-[11px]">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="text-xs font-semibold text-slate-500 mb-1">
                      Client Sector: <span className="text-slate-800 font-bold">{project.client}</span>
                    </div>
                    <h2 className="text-2xl font-black text-slate-900 group-hover:text-orange-600 transition-colors mb-3">
                      {project.title}
                    </h2>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="pt-4 border-t border-slate-100">
                    <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                      Engineering Scope &amp; Results:
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/contact?project=${encodeURIComponent(project.title)}#quote`}
                      className="inline-flex items-center gap-2 text-xs font-bold text-orange-600 hover:text-orange-700"
                    >
                      <span>Inquire About Similar Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Supplementary Photo Gallery of Field Installations */}
          <div className="mt-20 pt-12 border-t border-slate-200">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">
                Site Documentation
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                Visual Inspection &amp; Installation Highlights
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md group">
                <Image
                  src="/assets/project-wajir-fence-2.jpg"
                  alt="Wajir electric fence detail"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 text-white text-xs font-bold">
                  Wajir Perimeter Security
                </div>
              </div>

              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md group">
                <Image
                  src="/assets/project-hayat-hotel-staircase.jpg"
                  alt="Hayat Hotel architectural staircase lighting"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 text-white text-xs font-bold">
                  Hayat Hotel Staircase Illumination
                </div>
              </div>

              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md group">
                <Image
                  src="/assets/project-erita-jewellery.jpg"
                  alt="Erita Jewellery showroom lighting"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 text-white text-xs font-bold">
                  Westgate Erita Jewellery
                </div>
              </div>

              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md group">
                <Image
                  src="/assets/project-utawala-solar.jpg"
                  alt="Utawala Solar PV rooftop installation"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 text-white text-xs font-bold">
                  Utawala Solar Arrays
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-black">
            Have A Project Requiring Specialized Engineering In Mind?
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            From power calculations to turnkey solar and electric fence setups, contact Wakisha for verified expertise at affordable rates.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/contact#quote"
              className="px-8 py-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2"
            >
              <span>Request A Free Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${siteConfig.phoneClean}`}
              className="px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-orange-400" />
              <span>Call {siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
