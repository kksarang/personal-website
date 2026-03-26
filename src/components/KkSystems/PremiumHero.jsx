import React from 'react';
import { ArrowRight, Zap, Shield, Rocket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const PremiumHero = () => {
    const navigate = useNavigate();

    return (
        <section id="home" className="relative min-h-screen pt-40 pb-20 flex items-center overflow-hidden bg-[#0B0F19]">
            {/* Background elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full grid-pattern opacity-20" />
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-md mb-8"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-ping"></span>
                        <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase">Next-Gen Development</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-8 leading-[1.05]"
                    >
                        Engineering Speed. <br />
                        <span className="premium-gradient-text">Delivering Intelligent Solutions.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
                    >
                        Hexenity builds high-performance mobile apps, web platforms, and ERP systems using <span className="text-white font-medium">AI-powered development</span> — delivered in weeks, not months.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                    >
                        <button
                            onClick={() => navigate('/hexenity/contact')}
                            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-indigo-600 text-white font-bold text-lg transition-all hover:bg-indigo-500 hover:scale-[1.05] shadow-[0_0_30px_rgba(79,70,229,0.4)] group"
                        >
                            Start Project
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => {
                                const el = document.getElementById('offerings');
                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-lg transition-all hover:bg-white/10 hover:border-white/20 backdrop-blur-sm"
                        >
                            Explore Solutions
                        </button>
                    </motion.div>

                    {/* Stats bar */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-t border-white/5"
                    >
                        <div className="flex flex-col items-center">
                            <span className="text-4xl md:text-5xl font-black text-white mb-2">50+</span>
                            <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">Projects Delivered</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-4xl md:text-5xl font-black text-white mb-2">8+</span>
                            <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">Years Experience</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-4xl md:text-5xl font-black text-white mb-2">100%</span>
                            <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">Client Satisfaction</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-4xl md:text-5xl font-black text-indigo-400 mb-2">3x</span>
                            <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">Faster Delivery</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PremiumHero;
