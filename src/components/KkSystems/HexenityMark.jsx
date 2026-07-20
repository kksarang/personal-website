import React, { useId } from 'react';

/**
 * Hexenity brand mark — gradient hexagon with an inner "H" monogram.
 * Scales via the `size` prop (px) or className.
 */
const HexenityMark = ({ size = 28, className = '', withGlow = false }) => {
    const uid = useId().replace(/:/g, '');
    const gradId = `hexg-${uid}`;

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-hidden="true"
        >
            <defs>
                <linearGradient id={gradId} x1="8" y1="6" x2="56" y2="58" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#818cf8" />
                    <stop offset="50%" stopColor="#a78bfa" />
                    <stop offset="100%" stopColor="#f472b6" />
                </linearGradient>
                {withGlow && (
                    <filter id={`glow-${uid}`} x="-40%" y="-40%" width="180%" height="180%">
                        <feGaussianBlur stdDeviation="3" result="b" />
                        <feMerge>
                            <feMergeNode in="b" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                )}
            </defs>

            <g filter={withGlow ? `url(#glow-${uid})` : undefined}>
                {/* Outer hexagon */}
                <path
                    d="M32 3 L57 17.5 V46.5 L32 61 L7 46.5 V17.5 Z"
                    stroke={`url(#${gradId})`}
                    strokeWidth="3.5"
                    strokeLinejoin="round"
                />
                {/* Inner H monogram */}
                <path
                    d="M23 20 V44 M41 20 V44 M23 32 H41"
                    stroke={`url(#${gradId})`}
                    strokeWidth="4"
                    strokeLinecap="round"
                />
            </g>
        </svg>
    );
};

export default HexenityMark;
