import React from 'react';
import { TrendingUp, Smartphone, Cog, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Positioning = () => {
    const continuum = [
        { from: 'No-code', to: 'Full engineering' },
        { from: 'Apps + AI', to: 'Automation layer' },
        { from: 'One partner', to: 'Build + growth' },
        { from: 'Launch', to: 'Growth support' },
    ];

    const principles = [
        {
            title: 'External innovation team',
            desc: 'An on-demand product, tech, and growth unit that plugs into your business.',
        },
        {
            title: 'Built for non-technical leaders',
            desc: 'Ship modern systems without hiring and managing an in-house engineering org.',
        },
        {
            title: 'Outcome and revenue aligned',
            desc: 'Roadmaps prioritize what moves sales, operations, and customer experience.',
        },
    ];

    return (
        <section className="enitexa-positioning relative overflow-hidden bg-[#0B0F19] py-20 sm:py-28 lg:py-36">
            {/* Atmosphere — soft wash, not decorative orbs stacked on content */}
            <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_10%_0%,rgba(99,102,241,0.14),transparent_55%),radial-gradient(ellipse_60%_45%_at_90%_100%,rgba(167,139,250,0.08),transparent_50%)]"
                aria-hidden
            />
            <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent"
                aria-hidden
            />

            <div className="relative z-10 mx-auto max-w-[90rem] px-4 sm:px-10 lg:px-16">
                {/* Masthead */}
                <div className="flex flex-col gap-8 border-b border-white/[0.08] pb-12 sm:pb-16 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
                    <div className="max-w-4xl">
                        <div className="pf-mono mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-slate-500 sm:mb-8 sm:text-[11px] sm:tracking-[0.38em]">
                            <span className="text-indigo-300">(01)</span>
                            <span>About Enitexa.Ai</span>
                        </div>

                        <h2 className="pf-display text-[clamp(2rem,6.5vw,4.25rem)] font-extrabold leading-[0.96] tracking-[-0.03em] text-white">
                            Not a vendor.
                            <br />
                            <span className="pf-outline-text">Your execution</span>
                            <br />
                            <span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                                partner.
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-sm text-[0.95rem] leading-relaxed text-slate-400 lg:pb-2 lg:text-base">
                        Enitexa.Ai builds digital presence, applications, automation, AI, branding, and growth
                        systems for corporations, agencies, startups, and local businesses — under one accountable
                        partner model.
                    </p>
                </div>

                {/* Continuum — horizontal capability range, not a card grid */}
                <div className="enitexa-positioning-continuum relative mt-12 sm:mt-16">
                    <div className="mb-8 flex items-baseline justify-between gap-4">
                        <p className="pf-mono text-[10px] uppercase tracking-[0.3em] text-slate-500">
                            Execution continuum
                        </p>
                        <p className="pf-mono hidden text-[10px] uppercase tracking-[0.22em] text-indigo-300/80 sm:block">
                            Idea → system → scale
                        </p>
                    </div>

                    {/* Progress rail */}
                    <div className="relative mb-10 hidden h-px bg-white/[0.08] sm:block" aria-hidden>
                        <div className="absolute inset-y-0 left-0 w-full origin-left bg-gradient-to-r from-indigo-400/80 via-violet-400/50 to-transparent" />
                    </div>

                    <div className="grid gap-0 border-t border-white/[0.08] sm:grid-cols-4 sm:border-t-0">
                        {continuum.map((step, idx) => (
                            <div
                                key={step.from}
                                className="group relative border-b border-white/[0.08] py-6 last:border-b-0 sm:border-b-0 sm:border-l sm:border-white/[0.08] sm:px-5 sm:py-2 sm:first:border-l-0 sm:first:pl-0 lg:px-7"
                            >
                                <span className="pf-mono absolute -top-3 left-0 hidden text-[9px] text-indigo-400/70 sm:block">
                                    0{idx + 1}
                                </span>
                                <p className="pf-display text-[clamp(1.25rem,2.4vw,1.65rem)] font-bold leading-tight text-white transition-transform duration-500 group-hover:translate-x-0.5">
                                    {step.from}
                                </p>
                                <p className="pf-mono mt-2 flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-slate-500">
                                    <span className="inline-block h-px w-4 bg-indigo-400/50" aria-hidden />
                                    {step.to}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Principles — editorial rows, no icon cards */}
                <div className="mt-14 grid gap-0 border-t border-white/[0.1] sm:mt-20 lg:grid-cols-[0.35fr_1fr]">
                    <div className="border-b border-white/[0.08] py-8 lg:border-b-0 lg:border-r lg:border-white/[0.08] lg:pr-10 lg:pt-10">
                        <p className="pf-mono text-[10px] uppercase tracking-[0.3em] text-slate-500">
                            How we partner
                        </p>
                        <p className="pf-display mt-4 max-w-[16ch] text-2xl font-bold leading-snug text-white sm:text-3xl">
                            Three commitments. Zero fluff.
                        </p>
                    </div>

                    <div className="lg:pl-4">
                        {principles.map((item, idx) => (
                            <div
                                key={item.title}
                                className="group grid grid-cols-[auto_1fr] gap-5 border-b border-white/[0.08] py-7 last:border-b-0 sm:gap-8 sm:py-9 sm:grid-cols-[4.5rem_1fr]"
                            >
                                <span className="pf-display text-2xl font-extrabold leading-none text-white/[0.12] transition-colors duration-500 group-hover:text-indigo-400/45 sm:text-3xl">
                                    0{idx + 1}
                                </span>
                                <div className="min-w-0">
                                    <h3 className="pf-display text-lg font-bold text-white transition-transform duration-500 group-hover:translate-x-1 sm:text-xl">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-[0.95rem]">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export const CoreOfferings = () => {
    const navigate = useNavigate();
    const offerings = [
        {
            index: '01',
            title: 'Build Digital Systems',
            description: 'Product engineering for apps, platforms, and operational systems.',
            items: ['Mobile + Web Apps', 'SaaS Platforms', 'Business Dashboards'],
            icon: Smartphone,
            link: '/enitexa.ai/services',
        },
        {
            index: '02',
            title: 'Brand and Growth',
            description: 'Digital marketing, SEO, branding, and conversion-focused UX systems.',
            items: ['Digital Marketing', 'SEO + Branding', 'UI/UX Transformation'],
            icon: Cog,
            link: '/enitexa.ai/services',
        },
        {
            index: '03',
            title: 'Automate and Scale',
            description: 'AI, automation, and enterprise architecture for long-term scale.',
            items: ['AI Integrations', 'Automation Systems', 'Cloud + Security Layer'],
            icon: TrendingUp,
            link: '/enitexa.ai/services',
        },
    ];

    return (
        <section id="offerings" className="border-t border-white/5 bg-[#0B0F19] py-16 sm:py-24 lg:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-10 sm:mb-16">
                    <div className="pf-mono mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-slate-400 sm:mb-6 sm:gap-4 sm:text-[11px] sm:tracking-[0.35em]">
                        <span className="text-indigo-300">(03)</span>
                        <span>Core Services</span>
                        <span className="h-px flex-1 bg-white/[0.08]" />
                    </div>
                    <h2 className="pf-display max-w-3xl text-[clamp(1.5rem,5.5vw,2.5rem)] font-bold leading-[1.05] text-white">
                        From apps to AI <span className="pf-outline-text">to growth.</span>
                    </h2>
                </div>

                <div className="border-t border-white/[0.08]">
                    {offerings.map((offering) => (
                        <button
                            key={offering.index}
                            type="button"
                            onClick={() => navigate(offering.link)}
                            data-cursor="View"
                            className="pf-row-link group grid w-full grid-cols-[1fr_auto] items-center gap-3 border-b border-white/[0.08] px-1 py-6 text-left transition-colors duration-300 sm:grid-cols-[auto_1fr_auto] sm:gap-10 sm:px-6 sm:py-10 md:py-12"
                        >
                            <span className="pf-mono hidden text-xs text-slate-500 transition-colors duration-300 group-hover:text-white/70 sm:block">
                                {offering.index}
                            </span>
                            <span className="min-w-0">
                                <span className="pf-display block text-[clamp(1.4rem,3vw,2.3rem)] font-bold leading-tight text-white transition-transform duration-500 group-hover:translate-x-2">
                                    {offering.title}
                                </span>
                                <span className="mt-2 block max-w-xl text-sm leading-relaxed text-slate-400 transition-colors duration-300 group-hover:text-white/75">
                                    {offering.description}
                                </span>
                                <span className="mt-4 flex flex-wrap gap-2">
                                    {offering.items.map((item) => (
                                        <span
                                            key={item}
                                            className="pf-mono rounded-full border border-white/10 px-3 py-1 text-[9px] uppercase tracking-[0.18em] text-slate-400 transition-colors duration-300 group-hover:border-white/30 group-hover:text-white"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </span>
                            </span>
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all duration-500 group-hover:rotate-45 group-hover:border-white group-hover:text-white sm:h-14 sm:w-14">
                                <offering.icon className="h-5 w-5 transition-opacity duration-300 group-hover:hidden" />
                                <ArrowUpRight className="hidden h-5 w-5 group-hover:block" />
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};
