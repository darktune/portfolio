import React from 'react';
import { ExternalLink, ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function FinishedProjectCard({ project, onOpenDetails }) {
  return (
    <article className="group relative rounded-3xl ios-glass-card overflow-hidden flex flex-col justify-between">
      
      {/* Architectural Blueprint Header / Media Cover */}
      <div 
        onClick={() => onOpenDetails(project)}
        className="relative aspect-video w-full overflow-hidden bg-[var(--bg-subtle)] cursor-pointer group/cover border-b border-[var(--border-subtle)]"
      >
        {project.coverImage ? (
          <>
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover object-center transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-white bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                <Play size={12} className="fill-white" />
                <span>Inspect Blueprint & Code</span>
              </span>
            </div>
          </>
        ) : (
          <div className="relative w-full h-full flex flex-col justify-between p-5 overflow-hidden select-none">
            {/* Tech Grid Background Pattern */}
            <div className="absolute inset-0 opacity-[0.08] dark:opacity-[0.14] bg-[radial-gradient(currentColor_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
            
            {/* Top Row: System Code Badge & Category Tag */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-500 font-bold px-2.5 py-0.5 rounded-full ios-pill bg-emerald-500/10 border border-emerald-500/20">
                SYS // {project.code || '01'}
              </span>
              <span className="text-[10px] font-mono text-[var(--text-muted)] tracking-wider uppercase">
                {project.category}
              </span>
            </div>

            {/* Center: Monogram & System Schematic Focus */}
            <div className="relative z-10 my-auto py-1">
              <div className="text-base sm:text-lg font-bold font-mono tracking-tight text-[var(--text-primary)] group-hover/cover:text-emerald-400 transition-colors">
                {project.title}
              </div>
              <div className="text-[11px] font-mono text-[var(--text-muted)] mt-1 truncate">
                {project.techStack?.slice(0, 3).join(' · ')}
              </div>
            </div>

            {/* Bottom Row: Action trigger with Hairline Neon Glow */}
            <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-[var(--text-secondary)]">
              <span className="inline-flex items-center gap-1.5 group-hover/cover:text-[var(--text-primary)] transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>Inspect Architecture Spec</span>
              </span>
              <span className="text-emerald-500/90 group-hover/cover:translate-x-1 transition-transform">
                →
              </span>
            </div>

            {/* Subtle Neon Line Horizon */}
            <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-500/40 via-emerald-500/40 to-transparent" />
          </div>
        )}
      </div>

      {/* Content Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
        
        <div className="space-y-3.5">
          {/* Header Row: Circular Status Badge & Year */}
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full ios-pill text-[var(--badge-text)]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/70 shrink-0" />
              <span>{project.statusBadge}</span>
            </span>
            <span className="text-[var(--text-muted)]">{project.year}</span>
          </div>

          {/* Title & Subtitle */}
          <div>
            <h3 
              onClick={() => onOpenDetails(project)}
              className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)] hover:opacity-80 transition-opacity cursor-pointer inline-flex items-center gap-2 title-hover-physics"
            >
              <span>{project.title}</span>
              <div className="icon-hover-physics">
                <ArrowRight size={15} className="opacity-0 group-hover:opacity-100 -rotate-45" />
              </div>
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1.5 line-clamp-2 leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Finished Highlights */}
          <div className="pt-2 space-y-2.5">
            <div className="neon-divider-subtle mb-3" />
            <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)]">
              Verified Deliverables
            </div>
            <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
              {project.finishedHighlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 overflow-hidden">
                  <span className="text-emerald-500 font-bold mt-0.5 shrink-0">✓</span>
                  <span className="leading-snug truncate font-medium" title={highlight}>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section: Metrics & Actions */}
        <div className="space-y-4 pt-2">
          <div className="neon-divider-subtle mb-3" />
          {/* Metrics Pill Grid */}
          <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="p-2.5 rounded-2xl ios-pill">
                <div className="text-[10px] text-[var(--text-muted)] truncate">{metric.label}</div>
                <div className="font-bold text-[var(--text-primary)] mt-0.5 truncate">{metric.value}</div>
              </div>
            ))}
          </div>

          {/* Tech Stack Circular Pills */}
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 text-[11px] font-mono rounded-full ios-pill text-[var(--text-muted)]"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-2 py-1 text-[10px] font-mono rounded-full text-[var(--text-muted)]">
                +{project.techStack.length - 4} more
              </span>
            )}
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--text-primary)] hover:underline group/link"
                >
                  <span>Live Site</span>
                  <div className="icon-hover-physics">
                    <ExternalLink size={12} />
                  </div>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors group/link"
                >
                  <div className="icon-hover-physics">
                    <GithubIcon size={14} />
                  </div>
                  <span>Code</span>
                </a>
              )}
            </div>

            <button
              onClick={() => onOpenDetails(project)}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--text-primary)] hover:opacity-75 transition-opacity"
            >
              <span>Deep Dive</span>
              <div className="icon-hover-physics">
                <ArrowRight size={13} />
              </div>
            </button>
          </div>
        </div>

      </div>

    </article>
  );
}
