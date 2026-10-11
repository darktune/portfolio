import React from 'react';
import { currentlyNowData } from '../data/timeline';
import { Clock, Activity, ArrowRight } from 'lucide-react';

export default function NowSection() {
  return (
    <section id="now" className="py-24 max-w-7xl mx-auto px-6 sm:px-8 hairline-t">
      
      {/* Section Header */}
      <div className="space-y-4 mb-16 max-w-3xl">
        <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] uppercase tracking-wider">
          <Clock size={14} />
          <span>10.0 // CURRENT CYCLE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-[var(--text-primary)]">
          What I'm focused on right now.
        </h2>
        <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
          Inspired by Derek Sivers' /now movement. A live log of engineering goals, academic milestones, and creative projects.
        </p>
      </div>

      {/* Grid of Now Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentlyNowData.map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl bg-[var(--bg-surface)] hairline-all space-y-3 hover:border-[var(--border-strong)] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[var(--accent)] uppercase font-semibold mb-2">
                <span>0{idx + 1} // {item.label}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-signal-pulse" />
              </div>

              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                {item.desc}
              </p>
            </div>

            <div className="hairline-t pt-3 flex items-center justify-between text-[10px] font-mono text-[var(--text-muted)]">
              <span>Status</span>
              <span className="text-[var(--text-primary)] font-semibold">Active Cycle · 2026</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
