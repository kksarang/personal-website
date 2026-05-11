import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BrainCircuit, Building2, CheckCircle2, Layers3, Rocket, ShieldCheck, Sparkles, Workflow, Bot, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import HexenityPageShell from '../../components/KkSystems/HexenityPageShell';

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
        title: 'Hexenity AI',
        description: 'An interactive assistant experience for architecture guidance, workflow ideation, and technical direction.',
        points: ['AI chat interface', 'Mode-based support', 'Project planning assistance'],
        icon: Bot,
        href: '/hexenity/ai',
        cta: 'Open Hexenity AI',
    },
    {
        title: 'Hexenity SaaS',
        description: 'A practical SaaS foundation for business operations, reporting, and process standardization.',
        points: ['Operational dashboards', 'Reporting modules', 'Scalable platform model'],
        icon: BarChart3,
        href: '/hexenity/saas',
        cta: 'View SaaS Details',
    },
];

export default function CoreHexenity() {
    const navigate = useNavigate();

    return (
        <HexenityPageShell
            badge="Core Hexenity"
            title="How Hexenity works as your execution partner"
            subtitle="A practical model that combines strategy, engineering, and operations so your digital products launch faster without sacrificing quality."
            backLabel="Back to Home"
            onBack={() => navigate('/hexenity')}
            actions={(
                <button
                    onClick={() => navigate('/hexenity/contact')}
                    className="inline-flex items-center gap-2 rounded-xl border border-indigo-300/35 bg-indigo-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-indigo-100 transition hover:bg-indigo-500/30"
                >
                    Start Conversation
                    <ArrowRight className="h-4 w-4" />
                </button>
            )}
        >
            <div className="space-y-8">
                <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                    <article className="premium-surface gradient-stroke rounded-3xl p-7">
                        <h2 className="text-2xl font-bold text-white">Our operating model</h2>
                        <p className="mt-3 text-slate-300">
                            We partner with teams that need speed, clarity, and reliable execution. Hexenity brings product thinking, modern architecture, and disciplined implementation in one integrated workflow.
                        </p>
                        <p className="mt-3 text-slate-300">
                            Instead of handing over fragmented resources, we provide ownership and delivery accountability from kickoff to post-launch support.
                        </p>
                    </article>

                    <article className="premium-surface rounded-3xl p-7">
                        <h3 className="inline-flex items-center gap-2 text-xl font-bold text-white">
                            <BrainCircuit className="h-5 w-5 text-indigo-300" />
                            Engagement tracks
                        </h3>
                        <div className="mt-4 space-y-3 text-sm">
                            <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-slate-200">Project Sprint (4–8 weeks)</div>
                            <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-slate-200">Dedicated Product Squad</div>
                            <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-slate-200">Architecture + Scale Consulting</div>
                        </div>
                    </article>
                </section>

                <section className="grid gap-6 md:grid-cols-3">
                    {servicePillars.map((pillar, index) => (
                        <motion.article
                            key={pillar.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="premium-surface gradient-stroke rounded-3xl p-6"
                        >
                            <pillar.icon className="h-6 w-6 text-indigo-300" />
                            <h3 className="mt-4 text-2xl font-black text-white">{pillar.title}</h3>
                            <p className="mt-2 text-slate-300">{pillar.description}</p>
                            <ul className="mt-4 space-y-2 text-sm text-slate-200">
                                {pillar.points.map((point) => (
                                    <li key={point} className="flex items-start gap-2">
                                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.article>
                    ))}
                </section>

                <section className="premium-surface rounded-3xl p-7">
                    <h2 className="inline-flex items-center gap-2 text-2xl font-bold text-white">
                        <ShieldCheck className="h-6 w-6 text-indigo-300" />
                        Why companies choose Hexenity
                    </h2>
                    <div className="mt-5 grid gap-3 md:grid-cols-2">
                        {differentiators.map((item) => (
                            <div key={item} className="rounded-xl border border-white/10 bg-white/5 p-4 text-slate-200">
                                {item}
                            </div>
                        ))}
                    </div>
                </section>

                <section className="premium-surface rounded-3xl p-7">
                    <h2 className="inline-flex items-center gap-2 text-2xl font-bold text-white">
                        <Layers3 className="h-6 w-6 text-indigo-300" />
                        Hexenity AI & SaaS
                    </h2>
                    <p className="mt-3 text-slate-300">
                        These are dedicated Hexenity offerings and not hidden modules. You can open both pages directly from here.
                    </p>
                    <div className="mt-5 grid gap-4 md:grid-cols-2">
                        {platformExtensions.map((item) => (
                            <article key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                                <item.icon className="h-6 w-6 text-indigo-300" />
                                <h3 className="mt-3 text-xl font-bold text-white">{item.title}</h3>
                                <p className="mt-2 text-sm text-slate-300">{item.description}</p>
                                <ul className="mt-3 space-y-1.5 text-sm text-slate-200">
                                    {item.points.map((point) => (
                                        <li key={point} className="flex items-start gap-2">
                                            <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={() => navigate(item.href)}
                                    className="mt-4 inline-flex items-center gap-2 rounded-xl border border-indigo-300/35 bg-indigo-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-indigo-100 transition hover:bg-indigo-500/30"
                                >
                                    {item.cta}
                                    <ArrowRight className="h-4 w-4" />
                                </button>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="rounded-3xl border border-indigo-300/25 bg-indigo-500/15 p-8 text-center">
                    <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-indigo-200">
                        <Sparkles className="h-3.5 w-3.5" />
                        Next Step
                    </p>
                    <h2 className="mt-3 text-3xl font-black text-white">Need a clear plan for your next build?</h2>
                    <p className="mx-auto mt-3 max-w-2xl text-slate-200">Let’s align your business goals, technical scope, and delivery timeline in one strategic call.</p>
                    <button
                        onClick={() => navigate('/hexenity/contact')}
                        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
                    >
                        Book Strategy Call
                        <ArrowRight className="h-4 w-4" />
                    </button>
                </section>

                <section className="grid gap-4 sm:grid-cols-3">
                    {[
                        { value: '50+', label: 'Projects Delivered' },
                        { value: '8+', label: 'Years Experience' },
                        { value: '100%', label: 'Delivery Commitment' },
                    ].map((item) => (
                        <article key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                            <p className="text-3xl font-black text-white">{item.value}</p>
                            <p className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-400">{item.label}</p>
                        </article>
                    ))}
                </section>
            </div>
        </HexenityPageShell>
    );
}
