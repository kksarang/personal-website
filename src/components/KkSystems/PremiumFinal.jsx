import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Smartphone, Globe, Cloud, Cpu, Database, Crown, Sparkles } from 'lucide-react';

export const TechStack = () => {
    const techs = [
        { name: "Flutter", icon: Smartphone },
        { name: "React", icon: Globe },
        { name: "Node.js", icon: Database },
        { name: "AWS", icon: Cloud },
        { name: "Firebase", icon: Cloud },
        { name: "AI Tools", icon: Cpu }
    ];

    return (
        <section className="bg-[#0B0F19] py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="pf-mono mb-5 flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.35em] text-slate-400">
                        <span className="text-indigo-300">(12)</span>
                        <span className="flex items-center gap-2">
                            <Sparkles className="h-3.5 w-3.5" />
                            Technology Foundation
                        </span>
                    </div>
                    <h2 className="pf-display mt-5 text-[clamp(1.6rem,3vw,2.3rem)] font-bold text-white">
                        Modern, reliable, <span className="pf-outline-text">production-ready.</span>
                    </h2>
                    <p className="mt-3 text-gray-400 font-medium">Selected for speed, maintainability, and long-term scale.</p>
                </div>
                <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-3 lg:grid-cols-6">
                    {techs.map((tech, idx) => (
                        <div
                            key={idx}
                            className="group bg-[#0B0F19] p-8 text-center transition-colors duration-500 hover:bg-[#10152a]"
                        >
                            <tech.icon className="mx-auto mb-4 h-7 w-7 text-indigo-400 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110" />
                            <span className="pf-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const WhyHexenity = () => {
    const cards = [
        { title: "Product + Engineering alignment", subtitle: "Strategy, design, and development move together from day one." },
        { title: "Clear communication rhythm", subtitle: "Weekly checkpoints, transparent updates, and predictable handoffs." },
        { title: "Scalable architecture mindset", subtitle: "Solutions are built for long-term maintainability and growth." },
        { title: "Post-launch reliability", subtitle: "Support continues after release with optimization and issue handling." }
    ];

    return (
        <section className="relative overflow-hidden bg-[#0B0F19] py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <div className="pf-mono mb-6 flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.35em] text-slate-400">
                        <span className="text-indigo-300">(13)</span>
                        <span>Why Choose Us</span>
                    </div>
                    <h2 className="pf-display mb-6 text-[clamp(1.7rem,3.2vw,2.5rem)] font-bold text-white">
                        Why teams choose <span className="pf-outline-text">Hexenity.</span>
                    </h2>
                    <p className="max-w-xl mx-auto text-gray-400 text-lg font-light">
                        We combine product thinking, consistent communication, and disciplined engineering execution.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-2 lg:grid-cols-4">
                    {cards.map((card, idx) => (
                        <div key={idx} className="group bg-[#0B0F19] p-8 transition-colors duration-500 hover:bg-[#10152a]">
                            <div className="mb-8 flex items-start justify-between">
                                <span className="pf-display text-5xl font-extrabold text-white/[0.07] transition-colors duration-500 group-hover:text-indigo-400/40">
                                    0{idx + 1}
                                </span>
                                <Crown className="h-5 w-5 text-indigo-300" />
                            </div>
                            <h3 className="pf-display text-lg font-bold leading-snug text-white">{card.title}</h3>
                            <p className="mt-3 text-sm leading-relaxed text-gray-400">{card.subtitle}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const ERPDemoEntry = () => {
    const navigate = useNavigate();

    return (
        <section className="bg-[#0B0F19] py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="hexenity-glass p-12 md:p-20 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-[50%] h-full bg-indigo-600/5 blur-[100px] -z-10 group-hover:bg-indigo-600/10 transition-all duration-700" />

                    <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                        <div>
                            <div className="pf-mono mb-6 flex items-center gap-4 text-[11px] uppercase tracking-[0.35em] text-slate-400">
                                <span className="text-indigo-300">(14)</span>
                                <span>Flagship Product</span>
                            </div>
                            <h2 className="pf-display text-[clamp(1.7rem,3.2vw,2.5rem)] font-bold text-white mb-6">
                                Experience <br />
                                <span className="pf-outline-text">Hexenity ERP.</span>
                            </h2>
                            <p className="text-xl text-gray-400 font-light leading-relaxed mb-10">
                                Manage customers, projects, analytics, and operations in one unified system. Built for speed, reliability, and enterprise-scale control.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button
                                    onClick={() => navigate('/hexenity/erp/dashboard')}
                                    data-cursor="Demo"
                                    className="inline-flex items-center justify-center rounded-full border border-white bg-white px-8 py-4 text-sm font-semibold text-black transition-all duration-500 hover:bg-transparent hover:text-white"
                                >
                                    Launch Demo ERP
                                </button>
                                <button
                                    onClick={() => navigate('/hexenity/solutions/erp')}
                                    className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-all duration-500 hover:border-white hover:bg-white/[0.05]"
                                >
                                    View Features
                                </button>
                            </div>
                        </div>
                        <div className="hidden lg:block">
                            <div className="bg-[#0A0B14] rounded-2xl border border-white/5 p-4 shadow-2xl transition-transform duration-700">
                                <div className="flex items-center gap-2 mb-4 px-2">
                                     <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                     <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                     <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                </div>
                                <div className="space-y-3">
                                    <div className="rounded-xl border border-indigo-300/20 bg-indigo-500/10 px-3 py-2">
                                        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-indigo-200">Hexenity ERP Interface Preview</p>
                                    </div>
                                    <div className="overflow-hidden rounded-xl border border-white/10 bg-black/20">
                                        <img
                                            src="/assets/showcase/erp_os_premium.png"
                                            alt="Hexenity ERP dashboard interface preview"
                                            className="h-[260px] w-full object-cover object-top"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="grid grid-cols-3 gap-3">
                                        {['Customers', 'Projects', 'Analytics'].map((item) => (
                                            <div
                                                key={item}
                                                className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-300"
                                            >
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const FinalCTA = () => {
    const navigate = useNavigate();

    return (
        <section className="relative overflow-hidden bg-[#0B0F19] py-24 text-center">
             <div className="absolute inset-0 bg-indigo-600/5 blur-[150px] -z-10" />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="pf-display text-[clamp(1.8rem,3.8vw,2.9rem)] font-bold text-white mb-8 leading-[1.05]">
                    Ready for a world-class platform with{' '}
                    <span className="pf-gradient-text">executive-grade delivery?</span>
                </h2>
                <p className="mx-auto mb-10 max-w-2xl text-gray-300">
                    Share your vision with us. We will return with a strategic roadmap, realistic execution timeline, and the right delivery model for your organization.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => navigate('/hexenity/contact')}
                        data-cursor="Book"
                        className="group inline-flex items-center justify-center gap-2 rounded-full border border-white bg-white px-10 py-4 text-base font-semibold text-black transition-all duration-500 hover:bg-transparent hover:text-white"
                    >
                        Book Executive Strategy Call
                    </button>
                    <button
                        onClick={() => navigate('/hexenity/erp/dashboard')}
                        className="inline-flex items-center justify-center rounded-full border border-white/20 px-10 py-4 text-base font-semibold text-white transition-all duration-500 hover:border-white hover:bg-white/[0.05]"
                    >
                        Explore Enterprise Demo
                    </button>
                </div>
            </div>
        </section>
    );
};
