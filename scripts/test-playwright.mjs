import { chromium } from 'playwright';

async function test() {
  console.log('Launching browser with Playwright using Microsoft Edge...');
  const browser = await chromium.launch({
    channel: 'msedge',
    headless: true
  });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2
  });
  
  // Set localStorage before loading so loader is completely skipped!
  await context.addInitScript(() => {
    try {
      localStorage.setItem('reavo_skip_loader', 'true');
    } catch (e) {}
  });

  const page = await context.newPage();
  console.log('Navigating to https://reavo-app.vercel.app/ ...');
  await page.goto('https://reavo-app.vercel.app/', { waitUntil: 'networkidle', timeout: 30000 });
  
  // Wait an extra 2 seconds for animations/fonts to settle
  await page.waitForTimeout(2000);

  // Ensure loader is not visible
  const loaderVisible = await page.locator('.loader, [data-loader], svg animate').count();
  console.log('Page loaded! Title:', await page.title());

  await page.screenshot({ path: 'public/media/reavo_live.png' });
  console.log('Screenshot saved to public/media/reavo_live.png!');
  
  await browser.close();
}

test().catch(console.error);
