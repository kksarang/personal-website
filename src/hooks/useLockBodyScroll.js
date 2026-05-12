import { useEffect } from 'react';

/**
 * iOS-safe scroll lock while overlays (mobile nav drawers) are open.
 * Uses position:fixed + restores scroll position on unlock — avoids stale overflow:hidden quirks.
 */
export function useLockBodyScroll(locked) {
    useEffect(() => {
        if (!locked) return undefined;

        const body = document.body;
        const html = document.documentElement;
        const y = window.scrollY ?? html.scrollTop ?? 0;
        const gap = typeof window !== 'undefined' ? window.innerWidth - document.documentElement.clientWidth : 0;

        const prevOverflow = body.style.overflow;
        const prevHtmlOverflow = html.style.overflow;
        const prevPosition = body.style.position;
        const prevTop = body.style.top;
        const prevLeft = body.style.left;
        const prevRight = body.style.right;
        const prevWidth = body.style.width;
        const prevPaddingRight = body.style.paddingRight;

        body.style.overflow = 'hidden';
        html.style.overflow = 'hidden';
        body.style.position = 'fixed';
        body.style.top = `-${y}px`;
        body.style.left = '0';
        body.style.right = '0';
        body.style.width = '100%';
        if (gap > 0) body.style.paddingRight = `${gap}px`;

        return () => {
            body.style.overflow = prevOverflow;
            html.style.overflow = prevHtmlOverflow;
            body.style.position = prevPosition;
            body.style.top = prevTop;
            body.style.left = prevLeft;
            body.style.right = prevRight;
            body.style.width = prevWidth;
            body.style.paddingRight = prevPaddingRight;
            window.scrollTo(0, y);
        };
    }, [locked]);
}
