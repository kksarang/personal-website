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
                <div className="mb-10 text-center">
                    <h2 className="text-3xl font-black text-white md:text-4xl">Measured Outcomes</h2>
                    <p className="mt-3 text-gray-400">Clear performance metrics from real client delivery workflows.</p>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {metrics.map((metric, idx) => (
                        <div key={idx} className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center transition hover:border-indigo-300/35">
                            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center mx-auto mb-6">
                                <metric.icon className="w-6 h-6 text-indigo-400" />
                            </div>
                            <div className="text-4xl font-black text-white mb-2">{metric.value}</div>
                            <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">{metric.label}</div>
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
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">How We <span className="premium-gradient-text">Work With You.</span></h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                        A practical process that keeps scope, quality, and delivery aligned.
                    </p>
                </div>

                <div className="relative">
                    {/* Progress Line */}
                    <div className="hidden lg:block absolute top-[60px] left-[50px] right-[50px] h-[1px] bg-white/5 z-0" />

                    <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
                        {steps.map((step, idx) => (
                            <div key={idx} className="group text-center">
                                <div className="w-16 h-16 rounded-2xl bg-[#131521] border border-white/10 flex items-center justify-center mx-auto mb-8 group-hover:bg-indigo-600 transition-all duration-500 group-hover:scale-110 shadow-lg">
                                    <step.icon className="w-8 h-8 text-indigo-400 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors uppercase tracking-tight">{step.desc}</p>
                                <div className="mt-4 text-indigo-500 font-bold opacity-20 group-hover:opacity-100 transition-opacity">0{idx + 1}</div>
                            </div>
                        ))}
                    </div>
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
                    <h2 className="text-3xl font-black text-white uppercase tracking-[0.2em] mb-4">Industries We Serve</h2>
                    <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                    {industries.map((industry) => (
                        <article key={industry.name} className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-indigo-300/35">
                            <industry.icon className="mb-2 h-5 w-5 text-indigo-300" />
                            <p className="text-sm font-semibold text-white">{industry.name}</p>
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
                    <span className="inline-flex items-center gap-2 rounded-full border border-indigo-300/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-indigo-200">
                        <Globe2 className="h-3.5 w-3.5" />
                        Global Client Coverage
                    </span>
                    <h2 className="mt-5 text-4xl font-black text-white md:text-5xl">Trusted across key international markets</h2>
                    <p className="mt-4 text-lg text-gray-400">
                        We work with decision-makers and leadership teams across multiple regions, while maintaining one consistent standard of delivery excellence.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {regions.map((region) => (
                        <article key={region.name} className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-indigo-300/35">
                            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10">
                                <region.icon className="h-5 w-5 text-indigo-300" />
                            </div>
                            <h3 className="text-xl font-bold text-white">{region.name}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-gray-400">{region.detail}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};
