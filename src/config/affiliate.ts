export type AffiliateMarket = 'us' | 'uk';

export const AMAZON_TAGS: Record<AffiliateMarket, string> = {
  us: 'smartpickh0bc-20',
  uk: 'smartpickhubu-21',
};

const AMAZON_DOMAINS: Record<AffiliateMarket, string> = {
  us: 'https://www.amazon.com',
  uk: 'https://www.amazon.co.uk',
};

/**
 * Accepts a verified 10-character ASIN for a direct product URL.
 * Any other identifier is treated as a search phrase, never as an invented ASIN.
 */
export function buildAffiliateUrl(market: AffiliateMarket, identifier: string): string {
  const value = identifier.trim();
  if (!value) throw new Error('A product ASIN or search phrase is required.');
  const base = AMAZON_DOMAINS[market];
  const tag = AMAZON_TAGS[market];
  const isAsin = /^[A-Z0-9]{10}$/.test(value);
  const path = isAsin ? `/dp/${value}` : `/s?k=${encodeURIComponent(value)}`;
  return `${base}${path}?tag=${encodeURIComponent(tag)}`;
}
