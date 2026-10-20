import React, { useState, useEffect, useRef } from 'react';
import { 
  X, Play, Pause, Maximize2, ExternalLink, Code2, 
  ChevronLeft, ChevronRight, CheckCircle2, Award, 
  Terminal, ShieldCheck, Cpu, Layers, Sparkles, Volume2, VolumeX
} from 'lucide-react';
import { GithubIcon } from './Icons';
import ProjectLogo from './ProjectLogo';

export default function ProofOfWorkModal({ 
  project, 
  isOpen, 
  onClose, 
  onNext, 
  onPrev,
  onOpenCaseStudy 
}) {
  const [activeTab, setActiveTab] = useState('video'); // 'video' | 'images' | 'specs'
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [copiedCode, setCopiedCode] = useState(false);
  const videoRef = useRef(null);

  // Reset tab and image index when project changes
  useEffect(() => {
    if (project) {
      setActiveTab(project.hasVideo ? 'video' : 'images');
      setSelectedImageIndex(0);
      setIsPlaying(false);
    }
  }, [project]);

  // Handle escape key and scroll lock
  useEffect(() => {
    if (!isOpen || !project) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.removeProperty('overflow');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, project, onClose, onNext, onPrev]);

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

  const copySnippet = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } catch (e) {
      console.error(e);
    }
  };

  const images = project.gallery && project.gallery.length > 0 
    ? project.gallery 
    : [{ url: project.coverImage, title: project.title }];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-5xl max-h-[92vh] bg-[var(--bg)] border border-[var(--line)] shadow-2xl rounded-xl flex flex-col overflow-hidden text-[var(--fg)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ─── MODAL HEADER ─── */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--line)] bg-[var(--bg-subtle)]">
          <div className="flex items-center gap-3 overflow-hidden">
            <span className="font-mono text-xs px-2 py-0.5 rounded bg-[var(--panel)] border border-[var(--line)] text-[var(--fg-muted)]">
              {project.code}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-md ios-pill flex items-center justify-center p-0.5 shrink-0 border border-zinc-200/80 dark:border-zinc-800 shadow-xs">
                  <ProjectLogo project={project} size={15} />
                </span>
                <h2 className="text-base sm:text-lg font-bold tracking-tight truncate">
                  {project.title}
                </h2>
                {project.badge && (
                  <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    <Sparkles size={11} />
                    {project.badge}
                  </span>
                )}
              </div>
              <p className="text-xs text-[var(--fg-muted)] truncate max-w-md">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Controls Right */}
          <div className="flex items-center gap-2">
            {/* Prev / Next */}
            <div className="hidden sm:flex items-center gap-1 border border-[var(--line)] rounded-lg p-0.5 bg-[var(--panel)]">
              <button 
                onClick={onPrev}
                className="p-1 rounded hover:bg-[var(--bg)] text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors"
                title="Previous Project (Left Arrow)"
              >
                <ChevronLeft size={16} />
              </button>
              <button 
                onClick={onNext}
                className="p-1 rounded hover:bg-[var(--bg)] text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors"
                title="Next Project (Right Arrow)"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg border border-[var(--line)] hover:bg-[var(--panel)] text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors"
              title="Close (Esc)"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* ─── TAB NAVIGATION ─── */}
        <div className="flex items-center px-5 border-b border-[var(--line)] bg-[var(--bg)] text-xs font-mono">
          {project.hasVideo && (
            <button
              onClick={() => setActiveTab('video')}
              className={`flex items-center gap-1.5 py-2.5 px-3 border-b-2 font-medium transition-colors ${
                activeTab === 'video'
                  ? 'border-[var(--fg)] text-[var(--fg)]'
                  : 'border-transparent text-[var(--fg-muted)] hover:text-[var(--fg)]'
              }`}
            >
              <Play size={13} className="text-emerald-500 fill-emerald-500/30" />
              <span>VIDEO WALKTHROUGH</span>
            </button>
          )}

          <button
            onClick={() => setActiveTab('images')}
            className={`flex items-center gap-1.5 py-2.5 px-3 border-b-2 font-medium transition-colors ${
              activeTab === 'images'
                ? 'border-[var(--fg)] text-[var(--fg)]'
                : 'border-transparent text-[var(--fg-muted)] hover:text-[var(--fg)]'
            }`}
          >
            <Layers size={13} />
            <span>VISUAL PROOF ({images.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('specs')}
            className={`flex items-center gap-1.5 py-2.5 px-3 border-b-2 font-medium transition-colors ${
              activeTab === 'specs'
                ? 'border-[var(--fg)] text-[var(--fg)]'
                : 'border-transparent text-[var(--fg-muted)] hover:text-[var(--fg)]'
            }`}
          >
            <Code2 size={13} />
            <span>TECHNICAL SPECS & CODE</span>
          </button>
        </div>

        {/* ─── TAB CONTENT (SCROLLABLE) ─── */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {/* TAB 1: VIDEO WALKTHROUGH */}
          {activeTab === 'video' && project.hasVideo && (
            <div className="space-y-4">
              <div className="relative aspect-video rounded-lg overflow-hidden bg-black border border-[var(--line)] shadow-lg group">
                <video
                  ref={videoRef}
                  src={project.videoUrl}
                  poster={project.coverImage}
                  preload="none"
                  className="w-full h-full object-contain cursor-pointer"
                  onClick={togglePlay}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  muted={isMuted}
                  playsInline
                  controls
                />
              </div>

              {/* Video Info Card */}
              <div className="p-4 rounded-lg bg-[var(--panel)] border border-[var(--line)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-semibold text-[var(--fg)]">
                    Verified Execution Demonstration
                  </h4>
                  <p className="text-xs text-[var(--fg-muted)] mt-0.5">
                    Live system execution capture displaying real-time state transitions and UI pipeline.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="px-2 py-1 rounded bg-[var(--bg)] border border-[var(--line)] text-emerald-600 dark:text-emerald-400 font-semibold">
                    1080P HD
                  </span>
                  <span className="px-2 py-1 rounded bg-[var(--bg)] border border-[var(--line)] text-[var(--fg-muted)]">
                    VERIFIED POW
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: HIGH-RES VISUAL PROOFS */}
          {activeTab === 'images' && (
            <div className="space-y-4">
              {/* Main Active Image Viewport */}
              <div className="relative aspect-[16/10] sm:aspect-video rounded-lg overflow-hidden bg-zinc-950 border border-[var(--line)] flex items-center justify-center group shadow-md">
                <img
                  src={images[selectedImageIndex]?.url}
                  alt={images[selectedImageIndex]?.title || project.title}
                  className="w-full h-full object-contain"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white text-xs font-mono flex items-center justify-between">
                  <span className="truncate pr-4 font-sans text-sm font-medium">
                    {images[selectedImageIndex]?.title || project.title}
                  </span>
                  <span className="opacity-75 shrink-0">
                    {selectedImageIndex + 1} / {images.length}
                  </span>
                </div>
              </div>

              {/* Thumbnails (if multiple) */}
              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`relative w-24 h-16 rounded-md overflow-hidden border-2 shrink-0 transition-all ${
                        selectedImageIndex === idx
                          ? 'border-[var(--fg)] opacity-100 scale-102'
                          : 'border-transparent opacity-60 hover:opacity-90'
                      }`}
                    >
                      <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: TECHNICAL SPECS & CODE */}
          {activeTab === 'specs' && (
            <div className="space-y-6">
              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.metrics?.map((m, i) => (
                  <div key={i} className="p-4 rounded-lg bg-[var(--panel)] border border-[var(--line)]">
                    <div className="text-xl sm:text-2xl font-bold font-mono text-[var(--fg)]">
                      {m.value}
                    </div>
                    <div className="text-xs text-[var(--fg-muted)] mt-1 uppercase tracking-wider font-mono">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Verified Proof Highlights */}
              <div className="p-4 rounded-lg bg-[var(--bg-subtle)] border border-[var(--line)] space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--fg-muted)] font-semibold">
                  Engineering Highlights & Architectural Proof
                </h4>
                <ul className="space-y-2">
                  {project.powHighlights?.map((hl, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--fg)] leading-relaxed">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--fg-muted)] mb-2 font-semibold">
                  Production Tech Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack?.map((t, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-mono px-2.5 py-1 rounded bg-[var(--panel)] border border-[var(--line)] text-[var(--fg)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Code Snippet */}
              {project.caseStudy?.codeSnippet && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--fg-muted)] font-semibold">
                      Core Implementation Logic
                    </h4>
                    <button
                      onClick={() => copySnippet(project.caseStudy.codeSnippet)}
                      className="text-[11px] font-mono text-[var(--fg-muted)] hover:text-[var(--fg)] px-2 py-0.5 rounded border border-[var(--line)] hover:bg-[var(--panel)] transition-colors"
                    >
                      {copiedCode ? 'COPIED ✓' : 'COPY CODE'}
                    </button>
                  </div>
                  <pre className="p-4 rounded-lg bg-zinc-950 text-zinc-200 font-mono text-xs overflow-x-auto border border-zinc-800 leading-relaxed">
                    <code>{project.caseStudy.codeSnippet}</code>
                  </pre>
                </div>
              )}
            </div>
          )}

          {/* ─── SUMMARY CARD (ALWAYS VISIBLE) ─── */}
          <div className="p-4 rounded-lg bg-[var(--panel)] border border-[var(--line)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-[var(--fg-muted)] uppercase tracking-wider">
                Project Summary
              </span>
              <p className="text-xs sm:text-sm text-[var(--fg)] max-w-2xl leading-relaxed">
                {project.summary}
              </p>
            </div>
            
            <div className="flex items-center gap-2 shrink-0">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono rounded bg-[var(--bg)] border border-[var(--line)] hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>REPOSITORY</span>
                  <ExternalLink size={12} />
                </a>
              )}
              {onOpenCaseStudy && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenCaseStudy(project);
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono font-medium rounded bg-[var(--fg)] text-[var(--bg)] hover:opacity-90 transition-opacity"
                >
                  <span>FULL DOSSIER</span>
                  <span>→</span>
                </button>
              )}
            </div>
          </div>

        </div>

        {/* ─── MODAL FOOTER ─── */}
        <div className="px-5 py-3 border-t border-[var(--line)] bg-[var(--bg-subtle)] flex items-center justify-between text-xs font-mono text-[var(--fg-muted)]">
          <div className="flex items-center gap-2">
            <span>ROLE:</span>
            <span className="text-[var(--fg)] font-medium">{project.role}</span>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={onPrev}
              className="hover:text-[var(--fg)] transition-colors flex items-center gap-1"
            >
              <span>← PREV</span>
            </button>
            <span>•</span>
            <button 
              onClick={onNext}
              className="hover:text-[var(--fg)] transition-colors flex items-center gap-1"
            >
              <span>NEXT →</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
