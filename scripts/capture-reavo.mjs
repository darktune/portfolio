import https from 'https';
import fs from 'fs';
import path from 'path';

const REAVO_PAGES = [
  {
    id: 'reavo_live',
    url: 'https://reavo-app.vercel.app/',
    label: 'REAVO Live Storefront & Hero'
  },
  {
    id: 'reavo_shop',
    url: 'https://reavo-app.vercel.app/shop',
    label: 'REAVO Gadget Catalog'
  },
  {
    id: 'reavo_apple',
    url: 'https://reavo-app.vercel.app/category/apple',
    label: 'REAVO Apple Deals'
  },
  {
    id: 'reavo_accessories',
    url: 'https://reavo-app.vercel.app/category/accessories',
    label: 'REAVO Tech Accessories'
  },
  {
    id: 'reavo_cart',
    url: 'https://reavo-app.vercel.app/cart',
    label: 'REAVO Cart & Checkout'
  }
];

const OUTPUT_DIR = path.resolve('public', 'media');

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error(`Failed to parse response: ${data.slice(0, 100)}`));
        }
      });
    }).on('error', reject);
  });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      const stream = fs.createWriteStream(dest);
      res.pipe(stream);
      stream.on('finish', () => {
        stream.close();
        resolve();
      });
    }).on('error', reject);
  });
}

async function capture() {
  console.log('Starting REAVO screenshot redo with high resolution (1920x1080 @ 2x)...');

  for (const page of REAVO_PAGES) {
    console.log(`\nCapturing ${page.label} (${page.url})...`);
    // Microlink high-fidelity viewport parameters
    const params = new URLSearchParams({
      url: page.url,
      screenshot: 'true',
      meta: 'false',
      'viewport.width': '1440',
      'viewport.height': '900',
      'viewport.deviceScaleFactor': '2',
      waitForTimeout: '3500'
    });
    const apiUrl = `https://api.microlink.io/?${params.toString()}`;

    try {
      const res = await fetchJson(apiUrl);
      if (res.status === 'success' && res.data?.screenshot?.url) {
        const screenshotUrl = res.data.screenshot.url;
        const outPng = path.join(OUTPUT_DIR, `${page.id}.png`);
        const outJpg = path.join(OUTPUT_DIR, `${page.id}.jpg`);
        const outWebp = path.join(OUTPUT_DIR, `${page.id}.webp`);

        console.log(`  Downloading screenshot from CDN...`);
        await downloadFile(screenshotUrl, outPng);
        const stats = fs.statSync(outPng);
        console.log(`  ✓ Saved ${page.id}.png (${(stats.size / 1024).toFixed(1)} KB)`);

        // Also copy as jpg and webp so all referenced extensions in gallery load the brand new screenshot!
        fs.copyFileSync(outPng, outJpg);
        fs.copyFileSync(outPng, outWebp);
        console.log(`  ✓ Synced to .webp and .jpg`);
      } else {
        console.error(`  ✗ Microlink failed for ${page.url}:`, res.message || res.status);
      }
    } catch (err) {
      console.error(`  ✗ Error capturing ${page.id}:`, err.message);
    }
  }

  console.log('\nAll REAVO screenshots captured and updated!');
}

capture();
