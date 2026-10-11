import React, { useState, useEffect } from 'react';
import { Terminal, TrendingUp, ShieldCheck, Cpu, ArrowRight, RefreshCw, Play, CheckCircle2 } from 'lucide-react';

export default function TradingTerminalDesk() {
  const [activeTab, setActiveTab] = useState('arbitrage'); // 'arbitrage', 'dmex', 'civos'
  
  // Simulated Arbitrage Pairs
  const [arbitrageRows, setArbitrageRows] = useState([
    { pair: "ETH/USDT", dexA: "Uniswap V3", priceA: 3124.50, dexB: "Curve (stETH)", priceB: 3138.80, spread: "+0.45%", netProfit: "$428.10", gasEst: "$14.20", status: "PROFITABLE" },
    { pair: "SOL/USDC", dexA: "Raydium", priceA: 184.20, dexB: "Binance CEX", priceB: 185.10, spread: "+0.48%", netProfit: "$182.40", gasEst: "$0.02", status: "PROFITABLE" },
    { pair: "BTC/USDT", dexA: "Hyperliquid", priceA: 64250.00, dexB: "Bybit CEX", priceB: 64310.00, spread: "+0.09%", netProfit: "$120.00", gasEst: "$8.50", status: "TIGHT" },
    { pair: "AVAX/USDT", dexA: "TraderJoe", priceA: 28.40, dexB: "Binance", priceB: 28.52, spread: "+0.42%", netProfit: "$94.80", gasEst: "$0.40", status: "PROFITABLE" }
  ]);

  // HTLC Atomic Swap State
  const [swapStep, setSwapStep] = useState(0); // 0: Idle, 1: Secret Generated, 2: HashLock Committed, 3: Executed / Refunded
  const [secretHash, setSecretHash] = useState("0x7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069");

  // CivOS Tier Simulation State
  const [simulatedQueryCount, setSimulatedQueryCount] = useState(14820);
  const [cPlusHits, setCPlusHits] = useState(13930);
  const [llmInvocations, setLlmInvocations] = useState(890);

  // Periodic tick updates for realistic simulated feel
  useEffect(() => {
    const interval = setInterval(() => {
      setArbitrageRows(prev => prev.map(row => {
        const delta = (Math.random() - 0.5) * 0.4;
        const newPriceA = +(row.priceA * (1 + delta / 100)).toFixed(2);
        const newPriceB = +(row.priceB * (1 + (delta + (Math.random() - 0.4) * 0.1) / 100)).toFixed(2);
        const spreadPct = +(((newPriceB - newPriceA) / newPriceA) * 100).toFixed(2);
        return {
          ...row,
          priceA: newPriceA,
          priceB: newPriceB,
          spread: `${spreadPct >= 0 ? '+' : ''}${spreadPct}%`,
          status: spreadPct > 0.3 ? "PROFITABLE" : "TIGHT"
        };
      }));

      setSimulatedQueryCount(c => c + 15);
      setCPlusHits(h => h + 14);
      if (Math.random() > 0.7) setLlmInvocations(l => l + 1);
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  const handleNextSwapStep = () => {
    setSwapStep(s => (s + 1) % 4);
  };

  return (
    <section id="terminals" className="py-24 max-w-7xl mx-auto px-6 sm:px-8 hairline-t">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] uppercase tracking-wider">
            <Terminal size={14} />
            <span>03.0 // INTERACTIVE PROTOCOL & TERMINAL SIMULATORS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-[var(--text-primary)]">
            Live Architecture Workstations
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)]">
            Test the mathematical algorithms behind STELCERA's cross-DEX arbitrage scanner, D-MEX's cryptographic atomic swap escrow, and CivOS's 5-tier compute hierarchy.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center gap-1.5 bg-[var(--bg-surface)] p-1.5 rounded-lg hairline-all text-xs font-mono">
          <button
            onClick={() => setActiveTab('arbitrage')}
            className={`px-3 py-1.5 rounded transition-all ${
              activeTab === 'arbitrage'
                ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] font-semibold'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            STELCERA ARBITRAGE
          </button>
          <button
            onClick={() => setActiveTab('dmex')}
            className={`px-3 py-1.5 rounded transition-all ${
              activeTab === 'dmex'
                ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] font-semibold'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            D-MEX ATOMIC SWAP
          </button>
          <button
            onClick={() => setActiveTab('civos')}
            className={`px-3 py-1.5 rounded transition-all ${
              activeTab === 'civos'
                ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] font-semibold'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            CIVOS COMPUTE TIER
          </button>
        </div>
      </div>

      {/* Simulator Display Card */}
      <div className="bg-[var(--bg-surface)] hairline-all rounded-xl shadow-sm overflow-hidden">
        
        {/* Terminal Titlebar */}
        <div className="px-6 py-3.5 hairline-b bg-[var(--bg-surface-raised)] flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--text-primary)] animate-signal-pulse" />
            <span className="font-semibold text-[var(--text-primary)]">
              {activeTab === 'arbitrage' && "STELCERA v3.0 // CROSS-DEX SPREAD MATRIX SCANNER"}
              {activeTab === 'dmex' && "D-MEX PROTOCOL // HTLC ATOMIC SWAP STATE MACHINE"}
              {activeTab === 'civos' && "CIVOS KERNEL // 5-TIER COMPUTE & BOUNCER ORCHESTRATION"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span>TICK RATE: 600ms</span>
            <span>·</span>
            <span className="text-[var(--text-primary)] font-semibold">STATUS: LIVE SIMULATION</span>
          </div>
        </div>

        {/* Tab 1: STELCERA Cross-DEX Scanner */}
        {activeTab === 'arbitrage' && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="hairline-b text-[var(--text-muted)] uppercase text-[10px]">
                    <th className="pb-3 font-semibold">PAIR</th>
                    <th className="pb-3 font-semibold">VENUE A</th>
                    <th className="pb-3 font-semibold">PRICE A</th>
                    <th className="pb-3 font-semibold">VENUE B</th>
                    <th className="pb-3 font-semibold">PRICE B</th>
                    <th className="pb-3 font-semibold">GROSS SPREAD</th>
                    <th className="pb-3 font-semibold">EST. GAS</th>
                    <th className="pb-3 font-semibold">NET PROFIT</th>
                    <th className="pb-3 font-semibold text-right">ACTION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border-subtle)]">
                  {arbitrageRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[var(--bg-surface-raised)] transition-colors">
                      <td className="py-3 font-bold text-[var(--text-primary)]">{row.pair}</td>
                      <td className="py-3 text-[var(--text-secondary)]">{row.dexA}</td>
                      <td className="py-3 text-[var(--text-primary)]">${row.priceA.toLocaleString()}</td>
                      <td className="py-3 text-[var(--text-secondary)]">{row.dexB}</td>
                      <td className="py-3 text-[var(--text-primary)]">${row.priceB.toLocaleString()}</td>
                      <td className="py-3 font-bold text-[var(--text-primary)]">{row.spread}</td>
                      <td className="py-3 text-[var(--text-muted)]">{row.gasEst}</td>
                      <td className="py-3 font-bold text-[var(--text-primary)]">{row.netProfit}</td>
                      <td className="py-3 text-right">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          row.status === 'PROFITABLE'
                            ? 'bg-[var(--bg-subtle)] text-[var(--text-primary)] hairline-all'
                            : 'bg-[var(--bg-subtle)] text-[var(--text-muted)]'
                        }`}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="hairline-t pt-4 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[var(--text-secondary)]">
              <div>
                DEX Feeds: <span className="text-[var(--text-primary)] font-semibold">Uniswap V3 · Curve · Raydium · Hyperliquid · Binance</span>
              </div>
              <div className="text-[var(--text-primary)] font-semibold">
                Auto-Deduct Gas & Slip Bounds Active
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: D-MEX Atomic Swap HTLC */}
        {activeTab === 'dmex' && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { step: 0, title: "01. Secret Generation", desc: "Origin party generates preimage secret S and computes Keccak256 hashLock H." },
                { step: 1, title: "02. Hash-Lock Timelock", desc: "Funds locked in Yul assembly contract with 60-minute refund timer." },
                { step: 2, title: "03. Counterparty Claim", desc: "Destination contract releases assets upon secret S revelation." },
                { step: 3, title: "04. Atomic Finality", desc: "Both parties settled trustlessly. Zero centralized bridge vulnerability." }
              ].map((s) => (
                <div
                  key={s.step}
                  className={`p-4 rounded hairline-all transition-all ${
                    swapStep >= s.step
                      ? 'bg-[var(--bg-surface-raised)] border-[var(--text-primary)]'
                      : 'bg-[var(--bg-primary)] opacity-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-[var(--text-primary)]">{s.title}</span>
                    {swapStep > s.step && <CheckCircle2 size={14} className="text-[var(--text-primary)]" />}
                  </div>
                  <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed font-mono">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* State Machine Action Controls */}
            <div className="p-4 rounded bg-[var(--bg-surface-raised)] hairline-all flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1 font-mono text-xs">
                <span className="text-[var(--text-muted)] block text-[10px]">CURRENT KECCAK-256 HASHLOCK</span>
                <span className="text-[var(--text-primary)] font-bold break-all">{secretHash}</span>
              </div>

              <button
                onClick={handleNextSwapStep}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[var(--text-primary)] text-[var(--bg-primary)] font-mono text-xs font-bold hover:opacity-90 transition-all shadow-sm"
              >
                <Play size={13} />
                <span>Advance State Machine ({swapStep + 1}/4)</span>
              </button>
            </div>
          </div>
        )}

        {/* Tab 3: CivOS 5-Tier Compute Hierarchy */}
        {activeTab === 'civos' && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
              <div className="p-4 rounded bg-[var(--bg-surface-raised)] hairline-all">
                <span className="text-[var(--text-muted)] block text-[10px]">TOTAL WORLD TICK QUERIES</span>
                <span className="text-2xl font-bold text-[var(--text-primary)] font-heading">{simulatedQueryCount.toLocaleString()}</span>
              </div>
              <div className="p-4 rounded bg-[var(--bg-surface-raised)] hairline-all">
                <span className="text-[var(--text-muted)] block text-[10px]">TIER 1 (C++ BOUNCER) FILTERED</span>
                <span className="text-2xl font-bold text-[var(--text-primary)] font-heading">{cPlusHits.toLocaleString()} (94.0%)</span>
              </div>
              <div className="p-4 rounded bg-[var(--bg-surface-raised)] hairline-all">
                <span className="text-[var(--text-muted)] block text-[10px]">HIGH-ORDER LLM SPINS (TIER 5)</span>
                <span className="text-2xl font-bold text-[var(--text-secondary)] font-heading">{llmInvocations.toLocaleString()} (6.0%)</span>
              </div>
            </div>

            <div className="p-4 rounded bg-[var(--bg-surface-raised)] hairline-all space-y-2 text-xs font-mono">
              <div className="text-[var(--text-muted)] uppercase tracking-wider text-[10px] font-bold">
                THE BOUNCER PATTERN VERIFICATION STREAM
              </div>
              <div className="space-y-1 text-[11px] text-[var(--text-secondary)]">
                <div>[02:14:08] [C++ Tick] Agent #4082 Pathfinding calculated via A* Deterministic (0.01ms)</div>
                <div>[02:14:09] [Bouncer] Agent #8192 Resource check PASSED · State delta committed</div>
                <div>[02:14:09] [Proximity] Human Player entered observation radius (x:142, y:902)</div>
                <div className="text-[var(--text-primary)] font-bold">[02:14:09] [Lazy LLM] Dispatched dialogue flavor generation for Agent #8192</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
