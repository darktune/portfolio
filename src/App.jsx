import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import TechStackSection from './components/TechStackSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import GwenFloatingChat from './components/GwenFloatingChat';
import NightLightEssence from './components/NightLightEssence';
import CustomCursor from './components/CustomCursor';
import { finishedProjectsData } from './data/finishedProjects';

export default function App() {
  // Theme state: 'light' | 'dark' | 'system', persisted in localStorage
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme_mode');
      if (saved === 'light' || saved === 'dark' || saved === 'system') return saved;
    }
    return 'system';
  });

  // Active project for deep detail modal
  const [selectedProject, setSelectedProject] = useState(null);

  // Gwen AI Floating Assistant state
  const [isGwenOpen, setIsGwenOpen] = useState(false);
  const [gwenExternalPrompt, setGwenExternalPrompt] = useState('');

  // Sync theme class and data-theme attribute on document root (with system preference listener)
  useEffect(() => {
    const applyTheme = (isDark) => {
      if (isDark) {
        document.documentElement.classList.add('dark');
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.setAttribute('data-theme', 'light');
      }
    };

    localStorage.setItem('theme_mode', theme);

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      applyTheme(mediaQuery.matches);

      const handleSystemThemeChange = (e) => {
        applyTheme(e.matches);
      };
      mediaQuery.addEventListener('change', handleSystemThemeChange);
      return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
    } else {
      applyTheme(theme === 'dark');
    }
  }, [theme]);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenGwen = (prompt) => {
    setIsGwenOpen(true);
    if (prompt && typeof prompt === 'string') {
      setGwenExternalPrompt(prompt);
    }
  };

  const handleOpenProjectById = (projectId) => {
    const proj = finishedProjectsData.find(p => p.id === projectId);
    if (proj) {
      setSelectedProject(proj);
    }
  };

  return (
    <div className="relative min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)] transition-colors duration-200 selection:bg-[var(--text-primary)] selection:text-[var(--bg-canvas)] overflow-x-hidden">
      
      {/* Precision Techy Reticle & Telemetry Cursor */}
      <CustomCursor />

      {/* Resend-Style Night Light Essence & Ambient Ray in Dark Theme */}
      <NightLightEssence />

      {/* 1. iOS 26 Glassmorphic Header & Navigation */}
      <Navbar
        theme={theme}
        setTheme={setTheme}
      />

      <main>
        {/* 2. Hero Stage: Authoritative Vision, Emotional Cadence & Direct Triggers */}
        <Hero
          onExploreClick={scrollToProjects}
        />

        {/* Luminous Neon Gradient Horizon */}
        <div className="neon-divider max-w-5xl mx-auto my-4 opacity-75" />

        {/* 3. The 6 Finished Deployments & Deliverables */}
        <ProjectsSection
          onOpenDetails={(project) => setSelectedProject(project)}
        />

        {/* Luminous Neon Gradient Horizon */}
        <div className="neon-divider max-w-5xl mx-auto my-4 opacity-75" />

        {/* 4. Experience & Institutional Track Record */}
        <ExperienceSection />

        {/* Luminous Neon Gradient Horizon */}
        <div className="neon-divider max-w-5xl mx-auto my-4 opacity-75" />

        {/* 5. Tech Stack & Motion Design Showcase */}
        <TechStackSection />

        {/* Luminous Neon Gradient Horizon */}
        <div className="neon-divider max-w-5xl mx-auto my-4 opacity-75" />

        {/* 6. Pedigree, Engineering Rigor & Principles */}
        <AboutSection />

        {/* Luminous Neon Gradient Horizon */}
        <div className="neon-divider max-w-5xl mx-auto my-4 opacity-75" />

        {/* 7. Direct Transmission Contact Card */}
        <ContactSection />
      </main>

      {/* 6. Minimalist Architectural Footer */}
      <Footer />

      {/* 7. Interactive Detail Modal (Scroll-Safe, Spring-Motion) */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />

      {/* 8. Resizable AI Assistant at Lower Right Corner (Gwen) */}
      <GwenFloatingChat
        isOpen={isGwenOpen}
        onToggleOpen={setIsGwenOpen}
        externalPrompt={gwenExternalPrompt}
        onOpenCaseStudy={handleOpenProjectById}
      />

    </div>
  );
}
