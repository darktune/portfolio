import React, { useState } from 'react';
import { disciplinesData, polymathCausalityMatrix } from '../data/disciplines';
import { Network, ArrowRight, Cpu, ShieldCheck, Gamepad2, Box, Sparkles, TrendingUp, Palette, Flame } from 'lucide-react';

const iconMap = {
  Cpu,
  ShieldCheck,
  Gamepad2,
  Box,
  Sparkles,
  TrendingUp,
  Palette,
  Activity: Flame
};

export default function PolymathSynthesis() {
  const [selectedDiscipline, setSelectedDiscipline] = useState(disciplinesData[0]);

  return (
    <section id="synthesis" className="py-20 max-w-7xl mx-auto px-6 sm:px-8 hairline-t">
      
      {/* Section Header */}
      <div className="space-y-3 mb-12 max-w-3xl">
        <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
          <Network size={14} className="text-[var(--text-primary)] animate-pulse" />
          <span>01.0 // THE SYNTHESIS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-[var(--text-primary)] leading-tight">
          "I don't scatter focus. <br className="hidden sm:inline" />
          <span className="text-[var(--text-secondary)] font-normal">I connect the dots."</span>
        </h2>
        <p className="text-sm sm:text-base text-[var(--text-secondary)] font-normal">
          How low-level systems, smart contract assembly, spatial physics, and fine art sharpen each other.
        </p>
      </div>

      {/* Grid: 8 Disciplines + Causality Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: 8 Disciplines with Animated Motion Icons */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {disciplinesData.map((item) => {
            const Icon = iconMap[item.icon] || Cpu;
            const isSelected = selectedDiscipline.id === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedDiscipline(item)}
                className={`group p-4 rounded-xl transition-all duration-200 cursor-pointer hairline-all flex items-start gap-3.5 ${
                  isSelected
                    ? 'bg-[var(--bg-surface-raised)] border-[var(--text-primary)] shadow-sm'
                    : 'bg-[var(--bg-surface)] hover:border-[var(--border-strong)]'
                }`}
              >
                {/* Motion-Animated Icon Container */}
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5 ${
                  isSelected
                    ? 'bg-[var(--text-primary)] text-[var(--bg-primary)]'
                    : 'bg-[var(--bg-subtle)] text-[var(--text-primary)]'
                }`}>
                  <Icon size={18} className={`transition-transform duration-300 ${isSelected ? 'scale-105' : 'group-hover:rotate-6'}`} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <h3 className="font-heading font-bold text-sm text-[var(--text-primary)] truncate">
                      {item.name}
                    </h3>
                    <span className="text-[9px] font-mono text-[var(--text-muted)] font-bold shrink-0">
                      {item.code}
                    </span>
                  </div>
                  <p className="text-[11px] text-[var(--text-secondary)] leading-tight line-clamp-2">
                    {item.tagline}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Synthesis Connective Box */}
        <div className="lg:col-span-5 bg-[var(--bg-surface)] hairline-all rounded-xl p-6 flex flex-col justify-between space-y-5">
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)] uppercase">
              <span>SELECTED DISCIPLINE</span>
              <span className="text-[var(--text-primary)] font-bold">{selectedDiscipline.code}</span>
            </div>
            <h3 className="font-heading font-bold text-xl text-[var(--text-primary)]">
              {selectedDiscipline.name}
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              {selectedDiscipline.description}
            </p>
          </div>

          {/* Cross-Domain Causality Map */}
          <div className="space-y-2.5 hairline-t pt-4">
            <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider block font-semibold">
              HOW FIELDS SHARPEN EACH OTHER
            </span>
            {polymathCausalityMatrix.map((syn, idx) => (
              <div key={idx} className="p-3 rounded bg-[var(--bg-surface-raised)] hairline-all text-xs space-y-1 group">
                <div className="flex items-center gap-2 font-mono text-[var(--text-primary)] font-semibold text-[11px]">
                  <span>{syn.from}</span>
                  <ArrowRight size={11} className="transition-transform group-hover:translate-x-1" />
                  <span>{syn.to}</span>
                </div>
                <p className="text-[var(--text-secondary)] leading-normal text-[11px]">
                  {syn.how}
                </p>
              </div>
            ))}
          </div>

          <div className="text-[10px] font-mono text-[var(--text-muted)] hairline-t pt-3 flex items-center justify-between">
            <span>Operating Formula:</span>
            <span className="text-[var(--text-primary)] font-bold">Rigor + Precision + Restraint</span>
          </div>
        </div>
      </div>
    </section>
  );
}
