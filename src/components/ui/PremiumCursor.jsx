import React, { useEffect, useRef, useState } from 'react';

/**
 * Custom cursor: small dot + lagging ring. Elements with a `data-cursor`
 * attribute swell the ring and show a contextual label.
 * Renders nothing on touch / reduced-motion devices.
 */
const PremiumCursor = () => {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const labelRef = useRef(null);
    const [enabled] = useState(() => {
        if (typeof window === 'undefined') return false;
        const fine = window.matchMedia('(pointer: fine)').matches;
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        return fine && !reduced;
    });

    useEffect(() => {
        if (!enabled) return;

        const root = document.querySelector('.enitexa-root');
        root?.classList.add('enitexa-cursor-on');

        let mouseX = -100;
        let mouseY = -100;
        let ringX = -100;
        let ringY = -100;
        let raf;

        const onMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            const dot = dotRef.current;
            if (dot) dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

            const target = e.target.closest?.('[data-cursor]');
            const ring = ringRef.current;
            const label = labelRef.current;
            if (ring && label) {
                if (target) {
                    ring.classList.add('pf-cursor-active');
                    label.textContent = target.getAttribute('data-cursor') || '';
                } else {
                    ring.classList.remove('pf-cursor-active');
                    label.textContent = '';
                }
            }
        };

        const loop = () => {
            ringX += (mouseX - ringX) * 0.16;
            ringY += (mouseY - ringY) * 0.16;
            const ring = ringRef.current;
            if (ring) ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
            raf = requestAnimationFrame(loop);
        };

        window.addEventListener('mousemove', onMove, { passive: true });
        raf = requestAnimationFrame(loop);
        return () => {
            window.removeEventListener('mousemove', onMove);
            cancelAnimationFrame(raf);
            root?.classList.remove('enitexa-cursor-on');
        };
    }, [enabled]);

    if (!enabled) return null;

    return (
        <>
            <div ref={dotRef} className="pf-cursor-dot" aria-hidden="true" />
            <div ref={ringRef} className="pf-cursor-ring" aria-hidden="true">
                <span ref={labelRef} className="pf-cursor-label" />
            </div>
        </>
    );
};

export default PremiumCursor;
