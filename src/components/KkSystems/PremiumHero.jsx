import React, { useId, useSyncExternalStore } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

function subscribeReducedMotion(callback) {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    mq.addEventListener('change', callback);
    return () => mq.removeEventListener('change', callback);
}

function snapshotReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function serverSnapshotReducedMotion() {
    return false;
}

/** Animated line-field model — visibly moving spokes, marching dashes, twinkle shell */
function HeroOrbVisual({ className, reduceMotion }) {
    const uid = useId();
    const gid = uid.replace(/:/g, '');
    const gradId = `heroOrbCore-${gid}`;
    const filtId = `heroOrbGlow-${gid}`;

    const lines = [];
    const n = 48;
    for (let i = 0; i < n; i += 1) {
        const a = (i * 360) / n;
        lines.push(
            <line
                key={`r-${i}`}
                x1="200"
                y1="200"
                x2="200"
                y2="48"
                stroke="rgba(250,252,255,0.16)"
                strokeWidth={i % 4 === 0 ? 0.85 : 0.42}
                transform={`rotate(${a} 200 200)`}
            />
        );
    }

    const arcs = [];
    for (let i = 0; i < 14; i += 1) {
        const r = 118 + i * 5.5;
        const op = Math.max(0.05, 0.38 - i * 0.02);
        arcs.push(<circle key={`c-${i}`} cx="200" cy="200" r={r} stroke={`rgba(255,255,255,${op})`} strokeWidth="0.45" />);
    }

    const dots = [];
    let k = 0;
    const rows = 9;
    const cols = 18;
    for (let lat = 0; lat <= rows; lat += 1) {
        const v = lat / rows;
        const band = Math.sin(v * Math.PI);
        const y = 200 + (v - 0.5) * 154;
        for (let lon = 0; lon <= cols; lon += 1) {
            const u = lon / cols;
            const x = 200 + Math.cos((u - 0.5) * Math.PI * 2.1) * 132 * band;
            if (!band || band < 0.15) continue;
            const jitter = (((lat * cols + lon) % 11) / 220) - 0.025;
            const op = 0.14 + (lat % 3) * 0.068 + jitter;
            dots.push(
                <circle
                    key={`d-${k}`}
                    cx={x}
                    cy={y}
                    r={lat % 2 === 0 ? 1 : 0.7}
                    fill={`rgba(255,255,255,${Math.min(0.72, Math.max(0.1, op))})`}
                />
            );
            k += 1;
        }
    }

    const motionCls = (classes) => (reduceMotion ? '' : classes);

    return (
        <div className={`relative inline-flex shrink-0 justify-start pointer-events-none select-none ${className ?? ''}`}>
            <div className={`${motionCls('hero-orb-breathe')}`}>
                <svg
                    viewBox="0 0 400 400"
                    className="h-[min(240px,68vw)] w-[min(240px,68vw)] overflow-visible sm:h-[min(280px,62vw)] sm:w-[min(280px,62vw)] lg:h-[min(360px,36vw)] lg:w-[min(360px,36vw)] lg:max-h-[400px] lg:max-w-[400px]"
                    aria-hidden
                >
                    <defs>
                        <radialGradient id={gradId} cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="rgba(6,10,22,1)" />
                            <stop offset="52%" stopColor="rgba(12,17,34,0.96)" />
                            <stop offset="100%" stopColor="rgba(20,26,42,0.25)" />
                        </radialGradient>
                        <filter id={filtId} x="-40%" y="-40%" width="180%" height="180%">
                            <feGaussianBlur stdDeviation="8" result="b" />
                            <feMerge>
                                <feMergeNode in="b" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    <g className={motionCls('hero-orb-core-pulse')}>
                        <circle cx="200" cy="200" r="168" fill={`url(#${gradId})`} />
                    </g>

                    <g className={motionCls('hero-orb-spin-reverse')}>{arcs}</g>

                    <g filter={`url(#${filtId})`} className={motionCls('hero-orb-line-shimmer')}>
                        <g className={motionCls('hero-orb-spin-reverse')} style={reduceMotion ? undefined : { animationDuration: '68s' }}>
                            <g className={motionCls('hero-orb-twinkle')}>{dots}</g>
                        </g>
                    </g>

                    <g className={`${motionCls('hero-orb-spin-slow hero-orb-line-shimmer hero-orb-dash-march')}`}>{lines}</g>

                    <g className={motionCls('hero-orb-wisp-drift')}>
                        <g className={motionCls('hero-orb-wisp-flow')}>
                            <path
                                d="M 200 92 Q 310 156 274 274 Q 240 348 154 294 Q 88 250 138 174 Q 168 120 200 92"
                                fill="none"
                                strokeLinecap="round"
                                stroke="rgba(255,253,248,0.11)"
                                strokeWidth="1.25"
                            />
                            <path
                                d="M 200 110 Q 88 164 142 274 Q 186 356 274 294 Q 338 240 274 154 Q 232 98 200 110"
                                fill="none"
                                strokeLinecap="round"
                                stroke="rgba(255,253,248,0.075)"
                                strokeWidth="0.85"
                            />
                        </g>
                    </g>
                </svg>
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_42%_40%,rgba(251,191,36,0.09),transparent_62%)]" />
            </div>
        </div>
    );
}

const PremiumHero = () => {
    const navigate = useNavigate();

    const reduceMotion = useSyncExternalStore(
        subscribeReducedMotion,
        snapshotReducedMotion,
        serverSnapshotReducedMotion
    );

    return (
        <section id="home" className="relative overflow-hidden pb-11 pt-[6.85rem] sm:pb-12 sm:pt-32 lg:pb-14 lg:pt-[8.15rem]">
            <div className="pointer-events-none absolute inset-0 bg-[#080a11]" />
            <div
                className="pointer-events-none absolute -left-[12%] -top-[28%] h-[64%] w-[62%] rounded-full bg-orange-400/13 blur-[100px]"
                aria-hidden
            />
            <div
                className="pointer-events-none absolute -bottom-[18%] -right-[8%] h-[52%] w-[54%] rounded-full bg-fuchsia-500/10 blur-[90px]"
                aria-hidden
            />
            <div
                className="pointer-events-none absolute left-[40%] top-[58%] h-[38%] w-[48%] -translate-x-1/2 rounded-full bg-indigo-500/07 blur-[86px]"
                aria-hidden
            />

            {/* Wider, tighter gutters — hero reads “full bleed” */}
            <div className="relative z-10 mx-auto w-full max-w-[1460px] px-4 sm:px-5 lg:px-7 xl:px-8">
                <div className="relative rounded-2xl p-px shadow-[0_42px_100px_-48px_rgba(0,0,0,0.82)] [background:linear-gradient(132deg,rgba(251,146,60,0.48)_0%,rgba(253,224,171,0.07)_28%,transparent_50%,transparent_58%,rgba(217,70,239,0.34)_100%)] lg:rounded-[1.6rem]">
                    <div className="rounded-[calc(1rem-1px)] bg-[#0e1016] px-6 py-10 sm:rounded-[calc(1.25rem-1px)] sm:py-11 md:py-12 lg:rounded-[calc(1.6rem-1px)] lg:px-10 lg:py-14 xl:px-12 xl:py-16">
                        <div className="grid grid-cols-1 gap-8 sm:gap-9 lg:grid-cols-[minmax(260px,min(36vw,400px))_1fr] lg:items-start lg:gap-x-10 xl:gap-x-12">
                            <div className="relative lg:self-start">
                                <HeroOrbVisual reduceMotion={reduceMotion} />
                            </div>

                            <div className="min-w-0 -mt-1 lg:-mt-0.5">
                                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-white/92 sm:text-xs">
                                    What is Hexenity?
                                </p>
                                <h1 className="hexenity-display mt-4 max-w-[22ch] text-[clamp(2.2rem,5.6vw,4.5rem)] font-bold leading-[1.04] tracking-[-0.035em] text-white lg:max-w-[19ch]">
                                    The Future of Your Digital Platform Is Here.
                                </h1>

                                <div className="relative mt-7 max-w-xl border-l-[3px] border-amber-400 pl-6 sm:mt-8 sm:pl-7 md:max-w-2xl">
                                    <p className="text-[15px] leading-[1.7] text-white/72 sm:text-lg sm:leading-relaxed md:text-xl">
                                        Hexenity is your external innovation partner—we design and ship{' '}
                                        <span className="font-medium text-white/88">
                                            apps, automation, branding, AI integrations,
                                        </span>{' '}
                                        and growth-ready systems—without draining your core team&apos;s bandwidth.
                                    </p>
                                </div>

                                <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-3.5">
                                    <button
                                        type="button"
                                        onClick={() => navigate('/hexenity/contact')}
                                        className="inline-flex items-center justify-center gap-2 bg-amber-400 px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.19em] text-neutral-950 transition hover:bg-amber-300 active:translate-y-[0.5px] sm:min-h-[52px] sm:px-8"
                                    >
                                        Book a strategy call
                                        <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                                    </button>
                                    <Link
                                        to="/hexenity/services"
                                        className="inline-flex min-h-[52px] items-center justify-center border border-white/[0.44] px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.19em] text-white transition hover:border-white hover:bg-white/[0.045] active:translate-y-[0.5px]"
                                    >
                                        Explore capabilities
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PremiumHero;
