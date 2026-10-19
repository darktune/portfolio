import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ChevronDown, CheckCircle2, Sparkles, ArrowUpRight } from 'lucide-react';
import PersonalMark from './PersonalMark';

export default function ExperienceSection() {
  // Track which experience has its deep dive active
  const [expandedId, setExpandedId] = useState(null);

  const toggleDeepDive = (id) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  const experiences = [
    {
      id: 'kucheza',
      company: 'Kucheza Gaming',
      role: 'Industrial Training Fellow · Spatial R&D & Esports Systems',
      period: 'Apr 2025 · Oct 2025',
      status: 'Completed',
      location: 'Lagos, Nigeria',
      badge: 'Tier 1 Industry',
      highlight: 'Engineered spatial 3D tournament arena stage architectures and corporate presentation systems for leading enterprise brand partnerships.',
      keyMetric: '3D Spatial Staging & Enterprise Decks',
      glowClass: 'bg-emerald-500',
      accentGlow: 'rgba(16, 185, 129, 0.22)',
      accentBorder: 'rgba(16, 185, 129, 0.65)',
      logo: (
        <div className="w-5 h-5 shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <img
            src="/media/kucheza_mark_dark.png"
            alt="Kucheza Gaming Logo"
            className="w-full h-full object-contain dark:hidden"
          />
          <img
            src="/media/kucheza_mark_white.png"
            alt="Kucheza Gaming Logo"
            className="w-full h-full object-contain hidden dark:block"
          />
        </div>
      ),
      deliverables: [
        'Designed interactive 3D tournament staging and spectator arena layouts for national esports championships',
        'Engineered spatial exhibition booths and visual pitch systems for premier enterprise brand partnerships',
        'Authored and presented executive spatial keynote visualizations for corporate partner retreats',
        'Conducted spatial computing and audience engagement research for youth digital recreation'
      ],
      technologies: ['Unreal Engine 5', 'Blender', 'Spatial Staging', 'Enterprise Strategy', 'Pitch Architecture']
    },
    {
      id: 'gdg-covenant',
      company: 'Google Developer Groups · Game Developers Track & Systems R&D',
      role: 'Track Lead & Systems Researcher · Final Year Capstone',
      period: '2022 · 2026',
      status: 'Graduated',
      location: 'Ota, Nigeria',
      badge: 'GDG on Campus & BSc Capstone',
      highlight: 'Led game development initiatives for Google Developer Groups and conducted personal systems R&D for final year thesis project D MEX and spatial computing.',
      keyMetric: 'Game Dev Track & BSc Thesis',
      glowClass: 'bg-blue-500',
      accentGlow: 'rgba(66, 133, 244, 0.22)',
      accentBorder: 'rgba(66, 133, 244, 0.65)',
      logo: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:scale-110" fill="none">
          {/* Official GDG Colors: Blue, Red, Yellow, Green */}
          <path d="M7 7L3 12L7 17" stroke="#4285F4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M17 7L21 12L17 17" stroke="#34A853" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="9.5" r="1.5" fill="#EA4335" />
          <circle cx="12" cy="14.5" r="1.5" fill="#FBBC05" />
        </svg>
      ),
      deliverables: [
        'Directed game development workshops, spatial physics tutorials, and game engine sessions for the Google Developer Groups community',
        'Conducted personal systems R&D architecting D MEX cross chain atomic swap protocol as final year BSc thesis capstone at Covenant University',
        'Engineered CivOS distributed computing research prototype exploring living virtual world compute hierarchies',
        'Graduated with BSc in Computer Science with distinction in systems architecture and cryptographic protocols'
      ],
      technologies: ['Game Development', 'Unreal Engine 5', 'Solidity', 'C++', 'Three.js', 'BSc Capstone R&D']
    },
    {
      id: 'loom',
      company: 'LOOM',
      role: 'Spatial Systems & Digital Atelier Engineer',
      period: '2025 · Present',
      status: 'Unfinished Prototype',
      location: 'Global · Remote',
      badge: 'Recent Prototype',
      highlight: 'Engineering LOOM as an unfinished 3D spatial atelier prototype with real time WebGL cloth drape simulation and smart escrow pipelines.',
      keyMetric: 'Active Spatial Prototype',
      glowClass: 'bg-purple-500',
      accentGlow: 'rgba(168, 85, 247, 0.22)',
      accentBorder: 'rgba(168, 85, 247, 0.65)',
      logo: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:scale-110" fill="none">
          <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="#a855f7" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M12 22V12M20 7L12 12M4 7L12 12" stroke="#ec4899" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      ),
      deliverables: [
        'Constructing real time WebGL custom draping simulation with realistic fabric tensile physics in Three.js',
        'Engineering dual rail milestone escrow architecture connecting secure settlement with state transitions',
        'Iterating procedural mesh topology and parametric tailoring controls for spatial garment design',
        'Developing active prototype as an ongoing spatial computing and interactive web exploration'
      ],
      technologies: ['Three.js', 'React', 'WebGL Shaders', 'Spatial Topology', 'Procedural Mesh']
    },
    {
      id: 'codeplay',
      company: 'CodePlay Naija',
      role: 'Educational Technology Lead & Curriculum Architect',
      period: '2024 · 2025',
      status: 'Deployed',
      location: 'Lagos, Nigeria',
      badge: '200+ Trained',
      highlight: 'Designed and deployed computing literacy programs across Nigerian secondary schools with a 92% completion rate.',
      keyMetric: '92% Completion Rate Across Schools',
      glowClass: 'bg-amber-500',
      accentGlow: 'rgba(245, 158, 11, 0.22)',
      accentBorder: 'rgba(245, 158, 11, 0.65)',
      logo: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:scale-110" fill="none">
          <rect x="3" y="4" width="18" height="14" rx="3" stroke="#f59e0b" strokeWidth="1.8" />
          <path d="M7 10L10 12L7 14" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="12" y1="14" x2="16" y2="14" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
          <line x1="9" y1="20" x2="15" y2="20" stroke="currentColor" strokeWidth="1.8" className="text-[var(--text-muted)]" />
        </svg>
      ),
      deliverables: [
        'Authored comprehensive curriculum in algorithmic logic, Python programming, and modern web systems',
        'Trained over 200 secondary school students and educators with an unprecedented 92% completion rate',
        'Mentored emerging student engineering teams building practical utility tools for local community challenges',
        'Coordinated interactive hack nights and live code walk through sessions across partner institutions'
      ],
      technologies: ['Python', 'Curriculum Design', 'Algorithmic Logic', 'Mentorship', 'Community Systems']
    },
    {
      id: 'studio',
      company: 'Studio Practice & Brand Architecture',
      role: 'Principal FDE & Brand Systems Architect',
      period: '2023 · Present',
      status: 'Active',
      location: 'Lagos, Nigeria',
      badge: 'FDE & Creative Advisory',
      highlight: 'Directed luxury brand identity systems and fine art pointillism masterpieces exhibited at Spectrum Ori Art Exhibition.',
      keyMetric: 'Exhibited Fine Art & Brand Systems',
      glowClass: 'bg-yellow-500',
      accentGlow: 'rgba(234, 179, 8, 0.22)',
      accentBorder: 'rgba(234, 179, 8, 0.65)',
      logo: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:scale-110" fill="none">
          <circle cx="12" cy="12" r="8" stroke="#eab308" strokeWidth="1.8" strokeDasharray="2 2" />
          <circle cx="12" cy="12" r="3" fill="#ca8a04" />
          <path d="M12 2V6M12 18V22M2 12H6M18 12H22" stroke="#eab308" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
      deliverables: [
        'Engineered brand identity systems and digital flagship commerce for Abraham\'s Collection luxury house',
        'Advised technology founders and institutional ventures on unified brand narratives and interface systems',
        'Created pointillism ink masterpieces Illusion of Freedom and Morayo selected for Spectrum Ori Art Exhibition',
        'Crafted minimalist design systems characterized by mathematical proportion, typography tokens, and quiet authority'
      ],
      technologies: ['Design Systems', 'Brand Strategy', 'Fine Art', 'Luxury Systems', 'Spatial Identity']
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24 px-5 sm:px-8 max-w-6xl mx-auto border-t border-[var(--border-subtle)]">
      
      {/* Section Header */}
      <div className="mb-10 sm:mb-12">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
            <PersonalMark size={13} className="text-emerald-500" />
            <span>02 // Institutional & Professional Track Record</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
            Where I Have Worked & Engineered.
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl leading-relaxed">
            A verified record of corporate industrial training, university systems research, and commercial software engineering deployments. Every engagement demonstrates measurable technical ownership, production reliability, and disciplined architectural leadership.
          </p>
        </div>
      </div>

      {/* Experience Stream */}
      <div className="space-y-4 sm:space-y-5">
        {experiences.map((exp, index) => {
          const isExpanded = expandedId === exp.id;

          return (
            <div
              key={exp.id}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
              }}
              className={`group rounded-3xl ios-glass-card transition-all duration-300 relative overflow-hidden border ${
                isExpanded 
                  ? 'border-[var(--border-strong)] shadow-xl' 
                  : 'border-[var(--border-subtle)] hover:border-[var(--border-hover)]'
              }`}
            >
              {/* Dynamic Cursor-Responsive Ambient Accent Spotlight behind bars and pill bars */}
              <div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 overflow-hidden"
                style={{
                  background: `radial-gradient(480px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${exp.accentGlow || 'rgba(16, 185, 129, 0.22)'}, transparent 70%)`
                }}
              />

              {/* Dynamic Specular Border Glow following the cursor along the card boundary */}
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[1px] z-0 overflow-hidden"
                style={{
                  background: `radial-gradient(280px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${exp.accentBorder || 'rgba(16, 185, 129, 0.65)'}, transparent 65%)`,
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude'
                }}
              />

              {/* Resend Specular Top Edge Gleam */}
              <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none z-10" />

              {/* Card Summary */}
              <div className="p-5 sm:p-7 relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
                  
                  {/* Left: Metadata & Heading with Logo right beside the name */}
                  <div className="space-y-2 flex-1 max-w-2xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="w-6 h-6 rounded-xl ios-pill flex items-center justify-center text-[11px] font-mono font-bold text-[var(--text-primary)] shrink-0">
                        0{index + 1}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                        <Sparkles size={10} />
                        <span>{exp.badge}</span>
                      </span>
                      <span className="text-xs font-mono text-[var(--text-muted)] flex items-center gap-1">
                        <Calendar size={11} className="text-zinc-400" />
                        <span>{exp.period}</span>
                      </span>
                      <span className="text-[var(--text-muted)] text-xs">·</span>
                      <span className="text-xs font-mono text-[var(--text-muted)] flex items-center gap-1">
                        <MapPin size={11} className="text-zinc-400" />
                        <span>{exp.location}</span>
                      </span>
                    </div>

                    <div>
                      {/* Logo positioned directly beside the name for validity */}
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <span className="w-7 h-7 rounded-lg ios-pill flex items-center justify-center p-1 shrink-0 border border-[var(--border-subtle)] shadow-xs">
                          {exp.logo}
                        </span>
                        <h3 className="text-lg sm:text-xl font-extrabold text-[var(--text-primary)] tracking-tight title-hover-physics">
                          {exp.company}
                        </h3>
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-[var(--text-secondary)] mt-1">
                        {exp.role}
                      </div>
                    </div>

                    {/* Executive Highlight */}
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed pt-1">
                      {exp.highlight}
                    </p>
                  </div>

                  {/* Right: Deep Dive Interactive Trigger Button */}
                  <div className="flex items-center md:flex-col md:items-end justify-between gap-3 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-[var(--border-subtle)]">
                    <span className="text-[11px] font-mono px-3 py-1 rounded-full ios-pill text-[var(--text-muted)]">
                      {exp.keyMetric}
                    </span>

                    <button
                      onClick={() => toggleDeepDive(exp.id)}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 active:scale-95 border ${
                        isExpanded
                          ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-bold border-zinc-900 dark:border-white shadow-md'
                          : 'ios-pill text-[var(--text-primary)] hover:border-[var(--border-hover)]'
                      }`}
                      aria-expanded={isExpanded}
                      aria-label={`Deep dive details for ${exp.company}`}
                    >
                      <span>{isExpanded ? 'Collapse Details' : 'Deep Dive Details'}</span>
                      <ChevronDown
                        size={13}
                        className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                      />
                    </button>
                  </div>

                </div>

                {/* Deep Dive Expanded Section */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 mt-6 border-t border-[var(--border-subtle)] grid grid-cols-1 lg:grid-cols-12 gap-6">
                        
                        {/* Verified Deliverables */}
                        <div className="lg:col-span-8 space-y-3">
                          <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)]">
                            Technical Deliverables & Institutional Architecture
                          </div>
                          <ul className="space-y-2.5 text-xs text-[var(--text-secondary)]">
                            {exp.deliverables.map((del, dIdx) => (
                              <li key={dIdx} className="flex items-start gap-2.5">
                                <CheckCircle2 size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                                <span className="leading-relaxed">{del}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Core Technologies */}
                        <div className="lg:col-span-4 space-y-3">
                          <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)]">
                            Core Technologies
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.technologies.map((tech, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-3 py-1 rounded-full text-xs font-mono ios-pill text-[var(--text-secondary)]"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {exp.id === 'kucheza' && (
                            <div className="pt-2">
                              <div className="p-3 rounded-2xl ios-pill flex items-center justify-between gap-3 border border-[var(--border-subtle)]">
                                <div className="flex items-center gap-2">
                                  <img
                                    src="/media/kucheza_logo_dark.png"
                                    alt="Kucheza Gaming Brand"
                                    className="h-3.5 w-auto object-contain dark:hidden"
                                  />
                                  <img
                                    src="/media/kucheza_logo_white.png"
                                    alt="Kucheza Gaming Brand"
                                    className="h-3.5 w-auto object-contain hidden dark:block"
                                  />
                                </div>
                                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
                                  Official Brand Mark
                                </span>
                              </div>
                            </div>
                          )}
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
