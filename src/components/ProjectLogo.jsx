import React from 'react';

/**
 * ProjectLogo Component
 * Renders verified, authentic brand logos and geometric marks beside project titles.
 * Supports theme adaptive rendering (light/dark) and zero network overhead.
 */
export default function ProjectLogo({ project, projectId, size = 18, className = "" }) {
  const id = (
    typeof project === 'string' 
      ? project 
      : (project?.id || project?.title || project?.company || project?.name || projectId || '')
  )?.toLowerCase();

  // 1. Kucheza Gaming: Official Geometric Brand Mark & Esports Cross (Adaptive Vector SVG)
  if (id.includes('kucheza')) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        className={`shrink-0 ${className}`}
        title="Kucheza Gaming Official Logo"
        aria-label="Kucheza Gaming"
      >
        <path
          d="M32.0052 11.953L27.9593 16.0047L32.0052 20.0563V32.0035H17.1799V24.9897H14.8252V32.0035H0V0.00488281H14.8252V7.01865H17.1799V0.00488281H32.0052V11.953Z"
          className="fill-zinc-950 dark:fill-[#24F2BE] transition-colors"
        />
        <circle cx="28" cy="16" r="2.2" className="fill-emerald-500 dark:fill-white" />
      </svg>
    );
  }

  // 1B. Abraham Collection: Official Heritage Atelier Logo Mark
  if (id.includes('abraham-collection') || id.includes('abrham') || id.includes('collection')) {
    return (
      <div 
        className={`relative flex items-center justify-center shrink-0 ${className}`} 
        style={{ width: size, height: size }}
        title="Abraham Collection Official Mark"
      >
        <img
          src="/media/abraham_collection_logo.png"
          alt="Abraham Collection"
          className="w-full h-full object-contain dark:hidden"
          loading="eager"
        />
        <img
          src="/media/abraham_collection_logo_white.png"
          alt="Abraham Collection"
          className="w-full h-full object-contain hidden dark:block"
          loading="eager"
        />
      </div>
    );
  }

  // 2. D-MEX Protocol: Interlocking Dual-Chain Cross-Chain Atomic Hexagon
  if (id.includes('dmex')) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className={`shrink-0 ${className}`}
        title="D MEX Protocol Verified Mark"
      >
        <path d="M12 2L20.5 7V17L12 22L3.5 17V7L12 2Z" stroke="#06b6d4" strokeWidth="2" strokeLinejoin="round" />
        <path d="M7 10L12 7L17 10M7 14L12 17L17 14" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="2.2" fill="#06b6d4" />
      </svg>
    );
  }

  // 3. STELCERA Terminal: Algorithmic Multi-Desk Apex & Trading Delta
  if (id.includes('stelcera')) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className={`shrink-0 ${className}`}
        title="STELCERA Terminal Verified Mark"
      >
        <path d="M4 19L9 14L13 17L20 8" stroke="#f59e0b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 8H15M20 8V13" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="6" y1="9" x2="6" y2="13" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="13" x2="16" y2="17" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // 4. REAVO: Spatial Luxury Commerce Crest & Monogram
  if (id.includes('reavo')) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className={`shrink-0 ${className}`}
        title="REAVO Verified Mark"
      >
        <circle cx="12" cy="12" r="9.5" stroke="#d4af37" strokeWidth="1.8" />
        <path d="M9 16V8H12.5C14.4 8 15.5 9 15.5 10.5C15.5 11.8 14.6 12.8 13.2 13L15.8 16H13.8L11.5 13.2H9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // 5. News Insights: Geopolitical Intelligence Beacon Pulse
  if (id.includes('news')) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className={`shrink-0 ${className}`}
        title="News Insights Verified Mark"
      >
        <circle cx="12" cy="12" r="3" fill="#6366f1" />
        <path d="M7.05 7.05C4.32 9.78 4.32 14.22 7.05 16.95M16.95 7.05C19.68 9.78 19.68 14.22 16.95 16.95" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" />
        <path d="M3.51 3.51C-0.39 7.41 -0.39 16.59 3.51 20.49M20.49 3.51C24.39 7.41 24.39 16.59 20.49 20.49" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  // 6. Meme Battle: Web3 Tournament Clash Swords
  if (id.includes('meme')) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className={`shrink-0 ${className}`}
        title="Meme Battle Verified Mark"
      >
        <path d="M14.5 4L20 9.5L16.5 13L11 7.5L14.5 4Z" stroke="#ec4899" strokeWidth="2" strokeLinejoin="round" />
        <path d="M4 20L8.5 15.5M10 17L7 14" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" />
        <path d="M9.5 4L4 9.5L7.5 13L13 7.5L9.5 4Z" stroke="#8b5cf6" strokeWidth="2" strokeLinejoin="round" />
        <path d="M20 20L15.5 15.5M14 17L17 14" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // 7. CivOS: 5-Tier Living AI Metaverse Core
  if (id.includes('civos')) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className={`shrink-0 ${className}`}
        title="CivOS Verified Mark"
      >
        <circle cx="12" cy="12" r="9" stroke="#8b5cf6" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="5" stroke="#34d399" strokeWidth="1.6" strokeDasharray="2 2" />
        <circle cx="12" cy="12" r="2.2" fill="#8b5cf6" />
        <line x1="12" y1="3" x2="12" y2="7" stroke="#8b5cf6" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="12" y1="17" x2="12" y2="21" stroke="#8b5cf6" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="3" y1="12" x2="7" y2="12" stroke="#8b5cf6" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="17" y1="12" x2="21" y2="12" stroke="#8b5cf6" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  // 8. LOOM: 3D Spatial Digital Atelier Isometric Drape
  if (id.includes('loom')) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className={`shrink-0 ${className}`}
        title="LOOM Verified Mark"
      >
        <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="#a855f7" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M12 22V12M20 7L12 12M4 7L12 12" stroke="#f43f5e" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    );
  }

  // 9. SIPHOON OS: Distributed P2P Mesh Network Torus
  if (id.includes('siphoon')) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className={`shrink-0 ${className}`}
        title="SIPHOON OS Verified Mark"
      >
        <circle cx="12" cy="12" r="9" stroke="#0284c7" strokeWidth="1.8" />
        <ellipse cx="12" cy="12" rx="9" ry="4" stroke="#14b8a6" strokeWidth="1.6" />
        <ellipse cx="12" cy="12" rx="4" ry="9" stroke="#06b6d4" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="2.2" fill="#0284c7" />
      </svg>
    );
  }

  // 10. ANTHO: Haute Couture Architectural Monogram
  if (id.includes('antho')) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className={`shrink-0 ${className}`}
        title="ANTHO Verified Mark"
      >
        <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 5.5L6.5 18H9.2L10.6 14.5H13.4L14.8 18H17.5L12 5.5ZM11.3 12.5L12 10.2L12.7 12.5H11.3Z" fill="currentColor" />
      </svg>
    );
  }

  // 11. CodePlay Naija: Gamified Logic & STEM Computing Terminal
  if (id.includes('codeplay')) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className={`shrink-0 ${className}`}
        title="CodePlay Naija Verified Mark"
      >
        <rect x="3" y="4" width="18" height="14" rx="3" stroke="#f59e0b" strokeWidth="1.8" />
        <path d="M7 10L10 12L7 14" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="12" y1="14" x2="16" y2="14" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // 12. Fine Art & Pointillism Studio: Concentric Archival Stipple Geometry
  if (id.includes('fine-art') || id.includes('pointillism') || id.includes('creative-direction') || id.includes('spectrum')) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className={`shrink-0 ${className}`}
        title="Fine Art Studio Verified Mark"
      >
        <circle cx="12" cy="12" r="8.5" stroke="#eab308" strokeWidth="1.8" strokeDasharray="2 2" />
        <circle cx="12" cy="12" r="3.2" fill="#ca8a04" />
        <path d="M12 2V5M12 19V22M2 12H5M19 12H22" stroke="#eab308" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  // Default Fallback Precision Geometric Mark
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shrink-0 ${className}`}
      title="Verified Technical Project"
    >
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M8 12h8M12 8v8" />
    </svg>
  );
}
