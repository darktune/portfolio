import React from 'react';
import { ArrowUpRight, FileText, Cpu, ShieldCheck, Gamepad2, Box, Bot, TrendingUp, Palette } from 'lucide-react';
import { GithubIcon } from './Icons';

const categoryIconMap = {
  "Systems & Web3": ShieldCheck,
  "Games & 3D": Gamepad2,
  "AI & HCI": Bot,
  "Creative & Biz": Palette,
  "Default": Cpu
};

export default function ProjectCard({ project, onOpenCaseStudy }) {
  const isFlagship = project.featured;
  const CategoryIcon = categoryIconMap[project.category] || Cpu;

  if (isFlagship) {
    return (
      <article
        data-cursor="project"
        className="group bg-[var(--bg-surface)] hairline-all rounded-xl p-6 sm:p-8 shadow-sm hover:border-[var(--border-strong)] transition-all flex flex-col justify-between"
      >
        <div>
          {/* Top Pill & Category */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              {/* Motion-animated category badge with icon */}
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono font-bold bg-[var(--bg-subtle)] text-[var(--text-primary)] hairline-all group-hover:scale-105 transition-transform">
                <CategoryIcon size={13} className="transition-transform group-hover:rotate-12" />
                <span>{project.badge}</span>
              </span>
              <span className="text-xs font-mono text-[var(--text-muted)]">
                {project.code} // {project.category} · {project.year}
              </span>
            </div>
            <span className="text-[11px] font-mono text-[var(--text-secondary)] font-medium">
              {project.status}
            </span>
          </div>

          {/* Title & Subtitle */}
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[var(--text-primary)] mb-1 group-hover:text-[var(--text-secondary)] transition-colors">
            {project.title}
          </h3>
          <p className="font-mono text-xs text-[var(--text-muted)] mb-3">
            // {project.subtitle}
          </p>

          {/* 1-2 sentence rhythmic pitch summary */}
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 max-w-2xl">
            {project.summary}
          </p>

          {/* Clean Metrics Strip */}
          {project.metrics && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4 p-3 rounded bg-[var(--bg-surface-raised)] hairline-all text-xs font-mono">
              {project.metrics.map((m, mIdx) => (
                <div key={mIdx} className="space-y-0.5">
                  <span className="text-[var(--text-muted)] block text-[9px] uppercase">{m.label}</span>
                  <span className="font-bold text-[var(--text-primary)] text-xs sm:text-sm">{m.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer: Tech Stack & Actions */}
        <div className="hairline-t pt-4 flex flex-wrap items-center justify-between gap-3 mt-2">
          <div className="flex flex-wrap gap-1">
            {project.techStack.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded text-[11px] font-mono bg-[var(--bg-subtle)] text-[var(--text-secondary)]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View source on GitHub"
                className="p-2 rounded hairline-all bg-[var(--bg-surface-raised)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all hover:scale-105"
              >
                <GithubIcon size={14} />
              </a>
            )}

            <button
              onClick={() => onOpenCaseStudy(project)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[var(--text-primary)] text-[var(--bg-primary)] font-medium text-xs hover:opacity-90 hover:scale-105 active:scale-95 transition-all shadow-sm group/btn"
            >
              <FileText size={13} className="transition-transform group-hover/btn:-translate-y-0.5" />
              <span>Full Case Study</span>
              <ArrowUpRight size={13} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </article>
    );
  }

  // Standard Project Card
  return (
    <article
      data-cursor="project"
      className="group bg-[var(--bg-surface)] hairline-all rounded-xl p-5 shadow-sm hover:border-[var(--border-strong)] transition-all flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[var(--text-muted)] font-bold uppercase">
            <CategoryIcon size={11} className="transition-transform group-hover:scale-125" />
            <span>{project.badge || project.category}</span>
          </span>
          <span className="text-[10px] font-mono text-[var(--text-muted)]">
            {project.year}
          </span>
        </div>

        <h3 className="font-heading font-bold text-lg text-[var(--text-primary)] mb-1 group-hover:text-[var(--text-secondary)] transition-colors">
          {project.title}
        </h3>

        <p className="font-mono text-xs text-[var(--text-muted)] mb-2">
          // {project.subtitle}
        </p>

        <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">
          {project.summary}
        </p>
      </div>

      <div className="hairline-t pt-3 space-y-2">
        <div className="flex flex-wrap gap-1">
          {project.techStack.slice(0, 3).map((tech, i) => (
            <span
              key={i}
              className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-[var(--bg-subtle)] text-[var(--text-secondary)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-1">
          <span className="text-[10px] font-mono text-[var(--text-muted)]">
            {project.role}
          </span>

          <button
            onClick={() => onOpenCaseStudy(project)}
            className="inline-flex items-center gap-1 text-xs font-mono text-[var(--text-primary)] hover:underline font-semibold"
          >
            <span>CASE STUDY</span>
            <ArrowUpRight size={12} />
          </button>
        </div>
      </div>
    </article>
  );
}
