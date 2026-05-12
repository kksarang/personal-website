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
                    <div className="inline-flex items-center gap-2 rounded-full border border-indigo-300/35 bg-indigo-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-indigo-100">
                        <Sparkles className="h-3.5 w-3.5" />
                        Technology Foundation
                    </div>
                    <h2 className="mt-5 text-3xl font-black text-white md:text-4xl">Modern, reliable, production-ready stack.</h2>
                    <p className="mt-3 text-gray-400 font-medium">Selected for speed, maintainability, and long-term scale.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {techs.map((tech, idx) => (
                        <div key={idx} className="premium-surface gradient-stroke group rounded-2xl p-6 text-center transition hover:border-indigo-300/35">
                            <tech.icon className="w-8 h-8 text-indigo-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                            <span className="text-white font-bold">{tech.name}</span>
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
                     <div className="mb-6 inline-flex cursor-default items-center gap-2 rounded-full border border-indigo-400/25 bg-indigo-500/10 px-4 py-1.5">
                        <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
                        <span className="text-indigo-300 text-xs font-black uppercase tracking-widest">Why Choose Us</span>
                    </div>
                    <h2 className="mb-6 text-5xl font-black tracking-tighter text-white md:text-6xl">Why teams choose Hexenity</h2>
                    <p className="max-w-xl mx-auto text-gray-400 text-lg font-light">
                        We combine product thinking, consistent communication, and disciplined engineering execution.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {cards.map((card, idx) => (
                        <div key={idx} className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-indigo-300/35">
                            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10">
                                <Crown className="h-5 w-5 text-indigo-300" />
                            </div>
                            <h3 className="text-lg font-bold text-white">{card.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-gray-400">{card.subtitle}</p>
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
                             <div className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-bold text-xs uppercase tracking-widest mb-6">Flagship Product</div>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Experience <br />Hexenity ERP.</h2>
                            <p className="text-xl text-gray-400 font-light leading-relaxed mb-10">
                                Manage customers, projects, analytics, and operations in one unified system. Built for speed, reliability, and enterprise-scale control.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button
                                    onClick={() => navigate('/hexenity/erp/dashboard')}
                                    className="px-8 py-4 rounded-xl bg-white text-[#0B0F19] font-black hover:bg-gray-200 transition-all shadow-xl"
                                >
                                    Launch Demo ERP
                                </button>
                                <button
                                     onClick={() => navigate('/hexenity/solutions/erp')}
                                    className="px-8 py-4 rounded-xl border border-white/10 text-white font-bold hover:bg-white/5 transition-all"
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
                <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                    Ready for a world-class digital platform <br />with <span className="premium-gradient-text">executive-grade delivery?</span>
                </h2>
                <p className="mx-auto mb-10 max-w-2xl text-gray-300">
                    Share your vision with us. We will return with a strategic roadmap, realistic execution timeline, and the right delivery model for your organization.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <button
                        onClick={() => navigate('/hexenity/contact')}
                        className="rounded-2xl bg-indigo-600 px-10 py-5 text-lg font-black text-white transition hover:bg-indigo-500"
                    >
                        Book Executive Strategy Call
                    </button>
                    <button
                        onClick={() => navigate('/hexenity/erp/dashboard')}
                        className="px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-black text-lg hover:bg-white/10 hover:border-white/20 backdrop-blur-sm transition-all"
                    >
                        Explore Enterprise Demo
                    </button>
                </div>
            </div>
        </section>
    );
};
