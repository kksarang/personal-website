import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import {
    ArrowRight,
    ExternalLink,
    Shirt,
    Smartphone,
    Truck,
    LayoutDashboard,
    Store,
    Layers3,
    MapPin,
    CheckCircle2,
    Sparkles,
    ClipboardList,
    Rocket,
    MessageSquare,
} from 'lucide-react';
import HexenityPageShell from '../../../components/KkSystems/HexenityPageShell';

const MODULES = [
    {
        icon: Smartphone,
        title: 'Customer Booking App',
        desc: 'White-label pickup & delivery booking, order status, payments, and loyalty — branded for each laundry business.',
    },
    {
        icon: Truck,
        title: 'Delivery Partner App',
        desc: 'Route-ready pickup/drop workflows for riders with live order assignment and proof of delivery.',
    },
    {
        icon: LayoutDashboard,
        title: 'CMS + POS',
        desc: 'Counter billing, garment tracking, packages, invoices, and multi-store operations in one control center.',
    },
    {
        icon: Store,
        title: 'Multi-store & Franchise',
        desc: 'Branch-level inventory, staff roles, and reporting for growing laundry chains across cities.',
    },
];

const PLAN_PHASES = [
    {
        phase: '01',
        title: 'Product discovery',
        items: ['Operator interviews & workflow mapping', 'Competitor & POS gap analysis', 'MVP scope for India / UAE / GCC'],
    },
    {
        phase: '02',
        title: 'Architecture & UX',
        items: ['App + POS information architecture', 'White-label branding system', 'Role model: owner, counter, rider, customer'],
    },
    {
        phase: '03',
        title: 'Build & integrate',
        items: ['Customer & delivery apps', 'CMS / POS core', 'Payments, notifications, reporting'],
    },
    {
        phase: '04',
        title: 'Launch & customize',
        items: ['Store onboarding playbooks', 'Per-brand theming & packages', 'Post-launch support & iteration'],
    },
];

const AUDIENCES = [
    'Single-outlet laundry & dry cleaners',
    'Multi-branch and franchise operators',
    'Pickup & delivery laundry startups',
    'Hotel / corporate garment contracts',
];

function SectionLabel({ index, label }) {
    return (
        <div className="pf-mono mb-3 flex items-center gap-4 text-[11px] uppercase tracking-[0.35em] text-white/35">
            <span className="text-indigo-300">({index})</span>
            <span>{label}</span>
            <span className="h-px flex-1 bg-white/[0.08]" />
        </div>
    );
}

export default function CleansoLaundry() {
    const navigate = useNavigate();

    return (
        <HexenityPageShell
            badge="Software Solution"
            title="Cleanso — custom laundry software, planned and built by Hexenity"
            subtitle="A white-label laundry management product in active planning and build: customer app, delivery app, CMS + POS — tailored for operators across India, UAE, and the GCC."
            backLabel="Back to Work"
            onBack={() => navigate('/hexenity/work')}
            actions={(
                <>
                    <a
                        href="https://kksarang.github.io/laundry/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-slate-100 transition hover:border-indigo-300/45 hover:text-indigo-200"
                    >
                        Live product site
                        <ExternalLink className="h-4 w-4" />
                    </a>
                    <button
                        type="button"
                        onClick={() => navigate('/hexenity/contact')}
                        className="inline-flex items-center gap-2 rounded-full border border-indigo-300/35 bg-indigo-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-indigo-100 transition hover:bg-indigo-500/30"
                    >
                        Plan your laundry stack
                        <ArrowRight className="h-4 w-4" />
                    </button>
                </>
            )}
        >
            <div className="space-y-20">
                {/* Hero strip */}
                <section className="overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-indigo-500/15 via-[#0B0F19] to-cyan-500/10 p-8 sm:p-10">
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-300/30 bg-indigo-500/15 px-3 py-1 pf-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-indigo-200">
                            <Shirt className="h-3.5 w-3.5" />
                            New software solution
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-500/10 px-3 py-1 pf-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-200">
                            <Sparkles className="h-3.5 w-3.5" />
                            Product planning in progress
                        </span>
                    </div>
                    <h2 className="pf-display mt-6 max-w-3xl text-[clamp(1.6rem,3vw,2.4rem)] font-bold leading-tight text-white">
                        Laundry businesses need more than a generic POS — they need a branded operating system.
                    </h2>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
                        Hexenity is designing and building <strong className="font-semibold text-white">Cleanso</strong> as a customizable laundry software suite:
                        booking, delivery, billing, and multi-store control under one white-label product plan — with flat yearly licensing for serious operators.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        {['India', 'UAE', 'GCC'].map((region) => (
                            <span
                                key={region}
                                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-sm text-slate-200"
                            >
                                <MapPin className="h-3.5 w-3.5 text-indigo-300" />
                                {region}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Modules */}
                <section>
                    <SectionLabel index="01" label="Product modules" />
                    <h2 className="pf-display mb-3 text-[clamp(1.6rem,3vw,2.3rem)] font-bold text-white">
                        What Cleanso is built to cover
                    </h2>
                    <p className="mb-8 max-w-2xl text-slate-400">
                        One coherent stack instead of disconnected booking tools, paper tickets, and generic billing software.
                    </p>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {MODULES.map((mod, i) => {
                            const Icon = mod.icon;
                            return (
                                <Motion.article
                                    key={mod.title}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.06 }}
                                    className="group rounded-2xl border border-white/[0.08] bg-[#0B0F19] p-6 transition-colors duration-400 hover:border-indigo-300/35 hover:bg-[#10152a]"
                                >
                                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-indigo-300/25 bg-indigo-500/10 text-indigo-300 transition-transform duration-400 group-hover:-translate-y-0.5">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="pf-display text-xl font-bold text-white">{mod.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{mod.desc}</p>
                                </Motion.article>
                            );
                        })}
                    </div>
                </section>

                {/* Product planning */}
                <section>
                    <SectionLabel index="02" label="Product planning" />
                    <h2 className="pf-display mb-3 text-[clamp(1.6rem,3vw,2.3rem)] font-bold text-white">
                        How we plan the custom laundry build
                    </h2>
                    <p className="mb-8 max-w-2xl text-slate-400">
                        Cleanso is not a one-size template. Each engagement follows a product plan — from discovery to white-label launch —
                        so the software matches how your counter, riders, and customers actually work.
                    </p>
                    <div className="border-t border-white/[0.08]">
                        {PLAN_PHASES.map((step) => (
                            <article
                                key={step.phase}
                                className="group grid gap-4 border-b border-white/[0.08] py-8 sm:grid-cols-[100px_1fr] sm:gap-10"
                            >
                                <span className="pf-display text-4xl font-extrabold leading-none text-white/[0.08] transition-colors duration-500 group-hover:text-indigo-400/50 sm:text-5xl">
                                    {step.phase}
                                </span>
                                <div>
                                    <div className="mb-3 flex items-center gap-2">
                                        <ClipboardList className="h-4 w-4 text-indigo-300" />
                                        <h3 className="pf-display text-xl font-bold text-white sm:text-2xl">{step.title}</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {step.items.map((item) => (
                                            <li key={item} className="flex gap-2.5 text-sm text-slate-400">
                                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400/80" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Who it's for + why Hexenity */}
                <section className="grid gap-6 lg:grid-cols-2">
                    <div className="rounded-3xl border border-white/[0.08] bg-[#0B0F19] p-7 sm:p-8">
                        <SectionLabel index="03" label="Built for" />
                        <h3 className="pf-display mb-5 text-2xl font-bold text-white">Operators we design for</h3>
                        <ul className="space-y-3">
                            {AUDIENCES.map((item) => (
                                <li key={item} className="flex gap-3 text-sm text-slate-300">
                                    <Layers3 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-300" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="rounded-3xl border border-indigo-300/20 bg-indigo-500/10 p-7 sm:p-8">
                        <SectionLabel index="04" label="Hexenity role" />
                        <h3 className="pf-display mb-4 text-2xl font-bold text-white">Software studio behind Cleanso</h3>
                        <p className="text-sm leading-relaxed text-slate-300">
                            Hexenity owns product planning, UX, engineering, and white-label delivery for Cleanso —
                            from the live marketing site to the custom laundry stack roadmap. If you run laundry or dry cleaning
                            and need branded apps + POS, we plan and build it with you.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <span className="rounded-full border border-white/15 px-3 py-1 pf-mono text-[9px] uppercase tracking-[0.18em] text-slate-300">
                                White-label
                            </span>
                            <span className="rounded-full border border-white/15 px-3 py-1 pf-mono text-[9px] uppercase tracking-[0.18em] text-slate-300">
                                Flat yearly license
                            </span>
                            <span className="rounded-full border border-white/15 px-3 py-1 pf-mono text-[9px] uppercase tracking-[0.18em] text-slate-300">
                                Custom workflows
                            </span>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="overflow-hidden rounded-3xl border border-white/[0.1] bg-[#0B0F19] p-8 sm:p-10">
                    <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                        <div className="max-w-xl">
                            <p className="pf-mono mb-3 text-[10px] uppercase tracking-[0.3em] text-indigo-300">Next step</p>
                            <h2 className="pf-display text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-white">
                                See the live site — or start a laundry product plan
                            </h2>
                            <p className="mt-3 text-slate-400">
                                Review the public Cleanso presence, then talk to Hexenity about customization for your stores.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="https://kksarang.github.io/laundry/"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#070B17] transition hover:bg-indigo-100"
                            >
                                <Rocket className="h-4 w-4" />
                                Open Cleanso site
                            </a>
                            <button
                                type="button"
                                onClick={() => navigate('/hexenity/contact')}
                                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-indigo-300/50 hover:bg-indigo-500/15"
                            >
                                <MessageSquare className="h-4 w-4" />
                                Contact Hexenity
                            </button>
                            <button
                                type="button"
                                onClick={() => navigate('/hexenity/work/cleanso')}
                                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-slate-300 transition hover:text-white"
                            >
                                Case study
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </HexenityPageShell>
    );
}
