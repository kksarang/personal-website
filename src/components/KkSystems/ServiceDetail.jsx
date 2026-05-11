import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowRight, BarChart3, CheckCircle2, Clock3, GitBranch, Layers3, MessageCircle, Sparkles, ShieldCheck, TrendingUp } from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import HexenityPageShell from './HexenityPageShell';

const ServiceDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const service = servicesData[slug];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!service) {
        return (
            <HexenityPageShell
                badge="Service"
                title="Service Not Found"
                subtitle="This service page could not be loaded."
                backLabel="Back to Services"
                onBack={() => navigate('/hexenity/services')}
            >
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-slate-200">
                    Please go back and choose a valid service.
                </div>
            </HexenityPageShell>
        );
    }

    const summaryCards = [
        { label: 'Service Tracks', value: `${service.types.length}+` },
        { label: 'Delivery Steps', value: `${service.process.length}` },
        { label: 'Core Stack Areas', value: `${service.techStack?.length || 0}` },
        { label: 'FAQ Coverage', value: `${service.faqs?.length || 0}` },
    ];
    const workingModes = (service.workingModes && service.workingModes.length)
        ? service.workingModes
        : [
            {
                title: 'Structured Milestone Mode',
                detail: 'Scope is divided into milestones with measurable outcomes, sign-offs, and predictable delivery checkpoints.',
                bestFit: 'Teams requiring fixed clarity and executive visibility',
            },
            {
                title: 'Sprint Collaboration Mode',
                detail: 'Weekly sprint cycles combine rapid execution with continuous review, feedback, and prioritized iteration.',
                bestFit: 'Products that need fast validation and frequent updates',
            },
            {
                title: 'Scale and Support Mode',
                detail: 'Post-launch stabilization, optimization, and roadmap execution continue under a governed long-term delivery model.',
                bestFit: 'Businesses moving from launch to growth phase',
            },
        ];
    const architectureModel = service.architectureModel || {
        summary: `For ${service.title}, we use a modular architecture with clear boundaries between user experience, core logic, integrations, and operational governance.`,
        layers: [
            { name: 'Experience Layer', detail: 'User-facing journeys, UI consistency, and interaction behavior standards.' },
            { name: 'Business Logic Layer', detail: 'Core workflows, rules, and validations that drive product operations.' },
            { name: 'Integration Layer', detail: 'APIs, third-party tools, and data exchange controls for reliability.' },
            { name: 'Governance Layer', detail: 'Quality checks, security controls, release discipline, and documentation standards.' },
        ],
    };
    const statusGovernance = (service.statusGovernance && service.statusGovernance.length)
        ? service.statusGovernance
        : [
            {
                title: 'Weekly Delivery Status',
                detail: 'Progress against milestones, open dependencies, and next actions are shared with stakeholders.',
                cadence: 'Weekly',
            },
            {
                title: 'Quality and Risk Review',
                detail: 'Quality signals, unresolved risks, and mitigation actions are reviewed before major releases.',
                cadence: 'Per sprint',
            },
            {
                title: 'Release and Handover Readiness',
                detail: 'Operational readiness, documentation completeness, and acceptance criteria are validated prior to launch.',
                cadence: 'Per release',
            },
        ];
    const clientBenefits = (service.clientBenefits && service.clientBenefits.length)
        ? service.clientBenefits
        : [
            'Better service quality and faster execution cycles through structured delivery governance.',
            'Lower operational risk through clear process ownership, QA controls, and technical standards.',
            'Stronger customer experience from improved usability, reliability, and response times.',
            'Long-term maintainability with documented handover, transparent communication, and ongoing support.',
        ];
    const salesImpact = (service.salesImpact && service.salesImpact.length)
        ? service.salesImpact
        : [
            'Improved conversion pathways through journey optimization and clearer calls-to-action.',
            'Higher lead quality from better targeting, technical readiness, and funnel design.',
            'Better retention and repeat business through stable product experience and post-launch iteration.',
            'Greater revenue visibility with measurable milestones, reporting checkpoints, and performance tracking.',
        ];

    return (
        <HexenityPageShell
            badge="Service Detail"
            title={service.title}
            subtitle={service.overview}
            backLabel="Back to Services"
            onBack={() => navigate('/hexenity/services')}
            actions={(
                <button
                    onClick={() => navigate('/hexenity/contact')}
                    className="inline-flex items-center gap-2 rounded-xl border border-indigo-300/35 bg-indigo-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-indigo-100 transition hover:bg-indigo-500/30"
                >
                    Start Project
                    <ArrowRight className="h-4 w-4" />
                </button>
            )}
        >
            <div className="space-y-8">
                <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {summaryCards.map((item) => (
                        <article key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                            <p className="text-xs uppercase tracking-[0.14em] text-slate-400">{item.label}</p>
                            <p className="mt-2 text-2xl font-bold text-white">{item.value}</p>
                        </article>
                    ))}
                </section>

                <section className="premium-surface rounded-3xl p-7">
                    <h2 className="mb-2 inline-flex items-center gap-2 text-2xl font-bold text-white">
                        <TrendingUp className="h-5 w-5 text-indigo-300" />
                        Business Outcomes for Clients
                    </h2>
                    <p className="mb-5 text-sm text-slate-300">
                        A professional delivery model focused on measurable business value, stronger sales readiness, and long-term growth.
                    </p>
                    <div className="grid gap-4 md:grid-cols-2">
                        <article className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <h3 className="mb-3 text-base font-semibold text-white">Application Benefits</h3>
                            <ul className="space-y-3">
                                {clientBenefits.slice(0, 4).map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-sm text-slate-200">
                                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                        <article className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <h3 className="mb-3 text-base font-semibold text-white">Sales Development Impact</h3>
                            <ul className="space-y-3">
                                {salesImpact.slice(0, 4).map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-sm text-slate-200">
                                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-indigo-300" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    </div>
                </section>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.45fr_0.55fr]">
                    <div className="space-y-8">
                        <section className="premium-surface gradient-stroke rounded-3xl p-7">
                            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-300/35 bg-indigo-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-200">
                                <Sparkles className="h-3.5 w-3.5" />
                                Scope of Delivery
                            </p>
                            <h2 className="mb-5 text-2xl font-bold text-white">{service.typesTitle}</h2>
                            <div className="grid gap-3 sm:grid-cols-2">
                                {service.types.map((type) => (
                                    <div key={type} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:border-indigo-300/40">
                                        {type}
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="premium-surface gradient-stroke rounded-3xl p-7">
                            <h2 className="mb-5 text-2xl font-bold text-white">{service.processTitle}</h2>
                            <div className="space-y-4">
                                {service.process.map((stepItem, index) => (
                                    <div key={stepItem.step} className="rounded-xl border border-white/10 bg-white/5 p-4">
                                        <div className="mb-2 flex items-center gap-3">
                                            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-indigo-400/20 text-xs font-bold text-indigo-100">
                                                {index + 1}
                                            </span>
                                            <p className="text-xs uppercase tracking-[0.14em] text-indigo-300">Step {index + 1}</p>
                                        </div>
                                        <h3 className="mt-1 text-lg font-semibold text-white">{stepItem.step}</h3>
                                        {stepItem.desc ? <p className="mt-1 text-slate-300">{stepItem.desc}</p> : null}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {service.deliveryModes?.length ? (
                            <section className="premium-surface rounded-3xl p-7">
                                <h2 className="mb-2 text-2xl font-bold text-white">Technology Modes & Platform Strategy</h2>
                                <p className="mb-5 text-sm text-slate-300">
                                    We recommend the right engineering mode based on timeline, product complexity, and long-term maintainability.
                                </p>
                                <div className="grid gap-4 md:grid-cols-2">
                                    {service.deliveryModes.map((mode) => (
                                        <article key={mode.mode} className="rounded-xl border border-white/10 bg-white/5 p-4">
                                            <h3 className="text-lg font-semibold text-white">{mode.mode}</h3>
                                            <p className="mt-1 text-sm text-slate-300">{mode.useCase}</p>
                                            <p className="mt-3 text-xs uppercase tracking-[0.12em] text-indigo-300">Stack: {mode.stack}</p>
                                        </article>
                                    ))}
                                </div>
                            </section>
                        ) : null}

                        {service.executionModel?.length ? (
                            <section className="premium-surface rounded-3xl p-7">
                                <h2 className="mb-5 text-2xl font-bold text-white">Execution Model: Design to QA and Release</h2>
                                <div className="space-y-3">
                                    {service.executionModel.map((stage, index) => (
                                        <article key={stage.stage} className="rounded-xl border border-white/10 bg-white/5 p-4">
                                            <div className="mb-2 flex items-center gap-3">
                                                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-indigo-500/20 text-xs font-bold text-indigo-100">
                                                    {index + 1}
                                                </span>
                                                <p className="text-xs uppercase tracking-[0.14em] text-indigo-300">{stage.stage}</p>
                                            </div>
                                            <p className="text-sm text-slate-200">{stage.focus}</p>
                                            <p className="mt-2 text-xs uppercase tracking-[0.12em] text-slate-400">Deliverables: {stage.deliverables}</p>
                                        </article>
                                    ))}
                                </div>
                            </section>
                        ) : null}

                        <section className="premium-surface rounded-3xl p-7">
                            <h2 className="mb-2 inline-flex items-center gap-2 text-2xl font-bold text-white">
                                <GitBranch className="h-5 w-5 text-indigo-300" />
                                Working Modes
                            </h2>
                            <p className="mb-5 text-sm text-slate-300">
                                Engagement models are selected based on delivery speed, product complexity, and internal team readiness.
                            </p>
                            <div className="grid gap-4 md:grid-cols-2">
                                {workingModes.map((mode) => (
                                    <article key={mode.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                                        <h3 className="text-base font-semibold text-white">{mode.title}</h3>
                                        <p className="mt-1 text-sm text-slate-300">{mode.detail}</p>
                                        <p className="mt-3 text-xs uppercase tracking-[0.12em] text-indigo-300">Best fit: {mode.bestFit}</p>
                                    </article>
                                ))}
                            </div>
                        </section>

                        <section className="premium-surface rounded-3xl p-7">
                            <h2 className="mb-2 inline-flex items-center gap-2 text-2xl font-bold text-white">
                                <Layers3 className="h-5 w-5 text-indigo-300" />
                                Working Architecture
                            </h2>
                            <p className="mb-5 text-sm text-slate-300">{architectureModel.summary}</p>
                            <div className="space-y-3">
                                {architectureModel.layers.map((layer, index) => (
                                    <article key={layer.name} className="rounded-xl border border-white/10 bg-white/5 p-4">
                                        <div className="mb-2 flex items-center gap-3">
                                            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500/20 text-[11px] font-bold text-indigo-100">
                                                {index + 1}
                                            </span>
                                            <h3 className="text-base font-semibold text-white">{layer.name}</h3>
                                        </div>
                                        <p className="text-sm text-slate-300">{layer.detail}</p>
                                    </article>
                                ))}
                            </div>
                        </section>

                        {service.techStack?.length ? (
                            <section className="premium-surface rounded-3xl p-7">
                                <h2 className="mb-5 text-2xl font-bold text-white">Technology & Governance</h2>
                                <div className="mb-5 flex flex-wrap gap-2">
                                    {service.techStack.map((tech) => (
                                        <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-indigo-300/35 hover:text-white">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="rounded-xl border border-indigo-300/25 bg-indigo-500/10 p-4 text-sm text-indigo-100">
                                    <p className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Security practices, maintainability standards, and QA checkpoints are embedded throughout delivery.</p>
                                </div>
                                {service.toolingStack?.length ? (
                                    <div className="mt-6">
                                        <h3 className="mb-3 text-base font-semibold text-white">Engineering Toolchain & IDEs</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {service.toolingStack.map((tool) => (
                                                <span key={tool} className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-slate-200">
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ) : null}
                            </section>
                        ) : null}

                        <section className="premium-surface rounded-3xl p-7">
                            <h2 className="mb-2 inline-flex items-center gap-2 text-2xl font-bold text-white">
                                <TrendingUp className="h-5 w-5 text-indigo-300" />
                                Client Benefits & Sales Outcomes
                            </h2>
                            <p className="mb-5 text-sm text-slate-300">
                                Every engagement is designed to improve business performance, not just deliver technical output.
                            </p>
                            <div className="grid gap-4 md:grid-cols-2">
                                <article className="rounded-xl border border-white/10 bg-white/5 p-5">
                                    <h3 className="mb-3 text-base font-semibold text-white">Client Benefits</h3>
                                    <ul className="space-y-3">
                                        {clientBenefits.map((item) => (
                                            <li key={item} className="flex items-start gap-2 text-sm text-slate-200">
                                                <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </article>
                                <article className="rounded-xl border border-white/10 bg-white/5 p-5">
                                    <h3 className="mb-3 text-base font-semibold text-white">Sales & Growth Impact</h3>
                                    <ul className="space-y-3">
                                        {salesImpact.map((item) => (
                                            <li key={item} className="flex items-start gap-2 text-sm text-slate-200">
                                                <CheckCircle2 className="mt-0.5 h-4 w-4 text-indigo-300" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </article>
                            </div>
                        </section>

                        {service.faqs?.length ? (
                            <section className="premium-surface rounded-3xl p-7">
                                <h2 className="mb-5 text-2xl font-bold text-white">FAQs</h2>
                                <div className="space-y-3">
                                    {service.faqs.map((faq) => (
                                        <div key={faq.q} className="rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-indigo-300/30">
                                            <p className="font-semibold text-white">{faq.q}</p>
                                            <p className="mt-1 text-slate-300">{faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        ) : null}
                    </div>

                    <div className="space-y-6">
                        <aside className="premium-surface rounded-3xl p-6">
                            <h3 className="mb-4 inline-flex items-center gap-2 text-lg font-bold text-white">
                                <Clock3 className="h-5 w-5 text-indigo-300" />
                                Delivery Timeline
                            </h3>
                            <ul className="space-y-3">
                                {service.timeline.map((item) => (
                                    <li key={item} className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-slate-200">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            {service.timelineNote ? <p className="mt-4 text-xs text-slate-400">{service.timelineNote}</p> : null}
                        </aside>

                        <aside className="premium-surface rounded-3xl p-6">
                            <h3 className="mb-4 text-lg font-bold text-white">Included in Service</h3>
                            <ul className="space-y-3">
                                {service.whatYouGet.map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-sm text-slate-200">
                                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </aside>

                        {service.clientCollaboration?.length ? (
                            <aside className="premium-surface rounded-3xl p-6">
                                <h3 className="mb-4 text-lg font-bold text-white">Client Collaboration Model</h3>
                                <ul className="space-y-3">
                                    {service.clientCollaboration.map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-sm text-slate-200">
                                            <CheckCircle2 className="mt-0.5 h-4 w-4 text-indigo-300" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </aside>
                        ) : null}

                        {service.growthSupport?.length ? (
                            <aside className="premium-surface rounded-3xl p-6">
                                <h3 className="mb-4 text-lg font-bold text-white">Product & Marketing Readiness</h3>
                                <ul className="space-y-3">
                                    {service.growthSupport.map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-sm text-slate-200">
                                            <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </aside>
                        ) : null}

                        <aside className="premium-surface rounded-3xl p-6">
                            <h3 className="mb-4 inline-flex items-center gap-2 text-lg font-bold text-white">
                                <BarChart3 className="h-5 w-5 text-indigo-300" />
                                Working Status & Governance
                            </h3>
                            <div className="space-y-3">
                                {statusGovernance.map((item) => (
                                    <article key={item.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                                        <p className="text-sm font-semibold text-white">{item.title}</p>
                                        <p className="mt-1 text-sm text-slate-300">{item.detail}</p>
                                        <p className="mt-2 text-xs uppercase tracking-[0.12em] text-indigo-300">{item.cadence}</p>
                                    </article>
                                ))}
                            </div>
                        </aside>

                        <aside className="rounded-3xl border border-indigo-300/25 bg-indigo-500/15 p-6">
                            <h3 className="text-xl font-bold text-white">Need a custom package?</h3>
                            <p className="mt-2 text-slate-200">Share your objectives and we will propose a tailored scope, timeline, and delivery model.</p>
                            <button
                                onClick={() => navigate('/hexenity/contact')}
                                className="mt-4 inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
                            >
                                <MessageCircle className="h-4 w-4" />
                                Talk to Hexenity
                            </button>
                        </aside>
                    </div>
                </div>
            </div>
        </HexenityPageShell>
    );
};

export default ServiceDetail;
