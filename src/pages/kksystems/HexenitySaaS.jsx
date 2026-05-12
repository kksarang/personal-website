import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
    animate,
    AnimatePresence,
    motion,
    useInView,
    useReducedMotion,
} from 'framer-motion';
import {
    ArrowRight,
    BadgeCheck,
    Bell,
    Blocks,
    Bot,
    Boxes,
    Building2,
    Check,
    Cpu,
    CreditCard,
    FileText,
    Fingerprint,
    Gauge,
    GitBranch,
    Globe,
    Layers3,
    Lock,
    Receipt,
    RefreshCw,
    Shield,
    Sparkles,
    Users,
    Workflow,
    Zap,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
    Area,
    AreaChart,
    Bar,
    BarChart,
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
import HexenityPageShell from '../../components/KkSystems/HexenityPageShell';

/* —— Chart data (deterministic placeholders) —— */
const spendTrend = [
    { m: 'Jan', v: 182 },
    { m: 'Feb', v: 195 },
    { m: 'Mar', v: 188 },
    { m: 'Apr', v: 210 },
    { m: 'May', v: 226 },
    { m: 'Jun', v: 239 },
];

const utilizationBars = [
    { name: 'Design', pct: 78 },
    { name: 'Sales', pct: 64 },
    { name: 'Eng', pct: 91 },
    { name: 'Ops', pct: 55 },
];

const renewalLine = [
    { q: 'Q1', risk: 12 },
    { q: 'Q2', risk: 18 },
    { q: 'Q3', risk: 9 },
    { q: 'Q4', risk: 22 },
];

const auditActivity = [
    { t: 'Provision', val: 24 },
    { t: 'Deprov', val: 11 },
    { t: 'Role chg', val: 18 },
    { t: 'Exports', val: 7 },
];

const chartMutedAxis = { stroke: '#64748b', fontSize: 10 };
const tooltipStyles = {
    contentStyle: {
        background: 'rgba(15,23,42,0.95)',
        border: '1px solid rgba(148,163,184,0.25)',
        borderRadius: '10px',
        fontSize: '12px',
    },
};

function MetricTicker({ label, suffix = '', decimals = 0, endValue, duration = 1.75 }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-40px' });
    const prefersReducedMotion = useReducedMotion();
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (!inView) return undefined;
        if (prefersReducedMotion) {
            setDisplay(endValue);
            return undefined;
        }
        const ctrl = animate(0, endValue, {
            duration,
            ease: [0.22, 1, 0.36, 1],
            onUpdate: (latest) => setDisplay(latest),
        });
        return () => ctrl.stop();
    }, [inView, endValue, duration, prefersReducedMotion]);

    const formatted =
        decimals > 0
            ? display.toFixed(decimals)
            : Math.round(display).toLocaleString('en-US');

    return (
        <div ref={ref} className="text-center sm:text-left">
            <p className="hexenity-display text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-[2.15rem]">
                {formatted}
                {suffix}
            </p>
            <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">{label}</p>
        </div>
    );
}

function SpotlightHero({ navigate }) {
    const wrapRef = useRef(null);
    const [glow, setGlow] = useState({ x: 50, y: 40 });
    const move = useCallback((e) => {
        const el = wrapRef.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        setGlow({ x: e.clientX - r.left, y: e.clientY - r.top });
    }, []);

    const trustBadges = ['SOC2 Ready', 'Enterprise Grade', 'Role-Based Access', 'Realtime Analytics'];

    return (
        <section
            ref={wrapRef}
            onMouseMove={move}
            className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.12] bg-[#090f1c]"
            style={{
                boxShadow:
                    '0 0 0 1px rgba(99,102,241,0.08), inset 0 1px 0 rgba(255,255,255,0.06), 0 24px 80px -24px rgba(0,0,0,0.75)',
            }}
        >
            <div
                className="pointer-events-none absolute inset-0 opacity-90 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(680px circle at ${glow.x}px ${glow.y}px, rgba(99,102,241,0.12), transparent 55%)`,
                }}
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_85%_70%_at_50%_30%,black,transparent)]" />

            <div className="relative grid gap-8 p-6 md:grid-cols-[1fr_1.05fr] md:p-8 lg:gap-10">
                <div className="flex flex-col justify-center">
                    <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-300/90">
                        <span className="h-px w-6 bg-gradient-to-r from-indigo-400 to-transparent" />
                        Hexenity Operations Cloud
                    </p>
                    <h1 className="hexenity-display mt-4 max-w-[14ch] text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl xl:text-[3.55rem]">
                        Operational infrastructure for modern SaaS companies
                    </h1>
                    <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
                        Centralize subscriptions, governance, spend tracking, license optimization, and renewal workflows inside
                        one scalable operating system—built for CIOs, finance, and procurement to move faster with less chaos.
                    </p>
                    <div className="mt-7 flex flex-wrap gap-3">
                        <button
                            type="button"
                            onClick={() => navigate('/hexenity/contact')}
                            className="hexenity-display rounded-xl bg-indigo-600 px-7 py-3.5 text-sm font-semibold tracking-tight text-white shadow-[0_0_36px_-4px_rgba(99,102,241,0.55)] transition hover:bg-indigo-500 hover:shadow-[0_0_48px_-6px_rgba(99,102,241,0.65)]"
                        >
                            Start enterprise demo
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate('/hexenity/saas/demo')}
                            className="rounded-xl border-2 border-indigo-400/50 bg-indigo-500/15 px-7 py-3.5 text-sm font-semibold text-indigo-100 transition hover:border-indigo-300 hover:bg-indigo-500/25"
                        >
                            Interactive UI demos
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                document.getElementById('saas-showcase')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="rounded-xl border border-white/[0.2] bg-white/[0.08] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/[0.12]"
                        >
                            Embedded charts on this page
                        </button>
                    </div>
                    <div className="mt-8 flex flex-wrap gap-2">
                        {trustBadges.map((b) => (
                            <span
                                key={b}
                                className="rounded-full border border-white/[0.1] bg-black/30 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400"
                            >
                                {b}
                            </span>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="relative"
                >
                    <div className="absolute -inset-3 rounded-[1.35rem] bg-gradient-to-br from-indigo-500/20 via-transparent to-cyan-500/10 opacity-70 blur-xl" aria-hidden />
                    <div className="relative rounded-2xl border border-white/[0.12] bg-[#0c1224] shadow-[0_28px_100px_-32px_rgba(0,0,0,0.85)]">
                        <div className="flex items-center gap-2 border-b border-white/[0.08] px-4 py-2.5">
                            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                            <div className="ml-2 flex-1 rounded-lg border border-white/[0.06] bg-black/40 px-3 py-1 text-[10px] text-slate-500">
                                app.hexenity.io / operations / overview
                            </div>
                        </div>
                        <div className="grid gap-3 p-3 sm:grid-cols-12 sm:p-4">
                            <div className="rounded-xl border border-white/[0.08] bg-gradient-to-br from-slate-900/90 to-black/80 p-3 sm:col-span-8">
                                <div className="flex items-start justify-between gap-2">
                                    <div>
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">Spend analytics</p>
                                        <p className="hexenity-display mt-1 text-lg font-semibold tracking-tight text-white">$2.41M monitored</p>
                                    </div>
                                    <BadgeCheck className="h-4 w-4 shrink-0 text-emerald-400/90" aria-hidden />
                                </div>
                                <div className="mt-2 h-[120px] w-full sm:h-[136px]">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart data={spendTrend} margin={{ top: 4, right: 4, left: -18, bottom: 0 }}>
                                            <defs>
                                                <linearGradient id="saasSpend" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stopColor="#818cf8" stopOpacity={0.45} />
                                                    <stop offset="100%" stopColor="#818cf8" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                            <CartesianGrid strokeDasharray="4 8" stroke="rgba(148,163,184,0.08)" vertical={false} />
                                            <XAxis dataKey="m" {...chartMutedAxis} tickLine={false} axisLine={false} />
                                            <YAxis hide />
                                            <Tooltip contentStyle={tooltipStyles.contentStyle} />
                                            <Area type="monotone" dataKey="v" stroke="#a5b4fc" strokeWidth={2} fill="url(#saasSpend)" />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 sm:col-span-4">
                                <div className="rounded-xl border border-amber-500/25 bg-amber-500/[0.07] p-3">
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-amber-200/90">Renewal alerts</p>
                                    <ul className="mt-2 space-y-1.5 text-[11px] text-amber-100/90">
                                        <li className="flex justify-between gap-2">
                                            <span>Adobe CC — 14d</span>
                                            <span className="text-amber-300/90">Negotiate</span>
                                        </li>
                                        <li className="flex justify-between gap-2">
                                            <span>Salesforce — 41d</span>
                                            <span className="text-amber-300/90">Rightsize</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex-1 rounded-xl border border-white/[0.08] bg-black/35 p-3">
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">Live activity</p>
                                    <div className="mt-2 space-y-2">
                                        {['Finance exported vendors', 'IT revoked 3 seats', 'AI flagged duplicate CRM'].map((t, i) => (
                                            <div key={t} className="flex items-start gap-2 text-[11px] text-slate-300">
                                                <Bell className="mt-0.5 h-3 w-3 shrink-0 text-indigo-400" aria-hidden />
                                                <span>{t}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-xl border border-white/[0.08] bg-black/40 p-3 sm:col-span-5">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">Active subscriptions</p>
                                <table className="mt-2 w-full text-left text-[11px] text-slate-300">
                                    <thead>
                                        <tr className="border-b border-white/[0.06] text-[10px] uppercase tracking-[0.1em] text-slate-500">
                                            <th className="pb-2 font-medium">Vendor</th>
                                            <th className="pb-2 font-medium">Owners</th>
                                            <th className="pb-2 text-right font-medium">Risk</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            ['Notion', 'Ops', 'Low'],
                                            ['HubSpot', 'Rev', 'Med'],
                                            ['Datadog', 'Eng', 'Low'],
                                        ].map(([a, b, c]) => (
                                            <tr key={a} className="border-b border-white/[0.05]">
                                                <td className="py-2 font-medium text-white">{a}</td>
                                                <td className="py-2">{b}</td>
                                                <td className="py-2 text-right text-emerald-300/90">{c}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="rounded-xl border border-white/[0.08] bg-black/35 p-3 sm:col-span-4">
                                <div className="flex items-center justify-between">
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">License utilization</p>
                                    <Gauge className="h-4 w-4 text-cyan-400/90" aria-hidden />
                                </div>
                                <div className="mt-1 h-[88px]">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={utilizationBars} margin={{ top: 4, right: 4, left: -18, bottom: 0 }}>
                                            <CartesianGrid strokeDasharray="4 8" stroke="rgba(148,163,184,0.06)" vertical={false} />
                                            <XAxis dataKey="name" {...chartMutedAxis} tickLine={false} axisLine={false} />
                                            <YAxis hide domain={[0, 100]} />
                                            <Tooltip contentStyle={tooltipStyles.contentStyle} />
                                            <Bar dataKey="pct" radius={[4, 4, 0, 0]} fill="url(#saasBarGrad)" />
                                            <defs>
                                                <linearGradient id="saasBarGrad" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stopColor="#22d3ee" />
                                                    <stop offset="100%" stopColor="#6366f1" />
                                                </linearGradient>
                                            </defs>
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.06] p-3 sm:col-span-3">
                                <div className="flex items-center gap-2">
                                    <Bot className="h-4 w-4 text-emerald-300" aria-hidden />
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-200/85">AI insight</p>
                                </div>
                                <p className="mt-2 text-[11px] leading-relaxed text-emerald-100/90">
                                    12 seats dormant in Figma Org — reclaim ~$468/mo without blocking active squads.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

const problemChain = [
    'Departments buy tools independently',
    'No centralized ownership',
    'Shadow IT grows',
    'Duplicate subscriptions increase',
    'Renewal costs spike',
    'Security exposure expands across the stack',
];

const bentoModules = [
    {
        title: 'Inventory Engine',
        desc: 'Auto-discover SaaS sprawl — owners, renewal dates, and risk tiers in one system of record.',
        icon: Boxes,
        span: 'md:col-span-2 md:row-span-1',
        tone: 'from-violet-500/15 via-transparent to-transparent',
        chart: true,
        chartType: 'line',
    },
    {
        title: 'Finance Layer',
        desc: 'Allocate spend by cost center with forecast overlays before renewals blindside budgets.',
        icon: Receipt,
        span: 'md:col-span-1',
        tone: 'from-emerald-500/12 via-transparent',
    },
    {
        title: 'Procurement Bridge',
        desc: 'Route intake to approved vendors with SLA-aware approvals and negotiated guardrails.',
        icon: Workflow,
        span: 'md:col-span-1',
        tone: 'from-amber-500/12 via-transparent',
    },
    {
        title: 'Audit Trails',
        desc: 'Immutable event history for SOC2 narratives — exports your auditors actually accept.',
        icon: FileText,
        span: 'md:col-span-2',
        tone: 'from-slate-400/10 via-transparent',
        tall: true,
    },
    {
        title: 'AI Insights',
        desc: 'Correlate dormant licenses, duplication, and rogue spend before finance sees the invoice.',
        icon: Sparkles,
        span: 'md:col-span-2',
        tone: 'from-indigo-500/18 via-transparent',
        miniRows: ['Duplicate CRM stack detected', 'Slack tier drift vs usage'],
    },
    {
        title: 'Workflow Automation',
        desc: 'When headcount changes, licenses follow — provision, downgrade, revoke, log.',
        icon: Zap,
        span: 'md:col-span-1',
        tone: 'from-cyan-500/12 via-transparent',
    },
    {
        title: 'Vendor Intelligence',
        desc: 'Benchmark pricing signals and contract posture so renewals hit with leverage.',
        icon: Globe,
        span: 'md:col-span-1',
        tone: 'from-fuchsia-500/12 via-transparent',
    },
    {
        title: 'Access Governance',
        desc: 'RBAC-aligned app access tied to HRIS lifecycle — revoke what people forget.',
        icon: Shield,
        span: 'md:col-span-2 md:row-span-1',
        tone: 'from-rose-500/10 via-transparent',
        chartType: 'bar',
    },
    {
        title: 'API Integration Hub',
        desc: 'Event streams, HRIS connectors, ERP sync — webhook-first for your stack.',
        icon: Cpu,
        span: 'md:col-span-2',
        tone: 'from-sky-500/12 via-transparent',
    },
];

const workflowSteps = [
    { title: 'Employee joins', detail: 'Identity + role imported from HRIS' },
    { title: 'Role assigned', detail: 'Policy maps entitlement bundles automatically' },
    { title: 'Apps provisioned', detail: 'No ticket ping-pong; governed defaults' },
    { title: 'License tracked', detail: 'Real seat telemetry across vendors' },
    { title: 'Usage monitored', detail: 'Dormancy + overlap surfaced weekly' },
    { title: 'Renewal optimized', detail: 'Benchmarks & negotiation dossier prefilled' },
    { title: 'Audit-ready logs', detail: 'SOC2-ready export on demand' },
];

const showcaseTabs = [
    { id: 'spend', label: 'Spend analytics', caption: 'Track committed vs actual SaaS burn by team and vendor lineage.' },
    { id: 'license', label: 'License utilization', caption: 'Reclaim dormant seats without blocking power users.' },
    { id: 'vendor', label: 'Vendor intelligence', caption: 'Surface overlap, SLA risk, and renewal leverage signals.' },
    { id: 'compliance', label: 'Compliance monitoring', caption: 'Continuous control checks across access and sensitive data egress.' },
    { id: 'renewal', label: 'Renewal forecasting', caption: 'Model stacked renewals against budget envelopes and negotiate early.' },
];

const enterpriseFeatures = [
    { icon: Shield, title: 'RBAC & policies', narrative: 'Map org structure to entitlement bundles with exception workflows.', tag: 'Governance' },
    { icon: Fingerprint, title: 'SSO / SCIM', narrative: 'Federate identities and automate joiner-mover-leaver correctness.', tag: 'Identity' },
    { icon: FileText, title: 'Audit trails', narrative: 'Immutable evidence stream for auditors and regulators.', tag: 'Compliance' },
    { icon: Bell, title: 'Realtime events', narrative: 'Stream critical changes to Slack, Teams, or your SIEM.', tag: 'Ops' },
    { icon: GitBranch, title: 'Webhooks', narrative: 'First-class integrations for provisioning and finance systems.', tag: 'Integrations' },
    { icon: Bot, title: 'AI recommendations', narrative: 'Savings hypotheses ranked by recoverability & blast radius.', tag: 'Copilot' },
    { icon: Gauge, title: 'Usage insights', narrative: 'Adoption telemetry that finance trusts more than anecdotes.', tag: 'Analytics' },
    { icon: RefreshCw, title: 'Renewal forecasting', narrative: 'Rolling 90/180-day cash exposure with negotiation prep packs.', tag: 'Finance' },
    { icon: Building2, title: 'Vendor health', narrative: 'SLA adherence, outage history, contract drift in one glance.', tag: 'Risk' },
];

const techStack = [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'PostgreSQL',
    'Supabase',
    'Stripe',
    'Docker',
    'AWS',
    'Firebase',
    'Redis',
    'NestJS',
];

const devProcess = [
    { phase: 'Discovery', detail: 'Map stakeholders, integrations, audit posture, renewal calendar reality.' },
    { phase: 'Architecture', detail: 'Event-driven blueprint, tenancy model, SLA & rollout gates.' },
    { phase: 'UI/UX system', detail: 'Design tokens, accessibility, dashboards users live in.' },
    { phase: 'Agile build', detail: 'Two-week increments with preview environments.' },
    { phase: 'QA & security', detail: 'Threat modeling hooks, penetration-ready defaults.' },
    { phase: 'Cloud deploy', detail: 'CI/CD, blue-green, observability dashboards live.' },
    { phase: 'Scale & observe', detail: 'SLOs on ingestion pipelines, anomaly alerts, ROI reviews.' },
];

const testimonials = [
    {
        quote:
            'We stopped flying blind through renewals. Hexenity shipped an operations console that reconciled procurement’s contracts with engineering’s reality — CFO finally trusts the SaaS runway.',
        name: 'Elena Matsuda',
        role: 'COO · Series C Fintech',
        metrics: [{ k: 'Renewal leakage', v: '-28%' }, { k: 'Cycle time', v: '-41%' }],
    },
    {
        quote:
            'Shadow IT cratered once workflows hit HRIS lifecycle events. Provision + revoke automation alone paid for phase one.',
        name: 'Marcus Iyer',
        role: 'Head of IT · Global Logistics',
        metrics: [{ k: 'Unauthorized apps', v: '-62%' }, { k: 'IT tickets', v: '-3.8k/qtr' }],
    },
    {
        quote:
            'Audit prep went from frantic spreadsheets to streamed evidence packets. SOC2 reviewers asked fewer follow-ups than ever.',
        name: 'Priya Nalawade',
        role: 'VP Security · Health Data Platform',
        metrics: [{ k: 'Prep hours', v: '-120 hrs' }, { k: 'Control gaps closed', v: '+14' }],
    },
];

export default function HexenitySaaS() {
    const navigate = useNavigate();
    const [billingAnnual, setBillingAnnual] = useState(true);
    const [tab, setTab] = useState('spend');

    const renderShowcaseChart = () => {
        if (tab === 'license') {
            return (
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={utilizationBars} margin={{ top: 8, right: 8, left: 0, bottom: 4 }}>
                        <CartesianGrid strokeDasharray="4 8" stroke="rgba(148,163,184,0.08)" vertical={false} />
                        <XAxis dataKey="name" {...chartMutedAxis} tickLine={false} axisLine={false} />
                        <YAxis {...chartMutedAxis} tickLine={false} axisLine={false} width={36} domain={[0, 100]} />
                        <Tooltip contentStyle={tooltipStyles.contentStyle} />
                        <Bar dataKey="pct" fill="#818cf8" radius={[6, 6, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            );
        }
        if (tab === 'renewal' || tab === 'vendor') {
            return (
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={renewalLine} margin={{ top: 8, right: 8, left: 0, bottom: 4 }}>
                        <CartesianGrid strokeDasharray="4 8" stroke="rgba(148,163,184,0.08)" vertical={false} />
                        <XAxis dataKey="q" {...chartMutedAxis} tickLine={false} axisLine={false} />
                        <YAxis {...chartMutedAxis} tickLine={false} axisLine={false} width={32} />
                        <Tooltip contentStyle={tooltipStyles.contentStyle} />
                        <Line type="monotone" dataKey="risk" stroke="#fb923c" strokeWidth={2.5} dot={{ r: 3, fill: '#fb923c' }} />
                    </LineChart>
                </ResponsiveContainer>
            );
        }
        if (tab === 'compliance') {
            return (
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={auditActivity} layout="vertical" margin={{ top: 4, right: 8, left: 4, bottom: 4 }}>
                        <CartesianGrid strokeDasharray="4 8" stroke="rgba(148,163,184,0.08)" horizontal={false} />
                        <XAxis type="number" hide />
                        <YAxis type="category" dataKey="t" {...chartMutedAxis} width={72} tickLine={false} axisLine={false} />
                        <Tooltip contentStyle={tooltipStyles.contentStyle} />
                        <Bar dataKey="val" radius={[0, 6, 6, 0]} fill="#34d399" />
                    </BarChart>
                </ResponsiveContainer>
            );
        }
        return (
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={spendTrend} margin={{ top: 8, right: 8, left: 0, bottom: 4 }}>
                    <defs>
                        <linearGradient id="showcaseSpend" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#818cf8" stopOpacity={0.5} />
                            <stop offset="100%" stopColor="#818cf8" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="4 8" stroke="rgba(148,163,184,0.08)" vertical={false} />
                    <XAxis dataKey="m" {...chartMutedAxis} tickLine={false} axisLine={false} />
                    <YAxis {...chartMutedAxis} tickLine={false} axisLine={false} width={32} />
                    <Tooltip contentStyle={tooltipStyles.contentStyle} />
                    <Area type="monotone" dataKey="v" stroke="#6366f1" strokeWidth={2} fill="url(#showcaseSpend)" />
                </AreaChart>
            </ResponsiveContainer>
        );
    };

    return (
        <HexenityPageShell
            shellHeader="toolbar"
            variant="saas-dark"
            toolbarSpacing="compact"
            badge={null}
            title=""
            subtitle={null}
            backLabel="Back to Core Hexenity"
            onBack={() => navigate('/hexenity/core-hexenity')}
            actions={(
                <button
                    type="button"
                    onClick={() => navigate('/hexenity/contact')}
                    className="inline-flex items-center gap-2 rounded-xl border border-indigo-300/35 bg-indigo-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-indigo-100 transition hover:bg-indigo-500/30"
                >
                    Request demo
                    <ArrowRight className="h-4 w-4" />
                </button>
            )}
        >
            <div className="hexenity-saas-page space-y-10 pb-28 md:space-y-14 lg:space-y-16">
                <SpotlightHero navigate={navigate} />

                <section className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-5 py-3 md:px-8 md:py-4">
                    <p className="text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                        Operational design partners benchmark against
                    </p>
                    <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
                        {['Vertex Systems', 'Aurora Bank', 'Kite Logistics', 'Nimbus Health', 'Helio Retail', 'Cadenza SaaS'].map((name) => (
                            <span key={name} className="hexenity-display text-sm font-semibold tracking-tight text-slate-600 [text-shadow:0_0_40px_rgba(148,163,184,0.15)] md:text-[0.9375rem]">
                                {name}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Floating metrics strip — scroll-mt clears fixed nav when jumping to anchors */}
                <section
                    id="saas-metrics"
                    className="relative scroll-mt-32 overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-r from-[#101a33]/95 via-[#0d1629] to-[#101726] px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] md:scroll-mt-36 md:px-10 md:py-6"
                >
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(ellipse_at_right,rgba(99,102,241,0.12),transparent_60%)]" />
                    <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        <MetricTicker label="SaaS spend monitored" suffix="M" decimals={2} endValue={2.4} duration={2} />
                        <MetricTicker label="Active renewals in pipeline" endValue={340} duration={2.1} />
                        <MetricTicker label="Platform uptime SLA" suffix="%" decimals={2} endValue={99.98} duration={1.9} />
                        <MetricTicker label="License optimization rate" suffix="%" endValue={74} duration={2} />
                    </div>
                </section>

                {/* Problem storyline */}
                <section className="relative scroll-mt-32 md:scroll-mt-36">
                    <div className="flex flex-col gap-5 lg:flex-row lg:gap-12 lg:items-start">
                        <div className="min-w-0 flex-1">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-rose-300/85">Operational reality</p>
                            <h2 className="hexenity-display mt-2 max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
                                Why SaaS operations break inside growing enterprises
                            </h2>
                        </div>
                        <p className="max-w-xl shrink-0 text-sm leading-relaxed text-slate-400 lg:max-w-md lg:pt-6">
                            This is not “another SaaS spreadsheet.” Chaos compounds when buying power fragments — each step silently
                            taxes finance, dilutes procurement leverage, and widens governance gaps until renewals spike.
                        </p>
                    </div>
                    <div className="relative mt-10 grid gap-0 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
                        <ul className="relative list-none space-y-0 p-0" aria-label="SaaS operations failure stages">
                            {problemChain.map((step, i) => (
                                <motion.li
                                    key={step}
                                    initial={{ opacity: 0, x: -12 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="flex gap-4 pb-10 last:pb-0"
                                >
                                    <div className="flex w-11 shrink-0 justify-center pt-1.5">
                                        <span
                                            className="h-3 w-3 shrink-0 rounded-full border-[3px] border-[#070b17] bg-rose-500 shadow-[0_0_0_1px_rgba(244,63,94,0.35)]"
                                            aria-hidden
                                        />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                                            Stage {i + 1}
                                        </p>
                                        <p className="mt-1 max-w-lg text-lg font-medium leading-snug text-slate-100">{step}</p>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                        <div className="mt-10 rounded-3xl border border-white/[0.1] bg-[#090f1c] p-6 md:mt-0 md:p-8" style={{
                            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 0 60px -20px rgba(99,102,241,0.15)',
                        }}
                        >
                            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-300/90">Hexenity counter-move</p>
                            <ul className="mt-6 space-y-4 text-sm text-slate-300">
                                <li className="flex gap-3">
                                    <Layers3 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" aria-hidden />
                                    <span>Single orchestration pane that reconciles invoices, SSO claims, HRIS cohorts, and actual usage telemetry.</span>
                                </li>
                                <li className="flex gap-3">
                                    <CreditCard className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden />
                                    <span>Finance-aligned renewal runway — quantify exposure before CFO reviews land in panic mode.</span>
                                </li>
                                <li className="flex gap-3">
                                    <Lock className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" aria-hidden />
                                    <span>Security narratives backed by realtime evidence — containment SLAs executives can articulate.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Interactive dashboard showcase */}
                <section id="saas-showcase" className="scroll-mt-32">
                    <div className="flex flex-col gap-4 lg:flex-row lg:flex-wrap lg:items-end lg:justify-between">
                        <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300/85">Product surface</p>
                            <h2 className="hexenity-display mt-2 text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
                                Live dashboard showcase
                            </h2>
                        </div>
                        <button
                            type="button"
                            onClick={() => navigate('/hexenity/saas/demo')}
                            className="shrink-0 self-start rounded-full border border-cyan-400/35 bg-cyan-400/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-100 transition hover:bg-cyan-400/15"
                        >
                            Open full demo variants →
                        </button>
                    </div>
                    <div className="relative mt-8 overflow-hidden rounded-3xl border border-white/[0.1] bg-[#090f1c] shadow-[0_32px_120px_-40px_rgba(0,0,0,0.85)]">
                        <div className="relative z-10 border-b border-white/[0.06] px-4 py-3 md:px-6">
                            <div className="flex flex-wrap gap-2">
                                {showcaseTabs.map((t) => (
                                    <button
                                        key={t.id}
                                        type="button"
                                        onClick={() => setTab(t.id)}
                                        className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition ${
                                            tab === t.id
                                                ? 'saas-dash-tab-active border border-transparent'
                                                : 'border border-white/[0.12] bg-black/35 text-slate-300 hover:border-indigo-300/35 hover:bg-black/45 hover:text-white'
                                        }`}
                                    >
                                        {t.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="grid min-h-[320px] gap-0 lg:min-h-[360px] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
                            <div className="border-b border-white/[0.06] p-5 md:border-b-0 md:border-r md:p-8">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={tab}
                                        initial={{ opacity: 0, y: 6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -4 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <h3 className="hexenity-display text-xl font-semibold text-white">{showcaseTabs.find((x) => x.id === tab)?.label}</h3>
                                        <p className="mt-3 text-sm leading-relaxed text-slate-400">
                                            {showcaseTabs.find((x) => x.id === tab)?.caption}
                                        </p>
                                        <ul className="mt-6 space-y-3 text-sm text-slate-300">
                                            <li className="flex gap-2">
                                                <Check className="h-4 w-4 shrink-0 text-emerald-400" aria-hidden />
                                                Operational drill-down—not vanity charts locked in screenshots.
                                            </li>
                                            <li className="flex gap-2">
                                                <Check className="h-4 w-4 shrink-0 text-emerald-400" aria-hidden />
                                                Event streams connect to approvals, provisioning, billing & audit.
                                            </li>
                                            <li className="flex gap-2">
                                                <Check className="h-4 w-4 shrink-0 text-emerald-400" aria-hidden />
                                                Built for stakeholder storytelling in board-ready language.
                                            </li>
                                        </ul>
                                        <div className="mt-6 rounded-xl border border-white/[0.08] bg-black/40 p-4">
                                            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">Alerts</p>
                                            <div className="mt-3 space-y-2 text-[12px] text-slate-300">
                                                <div className="flex items-center gap-2">
                                                    <Bell className="h-3.5 w-3.5 text-amber-400" aria-hidden />
                                                    Vendor contract variance vs forecast +6.4%
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Users className="h-3.5 w-3.5 text-cyan-400" aria-hidden />
                                                    54 dormant seats pooled for reclaim review
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                            <div className="relative min-h-[240px] w-full bg-[#080d18] p-4 lg:min-h-0 lg:p-8">
                                <div className="relative h-[220px] w-full lg:h-[min(340px,calc(100vh-340px))] lg:min-h-[280px]">
                                    {renderShowcaseChart()}
                                </div>
                                <p className="mt-4 text-[11px] text-slate-500">
                                    Figures illustrate product UI fidelity — modeled on aggregate enterprise benchmarking scenarios.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Bento modules */}
                <section>
                    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                        <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-300/85">Platform modules</p>
                            <h2 className="hexenity-display mt-2 text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
                                Bento grid architecture
                            </h2>
                        </div>
                        <Blocks className="hidden h-8 w-8 text-indigo-400/70 md:block" aria-hidden />
                    </div>
                    <div className="grid auto-rows-[minmax(140px,auto)] grid-cols-1 gap-3 md:grid-cols-4 md:gap-4">
                        {bentoModules.map((m, idx) => (
                            <motion.article
                                key={m.title}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ delay: idx * 0.04 }}
                                whileHover={{ y: -4, transition: { duration: 0.22 } }}
                                className={`group relative overflow-hidden rounded-2xl border border-white/[0.1] bg-[#101626] ${m.span}`}
                                style={{
                                    boxShadow:
                                        'inset 0 1px 0 rgba(255,255,255,0.06), 0 12px 40px -28px rgba(0,0,0,0.75), 0 0 48px -32px rgba(99,102,241,0.25)',
                                }}
                            >
                                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-70 transition-opacity group-hover:opacity-100 ${m.tone}`} />
                                <div className="relative flex h-full flex-col p-5 md:p-6">
                                    <m.icon className="h-5 w-5 text-indigo-300" aria-hidden />
                                    <h3 className="hexenity-display mt-4 text-lg font-semibold tracking-tight text-white md:text-xl">{m.title}</h3>
                                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{m.desc}</p>

                                    {(m.chartType === 'line' || m.chart) && (
                                        <div className="relative mt-4 h-[90px] w-full rounded-lg border border-white/[0.06] bg-black/30 px-2 py-2">
                                            <ResponsiveContainer width="100%" height="100%">
                                                <LineChart data={renewalLine} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                                                    <Tooltip contentStyle={tooltipStyles.contentStyle} cursor={false} />
                                                    <Line type="monotone" dataKey="risk" stroke="#a5b4fc" strokeWidth={2} dot={false} />
                                                </LineChart>
                                            </ResponsiveContainer>
                                        </div>
                                    )}
                                    {m.chartType === 'bar' ? (
                                        <div className="relative mt-4 h-[90px] w-full rounded-lg border border-white/[0.06] bg-black/30 px-1">
                                            <ResponsiveContainer width="100%" height="100%">
                                                <BarChart data={utilizationBars.slice(0, 3)}>
                                                    <Tooltip contentStyle={tooltipStyles.contentStyle} cursor={false} />
                                                    <Bar dataKey="pct" fill="#22d3ee" radius={[4, 4, 0, 0]} />
                                                </BarChart>
                                            </ResponsiveContainer>
                                        </div>
                                    ) : null}
                                    {m.miniRows ? (
                                        <ul className="mt-4 space-y-2 border-t border-white/[0.06] pt-4 text-[12px] text-slate-300">
                                            {m.miniRows.map((r) => (
                                                <li key={r} className="flex items-center gap-2">
                                                    <span className="h-1 w-1 rounded-full bg-emerald-400" />
                                                    {r}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : null}
                                    {m.tall ? (
                                        <div className="mt-4 grid grid-cols-2 gap-2 text-[11px] text-slate-400">
                                            <div className="rounded-lg border border-white/[0.06] bg-black/25 p-2">
                                                SOC2 exporter
                                                <div className="mt-2 h-14 rounded bg-gradient-to-br from-emerald-500/10 to-transparent" />
                                            </div>
                                            <div className="rounded-lg border border-white/[0.06] bg-black/25 p-2">
                                                Immutable deltas
                                                <div className="mt-2 h-14 rounded bg-gradient-to-br from-indigo-500/10 to-transparent" />
                                            </div>
                                        </div>
                                    ) : null}
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </section>

                {/* Workflow */}
                <section className="overflow-hidden rounded-3xl border border-white/[0.1] bg-gradient-to-b from-[#0f1628] to-[#0b101d] px-5 py-8 md:p-10">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300/85">Lifecycle automation</p>
                            <h2 className="hexenity-display mt-2 text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
                                Live employee → license workflow
                            </h2>
                        </div>
                    </div>
                    <ol className="mt-8 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7">
                        {workflowSteps.map((s, i) => (
                            <li
                                key={s.title}
                                className="relative rounded-2xl border border-white/[0.09] bg-black/25 p-4 transition hover:border-indigo-400/35"
                            >
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/30 text-[11px] font-bold text-indigo-50 ring-2 ring-indigo-400/40">
                                    {i + 1}
                                </div>
                                <p className="mt-3 text-sm font-semibold leading-snug text-white">{s.title}</p>
                                <p className="mt-1.5 text-xs leading-relaxed text-slate-400">{s.detail}</p>
                            </li>
                        ))}
                    </ol>
                </section>

                {/* Enterprise features */}
                <section>
                    <div className="mb-10">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-300/85">Enterprise surface</p>
                        <h2 className="hexenity-display mt-2 text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
                            Controls procurement, security & engineering expect
                        </h2>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {enterpriseFeatures.map((f, i) => (
                            <motion.div
                                key={f.title}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.035 }}
                                className="rounded-2xl border border-white/[0.09] bg-[#0e1525] p-5 transition-[box-shadow,transform,border-color] duration-300 hover:-translate-y-1 hover:border-indigo-400/35 hover:shadow-[0_0_40px_-12px_rgba(99,102,241,0.45)] md:p-6"
                                style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)' }}
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <f.icon className="h-5 w-5 text-indigo-300" aria-hidden />
                                    {f.tag ? (
                                        <span className="rounded-full border border-white/[0.1] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                                            {f.tag}
                                        </span>
                                    ) : null}
                                </div>
                                <p className="hexenity-display mt-4 text-lg font-semibold text-white">{f.title}</p>
                                <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.narrative}</p>
                                <div className="relative mt-4 h-[52px] overflow-hidden rounded-lg border border-white/[0.06] bg-black/30">
                                    <div className="absolute inset-x-4 bottom-0 flex h-[36px] items-end gap-1">
                                        {[40 + i * 5, 28, 55, 44, 32, 62].map((h, j) => (
                                            <motion.div
                                                key={j}
                                                className="flex-1 rounded-t-sm bg-gradient-to-t from-indigo-900/70 to-indigo-400/50"
                                                initial={{ height: 0 }}
                                                whileInView={{ height: `${h}%` }}
                                                viewport={{ once: true }}
                                                transition={{ delay: j * 0.05 + i * 0.02 }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* How we build */}
                <section className="relative overflow-hidden rounded-3xl border border-white/[0.1] bg-[#0c1224] px-6 py-10 md:px-10 md:py-14">
                    <div className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
                    <div className="pointer-events-none absolute bottom-10 left-0 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl" />
                    <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.95fr)]">
                        <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-300/85">How Hexenity ships SaaS</p>
                            <h2 className="hexenity-display mt-3 text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
                                Engineering runway your exec team understands
                            </h2>
                            <div className="mt-8 space-y-6">
                                <div className="rounded-2xl border border-white/[0.08] bg-black/35 p-5">
                                    <h3 className="hexenity-display text-base font-semibold text-white">Architecture</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                                        Event-driven backbone with Next.js and NestJS services — PostgreSQL for durable truth,
                                        Redis for fan-out bursts, horizontally scaled workers for ingestion & reconciliation telemetry.
                                    </p>
                                </div>
                                <div className="rounded-2xl border border-white/[0.08] bg-black/35 p-5">
                                    <h3 className="hexenity-display text-base font-semibold text-white">Security</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                                        JWT/session hardening paths, granular RBAC, API throttling, encrypted secrets, granular audit
                                        streams engineered for auditors—not checkbox PDFs alone.
                                    </p>
                                </div>
                                <div className="rounded-2xl border border-white/[0.08] bg-black/35 p-5">
                                    <h3 className="hexenity-display text-base font-semibold text-white">Infrastructure</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                                        AWS + Vercel edge delivery, Dockerized workloads, observability dashboards, rollout automation
                                        with guarded progressive delivery.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Trusted stack fingerprints</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {techStack.map((tech) => (
                                    <motion.span
                                        key={tech}
                                        whileHover={{ scale: 1.02 }}
                                        className="rounded-xl border border-white/[0.1] bg-gradient-to-br from-white/[0.07] to-transparent px-4 py-2 text-xs font-semibold tracking-tight text-slate-200"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                            <div className="relative mt-8 overflow-hidden rounded-2xl border border-indigo-400/20 bg-gradient-to-br from-indigo-500/[0.12] via-transparent to-cyan-400/[0.08] p-6">
                                <Cpu className="h-10 w-10 text-indigo-300" aria-hidden />
                                <p className="mt-4 text-lg font-semibold text-white">We build SaaS platforms, not slideware templates.</p>
                                <p className="mt-2 text-sm text-slate-300">
                                    Our teams embed beside yours — aligning architecture reviews, SLA targets, ROI instrumentation, and phased rollouts tuned to procurement seasons.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => navigate('/hexenity/contact')}
                                    className="mt-6 rounded-xl bg-white/[0.1] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white/[0.16]"
                                >
                                    Talk architecture
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Dev process */}
                <section className="rounded-3xl border border-white/[0.09] bg-[#0a1020] px-6 py-10 md:px-10">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-200/85">Confidence timeline</p>
                    <h2 className="hexenity-display mt-2 text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
                        Product development process
                            </h2>
                    <div className="relative mt-12 space-y-0">
                        <div className="absolute left-[11px] top-2 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-indigo-400/50 via-white/15 to-transparent md:block" aria-hidden />
                        {devProcess.map((d, idx) => (
                            <motion.div
                                key={d.phase}
                                initial={{ opacity: 0, y: 8 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="relative flex gap-5 pb-10 last:pb-0 md:pl-10"
                            >
                                <div className="hidden md:flex">
                                    <div className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-indigo-500/75 text-[11px] font-bold text-white ring-8 ring-[#0a1020]">
                                        {idx + 1}
                                    </div>
                                </div>
                                <div className="flex-1 rounded-2xl border border-white/[0.08] bg-[#101827] px-5 py-4 md:px-6 md:py-5">
                                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-200/85">{d.phase}</p>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-300">{d.detail}</p>
                                    </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Testimonials */}
                <section>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300/85">Proof, not fluff</p>
                    <h2 className="hexenity-display mt-2 text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
                        Operational leaders on measurable deltas
                                    </h2>
                    <div className="mt-10 grid gap-5 lg:grid-cols-3">
                        {testimonials.map((tm) => (
                            <motion.blockquote
                                key={tm.name}
                                initial={{ opacity: 0, y: 14 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -6 }}
                                className="flex h-full flex-col rounded-[1.35rem] border border-white/[0.09] bg-gradient-to-b from-[#111a2f] via-[#0e1528] to-[#0b101d] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-shadow hover:shadow-[0_28px_80px_-48px_rgba(99,102,241,0.55)]"
                            >
                                <p className="text-sm leading-relaxed text-slate-200">&ldquo;{tm.quote}&rdquo;</p>
                                <div className="mt-6 flex flex-wrap gap-3">
                                    {tm.metrics.map((m) => (
                                        <span
                                            key={m.k}
                                            className="inline-flex flex-col rounded-xl border border-white/[0.08] bg-black/30 px-3 py-2"
                                        >
                                            <span className="hexenity-display text-lg font-semibold tracking-tight text-white">{m.v}</span>
                                            <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">{m.k}</span>
                                        </span>
                                    ))}
                                </div>
                                <footer className="mt-auto border-t border-white/[0.06] pt-5">
                                    <p className="text-sm font-semibold text-white">{tm.name}</p>
                                    <p className="text-xs text-indigo-200/85">{tm.role}</p>
                                </footer>
                            </motion.blockquote>
                        ))}
                    </div>
                </section>

                {/* Pricing */}
                <section className="rounded-3xl border border-white/[0.1] bg-[#0c1325] px-6 py-10 md:px-10">
                    <div className="flex flex-wrap items-start justify-between gap-6">
                        <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-300/85">Interactive pricing sketch</p>
                            <h2 className="hexenity-display mt-2 text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
                                Scale teams, not spreadsheets
                                            </h2>
                        </div>
                        <div className="flex items-center gap-3 rounded-xl border border-white/[0.1] bg-black/40 p-1">
                            <button
                                type="button"
                                onClick={() => setBillingAnnual(false)}
                                className={`rounded-lg px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] ${
                                    billingAnnual ? 'text-slate-500 hover:text-slate-300' : 'bg-indigo-500 text-white shadow-md'
                                }`}
                            >
                                Monthly
                            </button>
                            <button
                                type="button"
                                onClick={() => setBillingAnnual(true)}
                                className={`rounded-lg px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] ${
                                    billingAnnual ? 'bg-indigo-500 text-white shadow-md' : 'text-slate-500 hover:text-slate-300'
                                }`}
                            >
                                Yearly (-18%)
                            </button>
                        </div>
                    </div>

                    <div className="mt-10 grid gap-5 lg:grid-cols-3">
                            {[
                            {
                                    name: 'Growth',
                                    priceM: billingAnnual ? 749 : 920,
                                    blurb: 'For teams aligning first governance & visibility wins.',
                                    feats: ['Up to 200 tracked apps', 'Renewal cockpit', 'Finance exports', 'Slack alerts'],
                                },
                                {
                                    name: 'Scale',
                                    priceM: billingAnnual ? 2490 : 2990,
                                    blurb: 'For companies standardizing SSO, HRIS workflows, audits.',
                                    highlight: true,
                                    feats: ['Unlimited discoveries', 'SCIM provisioning playbooks', 'AI savings ranked', 'Dedicated CSM sprint'],
                                },
                                {
                                    name: 'Enterprise',
                                    priceM: null,
                                    blurb: 'Global programs, VPC options, sovereign data paths.',
                                    feats: ['Custom connectors', 'SAML + SCIM hardening reviews', '24/7 support lanes', 'Benchmark desk'],
                                },
                            ].map((tier) => (
                                <motion.div
                                    key={tier.name}
                                    whileHover={{ y: tier.highlight ? -8 : -4 }}
                                    className={`relative flex flex-col rounded-2xl border p-7 ${
                                        tier.highlight
                                            ? 'border-indigo-400/50 bg-gradient-to-b from-indigo-500/[0.16] via-[#10182d] to-[#0e1528] shadow-[0_28px_100px_-50px_rgba(99,102,241,0.55)]'
                                            : 'border-white/[0.09] bg-[#101827]'
                                    }`}
                                >
                                    {tier.highlight ? (
                                        <span className="absolute -top-3 right-6 rounded-full border border-emerald-400/40 bg-emerald-400/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-emerald-200">
                                                Most booked
                                            </span>
                                        ) : null}
                                    <h3 className="hexenity-display text-xl font-semibold text-white">{tier.name}</h3>
                                        <div className="mt-4">
                                        {tier.priceM !== null ? (
                                            <>
                                                <span className="hexenity-display text-4xl font-semibold tracking-tight text-white">
                                                    ${tier.priceM.toLocaleString()}
                                            </span>
                                                <span className="text-sm text-slate-400"> / mo · billed {billingAnnual ? 'yearly anchor' : 'monthly snapshot'}</span>
                                            </>
                                        ) : (
                                            <p className="hexenity-display text-3xl font-semibold tracking-tight text-white">Custom</p>
                                        )}
                                                </div>
                                    <p className="mt-3 text-sm text-slate-400">{tier.blurb}</p>
                                                <ul className="mt-6 flex-1 space-y-3 text-sm text-slate-300">
                                                    {tier.feats.map((f) => (
                                                        <li key={f} className="flex items-start gap-2">
                                                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden />
                                                {f}
                                            </li>
                                        ))}
                                                </ul>
                                                <button
                                                    type="button"
                                        onClick={() => navigate('/hexenity/contact')}
                                        className={`mt-8 rounded-xl px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] transition ${
                                            tier.highlight ? 'bg-indigo-500 text-white hover:bg-indigo-400' : 'border border-white/15 bg-white/[0.04] hover:border-indigo-300/35'
                                                      }`}
                                                >
                                                    {tier.priceM !== null ? 'Start pilot' : 'Contact enterprise desk'}
                                                </button>
                                            </motion.div>
                            ))}
                    </div>
                </section>

                {/* Final CTA */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.14] px-8 py-16 text-center md:py-20"
                    style={{
                        background:
                            'radial-gradient(ellipse 120% 100% at 50% -20%, rgba(99,102,241,0.35), transparent 52%), linear-gradient(to bottom, #10173a, #080c18)',
                        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 40px 120px -52px rgba(99,102,241,0.45)',
                    }}
                >
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:56px_56px] opacity-40" aria-hidden />
                    <Sparkles className="relative z-10 mx-auto h-8 w-8 text-indigo-200" aria-hidden />
                    <h2 className="hexenity-display relative z-10 mx-auto mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl md:leading-[1.08]">
                        Build operational clarity across your SaaS ecosystem
                    </h2>
                    <p className="relative z-10 mx-auto mt-5 max-w-2xl text-base text-indigo-100/90 md:text-lg">
                        Book a calibrated walkthrough tailored to procurement season, SOC2 timelines, or board-driven efficiency mandates.
                                            </p>
                    <button
                        type="button"
                        onClick={() => navigate('/hexenity/contact')}
                        className="relative z-10 mt-10 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-slate-900 transition hover:bg-slate-100"
                    >
                        Schedule executive session
                                            <ArrowRight className="h-4 w-4" aria-hidden />
                    </button>
                </motion.section>

                {/* Compressed legacy pillar links — retain SEO depth without card monotony */}
                <details className="group rounded-2xl border border-white/[0.08] bg-[#101726] px-6 py-4 text-sm">
                    <summary className="cursor-pointer list-none py-3 font-semibold text-slate-200 marker:content-none">
                        <span className="flex items-center justify-between gap-2">
                            Operational deep-dive (inventory, renewal, KPI program)
                                            <BadgeCheck className="h-4 w-4 text-indigo-400 transition group-open:rotate-90" aria-hidden />
                        </span>
                    </summary>
                    <div className="pb-6 pt-4 text-slate-400">
                        Hexenity aligns inventory, licensing, renewal playbooks, and executive KPI dashboards into one continuous delivery
                        motion—paired with rollout templates for 30-60-90 governance maturity jumps. Prefer a guided assessment? Reach out and we tailor the operating model blueprint to your stakeholder map.
                                                    </div>
                </details>
            </div>
        </HexenityPageShell>
    );
}
