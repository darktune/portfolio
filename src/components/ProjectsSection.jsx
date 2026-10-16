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
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-2">
            01 // Flagship Portfolio
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
            Finished Deployments & Highlights
          </h2>
          {/* User Quote in Clean Proportion: No Pills, No Green Dots */}
          <div className="mt-3">
            <p className="font-serif italic text-lg sm:text-xl text-zinc-900 dark:text-zinc-100 tracking-wide">
              “I like building my ideas and shipping fast.”
            </p>
          </div>
        </div>
      </div>

      {/* Filter Navigation: Minimalist Typographic Tabs (Zero Pills, Zero Dots) */}
      <div className="flex flex-wrap items-center gap-x-5 sm:gap-x-7 gap-y-2 mb-10 border-b border-zinc-200/80 dark:border-zinc-800 pb-3">
        {filterTabs.map((tab) => {
          const isActive = activeCategory === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`text-xs sm:text-sm font-mono tracking-wider transition-colors py-1 relative ${
                isActive 
                  ? 'text-zinc-950 dark:text-white font-bold' 
                  : 'text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
              }`}
            >
              <span>{tab.label}</span>
              {isActive && (
                <span className="absolute -bottom-3 left-0 right-0 h-[2px] bg-zinc-950 dark:bg-white" />
              )}
            </button>
          );
        })}
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
