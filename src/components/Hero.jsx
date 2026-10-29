import React, { useState } from 'react';
import { Copy, Check, ArrowDown, FileText } from 'lucide-react';
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
      
      {/* Status Line: Clean Minimalist Typography */}
      <div className="flex items-center gap-2.5 text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-8 tracking-wide">
        <PersonalMark size={14} className="text-zinc-900 dark:text-white" />
        <span>BSc Computer Science Graduate · Covenant University</span>
        <span className="text-zinc-300 dark:text-zinc-700">|</span>
        <span className="text-zinc-900 dark:text-white font-semibold">Class of 2026</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Main Column: Authoritative Manifesto & Cadence */}
        <div className="lg:col-span-8 space-y-6">
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="relative group shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden ring-2 ring-zinc-200 dark:ring-zinc-800 shadow-md group-hover:ring-zinc-900 dark:group-hover:ring-white transition-all">
                  <img 
                    src="/media/abraham_portrait.jpg" 
                    alt="Abraham Toluwani" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white dark:border-zinc-950"></span>
                </span>
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-[1.04]">
                Abraham Toluwani
              </h1>
            </div>

            {/* Occupations: Clean Black/Neutral Typography Without Pill Bubbles */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 pt-1 text-xs sm:text-sm font-mono font-medium text-zinc-900 dark:text-zinc-100">
              <span>FDE · Forward Deployed Engineer</span>
              <span className="text-zinc-300 dark:text-zinc-700">/</span>
              <span>R&D · Research and Development</span>
              <span className="text-zinc-300 dark:text-zinc-700">/</span>
              <span>Systems Architect</span>
              <span className="text-zinc-300 dark:text-zinc-700">/</span>
              <span>Smart Contract Engineer</span>
              <span className="text-zinc-300 dark:text-zinc-700">/</span>
              <span>Game Designer</span>
            </div>
          </div>

          {/* Inspiring Cadence of Hope & Simple Truth */}
          <div className="space-y-3 max-w-2xl text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
            <p>
              I build software that brings quiet confidence to people. Systems crafted with honest care, proven logic, and lasting beauty.
            </p>
            <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-normal">
              Every piece of code is made to protect what matters, run fast and smooth, and give users true freedom in a connected world.
            </p>
          </div>

          {/* Proportional Editorial Quote: Frontend Beauty & Layered Backend Mind */}
          <div className="pt-2 max-w-2xl border-l-2 border-zinc-900 dark:border-white pl-5 py-1">
            <p className="font-serif italic text-base sm:text-lg text-zinc-900 dark:text-white leading-relaxed">
              “I have a good eye for beauty of the frontend and a bright mind for the layered architecture of the backend.”
            </p>
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

            {/* Direct Resume Action: Prominent PDF Download */}
            <a
              href="/Toluwani_Abraham_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Toluwani_Abraham_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-mono transition-all active:scale-95 group bg-black/5 hover:bg-black/10 text-zinc-900 border border-black/15 dark:bg-zinc-900/90 dark:text-zinc-100 dark:border-zinc-700/90 dark:hover:border-zinc-500 dark:hover:bg-zinc-800/90 dark:shadow-[0_2px_12px_rgba(0,0,0,0.5)]"
              title="Download Technical Resume (PDF)"
            >
              <div className="icon-hover-physics">
                <FileText size={14} className="text-zinc-700 dark:text-zinc-300" />
              </div>
              <span>Technical Resume</span>
            </a>

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
