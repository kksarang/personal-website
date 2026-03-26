import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Zap, TrendingUp, Smartphone, Globe, Cog, Shield, Rocket } from 'lucide-react';

export const Positioning = () => {
    return (
        <section className="py-32 bg-[#0B0F19] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2"
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                            The Modern <br />
                            <span className="premium-gradient-text">Technology Partner.</span>
                        </h2>
                        <p className="text-xl text-gray-400 leading-relaxed font-light mb-8">
                            Hexenity is a modern technology partner helping startups and enterprises build, scale, and optimize digital products through AI-driven development and rapid execution.
                        </p>
                        <div className="space-y-4">
                            {[
                                { title: "Not just dev → execution partner", icon: Rocket },
                                { title: "Not just service → solution provider", icon: Zap }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                                        <item.icon className="w-5 h-5 text-indigo-400" />
                                    </div>
                                    <span className="text-gray-300 font-medium">{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="md:w-1/2 relative"
                    >
                        <div className="hexenity-glass p-8 md:p-12 relative z-10 animate-glow">
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
                        {/* Decorative background blur */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-600/10 blur-[100px] rounded-full -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export const CoreOfferings = () => {
    const offerings = [
        {
            title: "BUILD",
            description: "High-performance digital products from scratch.",
            items: ["Mobile Apps", "Web Platforms", "Custom Software"],
            icon: Smartphone,
            color: "from-blue-500/20 to-indigo-600/20",
            iconColor: "text-blue-400"
        },
        {
            title: "OPTIMIZE",
            description: "Enhance existing systems for peak performance.",
            items: ["Fix broken projects", "Improve performance", "Refactor legacy code"],
            icon: Cog,
            color: "from-indigo-500/20 to-purple-600/20",
            iconColor: "text-indigo-400"
        },
        {
            title: "SCALE",
            description: "Enterprise-grade systems for growing businesses.",
            items: ["ERP systems", "Automation tools", "Cloud Infrastructure"],
            icon: TrendingUp,
            color: "from-purple-500/20 to-pink-600/20",
            iconColor: "text-purple-400"
        }
    ];

    return (
        <section id="offerings" className="py-32 bg-[#0B0F19] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Execution Excellence.</h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                        We don't just write code; we architect solutions that drive business outcomes.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {offerings.map((offering, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className={`hexenity-glass p-10 flex flex-col h-full hexenity-glass-hover bg-gradient-to-br ${offering.color}`}
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8`}>
                                <offering.icon className={`w-7 h-7 ${offering.iconColor}`} />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-4 tracking-widest">{offering.title}</h3>
                            <p className="text-gray-400 mb-8 font-light leading-relaxed">{offering.description}</p>
                            <ul className="space-y-4 mt-auto">
                                {offering.items.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
