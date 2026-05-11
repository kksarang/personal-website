import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Globe2, Linkedin, Shield, Target, Users, Zap } from 'lucide-react';
import HexenityPageShell from '../../components/KkSystems/HexenityPageShell';

const founders = [
    {
        name: 'Sarang R',
        role: 'Chief Executive Officer',
        bio: 'Leads strategy, partnerships, and growth planning with a focus on long-term value creation.',
        image: '/assets/images/gallery/1.jpg',
        links: [{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/sarang-rajan/' }],
    },
    {
        name: 'Irshad KP',
        role: 'Chief Technology Officer',
        bio: 'Drives architecture direction, engineering quality, and scalable system delivery across projects.',
        image: '/assets/images/gallery/irs.png',
        links: [{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/irshad1212/' }],
    },
];

const coreCapabilities = [
    { title: 'Mobile Product Engineering', detail: 'High-performance apps for iOS, Android, and cross-platform deployments.' },
    { title: 'Web Platform Development', detail: 'Scalable product experiences for growth-stage and enterprise businesses.' },
    { title: 'ERP & Operations Systems', detail: 'Workflow automation and centralized control for business-critical operations.' },
    { title: 'Architecture & Reliability', detail: 'Structured technical planning with security, stability, and maintainability focus.' },
];

const globalFootprint = ['India', 'Middle East', 'Canada', 'United States'];

function FounderCard({ founder }) {
    return (
        <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="mb-4 flex items-center gap-4">
                <img src={founder.image} alt={founder.name} className="h-16 w-16 rounded-2xl object-cover" />
                <div>
                    <h3 className="text-xl font-bold text-white">{founder.name}</h3>
                    <p className="text-xs uppercase tracking-[0.14em] text-indigo-300">{founder.role}</p>
                </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-300">{founder.bio}</p>
            <div className="mt-4 flex flex-wrap gap-2">
                {founder.links.map((link) => (
                    <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-200 transition hover:border-indigo-300/35 hover:text-white"
                    >
                        <Linkedin className="h-3.5 w-3.5" />
                        {link.label}
                    </a>
                ))}
            </div>
        </article>
    );
}

export default function About() {
    const navigate = useNavigate();

    return (
        <HexenityPageShell
            badge="About Hexenity"
            title="A strategic technology partner for ambitious organizations"
            subtitle="Hexenity combines product strategy, engineering discipline, and executive-level communication to deliver reliable digital systems that scale."
            backLabel="Back to Home"
            onBack={() => navigate('/hexenity')}
            actions={(
                <button
                    type="button"
                    onClick={() => navigate('/hexenity/contact')}
                    className="inline-flex items-center gap-2 rounded-xl border border-indigo-300/35 bg-indigo-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-indigo-100 transition hover:bg-indigo-500/30"
                >
                    Contact Leadership
                    <ArrowRight className="h-4 w-4" />
                </button>
            )}
        >
            <div className="space-y-8">
                <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <motion.article initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                        <Building2 className="h-5 w-5 text-indigo-300" />
                        <p className="mt-3 text-xl font-bold text-white">2018+</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-400">Operational Journey</p>
                    </motion.article>
                    <motion.article initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                        <Users className="h-5 w-5 text-indigo-300" />
                        <p className="mt-3 text-xl font-bold text-white">Founder-Led</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-400">Execution Model</p>
                    </motion.article>
                    <motion.article initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                        <Globe2 className="h-5 w-5 text-indigo-300" />
                        <p className="mt-3 text-xl font-bold text-white">Global</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-400">Client Footprint</p>
                    </motion.article>
                    <motion.article initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                        <Shield className="h-5 w-5 text-indigo-300" />
                        <p className="mt-3 text-xl font-bold text-white">Structured</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-400">Delivery Governance</p>
                    </motion.article>
                </section>

                <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                    <article className="premium-surface gradient-stroke rounded-3xl p-7">
                        <h2 className="text-2xl font-bold text-white">Who We Are</h2>
                        <p className="mt-3 leading-relaxed text-slate-300">
                            Hexenity was built to bridge the gap between fast-moving business decisions and high-quality technical execution. We support
                            founders, operational leaders, and enterprise teams with practical architecture, accountable delivery, and long-term product stability.
                        </p>
                        <p className="mt-3 leading-relaxed text-slate-300">
                            Our approach emphasizes transparent communication, measurable milestones, and senior engineering oversight across every engagement.
                        </p>
                    </article>

                    <article className="premium-surface rounded-3xl p-7">
                        <h3 className="text-xl font-bold text-white">Global Presence</h3>
                        <p className="mt-2 text-sm text-slate-300">We collaborate with clients across major growth markets while maintaining one consistent quality benchmark.</p>
                        <div className="mt-4 grid gap-2 sm:grid-cols-2">
                            {globalFootprint.map((region) => (
                                <div key={region} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
                                    {region}
                                </div>
                            ))}
                        </div>
                    </article>
                </section>

                <section className="premium-surface rounded-3xl p-7">
                    <h2 className="text-2xl font-bold text-white">Core Capabilities</h2>
                    <div className="mt-5 grid gap-4 md:grid-cols-2">
                        {coreCapabilities.map((capability) => (
                            <article key={capability.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                                <h3 className="font-semibold text-white">{capability.title}</h3>
                                <p className="mt-1 text-sm text-slate-300">{capability.detail}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="grid gap-6 md:grid-cols-2">
                    <article className="rounded-3xl border border-white/10 bg-white/5 p-7">
                        <Target className="h-6 w-6 text-indigo-300" />
                        <h3 className="mt-4 text-2xl font-bold text-white">Vision</h3>
                        <p className="mt-2 text-slate-300">
                            To become a globally trusted engineering and product partner for organizations building category-defining digital experiences.
                        </p>
                    </article>
                    <article className="rounded-3xl border border-white/10 bg-white/5 p-7">
                        <Zap className="h-6 w-6 text-indigo-300" />
                        <h3 className="mt-4 text-2xl font-bold text-white">Mission</h3>
                        <p className="mt-2 text-slate-300">
                            Deliver secure, scalable, and business-aligned systems through disciplined execution, modern architecture, and continuous optimization.
                        </p>
                    </article>
                </section>

                <section className="space-y-5">
                    <h2 className="text-3xl font-black text-white">Leadership Team</h2>
                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
                        {founders.map((founder, index) => (
                            <motion.div
                                key={founder.name}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                            >
                                <FounderCard founder={founder} />
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="rounded-3xl border border-indigo-300/25 bg-indigo-500/15 p-8 text-center">
                    <h2 className="text-3xl font-bold text-white">Partner with Hexenity</h2>
                    <p className="mx-auto mt-3 max-w-2xl text-slate-200">
                        If you are looking for a reliable technology partner with strategic clarity and execution accountability, our leadership team would be glad to connect.
                    </p>
                    <button
                        type="button"
                        onClick={() => navigate('/hexenity/contact')}
                        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
                    >
                        Schedule a Consultation
                        <ArrowRight className="h-4 w-4" />
                    </button>
                </section>
            </div>
        </HexenityPageShell>
    );
}
