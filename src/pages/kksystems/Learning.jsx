import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cpu, Server, Cloud, Database, BarChart, Settings, Smartphone, Layers, Shield } from 'lucide-react';

const TechPill = ({ icon: Icon, label, slug, colorClass, onClick }) => (
    <div
        onClick={() => onClick(slug)}
        className={`flex items-center gap-4 p-6 rounded-2xl border bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer ${colorClass}`}
    >
        <div className={`p-3 rounded-xl bg-white/10 ${colorClass.split(' ')[0]}`}>
            <Icon className="w-8 h-8" />
        </div>
        <div>
            <span className="block font-bold text-lg text-white mb-1">{label}</span>
            <span className="text-sm opacity-80">Explore Topic →</span>
        </div>
    </div>
);

export default function Learning() {
    const navigate = useNavigate();

    const handleBadgeClick = (slug) => {
        navigate(`/hexenity/learning/${slug}`);
    };

    return (
        <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
                Innovation & Learning Hub
            </h1>
            <p className="text-lg text-gray-400 mb-12 animate-fade-in-up animation-delay-100 max-w-3xl">
                Discover the cutting-edge technologies and methodologies powering our development process. We believe in continuous evolution and deep technical mastery.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up animation-delay-200">
                <TechPill icon={Smartphone} label="Mobile Development" slug="mobile-development" colorClass="text-purple-400 border-purple-500/30 hover:bg-purple-500/10 hover:border-purple-500/50 hover:shadow-purple-500/20" onClick={handleBadgeClick} />
                <TechPill icon={Layers} label="Frontend Web Architecture" slug="frontend-architecture" colorClass="text-blue-400 border-blue-500/30 hover:bg-blue-500/10 hover:border-blue-500/50 hover:shadow-blue-500/20" onClick={handleBadgeClick} />
                <TechPill icon={Server} label="Backend Engineering" slug="backend-engineering" colorClass="text-green-400 border-green-500/30 hover:bg-green-500/10 hover:border-green-500/50 hover:shadow-green-500/20" onClick={handleBadgeClick} />
                <TechPill icon={Database} label="Cloud Databases" slug="cloud-databases" colorClass="text-yellow-400 border-yellow-500/30 hover:bg-yellow-500/10 hover:border-yellow-500/50 hover:shadow-yellow-500/20" onClick={handleBadgeClick} />
                <TechPill icon={Settings} label="DevOps & CI/CD" slug="devops-cicd" colorClass="text-red-400 border-red-500/30 hover:bg-red-500/10 hover:border-red-500/50 hover:shadow-red-500/20" onClick={handleBadgeClick} />
                <TechPill icon={Cpu} label="AI/ML Integration" slug="ai-ml-integration" colorClass="text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/10 hover:border-cyan-500/50 hover:shadow-cyan-500/20" onClick={handleBadgeClick} />
            </div>
        </div>
    );
}
