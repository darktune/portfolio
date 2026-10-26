import React, { useState, useRef, useEffect } from 'react';
import { Copy, Check, ArrowUpRight, Mail, Phone, ChevronDown, MessageSquare, Send, PhoneCall, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GithubIcon, LinkedinIcon, XIcon } from './Icons';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [phoneMenuOpen, setPhoneMenuOpen] = useState(false);
  const phoneMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (phoneMenuRef.current && !phoneMenuRef.current.contains(e.target)) {
        setPhoneMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("abrahamtoluwani999@gmail.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch (err) {
      console.error(err);
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText("09073104477");
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2200);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-5 sm:px-8 max-w-6xl mx-auto border-t border-[var(--border-subtle)]">
      
      <div className="rounded-3xl ios-glass-card p-8 sm:p-12 md:p-16 flex flex-col md:flex-row md:items-start justify-between gap-8">
        
        <div className="space-y-4 max-w-xl">
          <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
            03 // Direct Transmission
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] leading-tight">
            Let's build something exceptional.
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            I am actively open to engineering roles across smart contract development, systems architecture, and research. Feel free to reach out directly by email or through any of my verified channels.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            
            {/* Email Pill Bar: Prominently Visible in Dark Theme */}
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs sm:text-sm font-mono font-medium transition-all active:scale-95 group bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border border-zinc-300 dark:bg-zinc-900/90 dark:text-zinc-100 dark:border-zinc-700/90 dark:hover:border-zinc-500 dark:hover:bg-zinc-800/90 dark:shadow-[0_2px_16px_rgba(0,0,0,0.5)]"
              title="Copy email address"
            >
              <div className="icon-hover-physics">
                {copiedEmail ? <Check size={16} className="text-emerald-500" /> : <Mail size={16} className="text-zinc-700 dark:text-zinc-300" />}
              </div>
              <span>{copiedEmail ? "Email Copied!" : "abrahamtoluwani999@gmail.com"}</span>
            </button>

            {/* Collapsible Phone Pill Bar (WhatsApp, Telegram, Voice Call, Copy) */}
            <div className="relative" ref={phoneMenuRef}>
              <button
                onClick={() => setPhoneMenuOpen(!phoneMenuOpen)}
                className="w-full sm:w-auto inline-flex items-center justify-between gap-3 px-6 py-3.5 rounded-full text-xs sm:text-sm font-mono font-medium transition-all active:scale-95 group bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border border-zinc-300 dark:bg-zinc-900/90 dark:text-zinc-100 dark:border-zinc-700/90 dark:hover:border-zinc-500 dark:hover:bg-zinc-800/90 dark:shadow-[0_2px_16px_rgba(0,0,0,0.5)]"
                aria-expanded={phoneMenuOpen}
                aria-label="Toggle phone communication options"
              >
                <div className="flex items-center gap-2.5">
                  <div className="icon-hover-physics">
                    <Phone size={16} className="text-emerald-500" />
                  </div>
                  <span>09073104477</span>
                </div>
                <ChevronDown 
                  size={14} 
                  className={`text-[var(--text-muted)] transition-transform duration-200 ${phoneMenuOpen ? 'rotate-180' : ''}`} 
                />
              </button>

              <AnimatePresence>
                {phoneMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}
                    className="absolute left-0 mt-2 p-2 rounded-2xl ios-glass-nav border border-[var(--border-strong)] shadow-2xl flex flex-col gap-1.5 min-w-[270px] z-30"
                  >
                    <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] border-b border-[var(--border-subtle)]">
                      Direct Communication Channels
                    </div>

                    {/* WhatsApp */}
                    <a
                      href="https://wa.me/2349073104477"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-mono text-[var(--text-primary)] hover:bg-[var(--bg-subtle)] transition-all group"
                    >
                      <div className="flex items-center gap-2.5">
                        <MessageSquare size={14} className="text-emerald-500 shrink-0" />
                        <span className="font-medium">WhatsApp Direct</span>
                      </div>
                      <ArrowUpRight size={13} className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)]" />
                    </a>

                    {/* Telegram */}
                    <a
                      href="https://t.me/+2349073104477"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-mono text-[var(--text-primary)] hover:bg-[var(--bg-subtle)] transition-all group"
                    >
                      <div className="flex items-center gap-2.5">
                        <Send size={14} className="text-sky-400 shrink-0" />
                        <span className="font-medium">Telegram Direct</span>
                      </div>
                      <ArrowUpRight size={13} className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)]" />
                    </a>

                    {/* Direct Voice Call */}
                    <a
                      href="tel:+2349073104477"
                      className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-mono text-[var(--text-primary)] hover:bg-[var(--bg-subtle)] transition-all group"
                    >
                      <div className="flex items-center gap-2.5">
                        <PhoneCall size={14} className="text-emerald-400 shrink-0" />
                        <span className="font-medium">Voice Call</span>
                      </div>
                      <ArrowUpRight size={13} className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)]" />
                    </a>

                    {/* Copy Phone Number */}
                    <button
                      onClick={handleCopyPhone}
                      className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)] transition-all text-left"
                    >
                      <div className="flex items-center gap-2.5">
                        {copiedPhone ? <Check size={14} className="text-emerald-500 shrink-0" /> : <Copy size={14} className="shrink-0" />}
                        <span>{copiedPhone ? "Number Copied!" : "Copy Phone Number"}</span>
                      </div>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>

        {/* Channel Links: Circular iOS Glassmorphic Pills with Hover Physics */}
        <div className="flex flex-col gap-3 min-w-[210px]">
          <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider pl-1">
            Verified Channels
          </div>

          <a
            href="https://github.com/abraham-DT"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 rounded-2xl ios-pill text-xs font-mono text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-all group"
          >
            <div className="flex items-center gap-2.5">
              <div className="icon-hover-physics">
                <GithubIcon size={16} />
              </div>
              <span className="font-medium">GitHub</span>
            </div>
            <ArrowUpRight size={14} className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors" />
          </a>

          <a
            href="https://www.linkedin.com/in/abraham-toluwani-724391219"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 rounded-2xl ios-pill text-xs font-mono text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-all group"
          >
            <div className="flex items-center gap-2.5">
              <div className="icon-hover-physics">
                <LinkedinIcon size={16} />
              </div>
              <span className="font-medium">LinkedIn</span>
            </div>
            <ArrowUpRight size={14} className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors" />
          </a>

          <a
            href="https://x.com/AbrahamToluwan1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 rounded-2xl ios-pill text-xs font-mono text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-all group"
          >
            <div className="flex items-center gap-2.5">
              <div className="icon-hover-physics">
                <XIcon size={16} />
              </div>
              <span className="font-medium">X (Twitter)</span>
            </div>
            <ArrowUpRight size={14} className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors" />
          </a>

          <a
            href="/Toluwani_Abraham_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Toluwani_Abraham_Resume.pdf"
            className="flex items-center justify-between p-3.5 rounded-2xl ios-pill text-xs font-mono text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-all group"
          >
            <div className="flex items-center gap-2.5">
              <div className="icon-hover-physics">
                <FileText size={16} className="text-zinc-700 dark:text-zinc-300" />
              </div>
              <span className="font-medium">Technical Resume</span>
            </div>
            <ArrowUpRight size={14} className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors" />
          </a>
        </div>

      </div>

    </section>
  );
}
