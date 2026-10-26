import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const OUTPUT_DIR = path.resolve('public', 'media');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function run() {
  console.log('🚀 Starting clean Playwright screenshot capture for SIPHOON OS (https://siphoon.vercel.app)...');

  const browser = await chromium.launch({
    headless: true
  });

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2
  });

  // Pre-seed guest auth cookies so all protected trading desks render immediately
  await context.addCookies([
    {
      name: 'siphoon_guest',
      value: 'true',
      domain: 'siphoon.vercel.app',
      path: '/'
    },
    {
      name: 'authjs.session-token',
      value: 'demo-guest-token',
      domain: 'siphoon.vercel.app',
      path: '/'
    }
  ]);

  const page = await context.newPage();

  // Helper to save screenshot in PNG, WEBP, and JPG
  const saveShot = async (baseName) => {
    const buffer = await page.screenshot();
    const pngPath = path.join(OUTPUT_DIR, `${baseName}.png`);
    const webpPath = path.join(OUTPUT_DIR, `${baseName}.webp`);
    const jpgPath = path.join(OUTPUT_DIR, `${baseName}.jpg`);
    fs.writeFileSync(pngPath, buffer);
    fs.writeFileSync(webpPath, buffer);
    fs.writeFileSync(jpgPath, buffer);
    console.log(`  ✓ Saved ${baseName} (.png, .webp, .jpg) - ${(buffer.length / 1024).toFixed(1)} KB`);
  };

  // 1. Command Center / Main Trading Desk (siphoon_live)
  console.log('\n📸 1. Capturing SIPHOON Command Center (siphoon_live)...');
  await page.goto('https://siphoon.vercel.app/', { waitUntil: 'domcontentloaded', timeout: 35000 });
  await page.waitForTimeout(3500); // Allow cards, charts, and live ticker to settle
  await saveShot('siphoon_live');

  // Also save as legacy siphoon_os for any fallback references
  await saveShot('siphoon_os');

  // 2. Market Intelligence & Structure Desk (siphoon_intelligence)
  console.log('\n📸 2. Capturing Market Intelligence Desk (siphoon_intelligence)...');
  try {
    await page.goto('https://siphoon.vercel.app/intelligence', { waitUntil: 'domcontentloaded', timeout: 35000 });
    await page.waitForTimeout(3000);
    await saveShot('siphoon_intelligence');
  } catch (err) {
    console.log('   Note navigating to /intelligence:', err.message);
  }

  // 3. Quantitative Risk & Position Calculators (siphoon_quant)
  console.log('\n📸 3. Capturing Quant Calculators (siphoon_quant)...');
  try {
    await page.goto('https://siphoon.vercel.app/quant/calculators', { waitUntil: 'domcontentloaded', timeout: 35000 });
    await page.waitForTimeout(3000);
    await saveShot('siphoon_quant');
  } catch (err) {
    console.log('   Note navigating to /quant/calculators:', err.message);
  }

  // 4. Forex Trade Journal (siphoon_journal)
  console.log('\n📸 4. Capturing Forex Trade Journal (siphoon_journal)...');
  try {
    await page.goto('https://siphoon.vercel.app/journal', { waitUntil: 'domcontentloaded', timeout: 35000 });
    await page.waitForTimeout(3000);
    await saveShot('siphoon_journal');
  } catch (err) {
    console.log('   Note navigating to /journal:', err.message);
  }

  await browser.close();
  console.log('\n✨ SIPHOON screenshots captured successfully!');
}

run().catch(console.error);
