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

const HexenityValueStack = () => {
    const navigate = useNavigate();

    return (
        <section className="relative bg-[#0B0F19] py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-3xl">
                        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-indigo-200">
                            <Handshake className="h-3.5 w-3.5" />
                            Why teams choose Hexenity
                        </span>
                        <h2 className="mt-5 text-4xl font-black leading-tight text-white md:text-5xl">
                            Professional execution with clear accountability
                        </h2>
                    </div>
                    <button
                        onClick={() => navigate('/hexenity/contact')}
                        className="inline-flex items-center gap-2 self-start rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-indigo-300/40 hover:bg-indigo-400/10"
                    >
                        Talk to the team
                        <Rocket className="h-4 w-4" />
                    </button>
                </div>

                <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
                    <div className="grid gap-5 sm:grid-cols-2">
                        {valueCards.map((card, idx) => (
                            <article
                                key={card.title}
                                className={`rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-indigo-300/35 ${idx === 0 ? 'sm:col-span-2' : ''}`}
                            >
                                <card.icon className="mb-5 h-8 w-8 text-indigo-300" />
                                <h3 className="text-2xl font-bold text-white">{card.title}</h3>
                                <p className="mt-2 text-slate-300">{card.description}</p>
                            </article>
                        ))}
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-slate-950/65 p-6">
                        <p className="text-xs uppercase tracking-[0.18em] text-slate-300">Engagement Model</p>
                        <div className="mt-5 space-y-3">
                            {model.map((step, idx) => (
                                <div key={step} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5">
                                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-indigo-500/20 text-xs font-bold text-indigo-100">
                                        {idx + 1}
                                    </span>
                                    <span className="text-sm text-white">{step}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-5 rounded-xl border border-emerald-300/30 bg-emerald-300/10 p-3 text-sm text-emerald-100">
                            <p className="inline-flex items-center gap-2"><BadgeCheck className="h-4 w-4" /> No vague promises. You get milestones, delivery dates, and ownership clarity.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HexenityValueStack;
