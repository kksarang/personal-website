import React from 'react';
import { ArrowRight, ExternalLink, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../../data/projects';

const ProjectCard = ({ project, onClick }) => (
    <div className="group relative bg-[#131521] rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(124,58,237,0.15)] flex flex-col h-full">
        {/* Large 16:9 Text Banner Preview */}
        <div className="relative w-full aspect-video overflow-hidden bg-slate-800 flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1A1C29] to-[#0A0B14] z-0" />
            <h3 className="text-3xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-200 to-slate-500 tracking-wider uppercase z-20 group-hover:scale-110 transition-transform duration-700 text-center px-6">
                {project.title}
            </h3>
            {/* Soft Glow Overlay */}
            <div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
        </div>

        {/* Content Section */}
        <div className="p-8 flex-1 flex flex-col relative z-20">
            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies?.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 text-xs font-semibold bg-indigo-500/10 text-indigo-300 rounded-full border border-indigo-500/20">
                        {tech}
                    </span>
                ))}
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all">
                {project.title}
            </h3>

            {/* 2-line description */}
            <p className="text-gray-400 line-clamp-2 leading-relaxed mb-8 flex-1">
                {project.description}
            </p>

            {/* Dual Buttons */}
            <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
                <button
                    onClick={() => onClick(project.slug)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 text-white font-medium hover:bg-white/10 transition-colors"
                >
                    Case Study <ArrowRight className="w-4 h-4" />
                </button>
                {project.playStore ? (
                    <a
                        href={project.playStore}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-600/10 to-green-600/10 text-emerald-400 font-medium hover:from-emerald-600/20 hover:to-green-600/20 transition-colors"
                    >
                        Google Play <ExternalLink className="w-4 h-4" />
                    </a>
                ) : (
                    <a
                        href={project.github !== '#' ? project.github : '#'}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600/10 to-blue-600/10 text-indigo-400 font-medium hover:from-purple-600/20 hover:to-blue-600/20 transition-colors"
                        onClick={(e) => { if (project.github === '#') e.preventDefault(); }}
                    >
                        Live Demo <Play className="w-4 h-4 fill-current" />
                    </a>
                )}
            </div>
        </div>
    </div>
);

const PortfolioSection = () => {
    const navigate = useNavigate();

    // Select a few premium projects to display on the landing page
    const featuredProjects = projects.filter(p => p.featured || p.id <= 4).slice(0, 4);

    const handleProjectClick = (slug) => {
        // Multi-page routing directly via string path, avoiding hash collisions.
        if (slug === '#') return;
        navigate(`/kksystems/work/${slug}`);
    };

    return (
        <section id="work" className="py-[100px] bg-[#0A0B14]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <div className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-semibold mb-6">
                            Our Work
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Featured Projects
                        </h2>
                        <p className="text-xl text-gray-400">
                            Explore our portfolio of successful digital products delivering real business value.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {featuredProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onClick={handleProjectClick}
                        />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button
                        onClick={() => navigate('/kksystems/work')}
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white font-semibold text-lg transition-all hover:bg-white/10 hover:border-white/20"
                    >
                        View All Work
                        <ExternalLink className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
