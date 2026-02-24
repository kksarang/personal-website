import React from 'react';
import { Target, Shield, Server, Zap } from 'lucide-react';

const AboutCompany = () => {
    return (
        <section id="about" className="py-[120px] bg-[#0A0B14] relative overflow-hidden">
            {/* Minimal Background Glow */}
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Top Section Header */}
                <div className="text-center md:text-left mb-16 animate-fade-in-up">
                    <div className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-semibold mb-6 tracking-wide uppercase text-sm">
                        About KKSYSTEMS
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                        Engineering Digital Excellence
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Left side text intro */}
                    <div className="space-y-8 animate-fade-in-up animation-delay-100">
                        <p className="text-xl text-gray-300 leading-relaxed font-light">
                            KKSYSTEMS is a software engineering and digital solutions company specializing in scalable mobile and web applications.
                        </p>
                        <p className="text-xl text-gray-300 leading-relaxed font-light">
                            We design and develop high-performance systems tailored to business growth, focusing on clean architecture, modern technologies, and long-term maintainability.
                        </p>
                        <p className="text-xl text-gray-300 leading-relaxed font-light">
                            Our team combines precision engineering with thoughtful design to deliver secure, efficient, and future-ready digital platforms.
                        </p>
                    </div>

                    {/* Right side Feature Cards Grid */}
                    <div className="grid sm:grid-cols-2 gap-6 animate-fade-in-up animation-delay-200">

                        <div className="p-8 rounded-3xl bg-[#131521] border border-white/5 hover:border-indigo-500/30 transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors">
                                <Target className="w-6 h-6 text-indigo-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Precision Engineering</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">Pixel-perfect UI implementations backed by highly structured, typed databases.</p>
                        </div>

                        <div className="p-8 rounded-3xl bg-[#131521] border border-white/5 hover:border-blue-500/30 transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                                <Shield className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Secure Architecture</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">Enterprise-grade security topologies protecting sensitive user data organically.</p>
                        </div>

                        <div className="p-8 rounded-3xl bg-[#131521] border border-white/5 hover:border-purple-500/30 transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                                <Server className="w-6 h-6 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Scalable Systems</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">Infrastructure designed strictly to handle massive unexpected traffic spikes.</p>
                        </div>

                        <div className="p-8 rounded-3xl bg-[#131521] border border-white/5 hover:border-green-500/30 transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                                <Zap className="w-6 h-6 text-green-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Performance Focus</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">Optimized rendering pipelines delivering instant, native-feeling interactions.</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutCompany;
