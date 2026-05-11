import React from 'react';
import { ArrowRight, CheckCircle2, Clock3, ShieldCheck, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PremiumHero = () => {
    const navigate = useNavigate();
    const trustItems = [
        { label: 'Executive Response', value: '< 24h', icon: Clock3 },
        { label: 'Delivery Standard', value: 'Enterprise-grade', icon: ShieldCheck },
        { label: 'Client Relationship', value: 'Founder-level access', icon: Users },
    ];

    return (
        <section id="home" className="relative overflow-hidden bg-[#060916] pb-20 pt-40">
            <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.16),transparent_45%)]" />
                <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-indigo-500/15 blur-[120px]" />
                <div className="absolute -right-20 top-8 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                    <div>
                        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-300/30 bg-indigo-400/10 px-4 py-2">
                            <span className="h-2 w-2 rounded-full bg-indigo-300" />
                            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-200">Global Technology & Product Partner</span>
                        </div>

                        <h1 className="mb-6 text-5xl font-black leading-[1.05] tracking-tight text-white md:text-6xl">
                            Built for ambitious founders,
                            <span className="block text-indigo-300">family offices, and enterprise leaders.</span>
                        </h1>

                        <p className="mb-9 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
                            We design and deliver high-impact mobile platforms, enterprise web systems, and custom ERP ecosystems for clients across India, the Middle East, Canada, and the United States.
                        </p>

                        <div className="flex flex-col gap-4 sm:flex-row">
                            <button
                                onClick={() => navigate('/hexenity/contact')}
                                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-indigo-500"
                            >
                                Book executive consultation
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </button>
                            <button
                                onClick={() => navigate('/hexenity/work')}
                                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 text-base font-semibold text-white transition hover:border-indigo-300/40 hover:bg-white/10"
                            >
                                View case studies
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
                    </div>

                    <div className="relative">
                        <div className="rounded-[1.8rem] border border-white/15 bg-slate-950/70 p-5">
                            <div className="mb-4 flex items-center justify-between">
                                <span className="text-xs uppercase tracking-[0.18em] text-indigo-300">Executive Delivery Snapshot</span>
                                <span className="rounded-full border border-emerald-300/30 bg-emerald-300/15 px-2.5 py-1 text-[10px] uppercase tracking-widest text-emerald-300">
                                    Confidential
                                </span>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
                                <div className="mb-3 text-xs uppercase tracking-widest text-slate-400">
                                    Strategic execution board
                                </div>
                                <div className="space-y-3">
                                    {[
                                        ['Business Discovery & Risk Review', 'Completed'],
                                        ['Architecture & UX Validation', 'In Review'],
                                        ['Core Engineering Sprint', 'In Progress'],
                                        ['Security Audit + Rollout', 'Upcoming'],
                                    ].map(([label, state]) => (
                                        <div key={label} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                                            <span className="text-sm text-white">{label}</span>
                                            <span className={`text-xs ${state === 'Completed' ? 'text-emerald-300' : state === 'In Review' ? 'text-cyan-300' : state === 'In Progress' ? 'text-indigo-300' : 'text-slate-400'}`}>
                                                {state}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-4 grid grid-cols-3 gap-3">
                                {[
                                        ['Global', 'Client Base'],
                                        ['8+', 'Years'],
                                        ['Long-Term', 'Partnerships'],
                                ].map(([value, label]) => (
                                    <div key={label} className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
                                        <p className="text-xl font-black text-white">{value}</p>
                                        <p className="text-[11px] uppercase tracking-wide text-slate-400">{label}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-4 rounded-xl border border-indigo-300/20 bg-indigo-400/10 p-3 text-sm text-indigo-100">
                                <p className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Dedicated leadership visibility, structured communication, and post-launch optimization support.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PremiumHero;
