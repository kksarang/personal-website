import React from 'react';
import { ArrowLeft, Play, Layout, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudyHero = ({ project }) => {
    const bgColors = {
        indigo: 'from-slate-900 via-indigo-950 to-slate-900',
        purple: 'from-slate-900 via-purple-950 to-slate-900',
    };

    return (
        <div className={`relative min-h-[85vh] flex flex-col justify-center bg-gradient-to-br ${bgColors[project.color] || bgColors.indigo} text-white pt-20 pb-16 overflow-hidden`}>
            {/* Background Shapes */}
            <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-indigo-500/30 rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-500/20 rounded-full mix-blend-screen filter blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                {/* Breadcrumb / Back Link */}
                <div className="mb-12">
                    <Link to="/#projects" className="group inline-flex items-center text-sm font-medium text-white/60 hover:text-white transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Portfolio
                    </Link>
                </div>

                <div className="max-w-5xl">
                    {/* Identity Badges */}
                    <div className="flex flex-wrap items-center gap-3 mb-8 animate-fade-in-up">
                        <span className="px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-xs font-semibold tracking-wider uppercase text-indigo-300">
                            {project.category}
                        </span>
                        <span className="flex items-center px-3 py-1 bg-green-500/10 backdrop-blur-md border border-green-500/20 rounded-full text-xs font-semibold tracking-wider uppercase text-green-400">
                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                            {project.status}
                        </span>
                        {project.badges && project.badges.map((badge, idx) => (
                            <span key={idx} className="px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium tracking-wide text-white/70">
                                {badge}
                            </span>
                        ))}
                    </div>

                    {/* Title & Value Prop */}
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                        {project.title.split(' - ')[0]}
                    </h1>

                    <p className="text-2xl md:text-3xl text-white/90 font-light leading-relaxed mb-6 max-w-3xl">
                        {project.oneLineValue}
                    </p>

                    <p className="text-lg text-white/50 mb-12 max-w-2xl leading-relaxed">
                        {project.subtitle}
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 items-center">
                        <a
                            href={project.storeDetails?.link || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center px-8 py-4 bg-white text-slate-900 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-all shadow-xl shadow-indigo-900/20 transform hover:-translate-y-1"
                        >
                            <Play className="w-5 h-5 mr-3 fill-current group-hover:scale-110 transition-transform" />
                            View Live App
                        </a>
                        <button
                            onClick={() => document.getElementById('play-console-section')?.scrollIntoView({ behavior: 'smooth' })}
                            className="group inline-flex items-center px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-medium text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
                        >
                            <Layout className="w-5 h-5 mr-3 text-white/70 group-hover:text-white transition-colors" />
                            Play Console
                        </button>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-[-100px] left-0 animate-bounce hidden md:block opacity-50">
                        <span className="text-xs uppercase tracking-widest text-white/40 mb-2 block">Scroll to explore</span>
                        <ChevronRight className="w-5 h-5 text-white/40 rotate-90 mx-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseStudyHero;
