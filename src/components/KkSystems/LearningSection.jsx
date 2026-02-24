import React from 'react';
import { Cpu, Server, Cloud, Database, BarChart, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TechPill = ({ icon: Icon, label, slug, colorClass, onClick }) => (
    <div
        onClick={() => onClick(slug)}
        className={`flex items-center gap-2 px-4 py-2 rounded-full border bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer ${colorClass}`}
    >
        <Icon className="w-4 h-4" />
        <span className="font-medium">{label}</span>
    </div>
);

const LearningSection = () => {
    const navigate = useNavigate();

    const handleBadgeClick = (slug) => {
        navigate(`/kksystems/learning/${slug}`);
    };

    return (
        <section id="learning" className="py-[100px] bg-[#0A0B14] relative overflow-hidden">
            <div className="absolute left-0 top-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div>
                        <div className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-semibold mb-6">
                            Innovation Hub
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Constantly Evolving with Next-Gen Tech
                        </h2>
                        <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                            At KKSYSTEMS, we don't just use technology; we master it. Our team is continuously exploring emerging paradigms to deliver future-proof solutions. We stay ahead of the curve so your business can do the same.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-8 relative z-20">
                            <TechPill icon={Cpu} label="AI Integration" slug="ai-integration" colorClass="text-purple-400 border-purple-500/30 hover:bg-purple-500/20 hover:border-purple-500/50 hover:shadow-purple-500/20" onClick={handleBadgeClick} />
                            <TechPill icon={Cloud} label="Cloud Deployment" slug="cloud-deployment" colorClass="text-blue-400 border-blue-500/30 hover:bg-blue-500/20 hover:border-blue-500/50 hover:shadow-blue-500/20" onClick={handleBadgeClick} />
                            <TechPill icon={Server} label="Backend APIs" slug="backend-apis" colorClass="text-green-400 border-green-500/30 hover:bg-green-500/20 hover:border-green-500/50 hover:shadow-green-500/20" onClick={handleBadgeClick} />
                            <TechPill icon={Database} label="Firebase" slug="firebase" colorClass="text-yellow-400 border-yellow-500/30 hover:bg-yellow-500/20 hover:border-yellow-500/50 hover:shadow-yellow-500/20" onClick={handleBadgeClick} />
                            <TechPill icon={Settings} label="DevOps" slug="devops" colorClass="text-red-400 border-red-500/30 hover:bg-red-500/20 hover:border-red-500/50 hover:shadow-red-500/20" onClick={handleBadgeClick} />
                            <TechPill icon={BarChart} label="Data Analytics" slug="data-analytics" colorClass="text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:shadow-cyan-500/20" onClick={handleBadgeClick} />
                        </div>

                        <button
                            onClick={() => navigate('/kksystems/learning')}
                            className="inline-flex items-center text-indigo-400 font-semibold hover:text-indigo-300 transition-colors z-20 relative"
                        >
                            Explore our Learning Hub <span className="ml-2">→</span>
                        </button>
                    </div>

                    {/* Right Visual Element */}
                    <div className="relative h-[500px] flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-[3rem] transform rotate-6 border border-white/5" />
                        <div className="absolute inset-0 bg-gray-900 rounded-[3rem] transform -rotate-3 border border-white/10 shadow-2xl flex items-center justify-center overflow-hidden">
                            {/* Animated nodes/connections graphic concept */}
                            <div className="relative w-full h-full flex items-center justify-center opacity-80 mix-blend-screen">
                                <div className="absolute w-32 h-32 rounded-full border border-indigo-500/30 animate-[spin_10s_linear_infinite]" />
                                <div className="absolute w-48 h-48 rounded-full border border-purple-500/30 animate-[spin_15s_linear_infinite_reverse]" />
                                <div className="absolute w-64 h-64 rounded-full border border-blue-500/30 animate-[spin_20s_linear_infinite]" />
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center animate-pulse z-10 shadow-[0_0_30px_rgba(99,102,241,0.5)]">
                                    <Cpu className="text-white w-8 h-8" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default LearningSection;
