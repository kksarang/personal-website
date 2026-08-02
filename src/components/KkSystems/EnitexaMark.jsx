import React from 'react';

const WORDMARK_LIGHT = '/assets/enitexa-wordmark-light.png'; // white letters
const WORDMARK_DARK = '/assets/enitexa-wordmark-dark.png'; // black letters

/**
 * Official Enitexa.Ai wordmark.
 * - default: theme-aware (black on light, white on dark)
 * - tone="light" | "dark": force a specific wordmark (for always-dark surfaces)
 */
const EnitexaMark = ({
    height = 22,
    size,
    className = '',
    withGlow = false,
    tone = 'auto',
    alt = 'Enitexa.Ai',
}) => {
    const h = size ?? height;
    const glowClass = withGlow ? 'drop-shadow-[0_0_18px_rgba(129,140,248,0.45)]' : '';
    const style = { height: h, width: 'auto', maxWidth: '100%' };

    if (tone === 'light') {
        return (
            <img
                src={WORDMARK_LIGHT}
                alt={alt}
                style={style}
                className={`inline-block ${glowClass} ${className}`}
                draggable={false}
            />
        );
    }

    if (tone === 'dark') {
        return (
            <img
                src={WORDMARK_DARK}
                alt={alt}
                style={style}
                className={`inline-block ${glowClass} ${className}`}
                draggable={false}
            />
        );
    }

    return (
        <span className={`relative inline-flex shrink-0 items-center ${glowClass} ${className}`}>
            <img
                src={WORDMARK_LIGHT}
                alt={alt}
                style={style}
                className="hidden dark:inline-block"
                draggable={false}
            />
            <img
                src={WORDMARK_DARK}
                alt=""
                aria-hidden="true"
                style={style}
                className="inline-block dark:hidden"
                draggable={false}
            />
        </span>
    );
};

export default EnitexaMark;
