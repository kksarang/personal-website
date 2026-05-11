import React from 'react';
import { TrendingUp, Smartphone, Cog, Rocket, Sparkles, ShieldCheck, Gauge } from 'lucide-react';

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
                        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-300/35 bg-indigo-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.17em] text-indigo-100">
                            <Sparkles className="h-3.5 w-3.5" />
                            About Hexenity
                        </span>
                        <h2 className="mt-6 mb-6 text-4xl font-black leading-tight text-white md:text-5xl">
                            Not just a software company.
                            <span className="block text-indigo-300">A complete digital execution partner.</span>
                        </h2>
                        <p className="mb-8 text-lg leading-relaxed text-gray-400">
                            Hexenity helps corporations, agencies, startups, and local businesses build digital presence, applications, automation systems, AI integrations, branding, and growth infrastructure with one unified partner model.
                        </p>
                        <div className="space-y-4">
                            {highlights.map((item, idx) => (
                                <div key={item.title} className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                                        <item.icon className="w-5 h-5 text-indigo-400" />
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold">{item.title}</p>
                                        <p className="text-sm text-gray-400">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative md:w-1/2">
                        <div className="premium-surface gradient-stroke relative z-10 rounded-[1.8rem] p-8 md:p-12">
                            <div className="grid grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <div className="text-3xl font-black text-white">No-code</div>
                                    <div className="text-xs uppercase tracking-widest text-gray-500">to Full Engineering</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-3xl font-black text-indigo-400">One Partner</div>
                                    <div className="text-xs uppercase tracking-widest text-gray-500">for Build + Growth</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-3xl font-black text-white">Apps + AI</div>
                                    <div className="text-xs uppercase tracking-widest text-gray-500">Automation Layer</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-3xl font-black text-indigo-400">Launch</div>
                                    <div className="text-xs uppercase tracking-widest text-gray-500">to Growth Support</div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-600/10 blur-[100px] rounded-full -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export const CoreOfferings = () => {
    const offerings = [
        {
            title: "Build Digital Systems",
            description: "Product engineering for apps, platforms, and operational systems.",
            items: ["Mobile + Web Apps", "SaaS Platforms", "Business Dashboards"],
            icon: Smartphone,
            color: "from-blue-500/20 to-indigo-600/20",
            iconColor: "text-blue-400"
        },
        {
            title: "Brand and Growth",
            description: "Digital marketing, SEO, branding, and conversion-focused UX systems.",
            items: ["Digital Marketing", "SEO + Branding", "UI/UX Transformation"],
            icon: Cog,
            color: "from-indigo-500/20 to-purple-600/20",
            iconColor: "text-indigo-400"
        },
        {
            title: "Automate and Scale",
            description: "AI, automation, and enterprise architecture for long-term scale.",
            items: ["AI Integrations", "Automation Systems", "Cloud + Security Layer"],
            icon: TrendingUp,
            color: "from-purple-500/20 to-pink-600/20",
            iconColor: "text-purple-400"
        }
    ];

    return (
        <section id="offerings" className="border-t border-white/5 bg-[#0B0F19] py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <span className="inline-flex items-center gap-2 rounded-full border border-indigo-300/35 bg-indigo-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.17em] text-indigo-100">
                        <Sparkles className="h-3.5 w-3.5" />
                        Core Services
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">From Apps to AI to Growth.</h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-400">
                        One partner model for companies needing technology execution, digital presence, and business growth systems.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {offerings.map((offering, idx) => (
                        <div key={idx} className={`premium-surface gradient-stroke flex h-full flex-col rounded-3xl bg-gradient-to-br p-10 transition hover:border-indigo-300/35 ${offering.color}`}>
                            <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8`}>
                                <offering.icon className={`w-7 h-7 ${offering.iconColor}`} />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-4">{offering.title}</h3>
                            <p className="text-gray-400 mb-8 font-light leading-relaxed">{offering.description}</p>
                            <ul className="space-y-4 mt-auto">
                                {offering.items.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
