import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause, Volume2, VolumeX, ExternalLink, Code2, Check, Copy } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('highlights'); // 'highlights' | 'caseStudy' | 'video'
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [copiedCode, setCopiedCode] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (project) {
      setActiveTab('highlights');
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
            <div className="flex items-center gap-2.5">
              <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold ios-pill text-[var(--badge-text)]">
                {project.statusBadge}
              </span>
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
                  className="p-2 rounded-full ios-pill text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all group"
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
                  className="p-2 rounded-full ios-pill text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all group"
                  title="View GitHub Repository"
                >
                  <div className="icon-hover-physics">
                    <GithubIcon size={15} />
                  </div>
                </a>
              )}
              <button
                onClick={onClose}
                className="p-2 rounded-full ios-pill text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all active:scale-90"
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
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--text-primary)]">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-secondary)]">
                {project.subtitle}
              </p>
            </div>

            {/* Media Presentation: Video or Cover */}
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

            {/* Circular Navigation Tabs */}
            <div className="flex items-center gap-2 border-b border-[var(--border-subtle)] pb-2 text-xs font-mono">
              <button
                onClick={() => setActiveTab('highlights')}
                className={`pb-2 px-2 font-medium transition-colors border-b-2 -mb-2 ${
                  activeTab === 'highlights'
                    ? 'border-[var(--text-primary)] text-[var(--text-primary)] font-bold'
                    : 'border-transparent text-[var(--text-muted)] hover:text-[var(--text-secondary)]'
                }`}
              >
                Finished Highlights
              </button>
              {project.caseStudy && (
                <button
                  onClick={() => setActiveTab('caseStudy')}
                  className={`pb-2 px-2 font-medium transition-colors border-b-2 -mb-2 ${
                    activeTab === 'caseStudy'
                      ? 'border-[var(--text-primary)] text-[var(--text-primary)] font-bold'
                      : 'border-transparent text-[var(--text-muted)] hover:text-[var(--text-secondary)]'
                  }`}
                >
                  Architecture & Code Verification
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
                    <div key={idx} className="p-3.5 rounded-2xl ios-pill">
                      <div className="text-[11px] font-mono text-[var(--text-muted)]">{metric.label}</div>
                      <div className="text-sm sm:text-base font-bold text-[var(--text-primary)] mt-1">{metric.value}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono text-[var(--text-muted)]">Production Tech Stack</div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 text-xs font-mono rounded-full ios-pill text-[var(--text-secondary)]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
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
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold bg-[var(--text-primary)] text-[var(--bg-canvas)] hover:opacity-90 active:scale-95 transition-all shadow-sm"
                >
                  <span>Open Live Application</span>
                  <ExternalLink size={13} />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-mono ios-pill text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all active:scale-95"
                >
                  <GithubIcon size={14} />
                  <span>View Repository</span>
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
