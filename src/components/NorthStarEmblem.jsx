import React from 'react';

/**
 * NorthStarEmblem: The celestial North Star motif (inspired by the Claude logo / 4-point star)
 * representing Abraham's ultimate dream of building The OASIS.
 */
export default function NorthStarEmblem({ size = 48, className = "" }) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      {/* Outer Ethereal Radial Glow Aura */}
      <div className="absolute inset-0 rounded-full bg-white/20 blur-xl animate-pulse pointer-events-none" />

      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative animate-north-star transition-transform duration-500 hover:scale-125 cursor-pointer"
      >
        <defs>
          <radialGradient id="starCoreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="60%" stopColor="#E2E8F0" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#94A3B8" stopOpacity="0" />
          </radialGradient>
          <filter id="celestialGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Central Pulsing Star Flare Core */}
        <circle cx="50" cy="50" r="16" fill="url(#starCoreGlow)" opacity="0.6" />

        {/* 4-Point Claude-Inspired Celestial Star Geometry */}
        <path
          d="M 50 8 C 50 32 32 50 8 50 C 32 50 50 68 50 92 C 50 68 68 50 92 50 C 68 50 50 32 50 8 Z"
          fill="#FFFFFF"
          filter="url(#celestialGlow)"
        />

        {/* Diagonal Micro-Spurs */}
        <path
          d="M 50 28 C 50 42 42 50 28 50 C 42 50 50 58 50 72 C 50 58 58 50 72 50 C 58 50 50 42 50 28 Z"
          fill="#FFFFFF"
          opacity="0.9"
          transform="rotate(45 50 50)"
        />

        {/* Precision Center Beacon Dot */}
        <circle cx="50" cy="50" r="3" fill="#060709" />
        <circle cx="50" cy="50" r="1.5" fill="#FFFFFF" />
      </svg>
    </div>
  );
}
