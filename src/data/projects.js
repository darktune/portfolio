export const projectsData = [
  {
    "id": "civos",
    "code": "01",
    "slug": "civos-metaverse-os",
    "title": "CivOS",
    "subtitle": "Virtual World Simulation Architecture · Deterministic State Validation",
    "category": "Systems & Web3",
    "filterCategory": "systems",
    "year": "2026",
    "featured": true,
    "badge": "Research Prototype (In Progress)",
    "coverImage": null,
    "videoUrl": null,
    "hasVideo": false,
    "gallery": [],
    "summary": "An active systems research prototype exploring cost efficient simulation of game non player characters. Validates movement, resource physics, and trade rules deterministically in C++ before calling language models solely for character dialogue.",
    "role": "Systems Researcher & C++ Engineer",
    "status": "Active Research Prototype",
    "techStack": [
      "C++",
      "Apache Kafka",
      "ERC 4337",
      "Redis",
      "Solidity",
      "Vector DB"
    ],
    "github": "https://github.com/abraham-DT/CivOS",
    "demoUrl": null,
    "metrics": [
      {
        "label": "Architecture",
        "value": "State Machine"
      },
      {
        "label": "Validation Core",
        "value": "Deterministic C++"
      },
      {
        "label": "AI Role",
        "value": "Dialogue Only"
      }
    ],
    "powHighlights": [
      "C++ action validation checking physics and player inventories before any dialogue generation",
      "Restricts language models to conversational text to prevent hallucinated rule breaks",
      "Explores smart contract accounts for managing digital items in game economies"
    ],
    "caseStudy": {
      "overview": "CivOS is an ongoing systems research prototype exploring how to simulate responsive virtual communities without expensive language model API bills.",
      "problem": "Querying cloud language models for every character action causes high latency, immense API costs, and game breaking hallucinations.",
      "idea": "Handle character physics, inventory math, and rule checks deterministically in C++, and invoke language models only when characters speak to a player.",
      "architecture": [
        {
          "tier": "Deterministic C++ Engine",
          "desc": "Validates all character movements, inventory trades, and collision rules in native code."
        },
        {
          "tier": "Action Validation Filter",
          "desc": "Enforces game rules before state changes take effect, passing context to dialogue models only when needed."
        },
        {
          "tier": "Structured Memory Storage",
          "desc": "Uses relational and key value caches for character inventories, locations, and quest tasks."
        },
        {
          "tier": "Dialogue Dispatch",
          "desc": "Calls language models for character conversation only when a player initiates dialogue."
        }
      ],
      "breakthrough": "Separated rigid world rules from conversational dialogue, keeping character behavior consistent while minimizing cloud API calls.",
      "codeSnippet": "// CivOS Deterministic Action Validation Before LLM Dialogue\nbool BouncerService::ValidateAgentAction(const AgentID& agentId, const ActionPayload& action) {\n    if (!WorldState::Get().HasSufficientResources(agentId, action.resourceCost)) {\n        AuditLog::RecordViolation(agentId, \"INSUFFICIENT_FUNDS_REJECTED\");\n        return false;\n    }\n    WorldState::Get().ApplyDeterministicDelta(agentId, action);\n    LLMOrchestrator::DispatchFlavorText(agentId, action.context);\n    return true;\n}",
      "result": "Architectural specifications and prototype validation benchmarks in active development.",
      "lesson": "Virtual world rules must remain strictly deterministic. Probabilistic language models belong in dialogue generation, not in simulation physics."
    }
  },
  {
    "id": "dmex-protocol",
    "code": "02",
    "slug": "dmex-cross-game-swap",
    "title": "D MEX Protocol",
    "subtitle": "Cross Chain Atomic Swap Protocol for Digital Game Assets",
    "category": "Smart Contracts",
    "filterCategory": "systems",
    "year": "2026",
    "featured": true,
    "badge": "BSc Capstone Project",
    "coverImage": "/media/dmex_dashboard.webp",
    "videoUrl": null,
    "hasVideo": false,
    "gallery": [
      {
        "url": "/media/dmex_dashboard.webp",
        "title": "D MEX Protocol Web3 Trading Dashboard"
      },
      {
        "url": "/media/dmex_protocol.jpg",
        "title": "D MEX Protocol Cross Game Trading Architecture"
      },
      {
        "url": "/media/dmex_contracts_test.webp",
        "title": "Smart Contract Implementation & Foundry Benchmarks"
      },
      {
        "url": "/media/dmex_gas_benchmark.webp",
        "title": "Gas Execution Savings & Yul Invariant Benchmarks"
      },
      {
        "url": "/media/dmex_security_model.webp",
        "title": "Seven Layer Security Model & Cryptographic Defense"
      }
    ],
    "summary": "A decentralized atomic swap protocol built for peer to peer trading of gaming items across EVM blockchains. Eliminates custodial bridge risks through hash time locked contracts (HTLC), inline Yul assembly for gas reduction, and automated timelock refunds.",
    "role": "Protocol Architect & Smart Contract Engineer",
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
        "label": "EVM Gas Savings",
        "value": "38% with Yul"
      },
      {
        "label": "Test Coverage",
        "value": "100+ Foundry Tests"
      },
      {
        "label": "Swap Guarantee",
        "value": "Hash Time Locks"
      }
    ],
    "powHighlights": [
      "Inline Yul assembly verification reducing EVM gas costs by 38 percent",
      "Foundry invariant test suites proving zero lockups or exploitable states across contract flows",
      "Cryptographic hash time locks guaranteeing that token swaps complete or automatically refund"
    ],
    "caseStudy": {
      "overview": "D MEX Protocol is a BSc capstone engineering project enabling peer to peer swaps of digital game tokens across blockchains without centralized bridge custody.",
      "problem": "Centralized cross chain bridges are frequent targets for hacks and exploits, risking user funds and charging high intermediary conversion fees.",
      "idea": "Remove bridge intermediaries entirely by using atomic hash time locked contracts (HTLC) where swaps execute directly between users or automatically refund upon expiration.",
      "architecture": [
        {
          "tier": "Gas Optimized Core in Yul",
          "desc": "Inline assembly for hash verification, cutting transaction execution gas by 38 percent over standard Solidity."
        },
        {
          "tier": "Atomic Swap Escrow",
          "desc": "Cryptographic hash locks ensuring counterparties only claim assets by providing the correct secret preimage."
        },
        {
          "tier": "Timelock Refund Protection",
          "desc": "Deterministic block expiration that automatically returns funds to depositors if counterparties fail to complete the trade."
        },
        {
          "tier": "Chainlink Price Oracles",
          "desc": "Decentralized oracle feeds verifying exchange rates between different game tokens."
        }
      ],
      "breakthrough": "Direct peer to peer token swaps without custodial bridges, eliminating the vulnerability surface of centralized bridge contracts.",
      "codeSnippet": "// D-MEX Gas-Optimized Hash Verification in Yul Assembly\nfunction verifySecret(bytes32 hashLock, bytes32 secret) internal pure returns (bool isValid) {\n    assembly {\n        mstore(0x00, secret)\n        let computedHash := keccak256(0x00, 0x20)\n        isValid := eq(computedHash, hashLock)\n    }\n}",
      "result": "Zero vulnerabilities across 100+ Foundry fuzz and invariant test suites with 38 percent lower gas overhead.",
      "lesson": "Protocol security comes from mathematical simplicity and removing custodial intermediaries rather than adding complex administrative layers."
    }
  },
  {
    "id": "stelcera-terminal",
    "code": "03",
    "slug": "stelcera-institutional-terminal",
    "title": "STELCERA Terminal",
    "subtitle": "Financial Charting Workstation & Options Risk Calculator",
    "category": "Quantitative Systems",
    "filterCategory": "fintech",
    "year": "2026",
    "featured": true,
    "badge": "Financial Workstation",
    "coverImage": null,
    "videoUrl": null,
    "hasVideo": false,
    "gallery": [],
    "summary": "A high performance financial analytics and charting workstation built with Next.js 15, TypeScript, and FastAPI. Features custom HTML5 Canvas rendering for fluid 120 FPS market visualization, real time WebSocket tick streaming, and client side Black Scholes options Greeks calculations.",
    "role": "Full Stack Engineer",
    "status": "Completed Engineering Workstation",
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
    "demoUrl": "https://stelcera-w5x1.vercel.app",
    "metrics": [
      {
        "label": "Chart Frame Rate",
        "value": "60 to 120 FPS"
      },
      {
        "label": "Options Math",
        "value": "Black Scholes Greeks"
      },
      {
        "label": "Data Streaming",
        "value": "FastAPI WebSockets"
      }
    ],
    "powHighlights": [
      "Custom HTML5 Canvas chart renderer bypassing React DOM diffing to maintain 120 FPS during heavy price updates",
      "Analytical Black Scholes options pricer computing Delta, Gamma, Vega, Theta, and Rho in real time",
      "FastAPI WebSocket backend streaming simulated tick feeds and orderbook depth to client tools"
    ],
    "caseStudy": {
      "overview": "STELCERA Terminal is a technical trading interface and analytical workstation designed to test high frame rate web rendering and mathematical risk models.",
      "problem": "Standard web charts built on SVG or DOM elements stutter and lag during heavy market updates, while separate options calculators require cumbersome external tools.",
      "idea": "Bypass DOM updates entirely by rendering charts directly to an HTML5 Canvas, paired with client side options math and a lightweight FastAPI WebSocket streaming server.",
      "architecture": [
        {
          "tier": "HTML5 Canvas Chart Engine",
          "desc": "Direct pixel drawing for candlesticks and order depth, ensuring frame rates stay smooth at up to 120 FPS."
        },
        {
          "tier": "Black Scholes Options Greeks Lab",
          "desc": "Client side analytical calculations computing Delta, Gamma, Vega, Theta, and Rho instantly."
        },
        {
          "tier": "FastAPI WebSocket Server",
          "desc": "Asynchronous Python backend broadcasting price updates and orderbook depth without HTTP polling overhead."
        },
        {
          "tier": "Modular Workspace Layout",
          "desc": "Organized panels for price charts, risk calculators, and indicator views with low memory usage."
        }
      ],
      "breakthrough": "Achieved zero DOM reconciliation overhead during rapid tick cascades by rendering directly onto canvas via requestAnimationFrame.",
      "codeSnippet": "// STELCERA Black-Scholes Analytical Pricing & Greeks Engine\nexport function calculateBlackScholes(S: number, K: number, T: number, r: number, sigma: number, type: 'call' | 'put') {\n  const d1 = (Math.log(S / K) + (r + 0.5 * sigma * sigma) * T) / (sigma * Math.sqrt(T));\n  const d2 = d1 - sigma * Math.sqrt(T);\n  const Nd1 = normalCDF(d1);\n  const Nd2 = normalCDF(d2);\n  const price = type === 'call' ? S * Nd1 - K * Math.exp(-r * T) * Nd2 : K * Math.exp(-r * T) * (1 - Nd2) - S * (1 - Nd1);\n  const delta = type === 'call' ? Nd1 : Nd1 - 1;\n  const gamma = normalPDF(d1) / (S * sigma * Math.sqrt(T));\n  return { price, delta, gamma };\n}",
      "result": "Responsive charting workstation rendering live tick feeds smoothly at up to 120 FPS with instant options calculations.",
      "lesson": "Trading chart performance depends on keeping fast data out of the React DOM tree. Direct canvas drawing is essential for smooth real time data feeds."
    }
  },
  {
    "id": "reavo-app",
    "code": "04",
    "slug": "reavo-commerce-os",
    "title": "REAVO",
    "subtitle": "Student Electronics Store & Inventory Management Dashboard",
    "category": "Commerce & Logistics",
    "filterCategory": "commerce",
    "year": "2026",
    "featured": true,
    "badge": "Live Production Store",
    "coverImage": "/media/reavo_live.webp",
    "videoUrl": null,
    "hasVideo": false,
    "gallery": [
      {
        "url": "/media/reavo_live.webp",
        "title": "REAVO Production Storefront & Hero Showcase"
      },
      {
        "url": "/media/reavo_admin.webp",
        "title": "Executive Admin OS & Real Time Inventory Engine"
      },
      {
        "url": "/media/reavo_shop.webp",
        "title": "Student Gadget Catalog & Hardware Store"
      },
      {
        "url": "/media/reavo_apple.webp",
        "title": "Interactive Apple Flagship Feature Showcase"
      },
      {
        "url": "/media/reavo_manifesto.webp",
        "title": "The REAVO Student Gadget Manifesto"
      },
      {
        "url": "/media/reavo_cart.webp",
        "title": "Verified Campus Growth & Cumulative Revenue Record"
      },
      {
        "url": "/media/reavo_accessories.webp",
        "title": "Campus Ambassador Movement & Student Community"
      }
    ],
    "summary": "A production student electronics storefront and order management dashboard built with React, Node.js, Express, and Supabase, featuring verified payment checkout and real time inventory tracking.",
    "role": "Full Stack Engineer",
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
        "label": "Payment Verification",
        "value": "HMAC SHA256"
      },
      {
        "label": "Database Security",
        "value": "Row Level Security"
      },
      {
        "label": "Deployment",
        "value": "Vercel + Supabase"
      }
    ],
    "powHighlights": [
      "Production KoraPay checkout with cryptographic HMAC webhook verification and idempotency locks",
      "Supabase database hardening with fine grained Row Level Security on orders and inventory",
      "Automated hourly stock synchronization cron to prevent overselling on student gadgets"
    ],
    "caseStudy": {
      "overview": "REAVO is a production student electronics store and inventory management dashboard built to streamline gadget retail, order fulfillment, and stock tracking across campus.",
      "problem": "Student retail stores face double spending from unverified payment callbacks, cart race conditions during high demand drops, and messy manual inventory records.",
      "idea": "Architect a dual system platform: a fast customer storefront paired with an Express and Supabase backend featuring cryptographic payment verification and automated stock synchronization.",
      "architecture": [
        {
          "tier": "Express API Backend",
          "desc": "Centralized API handling catalog listings, cart validation, order states, and secure server to server payment requests."
        },
        {
          "tier": "Cryptographic Webhook Verification",
          "desc": "HMAC SHA256 signature validation on KoraPay payment callbacks with atomic idempotency locks preventing double credit exploits."
        },
        {
          "tier": "Supabase Row Level Security",
          "desc": "PostgreSQL Row Level Security policies ensuring shoppers only access their own records while keeping product tables protected."
        },
        {
          "tier": "Automated Stock Synchronization",
          "desc": "Automated hourly stock audits to keep warehouse inventory in sync and notify administrators of low stock items."
        }
      ],
      "breakthrough": "Elimination of payment fraud and phantom checkouts via atomic database transactions coupled with deterministic KoraPay HMAC verification.",
      "codeSnippet": "// REAVO Cryptographic Webhook Verification & Idempotency\nrouter.post('/webhook/korapay', async (req, res) => {\n  const signature = req.headers['x-korapay-signature'];\n  const hash = crypto.createHmac('sha256', process.env.KORAPAY_SECRET_KEY)\n    .update(JSON.stringify(req.body)).digest('hex');\n  if (hash !== signature) return res.status(401).json({ error: 'INVALID_SIGNATURE' });\n  const { event, data } = req.body;\n  const processed = await markWebhookProcessed(data.reference);\n  if (!processed) return res.status(200).send('ALREADY_PROCESSED');\n  await fulfillOrder(data.reference);\n  return res.status(200).json({ status: 'SUCCESS' });\n});",
      "result": "Live in production on Vercel handling student gadget orders with instant page loads and zero database authorization leaks.",
      "lesson": "Commerce trust rests entirely on backend idempotency. Never trust client reported payment confirmations; verify cryptographically at the boundary."
    }
  },
  {
    "id": "news-insights",
    "code": "05",
    "slug": "news-insights-media",
    "title": "News Insights",
    "subtitle": "Investigative Journalism & Media Publishing Platform",
    "category": "Journalism & Media",
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
      },
      {
        "url": "/media/news_insights_business.webp",
        "title": "Global Markets & Business Intelligence Desk"
      },
      {
        "url": "/media/news_insights_world.webp",
        "title": "World Affairs & International Bureau"
      }
    ],
    "summary": "A digital publishing platform and news portal built with Next.js 15, Supabase, TipTap rich text, and Tailwind CSS. Hardened against common web security flaws including injection and unauthorized access, featuring clean reading typography and subscription membership flows.",
    "role": "Full Stack & Security Engineer",
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
        "value": "Audited Web Security"
      },
      {
        "label": "Data Storage",
        "value": "Supabase PostgreSQL"
      },
      {
        "label": "Authentication",
        "value": "Google OAuth & RLS"
      }
    ],
    "powHighlights": [
      "Sanitized rich text editing with TipTap preventing cross site scripting and content injection",
      "Supabase database security using Row Level Security policies so unpublished drafts remain private",
      "Custom reader subscription modal with subtle blur and instant Google sign in"
    ],
    "caseStudy": {
      "overview": "News Insights is a full stack media publishing website engineered to deliver clean reading layouts, secure draft editing, and dependable reader subscriptions.",
      "problem": "Online news sites often suffer from slow content loading, unescaped text injection vulnerabilities in editors, and intrusive popups that cause reader fatigue.",
      "idea": "Build a server rendered publishing platform with Next.js 15 and Supabase, securing user drafts with database policies and providing a calm, elegant reader subscription experience.",
      "architecture": [
        {
          "tier": "Server Rendered Next.js 15",
          "desc": "Articles render quickly on the server for instant page delivery and consistent layout display."
        },
        {
          "tier": "Input Sanitization and RLS",
          "desc": "TipTap editor content is sanitized before saving, while database Row Level Security protects editorial drafts."
        },
        {
          "tier": "Reader Membership Modal",
          "desc": "A clean modal with backdrop blur for smooth reader onboarding and subscription tier selection."
        },
        {
          "tier": "Article Interaction State",
          "desc": "Lightweight client state tracking reader bookmarks, likes, and topic filtering."
        }
      ],
      "breakthrough": "Delivered fast article reading with zero unauthenticated draft leaks by securing content access directly inside PostgreSQL policies.",
      "codeSnippet": "// News-Insights Row-Level Security Policy for Published Articles\nCREATE POLICY \"Allow public read of published articles\"\nON public.articles\nFOR SELECT\nUSING (status = 'published' AND published_at <= NOW());",
      "result": "Deployed in production on Vercel delivering instant page loads, protected editorial drafts, and smooth OAuth authentication.",
      "lesson": "Security and good design work hand in hand. Enforcing database policies early keeps client code simple and focused on reader comfort."
    }
  },
  {
    "id": "antho",
    "code": "06",
    "slug": "antho-streetwear-vault",
    "title": "ANTHO",
    "subtitle": "Avant Garde Streetwear Storefront & Digital Lookbook",
    "category": "Streetwear & Commerce",
    "filterCategory": "commerce",
    "year": "2026",
    "featured": true,
    "badge": "Production Storefront",
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
      },
      {
        "url": "/media/antho_editorial.webp",
        "title": "Brand Heritage & Haute Couture Vision"
      }
    ],
    "summary": "An avant garde streetwear storefront and lookbook built with Next.js 15, React 19, Tailwind CSS, Prisma, and Paystack. Designed with image first portal navigation for effortless browsing, protected admin routes, and Playwright automated tests for reliable cart and checkout flows.",
    "role": "Full Stack Engineer",
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
        "label": "Navigation",
        "value": "Visual Portals"
      },
      {
        "label": "Catalog",
        "value": "Collection Hubs"
      },
      {
        "label": "Testing",
        "value": "Playwright Suites"
      }
    ],
    "powHighlights": [
      "Middleware protecting admin routes with cryptographic session token verification",
      "Visual navigation layout guiding shoppers across core collections without confusing dropdowns",
      "Server side price recalculation with Paystack webhook verification to prevent tampering"
    ],
    "caseStudy": {
      "overview": "ANTHO is a streetwear fashion storefront and lookbook created to showcase collection drops with high contrast imagery and dependable checkout.",
      "problem": "Fashion websites often overload shoppers with nested dropdown menus and flimsy cart state that fails during checkout.",
      "idea": "Structure the site around visual portal cards that show each collection clearly, paired with server validated pricing and Paystack payment processing.",
      "architecture": [
        {
          "tier": "Protected Admin Middleware",
          "desc": "Validates session tokens on administrative routes before allowing access to inventory and settings."
        },
        {
          "tier": "Visual Portal Navigation",
          "desc": "Organizes garments into distinct visual categories so shoppers recognize collections immediately."
        },
        {
          "tier": "Server Validated Cart",
          "desc": "Recalculates item subtotals on the server before initializing payments to guarantee price accuracy."
        },
        {
          "tier": "Automated Test Coverage",
          "desc": "Playwright end to end tests verifying browsing, cart additions, and checkout steps across mobile and desktop."
        }
      ],
      "breakthrough": "Combined clean editorial visuals with strict server side price verification for an easy and reliable shopping experience.",
      "codeSnippet": "// ANTHO Edge Middleware Cryptographic Route Protection\nexport async function middleware(req: NextRequest) {\n  const token = req.cookies.get('antho_admin_token')?.value;\n  if (!token || !(await verifyHmacToken(token, process.env.ADMIN_SECRET!))) {\n    return NextResponse.redirect(new URL('/login', req.url));\n  }\n  return NextResponse.next();\n}",
      "result": "Deployed in production on Vercel with instant page loads, smooth mobile browsing, and automated checkout test coverage.",
      "lesson": "Simpler navigation helps shoppers find items faster. Showing collections visually is far more intuitive than complex text menus."
    }
  },
  {
    "id": "abraham-collection",
    "code": "07",
    "slug": "abraham-collection-atelier",
    "title": "Abraham Collection",
    "subtitle": "Bespoke Fashion Atelier & Digital Tailoring Showcase",
    "category": "Fashion & Commerce",
    "filterCategory": "commerce",
    "year": "2026",
    "featured": true,
    "badge": "Live in Production",
    "coverImage": "/media/abraham_collection_live.webp",
    "videoUrl": null,
    "hasVideo": false,
    "gallery": [
      {
        "url": "/media/abraham_collection_live.webp",
        "title": "Abraham Collection Grand Atelier Web Platform"
      },
      {
        "url": "/media/abraham_collection_bespoke.webp",
        "title": "Bespoke Tailoring & Private Fitting Suite"
      },
      {
        "url": "/media/abraham_collection_heritage.webp",
        "title": "Atelier Heritage & Lagos Craftsmanship Since 2002"
      }
    ],
    "summary": "Founded in 2002 in Lagos, Abraham Collection has dressed generations of leaders in bespoke garments that fit with dignity. This digital atelier brings that physical craftsmanship to the web, letting clients explore hand stitched fabrics, study garment details, and book custom bespoke fittings with warmth and ease.",
    "role": "Full Stack Web Engineer",
    "status": "Live in Production",
    "techStack": [
      "Next.js 14",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PWA"
    ],
    "github": "https://github.com/abraham-DT",
    "demoUrl": "https://abrhamcollectionweb.vercel.app",
    "metrics": [
      {
        "label": "Atelier Heritage",
        "value": "Since 2002"
      },
      {
        "label": "Production Status",
        "value": "Live on Vercel"
      },
      {
        "label": "Offline Support",
        "value": "PWA Offline Cache"
      }
    ],
    "powHighlights": [
      "Brought twenty four years of master tailoring tradition into a modern digital fashion platform",
      "Built an easy consultation portal where patrons can request custom bespoke fittings without confusion",
      "Engineered an offline mode so clients can explore fabrics and lookbooks even with poor internet"
    ],
    "caseStudy": {
      "overview": "Bridging twenty four years of master African bespoke tailoring tradition with modern web engineering, offline lookbooks, and private fitting requests.",
      "problem": "Traditional couture tailoring relies on word of mouth and manual pen and paper notes, making it hard for busy professionals to schedule fittings or view past work.",
      "idea": "Build an inviting digital salon powered by Next.js and Supabase that pairs private booking forms with high resolution fabric galleries and offline reading.",
      "architecture": [
        {
          "tier": "Private Client Vault (Supabase)",
          "desc": "Secure database models holding patron fit profiles, bespoke consultation requests, and fabric selections."
        },
        {
          "tier": "Offline Lookbook Engine (PWA)",
          "desc": "Progressive Web App service worker caching garment collections so clients can browse fabrics anywhere."
        },
        {
          "tier": "Velvet Obsidian & Gold Salon",
          "desc": "Quiet editorial design celebrating rich hand woven textiles and bespoke suits with zero noisy ads."
        }
      ],
      "breakthrough": "Bridged generational artisan craftsmanship with modern web reliability, giving patrons total peace of mind from first sketch to final stitch.",
      "codeSnippet": "// Abraham Collection Offline PWA Service Worker Cache Handler\\nself.addEventListener('fetch', (event) => {\\n  if (event.request.destination === 'image') {\\n    event.respondWith(\\n      caches.open('abraham-atelier-media').then((cache) => {\\n        return cache.match(event.request).then((cachedResponse) => {\\n          return cachedResponse || fetch(event.request).then((networkResponse) => {\\n            cache.put(event.request, networkResponse.clone());\\n            return networkResponse;\\n          });\\n        });\\n      })\\n    );\\n  }\\n});",
      "result": "Deployed in production on Vercel delivering instantaneous lookbook browsing and verified client consultation bookings.",
      "lesson": "Software should honor human heritage. Bringing master craft to the web requires simplicity, respect, and zero clutter."
    }
  },
  {
    "id": "siphoon-os",
    "code": "08",
    "slug": "siphoon-quantitative-os",
    "title": "SIPHOON OS",
    "subtitle": "Forex Trade Journal & Risk Management Dashboard",
    "category": "Financial Tools",
    "filterCategory": "fintech",
    "year": "2026",
    "featured": true,
    "badge": "Live Production Tool",
    "coverImage": "/media/siphoon_live.webp",
    "videoUrl": null,
    "hasVideo": false,
    "gallery": [
      {
        "url": "/media/siphoon_live.webp",
        "title": "SIPHOON OS Command Center & Live Market Desk"
      },
      {
        "url": "/media/siphoon_intelligence.webp",
        "title": "Market Intelligence & Bayesian Signal Engine"
      },
      {
        "url": "/media/siphoon_quant.webp",
        "title": "Quant Hub Risk Calculators & Position Sizing"
      },
      {
        "url": "/media/siphoon_journal.webp",
        "title": "Forex Trade Journal & Execution Log"
      }
    ],
    "summary": "A personal Forex trade journal and risk calculator web app built with Next.js 15, TypeScript, PostgreSQL, Prisma, and TradingView lightweight charts. Helps currency traders calculate position lot sizes using the Kelly criterion, log trade entries with screenshots, and track rule discipline.",
    "role": "Full Stack Engineer",
    "status": "Live Production Tool",
    "techStack": [
      "Next.js 15",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "lightweight charts",
      "Tailwind CSS",
      "Docker"
    ],
    "github": "https://github.com/darktune/SIPHOON",
    "demoUrl": "https://siphoon.vercel.app",
    "metrics": [
      {
        "label": "Chart Display",
        "value": "Lightweight Charts"
      },
      {
        "label": "Risk Formulas",
        "value": "Kelly & Pip Math"
      },
      {
        "label": "Trade Journal",
        "value": "Prisma & PostgreSQL"
      }
    ],
    "powHighlights": [
      "Calculates lot sizes, pip values, and risk of ruin fractions before opening trades",
      "Candlestick charts using TradingView lightweight charts for responsive multi timeframe viewing",
      "Structured trade journal logging entry screenshots, trade reasoning, and emotional discipline notes"
    ],
    "caseStudy": {
      "overview": "SIPHOON OS is a personal trading journal and position calculator built to enforce consistent risk limits and eliminate emotional impulsive trading.",
      "problem": "Many retail currency traders struggle because they calculate lot sizes by guesswork and fail to record trade reasoning, leading to emotional revenge trades and account drawdowns.",
      "idea": "Build a single dashboard that calculates mathematical risk limits before each entry and logs trades with required rules checklists and screenshot evidence.",
      "architecture": [
        {
          "tier": "Position Risk Calculator",
          "desc": "Client side math computing position sizes based on stop loss distance, account balance, and Kelly risk limits."
        },
        {
          "tier": "Lightweight Candlestick Charts",
          "desc": "Canvas based charts for viewing price action cleanly across multiple timeframes."
        },
        {
          "tier": "PostgreSQL Trade Journal",
          "desc": "Prisma models storing entries, exits, setup screenshots, and trade notes for post trade reviews."
        },
        {
          "tier": "Rule Discipline Checklist",
          "desc": "Pre trade checklist verifying setup conditions before marking a planned trade as approved."
        }
      ],
      "breakthrough": "Instant client side lot sizing calculation, making it effortless to size positions accurately without spreadsheets.",
      "codeSnippet": "// SIPHOON OS \u2014 Kelly Criterion & Risk of Ruin Engine\nexport function calculateKellyCriterion(winRate: number, rewardRiskRatio: number): number {\n  const p = winRate;\n  const q = 1 - winRate;\n  const b = rewardRiskRatio;\n  const kelly = (b * p - q) / b;\n  return Math.max(0, kelly); // Fractional Kelly clamping\n}",
      "result": "Personal workstation with type safe Prisma schemas and quantitative calculators for daily trade logging.",
      "lesson": "Trading success comes from disciplined risk management and honest trade reviews rather than emotional predictions."
    }
  },
  {
    "id": "loom",
    "code": "09",
    "slug": "loom-spatial-atelier",
    "title": "LOOM",
    "subtitle": "3D Spatial Digital Atelier & Milestone Escrow Prototype",
    "category": "3D & Spatial",
    "filterCategory": "gaming",
    "year": "2025 · Present",
    "featured": true,
    "badge": "Live 3D Atelier",
    "coverImage": "/media/loom_live.webp",
    "videoUrl": null,
    "hasVideo": false,
    "gallery": [
      {
        "url": "/media/loom_live.webp",
        "title": "LOOM Salon Landing & Editorial Showcase"
      },
      {
        "url": "/media/loom_3d_atelier.webp",
        "title": "Interactive 3D Virtual Showroom & Orbit Rig"
      },
      {
        "url": "/media/loom_studio.webp",
        "title": "Native Studio Six Stage Garment Configurator"
      },
      {
        "url": "/media/loom_mobile.webp",
        "title": "Mobile Responsive Atelier Dock Experience"
      }
    ],
    "summary": "A luxury 3D fashion atelier platform replacing static digital lookbooks with an interactive full screen WebGL showroom, biometric body morphing, bespoke Native Studio configurator, tailor patron direct quotation model, and milestone escrow security.",
    "role": "3D & Systems Engineer",
    "status": "Live in Production",
    "techStack": [
      "Three.js",
      "React",
      "Blender",
      "WebGL",
      "Node.js",
      "Tailwind CSS"
    ],
    "github": "https://github.com/darktune/loom",
    "demoUrl": "https://loom-3d-virtual-atelier.vercel.app",
    "metrics": [
      {
        "label": "Status",
        "value": "Live Atelier"
      },
      {
        "label": "3D Rendering",
        "value": "Three.js WebGL"
      },
      {
        "label": "Escrow Concept",
        "value": "3 Milestones"
      }
    ],
    "powHighlights": [
      "Interactive Three.js 3D mannequin allowing users to preview garment silhouettes in the browser",
      "Milestone escrow payment concept holding funds until fabric sourcing and sewing milestones are approved",
      "Experimented with textile drape shaders for showcasing African wax print fabrics"
    ],
    "caseStudy": {
      "overview": "LOOM is an unfinished 3D spatial prototype exploring how web graphics and phased escrow milestones can help custom tailors connect with clients.",
      "problem": "Ordering custom clothing online often leads to miscommunicated fit expectations and trust issues around upfront deposits.",
      "idea": "Combine an interactive 3D browser mannequin for previewing garment cuts with a phased milestone payment escrow releasing funds upon client approval.",
      "architecture": [
        {
          "tier": "Three.js 3D Mannequin",
          "desc": "Interactive 3D model in the browser allowing clients to rotate and view garment fits."
        },
        {
          "tier": "Milestone Escrow Logic",
          "desc": "Phased fund release concept dividing orders into fabric sourcing, tailoring, and final delivery."
        }
      ],
      "breakthrough": "Lightweight 3D model rendering in the browser without requiring external plugins or heavy downloads.",
      "result": "Ongoing spatial exploration prototype with basic 3D mannequin controls and milestone escrow specifications.",
      "lesson": "3D visualization on the web is most valuable when tied to practical customer needs like fit clarity and payment trust."
    }
  },
  {
    "id": "kucheza-gaming",
    "code": "10",
    "slug": "kucheza-gaming-esports",
    "title": "Kucheza Gaming",
    "subtitle": "3D Tournament Arena Modeling & Esports Sponsorship Presentations",
    "category": "3D & Spatial",
    "filterCategory": "spatial",
    "year": "2025",
    "featured": false,
    "badge": "Industrial Training",
    "coverImage": "/media/kucheza_gaming.jpg",
    "videoUrl": null,
    "hasVideo": false,
    "gallery": [
      {
        "url": "/media/kucheza_gaming.jpg",
        "title": "Kucheza Esports 3D Stage & Arena Staging"
      },
      {
        "url": "/media/kucheza_arena_stage.webp",
        "title": "High Definition 3D Arena Lighting & Spectator Booths"
      },
      {
        "url": "/media/kucheza_logo_white.png",
        "title": "Official Kucheza Gaming Identity"
      }
    ],
    "summary": "Six month industrial training focused on 3D tournament stage modeling in Blender, tournament bracket operations, and structured sponsorship presentation decks for corporate partners.",
    "role": "3D Staging & Esports Operations Intern",
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
        "label": "3D Staging",
        "value": "Blender Arena Models"
      },
      {
        "label": "Operations",
        "value": "Tournament Brackets"
      }
    ],
    "powHighlights": [
      "Modeled 3D tournament stages and arena lighting setups in Blender for event visualizations",
      "Created visual sponsorship decks translating tournament gaming data for corporate sponsors",
      "Assisted in running tournament bracket logistics and operational schedules during live competitions"
    ],
    "caseStudy": {
      "overview": "A six month university industrial training internship at Kucheza Gaming focused on physical esports stage visualization and partner presentation materials.",
      "problem": "Esports organizers often find it hard to help sponsors visualize arena stages and tournament value before the event is built.",
      "idea": "Use Blender to build 3D virtual stages showing sponsor banners, spectator seating, and lighting, paired with clear data slides.",
      "architecture": [
        {
          "tier": "3D Arena Stage Models",
          "desc": "Built architectural stage layouts and lighting mockups in Blender."
        },
        {
          "tier": "Sponsorship Decks",
          "desc": "Created presentation decks explaining audience reach and event schedules to corporate sponsors."
        }
      ],
      "breakthrough": "Delivered realistic 3D stage mockups that helped sponsors clearly see booth placements before physical construction.",
      "result": "Completed 6 month intensive industrial training program in October 2025.",
      "lesson": "Clear visual communication helps stakeholders understand complex technical and physical event designs before construction begins."
    }
  },
  {
    "id": "codeplay-naija",
    "code": "11",
    "slug": "codeplay-naija-edutech",
    "title": "CodePlay Naija",
    "subtitle": "Public Secondary School Computing Initiative Curated within Kucheza Gaming",
    "category": "Education & Impact",
    "filterCategory": "education",
    "year": "2025",
    "featured": false,
    "badge": "EduTech Impact",
    "coverImage": null,
    "videoUrl": null,
    "hasVideo": false,
    "gallery": [],
    "summary": "A hands on computing curriculum and workshop initiative for public secondary schools curated within Kucheza Gaming. Uses visual blocks, BBC Micro:bit hardware, and basic Python so students create real games and circuits rather than memorizing definitions.",
    "role": "Curriculum Designer & Workshop Lead (Kucheza Fellowship)",
    "status": "Curated Initiative",
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
        "value": "200+ Students"
      },
      {
        "label": "Curriculum Stages",
        "value": "Blocks to Python"
      },
      {
        "label": "Hardware Tools",
        "value": "BBC Micro:bit"
      }
    ],
    "powHighlights": [
      "Structured lessons guiding students step by step from visual block programming to text code in Python",
      "Taught hands on coding workshops to over 200 secondary students across school computer labs",
      "Included physical microcontroller projects with BBC Micro:bit to make computing tangible and engaging"
    ],
    "caseStudy": {
      "overview": "CodePlay Naija was a computational thinking and programming initiative for public secondary schools curated within Kucheza Gaming during Abraham's industrial training fellowship.",
      "problem": "Many secondary school computing classes teach definitions from textbooks without students writing code or building software.",
      "idea": "Design project based lessons using visual blocks, interactive microcontrollers, and beginner Python so students learn by building games and tools.",
      "architecture": [
        {
          "tier": "Visual Programming Foundations",
          "desc": "Introduces logic, loops, and conditions through block based game creation."
        },
        {
          "tier": "Physical Hardware Exploration",
          "desc": "Connects BBC Micro:bit boards to teach inputs, sensors, and hardware control."
        },
        {
          "tier": "Introduction to Python",
          "desc": "Transitions students to basic text syntax for simple scripts and problem solving."
        }
      ],
      "breakthrough": "Helped over 200 students write their very first working programs and games directly on lab computers.",
      "result": "Conducted interactive computing workshops across secondary school laboratories in Nigeria.",
      "lesson": "Students learn computer science best when they can see their code take action immediately on screen or hardware."
    }
  },
  {
    "id": "creative-direction-fine-art",
    "code": "12",
    "slug": "creative-direction-fine-art",
    "title": "Pointillism & Fine Art Studio",
    "subtitle": "Archival Ink Drawing & Spectrum Ori Art Exhibition",
    "category": "Design & Fine Art",
    "filterCategory": "art",
    "year": "2024 · 2026",
    "featured": false,
    "badge": "Exhibited Artworks",
    "coverImage": null,
    "videoUrl": null,
    "hasVideo": false,
    "gallery": [],
    "summary": "Original pointillism ink artworks ('Illusion of Freedom' and 'Morayo') created with archival micron pens and curated for the Spectrum Ori Art Exhibition in Lagos. Uses extreme patience across hundreds of thousands of deliberate ink dots, directly shaping Abraham's focus and discipline in software engineering.",
    "role": "Fine Artist",
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
        "label": "Curated Artworks",
        "value": "2 Works Selected"
      }
    ],
    "powHighlights": [
      "Original pointillist artworks 'Illusion of Freedom' and 'Morayo' curated and exhibited at Spectrum Ori",
      "Hundreds of thousands of individual micron ink stipples per composition creating continuous tonal realism",
      "Physical craft discipline shaping software development: patience, attention to detail, and focus"
    ],
    "caseStudy": {
      "overview": "Fine art pointillism in ink requires absolute dedication, steady focus, and deliberate placement where mistakes cannot be erased.",
      "problem": "Modern digital design often relies on hasty iterations without the deep patience needed for clean, enduring craft.",
      "idea": "Practice pointillism (rendering complex human expressions through thousands of individual pen dots) as a discipline that trains mental focus for clean systems engineering.",
      "architecture": [
        {
          "tier": "Ink Pointillism Technique",
          "desc": "Building human forms and deep values from individual ink dots using 005 micron pens on archival paper."
        }
      ],
      "breakthrough": "Artworks 'Illusion of Freedom' and 'Morayo' selected and exhibited at the Spectrum Ori Art Exhibition.",
      "result": "A disciplined creative practice that brings visual balance, patience, and care to every software interface.",
      "lesson": "Extreme patience in physical craft builds the mental focus required for writing reliable, disciplined software."
    }
  },
  {
    "id": "meme-battle",
    "code": "13",
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
    "summary": "A fast paced 1v1 browser party game where players react to funny prompts with memes and stickers. Built with React 19, TypeScript, Vite, Tailwind CSS, a procedural Web Audio sound synthesizer, and a lightweight Gemini API prompt that rates humor and timing.",
    "role": "Game Designer & Full Stack Engineer",
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
        "label": "Scenarios",
        "value": "150+ Situations"
      },
      {
        "label": "Sound Design",
        "value": "Procedural Web Audio"
      },
      {
        "label": "AI Referee",
        "value": "Gemini API Scoring"
      }
    ],
    "powHighlights": [
      "Fast paced party game where players duel with stickers and memes across five rounds",
      "Procedural sound synthesizer using the Web Audio API with zero audio file download lag",
      "AI referee using Gemini API to score joke relevance, humor, and reaction timing"
    ],
    "caseStudy": {
      "overview": "Meme Battle is an interactive web party game where two players compete in quick meme duels across five rounds.",
      "problem": "Online party games often suffer from slow card loading, clunky mobile layouts, and awkward pauses between rounds.",
      "idea": "Build a fast, mobile friendly game interface with quick emotion filters, instant card reveals, and synthesized browser sound effects.",
      "architecture": [
        {
          "tier": "Round Game Loop",
          "desc": "Smooth round progression through matchmaking, selection, reveal, voting, and score calculation."
        },
        {
          "tier": "Procedural Web Audio Engine",
          "desc": "Synthesizes beeps, countdown ticks, and victory chimes directly in browser code without downloading audio files."
        },
        {
          "tier": "AI Referee Scoring",
          "desc": "Lightweight Gemini API prompt evaluating how well player stickers match each round prompt."
        }
      ],
      "breakthrough": "Created an instant, responsive party game with procedural sound synthesis and zero audio download overhead.",
      "codeSnippet": "// Meme Battle Procedural Sound Synthesizer\nclass SoundEffectsEngine {\n  playLock() {\n    const ctx = this.getContext();\n    [330, 440, 660].forEach((freq, i) => {\n      const osc = ctx.createOscillator();\n      const gain = ctx.createGain();\n      osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.04);\n      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.04 + 0.12);\n      osc.connect(gain); gain.connect(ctx.destination);\n      osc.start(ctx.currentTime + i * 0.04); osc.stop(ctx.currentTime + i * 0.04 + 0.12);\n    });\n  }\n}",
      "result": "Deployed in production on Vercel with smooth support for both desktop and mobile screens.",
      "lesson": "Party game fun depends on speed and momentum. Removing lag and decision friction lets the humor shine."
    }
  }
];
