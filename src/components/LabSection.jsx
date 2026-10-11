import React from 'react';
import { labExperiments } from '../data/skills';
import { Beaker, ArrowUpRight, Sparkles } from 'lucide-react';

export default function LabSection() {
  return (
    <section id="lab" className="py-24 max-w-7xl mx-auto px-6 sm:px-8 hairline-t">
      
      {/* Section Header */}
      <div className="space-y-4 mb-16 max-w-3xl">
        <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] uppercase tracking-wider">
          <Beaker size={14} />
          <span>09.0 // THE EXPERIMENTAL LAB</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-[var(--text-primary)]">
          Prototypes, Algorithms & Research Notes
        </h2>
        <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
          Ideas too experimental, technical, or speculative for the flagship catalog. Unfinished work made intentional.
        </p>
      </div>

      {/* Grid of Experiments */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {labExperiments.map((exp) => (
          <div
            key={exp.id}
            className="group bg-[var(--bg-surface)] hairline-all rounded-xl p-6 sm:p-8 space-y-4 hover:border-[var(--border-strong)] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-mono text-[var(--accent)] uppercase font-semibold">
                  {exp.category}
                </span>
                <span className="text-xs font-mono text-[var(--text-muted)]">
                  {exp.date}
                </span>
              </div>

              <h3 className="font-heading font-bold text-xl text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                {exp.title}
              </h3>

              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed pt-2">
                {exp.desc}
              </p>
            </div>

            <div className="hairline-t pt-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {exp.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--bg-subtle)] text-[var(--text-secondary)]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <span className="text-[11px] font-mono text-[var(--text-muted)]">
                Active Research
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
