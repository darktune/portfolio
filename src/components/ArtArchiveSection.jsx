import React, { useState } from 'react';
import { referenceArtData } from '../data/references';
import { Palette, ArrowRight, Eye } from 'lucide-react';

export default function ArtArchiveSection() {
  const [selectedArt, setSelectedArt] = useState(referenceArtData[0]);

  return (
    <section id="art" className="py-16 max-w-7xl mx-auto px-6 sm:px-8 hairline-t">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div className="space-y-1">
          <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest block font-bold">
            03 // THE ART & CRAFT
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-[var(--text-primary)]">
            Pointillism & Line Art
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-mono text-[var(--text-secondary)]">
          Exhibited at Spectrum Ori · 40+ Hours Zero Error Ink
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {referenceArtData.slice(0, 12).map((art) => {
          const isSelected = selectedArt.id === art.id;
          return (
            <div
              key={art.id}
              onClick={() => setSelectedArt(art)}
              data-cursor="art"
              className={`group cursor-pointer rounded-xl ios-glass overflow-hidden transition-all duration-300 flex flex-col justify-between ${
                isSelected
                  ? 'border-[var(--text-primary)] ring-1 ring-white/50 scale-102'
                  : 'hover:border-white/30'
              }`}
            >
              {/* Image Frame */}
              <div className="aspect-square bg-black/80 relative overflow-hidden flex items-center justify-center p-2">
                <img
                  src={art.src}
                  alt={art.title}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-2 space-y-0.5">
                <h4 className="font-heading font-semibold text-[11px] text-[var(--text-primary)] truncate">
                  {art.title}
                </h4>
                <span className="text-[9px] text-[var(--text-muted)] font-mono block truncate">
                  {art.category}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Piece Focus Strip */}
      <div className="mt-6 p-4 rounded-xl ios-glass glow-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
        <div>
          <span className="text-[var(--text-muted)] block text-[10px] uppercase">SELECTED LINE STUDY</span>
          <span className="font-bold text-[var(--text-primary)] text-sm">{selectedArt.title}</span>
          <span className="text-[var(--text-secondary)] ml-2">· {selectedArt.concept}</span>
        </div>
        <div className="text-[10px] text-[var(--text-muted)]">
          "Extreme patience in art translates directly to zero error assembly in code."
        </div>
      </div>
    </section>
  );
}
