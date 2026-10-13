export const finishedProjectsData = [
  {
    id: "dmex-protocol",
    code: "01",
    title: "D MEX Protocol",
    subtitle: "Cross Chain Atomic Swap Protocol for Sovereign Game Economies",
    category: "Systems & Web3",
    filterCategory: "systems",
    year: "2026",
    statusBadge: "Completed BSc Capstone",
    featured: true,
    coverImage: null,
    videoUrl: null,
    hasVideo: false,
    gallery: [],
    summary: "Trustless cross chain atomic swap infrastructure engineered for sovereign gaming ecosystems. Eliminates centralized bridge exploits via cryptographic timelocks and assembly code optimizations.",
    role: "Sole Protocol Architect and Smart Contract Engineer",
    techStack: ["Solidity", "Foundry", "Yul Assembly", "Chainlink Oracles", "EVM", "Python"],
    github: "https://github.com/abraham-DT/DMEX-Protocol",
    demoUrl: null,
    metrics: [
      { label: "EVM Gas Cut", value: "38%" },
      { label: "Vulnerabilities", value: "0 Found" },
      { label: "Timelock Guarantee", value: "100% Cryptographic" }
    ],
    finishedHighlights: [
      "Reduced transaction gas costs by 38 percent using assembly code optimizations.",
      "Protected user funds with mathematical tests that verified zero security flaws.",
      "Built an AI guardian that monitors transactions to prevent front running fraud."
    ],
    caseStudy: {
      problem: "Cross chain gaming bridges suffer constant security exploits and high slippage during multi token conversions.",
      solution: "Eliminated trusted bridge intermediaries by building atomic swaps guaranteed by cryptographic hash locks and automated refund timelocks.",
      breakthrough: "Direct peer to peer atomic finality where swaps either complete cryptographically or refund automatically upon timeout.",
      codeSnippet: `// D-MEX Gas-Optimized Hash Verification in Yul Assembly
function verifySecret(bytes32 hashLock, bytes32 secret) internal pure returns (bool isValid) {
    assembly {
        mstore(0x00, secret)
        let computedHash := keccak256(0x00, 0x20)
        isValid := eq(computedHash, hashLock)
    }
}`
    }
  },
  {
    id: "stelcera-terminal",
    code: "02",
    title: "STELCERA Terminal",
    subtitle: "Quantitative Multi Desk Workstation and High Frequency Analytics",
    category: "Fintech & Quant",
    filterCategory: "fintech",
    year: "2026",
    statusBadge: "Production Workstation",
    featured: true,
    coverImage: null,
    videoUrl: null,
    hasVideo: false,
    gallery: [],
    summary: "Ultra low latency institutional quantitative workstation built with modern web standards and high speed data pipelines. Features 105 operational desks spanning autonomous market models and real time risk analytics.",
    role: "Full Stack Quantitative Systems Architect",
    techStack: ["Next.js 15", "React 19", "FastAPI", "WebSockets", "HTML5 Canvas", "Python", "NumPy"],
    github: "https://github.com/abraham-DT/stelcera-terminal",
    demoUrl: null,
    metrics: [
      { label: "Operational Desks", value: "105 Desks" },
      { label: "Render Frame Rate", value: "120 FPS" },
      { label: "WebSocket Latency", value: "< 15ms" }
    ],
    finishedHighlights: [
      "Engineered a high speed trading screen running at 120 frames per second without lag.",
      "Created an autonomous AI swarm to analyze market swings across 105 financial desks.",
      "Calculated institutional investment risk values in under 15 milliseconds."
    ],
    caseStudy: {
      problem: "Standard web trading interfaces suffer from render lag during market volatility spikes and lack integrated cross venue risk tools.",
      solution: "Built a hardware accelerated chart engine paired with a stochastic market generator broadcasting micro orderbook depth over WebSockets.",
      breakthrough: "Bypassed standard web re-render bottlenecks entirely by driving rendering directly through high speed frame loops.",
      codeSnippet: `// STELCERA Black-Scholes Analytical Pricing & Greeks Engine
export function calculateBlackScholes(S: number, K: number, T: number, r: number, sigma: number, type: 'call' | 'put') {
  const d1 = (Math.log(S / K) + (r + 0.5 * sigma * sigma) * T) / (sigma * Math.sqrt(T));
  const d2 = d1 - sigma * Math.sqrt(T);
  const Nd1 = normalCDF(d1);
  const Nd2 = normalCDF(d2);
  const price = type === 'call' ? S * Nd1 - K * Math.exp(-r * T) * Nd2 : K * Math.exp(-r * T) * (1 - Nd2) - S * (1 - Nd1);
  const delta = type === 'call' ? Nd1 : Nd1 - 1;
  const gamma = normalPDF(d1) / (S * sigma * Math.sqrt(T));
  return { price, delta, gamma };
}`
    }
  },
  {
    id: "reavo-app",
    code: "03",
    title: "REAVO",
    subtitle: "Autonomous Online Commerce Engine and Corporate Admin Operating System",
    category: "Commerce & Logistics",
    filterCategory: "commerce",
    year: "2026",
    statusBadge: "Live in Production",
    featured: true,
    coverImage: "/media/reavo_live.webp",
    videoUrl: null,
    hasVideo: false,
    gallery: [
      {
        url: "/media/reavo_live.webp",
        title: "REAVO Live Storefront & Admin OS"
      }
    ],
    summary: "Production consumer electronics storefront and corporate operating system powered by verified payment workflows and automated inventory synchronization. Built with bank grade security rules and an autonomous operations copilot.",
    role: "Sole Full Stack Architect and Core Engineer",
    techStack: ["Node.js", "Express", "Vite / React", "Supabase", "KoraPay API", "Tailwind CSS"],
    github: "https://github.com/abraham-DT/reavo-app",
    demoUrl: "https://reavo-app.vercel.app",
    metrics: [
      { label: "Payment Security", value: "Cryptographic HMAC" },
      { label: "Authorization", value: "Zero Trust RLS" },
      { label: "Production Status", value: "Live on Vercel" }
    ],
    finishedHighlights: [
      "Built a secure online checkout with instant payment verification that prevents double charging.",
      "Protected customer order databases with strict bank grade permission rules.",
      "Automated warehouse inventory updates and created an AI assistant for daily operations."
    ],
    caseStudy: {
      problem: "Retail platforms frequently encounter duplicate payment issues from unverified webhooks and delayed inventory updates.",
      solution: "Architected a fast customer storefront paired with an authoritative backend featuring cryptographic payment checks and automated sync.",
      breakthrough: "Eliminated payment fraud and ghost checkouts via atomic database transactions coupled with deterministic signature checks.",
      codeSnippet: `// REAVO Cryptographic Webhook Verification & Idempotency
router.post('/webhook/korapay', async (req, res) => {
  const signature = req.headers['x-korapay-signature'];
  const hash = crypto.createHmac('sha256', process.env.KORAPAY_SECRET_KEY)
    .update(JSON.stringify(req.body)).digest('hex');
  if (hash !== signature) return res.status(401).json({ error: 'INVALID_SIGNATURE' });
  const { event, data } = req.body;
  const processed = await markWebhookProcessed(data.reference);
  if (!processed) return res.status(200).send('ALREADY_PROCESSED');
  await fulfillOrder(data.reference);
  return res.status(200).json({ status: 'SUCCESS' });
});`
    }
  },
  {
    id: "news-insights",
    code: "04",
    title: "News Insights",
    subtitle: "Investigative Media Intelligence and AI Publishing Platform",
    category: "Media & Intelligence",
    filterCategory: "media",
    year: "2026",
    statusBadge: "Live in Production",
    featured: true,
    coverImage: "/media/news_insights_live.webp",
    videoUrl: null,
    hasVideo: false,
    gallery: [
      {
        url: "/media/news_insights_live.webp",
        title: "News Insights Live Publishing Platform"
      }
    ],
    summary: "High throughput digital publishing and investigative journalism portal engineered with server rendered articles and luxury reader modals. Audited against 75 common web application vulnerabilities with hardened database permissions.",
    role: "Lead Full Stack and Security Engineer",
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Supabase", "Zustand", "TipTap", "OAuth 2.0"],
    github: "https://github.com/abraham-DT/news-insights",
    demoUrl: "https://news-insights-abrahamtoluwani999-6423s-projects.vercel.app",
    metrics: [
      { label: "Security Defense", value: "75 Vulnerabilities Audited" },
      { label: "Data Pipeline", value: "Real Time Sync" },
      { label: "Authentication", value: "Google OAuth plus RLS" }
    ],
    finishedHighlights: [
      "Defended publishing servers against 75 known web vulnerabilities and data leaks.",
      "Crafted a luxury reader subscription modal with smooth visual blur and one tap Google login.",
      "Delivered fast loading article pages that appear instantly on Google search."
    ],
    caseStudy: {
      problem: "Media platforms suffer from client side data leaks and reader churn caused by intrusive paywalls and clunky subscription flows.",
      solution: "Engineered a bespoke web portal backed by database row security, audited against 75 web vulnerability standards, featuring a luxury glass paywall.",
      breakthrough: "Achieved zero vulnerability findings during comprehensive security audits while boosting reader engagement.",
      codeSnippet: `// News-Insights Row-Level Security Policy for Published Articles
CREATE POLICY "Allow public read of published articles"
ON public.articles
FOR SELECT
USING (status = 'published' AND published_at <= NOW());`
    }
  },
  {
    id: "antho",
    code: "05",
    title: "ANTHO",
    subtitle: "Avant Garde Luxury Streetwear Storefront and Digital Vault",
    category: "Commerce & Logistics",
    filterCategory: "commerce",
    year: "2026",
    statusBadge: "Live in Production",
    featured: true,
    coverImage: "/media/antho_live.webp",
    videoUrl: null,
    hasVideo: false,
    gallery: [
      {
        url: "/media/antho_live.webp",
        title: "ANTHO Live Luxury Streetwear Storefront"
      }
    ],
    summary: "Avant garde luxury streetwear commerce platform engineered with visual first portal navigation and cryptographic route protection. Grounded in human computer interaction heuristics and automated end to end test suites.",
    role: "Lead Full Stack and Product Engineer",
    techStack: ["Next.js 15", "React 19", "Tailwind CSS", "Prisma", "Paystack", "Playwright", "Web Crypto"],
    github: "https://github.com/abraham-DT/antho",
    demoUrl: "https://antho-rho.vercel.app",
    metrics: [
      { label: "HCI Heuristics", value: "Nielsen Principle 6" },
      { label: "Vault Catalog", value: "4 Capsule System" },
      { label: "Test Coverage", value: "100% Pass Rate" }
    ],
    finishedHighlights: [
      "Guarded administrator accounts using cryptographic keys and edge security barriers.",
      "Redesigned product catalogs into a clear visual portal that simplifies shopping decisions.",
      "Verified complete checkout reliability with automated end to end test simulations."
    ],
    caseStudy: {
      problem: "Luxury fashion storefronts frequently suffer from cluttered dropdown menus that violate user recall heuristics and fragile checkout flows.",
      solution: "Overhauled storefront navigation into a visual first portal grounded in human computer interaction heuristics, edge route guards, and automated tests.",
      breakthrough: "Maintained zero unauthorized admin intrusions and a 100 percent pass rate across end to end checkout simulations.",
      codeSnippet: `// ANTHO Edge Middleware Cryptographic Route Protection
export async function middleware(req: NextRequest) {
  const token = req.cookies.get('antho_admin_token')?.value;
  if (!token || !(await verifyHmacToken(token, process.env.ADMIN_SECRET!))) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  return NextResponse.next();
}`
    }
  },
  {
    id: "kucheza-gaming",
    code: "06",
    title: "Kucheza Gaming",
    subtitle: "Esports Operations, 3D Tournament Staging and Enterprise Decks",
    category: "3D & Gaming",
    filterCategory: "gaming",
    year: "2025",
    statusBadge: "Completed Industrial Training",
    featured: false,
    coverImage: null,
    videoUrl: null,
    hasVideo: false,
    gallery: [],
    summary: "Six month industrial training in gaming pipelines, 3D interactive tournament stage design in Blender, and corporate sponsorship presentations. Engineered high stakes spatial presentation systems for leading telecommunications and consumer brand partnerships.",
    role: "Research Engineer and 3D Staging Designer",
    techStack: ["3D Staging", "Blender", "Spatial Design", "Esports Operations", "Pitch Engineering"],
    github: "https://github.com/abraham-DT",
    demoUrl: null,
    metrics: [
      { label: "Training Duration", value: "6 Months" },
      { label: "Partner Systems", value: "Enterprise Partnerships" },
      { label: "Staging Scope", value: "Arena & Exhibition Staging" }
    ],
    finishedHighlights: [
      "Designed 3D esports arena stages in Blender with concert lighting and camera angles.",
      "Engineered spatial presentation systems for premier corporate sponsorship partnerships.",
      "Delivered interactive 3D spatial keynote visualizations for executive partner retreats."
    ],
    caseStudy: {
      problem: "Traditional esports events struggle to present clear commercial value and immersive physical presence to corporate enterprise sponsors.",
      solution: "Engineered 3D spatial tournament stage mockups and structured sponsorship architecture presentations translating gaming engagement into corporate impact.",
      breakthrough: "Successfully delivered spatial 3D stage and keynote presentations for corporate partner retreats, completing the six month training with distinction."
    }
  }
];
