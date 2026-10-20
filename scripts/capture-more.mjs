import fs from 'fs';
import path from 'path';

const TARGETS = [
  {
    name: 'reavo_cart',
    url: 'https://reavo-app.vercel.app/cart',
    title: 'REAVO Student Checkout & Cart Drawer'
  },
  {
    name: 'reavo_accessories',
    url: 'https://reavo-app.vercel.app/category/accessories',
    title: 'REAVO Student Tech Accessories & Peripherals'
  },
  {
    name: 'news_insights_business',
    url: 'https://news-insights-abrahamtoluwani999-6423s-projects.vercel.app/category/business',
    title: 'News Insights Global Markets & Business Desk'
  },
  {
    name: 'news_insights_world',
    url: 'https://news-insights-abrahamtoluwani999-6423s-projects.vercel.app/category/world',
    title: 'News Insights World Affairs & Investigative Bureau'
  },
  {
    name: 'antho_editorial',
    url: 'https://antho-rho.vercel.app/about',
    title: 'ANTHO Brand Heritage & Haute Couture Vision'
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
        signal: AbortSignal.timeout(35000)
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
      const res = await fetch(url, { signal: AbortSignal.timeout(35000) });
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
  console.log('🚀 Capturing additional live screenshots...\n');

  for (const target of TARGETS) {
    const rawPngPath = path.join(OUTPUT_DIR, `${target.name}.png`);
    if (fs.existsSync(rawPngPath) && fs.statSync(rawPngPath).size > 10000) {
      console.log(`⏩ ${target.name}.png already exists, skipping.`);
      continue;
    }

    console.log(`📸 Capturing ${target.title} (${target.url})...`);
    const apiUrl = `https://api.microlink.io/?url=${encodeURIComponent(target.url)}&screenshot=true&meta=false&waitForTimeout=2500`;

    try {
      const json = await fetchWithRetry(apiUrl);
      if (json.status === 'success' && json.data?.screenshot?.url) {
        console.log(`   ⬇ Downloading screenshot...`);
        await downloadImage(json.data.screenshot.url, rawPngPath);
        const stats = fs.statSync(rawPngPath);
        console.log(`   ✓ Saved: ${target.name}.png (${(stats.size / 1024).toFixed(1)} KB)\n`);
      } else {
        console.error(`   ✗ Microlink returned non-success for ${target.url}\n`);
      }
    } catch (err) {
      console.error(`   ✗ Error capturing ${target.name}: ${err.message}\n`);
    }

    await new Promise(r => setTimeout(r, 2000));
  }

  console.log('✨ Additional screenshots capture completed!');
}

run();
