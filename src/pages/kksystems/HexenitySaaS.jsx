import React from 'react';
import { motion } from 'framer-motion';
import {
    AlertTriangle,
    ArrowRight,
    BarChart3,
    Building2,
    Calendar,
    CheckCircle2,
    Database,
    DollarSign,
    Eye,
    Layers3,
    Search,
    Shield,
    Sparkles,
    Users,
    Workflow,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import HexenityPageShell from '../../components/KkSystems/HexenityPageShell';

const platformModules = [
    { title: 'Operations Control', description: 'Centralized visibility for teams, processes, and delivery status.', icon: Workflow },
    { title: 'Business Analytics', description: 'Actionable reporting and executive dashboards for decision making.', icon: BarChart3 },
    { title: 'Data Foundation', description: 'Secure data architecture with role-based access and auditability.', icon: Database },
    { title: 'Modular Expansion', description: 'Add ERP modules incrementally as your business grows.', icon: Layers3 },
];

const valuePoints = [
    'Unifies teams under one operational workflow',
    'Reduces manual process overhead and delays',
    'Provides real-time business insight visibility',
    'Designed for scale and long-term maintainability',
];

const managementPillars = [
    {
        title: 'Complete visibility',
        description: 'Discover every SaaS app, owner, spend line, and risk profile across departments.',
        icon: Search,
    },
    {
        title: 'License optimization',
        description: 'Track adoption in real time, reclaim unused seats, and remove duplicate subscriptions.',
        icon: Eye,
    },
    {
        title: 'Cost control',
        description: 'Align spend to business value and reduce renewal leakage with benchmark-led planning.',
        icon: DollarSign,
    },
    {
        title: 'Risk governance',
        description: 'Control shadow IT, policy exceptions, and security exposure before they become incidents.',
        icon: Shield,
    },
];

const keyChallenges = [
    {
        title: 'Blind spots across business units',
        detail: 'SaaS buying is decentralized, so many tools are purchased without central visibility.',
        outcome: 'Incomplete inventory and unmanaged exposure',
    },
    {
        title: 'License waste and low adoption',
        detail: 'Seats are often over-provisioned while actual usage remains low.',
        outcome: 'High recurring spend with low ROI',
    },
    {
        title: 'Shadow IT and compliance gaps',
        detail: 'Unvetted applications can bypass security review and legal controls.',
        outcome: 'Higher security and audit risk',
    },
    {
        title: 'Renewal surprises',
        detail: 'Auto-renewals and scattered contracts reduce negotiation leverage.',
        outcome: 'Cost overruns and avoidable vendor lock-in',
    },
];

const lifecycleWorkstreams = [
    {
        title: 'Inventory Management',
        summary: 'Create one system of record for apps, owners, spend, contracts, and security data.',
        points: ['Continuous app discovery', 'Ownership mapping by function', 'Spend and risk segmentation'],
    },
    {
        title: 'License Management',
        summary: 'Manage seat lifecycle from provisioning to offboarding and optimization.',
        points: ['Usage monitoring and rightsizing', 'Re-harvest and reallocate idle licenses', 'Consolidate redundant tools'],
    },
    {
        title: 'Renewal Management',
        summary: 'Run renewals programmatically with calendar discipline and negotiation prep.',
        points: ['Renewal pipeline with alerts', 'Benchmark-backed negotiations', 'Budget vs actual control'],
    },
];

const warningSignals = [
    'No SaaS sourcing and approval policy',
    'Too many or too few licenses for teams',
    'No utilization or adoption measurement',
    'Redundant tools with overlapping features',
    'No security/compliance vetting for new apps',
    'No full visibility into SaaS cost by department',
    'Unexpected renewals and unplanned spend spikes',
];

const rolloutPlan = [
    {
        phase: '30 Days',
        focus: 'Discovery and baseline',
        steps: ['Build initial inventory', 'Identify top spend apps', 'Map app owners and contracts'],
    },
    {
        phase: '60 Days',
        focus: 'Optimization and governance',
        steps: ['Rightsize licenses', 'Create approval workflow', 'Start renewal calendar process'],
    },
    {
        phase: '90 Days',
        focus: 'Program maturity',
        steps: ['Executive KPI dashboard', 'Cross-functional operating rhythm', 'Savings and risk reporting'],
    },
];

const stakeholderModel = ['IT', 'Finance', 'Procurement', 'Security', 'Legal', 'Business Unit Leaders'];

const kpiCards = [
    { label: 'Inventory Coverage', value: '95%+', note: 'Tracked apps vs discovered apps' },
    { label: 'License Utilization', value: '70-85%', note: 'Healthy active-seat usage range' },
    { label: 'Renewal Predictability', value: '90 days', note: 'Minimum lead time before renewal' },
    { label: 'Shadow IT Reduction', value: '-30%', note: 'Quarter-on-quarter unsanctioned app drop' },
];

export default function HexenitySaaS() {
    const navigate = useNavigate();

    return (
        <HexenityPageShell
            badge="Hexenity SaaS"
            title="A practical SaaS layer for business operations"
            subtitle="Hexenity SaaS helps growing teams standardize processes, improve reporting, and execute faster with a reliable, customizable platform foundation."
            backLabel="Back to Core Hexenity"
            onBack={() => navigate('/hexenity/core-hexenity')}
            actions={(
                <button
                    onClick={() => navigate('/hexenity/contact')}
                    className="inline-flex items-center gap-2 rounded-xl border border-indigo-300/35 bg-indigo-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-indigo-100 transition hover:bg-indigo-500/30"
                >
                    Request Demo
                    <ArrowRight className="h-4 w-4" />
                </button>
            )}
        >
            <div className="space-y-8">
                <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {managementPillars.map((pillar) => (
                        <article key={pillar.title} className="premium-surface rounded-2xl p-5">
                            <pillar.icon className="h-5 w-5 text-indigo-300" />
                            <h3 className="mt-3 text-base font-bold text-white">{pillar.title}</h3>
                            <p className="mt-2 text-sm text-slate-300">{pillar.description}</p>
                        </article>
                    ))}
                </section>

                <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                    <article className="premium-surface gradient-stroke rounded-3xl p-7">
                        <h2 className="inline-flex items-center gap-2 text-2xl font-bold text-white">
                            <Building2 className="h-6 w-6 text-indigo-300" />
                            What SaaS Management means in practice
                        </h2>
                        <p className="mt-3 text-slate-300">
                            SaaS management is the discipline of proactively governing inventory, licenses, and renewals so organizations can control spend, improve adoption, and reduce risk.
                        </p>
                        <p className="mt-3 text-slate-300">
                            Hexenity SaaS is designed as an operating layer for this model, giving leadership and delivery teams one shared source of truth.
                        </p>
                    </article>

                    <article className="premium-surface rounded-3xl p-7">
                        <h3 className="inline-flex items-center gap-2 text-xl font-bold text-white">
                            <AlertTriangle className="h-5 w-5 text-indigo-300" />
                            Common warning signals
                        </h3>
                        <div className="mt-4 space-y-3 text-sm text-slate-200">
                            {warningSignals.map((item) => (
                                <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </article>
                </section>

                <section className="grid gap-6 md:grid-cols-2">
                    {keyChallenges.map((item, index) => (
                        <motion.article
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.06 }}
                            className="premium-surface gradient-stroke rounded-3xl p-6"
                        >
                            <h3 className="text-xl font-bold text-white">{item.title}</h3>
                            <p className="mt-2 text-slate-300">{item.detail}</p>
                            <p className="mt-3 inline-flex rounded-full border border-amber-300/35 bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-amber-200">
                                {item.outcome}
                            </p>
                        </motion.article>
                    ))}
                </section>

                <section className="premium-surface rounded-3xl p-7">
                    <h2 className="text-2xl font-bold text-white">Three core SaaS workstreams</h2>
                    <div className="mt-5 grid gap-4 lg:grid-cols-3">
                        {lifecycleWorkstreams.map((stream) => (
                            <article key={stream.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                                <h3 className="text-lg font-bold text-white">{stream.title}</h3>
                                <p className="mt-2 text-sm text-slate-300">{stream.summary}</p>
                                <ul className="mt-4 space-y-2 text-sm text-slate-200">
                                    {stream.points.map((point) => (
                                        <li key={point} className="flex items-start gap-2">
                                            <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                    <article className="premium-surface rounded-3xl p-7">
                        <h2 className="inline-flex items-center gap-2 text-2xl font-bold text-white">
                            <Calendar className="h-6 w-6 text-indigo-300" />
                            30-60-90 rollout framework
                        </h2>
                        <div className="mt-5 space-y-4">
                            {rolloutPlan.map((phase) => (
                                <div key={phase.phase} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-indigo-200">{phase.phase}</p>
                                    <h3 className="mt-1 text-lg font-bold text-white">{phase.focus}</h3>
                                    <ul className="mt-3 space-y-1.5 text-sm text-slate-300">
                                        {phase.steps.map((step) => (
                                            <li key={step}>- {step}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </article>

                    <article className="premium-surface rounded-3xl p-7">
                        <h2 className="inline-flex items-center gap-2 text-2xl font-bold text-white">
                            <Users className="h-6 w-6 text-indigo-300" />
                            Ownership model
                        </h2>
                        <p className="mt-3 text-slate-300">
                            Strong SaaS governance is cross-functional. Hexenity supports IT, Finance, Procurement, and Security in one execution model.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {stakeholderModel.map((role) => (
                                <span key={role} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-200">
                                    {role}
                                </span>
                            ))}
                        </div>
                        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                            <h3 className="text-base font-bold text-white">Typical delivery scenarios</h3>
                            <div className="mt-3 space-y-2 text-sm text-slate-300">
                                {valuePoints.map((item) => (
                                    <p key={item} className="rounded-lg border border-white/10 bg-black/10 px-3 py-2">
                                        {item}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </article>
                </section>

                <section className="premium-surface rounded-3xl p-7">
                    <h2 className="text-2xl font-bold text-white">Leadership KPI view</h2>
                    <p className="mt-2 text-sm text-slate-300">
                        Track these metrics consistently to prove ROI and improve governance maturity quarter over quarter.
                    </p>
                    <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                        {kpiCards.map((kpi) => (
                            <article key={kpi.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                <p className="text-xs uppercase tracking-[0.14em] text-slate-400">{kpi.label}</p>
                                <p className="mt-2 text-2xl font-black text-white">{kpi.value}</p>
                                <p className="mt-1 text-xs text-slate-300">{kpi.note}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="grid gap-6 md:grid-cols-2">
                    {platformModules.map((module, index) => (
                        <motion.article
                            key={module.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="premium-surface gradient-stroke rounded-3xl p-6"
                        >
                            <module.icon className="h-6 w-6 text-indigo-300" />
                            <h3 className="mt-4 text-xl font-bold text-white">{module.title}</h3>
                            <p className="mt-2 text-slate-300">{module.description}</p>
                        </motion.article>
                    ))}
                </section>

                <section className="rounded-3xl border border-indigo-300/25 bg-indigo-500/15 p-8 text-center">
                    <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-indigo-200">
                        <Sparkles className="h-3.5 w-3.5" />
                        Collaboration
                    </p>
                    <h2 className="mt-3 text-3xl font-black text-white">Need a complete SaaS management operating model?</h2>
                    <p className="mx-auto mt-3 max-w-3xl text-slate-200">
                        We help teams move from spreadsheet-driven tracking to a governed, measurable SaaS program across inventory, licensing, and renewals.
                    </p>
                    <button
                        onClick={() => navigate('/hexenity/contact')}
                        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
                    >
                        Book SaaS Strategy Session
                        <ArrowRight className="h-4 w-4" />
                    </button>
                </section>
            </div>
        </HexenityPageShell>
    );
}
