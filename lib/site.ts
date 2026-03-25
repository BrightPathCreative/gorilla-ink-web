/**
 * Canonical site origin for metadata (Open Graph, Twitter, JSON-LD).
 * Prefer `NEXT_PUBLIC_SITE_URL` on Vercel; falls back to `VERCEL_URL` then localhost.
 */
export function getSiteUrl(): URL {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    try {
      const normalized = explicit.replace(/\/+$/, "");
      return new URL(normalized);
    } catch {
      /* ignore invalid */
    }
  }
  if (process.env.VERCEL_URL) {
    return new URL(`https://${process.env.VERCEL_URL}`);
  }
  return new URL("http://localhost:3000");
}
