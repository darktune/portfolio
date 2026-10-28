async function checkLive() {
  try {
    const res = await fetch('https://my-portfolio-sigma-nine-wn396u30wg.vercel.app', {
      headers: { 'Cache-Control': 'no-cache' }
    });
    console.log('Status:', res.status);
    console.log('x-vercel-id:', res.headers.get('x-vercel-id'));
    console.log('x-vercel-cache:', res.headers.get('x-vercel-cache'));
    console.log('age:', res.headers.get('age'));
    
    const html = await res.text();
    console.log('HTML length:', html.length);

    // Find script tags
    const scriptMatches = [...html.matchAll(/src="([^"]+\.js)"/g)];
    for (const match of scriptMatches) {
      const scriptUrl = new URL(match[1], 'https://my-portfolio-sigma-nine-wn396u30wg.vercel.app').href;
      console.log('Checking script:', scriptUrl);
      const sRes = await fetch(scriptUrl);
      const sText = await sRes.text();
      console.log('  Includes siphoon.vercel.app:', sText.includes('siphoon.vercel.app'));
      console.log('  Includes loom-3d-virtual-atelier:', sText.includes('loom-3d-virtual-atelier'));
      console.log('  Includes Blueshels:', sText.includes('Blueshels'));
      console.log('  Includes reavo_admin:', sText.includes('reavo_admin'));
      console.log('  Includes CodePlay Naija in Kucheza:', sText.includes('Kucheza Gaming'));
    }
  } catch (err) {
    console.error(err);
  }
}

checkLive();
