import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, FolderGit2, Cpu, Sparkles, Terminal, BookOpen, Layers } from 'lucide-react';
import { projectsData } from '../data/projects';
import { disciplinesData } from '../data/disciplines';
import { skillsTaxonomy } from '../data/skills';

export default function GlobalSearch({ isOpen, onClose, onSelectProject, onAskGwen }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // parent toggles
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Search through projects, disciplines, skills
  const q = query.toLowerCase().trim();

  const matchedProjects = projectsData.filter(p =>
    !q || p.title.toLowerCase().includes(q) || p.techStack.some(t => t.toLowerCase().includes(q)) || p.category.toLowerCase().includes(q)
  ).map(p => ({
    type: 'project',
    id: p.id,
    title: p.title,
    subtitle: `${p.category} · ${p.year}`,
    tags: p.techStack.slice(0, 3),
    item: p
  }));

  const matchedDisciplines = disciplinesData.filter(d =>
    !q || d.name.toLowerCase().includes(q) || d.role.toLowerCase().includes(q)
  ).map(d => ({
    type: 'discipline',
    id: d.id,
    title: d.name,
    subtitle: d.role,
    tags: d.techStack.slice(0, 3),
    targetId: 'synthesis'
  }));

  const matchedSkills = [];
  skillsTaxonomy.forEach(cat => {
    cat.items.forEach(skill => {
      if (!q || skill.name.toLowerCase().includes(q) || skill.context.toLowerCase().includes(q)) {
        matchedSkills.push({
          type: 'skill',
          id: skill.name,
          title: skill.name,
          subtitle: `${skill.level} — ${skill.context}`,
          tags: [cat.domain.split(' ')[0]],
          targetId: 'skills'
        });
      }
    });
  });

  const allResults = [
    ...matchedProjects,
    ...matchedDisciplines,
    ...matchedSkills.slice(0, 6)
  ];

  const handleSelect = (result) => {
    if (result.type === 'project') {
      onSelectProject(result.item);
      onClose();
    } else if (result.targetId) {
      const el = document.getElementById(result.targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-[var(--bg-surface)] hairline-all rounded-xl shadow-2xl overflow-hidden flex flex-col z-10">
        
        {/* Search Header Bar */}
        <div className="flex items-center px-4 py-3.5 hairline-b gap-3 bg-[var(--bg-surface)]">
          <Search size={18} className="text-[var(--text-muted)] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, architectures, disciplines, skills, or type 'ask'..."
            className="w-full bg-transparent text-sm sm:text-base font-mono text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)]">
              <X size={16} />
            </button>
          )}
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-subtle)] text-[var(--text-muted)] hairline-all shrink-0">
            ESC
          </span>
        </div>

        {/* Quick Ask Gwen Action if query present */}
        {query && (
          <div
            onClick={() => {
              onAskGwen(query);
              onClose();
            }}
            className="p-3 hairline-b bg-[var(--bg-surface-raised)] hover:bg-[var(--accent-glow)] flex items-center justify-between cursor-pointer transition-colors text-xs font-mono"
          >
            <div className="flex items-center gap-2 text-[var(--accent)] font-semibold">
              <Sparkles size={14} />
              <span>Ask Gwen AI: "{query}"</span>
            </div>
            <ArrowRight size={14} className="text-[var(--accent)]" />
          </div>
        )}

        {/* Search Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2 space-y-1">
          {allResults.length === 0 ? (
            <div className="p-8 text-center text-xs font-mono text-[var(--text-muted)]">
              No matching systems or protocols found for "{query}".
            </div>
          ) : (
            allResults.map((res, i) => (
              <div
                key={`${res.type}-${res.id}-${i}`}
                onClick={() => handleSelect(res)}
                className="p-3 rounded-lg hover:bg-[var(--bg-subtle)] cursor-pointer transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded bg-[var(--bg-surface-raised)] hairline-all flex items-center justify-center text-[var(--text-muted)] group-hover:text-[var(--accent)]">
                    {res.type === 'project' && <FolderGit2 size={14} />}
                    {res.type === 'discipline' && <Cpu size={14} />}
                    {res.type === 'skill' && <Terminal size={14} />}
                  </div>

                  <div>
                    <div className="font-heading font-semibold text-sm text-[var(--text-primary)] group-hover:text-[var(--accent)]">
                      {res.title}
                    </div>
                    <div className="text-xs text-[var(--text-muted)] font-mono">
                      {res.subtitle}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="hidden sm:flex items-center gap-1">
                    {res.tags?.map((t, idx) => (
                      <span key={idx} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[var(--bg-subtle)] text-[var(--text-muted)]">
                        {t}
                      </span>
                    ))}
                  </div>
                  <ArrowRight size={14} className="text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="hairline-t px-4 py-2 bg-[var(--bg-surface-raised)] flex items-center justify-between text-[10px] font-mono text-[var(--text-muted)]">
          <span>NAVIGATION: ↑↓ to navigate · ↵ to select</span>
          <span>COMMAND PALETTE v3.0</span>
        </div>
      </div>
    </div>
  );
}
