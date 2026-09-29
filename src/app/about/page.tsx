import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  CheckCircle,
  MapPin,
  ShieldCheck,
  Zap,
  Award,
  ArrowRight,
  TrendingUp,
  Target,
  Users,
  Compass,
  FileText
} from 'lucide-react';
import { siteConfig } from '@/data/siteData';
import PillarsSection from '@/components/PillarsSection';

export const metadata: Metadata = {
  title: 'About Us | Wakisha Electrical Engineering & Sales Services',
  description:
    'Learn about Wakisha Electrical Engineering & Sales Services, founded in 2017 in Nairobi, Kenya. Premier engineering consultants operating across Coast, Western, Central, and Eastern regions.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ea580c_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider mb-4">
            Founded 2017 • Nairobi, Kenya
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
            ABOUT WAKISHA ELECTRICAL
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Delivering cutting-edge engineering consultancies, sustainable power infrastructure, and dependable project supervision across Kenya.
          </p>
        </div>
      </section>

      {/* Main Introduction Section (Slide 2) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 relative aspect-[4/5] bg-slate-900">
                <Image
                  src="/assets/solar-engineers-team.jpg"
                  alt="Wakisha engineers installing solar panel arrays"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

              {/* Floating Region Card */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-slate-950 text-white p-5 rounded-2xl shadow-2xl border border-slate-800 max-w-xs">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase mb-2">
                  <MapPin className="w-4 h-4" /> Nationwide Footprint
                </div>
                <div className="text-xs text-slate-300 space-y-1">
                  <div>• Coast Region (Mombasa &amp; Coastal Hubs)</div>
                  <div>• Western Region (Kisumu &amp; Rift Valley)</div>
                  <div>• Central Region (Kiambu &amp; Mt. Kenya)</div>
                  <div>• Eastern Region (Machakos &amp; Arid North)</div>
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider">
                Introduction
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                ABOUT THE WAKISHA ELECTRICAL ENGINEERING &amp; SALES SERVICES
              </h2>

              <div className="text-slate-700 text-base leading-relaxed space-y-4">
                <p className="text-lg font-medium text-slate-900 border-l-4 border-orange-500 pl-4 py-1 bg-orange-50/50 rounded-r-lg">
                  WAKISHA is an Engineering consultant company based in Nairobi, with presence in Coast and Western regions, Central and Eastern regions. WAKISHA is one of leading Engineering emphasis on Electrical Engineering works, founded in 2017.
                </p>

                <p>
                  Wakisha is a premier engineering consultant company strategically headquartered in Nairobi, with a robust operational footprint extending across the Coast, Western, Central, and Eastern regions. By establishing a strong presence in these key territories, the firm seamlessly delivers specialized engineering solutions tailored to both urban and rural environments throughout Kenya.
                </p>

                <p>
                  Their expansive geographical reach enables them to manage complex structural projects and provide expert technical consultancies, making them a trusted partner nationwide. Through localized expertise and a centralized hub in the capital, Wakisha effectively drives sustainable development and infrastructure growth across the diverse communities they serve.
                </p>
              </div>

              <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-2xl font-black text-orange-600">2017</div>
                  <div className="text-xs font-semibold text-slate-600 mt-1">Year Founded</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-2xl font-black text-amber-500">4+ Regions</div>
                  <div className="text-xs font-semibold text-slate-600 mt-1">Coast to Western</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 col-span-2 sm:col-span-1">
                  <div className="text-2xl font-black text-slate-900">FIDIC</div>
                  <div className="text-xs font-semibold text-slate-600 mt-1">Engineered Standards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION, VISION & CORE VALUES (Slide 3) */}
      <section className="py-20 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
              Strategic Foundation
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              UNDERSTANDING THE CLIENT’S NEEDS
            </h2>
            <p className="mt-3 text-slate-300 text-base sm:text-lg">
              Aligned with our corporate mandate: Mission, Vision, and Core Values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Mission Card */}
            <div className="rounded-2xl bg-slate-800 border border-slate-700 p-8 shadow-xl relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/30 text-orange-400 flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4">Our Mission</h3>
              <p className="text-xl font-semibold text-amber-400 leading-snug">
                &ldquo;To deliver cutting edge engineering services and be the leading engineering companies in Kenya.&rdquo;
              </p>
              <p className="mt-4 text-slate-300 text-sm leading-relaxed">
                We empower industries, commercial enterprises, and communities with reliable power infrastructure, uncompromising safety, and state-of-the-art technological systems.
              </p>
            </div>

            {/* Vision & Values Card */}
            <div className="rounded-2xl bg-slate-800 border border-slate-700 p-8 shadow-xl relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4">Our Vision &amp; Commitment</h3>
              <p className="text-xl font-semibold text-orange-400 leading-snug">
                &ldquo;To provide sustainable and appropriate technical solutions with Professionalism, thus ensuring value for all stakeholders.&rdquo;
              </p>
              <p className="mt-4 text-slate-300 text-sm leading-relaxed">
                By maintaining international engineering rigor and zero tolerance for circuit compromise, we guarantee investments deliver decades of optimal return.
              </p>
            </div>
          </div>

          {/* Core Values 4-Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.coreValues.map((val, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <div className="text-orange-400 font-black text-lg mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-400" />
                  <span>{val.title}</span>
                </div>
                <p className="text-slate-300 text-sm">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Standards & Austrian BauKG Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider">
                International Benchmark Rigor
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                FIDIC &amp; BauKG Construction Coordination Standards
              </h2>
              <p className="text-slate-700 text-base leading-relaxed">
                Wakisha applies international engineering standards for project supervision and risk mitigation. Our health and safety methodologies are modeled according to the <strong>Austrian Construction Work Coordination Act (BauKG)</strong>, ensuring that complex structural, electro-mechanical, and high-voltage works are executed with zero safety compromises.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <ShieldCheck className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block text-sm font-bold">BauKG Health &amp; Safety Planning</strong>
                    <span className="text-xs text-slate-600">Systematic hazard avoidance, site safety coordination, and worker protection protocols for heavy construction.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <FileText className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block text-sm font-bold">FIDIC Engineer Administration</strong>
                    <span className="text-xs text-slate-600">Fair, contractually sound project management protecting both project owners and contractor obligations without schedule slippage.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <Zap className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block text-sm font-bold">Circuit Optimization &amp; Loss Elimination</strong>
                    <span className="text-xs text-slate-600">Precision electrical calculations eliminate harmonic distortion, heat build-up, and phantom power waste.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/assets/construction-supervision.jpg"
                    alt="Wakisha site supervision and construction monitoring"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY WORK WITH US (Slide 6) */}
      <PillarsSection />

      {/* CTA Section */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-black text-slate-900">
            Partner With A Trusted Nationwide Engineering Leader
          </h2>
          <p className="text-slate-600 text-base">
            From urban commercial hubs to remote installations, Wakisha brings the technical competence, integrity, and safety compliance your project deserves.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/contact#quote"
              className="px-8 py-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2"
            >
              <span>Request Technical Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/projects"
              className="px-8 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-all"
            >
              View Complete Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
