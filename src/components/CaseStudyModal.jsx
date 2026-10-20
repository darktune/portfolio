import React, { useEffect } from 'react';
import { X, Cpu, CheckCircle2, AlertTriangle, Layers, Code2, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import ProjectLogo from './ProjectLogo';

export default function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.removeProperty('overflow');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;
  const cs = project.caseStudy;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Window */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[var(--bg-surface)] hairline-all rounded-xl shadow-2xl overflow-y-auto flex flex-col z-10">
        
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 bg-[var(--bg-surface)]/95 backdrop-blur-md hairline-b px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded text-xs font-mono font-semibold bg-[var(--bg-subtle)] text-[var(--text-primary)] hairline-all">
              {project.badge || project.category}
            </span>
            <span className="text-xs font-mono text-[var(--text-muted)]">
              {project.code || "01"} // {project.year} ARCHITECTURAL BLUEPRINT
            </span>
          </div>

          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded hairline-all text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                aria-label="GitHub Repository"
              >
                <GithubIcon size={16} />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded hairline-all text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)] transition-colors"
              aria-label="Close Case Study"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 space-y-10">
          
          {/* Title & Subtitle */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[var(--text-primary)] mb-2 inline-flex items-center gap-3 flex-wrap">
              <span className="w-9 h-9 rounded-xl ios-pill flex items-center justify-center p-1 shrink-0 border border-zinc-200/80 dark:border-zinc-800 shadow-xs">
                <ProjectLogo project={project} size={24} />
              </span>
              <span>{project.title}</span>
            </h2>
            <p className="font-mono text-sm sm:text-base text-[var(--text-secondary)]">
              // {project.subtitle}
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded bg-[var(--bg-surface-raised)] hairline-all text-xs font-mono">
            <div>
              <span className="text-[var(--text-muted)] block text-[10px]">ROLE</span>
              <span className="font-semibold text-[var(--text-primary)]">{project.role}</span>
            </div>
            <div>
              <span className="text-[var(--text-muted)] block text-[10px]">STATUS</span>
              <span className="font-semibold text-[var(--text-primary)]">{project.status}</span>
            </div>
            <div>
              <span className="text-[var(--text-muted)] block text-[10px]">CATEGORY</span>
              <span className="font-semibold text-[var(--text-primary)]">{project.category}</span>
            </div>
            <div>
              <span className="text-[var(--text-muted)] block text-[10px]">TIMELINE</span>
              <span className="font-semibold text-[var(--text-primary)]">{project.year}</span>
            </div>
          </div>

          {/* 01 // Overview */}
          {cs?.overview && (
            <div className="space-y-3">
              <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider block font-semibold">
                01 // EXECUTIVE CONTEXT & OBJECTIVE
              </span>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                {cs.overview}
              </p>
            </div>
          )}

          {/* 02 // Problem */}
          {cs?.problem && (
            <div className="p-5 sm:p-6 rounded bg-[var(--bg-surface-raised)] hairline-all space-y-2 border-l-2 border-l-[var(--border-strong)]">
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-primary)] font-semibold uppercase">
                <AlertTriangle size={15} />
                <span>02 // THE BOTTLENECK & TECHNICAL CHALLENGE</span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                {cs.problem}
              </p>
            </div>
          )}

          {/* 03 // Idea */}
          {cs?.idea && (
            <div className="space-y-3">
              <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider block font-semibold">
                03 // SYNTHESIS & ARCHITECTURAL APPROACH
              </span>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                {cs.idea}
              </p>
            </div>
          )}

          {/* 04 // Architecture Breakdown */}
          {cs?.architecture && (
            <div className="space-y-4">
              <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider block font-semibold">
                04 // SYSTEM ARCHITECTURE & TIER SPECIFICATION
              </span>

              <div className="space-y-3">
                {cs.architecture.map((item, idx) => (
                  <div key={idx} className="p-4 rounded bg-[var(--bg-surface-raised)] hairline-all text-xs">
                    <span className="font-mono font-bold text-[var(--text-primary)] block mb-1 text-sm">
                      {item.tier}
                    </span>
                    <p className="text-[var(--text-secondary)] leading-relaxed text-xs sm:text-sm">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 05 // Code Snippet */}
          {cs?.codeSnippet && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider font-semibold">
                <Code2 size={14} className="text-[var(--text-primary)]" />
                <span>05 // PRODUCTION CODE ARTIFACT</span>
              </div>
              <div className="p-4 sm:p-5 rounded bg-[#0a0a0a] text-[#f4f4f0] font-mono text-xs overflow-x-auto leading-relaxed border border-[var(--border-strong)]">
                <pre>{cs.codeSnippet}</pre>
              </div>
            </div>
          )}

          {/* 06 // Breakthrough & Result */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cs?.breakthrough && (
              <div className="p-5 rounded bg-[var(--bg-surface-raised)] hairline-all space-y-2 border-l-2 border-l-[var(--border-strong)]">
                <span className="text-xs font-mono text-[var(--text-primary)] font-semibold uppercase block">
                  06 // CORE BREAKTHROUGH
                </span>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {cs.breakthrough}
                </p>
              </div>
            )}

            {cs?.result && (
              <div className="p-5 rounded bg-[var(--bg-surface-raised)] hairline-all space-y-2 border-l-2 border-l-[var(--text-primary)]">
                <span className="text-xs font-mono text-[var(--text-primary)] font-semibold uppercase block">
                  07 // QUANTIFIED RESULT
                </span>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {cs.result}
                </p>
              </div>
            )}
          </div>

          {/* 08 // Lesson */}
          {cs?.lesson && (
            <div className="p-4 rounded bg-[var(--bg-subtle)]/40 hairline-all text-xs font-mono text-[var(--text-secondary)]">
              <span className="text-[var(--text-muted)] uppercase font-semibold block mb-1">08 // OPERATING LESSON</span>
              <p className="text-[var(--text-primary)] italic">"{cs.lesson}"</p>
            </div>
          )}

          {/* Tech Stack Footer */}
          <div className="hairline-t pt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech, i) => (
                <span key={i} className="px-2 py-1 rounded text-xs font-mono bg-[var(--bg-subtle)] text-[var(--text-secondary)]">
                  {tech}
                </span>
              ))}
            </div>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--text-primary)] font-bold hover:underline"
              >
                <span>OPEN REPOSITORY ON GITHUB</span>
                <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
