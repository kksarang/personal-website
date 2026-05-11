import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowRight, BookOpenCheck, CheckCircle2, Code2, Terminal } from 'lucide-react';
import HexenityPageShell from '../../components/KkSystems/HexenityPageShell';
import { learningTopics } from '../../data/learning';

export default function LearningDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const topic = learningTopics.find((item) => item.slug === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!topic) {
        return (
            <HexenityPageShell
                badge="Learning Detail"
                title="Topic Not Found"
                subtitle="This learning topic does not exist."
                backLabel="Back to Learning"
                onBack={() => navigate('/hexenity/learning')}
            />
        );
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
                <section className="premium-surface gradient-stroke rounded-3xl p-7">
                    <h2 className="inline-flex items-center gap-2 text-2xl font-bold text-white">
                        <BookOpenCheck className="h-6 w-6 text-indigo-300" />
                        Executive Overview
                    </h2>
                    <div className="mt-4 space-y-3 text-slate-300">
                        {topic.overview?.split('\n\n').map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>
                </section>

                {topic.architecture?.length ? (
                    <section className="premium-surface rounded-3xl p-7">
                        <h2 className="text-2xl font-bold text-white">Architecture Breakdown</h2>
                        <div className="mt-5 grid gap-4 md:grid-cols-2">
                            {topic.architecture.map((node) => (
                                <article key={node.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                                    <h3 className="font-semibold text-white">{node.title}</h3>
                                    <p className="mt-1 text-sm text-slate-300">{node.description}</p>
                                </article>
                            ))}
                        </div>
                    </section>
                ) : null}

                {topic.techStack?.length ? (
                    <section className="premium-surface rounded-3xl p-7">
                        <h2 className="inline-flex items-center gap-2 text-2xl font-bold text-white">
                            <Code2 className="h-6 w-6 text-indigo-300" />
                            Technology Stack
                        </h2>
                        <div className="mt-5 grid gap-3 sm:grid-cols-2">
                            {topic.techStack.map((stack) => (
                                <div key={stack.category} className="rounded-xl border border-white/10 bg-white/5 p-4">
                                    <p className="text-xs uppercase tracking-[0.12em] text-indigo-300">{stack.category}</p>
                                    <p className="mt-1 text-slate-200">{stack.tools}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                ) : null}

                {topic.codeExamples?.length ? (
                    <section className="premium-surface rounded-3xl p-7">
                        <h2 className="inline-flex items-center gap-2 text-2xl font-bold text-white">
                            <Terminal className="h-6 w-6 text-indigo-300" />
                            Code Examples
                        </h2>
                        <div className="mt-5 space-y-4">
                            {topic.codeExamples.map((example) => (
                                <article key={example.title} className="overflow-hidden rounded-xl border border-white/10 bg-black/30">
                                    <div className="border-b border-white/10 bg-white/5 px-4 py-3">
                                        <p className="font-semibold text-white">{example.title}</p>
                                        <p className="text-sm text-slate-300">{example.description}</p>
                                    </div>
                                    <pre className="overflow-x-auto p-4 text-sm text-slate-200">
                                        <code>{example.code}</code>
                                    </pre>
                                </article>
                            ))}
                        </div>
                    </section>
                ) : null}

                {topic.learningPath?.length ? (
                    <section className="premium-surface rounded-3xl p-7">
                        <h2 className="text-2xl font-bold text-white">Learning Path</h2>
                        <div className="mt-5 space-y-3">
                            {topic.learningPath.map((step) => (
                                <div key={`${step.step}-${step.title}`} className="rounded-xl border border-white/10 bg-white/5 p-4">
                                    <p className="text-xs uppercase tracking-[0.12em] text-indigo-300">Step {step.step}</p>
                                    <p className="mt-1 font-semibold text-white">{step.title}</p>
                                    <p className="mt-1 text-sm text-slate-300">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                ) : null}

                <section className="rounded-3xl border border-indigo-300/25 bg-indigo-500/15 p-8 text-center">
                    <h2 className="text-3xl font-black text-white">Need implementation help for this topic?</h2>
                    <p className="mx-auto mt-3 max-w-2xl text-slate-200">Our team can help you apply these concepts in your actual product architecture.</p>
                    <button
                        onClick={() => navigate('/hexenity/contact')}
                        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
                    >
                        <CheckCircle2 className="h-4 w-4" />
                        Discuss with Hexenity
                    </button>
                </section>
            </div>
        </HexenityPageShell>
    );
}
