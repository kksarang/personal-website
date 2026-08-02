import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const SectionLabel = ({ index, label }) => (
    <div className="pf-mono mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-slate-500 sm:mb-8 sm:text-[11px] sm:tracking-[0.38em]">
        <span className="text-indigo-300">({index})</span>
        <span>{label}</span>
        <span className="h-px flex-1 bg-white/[0.08]" />
    </div>
);

/** Expanded service index — replaces card grids + duplicate offerings */
export const ServiceIndex = () => {
    const navigate = useNavigate();
    const services = [
        {
            index: '01',
            title: 'Mobile applications',
            description: 'iOS, Android, and cross-platform products built for reliability and scale.',
            link: '/enitexa.ai/services/mobile-app-development',
        },
        {
            index: '02',
            title: 'Web platforms',
            description: 'Corporate sites, SaaS products, and conversion-focused web systems.',
            link: '/enitexa.ai/services/website-development',
        },
        {
            index: '03',
            title: 'Brand & growth',
            description: 'Identity, UI/UX, SEO, and campaigns aligned to revenue outcomes.',
            link: '/enitexa.ai/services',
        },
        {
            index: '04',
            title: 'AI & automation',
            description: 'Workflow intelligence, copilots, and operations automation layers.',
            link: '/enitexa.ai/ai',
        },
        {
            index: '05',
            title: 'Enterprise systems',
            description: 'ERP foundations, dashboards, and governance for multi-team ops.',
            link: '/enitexa.ai/solutions/erp',
        },
    ];

    return (
        <section id="services" className="enitexa-editorial relative bg-[#0B0F19] py-20 sm:py-28">
            <div className="mx-auto max-w-[90rem] px-4 sm:px-10 lg:px-16">
                <div className="flex flex-col gap-8 border-b border-white/[0.08] pb-12 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-3xl">
                        <SectionLabel index="02" label="Capabilities" />
                        <h2 className="pf-display text-[clamp(2rem,5.5vw,3.75rem)] font-extrabold leading-[0.98] tracking-[-0.03em] text-white">
                            Everything to build,
                            <br />
                            <span className="pf-outline-text">launch, and grow.</span>
                        </h2>
                    </div>
                    <p className="max-w-sm text-sm leading-relaxed text-slate-400 lg:pb-2 lg:text-base">
                        One partner across product, design, engineering, and growth — so your roadmap stays
                        coherent from first sprint to scale.
                    </p>
                </div>

                <div className="mt-2">
                    {services.map((service) => (
                        <button
                            key={service.index}
                            type="button"
                            onClick={() => navigate(service.link)}
                            data-cursor="Open"
                            className="group grid w-full grid-cols-[auto_1fr_auto] items-baseline gap-4 border-b border-white/[0.08] py-7 text-left sm:gap-8 sm:py-9"
                        >
                            <span className="pf-mono text-[10px] text-indigo-300/80 sm:text-xs">{service.index}</span>
                            <span className="min-w-0">
                                <span className="pf-display block text-[clamp(1.35rem,3vw,2.1rem)] font-bold text-white transition-transform duration-500 group-hover:translate-x-1.5">
                                    {service.title}
                                </span>
                                <span className="mt-2 block max-w-2xl text-sm leading-relaxed text-slate-500 transition-colors duration-300 group-hover:text-slate-300">
                                    {service.description}
                                </span>
                            </span>
                            <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-600 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                        </button>
                    ))}
                </div>

                <div className="mt-10">
                    <Link
                        to="/enitexa.ai/services"
                        className="pf-mono inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-indigo-300 transition-colors hover:text-white"
                    >
                        View full service catalog <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

/** Process as a numbered continuum — no icon cards */
export const ProcessStrip = () => {
    const steps = [
        { title: 'Discover', desc: 'Goals, constraints, success metrics' },
        { title: 'Design', desc: 'UX, architecture, delivery plan' },
        { title: 'Build', desc: 'Sprints, demos, quality gates' },
        { title: 'Launch', desc: 'Release, observe, stabilize' },
        { title: 'Grow', desc: 'Optimize for revenue and ops' },
    ];

    return (
        <section id="process" className="enitexa-editorial relative border-t border-white/[0.06] bg-[#0B0F19] py-20 sm:py-28">
            <div className="mx-auto max-w-[90rem] px-4 sm:px-10 lg:px-16">
                <SectionLabel index="03" label="Process" />
                <h2 className="pf-display max-w-3xl text-[clamp(1.85rem,4.5vw,3.1rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-white">
                    A clear operating rhythm.
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
                    Milestone-first delivery with weekly visibility — so stakeholders always know what ships next.
                </p>

                <div className="mt-14 grid gap-0 border-t border-white/[0.08] sm:grid-cols-5">
                    {steps.map((step, idx) => (
                        <div
                            key={step.title}
                            className="group border-b border-white/[0.08] py-7 sm:border-b-0 sm:border-l sm:border-white/[0.08] sm:px-5 sm:py-8 sm:first:border-l-0 sm:first:pl-0"
                        >
                            <p className="pf-mono text-[10px] text-indigo-300/70">0{idx + 1}</p>
                            <p className="pf-display mt-3 text-xl font-bold text-white sm:text-2xl">{step.title}</p>
                            <p className="mt-2 text-sm leading-relaxed text-slate-500">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

/** Proof band — metrics + markets + industries in one editorial composition */
export const ProofBand = () => {
    const metrics = [
        { value: '20+', label: 'Products shipped' },
        { value: '3×', label: 'Faster delivery cycles' },
        { value: '4', label: 'Regions served' },
        { value: '360°', label: 'Partner model' },
    ];

    return (
        <section className="enitexa-editorial relative border-t border-white/[0.06] bg-[#0B0F19] py-20 sm:py-28">
            <div className="mx-auto max-w-[90rem] px-4 sm:px-10 lg:px-16">
                <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
                    <div>
                        <SectionLabel index="04" label="Proof" />
                        <h2 className="pf-display text-[clamp(1.85rem,4.5vw,3.1rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-white">
                            Built for teams that need results, not theater.
                        </h2>
                        <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-400 sm:text-base">
                            From India to the Middle East, Canada, and the US — one delivery standard for
                            startups, enterprises, and local businesses.
                        </p>
                        <p className="pf-mono mt-8 text-[10px] uppercase tracking-[0.22em] text-slate-600">
                            Auto · Health · Retail · Agencies · Education · Real estate · Local commerce
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-px overflow-hidden border border-white/[0.08] bg-white/[0.08]">
                        {metrics.map((m) => (
                            <div key={m.label} className="bg-[#0B0F19] px-5 py-8 sm:px-8 sm:py-10">
                                <p className="pf-display text-[clamp(2rem,4vw,2.75rem)] font-extrabold leading-none text-white">
                                    {m.value}
                                </p>
                                <p className="pf-mono mt-3 text-[9px] uppercase tracking-[0.22em] text-slate-500">
                                    {m.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

/** Product spotlight — ERP + AI without icon card grid */
export const ProductSpotlight = () => {
    const navigate = useNavigate();

    return (
        <section className="enitexa-editorial relative border-t border-white/[0.06] bg-[#0B0F19] py-20 sm:py-28">
            <div className="mx-auto max-w-[90rem] px-4 sm:px-10 lg:px-16">
                <SectionLabel index="05" label="Products" />
                <h2 className="pf-display max-w-3xl text-[clamp(1.85rem,4.5vw,3.1rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-white">
                    Platforms you can touch today.
                </h2>

                <div className="mt-14 grid gap-0 border-t border-white/[0.08] lg:grid-cols-2">
                    <article className="border-b border-white/[0.08] py-10 lg:border-b-0 lg:border-r lg:pr-12 lg:pt-12">
                        <p className="pf-mono text-[10px] uppercase tracking-[0.28em] text-indigo-300">Enitexa.Ai ERP</p>
                        <h3 className="pf-display mt-4 text-2xl font-bold text-white sm:text-3xl">
                            Operations in one control layer.
                        </h3>
                        <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
                            Customers, projects, analytics, and team workflows — unified for speed and executive
                            visibility.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <button
                                type="button"
                                onClick={() => navigate('/enitexa.ai/erp/dashboard')}
                                data-cursor="Demo"
                                className="inline-flex items-center gap-2 rounded-full border border-white bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-transparent hover:text-white"
                            >
                                Launch ERP demo <ArrowUpRight className="h-4 w-4" />
                            </button>
                            <button
                                type="button"
                                onClick={() => navigate('/enitexa.ai/solutions/erp')}
                                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
                            >
                                Features
                            </button>
                        </div>
                    </article>

                    <article className="py-10 lg:pl-12 lg:pt-12">
                        <p className="pf-mono text-[10px] uppercase tracking-[0.28em] text-indigo-300">Enitexa.Ai</p>
                        <h3 className="pf-display mt-4 text-2xl font-bold text-white sm:text-3xl">
                            AI that sits inside the work.
                        </h3>
                        <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
                            Copilots, automation, and decision support wired into real business processes — not
                            bolted on as a chat toy.
                        </p>
                        <div className="mt-8">
                            <button
                                type="button"
                                onClick={() => navigate('/enitexa.ai/ai')}
                                data-cursor="Open"
                                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-black"
                            >
                                Explore AI layer <ArrowUpRight className="h-4 w-4" />
                            </button>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

/** Editorial voices — quotes as typography, not cards */
export const Voices = () => {
    const quotes = [
        {
            quote: 'Enitexa.Ai became our external product and technology team. Delivery stayed predictable and premium.',
            by: 'Rahul — Director, Automotive',
        },
        {
            quote: 'From UX redesign to launch, they improved lead conversion and customer confidence.',
            by: 'Neha — Marketing Lead, Healthcare',
        },
        {
            quote: 'Enterprise-level visibility without hiring a large in-house tech department.',
            by: 'Arjun — Founder, Growth Startup',
        },
    ];

    return (
        <section className="enitexa-editorial relative border-t border-white/[0.06] bg-[#0B0F19] py-20 sm:py-28">
            <div className="mx-auto max-w-[90rem] px-4 sm:px-10 lg:px-16">
                <SectionLabel index="06" label="Voices" />
                <h2 className="pf-display max-w-2xl text-[clamp(1.85rem,4.5vw,3.1rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-white">
                    Teams that shipped with us.
                </h2>

                <div className="mt-14 space-y-0 border-t border-white/[0.08]">
                    {quotes.map((item) => (
                        <blockquote
                            key={item.by}
                            className="border-b border-white/[0.08] py-8 sm:py-10"
                        >
                            <p className="pf-display max-w-4xl text-[clamp(1.15rem,2.4vw,1.65rem)] font-medium leading-snug text-white/90">
                                “{item.quote}”
                            </p>
                            <footer className="pf-mono mt-4 text-[10px] uppercase tracking-[0.22em] text-slate-500">
                                {item.by}
                            </footer>
                        </blockquote>
                    ))}
                </div>
            </div>
        </section>
    );
};
