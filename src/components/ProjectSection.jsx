import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import ProjectCard from './ProjectCard';
import { FolderGit2, Sparkles, Filter } from 'lucide-react';

export default function ProjectSection({ onOpenCaseStudy }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Systems & Web3', 'Games & 3D', 'AI & HCI', 'Creative & Biz'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  const featuredProjects = filteredProjects.filter(p => p.featured);
  const otherProjects = filteredProjects.filter(p => !p.featured);

  return (
    <section id="work" className="py-24 max-w-7xl mx-auto px-6 sm:px-8 hairline-t">
      
      {/* Section Title & Filter Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] uppercase tracking-wider">
            <FolderGit2 size={14} />
            <span>02.0 // SELECTED WORK & FLAGSHIPS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-[var(--text-primary)]">
            Systems, Engines & Prototypes
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-xl">
            A curated index of production architectures, game engines, smart contract protocols, and creative platforms engineered by Abraham Toluwani.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 bg-[var(--bg-surface)] p-1.5 rounded-lg hairline-all">
          {categories.map((cat) => {
            const count = cat === 'All' 
              ? projectsData.length 
              : projectsData.filter(p => p.category === cat).length;
            const isActive = activeFilter === cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 rounded text-xs font-mono transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] font-semibold'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] ${isActive ? 'opacity-80' : 'text-[var(--text-muted)]'}`}>
                  ({count})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Flagship Projects (Full-width / Split) */}
      {featuredProjects.length > 0 && (
        <div className="space-y-8 mb-12">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={onOpenCaseStudy}
            />
          ))}
        </div>
      )}

      {/* Grid of Other Projects */}
      {otherProjects.length > 0 && (
        <div>
          {featuredProjects.length > 0 && (
            <div className="flex items-center gap-3 text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-6 hairline-t pt-10">
              <span>ADDITIONAL PROTOCOLS, GAMES & INITIATIVES</span>
              <span className="flex-1 hairline-b" />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenCaseStudy={onOpenCaseStudy}
              />
            ))}
          </div>
        </div>
      )}

      {filteredProjects.length === 0 && (
        <div className="p-12 text-center bg-[var(--bg-surface)] hairline-all rounded-xl">
          <p className="text-xs font-mono text-[var(--text-muted)]">No matching projects found for category "{activeFilter}".</p>
        </div>
      )}
    </section>
  );
}
