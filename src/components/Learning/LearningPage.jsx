import React from 'react';
import { Layers, Smartphone, Database, GitBranch, Cpu, Code2, Globe, Server, ArrowRight, Zap, BookOpen, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { caseStudies } from '../../data/caseStudies';

const LearningHero = () => (
    <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-semibold tracking-wider uppercase mb-4">
                    Continuous Evolution
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                    Learning & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Growth</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    Continuous improvement through hands-on practice, exploration, and real-world problem solving.
                </p>

                {/* Floating Icons Representation - CSS Animation would be ideal here */}
                <div className="flex justify-center gap-6 text-gray-400">
                    <Code2 className="w-8 h-8 hover:text-indigo-500 transition-colors" />
                    <Database className="w-8 h-8 hover:text-purple-500 transition-colors" />
                    <Globe className="w-8 h-8 hover:text-blue-500 transition-colors" />
                    <Server className="w-8 h-8 hover:text-green-500 transition-colors" />
                </div>
            </div>
        </div>
    </div>
);

const TimelineItem = ({ year, title, description, tags }) => (
    <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-5 md:gap-10 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-indigo-100 dark:before:bg-slate-700 md:before:hidden">
        <div className="md:col-span-1 md:text-right">
            <span className="inline-block px-3 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 font-bold rounded-lg text-sm mb-2 md:mb-0">
                {year}
            </span>
        </div>
        <div className="md:col-span-4 pb-12 relative">
            {/* Dot for mobile timeline */}
            <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-white dark:border-slate-900 md:hidden"></div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-50 dark:bg-slate-700 text-gray-600 dark:text-gray-300 text-xs font-medium rounded-md">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const CurrentFocusCard = ({ title, icon: Icon, color }) => (
    <div className="group p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-gray-100 dark:border-slate-700 hover:border-indigo-500/50 transition-all hover:translate-y-[-2px]">
        <div className={`p-3 rounded-xl bg-${color}-50 dark:bg-${color}-900/20 w-fit mb-4 group-hover:scale-110 transition-transform`}>
            <Icon className={`w-6 h-6 text-${color}-600 dark:text-${color}-400`} />
        </div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <div className="h-1 w-12 bg-gray-200 dark:bg-slate-600 rounded-full group-hover:w-full group-hover:bg-indigo-500 transition-all duration-500"></div>
    </div>
);

const LearningPage = () => {
    const timeline = [
        {
            year: '2025',
            title: 'Advanced Architecture & Scalability',
            description: 'Focusing on clean architecture patterns, modularization of large codebases, and performance at scale in Flutter.',
            tags: ['Clean Architecture', 'Modularization', 'Performance Profiling']
        },
        {
            year: '2024',
            title: 'Native Platform Integrations',
            description: 'Bridging the gap between Flutter and Native Android/iOS. Custom platform channels and native UI components.',
            tags: ['Kotlin', 'Swift', 'Platform Channels', 'JSI']
        },
        {
            year: '2023',
            title: 'State Management Mastery',
            description: 'Deep dive into complex state management. Migrating legacy Provider apps to Riverpod and Bloc.',
            tags: ['Riverpod', 'Bloc', 'Reactive Programming']
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
            <LearningHero />

            {/* Current Focus Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Current Focus</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <CurrentFocusCard title="Advanced Flutter Animations" icon={Zap} color="indigo" />
                    <CurrentFocusCard title="Scalable App Architecture" icon={Layers} color="purple" />
                    <CurrentFocusCard title="Backend Integration & API Opt" icon={Server} color="blue" />
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-12 text-center">Evolution Timeline</h2>
                <div className="space-y-4">
                    {timeline.map((item, idx) => (
                        <TimelineItem key={idx} {...item} />
                    ))}
                </div>
            </section>

            {/* Learning by Practice (Projects Replacement) */}
            <section className="py-20 bg-white dark:bg-slate-800 border-y border-gray-100 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-indigo-500 font-semibold tracking-wider uppercase text-sm">Real-World Practice</span>
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-2">Built to Learn</h2>
                        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            I don't just watch tutorials. I build complex, production-grade applications to master new concepts.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {caseStudies.map((study, idx) => (
                            <Link
                                to={`/our-projects/${study.slug}`}
                                key={idx}
                                className="group bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 border border-gray-100 dark:border-slate-700 hover:border-indigo-500 transition-all hover:shadow-lg"
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl text-indigo-600 dark:text-indigo-400">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    {study.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                    {study.subtitle}
                                </p>
                                <div className="flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400">
                                    View Case Study
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-800">
                <div className="max-w-3xl mx-auto">
                    <Quote className="w-12 h-12 text-indigo-200 dark:text-indigo-900 mx-auto mb-6" />
                    <blockquote className="text-3xl md:text-4xl font-medium text-gray-900 dark:text-white leading-tight mb-8">
                        "Learning never stops — every app, bug, and refactor makes you better."
                    </blockquote>
                    <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full"></div>
                </div>
            </section>
        </div>
    );
};

export default LearningPage;
