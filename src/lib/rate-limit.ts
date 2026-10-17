interface Bucket {
  tokens: number;
  updatedAt: number;
}

const buckets = new Map<string, Bucket>();

/**
 * Simple in-memory token bucket, good enough for a proof of concept. State is
 * per server instance, so it resets on cold starts and is not shared.
 */
export function takeToken(
  key: string,
  { capacity, refillMs }: { capacity: number; refillMs: number },
) {
  const now = Date.now();
  const bucket = buckets.get(key) ?? { tokens: capacity, updatedAt: now };
  const refill = Math.floor((now - bucket.updatedAt) / refillMs);

  if (refill > 0) {
    bucket.tokens = Math.min(capacity, bucket.tokens + refill);
    bucket.updatedAt = now;
  }

  if (bucket.tokens < 1) {
    buckets.set(key, bucket);
    return false;
  }

  bucket.tokens -= 1;
  buckets.set(key, bucket);
  return true;
}
