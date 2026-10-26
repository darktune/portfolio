export const gwenKnowledgeBase = {
  profile: {
    name: "Abraham Toluwani",
    education: "BSc Computer Science Graduate · Covenant University (Class of 2026)",
    roles: "Systems Architect · Software Engineer · Researcher · Game Designer",
    origin: "Handcrafted pointillism ink art since age six. Pure patience that shapes every line of code.",
    mission: "Creating living virtual worlds, safe digital economies, and lightning fast tools where people build lasting memories.",
    dream: "Building The OASIS · an open, beautiful digital universe where millions of people connect, create, and thrive together.",
    skills: [
      "C++", "Solidity", "Unreal Engine 5", "Three.js", 
      "Python", "FastAPI", "Apache Kafka", "Next.js", 
      "WebGL", "Fine Art", "Game Design"
    ]
  },

  suggestedPrompts: [
    "How did Abraham achieve 38 percent gas savings in Yul on D MEX?",
    "How does REAVO protect student payments with HMAC SHA256?",
    "Tell me about Abraham's BSc thesis at Covenant University",
    "Tell me about STELCERA Terminal's 120 FPS canvas",
    "What is CivOS and deterministic state validation?",
    "What did Abraham show at the Spectrum Ori art exhibition?",
    "Tell me about Blueshels Ltd web engineering"
  ],

  knowledgeEntries: [
    // 1. Core Identity & Philosophy
    {
      id: "who-is-abraham",
      intent: ["who is", "about", "bio", "background", "profile", "roles", "degree", "covenant"],
      tags: ["#Identity", "#Polymath", "#CovenantUniversity"],
      answer: "**Abraham Toluwani** is a builder, researcher, and artist who graduated in Computer Science from **Covenant University**.\n\nHe creates across three connected worlds:\n• **Living Virtual Spaces**: Intelligent virtual worlds where digital characters think, talk, and remember like real companions (**CivOS**).\n• **Fair Digital Ownership**: Safe, reliable tools where players truly own and trade their rare creations (**D MEX**).\n• **Fast Financial Software**: Trading screens that react in the blink of an eye with crystal clarity (**STELCERA**, **SIPHOON OS**).\n\nEverything he creates is guided by twenty years of handcrafted **Pointillism Fine Art** started at age six. Placing one dot at a time taught him that true beauty comes from patient, honest craftsmanship.",
      contextCard: {
        title: "Abraham Toluwani",
        badge: "BSc Computer Science Graduate · Covenant University",
        detail: "Systems Architect · Software Engineer · Researcher · Game Designer",
        actionText: "EXPLORE VERIFIED DEPLOYMENTS",
        targetSection: "projects"
      },
      followUps: ["Tell me about D MEX Protocol", "Explain CivOS", "How did he start drawing at age 6?"]
    },

    // 2. The Art Origin & Craft
    {
      id: "age-6-art-pointillism",
      intent: ["art", "age 6", "drawing", "six", "pointillism", "spectrum ori", "morayo", "illusion of freedom", "artist", "ink", "stipples"],
      tags: ["#FineArt", "#Pointillism", "#Genesis", "#Discipline"],
      answer: "Drawing was the very first language Abraham ever spoke. He picked up an ink pen when he was just **six years old**.\n\nHe creates pointillism art made entirely of tiny ink dots on archival paper. His signature pieces, *'Illusion of Freedom'* and *'Morayo'*, were chosen and curated for the national **Spectrum Ori Art Exhibition**.\n\nEach drawing takes over forty hours of quiet focus and hundreds of thousands of dots. In ink, there is no eraser and no undo. If a single drop falls out of place, the page is lost.\n\nThat discipline lives in his code today. When you build software that protects people's assets or runs deep simulations, every single character matters. Art taught him to build with devotion, rhythm, and care.",
      contextCard: {
        title: "Pointillism Fine Art Studio",
        badge: "Spectrum Ori Curated Artist",
        detail: "Masterpieces: 'Illusion of Freedom' & 'Morayo' (hundreds of thousands of ink dots)",
        actionText: "VIEW PHILOSOPHY",
        targetSection: "about"
      },
      followUps: ["Why does this matter in code?", "Tell me about D MEX Protocol", "Explain The OASIS vision"]
    },

    // 3. Flagship: D-MEX Protocol
    {
      id: "dmex-protocol",
      intent: ["dmex", "d-mex", "atomic swap", "yul", "solidity", "htlc", "cross chain", "gas", "capstone", "thesis"],
      tags: ["#DMEX", "#SmartContracts", "#BScCapstone"],
      answer: "**D MEX Protocol** is Abraham's final capstone project at Covenant University. It is a simple, honest way for game players to trade digital items directly with one another across different games.\n\n**Why it matters:**\n• **True Player Freedom**: Players swap items directly person to person without risky middlemen.\n• **Light and Affordable**: Built with custom assembly code that cuts transaction fees by 38 percent.\n• **Total Safety**: Every trade is locked mathematically until both sides agree, or the trade refunds automatically.\n• **Smart Protection**: An intelligent watcher monitors transactions so players never get cheated by front runners.",
      contextCard: {
        title: "D MEX Protocol",
        badge: "Completed BSc Capstone Protocol",
        detail: "Custom Assembly · 38% Fee Cut · Trustless Escrow",
        actionText: "VIEW D MEX CODE & METRICS",
        projectId: "dmex-protocol"
      },
      followUps: ["What is STELCERA Terminal?", "Explain CivOS", "Tell me about The OASIS"]
    },

    // 4. Flagship: STELCERA Terminal
    {
      id: "stelcera-terminal",
      intent: ["stelcera", "trading", "terminal", "options", "greeks", "canvas 120 fps", "fastapi"],
      tags: ["#STELCERA", "#Trading", "#Quant", "#OptionsMath"],
      answer: "**STELCERA Terminal** is a high speed financial workstation created to give traders complete clarity in fast moving markets.\n\n**What makes it special:**\n• **Smooth and Fluid**: Renders market moves at 120 frames per second on HTML5 Canvas without screen stutter.\n• **Clear Market Vision**: Calculates Black Scholes options Greeks in under fifteen milliseconds.\n• **Reliable Data Streaming**: Delivers live candlestick data and market prices smoothly via FastAPI WebSockets.",
      contextCard: {
        title: "STELCERA Terminal",
        badge: "Financial Charting Workstation",
        detail: "120 FPS Canvas · Black Scholes Greeks · FastAPI WebSockets",
        actionText: "VIEW STELCERA DETAILS",
        projectId: "stelcera-terminal"
      },
      followUps: ["Tell me about SIPHOON OS", "Explain REAVO", "Tell me about D MEX Protocol"]
    },

    // 5. Flagship: REAVO
    {
      id: "reavo-commerce",
      intent: ["reavo", "ecommerce", "storefront", "korapay", "dashboard", "gadgets", "electronics", "student store"],
      tags: ["#REAVO", "#StudentStore", "#KoraPay"],
      answer: "**REAVO** is a student electronics store and inventory management dashboard running live in production on Vercel.\n\n**The student experience:**\n• **Safe and Smooth Checkout**: Verified payment workflows prevent double charges and protect every student purchase.\n• **Strict Account Privacy**: Database security rules ensure that student orders and information remain private.\n• **Reliable Inventory**: Automated stock synchronization keeps warehouse inventory updated so items are never sold out unnoticed.",
      contextCard: {
        title: "REAVO Store & Admin Dashboard",
        badge: "Live in Production",
        detail: "Safe Payments · Bank Grade Security · Automated Stock Sync",
        actionText: "VIEW REAVO DETAILS",
        projectId: "reavo-app"
      },
      followUps: ["Tell me about ANTHO", "Explain News Insights", "What is D MEX?"]
    },

    // 6. Flagship: News-Insights
    {
      id: "news-insights",
      intent: ["news", "insights", "media", "security", "tiptap", "publishing", "achichi"],
      tags: ["#NewsInsights", "#Security", "#Nextjs15", "#MediaAI"],
      answer: "**News Insights** is an investigative digital publication and media portal built for thoughtful journalism and reader trust.\n\n**Key highlights:**\n• **Built for Security**: Hardened against common web vulnerabilities to protect reader data and editorial privacy.\n• **Warm Reading Experience**: An obsidian glass subscription view with gentle blur and instant one tap access.\n• **Fast and Light**: Pages load instantly so readers discover great stories without delay.",
      contextCard: {
        title: "News Insights Media Portal",
        badge: "Live in Production",
        detail: "Hardened Security · Instant Page Loads · Obsidian Gold Modal",
        actionText: "VIEW NEWS INSIGHTS DETAILS",
        projectId: "news-insights"
      },
      followUps: ["Tell me about ANTHO", "What is REAVO?", "Explain STELCERA Terminal"]
    },

    // 7. Flagship: ANTHO
    {
      id: "antho-streetwear",
      intent: ["antho", "streetwear", "luxury", "vault", "nielsen", "hci", "paystack", "playwright"],
      tags: ["#ANTHO", "#LuxuryCommerce", "#Playwright"],
      answer: "**ANTHO** is an avant garde luxury streetwear store and creative digital vault live in production.\n\n**Designed for people:**\n• **Natural Navigation**: Built around human intuition, organizing garments across four visual portals rather than confusing drop down menus.\n• **Safe and Secure**: Protected administrative routes guard brand assets and customer trust.\n• **Flawless Shopping**: Thorough test suites ensure every cart and checkout works smoothly every single time.",
      contextCard: {
        title: "ANTHO Luxury Storefront",
        badge: "Live in Production",
        detail: "Intuitive Design · Edge Security · Complete Test Verification",
        actionText: "VIEW ANTHO DETAILS",
        projectId: "antho"
      },
      followUps: ["Tell me about Kucheza Gaming", "Explain D MEX", "What is STELCERA?"]
    },

    // 8. Flagship: Kucheza Gaming
    {
      id: "kucheza-gaming",
      intent: ["kucheza", "gaming", "esports", "blender", "staging", "industrial training", "arena"],
      tags: ["#KuchezaGaming", "#3DStaging", "#Esports", "#Blender"],
      answer: "**Kucheza Gaming** was Abraham's six month industrial training fellowship where he engineered gaming production, spatial arena stage design, and educational initiatives.\n\n**What he created:**\n• **3D Arena Stages**: Crafted full tournament stage environments in Blender with dramatic concert lighting and camera views.\n• **Impactful Presentations**: Engineered winning visual pitch decks and sponsorship activation strategies for enterprise brands including MTN, Infinix, and Rexona.\n• **CodePlay Naija Initiative**: Curated and led curriculum engineering for CodePlay Naija, an initiative introducing over 200 public secondary school students to programming logic and Python with a 92 percent completion rate.",
      contextCard: {
        title: "Kucheza Gaming R&D",
        badge: "Completed Industrial Training",
        detail: "3D Blender Arena Staging · Enterprise Pitch Design",
        actionText: "VIEW KUCHEZA DETAILS",
        projectId: "kucheza-gaming"
      },
      followUps: ["What games has Abraham designed?", "Explain CivOS", "Tell me about The OASIS"]
    },

    // 9. Research & Unfinished Project: CivOS
    {
      id: "civos-metaverse-os",
      intent: ["civos", "civilization os", "memory", "bouncer", "metaverse os", "ai agents", "operating system", "kafka", "erc 4337"],
      tags: ["#CivOS", "#Systems", "#Simulation", "#ResearchPrototype"],
      answer: "**CivOS** is an active research prototype exploring deterministic state validation for virtual world non player characters.\n\n**The big idea:**\n• **Deterministic Rules**: Validates character movement, collisions, and trade actions in native C++ before touching an AI model.\n• **Dialogue Only AI**: Restricts language models strictly to character dialogue so NPCs cannot hallucinate illegal physical actions.\n• **Cost Efficiency**: Eliminates expensive cloud model calls for routine game loop mechanics.",
      contextCard: {
        title: "CivOS Kernel Research",
        badge: "Active Research Prototype",
        detail: "Deterministic C++ Validation · Dialogue Only AI · Cost Efficient Simulation",
        actionText: "ASK ABOUT CIVOS CODE",
        targetSection: "about"
      },
      followUps: ["Tell me about The OASIS", "Explain D MEX Protocol", "What is OEES?"]
    },

    // 10. Research & Unfinished: LOOM
    {
      id: "loom",
      intent: ["loom", "fashion", "3d fashion", "mannequin", "three.js", "cloth drape", "spatial atelier", "textile", "unfinished"],
      tags: ["#LOOM", "#3DSpatial", "#SpatialAtelier", "#UnfinishedRND"],
      answer: "**LOOM** is an unfinished spatial digital atelier prototype that Abraham has been developing recently. It connects bespoke tailors with fashion lovers through interactive 3D mannequins.\n\n**The vision:**\n• **3D Digital Mannequin**: An interactive model in the browser showing how fabrics drape and fit.\n• **Beautiful Textiles**: Shaders that capture the real texture, weave, and warmth of authentic fabrics.\n• **Safe Milestone Escrow**: Protects both the tailor and the buyer at every step of crafting the garment.",
      contextCard: {
        title: "LOOM · 3D Spatial Digital Atelier",
        badge: "Unfinished Prototype · Active R&D",
        detail: "Three.js Spatial Mannequin · Procedural Drape · Escrow Pipeline",
        actionText: "EXPLORE SPATIAL WORK",
        targetSection: "experience"
      },
      followUps: ["Tell me about OEES", "What is CivOS?", "Explain D MEX Protocol"]
    },

    // 11. Research & Unfinished: OEES
    {
      id: "oees-olfactory-hci",
      intent: ["oees", "olfactory", "scent", "hci", "hardware", "unreal engine plugin", "smell", "sensory"],
      tags: ["#OEES", "#HCIResearch", "#Olfactory"],
      answer: "**OEES (Olfactory Enhanced Entertainment Experience)** is a sensory research project exploring the integration of scent cues into interactive games.\n\n**The concept:**\n• **Deeper Senses**: Explores scent triggers synchronized to virtual moments such as rain or burning wood.\n• **Game Engine Integration**: Conceptual hardware interfacing with game engines to test multi sensory player immersion.\n• **Hardware Schematics**: Circuit designs and timing sequences for micro scent dispersal.",
      contextCard: {
        title: "OEES Sensory Research",
        badge: "Sensory Research & Hardware Schematics",
        detail: "Natural Scents · Game Engine Triggers · Hardware Schematics",
        actionText: "ASK ABOUT SENSORY RESEARCH",
        targetSection: "about"
      },
      followUps: ["What is Paint Infusion?", "Tell me about CivOS", "Explain The OASIS"]
    },

    // 12. Game Design: Paint Infusion & Whack a Mole
    {
      id: "paint-infusion-games",
      intent: ["paint infusion", "game design", "games", "tactical", "unreal engine 5", "whack a mole", "game loop", "game dev"],
      tags: ["#PaintInfusion", "#GameDesign", "#UE5"],
      answer: "As a game designer and developer, Abraham creates games that feel responsive, tactful, and exciting to play:\n\n• **Paint Infusion**: A tactical 3D combat shooter built in Unreal Engine 5 where paint alters surface speed and players can pause time to give strategic squad orders.\n• **3D Whack a Mole**: A reflex game testing frame perfect hits, acceleration curves, and playful physics.",
      contextCard: {
        title: "Tactical Game Engines",
        badge: "Playable Alpha & Physics Loops",
        detail: "Unreal Engine 5 · Responsive Netcode · Strategic Gameplay",
        actionText: "EXPLORE GAME DESIGN",
        targetSection: "projects"
      },
      followUps: ["What is CivOS?", "Tell me about D MEX", "Explain The OASIS"]
    },

    // 13. Deep Learning & Other Projects: Face Emotion AI & CodePlay Naija & SIPHOON
    {
      id: "ai-vision-education",
      intent: ["face emotion", "emotion ai", "computer vision", "codeplay naija", "siphoon os", "forex", "kelly criterion"],
      tags: ["#FaceEmotionAI", "#CodePlayNaija", "#SIPHOONOS"],
      answer: "Along with systems and games, Abraham builds tools that help and educate people:\n\n• **Real Time Emotion AI**: A computer vision model that detects human emotions from webcam video in under twenty milliseconds.\n• **CodePlay Naija**: An educational initiative curated within Kucheza Gaming that introduced over two hundred Nigerian public secondary school students to coding logic and beginner Python with a 92 percent completion rate.\n• **SIPHOON OS**: A clear trading journal and risk dashboard helping traders build healthy financial habits.",
      contextCard: {
        title: "AI Vision & Impact Systems",
        badge: "Deployed Projects",
        detail: "Emotion AI · 200+ Students Trained · Healthy Risk Habits",
        actionText: "VIEW DEPLOYMENTS",
        targetSection: "projects"
      },
      followUps: ["Tell me about D MEX", "Explain STELCERA", "What is The OASIS?"]
    },

    // 14. Financial Markets: SMC & Quantitative Philosophy
    {
      id: "financial-markets-smc",
      intent: ["trading", "forex", "smc", "smart money concepts", "fvg", "fair value gaps", "liquidity", "order blocks"],
      tags: ["#SMC", "#MarketStructure", "#QuantTrading"],
      answer: "In financial markets, Abraham studies institutional price action and Smart Money Concepts:\n\n• **Reading Market Flow**: Studying fair value gaps and liquidity moves to understand where capital actually flows.\n• **Calm Discipline**: Never trading on emotion. Protecting capital with mathematical risk limits.\n• **Better Software**: Learning how markets work helped him design faster trading tools for **STELCERA** and **D MEX**.",
      contextCard: {
        title: "Institutional Price Action",
        badge: "Smart Money Concepts (SMC)",
        detail: "Fair Value Gaps · Order Blocks · Liquidity Sweep Modeling",
        actionText: "VIEW STELCERA",
        projectId: "stelcera-terminal"
      },
      followUps: ["What is STELCERA Terminal?", "Explain D MEX Protocol", "What is CivOS?"]
    },

    // 15. The North Star: The OASIS (Ready Player One)
    {
      id: "oasis-north-star",
      intent: ["oasis", "ready player one", "dream", "vision", "metaverse", "future", "north star"],
      tags: ["#TheOASIS", "#Metaverse", "#NorthStar", "#Vision"],
      answer: "Abraham's greatest dream is to help build **The OASIS** from *Ready Player One*. Not as corporate hype, but as a warm, open, and beautiful digital world where millions of people can learn, build, create, and share meaningful moments together.\n\nEvery project he builds is a stepping stone toward this dream:\n• **CivOS**: Gives virtual characters mind and memory.\n• **D MEX**: Gives players sovereign ownership of their treasures.\n• **OEES**: Brings real sensory warmth and scent into digital spaces.\n• **STELCERA**: Powers thriving virtual economies.\n• **Unreal Engine & Three.js**: Gives the spatial world shape and light.",
      contextCard: {
        title: "The OASIS Blueprint",
        badge: "Guiding North Star Vision",
        detail: "Living Minds · True Ownership · Real Senses · Pure Light",
        actionText: "EXPLORE THE MANIFESTO",
        targetSection: "about"
      },
      followUps: ["Tell me about CivOS", "Explain D MEX Protocol", "How did he start drawing at age 6?"]
    },

    // 16. Blueshels Ltd: Web Design & Frontend UI Engineering
    {
      id: "blueshels-experience",
      intent: ["blueshels", "frontend", "ui engineer", "web designer", "conversion", "wcag", "work experience"],
      tags: ["#Blueshels", "#FrontendEngineering", "#DesignSystems", "#WCAG"],
      answer: "At **Blueshels Ltd** (2024 to 2025), Abraham worked as a **Web Designer and Frontend UI Engineer**:\n\n• **Performance Optimization**: Engineered responsive web interfaces and digital campaign infrastructure, optimizing asset delivery to achieve sub second load times.\n• **Accessibility Standards**: Implemented accessible design systems conforming strictly to WCAG 2.1 specifications across client web properties.\n• **Conversion Engineering**: Structured high converting checkout funnels and performance optimized storefronts, boosting client checkout conversion rates by 28 percent.",
      contextCard: {
        title: "Blueshels Ltd",
        badge: "Web Designer & Frontend UI Engineer (2024 to 2025)",
        detail: "Sub Second Load Times · WCAG 2.1 · 28% Conversion Growth",
        actionText: "VIEW EXPERIENCE",
        targetSection: "experience"
      },
      followUps: ["Tell me about Kucheza Gaming", "What is REAVO?", "Explain D MEX Protocol"]
    }
  ]
};
