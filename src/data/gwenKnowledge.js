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
    "What is The OASIS and Abraham's vision?",
    "How does art since age six inspire his software?",
    "Tell me about CivOS and living virtual worlds",
    "What is D MEX Protocol?",
    "Tell me about STELCERA Terminal",
    "How does OEES bring scent into games?",
    "Tell me about REAVO and ANTHO online stores",
    "What did Abraham show at the Spectrum Ori exhibition?",
    "What games has Abraham created?"
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
      intent: ["stelcera", "trading", "terminal", "arbitrage", "options", "greeks", "105 desks", "swarm", "canvas 120 fps", "dma"],
      tags: ["#STELCERA", "#Trading", "#Quant", "#105Desks"],
      answer: "**STELCERA Terminal** is a high speed financial workstation created to give traders complete clarity in fast moving markets.\n\n**What makes it special:**\n• **Smooth and Fluid**: Renders market moves at 120 frames per second with zero lag or screen stutter.\n• **Clear Market Vision**: Calculates financial options math and market depth in under fifteen milliseconds.\n• **Helpful Market Swarms**: Autonomous assistants read volume shifts and highlight genuine market opportunities.\n• **Instant Data Stream**: Delivers live prices smoothly across 105 financial desks.",
      contextCard: {
        title: "STELCERA Terminal",
        badge: "105 Desk Quantitative Workstation",
        detail: "105 Desks · 120 FPS Canvas · Agent Swarms · Options Greeks",
        actionText: "VIEW STELCERA DETAILS",
        projectId: "stelcera-terminal"
      },
      followUps: ["Tell me about SIPHOON OS", "Explain REAVO", "Tell me about D MEX Protocol"]
    },

    // 5. Flagship: REAVO
    {
      id: "reavo-commerce",
      intent: ["reavo", "ecommerce", "storefront", "korapay", "admin os", "gadgets", "electronics"],
      tags: ["#REAVO", "#CommerceOS", "#KoraPay"],
      answer: "**REAVO** is a live consumer electronics store and business management system running in production on Vercel.\n\n**The human experience:**\n• **Safe and Smooth Checkout**: Verified payment workflows prevent double charges and protect every customer order.\n• **Bank Grade Privacy**: Strict database rules ensure that customer information remains safe and private.\n• **Helpful Automation**: An intelligent operations assistant keeps warehouse inventory updated in real time.",
      contextCard: {
        title: "REAVO App & Admin OS",
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
      intent: ["news", "insights", "media", "75 vulnerabilities", "security", "tiptap", "publishing", "achichi"],
      tags: ["#NewsInsights", "#Security", "#Nextjs15", "#MediaAI"],
      answer: "**News Insights** is an investigative digital publication and media portal built for thoughtful journalism and reader trust.\n\n**Key highlights:**\n• **Built for Security**: Audited against 75 common web vulnerabilities to protect reader data and editorial privacy.\n• **Warm Reading Experience**: An obsidian glass subscription view with gentle blur and instant one tap access.\n• **Fast and Light**: Pages load instantly so readers discover great stories without delay.",
      contextCard: {
        title: "News Insights Media Portal",
        badge: "Live in Production",
        detail: "75 Security Audits · Instant Page Loads · Obsidian Gold Modal",
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
      answer: "**Kucheza Gaming** was Abraham's six month industrial training where he explored gaming production and spatial arena stage design.\n\n**What he created:**\n• **3D Arena Stages**: Crafted full tournament stage environments in Blender with dramatic concert lighting and camera views.\n• **Impactful Presentations**: Engineered winning visual systems and decks for premier enterprise partner brands.\n• **Executive Staging**: Designed interactive 3D spatial retreat presentations for corporate leadership partners.",
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
      intent: ["civos", "civilization os", "memory", "bouncer", "metaverse os", "ai agents", "operating system", "kafka", "erc-4337", "5-tier"],
      tags: ["#CivOS", "#Systems", "#AIOS", "#ResearchPrototype"],
      answer: "**CivOS (Civilization Operating System)** is an active research prototype exploring how to build living virtual societies without burning massive computing costs.\n\n**The big idea:**\n• **Living Characters**: Virtual characters have real memory, personal goals, and social relationships.\n• **Clever Five Tier Design**: Runs 95 percent of world math and physics in lightning fast local C++ code. The AI only speaks when a human is nearby, cutting computing overhead by 94 percent.\n• **Transparent Rules**: Every action is recorded clearly so rules are always fair and characters can trade safely.",
      contextCard: {
        title: "CivOS Kernel Research",
        badge: "Active Research Prototype",
        detail: "Five Tier Compute Hierarchy · 94% Cost Cut · Autonomous Agents",
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
      answer: "**OEES (Olfactory Enhanced Entertainment Experience)** is a sensory research project that brings natural scents into virtual worlds.\n\n**Why this matters:**\n• **Deeper Senses**: Games usually talk only to our eyes and ears. OEES introduces scents synchronized to game moments.\n• **Emotional Memory**: Testing showed that when players smell rain or grass during a story, their emotional memory of the scene jumps by over 40 percent.\n• **Instant Response**: Custom hardware connects directly with the game engine to release scents in the exact right second.",
      contextCard: {
        title: "OEES Sensory Research",
        badge: "Sensory Research & Hardware Schematics",
        detail: "Natural Scents · Instant Response · 40% Stronger Emotional Recall",
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
      answer: "Along with systems and games, Abraham builds tools that help and educate people:\n\n• **Real Time Emotion AI**: A computer vision model that detects human emotions from webcam video in under twenty milliseconds.\n• **CodePlay Naija**: A practical computing curriculum that helped over two hundred secondary school students and teachers in Nigeria learn to code with confidence.\n• **SIPHOON OS**: A clear trading journal and risk dashboard helping traders build healthy financial habits.",
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
    }
  ]
};
