import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Code2, Cpu, ShieldCheck, Smartphone } from 'lucide-react';
import HexenityPageShell from '../../components/KkSystems/HexenityPageShell';
import { learningTopics } from '../../data/learning';

const tracks = [
    { title: 'Mobile Engineering', icon: Smartphone, summary: 'App architecture, performance tuning, and release best practices.' },
    { title: 'Frontend Systems', icon: Code2, summary: 'Modern React patterns, component systems, and maintainable UI.' },
    { title: 'Backend + Cloud', icon: Cpu, summary: 'API design, service reliability, and production operations.' },
    { title: 'Security Basics', icon: ShieldCheck, summary: 'Practical secure development patterns for modern apps.' },
];

export default function Learning() {
    const navigate = useNavigate();

    return (
        <HexenityPageShell
            badge="Learning Hub"
            title="Practical learning for real product development"
            subtitle="Explore technical notes and implementation guides used in real delivery workflows."
            backLabel="Back to Home"
            onBack={() => navigate('/hexenity')}
        >
            <div className="space-y-8">
                <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {tracks.map((track, index) => (
                        <motion.article
                            key={track.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.07 }}
                            className="premium-surface gradient-stroke rounded-3xl p-6"
                        >
                            <track.icon className="h-6 w-6 text-indigo-300" />
                            <h3 className="mt-4 text-xl font-bold text-white">{track.title}</h3>
                            <p className="mt-2 text-sm text-slate-300">{track.summary}</p>
                        </motion.article>
                    ))}
                </section>

                <section className="premium-surface rounded-3xl p-7">
                    <h2 className="inline-flex items-center gap-2 text-2xl font-bold text-white">
                        <BookOpen className="h-6 w-6 text-indigo-300" />
                        Available topics
                    </h2>
                    <div className="mt-5 grid gap-4 md:grid-cols-2">
                        {learningTopics.map((topic) => (
                            <button
                                key={topic.slug}
                                onClick={() => navigate(`/hexenity/learning/${topic.slug}`)}
                                className="group rounded-xl border border-white/10 bg-white/5 p-4 text-left transition hover:border-indigo-300/40 hover:bg-white/10"
                            >
                                <p className="font-semibold text-white">{topic.title}</p>
                                <p className="mt-1 text-sm text-slate-300">{topic.description}</p>
                                <span className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-indigo-200">
                                    Open Topic
                                    <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                                </span>
                            </button>
                        ))}
                    </div>
                </section>
            </div>
        </HexenityPageShell>
    );
}
