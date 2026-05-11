import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    Bot,
    BrainCircuit,
    CheckCircle2,
    Cloud,
    Code2,
    Cpu,
    Gauge,
    Layers,
    LineChart,
    Lock,
    Rocket,
    ServerCog,
    Sparkles,
    Workflow,
} from 'lucide-react';

const reveal = {
    hidden: { opacity: 0, y: 18 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
    }),
};

const CoreHexenity = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const capabilityCards = [
        {
            title: 'Hexenity AI Layer',
            desc: 'A development-support intelligence layer for roadmap drafting, issue triage, and architecture planning.',
            icon: Bot,
            tag: 'AI Copilot',
            action: () => navigate('/hexenity/ai'),
            actionLabel: 'Open Hexenity AI',
        },
        {
            title: 'SaaS System Engineering',
            desc: 'Cloud-native SaaS architecture for products requiring scalability, security, and rapid iteration.',
            icon: Layers,
            tag: 'Platform Core',
            action: () => navigate('/hexenity/saas'),
            actionLabel: 'Explore SaaS Platform',
        },
        {
            title: 'Automation + Workflow Core',
            desc: 'Business process automation and decision systems connected to your apps, dashboards, and operations.',
            icon: Workflow,
            tag: 'Ops Automation',
            action: () => navigate('/hexenity/services'),
            actionLabel: 'View Solutions',
        },
    ];

    const aiWorkStreams = [
        {
            title: 'Build Assistant',
            detail: 'Converts business ideas into sprint-ready scopes, architecture outlines, and delivery checklists.',
            icon: Code2,
        },
        {
            title: 'Fix Assistant',
            detail: 'Supports debugging workflow with root-cause guidance, patch planning, and QA-ready validation paths.',
            icon: ServerCog,
        },
        {
            title: 'Analyze Assistant',
            detail: 'Maps product metrics to growth opportunities and recommends optimization priorities.',
            icon: LineChart,
        },
    ];

    const processTimeline = [
        { title: 'Discovery', detail: 'Define business goals, scope boundaries, and system priorities.' },
        { title: 'Architecture', detail: 'Design AI-assisted product and SaaS architecture for maintainability.' },
        { title: 'Implementation', detail: 'Build modules in milestones with visible progress and quality gates.' },
        { title: 'Validation', detail: 'QA checks, performance review, and security readiness testing.' },
        { title: 'Launch', detail: 'Production release with governance, docs, and support transition.' },
        { title: 'Optimization', detail: 'Iterate from analytics and business KPI feedback loops.' },
    ];

    const aiDevelopmentStages = [
        {
            stage: 'Data + Intent Modeling',
            detail: 'Map user intents, command taxonomy, and support datasets from real delivery scenarios.',
            benchmark: '1-2 weeks',
        },
        {
            stage: 'Prompt and Response Architecture',
            detail: 'Design response frameworks for build/fix/analyze flows with deterministic output structure.',
            benchmark: '30-40% faster support cycle',
        },
        {
            stage: 'Tool and Workflow Integration',
            detail: 'Connect AI outputs to engineering tasks, backlog templates, QA checklists, and reporting.',
            benchmark: '20-35% reduction in rework',
        },
        {
            stage: 'Validation + Guardrails',
            detail: 'Run quality checks, hallucination controls, and role-based response governance.',
            benchmark: 'Enterprise reliability baseline',
        },
    ];

    const saasDevelopmentStages = [
        {
            stage: 'Platform Discovery',
            detail: 'Define tenant model, user roles, core modules, and product success KPIs.',
            benchmark: '1-2 weeks',
        },
        {
            stage: 'Cloud Architecture Design',
            detail: 'Build scalable service boundaries, auth model, observability, and deployment topology.',
            benchmark: '99.9% target uptime design',
        },
        {
            stage: 'Module Engineering',
            detail: 'Develop prioritized SaaS modules with API contracts, event flows, and QA checkpoints.',
            benchmark: '2-week release cadence',
        },
        {
            stage: 'Launch + Growth Operations',
            detail: 'Production rollout, onboarding analytics, and conversion/retention optimization loops.',
            benchmark: 'KPI-driven roadmap every sprint',
        },
    ];

    const deliveryBenchmarks = [
        { label: 'Planning Accuracy', value: '90%+', note: 'milestone predictability across active engagements' },
        { label: 'Time-to-First Release', value: '4-8 weeks', note: 'based on scoped MVP complexity' },
        { label: 'Engineering Throughput', value: '3x', note: 'AI-assisted support and structured execution workflows' },
        { label: 'Post-launch Stability', value: '95%+', note: 'quality checks and monitored optimization cycles' },
    ];

    const systemPillars = [
        { title: 'AI-Enabled Development', value: '3x', note: 'faster planning and support cycles', icon: BrainCircuit },
        { title: 'Delivery Governance', value: '100%', note: 'milestone visibility and accountability', icon: Gauge },
        { title: 'Security-First Systems', value: 'Enterprise', note: 'architecture and access standards', icon: Lock },
        { title: 'Cloud Scalability', value: 'Elastic', note: 'ready for growth-stage demand', icon: Cloud },
    ];

    return (
        <div className="relative min-h-screen overflow-hidden bg-[#050816] pb-24 pt-32 text-white">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.22),transparent_50%)]" />
                <div className="absolute -left-24 top-0 h-[28rem] w-[28rem] rounded-full bg-violet-600/20 blur-[130px]" />
                <div className="absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-cyan-500/15 blur-[140px]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:46px_46px] opacity-30" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.section
                    initial="hidden"
                    animate="visible"
                    variants={reveal}
                    className="rounded-[2rem] border border-white/10 bg-slate-950/65 p-8 backdrop-blur-xl md:p-12"
                >
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-300/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-violet-200">
                        <Cpu className="h-3.5 w-3.5" />
                        Core Hexenity
                    </div>
                    <h1 className="hexenity-display max-w-5xl text-4xl font-black leading-[1.05] sm:text-5xl lg:text-6xl">
                        The product-engineering core behind
                        <span className="block text-indigo-300">Hexenity AI and SaaS systems.</span>
                    </h1>
                    <p className="mt-5 max-w-3xl text-lg text-slate-300">
                        Core Hexenity is the intelligence and platform execution layer where we build AI-powered development support, scalable SaaS infrastructure, and enterprise workflow systems for modern businesses.
                    </p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {systemPillars.map((pillar) => (
                            <article key={pillar.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                                <pillar.icon className="mb-3 h-5 w-5 text-indigo-300" />
                                <p className="text-2xl font-black text-white">{pillar.value}</p>
                                <p className="text-sm font-semibold text-slate-200">{pillar.title}</p>
                                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-400">{pillar.note}</p>
                            </article>
                        ))}
                    </div>
                </motion.section>

                <section className="mt-8 grid gap-6 lg:grid-cols-3">
                    {capabilityCards.map((card, idx) => (
                        <motion.article
                            key={card.title}
                            custom={idx + 1}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={reveal}
                            className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-indigo-300/35"
                        >
                            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-indigo-400/20 bg-indigo-500/10">
                                <card.icon className="h-5 w-5 text-indigo-300" />
                            </div>
                            <p className="mb-2 text-[11px] uppercase tracking-[0.16em] text-indigo-300">{card.tag}</p>
                            <h2 className="text-2xl font-bold text-white">{card.title}</h2>
                            <p className="mt-3 text-slate-300">{card.desc}</p>
                            <button
                                onClick={card.action}
                                className="mt-5 inline-flex items-center gap-2 rounded-xl border border-indigo-300/30 bg-indigo-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-indigo-100 transition hover:bg-indigo-500/25"
                            >
                                {card.actionLabel}
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </button>
                        </motion.article>
                    ))}
                </section>

                <section className="mt-8 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
                    <motion.article
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={reveal}
                        className="rounded-3xl border border-white/10 bg-white/5 p-7"
                    >
                        <h2 className="mb-2 inline-flex items-center gap-2 text-2xl font-bold text-white">
                            <Sparkles className="h-5 w-5 text-indigo-300" />
                            How Hexenity AI Works
                        </h2>
                        <p className="mb-5 text-sm text-slate-300">
                            The Hexenity AI module (work started last month) is designed as a practical support copilot for technical and non-technical teams.
                        </p>
                        <div className="space-y-3">
                            {aiWorkStreams.map((stream, index) => (
                                <article key={stream.title} className="rounded-xl border border-white/10 bg-black/20 p-4">
                                    <div className="mb-2 flex items-center gap-3">
                                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-indigo-500/20 text-xs font-bold text-indigo-100">
                                            {index + 1}
                                        </span>
                                        <stream.icon className="h-4 w-4 text-indigo-300" />
                                        <h3 className="text-base font-semibold text-white">{stream.title}</h3>
                                    </div>
                                    <p className="text-sm text-slate-300">{stream.detail}</p>
                                </article>
                            ))}
                        </div>
                    </motion.article>

                    <motion.aside
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={reveal}
                        className="rounded-3xl border border-indigo-300/25 bg-indigo-500/15 p-7"
                    >
                        <h3 className="text-xl font-bold text-white">Current AI Status</h3>
                        <p className="mt-2 text-slate-200">
                            Hexenity AI is currently in active development and already supports structured command workflows for build, fix, and analysis support.
                        </p>
                        <ul className="mt-4 space-y-2">
                            {[
                                'Development support assistant',
                                'Command-based guidance (/build /fix /analyze)',
                                'Roadmap and architecture support',
                                'SaaS workflow integration in progress',
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-2 text-sm text-slate-100">
                                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={() => navigate('/hexenity/ai')}
                            className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
                        >
                            Open Hexenity AI Workspace
                            <ArrowRight className="h-4 w-4" />
                        </button>
                    </motion.aside>
                </section>

                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={reveal}
                    className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-7"
                >
                    <h2 className="mb-5 text-2xl font-bold text-white">SaaS System Development Method</h2>
                    <div className="grid gap-4 md:grid-cols-3">
                        {processTimeline.map((step, idx) => (
                            <article key={step.title} className="rounded-xl border border-white/10 bg-black/20 p-4">
                                <p className="text-xs uppercase tracking-[0.14em] text-indigo-300">Phase {idx + 1}</p>
                                <h3 className="mt-1 text-lg font-semibold text-white">{step.title}</h3>
                                <p className="mt-2 text-sm text-slate-300">{step.detail}</p>
                            </article>
                        ))}
                    </div>
                </motion.section>

                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={reveal}
                    className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-7"
                >
                    <h2 className="mb-2 text-2xl font-bold text-white">How We Develop AI and SaaS (Data-led)</h2>
                    <p className="mb-6 text-sm text-slate-300">
                        Core Hexenity uses a metrics-driven development model so both AI systems and SaaS platforms are built with measurable progress, governance, and business outcomes.
                    </p>

                    <div className="grid gap-6 lg:grid-cols-2">
                        <article className="rounded-2xl border border-white/10 bg-black/20 p-5">
                            <h3 className="mb-4 inline-flex items-center gap-2 text-lg font-semibold text-white">
                                <Bot className="h-5 w-5 text-indigo-300" />
                                AI Development Lifecycle
                            </h3>
                            <div className="space-y-3">
                                {aiDevelopmentStages.map((item, idx) => (
                                    <div key={item.stage} className="rounded-xl border border-white/10 bg-white/5 p-4">
                                        <p className="text-xs uppercase tracking-[0.14em] text-indigo-300">Stage {idx + 1}</p>
                                        <h4 className="mt-1 text-base font-semibold text-white">{item.stage}</h4>
                                        <p className="mt-1 text-sm text-slate-300">{item.detail}</p>
                                        <p className="mt-2 text-xs uppercase tracking-[0.12em] text-cyan-300">Benchmark: {item.benchmark}</p>
                                    </div>
                                ))}
                            </div>
                        </article>

                        <article className="rounded-2xl border border-white/10 bg-black/20 p-5">
                            <h3 className="mb-4 inline-flex items-center gap-2 text-lg font-semibold text-white">
                                <Layers className="h-5 w-5 text-indigo-300" />
                                SaaS Development Lifecycle
                            </h3>
                            <div className="space-y-3">
                                {saasDevelopmentStages.map((item, idx) => (
                                    <div key={item.stage} className="rounded-xl border border-white/10 bg-white/5 p-4">
                                        <p className="text-xs uppercase tracking-[0.14em] text-indigo-300">Stage {idx + 1}</p>
                                        <h4 className="mt-1 text-base font-semibold text-white">{item.stage}</h4>
                                        <p className="mt-1 text-sm text-slate-300">{item.detail}</p>
                                        <p className="mt-2 text-xs uppercase tracking-[0.12em] text-cyan-300">Benchmark: {item.benchmark}</p>
                                    </div>
                                ))}
                            </div>
                        </article>
                    </div>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {deliveryBenchmarks.map((metric) => (
                            <article key={metric.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
                                <p className="text-2xl font-black text-white">{metric.value}</p>
                                <p className="mt-1 text-sm font-semibold text-slate-200">{metric.label}</p>
                                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-400">{metric.note}</p>
                            </article>
                        ))}
                    </div>
                </motion.section>

                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={reveal}
                    className="mt-8 rounded-3xl border border-white/10 bg-slate-950/70 p-7 text-center"
                >
                    <h2 className="hexenity-display text-4xl font-black text-white md:text-5xl">
                        Build your AI + SaaS execution core with Hexenity.
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-slate-300">
                        We design AI and SaaS systems with measurable delivery metrics, predictable release cadence, and enterprise-grade architecture so your team can move from concept to scalable operations with confidence.
                    </p>
                    <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                        <button
                            onClick={() => navigate('/hexenity/contact')}
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 py-3 text-base font-semibold text-white transition hover:bg-indigo-500"
                        >
                            Start Core Consultation
                            <ArrowRight className="h-4 w-4" />
                        </button>
                        <button
                            onClick={() => navigate('/hexenity/saas')}
                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-3 text-base font-semibold text-white transition hover:border-indigo-300/35 hover:bg-white/10"
                        >
                            Explore SaaS Platform
                        </button>
                    </div>
                </motion.section>
            </div>
        </div>
    );
};

export default CoreHexenity;
