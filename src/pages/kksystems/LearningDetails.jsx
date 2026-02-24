import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Layers, Cpu, Command, Box, MonitorPlay, Code2, Terminal } from 'lucide-react';
import { learningTopics } from '../../data/learning';

export default function LearningDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const topic = learningTopics.find(t => t.slug === id);

    if (!topic) {
        return (
            <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen text-center flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold text-white mb-6">Topic Not Found</h1>
                <button onClick={() => navigate('/kksystems/learning')} className="text-indigo-400 hover:text-indigo-300 flex items-center gap-2 transition-colors">
                    <ArrowLeft className="w-5 h-5" /> Return to Innovation Hub
                </button>
            </div>
        );
    }

    return (
        <div className="bg-[#0A0B14] min-h-screen pb-32">

            {/* 1. HERO SECTION - Tech Documentation Style */}
            <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-white/5">
                <button
                    onClick={() => navigate('/kksystems/learning')}
                    className="flex items-center text-gray-400 hover:text-white mb-10 transition-colors group text-sm font-semibold tracking-wide uppercase"
                >
                    <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                    Back to Learning Hub
                </button>

                <div className="animate-fade-in-up">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                        {topic.title}
                    </h1>

                    <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 font-medium mb-8 max-w-3xl leading-snug">
                        {topic.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {topic.technologies?.map((tech, idx) => (
                            <span key={idx} className="px-4 py-2 text-sm font-bold bg-white/5 backdrop-blur-md text-white rounded-lg border border-white/10 shadow-sm flex items-center gap-2">
                                <Code2 className="w-4 h-4 text-indigo-400" /> {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* CONTENT ZONES */}
            <div className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-16 space-y-20">

                {/* 2. OVERVIEW */}
                <section className="animate-fade-in-up animation-delay-100">
                    <div className="flex items-center gap-3 mb-6">
                        <MonitorPlay className="w-6 h-6 text-indigo-500" />
                        <h2 className="text-3xl font-bold text-white tracking-tight">Executive Overview</h2>
                    </div>
                    <div className="text-xl text-gray-300 leading-relaxed font-light space-y-6">
                        {topic.overview?.split('\n\n').map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                        ))}
                    </div>
                </section>

                {/* 3. REAL VISUAL IMAGE (Dark Dashboard / Tech Interface) */}
                <section className="animate-fade-in-up animation-delay-200">
                    <div className="relative w-full aspect-[21/9] sm:aspect-[16/6] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B14] via-transparent to-transparent z-10 opacity-80" />
                        <img
                            src={topic.visualImage}
                            alt={`${topic.title} architecture`}
                            className="w-full h-full object-cover transform scale-[1.02] group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute bottom-8 left-8 right-8 z-20 flex justify-between items-end">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-1">Architecture Visualization</h3>
                                <p className="text-gray-400 text-sm">Structural representation of internal topologies.</p>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                <Command className="w-5 h-5 text-white" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. ARCHITECTURE BREAKDOWN (Grid) */}
                <section className="animate-fade-in-up">
                    <div className="flex items-center gap-3 mb-8">
                        <Layers className="w-6 h-6 text-purple-500" />
                        <h2 className="text-3xl font-bold text-white tracking-tight">Architecture Breakdown</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {topic.architecture?.map((node, idx) => (
                            <div key={idx} className="p-8 rounded-2xl bg-[#131521] border border-white/5 hover:border-purple-500/30 transition-colors shadow-lg">
                                <h3 className="text-xl font-bold text-white mb-3">{node.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{node.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 5. IMPLEMENTATION STRATEGY */}
                <section className="animate-fade-in-up">
                    <div className="flex items-center gap-3 mb-6">
                        <Cpu className="w-6 h-6 text-blue-500" />
                        <h2 className="text-3xl font-bold text-white tracking-tight">Implementation Strategy</h2>
                    </div>
                    <div className="p-10 rounded-3xl bg-gradient-to-br from-blue-900/10 to-purple-900/10 border border-blue-500/20 shadow-inner">
                        <div className="text-lg text-gray-300 leading-relaxed space-y-6">
                            {topic.strategy?.split('\n\n').map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 6. TECH STACK CATEGORY GRID */}
                <section className="animate-fade-in-up">
                    <div className="flex items-center gap-3 mb-8">
                        <Box className="w-6 h-6 text-green-500" />
                        <h2 className="text-3xl font-bold text-white tracking-tight">Technology Stack Grid</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        {topic.techStack?.map((stack, idx) => (
                            <div key={idx} className="p-6 rounded-2xl bg-[#0F111A] border border-white/5 flex flex-col justify-center">
                                <span className="block text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2">
                                    {stack.category}
                                </span>
                                <span className="block text-lg text-white font-medium">
                                    {stack.tools}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 7. REAL USE CASE */}
                <section className="animate-fade-in-up">
                    <div className="flex items-center gap-3 mb-6">
                        <CheckCircle2 className="w-6 h-6 text-indigo-500" />
                        <h2 className="text-3xl font-bold text-white tracking-tight">Real-World Deployment</h2>
                    </div>
                    <div className="relative p-10 rounded-[2rem] bg-indigo-500/10 border border-indigo-500/20 overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-[100px]" />
                        <p className="relative z-10 text-xl text-indigo-100 leading-relaxed font-semibold italic">
                            "{topic.useCase}"
                        </p>
                    </div>
                </section>

                {/* 8. ENVIRONMENT SETUP GUIDES (Dynamic Segment) */}
                {topic.setupGuides && topic.setupGuides.length > 0 && (
                    <section className="animate-fade-in-up">
                        <div className="flex items-center gap-3 mb-8">
                            <Terminal className="w-6 h-6 text-fuchsia-500" />
                            <h2 className="text-3xl font-bold text-white tracking-tight">Environment Setup & Toolchain</h2>
                        </div>
                        <div className="space-y-12">
                            {topic.setupGuides.map((guide, idx) => (
                                <div key={idx} className="bg-[#11131E] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                                    <div className="p-8 border-b border-white/5">
                                        <h3 className="text-2xl font-bold text-white mb-4">{guide.title}</h3>
                                        <p className="text-gray-400 text-lg leading-relaxed">{guide.description}</p>
                                    </div>
                                    <div className="relative">
                                        {/* macOS Style Window controls */}
                                        <div className="absolute top-0 left-0 right-0 h-12 bg-[#0A0B14] flex items-center px-6 gap-2 border-b border-white/5">
                                            <div className="w-3 h-3 rounded-full bg-rose-500" />
                                            <div className="w-3 h-3 rounded-full bg-amber-500" />
                                            <div className="w-3 h-3 rounded-full bg-emerald-500" />
                                            <div className="ml-4 text-xs font-mono text-gray-500 font-bold tracking-widest uppercase">
                                                {guide.language}
                                            </div>
                                        </div>
                                        {/* The Code Body */}
                                        <div className="p-8 pt-20 overflow-x-auto bg-[#0A0B14]/50">
                                            <pre className="font-mono text-sm sm:text-base text-gray-300">
                                                <code>
                                                    {guide.code}
                                                </code>
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* 9. PROGRAMMING EXAMPLES (Dynamic Segment) */}
                {topic.codeExamples && topic.codeExamples.length > 0 && (
                    <section className="animate-fade-in-up">
                        <div className="flex items-center gap-3 mb-8">
                            <Code2 className="w-6 h-6 text-emerald-500" />
                            <h2 className="text-3xl font-bold text-white tracking-tight">Technical Implementation Deep Dive</h2>
                        </div>
                        <div className="space-y-12">
                            {topic.codeExamples.map((example, idx) => (
                                <div key={idx} className="bg-[#11131E] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                                    <div className="p-8 border-b border-white/5">
                                        <h3 className="text-2xl font-bold text-white mb-4">{example.title}</h3>
                                        <p className="text-gray-400 text-lg leading-relaxed">{example.description}</p>
                                    </div>
                                    <div className="relative">
                                        {/* macOS Style Window controls */}
                                        <div className="absolute top-0 left-0 right-0 h-12 bg-[#0A0B14] flex items-center px-6 gap-2 border-b border-white/5">
                                            <div className="w-3 h-3 rounded-full bg-rose-500" />
                                            <div className="w-3 h-3 rounded-full bg-amber-500" />
                                            <div className="w-3 h-3 rounded-full bg-emerald-500" />
                                            <div className="ml-4 text-xs font-mono text-gray-500 font-bold tracking-widest uppercase">
                                                {example.language}
                                            </div>
                                        </div>
                                        {/* The Code Body */}
                                        <div className="p-8 pt-20 overflow-x-auto bg-[#0A0B14]/50">
                                            <pre className="font-mono text-sm sm:text-base text-gray-300">
                                                <code>
                                                    {example.code}
                                                </code>
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

            </div>
        </div>
    );
}
