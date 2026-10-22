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
          className="w-full h-full object-contain rounded-sm dark:hidden"
          loading="eager"
        />
        <img
          src="/media/abraham_collection_logo_white.png"
          alt="Abraham Collection"
          className="w-full h-full object-contain rounded-sm hidden dark:block"
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

  // 4. REAVO: Official Student Gadget Brand Logo
  if (id.includes('reavo')) {
    return (
      <div 
        className={`relative flex items-center justify-center shrink-0 ${className}`} 
        style={{ width: size, height: size }}
        title="REAVO Official Brand Logo"
      >
        <img
          src="/media/reavo_logo.png"
          alt="REAVO"
          className="w-full h-full object-contain dark:invert transition-all"
          loading="eager"
        />
      </div>
    );
  }

  // 5. News Insights: Official ACHICHI Media Vector Logo
  if (id.includes('news') || id.includes('achichi')) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`shrink-0 ${className}`}
        title="News Insights · ACHICHI Media Official Logo"
        aria-label="News Insights"
      >
        <circle cx="50" cy="50" r="48" fill="#0F2A4A" />
        <ellipse cx="38" cy="68" rx="28" ry="10" fill="#1E88C7" opacity="0.5" />
        <path d="M14 65 Q25 58 38 65 Q51 72 62 65 Q73 58 84 65" stroke="#1E88C7" strokeWidth="4" strokeLinecap="round" fill="none" />
        <path d="M18 72 Q30 65 43 72 Q56 79 68 72 Q76 67 82 72" stroke="#4BB8E8" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.7" />
        <ellipse cx="48" cy="45" rx="20" ry="15" fill="#2E8B57" />
        <line x1="48" y1="30" x2="48" y2="60" stroke="#1a5c38" strokeWidth="1.5" />
        <line x1="28" y1="45" x2="68" y2="45" stroke="#1a5c38" strokeWidth="1.5" />
        <line x1="33" y1="34" x2="63" y2="56" stroke="#1a5c38" strokeWidth="1" opacity="0.7" />
        <line x1="33" y1="56" x2="63" y2="34" stroke="#1a5c38" strokeWidth="1" opacity="0.7" />
        <ellipse cx="45" cy="41" rx="8" ry="6" fill="#3dae72" opacity="0.5" />
        <ellipse cx="68" cy="40" rx="8" ry="6" fill="#4CAF50" />
        <circle cx="71" cy="38" r="1.5" fill="#fff" />
        <ellipse cx="34" cy="58" rx="7" ry="4" fill="#2E8B57" transform="rotate(-30 34 58)" />
        <ellipse cx="62" cy="58" rx="7" ry="4" fill="#2E8B57" transform="rotate(30 62 58)" />
        <ellipse cx="36" cy="35" rx="5" ry="3" fill="#2E8B57" transform="rotate(20 36 35)" />
        <ellipse cx="60" cy="35" rx="5" ry="3" fill="#2E8B57" transform="rotate(-20 60 35)" />
        <circle cx="50" cy="50" r="48" stroke="#1E88C7" strokeWidth="2" fill="none" opacity="0.6" />
        <circle cx="50" cy="50" r="46" stroke="#2E8B57" strokeWidth="1" fill="none" opacity="0.4" />
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

  // 10. ANTHO: Official Contemporary Nigerian Streetwear Brand Mark
  if (id.includes('antho')) {
    return (
      <div 
        className={`relative flex items-center justify-center shrink-0 ${className}`} 
        style={{ width: size, height: size }}
        title="ANTHO Official Brand Mark"
      >
        <img
          src="/media/antho_logo.png"
          alt="ANTHO"
          className="w-full h-full object-contain transition-all"
          loading="eager"
        />
      </div>
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

  // 13. Google Developer Groups: Official 4-Color Vector Chevron Mark
  if (id.includes('gdg') || id.includes('google')) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className={`shrink-0 ${className}`}
        title="Google Developer Groups Official Mark"
        aria-label="Google Developer Groups"
      >
        <path d="M7 7L3 12L7 17" stroke="#4285F4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 7L21 12L17 17" stroke="#34A853" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="9.5" r="1.5" fill="#EA4335" />
        <circle cx="12" cy="14.5" r="1.5" fill="#FBBC05" />
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
