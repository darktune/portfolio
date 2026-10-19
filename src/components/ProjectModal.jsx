import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause, Volume2, VolumeX, ExternalLink, Code2, Check, Copy } from 'lucide-react';
import { GithubIcon } from './Icons';
import ProjectThinkingTree from './ProjectThinkingTree';
import ProjectLogo from './ProjectLogo';

export default function ProjectModal({ project, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('highlights'); // 'highlights' | 'thinkingTree' | 'caseStudy'
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [copiedCode, setCopiedCode] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (project) {
      setActiveTab(project.initialTab || 'highlights');
      setIsPlaying(false);
    }
  }, [project]);

  useEffect(() => {
    if (!isOpen || !project) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.removeProperty('overflow');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, project, onClose]);

  if (!isOpen || !project) return null;

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const copySnippet = async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        
        {/* Backdrop with High Blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window: iOS 26 Glassmorphic Window & Emil Spring Motion */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ type: "spring", bounce: 0, duration: 0.28 }}
          className="relative w-full max-w-3xl max-h-[88vh] ios-glass rounded-3xl shadow-2xl overflow-y-auto flex flex-col z-10 my-auto"
        >
          
          {/* Header Bar */}
          <div className="sticky top-0 z-20 bg-[var(--bg-surface-elevated)] backdrop-blur-xl px-6 sm:px-8 py-4 border-b border-[var(--border-subtle)] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
                {project.statusBadge}
              </span>
              <span className="text-zinc-300 dark:text-zinc-700">|</span>
              <span className="text-xs font-mono text-[var(--text-muted)]">
                {project.year} // {project.category}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all group"
                  title="Open Live Site"
                >
                  <div className="icon-hover-physics">
                    <ExternalLink size={15} />
                  </div>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all group"
                  title="View GitHub Repository"
                >
                  <div className="icon-hover-physics">
                    <GithubIcon size={15} />
                  </div>
                </a>
              )}
              <button
                onClick={onClose}
                className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all active:scale-90"
                aria-label="Close dialog"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Title & Subtitle */}
            <div className="space-y-1.5">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--text-primary)] flex items-center gap-3 flex-wrap">
                <span className="w-8 h-8 rounded-xl ios-pill flex items-center justify-center p-1.5 shrink-0 border border-[var(--border-subtle)] shadow-xs">
                  <ProjectLogo project={project} size={22} />
                </span>
                <span>{project.title}</span>
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-secondary)]">
                {project.subtitle}
              </p>
            </div>

            {/* Media Presentation: Video, Cover or Architectural Blueprint */}
            {project.coverImage || (project.hasVideo && project.videoUrl) ? (
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black/90 border border-white/10 shadow-lg">
                {project.hasVideo && project.videoUrl ? (
                  <>
                    <video
                      ref={videoRef}
                      src={project.videoUrl}
                      poster={project.coverImage}
                      playsInline
                      loop
                      muted={isMuted}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-3 right-3 flex items-center gap-2 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-mono text-white border border-white/20">
                      <button onClick={togglePlay} className="hover:opacity-80 active:scale-90">
                        {isPlaying ? <Pause size={14} /> : <Play size={14} className="fill-white" />}
                      </button>
                      <button onClick={toggleMute} className="hover:opacity-80 active:scale-90">
                        {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                      </button>
                    </div>
                  </>
                ) : (
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            ) : (
              <div className="relative rounded-2xl overflow-hidden p-6 bg-zinc-50/50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 space-y-4">
                <div className="relative z-10 flex items-center justify-between text-xs font-mono">
                  <span className="font-semibold text-zinc-900 dark:text-white uppercase tracking-wider">
                    SYSTEM BLUEPRINT // {project.code || '01'}
                  </span>
                  <span className="text-zinc-500">{project.year} · {project.category}</span>
                </div>
                <div className="relative z-10 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-mono leading-relaxed">
                  {project.summary}
                </div>
                <div className="relative z-10 pt-1 flex flex-wrap gap-2 text-[11px] font-mono text-zinc-500">
                  {project.techStack?.map((tech, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-md border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="relative z-10 pt-2 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>STATUS // SYSTEM LOGIC & CODE INVARIANTS VERIFIED</span>
                  <span className="text-zinc-900 dark:text-white font-medium">READY FOR ASSET INGESTION</span>
                </div>
              </div>
            )}

            {/* Clean Typographic Navigation Tabs */}
            <div className="flex items-center gap-4 border-b border-[var(--border-subtle)] pb-2 text-xs font-mono overflow-x-auto no-scrollbar">
              <button
                onClick={() => setActiveTab('highlights')}
                className={`pb-2 px-1 font-medium transition-colors border-b-2 -mb-2 shrink-0 ${
                  activeTab === 'highlights'
                    ? 'border-zinc-950 dark:border-white text-zinc-950 dark:text-white font-bold'
                    : 'border-transparent text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
                }`}
              >
                Highlights
              </button>
              {project.thinkingTree && (
                <button
                  onClick={() => setActiveTab('thinkingTree')}
                  className={`pb-2 px-1 font-medium transition-colors border-b-2 -mb-2 shrink-0 ${
                    activeTab === 'thinkingTree'
                      ? 'border-zinc-950 dark:border-white text-zinc-950 dark:text-white font-bold'
                      : 'border-transparent text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
                  }`}
                >
                  <span>Thinking Flow</span>
                </button>
              )}
              {project.caseStudy && (
                <button
                  onClick={() => setActiveTab('caseStudy')}
                  className={`pb-2 px-1 font-medium transition-colors border-b-2 -mb-2 shrink-0 ${
                    activeTab === 'caseStudy'
                      ? 'border-zinc-950 dark:border-white text-zinc-950 dark:text-white font-bold'
                      : 'border-transparent text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
                  }`}
                >
                  Architecture & Code
                </button>
              )}
            </div>

            {/* Tab: Highlights */}
            {activeTab === 'highlights' && (
              <div className="space-y-4">
                <div className="p-5 rounded-2xl ios-glass-card space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
                    Verified Deliverables
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                    {project.finishedHighlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-emerald-500 font-bold shrink-0 mt-0.5">✓</span>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics Row */}
                <div className="grid grid-cols-3 gap-3 text-center">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40">
                      <div className="text-[11px] font-mono text-zinc-500">{metric.label}</div>
                      <div className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white mt-1">{metric.value}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono text-zinc-500">Production Tech Stack</div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 text-xs font-mono rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tab: Thinking Process Tree */}
            {activeTab === 'thinkingTree' && (
              <ProjectThinkingTree project={project} />
            )}

            {/* Tab: Case Study */}
            {activeTab === 'caseStudy' && project.caseStudy && (
              <div className="space-y-5 text-xs sm:text-sm text-[var(--text-secondary)]">
                {project.caseStudy.problem && (
                  <div className="space-y-1.5">
                    <h4 className="font-mono text-xs font-bold text-[var(--text-primary)] uppercase">The Problem</h4>
                    <p className="leading-relaxed">{project.caseStudy.problem}</p>
                  </div>
                )}
                {project.caseStudy.solution && (
                  <div className="space-y-1.5">
                    <h4 className="font-mono text-xs font-bold text-[var(--text-primary)] uppercase">The Architectural Solution</h4>
                    <p className="leading-relaxed">{project.caseStudy.solution}</p>
                  </div>
                )}
                {project.caseStudy.breakthrough && (
                  <div className="space-y-1.5">
                    <h4 className="font-mono text-xs font-bold text-[var(--text-primary)] uppercase">Core Breakthrough</h4>
                    <p className="leading-relaxed">{project.caseStudy.breakthrough}</p>
                  </div>
                )}
                {project.caseStudy.codeSnippet && (
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
                      <span className="flex items-center gap-1.5">
                        <Code2 size={13} />
                        <span>Core Code Verification</span>
                      </span>
                      <button
                        onClick={() => copySnippet(project.caseStudy.codeSnippet)}
                        className="inline-flex items-center gap-1 hover:text-[var(--text-primary)] transition-colors active:scale-95"
                      >
                        {copiedCode ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
                        <span>{copiedCode ? "Copied" : "Copy Code"}</span>
                      </button>
                    </div>
                    <pre className="p-4 rounded-2xl bg-[var(--code-bg)] text-[var(--text-primary)] font-mono text-[11px] overflow-x-auto border border-[var(--border-subtle)] leading-relaxed">
                      <code>{project.caseStudy.codeSnippet}</code>
                    </pre>
                  </div>
                )}
              </div>
            )}

          </div>

          {/* Sticky Bottom Actions */}
          <div className="sticky bottom-0 bg-[var(--bg-surface-elevated)] backdrop-blur-xl px-6 sm:px-8 py-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
            <div className="flex items-center gap-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 active:scale-95 transition-all shadow-md group"
                >
                  <span className="font-medium text-white dark:text-zinc-950">Open Live Site</span>
                  <ExternalLink size={13} className="text-white dark:text-zinc-950 group-hover:translate-x-0.5 transition-transform" />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-all active:scale-95"
                >
                  <GithubIcon size={14} />
                  <span>View Code</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            >
              Close [Esc]
            </button>
          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
}
