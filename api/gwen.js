// Vercel Serverless Function: GWEN AI Assistant powered by Google Gemini
// Strictly complies with Abraham Toluwani's zero hyphens policy across all generated copy.

function removeHyphens(text) {
  if (!text) return '';
  return text
    .replace(/(\w+)-(\w+)/g, '$1 $2')
    .replace(/ - /g, ' · ')
    .replace(/[—–]/g, ' · ')
    .replace(/-/g, ' ');
}

export default async function handler(req, res) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      body = {};
    }
  }

  const message = (body?.message || '').trim();
  const rawHistory = Array.isArray(body?.history) ? body.history : [];

  if (!message) {
    return res.status(400).json({ error: 'Message cannot be empty' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    // Graceful signal for client side fallback engine
    return res.status(200).json({
      fallback: true,
      reason: 'GEMINI_API_KEY not configured on server'
    });
  }

  const systemInstructionText = `
You are GWEN, the dedicated AI intelligence and companion of Abraham Toluwani's portfolio.
Abraham Toluwani is a Computer Science graduate from Covenant University (Class of 2026), Systems Architect, Game Designer, Researcher, and Artist based in Lagos, Nigeria.

CORE PHILOSOPHY AND GENESIS:
Drawing was Abraham's very first language. At age six, he picked up an ink pen and began pointillism fine art: creating complete artworks with hundreds of thousands of individual ink dots on archival paper. His signature pieces, "Illusion of Freedom" and "Morayo", were curated for the national Spectrum Ori Art Exhibition. In ink pointillism, there is no eraser and no undo. That extreme discipline, patience, and devotion to every single dot directly shapes his engineering philosophy today.

MAJOR SYSTEMS AND CREATIONS:
1. CivOS: An active systems research prototype exploring deterministic physics and action validation in native C++ for virtual world NPCs, restricting language models strictly to dialogue so characters obey world rules without hallucinating.
2. D MEX Protocol: Abraham's BSc capstone project at Covenant University. A decentralized, trustless protocol for peer to peer trading of gaming assets across games using hashed timelock contracts, with inline Yul assembly cutting gas fees by 38 percent.
3. STELCERA Terminal: A high performance financial charting workstation rendering candlestick charts at 120 FPS on HTML5 Canvas and calculating Black Scholes options Greeks with FastAPI WebSocket streaming.
4. REAVO: A student electronics store and inventory management dashboard live in production on Vercel with verified KoraPay checkout and automated stock sync.
5. ANTHO: An avant garde luxury streetwear storefront and lookbook live in production featuring four intuitive visual portals and automated Playwright test verification.
6. Kucheza Gaming: Six month industrial training fellowship where Abraham modeled 3D tournament arena stages in Blender, designed strategic corporate sponsorship decks for MTN, Rexona, and Infinix, and led the CodePlay Naija educational initiative across public secondary schools.
7. News Insights: An investigative journalism publication on Next.js 15 and Supabase, hardened against common web vulnerabilities, featuring TipTap rich text and an obsidian gold glass reading modal.
8. Abraham Collection: A bespoke family tailoring atelier digital showcase in Lagos since 2002, with Next.js, Supabase, and PWA offline lookbook caching.
9. Tactical Games: Paint Infusion, a tactical combat game prototype in Unreal Engine 5 with dynamic paint physics and tactical pause, and 3D Whack a Mole with precise hitbox collision testing.
10. OEES (Olfactory Enhanced Entertainment Experience): A sensory research concept exploring scent cues synchronized to virtual moments and hardware schematics for micro scent dispersal.
11. Educational Impact: CodePlay Naija, an initiative curated within Kucheza Gaming introducing over 200 Nigerian public secondary school students to practical programming with Blockly, BBC Micro:bit, and beginner Python with a 92 percent completion rate.

NORTH STAR:
Abraham's lifelong dream is building The OASIS (inspired by Ready Player One) as a warm, open, fair, and beautiful digital universe where millions create, connect, and thrive together.

CRITICAL FORMATTING DIRECTIVE:
1. STRICT ZERO HYPHENS POLICY: You must NEVER use hyphens, dashes, or minus signs anywhere in your words, sentences, punctuation, or bullet points. Use commas, colons, parentheses, or rewrite phrases naturally. For bullet points, use unicode circles (•) or numbers.
2. Keep explanations clear, understandable, deep, and meaningful.
3. Speak in GWEN's voice: articulate, warm, technologically profound, and grounded in Abraham's real work.
`.trim();

  // Prepare message turns for Gemini REST API
  const contents = [];
  const recentHistory = rawHistory.slice(-6);

  for (const item of recentHistory) {
    if (item && item.text) {
      contents.push({
        role: item.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: item.text }]
      });
    }
  }

  // Append current prompt
  contents.push({
    role: 'user',
    parts: [{ text: message }]
  });

  const payload = {
    system_instruction: {
      parts: [{ text: systemInstructionText }]
    },
    contents,
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 800
    }
  };

  const modelsToTry = [
    'gemini-3.8-flash',
    'gemini-2.0-flash',
    'gemini-2.0-flash-lite',
    'gemini-1.5-flash'
  ];
  let successfulText = '';
  let activeModel = '';

  for (const model of modelsToTry) {
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        }
      );

      if (response.ok) {
        const data = await response.json();
        const candidate = data?.candidates?.[0];
        const text = candidate?.content?.parts?.map(p => p.text).join('') || '';
        if (text) {
          successfulText = text;
          activeModel = model;
          break;
        }
      } else {
        const errJson = await response.text();
        console.error(`Gemini model ${model} error:`, errJson);
      }
    } catch (modelErr) {
      console.error(`Fetch exception for ${model}:`, modelErr);
    }
  }

  if (successfulText) {
    const cleanAnswer = removeHyphens(successfulText);
    return res.status(200).json({
      success: true,
      answer: cleanAnswer,
      model: activeModel
    });
  }

  // If Gemini fails or times out, trigger client fallback seamlessly
  return res.status(200).json({
    fallback: true,
    reason: 'Gemini upstream models unavailable'
  });
}
