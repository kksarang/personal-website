import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Code2, ExternalLink, PlayCircle, Sparkles, TerminalSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { allPracticeTemplates, codePlaygroundTemplates, practiceShowcaseSections } from '../../data/learningPlayground';

export default function LearningPractice() {
    const navigate = useNavigate();
    const [activeRuntime, setActiveRuntime] = useState('all');

    const filteredTemplates = useMemo(() => {
        if (activeRuntime === 'all') return allPracticeTemplates;
        return allPracticeTemplates.filter((template) => template.runtime === activeRuntime);
    }, [activeRuntime]);

    const featuredTracks = useMemo(
        () => practiceShowcaseSections.map((section) => codePlaygroundTemplates[section.template]).filter(Boolean),
        []
    );

    return (
        <div className="min-h-screen overflow-x-hidden bg-[#0A1020] pt-24 text-white">
            <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
                <section className="relative overflow-hidden rounded-3xl border border-indigo-300/20 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.22),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(20,184,166,0.16),transparent_40%),rgba(11,18,36,0.9)] p-8">
                    <div className="pointer-events-none absolute -right-20 -top-16 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-20 -left-12 h-64 w-64 rounded-full bg-cyan-500/15 blur-3xl" />
                    <p className="relative z-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-indigo-200">
                        <Sparkles className="h-3.5 w-3.5" />
                        Enitexa.Ai live practice
                    </p>
                    <h1 className="relative z-10 mt-3 text-4xl font-black leading-tight text-white sm:text-5xl">
                        Practice Mobile and Web Coding in One Playground
                    </h1>
                    <p className="relative z-10 mt-3 max-w-3xl text-slate-300">
                        This page is now a custom Enitexa.Ai learning lab, not a clone layout. Choose a language track, launch live coding instantly,
                        and move from concept to implementation with a cleaner academy-style workflow.
                    </p>
                    <div className="relative z-10 mt-6 flex flex-wrap gap-2">
                        <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-100">
                            10+ languages
                        </span>
                        <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-100">
                            web + console mode
                        </span>
                        <span className="rounded-full border border-emerald-300/35 bg-emerald-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-100">
                            real-time try editor
                        </span>
                    </div>
                </section>

                <section className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
                    <h2 className="inline-flex items-center gap-2 text-2xl font-bold text-white">
                        <TerminalSquare className="h-6 w-6 text-indigo-300" />
                        Quick Launch Tracks
                    </h2>
                    <div className="mt-5 grid gap-4 lg:grid-cols-3">
                        {featuredTracks.map((template, index) => (
                            <motion.article
                                key={template.key}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ delay: index * 0.06 }}
                                className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-5 transition hover:border-indigo-300/35"
                            >
                                <p className="text-lg font-bold text-white">{template.title}</p>
                                <p className="mt-2 text-sm text-slate-300">{template.subtitle}</p>
                                <pre className="mt-4 h-32 overflow-auto rounded-xl border border-white/10 bg-[#0B1328] p-3 text-xs text-slate-200">
                                    <code>{getTemplateSnippet(template)}</code>
                                </pre>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    <button
                                        type="button"
                                        onClick={() => navigate(`/enitexa.ai/learning/practice/live?template=${template.key}`)}
                                        className="inline-flex items-center gap-1.5 rounded-full bg-indigo-600 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-indigo-500"
                                    >
                                        <PlayCircle className="h-3.5 w-3.5" />
                                        Open Playground
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => navigate(`/enitexa.ai/learning/${template.topicSlug || 'frontend-architecture'}`)}
                                        className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-100 transition hover:border-indigo-300/35 hover:text-indigo-100"
                                    >
                                        Learn Track
                                        <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                                    </button>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </section>

                <section className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
                    <h3 className="inline-flex items-center gap-2 text-2xl font-bold text-white">
                        <Code2 className="h-6 w-6 text-indigo-300" />
                        Language playground library
                    </h3>
                    <p className="mt-2 text-sm text-slate-300">
                        Pick a mode to avoid long scrolling. This section is optimized for fast scanning and direct launch.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {[
                            { id: 'all', label: 'All Languages' },
                            { id: 'web', label: 'Web Preview' },
                            { id: 'console', label: 'Console Practice' },
                        ].map((runtime) => (
                            <button
                                key={runtime.id}
                                type="button"
                                onClick={() => setActiveRuntime(runtime.id)}
                                className={`rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] transition ${
                                    activeRuntime === runtime.id
                                        ? 'border-indigo-300/45 bg-indigo-500/20 text-indigo-100'
                                        : 'border-white/15 bg-white/5 text-slate-200 hover:border-indigo-300/35'
                                }`}
                            >
                                {runtime.label}
                            </button>
                        ))}
                    </div>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {filteredTemplates.map((template) => (
                            <article key={template.key} className="group rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:border-indigo-300/35 hover:bg-black/30">
                                <p className="text-lg font-semibold text-white">{template.title}</p>
                                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-400">{template.runtime === 'web' ? 'Web Preview' : 'Console Practice'}</p>
                                <p className="mt-2 text-sm text-slate-300">{template.subtitle}</p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    <button
                                        type="button"
                                        onClick={() => navigate(`/enitexa.ai/learning/practice/live?template=${template.key}`)}
                                        className="inline-flex items-center gap-1.5 rounded-full bg-indigo-600 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-indigo-500"
                                    >
                                        <PlayCircle className="h-3.5 w-3.5" />
                                        Try Live
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => navigate(`/enitexa.ai/learning/${template.topicSlug || 'frontend-architecture'}`)}
                                        className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-100 transition hover:border-indigo-300/35 hover:text-indigo-100"
                                    >
                                        Learn
                                        <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
                    <h3 className="inline-flex items-center gap-2 text-2xl font-bold text-white">
                        <Code2 className="h-6 w-6 text-indigo-300" />
                        External learning references
                    </h3>
                    <div className="mt-4 grid gap-3 md:grid-cols-2">
                        {[
                            { label: 'Python Practice', href: 'https://www.w3schools.com/python/' },
                            { label: 'SQL Practice', href: 'https://www.w3schools.com/sql/' },
                            { label: 'Dart Tutorial', href: 'https://www.geeksforgeeks.org/dart/dart-tutorial/' },
                            { label: 'Flutter Tutorial', href: 'https://www.geeksforgeeks.org/flutter/flutter-tutorial/' },
                        ].map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-between rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-3 transition-colors duration-300 hover:border-indigo-300/25 text-sm text-slate-200 transition hover:border-indigo-300/35 hover:bg-white/10 hover:text-indigo-100"
                            >
                                <span>{item.label}</span>
                                <ExternalLink className="h-4 w-4" />
                            </a>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

function getTemplateSnippet(template) {
    if (template.runtime === 'web') {
        return template.key === 'javascript' ? template.js : template.html;
    }
    return template.code || '';
}
