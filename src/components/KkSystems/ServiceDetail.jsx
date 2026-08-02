import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowRight, BarChart3, CheckCircle2, Clock3, GitBranch, Layers3, MessageCircle, Sparkles, ShieldCheck, TrendingUp } from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import EnitexaPageShell from './EnitexaPageShell';

const ServiceDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const service = servicesData[slug];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!service) {
        return (
            <EnitexaPageShell
                badge="Service"
                title="Service Not Found"
                subtitle="This service page could not be loaded."
                backLabel="Back to Services"
                onBack={() => navigate('/enitexa.ai/services')}
            >
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-slate-200">
                    Please go back and choose a valid service.
                </div>
            </EnitexaPageShell>
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
    const industries = (service.industries && service.industries.length)
        ? service.industries
        : ['Startups', 'SMBs', 'Enterprise Teams', 'Agencies', 'Local Businesses', 'Growth-stage Products'];
    const relatedServices = Object.entries(servicesData)
        .filter(([key]) => key !== slug)
        .slice(0, 3)
        .map(([relatedSlug, relatedService]) => ({
            slug: relatedSlug,
            title: relatedService.title,
            overview: relatedService.overview,
        }));

    return (
        <EnitexaPageShell
            badge="Service Detail"
            title={service.title}
            subtitle={service.overview}
            backLabel="Back to Services"
            onBack={() => navigate('/enitexa.ai/services')}
            actions={(
                <button
                    onClick={() => navigate('/enitexa.ai/contact')}
                    className="inline-flex items-center gap-2 rounded-full border border-indigo-300/35 bg-indigo-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-indigo-100 transition hover:bg-indigo-500/30"
                >
                    Start Project
                    <ArrowRight className="h-4 w-4" />
                </button>
            )}
        >
            <div className="space-y-16">
                <section className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] lg:grid-cols-4">
                    {summaryCards.map((item) => (
                        <article key={item.label} className="group bg-[#0B0F19] p-6 transition-colors duration-500 hover:bg-[#10152a]">
                            <p className="pf-mono text-[9px] uppercase tracking-[0.22em] text-slate-500">{item.label}</p>
                            <p className="pf-display mt-3 text-2xl font-bold text-white">{item.value}</p>
                        </article>
                    ))}
                </section>

                <section>
                    <div className="pf-mono mb-2 flex items-center gap-4 text-[11px] uppercase tracking-[0.35em] text-white/35">
                        <span className="text-indigo-300">(01)</span>
                        <span>Outcomes</span>
                        <span className="h-px flex-1 bg-white/[0.08]" />
                        <TrendingUp className="h-4 w-4 text-indigo-300" />
                    </div>
                    <h2 className="pf-display mb-2 text-[clamp(1.6rem,3vw,2.4rem)] font-bold text-white">
                        Business outcomes for clients
                    </h2>
                    <p className="mb-6 max-w-3xl text-sm text-slate-400">
                        A professional delivery model focused on measurable business value, stronger sales readiness, and long-term growth.
                    </p>
                    <div className="grid gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-2">
                        <article className="bg-[#0B0F19] p-8">
                            <h3 className="pf-display mb-5 text-lg font-bold text-white">Application Benefits</h3>
                            <ul className="space-y-3">
                                {clientBenefits.slice(0, 4).map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                        <article className="bg-[#0B0F19] p-8">
                            <h3 className="pf-display mb-5 text-lg font-bold text-white">Sales Development Impact</h3>
                            <ul className="space-y-3">
                                {salesImpact.slice(0, 4).map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-300" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    </div>
                </section>

                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.45fr_0.55fr]">
                    <div className="space-y-16">
                        <section>
                            <div className="pf-mono mb-2 flex items-center gap-4 text-[11px] uppercase tracking-[0.35em] text-white/35">
                                <span className="text-indigo-300">(02)</span>
                                <span>Service Scope</span>
                                <span className="h-px flex-1 bg-white/[0.08]" />
                                <Sparkles className="h-4 w-4 text-indigo-300" />
                            </div>
                            <h2 className="pf-display mb-2 text-[clamp(1.5rem,2.8vw,2.1rem)] font-bold text-white">{service.typesTitle}</h2>
                            <p className="mb-6 max-w-3xl text-sm text-slate-400">
                                This service is delivered through milestone governance, cross-functional execution, and transparent stakeholder communication.
                            </p>
                            <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2">
                                {service.types.map((type) => (
                                    <div key={type} className="group bg-[#0B0F19] px-5 py-4 text-sm text-slate-200 transition-colors duration-300 hover:bg-[#10152a] hover:text-white">
                                        {type}
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <div className="pf-mono mb-2 flex items-center gap-4 text-[11px] uppercase tracking-[0.35em] text-white/35">
                                <span className="text-indigo-300">(03)</span>
                                <span>Process</span>
                                <span className="h-px flex-1 bg-white/[0.08]" />
                            </div>
                            <h2 className="pf-display mb-4 text-[clamp(1.5rem,2.8vw,2.1rem)] font-bold text-white">Our process</h2>
                            <div className="border-t border-white/[0.08]">
                                {service.process.map((stepItem, index) => (
                                    <div
                                        key={stepItem.step}
                                        className="group grid grid-cols-[auto_1fr] items-start gap-5 border-b border-white/[0.08] py-6 sm:grid-cols-[90px_1fr] sm:gap-8"
                                    >
                                        <span className="pf-display text-3xl font-extrabold leading-none text-white/[0.08] transition-colors duration-500 group-hover:text-indigo-400/50 sm:text-5xl">
                                            0{index + 1}
                                        </span>
                                        <div>
                                            <h3 className="pf-display text-lg font-bold text-white sm:text-xl">{stepItem.step}</h3>
                                            {stepItem.desc ? <p className="mt-1.5 leading-relaxed text-slate-400">{stepItem.desc}</p> : null}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {service.deliveryModes?.length ? (
                            <section>
                                <div className="pf-mono mb-2 flex items-center gap-4 text-[11px] uppercase tracking-[0.35em] text-white/35">
                                    <span className="text-indigo-300">(04)</span>
                                    <span>Technology</span>
                                    <span className="h-px flex-1 bg-white/[0.08]" />
                                </div>
                                <h2 className="pf-display mb-2 text-[clamp(1.5rem,2.8vw,2.1rem)] font-bold text-white">Technology modes & platform strategy</h2>
                                <p className="mb-6 max-w-3xl text-sm text-slate-400">
                                    We recommend the right engineering mode based on timeline, product complexity, and long-term maintainability.
                                </p>
                                <div className="grid gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-2">
                                    {service.deliveryModes.map((mode) => (
                                        <article key={mode.mode} className="group bg-[#0B0F19] p-7 transition-colors duration-500 hover:bg-[#10152a]">
                                            <h3 className="pf-display text-lg font-bold text-white">{mode.mode}</h3>
                                            <p className="mt-2 text-sm leading-relaxed text-slate-400">{mode.useCase}</p>
                                            <p className="pf-mono mt-4 text-[9px] uppercase tracking-[0.2em] text-indigo-300">Stack: {mode.stack}</p>
                                        </article>
                                    ))}
                                </div>
                            </section>
                        ) : null}

                        {service.executionModel?.length ? (
                            <section>
                                <div className="pf-mono mb-2 flex items-center gap-4 text-[11px] uppercase tracking-[0.35em] text-white/35">
                                    <span className="text-indigo-300">(05)</span>
                                    <span>Execution</span>
                                    <span className="h-px flex-1 bg-white/[0.08]" />
                                </div>
                                <h2 className="pf-display mb-4 text-[clamp(1.5rem,2.8vw,2.1rem)] font-bold text-white">Design to QA and release</h2>
                                <div className="border-t border-white/[0.08]">
                                    {service.executionModel.map((stage, index) => (
                                        <article
                                            key={stage.stage}
                                            className="group grid grid-cols-[auto_1fr] items-start gap-5 border-b border-white/[0.08] py-6 sm:grid-cols-[90px_1fr] sm:gap-8"
                                        >
                                            <span className="pf-display text-3xl font-extrabold leading-none text-white/[0.08] transition-colors duration-500 group-hover:text-indigo-400/50 sm:text-5xl">
                                                0{index + 1}
                                            </span>
                                            <div>
                                                <h3 className="pf-display text-lg font-bold text-white">{stage.stage}</h3>
                                                <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{stage.focus}</p>
                                                <p className="pf-mono mt-3 text-[9px] uppercase tracking-[0.2em] text-slate-500">Deliverables: {stage.deliverables}</p>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </section>
                        ) : null}

                        <section>
                            <div className="pf-mono mb-2 flex items-center gap-4 text-[11px] uppercase tracking-[0.35em] text-white/35">
                                <span className="text-indigo-300">(06)</span>
                                <span>Industries</span>
                                <span className="h-px flex-1 bg-white/[0.08]" />
                            </div>
                            <h2 className="pf-display mb-4 text-[clamp(1.5rem,2.8vw,2.1rem)] font-bold text-white">Industries we support</h2>
                            <div className="flex flex-wrap gap-2.5">
                                {industries.map((industry) => (
                                    <span
                                        key={industry}
                                        className="pf-mono rounded-full border border-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-slate-300 transition-colors duration-300 hover:border-indigo-300/50 hover:text-white"
                                    >
                                        {industry}
                                    </span>
                                ))}
                            </div>
                        </section>

                        <section>
                            <div className="pf-mono mb-2 flex items-center gap-4 text-[11px] uppercase tracking-[0.35em] text-white/35">
                                <span className="text-indigo-300">(07)</span>
                                <span>Working Modes</span>
                                <span className="h-px flex-1 bg-white/[0.08]" />
                                <GitBranch className="h-4 w-4 text-indigo-300" />
                            </div>
                            <h2 className="pf-display mb-2 text-[clamp(1.5rem,2.8vw,2.1rem)] font-bold text-white">Working modes</h2>
                            <p className="mb-6 max-w-3xl text-sm text-slate-400">
                                Engagement models are selected based on delivery speed, product complexity, and internal team readiness.
                            </p>
                            <div className="grid gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-2">
                                {workingModes.map((mode) => (
                                    <article key={mode.title} className="group bg-[#0B0F19] p-7 transition-colors duration-500 hover:bg-[#10152a]">
                                        <h3 className="pf-display text-lg font-bold text-white">{mode.title}</h3>
                                        <p className="mt-2 text-sm leading-relaxed text-slate-400">{mode.detail}</p>
                                        <p className="pf-mono mt-4 text-[9px] uppercase tracking-[0.2em] text-indigo-300">Best fit: {mode.bestFit}</p>
                                    </article>
                                ))}
                            </div>
                        </section>

                        <section>
                            <div className="pf-mono mb-2 flex items-center gap-4 text-[11px] uppercase tracking-[0.35em] text-white/35">
                                <span className="text-indigo-300">(08)</span>
                                <span>Architecture</span>
                                <span className="h-px flex-1 bg-white/[0.08]" />
                                <Layers3 className="h-4 w-4 text-indigo-300" />
                            </div>
                            <h2 className="pf-display mb-2 text-[clamp(1.5rem,2.8vw,2.1rem)] font-bold text-white">Working architecture</h2>
                            <p className="mb-6 max-w-3xl text-sm text-slate-400">{architectureModel.summary}</p>
                            <div className="border-t border-white/[0.08]">
                                {architectureModel.layers.map((layer, index) => (
                                    <article
                                        key={layer.name}
                                        className="group grid grid-cols-[auto_1fr] items-start gap-5 border-b border-white/[0.08] py-5 sm:grid-cols-[90px_1fr] sm:gap-8"
                                    >
                                        <span className="pf-display text-3xl font-extrabold leading-none text-white/[0.08] transition-colors duration-500 group-hover:text-indigo-400/50 sm:text-4xl">
                                            0{index + 1}
                                        </span>
                                        <div>
                                            <h3 className="pf-display text-base font-bold text-white sm:text-lg">{layer.name}</h3>
                                            <p className="mt-1 text-sm leading-relaxed text-slate-400">{layer.detail}</p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </section>

                        {service.techStack?.length ? (
                            <section>
                                <div className="pf-mono mb-2 flex items-center gap-4 text-[11px] uppercase tracking-[0.35em] text-white/35">
                                    <span className="text-indigo-300">(09)</span>
                                    <span>Stack</span>
                                    <span className="h-px flex-1 bg-white/[0.08]" />
                                </div>
                                <h2 className="pf-display mb-5 text-[clamp(1.5rem,2.8vw,2.1rem)] font-bold text-white">Technology & governance</h2>
                                <div className="mb-5 flex flex-wrap gap-2.5">
                                    {service.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="pf-mono rounded-full border border-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-slate-300 transition-colors duration-300 hover:border-indigo-300/50 hover:text-white"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-start gap-3 rounded-2xl border border-indigo-300/25 bg-indigo-500/[0.08] p-5 text-sm text-indigo-100">
                                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" />
                                    <p>Security practices, maintainability standards, and QA checkpoints are embedded throughout delivery.</p>
                                </div>
                                {service.toolingStack?.length ? (
                                    <div className="mt-8">
                                        <h3 className="pf-display mb-4 text-lg font-bold text-white">Engineering Toolchain & IDEs</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {service.toolingStack.map((tool) => (
                                                <span key={tool} className="pf-mono rounded-full border border-white/10 px-3 py-1.5 text-[9px] uppercase tracking-[0.16em] text-slate-400">
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ) : null}
                            </section>
                        ) : null}

                        {service.faqs?.length ? (
                            <section>
                                <div className="pf-mono mb-2 flex items-center gap-4 text-[11px] uppercase tracking-[0.35em] text-white/35">
                                    <span className="text-indigo-300">(10)</span>
                                    <span>FAQ</span>
                                    <span className="h-px flex-1 bg-white/[0.08]" />
                                </div>
                                <h2 className="pf-display mb-4 text-[clamp(1.5rem,2.8vw,2.1rem)] font-bold text-white">Common questions</h2>
                                <div className="border-t border-white/[0.08]">
                                    {service.faqs.map((faq, index) => (
                                        <div key={faq.q} className="grid grid-cols-[auto_1fr] gap-5 border-b border-white/[0.08] py-6 sm:gap-8">
                                            <span className="pf-mono text-xs text-indigo-300">0{index + 1}</span>
                                            <div>
                                                <p className="pf-display text-base font-bold text-white sm:text-lg">{faq.q}</p>
                                                <p className="mt-2 text-sm leading-relaxed text-slate-400">{faq.a}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        ) : null}

                        <section>
                            <div className="pf-mono mb-2 flex items-center gap-4 text-[11px] uppercase tracking-[0.35em] text-white/35">
                                <span className="text-indigo-300">(11)</span>
                                <span>More</span>
                                <span className="h-px flex-1 bg-white/[0.08]" />
                            </div>
                            <h2 className="pf-display mb-4 text-[clamp(1.5rem,2.8vw,2.1rem)] font-bold text-white">Related services</h2>
                            <div className="grid gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-3">
                                {relatedServices.map((item) => (
                                    <button
                                        key={item.slug}
                                        onClick={() => navigate(`/enitexa.ai/services/${item.slug}`)}
                                        data-cursor="View"
                                        className="group bg-[#0B0F19] p-7 text-left transition-colors duration-500 hover:bg-[#10152a]"
                                    >
                                        <div className="mb-6 flex items-start justify-between">
                                            <h3 className="pf-display text-base font-bold text-white">{item.title}</h3>
                                            <ArrowRight className="h-4 w-4 shrink-0 text-slate-500 transition-all duration-300 group-hover:-rotate-45 group-hover:text-white" />
                                        </div>
                                        <p className="text-sm leading-relaxed text-slate-400 line-clamp-3">{item.overview}</p>
                                    </button>
                                ))}
                            </div>
                        </section>
                    </div>

                    <div className="space-y-5">
                        <aside className="rounded-3xl border border-white/[0.08] bg-[#0B0F19] p-7">
                            <p className="pf-mono mb-5 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-slate-400">
                                <Clock3 className="h-4 w-4 text-indigo-300" />
                                Delivery Timeline
                            </p>
                            <ul className="space-y-0">
                                {service.timeline.map((item, index) => (
                                    <li key={item} className="flex items-baseline gap-4 border-b border-white/[0.07] py-3.5 text-sm text-slate-200 last:border-b-0">
                                        <span className="pf-mono text-[10px] text-indigo-300">0{index + 1}</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            {service.timelineNote ? <p className="mt-4 text-xs text-slate-500">{service.timelineNote}</p> : null}
                        </aside>

                        <aside className="rounded-3xl border border-white/[0.08] bg-[#0B0F19] p-7">
                            <p className="pf-mono mb-5 text-[10px] uppercase tracking-[0.28em] text-slate-400">Included in Service</p>
                            <ul className="space-y-3">
                                {service.whatYouGet.map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </aside>

                        {service.clientCollaboration?.length ? (
                            <aside className="rounded-3xl border border-white/[0.08] bg-[#0B0F19] p-7">
                                <p className="pf-mono mb-5 text-[10px] uppercase tracking-[0.28em] text-slate-400">Client Collaboration Model</p>
                                <ul className="space-y-3">
                                    {service.clientCollaboration.map((item) => (
                                        <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-300" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </aside>
                        ) : null}

                        {service.growthSupport?.length ? (
                            <aside className="rounded-3xl border border-white/[0.08] bg-[#0B0F19] p-7">
                                <p className="pf-mono mb-5 text-[10px] uppercase tracking-[0.28em] text-slate-400">Product & Marketing Readiness</p>
                                <ul className="space-y-3">
                                    {service.growthSupport.map((item) => (
                                        <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </aside>
                        ) : null}

                        <aside className="rounded-3xl border border-white/[0.08] bg-[#0B0F19] p-7">
                            <p className="pf-mono mb-5 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-slate-400">
                                <BarChart3 className="h-4 w-4 text-indigo-300" />
                                Status & Governance
                            </p>
                            <div className="space-y-0">
                                {statusGovernance.map((item) => (
                                    <article key={item.title} className="border-b border-white/[0.07] py-4 first:pt-0 last:border-b-0 last:pb-0">
                                        <p className="pf-display text-sm font-bold text-white">{item.title}</p>
                                        <p className="mt-1 text-sm leading-relaxed text-slate-400">{item.detail}</p>
                                        <p className="pf-mono mt-2 text-[9px] uppercase tracking-[0.2em] text-indigo-300">{item.cadence}</p>
                                    </article>
                                ))}
                            </div>
                        </aside>

                        <aside className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0B0F19] p-7">
                            <div className="pf-dotgrid absolute inset-0 opacity-30" aria-hidden="true" />
                            <div className="relative">
                                <h3 className="pf-display text-xl font-bold text-white">Need a custom package?</h3>
                                <p className="mt-2 text-sm leading-relaxed text-slate-400">Share your objectives and we will propose a tailored scope, timeline, and delivery model.</p>
                                <button
                                    onClick={() => navigate('/enitexa.ai/contact')}
                                    data-cursor="Talk"
                                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-white bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-500 hover:bg-transparent hover:text-white"
                                >
                                    <MessageCircle className="h-4 w-4" />
                                    Talk to Enitexa.Ai
                                </button>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </EnitexaPageShell>
    );
};

export default ServiceDetail;
