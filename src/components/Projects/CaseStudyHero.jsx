import React from 'react';
import { ArrowLeft, Play, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudyHero = ({ project }) => {
    const bgColors = {
        indigo: 'from-indigo-900 to-slate-900',
        purple: 'from-purple-900 to-slate-900',
    };

    const accentColors = {
        indigo: 'text-indigo-400',
        purple: 'text-purple-400',
    };

    return (
        <div className={`relative min-h-[60vh] flex flex-col justify-center bg-gradient-to-br ${bgColors[project.color] || bgColors.indigo} text-white pt-20 pb-16`}>
            {/* Background Shapes */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none overflow-hidden">
                <div className="absolute top-10 right-10 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
                <div className="absolute bottom-10 right-40 w-64 h-64 bg-${project.color}-500 rounded-full mix-blend-overlay filter blur-2xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <Link to="/#projects" className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
                </Link>

                <div className="max-w-4xl">
                    <div className="flex items-center space-x-3 mb-6">
                        <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-semibold tracking-wider uppercase">
                            {project.category}
                        </span>
                        <span className={`px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-semibold tracking-wider uppercase text-green-400`}>
                            {project.status}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
                        {project.title.split(' - ')[0]}
                        <span className={`block text-2xl md:text-4xl mt-2 font-normal text-white/80`}>
                            {project.title.split(' - ')[1]}
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-white/70 max-w-2xl font-light leading-relaxed mb-10">
                        {project.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href={project.storeDetails?.link || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-3 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg shadow-white/10"
                        >
                            <Play className="w-5 h-5 mr-2 fill-current" />
                            View on Play Store
                        </a>
                        <button
                            onClick={() => {
                                const element = document.getElementById('play-console-section');
                                if (element) element.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="inline-flex items-center px-8 py-3 bg-transparent border border-white/30 text-white rounded-xl font-medium hover:bg-white/10 transition-colors backdrop-blur-sm"
                        >
                            <Layout className="w-5 h-5 mr-2" />
                            View Console
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseStudyHero;
