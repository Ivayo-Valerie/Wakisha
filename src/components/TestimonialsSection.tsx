import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { testimonialsData } from '@/data/siteData';

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-950 via-slate-950 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative ambient lights */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-3">
            Client Endorsements
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            TESTIMONIALS
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Hear from developers, project managers, and property owners who trusted Wakisha with their mission-critical electrical and structural systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item, idx) => (
            <div
              key={item.id}
              className="rounded-2xl bg-slate-900/80 border border-slate-800 p-8 shadow-xl hover:border-orange-500/40 transition-all flex flex-col justify-between group relative"
            >
              {/* Quote mark decoration */}
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center mb-6">
                <Quote className="w-5 h-5" />
              </div>

              {/* 5-star rating */}
              <div className="flex items-center gap-1 mb-4 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>

              {/* Quote Body from PDF */}
              <p className="text-slate-200 text-base italic leading-relaxed mb-6 font-normal">
                &ldquo;{item.quote}&rdquo;
              </p>

              {/* Client Info */}
              <div className="pt-6 border-t border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="font-bold text-white text-sm group-hover:text-orange-400 transition-colors">
                    {item.client}
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                </div>
                <div className="text-xs text-slate-400 mt-0.5">{item.role}</div>
                <div className="mt-2 text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-800 text-orange-300 inline-block">
                  Scope: {item.project}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
