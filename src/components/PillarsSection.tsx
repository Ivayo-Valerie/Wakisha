import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Zap, MessageSquare, TrendingUp, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/data/siteData';

const pillarIcons = {
  reliability: ShieldCheck,
  efficiency: Zap,
  communication: MessageSquare,
  scalability: TrendingUp,
};

export default function PillarsSection() {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative background grid and gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(#ea580c_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold tracking-widest uppercase mb-4">
            Proven Engineering Principles
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            WHY WORK WITH US
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Direct, no-nonsense answers to the questions that matter most to property owners, developers, and project leaders.
          </p>
        </div>

        {/* 2x2 Grid of the 4 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteConfig.pillars.map((pillar, index) => {
            const IconComponent = pillarIcons[pillar.id as keyof typeof pillarIcons] || ShieldCheck;
            return (
              <div
                key={pillar.id}
                className="relative group rounded-2xl bg-slate-800/80 border border-slate-700/80 p-8 hover:border-orange-500/50 hover:bg-slate-800 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                {/* Yellow accent block mimicking the PDF design */}
                <div className="absolute top-0 left-8 -translate-y-1/2 px-3 py-0.5 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider shadow-sm">
                  Pillar 0{index + 1}
                </div>

                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-black text-white group-hover:text-orange-400 transition-colors">
                      {pillar.title}
                    </h3>
                  </div>

                  {/* Question from PDF */}
                  <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-700 mb-4">
                    <div className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-1">
                      Client Concern:
                    </div>
                    <div className="text-slate-100 font-semibold italic text-base">
                      &ldquo;{pillar.question}&rdquo;
                    </div>
                  </div>

                  {/* Answer from PDF */}
                  <div className="space-y-2">
                    <div className="text-xs uppercase font-bold tracking-wider text-orange-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Our Direct Engineering Answer:
                    </div>
                    <p className="text-white font-medium text-lg leading-snug">
                      {pillar.answer}
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed pt-2 border-t border-slate-700/60">
                      {pillar.detail}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Consulting / Team Meeting Context Photo from Slide 6 */}
        <div className="mt-16 rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 p-8 lg:p-12 space-y-4">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              Nairobi Hub &amp; Regional Footprint
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Localized Expertise Coupled With A Centralized Capital Hub
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Wakisha is a premier engineering consultant company strategically headquartered in Nairobi, with an active footprint extending across Coast, Western, Central, and Eastern regions. Through localized field expertise and central engineering governance, we manage complex structural projects and provide expert technical consultancies nationwide.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-700/50">
                <div className="text-orange-400 font-black text-xl">2017</div>
                <div className="text-xs text-slate-400">Year Founded</div>
              </div>
              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-700/50">
                <div className="text-amber-400 font-black text-xl">4+ Regions</div>
                <div className="text-xs text-slate-400">Coast to Western</div>
              </div>
              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-700/50 col-span-2 sm:col-span-1">
                <div className="text-orange-400 font-black text-xl">100%</div>
                <div className="text-xs text-slate-400">Compliance Rate</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 h-72 sm:h-80 lg:h-full relative min-h-[300px] bg-slate-950">
            <Image
              src="/assets/engineering-analytics-meeting.png"
              alt="Wakisha Engineering Consulting Team reviewing analytics"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent lg:bg-gradient-to-r lg:from-slate-800 lg:via-transparent lg:to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
