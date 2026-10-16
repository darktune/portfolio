import fs from 'fs';
import path from 'path';

const TARGETS = [
  // ANTHO Highlights
  {
    name: 'antho_lookbook',
    url: 'https://antho-rho.vercel.app/lookbook',
    title: 'ANTHO Editorial Lookbook Archive'
  },
  {
    name: 'antho_shop',
    url: 'https://antho-rho.vercel.app/shop',
    title: 'ANTHO The Vault Archival Pieces'
  },
  {
    name: 'antho_collections',
    url: 'https://antho-rho.vercel.app/collections',
    title: 'ANTHO Capsule Collections Gallery'
  },

  // News Insights Highlights
  {
    name: 'news_insights_tech',
    url: 'https://news-insights-abrahamtoluwani999-6423s-projects.vercel.app/category/technology',
    title: 'News Insights Technology & AI Desk'
  },
  {
    name: 'news_insights_politics',
    url: 'https://news-insights-abrahamtoluwani999-6423s-projects.vercel.app/category/politics',
    title: 'News Insights Investigative Politics Desk'
  },

  // REAVO Highlights
  {
    name: 'reavo_shop',
    url: 'https://reavo-app.vercel.app/shop',
    title: 'REAVO Student Gadget Catalog'
  },
  {
    name: 'reavo_apple',
    url: 'https://reavo-app.vercel.app/category/apple',
    title: 'REAVO Apple Ecosystem & MacBook Deals'
  }
];

const OUTPUT_DIR = path.resolve('public', 'media');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function fetchWithRetry(url, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
        signal: AbortSignal.timeout(30000)
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      return await res.json();
    } catch (err) {
      console.warn(`  [Attempt ${attempt}/${retries}] failed: ${err.message}`);
      if (attempt === retries) throw err;
      await new Promise(r => setTimeout(r, 2000 * attempt));
    }
  }
}

async function downloadImage(url, destPath, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(30000) });
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      const arrayBuffer = await res.arrayBuffer();
      fs.writeFileSync(destPath, Buffer.from(arrayBuffer));
      return;
    } catch (err) {
      console.warn(`  [Download Attempt ${attempt}/${retries}] failed: ${err.message}`);
      if (attempt === retries) throw err;
      await new Promise(r => setTimeout(r, 2000 * attempt));
    }
  }
}

async function run() {
  console.log('🚀 Capturing additional feature highlight screenshots...\n');

  for (const target of TARGETS) {
    const rawPngPath = path.join(OUTPUT_DIR, `${target.name}.png`);
    if (fs.existsSync(rawPngPath) && fs.statSync(rawPngPath).size > 10000) {
      console.log(`⏩ ${target.name}.png already exists (${(fs.statSync(rawPngPath).size / 1024).toFixed(1)} KB), skipping capture.`);
      continue;
    }

    console.log(`📸 Capturing ${target.title} (${target.url})...`);
    const apiUrl = `https://api.microlink.io/?url=${encodeURIComponent(target.url)}&screenshot=true&meta=false`;

    try {
      const json = await fetchWithRetry(apiUrl);
      if (json.status === 'success' && json.data?.screenshot?.url) {
        console.log(`   ⬇ Downloading screenshot from Microlink...`);
        await downloadImage(json.data.screenshot.url, rawPngPath);
        const stats = fs.statSync(rawPngPath);
        console.log(`   ✓ Saved: ${target.name}.png (${(stats.size / 1024).toFixed(1)} KB)\n`);
      } else {
        console.error(`   ✗ Microlink returned non-success for ${target.url}\n`);
      }
    } catch (err) {
      console.error(`   ✗ Error capturing ${target.name}: ${err.message}\n`);
    }

    // Brief polite pause between API calls
    await new Promise(r => setTimeout(r, 1500));
  }

  console.log('✨ Capture pass finished!');
}

run();
