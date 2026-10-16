import React, { useState } from 'react';
import { Copy, Check, ArrowDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon, XIcon } from './Icons';
import HyperCube3D from './HyperCube3D';
import PersonalMark from './PersonalMark';

export default function Hero({ onExploreClick }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("abrahamtoluwani999@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section id="top" className="pt-36 pb-16 md:pt-44 md:pb-24 px-5 sm:px-8 max-w-6xl mx-auto">
      
      {/* Status Pill: iOS Glassmorphic Round Badge */}
      <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-mono ios-pill text-[var(--text-secondary)] mb-8">
        <PersonalMark size={14} className="text-[var(--text-primary)]" />
        <span>BSc Computer Science Graduate · Covenant University</span>
        <span className="text-[var(--text-muted)]">|</span>
        <span className="text-[var(--text-primary)] font-semibold">Class of 2026</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Main Column: Authoritative Manifesto & Cadence */}
        <div className="lg:col-span-8 space-y-6">
          
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.04]">
              Abraham Toluwani
            </h1>

            {/* Clear Professional Authority in Tech Space */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs sm:text-sm font-mono font-medium text-[var(--text-primary)]">
              <span className="px-3 py-1 rounded-full ios-pill text-emerald-500 font-semibold">FDE · Forward Deployed Engineer</span>
              <span className="text-[var(--text-muted)]">•</span>
              <span className="px-3 py-1 rounded-full ios-pill text-cyan-400 font-semibold">R&D · Research and Development</span>
              <span className="text-[var(--text-muted)]">•</span>
              <span className="px-3 py-1 rounded-full ios-pill">Systems Architect</span>
              <span className="text-[var(--text-muted)]">•</span>
              <span className="px-3 py-1 rounded-full ios-pill">Smart Contract Engineer</span>
              <span className="text-[var(--text-muted)]">•</span>
              <span className="px-3 py-1 rounded-full ios-pill">Game Designer</span>
            </div>
          </div>

          {/* Vision, Emotional Cadence & Motive: Strictly 2 Sentences, Zero Hyphens */}
          <div className="space-y-3 max-w-2xl text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              I architect software where mathematical proof replaces trust across low level distributed systems and deterministic smart contracts.
            </p>
            <p className="text-sm sm:text-base text-[var(--text-muted)] font-normal">
              Every system is engineered for zero vulnerability tolerance, high throughput execution, and sovereign digital ownership.
            </p>
          </div>

          {/* Proportional Editorial Quote: Frontend Beauty & Layered Backend Mind */}
          <div className="pt-1 pb-1 max-w-2xl">
            <div className="relative pl-5 py-2.5 border-l-2 border-emerald-500/80 dark:border-emerald-400/70 bg-emerald-500/[0.04] dark:bg-emerald-400/[0.03] rounded-r-2xl">
              <p className="font-serif italic text-base sm:text-lg text-[var(--text-primary)] tracking-wide leading-relaxed">
                “I have a good eye for beauty of the frontend and a bright mind for the layered architecture of the backend.”
              </p>
            </div>
          </div>

          {/* Action Row: iOS 26 Glassmorphic Buttons with Hover Physics (No Duplicate Gwen) */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            
            {/* Primary Action: High-visibility pill bar in dark and light themes */}
            <button
              onClick={onExploreClick}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all active:scale-95 shadow-md group bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 dark:border dark:border-white/60 dark:shadow-[0_0_22px_rgba(255,255,255,0.2)]"
            >
              <span>Explore Verified Deployments</span>
              <div className="icon-hover-physics">
                <ArrowDown size={14} />
              </div>
            </button>

            {/* Quick Copy Email: Distinctly visible pill bar in dark theme */}
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-mono transition-all active:scale-95 group bg-black/5 hover:bg-black/10 text-zinc-900 border border-black/15 dark:bg-zinc-900/90 dark:text-zinc-100 dark:border-zinc-700/90 dark:hover:border-zinc-500 dark:hover:bg-zinc-800/90 dark:shadow-[0_2px_12px_rgba(0,0,0,0.5)]"
            >
              <div className="icon-hover-physics">
                {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
              </div>
              <span>{copied ? "Email Copied!" : "Copy Email"}</span>
            </button>

            {/* Social Channels */}
            <div className="flex items-center gap-1.5 pl-1">
              <a
                href="https://github.com/abraham-DT"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full ios-pill text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all group"
                aria-label="GitHub Profile"
              >
                <div className="icon-hover-physics">
                  <GithubIcon size={16} />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/abraham-toluwani-724391219"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full ios-pill text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all group"
                aria-label="LinkedIn Profile"
              >
                <div className="icon-hover-physics">
                  <LinkedinIcon size={16} />
                </div>
              </a>
              <a
                href="https://x.com/AbrahamToluwan1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full ios-pill text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all group"
                aria-label="X Profile"
              >
                <div className="icon-hover-physics">
                  <XIcon size={16} />
                </div>
              </a>
            </div>

          </div>

        </div>

        {/* Right Column: Suspended 3D Hypercube Asset (Resend & Mesh Aesthetic) */}
        <div className="lg:col-span-4 w-full flex items-center justify-center overflow-visible">
          <HyperCube3D />
        </div>

      </div>

    </section>
  );
}
