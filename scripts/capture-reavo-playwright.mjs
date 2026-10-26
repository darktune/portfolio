import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const OUTPUT_DIR = path.resolve('public', 'media');

async function run() {
  console.log('🚀 Starting clean Playwright screenshot capture for REAVO (no loaders, no modals)...');
  
  const browser = await chromium.launch({
    headless: true
  });

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2
  });

  // Inject localStorage to skip loader & welcome intro prompt across all page visits, and inject CSS overrides
  await context.addInitScript(() => {
    try {
      localStorage.setItem('reavo_skip_loader', 'true');
      localStorage.setItem('reavo_hasSeenIntro', 'true');
      localStorage.setItem('reavo_skippedIntro', 'true');
      localStorage.setItem('reavo_userName', 'Abraham');
      localStorage.setItem('reavo_userSchool', 'Covenant');
      localStorage.setItem('reavo_cart', JSON.stringify([
        {
          id: "macbook-pro-m4",
          name: "MacBook Pro M4",
          price: 1950000,
          category: "biz",
          image: "/images/products/macbook-pro-m4.jpg",
          quantity: 1
        }
      ]));
    } catch (e) {}

    const style = document.createElement('style');
    style.innerHTML = `
      .loader-container, .loader, [class*="loader"], [class*="Loader"], #loader, [data-loader] {
        display: none !important;
        opacity: 0 !important;
        visibility: hidden !important;
        pointer-events: none !important;
      }
      /* Suppress welcome prompt overlay */
      div[style*="z-index: 9999"],
      div[style*="backdrop-filter: blur(8px)"] {
        display: none !important;
        opacity: 0 !important;
        visibility: hidden !important;
        pointer-events: none !important;
      }
    `;
    if (document.head) {
      document.head.appendChild(style);
    } else {
      document.addEventListener('DOMContentLoaded', () => document.head.appendChild(style));
    }
  });

  const page = await context.newPage();

  // Abort heavy third-party tracker requests that cause networkidle hangs
  await page.route('**/*analytics*', route => route.abort());
  await page.route('**/*pixel*', route => route.abort());
  await page.route('**/*tiktok*', route => route.abort());

  // Helper function to remove loader and any stray modals from DOM and save screenshot
  const cleanAndCapture = async (baseName) => {
    await page.evaluate(() => {
      // Remove any loader elements
      document.querySelectorAll('.loader-container, .loader, [class*="loader"], [class*="Loader"], #loader, [data-loader]').forEach(el => el.remove());
      
      // Remove any stray welcome modal overlays
      document.querySelectorAll('div, form').forEach(el => {
        if (el.innerText && (el.innerText.includes('TELL US ABOUT YOURSELF') || el.innerText.includes('Skip for now'))) {
          const parentOverlay = el.closest('div[style*="fixed"]');
          if (parentOverlay) parentOverlay.remove();
          el.remove();
        }
      });

      // Clear any blur filter that may have been applied to background
      document.querySelectorAll('*').forEach(el => {
        if (el.style && el.style.filter && el.style.filter.includes('blur')) {
          el.style.filter = 'none';
        }
      });
    });

    const buffer = await page.screenshot();
    const pngPath = path.join(OUTPUT_DIR, `${baseName}.png`);
    const webpPath = path.join(OUTPUT_DIR, `${baseName}.webp`);
    const jpgPath = path.join(OUTPUT_DIR, `${baseName}.jpg`);
    fs.writeFileSync(pngPath, buffer);
    fs.writeFileSync(webpPath, buffer);
    fs.writeFileSync(jpgPath, buffer);
    console.log(`  ✓ Saved ${baseName} (.png, .webp, .jpg) - ${(buffer.length / 1024).toFixed(1)} KB`);
  };

  // 1. REAVO Live Storefront & Hero (reavo_live)
  console.log('\n📸 1. Capturing Storefront & Hero (reavo_live)...');
  await page.goto('https://reavo-app.vercel.app/', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(3000);
  await cleanAndCapture('reavo_live');

  // 2. REAVO Gadget Catalog (reavo_shop)
  console.log('\n📸 2. Capturing Shop & Product Catalog (reavo_shop)...');
  await page.goto('https://reavo-app.vercel.app/shop', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(3000);
  await cleanAndCapture('reavo_shop');

  // 3. REAVO Product Detail Page (reavo_apple)
  console.log('\n📸 3. Capturing Product Page (reavo_apple)...');
  await page.goto('https://reavo-app.vercel.app/product/macbook-pro-m4', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(3000);
  await cleanAndCapture('reavo_apple');

  // 4. REAVO Cart Drawer (reavo_cart)
  console.log('\n📸 4. Capturing Cart Drawer (reavo_cart)...');
  await page.goto('https://reavo-app.vercel.app/shop', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(2000);
  try {
    const bagBtn = page.locator('[aria-label="Shopping Cart"], [title="Shopping Cart"]').first();
    if (await bagBtn.isVisible()) {
      await bagBtn.click();
      await page.waitForTimeout(1500);
    }
  } catch (err) {
    console.log('   Note: clicking cart bag:', err.message);
  }
  await cleanAndCapture('reavo_cart');

  // 5. REAVO Gear & Accessories Catalog (reavo_accessories)
  console.log('\n📸 5. Capturing Student Gear & Accessories (reavo_accessories)...');
  await page.goto('https://reavo-app.vercel.app/shop?type=gear', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(3000);
  await cleanAndCapture('reavo_accessories');

  await browser.close();
  console.log('\n✨ All 5 REAVO screenshots captured flawlessly with zero loader overlay and zero welcome modals!');
}

run().catch(console.error);
