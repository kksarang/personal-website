import { lazy } from 'react';

const SESSION_KEY = 'vite-chunk-retry';

function isLikelyStaleChunkError(error) {
  const msg = String(error?.message ?? error ?? '');
  return (
    msg.includes('Failed to fetch dynamically imported module') ||
    msg.includes('error loading dynamically imported module') ||
    msg.includes('Importing a module script failed')
  );
}

/**
 * Like React.lazy, but recovers when hashed chunks 404 after a deploy (stale tab / cached HTML).
 */
export function lazyRoute(factory) {
  return lazy(async () => {
    try {
      const mod = await factory();
      if (typeof window !== 'undefined') {
        sessionStorage.removeItem(SESSION_KEY);
      }
      return mod;
    } catch (error) {
      if (typeof window === 'undefined') throw error;

      const alreadyRetried = sessionStorage.getItem(SESSION_KEY) === '1';
      if (!alreadyRetried && isLikelyStaleChunkError(error)) {
        sessionStorage.setItem(SESSION_KEY, '1');
        window.location.reload();
        return new Promise(() => {});
      }

      throw error;
    }
  });
}
