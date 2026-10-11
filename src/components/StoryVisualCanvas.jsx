import React from 'react';
import { Palette, ShieldCheck, Sparkles, ArrowUpRight, Cpu, Gamepad2, ArrowRight } from 'lucide-react';
import NorthStarEmblem from './NorthStarEmblem';

export default function StoryVisualCanvas() {
  return (
    <section id="story" className="py-16 max-w-7xl mx-auto px-6 sm:px-8 hairline-t">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div className="space-y-1">
          <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest block font-bold">
            01 // THE TRAJECTORY
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-[var(--text-primary)]">
            How The Dots Connect
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-mono text-[var(--text-secondary)] max-w-md sm:text-right">
          From 40-hour ink portraits at age 6 to decentralized virtual universes.
        </p>
      </div>

      {/* 3-Column Visual Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Act 1: The Ink (Age 6) */}
        <div className="ios-glass glow-border rounded-2xl p-6 sm:p-7 space-y-5 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-2.5 py-1 rounded-full bg-white/[0.06] text-[10px] font-mono font-bold text-[var(--text-primary)] hairline-all">
                GENESIS // AGE 06
              </span>
              <Palette size={18} className="text-[var(--text-primary)] transition-transform group-hover:rotate-12" />
            </div>

            <h3 className="font-heading font-bold text-xl text-[var(--text-primary)] mb-2">
              The Ink Discipline
            </h3>

            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              Drawing was my first language. Handcrafting pointillism ink portraits where <strong className="text-[var(--text-primary)]">one errant dot ruins 40 hours</strong> of work.
            </p>
          </div>

          <div className="hairline-t pt-4 space-y-2">
            <div className="p-3 rounded-xl bg-black/30 hairline-all flex items-center justify-between text-xs font-mono">
              <span className="text-[10px] text-[var(--text-muted)] uppercase">NATIONAL EXHIBITION</span>
              <span className="font-bold text-[var(--text-primary)]">Spectrum Ori Art</span>
            </div>
            <span className="text-[10px] font-mono text-[var(--text-muted)] block text-center">
              Zero-error patience $\rightarrow$ zero-bug code
            </span>
          </div>
        </div>

        {/* Act 2: The Code (GameFi) */}
        <div className="ios-glass glow-border rounded-2xl p-6 sm:p-7 space-y-5 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-2.5 py-1 rounded-full bg-white/[0.06] text-[10px] font-mono font-bold text-[var(--text-primary)] hairline-all">
                MISSION // GAMEFI
              </span>
              <ShieldCheck size={18} className="text-[var(--text-primary)] transition-transform group-hover:scale-110" />
            </div>

            <h3 className="font-heading font-bold text-xl text-[var(--text-primary)] mb-2">
              Economies in 2 Clicks
            </h3>

            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              Learnt raw Yul inline assembly and distributed systems so gamers can <strong className="text-[var(--text-primary)]">earn sustainable income from game loops</strong> with zero DeFi complexity.
            </p>
          </div>

          <div className="hairline-t pt-4 space-y-2">
            <div className="p-3 rounded-xl bg-black/30 hairline-all flex items-center justify-between text-xs font-mono">
              <span className="text-[10px] text-[var(--text-muted)] uppercase">GAS OPTIMIZATION</span>
              <span className="font-bold text-[var(--text-primary)]">-38% Yul Assembly</span>
            </div>
            <span className="text-[10px] font-mono text-[var(--text-muted)] block text-center">
              BSc CS Thesis Flagship · D-MEX Protocol
            </span>
          </div>
        </div>

        {/* Act 3: The OASIS (Ready Player One) */}
        <div className="ios-glass glow-border rounded-2xl p-6 sm:p-7 space-y-5 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-2.5 py-1 rounded-full bg-white/[0.06] text-[10px] font-mono font-bold text-[var(--text-primary)] hairline-all">
                THE NORTH STAR
              </span>
              <Sparkles size={18} className="text-[var(--text-primary)] animate-pulse" />
            </div>

            <h3 className="font-heading font-bold text-xl text-[var(--text-primary)] mb-2">
              Building The OASIS
            </h3>

            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              The ultimate dream: a living <strong className="text-[var(--text-primary)]">Ready Player One spatial universe</strong> uniting deterministic AI bouncers, on-chain liquidity, and UE5 physics.
            </p>
          </div>

          <div className="hairline-t pt-4 space-y-2">
            <div className="p-3 rounded-xl bg-black/30 hairline-all flex items-center justify-between text-xs font-mono">
              <span className="text-[10px] text-[var(--text-muted)] uppercase">SYNTHESIS</span>
              <span className="font-bold text-[var(--text-primary)]">CivOS + D-MEX + 3D</span>
            </div>
            <span className="text-[10px] font-mono text-[var(--text-muted)] block text-center">
              One evolving body of work
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
