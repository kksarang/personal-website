import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, CheckCircle2, Code2, Layers, MonitorPlay, Target, Terminal } from 'lucide-react';
import { learningTopics } from '../../data/learning';
import HexenityPageShell from '../../components/KkSystems/HexenityPageShell';

export default function LearningDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const topic = learningTopics.find(t => t.slug === id);

    if (!topic) {
        return null;
    }

    return (
        <HexenityPageShell
            badge="Learning Detail"
            title={topic.title}
            subtitle={topic.description}
            backLabel="Back to Learning"
            onBack={() => navigate('/hexenity/learning')}
        >
            <div className="space-y-8">
                <section className="flex flex-wrap gap-2">
                    {(topic.technologies || []).map((tech) => (
                        <span key={tech} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                            <Code2 className="h-4 w-4 text-indigo-300" />
                            {tech}
                        </span>
                    ))}
                </section>

                {topic.visualImage ? (
                    <section className="overflow-hidden rounded-3xl border border-white/10">
                        <img src={topic.visualImage} alt={`${topic.title} visual`} className="h-72 w-full object-cover md:h-96" />
                    </section>
                ) : null}

                <section className="premium-surface gradient-stroke rounded-3xl p-7">
                    <h2 className="inline-flex items-center gap-2 text-2xl font-bold text-white">
                        <MonitorPlay className="h-5 w-5 text-indigo-300" />
                        Overview
                    </h2>
                    <div className="mt-4 space-y-3 text-slate-300">
                        {(topic.overview || '').split('\n\n').map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>
                </section>

                {topic.architecture?.length ? (
                    <section className="premium-surface rounded-3xl p-7">
                        <h2 className="inline-flex items-center gap-2 text-2xl font-bold text-white">
                            <Layers className="h-5 w-5 text-indigo-300" />
                            Architecture Breakdown
                        </h2>
                        <div className="mt-5 grid gap-4 md:grid-cols-2">
                            {topic.architecture.map((item) => (
                                <article key={item.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                                    <h3 className="font-semibold text-white">{item.title}</h3>
                                    <p className="mt-1 text-sm text-slate-300">{item.description}</p>
                                </article>
                            ))}
                        </div>
                    </section>
                ) : null}

                {topic.strategy ? (
                    <section className="premium-surface rounded-3xl p-7">
                        <h2 className="text-2xl font-bold text-white">Implementation Strategy</h2>
                        <div className="mt-4 space-y-3 text-slate-300">
                            {topic.strategy.split('\n\n').map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </div>
                    </section>
                ) : null}

                {topic.techStack?.length ? (
                    <section className="premium-surface rounded-3xl p-7">
                        <h2 className="inline-flex items-center gap-2 text-2xl font-bold text-white">
                            <Box className="h-5 w-5 text-indigo-300" />
                            Technology Stack
                        </h2>
                        <div className="mt-5 grid gap-3 md:grid-cols-2">
                            {topic.techStack.map((item) => (
                                <article key={item.category} className="rounded-xl border border-white/10 bg-white/5 p-4">
                                    <p className="text-xs uppercase tracking-[0.14em] text-indigo-300">{item.category}</p>
                                    <p className="mt-1 text-slate-200">{item.tools}</p>
                                </article>
                            ))}
                        </div>
                    </section>
                ) : null}

                {topic.useCase ? (
                    <section className="rounded-3xl border border-indigo-300/25 bg-indigo-500/15 p-7">
                        <h2 className="inline-flex items-center gap-2 text-2xl font-bold text-white">
                            <CheckCircle2 className="h-5 w-5 text-indigo-200" />
                            Real-World Deployment
                        </h2>
                        <p className="mt-3 text-indigo-100">{topic.useCase}</p>
                    </section>
                ) : null}

                {topic.learningPath?.length ? (
                    <section className="premium-surface rounded-3xl p-7">
                        <h2 className="inline-flex items-center gap-2 text-2xl font-bold text-white">
                            <Target className="h-5 w-5 text-indigo-300" />
                            Learning Path
                        </h2>
                        <div className="mt-5 space-y-3">
                            {topic.learningPath.map((step) => (
                                <article key={`${step.step}-${step.title}`} className="rounded-xl border border-white/10 bg-white/5 p-4">
                                    <p className="text-xs uppercase tracking-[0.14em] text-indigo-300">Step {step.step}</p>
                                    <h3 className="mt-1 font-semibold text-white">{step.title}</h3>
                                    <p className="mt-1 text-sm text-slate-300">{step.description}</p>
                                </article>
                            ))}
                        </div>
                    </section>
                ) : null}

                {topic.setupGuides?.length ? (
                    <section className="space-y-4">
                        <h2 className="inline-flex items-center gap-2 text-2xl font-bold text-white">
                            <Terminal className="h-5 w-5 text-indigo-300" />
                            Environment Setup Guides
                        </h2>
                        {topic.setupGuides.map((guide) => (
                            <article key={guide.title} className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70">
                                <div className="border-b border-white/10 p-5">
                                    <h3 className="text-xl font-bold text-white">{guide.title}</h3>
                                    <p className="mt-1 text-sm text-slate-300">{guide.description}</p>
                                </div>
                                <div className="border-b border-white/10 bg-black/30 px-5 py-2 text-xs uppercase tracking-[0.14em] text-slate-400">{guide.language}</div>
                                <pre className="overflow-x-auto p-5 text-xs text-slate-200"><code>{guide.code}</code></pre>
                            </article>
                        ))}
                    </section>
                ) : null}

                {topic.codeExamples?.length ? (
                    <section className="space-y-4">
                        <h2 className="inline-flex items-center gap-2 text-2xl font-bold text-white">
                            <Code2 className="h-5 w-5 text-indigo-300" />
                            Technical Implementation Examples
                        </h2>
                        {topic.codeExamples.map((example) => (
                            <article key={example.title} className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70">
                                <div className="border-b border-white/10 p-5">
                                    <h3 className="text-xl font-bold text-white">{example.title}</h3>
                                    <p className="mt-1 text-sm text-slate-300">{example.description}</p>
                                </div>
                                <div className="border-b border-white/10 bg-black/30 px-5 py-2 text-xs uppercase tracking-[0.14em] text-slate-400">{example.language}</div>
                                <pre className="overflow-x-auto p-5 text-xs text-slate-200"><code>{example.code}</code></pre>
                            </article>
                        ))}
                    </section>
                ) : null}
            </div>
        </HexenityPageShell>
    );
}
