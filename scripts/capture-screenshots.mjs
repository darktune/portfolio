import https from 'https';
import fs from 'fs';
import path from 'path';

// Target deployments to capture
const TARGETS = [
  {
    name: 'reavo_live',
    url: 'https://reavo-app.vercel.app',
    label: 'REAVO E-Commerce & Admin OS'
  },
  {
    name: 'news_insights_live',
    url: 'https://news-insights-abrahamtoluwani999-6423s-projects.vercel.app',
    label: 'News Insights Media Platform'
  },
  {
    name: 'antho_live',
    url: 'https://antho-rho.vercel.app',
    label: 'ANTHO Luxury Streetwear Storefront'
  }
];

const OUTPUT_DIR = path.resolve('public', 'media');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (err) {
          reject(err);
        }
      });
    }).on('error', reject);
  });
}

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, destPath).then(resolve).catch(reject);
      }
      const file = fs.createWriteStream(destPath);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', reject);
  });
}

async function captureAll() {
  console.log('🚀 Starting automated portfolio screenshot capture...\n');

  for (const target of TARGETS) {
    console.log(`📸 Capturing [${target.label}] (${target.url})...`);
    const apiUrl = `https://api.microlink.io/?url=${encodeURIComponent(target.url)}&screenshot=true&meta=false`;

    try {
      const response = await fetchJson(apiUrl);
      if (response.status === 'success' && response.data?.screenshot?.url) {
        const imageUrl = response.data.screenshot.url;
        const outPath = path.join(OUTPUT_DIR, `${target.name}.png`);
        await downloadFile(imageUrl, outPath);
        const stats = fs.statSync(outPath);
        console.log(`   ✓ Saved: ${target.name}.png (${(stats.size / 1024).toFixed(1)} KB)`);
      } else {
        console.error(`   ✗ Failed to capture screenshot for ${target.url}`);
      }
    } catch (err) {
      console.error(`   ✗ Error capturing ${target.name}:`, err.message);
    }
  }

  console.log('\n✨ Automated screenshot capture complete! Assets saved to public/media/');
}

captureAll();
