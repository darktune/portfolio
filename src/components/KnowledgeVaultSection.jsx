import React, { useState } from 'react';
import { BookOpen, FileText, Search, ExternalLink, ArrowUpRight, FolderGit2, Sparkles, CheckCircle2 } from 'lucide-react';

export default function KnowledgeVaultSection({ onOpenGwenPrompt }) {
  const [filterCategory, setFilterCategory] = useState('All');
  const [vaultSearch, setVaultSearch] = useState('');

  const vaultSessions = [
    {
      id: "c74b4a6b",
      fullId: "c74b4a6b-71da-424d-b3ff-ebf0d817e77f",
      date: "2026-08-20",
      title: "STELCERA Institutional Trading Terminal · 18 Desks, Arbitrage & Phased Roadmap",
      category: "Trading & Systems",
      exchanges: 52,
      steps: 1002,
      scope: "Full architecture of 18 trading desks, Black Scholes options Greeks, Level 2 DOM canvas, and cross DEX scanner.",
      artifacts: ["audit_and_documentation.md", "implementation_plan.md", "walkthrough.md"]
    },
    {
      id: "ee94c182",
      fullId: "ee94c182-aed1-40e1-8c79-463e1205e7b2",
      date: "2026-08-20",
      title: "Trading / Arbitrage & Roadmap · Chats, Backend Code & Master Audits",
      category: "Trading & Systems",
      exchanges: 3,
      steps: 97,
      scope: "Restoration of all quantitative trading logs, FastAPI stochastics, and master index.",
      artifacts: ["implementation_plan.md"]
    },
    {
      id: "7ff33dfe",
      fullId: "7ff33dfe-10c1-44ef-a2ab-e6f0daff431a",
      date: "2026-08-17",
      title: "Portfolio Master Knowledge Vault Restoration",
      category: "Web3 & 3D",
      exchanges: 10,
      steps: 240,
      scope: "Restoration of all 37 portfolio sessions, 180 design blueprints, and session overviews.",
      artifacts: ["restored_portfolio_conversations.md"]
    },
    {
      id: "252afcba",
      fullId: "252afcba-1006-45a4-a876-d46878a3c5fb",
      date: "2026-07-26",
      title: "D MEX Protocol · Cross Game Atomic Swap Architecture & Gas Fuzzing",
      category: "Web3 & Smart Contracts",
      exchanges: 9,
      steps: 220,
      scope: "Solidity and Yul assembly inline verification, Foundry test suites, and HTLC timelocks.",
      artifacts: ["D-MEX_CLAUDE.md", "walkthrough.md"]
    },
    {
      id: "3b1dc3c1",
      fullId: "3b1dc3c1-b1cd-465f-83ce-37c7853bbe2c",
      date: "2026-05-28",
      title: "LOOM · 3D Spatial Showroom Blueprint",
      category: "3D & Creative",
      exchanges: 3,
      steps: 128,
      scope: "Three.js WebGL drape simulation, milestone escrow architecture, and custom design tokens.",
      artifacts: ["stitch_ui_prompt.md", "implementation_plan.md", "analysis_results.md"]
    },
    {
      id: "d038816d",
      fullId: "d038816d-b5b0-4f1a-8e87-155fe3c24b8d",
      date: "2026-08-14",
      title: "REAVO Store Full Extraction & Database Architecture",
      category: "Web3 & 3D",
      exchanges: 263,
      steps: 4845,
      scope: "Supabase database schema, KoraPay webhook payouts, ambassador tracking, and frontend components.",
      artifacts: ["supabase_schema.sql.md", "payouts_schema.sql.md", "project_documentation.md"]
    }
  ];

  const categories = ['All', 'Trading & Systems', 'Web3 & Smart Contracts', '3D & Creative'];

  const filtered = vaultSessions.filter(s => {
    const matchesCat = filterCategory === 'All' || s.category === filterCategory;
    const matchesSearch = !vaultSearch || s.title.toLowerCase().includes(vaultSearch.toLowerCase()) || s.scope.toLowerCase().includes(vaultSearch.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="vault" className="py-24 max-w-7xl mx-auto px-6 sm:px-8 hairline-t">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] uppercase tracking-wider">
            <BookOpen size={14} />
            <span>05.0 // RESEARCH VAULT & RESTORED SESSIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-[var(--text-primary)]">
            Transparent Engineering Archives
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)]">
            A preserved knowledge repository of 42+ real world engineering sessions, architecture blueprints, SQL schemas, and audit logs.
          </p>
        </div>

        {/* Filter controls */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 bg-[var(--bg-surface)] p-1.5 rounded-lg hairline-all text-xs font-mono">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilterCategory(c)}
                className={`px-3 py-1.5 rounded transition-all ${
                  filterCategory === c
                    ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] font-semibold'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Vault Table */}
      <div className="bg-[var(--bg-surface)] hairline-all rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="hairline-b bg-[var(--bg-surface-raised)] text-[var(--text-muted)] uppercase text-[10px]">
                <th className="p-4 font-semibold">DATE</th>
                <th className="p-4 font-semibold">SESSION & SCOPE</th>
                <th className="p-4 font-semibold">CATEGORY</th>
                <th className="p-4 font-semibold">EXCHANGES</th>
                <th className="p-4 font-semibold">PRESERVED ARTIFACTS</th>
                <th className="p-4 font-semibold text-right">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-subtle)]">
              {filtered.map((session) => (
                <tr key={session.id} className="hover:bg-[var(--bg-surface-raised)] transition-colors">
                  <td className="p-4 text-[var(--text-muted)] whitespace-nowrap">{session.date}</td>
                  <td className="p-4 max-w-md">
                    <div className="font-bold text-[var(--text-primary)] mb-1 text-sm font-heading">
                      {session.title}
                    </div>
                    <div className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                      {session.scope}
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="px-2 py-0.5 rounded bg-[var(--bg-subtle)] text-[var(--accent)] font-semibold text-[10px]">
                      {session.category}
                    </span>
                  </td>
                  <td className="p-4 text-[var(--text-secondary)]">
                    <span className="font-bold text-[var(--text-primary)]">{session.exchanges}</span> exchanges
                    <div className="text-[10px] text-[var(--text-muted)]">{session.steps} execution steps</div>
                  </td>
                  <td className="p-4 text-[var(--text-secondary)]">
                    <div className="space-y-0.5">
                      {session.artifacts.map((art, aIdx) => (
                        <div key={aIdx} className="text-[10px] text-[var(--text-muted)] flex items-center gap-1">
                          <FileText size={10} className="text-[var(--accent)]" />
                          <span>{art}</span>
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    <button
                      onClick={() => onOpenGwenPrompt && onOpenGwenPrompt(`Tell me about session ${session.id}: ${session.title}`)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-[var(--bg-subtle)] hover:bg-[var(--accent)] hover:text-[var(--bg-primary)] font-bold transition-all text-[11px]"
                    >
                      <span>ASK GWEN</span>
                      <ArrowUpRight size={12} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
