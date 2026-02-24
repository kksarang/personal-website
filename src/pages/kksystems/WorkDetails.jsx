import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Activity, Server, Target, Zap, CheckCircle2, LayoutTemplate, Smartphone, Star, Users, MessageSquare, Cloud } from 'lucide-react';
import { projects } from '../../data/projects';

export default function WorkDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const project = projects.find(p => p.slug === id);

    if (!project) {
        return (
            <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen text-center flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold text-white mb-6">Case Study Not Found</h1>
                <button onClick={() => navigate('/kksystems/work')} className="text-indigo-400 hover:text-indigo-300 flex items-center gap-2 transition-colors">
                    <ArrowLeft className="w-5 h-5" /> Return to Work
                </button>
            </div>
        );
    }

    // Determine if it's a stub or a full case study (stub doesn't have overview)
    const isFullStudy = !!project.overview;

    return (
        <div className="bg-[#0A0B14] min-h-screen pb-32">

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
                <button
                    onClick={() => navigate('/kksystems/work')}
                    className="flex items-center text-gray-400 hover:text-white mb-10 transition-colors group text-sm font-semibold tracking-wide uppercase"
                >
                    <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                    Back to Portfolio
                </button>

                {/* 1. CLEAN HERO BANNER (NO IMAGE) */}
                <div
                    className="relative overflow-hidden mb-16 shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-white/5"
                    style={{
                        background: "linear-gradient(135deg, #0f172a, #1e1b4b)",
                        padding: "120px 0",
                        borderRadius: "24px"
                    }}
                >
                    {/* Background Glow */}
                    <div
                        className="absolute inset-0 pointer-events-none mix-blend-screen"
                        style={{ background: "radial-gradient(circle at top right, rgba(124,58,237,0.3), transparent 60%)" }}
                    />

                    <div className="px-8 md:px-16 relative z-10">
                        <div className="animate-fade-in-up">
                            <div className="flex flex-wrap items-center gap-3 mb-6">
                                {project.tags?.map((tag, idx) => (
                                    <span key={idx} className="px-3 py-1 text-xs font-bold bg-white/5 border border-white/10 text-indigo-300 rounded-full tracking-wider uppercase">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                                {project.title}
                            </h1>

                            <p className="text-2xl text-gray-400 font-light mb-10 max-w-3xl leading-snug">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap items-center gap-6">
                                {project.github !== '#' && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:scale-[1.02]"
                                    >
                                        View Source
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                )}

                                {project.playStore && (
                                    <a
                                        href={project.playStore}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold hover:from-emerald-500 hover:to-green-500 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-[1.02]"
                                    >
                                        Get it on Google Play
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                )}

                                {project.privacy && (
                                    <a
                                        href={project.privacy}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-transparent border border-white/20 text-gray-300 font-semibold hover:bg-white/5 hover:text-white transition-all"
                                    >
                                        Privacy Policy
                                        <ExternalLink className="w-4 h-4 opacity-70" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div> {/* End max-w-5xl container */}

            {/* HERO IMAGE REMOVED PER USER INSTRUCTION */}

            {/* FULL CASE STUDY ZONES (If data exists) */}
            {isFullStudy ? (
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 space-y-24">

                    {/* APP DETAILS BLOCK (If exists) */}
                    {project.appDetails && (
                        <section className="animate-fade-in-up bg-[#131521] border border-white/5 rounded-3xl p-8 lg:p-10 mb-16 shadow-xl">
                            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                                <Activity className="w-6 h-6 text-indigo-400" />
                                Application Specifications
                            </h3>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                                <div>
                                    <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-2">Category</p>
                                    <p className="text-white text-lg font-medium">{project.appDetails.category}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-2">Platform</p>
                                    <p className="text-white text-lg font-medium">{project.appDetails.platform}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-2">Tech Stack</p>
                                    <p className="text-white text-lg font-medium">{project.appDetails.techStack}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-2">Status</p>
                                    <p className="text-emerald-400 text-lg font-medium flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                        {project.appDetails.availability}
                                    </p>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* STORE PERFORMANCE METRICS (If exists) */}
                    {project.storePerformance && (
                        <section className="animate-fade-in-up bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20 rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px]" />
                            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 relative z-10">
                                <Users className="w-7 h-7 text-indigo-400" />
                                Google Play Performance
                            </h3>
                            <div className="grid md:grid-cols-3 gap-8 relative z-10">
                                <div className="bg-[#0A0B14]/50 border border-white/5 rounded-2xl p-6">
                                    <p className="text-gray-400 text-sm font-semibold tracking-wider uppercase mb-1">Downloads</p>
                                    <p className="text-white text-xl font-medium">{project.storePerformance.downloads}</p>
                                </div>
                                <div className="bg-[#0A0B14]/50 border border-white/5 rounded-2xl p-6">
                                    <p className="text-gray-400 text-sm font-semibold tracking-wider uppercase mb-1">Rating</p>
                                    <p className="text-amber-400 text-3xl font-bold flex items-center gap-2">
                                        {project.storePerformance.rating} <Star className="w-6 h-6 fill-current" />
                                    </p>
                                    <p className="text-gray-500 text-sm mt-1">{project.storePerformance.reviews}</p>
                                </div>
                                <div className="bg-[#0A0B14]/50 border border-white/5 rounded-2xl p-6">
                                    <p className="text-gray-400 text-sm font-semibold tracking-wider uppercase mb-1">Platform</p>
                                    <p className="text-white text-xl font-medium">{project.storePerformance.platform}</p>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* OVERVIEW */}
                    <section className="animate-fade-in-up">
                        <h2 className="text-sm font-bold text-indigo-500 tracking-widest uppercase mb-4">Project Overview</h2>
                        <div className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light space-y-6">
                            {project.overview?.split('\n\n').map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                            ))}
                        </div>
                    </section>

                    {/* PROBLEM / SOLUTION GRID */}
                    <section className="grid md:grid-cols-2 gap-8 animate-fade-in-up">
                        <div className="p-10 rounded-3xl bg-[#131521] border border-white/5">
                            <div className="flex items-center gap-3 mb-6">
                                <Target className="w-6 h-6 text-red-400" />
                                <h3 className="text-2xl font-bold text-white">The Challenge</h3>
                            </div>
                            <div className="text-gray-400 leading-relaxed text-lg space-y-4">
                                {project.problem?.split('\n\n').map((paragraph, idx) => (
                                    <p key={idx}>{paragraph}</p>
                                ))}
                            </div>
                        </div>

                        <div className="p-10 rounded-3xl bg-indigo-500/5 border border-indigo-500/20">
                            <div className="flex items-center gap-3 mb-6">
                                <Zap className="w-6 h-6 text-indigo-400" />
                                <h3 className="text-2xl font-bold text-white">Our Solution</h3>
                            </div>
                            <div className="text-indigo-100/80 leading-relaxed text-lg space-y-4">
                                {project.solution?.split('\n\n').map((paragraph, idx) => (
                                    <p key={idx}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* FEATURES IMPLEMENTED */}
                    <section className="animate-fade-in-up">
                        <h2 className="text-3xl font-bold text-white tracking-tight mb-8 flex items-center gap-3">
                            <LayoutTemplate className="w-7 h-7 text-blue-500" />
                            Core Features Shipped
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {project.features?.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/5">
                                    <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-300 text-lg">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* TECH STACK */}
                    <section className="animate-fade-in-up">
                        <h2 className="text-3xl font-bold text-white tracking-tight mb-8 flex items-center gap-3">
                            <Server className="w-7 h-7 text-purple-500" />
                            Engineering Stack
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {project.techStack?.map((tech, idx) => (
                                <span key={idx} className="px-6 py-3 text-sm font-bold bg-[#131521] text-white rounded-xl border border-white/10 shadow-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* SCREENSHOTS GALLERY (If exists) */}
                    {project.screenshots && project.screenshots.length > 0 && (
                        <section className="animate-fade-in-up pt-12">
                            <h2 className="text-3xl font-bold text-white tracking-tight mb-8 flex items-center gap-3">
                                <Smartphone className="w-7 h-7 text-emerald-400" />
                                Application Interfaces
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {project.screenshots.map((imgUrl, idx) => (
                                    <div key={idx} className="relative group rounded-[2rem] overflow-hidden border border-white/10 bg-[#131521] shadow-2xl aspect-[9/19]">
                                        <img
                                            src={imgUrl}
                                            alt={`Screenshot ${idx + 1}`}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B14] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* USER FEEDBACK (If exists) */}
                    {project.userFeedback && (
                        <section className="animate-fade-in-up">
                            <h2 className="text-3xl font-bold text-white tracking-tight mb-8 flex items-center gap-3">
                                <MessageSquare className="w-7 h-7 text-pink-500" />
                                User Feedback Highlights
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {project.userFeedback.map((feedback, idx) => (
                                    <div key={idx} className="p-6 rounded-2xl bg-[#131521] border border-white/5 relative overflow-hidden group">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-pink-500 to-purple-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                                        <p className="text-gray-300 text-lg font-medium italic pl-4">"{feedback}"</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* TECHNICAL ARCHITECTURE BREAKDOWN (If exists) */}
                    {project.technicalArchitecture && (
                        <section className="animate-fade-in-up">
                            <h2 className="text-3xl font-bold text-white tracking-tight mb-8 flex items-center gap-3">
                                <Server className="w-7 h-7 text-blue-400" />
                                Technical Architecture
                            </h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                {project.technicalArchitecture.map((arch, idx) => (
                                    <div key={idx} className="p-8 rounded-[2rem] bg-indigo-900/10 border border-indigo-500/20">
                                        <h4 className="text-indigo-400 font-bold mb-3 uppercase tracking-wider text-sm">{arch.layer}</h4>
                                        <p className="text-white text-lg font-medium">{arch.stack}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* DEPLOYMENT AND SCALABILITY (If exists) */}
                    {project.deployment && (
                        <section className="animate-fade-in-up bg-emerald-900/10 border border-emerald-500/20 p-10 rounded-3xl">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <Cloud className="w-6 h-6 text-emerald-400" />
                                Deployment & Scalability
                            </h2>
                            <p className="text-emerald-100/80 text-lg leading-relaxed">
                                {project.deployment}
                            </p>
                        </section>
                    )}

                    {/* RESULTS & IMPACT */}
                    <section className="animate-fade-in-up">
                        <div className="relative p-12 rounded-[2.5rem] bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-indigo-500/30 overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-[100px]" />
                            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
                                <div className="w-16 h-16 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                                    <Activity className="w-8 h-8 text-indigo-400" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Business Impact</h3>
                                    <p className="text-xl text-indigo-100 font-medium leading-relaxed italic">
                                        "{project.results}"
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            ) : (
                /* Fallback for projects that haven't been fully documented yet */
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
                    <article className="prose prose-invert prose-lg max-w-none">
                        <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                            {project.content}
                        </p>
                    </article>
                </div>
            )}
        </div>
    );
}
