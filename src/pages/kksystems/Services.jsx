import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, CheckCircle2, FileText, Handshake, ShieldCheck, Workflow } from 'lucide-react';
import HexenityPageShell from '../../components/KkSystems/HexenityPageShell';
import { servicesData } from '../../data/servicesData';

const deliveryWorkflow = [
    {
        title: 'Discovery and Scope Definition',
        detail: 'Business goals, constraints, target outcomes, and stakeholder expectations are documented into a scoped delivery plan.',
    },
    {
        title: 'Solution Blueprint and Milestones',
        detail: 'Architecture, UX direction, delivery timeline, and communication cadence are finalized before execution starts.',
    },
    {
        title: 'Build and Iteration Cycles',
        detail: 'Engineering and design move in milestone sprints with weekly reviews, risk logs, and progress visibility.',
    },
    {
        title: 'Quality Assurance and Sign-off',
        detail: 'Functional QA, performance checks, and acceptance criteria validation are completed with client-side confirmation.',
    },
    {
        title: 'Launch, Transfer, and Governance',
        detail: 'Deployments, handover documentation, access transition, and support governance are completed in a structured rollout.',
    },
];

const transferMethod = [
    {
        title: 'Operational handover package',
        detail: 'Source code structure, deployment runbooks, credential matrix, and maintenance checklists are delivered.',
        icon: FileText,
    },
    {
        title: 'Knowledge transfer sessions',
        detail: 'Live walkthroughs with your internal team cover architecture, release process, and incident handling.',
        icon: Workflow,
    },
    {
        title: 'Transition governance',
        detail: 'Role ownership, escalation paths, and post-launch SLA/support model are established for continuity.',
        icon: Handshake,
    },
];

const ServicesPage = () => {
    const navigate = useNavigate();
    const services = Object.entries(servicesData).map(([slug, service]) => ({ slug, ...service }));

    return (
        <HexenityPageShell
            badge="Service Portfolio"
            title="Professional services with structured delivery governance"
            subtitle="Explore all Hexenity service lines, the execution workflow we follow, and the transfer model we use to move delivery into stable operations."
            backLabel="Back to Home"
            onBack={() => navigate('/hexenity')}
            actions={(
                <button
                    onClick={() => navigate('/hexenity/contact')}
                    className="inline-flex items-center gap-2 rounded-full border border-indigo-300/35 bg-indigo-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-indigo-100 transition hover:bg-indigo-500/30"
                >
                    Discuss a Service Scope
                    <ArrowRight className="h-4 w-4" />
                </button>
            )}
        >
            <div className="space-y-20">
                <section className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] lg:grid-cols-4">
                    {[
                        ['Active Service Lines', `${services.length}`],
                        ['Delivery Model', 'Milestone-led'],
                        ['Coverage', 'End-to-end'],
                        ['Post-Launch Support', 'Included'],
                    ].map(([label, value]) => (
                        <article key={label} className="group bg-[#0B0F19] p-6 transition-colors duration-500 hover:bg-[#10152a]">
                            <p className="pf-mono text-[9px] uppercase tracking-[0.22em] text-slate-500">{label}</p>
                            <p className="pf-display mt-3 text-2xl font-bold text-white">{value}</p>
                        </article>
                    ))}
                </section>

                <section>
                    <div className="pf-mono mb-2 flex items-center gap-4 text-[11px] uppercase tracking-[0.35em] text-white/35">
                        <span className="text-indigo-300">(01)</span>
                        <span>Service Catalog</span>
                        <span className="h-px flex-1 bg-white/[0.08]" />
                        <span className="hidden sm:block">{services.length} lines</span>
                    </div>
                    <h2 className="pf-display mb-4 text-[clamp(1.7rem,3.4vw,2.6rem)] font-bold text-white">
                        All Services
                    </h2>
                    <div className="border-t border-white/[0.08]">
                        {services.map((service, index) => (
                            <button
                                key={service.slug}
                                onClick={() => navigate(`/hexenity/services/${service.slug}`)}
                                data-cursor="View"
                                className="pf-row-link group grid w-full grid-cols-[1fr_auto] items-center gap-4 border-b border-white/[0.08] px-2 py-8 text-left transition-colors duration-300 sm:grid-cols-[auto_1fr_auto] sm:gap-10 sm:px-6 sm:py-10"
                            >
                                <span className="pf-mono hidden text-xs text-slate-500 transition-colors duration-300 group-hover:text-white/70 sm:block">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <span className="min-w-0">
                                    <span className="pf-display block text-[clamp(1.3rem,2.6vw,2rem)] font-bold leading-tight text-white transition-transform duration-500 group-hover:translate-x-2">
                                        {service.title}
                                    </span>
                                    <span className="mt-2 block max-w-2xl text-sm leading-relaxed text-slate-400 transition-colors duration-300 group-hover:text-white/75">
                                        {service.overview}
                                    </span>
                                    <span className="mt-4 flex flex-wrap gap-2">
                                        {service.techStack.slice(0, 4).map((tech) => (
                                            <span
                                                key={tech}
                                                className="pf-mono rounded-full border border-white/10 px-3 py-1 text-[9px] uppercase tracking-[0.18em] text-slate-400 transition-colors duration-300 group-hover:border-white/30 group-hover:text-white"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </span>
                                </span>
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all duration-500 group-hover:rotate-45 group-hover:border-white group-hover:text-white sm:h-14 sm:w-14">
                                    <ArrowUpRight className="h-5 w-5" />
                                </span>
                            </button>
                        ))}
                    </div>
                </section>

                <section>
                    <div className="pf-mono mb-2 flex items-center gap-4 text-[11px] uppercase tracking-[0.35em] text-white/35">
                        <span className="text-indigo-300">(02)</span>
                        <span>Delivery Workflow</span>
                        <span className="h-px flex-1 bg-white/[0.08]" />
                    </div>
                    <h2 className="pf-display mb-4 text-[clamp(1.7rem,3.4vw,2.6rem)] font-bold text-white">
                        How delivery is completed
                    </h2>
                    <div className="border-t border-white/[0.08]">
                        {deliveryWorkflow.map((step, index) => (
                            <article
                                key={step.title}
                                className="group grid grid-cols-[auto_1fr] items-start gap-6 border-b border-white/[0.08] py-8 sm:grid-cols-[110px_1fr] sm:gap-10"
                            >
                                <span className="pf-display text-4xl font-extrabold leading-none text-white/[0.08] transition-colors duration-500 group-hover:text-indigo-400/50 sm:text-6xl">
                                    0{index + 1}
                                </span>
                                <div>
                                    <h3 className="pf-display text-xl font-bold text-white sm:text-2xl">{step.title}</h3>
                                    <p className="mt-2 max-w-3xl leading-relaxed text-slate-400">{step.detail}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section>
                    <div className="pf-mono mb-2 flex items-center gap-4 text-[11px] uppercase tracking-[0.35em] text-white/35">
                        <span className="text-indigo-300">(03)</span>
                        <span>Handover</span>
                        <span className="h-px flex-1 bg-white/[0.08]" />
                    </div>
                    <h2 className="pf-display mb-4 text-[clamp(1.7rem,3.4vw,2.6rem)] font-bold text-white">
                        Transfer model
                    </h2>
                    <div className="grid gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] lg:grid-cols-3">
                        {transferMethod.map((item, index) => (
                            <article key={item.title} className="group bg-[#0B0F19] p-8 transition-colors duration-500 hover:bg-[#10152a]">
                                <div className="mb-8 flex items-start justify-between">
                                    <span className="pf-display text-5xl font-extrabold text-white/[0.07] transition-colors duration-500 group-hover:text-indigo-400/40">
                                        0{index + 1}
                                    </span>
                                    <item.icon className="h-5 w-5 text-indigo-300 transition-transform duration-500 group-hover:-translate-y-1" />
                                </div>
                                <h3 className="pf-display text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.detail}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0B0F19] p-8 sm:p-12">
                    <div className="pf-dotgrid absolute inset-0 opacity-30" aria-hidden="true" />
                    <div className="relative">
                        <p className="pf-mono mb-4 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-indigo-300">
                            <ShieldCheck className="h-4 w-4" />
                            Transition Assurance
                        </p>
                        <h3 className="pf-display max-w-2xl text-2xl font-bold text-white sm:text-3xl">
                            Working method and transition assurance
                        </h3>
                        <p className="mt-3 max-w-2xl text-slate-300">
                            Every engagement includes milestone governance, quality checkpoints, documentation, and transition planning so your internal team can confidently operate the solution after launch.
                        </p>
                        <ul className="mt-6 space-y-3">
                            {[
                                'Clear ownership mapping for both teams',
                                'Weekly stakeholder updates with decision logs',
                                'Delivery artifacts prepared for long-term maintainability',
                            ].map((point) => (
                                <li key={point} className="flex items-start gap-3 text-sm text-slate-200">
                                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={() => navigate('/hexenity/contact')}
                            data-cursor="Talk"
                            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all duration-500 hover:bg-transparent hover:text-white"
                        >
                            Discuss a service scope
                            <ArrowRight className="h-4 w-4" />
                        </button>
                    </div>
                </section>
            </div>
        </HexenityPageShell>
    );
};

export default ServicesPage;
