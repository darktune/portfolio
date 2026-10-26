import fs from 'fs';
import path from 'path';

// 1. Update src/data/finishedProjects.js
const fpPath = path.resolve('src', 'data', 'finishedProjects.js');
let fpContent = fs.readFileSync(fpPath, 'utf8');

const fpTarget = `    statusBadge: "Personal Trading Tool",
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
    demoUrl: null,`;

const fpReplacement = `    statusBadge: "Live Production Tool",
    featured: false,
    coverImage: "/media/siphoon_live.webp",
    videoUrl: null,
    hasVideo: false,
    gallery: [
      {
        url: "/media/siphoon_live.webp",
        title: "SIPHOON OS Command Center & Live Market Desk"
      },
      {
        url: "/media/siphoon_intelligence.webp",
        title: "Market Intelligence & Bayesian Signal Engine"
      },
      {
        url: "/media/siphoon_quant.webp",
        title: "Quant Hub Risk Calculators & Position Sizing"
      },
      {
        url: "/media/siphoon_journal.webp",
        title: "Forex Trade Journal & Execution Log"
      }
    ],
    summary: "A personal Forex trade journal and risk calculator web app built with Next.js 15, TypeScript, PostgreSQL, Prisma, and TradingView lightweight charts. Helps currency traders calculate position lot sizes using the Kelly criterion, log trade entries with screenshots, and track rule discipline.",
    role: "Full Stack Engineer",
    techStack: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "lightweight charts", "Tailwind CSS"],
    github: "https://github.com/darktune/SIPHOON",
    demoUrl: "https://siphoon.vercel.app",`;

const normFP = fpContent.replace(/\r\n/g, '\n');
const normFPTarget = fpTarget.replace(/\r\n/g, '\n');
const normFPReplacement = fpReplacement.replace(/\r\n/g, '\n');

if (normFP.includes(normFPTarget)) {
  fs.writeFileSync(fpPath, normFP.replace(normFPTarget, normFPReplacement), 'utf8');
  console.log('✓ Successfully updated src/data/finishedProjects.js');
} else {
  console.log('✗ Failed to find target in finishedProjects.js');
}

// 2. Update src/data/projects.js
const pPath = path.resolve('src', 'data', 'projects.js');
let pContent = fs.readFileSync(pPath, 'utf8');

const pTarget = `    "badge": "Personal Trading Tool",
    "coverImage": null,
    "videoUrl": null,
    "hasVideo": false,
    "gallery": [],
    "summary": "A personal Forex trade journal and risk calculator web app built with Next.js 15, TypeScript, PostgreSQL, Prisma, and TradingView lightweight charts. Helps currency traders calculate position lot sizes using the Kelly criterion, log trade entries with screenshots, and track rule discipline.",
    "role": "Full Stack Engineer",
    "status": "Personal Trading Tool",
    "techStack": [
      "Next.js 15",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "lightweight charts",
      "Tailwind CSS",
      "Docker"
    ],
    "github": "https://github.com/abraham-DT/siphoon-os",
    "demoUrl": null,`;

const pReplacement = `    "badge": "Live Production Tool",
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
    "demoUrl": "https://siphoon.vercel.app",`;

const normP = pContent.replace(/\r\n/g, '\n');
const normPTarget = pTarget.replace(/\r\n/g, '\n');
const normPReplacement = pReplacement.replace(/\r\n/g, '\n');

if (normP.includes(normPTarget)) {
  fs.writeFileSync(pPath, normP.replace(normPTarget, normPReplacement), 'utf8');
  console.log('✓ Successfully updated src/data/projects.js');
} else {
  console.log('✗ Failed to find target in projects.js');
}
