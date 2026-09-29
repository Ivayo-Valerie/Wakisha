import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import {
  Sun,
  ShieldAlert,
  Sliders,
  Briefcase,
  Lightbulb,
  Building2,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  FileCheck2,
  TrendingDown,
  Layers,
  Phone
} from 'lucide-react';
import { servicesData, siteConfig } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Services Offered | Wakisha Electrical Engineering & Sales Services',
  description:
    'Comprehensive engineering consultancy services: solar PV installations, electric fence security, home automation, FIDIC supervision, bank monitoring, BauKG safety coordination, and project control.',
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ea580c_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider mb-4">
            Full-Spectrum Engineering &amp; Management
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
            SERVICES OFFERED
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Delivering high-performance electrical, renewable energy, and project management solutions backed by international engineering standards.
          </p>
        </div>
      </section>

      {/* Services List / Cards */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesData.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-orange-500/40 relative"
              >
                {/* Service Number Tag */}
                <div className="absolute top-6 right-6 text-3xl font-black text-slate-100 group-hover:text-orange-100 transition-colors pointer-events-none select-none">
                  #{String(index + 1).padStart(2, '0')}
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                      {service.id === 'solar-renewable' && <Sun className="w-6 h-6" />}
                      {service.id === 'electric-fence-security' && <ShieldAlert className="w-6 h-6" />}
                      {service.id === 'home-automation' && <Sliders className="w-6 h-6" />}
                      {service.id === 'commercial-lighting' && <Lightbulb className="w-6 h-6" />}
                      {service.id === 'project-management' && <Briefcase className="w-6 h-6" />}
                      {service.id === 'site-supervision-control' && <Building2 className="w-6 h-6" />}
                      {service.id === 'monitoring-bank-audits' && <FileCheck2 className="w-6 h-6" />}
                      {service.id === 'master-planning-scheduling' && <Calendar className="w-6 h-6" />}
                      {service.id === 'due-diligence-audits' && <ShieldCheck className="w-6 h-6" />}
                      {service.id === 'fidic-baukg-compliance' && <Layers className="w-6 h-6" />}
                      {service.id === 'construction-economics' && <TrendingDown className="w-6 h-6" />}
                    </div>

                    <div>
                      <span className="text-[11px] font-bold text-orange-600 uppercase tracking-widest block">
                        Category: {service.category}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-orange-600 transition-colors leading-tight">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.fullDesc}
                  </p>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5">
                      Key Deliverables &amp; Scope:
                    </div>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}#quote`}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold shadow-sm transition-all"
                  >
                    <span>Request Quotation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={`tel:${siteConfig.phoneClean}`}
                    className="text-xs font-semibold text-slate-600 hover:text-orange-600 transition-colors flex items-center gap-1"
                  >
                    <Phone className="w-3.5 h-3.5 text-orange-500" />
                    <span>Inquire: {siteConfig.phone}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Building Facade / Construction Context Photo (from Slide 4) */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="lg:col-span-6 p-8 lg:p-12 space-y-5 text-white">
              <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider">
                Engineering Governance
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight">
                From Foundation Grounding To Final Grid Synchronization
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Whether erecting a multi-story commercial complex in Nairobi, an industrial solar plant, or border security infrastructure in Northern Kenya, Wakisha acts as your rigorous technical gatekeeper. We protect your capital, enforce safety, and ensure long-term energy reliability.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact#quote"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-sm font-bold shadow-lg transition-transform hover:-translate-y-0.5"
                >
                  <span>Book A Site Inspection / Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative h-72 sm:h-96 lg:h-[450px]">
              <Image
                src="/assets/construction-supervision.jpg"
                alt="Construction supervision and project monitoring by Wakisha"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
