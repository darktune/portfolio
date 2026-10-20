import React from 'react';
import { ArrowUpRight, Cpu, ShieldCheck, TrendingUp, Sparkles, Layers, FileText } from 'lucide-react';
import { GithubIcon } from './Icons';
import ProjectLogo from './ProjectLogo';
import { projectsData } from '../data/projects';

export default function FlagshipBento({ onOpenCaseStudy }) {
  const flagships = projectsData.filter(p => p.featured).slice(0, 3);

  const iconMap = {
    civos: Cpu,
    dmex: ShieldCheck,
    stelcera: TrendingUp
  };

  return (
    <section id="work" className="py-16 max-w-7xl mx-auto px-6 sm:px-8 hairline-t">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div className="space-y-1">
          <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest block font-bold">
            02 // THE BUILDS
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-[var(--text-primary)]">
            Core Architectures
          </h2>
        </div>
        <span className="text-xs font-mono text-[var(--text-secondary)]">
          3 Production Systems · 0% Fluff
        </span>
      </div>

      {/* Flagship Bento Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {flagships.map((project) => {
          const Icon = iconMap[project.id] || Cpu;
          return (
            <article
              key={project.id}
              data-cursor="project"
              className="ios-glass glow-border rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 group hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.06] text-[10px] font-mono font-bold text-[var(--text-primary)] hairline-all">
                    <Icon size={12} className="transition-transform group-hover:rotate-12" />
                    <span>{project.badge}</span>
                  </span>
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">
                    {project.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-extrabold text-2xl text-[var(--text-primary)] mb-1 group-hover:text-[var(--text-secondary)] transition-colors inline-flex items-center gap-2.5 flex-wrap">
                  <span className="w-7 h-7 rounded-lg ios-pill flex items-center justify-center p-1 shrink-0 border border-zinc-200/80 dark:border-zinc-800 shadow-xs">
                    <ProjectLogo project={project} size={18} />
                  </span>
                  <span>{project.title}</span>
                </h3>
                <p className="font-mono text-xs text-[var(--text-muted)] mb-3">
                  // {project.subtitle}
                </p>

                {/* 1-Line Pitch */}
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                  {project.summary}
                </p>

                {/* Quantified Metrics Highlight */}
                {project.metrics && (
                  <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-black/30 hairline-all text-xs font-mono mb-4">
                    {project.metrics.slice(0, 2).map((m, mIdx) => (
                      <div key={mIdx}>
                        <span className="text-[9px] text-[var(--text-muted)] block uppercase">{m.label}</span>
                        <span className="font-bold text-[var(--text-primary)] text-sm">{m.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer Actions */}
              <div className="hairline-t pt-4 flex items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1">
                  {project.techStack.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.05] text-[var(--text-secondary)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onOpenCaseStudy(project)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[var(--text-primary)] text-[var(--bg-primary)] font-mono text-xs font-bold hover:scale-105 active:scale-95 transition-all shadow-md group/btn"
                >
                  <span>CASE STUDY</span>
                  <ArrowUpRight size={13} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
