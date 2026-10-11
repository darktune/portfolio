import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Monitor, Copy, Check, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PersonalMark from './PersonalMark';

export default function Navbar({ theme = 'system', setTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const themeMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (themeMenuRef.current && !themeMenuRef.current.contains(e.target)) {
        setThemeMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("abrahamtoluwani999@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  const navLinks = [
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Stack", href: "#stack" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'py-2.5' 
        : 'py-4 sm:py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className={`flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 ios-glass-nav border ${
          scrolled
            ? 'shadow-xl border-[var(--border-strong)]'
            : 'shadow-md border-[var(--border-subtle)]'
        }`}>
          
          {/* Brand & Personal Architect Insignia */}
          <a 
            href="#top" 
            className="group flex items-center gap-2.5 font-medium text-sm text-[var(--text-primary)] hover:opacity-85 transition-opacity"
          >
            <div className="icon-hover-physics text-[var(--text-primary)]">
              <PersonalMark size={16} />
            </div>
            <span className="font-semibold tracking-tight title-hover-physics">Abraham Toluwani</span>
            <span className="hidden lg:inline-block text-xs text-[var(--text-muted)] font-mono border-l border-[var(--border-strong)] pl-2.5">
              Systems Architect · Smart Contract Engineer
            </span>
          </a>

          {/* Center Navigation Links: Circular Pills */}
          <nav className="hidden md:flex items-center gap-1 ios-pill p-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-1.5 rounded-full text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] transition-all duration-160 active:scale-95"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions: Quick Copy Email & 3-Way Theme Component */}
          <div className="flex items-center gap-2">
            
            {/* Quick Copy Email */}
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono rounded-full ios-pill text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all group"
              aria-label="Copy email address"
            >
              <div className="icon-hover-physics">
                {copied ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
              </div>
              <span>{copied ? "Copied" : "Email"}</span>
            </button>

            {/* Collapsible Theme Pill Bar */}
            <div className="relative" ref={themeMenuRef}>
              <button
                onClick={() => setThemeMenuOpen(!themeMenuOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full ios-pill text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-all active:scale-95"
                aria-label="Toggle theme selection"
                aria-expanded={themeMenuOpen}
                title={`Theme: ${theme.charAt(0).toUpperCase() + theme.slice(1)}`}
              >
                <div className="icon-hover-physics">
                  {theme === 'light' && <Sun size={13} className="text-amber-500" />}
                  {theme === 'dark' && <Moon size={13} className="text-sky-400" />}
                  {theme === 'system' && <Monitor size={13} className="text-[var(--text-primary)]" />}
                </div>
                <ChevronDown size={11} className={`text-[var(--text-muted)] transition-transform duration-200 ${themeMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {themeMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.95 }}
                    transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}
                    className="absolute right-0 mt-2 p-1 rounded-2xl ios-glass-nav border border-[var(--border-strong)] shadow-2xl flex flex-col gap-0.5 min-w-[115px] z-50"
                  >
                    <button
                      onClick={() => { setTheme('light'); setThemeMenuOpen(false); }}
                      className={`flex items-center gap-2 px-2.5 py-1.5 rounded-xl text-xs font-mono transition-all text-left ${
                        theme === 'light'
                          ? 'bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] font-semibold shadow-xs'
                          : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]'
                      }`}
                    >
                      <Sun size={12} className="text-amber-500 shrink-0" />
                      <span>Light</span>
                    </button>
                    <button
                      onClick={() => { setTheme('dark'); setThemeMenuOpen(false); }}
                      className={`flex items-center gap-2 px-2.5 py-1.5 rounded-xl text-xs font-mono transition-all text-left ${
                        theme === 'dark'
                          ? 'bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] font-semibold shadow-xs'
                          : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]'
                      }`}
                    >
                      <Moon size={12} className="text-sky-400 shrink-0" />
                      <span>Dark</span>
                    </button>
                    <button
                      onClick={() => { setTheme('system'); setThemeMenuOpen(false); }}
                      className={`flex items-center gap-2 px-2.5 py-1.5 rounded-xl text-xs font-mono transition-all text-left ${
                        theme === 'system'
                          ? 'bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] font-semibold shadow-xs'
                          : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]'
                      }`}
                    >
                      <Monitor size={12} className="text-[var(--text-primary)] shrink-0" />
                      <span>System</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full ios-pill text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
            className="md:hidden mx-4 sm:mx-5 mt-2 p-4 rounded-3xl ios-glass-nav space-y-3 shadow-xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] py-2 px-3.5 rounded-full hover:bg-[var(--bg-subtle)]"
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={() => {
                handleCopyEmail();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left text-sm font-mono text-[var(--text-secondary)] py-2 px-3.5 rounded-full flex items-center justify-between bg-[var(--bg-subtle)]"
            >
              <span>abrahamtoluwani999@gmail.com</span>
              <span className="text-xs text-emerald-500 font-semibold">{copied ? "Copied!" : "Copy"}</span>
            </button>

            {/* Mobile Segmented Theme Selector */}
            <div className="pt-2 border-t border-[var(--border-subtle)] space-y-1.5">
              <div className="text-[11px] font-mono text-[var(--text-muted)] px-1">Theme Mode</div>
              <div className="grid grid-cols-3 gap-1 p-1 rounded-2xl ios-pill text-xs font-mono">
                <button
                  onClick={() => setTheme('light')}
                  className={`py-1.5 px-2 rounded-xl flex items-center justify-center gap-1.5 transition-all ${
                    theme === 'light' ? 'bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] font-bold shadow-xs' : 'text-[var(--text-muted)]'
                  }`}
                >
                  <Sun size={13} />
                  <span>Light</span>
                </button>
                <button
                  onClick={() => setTheme('dark')}
                  className={`py-1.5 px-2 rounded-xl flex items-center justify-center gap-1.5 transition-all ${
                    theme === 'dark' ? 'bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] font-bold shadow-xs' : 'text-[var(--text-muted)]'
                  }`}
                >
                  <Moon size={13} />
                  <span>Dark</span>
                </button>
                <button
                  onClick={() => setTheme('system')}
                  className={`py-1.5 px-2 rounded-xl flex items-center justify-center gap-1.5 transition-all ${
                    theme === 'system' ? 'bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] font-bold shadow-xs' : 'text-[var(--text-muted)]'
                  }`}
                >
                  <Monitor size={13} />
                  <span>System</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
