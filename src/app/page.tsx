import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Phone,
  CheckCircle,
  Sun,
  ShieldAlert,
  Sliders,
  Briefcase,
  Lightbulb,
  Building2,
  Calendar,
  Sparkles,
  Award
} from 'lucide-react';
import { siteConfig, servicesData } from '@/data/siteData';
import PillarsSection from '@/components/PillarsSection';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactForm from '@/components/ContactForm';

export default function HomePage() {
  const featuredServices = servicesData.slice(0, 6);

  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative bg-slate-950 text-white overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24">
        {/* Background Gradients & Glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Hero Text */}
            <div className="lg:col-span-7 space-y-6">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Premier Engineering Consultants • Founded 2017</span>
              </div>

              {/* Headline from PDF Slide 1 */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white">
                WAKISHA <span className="text-orange-500">ELECTRICAL</span> ENGINEERING &amp; SALES SERVICES
              </h1>

              {/* Tagline from PDF Slide 1 in prominent yellow/gold styling */}
              <div className="p-4 sm:p-5 rounded-2xl bg-amber-400 text-slate-950 font-bold text-sm sm:text-base leading-snug shadow-lg border-l-8 border-orange-600">
                &ldquo;COMMITTED TO PROVIDING THE BEST POSSIBLE ENGINEERING EXPERTISE &amp; SERVICE TO ENSURE EFFECTIVE, EFFICIENT AND SUCCESSFUL PROJECTS AT AFFORDABLE PRICE&rdquo;
              </div>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                Strategically headquartered in Nairobi with an active operational footprint extending across the Coast, Western, Central, and Eastern regions of Kenya. We deliver specialized electrical, renewable solar, high-security fencing, and project supervision solutions for both urban and rural communities.
              </p>

              {/* CTA Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact#quote"
                  className="px-7 py-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-lg hover:shadow-orange-600/30 transition-all flex items-center gap-2 group"
                >
                  <span>Request Technical Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/projects"
                  className="px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-sm transition-all"
                >
                  Explore Complete Projects
                </Link>

                <a
                  href={`tel:${siteConfig.phoneClean}`}
                  className="inline-flex items-center gap-2 px-4 py-3 text-slate-300 hover:text-orange-400 text-sm font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4 text-orange-500" />
                  <span>Call {siteConfig.phone}</span>
                </a>
              </div>

              {/* Key Highlights */}
              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>FIDIC &amp; BauKG Certified</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>Zero Power Waste</span>
                </div>
                <div className="flex items-center gap-1.5 col-span-2 sm:col-span-1">
                  <CheckCircle className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>Nationwide Kenyan Coverage</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visuals */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Hero Creative Lamp Card (from Slide 1) */}
                <div className="relative rounded-2xl overflow-hidden border-2 border-slate-800 bg-slate-900 shadow-2xl group">
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src="/assets/hero-creative-lamp.jpg"
                      alt="Wakisha Electrical Engineering creative lighting and power concept"
                      fill
                      priority
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  </div>

                  {/* Floating Overlay Badge: Solar Team */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-800 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg relative overflow-hidden shrink-0 border border-orange-500/50">
                      <Image
                        src="/assets/solar-engineers-team.jpg"
                        alt="Wakisha Solar installation team"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-white text-xs font-bold leading-tight">
                        Utawala Solar &amp; Wajir Fencing
                      </div>
                      <div className="text-[11px] text-amber-400 font-medium">
                        Complete Turnkey Engineering Projects
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Accent Block */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-400 rounded-2xl -z-10 opacity-70 hidden sm:block" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK STATS STRIP */}
      <section className="bg-orange-600 text-white py-6 border-y border-orange-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-orange-500/50">
            <div className="pt-2 md:pt-0">
              <div className="text-3xl sm:text-4xl font-black">2017</div>
              <div className="text-xs sm:text-sm font-medium text-orange-100">Founded in Nairobi</div>
            </div>
            <div className="pt-2 md:pt-0">
              <div className="text-3xl sm:text-4xl font-black">4+</div>
              <div className="text-xs sm:text-sm font-medium text-orange-100">Regions Across Kenya</div>
            </div>
            <div className="pt-2 md:pt-0">
              <div className="text-3xl sm:text-4xl font-black">100%</div>
              <div className="text-xs sm:text-sm font-medium text-orange-100">Rigorous Testing Follow-Through</div>
            </div>
            <div className="pt-2 md:pt-0">
              <div className="text-3xl sm:text-4xl font-black">24/7</div>
              <div className="text-xs sm:text-sm font-medium text-orange-100">Consultancy &amp; Rapid Response</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT INTRODUCTION SECTION (Slide 2 & 3) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Side */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src="/assets/solar-engineers-team.jpg"
                    alt="Wakisha engineers installing solar panels on site"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>
              {/* Overlay Stat Pill */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-slate-900 text-white p-4 rounded-xl shadow-xl border border-slate-700 max-w-xs">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase mb-1">
                  <Award className="w-4 h-4" /> Nationwide Operations
                </div>
                <p className="text-xs text-slate-300">
                  Coast, Western, Central &amp; Eastern regions with Nairobi headquarters.
                </p>
              </div>
            </div>

            {/* Text Side */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider">
                Introduction &amp; Core Foundation
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                ABOUT THE WAKISHA ELECTRICAL ENGINEERING &amp; SALES SERVICES
              </h2>
              <div className="prose prose-slate text-slate-700 text-base leading-relaxed space-y-4">
                <p>
                  <strong>WAKISHA</strong> is an Engineering consultant company based in Nairobi, with presence in Coast and Western regions, Central and Eastern regions. WAKISHA is one of leading Engineering emphasis on Electrical Engineering works, founded in 2017.
                </p>
                <p>
                  Wakisha is a premier engineering consultant company strategically headquartered in Nairobi, with a robust operational footprint extending across the Coast, Western, Central, and Eastern regions. By establishing a strong presence in these key territories, the firm seamlessly delivers specialized engineering solutions tailored to both urban and rural environments throughout Kenya.
                </p>
                <p>
                  Their expansive geographical reach enables them to manage complex structural projects and provide expert technical consultancies, making them a trusted partner nationwide. Through localized expertise and a centralized hub in the capital, Wakisha effectively drives sustainable development and infrastructure growth across the diverse communities they serve.
                </p>
              </div>

              {/* Mission & Vision Callout (from Slide 3) */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="text-xs font-black uppercase tracking-wider text-orange-600 flex items-center gap-2">
                  <Zap className="w-4 h-4" /> Mission, Vision &amp; Core Values
                </h3>
                <div className="text-slate-900 font-bold text-base">
                  &ldquo;To deliver cutting edge engineering services and be the leading engineering companies in Kenya.&rdquo;
                </div>
                <div className="text-slate-600 text-sm">
                  &ldquo;To provide sustainable and appropriate technical solutions with Professionalism, thus ensuring value for all stakeholders.&rdquo;
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-700 group"
                >
                  <span>Read More About Our Company &amp; Leadership</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OFFERED OVERVIEW (Slide 4) */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-3">
              Comprehensive Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              SERVICES OFFERED
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              From high-voltage electrical installations and renewable solar arrays to FIDIC project management and Austrian BauKG safety compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-orange-500/50"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                    {service.id === 'solar-renewable' && <Sun className="w-6 h-6" />}
                    {service.id === 'electric-fence-security' && <ShieldAlert className="w-6 h-6" />}
                    {service.id === 'home-automation' && <Sliders className="w-6 h-6" />}
                    {service.id === 'commercial-lighting' && <Lightbulb className="w-6 h-6" />}
                    {service.id === 'project-management' && <Briefcase className="w-6 h-6" />}
                    {service.id === 'site-supervision-control' && <Building2 className="w-6 h-6" />}
                    {service.id === 'monitoring-bank-audits' && <Award className="w-6 h-6" />}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors mb-3">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400 capitalize">
                    {service.category}
                  </span>
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-orange-600 hover:text-orange-700"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold shadow-md transition-all"
            >
              <span>View All Engineering &amp; Management Services</span>
              <ArrowRight className="w-4 h-4 text-orange-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY WORK WITH US (Slide 6) */}
      <PillarsSection />

      {/* COMPLETE PROJECTS SHOWCASE (Slide 5) */}
      <ProjectsShowcase limit={3} />

      {/* TESTIMONIALS (Slide 7) */}
      <TestimonialsSection />

      {/* DIRECT INQUIRY & CONTACT SECTION (Slide 8 & 9) */}
      <section className="py-20 bg-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider">
                Get In Touch Today
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                LET&apos;S DISCUSS YOUR UPCOMING PROJECT
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Whether you need a full turnkey solar plant in Utawala, perimeter defense fencing in Wajir, or FIDIC engineering supervision, our team is equipped to deliver.
              </p>

              {/* Direct Info Cards */}
              <div className="space-y-4 pt-2">
                <a
                  href={`tel:${siteConfig.phoneClean}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-orange-500 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase">Direct Engineering Line</div>
                    <div className="text-base font-bold text-slate-900">{siteConfig.phone}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-orange-500 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase">Official Email</div>
                    <div className="text-base font-bold text-slate-900">{siteConfig.email}</div>
                  </div>
                </a>
              </div>

              {/* Handshake Image from Slide 8 */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg mt-6">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="/assets/business-handshake.jpg"
                    alt="Wakisha partnership and engineering consultation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
