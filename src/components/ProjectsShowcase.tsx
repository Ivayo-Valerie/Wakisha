import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, CheckCircle, ExternalLink } from 'lucide-react';
import { projectsData } from '@/data/siteData';

interface ProjectsShowcaseProps {
  limit?: number;
  showTitle?: boolean;
}

export default function ProjectsShowcase({ limit, showTitle = true }: ProjectsShowcaseProps) {
  const displayedProjects = limit ? projectsData.slice(0, limit) : projectsData;

  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-3">
                Proven Track Record
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                SOME OF OUR COMPLETE PROJECTS
              </h2>
              <p className="mt-3 text-slate-600 text-base sm:text-lg">
                Explore real-world engineering installations delivered by Wakisha across urban and rural Kenya.
              </p>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-700 group shrink-0"
            >
              <span>View All Complete Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group ${
                idx === 0 && !limit ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                    {project.category}
                  </span>
                </div>

                {/* Location Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <div className="flex items-center gap-1.5 font-medium drop-shadow">
                    <MapPin className="w-3.5 h-3.5 text-orange-400" />
                    <span>{project.location}</span>
                  </div>
                  <span className="bg-amber-400/90 text-slate-950 px-2 py-0.5 rounded font-bold text-[10px]">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                    Key Deliverables:
                  </div>
                  <ul className="space-y-1.5">
                    {project.highlights.slice(0, 2).map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 pt-3 flex items-center justify-between text-xs font-bold text-orange-600">
                    <Link
                      href="/contact#quote"
                      className="hover:underline flex items-center gap-1"
                    >
                      <span>Inquire About Similar Project</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
