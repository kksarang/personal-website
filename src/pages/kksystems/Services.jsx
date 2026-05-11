import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ClipboardCheck, FileText, Handshake, ShieldCheck, Workflow } from 'lucide-react';
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
                    className="inline-flex items-center gap-2 rounded-xl border border-indigo-300/35 bg-indigo-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-indigo-100 transition hover:bg-indigo-500/30"
                >
                    Discuss a Service Scope
                    <ArrowRight className="h-4 w-4" />
                </button>
            )}
        >
            <div className="space-y-8">
                <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <article className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Active Service Lines</p>
                        <p className="mt-2 text-2xl font-bold text-white">{services.length}</p>
                    </article>
                    <article className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Delivery Model</p>
                        <p className="mt-2 text-2xl font-bold text-white">Milestone-led</p>
                    </article>
                    <article className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Coverage</p>
                        <p className="mt-2 text-2xl font-bold text-white">End-to-end</p>
                    </article>
                    <article className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Post-Launch Support</p>
                        <p className="mt-2 text-2xl font-bold text-white">Included</p>
                    </article>
                </section>

                <section className="premium-surface gradient-stroke rounded-3xl p-7">
                    <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                        <h2 className="text-2xl font-bold text-white">All Services</h2>
                        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-300/30 bg-indigo-500/10 px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-indigo-200">
                            <ClipboardCheck className="h-3.5 w-3.5" />
                            Professional service catalog
                        </span>
                    </div>
                    <div className="grid gap-4 lg:grid-cols-2">
                        {services.map((service) => (
                            <article key={service.slug} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-slate-300">{service.overview}</p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {service.techStack.slice(0, 4).map((tech) => (
                                        <span key={tech} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-200">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <button
                                    onClick={() => navigate(`/hexenity/services/${service.slug}`)}
                                    className="mt-5 inline-flex items-center gap-2 rounded-lg border border-indigo-300/30 bg-indigo-500/15 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-indigo-100 transition hover:bg-indigo-500/25"
                                >
                                    View Service Details
                                    <ArrowRight className="h-3.5 w-3.5" />
                                </button>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="premium-surface rounded-3xl p-7">
                    <h2 className="mb-5 text-2xl font-bold text-white">Service Workflow: How Delivery Is Completed</h2>
                    <div className="space-y-3">
                        {deliveryWorkflow.map((step, index) => (
                            <article key={step.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                                <div className="mb-2 flex items-center gap-3">
                                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-indigo-500/20 text-xs font-bold text-indigo-100">
                                        {index + 1}
                                    </span>
                                    <p className="text-xs uppercase tracking-[0.14em] text-indigo-300">Stage {index + 1}</p>
                                </div>
                                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                                <p className="mt-1 text-slate-300">{step.detail}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="grid gap-5 lg:grid-cols-3">
                    {transferMethod.map((item) => (
                        <article key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                            <item.icon className="mb-3 h-5 w-5 text-indigo-300" />
                            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.detail}</p>
                        </article>
                    ))}
                </section>

                <section className="rounded-3xl border border-indigo-300/25 bg-indigo-500/15 p-6">
                    <h3 className="inline-flex items-center gap-2 text-xl font-bold text-white">
                        <ShieldCheck className="h-5 w-5 text-indigo-200" />
                        Working Method and Transition Assurance
                    </h3>
                    <p className="mt-2 text-slate-200">
                        Every engagement includes milestone governance, quality checkpoints, documentation, and transition planning so your internal team can confidently operate the solution after launch.
                    </p>
                    <ul className="mt-4 space-y-2">
                        {[
                            'Clear ownership mapping for both teams',
                            'Weekly stakeholder updates with decision logs',
                            'Delivery artifacts prepared for long-term maintainability',
                        ].map((point) => (
                            <li key={point} className="flex items-start gap-2 text-sm text-slate-100">
                                <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" />
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </HexenityPageShell>
    );
};

export default ServicesPage;
