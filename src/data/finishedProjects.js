export const finishedProjectsData = [
  {
    id: "dmex-protocol",
    code: "01",
    title: "D MEX Protocol",
    subtitle: "Safe Cross Chain Trading for Sovereign Game Economies",
    category: "Systems & Web3",
    filterCategory: "systems",
    year: "2026",
    statusBadge: "Completed BSc Capstone",
    featured: true,
    coverImage: "/media/dmex_dashboard.webp",
    videoUrl: null,
    hasVideo: false,
    gallery: [
      {
        url: "/media/dmex_dashboard.webp",
        title: "D MEX Protocol Web3 Trading Dashboard"
      },
      {
        url: "/media/dmex_protocol.jpg",
        title: "D MEX Protocol Cross Game Trading Architecture"
      },
      {
        url: "/media/dmex_contracts_test.webp",
        title: "Smart Contract Implementation & Foundry Benchmarks"
      },
      {
        url: "/media/dmex_gas_benchmark.webp",
        title: "Gas Execution Savings & Yul Invariant Benchmarks"
      },
      {
        url: "/media/dmex_security_model.webp",
        title: "Seven Layer Security Model & Cryptographic Defense"
      }
    ],
    summary: "A safe way for gamers to trade digital items across different games. Removes middleman bridge risks using mathematical rules where trades complete together or cancel with an instant refund.",
    role: "Sole Protocol Architect and Smart Contract Engineer",
    techStack: ["Solidity", "Foundry", "Yul Assembly", "Chainlink Oracles", "EVM", "Python"],
    github: "https://github.com/abraham-DT/DMEX-Protocol",
    demoUrl: null,
    metrics: [
      { label: "Gas Cut", value: "38% Saved" },
      { label: "Vulnerabilities", value: "0 Found" },
      { label: "Trade Guarantee", value: "100% Safe" }
    ],
    finishedHighlights: [
      "Reduced transaction network fees by 38 percent with clean low level memory optimizations.",
      "Protected player items with thousands of automated mathematical tests proving zero exploit flaws.",
      "Built an intelligent guardian agent that watches over transactions to prevent front running bots."
    ],
    thinkingTree: {
      root: {
        stage: "01",
        label: "Problem & Creative Spark",
        title: "Games Trapped Behind Risky Trading Bridges",
        description: "Players lose hard earned items and money because traditional exchange bridges get exploited by hackers and charge unfair conversion fees.",
        tag: "Creative Spark"
      },
      branches: [
        {
          id: "backend",
          branchType: "Layered Backend Architecture",
          subtitle: "Deterministic Logic & High Performance",
          steps: [
            {
              num: "02A",
              title: "Equal Proof Secret Locks",
              detail: "Wrote smart contract rules where trades only unlock when both players verify the secret key at the exact same moment.",
              tech: "Solidity"
            },
            {
              num: "02B",
              title: "Smart Memory Trimming",
              detail: "Cleaned up low level computer storage to cut trade fees by thirty eight percent.",
              tech: "Yul Assembly"
            }
          ]
        },
        {
          id: "frontend",
          branchType: "Frontend Beauty & Sensory UI",
          subtitle: "Visual Harmony & Tactile Feel",
          steps: [
            {
              num: "03A",
              title: "Simple Honest Trading Screen",
              detail: "Designed a clear exchange screen with live countdown timers and easy status lights.",
              tech: "React"
            },
            {
              num: "03B",
              title: "Reassuring Step by Step Confirmations",
              detail: "Created friendly visual cues that give players complete calm while their trades settle safely.",
              tech: "Tailwind CSS"
            }
          ]
        }
      ],
      convergence: {
        stage: "04",
        label: "Fast Shipping & Field Delivery",
        title: "Automated Security Simulations",
        description: "Ran thousands of automated tests in Foundry to confirm that no player item can ever get stuck or stolen.",
        tag: "FDE Deployment"
      },
      outcome: {
        stage: "05",
        label: "Real World Impact & Evolution",
        title: "Honest Trading for Digital Worlds",
        metric: "38% Gas Cut",
        detail: "Delivered an open trading protocol that protects players and lets game economies flourish with trust.",
        tag: "BSc Capstone"
      }
    },
    caseStudy: {
      problem: "Gamers lose rare items and cash when trading between games because traditional bridges get hacked and delayed.",
      solution: "Built an atomic swap protocol where both sides trade simultaneously or both get fully refunded.",
      breakthrough: "Trades settle directly between two players with pure mathematics, making bridge hacks impossible.",
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
    subtitle: "Financial Charting Workstation & Options Risk Calculator",
    category: "Fintech & Quant",
    filterCategory: "fintech",
    year: "2026",
    statusBadge: "Financial Workstation",
    featured: true,
    coverImage: "/media/stelcera_terminal.jpg",
    videoUrl: null,
    hasVideo: false,
    gallery: [
      {
        url: "/media/stelcera_terminal.jpg",
        title: "STELCERA Quantitative Terminal Desk"
      }
    ],
    summary: "A high speed workstation for financial analytics, candlestick charting, and options math. Renders market moves at 120 frames per second on HTML5 Canvas without stutter, calculating Black Scholes options Greeks in under fifteen milliseconds.",
    role: "Full Stack Engineer",
    techStack: ["Next.js 15", "React 19", "FastAPI", "WebSockets", "HTML5 Canvas", "Python", "NumPy"],
    github: "https://github.com/abraham-DT/stelcera-terminal",
    demoUrl: null,
    metrics: [
      { label: "Chart Frame Rate", value: "120 FPS Canvas" },
      { label: "Options Math", value: "Black Scholes" },
      { label: "Data Streaming", value: "FastAPI WebSockets" }
    ],
    finishedHighlights: [
      "Engineered chart screens that stay silky smooth at 120 frames per second during heavy price changes.",
      "Built analytical tools to calculate Black Scholes options Greeks and market depth.",
      "Streamed live tick updates smoothly over WebSockets to client charting panels."
    ],
    thinkingTree: {
      root: {
        stage: "01",
        label: "Problem & Creative Spark",
        title: "Screens Freezing When Markets Move Fast",
        description: "Standard finance websites stutter and freeze during volatile hours, leaving investors blind when quick decisions matter most.",
        tag: "Creative Spark"
      },
      branches: [
        {
          id: "backend",
          branchType: "Layered Backend Architecture",
          subtitle: "Deterministic Logic & High Performance",
          steps: [
            {
              num: "02A",
              title: "Options Greeks Risk Math",
              detail: "Programmed client side risk calculators that compute Delta, Gamma, Vega, Theta, and Rho in milliseconds.",
              tech: "Python & NumPy"
            },
            {
              num: "02B",
              title: "WebSocket Price Streamer",
              detail: "Broadcasted simulated live market updates smoothly without slow HTTP polling.",
              tech: "FastAPI"
            }
          ]
        },
        {
          id: "frontend",
          branchType: "Frontend Beauty & Sensory UI",
          subtitle: "Visual Harmony & Tactile Feel",
          steps: [
            {
              num: "03A",
              title: "Direct Canvas Charting",
              detail: "Drawn charts directly on screen pixels to stay buttery smooth at one hundred and twenty frames per second.",
              tech: "HTML5 Canvas"
            },
            {
              num: "03B",
              title: "Dark Gold Focused Layout",
              detail: "Crafted a quiet dark workspace with warm golden signals so analysts can think with absolute clarity.",
              tech: "Tailwind CSS"
            }
          ]
        }
      ],
      convergence: {
        stage: "04",
        label: "Fast Shipping & Field Delivery",
        title: "Rigorous Speed Tuning",
        description: "Tested every single render frame to make sure the app never lags, even with thousands of live price ticks.",
        tag: "FDE Deployment"
      },
      outcome: {
        stage: "05",
        label: "Real World Impact & Evolution",
        title: "Responsive Quantitative Charting Desk",
        metric: "120 FPS",
        detail: "Combined Black Scholes mathematical models with fluid 120 FPS canvas charts into an intuitive trading workstation.",
        tag: "Financial Workstation"
      }
    },
    caseStudy: {
      problem: "Financial apps often choke on too many live numbers, causing traders to miss critical market swings.",
      solution: "Bypassed slow browser redraws by drawing directly to canvas, paired with instant risk calculation feeds.",
      breakthrough: "Achieved zero screen stutter at 120 frames per second while calculating complex risk formulas live.",
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
    subtitle: "Student Electronics Store and Inventory Management Dashboard",
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
        title: "REAVO Live Storefront & Admin Dashboard"
      },
      {
        url: "/media/reavo_shop.webp",
        title: "Student Gadget Catalog & Hardware Store"
      },
      {
        url: "/media/reavo_apple.webp",
        title: "Apple Ecosystem & Student Deals"
      },
      {
        url: "/media/reavo_cart.webp",
        title: "Student Checkout & Cart Drawer Verification"
      },
      {
        url: "/media/reavo_accessories.webp",
        title: "Student Tech Accessories & Peripherals Desk"
      }
    ],
    summary: "An honest student electronics store and campus management system. Protects student purchases with verified payments and keeps warehouse stock synchronized so students never pay for items that are out of stock.",
    role: "Sole Full Stack Architect and Core Engineer",
    techStack: ["Node.js", "Express", "Vite / React", "Supabase", "KoraPay API", "Tailwind CSS"],
    github: "https://github.com/abraham-DT/reavo-app",
    demoUrl: "https://reavo-app.vercel.app",
    metrics: [
      { label: "Payment Safety", value: "Instant Verify" },
      { label: "Account Privacy", value: "Guarded Rules" },
      { label: "Production Status", value: "Live on Vercel" }
    ],
    finishedHighlights: [
      "Engineered a secure checkout that confirms payments instantly and prevents accidental double charges.",
      "Protected student order histories with strict bank grade privacy rules.",
      "Automated stock counts and built a helpful assistant to manage campus deliveries."
    ],
    thinkingTree: {
      root: {
        stage: "01",
        label: "Problem & Creative Spark",
        title: "Campus Tech Chaos and Payment Anxiety",
        description: "Students buying computers and gadgets for school often face delayed payments, scams, and phantom out of stock items.",
        tag: "Creative Spark"
      },
      branches: [
        {
          id: "backend",
          branchType: "Layered Backend Architecture",
          subtitle: "Deterministic Logic & High Performance",
          steps: [
            {
              num: "02A",
              title: "Instant Payment Proof",
              detail: "Enforced digital signatures on payment notices to guarantee that student orders are processed once and never double charged.",
              tech: "Node.js & Express"
            },
            {
              num: "02B",
              title: "Guarded Student Records",
              detail: "Locked customer orders and personal information behind strict database security rules.",
              tech: "Supabase"
            }
          ]
        },
        {
          id: "frontend",
          branchType: "Frontend Beauty & Sensory UI",
          subtitle: "Visual Harmony & Tactile Feel",
          steps: [
            {
              num: "03A",
              title: "Warm and Simple Gadget Store",
              detail: "Designed an easy catalog with instant filters, clear specs, and joyful cart animations.",
              tech: "React & Vite"
            },
            {
              num: "03B",
              title: "Dedicated Student Deals Desk",
              detail: "Organized popular student laptops and gear with clear pricing and verified school warranties.",
              tech: "Tailwind CSS"
            }
          ]
        }
      ],
      convergence: {
        stage: "04",
        label: "Fast Shipping & Field Delivery",
        title: "Fast Cloud Delivery on Vercel",
        description: "Shipped an optimized live store that loads in the blink of an eye on mobile phones across campus networks.",
        tag: "FDE Deployment"
      },
      outcome: {
        stage: "05",
        label: "Real World Impact & Evolution",
        title: "Dependable Campus Commerce",
        metric: "Zero Fraud",
        detail: "Live in production powering safe student electronics shopping backed by honest, automated stock management.",
        tag: "Live in Production"
      }
    },
    caseStudy: {
      problem: "Students frequently encounter payment errors and phantom inventory when shopping online for school equipment.",
      solution: "Created a fast storefront backed by verified payment signatures and automated hourly inventory audits.",
      breakthrough: "Eliminated failed checkouts and payment confusion through deterministic database locks.",
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
    subtitle: "Investigative Journalism and Media Publishing Platform",
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
        title: "News Insights Live Publishing Platform & Ticker"
      },
      {
        url: "/media/news_insights_tech.webp",
        title: "Technology & AI Intelligence Desk"
      },
      {
        url: "/media/news_insights_politics.webp",
        title: "Investigative Politics & Analysis Desk"
      },
      {
        url: "/media/news_insights_business.webp",
        title: "Global Markets & Business Intelligence Desk"
      },
      {
        url: "/media/news_insights_world.webp",
        title: "World Affairs & International Bureau"
      }
    ],
    summary: "A calm digital sanctuary for investigative journalism and news publishing. Built with Next.js 15, Supabase, TipTap rich text, and Tailwind CSS, hardened against common web application vulnerabilities with clean typography and Google OAuth.",
    role: "Full Stack and Security Engineer",
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Supabase", "Zustand", "TipTap", "OAuth 2.0"],
    github: "https://github.com/abraham-DT/news-insights",
    demoUrl: "https://news-insights-abrahamtoluwani999-6423s-projects.vercel.app",
    metrics: [
      { label: "Security Review", value: "Audited Web Security" },
      { label: "Data Storage", value: "Supabase PostgreSQL" },
      { label: "Authentication", value: "Google OAuth & RLS" }
    ],
    finishedHighlights: [
      "Shielded reader accounts and editorial articles against common web security risks.",
      "Crafted a peaceful reading modal with soft visual blur and effortless one tap login.",
      "Optimized news stories to open immediately from search engines on any device."
    ],
    thinkingTree: {
      root: {
        stage: "01",
        label: "Problem & Creative Spark",
        title: "Noisy Ads Ruining the Reading Experience",
        description: "Digital journalism is crowded with aggressive popups, data leaks, and clunky paywalls that distract people from the truth.",
        tag: "Creative Spark"
      },
      branches: [
        {
          id: "backend",
          branchType: "Layered Backend Architecture",
          subtitle: "Deterministic Logic & High Performance",
          steps: [
            {
              num: "02A",
              title: "Input Sanitization and RLS",
              detail: "Audited database tables and user logins with strict Row Level Security to keep editorial drafts protected.",
              tech: "Supabase RLS"
            },
            {
              num: "02B",
              title: "Instant Edge Article Engine",
              detail: "Prepared articles on global servers in advance so investigative stories load immediately when clicked.",
              tech: "Next.js 15"
            }
          ]
        },
        {
          id: "frontend",
          branchType: "Frontend Beauty & Sensory UI",
          subtitle: "Visual Harmony & Tactile Feel",
          steps: [
            {
              num: "03A",
              title: "Peaceful Reader Modal",
              detail: "Created a quiet reading layout with elegant typography and gentle contrast to let the words breathe.",
              tech: "Tailwind CSS"
            },
            {
              num: "03B",
              title: "Live Intelligence Ticker",
              detail: "Built a smooth ticker showing breaking updates across technology, world affairs, and culture.",
              tech: "Framer Motion"
            }
          ]
        }
      ],
      convergence: {
        stage: "04",
        label: "Fast Shipping & Field Delivery",
        title: "One Tap Social Login and Fast Cloud Deploy",
        description: "Shipped simple Google sign in and edge cloud servers for rapid page opening across the globe.",
        tag: "FDE Deployment"
      },
      outcome: {
        stage: "05",
        label: "Real World Impact & Evolution",
        title: "Clean and Secure Publishing Platform",
        metric: "Audited RLS",
        detail: "Gives readers a safe, respectful environment to learn, reflect, and stay informed on world events.",
        tag: "Live in Production"
      }
    },
    caseStudy: {
      problem: "Readers bounce away from news sites because of cluttered ads, slow load times, and invasive paywalls.",
      solution: "Engineered a clean, server rendered publication with strong database protections and a serene reading room.",
      breakthrough: "Zero security flaws found during comprehensive audits while significantly increasing peaceful reading time.",
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
    subtitle: "Avant Garde Streetwear Storefront and Digital Lookbook",
    category: "Streetwear & Commerce",
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
      },
      {
        url: "/media/antho_lookbook.webp",
        title: "Editorial Lookbook & Archival Drops"
      },
      {
        url: "/media/antho_shop.webp",
        title: "The Vault Exclusive Catalog & Filters"
      },
      {
        url: "/media/antho_collections.webp",
        title: "Capsule Collections Gallery & Showcase"
      },
      {
        url: "/media/antho_editorial.webp",
        title: "Brand Heritage & Haute Couture Vision"
      }
    ],
    summary: "An avant garde streetwear storefront and lookbook built with Next.js 15, React 19, Tailwind CSS, Prisma, and Paystack. Designed with image first portal navigation for effortless browsing, protected admin routes, and Playwright automated tests for reliable cart and checkout flows.",
    role: "Full Stack Engineer",
    techStack: ["Next.js 15", "React 19", "Tailwind CSS", "Prisma", "Paystack", "Playwright", "Web Crypto"],
    github: "https://github.com/abraham-DT/antho",
    demoUrl: "https://antho-rho.vercel.app",
    metrics: [
      { label: "Navigation", value: "Visual Portals" },
      { label: "Catalog", value: "4 Collection Hubs" },
      { label: "Testing", value: "Playwright Suites" }
    ],
    finishedHighlights: [
      "Middleware protecting admin routes with cryptographic session token verification.",
      "Visual navigation layout guiding shoppers across core collections without confusing dropdowns.",
      "Server side price recalculation with Paystack webhook verification to prevent tampering."
    ],
    thinkingTree: {
      root: {
        stage: "01",
        label: "Problem & Creative Spark",
        title: "Generic Storefronts That Lack Artistic Soul",
        description: "High fashion websites often look like cookie cutter templates instead of honoring the bold vision of modern streetwear.",
        tag: "Creative Spark"
      },
      branches: [
        {
          id: "backend",
          branchType: "Layered Backend Architecture",
          subtitle: "Deterministic Logic & High Performance",
          steps: [
            {
              num: "02A",
              title: "Protected Admin Middleware",
              detail: "Validates session tokens on administrative routes before allowing access to inventory and settings.",
              tech: "Web Crypto & Next.js"
            },
            {
              num: "02B",
              title: "Server Validated Cart",
              detail: "Recalculates item subtotals on the server before initializing payments to guarantee price accuracy.",
              tech: "Prisma & Paystack"
            }
          ]
        },
        {
          id: "frontend",
          branchType: "Frontend Beauty & Sensory UI",
          subtitle: "Visual Harmony & Tactile Feel",
          steps: [
            {
              num: "03A",
              title: "Visual First Discovery Portal",
              detail: "Organized collections around striking imagery so patrons can find pieces by sight rather than confusing text menus.",
              tech: "React 19"
            },
            {
              num: "03B",
              title: "Editorial Lookbook Showcase",
              detail: "Designed a quiet dark gallery where patrons can inspect garment silhouettes and fabric weaves.",
              tech: "Tailwind CSS"
            }
          ]
        }
      ],
      convergence: {
        stage: "04",
        label: "Fast Shipping & Field Delivery",
        title: "Automated Checkout Rehearsals",
        description: "Simulated complete checkouts automatically with Playwright to guarantee that shopping is smooth and reliable.",
        tag: "FDE Deployment"
      },
      outcome: {
        stage: "05",
        label: "Real World Impact & Evolution",
        title: "Modern Streetwear Lookbook and Storefront",
        metric: "Playwright E2E",
        detail: "Delivered an avant garde fashion platform that pairs lookbook aesthetics with rock solid web engineering.",
        tag: "Live in Production"
      }
    },
    caseStudy: {
      problem: "Luxury clothing sites often confuse shoppers with messy dropdown menus and fragile checkout buttons.",
      solution: "Built an image first portal based on natural human visual recognition, backed by automated checkout tests.",
      breakthrough: "Delivered a 100 percent pass rate across automated checkout tests with zero unauthorized admin access.",
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
    id: "abraham-collection",
    code: "06",
    title: "Abraham Collection",
    subtitle: "Bespoke Fashion Atelier and Digital Tailoring Showcase",
    category: "Fashion & Commerce",
    filterCategory: "commerce",
    year: "2026",
    statusBadge: "Live in Production",
    featured: true,
    coverImage: "/media/abraham_collection_live.webp",
    videoUrl: null,
    hasVideo: false,
    gallery: [
      {
        url: "/media/abraham_collection_live.webp",
        title: "Abraham Collection Grand Atelier Web Platform"
      },
      {
        url: "/media/abraham_collection_bespoke.webp",
        title: "Bespoke Tailoring & Private Fitting Suite"
      },
      {
        url: "/media/abraham_collection_heritage.webp",
        title: "Atelier Heritage & Lagos Craftsmanship Since 2002"
      }
    ],
    summary: "Founded in 2002 in Lagos, Abraham Collection has dressed generations of leaders in bespoke garments that fit with dignity. This digital atelier brings that physical craftsmanship to the web, letting clients explore hand stitched fabrics, study garment details, and book custom bespoke fittings with warmth and ease.",
    role: "Full Stack Web Engineer",
    techStack: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Supabase", "PWA"],
    github: "https://github.com/abraham-DT",
    demoUrl: "https://abrhamcollectionweb.vercel.app",
    metrics: [
      { label: "Atelier Heritage", value: "Since 2002" },
      { label: "Production Status", value: "Live on Vercel" },
      { label: "Offline Support", value: "PWA Offline Cache" }
    ],
    finishedHighlights: [
      "Brought twenty four years of master tailoring tradition into a modern digital fashion platform.",
      "Built an easy consultation portal where patrons can request custom bespoke fittings without confusion.",
      "Engineered an offline mode so clients can explore fabrics and lookbooks even with poor internet."
    ],
    thinkingTree: {
      root: {
        stage: "01",
        label: "Problem & Creative Spark",
        title: "Bringing Hand Stitched Tradition to the Modern Web",
        description: "Traditional bespoke tailoring has deep soul, but clients often struggle to book fittings, browse fabric collections, or follow garment progress from afar.",
        tag: "Creative Spark"
      },
      branches: [
        {
          id: "backend",
          branchType: "Layered Backend Architecture",
          subtitle: "Deterministic Logic & High Performance",
          steps: [
            {
              num: "02A",
              title: "Private Booking & Fabric Vault Engine",
              detail: "Engineered database tables to securely hold client fit profiles, fabric orders, and tailoring appointments.",
              tech: "Supabase"
            },
            {
              num: "02B",
              title: "Offline PWA Asset Cache",
              detail: "Cached lookbook photography into progressive web app service workers for smooth browsing without network drops.",
              tech: "PWA Service Worker"
            }
          ]
        },
        {
          id: "frontend",
          branchType: "Frontend Beauty & Sensory UI",
          subtitle: "Visual Harmony & Tactile Feel",
          steps: [
            {
              num: "03A",
              title: "Warm Velvet Obsidian & Gold Atelier Salon",
              detail: "Styled a serene editorial showcase where authentic African textiles and bespoke suits take center stage with zero noisy clutter.",
              tech: "Tailwind CSS"
            },
            {
              num: "03B",
              title: "Respectful Consultation Flow",
              detail: "Designed a graceful bespoke booking screen letting patrons choose fabric types, silhouettes, and fitting dates in seconds.",
              tech: "React & Framer Motion"
            }
          ]
        }
      ],
      convergence: {
        stage: "04",
        label: "Fast Shipping & Field Delivery",
        title: "PWA Offline Engine & Instant Mobile Vercel Release",
        description: "Shipped an optimized live web platform that opens in less than a second on mobile phones, with full offline lookbook reading.",
        tag: "FDE Deployment"
      },
      outcome: {
        stage: "05",
        label: "Real World Impact & Evolution",
        title: "Timeless Bespoke Craftsmanship in Modern Digital Hands",
        metric: "Since 2002",
        detail: "Live in production connecting patrons with historic Lagos bespoke tailoring through a clean, respectful digital experience.",
        tag: "Live in Production"
      }
    },
    caseStudy: {
      problem: "Traditional couture tailoring relies on word of mouth and manual pen and paper notes, making it hard for busy professionals to schedule fittings or view past work.",
      solution: "Built an inviting digital salon powered by Next.js and Supabase that pairs private booking forms with high resolution fabric galleries and offline reading.",
      breakthrough: "Bridged generational artisan craftsmanship with modern web reliability, giving patrons total peace of mind from first sketch to final stitch.",
      codeSnippet: `// Abraham Collection Offline PWA Service Worker Cache Handler
self.addEventListener('fetch', (event) => {
  if (event.request.destination === 'image') {
    event.respondWith(
      caches.open('abraham-atelier-media').then((cache) => {
        return cache.match(event.request).then((cachedResponse) => {
          return cachedResponse || fetch(event.request).then((networkResponse) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        });
      })
    );
  }
});`
    }
  },
  {
    id: "kucheza-gaming",
    code: "07",
    title: "Kucheza Gaming",
    subtitle: "3D Tournament Arena Modeling and Esports Sponsorship Presentations",
    category: "3D & Gaming",
    filterCategory: "gaming",
    year: "2025",
    statusBadge: "Completed Industrial Training",
    featured: false,
    coverImage: "/media/kucheza_gaming.jpg",
    videoUrl: null,
    hasVideo: false,
    gallery: [
      {
        url: "/media/kucheza_gaming.jpg",
        title: "Kucheza Esports 3D Stage & Arena Staging"
      },
      {
        url: "/media/kucheza_arena_stage.webp",
        title: "High Definition 3D Arena Lighting & Spectator Booths"
      },
      {
        url: "/media/kucheza_logo_white.png",
        title: "Official Kucheza Gaming Identity"
      }
    ],
    summary: "Six month industrial training focused on 3D tournament stage modeling in Blender, tournament bracket operations, and structured sponsorship presentation decks for corporate partners.",
    role: "3D Staging and Esports Operations Intern",
    techStack: ["3D Staging", "Blender", "Spatial Design", "Esports Operations", "Pitch Engineering"],
    github: "https://github.com/abraham-DT",
    demoUrl: null,
    metrics: [
      { label: "Duration", value: "6 Months" },
      { label: "3D Staging", value: "Blender Arena Models" },
      { label: "Operations", value: "Tournament Brackets" }
    ],
    finishedHighlights: [
      "Modeled 3D tournament stages and arena lighting setups in Blender for event visualizations.",
      "Created visual sponsorship decks translating tournament gaming data for corporate sponsors.",
      "Assisted in running tournament bracket logistics and operational schedules during live competitions."
    ],
    thinkingTree: {
      root: {
        stage: "01",
        label: "Problem & Creative Spark",
        title: "Bridging Gaming Excitement to Corporate Sponsors",
        description: "Esports events had tremendous youth energy, but corporate leaders needed to visualize the actual physical stage, scale, and brand presence.",
        tag: "Creative Spark"
      },
      branches: [
        {
          id: "backend",
          branchType: "Layered Backend Architecture",
          subtitle: "Deterministic Logic & High Performance",
          steps: [
            {
              num: "02A",
              title: "Spatial Arena Calculations",
              detail: "Modeled 3D arena stages in Blender to optimize audience sightlines, player pods, and broadcast cameras.",
              tech: "Blender"
            },
            {
              num: "02B",
              title: "Clear Business Narrative Decks",
              detail: "Built easy to understand visual presentations showing corporations the real value of youth gaming tournaments.",
              tech: "Spatial Strategy"
            }
          ]
        },
        {
          id: "frontend",
          branchType: "Frontend Beauty & Sensory UI",
          subtitle: "Visual Harmony & Tactile Feel",
          steps: [
            {
              num: "03A",
              title: "Vibrant 3D Lighting & Booth Mockups",
              detail: "Rendered realistic concert lighting and branded team booths so partners could see their logos come alive.",
              tech: "3D Staging"
            },
            {
              num: "03B",
              title: "Interactive Retreat Walk Throughs",
              detail: "Guided corporate executives through interactive 3D virtual stages during executive planning sessions.",
              tech: "Keynote Architecture"
            }
          ]
        }
      ],
      convergence: {
        stage: "04",
        label: "Fast Shipping & Field Delivery",
        title: "Executive Stage Delivery",
        description: "Presented spatial architectures directly to brand leaders, earning distinction for professional communication.",
        tag: "FDE Deployment"
      },
      outcome: {
        stage: "05",
        label: "Real World Impact & Evolution",
        title: "Practical Foundation in 3D Staging & Esports Operations",
        metric: "6 Months",
        detail: "Completed a six month university industrial training program in 3D spatial stage design and tournament operations.",
        tag: "Completed Internship"
      }
    },
    caseStudy: {
      problem: "Traditional tournament organizers struggle to show corporate sponsors what an esports arena will look and feel like before it is built.",
      solution: "Engineered comprehensive 3D spatial stage mockups and clear sponsorship decks that turned abstract ideas into tangible reality.",
      breakthrough: "Directly helped secure enterprise brand commitments by allowing executives to walk through the tournament stage virtually."
    }
  },
  {
    id: "meme-battle",
    code: "08",
    title: "Meme Battle",
    subtitle: "Multiplayer Reaction Party Game and Procedural Sound Synthesizer",
    category: "3D & Gaming",
    filterCategory: "gaming",
    year: "2026",
    statusBadge: "Live in Production",
    featured: true,
    coverImage: "/media/meme_battle_live.webp",
    videoUrl: null,
    hasVideo: false,
    gallery: [
      {
        url: "/media/meme_battle_live.webp",
        title: "Meme Battle Live Desktop Arena & Scenario Card"
      },
      {
        url: "/media/meme_battle_mobile.webp",
        title: "Meme Battle Mobile Portrait Battle UI & Sticker Arsenal"
      }
    ],
    summary: "A fast paced multiplayer party game where friends clash in witty meme duels. Built with pure browser audio synthesis and smart humor scoring, letting players jump into quick five round battles with zero app downloads or sign up walls.",
    role: "Lead Game Designer, Audio Architect and Full Stack Engineer",
    techStack: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Motion", "Web Audio API", "Gemini API"],
    github: "https://github.com/darktune",
    demoUrl: "https://meme-battle-zeta.vercel.app",
    metrics: [
      { label: "Scenario Library", value: "150+ Situations" },
      { label: "Audio Engine", value: "100% Web Audio" },
      { label: "AI Referee", value: "Context Fit AI" }
    ],
    finishedHighlights: [
      "Engineered an instant party game where friends duel with witty meme reactions across five lively rounds.",
      "Synthesized retro sound effects and victory chimes directly in code with zero audio file lag.",
      "Created an AI referee that rates humor, context fit, and reaction speed with friendly comedic feedback."
    ],
    thinkingTree: {
      root: {
        stage: "01",
        label: "Problem & Creative Spark",
        title: "Party Games Ruined by Slow Installs and Boring Menus",
        description: "Friends wanting to laugh together get bogged down by clumsy app downloads, long account forms, and slow cards.",
        tag: "Creative Spark"
      },
      branches: [
        {
          id: "backend",
          branchType: "Layered Backend Architecture",
          subtitle: "Deterministic Logic & High Performance",
          steps: [
            {
              num: "02A",
              title: "Instant Audio Synthesis in Code",
              detail: "Used pure web audio math to generate retro sound sweeps, buzzer clicks, and victory fanfare on the fly.",
              tech: "Web Audio API"
            },
            {
              num: "02B",
              title: "Friendly Humor Referee",
              detail: "Integrated smart AI to evaluate how well each meme matches the prompt and reward quick comedic wit.",
              tech: "Gemini API"
            }
          ]
        },
        {
          id: "frontend",
          branchType: "Frontend Beauty & Sensory UI",
          subtitle: "Visual Harmony & Tactile Feel",
          steps: [
            {
              num: "03A",
              title: "Snappy One Thumb Mobile Screen",
              detail: "Designed a colorful, bold battle screen that feels great to play with one hand on smartphones.",
              tech: "Tailwind CSS"
            },
            {
              num: "03B",
              title: "Quick Emotion Filters & Stickers",
              detail: "Added instant emotion drawers so players can grab the perfect reaction sticker in less than a second.",
              tech: "Motion"
            }
          ]
        }
      ],
      convergence: {
        stage: "04",
        label: "Fast Shipping & Field Delivery",
        title: "Single Day Build to Live Global Play",
        description: "Packaged thousands of modules with Vite into a live web link that friends can share and open immediately.",
        tag: "FDE Deployment"
      },
      outcome: {
        stage: "05",
        label: "Real World Impact & Evolution",
        title: "Bringing Laughter to Rooms Everywhere",
        metric: "150+ Cards",
        detail: "Live in production providing instant multiplayer fun with zero barriers, sign up walls, or loading delays.",
        tag: "Live in Production"
      }
    },
    caseStudy: {
      problem: "Party games often lose their charm when players spend more time picking cards than laughing together.",
      solution: "Engineered instant emotion search, procedural sounds, and simultaneous card reveals to keep game rounds rapid.",
      breakthrough: "Achieved sub second reaction picks and synchronized audience voting for non stop room laughter.",
      codeSnippet: `// Meme Battle Web Audio API Procedural Synthesizer Engine
class SoundEffectsEngine {
  private ctx: AudioContext | null = null;
  playLock() {
    const ctx = this.getContext();
    const freqs = [330, 440, 660];
    freqs.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.04 + 0.12);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + i * 0.04);
      osc.stop(ctx.currentTime + i * 0.04 + 0.12);
    });
  }
}`
    }
  },
  {
    id: "civos",
    code: "09",
    title: "CivOS",
    subtitle: "Virtual World Simulation Architecture · Deterministic State Validation",
    category: "Conceptual & Systems",
    filterCategory: "conceptual",
    year: "2026",
    statusBadge: "Active Research Prototype",
    featured: false,
    coverImage: "/media/civos_spatial.jpg",
    videoUrl: null,
    hasVideo: false,
    gallery: [
      {
        url: "/media/civos_spatial.jpg",
        title: "CivOS Simulation Architecture & State Validation"
      }
    ],
    summary: "A systems research prototype exploring cost efficient simulation of game characters. Validates movement and trade rules deterministically in C++ before calling language models solely for dialogue.",
    role: "Systems Researcher and C++ Engineer",
    techStack: ["C++", "Apache Kafka", "ERC 4337", "Redis", "Solidity", "Vector DB"],
    github: "https://github.com/abraham-DT/CivOS",
    demoUrl: null,
    metrics: [
      { label: "Architecture", value: "State Machine" },
      { label: "Validation Core", value: "Deterministic C++" },
      { label: "AI Role", value: "Dialogue Only" }
    ],
    finishedHighlights: [
      "Validates character physics and inventory rules deterministically in C++ to prevent illegal actions.",
      "Restricts language models to conversational dialogue so characters obey world rules without hallucinating.",
      "Explores smart contract accounts for managing digital items in game economies."
    ],
    thinkingTree: {
      root: {
        stage: "01",
        label: "Problem & Creative Spark",
        title: "The Unsustainable Compute Costs of AI Virtual Worlds",
        description: "Querying cloud language models for every character action causes high latency, immense API bills, and game breaking hallucinations.",
        tag: "Creative Spark"
      },
      branches: [
        {
          id: "backend",
          branchType: "Layered Backend Architecture",
          subtitle: "Deterministic Logic & High Performance",
          steps: [
            {
              num: "02A",
              title: "Deterministic Action Validation in C++",
              detail: "Validates all character movements, inventory trades, and collision rules in native C++ code.",
              tech: "C++"
            },
            {
              num: "02B",
              title: "Structured State Logging",
              detail: "Records world events cleanly so character states remain consistent across sessions.",
              tech: "Apache Kafka"
            }
          ]
        },
        {
          id: "frontend",
          branchType: "Frontend Beauty & Sensory UI",
          subtitle: "Visual Harmony & Tactile Feel",
          steps: [
            {
              num: "03A",
              title: "Population and World Heatmap",
              detail: "Built visual telemetry screens showing character locations, activity clusters, and trade routes.",
              tech: "WebGL"
            },
            {
              num: "03B",
              title: "Simulation Inspector Console",
              detail: "Designed clean diagnostic monitors letting world designers inspect simulation dynamics at a glance.",
              tech: "React"
            }
          ]
        }
      ],
      convergence: {
        stage: "04",
        label: "Fast Shipping & Field Delivery",
        title: "Action Validation Load Benchmarks",
        description: "Tested rule validation throughput across simulated characters to ensure fast, deterministic checks.",
        tag: "R&D Prototype"
      },
      outcome: {
        stage: "05",
        label: "Real World Impact & Evolution",
        title: "Deterministic Action Architecture for Virtual Worlds",
        metric: "C++ Bouncer",
        detail: "Research prototype proving that separating deterministic state rules from AI dialogue prevents hallucinations and saves server resources.",
        tag: "Active R&D Prototype"
      }
    },
    caseStudy: {
      problem: "Querying cloud language models for every character action causes high latency, immense API bills, and game breaking hallucinations.",
      solution: "Handled physics, inventory math, and rule checks deterministically in C++, invoking language models only when characters speak to a player.",
      breakthrough: "Separated rigid world rules from conversational dialogue, keeping character behavior consistent while minimizing cloud API calls."
    }
  },
  {
    id: "loom",
    code: "10",
    title: "LOOM",
    subtitle: "3D Spatial Digital Atelier & Milestone Escrow Prototype",
    category: "Conceptual & Spatial",
    filterCategory: "conceptual",
    year: "2025 Present",
    statusBadge: "Unfinished Prototype",
    featured: false,
    coverImage: "/media/virtual_atelier.jpg",
    videoUrl: null,
    hasVideo: false,
    gallery: [
      {
        url: "/media/virtual_atelier.jpg",
        title: "LOOM 3D Spatial Digital Atelier"
      }
    ],
    summary: "An unfinished 3D digital tailoring prototype Abraham has been developing recently. Explores interactive WebGL mannequins in Three.js and a milestone escrow concept to help bespoke tailors showcase garments and agree on production stages with clients.",
    role: "3D and Systems Engineer",
    techStack: ["Three.js", "React", "Blender", "WebGL", "Node.js", "Tailwind CSS"],
    github: "https://github.com/darktune/loom",
    demoUrl: null,
    metrics: [
      { label: "Status Stage", value: "Unfinished Prototype" },
      { label: "3D Rendering", value: "Three.js WebGL" },
      { label: "Escrow Concept", value: "3 Milestones" }
    ],
    finishedHighlights: [
      "Engineered an interactive 3D mannequin in the browser that adjusts to customer body measurements.",
      "Designed a three step payment escrow concept that releases funds as garment stages are verified.",
      "Experimented with textile drape shaders for showcasing African wax print fabrics."
    ],
    thinkingTree: {
      root: {
        stage: "01",
        label: "Problem & Creative Spark",
        title: "High Return Rates and Distrust in Custom Bespoke Fashion",
        description: "Custom garment tailoring across distances suffers from manual tape measure errors and payment anxiety for both client and tailor.",
        tag: "Creative Spark"
      },
      branches: [
        {
          id: "backend",
          branchType: "Layered Backend Architecture",
          subtitle: "Deterministic Logic & High Performance",
          steps: [
            {
              num: "02A",
              title: "Three Step Milestone Escrow",
              detail: "Programmed smart contract logic releasing client payments automatically as garment stages are verified.",
              tech: "Node.js & EVM"
            },
            {
              num: "02B",
              title: "Parametric Mannequin Calculation",
              detail: "Converted customer body measurements into three dimensional parametric mesh dimensions.",
              tech: "WebGL"
            }
          ]
        },
        {
          id: "frontend",
          branchType: "Frontend Beauty & Sensory UI",
          subtitle: "Visual Harmony & Tactile Feel",
          steps: [
            {
              num: "03A",
              title: "Real Time WebGL Fabric Drape Studio",
              detail: "Engineered custom cloth shaders in Three.js simulating realistic fabric weight and tensile physics in browser.",
              tech: "Three.js"
            },
            {
              num: "03B",
              title: "Minimalist Atelier Studio Controls",
              detail: "Styled an uncluttered studio layout putting focus entirely on garment silhouettes and luxury textures.",
              tech: "Tailwind CSS"
            }
          ]
        }
      ],
      convergence: {
        stage: "04",
        label: "Fast Shipping & Field Delivery",
        title: "Mobile Optimized 3D Orbit and Physics Tuning",
        description: "Tuned rendering loops to ensure smooth sixty frame per second orbit controls on mobile touchscreens.",
        tag: "R&D Prototype"
      },
      outcome: {
        stage: "05",
        label: "Real World Impact & Evolution",
        title: "3D Digital Atelier and Escrow Prototype",
        metric: "3D WebGL",
        detail: "Unfinished spatial prototype exploring interactive 3D fitting and milestone escrow for custom tailors.",
        tag: "Unfinished Prototype"
      }
    },
    caseStudy: {
      problem: "Custom tailoring over distances suffers from tape measurement mistakes and payment distrust between client and tailor.",
      solution: "Combined an interactive 3D browser mannequin with milestone payments released in three verified stages.",
      breakthrough: "Achieved realistic cloth drape simulation directly in web browsers with smooth mobile touch controls."
    }
  },
  {
    id: "siphoon-os",
    code: "11",
    title: "SIPHOON OS",
    subtitle: "Forex Trade Journal & Risk Management Dashboard",
    category: "Conceptual & Fintech",
    filterCategory: "conceptual",
    year: "2026",
    statusBadge: "Personal Trading Tool",
    featured: false,
    coverImage: "/media/siphoon_os.jpg",
    videoUrl: null,
    hasVideo: false,
    gallery: [
      {
        url: "/media/siphoon_os.jpg",
        title: "SIPHOON OS Quantitative Workstation"
      }
    ],
    summary: "A personal Forex trade journal and risk calculator web app built with Next.js 15, TypeScript, PostgreSQL, Prisma, and TradingView lightweight charts. Helps currency traders calculate position lot sizes using the Kelly criterion, log trade entries with screenshots, and track rule discipline.",
    role: "Full Stack Engineer",
    techStack: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "lightweight charts", "Tailwind CSS"],
    github: "https://github.com/darktune/Stelcera",
    demoUrl: null,
    metrics: [
      { label: "Chart Display", value: "Lightweight Charts" },
      { label: "Risk Formulas", value: "Kelly & Pip Math" },
      { label: "Trade Journal", value: "Prisma & PostgreSQL" }
    ],
    finishedHighlights: [
      "Calculates lot sizes, pip values, and risk of ruin fractions before opening trades.",
      "Rendered live multi timeframe charts with zero stutter at sixty frames per second.",
      "Structured trade journal logging entry screenshots, trade reasoning, and emotional discipline notes."
    ],
    thinkingTree: {
      root: {
        stage: "01",
        label: "Problem & Creative Spark",
        title: "Emotional Position Sizing and Account Blowups in Forex",
        description: "Individual currency traders lose capital because they trade with emotion rather than disciplined mathematical risk management.",
        tag: "Creative Spark"
      },
      branches: [
        {
          id: "backend",
          branchType: "Layered Backend Architecture",
          subtitle: "Deterministic Logic & High Performance",
          steps: [
            {
              num: "02A",
              title: "Exact Sizing & Ruin Math",
              detail: "Programmed mathematical engines computing exact optimal lot sizes and capital safety buffers.",
              tech: "TypeScript"
            },
            {
              num: "02B",
              title: "Thoughtful Trade Ledger",
              detail: "Built database models tracking trade setups, emotional states, and rule adherence scores.",
              tech: "Prisma & PostgreSQL"
            }
          ]
        },
        {
          id: "frontend",
          branchType: "Frontend Beauty & Sensory UI",
          subtitle: "Visual Harmony & Tactile Feel",
          steps: [
            {
              num: "03A",
              title: "Silky 60 FPS Candlestick Chart Canvas",
              detail: "Integrated lightweight hardware accelerated charts rendering multi timeframe data without stutter.",
              tech: "HTML5 Canvas"
            },
            {
              num: "03B",
              title: "Currency Correlation Matrix",
              detail: "Styled high contrast visual heatmaps displaying currency pair strengths and market volatility at a glance.",
              tech: "Tailwind CSS"
            }
          ]
        }
      ],
      convergence: {
        stage: "04",
        label: "Fast Shipping & Field Delivery",
        title: "Zero Delay In Browser Math",
        description: "Compiled mathematical formulas into client side state managers for zero latency calculations.",
        tag: "R&D Prototype"
      },
      outcome: {
        stage: "05",
        label: "Real World Impact & Evolution",
        title: "Disciplined Trade Journal and Risk Dashboard",
        metric: "60 FPS",
        detail: "Personal quantitative risk workstation empowering disciplined execution through verified mathematical formulas.",
        tag: "Personal Trading Tool"
      }
    },
    caseStudy: {
      problem: "Individual currency traders often lose accounts due to emotional bet sizing and revenge trading.",
      solution: "Built a unified workstation that calculates exact mathematical position sizes before any trade is opened.",
      breakthrough: "Ran complex risk math directly in the browser with zero delay, enforcing strict discipline on every trade."
    }
  }
];
