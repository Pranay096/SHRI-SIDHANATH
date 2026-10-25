// Generates "artist's impression" images for projects with no photograph.
// Usage: node scripts/generate-project-images.mjs <outDir> [slug ...]
// Needs GEMINI_API_KEY in .env. Output is PNG; review before wiring in.
import fs from 'node:fs';
import path from 'node:path';

const env = fs.readFileSync('.env', 'utf8');
const KEY = env.match(/GEMINI_API_KEY=(.+)/)[1].trim();
const MODEL = 'gemini-3.1-flash-image';

const BASE =
  'Photorealistic architectural photograph of a real, completed residential building in India, 4:5 portrait, natural golden-hour light, slightly hazy Indian sky, a fictional building with no signage, no logos, no text anywhere, no watermark, no people in the foreground, shot at eye level like a real-estate developer brochure. ';

export const prompts = {
  'symphony-kharghar': '20-storey residential tower with balconies and a landscaped podium garden, Kharghar hills in the background.',
  'sai-residency': 'mid-rise 1 and 2 BHK apartment block (stilt plus 12 floors) with a small retail podium on a tree-lined road.',
  'grandstand': 'two residential towers with a sports-themed clubhouse and open lawn, Sahyadri hills behind.',
  'atheletica': 'residential complex with a jogging track and a sports court in the foreground, hills behind.',
  'pavilion': 'premium towers with a large clubhouse pavilion and a swimming pool deck, hills behind.',
  'jeswani-luxurios': 'luxury residential tower with an arched ground-floor shop frontage, evening lights glowing in the windows.',
  'parivaramm-1': 'a cluster of 7-storey affordable apartment buildings around a green courtyard with a children play area.',
  'parivaramm-2': 'a cluster of 7-storey apartment buildings around a green courtyard, newer wing, seen from a different angle.',
  'anandam-2': 'mid-rise apartment block with a gated entrance and a landscaped garden.',
  'dhanraj-legacy': 'compact residential towers with an entrance gate and plantation, hills behind.',
  'park-11': 'modern mid-rise apartment building facing a green park with a seating deck.',
  'sai-vrindavan': 'residential towers with a landscaped garden containing a small temple and a pathway.',
  'the-oasis-paradise': 'redeveloped housing society towers around a lush central garden with a swimming pool.',
  'olive-boulevard': 'boulevard-fronted residential tower with olive-green accents and trees along a wide road.',
  'deep-destiny-2': 'mixed-use building with shops on the ground floor and apartments above, street view.',
  'deep-niketan': 'mixed-use building with a retail podium and residential floors above, street view.',
  'j-prime-swastik': 'compact mid-rise apartment building with a modern facade and a small podium garden.',
  'one-bcc': 'glass-fronted commercial office tower with a plaza, daytime blue sky, no residential balconies.',
};

const [outDir, ...only] = process.argv.slice(2);
fs.mkdirSync(outDir, { recursive: true });
for (const slug of only.length ? only : Object.keys(prompts)) {
  const file = path.join(outDir, `${slug}.png`);
  if (fs.existsSync(file)) continue;
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: BASE + prompts[slug] }] }],
        generationConfig: { responseModalities: ['IMAGE'], imageConfig: { aspectRatio: '4:5' } },
      }),
    },
  );
  const j = await res.json();
  const part = j.candidates?.[0]?.content?.parts?.find((p) => p.inlineData);
  if (!part) { console.log(slug, 'FAILED', JSON.stringify(j).slice(0, 300)); continue; }
  fs.writeFileSync(file, Buffer.from(part.inlineData.data, 'base64'));
  console.log(slug, 'ok');
}
