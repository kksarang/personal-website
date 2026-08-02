import React from 'react';
import { motion as Motion } from 'framer-motion';
import { ArrowRight, BrainCircuit, Building2, CheckCircle2, Layers3, Rocket, ShieldCheck, Sparkles, Workflow, Bot, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import EnitexaPageShell from '../../components/KkSystems/EnitexaPageShell';

const servicePillars = [
    {
        title: 'Build',
        description: 'From concept to production-ready mobile and web products.',
        points: ['Product discovery', 'UI/UX + architecture', 'Engineering delivery'],
        icon: Rocket,
    },
    {
        title: 'Optimize',
        description: 'Stabilize and improve existing systems for speed and reliability.',
        points: ['Legacy rescue', 'Refactoring', 'Performance tuning'],
        icon: Workflow,
    },
    {
        title: 'Scale',
        description: 'Expand systems and operations with enterprise-ready structure.',
        points: ['ERP modules', 'Cloud infra', 'Governance'],
        icon: Building2,
    },
];

const differentiators = [
    'Founder-level ownership across project lifecycle',
    'Milestone-driven delivery with transparent communication',
    'Security-aware architecture and maintainable code standards',
    'Flexible engagement for startups and established teams',
];

const platformExtensions = [
    {
        title: 'Enitexa.Ai AI',
        description: 'An interactive assistant experience for architecture guidance, workflow ideation, and technical direction.',
        points: ['AI chat interface', 'Mode-based support', 'Project planning assistance'],
        icon: Bot,
        href: '/enitexa.ai/ai',
        cta: 'Open Enitexa.Ai AI',
    },
    {
        title: 'Enitexa.Ai SaaS',
        description: 'A practical SaaS foundation for business operations, reporting, and process standardization.',
        points: ['Operational dashboards', 'Reporting modules', 'Scalable platform model'],
        icon: BarChart3,
        href: '/enitexa.ai/saas',
        cta: 'View SaaS Details',
    },
];

export default function CoreEnitexa() {
    const navigate = useNavigate();

    return (
        <EnitexaPageShell
            badge="Core Enitexa.Ai"
            title="How Enitexa.Ai works as your execution partner"
            subtitle="A practical model that combines strategy, engineering, and operations so your digital products launch faster without sacrificing quality."
            backLabel="Back to Home"
            onBack={() => navigate('/enitexa.ai')}
            actions={(
                <button
                    onClick={() => navigate('/enitexa.ai/contact')}
                    className="inline-flex items-center gap-2 rounded-full border border-indigo-300/35 bg-indigo-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-indigo-100 transition hover:bg-indigo-500/30"
                >
                    Start Conversation
                    <ArrowRight className="h-4 w-4" />
                </button>
            )}
        >
            <div className="space-y-20">
                <section>
                    <div className="pf-mono mb-2 flex items-center gap-4 text-[11px] uppercase tracking-[0.35em] text-white/35">
                        <span className="text-indigo-300">(01)</span>
                        <span>Operating Model</span>
                        <span className="h-px flex-1 bg-white/[0.08]" />
                    </div>
                    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                        <div>
                            <h2 className="pf-display text-[clamp(1.7rem,3.2vw,2.5rem)] font-bold leading-tight text-white">
                                Our operating model
                            </h2>
                            <p className="mt-5 max-w-2xl leading-relaxed text-slate-300">
                                We partner with teams that need speed, clarity, and reliable execution. Enitexa.Ai brings product thinking, modern architecture, and disciplined implementation in one integrated workflow.
                            </p>
                            <p className="mt-3 max-w-2xl leading-relaxed text-slate-300">
                                Instead of handing over fragmented resources, we provide ownership and delivery accountability from kickoff to post-launch support.
                            </p>
                        </div>
                        <div className="rounded-3xl border border-white/[0.08] bg-[#0B0F19] p-7">
                            <p className="pf-mono inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-slate-400">
                                <BrainCircuit className="h-4 w-4 text-indigo-300" />
                                Engagement Tracks
                            </p>
                            <div className="mt-4 divide-y divide-white/[0.07]">
                                {['Project Sprint (4–8 weeks)', 'Dedicated Product Squad', 'Architecture + Scale Consulting'].map((track, index) => (
                                    <div key={track} className="flex items-baseline gap-4 py-4">
                                        <span className="pf-mono text-[10px] text-indigo-300">0{index + 1}</span>
                                        <span className="pf-display text-sm font-semibold text-white">{track}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="pf-mono mb-2 flex items-center gap-4 text-[11px] uppercase tracking-[0.35em] text-white/35">
                        <span className="text-indigo-300">(02)</span>
                        <span>Pillars</span>
                        <span className="h-px flex-1 bg-white/[0.08]" />
                    </div>
                    <h2 className="pf-display mb-4 text-[clamp(1.7rem,3.2vw,2.5rem)] font-bold text-white">Build. Optimize. Scale.</h2>
                    <div className="grid gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-3">
                        {servicePillars.map((pillar, index) => (
                            <Motion.article
                                key={pillar.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                className="group bg-[#0B0F19] p-8 transition-colors duration-500 hover:bg-[#10152a]"
                            >
                                <div className="mb-8 flex items-start justify-between">
                                    <span className="pf-display text-5xl font-extrabold text-white/[0.07] transition-colors duration-500 group-hover:text-indigo-400/40">
                                        0{index + 1}
                                    </span>
                                    <pillar.icon className="h-6 w-6 text-indigo-300 transition-transform duration-500 group-hover:-translate-y-1" />
                                </div>
                                <h3 className="pf-display text-2xl font-bold text-white">{pillar.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-slate-400">{pillar.description}</p>
                                <ul className="mt-5 space-y-2.5 text-sm text-slate-300">
                                    {pillar.points.map((point) => (
                                        <li key={point} className="flex items-start gap-2.5">
                                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Motion.article>
                        ))}
                    </div>
                </section>

                <section>
                    <div className="pf-mono mb-2 flex items-center gap-4 text-[11px] uppercase tracking-[0.35em] text-white/35">
                        <span className="text-indigo-300">(03)</span>
                        <span>Why Enitexa.Ai</span>
                        <span className="h-px flex-1 bg-white/[0.08]" />
                        <ShieldCheck className="h-4 w-4 text-indigo-300" />
                    </div>
                    <h2 className="pf-display mb-4 text-[clamp(1.7rem,3.2vw,2.5rem)] font-bold text-white">Why companies choose Enitexa.Ai</h2>
                    <div className="border-t border-white/[0.08]">
                        {differentiators.map((item, index) => (
                            <div key={item} className="group flex items-baseline gap-5 border-b border-white/[0.08] py-6 sm:gap-8">
                                <span className="pf-mono text-xs text-indigo-300">0{index + 1}</span>
                                <span className="pf-display text-lg font-semibold text-white transition-transform duration-300 group-hover:translate-x-2 sm:text-xl">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <div className="pf-mono mb-2 flex items-center gap-4 text-[11px] uppercase tracking-[0.35em] text-white/35">
                        <span className="text-indigo-300">(04)</span>
                        <span>Platforms</span>
                        <span className="h-px flex-1 bg-white/[0.08]" />
                        <Layers3 className="h-4 w-4 text-indigo-300" />
                    </div>
                    <h2 className="pf-display mb-2 text-[clamp(1.7rem,3.2vw,2.5rem)] font-bold text-white">Enitexa.Ai AI & SaaS</h2>
                    <p className="mb-6 max-w-3xl text-sm text-slate-400">
                        These are dedicated Enitexa.Ai offerings and not hidden modules. You can open both pages directly from here.
                    </p>
                    <div className="grid gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-2">
                        {platformExtensions.map((item) => (
                            <article key={item.title} className="group flex flex-col bg-[#0B0F19] p-8 transition-colors duration-500 hover:bg-[#10152a]">
                                <item.icon className="h-6 w-6 text-indigo-300 transition-transform duration-500 group-hover:-translate-y-1" />
                                <h3 className="pf-display mt-5 text-xl font-bold text-white">{item.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.description}</p>
                                <ul className="mt-4 flex-1 space-y-2 text-sm text-slate-300">
                                    {item.points.map((point) => (
                                        <li key={point} className="flex items-start gap-2.5">
                                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={() => navigate(item.href)}
                                    data-cursor="Open"
                                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-xs font-semibold text-white transition-all duration-500 hover:border-white hover:bg-white/[0.05]"
                                >
                                    {item.cta}
                                    <ArrowRight className="h-4 w-4" />
                                </button>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0B0F19] p-10 text-center sm:p-14">
                    <div className="pf-dotgrid absolute inset-0 opacity-30" aria-hidden="true" />
                    <div className="relative">
                        <p className="pf-mono inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-indigo-300">
                            <Sparkles className="h-3.5 w-3.5" />
                            Next Step
                        </p>
                        <h2 className="pf-display mx-auto mt-4 max-w-2xl text-[clamp(1.8rem,3.6vw,2.8rem)] font-bold leading-tight text-white">
                            Need a clear plan for your next build?
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-slate-400">Let’s align your business goals, technical scope, and delivery timeline in one strategic call.</p>
                        <button
                            onClick={() => navigate('/enitexa.ai/contact')}
                            data-cursor="Book"
                            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white bg-white px-8 py-4 text-sm font-semibold text-black transition-all duration-500 hover:bg-transparent hover:text-white"
                        >
                            Book Strategy Call
                            <ArrowRight className="h-4 w-4" />
                        </button>
                    </div>
                </section>

                <section className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-3">
                    {[
                        { value: '50+', label: 'Projects Delivered' },
                        { value: '8+', label: 'Years Experience' },
                        { value: '100%', label: 'Delivery Commitment' },
                    ].map((item) => (
                        <article key={item.label} className="group bg-[#0B0F19] p-8 text-center transition-colors duration-500 hover:bg-[#10152a]">
                            <p className="pf-display text-4xl font-extrabold text-white">{item.value}</p>
                            <p className="pf-mono mt-3 text-[9px] uppercase tracking-[0.22em] text-slate-500">{item.label}</p>
                        </article>
                    ))}
                </section>
            </div>
        </EnitexaPageShell>
    );
}
