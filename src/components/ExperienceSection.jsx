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
        <svg viewBox="0 0 32 32" className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:scale-110" fill="none">
          <path
            d="M32.0052 11.953L27.9593 16.0047L32.0052 20.0563V32.0035H17.1799V24.9897H14.8252V32.0035H0V0.00488281H14.8252V7.01865H17.1799V0.00488281H32.0052V11.953Z"
            className="fill-zinc-950 dark:fill-[#24F2BE] transition-colors"
          />
          <circle cx="28" cy="16" r="2.2" className="fill-emerald-500 dark:fill-white" />
        </svg>
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
      id: 'blueshels',
      company: 'Blueshels Ltd',
      role: 'Web Designer & Frontend UI Engineer',
      period: '2024 · 2025',
      status: 'Completed',
      location: 'Lagos, Nigeria',
      badge: 'Frontend & UI Engineering',
      highlight: 'Engineered responsive web interfaces and digital campaign infrastructure, optimizing asset delivery to achieve sub second load times.',
      keyMetric: '28% Checkout Conversion Increase',
      glowClass: 'bg-sky-500',
      accentGlow: 'rgba(2, 132, 199, 0.22)',
      accentBorder: 'rgba(56, 189, 248, 0.65)',
      logo: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:scale-110" fill="none">
          <path d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12" stroke="#0284c7" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="12" cy="12" r="2.2" fill="#38bdf8" />
        </svg>
      ),
      deliverables: [
        'Engineered responsive web interfaces and digital campaign infrastructure, optimizing asset delivery to achieve sub second load times',
        'Implemented accessible design systems conforming to WCAG 2.1 guidelines across enterprise client properties',
        'Structured high converting checkout funnels and performance optimized storefronts, boosting client conversion by 28%',
        'Built reusable modular component libraries in React, Tailwind CSS, and TypeScript with fluid responsive layout scaling'
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Design Systems', 'WCAG 2.1', 'Web Performance']
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
                                  <svg viewBox="0 0 248 32" className="h-4 w-auto fill-zinc-950 dark:fill-white">
                                    <path d="M96.8667 14.8265V17.1822H103.88V32.0074H77.4894L71.8818 26.3996V5.61654L77.4894 0.0078125H103.88V14.833L96.8667 14.8265Z" />
                                    <path d="M139.818 0.00488281V32.0044H125.001V24.9907H122.641V32.0044H107.824V0.00488281H122.641V7.01865H125.001V0.00488281H139.818Z" />
                                    <path d="M168.741 9.37432V11.7302H175.76V20.2744H168.741V22.6292H175.76V32.0026H143.761V0.00488281H175.76V9.37829L168.741 9.37432Z" />
                                    <path d="M211.697 15.9995L200.813 22.6299H211.697V32.0033H179.697V16.0035L190.577 9.37317H179.697V0H211.697V15.9995Z" />
                                    <path d="M215.636 0.00488281V32.0044H230.461V24.9907H232.816V32.0044H247.641V0.00488281H215.636ZM232.813 19.512H230.458V12.4982H232.813V19.512Z" />
                                    <path d="M32.0052 11.953L27.9593 16.0047L32.0052 20.0563V32.0035H17.1799V24.9897H14.8252V32.0035H0V0.00488281H14.8252V7.01865H17.1799V0.00488281H32.0052V11.953Z" className="fill-emerald-600 dark:fill-[#24F2BE]" />
                                    <path d="M67.9376 0.00488281V26.3957L62.3347 32.0035H41.547L35.9395 26.3957V0.00488281H50.7647V7.01865H53.1194V0.00488281H67.9376Z" />
                                  </svg>
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
