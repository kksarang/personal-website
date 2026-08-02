import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Rocket, ShieldCheck, Smartphone, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import EnitexaPageShell from '../../components/KkSystems/EnitexaPageShell';

const serviceBlocks = [
    {
        title: 'Product Discovery',
        description: 'Validate user needs, define feature scope, and create a realistic release roadmap.',
    },
    {
        title: 'UX + Engineering',
        description: 'Design and build mobile experiences with clear information flow and stable architecture.',
    },
    {
        title: 'Quality & Launch',
        description: 'Structured QA, release management, and post-launch reliability improvements.',
    },
];

const technologies = ['Flutter', 'React Native', 'Kotlin', 'Swift', 'Firebase', 'REST / GraphQL APIs'];

export default function MobileAppDevDetail() {
    const navigate = useNavigate();

    return (
        <EnitexaPageShell
            badge="Mobile Solution Detail"
            title="Mobile Engineering That Balances Speed and Quality"
            subtitle="Enitexa.Ai helps teams build and release mobile products with a disciplined process, scalable architecture, and strong user experience standards."
            backLabel="Back to Mobile Solutions"
            onBack={() => navigate('/enitexa.ai/solutions/mobile')}
            actions={(
                <button
                    onClick={() => navigate('/enitexa.ai/contact')}
                    className="inline-flex items-center gap-2 rounded-full border border-indigo-300/35 bg-indigo-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-indigo-100 transition hover:bg-indigo-500/30"
                >
                    Start Mobile Project
                    <ArrowRight className="h-4 w-4" />
                </button>
            )}
        >
            <div className="space-y-8">
                <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                    <article className="premium-surface gradient-stroke rounded-3xl p-7">
                        <h2 className="inline-flex items-center gap-2 text-2xl font-bold text-white">
                            <Smartphone className="h-6 w-6 text-indigo-300" />
                            What we deliver
                        </h2>
                        <p className="mt-3 text-slate-300">
                            We deliver business-ready apps rather than isolated prototypes. Every sprint balances product direction, engineering quality, and release confidence.
                        </p>
                        <ul className="mt-4 space-y-2 text-sm text-slate-200">
                            {[
                                'Scalable app architecture from day one',
                                'Performance-focused UI implementation',
                                'App Store / Play Store release support',
                                'Post-launch optimization and support',
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </article>

                    <article className="premium-surface rounded-3xl p-7">
                        <h3 className="inline-flex items-center gap-2 text-xl font-bold text-white">
                            <ShieldCheck className="h-5 w-5 text-indigo-300" />
                            Typical outcomes
                        </h3>
                        <div className="mt-4 grid gap-3">
                            {[
                                'Faster release cycles with clear priorities',
                                'Lower bug leakage into production',
                                'Better app performance and user retention',
                            ].map((item) => (
                                <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-slate-200">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </article>
                </section>

                <section className="grid gap-6 md:grid-cols-3">
                    {serviceBlocks.map((block, index) => (
                        <motion.article
                            key={block.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="premium-surface gradient-stroke rounded-3xl p-6"
                        >
                            <p className="text-xs uppercase tracking-[0.14em] text-indigo-300">Phase {index + 1}</p>
                            <h3 className="mt-2 text-xl font-bold text-white">{block.title}</h3>
                            <p className="mt-2 text-slate-300">{block.description}</p>
                        </motion.article>
                    ))}
                </section>

                <section className="premium-surface rounded-3xl p-7">
                    <h2 className="text-2xl font-bold text-white">Technology options</h2>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {technologies.map((tech) => (
                            <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>

                <section className="rounded-3xl border border-indigo-300/25 bg-indigo-500/15 p-8 text-center">
                    <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-indigo-200">
                        <Sparkles className="h-3.5 w-3.5" />
                        Next Step
                    </p>
                    <h2 className="mt-3 text-3xl font-black text-white">Need a roadmap for your mobile product?</h2>
                    <p className="mx-auto mt-3 max-w-2xl text-slate-200">Share your current stage and we’ll suggest the right delivery model, team setup, and timeline.</p>
                    <button
                        onClick={() => navigate('/enitexa.ai/contact')}
                        className="mt-6 inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
                    >
                        <Rocket className="h-4 w-4" />
                        Book Mobile Strategy Call
                    </button>
                </section>
            </div>
        </EnitexaPageShell>
    );
}
