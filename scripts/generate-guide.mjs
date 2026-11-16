import fs from 'node:fs/promises';
import path from 'node:path';

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error('GEMINI_API_KEY is not configured.');
  process.exit(1);
}

const dataPath = path.resolve('src/data/products.json');
const data = JSON.parse(await fs.readFile(dataPath, 'utf8'));
const existingSlugs = (data.guides ?? []).map((item) => item.slug);
const today = new Date().toISOString().slice(0, 10);

const prompt = `You are an editorial research assistant for SmartPickHub, a US and UK buying-guide project.
Create ONE editorial DRAFT BRIEF for a useful, non-duplicative buying guide.
Existing slugs: ${existingSlugs.join(', ') || '(none migrated)'}.
Rules:
- Do not invent ASINs, prices, ratings, review counts, stock, awards, test results or citations.
- Do not claim hands-on testing.
- Product candidates and technical claims must be marked "UNVERIFIED - RESEARCH REQUIRED".
- Return valid JSON only with keys: slug, title, category, publishedAt, summary, introduction, researchChecklist, productCandidates.
- productCandidates must contain exactly five objects with nameIdea, whyRelevant, verificationNeeded.
- publishedAt must be ${today}.
- This is a draft brief only; it must not be published or treated as verified content.`;

const endpoint = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent';
const response = await fetch(endpoint, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
  body: JSON.stringify({
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: { responseMimeType: 'application/json', temperature: 0.4 },
  }),
});
if (!response.ok) throw new Error(`Gemini API error ${response.status}: ${await response.text()}`);
const payload = await response.json();
const raw = payload.candidates?.[0]?.content?.parts?.map((part) => part.text ?? '').join('');
if (!raw) throw new Error('Gemini returned no draft content.');

const draft = JSON.parse(raw);
if (!/^[a-z0-9-]{3,90}$/.test(draft.slug ?? '')) throw new Error('Invalid slug.');
if (existingSlugs.includes(draft.slug)) throw new Error('Duplicate guide slug.');
if (!Array.isArray(draft.productCandidates) || draft.productCandidates.length !== 5) {
  throw new Error('Draft must contain exactly five candidate ideas.');
}
draft.status = 'draft-unverified';
draft.generatedAt = new Date().toISOString();
draft.verificationRequired = true;

const outputDir = path.resolve('content-drafts');
await fs.mkdir(outputDir, { recursive: true });
const outputPath = path.join(outputDir, `${draft.slug}.json`);
try {
  await fs.access(outputPath);
  throw new Error(`Draft already exists: ${outputPath}`);
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}
await fs.writeFile(outputPath, JSON.stringify(draft, null, 2) + '\n', 'utf8');
console.log(`Saved unverified editorial draft: ${outputPath}`);
