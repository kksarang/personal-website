import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Zap, Shield, Rocket, Smartphone, Globe, Cloud, Cpu, Database, Crown } from 'lucide-react';

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
        <section className="py-24 bg-[#0B0F19]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-2xl font-black text-white uppercase tracking-[0.25em] mb-4">Our Tech Stack</h2>
                    <p className="text-gray-500 font-medium">Built with the world's most powerful technologies.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {techs.map((tech, idx) => (
                        <div key={idx} className="hexenity-glass p-6 text-center hexenity-glass-hover group">
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
        {
            image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000",
            title: "30+",
            subtitle: "Happy Clients",
            isPartner: false
        },
        {
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000",
            title: "15+",
            subtitle: "Your Growth Partner",
            isPartner: true
        },
        {
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000",
            title: "35+",
            subtitle: "Happy Clients",
            isPartner: false
        },
        {
            image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=1000",
            title: "18+",
            subtitle: "Your Growth Partner",
            isPartner: true
        }
    ];

    return (
        <section className="py-32 bg-[#0B0F19] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                     <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6 group cursor-default">
                        <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
                        <span className="text-pink-500 text-xs font-black uppercase tracking-widest">Why Choose Us</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">Why Choose <span className="text-whiteitalic italic opacity-90">Us</span></h2>
                    <p className="max-w-xl mx-auto text-gray-400 text-lg font-light">
                        Our mission is to drive progress and enhance the lives of our customers by delivering superior products and services that exceed.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((card, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="relative aspect-[3/4] rounded-[48px] overflow-hidden group cursor-pointer shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500"
                        >
                            <img
                                src={card.image}
                                alt={card.subtitle}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:via-black/40 transition-all duration-500" />
                            
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="hexenity-glass backdrop-blur-2xl p-6 rounded-[32px] border border-white/10 relative overflow-hidden group-hover:border-white/20 transition-all">
                                    <div className="relative z-10 flex items-center justify-between">
                                        <div>
                                            <div className="text-3xl font-black text-white mb-1 tracking-tighter">{card.title}</div>
                                            <div className="text-xs font-bold text-white/50 uppercase tracking-widest">{card.subtitle}</div>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                            <Crown className="w-5 h-5 text-indigo-600" />
                                        </div>
                                    </div>
                                    {/* Subtle inner glow */}
                                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full -mr-64 -mt-64" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full -ml-64 -mb-64" />
        </section>
    );
};

export const ERPDemoEntry = () => {
    const navigate = useNavigate();

    return (
        <section className="py-32 bg-[#0B0F19]">
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
                            <div className="bg-[#0A0B14] rounded-2xl border border-white/5 p-4 shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-700">
                                <div className="flex items-center gap-2 mb-4 px-2">
                                     <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                     <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                     <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                </div>
                                <div className="space-y-3">
                                    <div className="h-4 w-3/4 bg-white/5 rounded-full" />
                                    <div className="h-4 w-1/2 bg-white/5 rounded-full" />
                                    <div className="h-32 w-full bg-indigo-500/10 rounded-xl" />
                                    <div className="grid grid-cols-2 gap-4">
                                         <div className="h-20 bg-white/5 rounded-xl" />
                                         <div className="h-20 bg-white/5 rounded-xl" />
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
        <section className="py-24 bg-[#0B0F19] text-center relative overflow-hidden">
             <div className="absolute inset-0 bg-indigo-600/5 blur-[150px] -z-10" />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                    Ready to build faster <br />and <span className="premium-gradient-text">scale smarter?</span>
                </h2>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <button
                        onClick={() => navigate('/hexenity/contact')}
                        className="px-10 py-5 rounded-2xl bg-indigo-600 text-white font-black text-xl hover:bg-indigo-500 hover:scale-[1.05] shadow-[0_0_30px_rgba(79,70,229,0.4)] transition-all"
                    >
                        🚀 Start Project
                    </button>
                    <button
                        onClick={() => navigate('/hexenity/erp/dashboard')}
                        className="px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-black text-xl hover:bg-white/10 hover:border-white/20 backdrop-blur-sm transition-all"
                    >
                        ⚡ Launch ERP
                    </button>
                </div>
            </div>
        </section>
    );
};
