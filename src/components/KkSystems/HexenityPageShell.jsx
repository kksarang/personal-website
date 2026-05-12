import React from 'react';
import { ArrowLeft } from 'lucide-react';

/** @param {'standard' | 'toolbar'} props.shellHeader — toolbar = back/actions only for full-page marketing heroes */
/** @param {'default' | 'saas-dark'} props.variant — saas-dark keeps correct dark backdrop in site light theme */
/** @param {'compact'|'balanced'|'spacious'} props.toolbarSpacing — padding below fixed site navbar when shellHeader is toolbar */
const HexenityPageShell = ({
    badge,
    title,
    subtitle,
    backLabel = 'Back',
    onBack,
    actions,
    children,
    shellHeader = 'standard',
    /** Use dark SaaS chrome that survives Hexenity light-mode background overrides */
    variant = 'default',
    toolbarSpacing = 'balanced',
}) => {
    const toolbarRow = (
        <div className="flex flex-wrap items-center justify-between gap-4">
            <button
                type="button"
                onClick={onBack}
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-slate-200 transition hover:border-indigo-300/45 hover:bg-indigo-400/10 hover:text-indigo-200"
            >
                <ArrowLeft className="h-4 w-4" />
                {backLabel}
            </button>
            {actions ? <div className="flex flex-wrap items-center gap-2">{actions}</div> : null}
        </div>
    );

    const toolbarTop =
        toolbarSpacing === 'compact'
            ? 'pt-28 lg:pt-32'
            : toolbarSpacing === 'spacious'
              ? 'pt-36 sm:pt-40 lg:pt-44'
              : 'pt-32 sm:pt-36 lg:pt-40';

    const topPad = shellHeader === 'toolbar' ? toolbarTop : 'pt-28';
    const chromeSurface = variant === 'saas-dark' ? 'hexenity-saas-shell-dark' : 'bg-[#070B17]';
    const bottomPad = shellHeader === 'toolbar' ? 'pb-20 lg:pb-24' : 'pb-24 lg:pb-28';

    return (
        <div className={`relative min-h-screen overflow-x-hidden ${chromeSurface} ${bottomPad} ${topPad} text-white`}>
            <div className="pointer-events-none absolute inset-0">
                <div className="hexenity-ambient absolute inset-0" />
                <div className="absolute -left-20 top-6 h-72 w-72 rounded-full bg-indigo-500/15 blur-[70px]" />
                <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-[75px]" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                {shellHeader === 'toolbar' ? (
                    <div className="mb-4 border-b border-white/10 pb-3">{toolbarRow}</div>
                ) : (
                    <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-slate-950/60 p-6 md:p-10">
                        <div className="mb-8">{toolbarRow}</div>

                        {badge ? (
                            <div className="mb-5 inline-flex items-center rounded-full border border-indigo-300/35 bg-indigo-400/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-indigo-200">
                                {badge}
                            </div>
                        ) : null}

                        <h1 className="max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
                        {subtitle ? <p className="mt-5 max-w-3xl text-lg text-slate-300">{subtitle}</p> : null}

                        <div className="mt-8 grid gap-3 sm:grid-cols-3">
                            <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                                <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Delivery style</p>
                                <p className="mt-1 text-sm font-semibold text-white">Milestone-first execution</p>
                            </div>
                            <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                                <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Communication</p>
                                <p className="mt-1 text-sm font-semibold text-white">Weekly product check-ins</p>
                            </div>
                            <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                                <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Focus</p>
                                <p className="mt-1 text-sm font-semibold text-white">Business outcomes first</p>
                            </div>
                        </div>
                    </div>
                )}

                <div className={shellHeader === 'standard' ? 'mt-8' : ''}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default HexenityPageShell;
