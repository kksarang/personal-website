import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, TrendingUp, ShieldCheck, CheckCircle2, Search, Map, Code, Settings, Trophy, MessageCircle } from 'lucide-react';

export const ImpactMetrics = () => {
    const metrics = [
        { label: "Faster Development", value: "3x", icon: Zap },
        { label: "Reduced Time-to-Market", value: "60%", icon: Clock },
        { label: "Cost Efficient Solutions", value: "Premium", icon: TrendingUp },
        { label: "Scalable Architecture", value: "Enterprise", icon: ShieldCheck }
    ];

    return (
        <section className="py-24 bg-[#0B0F19]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {metrics.map((metric, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="text-center p-8 rounded-3xl bg-white/5 border border-white/5 hexenity-glass-hover"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center mx-auto mb-6">
                                <metric.icon className="w-6 h-6 text-indigo-400" />
                            </div>
                            <div className="text-4xl font-black text-white mb-2">{metric.value}</div>
                            <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">{metric.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const HowWeWork = () => {
    const steps = [
        { title: "Discover", desc: "Understand business needs", icon: Search },
        { title: "Plan", desc: "Architecture & roadmap", icon: Map },
        { title: "Build", desc: "Rapid development", icon: Code },
        { title: "Optimize", desc: "Testing + improvements", icon: Settings },
        { title: "Deliver", desc: "Production-ready", icon: Trophy },
        { title: "Support", desc: "Continuous updates", icon: MessageCircle }
    ];

    return (
        <section id="process" className="py-32 bg-[#0B0F19] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">How We <span className="premium-gradient-text">Deliver.</span></h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                        A systematic, AI-driven approach to engineering excellence.
                    </p>
                </div>

                <div className="relative">
                    {/* Progress Line */}
                    <div className="hidden lg:block absolute top-[60px] left-[50px] right-[50px] h-[1px] bg-white/5 z-0" />

                    <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="text-center group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-[#131521] border border-white/10 flex items-center justify-center mx-auto mb-8 group-hover:bg-indigo-600 transition-all duration-500 group-hover:scale-110 shadow-lg">
                                    <step.icon className="w-8 h-8 text-indigo-400 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors uppercase tracking-tight">{step.desc}</p>
                                <div className="mt-4 text-indigo-500 font-bold opacity-20 group-hover:opacity-100 transition-opacity">0{idx + 1}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export const Industries = () => {
    const industries = ["Startups", "Enterprises", "E-commerce", "Healthcare", "SaaS"];

    return (
        <section className="py-24 bg-[#0B0F19] border-y border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-black text-white uppercase tracking-[0.2em] mb-4">Industries We Serve</h2>
                    <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full" />
                </div>
                <div className="flex flex-wrap justify-center gap-10">
                    {industries.map((industry, idx) => (
                        <div key={idx} className="text-2xl md:text-3xl font-bold text-white/20 hover:text-white transition-all cursor-default">
                             {industry}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
