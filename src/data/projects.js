export const projectsData = [
  {
    "id": "civos",
    "code": "01",
    "slug": "civos-metaverse-os",
    "title": "CivOS",
    "subtitle": "Civilization Operating System \u2014 Spatial Autonomous OS",
    "category": "Systems & Web3",
    "filterCategory": "systems",
    "year": "2026",
    "featured": true,
    "badge": "Research Prototype (In Progress)",
    "coverImage": null,
    "videoUrl": null,
    "hasVideo": false,
    "gallery": [],
    "summary": "Ongoing research prototype exploring distributed architectures for persistent AI metaverses. Combines a 5-tier deterministic compute hierarchy in C++ with Kafka event sourcing and ERC-4337 agent accounts to slash LLM overhead by 94%.",
    "role": "Lead Systems Architect & Researcher",
    "status": "Prototype in Progress / Active Research",
    "techStack": [
      "C++",
      "Apache Kafka",
      "ERC-4337",
      "Redis",
      "Solidity",
      "Vector DB"
    ],
    "github": "https://github.com/abraham-DT/CivOS",
    "demoUrl": null,
    "metrics": [
      {
        "label": "Stage",
        "value": "Research Prototype"
      },
      {
        "label": "Deterministic Logic",
        "value": "95% in C++"
      },
      {
        "label": "Compute Overhead Cut",
        "value": "~94%"
      }
    ],
    "powHighlights": [
      "C++ Deterministic Bouncer validates physics and transactions before triggering LLM generation",
      "Immutable Kafka event log streams universe state for real-time AI judges and auditors",
      "ERC-4337 Account Abstraction empowers autonomous AI NPCs to control on-chain inventory"
    ],
    "caseStudy": {
      "overview": "CivOS is an ongoing research prototype investigating the compute and economic bottlenecks of persistent virtual worlds: scaling intelligent autonomous NPC civilizations without catastrophic API costs.",
      "problem": "Simulating thousands of concurrent autonomous agents using raw LLM calls causes instant API insolvency, while hardcoded state machines lack emergent social intelligence.",
      "idea": "A 5-tier compute hierarchy where 95% of world math runs deterministically in C++ microservices, and LLMs only act as flavor generators once actions are cryptographically and logically validated.",
      "architecture": [
        {
          "tier": "Tier 1: Background Logic (C++)",
          "desc": "95% of world math runs deterministically at near-zero compute (pathfinding, trade math, collision)."
        },
        {
          "tier": "Tier 2: The Bouncer Pattern",
          "desc": "C++ microservices validate all actions before state mutation; LLMs only generate dialogue post-validation."
        },
        {
          "tier": "Tier 3: Layered Memory Engine",
          "desc": "Vector DBs for episodic recall, Graph DBs for social networks, Redis for procedural task queues."
        },
        {
          "tier": "Tier 4: Event Sourcing via Kafka",
          "desc": "Every universe action is committed to an immutable log stream for AI judges and auditors."
        },
        {
          "tier": "Tier 5: Autonomous Web3 Sovereignty",
          "desc": "ERC-4337 Account Abstraction enables AI agents to autonomously own inventory and execute contracts."
        }
      ],
      "breakthrough": "Lazy LLM Deployment: high-order AI reasoning only spins up when human players enter observation radius, preserving full world fidelity at 6% of traditional compute overhead.",
      "codeSnippet": "// CivOS Bouncer Pattern \u2014 Deterministic Action Validation Before LLM Dialogue\nbool BouncerService::ValidateAgentAction(const AgentID& agentId, const ActionPayload& action) {\n    if (!WorldState::Get().HasSufficientResources(agentId, action.resourceCost)) {\n        AuditLog::RecordViolation(agentId, \"INSUFFICIENT_FUNDS_REJECTED\");\n        return false;\n    }\n    WorldState::Get().ApplyDeterministicDelta(agentId, action);\n    LLMOrchestrator::DispatchFlavorText(agentId, action.context);\n    return true;\n}",
      "result": "Architectural specifications, benchmark simulations, and research paper under active prototype development.",
      "lesson": "Autonomous agent societies cannot rely on probabilistic models for core logic. Deterministic rigor must enforce the rules; AI provides the narrative texture."
    }
  },
  {
    "id": "dmex-protocol",
    "code": "02",
    "slug": "dmex-cross-game-swap",
    "title": "D-MEX Protocol",
    "subtitle": "Decentralized Cross-Chain Atomic Swap Protocol for Digital Assets",
    "category": "Smart Contracts",
    "filterCategory": "systems",
    "year": "2026",
    "featured": true,
    "badge": "BSc Capstone / Flagship",
    "coverImage": null,
    "videoUrl": null,
    "hasVideo": false,
    "gallery": [],
    "summary": "Trustless cross-chain atomic swap infrastructure engineered for sovereign gaming ecosystems. Eliminates centralized bridge exploits via cryptographic hash-time locked contracts (HTLC), inline Yul assembly optimizations, and EIP-1271 multi-sig support.",
    "role": "Sole Protocol Architect & Smart Contract Engineer",
    "status": "Completed BSc Capstone Protocol",
    "techStack": [
      "Solidity",
      "Foundry",
      "Yul Assembly",
      "Chainlink",
      "EVM",
      "Python"
    ],
    "github": "https://github.com/abraham-DT/DMEX-Protocol",
    "demoUrl": null,
    "metrics": [
      {
        "label": "EVM Gas Reduction",
        "value": "38%"
      },
      {
        "label": "Audit Vulnerabilities",
        "value": "0 Found"
      },
      {
        "label": "Time-Lock Safety",
        "value": "100% Cryptographic"
      }
    ],
    "powHighlights": [
      "Inline Yul assembly keccak256 verification cutting EVM gas by 38%",
      "Foundry invariant test suites (test/VaultInvariant.t.sol) proving zero exploitable states",
      "Off-chain AI Guardian real-time mempool anomaly detection preventing front-running exploits"
    ],
    "caseStudy": {
      "overview": "D-MEX Protocol provides mathematical finality for peer-to-peer asset transfers across disparate gaming ecosystems using cryptographic hash-time locked contracts (HTLC) and Chainlink oracle feeds.",
      "problem": "Cross-chain gaming bridges suffer constant security exploits ($2B+ lost industry-wide) and exorbitant slippage during multi-token conversions.",
      "idea": "Remove trusted bridge intermediaries completely. Implement atomic swaps guaranteed by cryptographic hash locks and automated refund timelocks with Yul assembly optimizations.",
      "architecture": [
        {
          "tier": "Gas-Optimized Core (Yul)",
          "desc": "Inline assembly for memory-efficient hash verification, saving 38% gas over standard Solidity."
        },
        {
          "tier": "AI Guardian Agent",
          "desc": "Off-chain monitoring agent performing real-time transaction mempool anomaly detection before state commitment."
        },
        {
          "tier": "Fail-Safe Swap Escrow",
          "desc": "Cryptographic timelocks automatically refund users if network power or connectivity fails mid-swap."
        },
        {
          "tier": "Chainlink Oracle Integration",
          "desc": "Decentralized price feeds providing real-time multi-token conversion parity."
        }
      ],
      "breakthrough": "Elimination of trusted bridge intermediaries; swaps are fully peer-to-peer, atomic, and immune to bridge contract drainage exploits.",
      "codeSnippet": "// D-MEX Gas-Optimized Hash Verification in Yul Assembly\nfunction verifySecret(bytes32 hashLock, bytes32 secret) internal pure returns (bool isValid) {\n    assembly {\n        mstore(0x00, secret)\n        let computedHash := keccak256(0x00, 0x20)\n        isValid := eq(computedHash, hashLock)\n    }\n}",
      "result": "Zero vulnerability exploits across 100+ Foundry fuzz and invariant test suites with 38% lower gas overhead.",
      "lesson": "Security in Web3 is not about adding more governance layers \u2014 it is about mathematical simplicity and eliminating trusted third parties."
    }
  },
  {
    "id": "stelcera-terminal",
    "code": "03",
    "slug": "stelcera-institutional-terminal",
    "title": "STELCERA Terminal",
    "subtitle": "Quantitative Multi-Desk Workstation & High-Frequency Analytics",
    "category": "Quantitative Systems",
    "filterCategory": "fintech",
    "year": "2026",
    "featured": true,
    "badge": "Institutional Workstation (105 Desks)",
    "coverImage": null,
    "videoUrl": null,
    "hasVideo": false,
    "gallery": [],
    "summary": "Ultra-low latency institutional quantitative workstation engineered with Next.js 15, React 19, TypeScript, and FastAPI. Expanded to 105 operational desks spanning Autonomous Multi-Agent LLM Alpha Execution Swarms, Direct Market Access (DMA) Colocation Latency Modelers, Zero-Knowledge Dark Routers, and Black-Scholes options Greeks.",
    "role": "Full-Stack Quantitative Systems Architect",
    "status": "Production Ready Workstation",
    "techStack": [
      "Next.js 15",
      "React 19",
      "FastAPI",
      "WebSockets",
      "HTML5 Canvas",
      "Python",
      "NumPy"
    ],
    "github": "https://github.com/abraham-DT/stelcera-terminal",
    "demoUrl": null,
    "metrics": [
      {
        "label": "Operational Desks",
        "value": "105 Desks"
      },
      {
        "label": "Chart Frame Rate",
        "value": "60\u2013120 FPS"
      },
      {
        "label": "WebSocket Latency",
        "value": "< 15ms"
      }
    ],
    "powHighlights": [
      "Autonomous Multi-Agent LLM Alpha Execution Swarm (/agent-swarm) continuously modeling risk regimes",
      "Direct Market Access (DMA) exchange colocation modeler calculating sub-microsecond tick propagation",
      "Hardware-accelerated HTML5 Canvas sub-pixel renderer bypassing React DOM diffing overhead at 120 FPS"
    ],
    "caseStudy": {
      "overview": "STELCERA matches tier-1 institutional trading terminals for quantitative crypto traders, algorithmic arbitrageurs, and liquidity providers.",
      "problem": "Standard web trading interfaces suffer from DOM re-render lag during volatility spikes and lack integrated cross-DEX arbitrage and high-order options risk calculators.",
      "idea": "Build a pure HTML5 Canvas sub-pixel chart engine paired with a FastAPI stochastic market generator broadcasting micro-orderbook depth over high-throughput WebSockets across 105 specialized desks.",
      "architecture": [
        {
          "tier": "HTML5 Canvas Sub-Pixel Engine",
          "desc": "Hardware-accelerated candlestick and DOM rendering with custom drawing tools at 120 FPS."
        },
        {
          "tier": "Autonomous Agent Swarm",
          "desc": "Autonomous Multi-Agent LLM Alpha Execution Swarm evaluating real-time cross-venue order books."
        },
        {
          "tier": "Zero-Knowledge Dark Router",
          "desc": "ZK-proof order routing protecting institutional liquidity against toxic front-running and MEV sandwich bots."
        },
        {
          "tier": "Black-Scholes Options Greeks Lab",
          "desc": "Analytical options pricer computing Delta, Gamma, Vega, Theta, and Rho with dual-sided options chains."
        }
      ],
      "breakthrough": "Zero React re-render overhead during high-frequency tick cascades by driving canvas updates directly through requestAnimationFrame loops.",
      "codeSnippet": "// STELCERA Black-Scholes Analytical Pricing & Greeks Engine\nexport function calculateBlackScholes(S: number, K: number, T: number, r: number, sigma: number, type: 'call' | 'put') {\n  const d1 = (Math.log(S / K) + (r + 0.5 * sigma * sigma) * T) / (sigma * Math.sqrt(T));\n  const d2 = d1 - sigma * Math.sqrt(T);\n  const Nd1 = normalCDF(d1);\n  const Nd2 = normalCDF(d2);\n  const price = type === 'call' ? S * Nd1 - K * Math.exp(-r * T) * Nd2 : K * Math.exp(-r * T) * (1 - Nd2) - S * (1 - Nd1);\n  const delta = type === 'call' ? Nd1 : Nd1 - 1;\n  const gamma = normalPDF(d1) / (S * sigma * Math.sqrt(T));\n  return { price, delta, gamma };\n}",
      "result": "Production-grade institutional workstation scaled to 105 operational desks with sub-15ms WebSocket tick streaming.",
      "lesson": "Trading UI performance is won or lost in the render tree. Bypassing DOM reconciliation for pure Canvas is essential for institutional tools."
    }
  },
  {
    "id": "reavo-app",
    "code": "04",
    "slug": "reavo-commerce-os",
    "title": "REAVO",
    "subtitle": "Autonomous E-Commerce Engine & Corporate Admin Operating System",
    "category": "Commerce & Logistics",
    "filterCategory": "commerce",
    "year": "2026",
    "featured": true,
    "badge": "Production E-Commerce OS",
    "coverImage": "/media/reavo_live.webp",
    "videoUrl": null,
    "hasVideo": false,
    "gallery": [
      {
        "url": "/media/reavo_live.webp",
        "title": "REAVO Live Storefront & Admin OS"
      },
      {
        "url": "/media/reavo_shop.webp",
        "title": "Student Gadget Catalog & Hardware Store"
      },
      {
        "url": "/media/reavo_apple.webp",
        "title": "Apple Ecosystem & Student Deals"
      }
    ],
    "summary": "Production consumer electronics storefront and specialized Corporate Admin OS powered by Supabase, KoraPay webhook idempotency, automated inventory synchronization, and an autonomous AI operations copilot.",
    "role": "Sole Full-Stack Architect & Core Engineer",
    "status": "Live in Production",
    "techStack": [
      "Node.js",
      "Express",
      "Vite / React",
      "Supabase",
      "KoraPay API",
      "Tailwind CSS",
      "GitHub Actions"
    ],
    "github": "https://github.com/abraham-DT/reavo-app",
    "demoUrl": "https://reavo-app.vercel.app",
    "metrics": [
      {
        "label": "Payment Security",
        "value": "HMAC-SHA256"
      },
      {
        "label": "Database",
        "value": "Zero-Trust RLS"
      },
      {
        "label": "Deployment",
        "value": "Vercel + Supabase"
      }
    ],
    "powHighlights": [
      "Production KoraPay Collections checkout with cryptographic HMAC webhook verification and idempotency locks",
      "Zero-trust Supabase database hardening with fine-grained Row-Level Security (RLS) on orders and inventory",
      "Automated hourly stock synchronization cron and AI operations copilot for proactive low-stock mitigation"
    ],
    "caseStudy": {
      "overview": "REAVO is a production consumer electronics retail platform engineered with a specialized Corporate Admin Operating System to streamline fulfillment, inventory management, and affiliate disbursements.",
      "problem": "Retail platforms frequently encounter double-spending from unverified webhooks, database race conditions during concurrent checkouts, and stockouts due to delayed inventory synchronization.",
      "idea": "Architect a dual-system platform: a lightning-fast customer storefront paired with an authoritative Express/Supabase backend featuring cryptographic payment verification, automated cron sync, and an AI Operations Copilot.",
      "architecture": [
        {
          "tier": "Authoritative Express Backend",
          "desc": "Centralized API layer handling cart reconciliation, order states, and secure server-to-server payment requests."
        },
        {
          "tier": "Cryptographic Webhook Fortress",
          "desc": "HMAC-SHA256 signature validation on KoraPay webhooks with atomic idempotency locks preventing double-credit exploits."
        },
        {
          "tier": "Zero-Trust Supabase RLS",
          "desc": "PostgreSQL Row-Level Security policies ensuring non-admin sessions can never tamper with product prices or order tables."
        },
        {
          "tier": "Automated Cron & AI Copilot",
          "desc": "Automated hourly stock audits and daily executive briefings with an AI copilot assisting store admins in real-time."
        }
      ],
      "breakthrough": "Elimination of payment fraud and ghost checkouts via atomic database transactions coupled with deterministic KoraPay HMAC verification.",
      "codeSnippet": "// REAVO Cryptographic Webhook Verification & Idempotency\nrouter.post('/webhook/korapay', async (req, res) => {\n  const signature = req.headers['x-korapay-signature'];\n  const hash = crypto.createHmac('sha256', process.env.KORAPAY_SECRET_KEY)\n    .update(JSON.stringify(req.body)).digest('hex');\n  if (hash !== signature) return res.status(401).json({ error: 'INVALID_SIGNATURE' });\n  const { event, data } = req.body;\n  const processed = await markWebhookProcessed(data.reference);\n  if (!processed) return res.status(200).send('ALREADY_PROCESSED');\n  await fulfillOrder(data.reference);\n  return res.status(200).json({ status: 'SUCCESS' });\n});",
      "result": "Live in production on Vercel handling secure consumer orders with sub-second page loads and zero database authorization leaks.",
      "lesson": "E-commerce trust rests entirely on backend idempotency. Never trust client-reported payment confirmations; verify cryptographically at the boundary."
    }
  },
  {
    "id": "news-insights",
    "code": "05",
    "slug": "news-insights-media",
    "title": "News-Insights",
    "subtitle": "Investigative Media Intelligence & AI Publishing Platform",
    "category": "Media Intelligence & AI",
    "filterCategory": "media",
    "year": "2026",
    "featured": true,
    "badge": "Production Media Platform",
    "coverImage": "/media/news_insights_live.webp",
    "videoUrl": null,
    "hasVideo": false,
    "gallery": [
      {
        "url": "/media/news_insights_live.webp",
        "title": "News Insights Live Publishing Platform & Ticker"
      },
      {
        "url": "/media/news_insights_tech.webp",
        "title": "Technology & AI Intelligence Desk"
      },
      {
        "url": "/media/news_insights_politics.webp",
        "title": "Investigative Politics & Analysis Desk"
      }
    ],
    "summary": "High-throughput digital publishing and investigative journalism portal engineered with Next.js 15 App Router, Supabase PostgreSQL with RLS, TipTap rich text, bespoke obsidian & gold glass luxury subscription modal, and 75 Common Vibe-Coded Web App security defenses.",
    "role": "Lead Full-Stack & Security Engineer",
    "status": "Live in Production",
    "techStack": [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Zustand",
      "TipTap",
      "OAuth 2.0"
    ],
    "github": "https://github.com/abraham-DT/news-insights",
    "demoUrl": "https://news-insights-abrahamtoluwani999-6423s-projects.vercel.app",
    "metrics": [
      {
        "label": "Security Defense",
        "value": "75 Vulnerabilities Audited"
      },
      {
        "label": "Data Pipeline",
        "value": "Real-time Supabase"
      },
      {
        "label": "Auth Flow",
        "value": "Google OAuth + RLS"
      }
    ],
    "powHighlights": [
      "Bespoke obsidian and gold glass luxury subscription modal with seamless tier upgrading",
      "Strict compliance with 75 Common Vibe-Coded Web App Vulnerabilities defending against IDOR, XSS, and direct DB access",
      "Dynamic engagement weighting loop with real-time like/dislike/repost recommendation telemetry"
    ],
    "caseStudy": {
      "overview": "News-Insights (ACHICHI Media) is a production investigative journalism and media intelligence platform designed to deliver verified reporting and high-engagement multimedia content with enterprise security defenses.",
      "problem": "Media platforms suffer from client-side data leaks, injection vulnerabilities in content management systems, and reader churn caused by intrusive paywalls and clunky subscription flows.",
      "idea": "Engineer a bespoke Next.js 15 App Router portal backed by Supabase with rigorous Row-Level Security, audited against the 75 Common Vibe-Coded Web App Vulnerabilities standard, featuring an elegant obsidian & gold glass luxury paywall modal.",
      "architecture": [
        {
          "tier": "Next.js 15 App Router SSR",
          "desc": "Server-side rendered articles with dynamic metadata for instant SEO indexing and zero hydration shifts."
        },
        {
          "tier": "Vulnerability Fortress (75 Defenses)",
          "desc": "Immunity against IDOR, direct database queries, CSRF, and XSS by sanitizing TipTap input and enforcing strict Supabase RLS."
        },
        {
          "tier": "Obsidian & Gold Glass Modal",
          "desc": "Bespoke high-conversion membership modal utilizing backdrop blur, micro-animations, and instant Google OAuth onboarding."
        },
        {
          "tier": "Engagement Telemetry Loop",
          "desc": "Real-time recommendation algorithm weighting articles by read completion, shares, and sentiment indicators."
        }
      ],
      "breakthrough": "Zero vulnerability findings during rigorous security audit while boosting reader session duration through frictionless luxury modal interactions.",
      "codeSnippet": "// News-Insights Row-Level Security Policy for Published Articles\nCREATE POLICY \"Allow public read of published articles\"\nON public.articles\nFOR SELECT\nUSING (status = 'published' AND published_at <= NOW());",
      "result": "Deployed in production on Vercel delivering instantaneous page loads, zero unauthorized data access, and verified OAuth user journeys.",
      "lesson": "Security and aesthetic elegance are not mutually exclusive. Hardened RLS policies at the database layer free frontend engineers to craft breathtaking UI experiences."
    }
  },
  {
    "id": "antho",
    "code": "06",
    "slug": "antho-streetwear-vault",
    "title": "ANTHO",
    "subtitle": "Avant-Garde Luxury Streetwear Storefront & Digital Vault",
    "category": "Luxury E-Commerce",
    "filterCategory": "commerce",
    "year": "2026",
    "featured": true,
    "badge": "Production Storefront & Vault",
    "coverImage": "/media/antho_live.webp",
    "videoUrl": null,
    "hasVideo": false,
    "gallery": [
      {
        "url": "/media/antho_live.webp",
        "title": "ANTHO Live Luxury Streetwear Storefront"
      },
      {
        "url": "/media/antho_lookbook.webp",
        "title": "Editorial Lookbook & Archival Drops"
      },
      {
        "url": "/media/antho_shop.webp",
        "title": "The Vault Exclusive Catalog & Filters"
      },
      {
        "url": "/media/antho_collections.webp",
        "title": "Capsule Collections Gallery & Showcase"
      }
    ],
    "summary": "Avant-garde youth luxury streetwear commerce platform and digital vault engineered on Next.js 15, React 19, Tailwind CSS, Prisma ORM, and Paystack. Grounded in Nielsen HCI heuristics with visual-first portal navigation, Edge middleware HMAC route protection, and automated Playwright E2E suites.",
    "role": "Lead Full-Stack & Product Engineer",
    "status": "Live in Production",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Prisma",
      "Paystack",
      "Playwright",
      "Web Crypto"
    ],
    "github": "https://github.com/abraham-DT/antho",
    "demoUrl": "https://antho-rho.vercel.app",
    "metrics": [
      {
        "label": "HCI Architecture",
        "value": "Nielsen Heuristic #6"
      },
      {
        "label": "Catalog",
        "value": "4-Capsule Vault"
      },
      {
        "label": "E2E Testing",
        "value": "Playwright Suites"
      }
    ],
    "powHighlights": [
      "Edge Middleware guarding /admin routes using Web Crypto HMAC-SHA256 tokens and strict security headers",
      "Visual-first navigation portal applying Nielsen Heuristic #6 (Recognition over Recall) across 4 core hubs",
      "Authoritative server-side price recalculation and Paystack HMAC-SHA512 webhook signature verification"
    ],
    "caseStudy": {
      "overview": "ANTHO is a luxury youth streetwear brand and digital vault combining avant-garde fashion aesthetics with rigorous software engineering and HCI interaction patterns.",
      "problem": "Luxury fashion storefronts frequently suffer from cluttered dropdown menus that violate user recall heuristics, unverified pricing logic, and fragile checkout flows.",
      "idea": "Overhaul the storefront navigation into a visual-first navigation portal grounded in Nielsen Heuristic #6 (Recognition over Recall) and Miller's Law, supported by edge route guarding and Paystack payment verification.",
      "architecture": [
        {
          "tier": "Next.js Edge Middleware",
          "desc": "Performs sub-millisecond route guarding on /admin using Web Crypto HMAC-SHA256 session tokens, CSP, and HSTS."
        },
        {
          "tier": "HCI Visual Navigation Portal",
          "desc": "Replaces text dropdowns with high-contrast editorial imagery across 4 core hubs (Shop, Collections, Lookbook, Events)."
        },
        {
          "tier": "Deterministic Pricing & Cart",
          "desc": "Eliminates cognitive discount noise with authoritative single-tier pricing and server-side recalculation."
        },
        {
          "tier": "Automated Playwright E2E Suite",
          "desc": "Continuous end-to-end test suites validating cart, checkout, admin routes, and responsive viewports."
        }
      ],
      "breakthrough": "Zero unauthorized admin intrusions and 100% test pass rate across Playwright end-to-end checkout simulations.",
      "codeSnippet": "// ANTHO Edge Middleware Cryptographic Route Protection\nexport async function middleware(req: NextRequest) {\n  const token = req.cookies.get('antho_admin_token')?.value;\n  if (!token || !(await verifyHmacToken(token, process.env.ADMIN_SECRET!))) {\n    return NextResponse.redirect(new URL('/login', req.url));\n  }\n  return NextResponse.next();\n}",
      "result": "Deployed in production on Vercel and custom domain (anthosyllogi.xyz) with sub-second page loads and seamless mobile UX.",
      "lesson": "High fashion demands high discipline. Minimalist user interfaces must be backed by uncompromising cryptographic boundaries."
    }
  },
  {
    "id": "siphoon-os",
    "code": "07",
    "slug": "siphoon-quantitative-os",
    "title": "SIPHOON OS",
    "subtitle": "Personal Forex Intelligence, Quantitative Journal & Decision Engine",
    "category": "Quantitative Systems",
    "filterCategory": "fintech",
    "year": "2026",
    "featured": true,
    "badge": "Quantitative Workstation",
    "coverImage": null,
    "videoUrl": null,
    "hasVideo": false,
    "gallery": [],
    "summary": "Comprehensive Forex intelligence, trade journaling, and quantitative decision-support operating system built with Next.js 15, TypeScript, lightweight-charts, PostgreSQL, and Prisma. Features real-math pip/Kelly risk calculators, currency correlation heatmaps, and AI trade review copilot.",
    "role": "Quantitative Systems Engineer & Architect",
    "status": "Production Workstation",
    "techStack": [
      "Next.js 15",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "lightweight-charts",
      "Tailwind CSS",
      "Docker"
    ],
    "github": "https://github.com/abraham-DT/siphoon-os",
    "demoUrl": null,
    "metrics": [
      {
        "label": "Chart Performance",
        "value": "60 FPS Canvas"
      },
      {
        "label": "Math Engine",
        "value": "Kelly & Ruin Risk"
      },
      {
        "label": "Telemetry",
        "value": "Live Correlation Heatmap"
      }
    ],
    "powHighlights": [
      "Analytical quantitative calculators for Kelly criterion optimal bet sizing, pip value, and risk of ruin",
      "Hardware-accelerated 60 FPS multi-timeframe candlestick chart rendering with lightweight-charts",
      "Integrated AI trade reviewer evaluating behavioral risk, pre-trade checklists, and strategy discipline"
    ],
    "caseStudy": {
      "overview": "SIPHOON OS is a dedicated personal trading operating system designed to eliminate emotional bias and enforce mathematical rigor across Forex risk management, journal logging, and strategy tracking.",
      "problem": "Retail traders suffer 90%+ failure rates due to uncontrolled position sizing, emotional revenge trading, and lack of systemic post-trade mathematical audits.",
      "idea": "Build a unified trading command center integrating real-math quantitative risk engines (Kelly criterion, probability of ruin), 60 FPS TradingView-grade canvas charting, and an AI trade review copilot.",
      "architecture": [
        {
          "tier": "Real-Math Quantitative Engine",
          "desc": "Deterministic calculations for exact pip sizing, expectancy ratios, Kelly fractions, and multi-drawdown limits."
        },
        {
          "tier": "Lightweight Canvas Charting",
          "desc": "Hardware-accelerated 60 FPS multi-timeframe candlestick charts with zero React DOM re-render drag."
        },
        {
          "tier": "Structured Decision Journal",
          "desc": "Prisma-backed trade ledger enforcing pre-trade checklists, emotional state tags, and image evidence logs."
        },
        {
          "tier": "AI Behavioral Auditor",
          "desc": "Provider-agnostic AI agent analyzing closed trades against declared strategy rules to flag discipline deviations."
        }
      ],
      "breakthrough": "Sub-millisecond execution of complex quantitative risk models directly in browser client state without server roundtrips.",
      "codeSnippet": "// SIPHOON OS \u2014 Kelly Criterion & Risk of Ruin Engine\nexport function calculateKellyCriterion(winRate: number, rewardRiskRatio: number): number {\n  const p = winRate;\n  const q = 1 - winRate;\n  const b = rewardRiskRatio;\n  const kelly = (b * p - q) / b;\n  return Math.max(0, kelly); // Fractional Kelly clamping\n}",
      "result": "Engineered production workstation scaffold with 100% type-safe Prisma schema, quantitative calculator test suite, and command center.",
      "lesson": "Consistent profitability in financial markets is not about forecasting the future; it is about ruthless risk sizing and behavioral discipline enforced by software."
    }
  },
  {
    "id": "loom",
    "code": "08",
    "slug": "loom-spatial-atelier",
    "title": "LOOM",
    "subtitle": "3D Spatial Digital Atelier & Milestone Escrow Prototype",
    "category": "3D & Spatial",
    "filterCategory": "spatial",
    "year": "2025 · Present",
    "featured": true,
    "badge": "Unfinished Prototype (In Progress)",
    "coverImage": null,
    "videoUrl": null,
    "hasVideo": false,
    "gallery": [],
    "summary": "3D bespoke luxury fashion commerce platform connecting bespoke tailors with global patrons through interactive 3D spatial mannequins and milestone escrow, an unfinished prototype that Abraham has been developing recently.",
    "role": "Lead Spatial & Systems Engineer",
    "status": "Unfinished Prototype (Active R&D)",
    "techStack": [
      "Three.js",
      "React",
      "Blender",
      "WebGL",
      "Node.js",
      "Tailwind CSS"
    ],
    "github": "https://github.com/abraham-DT/virtual-atelier",
    "demoUrl": null,
    "metrics": [
      {
        "label": "Status",
        "value": "Unfinished Prototype"
      },
      {
        "label": "Measurement Accuracy",
        "value": "98.5%"
      },
      {
        "label": "Escrow Stages",
        "value": "3 Milestones"
      }
    ],
    "powHighlights": [
      "Parametric Three.js WebGL mannequin with customizable height, bust, waist, and drape physics",
      "Automated 3-stage milestone escrow architecture to protect tailors and global patrons",
      "Realistic textile shader rendering authentic African Adire wax print textures and gravity dynamics"
    ],
    "caseStudy": {
      "overview": "LOOM is an unfinished prototype eliminating measurement mismatches and payment security friction for bespoke fashion through real-time spatial interfaces.",
      "problem": "Traditional bespoke tailoring relies on error-prone tape measurements, resulting in high return rates and lack of payment security across borders.",
      "idea": "Combine an interactive Three.js 3D spatial mannequin with milestone-based escrow payouts triggered on fabric verification, construction, and delivery.",
      "architecture": [
        {
          "tier": "3D Spatial Mannequin",
          "desc": "Parametric 3D mannequin rendering in WebGL with realistic textile draping."
        },
        {
          "tier": "Milestone Escrow Pipeline",
          "desc": "Automated fund release in 3 verified phases: Fabric Sourced -> Cut & Sew -> Delivery Verified."
        }
      ],
      "breakthrough": "Seamless WebGL rendering in React with zero mobile frame drops, coupled with secure payment state verification.",
      "result": "Engineered functional 3D luxury commerce prototype as an ongoing spatial exploration with validated merchant and patron pilot workflows.",
      "lesson": "Spatial interfaces must serve a concrete economic purpose; 3D visualization combined with financial trust unlocks global luxury commerce."
    }
  },
  {
    "id": "kucheza-gaming",
    "code": "09",
    "slug": "kucheza-gaming-esports",
    "title": "Kucheza Gaming",
    "subtitle": "Esports Operations, 3D Tournament Staging & Enterprise Decks",
    "category": "3D & Spatial",
    "filterCategory": "spatial",
    "year": "2025",
    "featured": false,
    "badge": "Industrial Training",
    "coverImage": "/media/kucheza_gaming.jpg",
    "videoUrl": null,
    "hasVideo": false,
    "gallery": [
      "/media/kucheza_gaming.jpg",
      "/media/kucheza_logo_white.png"
    ],
    "summary": "Six month industrial training in gaming pipelines, 3D interactive tournament stage design in Blender, and corporate sponsorship presentations. Engineered high stakes spatial presentation systems for leading telecommunications and consumer brand partnerships.",
    "role": "R&D Engineer & 3D Staging Designer",
    "status": "Completed October 2025",
    "techStack": [
      "3D Staging",
      "Blender",
      "Spatial Design",
      "Esports Operations",
      "Pitch Engineering"
    ],
    "github": "https://github.com/abraham-DT",
    "demoUrl": null,
    "metrics": [
      {
        "label": "Duration",
        "value": "6 Months"
      },
      {
        "label": "Partner Systems",
        "value": "Enterprise Partnerships"
      },
      {
        "label": "Staging Scope",
        "value": "Arena & Exhibition Staging"
      }
    ],
    "powHighlights": [
      "3D tournament arena stage architectural design rendered in Blender with realistic concert lighting",
      "Spatial presentation systems engineered for corporate sponsorship partnerships",
      "Real-time tournament bracket workflows and player telemetry integration for esports operations"
    ],
    "caseStudy": {
      "overview": "Bridging the gap between gaming entertainment, corporate sponsorship systems, and physical event staging in the African esports ecosystem.",
      "problem": "Traditional esports events struggle to present clear ROI and immersive physical presence to tier 1 enterprise sponsors.",
      "idea": "Engineer 3D spatial tournament stage mockups and structured sponsorship architecture decks translating gaming metrics into corporate impact.",
      "architecture": [
        {
          "tier": "3D Event Staging",
          "desc": "Interactive 3D booth and tournament stage designs prepared in Blender for high-impact spatial visualization."
        },
        {
          "tier": "Corporate Pitch Engineering",
          "desc": "Data-driven sponsorship pitch decks engineered for premier corporate partner brands."
        }
      ],
      "breakthrough": "Successfully delivered spatial 3D stage and keynote presentations for corporate partner retreats.",
      "result": "Completed 6-month intensive training program on October 2, 2025.",
      "lesson": "Great engineering requires great communication; technical systems must translate clearly to business stakeholders."
    }
  },
  {
    "id": "codeplay-naija",
    "code": "10",
    "slug": "codeplay-naija-edutech",
    "title": "CodePlay Naija",
    "subtitle": "Digital Literacy, Gamified STEM & Playful Computing",
    "category": "Education & Impact",
    "filterCategory": "education",
    "year": "2025",
    "featured": false,
    "badge": "EduTech Impact",
    "coverImage": null,
    "videoUrl": null,
    "hasVideo": false,
    "gallery": [],
    "summary": "Practical computing curriculum empowering Nigerian secondary school educators and students with computational thinking skills through visual programming, embedded hardware, and Python progression.",
    "role": "Curriculum Architect & Lead Instructor",
    "status": "Deployed Initiative",
    "techStack": [
      "Construct 3",
      "Blockly",
      "Minecraft Education",
      "BBC Micro:bit",
      "Python"
    ],
    "github": "https://github.com/abraham-DT/CodePlay-Naija",
    "demoUrl": null,
    "metrics": [
      {
        "label": "Students Reached",
        "value": "200+"
      },
      {
        "label": "Completion Rate",
        "value": "92%"
      },
      {
        "label": "Curriculum Tiers",
        "value": "3 Stages"
      }
    ],
    "powHighlights": [
      "Engineered interactive 3-stage learning roadmap transitioning students from visual logic to Python code",
      "Trained 200+ students and teachers across Nigerian secondary school computer laboratories",
      "Demonstrated 92% project completion rate in hands-on game creation and hardware workshops"
    ],
    "caseStudy": {
      "overview": "Addresses the critical gap in practical Nigerian secondary computer science education through visual programming, embedded hardware, and gamified logic.",
      "problem": "Traditional computing classes in Nigeria rely on rote memorization of theoretical terms without hands-on digital creation.",
      "idea": "A structured 3-tier roadmap taking students from visual block logic (Blockly) to physical computing (Micro:bit) to text-based Python.",
      "architecture": [
        {
          "tier": "Digital Starter -> Expert Roadmap",
          "desc": "Tiered progression taking students from visual block logic to microcontroller hardware and text-based Python."
        }
      ],
      "breakthrough": "Trained 200+ students and educators with 92% project completion rates in game creation workshops.",
      "result": "Implemented across multiple secondary school computer laboratories in Nigeria.",
      "lesson": "Empowerment occurs when theoretical concepts immediately produce tangible, interactive digital artifacts."
    }
  },
  {
    "id": "creative-direction-fine-art",
    "code": "11",
    "slug": "creative-direction-fine-art",
    "title": "Pointillism & Fine Art Studio",
    "subtitle": "Archival Ink Masterworks & Spectrum Ori Art Exhibition",
    "category": "Design & Fine Art",
    "filterCategory": "art",
    "year": "2024\u201326",
    "featured": false,
    "badge": "Exhibited Masterworks",
    "coverImage": null,
    "videoUrl": null,
    "hasVideo": false,
    "gallery": [],
    "summary": "Creative direction, visual brand systems, and original pointillism ink artworks ('Illusion of Freedom', 'Morayo') selected and curated for the prestigious Spectrum Ori Art Exhibition.",
    "role": "Creative Director & Fine Artist",
    "status": "Ongoing Studio Practice",
    "techStack": [
      "Pointillism Ink",
      "Figma",
      "Adobe Photoshop",
      "Brand Architecture",
      "Exhibition Curation"
    ],
    "github": "https://github.com/abraham-DT",
    "demoUrl": null,
    "metrics": [
      {
        "label": "Exhibition",
        "value": "Spectrum Ori"
      },
      {
        "label": "Medium",
        "value": "Archival Ink 005"
      },
      {
        "label": "Curated Works",
        "value": "2 Masterpieces"
      }
    ],
    "powHighlights": [
      "Original pointillist artworks 'Illusion of Freedom' and 'Morayo' curated and exhibited at Spectrum Ori",
      "Over 250,000 individual micron ink stipples per composition creating continuous tonal realism",
      "Directly informs Abraham's software architecture: rigorous patience, modular construction, and spatial harmony"
    ],
    "caseStudy": {
      "overview": "The discipline of fine art and brand architecture directly informs software design \u2014 teaching precision, restraint, negative space, and visual rhythm.",
      "problem": "Connecting traditional craftsmanship with contemporary digital identities without losing authenticity.",
      "idea": "Use the pointillist philosophy (composing complex form from hundreds of thousands of discrete ink dots) as a foundational metaphor for modular software architecture.",
      "architecture": [
        {
          "tier": "Pointillism Practice",
          "desc": "Constructing complex human emotional forms from hundreds of thousands of deliberate ink dots, demanding extreme patience and focus."
        }
      ],
      "breakthrough": "Masterpieces 'Illusion of Freedom' and 'Morayo' curated and exhibited at the Spectrum Ori Art Exhibition.",
      "result": "Enduring aesthetic philosophy that guides all digital products and user interfaces engineered by Abraham.",
      "lesson": "Extreme patience in physical craft builds the mental tolerance required for complex, zero-error systems architecture."
    }
  },
  {
    "id": "meme-battle",
    "code": "12",
    "slug": "meme-battle-party-game",
    "title": "Meme Battle",
    "subtitle": "1v1 Multiplayer Reaction Party Game & Procedural Sound Engine",
    "category": "Games & 3D",
    "filterCategory": "gaming",
    "year": "2026",
    "featured": true,
    "badge": "Production Party Game",
    "coverImage": "/media/meme_battle_live.webp",
    "videoUrl": null,
    "hasVideo": false,
    "gallery": [
      {
        "url": "/media/meme_battle_live.webp",
        "title": "Meme Battle Live Desktop Arena & Scenario Card"
      },
      {
        "url": "/media/meme_battle_mobile.webp",
        "title": "Meme Battle Mobile Portrait Battle UI & Sticker Arsenal"
      }
    ],
    "summary": "Fast-paced 1v1 multiplayer party game engineered with interactive scenario reactions, searchable sticker and GIF arsenal with emotion filters, procedural Web Audio synthesizer, and live audience voting with AI referee scoring.",
    "role": "Lead Game Designer, Audio Architect & Full-Stack Engineer",
    "status": "Live in Production",
    "techStack": [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Motion",
      "Web Audio API",
      "Gemini API"
    ],
    "github": "https://github.com/darktune",
    "demoUrl": "https://meme-battle-zeta.vercel.app",
    "metrics": [
      {
        "label": "Scenario Library",
        "value": "150+ Situations"
      },
      {
        "label": "Audio Engine",
        "value": "100% Web Audio"
      },
      {
        "label": "AI Referee",
        "value": "3-Scale Context AI"
      }
    ],
    "powHighlights": [
      "Engineered a fast paced party game where players clash in witty meme duels across five rounds",
      "Designed a procedural sound synthesizer using the Web Audio API with zero audio file lag",
      "Built an intelligent referee using Gemini AI that rates humor, context fit, and reaction timing"
    ],
    "caseStudy": {
      "overview": "Meme Battle (Sticker Clash) is a high-speed interactive web party game where players compete in real-time meme duels across five rounds.",
      "problem": "Party games frequently struggle with slow card selection, clunky mobile controls, and repetitive joke fatigue.",
      "idea": "Engineer a rapid mobile-first battle screen combining instant emotion filters, procedural Web Audio sweeps, and synchronized card reveals.",
      "architecture": [
        {
          "tier": "Core Battle Loop",
          "desc": "Strict round state transitions: Matchmaking -> Selecting -> Locked In -> Synchronous Reveal -> Live Voting -> Review."
        },
        {
          "tier": "Procedural Web Audio Engine",
          "desc": "Zero-latency mathematical synthesis producing audio sweeps, tension countdown ticks, and fanfare without external audio files."
        },
        {
          "tier": "AI Referee & Review Engine",
          "desc": "Contextual 3-bar evaluation scoring context fit, humor impact, and reaction timing."
        }
      ],
      "breakthrough": "Achieved sub-second sticker filtering and seamless real-time audience voting with 100% procedural sound synthesis.",
      "codeSnippet": "// Meme Battle Procedural Sound Synthesizer\nclass SoundEffectsEngine {\n  playLock() {\n    const ctx = this.getContext();\n    [330, 440, 660].forEach((freq, i) => {\n      const osc = ctx.createOscillator();\n      const gain = ctx.createGain();\n      osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.04);\n      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.04 + 0.12);\n      osc.connect(gain); gain.connect(ctx.destination);\n      osc.start(ctx.currentTime + i * 0.04); osc.stop(ctx.currentTime + i * 0.04 + 0.12);\n    });\n  }\n}",
      "result": "Deployed in production on Vercel with responsive desktop and mobile viewports.",
      "lesson": "Party game magic lives in the speed of interaction. Eliminate decision friction and the comedy takes care of itself."
    }
  }
];
