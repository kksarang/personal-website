import React from 'react';
import { ArrowLeft } from 'lucide-react';

/** @param {'standard' | 'toolbar'} props.shellHeader — toolbar = back/actions only for full-page marketing heroes */
/** @param {'default' | 'saas-dark'} props.variant — saas-dark keeps correct dark backdrop in site light theme */
/** @param {'compact'|'balanced'|'spacious'} props.toolbarSpacing — padding below fixed site navbar when shellHeader is toolbar */
const EnitexaPageShell = ({
    badge,
    title,
    subtitle,
    backLabel = 'Back',
    onBack,
    actions,
    children,
    shellHeader = 'standard',
    /** Use dark SaaS chrome that survives Enitexa.Ai light-mode background overrides */
    variant = 'default',
    toolbarSpacing = 'balanced',
}) => {
    const toolbarRow = (
        <div className="flex flex-wrap items-center justify-between gap-4">
            <button
                type="button"
                onClick={onBack}
                className="group pf-mono inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.22em] text-slate-300 transition-all duration-300 hover:border-indigo-300/50 hover:text-white"
            >
                <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
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
    const chromeSurface = variant === 'saas-dark' ? 'enitexa-saas-shell-dark' : 'bg-[#070B17]';
    const bottomPad = shellHeader === 'toolbar' ? 'pb-20 lg:pb-24' : 'pb-24 lg:pb-28';

    return (
        <div className={`relative min-h-screen overflow-x-hidden ${chromeSurface} ${bottomPad} ${topPad} text-white`}>
            <div className="pointer-events-none absolute inset-0">
                <div className="enitexa-ambient absolute inset-0" />
                <div className="pf-dotgrid absolute inset-0 opacity-40" />
                <div className="absolute -left-20 top-6 h-72 w-72 rounded-full bg-indigo-500/15 blur-[70px]" />
                <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[75px]" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                {shellHeader === 'toolbar' ? (
                    <div className="mb-4 border-b border-white/10 pb-3">{toolbarRow}</div>
                ) : (
                    <div className="pb-4 pt-6 md:pt-10">
                        <div className="mb-10">{toolbarRow}</div>

                        <div className="pf-mono mb-6 flex items-center gap-4 text-[11px] uppercase tracking-[0.35em] text-white/35">
                            {badge ? <span className="text-indigo-300">({badge})</span> : null}
                            <span className="h-px flex-1 bg-white/[0.08]" />
                        </div>

                        <h1 className="pf-display max-w-4xl text-[clamp(1.9rem,4vw,3.4rem)] font-bold leading-[1.02] text-white">
                            {title}
                        </h1>
                        {subtitle ? (
                            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">{subtitle}</p>
                        ) : null}

                        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-3">
                            {[
                                ['Delivery style', 'Milestone-first execution'],
                                ['Communication', 'Weekly product check-ins'],
                                ['Focus', 'Business outcomes first'],
                            ].map(([label, value]) => (
                                <div key={label} className="bg-[#070B17] px-6 py-5">
                                    <p className="pf-mono text-[9px] uppercase tracking-[0.25em] text-slate-500">
                                        {label}
                                    </p>
                                    <p className="mt-2 text-sm font-semibold text-white">{value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className={shellHeader === 'standard' ? 'mt-10' : ''}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default EnitexaPageShell;
