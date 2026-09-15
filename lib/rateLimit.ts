const WINDOW_MS = 60 * 60 * 1000;
const MAX_REQUESTS = 10;
const MAX_TRACKED_IPS = 5000;

const hits = new Map<string, number[]>();

/**
 * Per-instance sliding window. Stops casual and scripted abuse without adding
 * a shared store to the stack. If the site scales past a single instance,
 * swap these internals — the `check(ip)` interface stays.
 *
 * Returns true when the request is allowed.
 */
export function check(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);

  if (recent.length >= MAX_REQUESTS) {
    hits.set(ip, recent);
    return false;
  }

  recent.push(now);
  hits.set(ip, recent);

  // Bound the map so a stream of unique IPs cannot grow it without limit.
  if (hits.size > MAX_TRACKED_IPS) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) {
        hits.delete(key);
      }
    }
  }

  return true;
}
