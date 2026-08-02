import React from 'react';
import { Zap, Clock, TrendingUp, ShieldCheck, CheckCircle2, Lightbulb, Map, PencilRuler, Code, Rocket, LineChart, Globe2, Landmark, Building2, Shield, Car, Stethoscope, ShoppingBag, UtensilsCrossed, Megaphone, GraduationCap, Building, ShoppingCart, Store } from 'lucide-react';

export const ImpactMetrics = () => {
    const metrics = [
        { label: "Faster Development", value: "3x", icon: Zap },
        { label: "Reduced Time-to-Market", value: "60%", icon: Clock },
        { label: "Cost Efficient Solutions", value: "Premium", icon: TrendingUp },
        { label: "Scalable Architecture", value: "Enterprise", icon: ShieldCheck }
    ];

    return (
        <section className="bg-[#0B0F19] py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-14 text-center">
                    <div className="pf-mono mb-5 flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.35em] text-slate-400">
                        <span className="text-indigo-300">(08)</span>
                        <span>Impact</span>
                    </div>
                    <h2 className="pf-display text-[clamp(1.6rem,3vw,2.3rem)] font-bold text-white">
                        Measured <span className="pf-outline-text">outcomes.</span>
                    </h2>
                    <p className="mt-3 text-gray-400">Clear performance metrics from real client delivery workflows.</p>
                </div>
                <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
                    {metrics.map((metric, idx) => (
                        <div key={idx} className="group bg-[#0B0F19] p-8 text-center transition-colors duration-500 hover:bg-[#10152a] sm:p-10">
                            <metric.icon className="mx-auto mb-6 h-6 w-6 text-indigo-400 transition-transform duration-500 group-hover:-translate-y-1" />
                            <div className="pf-display mb-3 text-[clamp(1.5rem,5vw,2.2rem)] font-extrabold leading-none text-white sm:text-[clamp(1.4rem,2.1vw,2.2rem)]">
                                {metric.value}
                            </div>
                            <div className="pf-mono text-[9px] font-medium uppercase tracking-[0.25em] text-gray-500">
                                {metric.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const HowWeWork = () => {
    const steps = [
        { title: "Idea", desc: "Clarify objective", icon: Lightbulb },
        { title: "Strategy", desc: "Roadmap + scope", icon: Map },
        { title: "Design", desc: "UX + interface", icon: PencilRuler },
        { title: "Development", desc: "Build systems", icon: Code },
        { title: "Launch", desc: "Go live safely", icon: Rocket },
        { title: "Growth", desc: "Scale revenue", icon: LineChart }
    ];

    return (
        <section id="process" className="relative bg-[#0B0F19] py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <div className="pf-mono mb-6 flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.35em] text-slate-400">
                        <span className="text-indigo-300">(09)</span>
                        <span>Process</span>
                    </div>
                    <h2 className="pf-display text-[clamp(1.7rem,3.2vw,2.5rem)] font-bold text-white mb-6">
                        How we <span className="pf-outline-text">work with you.</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-gray-400 sm:text-xl">
                        A practical process that keeps scope, quality, and delivery aligned.
                    </p>
                </div>

                <div className="grid gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-[#0B0F19] p-9 transition-colors duration-500 hover:bg-[#10152a]"
                        >
                            <div className="mb-10 flex items-start justify-between">
                                <span className="pf-display text-5xl font-extrabold text-white/[0.07] transition-colors duration-500 group-hover:text-indigo-400/40">
                                    0{idx + 1}
                                </span>
                                <step.icon className="h-6 w-6 text-indigo-400 transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <h3 className="pf-display text-2xl font-bold text-white">{step.title}</h3>
                            <p className="pf-mono mt-2 text-[10px] uppercase tracking-[0.22em] text-gray-500 transition-colors duration-300 group-hover:text-gray-400">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const Industries = () => {
    const industries = [
        { name: "Automobile", icon: Car },
        { name: "Healthcare", icon: Stethoscope },
        { name: "Retail", icon: ShoppingBag },
        { name: "Restaurants", icon: UtensilsCrossed },
        { name: "Agencies", icon: Megaphone },
        { name: "Startups", icon: Rocket },
        { name: "Education", icon: GraduationCap },
        { name: "Real Estate", icon: Building },
        { name: "E-commerce", icon: ShoppingCart },
        { name: "Local Businesses", icon: Store },
    ];

    return (
        <section className="py-24 bg-[#0B0F19] border-y border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="pf-mono mb-5 flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.35em] text-slate-400">
                        <span className="text-indigo-300">(10)</span>
                        <span>Industries</span>
                    </div>
                    <h2 className="pf-display text-[clamp(1.6rem,3vw,2.3rem)] font-bold text-white">
                        Industries <span className="pf-outline-text">we serve.</span>
                    </h2>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                    {industries.map((industry) => (
                        <article
                            key={industry.name}
                            className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] py-3 pl-4 pr-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-300/40 hover:bg-indigo-500/10"
                        >
                            <industry.icon className="h-4 w-4 text-indigo-300" />
                            <p className="pf-mono text-[11px] font-medium uppercase tracking-[0.15em] text-slate-200 transition-colors group-hover:text-white">
                                {industry.name}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const GlobalPresence = () => {
    const regions = [
        { name: "India", detail: "Product engineering and strategic execution base.", icon: Landmark },
        { name: "Middle East", detail: "Enterprise modernization and digital transformation support.", icon: Building2 },
        { name: "Canada", detail: "Scalable platform delivery for growth-stage businesses.", icon: Globe2 },
        { name: "United States", detail: "High-velocity product launches and operational systems.", icon: Shield },
    ];

    return (
        <section className="border-y border-white/5 bg-[#0B0F19] py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-14 max-w-3xl text-center">
                    <div className="pf-mono mb-6 flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.35em] text-slate-400">
                        <span className="text-indigo-300">(11)</span>
                        <span className="flex items-center gap-2">
                            <Globe2 className="h-3.5 w-3.5" />
                            Global Client Coverage
                        </span>
                    </div>
                    <h2 className="pf-display mt-5 text-[clamp(1.7rem,3.2vw,2.5rem)] font-bold text-white">
                        Trusted across key <span className="pf-outline-text">international markets.</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-400">
                        We work with decision-makers and leadership teams across multiple regions, while maintaining one consistent standard of delivery excellence.
                    </p>
                </div>

                <div className="grid gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-2 lg:grid-cols-4">
                    {regions.map((region) => (
                        <article key={region.name} className="group bg-[#0B0F19] p-8 transition-colors duration-500 hover:bg-[#10152a]">
                            <region.icon className="mb-6 h-5 w-5 text-indigo-300 transition-transform duration-500 group-hover:-translate-y-1" />
                            <h3 className="pf-display text-xl font-bold text-white">{region.name}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-gray-400">{region.detail}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};
