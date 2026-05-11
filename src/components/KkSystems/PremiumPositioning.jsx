import React from 'react';
import { TrendingUp, Smartphone, Cog, Rocket, Sparkles, ShieldCheck, Gauge } from 'lucide-react';

export const Positioning = () => {
    const highlights = [
        { title: 'Execution Partner', desc: 'From strategy and UX to delivery and support.', icon: Rocket },
        { title: 'Security-Aware Builds', desc: 'Production-ready architecture with resilient standards.', icon: ShieldCheck },
        { title: 'Outcome Focused', desc: 'Milestones tied to business growth and user impact.', icon: Gauge },
    ];

    return (
        <section className="relative overflow-hidden bg-[#0B0F19] py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center gap-14 md:flex-row">
                    <div className="md:w-1/2">
                        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-300/35 bg-indigo-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.17em] text-indigo-100">
                            <Sparkles className="h-3.5 w-3.5" />
                            Positioning
                        </span>
                        <h2 className="mt-6 mb-6 text-4xl font-black leading-tight text-white md:text-5xl">
                            A structured partner model for product delivery
                        </h2>
                        <p className="mb-8 text-lg leading-relaxed text-gray-400">
                            Hexenity works as your extended product and engineering team, helping you plan, build, and scale high-performing digital systems with confidence.
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
                                    <div className="text-3xl font-black text-white">2-6</div>
                                    <div className="text-xs uppercase tracking-widest text-gray-500">Weeks Delivery Cycle</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-3xl font-black text-indigo-400">60%</div>
                                    <div className="text-xs uppercase tracking-widest text-gray-500">Reduced Dev Time</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-3xl font-black text-white">AI-Powered</div>
                                    <div className="text-xs uppercase tracking-widest text-gray-500">Development Engine</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-3xl font-black text-indigo-400">Enterprise</div>
                                    <div className="text-xs uppercase tracking-widest text-gray-500">Ready Scalability</div>
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
            title: "Build",
            description: "High-performance digital products from scratch.",
            items: ["Mobile Apps", "Web Platforms", "Custom Software"],
            icon: Smartphone,
            color: "from-blue-500/20 to-indigo-600/20",
            iconColor: "text-blue-400"
        },
        {
            title: "Optimize",
            description: "Enhance existing systems for peak performance.",
            items: ["Fix broken projects", "Improve performance", "Refactor legacy code"],
            icon: Cog,
            color: "from-indigo-500/20 to-purple-600/20",
            iconColor: "text-indigo-400"
        },
        {
            title: "Scale",
            description: "Enterprise-grade systems for growing businesses.",
            items: ["ERP systems", "Automation tools", "Cloud Infrastructure"],
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
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Execution Excellence.</h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-400">
                        Flexible service layers for early-stage products and established teams.
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
