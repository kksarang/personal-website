import React, { useId } from 'react';
import { ArrowRight, BrainCircuit, Layers, Smartphone } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import HexenityMark from './HexenityMark';

/** Brand emblem: hexagon mark ringed by rotating circular text + floating chips */
const HeroEmblem = () => {
    const uid = useId().replace(/:/g, '');
    const pathId = `heroRing-${uid}`;

    return (
        <div className="relative flex items-center justify-center select-none" aria-hidden="true">
            {/* Soft glow backdrop */}
            <div className="absolute h-[420px] w-[420px] rounded-full bg-indigo-500/[0.12] blur-[90px]" />
            <div className="absolute h-[260px] w-[260px] rounded-full bg-fuchsia-500/[0.08] blur-[70px]" />

            {/* Thin concentric rings */}
            <div className="absolute h-[380px] w-[380px] rounded-full border border-white/[0.05]" />
            <div className="absolute h-[300px] w-[300px] rounded-full border border-white/[0.08]" />
            <div className="absolute h-[300px] w-[300px] rounded-full border-t border-indigo-400/50 pf-spin-slow" />

            {/* Rotating circular text */}
            <svg viewBox="0 0 400 400" className="pf-spin-slower h-[340px] w-[340px]">
                <defs>
                    <path id={pathId} d="M 200,200 m -160,0 a 160,160 0 1,1 320,0 a 160,160 0 1,1 -320,0" />
                </defs>
                <text className="pf-mono fill-white/35" style={{ fontSize: '13.5px', letterSpacing: '0.42em' }}>
                    <textPath href={`#${pathId}`}>
                        HEXENITY · DIGITAL &amp; SOFTWARE SOLUTIONS · APPS · AI · ERP · GROWTH ·
                    </textPath>
                </text>
            </svg>

            {/* Center mark */}
            <div className="absolute flex flex-col items-center gap-4">
                <HexenityMark size={110} withGlow />
                <p className="pf-display text-2xl font-bold tracking-tight text-white">
                    Hexenity<span className="text-indigo-400">.</span>
                </p>
            </div>

            {/* Floating capability chips */}
            <div className="pf-float absolute -left-3 top-14 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-sm">
                <Smartphone className="h-3.5 w-3.5 text-indigo-300" />
                <span className="pf-mono text-[9px] uppercase tracking-[0.2em] text-white/70">Apps</span>
            </div>
            <div className="pf-float absolute -right-5 top-1/2 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-sm [animation-delay:1.2s]">
                <BrainCircuit className="h-3.5 w-3.5 text-fuchsia-300" />
                <span className="pf-mono text-[9px] uppercase tracking-[0.2em] text-white/70">AI</span>
            </div>
            <div className="pf-float absolute bottom-12 left-6 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-sm [animation-delay:2.1s]">
                <Layers className="h-3.5 w-3.5 text-violet-300" />
                <span className="pf-mono text-[9px] uppercase tracking-[0.2em] text-white/70">ERP</span>
            </div>
        </div>
    );
};

const PremiumHero = () => {
    const navigate = useNavigate();

    return (
        <section
            id="home"
            className="hexenity-premium-hero relative flex min-h-[100svh] items-center overflow-hidden pb-14 pt-32 sm:pt-32"
        >
            <div className="pointer-events-none absolute inset-0 bg-[#05060c]" />
            <div className="pf-dotgrid pointer-events-none absolute inset-0" aria-hidden />
            <div
                className="pointer-events-none absolute -left-[12%] -top-[28%] h-[64%] w-[62%] rounded-full bg-indigo-500/[0.14] blur-[110px]"
                aria-hidden
            />
            <div
                className="pointer-events-none absolute -bottom-[18%] -right-[8%] h-[52%] w-[54%] rounded-full bg-fuchsia-500/10 blur-[100px]"
                aria-hidden
            />

            <div className="relative z-10 mx-auto w-full max-w-[90rem] px-6 sm:px-10 lg:px-16">
                {/* Meta strip */}
                <div className="pf-mono mb-10 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-white/35">
                    <span>Digital & Software Solutions</span>
                    <span className="hidden sm:flex items-center gap-2">
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        </span>
                        Taking new projects
                    </span>
                </div>

                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_minmax(300px,460px)] lg:gap-16">
                    <div className="min-w-0">
                        <p className="pf-mono text-[11px] uppercase tracking-[0.4em] text-indigo-300">
                            Hexenity — Your extended tech team
                        </p>
                        <h1 className="pf-display mt-6 text-[clamp(1.9rem,4vw,3.6rem)] font-extrabold leading-[1.02] text-white">
                            We build the
                            <br />
                            <span className="pf-outline-text">digital platforms</span>
                            <br />
                            <span className="pf-gradient-text">businesses run on.</span>
                        </h1>

                        <p className="mt-8 max-w-xl text-base leading-relaxed text-white/55 sm:text-lg">
                            App development, web platforms, branding, UI/UX, AI integrations,
                            automation, and growth systems — one unified partner for companies
                            that want to scale efficiently.
                        </p>

                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                            <button
                                type="button"
                                onClick={() => navigate('/hexenity/contact')}
                                data-cursor="Book"
                                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white bg-white px-8 py-4 text-sm font-semibold text-black transition-all duration-500 hover:bg-transparent hover:text-white"
                            >
                                Book a strategy call
                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                            <Link
                                to="/hexenity/services"
                                className="hexenity-premium-hero-secondary inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.3] px-8 py-4 text-sm font-semibold text-white transition-all duration-500 hover:border-white hover:bg-white/[0.045]"
                            >
                                Explore capabilities
                            </Link>
                        </div>

                        {/* Stats row */}
                        <div className="mt-14 flex flex-wrap gap-8 border-t border-white/[0.08] pt-8 sm:gap-12">
                            {[
                                ['20+', 'Products shipped'],
                                ['05+', 'Years of craft'],
                                ['360°', 'Partner model'],
                            ].map(([value, label]) => (
                                <div key={label}>
                                    <p className="pf-display text-2xl font-bold text-white sm:text-3xl">{value}</p>
                                    <p className="pf-mono mt-1.5 text-[9px] uppercase tracking-[0.25em] text-white/35">
                                        {label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative hidden min-h-[440px] items-center justify-center lg:flex">
                        <HeroEmblem />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PremiumHero;
