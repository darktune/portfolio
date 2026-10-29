import React from 'react';
import { ShieldCheck, Compass, Layers } from 'lucide-react';
import PersonalMark from './PersonalMark';

export default function AboutSection() {
  const principles = [
    {
      num: "01",
      icon: ShieldCheck,
      title: "Deterministic Rigor",
      body: "Smart contract assembly and system memory management leave zero room for error. Every single state transition is verified with mathematical precision."
    },
    {
      num: "02",
      icon: Compass,
      title: "The Standout Rule",
      body: "Focus attention on one clear primary action per view and keep the rest disciplined. Visual hierarchy and clean whitespace communicate authority better than clutter."
    },
    {
      num: "03",
      icon: Layers,
      title: "Cross Domain Synthesis",
      body: "Engineering excellence connects low level code, high speed charting, and web security. Mastering each tier ensures every layer of the system reinforces the others."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 px-5 sm:px-8 max-w-6xl mx-auto border-t border-[var(--border-subtle)]">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Narrative with Cadence: Strictly 2 Sentences */}
        <div className="lg:col-span-5 space-y-5">
          <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
            04 // Philosophy & Pedigree
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)] leading-tight">
            Engineering, Rigor & Discipline.
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            I graduated in Computer Science from <strong className="text-[var(--text-primary)] font-semibold">Covenant University</strong> with a commitment to engineering systems that operate with mathematical precision.
          </p>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            Every system I deploy is built for extreme reliability, clear performance metrics, and zero security vulnerabilities.
          </p>

          {/* Institutional Pedigree & Record Card */}
          <div className="pt-2">
            <div className="rounded-3xl ios-glass-card p-5 sm:p-6 space-y-4 border border-[var(--border-subtle)]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl overflow-hidden ring-1 ring-zinc-300 dark:ring-zinc-700 shrink-0 shadow-sm">
                    <img 
                      src="/media/abraham_portrait.jpg" 
                      alt="Abraham Toluwani" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[var(--text-primary)]">
                      Abraham Toluwani
                    </div>
                    <div className="text-xs font-mono text-[var(--text-muted)]">
                      FDE & Systems Architect · Class of 2026
                    </div>
                  </div>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-900 dark:text-white font-bold border-b border-zinc-900 dark:border-white pb-0.5">
                  Principal
                </span>
              </div>

              <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono">
                <span className="text-[var(--text-muted)]">INSTITUTIONAL RECORD</span>
                <span className="text-zinc-900 dark:text-white font-semibold">BSc Computer Science</span>
              </div>
              <div className="text-xs text-[var(--text-secondary)] font-mono">
                Covenant University · Systems, R&D & Cryptography Focus
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Principles with Specular Glass Cards & Hover Physics */}
        <div className="lg:col-span-7 space-y-4">
          {principles.map((principle) => {
            const Icon = principle.icon;
            return (
              <div 
                key={principle.num}
                className="group p-6 sm:p-7 rounded-3xl ios-glass-card space-y-3"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full ios-pill flex items-center justify-center text-xs font-mono font-bold text-[var(--text-primary)]">
                    {principle.num}
                  </span>
                  <div className="icon-hover-physics text-[var(--text-primary)]">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] tracking-tight title-hover-physics">
                    {principle.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed pl-11">
                  {principle.body}
                </p>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
