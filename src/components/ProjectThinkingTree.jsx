import React from 'react';
import { Sparkles, Layers, Eye, Zap, Trophy } from 'lucide-react';

export default function ProjectThinkingTree({ project }) {
  if (!project || !project.thinkingTree) {
    return (
      <div className="p-8 text-center text-xs font-mono text-zinc-400 dark:text-zinc-500">
        Thinking process tree is being compiled for this project deployment.
      </div>
    );
  }

  const { root, branches, convergence, outcome } = project.thinkingTree;
  const backendBranch = branches?.find(b => b.id === 'backend');
  const frontendBranch = branches?.find(b => b.id === 'frontend');

  return (
    <div className="space-y-8 pt-2">
      
      {/* Top Banner: Proportional Quote & Intent */}
      <div className="p-5 sm:p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              Thinking Flowchart · Systems to Visuals
            </div>
            <p className="font-serif italic text-base sm:text-lg text-zinc-900 dark:text-white">
              “I have a good eye for beauty of the frontend and a bright mind for the layered architecture of the backend.”
            </p>
          </div>
          <div className="text-xs font-mono tracking-wider text-zinc-900 dark:text-white font-semibold uppercase self-start sm:self-auto shrink-0 border-b border-zinc-900 dark:border-white pb-0.5">
            FDE & R&D Process
          </div>
        </div>
      </div>

      {/* The Visual Tree Container */}
      <div className="space-y-8">
        
        {/* ======================================================== */}
        {/* ROOT NODE: 01 // Problem & Creative Spark */}
        {/* ======================================================== */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-2xl p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 dark:text-zinc-500">
              <span className="font-bold text-zinc-900 dark:text-white flex items-center gap-1.5 uppercase tracking-wider">
                <Sparkles size={13} />
                <span>Stage {root.stage} / The Creative Spark</span>
              </span>
              <span className="uppercase tracking-widest text-[11px]">{root.tag}</span>
            </div>
            <h4 className="text-lg font-bold text-zinc-950 dark:text-white pt-1">
              {root.title}
            </h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {root.description}
            </p>
          </div>

          {/* Stem Connector Down to Branch Fork */}
          <div className="w-px h-8 bg-zinc-300 dark:bg-zinc-700 my-1" />
          <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Branching Architecture & Craft
          </div>
          <div className="w-px h-6 bg-zinc-300 dark:bg-zinc-700 my-1" />
        </div>

        {/* ======================================================== */}
        {/* DUAL BRANCH SPLIT: Backend on Left, Frontend on Right */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          {/* LEFT BRANCH: Layered Backend Architecture */}
          {backendBranch && (
            <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 flex flex-col justify-between space-y-5">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 dark:text-zinc-500">
                  <span className="font-bold text-zinc-900 dark:text-white flex items-center gap-1.5 uppercase tracking-wider">
                    <Layers size={13} />
                    <span>Layered Backend Mind</span>
                  </span>
                  <span className="uppercase tracking-widest text-[11px]">R&D Core</span>
                </div>
                <h5 className="text-base font-bold text-zinc-950 dark:text-white">
                  {backendBranch.branchType}
                </h5>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                  {backendBranch.subtitle}
                </p>
              </div>

              {/* Steps Inside Left Branch */}
              <div className="space-y-3 pt-2">
                {backendBranch.steps.map((step, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-100 dark:border-zinc-800/80 space-y-1">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-zinc-900 dark:text-white font-semibold">{step.num} // {step.title}</span>
                      <span className="text-zinc-400 dark:text-zinc-500 text-[11px]">{step.tech}</span>
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed pt-1">
                      {step.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-400">
                <span>Deterministic Logic</span>
                <span className="text-zinc-900 dark:text-white font-semibold">Verified</span>
              </div>
            </div>
          )}

          {/* RIGHT BRANCH: Frontend Beauty & Sensory UI */}
          {frontendBranch && (
            <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 flex flex-col justify-between space-y-5">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 dark:text-zinc-500">
                  <span className="font-bold text-zinc-900 dark:text-white flex items-center gap-1.5 uppercase tracking-wider">
                    <Eye size={13} />
                    <span>Frontend Beauty Eye</span>
                  </span>
                  <span className="uppercase tracking-widest text-[11px]">Sensory UI</span>
                </div>
                <h5 className="text-base font-bold text-zinc-950 dark:text-white">
                  {frontendBranch.branchType}
                </h5>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                  {frontendBranch.subtitle}
                </p>
              </div>

              {/* Steps Inside Right Branch */}
              <div className="space-y-3 pt-2">
                {frontendBranch.steps.map((step, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-100 dark:border-zinc-800/80 space-y-1">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-zinc-900 dark:text-white font-semibold">{step.num} // {step.title}</span>
                      <span className="text-zinc-400 dark:text-zinc-500 text-[11px]">{step.tech}</span>
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed pt-1">
                      {step.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-400">
                <span>Tactile Interaction</span>
                <span className="text-zinc-900 dark:text-white font-semibold">Crafted</span>
              </div>
            </div>
          )}

        </div>

        {/* Stem Connector Down to Convergence Node */}
        <div className="flex flex-col items-center">
          <div className="w-px h-6 bg-zinc-300 dark:bg-zinc-700 my-1" />
          <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Synthesis & Rapid Execution
          </div>
          <div className="w-px h-6 bg-zinc-300 dark:bg-zinc-700 my-1" />
        </div>

        {/* ======================================================== */}
        {/* CONVERGENCE NODE: 04 // Fast Shipping & Field Delivery */}
        {/* ======================================================== */}
        {convergence && (
          <div className="flex flex-col items-center">
            <div className="w-full max-w-2xl p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400 dark:text-zinc-500">
                <span className="font-bold text-zinc-900 dark:text-white flex items-center gap-1.5 uppercase tracking-wider">
                  <Zap size={13} />
                  <span>Stage {convergence.stage} / Fast Shipping</span>
                </span>
                <span className="uppercase tracking-widest text-[11px] text-zinc-900 dark:text-white font-semibold">{convergence.tag}</span>
              </div>
              <h4 className="text-lg font-bold text-zinc-950 dark:text-white pt-1">
                {convergence.title}
              </h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {convergence.description}
              </p>
              <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs font-mono">
                <span className="italic font-serif text-zinc-900 dark:text-white">“I like building my ideas and shipping fast.”</span>
                <span className="text-zinc-900 dark:text-white font-semibold">Live Production</span>
              </div>
            </div>

            {/* Stem Connector Down to Outcome Node */}
            <div className="w-px h-6 bg-zinc-300 dark:bg-zinc-700 my-1" />
          </div>
        )}

        {/* ======================================================== */}
        {/* OUTCOME NODE: 05 // Real World Impact & Future Evolution */}
        {/* ======================================================== */}
        {outcome && (
          <div className="flex flex-col items-center">
            <div className="w-full max-w-2xl p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400 dark:text-zinc-500 mb-2">
                <span className="font-bold text-zinc-900 dark:text-white flex items-center gap-1.5 uppercase tracking-wider">
                  <Trophy size={13} />
                  <span>Stage {outcome.stage} / Real World Impact</span>
                </span>
                <span className="uppercase tracking-widest text-[11px] text-zinc-900 dark:text-white font-semibold">{outcome.tag}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pt-1">
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-zinc-950 dark:text-white">
                    {outcome.title}
                  </h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {outcome.detail}
                  </p>
                </div>
                {outcome.metric && (
                  <div className="shrink-0 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 text-center bg-zinc-50 dark:bg-zinc-900/60 self-start">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Key Metric</div>
                    <div className="text-sm font-bold text-zinc-900 dark:text-white mt-0.5">{outcome.metric}</div>
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
