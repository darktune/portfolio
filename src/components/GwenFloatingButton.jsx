import React, { useState } from 'react';
import { Sparkles, MessageSquare, Bot, X, ArrowUpRight } from 'lucide-react';

export default function GwenFloatingButton({ onOpenGwen, isChatActive }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip on hover */}
      <div
        className={`px-3 py-1.5 rounded-lg bg-[var(--bg-surface-raised)] hairline-all text-xs font-mono text-[var(--text-primary)] shadow-xl transition-all duration-200 pointer-events-none ${
          hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-primary)] animate-signal-pulse" />
          <span>GWEN AI // ONLINE</span>
        </span>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={onOpenGwen}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        data-cursor="gwen"
        aria-label="Open Gwen AI Assistant"
        className="group relative w-13 h-13 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] hairline-all flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
      >
        {/* Animated breathing pulse ring */}
        <span className="absolute -inset-1 rounded-full border border-[var(--text-primary)] opacity-40 animate-ping pointer-events-none" />

        {/* Icon with micro-rotation on hover */}
        <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:rotate-12">
          <Sparkles size={20} className="stroke-[2.2]" />
        </div>

        {/* Status Dot */}
        <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--text-primary)]" />
      </button>
    </div>
  );
}
