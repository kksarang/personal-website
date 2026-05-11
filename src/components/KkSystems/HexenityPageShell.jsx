import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const HexenityPageShell = ({
    badge,
    title,
    subtitle,
    backLabel = 'Back',
    onBack,
    actions,
    children,
}) => {
    return (
        <div className="relative min-h-screen overflow-hidden bg-[#070B17] pt-28 pb-20 text-white">
            <div className="pointer-events-none absolute inset-0">
                <div className="hexenity-ambient absolute inset-0" />
                <div className="hexenity-noise absolute inset-0" />
                <div className="hexenity-grid absolute inset-0" />
                <div className="absolute -left-32 top-6 h-96 w-96 rounded-full bg-indigo-500/20 blur-[120px]" />
                <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-cyan-400/15 blur-[130px]" />
                <div className="absolute left-1/2 top-40 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[160px]" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55 }}
                    className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-slate-950/60 p-6 backdrop-blur-xl md:p-10"
                >
                    <div className="pointer-events-none absolute -right-16 top-0 h-52 w-52 rounded-full bg-indigo-500/20 blur-3xl" />
                    <div className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
                    <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
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
                </motion.div>

                <motion.div
                    className="mt-8"
                    initial={{ opacity: 0, y: 26, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
                >
                    {children}
                </motion.div>
            </div>
        </div>
    );
};

export default HexenityPageShell;
