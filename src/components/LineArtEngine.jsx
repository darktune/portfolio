import React from 'react';

/**
 * LineArtEngine: A continuous single-line architectural drawing SVG system
 * representing the polymath convergence of Abraham Toluwani.
 * Uses GPU-accelerated SVG animateMotion for zero-overhead, crash-proof, 120fps smooth dot movement.
 */
export default function LineArtEngine({ activeDiscipline = "systems", interactive = true }) {
  const waypoints = [
    { x: 150, y: 100, label: "SYSTEMS", code: "01" },
    { x: 450, y: 100, label: "WEB3", code: "02" },
    { x: 750, y: 100, label: "GAMES", code: "03" },
    { x: 850, y: 300, label: "3D CRAFT", code: "04" },
    { x: 750, y: 500, label: "AI & HCI", code: "05" },
    { x: 450, y: 500, label: "MARKETS", code: "06" },
    { x: 150, y: 500, label: "CREATIVE", code: "07" },
    { x: 500, y: 300, label: "ABRAHAM TOLUWANI", code: "Σ" }
  ];

  // Circuit continuous path that traverses all outer nodes and loops through central convergence
  const circuitPathD = "M 150 100 L 450 100 L 750 100 L 850 300 L 500 300 L 750 500 L 450 500 L 150 500 L 500 300 L 150 100 Z";

  return (
    <div className="w-full h-full relative overflow-hidden pointer-events-none select-none">
      <svg
        viewBox="0 0 1000 600"
        className="w-full h-full text-[var(--border-strong)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Subtle Background Architectural Grid */}
        <defs>
          <pattern id="archGrid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.15" />
          </pattern>
          <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
          {/* Master Motion Track Path for Moving Dot */}
          <path id="polymath-track" d={circuitPathD} />
        </defs>

        <rect width="1000" height="600" fill="url(#archGrid)" />

        {/* Outer Continuous Architectural Track */}
        <path
          d="M 150 100 L 450 100 L 750 100 L 850 300 L 750 500 L 450 500 L 150 500 L 100 300 Z"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 4"
          strokeOpacity="0.4"
        />

        {/* Core Diagonal Convergence Crossings */}
        <path d="M 150 100 L 500 300" stroke="currentColor" strokeWidth="1" strokeOpacity="0.35" />
        <path d="M 450 100 L 500 300" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.4" />
        <path d="M 750 100 L 500 300" stroke="currentColor" strokeWidth="1" strokeOpacity="0.35" />
        <path d="M 850 300 L 500 300" stroke="currentColor" strokeWidth="1" strokeOpacity="0.35" />
        <path d="M 750 500 L 500 300" stroke="currentColor" strokeWidth="1" strokeOpacity="0.35" />
        <path d="M 450 500 L 500 300" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.4" />
        <path d="M 150 500 L 500 300" stroke="currentColor" strokeWidth="1" strokeOpacity="0.35" />

        {/* Central Convergence Hub Aura */}
        <circle cx="500" cy="300" r="80" fill="url(#hubGlow)" />
        <circle cx="500" cy="300" r="45" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.6" strokeDasharray="3 3" />
        <circle cx="500" cy="300" r="18" fill="var(--bg-surface)" stroke="var(--accent)" strokeWidth="1.5" />
        <circle cx="500" cy="300" r="4" fill="var(--accent)" />

        {/* Discipline Nodes */}
        {waypoints.map((wp, i) => {
          const isHub = i === waypoints.length - 1;
          return (
            <g key={i} className="transition-all duration-300">
              {/* Outer Node Ring */}
              <circle
                cx={wp.x}
                cy={wp.y}
                r={isHub ? 12 : 7}
                fill="var(--bg-surface)"
                stroke={isHub ? "var(--accent)" : "currentColor"}
                strokeWidth="1.5"
                strokeOpacity="0.8"
              />
              {/* Node Center Pip */}
              <circle
                cx={wp.x}
                cy={wp.y}
                r={isHub ? 4 : 2.5}
                fill={isHub ? "var(--accent)" : "var(--text-secondary)"}
              />

              {/* Node Coordinates & Code */}
              <text
                x={wp.x}
                y={wp.y - 14}
                textAnchor="middle"
                className="font-mono text-[9px] font-semibold fill-[var(--text-muted)] tracking-wider"
              >
                {wp.code} // {wp.label}
              </text>
            </g>
          );
        })}

        {/* The Moving Polymath Dot (Hardware-Accelerated via SVG animateMotion) */}
        <g>
          <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
            <mpath href="#polymath-track" />
          </animateMotion>
          {/* Signal Glow Ring */}
          <circle r="12" fill="var(--accent)" fillOpacity="0.25" />
          <circle r="6" fill="var(--accent)" fillOpacity="0.4" />
          <circle r="3.5" fill="var(--accent)" />
        </g>
      </svg>
    </div>
  );
}
