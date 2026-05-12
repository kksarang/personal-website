import React, { useCallback, useEffect, useId, useRef, useState, useSyncExternalStore } from 'react';
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

/** Animated line-field model + subtle pointer-follow parallax */
function HeroOrbVisual({ className, reduceMotion, pointerPan }) {
    const uid = useId();
    const gid = uid.replace(/:/g, '');
    const gradId = `heroOrbCore-${gid}`;
    const filtId = `heroOrbGlow-${gid}`;
    const { nx, ny } = pointerPan ?? { nx: 0, ny: 0 };

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

    const lightX = 50 + nx * 26;
    const lightY = 46 + ny * 20;

    const parallaxTransform =
        reduceMotion || (nx === 0 && ny === 0)
            ? undefined
            : `perspective(980px) rotateX(${(-ny * 7.8).toFixed(2)}deg) rotateY(${(nx * 9.2).toFixed(2)}deg) translate3d(${(nx * 13).toFixed(1)}px, ${(ny * 11).toFixed(1)}px, ${(nx * nx + ny * ny) * 8}px)`;

    return (
        <div className={`relative inline-flex shrink-0 justify-start pointer-events-none select-none ${className ?? ''}`}>
            <div className={`${motionCls('hero-orb-breathe')}`}>
                <div
                    className={`relative mx-auto rounded-full ${reduceMotion ? '' : 'motion-safe:transition-[transform] motion-safe:duration-100 motion-safe:ease-out'}`}
                    style={{
                        transform: parallaxTransform,
                        transformOrigin: '50% 50%',
                        transformStyle: 'preserve-3d',
                    }}
                >
                    <svg
                        viewBox="0 0 400 400"
                        className="h-[min(276px,74vw)] w-[min(276px,74vw)] overflow-visible sm:h-[min(318px,66vw)] sm:w-[min(318px,66vw)] lg:h-[min(412px,40vw)] lg:w-[min(412px,40vw)] lg:max-h-[458px] lg:max-w-[458px]"
                        aria-hidden
                    >
                        <defs>
                            <linearGradient id={`heroOrbWord-${gid}`} x1="120" y1="200" x2="280" y2="200" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="rgba(255,252,246,0.55)" />
                                <stop offset="35%" stopColor="rgba(255,255,255,0.95)" />
                                <stop offset="55%" stopColor="rgba(248,249,251,0.88)" />
                                <stop offset="100%" stopColor="rgba(199,207,229,0.42)" />
                            </linearGradient>
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

                        <g textAnchor="middle" className={motionCls('hero-orb-mark-pulse')} style={{ isolation: 'isolate' }}>
                            <text
                                x="200"
                                y="202"
                                dominantBaseline="central"
                                fill={`url(#heroOrbWord-${gid})`}
                                stroke="rgba(251,191,36,0.24)"
                                strokeWidth="1.1"
                                paintOrder="stroke fill"
                                style={{
                                    fontFamily: "'Space Grotesk','Inter',system-ui,sans-serif",
                                    fontWeight: 700,
                                    letterSpacing: '-0.03em',
                                }}
                                fontSize="56"
                            >
                                Hexenity
                            </text>
                        </g>

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
                    <div
                        className="pointer-events-none absolute inset-0 mix-blend-soft-light rounded-full"
                        style={{
                            background: `radial-gradient(circle at ${lightX}% ${lightY}%, rgba(251,191,36,0.2) 0%, transparent 54%)`,
                        }}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_42%_40%,rgba(251,191,36,0.07),transparent_62%)]" />
                </div>
            </div>
        </div>
    );
}

const PremiumHero = () => {
    const navigate = useNavigate();
    const interactionRef = useRef(null);
    const rafRef = useRef(0);
    const pendingPointerRef = useRef({ nx: 0, ny: 0 });
    const [pointerPan, setPointerPan] = useState({ nx: 0, ny: 0 });

    const reduceMotion = useSyncExternalStore(
        subscribeReducedMotion,
        snapshotReducedMotion,
        serverSnapshotReducedMotion
    );

    const flushPointer = useCallback(() => {
        rafRef.current = 0;
        setPointerPan({ ...pendingPointerRef.current });
    }, []);

    const onHeroPointerMove = useCallback(
        (e) => {
            if (reduceMotion) return;
            const el = interactionRef.current;
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const nx = Math.max(-1, Math.min(1, ((e.clientX - rect.left) / rect.width) * 2 - 1));
            const ny = Math.max(-1, Math.min(1, ((e.clientY - rect.top) / rect.height) * 2 - 1));
            pendingPointerRef.current = { nx, ny };
            if (!rafRef.current) {
                rafRef.current = requestAnimationFrame(flushPointer);
            }
        },
        [reduceMotion, flushPointer]
    );

    const onHeroPointerLeave = useCallback(() => {
        pendingPointerRef.current = { nx: 0, ny: 0 };
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = 0;
        setPointerPan({ nx: 0, ny: 0 });
    }, []);

    useEffect(
        () => () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        },
        []
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

            <div className="relative z-10 mx-auto w-full max-w-[1460px] px-4 sm:px-5 lg:px-7 xl:px-8">
                <div className="relative rounded-2xl p-px shadow-[0_42px_100px_-48px_rgba(0,0,0,0.82)] [background:linear-gradient(132deg,rgba(251,146,60,0.48)_0%,rgba(253,224,171,0.07)_28%,transparent_50%,transparent_58%,rgba(217,70,239,0.34)_100%)] lg:rounded-[1.6rem]">
                    <div
                        ref={interactionRef}
                        role="presentation"
                        onMouseMove={onHeroPointerMove}
                        onMouseLeave={onHeroPointerLeave}
                        className="rounded-[calc(1rem-1px)] bg-[#0e1016] px-6 py-10 sm:rounded-[calc(1.25rem-1px)] sm:py-11 md:py-12 lg:rounded-[calc(1.6rem-1px)] lg:px-10 lg:py-14 xl:px-12 xl:py-16"
                    >
                        <div className="grid grid-cols-1 gap-8 sm:gap-9 lg:grid-cols-[minmax(280px,min(42vw,470px))_1fr] lg:items-start lg:gap-x-10 xl:gap-x-12">
                            <div className="relative lg:self-start">
                                <HeroOrbVisual reduceMotion={reduceMotion} pointerPan={pointerPan} />
                            </div>

                            <div className="min-w-0 -mt-1 lg:-mt-0.5">
                                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-white/92 sm:text-xs">
                                    What is Hexenity?
                                </p>
                                <h1 className="hexenity-display mt-4 max-w-[22ch] text-[clamp(2.2rem,5.6vw,4.5rem)] font-bold leading-[1.04] tracking-[-0.035em] text-white lg:max-w-[19ch]">
                                    The Future of Your Digital Platform Is Here.
                                </h1>

                                <div className="relative mt-7 max-w-2xl border-l-[3px] border-amber-400 pl-6 sm:mt-8 sm:pl-7 lg:max-w-[46rem]">
                                    <div className="text-[15px] leading-[1.75] text-white/72 sm:text-lg sm:leading-relaxed md:text-[17px]">
                                        <p>
                                            Hexenity partners with businesses to deliver scalable digital solutions including app development, web
                                            platforms, branding, UI/UX, AI integrations, automation, and growth systems — acting as an extended technology
                                            and innovation team for companies that want to scale efficiently.
                                        </p>
                                    </div>
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
