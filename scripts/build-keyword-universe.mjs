import fs from 'node:fs';
import path from 'node:path';

const input = JSON.parse(fs.readFileSync('src/data/keyword-clusters.json', 'utf8'));
const outputDir = 'research';
fs.mkdirSync(outputDir, { recursive: true });
const seen = new Set();
const rows = [];

for (const cluster of input.clusters) {
  for (const topic of cluster.topics) {
    for (const modifier of input.intentModifiers) {
      for (const audience of cluster.audiences) {
        for (const market of input.markets) {
          const candidates = [
            `${topic} ${modifier.value} ${audience}`,
            `${modifier.value} for ${topic} ${audience}`,
            `${topic} ${audience} ${modifier.value}`
          ];
          for (const phrase of candidates) {
            const keyword = phrase.replace(/\s+/g, ' ').trim().toLowerCase();
            const key = `${market.code}|${keyword}`;
            if (seen.has(key)) continue;
            seen.add(key);
            rows.push({
              keyword,
              market: market.code,
              clusterId: cluster.id,
              cluster: cluster.name,
              topic,
              intent: modifier.intent,
              status: input.generationPolicy.status,
              searchVolume: null,
              priority: null,
              note: 'Candidate phrase only; validate demand and SERP intent before creating content.'
            });
          }
        }
      }
    }
  }
}

const result = {
  generatedAt: new Date().toISOString(),
  status: 'research-only',
  totalCandidates: rows.length,
  searchVolumeCollected: false,
  publicationAllowed: false,
  policy: input.generationPolicy,
  keywords: rows
};
fs.writeFileSync(path.join(outputDir, 'keyword-opportunities.json'), JSON.stringify(result, null, 2) + '\n');
console.log(`Generated ${rows.length} deduplicated US/UK keyword opportunities. No volume estimates or pages were published.`);
