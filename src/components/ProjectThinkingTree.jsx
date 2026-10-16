import React, { useState } from 'react';
import { Sparkles, Layers, Eye, Zap, Trophy, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function ProjectThinkingTree({ project }) {
  const [activeBranch, setActiveBranch] = useState('all'); // 'all' | 'backend' | 'frontend'

  if (!project || !project.thinkingTree) {
    return (
      <div className="p-6 rounded-2xl ios-glass-card text-center text-xs font-mono text-[var(--text-muted)]">
        Thinking process tree is being compiled for this project deployment.
      </div>
    );
  }

  const { root, branches, convergence, outcome } = project.thinkingTree;
  const backendBranch = branches?.find(b => b.id === 'backend');
  const frontendBranch = branches?.find(b => b.id === 'frontend');

  return (
    <div className="space-y-6 pt-1">
      
      {/* Top Banner: Mind & Beauty Manifesto */}
      <div className="p-4 sm:p-5 rounded-2xl ios-glass-card border border-[var(--border-subtle)] bg-gradient-to-br from-emerald-500/[0.04] via-transparent to-cyan-500/[0.04]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Thinking Process Flowchart · Systems to Visuals</span>
            </div>
            <p className="font-serif italic text-sm sm:text-base text-[var(--text-primary)]">
              “I have a good eye for beauty of the frontend and a bright mind for the layered architecture of the backend.”
            </p>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-mono ios-pill text-emerald-500 font-semibold self-start sm:self-auto shrink-0">
            <span>FDE & R&D Pipeline</span>
          </div>
        </div>
      </div>

      {/* The Visual Tree Container */}
      <div className="relative p-4 sm:p-6 rounded-3xl ios-glass-card border border-[var(--border-subtle)] space-y-6 overflow-hidden">
        
        {/* Subtle Background Circuit Grid */}
        <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08] bg-[radial-gradient(currentColor_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        {/* ======================================================== */}
        {/* ROOT NODE: 01 // Problem & Creative Spark */}
        {/* ======================================================== */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-full max-w-xl p-4 sm:p-5 rounded-2xl bg-[var(--bg-surface-elevated)] border border-amber-500/30 shadow-lg shadow-amber-500/5 group hover:border-amber-500/60 transition-all">
            <div className="flex items-center justify-between text-xs font-mono mb-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full ios-pill text-amber-500 font-bold bg-amber-500/10 border border-amber-500/20">
                <Sparkles size={12} />
                <span>STAGE {root.stage} // THE CREATIVE SPARK</span>
              </span>
              <span className="text-[11px] font-mono text-[var(--text-muted)]">{root.tag}</span>
            </div>
            <h4 className="text-base font-bold text-[var(--text-primary)] tracking-tight">
              {root.title}
            </h4>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">
              {root.description}
            </p>
          </div>

          {/* Stem Connector Down to Branch Fork */}
          <div className="w-0.5 h-8 bg-gradient-to-b from-amber-500 via-cyan-500 to-transparent my-1" />
          <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] px-3 py-0.5 rounded-full ios-pill border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)]">
            Branching Architecture & Aesthetic
          </div>
          <div className="w-0.5 h-6 bg-gradient-to-b from-transparent via-cyan-500/50 to-cyan-500 my-1" />
        </div>

        {/* ======================================================== */}
        {/* DUAL BRANCH SPLIT: Backend on Left, Frontend on Right */}
        {/* ======================================================== */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          
          {/* LEFT BRANCH: Layered Backend Architecture */}
          {backendBranch && (
            <div className="space-y-3.5 p-4 sm:p-5 rounded-2xl bg-[var(--bg-surface-elevated)] border border-cyan-500/30 shadow-md hover:border-cyan-500/60 transition-all flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full ios-pill text-cyan-500 font-bold bg-cyan-500/10 border border-cyan-500/20">
                    <Layers size={12} />
                    <span>LAYERED BACKEND MIND</span>
                  </span>
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">R&D Core</span>
                </div>
                <h5 className="text-sm font-bold text-[var(--text-primary)]">
                  {backendBranch.branchType}
                </h5>
                <p className="text-xs text-[var(--text-muted)] font-mono">
                  {backendBranch.subtitle}
                </p>
              </div>

              {/* Steps Inside Left Branch */}
              <div className="space-y-2.5 pt-2">
                {backendBranch.steps.map((step, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[var(--bg-subtle)] border border-[var(--border-subtle)] space-y-1">
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-cyan-400 font-semibold">{step.num} // {step.title}</span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] ios-pill text-[var(--text-muted)]">{step.tech}</span>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed pt-1">
                      {step.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-[10px] font-mono text-cyan-400">
                <span>Deterministic Logic Invariant</span>
                <span>Verified ✓</span>
              </div>
            </div>
          )}

          {/* RIGHT BRANCH: Frontend Beauty & Sensory UI */}
          {frontendBranch && (
            <div className="space-y-3.5 p-4 sm:p-5 rounded-2xl bg-[var(--bg-surface-elevated)] border border-emerald-500/30 shadow-md hover:border-emerald-500/60 transition-all flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full ios-pill text-emerald-500 font-bold bg-emerald-500/10 border border-emerald-500/20">
                    <Eye size={12} />
                    <span>FRONTEND BEAUTY EYE</span>
                  </span>
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">Sensory UI</span>
                </div>
                <h5 className="text-sm font-bold text-[var(--text-primary)]">
                  {frontendBranch.branchType}
                </h5>
                <p className="text-xs text-[var(--text-muted)] font-mono">
                  {frontendBranch.subtitle}
                </p>
              </div>

              {/* Steps Inside Right Branch */}
              <div className="space-y-2.5 pt-2">
                {frontendBranch.steps.map((step, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[var(--bg-subtle)] border border-[var(--border-subtle)] space-y-1">
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-emerald-400 font-semibold">{step.num} // {step.title}</span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] ios-pill text-[var(--text-muted)]">{step.tech}</span>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed pt-1">
                      {step.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-[10px] font-mono text-emerald-400">
                <span>Tactile Interaction Physics</span>
                <span>Crafted ✓</span>
              </div>
            </div>
          )}

        </div>

        {/* Stem Connector Down to Convergence Node */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-0.5 h-6 bg-gradient-to-b from-cyan-500/50 via-emerald-500 to-transparent my-1" />
          <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] px-3 py-0.5 rounded-full ios-pill border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)]">
            Synthesis & Rapid Execution
          </div>
          <div className="w-0.5 h-6 bg-gradient-to-b from-transparent via-emerald-500/50 to-emerald-500 my-1" />
        </div>

        {/* ======================================================== */}
        {/* CONVERGENCE NODE: 04 // Fast Shipping & Field Delivery */}
        {/* ======================================================== */}
        {convergence && (
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-full max-w-xl p-4 sm:p-5 rounded-2xl bg-[var(--bg-surface-elevated)] border border-emerald-500/40 shadow-lg shadow-emerald-500/5 group hover:border-emerald-500/70 transition-all">
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full ios-pill text-emerald-500 font-bold bg-emerald-500/10 border border-emerald-500/20">
                  <Zap size={12} />
                  <span>STAGE {convergence.stage} // FAST SHIPPING</span>
                </span>
                <span className="text-[11px] font-mono text-emerald-500 font-semibold">{convergence.tag}</span>
              </div>
              <h4 className="text-base font-bold text-[var(--text-primary)] tracking-tight">
                {convergence.title}
              </h4>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">
                {convergence.description}
              </p>
              <div className="mt-3 pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
                <span className="italic font-serif text-[var(--text-primary)]">“I like building my ideas and shipping fast.”</span>
                <span className="text-emerald-500">Live Ready</span>
              </div>
            </div>

            {/* Stem Connector Down to Outcome Node */}
            <div className="w-0.5 h-6 bg-gradient-to-b from-emerald-500 to-purple-500 my-1" />
          </div>
        )}

        {/* ======================================================== */}
        {/* OUTCOME NODE: 05 // Real World Impact & Future Evolution */}
        {/* ======================================================== */}
        {outcome && (
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-full max-w-xl p-4 sm:p-5 rounded-2xl bg-[var(--bg-surface-elevated)] border border-purple-500/40 shadow-lg shadow-purple-500/5 group hover:border-purple-500/70 transition-all">
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full ios-pill text-purple-400 font-bold bg-purple-500/10 border border-purple-500/20">
                  <Trophy size={12} />
                  <span>STAGE {outcome.stage} // FIELD IMPACT</span>
                </span>
                <span className="text-[11px] font-mono text-purple-400 font-semibold">{outcome.tag}</span>
              </div>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h4 className="text-base font-bold text-[var(--text-primary)] tracking-tight">
                    {outcome.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">
                    {outcome.detail}
                  </p>
                </div>
                {outcome.metric && (
                  <div className="shrink-0 p-3 rounded-xl ios-pill border border-purple-500/30 text-center">
                    <div className="text-[10px] font-mono text-[var(--text-muted)]">KEY METRIC</div>
                    <div className="text-sm font-bold text-purple-400 mt-0.5">{outcome.metric}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
