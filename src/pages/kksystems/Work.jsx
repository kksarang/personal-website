import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Play, ExternalLink, Github, Star } from 'lucide-react';
import { projects } from '../../data/projects';

export default function Work() {
    const navigate = useNavigate();
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        // Fetch repositories from GitHub API
        fetch("https://api.github.com/users/kksarang/repos?sort=updated&per_page=10")
            .then(res => res.json())
            .then(data => {
                // Filter out forks
                if (Array.isArray(data)) {
                    const nonForks = data.filter(repo => !repo.fork);
                    setRepos(nonForks);
                }
            })
            .catch(err => console.error("Error fetching GitHub repos:", err));
    }, []);

    const handleProjectClick = (slug) => {
        if (slug === '#') return;
        navigate(`/kksystems/work/${slug}`);
    };

    return (
        <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
                Featured Projects
            </h1>
            <p className="text-lg text-gray-400 mb-12 animate-fade-in-up animation-delay-100 max-w-2xl">
                Explore our portfolio of scalable mobile applications and modern web solutions tailored for high-growth businesses.
            </p>

            <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up animation-delay-200">
                {projects.map((project) => (
                    <div key={project.id} className="group relative bg-[#131521] rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(124,58,237,0.15)] flex flex-col h-full">
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
                                    onClick={() => handleProjectClick(project.slug)}
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
                ))}
            </div>

            {/* --- GITHUB PROJECTS SECTION --- */}
            <div className="mt-32">
                <div className="flex items-center gap-4 mb-6 animate-fade-in-up">
                    <Github className="w-8 h-8 text-white" />
                    <h2 className="text-4xl font-bold text-white">
                        Open Source & GitHub Projects
                    </h2>
                </div>
                <p className="text-lg text-gray-400 mb-12 animate-fade-in-up animation-delay-100 max-w-2xl">
                    A live feed of my recent open-source repositories, libraries, and technical experiments directly fetched from GitHub API.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up animation-delay-200">
                    {repos.map((repo) => (
                        <a
                            key={repo.id}
                            href={repo.html_url}
                            target="_blank"
                            rel="noreferrer"
                            className="group relative bg-[#131521] rounded-[2rem] p-8 overflow-hidden border border-white/5 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(124,58,237,0.15)] flex flex-col h-full block"
                        >
                            {/* Top Metadata */}
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-3">
                                    <Github className="w-6 h-6 text-gray-400 group-hover:text-indigo-400 transition-colors" />
                                    {/* Language Badge */}
                                    {repo.language && (
                                        <span className="px-3 py-1 text-xs font-semibold bg-indigo-500/10 text-indigo-300 rounded-full border border-indigo-500/20">
                                            {repo.language}
                                        </span>
                                    )}
                                </div>
                                <div className="flex items-center gap-1 text-gray-500 text-sm">
                                    <Star className="w-4 h-4" />
                                    {repo.stargazers_count}
                                </div>
                            </div>

                            {/* Repo Name */}
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                                {repo.name}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 line-clamp-3 leading-relaxed mb-6 flex-1 text-sm">
                                {repo.description || "No description provided for this repository."}
                            </p>

                            {/* Bottom Footer */}
                            <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-500">
                                <span>Updated {new Date(repo.updated_at).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                                <ExternalLink className="w-4 h-4 group-hover:text-indigo-400 transition-colors" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
