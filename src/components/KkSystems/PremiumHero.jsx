import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Clock3, Cpu, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PremiumHero = () => {
    const navigate = useNavigate();
    const [mouse, setMouse] = useState({ x: 50, y: 30 });

    const particles = useMemo(
        () =>
            Array.from({ length: 16 }, (_, i) => ({
                id: i,
                left: `${(i * 13) % 100}%`,
                top: `${(i * 17) % 95}%`,
                delay: (i % 5) * 0.6,
                duration: 4 + (i % 4),
            })),
        []
    );

    const trustItems = [
        { label: 'Response Window', value: '< 24h', icon: Clock3 },
        { label: 'Delivery Model', value: 'Enterprise-grade', icon: ShieldCheck },
        { label: 'Innovation Layer', value: 'Apps + AI + Growth', icon: Cpu },
    ];

    return (
        <section
            id="home"
            className="relative overflow-hidden bg-[#060916] pb-24 pt-36 md:pt-40"
            onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                setMouse({ x, y });
            }}
        >
            <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.16),transparent_45%)]" />
                <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-indigo-500/15 blur-[120px]" />
                <div className="absolute -right-20 top-8 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
                <div className="absolute left-[40%] top-[30%] h-96 w-96 rounded-full bg-violet-500/10 blur-[150px]" />
                <motion.div
                    className="absolute h-56 w-56 rounded-full bg-indigo-500/20 blur-[90px]"
                    animate={{ left: `calc(${mouse.x}% - 7rem)`, top: `calc(${mouse.y}% - 7rem)` }}
                    transition={{ type: 'spring', stiffness: 70, damping: 20 }}
                />
                {particles.map((particle) => (
                    <motion.span
                        key={particle.id}
                        className="absolute h-1.5 w-1.5 rounded-full bg-indigo-300/40"
                        style={{ left: particle.left, top: particle.top }}
                        animate={{ y: [0, -12, 0], opacity: [0.18, 0.55, 0.18] }}
                        transition={{
                            repeat: Infinity,
                            duration: particle.duration,
                            ease: 'easeInOut',
                            delay: particle.delay,
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid items-start gap-10 xl:grid-cols-[1.05fr_0.95fr] xl:gap-14">
                    <motion.div
                        className="max-w-2xl"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-300/30 bg-indigo-400/10 px-4 py-2">
                            <span className="h-2 w-2 rounded-full bg-indigo-300" />
                            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-200">External Technology & Innovation Partner</span>
                        </div>

                        <h1 className="mb-6 text-5xl font-black leading-[1.03] tracking-tight text-white sm:text-6xl xl:text-[4.2rem]">
                            Building digital systems
                            <span className="block text-indigo-300">for modern businesses.</span>
                        </h1>

                        <p className="mb-9 max-w-xl text-lg leading-relaxed text-slate-300 md:text-xl">
                            Hexenity helps corporate businesses, startups, agencies, and non-technical companies build applications, automation systems, AI integrations, branding, and digital growth engines without requiring an internal tech team.
                        </p>

                        <div className="flex flex-col gap-4 sm:flex-row">
                            <button
                                onClick={() => navigate('/hexenity/contact')}
                                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-indigo-500 sm:w-auto"
                            >
                                Start digital transformation
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </button>
                            <button
                                onClick={() => navigate('/hexenity/services')}
                                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 text-base font-semibold text-white transition hover:border-indigo-300/40 hover:bg-white/10 sm:w-auto"
                            >
                                Explore all services
                            </button>
                        </div>

                        <div className="mt-10 grid gap-3 sm:grid-cols-3">
                            {trustItems.map((item) => (
                                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                    <item.icon className="mb-3 h-5 w-5 text-indigo-300" />
                                    <p className="text-sm font-semibold text-white">{item.value}</p>
                                    <p className="text-xs uppercase tracking-wide text-slate-400">{item.label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 flex flex-wrap gap-2">
                            {['Web', 'Mobile', 'AI Integrations', 'Automation', 'Branding', 'Digital Growth'].map((chip) => (
                                <span key={chip} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-slate-300">
                                    {chip}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative mx-auto w-full max-w-xl xl:mx-0 xl:max-w-none xl:pt-2"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                    >
                        <div className="rounded-[1.8rem] border border-white/15 bg-slate-950/70 p-5 md:p-6">
                            <div className="mb-4 flex items-center justify-between">
                                <span className="text-xs uppercase tracking-[0.18em] text-indigo-300">Innovation Command Center</span>
                                <span className="rounded-full border border-emerald-300/30 bg-emerald-300/15 px-2.5 py-1 text-[10px] uppercase tracking-widest text-emerald-300">
                                    Live
                                </span>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
                                <div className="mb-3 text-xs uppercase tracking-widest text-slate-400">
                                    Active systems board
                                </div>
                                <div className="space-y-3">
                                    {[
                                        ['Digital Presence Engine', 'Completed'],
                                        ['Application Build Sprint', 'In Progress'],
                                        ['Automation Layer Setup', 'In Review'],
                                        ['Growth & Revenue Pipeline', 'Upcoming'],
                                    ].map(([label, state]) => (
                                        <div key={label} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                                            <span className="text-sm text-white md:text-[13px]">{label}</span>
                                            <span className={`text-xs ${state === 'Completed' ? 'text-emerald-300' : state === 'In Review' ? 'text-cyan-300' : state === 'In Progress' ? 'text-indigo-300' : 'text-slate-400'}`}>
                                                {state}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-4 grid grid-cols-3 gap-3">
                                {[
                                        ['10+', 'Solutions'],
                                        ['Multi', 'Industries'],
                                        ['One', 'Partner'],
                                ].map(([value, label]) => (
                                    <div key={label} className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
                                        <p className="text-xl font-black text-white">{value}</p>
                                        <p className="text-[11px] uppercase tracking-wide text-slate-400">{label}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-4 rounded-xl border border-indigo-300/20 bg-indigo-400/10 p-3 text-sm text-indigo-100">
                                <p className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Hexenity acts as your external execution team for technology, automation, branding, and growth.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PremiumHero;
