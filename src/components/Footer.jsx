import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-5 sm:px-8 max-w-6xl mx-auto border-t border-[var(--border-subtle)] text-xs font-mono text-[var(--text-muted)] flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <span>© {new Date().getFullYear()} Abraham Toluwani</span>
        <span>·</span>
        <span>BSc CS Graduate (Covenant Univ)</span>
      </div>

      <div className="flex items-center gap-4">
        <span>Designed with Craft & Precision</span>
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1 hover:text-[var(--text-primary)] transition-colors p-1"
          aria-label="Back to top"
        >
          <span>Top</span>
          <ArrowUp size={12} />
        </button>
      </div>
    </footer>
  );
}
