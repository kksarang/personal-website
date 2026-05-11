import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, BookOpen, CheckCircle2, Layers3, Target, Users } from 'lucide-react';
import HexenityPageShell from '../../components/KkSystems/HexenityPageShell';
import { learningTopics } from '../../data/learning';

const roadmap = [
    { title: 'Foundation', detail: 'Core syntax, logic patterns, and engineering fundamentals.' },
    { title: 'Systems Thinking', detail: 'Architecture, tooling, and structured implementation methods.' },
    { title: 'Production Standards', detail: 'Performance, security, quality assurance, and maintainability.' },
    { title: 'Portfolio Delivery', detail: 'Build deployment-ready projects with documented technical decisions.' },
];

export default function Learning() {
    const navigate = useNavigate();

    return (
        <HexenityPageShell
            badge="Hexenity Learning"
            title="Professional learning tracks for practical engineering growth"
            subtitle="Learn through real implementation patterns, modern tooling, and system-level thinking instead of shallow tutorial snippets."
            backLabel="Back to Home"
            onBack={() => navigate('/hexenity')}
            actions={(
                <button
                    type="button"
                    onClick={() => navigate('/hexenity/contact')}
                    className="inline-flex items-center gap-2 rounded-xl border border-indigo-300/35 bg-indigo-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-indigo-100 transition hover:bg-indigo-500/30"
                >
                    Request Learning Guidance
                    <ArrowRight className="h-4 w-4" />
                </button>
            )}
        >
            <div className="space-y-8">
                <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
                        <BookOpen className="h-5 w-5 text-indigo-300" />
                        <p className="mt-3 text-xl font-bold text-white">{learningTopics.length} Tracks</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-400">Structured Curriculum</p>
                    </article>
                    <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
                        <Layers3 className="h-5 w-5 text-indigo-300" />
                        <p className="mt-3 text-xl font-bold text-white">Project-first</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-400">Learning Method</p>
                    </article>
                    <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
                        <Users className="h-5 w-5 text-indigo-300" />
                        <p className="mt-3 text-xl font-bold text-white">Mentor-Led</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-400">Feedback Cycles</p>
                    </article>
                    <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
                        <Target className="h-5 w-5 text-indigo-300" />
                        <p className="mt-3 text-xl font-bold text-white">Outcome-Based</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-400">Skill Progression</p>
                    </article>
                </section>

                <section className="premium-surface gradient-stroke rounded-3xl p-7">
                    <h2 className="text-2xl font-bold text-white">Learning Roadmap</h2>
                    <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        {roadmap.map((step, index) => (
                            <article key={step.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                                <p className="text-xs uppercase tracking-[0.14em] text-indigo-300">Stage {index + 1}</p>
                                <h3 className="mt-1 font-semibold text-white">{step.title}</h3>
                                <p className="mt-1 text-sm text-slate-300">{step.detail}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="space-y-5">
                    <h2 className="text-3xl font-black text-white">Available Learning Tracks</h2>
                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {learningTopics.map((topic) => (
                            <article key={topic.slug} className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6">
                                <h3 className="text-2xl font-bold text-white">{topic.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-slate-300">{topic.description}</p>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {(topic.technologies || []).slice(0, 4).map((tech) => (
                                        <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-slate-200">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <button
                                    type="button"
                                    onClick={() => navigate(`/hexenity/learning/${topic.slug}`)}
                                    className="mt-6 inline-flex items-center gap-2 self-start rounded-xl border border-indigo-300/35 bg-indigo-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-indigo-100 transition hover:bg-indigo-500/30"
                                >
                                    View Curriculum
                                    <ArrowRight className="h-4 w-4" />
                                </button>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="grid gap-6 md:grid-cols-2">
                    <article className="rounded-3xl border border-white/10 bg-white/5 p-7">
                        <h3 className="text-2xl font-bold text-white">What You Get</h3>
                        <ul className="mt-4 space-y-2 text-slate-300">
                            {[
                                'Real architecture examples from production systems',
                                'Hands-on coding exercises with implementation context',
                                'Guidance on tooling, workflow, and code quality',
                                'Portfolio-ready outcomes for career progression',
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </article>

                    <article className="rounded-3xl border border-indigo-300/25 bg-indigo-500/15 p-7">
                        <h3 className="text-2xl font-bold text-white">Need a custom learning path?</h3>
                        <p className="mt-3 text-sm leading-relaxed text-indigo-100">
                            Share your current skill level and goals. We can suggest a track sequence aligned to your target role or project domain.
                        </p>
                        <button
                            type="button"
                            onClick={() => navigate('/hexenity/contact')}
                            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500"
                        >
                            Talk to a Mentor
                            <ArrowRight className="h-4 w-4" />
                        </button>
                    </article>
                </section>
            </div>
        </HexenityPageShell>
    );
}
