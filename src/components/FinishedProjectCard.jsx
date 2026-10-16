import React from 'react';
import { ExternalLink, Layers, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function FinishedProjectCard({ project, onOpenDetails }) {
  return (
    <article className="group relative rounded-3xl ios-glass-card overflow-hidden flex flex-col justify-between border border-[var(--border-subtle)] hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-300">
      
      {/* Media Cover Showcase */}
      <div 
        onClick={() => onOpenDetails(project)}
        className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 cursor-pointer border-b border-[var(--border-subtle)]"
      >
        {project.coverImage ? (
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <div className="relative w-full h-full flex flex-col justify-between p-6 select-none bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950">
            <div className="text-xs font-mono tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">
              {project.category}
            </div>
            <div className="my-auto">
              <div className="text-xl font-bold font-mono text-zinc-900 dark:text-white">
                {project.title}
              </div>
              <div className="text-xs font-mono text-zinc-400 dark:text-zinc-500 mt-1">
                {project.techStack?.slice(0, 3).join(' · ')}
              </div>
            </div>
            <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 flex items-center justify-between">
              <span>Inspect Architecture</span>
              <span>→</span>
            </div>
          </div>
        )}
      </div>

      {/* Content Body: Minimalist, Breathable, Pure Typography */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
        
        <div className="space-y-3">
          {/* Category & Year: Clean Text Header Without Pill Bubbles */}
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400 dark:text-zinc-500 tracking-wider uppercase">
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>

          {/* Heading: Bold, Clear, High-Impact Typographic Anchor */}
          <div>
            <h3 
              onClick={() => onOpenDetails(project)}
              className="text-2xl font-extrabold tracking-tight text-zinc-950 dark:text-white hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors cursor-pointer inline-flex items-center gap-2"
            >
              <span>{project.title}</span>
              <ArrowUpRight size={18} className="text-zinc-400 dark:text-zinc-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </h3>
            
            {/* Clear, Human Subtitle: Simple Language With Cadence of Hope */}
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mt-2 line-clamp-2">
              {project.subtitle}
            </p>
          </div>

          {/* Clean Minimalist Tech Stack Line (Adeola Adeoti Reference Style) */}
          <div className="text-xs font-mono text-zinc-400 dark:text-zinc-500 tracking-wide pt-2">
            {project.techStack?.slice(0, 4).join(' · ')}
          </div>
        </div>

        {/* Clean Action Row */}
        <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-zinc-900 dark:text-white hover:underline"
              >
                <span>Live Site</span>
                <ExternalLink size={12} />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                <GithubIcon size={13} />
                <span>Code</span>
              </a>
            )}
          </div>

          {/* Deep Dive Action: Understandable Icon with alt text 'Deep Dive' */}
          <div className="relative group/tooltip flex items-center">
            <button
              type="button"
              onClick={() => onOpenDetails(project)}
              title="Deep Dive"
              aria-label="Deep Dive"
              className="p-1.5 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/80 transition-all active:scale-95 flex items-center justify-center border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700/60"
            >
              <Layers size={16} />
              <span className="sr-only">Deep Dive</span>
            </button>
            <div className="absolute right-0 bottom-full mb-1.5 opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none z-20 flex items-center px-2 py-1 rounded bg-zinc-950 text-white dark:bg-zinc-100 dark:text-zinc-950 text-[10px] font-mono tracking-wider whitespace-nowrap shadow-md">
              Deep Dive
            </div>
          </div>
        </div>

      </div>

    </article>
  );
}
