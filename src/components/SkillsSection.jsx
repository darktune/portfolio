import React from 'react';
import { skillsTaxonomy } from '../data/skills';
import { Terminal, Layers, Gamepad2, TrendingUp, Sparkles, Cpu } from 'lucide-react';

const iconMap = {
  Terminal,
  Layers,
  Gamepad2,
  TrendingUp,
  Sparkles,
  Cpu
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 max-w-7xl mx-auto px-6 sm:px-8 hairline-t">
      
      {/* Section Header */}
      <div className="space-y-4 mb-16 max-w-3xl">
        <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] uppercase tracking-wider">
          <Terminal size={14} />
          <span>08.0 // TECHNICAL SKILLS TAXONOMY</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-[var(--text-primary)]">
          Four Operational Domains
        </h2>
        <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
          A structured index of languages, protocols, spatial toolchains, and quantitative frameworks wielded with production rigor.
        </p>
      </div>

      {/* 4-Domain Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsTaxonomy.map((category, idx) => {
          const Icon = iconMap[category.icon] || Terminal;
          return (
            <div
              key={idx}
              className="bg-[var(--bg-surface)] hairline-all rounded-xl p-6 sm:p-8 space-y-6 shadow-sm"
            >
              <div className="flex items-center justify-between hairline-b pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-[var(--bg-subtle)] text-[var(--accent)] flex items-center justify-center">
                    <Icon size={16} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-[var(--text-primary)]">
                      {category.domain}
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono text-[var(--text-muted)] font-bold">{category.code}</span>
              </div>

              <p className="text-xs text-[var(--text-secondary)]">
                {category.description}
              </p>

              <div className="space-y-3">
                {category.items.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 rounded bg-[var(--bg-surface-raised)] hairline-all flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
                  >
                    <div>
                      <span className="font-mono font-bold text-[var(--text-primary)] mr-2">
                        {skill.name}
                      </span>
                      <span className="text-[11px] text-[var(--text-secondary)]">
                        · {skill.context}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-subtle)] text-[var(--accent)] font-semibold shrink-0">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
