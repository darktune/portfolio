import React from 'react';
import PersonalMark from './PersonalMark';

// Precision Vector Brand Logos with Resend-style Monochromatic & Specular Fidelity
export const BrandLogos = {
  Solidity: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" stroke="currentColor">
      <path d="M12 2L4.5 14.5L12 18.5L19.5 14.5L12 2Z" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.12" />
      <path d="M12 2L12 18.5" strokeWidth="1.5" />
      <path d="M12 18.5L4.5 14.5L12 22L19.5 14.5L12 18.5Z" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.2" />
    </svg>
  ),
  Cpp: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" stroke="currentColor">
      <path d="M12 2L3 7.2V16.8L12 22L21 16.8V7.2L12 2Z" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.08" />
      <path d="M8.5 14.5C7.4 13.8 6.8 12.6 6.8 11.2C6.8 9.2 8.4 7.6 10.4 7.6C11.6 7.6 12.7 8.2 13.4 9.2" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8.5 14.5C9.2 15 10.1 15.3 11 15.1" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M15 11.4H17M16 10.4V12.4" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M19 11.4H21M20 10.4V12.4" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  Python: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" stroke="currentColor">
      <path d="M11.8 2C7.5 2 7.7 3.8 7.7 3.8L7.7 5.7H12V6.6H5.4C5.4 6.6 2 6.2 2 10.8C2 15.3 5 15.1 5 15.1H6.8V13.3C6.8 11.2 8.7 11.2 8.7 11.2H13.1C13.1 11.2 14.8 11.1 14.8 9.3V4.2C14.8 4.2 15.1 2 11.8 2ZM9.6 3.6C10.1 3.6 10.5 4 10.5 4.5C10.5 5 10.1 5.4 9.6 5.4C9.1 5.4 8.7 5 8.7 4.5C8.7 4 9.1 3.6 9.6 3.6Z" fill="currentColor" fillOpacity="0.8" />
      <path d="M12.2 22C16.5 22 16.3 20.2 16.3 20.2L16.3 18.3H12V17.4H18.6C18.6 17.4 22 17.8 22 13.2C22 8.7 19 8.9 19 8.9H17.2V10.7C17.2 12.8 15.3 12.8 15.3 12.8H10.9C10.9 10.8 9.2 12.9 9.2 14.7V19.8C9.2 19.8 8.9 22 12.2 22ZM14.4 20.4C13.9 20.4 13.5 20 13.5 19.5C13.5 19 13.9 18.6 14.4 18.6C14.9 18.6 15.3 19 15.3 19.5C15.3 20 14.9 20.4 14.4 20.4Z" fill="currentColor" fillOpacity="0.45" />
    </svg>
  ),
  TypeScript: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" stroke="currentColor">
      <rect x="3" y="3" width="18" height="18" rx="4" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08" />
      <path d="M7 8.5H13M10 8.5V17" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M14 15.5C14.6 16.2 15.6 16.7 16.7 16.5C17.9 16.3 18.5 15.4 18.5 14.3C18.5 12.6 16.5 12.3 16.5 11.2C16.5 10.5 17 10 17.8 10C18.5 10 19.1 10.3 19.5 10.8" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  ),
  JavaScript: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" stroke="currentColor">
      <rect x="3" y="3" width="18" height="18" rx="4" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08" />
      <path d="M9.5 9V14.5C9.5 15.8 8.7 16.6 7.2 16.3" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M14 15.5C14.6 16.2 15.6 16.7 16.7 16.5C17.9 16.3 18.5 15.4 18.5 14.3C18.5 12.6 16.5 12.3 16.5 11.2C16.5 10.5 17 10 17.8 10C18.5 10 19.1 10.3 19.5 10.8" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  ),
  Go: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" stroke="currentColor">
      <path d="M3 12C3 8.1 6.1 5 10 5C12.8 5 15.2 6.6 16.3 9H10V13H17C17 17 13.9 19 10 19C6.1 19 3 15.9 3 12Z" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08" />
      <circle cx="19.5" cy="11.5" r="1.5" fill="currentColor" />
      <circle cx="19.5" cy="16.5" r="1.5" fill="currentColor" />
    </svg>
  ),
  React: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" stroke="currentColor">
      <ellipse cx="12" cy="12" rx="9" ry="3.8" strokeWidth="1.4" />
      <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(60 12 12)" strokeWidth="1.4" />
      <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(120 12 12)" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="1.8" fill="currentColor" />
    </svg>
  ),
  Nextjs: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" stroke="currentColor">
      <circle cx="12" cy="12" r="9.5" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08" />
      <path d="M8.5 7.5V16.5M15.5 7.5V13M8.5 7.5L16.2 17.5" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  Threejs: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" stroke="currentColor">
      <path d="M12 2.5L20.5 7.5V17L12 21.5L3.5 17V7.5L12 2.5Z" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.08" />
      <path d="M12 2.5V12M12 12L20.5 17M12 12L3.5 17" strokeWidth="1.4" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  ),
  Foundry: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" stroke="currentColor">
      <path d="M4 17L7 7H17L20 17H4Z" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.08" />
      <path d="M2 19H22M8 12H16M10 7L12 3L14 7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Kafka: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" stroke="currentColor">
      <circle cx="6" cy="12" r="2.8" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
      <circle cx="17.5" cy="6.5" r="2.5" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
      <circle cx="17.5" cy="17.5" r="2.5" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
      <path d="M8.7 11L15.2 7.5M8.7 13L15.2 16.5" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  Redis: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" stroke="currentColor">
      <path d="M12 3L3.5 7.5L12 12L20.5 7.5L12 3Z" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.2" />
      <path d="M3.5 11.5L12 16L20.5 11.5" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M3.5 15.5L12 20L20.5 15.5" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
  Postgres: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" stroke="currentColor">
      <path d="M12 3C7 3 4 6.5 4 10.5C4 13.5 5.5 15.8 7.5 17.5L6.5 21H10.5L11 18.5C11.3 18.5 11.7 18.5 12 18.5C12.3 18.5 12.7 18.5 13 18.5L13.5 21H17.5L16.5 17.5C18.5 15.8 20 13.5 20 10.5C20 6.5 17 3 12 3Z" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.08" />
      <circle cx="9" cy="9.5" r="1.2" fill="currentColor" />
      <circle cx="15" cy="9.5" r="1.2" fill="currentColor" />
      <path d="M10 13.5C11 14.5 13 14.5 14 13.5" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  Supabase: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" stroke="currentColor">
      <path d="M13.2 2.5L3.8 13.4C3.4 13.9 3.8 14.7 4.5 14.7H11.5L10.8 21.5L20.2 10.6C20.6 10.1 20.2 9.3 19.5 9.3H12.5L13.2 2.5Z" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.15" />
    </svg>
  ),
  Unreal: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" stroke="currentColor">
      <circle cx="12" cy="12" r="9.5" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08" />
      <path d="M9 8.5V13C9 14.7 10.3 16 12 16C13.7 16 15 14.7 15 13V8.5" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M7 10.5L9 8.5M17 10.5L15 8.5" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  Blender: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" stroke="currentColor">
      <circle cx="12" cy="13.5" r="5" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
      <circle cx="12" cy="13.5" r="2" fill="currentColor" />
      <path d="M12 8.5V3.5M7.5 10L3.5 7M16.5 10L20.5 7" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  Tailwind: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" stroke="currentColor">
      <path d="M6.5 10.5C7.5 7 10 5.5 13.5 6C17 6.5 18 9 17.5 11.5C16.8 14.5 14.5 15.5 12.5 15.5C8.5 15.5 6.5 12 6.5 10.5Z" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
      <path d="M2.5 16.5C3.5 13 6 11.5 9.5 12C13 12.5 14 15 13.5 17.5C12.8 20.5 10.5 21.5 8.5 21.5C4.5 21.5 2.5 18 2.5 16.5Z" strokeWidth="1.5" fill="currentColor" fillOpacity="0.15" />
    </svg>
  ),
  Docker: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" stroke="currentColor">
      <path d="M3 13.5C4 18 8 20 13 20C18 20 21.5 17 22 13.5C21 13 19 13.5 18 12.5C17.5 11 18.5 9.5 18 9C16.5 9 15.5 10.5 14 11.5H3" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="5" y="10" width="2" height="1.5" fill="currentColor" />
      <rect x="8" y="10" width="2" height="1.5" fill="currentColor" />
      <rect x="11" y="10" width="2" height="1.5" fill="currentColor" />
      <rect x="8" y="7.5" width="2" height="1.5" fill="currentColor" />
      <rect x="11" y="7.5" width="2" height="1.5" fill="currentColor" />
    </svg>
  )
};

export default function TechStackSection() {
  // Lane 1: Core Languages & Systems Primitives
  const laneOne = [
    { id: 'solidity', name: 'Solidity & Yul', Logo: BrandLogos.Solidity, proficiency: 'Protocol Level' },
    { id: 'cpp', name: 'C++', Logo: BrandLogos.Cpp, proficiency: 'Systems Level' },
    { id: 'python', name: 'Python', Logo: BrandLogos.Python, proficiency: 'Advanced AI & Quant' },
    { id: 'typescript', name: 'TypeScript', Logo: BrandLogos.TypeScript, proficiency: 'Strict Architecture' },
    { id: 'go', name: 'Go', Logo: BrandLogos.Go, proficiency: 'Microservices' },
    { id: 'foundry', name: 'Foundry & Forge', Logo: BrandLogos.Foundry, proficiency: 'Smart Auditing' },
    { id: 'docker', name: 'Docker & Linux', Logo: BrandLogos.Docker, proficiency: 'Containers' },
    { id: 'javascript', name: 'JavaScript', Logo: BrandLogos.JavaScript, proficiency: 'Modern Web' }
  ];

  // Lane 2: Frameworks, Spatial Engines & Distributed Infrastructure
  const laneTwo = [
    { id: 'react', name: 'React 19 & Next.js', Logo: BrandLogos.React, proficiency: 'Flagship Frontend' },
    { id: 'threejs', name: 'Three.js & WebGL', Logo: BrandLogos.Threejs, proficiency: 'Spatial Graphics' },
    { id: 'kafka', name: 'Apache Kafka', Logo: BrandLogos.Kafka, proficiency: 'Distributed Streams' },
    { id: 'redis', name: 'Redis', Logo: BrandLogos.Redis, proficiency: 'In Memory Cache' },
    { id: 'postgres', name: 'PostgreSQL & Supabase', Logo: BrandLogos.Postgres, proficiency: 'Relational DB' },
    { id: 'unreal', name: 'Unreal Engine 5', Logo: BrandLogos.Unreal, proficiency: 'Realtime Mechanics' },
    { id: 'blender', name: 'Blender 3D', Logo: BrandLogos.Blender, proficiency: 'Spatial Topology' },
    { id: 'tailwind', name: 'Tailwind CSS', Logo: BrandLogos.Tailwind, proficiency: 'Design Systems' }
  ];

  // Duplicate for seamless infinite loop
  const marqueeLaneOne = [...laneOne, ...laneOne];
  const marqueeLaneTwo = [...laneTwo, ...laneTwo];

  return (
    <section id="stack" className="py-16 md:py-24 px-5 sm:px-8 max-w-6xl mx-auto border-t border-[var(--border-subtle)] relative overflow-hidden">
      
      {/* Resend Ambient Spotlight in Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/[0.02] dark:bg-white/[0.03] blur-[120px] rounded-full pointer-events-none" />

      {/* Section Header: Strict 2 Sentences, Zero Clutter */}
      <div className="mb-10 sm:mb-12 relative z-10">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
            <PersonalMark size={13} className="text-emerald-500" />
            <span>03 // Architectural Engineering Taxonomy</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
            Tech Stack, Languages & Spatial Tools.
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl leading-relaxed">
            The core programming languages, low level cryptographic tools, and spatial 3D engines driving my production architectures. Every layer is selected for deterministic performance, mathematical guarantees, and seamless human experience.
          </p>
        </div>
      </div>

      {/* ─── Resend-Style Motion Design: Dual Lane Infinite Motion Stack Pills ─── */}
      <div className="relative w-full overflow-hidden py-4 border-y border-[var(--border-subtle)] bg-black/[0.02] dark:bg-white/[0.01] space-y-4">
        
        {/* Left & Right Specular Gradient Masks (Resend Fade Out Effect) */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[var(--bg-canvas)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[var(--bg-canvas)] to-transparent z-10 pointer-events-none" />

        {/* Lane 1: Moving Forward */}
        <div className="flex items-center gap-4 sm:gap-6 w-max animate-marquee hover:[animation-play-state:paused]">
          {marqueeLaneOne.map((tech, idx) => {
            const LogoComp = tech.Logo;
            return (
              <div
                key={`lane1-${tech.id}-${idx}`}
                className="group flex items-center gap-3 px-4 py-2.5 rounded-2xl ios-pill bg-[var(--bg-surface)] hover:border-[var(--border-strong)] transition-all cursor-pointer shrink-0 shadow-xs hover:scale-[1.03]"
              >
                <div className="w-6 h-6 text-[var(--text-primary)] transition-transform duration-300 group-hover:scale-115">
                  <LogoComp />
                </div>
                <span className="text-xs font-mono font-medium text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                  {tech.name}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/5 text-[var(--text-muted)] border border-[var(--border-subtle)]">
                  {tech.proficiency}
                </span>
              </div>
            );
          })}
        </div>

        {/* Lane 2: Moving Reverse */}
        <div className="flex items-center gap-4 sm:gap-6 w-max animate-marquee-reverse hover:[animation-play-state:paused]">
          {marqueeLaneTwo.map((tech, idx) => {
            const LogoComp = tech.Logo;
            return (
              <div
                key={`lane2-${tech.id}-${idx}`}
                className="group flex items-center gap-3 px-4 py-2.5 rounded-2xl ios-pill bg-[var(--bg-surface)] hover:border-[var(--border-strong)] transition-all cursor-pointer shrink-0 shadow-xs hover:scale-[1.03]"
              >
                <div className="w-6 h-6 text-[var(--text-primary)] transition-transform duration-300 group-hover:scale-115">
                  <LogoComp />
                </div>
                <span className="text-xs font-mono font-medium text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                  {tech.name}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/5 text-[var(--text-muted)] border border-[var(--border-subtle)]">
                  {tech.proficiency}
                </span>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
