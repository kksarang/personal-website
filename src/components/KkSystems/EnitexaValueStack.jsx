import React from 'react';
import { BadgeCheck, Handshake, Layers3, MessageSquareText, Rocket, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const valueCards = [
    {
        title: 'Business-First Execution',
        description: 'We map your goals to milestones, so every sprint ships measurable value.',
        icon: Layers3,
    },
    {
        title: 'Transparent Collaboration',
        description: 'Regular updates, clear ownership, and fast communication at every stage.',
        icon: MessageSquareText,
    },
    {
        title: 'Long-Term Reliability',
        description: 'Secure code practices, maintainable systems, and post-launch support.',
        icon: Shield,
    },
];

const model = ['Discovery Call', 'Technical Proposal', 'Build & Iterate', 'Launch & Support'];

const EnitexaValueStack = () => {
    const navigate = useNavigate();

    return (
        <section className="relative bg-[#0B0F19] py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-3xl">
                        <div className="pf-mono mb-6 flex items-center gap-4 text-[11px] uppercase tracking-[0.35em] text-slate-400">
                            <span className="text-indigo-300">(02)</span>
                            <span className="flex items-center gap-2">
                                <Handshake className="h-3.5 w-3.5" />
                                Why teams choose Enitexa.Ai
                            </span>
                        </div>
                        <h2 className="pf-display mt-5 text-[clamp(1.7rem,3.2vw,2.5rem)] font-bold leading-[1.05] text-white">
                            Professional execution with <span className="pf-outline-text">clear accountability.</span>
                        </h2>
                    </div>
                    <button
                        onClick={() => navigate('/enitexa.ai/contact')}
                        className="group inline-flex items-center gap-2 self-start rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all duration-500 hover:border-white hover:bg-white hover:text-black"
                    >
                        Talk to the team
                        <Rocket className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                    </button>
                </div>

                <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
                    <div className="grid gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2">
                        {valueCards.map((card, idx) => (
                            <article
                                key={card.title}
                                className={`group bg-[#0B0F19] p-8 transition-colors duration-500 hover:bg-[#10152a] ${idx === 0 ? 'sm:col-span-2' : ''}`}
                            >
                                <div className="mb-8 flex items-start justify-between">
                                    <span className="pf-display text-5xl font-extrabold text-white/[0.07] transition-colors duration-500 group-hover:text-indigo-400/40">
                                        0{idx + 1}
                                    </span>
                                    <card.icon className="h-6 w-6 text-indigo-300 transition-transform duration-500 group-hover:-translate-y-1" />
                                </div>
                                <h3 className="pf-display text-2xl font-bold text-white">{card.title}</h3>
                                <p className="mt-2 text-slate-300">{card.description}</p>
                            </article>
                        ))}
                    </div>

                    <div className="rounded-3xl border border-white/[0.08] bg-[#0B0F19] p-7">
                        <p className="pf-mono text-[10px] uppercase tracking-[0.3em] text-slate-400">Engagement Model</p>
                        <div className="mt-6 space-y-0">
                            {model.map((step, idx) => (
                                <div key={step} className="group flex items-center gap-4 border-b border-white/[0.07] py-4 last:border-b-0">
                                    <span className="pf-mono text-xs text-indigo-300">0{idx + 1}</span>
                                    <span className="pf-display text-base font-semibold text-white transition-transform duration-300 group-hover:translate-x-1">
                                        {step}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 flex items-start gap-2.5 rounded-2xl border border-emerald-300/25 bg-emerald-300/[0.07] p-4 text-sm text-emerald-100">
                            <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0" />
                            <p>No vague promises. You get milestones, delivery dates, and ownership clarity.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EnitexaValueStack;
