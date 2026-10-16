import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FinishedProjectCard from './FinishedProjectCard';
import { finishedProjectsData } from '../data/finishedProjects';

export default function ProjectsSection({ onOpenDetails }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filterTabs = useMemo(() => [
    { id: 'all', label: 'All Works', count: finishedProjectsData.length },
    { id: 'systems', label: 'Systems & Web3', count: finishedProjectsData.filter(p => p.filterCategory === 'systems').length },
    { id: 'fintech', label: 'Fintech & Quant', count: finishedProjectsData.filter(p => p.filterCategory === 'fintech').length },
    { id: 'commerce', label: 'Commerce', count: finishedProjectsData.filter(p => p.filterCategory === 'commerce').length },
    { id: 'media', label: 'Media & AI', count: finishedProjectsData.filter(p => p.filterCategory === 'media').length },
    { id: 'gaming', label: '3D & Gaming', count: finishedProjectsData.filter(p => p.filterCategory === 'gaming').length },
    { id: 'conceptual', label: 'Conceptual Projects', count: finishedProjectsData.filter(p => p.filterCategory === 'conceptual').length },
  ], []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return finishedProjectsData;
    return finishedProjectsData.filter(p => p.filterCategory === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="py-16 md:py-24 px-5 sm:px-8 max-w-6xl mx-auto border-t border-[var(--border-subtle)]">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-2">
            01 // Flagship Portfolio
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
            Finished Deployments & Highlights
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-2 max-w-xl">
            A curated portfolio of verified production systems, university research, and industrial engineering deployments. Each project showcases proven performance, audited security, and production ready architecture.
          </p>
        </div>

        {/* Filter Navigation: Discrete Shaped iOS 26 Pills (Zero Numbers) */}
        <div className="flex flex-wrap items-center gap-2">
          {filterTabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`relative px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 active:scale-95 border ${
                  isActive 
                    ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-bold border-zinc-900 dark:border-white shadow-md dark:shadow-[0_0_16px_rgba(255,255,255,0.2)]' 
                    : 'ios-pill text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)]'
                }`}
              >
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            >
              <FinishedProjectCard
                project={project}
                onOpenDetails={onOpenDetails}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

    </section>
  );
}
