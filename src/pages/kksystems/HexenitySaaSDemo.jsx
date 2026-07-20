import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Activity,
    AlertTriangle,
    ArrowRight,
    BadgeCheck,
    BarChart3,
    Cable,
    ClipboardList,
    Database,
    DollarSign,
    FileWarning,
    FolderLock,
    Landmark,
    LayoutDashboard,
    ListTree,
    PieChart,
    Radar,
    Receipt,
    ScanSearch,
    Shield,
    Telescope,
    TrendingUp,
    Users,
    Workflow,
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

const VARIANTS = [
    {
        id: 'ops',
        name: 'Operations Command',
        subtitle: 'Multi-tenant SaaS inventory + live spend telemetry',
        slug: 'operations / command',
        accent: 'from-violet-600/30 to-cyan-500/15',
        Icon: Activity,
    },
    {
        id: 'finance',
        name: 'Finance Renewal Desk',
        subtitle: 'Forecast cash exposure, staged renewals, variance control',
        slug: 'finance / renewals',
        accent: 'from-emerald-600/25 to-amber-500/12',
        Icon: Receipt,
    },
    {
        id: 'security',
        name: 'Security & Compliance Radar',
        subtitle: 'Access drift, export risk, control evidence in one stream',
        slug: 'trust / compliance',
        accent: 'from-rose-600/25 to-sky-500/12',
        Icon: Shield,
    },
    {
        id: 'exec',
        name: 'Executive KPI Cockpit',
        subtitle: 'Runway, YoY SaaS drift, and board asks in one briefing surface',
        slug: 'executive / briefing',
        accent: 'from-indigo-600/35 to-fuchsia-500/15',
        Icon: LayoutDashboard,
    },
    {
        id: 'discovery',
        name: 'Vendor Discovery',
        subtitle: 'Duplicate stacks, shadow overlap scores, and normalization queue',
        slug: 'inventory / discovery',
        accent: 'from-amber-500/25 to-orange-600/12',
        Icon: ScanSearch,
    },
    {
        id: 'lifecycle',
        name: 'Lifecycle & Provisioning',
        subtitle: 'HRIS → SSO → seat truth with approval gates and audit trail',
        slug: 'lifecycle / provisioning',
        accent: 'from-sky-600/25 to-emerald-600/12',
        Icon: Workflow,
    },
    {
        id: 'integrations',
        name: 'Integration Hub',
        subtitle: 'Webhook throughput, connector health, retry & DLQ visibility',
        slug: 'integrations / fabric',
        accent: 'from-teal-600/25 to-violet-500/12',
        Icon: Cable,
        scenario: 'Live throughput curves, roster latency, replay queue',
    },
    {
        id: 'procurement',
        name: 'Procurement Intake',
        subtitle: 'Intake requests, approver lanes, SLA breach heat',
        slug: 'procurement / intake',
        accent: 'from-fuchsia-600/22 to-orange-500/12',
        Icon: ClipboardList,
        scenario: 'Tiered approvals and vendor onboarding risk scoring',
    },
    {
        id: 'audit',
        name: 'Audit Evidence Locker',
        subtitle: 'Signed exports, control IDs, reviewer attestations',
        slug: 'audit / evidence-locker',
        accent: 'from-slate-500/28 to-blue-600/14',
        Icon: FolderLock,
        scenario: 'Immutable manifests + deterministic export hashes',
    },
    {
        id: 'incident',
        name: 'Incident Command',
        subtitle: 'Severity mix, playbook steps, stakeholder pager tree',
        slug: 'resilience / incident-room',
        accent: 'from-red-600/28 to-orange-600/14',
        Icon: AlertTriangle,
        scenario: 'War-room density for SaaS outages + access emergencies',
    },
    {
        id: 'allocate',
        name: 'Cost Allocation Canvas',
        subtitle: 'Cost-center burn, amortization rails, realloc suggestions',
        slug: 'finance / allocation',
        accent: 'from-lime-700/22 to-teal-600/14',
        Icon: Landmark,
        scenario: 'Department fair-share vs direct-tag variance',
    },
    {
        id: 'budget',
        name: 'Team Budget Sentinel',
        subtitle: 'Envelopes, burn-down, preemptive downgrade recommendations',
        slug: 'finance / budget-guardrails',
        accent: 'from-purple-600/28 to-blue-700/14',
        Icon: PieChart,
        scenario: 'Soft caps + escalation when teams exceed blended burn',
    },
    {
        id: 'benchmark',
        name: 'Peer Benchmark Radar',
        subtitle: 'Category spend vs cohort, utilization percentile bands',
        slug: 'insights / benchmarks',
        accent: 'from-cyan-600/26 to-blue-800/14',
        Icon: Telescope,
        scenario: 'Normalize stack posture against cohort & region',
    },
];

/** Rich copy + IA notes for “Deep dive” preview mode — one entry per VARIANTS[].id */
const VARIANT_DEEP_PREVIEW = {
    ops: {
        tagline: 'A single cockpit for SaaS fleet health: spend trajectory, renewal pressure, and owner accountability.',
        personas: ['ITAM leads', 'FinOps partners', 'Procurement coordinators'],
        workflows: [
            'Compare normalized spend velocity vs last quarter baseline',
            'Prioritize renewal work queue by dollars at risk and breach proximity',
            'Jump from utilization bars into vendor rows for MRR and risk tags',
        ],
        modules: [
            { name: 'Fleet spend curve', desc: 'Rolling weekly ingest with anomaly smoothing' },
            { name: 'Renewal SLA queue', desc: 'Countdown badges tied to Legal + Sec checkpoints' },
            { name: 'Seat utilization bars', desc: 'Stack-normalized uptake by product cluster' },
            { name: 'Liveboard sheet', desc: 'Owner mapping, variance tags, CSV export stubs' },
        ],
        dataSignals: ['Finance ERP actuals', 'SSO entitlement snapshots', 'Contract schedule API'],
    },
    finance: {
        tagline: 'Cash-weighted renewal modeling with negotiation stubs and exec-ready variance callouts.',
        personas: ['CFO office', 'IT finance', 'Deal desk'],
        workflows: [
            'Stack outbound cash by month against committed envelopes',
            'Attach counter-offer notes per vendor negotiation thread',
            'Push Friday board-pack exports on a fixed schedule',
        ],
        modules: [
            { name: 'Renewal cash bars', desc: 'Month buckets in thousands USD, tooltip drill' },
            { name: 'Negotiation workspace', desc: 'Uplift %, benchmarks, downgrade levers' },
            { name: 'Board cadence footer', desc: 'Automation banner for recurring deliverables' },
        ],
        dataSignals: ['Order forms', 'Historical invoice roll-ups', 'Rate-card amendments'],
    },
    security: {
        tagline: 'Continuous assurance: control deltas, risky exports, and residual access plotted over time.',
        personas: ['GRC engineers', 'Security architects', 'Internal audit'],
        workflows: [
            'Triage SSO gaps vs elevated sessions vs policy passes',
            'Review sensitive export lineage with ticketing bridges',
            'Watch residual access KPIs overlaid with renewals',
        ],
        modules: [
            { name: 'Control-event bars', desc: '7d stacking of SSO, export, privileged states' },
            { name: 'Evidence stream', desc: 'Narratives with SOC2 control references' },
            { name: 'Residual heat curve', desc: 'Step-line stress vs finance months' },
        ],
        dataSignals: ['IdP logs', 'CASB egress', 'SIEM correlated IDs'],
    },
    exec: {
        tagline: 'Board-density briefing: runway, portfolio drift, and governance hotspots on one glanceable grid.',
        personas: ['C-suite', 'Strategy ops', 'Program PMO'],
        workflows: [
            'Scan KPI tiles → expand runway storyline for QBRs',
            'Queue board questions by owner with SLA hints',
            'Export narrative slide outlines (stubbed)',
        ],
        modules: [
            { name: 'Executive tiles', desc: 'Runway, YoY, gaps, SSO coverage' },
            { name: 'Runway projection', desc: 'Post-growth plan months of coverage' },
            { name: 'Question backlog', desc: 'CFO/CIO/Audit prompts with freshness tags' },
        ],
        dataSignals: ['Rolling forecast', 'Portfolio normalization', 'Policy exception register'],
    },
    discovery: {
        tagline: 'Shadow-SaaS clustering with overlap scoring and a normalization backlog you can action.',
        personas: ['Architecture review', 'App rationalization PMs', 'Data stewards'],
        workflows: [
            'Filter duplicate / shadow signatures from latest sync',
            'Rank categories by overlap density for rationalization sprints',
            'Assign cluster owners with confidence scores',
        ],
        modules: [
            { name: 'Facet chips', desc: 'Overlap, duplicates, shadow tags' },
            { name: 'Density chart', desc: 'Horizontal bars by category' },
            { name: 'Normalization grid', desc: 'Multi-app rows with owner routing' },
        ],
        dataSignals: ['Expense feeds', 'Browser telemetry', 'HR system org trees'],
    },
    lifecycle: {
        tagline: 'Joiner–mover–leaver truth: HRIS events drive SSO, SCIM, and audit evidence in one pipeline.',
        personas: ['Identity admins', 'HRIS integrators', 'Compliance'],
        workflows: [
            'Trace policy bundle gates before SSO claims propagate',
            'Approve seat changes with embedded risk rationale',
            'Monitor provision SLA telemetry for regressions',
        ],
        modules: [
            { name: 'Five-step ribbon', desc: 'HRIS → audit with inline descriptions' },
            { name: 'Approval inbox', desc: 'Status chips: queued, risk review, approved' },
            { name: 'SLA sparkline', desc: '24h provisioning heat synthetic pattern' },
        ],
        dataSignals: ['Workday/Bamboo deltas', 'Okta/Azure group maps', 'ITSM approvals'],
    },
    integrations: {
        tagline: 'Fabric telemetry for webhooks, connector latency, degraded paths, and DLQ replays.',
        personas: ['Platform engineers', 'SRE rotations', 'Integration PMs'],
        workflows: [
            'Watch accepted events/min during peak ingestion',
            'Reroute degraded connectors behind feature flags',
            'Inspect backoff queue narratives after vendor rate limits',
        ],
        modules: [
            { name: 'Throughput area', desc: 'Accepted events/min windows' },
            { name: 'Connector roster', desc: 'Live / degraded / paused with RTT hints' },
            { name: 'DLQ narration', desc: 'Human-readable remediation copy' },
        ],
        dataSignals: ['Ingress gateway', 'Worker autoscale metrics', 'Vendor status pages'],
    },
    procurement: {
        tagline: 'Intake SLA stress by approver lane, with onboarding risk baked into ticketing cards.',
        personas: ['Procurement managers', 'Legal ops', 'ITAM reviewers'],
        workflows: [
            'Read backlog index heat by lane vs policy tier',
            'Escalate tickets nearing breach thresholds',
            'Cross-link vendor dossiers (stub)',
        ],
        modules: [
            { name: 'SLA backlog chart', desc: 'Horizontal risk index by lane label' },
            { name: 'In-flight tickets', desc: 'Context + SLA breach copy blocks' },
        ],
        dataSignals: ['Coupa/ZIP exports', 'DocuSign status', 'Sec review outcomes'],
    },
    audit: {
        tagline: 'Immutable manifests, deterministic hashes, dual-control attestations ready for examiner windows.',
        personas: ['External auditors', 'IT controls leads', 'Legal hold admins'],
        workflows: [
            'Verify SHA-256 coverage for quarterly freeze packages',
            'Walk signer timelines with segregation-of-duty proof',
            'Track regulator download countdown',
        ],
        modules: [
            { name: 'Manifest list', desc: 'File + abbreviated hash fingerprints' },
            { name: 'Signer ladder', desc: 'Controller vs internal attest chain' },
            { name: 'Window banner', desc: 'Timeboxed secure download SLA' },
        ],
        dataSignals: ['GCP/Azure object lock', 'GPG clearsign artifacts', 'Ticketing citations'],
    },
    incident: {
        tagline: 'War-room density: stacked severities, pager ownership, scripted comms cadence.',
        personas: ['Incident commander', 'SRE IC', 'Executive comms'],
        workflows: [
            'Observe tier mix stacking across rolling 7d',
            'Route escalations via primary/secondary pager map',
            'Follow condensed playbook excerpts for degraded IdP/API cases',
        ],
        modules: [
            { name: 'Severity stacked areas', desc: 'P1–P3 mix over days' },
            { name: 'Pager ladder', desc: 'Color-coded RACI-lite narrative' },
            { name: 'Playbook capsule', desc: 'Token revocation + audit snapshot hints' },
        ],
        dataSignals: ['Paging provider', 'Statuspage hooks', 'Change calendar'],
    },
    allocate: {
        tagline: 'Finance-grade splits: tagged vs amortized pooled spend by cost center with realloc nudges.',
        personas: ['FinOps accountants', 'FP&A owners', 'Business unit CFOs'],
        workflows: [
            'Compare stacked bars direct-tag vs pooled for each CC',
            'Accept/reject realloc suggestions sourced from utilization proof',
            'Export allocation journal CSV (stub)',
        ],
        modules: [
            { name: 'Stacked horizontal bars', desc: 'Teal/violet attribution split' },
            { name: 'Realloc suggestions', desc: '$ moves with narrative justification' },
        ],
        dataSignals: ['ERP dimensions', 'Tagging dictionaries', 'Amort schedules'],
    },
    budget: {
        tagline: 'Envelope guardrails with burn vs cap deltas and proactive SKU trim recommendations.',
        personas: ['Team leads', 'FinOps watchdogs', 'Category managers'],
        workflows: [
            'Trace WoW envelope burn intersecting dashed caps',
            'Surface elevated breaches with seat-level mitigations',
            'Confirm controlled freezes post-audit milestones',
        ],
        modules: [
            { name: 'Burn vs cap', desc: 'Dual area stroke with legend cues' },
            { name: 'Mitigation inbox', desc: 'Elevated vs controlled storyline cards' },
        ],
        dataSignals: ['Card feeds', 'P-card policies', 'Usage metering APIs'],
    },
    benchmark: {
        tagline: 'Peer-adjusted posture: cohort filters, percentile bands, and plain-language deltas.',
        personas: ['CIO strategy', 'Portfolio architects', 'Board analytics'],
        workflows: [
            'Compare dual bars “you vs median” by category cohort',
            'Read interpretation capsules for uplift opportunities',
            'Slice region + ARR tier filters (conceptual)',
        ],
        modules: [
            { name: 'Peer bar compare', desc: 'You vs cohort median overlays' },
            { name: 'Interpretation slab', desc: 'Narrative recommendation block' },
        ],
        dataSignals: ['Benchmark lake', 'Anonymized peer extracts', 'Stack normalization rules'],
    },
};

const spendCurve = [
    { x: 'W1', v: 412 },
    { x: 'W2', v: 438 },
    { x: 'W3', v: 425 },
    { x: 'W4', v: 471 },
    { x: 'W5', v: 489 },
    { x: 'W6', v: 503 },
];

const benchBars = [
    { n: 'CRM', u: 74 },
    { n: 'Design', u: 58 },
    { n: 'Analytics', u: 91 },
    { n: 'Support', u: 63 },
];

const renewalCash = [
    { m: 'Jun', k: 820 },
    { m: 'Jul', k: 940 },
    { m: 'Aug', k: 1100 },
    { m: 'Sep', k: 760 },
    { m: 'Oct', k: 980 },
];

const controlEvents = [
    { t: 'SSO gap', c: 14 },
    { t: 'Exports', c: 27 },
    { t: 'Elevated', c: 8 },
    { t: 'Passed', c: 41 },
];

const execRunwayMonths = [
    { m: 'M1', runway: 14.2 },
    { m: 'M2', runway: 13.8 },
    { m: 'M3', runway: 13.1 },
    { m: 'M4', runway: 12.6 },
    { m: 'M5', runway: 11.9 },
    { m: 'M6', runway: 11.4 },
];

const discoveryOverlap = [
    { cat: 'CRM', d: 62 },
    { cat: 'Analytics', d: 41 },
    { cat: 'Design', d: 28 },
    { cat: 'Support', d: 33 },
    { cat: 'HR', d: 19 },
];

const webhookRps = [
    { t: '00', r: 842 },
    { t: '04', r: 912 },
    { t: '08', r: 1204 },
    { t: '12', r: 1088 },
    { t: '16', r: 1320 },
    { t: '20', r: 996 },
];

const procurementSLA = [
    { lane: 'Net-new', risk: 82 },
    { lane: 'Renewal', risk: 54 },
    { lane: 'Upsell', risk: 71 },
    { lane: 'Emergency', risk: 94 },
];

const incidentMix = [
    { d: 'Mon', p1: 2, p2: 6, p3: 14 },
    { d: 'Tue', p1: 1, p2: 8, p3: 11 },
    { d: 'Wed', p1: 3, p2: 5, p3: 9 },
    { d: 'Thu', p1: 0, p2: 7, p3: 12 },
    { d: 'Fri', p1: 2, p2: 4, p3: 8 },
];

const allocateBars = [
    { cc: 'Eng', tagged: 38, pooled: 12 },
    { cc: 'Rev', tagged: 22, pooled: 9 },
    { cc: 'G&A', tagged: 18, pooled: 15 },
    { cc: 'Product', tagged: 28, pooled: 7 },
];

const budgetBurndown = [
    { w: 'W1', cap: 100, burn: 22 },
    { w: 'W2', cap: 100, burn: 41 },
    { w: 'W3', cap: 100, burn: 58 },
    { w: 'W4', cap: 100, burn: 74 },
    { w: 'W5', cap: 100, burn: 89 },
];

const benchmarkPeers = [
    { cat: 'Collab', you: 68, median: 52 },
    { cat: 'Data', you: 44, median: 61 },
    { cat: 'DevOps', you: 81, median: 70 },
    { cat: 'Security', you: 73, median: 64 },
];

const DEMO_SCENARIO = (v) => v.scenario ?? v.subtitle;

const tip = {
    contentStyle: {
        background: 'rgba(10,15,28,0.96)',
        border: '1px solid rgba(99,102,241,0.25)',
        borderRadius: '8px',
        fontSize: '11px',
        color: '#e2e8f0',
    },
};

function BrowserFrame({ slug, children, previewMode = 'compact', surfaceModules }) {
    const nav = [
        { k: 'overview', label: 'Overview' },
        { k: 'stream', label: 'Live stream' },
        { k: 'reports', label: 'Reports' },
        { k: 'exports', label: 'Exports' },
    ];

    const dense = previewMode === 'detailed';

    return (
        <div className="rounded-2xl border border-white/[0.12] bg-[#090f1c] shadow-[0_32px_120px_-48px_rgba(0,0,0,0.85)] ring-1 ring-white/[0.04]">
            <div className="flex items-center gap-2 border-b border-white/[0.08] bg-black/35 px-3 py-2 sm:px-4">
                <span className="h-2 w-2 shrink-0 rounded-full bg-red-500/80" />
                <span className="h-2 w-2 shrink-0 rounded-full bg-amber-400/80" />
                <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500/70" />
                <div className="ml-2 min-w-0 flex-1 truncate rounded-lg border border-white/[0.06] bg-black/50 px-3 py-1 font-mono text-[10px] text-slate-500 sm:text-[11px]">
                    app.hexenity.io / {slug}
                </div>
                <span className="hidden rounded border border-emerald-400/25 bg-emerald-500/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-emerald-200 sm:inline">
                    {dense ? 'Detailed preview' : 'Preview'}
                </span>
                <span className="hidden shrink-0 text-[10px] text-slate-500 md:inline">Read-only sandbox</span>
            </div>
            <div
                className={`flex flex-col md:flex-row ${
                    dense
                        ? 'min-h-[min(96vw,640px)] sm:min-h-[min(88vh,720px)]'
                        : 'min-h-[min(92vw,560px)] sm:min-h-[480px]'
                }`}
            >
                <aside className="flex shrink-0 flex-col gap-1 border-white/[0.06] bg-[#070b17] px-2 py-3 sm:w-[158px] sm:border-r md:py-4">
                    <p className="hidden px-2 pb-2 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-600 sm:block">Navigate</p>
                    {nav.map((item, i) => (
                        <button
                            key={item.k}
                            type="button"
                            className={`hidden rounded-lg px-2 py-2 text-left text-[11px] font-medium transition sm:block ${
                                i === 0
                                    ? 'border border-white/10 bg-white/[0.06] text-white'
                                    : 'text-slate-500 hover:border hover:border-white/10 hover:bg-white/[0.04] hover:text-slate-200'
                            }`}
                        >
                            {item.label}
                        </button>
                    ))}
                    <div className="mt-auto hidden px-2 pt-4 text-[10px] leading-snug text-slate-600 sm:block">
                        Session · <span className="font-mono text-slate-500">hex-sbx-Δ</span>
                    </div>
                </aside>
                <div className="flex min-h-0 min-w-0 flex-1 flex-col bg-[linear-gradient(to_bottom,#0c1120,transparent)]">
                    <div
                        className={`min-w-0 flex-1 p-3 sm:p-4 ${
                            dense ? 'min-h-[min(75vh,680px)] sm:min-h-[560px]' : 'min-h-[420px] sm:min-h-0'
                        }`}
                    >
                        {children}
                    </div>
                    {dense && surfaceModules?.length ? (
                        <div className="shrink-0 border-t border-white/[0.07] bg-black/45 px-3 py-2.5 sm:px-4">
                            <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-500">Surface map</p>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {surfaceModules.map((m) => (
                                    <div
                                        key={m.name}
                                        className="max-w-full rounded-lg border border-white/[0.08] bg-white/[0.04] px-2.5 py-1.5"
                                        title={m.desc}
                                    >
                                        <span className="block text-[10px] font-semibold text-indigo-200/95">{m.name}</span>
                                        <span className="mt-0.5 block text-[9px] leading-snug text-slate-500">{m.desc}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

function VariantDeepDive({ variantId }) {
    const meta = VARIANT_DEEP_PREVIEW[variantId];
    if (!meta) return null;

    return (
        <section className="mt-6 space-y-4 rounded-2xl border border-white/[0.1] bg-gradient-to-br from-[#090f1c] via-[#070b14] to-black/70 p-4 sm:p-5" aria-label="Detailed SaaS preview notes">
            <p className="text-sm leading-relaxed text-slate-300">{meta.tagline}</p>
            <div className="grid gap-3 md:grid-cols-3">
                <div className="rounded-xl border border-white/[0.08] bg-black/35 p-4">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-indigo-300/90">
                        <Users className="h-3.5 w-3.5 shrink-0" aria-hidden /> Primary personas
                    </div>
                    <ul className="mt-3 space-y-2 text-[12px] leading-snug text-slate-400">
                        {meta.personas.map((p) => (
                            <li key={p} className="border-l border-indigo-500/35 pl-2.5">{p}</li>
                        ))}
                    </ul>
                </div>
                <div className="rounded-xl border border-white/[0.08] bg-black/35 p-4">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-emerald-300/85">
                        <ListTree className="h-3.5 w-3.5 shrink-0" aria-hidden /> Core workflows
                    </div>
                    <ol className="mt-3 list-decimal space-y-2 pl-4 text-[12px] leading-snug text-slate-400">
                        {meta.workflows.map((w) => (
                            <li key={w} className="pl-1 marker:text-emerald-500/80">{w}</li>
                        ))}
                    </ol>
                </div>
                <div className="rounded-xl border border-white/[0.08] bg-black/35 p-4 md:col-span-1">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-cyan-300/85">
                        <Database className="h-3.5 w-3.5 shrink-0" aria-hidden /> Signals & lineage
                    </div>
                    <ul className="mt-3 space-y-2 text-[12px] leading-snug text-slate-400">
                        {meta.dataSignals.map((s) => (
                            <li key={s} className="rounded-lg bg-white/[0.03] px-2 py-1.5 text-[11px] text-slate-300">{s}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                    <LayoutDashboard className="h-3.5 w-3.5" aria-hidden /> Widgets mirrored in viewport
                </div>
                <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                    {meta.modules.map((m) => (
                        <div
                            key={m.name}
                            className="rounded-xl border border-white/[0.07] bg-white/[0.03] px-3 py-2.5 transition hover:border-indigo-400/25 hover:bg-white/[0.05]"
                        >
                            <p className="text-[11px] font-semibold text-white">{m.name}</p>
                            <p className="mt-1 text-[10px] leading-snug text-slate-500">{m.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function OperationsVariant() {
    return (
        <div className="grid gap-3 lg:grid-cols-12">
            <div className="rounded-xl border border-white/[0.08] bg-gradient-to-br from-slate-900/80 to-black/50 p-4 lg:col-span-8">
                <div className="flex items-start justify-between gap-2">
                    <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">Fleet spend velocity</p>
                        <p className="hexenity-display mt-1 text-xl font-semibold text-white">Live roll-up across 186 vendors</p>
                    </div>
                    <Activity className="h-5 w-5 text-cyan-400" aria-hidden />
                </div>
                <div className="mt-3 h-[180px] sm:h-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={spendCurve} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="opsSpend" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#818cf8" stopOpacity={0.45} />
                                    <stop offset="100%" stopColor="#818cf8" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="4 8" stroke="rgba(148,163,184,0.08)" vertical={false} />
                            <XAxis dataKey="x" tick={{ fill: '#64748b', fontSize: 10 }} tickLine={false} axisLine={false} />
                            <YAxis hide />
                            <Tooltip contentStyle={tip.contentStyle} />
                            <Area type="monotone" dataKey="v" stroke="#a5b4fc" strokeWidth={2} fill="url(#opsSpend)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="flex flex-col gap-3 lg:col-span-4">
                <div className="rounded-xl border border-amber-500/25 bg-amber-500/[0.08] p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-amber-200/90">Queue</p>
                    <ul className="mt-2 space-y-2 text-[12px] text-amber-50/95">
                        <li className="flex justify-between gap-2">
                            <span>Slack renewal</span>
                            <span className="text-amber-300">9d</span>
                        </li>
                        <li className="flex justify-between gap-2">
                            <span>Datadog true-up</span>
                            <span className="text-amber-300">21d</span>
                        </li>
                    </ul>
                </div>
                <div className="flex-1 rounded-xl border border-white/[0.08] bg-black/35 p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">Seat health</p>
                    <div className="mt-2 h-[120px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={benchBars} margin={{ top: 2, right: 4, left: -18, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="4 8" stroke="rgba(148,163,184,0.06)" vertical={false} />
                                <XAxis dataKey="n" tick={{ fill: '#64748b', fontSize: 10 }} tickLine={false} axisLine={false} />
                                <YAxis hide domain={[0, 100]} />
                                <Tooltip contentStyle={tip.contentStyle} />
                                <Bar dataKey="u" fill="#22d3ee" radius={[5, 5, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-black/40 px-3 py-3 lg:col-span-12">
                <div className="flex flex-wrap items-center gap-2 border-b border-white/[0.06] pb-2">
                    {['Liveboard', 'Owners', 'Variance', 'Export'].map((t) => (
                        <button
                            key={t}
                            type="button"
                            className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400"
                        >
                            {t}
                        </button>
                    ))}
                </div>
                <div className="mt-3 overflow-x-auto">
                    <table className="min-w-[520px] w-full text-left text-[11px] text-slate-300">
                        <thead className="text-[10px] uppercase tracking-[0.1em] text-slate-500">
                            <tr className="border-b border-white/[0.06]">
                                <th className="py-2 font-medium">Application</th>
                                <th className="py-2 font-medium">Owners</th>
                                <th className="py-2 text-right font-medium">MRR</th>
                                <th className="py-2 text-right font-medium">Risk</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ['Notion Enterprise', 'Ops · IT', '$18.4k', 'Low'],
                                ['HubSpot Growth', 'RevOps', '$32.1k', 'Med'],
                                ['Okta Workforce', 'IT Sec', '$44k', 'Low'],
                            ].map(([a, o, m, r]) => (
                                <tr key={a} className="border-b border-white/[0.04]">
                                    <td className="py-2.5 font-medium text-white">{a}</td>
                                    <td className="py-2.5">{o}</td>
                                    <td className="py-2.5 text-right tabular-nums text-emerald-200/90">{m}</td>
                                    <td className="py-2.5 text-right text-slate-400">{r}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

function FinanceVariant() {
    return (
        <div className="grid gap-3 lg:grid-cols-2">
            <div className="rounded-xl border border-white/[0.08] bg-gradient-to-br from-emerald-900/40 to-black/60 p-4">
                <div className="flex items-start justify-between">
                    <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-200/85">Forecasted renewal cash</p>
                        <p className="hexenity-display mt-1 text-xl font-semibold text-white">Stacked SaaS outbound (USD k)</p>
                    </div>
                    <Receipt className="h-5 w-5 text-emerald-400" aria-hidden />
                </div>
                <div className="mt-3 h-[220px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={renewalCash} margin={{ top: 8, right: 8, left: -8, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="4 8" stroke="rgba(148,163,184,0.08)" vertical={false} />
                            <XAxis dataKey="m" tick={{ fill: '#64748b', fontSize: 10 }} tickLine={false} axisLine={false} />
                            <YAxis tick={{ fill: '#64748b', fontSize: 10 }} width={36} />
                            <Tooltip contentStyle={tip.contentStyle} />
                            <Bar dataKey="k" fill="#34d399" radius={[6, 6, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-black/35 p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">Negotiation workspace</p>
                <div className="mt-4 space-y-3">
                    {[
                        ['Salesforce FY26', '+6.8% uplift', 'Bench at 4.3% trim'],
                        ['AWS Enterprise', 'EDP true-up', 'Lock exchange buffer'],
                        ['Zendesk Suite', 'Seat mismatch', '-22 ghost seats'],
                    ].map(([a, b, c]) => (
                        <div key={a} className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-2.5">
                            <div className="flex items-center justify-between gap-2">
                                <span className="text-sm font-semibold text-white">{a}</span>
                                <span className="text-[11px] text-rose-300/90">{b}</span>
                            </div>
                            <p className="mt-1 text-[11px] text-slate-400">{c}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-4 rounded-lg border border-dashed border-indigo-400/35 bg-indigo-500/10 px-3 py-2 text-[11px] text-indigo-100">
                    <DollarSign className="mb-1 inline h-4 w-4 text-indigo-300" aria-hidden /> Board pack auto-export syncs every Friday 06:00 UTC.
                </div>
            </div>
        </div>
    );
}

function ExecutiveVariant() {
    const tiles = [
        { label: 'SaaS cash runway', value: '11.4 mo', hint: 'post-renewal stress', hc: 'text-emerald-200/95' },
        { label: 'Portfolio YoY', value: '+18%', hint: 'normalized seats', hc: 'text-indigo-200/95' },
        { label: 'Governance gaps', value: '12 open', hint: '3 board-critical', hc: 'text-amber-200/95' },
        { label: 'Effective SSO', value: '94%', hint: 'workforce-attributed', hc: 'text-cyan-200/95' },
    ];

    return (
        <div className="grid gap-3 lg:grid-cols-12">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:col-span-12">
                {tiles.map((t) => (
                    <div key={t.label} className="rounded-xl border border-white/[0.08] bg-black/40 p-3 sm:p-4">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-500">{t.label}</p>
                        <p className={`hexenity-display mt-1 text-lg font-semibold text-white sm:text-xl ${t.hc}`}>{t.value}</p>
                        <p className="mt-0.5 text-[10px] text-slate-500">{t.hint}</p>
                    </div>
                ))}
            </div>
            <div className="rounded-xl border border-indigo-500/20 bg-gradient-to-br from-indigo-950/50 to-black/50 p-4 lg:col-span-7">
                <div className="flex items-start justify-between gap-2">
                    <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-indigo-300/90">Consolidated runway</p>
                        <p className="hexenity-display mt-1 text-lg font-semibold text-white">Months of coverage (post-growth plan)</p>
                    </div>
                    <TrendingUp className="h-5 w-5 text-indigo-400" aria-hidden />
                </div>
                <div className="mt-3 h-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={execRunwayMonths} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="execRunwayGrad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#a78bfa" stopOpacity={0.4} />
                                    <stop offset="100%" stopColor="#a78bfa" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="4 8" stroke="rgba(148,163,184,0.08)" vertical={false} />
                            <XAxis dataKey="m" tick={{ fill: '#64748b', fontSize: 10 }} tickLine={false} axisLine={false} />
                            <YAxis tick={{ fill: '#64748b', fontSize: 10 }} width={32} domain={['dataMin - 1', 'dataMax + 1']} />
                            <Tooltip contentStyle={tip.contentStyle} />
                            <Area type="monotone" dataKey="runway" stroke="#c4b5fd" strokeWidth={2} fill="url(#execRunwayGrad)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-black/35 p-4 lg:col-span-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">Board question queue</p>
                <ul className="mt-4 space-y-3 text-[12px] text-slate-300">
                    {[
                        ['CFO', 'What if Salesforce renews flat +8%?'],
                        ['CIO', 'Evidence pack for dormant Okta cohort—48h?'],
                        ['Audit', 'SOC2 change management export — Q3 scope'],
                    ].map(([role, q]) => (
                        <li key={q} className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2.5">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400/90">{role}</span>
                            <p className="mt-1 text-slate-200">{q}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function DiscoveryVariant() {
    return (
        <div className="grid gap-3 lg:grid-cols-12">
            <div className="flex flex-wrap items-center gap-2 lg:col-span-12">
                {['Overlap', 'Duplicates', 'Tier-2 shadow', 'Finance tagged'].map((f) => (
                    <span key={f} className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                        {f}
                    </span>
                ))}
                <span className="ml-auto text-[10px] text-slate-500">124 apps · last sync 2m</span>
            </div>
            <div className="rounded-xl border border-amber-500/20 bg-amber-950/25 p-4 lg:col-span-5">
                <div className="flex items-start justify-between">
                    <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-amber-200/90">Overlap density</p>
                        <p className="hexenity-display mt-1 text-lg font-semibold text-white">By category (% surface)</p>
                    </div>
                    <BarChart3 className="h-5 w-5 text-amber-400" aria-hidden />
                </div>
                <div className="mt-3 h-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={discoveryOverlap} layout="vertical" margin={{ top: 4, left: 4, right: 8, bottom: 4 }}>
                            <CartesianGrid strokeDasharray="4 8" stroke="rgba(245,158,11,0.1)" horizontal={false} />
                            <XAxis type="number" domain={[0, 100]} hide />
                            <YAxis type="category" dataKey="cat" width={64} tick={{ fill: '#94a3b8', fontSize: 10 }} tickLine={false} axisLine={false} />
                            <Tooltip contentStyle={tip.contentStyle} />
                            <Bar dataKey="d" radius={[0, 5, 5, 0]} fill="#f59e0b" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-black/35 p-4 lg:col-span-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">Normalization queue</p>
                <div className="mt-3 overflow-x-auto">
                    <table className="min-w-[440px] w-full text-left text-[11px] text-slate-300">
                        <thead className="text-[10px] uppercase tracking-[0.1em] text-slate-500">
                            <tr className="border-b border-white/[0.06]">
                                <th className="py-2 font-medium">Cluster</th>
                                <th className="py-2 font-medium">Apps</th>
                                <th className="py-2 text-right font-medium">Score</th>
                                <th className="py-2 text-right font-medium">Owner</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ['CRM / pipeline', 'Salesforce · HubSpot · Pipedrive', '0.91', 'RevOps'],
                                ['Support', 'Zendesk · Freshdesk', '0.88', 'CX'],
                                ['Design', 'Figma · Adobe CC', '0.72', 'Brand'],
                            ].map(([c, a, s, o]) => (
                                <tr key={c} className="border-b border-white/[0.04]">
                                    <td className="py-2.5 font-medium text-white">{c}</td>
                                    <td className="max-w-[200px] truncate py-2.5 text-slate-400">{a}</td>
                                    <td className="py-2.5 text-right tabular-nums text-amber-300/90">{s}</td>
                                    <td className="py-2.5 text-right text-slate-500">{o}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

function LifecycleVariant() {
    const steps = [
        { n: 'HRIS event', d: 'Joiner batch + title change' },
        { n: 'Policy map', d: 'Bundle + SoD rules' },
        { n: 'SSO claim', d: 'Groups → app entitlements' },
        { n: 'Provisioner', d: 'SCIM / API seats' },
        { n: 'Audit', d: 'Evidence + ticket link' },
    ];

    return (
        <div className="grid gap-3">
            <div className="rounded-xl border border-sky-500/20 bg-sky-950/20 p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-sky-200/90">Live pipeline</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {steps.map((s, i) => (
                        <React.Fragment key={s.n}>
                            <div className="flex min-w-[120px] flex-1 flex-col rounded-lg border border-white/[0.08] bg-black/40 px-3 py-2.5">
                                <span className="text-[9px] font-bold text-sky-400/90">{i + 1}</span>
                                <span className="mt-0.5 text-xs font-semibold text-white">{s.n}</span>
                                <span className="mt-1 text-[10px] text-slate-500">{s.d}</span>
                            </div>
                            {i < steps.length - 1 ? (
                                <div className="hidden items-center self-center text-slate-600 sm:flex" aria-hidden>
                                    →
                                </div>
                            ) : null}
                        </React.Fragment>
                    ))}
                </div>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-xl border border-white/[0.08] bg-black/35 p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">Pending approvals</p>
                    <ul className="mt-3 space-y-2 text-[12px]">
                        {[
                            ['Okta', '+12 Figma seats · Eng', 'Queued'],
                            ['Slack', 'Downgrade 4 E+ → Pro', 'Risk review'],
                            ['Notion', 'Offboard 2 contractors', 'Approved'],
                        ].map(([app, line, st]) => {
                            const statusClass =
                                st === 'Approved'
                                    ? 'text-emerald-400'
                                    : st === 'Risk review'
                                      ? 'text-amber-400'
                                      : 'text-sky-400';
                            return (
                            <li key={line} className="flex items-center justify-between gap-2 rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-2">
                                <span className="font-medium text-white">{app}</span>
                                <span className="min-w-0 flex-1 truncate text-slate-400">{line}</span>
                                <span className={`shrink-0 text-[10px] font-semibold uppercase ${statusClass}`}>{st}</span>
                            </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="rounded-xl border border-emerald-500/15 bg-emerald-950/15 p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-200/85">SLA heatmap (24h)</p>
                    <div className="mt-3 h-[140px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={spendCurve.map((x, i) => ({ ...x, sla: 94 + (i % 3) }))} margin={{ top: 4, right: 4, left: -12, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="4 8" stroke="rgba(148,163,184,0.07)" vertical={false} />
                                <XAxis dataKey="x" tick={{ fill: '#64748b', fontSize: 10 }} tickLine={false} axisLine={false} />
                                <YAxis hide domain={[92, 98]} />
                                <Tooltip contentStyle={tip.contentStyle} />
                                <Line type="monotone" dataKey="sla" stroke="#34d399" strokeWidth={2} dot={{ r: 2 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <p className="mt-2 text-[10px] text-slate-500">Provision SLA p95 — synthetic load pattern</p>
                </div>
            </div>
        </div>
    );
}

function IntegrationVariant() {
    const connectors = [
        ['Workday SCIM', 'Live', '42ms'],
        ['NetSuite ERP', 'Degraded', '210ms'],
        ['Salesforce API', 'Live', '118ms'],
        ['ServiceNow', 'Live', '76ms'],
        ['Snowflake egress', 'Paused', '—'],
    ];

    return (
        <div className="grid gap-3 lg:grid-cols-12">
            <div className="rounded-xl border border-teal-500/20 bg-teal-950/20 p-4 lg:col-span-7">
                <div className="flex items-start justify-between">
                    <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-teal-200/90">Webhook throughput</p>
                        <p className="hexenity-display mt-1 text-lg font-semibold text-white">Events accepted / min (peak window)</p>
                    </div>
                    <Cable className="h-5 w-5 text-teal-400" aria-hidden />
                </div>
                <div className="mt-3 h-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={webhookRps} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="whGrad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#2dd4bf" stopOpacity={0.35} />
                                    <stop offset="100%" stopColor="#2dd4bf" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="4 8" stroke="rgba(148,163,184,0.08)" vertical={false} />
                            <XAxis dataKey="t" tick={{ fill: '#64748b', fontSize: 10 }} tickLine={false} axisLine={false} />
                            <YAxis hide />
                            <Tooltip contentStyle={tip.contentStyle} />
                            <Area type="monotone" dataKey="r" stroke="#5eead4" strokeWidth={2} fill="url(#whGrad)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="flex flex-col gap-3 lg:col-span-5">
                <div className="rounded-xl border border-white/[0.08] bg-black/35 p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">Connector roster</p>
                    <ul className="mt-3 space-y-2 text-[12px]">
                        {connectors.map(([name, st, lat]) => (
                            <li key={name} className="flex items-center justify-between gap-2 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2">
                                <span className="font-medium text-white">{name}</span>
                                <span
                                    className={`text-[10px] font-semibold uppercase tracking-wider ${
                                        st === 'Live' ? 'text-emerald-400' : st === 'Degraded' ? 'text-amber-400' : 'text-rose-400'
                                    }`}
                                >
                                    {st}
                                </span>
                                <span className="tabular-nums text-slate-500">{lat}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="rounded-xl border border-violet-500/20 bg-violet-950/25 p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-violet-200/90">DLQ & retries</p>
                    <p className="mt-2 text-[12px] leading-relaxed text-slate-300">
                        6 events re-queued after Stripe rate limit · auto-backoff 45s.{' '}
                        <span className="text-violet-300/95">View trace</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

function ProcurementVariant() {
    return (
        <div className="grid gap-3 lg:grid-cols-12">
            <div className="rounded-xl border border-fuchsia-500/20 bg-fuchsia-950/20 p-4 lg:col-span-7">
                <div className="flex items-start justify-between gap-2">
                    <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-fuchsia-200/90">Intake SLA stress</p>
                        <p className="hexenity-display mt-1 text-lg font-semibold text-white">Approver lane backlog index</p>
                    </div>
                    <ClipboardList className="h-5 w-5 text-fuchsia-400" aria-hidden />
                </div>
                <div className="mt-3 h-[210px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={procurementSLA} layout="vertical" margin={{ top: 4, left: 4, right: 16, bottom: 4 }}>
                            <CartesianGrid strokeDasharray="4 8" stroke="rgba(217,70,239,0.09)" horizontal={false} />
                            <XAxis type="number" domain={[0, 100]} hide />
                            <YAxis type="category" dataKey="lane" width={72} tick={{ fill: '#94a3b8', fontSize: 10 }} tickLine={false} axisLine={false} />
                            <Tooltip contentStyle={tip.contentStyle} />
                            <Bar dataKey="risk" radius={[0, 6, 6, 0]} fill="#e879f9" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-black/35 p-4 lg:col-span-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">Tickets in flight</p>
                <ul className="mt-3 space-y-2.5 text-[12px] text-slate-300">
                    {[
                        ['Databricks trial', 'Legal & Sec', '6h SLA · breach risk'],
                        ['Asana BU split', 'FinOps queue', '48h negotiated'],
                        ['Okta SKU uplift', 'ITAM', 'Auto-routed Tier-2'],
                    ].map(([a, q, note]) => (
                        <li key={a} className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2">
                            <p className="font-semibold text-white">{a}</p>
                            <p className="text-[11px] text-slate-500">{q}</p>
                            <p className="mt-1 text-[10px] uppercase tracking-[0.1em] text-fuchsia-300/90">{note}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function AuditDeskVariant() {
    return (
        <div className="grid gap-3 lg:grid-cols-2">
            <div className="rounded-xl border border-slate-500/25 bg-slate-900/50 p-4">
                <div className="flex items-start justify-between">
                    <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-300/90">Export manifest · Q3 freeze</p>
                        <p className="hexenity-display mt-1 text-lg font-semibold text-white">SHA-256 attested payloads</p>
                    </div>
                    <FolderLock className="h-5 w-5 text-blue-400" aria-hidden />
                </div>
                <div className="mt-4 space-y-2 font-mono text-[11px] text-slate-400">
                    {[
                        ['access_review.csv', '4f92c1ae…'],
                        ['change_tickets.ndjson', '99ab21ff…'],
                        ['sso_mappings.parquet', 'c081d7e9…'],
                    ].map(([f, h]) => (
                        <div key={f} className="flex items-center justify-between gap-2 rounded-lg border border-white/[0.06] bg-black/40 px-3 py-2">
                            <span className="truncate text-emerald-200/90">{f}</span>
                            <span className="shrink-0 text-slate-500">{h}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="rounded-xl border border-blue-500/20 bg-blue-950/25 p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-blue-200/85">Signer chain · dual control</p>
                <ul className="mt-4 space-y-4 text-[12px] text-slate-300">
                    <li className="flex gap-3">
                        <span className="mt-0.5 h-8 w-px shrink-0 bg-gradient-to-b from-blue-400 to-transparent" aria-hidden />
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400">Controller</span>
                            <p className="mt-0.5">R. Nguyen — cryptographic seal @ 06:41 UTC</p>
                        </div>
                    </li>
                    <li className="flex gap-3">
                        <span className="mt-0.5 h-8 w-px shrink-0 bg-gradient-to-b from-emerald-400 to-transparent" aria-hidden />
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">Internal audit</span>
                            <p className="mt-0.5">M. Graves — attest bundle hash match</p>
                        </div>
                    </li>
                </ul>
                <div className="mt-6 rounded-lg border border-dashed border-blue-400/35 bg-blue-500/10 px-3 py-2 text-[11px] text-blue-100">
                    Regulator-ready download window closes in{' '}
                    <span className="font-semibold text-white">14h</span>
                </div>
            </div>
        </div>
    );
}

function IncidentVariant() {
    return (
        <div className="grid gap-3 lg:grid-cols-12">
            <div className="rounded-xl border border-red-500/25 bg-red-950/20 p-4 lg:col-span-8">
                <div className="flex items-start justify-between">
                    <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-red-200/90">Rolling 7d distribution</p>
                        <p className="hexenity-display mt-1 text-lg font-semibold text-white">Incident volume by tier</p>
                    </div>
                    <AlertTriangle className="h-5 w-5 text-red-400" aria-hidden />
                </div>
                <div className="mt-3 h-[220px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={incidentMix} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="svP3" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#94a3b8" stopOpacity={0.4} />
                                    <stop offset="100%" stopColor="#94a3b8" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="svP2" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#fb7185" stopOpacity={0.45} />
                                    <stop offset="100%" stopColor="#fb7185" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="svP1" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#f87171" stopOpacity={0.55} />
                                    <stop offset="100%" stopColor="#f87171" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="4 8" stroke="rgba(248,113,113,0.07)" vertical={false} />
                            <XAxis dataKey="d" tick={{ fill: '#64748b', fontSize: 10 }} tickLine={false} axisLine={false} />
                            <YAxis hide />
                            <Tooltip contentStyle={tip.contentStyle} />
                            <Area type="monotone" dataKey="p3" stackId="inc" stroke="#cbd5e1" fill="url(#svP3)" />
                            <Area type="monotone" dataKey="p2" stackId="inc" stroke="#fb7185" fill="url(#svP2)" />
                            <Area type="monotone" dataKey="p1" stackId="inc" stroke="#fecaca" fill="url(#svP1)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="flex flex-col gap-3 lg:col-span-4">
                <div className="rounded-xl border border-white/[0.08] bg-black/35 p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">Pager tree</p>
                    <div className="mt-3 space-y-3 text-[12px] text-slate-300">
                        <p>
                            <span className="text-red-400/95">●</span> Primary — Incident commander (GCP identity)
                        </p>
                        <p>
                            <span className="text-amber-400/95">●</span> Secondary — CTO bridge + vendor TAM escalation
                        </p>
                        <p>
                            <span className="text-emerald-400/95">●</span> Comms template — stakeholder digest auto-staged
                        </p>
                    </div>
                </div>
                <div className="rounded-xl border border-orange-500/25 bg-orange-950/20 p-4 text-[11px] text-orange-50/95">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-orange-300/95">Playbook</p>
                    <p className="mt-2 leading-relaxed">Revoke degraded tokens → snapshot audit scope → failover region hot-swap scripted.</p>
                </div>
            </div>
        </div>
    );
}

function AllocateVariant() {
    return (
        <div className="grid gap-3 lg:grid-cols-12">
            <div className="rounded-xl border border-teal-500/20 bg-teal-950/15 p-4 lg:col-span-8">
                <div className="flex items-start justify-between">
                    <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-teal-200/90">Blended attribution</p>
                        <p className="hexenity-display mt-1 text-lg font-semibold text-white">Direct tag vs pooled platform %</p>
                    </div>
                    <Landmark className="h-5 w-5 text-teal-400" aria-hidden />
                </div>
                <div className="mt-3 h-[230px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={allocateBars} layout="vertical" margin={{ top: 4, left: 4, right: 8, bottom: 4 }}>
                            <CartesianGrid strokeDasharray="4 8" stroke="rgba(45,212,191,0.08)" horizontal={false} />
                            <XAxis type="number" domain={[0, 56]} hide />
                            <YAxis type="category" dataKey="cc" width={52} tick={{ fill: '#94a3b8', fontSize: 10 }} tickLine={false} axisLine={false} />
                            <Tooltip contentStyle={tip.contentStyle} />
                            <Bar dataKey="tagged" stackId="stk" radius={[0, 0, 0, 0]} fill="#5eead4" />
                            <Bar dataKey="pooled" stackId="stk" radius={[0, 5, 5, 0]} fill="#4f46e5" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <p className="mt-2 text-[10px] text-slate-500">Legend: teal · direct tag · violet · amortized pooling</p>
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-black/35 p-4 lg:col-span-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">Suggested realloc</p>
                <ul className="mt-3 space-y-2 text-[12px]">
                    <li className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-2 text-slate-300">
                        Move <strong className="text-white">$18k/mo</strong> analytics from pooled → Sales (usage proof)
                    </li>
                    <li className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-2 text-slate-300">
                        Freeze <strong className="text-white">Figma Org</strong> overrun until SKU trim lands
                    </li>
                </ul>
            </div>
        </div>
    );
}

function BudgetVariant() {
    return (
        <div className="grid gap-3 lg:grid-cols-2">
            <div className="rounded-xl border border-violet-500/25 bg-violet-950/25 p-4">
                <div className="flex items-start justify-between gap-2">
                    <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-violet-200/90">Forecast envelope</p>
                        <p className="hexenity-display mt-1 text-lg font-semibold text-white">Week-over-week burn vs cap</p>
                    </div>
                    <PieChart className="h-5 w-5 text-violet-400" aria-hidden />
                </div>
                <div className="mt-3 h-[240px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={budgetBurndown} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="bdCap" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#64748b" stopOpacity={0.15} />
                                    <stop offset="100%" stopColor="#64748b" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="4 8" stroke="rgba(148,163,184,0.08)" vertical={false} />
                            <XAxis dataKey="w" tick={{ fill: '#64748b', fontSize: 10 }} tickLine={false} axisLine={false} />
                            <YAxis hide domain={[0, 115]} />
                            <Tooltip contentStyle={tip.contentStyle} />
                            <Area type="monotone" dataKey="cap" stroke="#64748b" strokeDasharray="4 4" fill="none" strokeWidth={1.5} />
                            <Area type="monotone" dataKey="burn" stroke="#a78bfa" strokeWidth={2} fill="url(#bdCap)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-black/35 p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">Mitigations surfaced</p>
                <div className="mt-4 space-y-3 text-[12px] text-slate-300">
                    <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-2.5">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-amber-300/95">Elevated</p>
                        <p className="mt-1">Design hits 118% blended spend — downgrade 44 viewer seats?</p>
                    </div>
                    <div className="rounded-lg border border-emerald-500/25 bg-emerald-500/[0.08] px-3 py-2.5">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-emerald-300/95">Controlled</p>
                        <p className="mt-1">Finance locked Zendesk SKU until usage audit completes.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function BenchmarkVariant() {
    return (
        <div className="grid gap-3 lg:grid-cols-12">
            <div className="rounded-xl border border-cyan-500/22 bg-gradient-to-br from-cyan-950/35 to-black/55 p-4 lg:col-span-12">
                <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan-200/90">Peer cohort · ARR tier 50–150M · NA</p>
                        <p className="hexenity-display mt-1 text-lg font-semibold text-white">Portfolio posture vs cohort median (%)</p>
                    </div>
                    <Telescope className="h-5 w-5 text-cyan-400" aria-hidden />
                </div>
                <div className="mt-3 h-[260px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={benchmarkPeers} margin={{ top: 12, right: 8, left: -8, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="4 8" stroke="rgba(34,211,238,0.08)" vertical={false} />
                            <XAxis dataKey="cat" tick={{ fill: '#64748b', fontSize: 10 }} tickLine={false} axisLine={false} />
                            <YAxis tick={{ fill: '#64748b', fontSize: 10 }} width={36} domain={[0, 100]} />
                            <Tooltip contentStyle={tip.contentStyle} />
                            <Bar dataKey="median" name="Median" fill="#475569" radius={[4, 4, 0, 0]} />
                            <Bar dataKey="you" name="You" fill="#22d3ee" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-black/35 p-4 text-[11px] text-slate-400 lg:col-span-12">
                <span className="font-semibold text-slate-200">Interpretation:</span>{' '}
                Data-plane spend skews conservative vs peers; uplift opportunity in consolidated observability tiers.
            </div>
        </div>
    );
}

function SecurityVariant() {
    return (
        <div className="grid gap-3 lg:grid-cols-12">
            <div className="rounded-xl border border-rose-500/25 bg-rose-950/30 p-4 lg:col-span-7">
                <div className="flex items-start justify-between">
                    <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-rose-200/90">Continuous controls</p>
                        <p className="hexenity-display mt-1 text-lg font-semibold text-white">Control events (7d rolling)</p>
                    </div>
                    <Radar className="h-5 w-5 text-rose-400" aria-hidden />
                </div>
                <div className="mt-3 h-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={controlEvents} layout="vertical" margin={{ top: 4, left: 4, right: 8, bottom: 4 }}>
                            <CartesianGrid strokeDasharray="4 8" stroke="rgba(244,114,182,0.08)" horizontal={false} />
                            <XAxis type="number" hide />
                            <YAxis type="category" dataKey="t" width={72} tick={{ fill: '#94a3b8', fontSize: 10 }} tickLine={false} axisLine={false} />
                            <Tooltip contentStyle={tip.contentStyle} />
                            <Bar dataKey="c" radius={[0, 6, 6, 0]} fill="#f472b6" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="flex flex-col gap-3 lg:col-span-5">
                <div className="rounded-xl border border-white/[0.08] bg-black/35 p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">SOC2 evidence stream</p>
                    <div className="mt-3 space-y-3 text-[12px]">
                        <div className="flex items-start gap-2 text-slate-300">
                            <FileWarning className="mt-0.5 h-4 w-4 text-rose-400" aria-hidden />
                            Sensitive export flagged: 842 rows → Databricks sandbox
                        </div>
                        <div className="flex items-start gap-2 text-slate-300">
                            <Shield className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden />
                            SCIM reconcile complete — dormant Okta cohort pruned automatically.
                        </div>
                    </div>
                </div>
                <div className="flex-1 rounded-xl border border-cyan-500/20 bg-cyan-950/25 p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan-200/85">Residual access heat</p>
                    <div className="mt-2 h-[140px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={renewalCash} margin={{ top: 4, right: 4, left: -12, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="4 8" stroke="rgba(148,163,184,0.07)" vertical={false} />
                                <XAxis dataKey="m" tick={{ fill: '#64748b', fontSize: 10 }} tickLine={false} axisLine={false} />
                                <YAxis hide />
                                <Tooltip contentStyle={tip.contentStyle} />
                                <Line type="step" dataKey="k" stroke="#22d3ee" strokeWidth={2} dot={{ r: 3, fill: '#22d3ee' }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}

const DEMO_SHELLS = {
    ops: OperationsVariant,
    finance: FinanceVariant,
    security: SecurityVariant,
    exec: ExecutiveVariant,
    discovery: DiscoveryVariant,
    lifecycle: LifecycleVariant,
    integrations: IntegrationVariant,
    procurement: ProcurementVariant,
    audit: AuditDeskVariant,
    incident: IncidentVariant,
    allocate: AllocateVariant,
    budget: BudgetVariant,
    benchmark: BenchmarkVariant,
};

export default function HexenitySaaSDemo() {
    const navigate = useNavigate();
    const [active, setActive] = useState(0);
    const [previewMode, setPreviewMode] = useState('compact');
    const v = VARIANTS[active];
    const DemoPanel = DEMO_SHELLS[v.id];
    const deep = VARIANT_DEEP_PREVIEW[v.id];

    return (
        <HexenityPageShell
            variant="saas-dark"
            shellHeader="toolbar"
            toolbarSpacing="spacious"
            badge={null}
            title=""
            subtitle={null}
            backLabel="Back to SaaS overview"
            onBack={() => navigate('/hexenity/saas')}
            actions={(
                <button
                    type="button"
                    onClick={() => navigate('/hexenity/contact')}
                    className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-white transition hover:bg-indigo-500"
                >
                    Enterprise demo
                    <ArrowRight className="h-4 w-4" aria-hidden />
                </button>
            )}
        >
            <div className="hexenity-saas-page space-y-6 pb-28 sm:space-y-8 lg:pb-32">
                <header className="max-w-3xl">
                    <p className="pf-mono text-[10px] uppercase tracking-[0.32em] text-indigo-300/85">Interactive product gallery</p>
                    <h1 className="hexenity-display mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl lg:leading-[1.05]">
                        Real SaaS console variants — rendered in-browser
                    </h1>
                    <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
                        <strong className="font-semibold text-slate-300">Thirteen</strong> situational shells—each framed like a real product surface: left app
                        chrome, URL context, and denser widgets (charts, manifests, SLA lanes, pager trees). Rotate through procurement, audits, incidents,
                        allocation math, budgets, and peer benchmarks—not just three panels on repeat. Use{' '}
                        <strong className="font-medium text-slate-300">Deep dive</strong> for a taller viewport plus IA notes for every demo.
                    </p>
                </header>

                <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
                    <nav
                        className="hexenity-contained-scroll flex max-h-[min(52vh,560px)] shrink-0 flex-col gap-2 overflow-y-auto overscroll-contain pt-2 pr-1 scroll-pt-2 lg:max-h-[min(78vh,720px)] lg:w-[19rem] lg:pr-2"
                        aria-label="Demo variants"
                    >
                        {VARIANTS.map((item, i) => {
                            const VIcon = item.Icon;
                            return (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => setActive(i)}
                                className={`rounded-2xl border px-4 py-3 text-left transition ${
                                    active === i
                                        ? 'border-indigo-400/50 bg-indigo-500/20 shadow-[0_0_40px_-16px_rgba(99,102,241,0.55)]'
                                        : 'border-white/[0.08] bg-black/30 hover:border-indigo-300/30 hover:bg-white/[0.04]'
                                }`}
                            >
                                <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-indigo-200/90">
                                    <VIcon className="h-3.5 w-3.5 shrink-0 opacity-90" aria-hidden />
                                    Demo {i + 1}
                                </span>
                                <span className="mt-1 block text-base font-semibold text-white">{item.name}</span>
                                <span className="mt-1 block text-xs text-slate-400">{item.subtitle}</span>
                            </button>
                            );
                        })}
                    </nav>

                    <motion.div
                        key={v.id}
                        initial={{ opacity: 0.65 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                        className="min-w-0 flex-1"
                    >
                        <div
                            className={`mb-4 rounded-2xl border border-white/[0.1] bg-gradient-to-r p-[1px] ${v.accent}`}
                            style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)' }}
                        >
                            <div className="rounded-[0.9rem] bg-[#070b14] px-4 py-3 sm:px-5">
                                <div className="flex flex-wrap items-center justify-between gap-3">
                                    <div className="min-w-0 flex-1">
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">Active shell</p>
                                        <p className="hexenity-display text-lg font-semibold text-white">{v.name}</p>
                                        <p className="mt-1 max-w-xl text-[12px] leading-snug text-slate-500">{DEMO_SCENARIO(v)}</p>
                                    </div>
                                    <div className="flex shrink-0 flex-col items-end gap-2 sm:flex-row sm:items-center">
                                        <div
                                            className="flex rounded-xl border border-white/[0.1] bg-black/40 p-0.5"
                                            role="group"
                                            aria-label="Preview detail level"
                                        >
                                            <button
                                                type="button"
                                                onClick={() => setPreviewMode('compact')}
                                                className={`rounded-lg px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] transition ${
                                                    previewMode === 'compact'
                                                        ? 'bg-white/10 text-white shadow-sm'
                                                        : 'text-slate-500 hover:text-slate-300'
                                                }`}
                                            >
                                                Standard
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setPreviewMode('detailed')}
                                                className={`rounded-lg px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] transition ${
                                                    previewMode === 'detailed'
                                                        ? 'bg-indigo-500/25 text-indigo-100 ring-1 ring-indigo-400/35'
                                                        : 'text-slate-500 hover:text-slate-300'
                                                }`}
                                            >
                                                Deep dive
                                            </button>
                                        </div>
                                        <BadgeCheck className="h-5 w-5 shrink-0 text-emerald-400" aria-hidden />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <BrowserFrame slug={v.slug} previewMode={previewMode} surfaceModules={deep?.modules}>
                            {DemoPanel ? <DemoPanel /> : null}
                        </BrowserFrame>

                        {previewMode === 'detailed' ? <VariantDeepDive variantId={v.id} /> : null}

                        <p className="mt-4 text-center text-[11px] text-slate-500">
                            Illustrative UI only — values are synthetic for layout and motion benchmarks.
                        </p>
                    </motion.div>
                </div>
            </div>
        </HexenityPageShell>
    );
}
