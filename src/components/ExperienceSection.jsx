import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ChevronDown, CheckCircle2, Award, Sparkles, Building2, ArrowUpRight } from 'lucide-react';
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
      role: 'Industrial Training Fellow · R&D & Esports Systems',
      period: 'Apr 2025 · Oct 2025',
      status: 'Completed',
      location: 'Lagos, Nigeria',
      badge: 'Tier 1 Industry',
      highlight: 'Engineered spatial 3D tournament booth architectures and tier 1 corporate pitch decks for MTN, Infinix, and Rexona.',
      keyMetric: '3D Spatial Staging & Enterprise Decks',
      deliverables: [
        'Designed interactive 3D tournament staging and exhibition booth layouts for national esports events',
        'Engineered high conversion corporate sponsorship pitch decks for MTN, Infinix, Fan Milk, and Rexona',
        'Authored and presented the Seplat Energy executive retreat keynote Bloom Beyond Limits',
        'Conducted spatial computing and audience engagement research for youth digital recreation'
      ],
      technologies: ['Unreal Engine 5', 'Blender', 'Spatial Staging', 'Enterprise Strategy', 'Pitch Architecture']
    },
    {
      id: 'covenant',
      company: 'Covenant University Research Labs',
      role: 'Systems Architect & Protocol Researcher',
      period: '2022 · 2026',
      status: 'Graduated',
      location: 'Ota, Nigeria',
      badge: 'BSc Computer Science',
      highlight: 'Spearheaded D MEX atomic cross chain swap protocol and CivOS 5 Tier distributed compute hierarchy with C++ memory bouncers.',
      keyMetric: 'Zero Counterparty Risk Protocols',
      deliverables: [
        'Spearheaded D MEX protocol development with hashed timelock contracts and zero centralized counterparty risk',
        'Engineered CivOS 5 Tier compute hierarchy research prototype with C++ memory bouncers and Kafka event streams',
        'Authored research on Olfactory Enhanced Entertainment Experience for multimodal sensory computing',
        'Graduated with BSc in Computer Science with focus on systems architecture and cryptographic primitives'
      ],
      technologies: ['C++', 'Solidity', 'Apache Kafka', 'Redis', 'ERC 4337', 'Memory Bouncers']
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
      role: 'Principal Brand Architect & Creative Director',
      period: '2023 · Present',
      status: 'Active',
      location: 'Lagos, Nigeria',
      badge: 'Creative Advisory',
      highlight: 'Directed luxury brand identity systems and fine art pointillism masterpieces exhibited at Spectrum Ori Art Exhibition.',
      keyMetric: 'Exhibited Fine Art & Brand Systems',
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
      
      {/* Section Header: Strict 2 Sentences, Zero Clutter, Zero Tabs */}
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

      {/* Experience Stream: Executive Highlights with Smooth Deep Dive Expansion */}
      <div className="space-y-4 sm:space-y-5">
        {experiences.map((exp, index) => {
          const isExpanded = expandedId === exp.id;

          return (
            <div
              key={exp.id}
              className={`group rounded-3xl ios-glass-card transition-all duration-300 relative overflow-hidden border ${
                isExpanded 
                  ? 'border-[var(--border-strong)] shadow-xl' 
                  : 'border-[var(--border-subtle)] hover:border-[var(--border-hover)]'
              }`}
            >
              {/* Resend Specular Top Edge Gleam */}
              <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

              {/* Card Summary: Uncluttered Executive View */}
              <div className="p-5 sm:p-7">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  
                  {/* Left: Metadata & Titles */}
                  <div className="space-y-2 max-w-2xl">
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
                      <h3 className="text-lg sm:text-xl font-extrabold text-[var(--text-primary)] tracking-tight title-hover-physics">
                        {exp.company}
                      </h3>
                      <div className="text-xs sm:text-sm font-semibold text-[var(--text-secondary)] mt-0.5">
                        {exp.role}
                      </div>
                    </div>

                    {/* Executive Highlight: Clean, Uncluttered at Rest */}
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

                {/* Deep Dive Expanded Section: Unfolds Smoothly with Framer Motion */}
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
                        
                        {/* Key Technical Deliverables */}
                        <div className="lg:col-span-8 space-y-3">
                          <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
                            Technical Deliverables & Institutional Architecture
                          </div>
                          <div className="space-y-2.5">
                            {exp.deliverables.map((item, dIdx) => (
                              <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                                <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                                <span className="leading-snug">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Systems & Technology Stack Chips */}
                        <div className="lg:col-span-4 space-y-3 lg:border-l lg:border-[var(--border-subtle)] lg:pl-6">
                          <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
                            Core Technologies
                          </div>
                          <div className="flex flex-wrap items-center gap-1.5">
                            {exp.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2.5 py-1 rounded-xl text-[11px] font-mono bg-black/5 dark:bg-white/5 border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
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

      {/* Verified Academic Accreditation Banner */}
      <div className="mt-10 p-6 rounded-3xl ios-glass-card border border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl ios-pill flex items-center justify-center text-emerald-500 shrink-0">
            <Award size={20} />
          </div>
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
              Verified Academic Credentials
            </div>
            <div className="text-sm font-bold text-[var(--text-primary)]">
              BSc in Computer Science · Covenant University Class of 2026
            </div>
          </div>
        </div>
        <div className="text-xs font-mono text-[var(--text-muted)] text-center sm:text-right">
          Systems Research · Cryptographic Protocols · Multimodal HCI
        </div>
      </div>

    </section>
  );
}
