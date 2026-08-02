import React from 'react';
import { TrendingUp, Smartphone, Cog, Rocket, ShieldCheck, Gauge, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Positioning = () => {
    const highlights = [
        { title: 'External Innovation Team', desc: 'We operate as your on-demand product, tech, and growth partner.', icon: Rocket },
        { title: 'Built for Non-technical Businesses', desc: 'No in-house development team required to execute modern digital systems.', icon: ShieldCheck },
        { title: 'Outcome and Sales Focused', desc: 'Every roadmap aligns engineering output with business and revenue impact.', icon: Gauge },
    ];

    return (
        <section className="relative overflow-hidden bg-[#0B0F19] py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center gap-14 md:flex-row">
                    <div className="md:w-1/2">
                        <div className="pf-mono mb-6 flex items-center gap-4 text-[11px] uppercase tracking-[0.35em] text-slate-400">
                            <span className="text-indigo-300">(01)</span>
                            <span>About Enitexa.Ai</span>
                            <span className="h-px flex-1 bg-white/[0.08]" />
                        </div>
                        <h2 className="pf-display mt-6 mb-6 text-[clamp(1.7rem,3.2vw,2.5rem)] font-bold leading-[1.05] text-white">
                            Not just a software company.
                            <span className="block text-indigo-300">A complete digital execution partner.</span>
                        </h2>
                        <p className="mb-8 text-lg leading-relaxed text-gray-400">
                            Enitexa.Ai helps corporations, agencies, startups, and local businesses build digital presence, applications, automation systems, AI integrations, branding, and growth infrastructure with one unified partner model.
                        </p>
                        <div className="border-t border-white/[0.08]">
                            {highlights.map((item, idx) => (
                                <div key={item.title} className="group flex items-start gap-5 border-b border-white/[0.08] py-5">
                                    <span className="pf-mono pt-1 text-xs text-indigo-300">0{idx + 1}</span>
                                    <div className="min-w-0 flex-1">
                                        <p className="pf-display font-bold text-white transition-transform duration-300 group-hover:translate-x-1">{item.title}</p>
                                        <p className="mt-1 text-sm leading-relaxed text-gray-400">{item.desc}</p>
                                    </div>
                                    <item.icon className="mt-1 h-5 w-5 shrink-0 text-indigo-400 transition-transform duration-500 group-hover:-translate-y-1" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative md:w-1/2">
                        <div className="relative z-10 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08]">
                            {[
                                ['No-code', 'to Full Engineering'],
                                ['One Partner', 'for Build + Growth'],
                                ['Apps + AI', 'Automation Layer'],
                                ['Launch', 'to Growth Support'],
                            ].map(([value, label], idx) => (
                                <div key={value} className="group bg-[#0B0F19] p-8 transition-colors duration-500 hover:bg-[#10152a]">
                                    <div className={`pf-display text-2xl font-bold sm:text-3xl ${idx % 2 ? 'text-indigo-400' : 'text-white'}`}>
                                        {value}
                                    </div>
                                    <div className="pf-mono mt-2 text-[9px] uppercase tracking-[0.22em] text-gray-500">{label}</div>
                                </div>
                            ))}
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-600/10 blur-[100px] rounded-full -z-10" />
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
