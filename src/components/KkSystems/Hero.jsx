import React from 'react';
import { ArrowRight, MessageCircle, Smartphone, Cloud, Cpu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section id="home" className="relative min-h-screen pt-32 pb-32 flex items-center bg-white dark:bg-[#0A0B14] overflow-hidden transition-colors duration-300">
            {/* Minimal Ambient Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/10 blur-[150px] mix-blend-screen" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[150px] mix-blend-screen" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

                    {/* Left Content */}
                    <div className="text-center lg:text-left pt-10 lg:pt-0">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm mb-8 animate-fade-in-up transition-colors duration-300">
                            <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
                            <span className="text-sm font-semibold tracking-wide text-gray-700 dark:text-gray-300 uppercase transition-colors duration-300">Software Engineering Firm</span>
                        </div>

                        <h1 className="text-5xl lg:text-[4.5rem] leading-[1.1] font-extrabold tracking-tight mb-6 animate-fade-in-up animation-delay-100">
                            <span className="block text-gray-900 dark:text-white mb-2 transition-colors duration-300">Building Powerful</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-600 dark:from-indigo-400 dark:to-blue-500">
                                Mobile Apps &
                            </span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-600 dark:from-indigo-400 dark:to-blue-500">
                                Scalable Web Solutions
                            </span>
                        </h1>

                        <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-200 leading-relaxed font-light transition-colors duration-300">
                            Flutter • Android • iOS • React Native • Full-Stack Web Development
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-300">
                            <button
                                onClick={() => navigate('/hexenity/contact')}
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-indigo-600 text-white font-semibold text-lg transition-all hover:bg-indigo-500 hover:scale-[1.02] shadow-[0_0_20px_rgba(79,70,229,0.3)]"
                            >
                                Get Free Consultation
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => navigate('/hexenity/work')}
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-transparent border border-gray-300 dark:border-white/20 text-gray-700 dark:text-white font-semibold text-lg transition-all hover:bg-gray-50 dark:hover:bg-white/5"
                            >
                                View Projects
                                <MessageCircle className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Right Content - Authentic Engineering Capabilities */}
                    <div className="hidden lg:flex flex-col justify-center gap-10 pl-12 animate-fade-in-up animation-delay-400 border-l border-gray-200 dark:border-white/5 transition-colors duration-300">

                        <div className="flex items-center gap-6 group cursor-default">
                            <div className="w-16 h-16 rounded-2xl bg-gray-50 dark:bg-[#131521] border border-gray-200 dark:border-white/10 flex items-center justify-center group-hover:border-indigo-500/50 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/10 transition-colors">
                                <Smartphone className="w-8 h-8 text-gray-600 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                            </div>
                            <div>
                                <h3 className="text-gray-900 dark:text-white font-bold text-xl mb-1 transition-colors duration-300">Cross-Platform Mobile Systems</h3>
                                <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">Flutter-based production apps with scalable architecture.</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 group cursor-default">
                            <div className="w-16 h-16 rounded-2xl bg-gray-50 dark:bg-[#131521] border border-gray-200 dark:border-white/10 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-50 dark:group-hover:bg-blue-500/10 transition-colors">
                                <Cloud className="w-8 h-8 text-gray-600 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                            </div>
                            <div>
                                <h3 className="text-gray-900 dark:text-white font-bold text-xl mb-1 transition-colors duration-300">Backend & Cloud Integration</h3>
                                <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">Secure REST APIs, Firebase, Supabase, and cloud deployment.</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 group cursor-default">
                            <div className="w-16 h-16 rounded-2xl bg-gray-50 dark:bg-[#131521] border border-gray-200 dark:border-white/10 flex items-center justify-center group-hover:border-purple-500/50 group-hover:bg-purple-50 dark:group-hover:bg-purple-500/10 transition-colors">
                                <Cpu className="w-8 h-8 text-gray-600 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
                            </div>
                            <div>
                                <h3 className="text-gray-900 dark:text-white font-bold text-xl mb-1 transition-colors duration-300">Performance & Maintainability</h3>
                                <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">Clean code structure, reusable modules, and optimized builds.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
