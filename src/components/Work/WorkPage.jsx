import React, { useState } from 'react';
import { Play, Github, ArrowRight, Layout, Smartphone, Layers, PenTool, CheckCircle, Code2, Zap, Lock, Database, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { caseStudies } from '../../data/caseStudies';

// Icon mapping to resolve strings to components safely
const IconMap = {
    'Smartphone': Smartphone,
    'Zap': Zap,
    'Users': Users,
    'Lock': Lock,
    'Database': Database,
    'Layers': Layers,
    'CheckCircle': CheckCircle,
    'Star': Star,
    'Layout': Layout,
    'PenTool': PenTool,
    'Code2': Code2,
    // Fallback
    'Default': Layers
};

const getIcon = (iconName) => {
    const IconComponent = IconMap[iconName] || IconMap['Default'];
    return IconComponent;
};

const WorkPage = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filters = ['All', 'Play Store Apps', 'Client Projects', 'Personal Projects', 'Experiments'];

    // Combined projects data (Case Studies + Extra ones for the grid)
    const allProjects = [
        ...caseStudies.map(cs => ({
            ...cs,
            type: cs.status === 'Live on Play Store' ? 'Play Store Apps' : 'Personal Projects',
            isCaseStudy: true,
            tags: cs.techStack ? cs.techStack.map(t => t.name) : [],
            image: cs.color === 'indigo' ? 'from-indigo-500 to-purple-600' : 'from-purple-500 to-pink-600'
        })),
        // Add more mock projects to fill the grid
        {
            title: "Corporate Task Manager",
            description: "Internal productivity tool for a mid-sized logistics company.",
            slug: "#",
            tags: ["React Native", "Firebase", "Redux"],
            type: "Client Projects",
            isCaseStudy: false,
            image: "from-blue-500 to-cyan-500"
        },
        {
            title: "E-Commerce Dashboard",
            description: "Admin panel for managing inventory and orders with real-time updates.",
            slug: "#",
            tags: ["React", "Tailwind", "Node.js"],
            type: "Client Projects",
            isCaseStudy: false,
            image: "from-emerald-500 to-teal-500"
        },
        {
            title: "Flutter Animation Kit",
            description: "Open source library of custom animations and transitions.",
            slug: "#",
            tags: ["Flutter", "Open Source", "Animation"],
            type: "Experiments",
            isCaseStudy: false,
            image: "from-orange-500 to-red-500"
        }
    ];

    const filteredProjects = activeFilter === 'All'
        ? allProjects
        : allProjects.filter(p => p.type === activeFilter);

    const playStoreApps = allProjects.filter(p => p.type === 'Play Store Apps');

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-900 font-sans">

            {/* 1. HERO SECTION */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800">
                <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-indigo-50/50 to-white dark:from-slate-900/50 dark:to-slate-900 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Work</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
                        From production-grade mobile apps to complex UX flows and scalable architectures.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            onClick={() => document.getElementById('play-store-apps').scrollIntoView({ behavior: 'smooth' })}
                            className="inline-flex items-center px-8 py-3 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/25"
                        >
                            <Smartphone className="w-5 h-5 mr-2" />
                            View Play Store Apps
                        </button>
                        <button
                            onClick={() => document.getElementById('case-studies').scrollIntoView({ behavior: 'smooth' })}
                            className="inline-flex items-center px-8 py-3 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-slate-700 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-slate-700 transition-all"
                        >
                            <Layout className="w-5 h-5 mr-2" />
                            Explore Case Studies
                        </button>
                    </div>
                </div>
            </section>

            {/* 2. STICKY FILTER BAR */}
            <div className="sticky top-16 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-100 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex overflow-x-auto space-x-8 py-4 no-scrollbar">
                        {filters.map(filter => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`whitespace-nowrap pb-2 text-sm font-medium border-b-2 transition-colors ${activeFilter === filter
                                    ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

                {/* 3. FEATURED PLAY STORE APPS */}
                {(activeFilter === 'All' || activeFilter === 'Play Store Apps') && playStoreApps.length > 0 && (
                    <section id="play-store-apps">
                        <h2 className="text-sm font-bold text-green-600 dark:text-green-500 tracking-wide uppercase mb-6 flex items-center">
                            <Smartphone className="w-4 h-4 mr-2" /> Published on Google Play
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {playStoreApps.map((app, idx) => (
                                <div key={idx} className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all group flex flex-col md:flex-row gap-6 items-start">
                                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${app.image} flex items-center justify-center shrink-0 shadow-md`}>
                                        {/* Placeholder Icon */}
                                        <Smartphone className="w-10 h-10 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{app.storeDetails?.appName || app.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                                            {app.subtitle || app.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {app.techStack?.slice(0, 3).map((tech, i) => (
                                                <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-xs font-medium text-gray-600 dark:text-gray-300 rounded-md">
                                                    {tech.name}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <a href={app.storeDetails?.link || '#'} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-xs font-bold rounded-lg hover:bg-green-700 transition-colors">
                                                <Play className="w-3 h-3 mr-1 fill-current" /> Play Store
                                            </a>
                                            {app.storeDetails?.downloads && (
                                                <span className="text-xs text-gray-500 font-medium">{app.storeDetails.downloads} Installs</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* 4. PROJECT SHOWCASE GRID */}
                <section id="case-studies">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">All Projects</h2>
                        <span className="text-sm text-gray-500">{filteredProjects.length} items</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {filteredProjects.map((project, idx) => (
                            <div key={idx} className="group flex flex-col bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-slate-700 hover:border-indigo-500/50 transition-all">
                                <div className={`h-48 bg-gradient-to-r ${project.image} relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        {project.status === 'Live on Play Store' && (
                                            <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full text-green-600 dark:text-green-400" title="Live on Store">
                                                <Smartphone className="w-4 h-4" />
                                            </div>
                                        )}
                                    </div>

                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                        {project.tags?.map((tag, i) => (
                                            <span key={i} className="px-2 py-1 bg-gray-50 dark:bg-slate-700 text-gray-500 dark:text-gray-400 text-xs font-medium rounded-md">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-slate-700">
                                        {project.isCaseStudy ? (
                                            <Link to={`/our-projects/${project.slug}`} className="flex items-center text-indigo-600 dark:text-indigo-400 text-sm font-bold hover:underline">
                                                View Case Study <ArrowRight className="w-4 h-4 ml-1" />
                                            </Link>
                                        ) : (
                                            <span className="text-gray-400 text-sm cursor-not-allowed flex items-center">
                                                Case Study Coming Soon
                                            </span>
                                        )}

                                        {project.github && project.github !== '#' && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-500 hover:text-gray-900 dark:hover:text-white text-sm">
                                                <Github className="w-4 h-4 mr-1" /> Code
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 5. WORK PROCESS (How I Build) */}
                <section className="py-12 bg-gray-100 dark:bg-slate-800/50 rounded-3xl px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">How I Build</h2>
                        <p className="text-gray-500 dark:text-gray-400">From concept to production-grade application.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 relative">
                        <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-gray-200 dark:bg-slate-700 -z-10 transform translate-y-1/2"></div>

                        {[
                            { title: 'Discovery', icon: 'Layout' },
                            { title: 'UX/UI Design', icon: 'PenTool' },
                            { title: 'Architecture', icon: 'Layers' },
                            { title: 'Development', icon: 'Code2' },
                            { title: 'Optimization', icon: 'CheckCircle' },
                        ].map((step, idx) => {
                            const StepIcon = getIcon(step.icon);
                            return (
                                <div key={idx} className="flex flex-col items-center text-center">
                                    <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-full border-4 border-gray-50 dark:border-slate-900 flex items-center justify-center mb-4 shadow-sm relative z-10 text-indigo-600 dark:text-indigo-400">
                                        <StepIcon className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-bold text-gray-900 dark:text-white text-sm">{step.title}</h4>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* 6. CLOSING CTA */}
                <div className="text-center py-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Let's build something amazing.
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
                        Each project represents a problem solved, not just a screen built. If you have a challenge, I have the architecture.
                    </p>
                    <Link to="/#contact" className="inline-flex items-center px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold hover:opacity-90 transition-opacity">
                        Contact Me
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default WorkPage;
