import React from 'react';
import { TrendingUp, Smartphone, Cog, Rocket, ShieldCheck, Gauge, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Positioning = () => {
    const highlights = [
        {
            title: 'External Innovation Team',
            desc: 'We operate as your on-demand product, tech, and growth partner.',
            icon: Rocket,
        },
        {
            title: 'Built for Non-technical Businesses',
            desc: 'No in-house development team required to execute modern digital systems.',
            icon: ShieldCheck,
        },
        {
            title: 'Outcome and Sales Focused',
            desc: 'Every roadmap aligns engineering output with business and revenue impact.',
            icon: Gauge,
        },
    ];

    const pillars = [
        { value: 'No-code', label: 'to Full Engineering', tone: 'neutral' },
        { value: 'One Partner', label: 'for Build + Growth', tone: 'accent' },
        { value: 'Apps + AI', label: 'Automation Layer', tone: 'neutral' },
        { value: 'Launch', label: 'to Growth Support', tone: 'accent' },
    ];

    return (
        <section className="enitexa-positioning relative overflow-hidden bg-[#0B0F19] py-28 sm:py-32">
            <div
                className="pointer-events-none absolute -left-[18%] top-[12%] h-[420px] w-[420px] rounded-full bg-indigo-500/[0.09] blur-[120px]"
                aria-hidden
            />
            <div
                className="pointer-events-none absolute -right-[12%] bottom-[8%] h-[360px] w-[360px] rounded-full bg-fuchsia-500/[0.07] blur-[110px]"
                aria-hidden
            />

            <div className="relative z-10 mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-16">
                <div className="grid items-start gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
                    <div>
                        <div className="pf-mono mb-7 flex items-center gap-4 text-[11px] uppercase tracking-[0.35em] text-slate-400">
                            <span className="text-indigo-300">(01)</span>
                            <span>About Enitexa.Ai</span>
                            <span className="h-px flex-1 bg-white/[0.08]" />
                        </div>

                        <h2 className="pf-display max-w-xl text-[clamp(1.85rem,3.4vw,2.85rem)] font-bold leading-[1.04] text-white">
                            Not just a software company.
                            <span className="mt-2 block bg-gradient-to-r from-indigo-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                                A complete digital execution partner.
                            </span>
                        </h2>

                        <p className="mt-7 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
                            Enitexa.Ai helps corporations, agencies, startups, and local businesses build digital
                            presence, applications, automation systems, AI integrations, branding, and growth
                            infrastructure — with one unified partner model.
                        </p>

                        <div className="mt-12 space-y-3">
                            {highlights.map((item, idx) => (
                                <article
                                    key={item.title}
                                    className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] px-5 py-5 transition-all duration-500 hover:border-indigo-300/30 hover:bg-white/[0.045] sm:px-6"
                                >
                                    <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-indigo-400/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                    <div className="flex items-start gap-4 sm:gap-5">
                                        <span className="pf-mono pt-0.5 text-[10px] tracking-[0.2em] text-indigo-300/80">
                                            0{idx + 1}
                                        </span>
                                        <div className="min-w-0 flex-1">
                                            <div className="flex items-start justify-between gap-4">
                                                <h3 className="pf-display text-lg font-bold text-white transition-transform duration-300 group-hover:translate-x-0.5 sm:text-xl">
                                                    {item.title}
                                                </h3>
                                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-indigo-300 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:border-indigo-300/40 group-hover:bg-indigo-500/15">
                                                    <item.icon className="h-4 w-4" />
                                                </span>
                                            </div>
                                            <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-400">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>

                    <div className="relative lg:pt-10">
                        <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-indigo-500/10 via-transparent to-fuchsia-500/10 blur-2xl" aria-hidden />
                        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.1] bg-[#070b14]/80 p-2 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)] backdrop-blur-sm">
                            <div className="mb-2 flex items-center justify-between px-4 py-3">
                                <p className="pf-mono text-[10px] uppercase tracking-[0.28em] text-slate-500">
                                    Execution range
                                </p>
                                <span className="pf-mono rounded-full border border-indigo-300/25 bg-indigo-500/10 px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] text-indigo-200">
                                    Partner model
                                </span>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                {pillars.map((pillar) => (
                                    <div
                                        key={pillar.value}
                                        className="group relative min-h-[140px] overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-br from-white/[0.05] to-transparent p-6 transition-all duration-500 hover:border-indigo-300/35 hover:from-indigo-500/[0.12] sm:min-h-[160px] sm:p-7"
                                    >
                                        <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-indigo-400/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                                        <p
                                            className={`pf-display relative text-[clamp(1.35rem,2.2vw,1.85rem)] font-bold leading-tight ${
                                                pillar.tone === 'accent' ? 'text-indigo-300' : 'text-white'
                                            }`}
                                        >
                                            {pillar.value}
                                        </p>
                                        <p className="pf-mono relative mt-3 text-[9px] uppercase tracking-[0.22em] text-slate-500 transition-colors duration-300 group-hover:text-slate-300">
                                            {pillar.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
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
        <section id="offerings" className="border-t border-white/5 bg-[#0B0F19] py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <div className="pf-mono mb-6 flex items-center gap-4 text-[11px] uppercase tracking-[0.35em] text-slate-400">
                        <span className="text-indigo-300">(03)</span>
                        <span>Core Services</span>
                        <span className="h-px flex-1 bg-white/[0.08]" />
                    </div>
                    <h2 className="pf-display max-w-3xl text-[clamp(1.7rem,3.2vw,2.5rem)] font-bold leading-[1.05] text-white">
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
                            className="pf-row-link group grid w-full grid-cols-[1fr_auto] items-center gap-4 border-b border-white/[0.08] px-2 py-8 text-left transition-colors duration-300 sm:grid-cols-[auto_1fr_auto] sm:gap-10 sm:px-6 sm:py-10 md:py-12"
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
