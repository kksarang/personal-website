import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { ArrowRight, Building2, Globe2, Linkedin, Shield, Target, Users, Zap } from 'lucide-react';
import EnitexaPageShell from '../../components/KkSystems/EnitexaPageShell';

const founders = [
    {
        name: 'Sarang R',
        role: 'Chief Executive Officer',
        bio: 'Leads strategy, partnerships, and growth planning with a focus on long-term value creation.',
        image: '/assets/images/gallery/1.jpg',
        links: [
            { label: 'LinkedIn', url: 'https://www.linkedin.com/in/sarang-rajan/' },
            { label: 'Website', url: 'https://sarangrajan.in/' },
        ],
    },
    {
        name: 'Irshad KP',
        role: 'Chief Technology Officer',
        bio: 'Drives architecture direction, engineering quality, and scalable system delivery across projects.',
        image: '/assets/images/gallery/irs.png',
        links: [{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/irshad1212/' }],
    },
    {
        name: 'Russel VK',
        role: 'Chief Operating Officer',
        bio: 'Oversees delivery operations, client coordination, and day-to-day execution across engagements.',
        image: '/assets/images/gallery/russ.jpeg',
        links: [{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/russel-vk-7327152a3/' }],
    },
];

const coreCapabilities = [
    { title: 'Mobile Product Engineering', detail: 'High-performance apps for iOS, Android, and cross-platform deployments.' },
    { title: 'Web Platform Development', detail: 'Scalable product experiences for growth-stage and enterprise businesses.' },
    { title: 'ERP & Operations Systems', detail: 'Workflow automation and centralized control for business-critical operations.' },
    { title: 'Architecture & Reliability', detail: 'Structured technical planning with security, stability, and maintainability focus.' },
];

const globalFootprint = ['India', 'Middle East', 'Canada', 'United States'];

const statCards = [
    { icon: Building2, value: '2018+', label: 'Operational Journey' },
    { icon: Users, value: 'Founder-Led', label: 'Execution Model' },
    { icon: Globe2, value: 'Global', label: 'Client Footprint' },
    { icon: Shield, value: 'Structured', label: 'Delivery Governance' },
];

function SectionHeader({ index, label }) {
    return (
        <div className="pf-mono mb-2 flex items-center gap-4 text-[11px] uppercase tracking-[0.35em] text-white/35">
            <span className="text-indigo-300">({index})</span>
            <span>{label}</span>
            <span className="h-px flex-1 bg-white/[0.08]" />
        </div>
    );
}

function FounderCard({ founder }) {
    return (
        <article className="group h-full bg-[#0B0F19] p-8 transition-colors duration-500 hover:bg-[#10152a]">
            <div className="mb-5 flex items-center gap-4">
                <img
                    src={founder.image}
                    alt={founder.name}
                    className="h-16 w-16 rounded-2xl object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                />
                <div>
                    <h3 className="pf-display text-xl font-bold text-white">{founder.name}</h3>
                    <p className="pf-mono mt-1 text-[9px] uppercase tracking-[0.22em] text-indigo-300">{founder.role}</p>
                </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 transition-colors duration-300 group-hover:text-slate-300">{founder.bio}</p>
            <div className="mt-5 flex flex-wrap gap-2">
                {founder.links.map((link) => {
                    const LinkIcon = link.label.toLowerCase().includes('linkedin') ? Linkedin : Globe2;
                    return (
                        <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="pf-mono inline-flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 text-[9px] uppercase tracking-[0.18em] text-slate-400 transition-colors duration-300 hover:border-indigo-300/50 hover:text-white"
                        >
                            <LinkIcon className="h-3.5 w-3.5" />
                            {link.label}
                        </a>
                    );
                })}
            </div>
        </article>
    );
}

export default function About() {
    const navigate = useNavigate();

    return (
        <EnitexaPageShell
            badge="About Enitexa.Ai"
            title="A strategic technology partner for ambitious organizations"
            subtitle="Enitexa.Ai combines product strategy, engineering discipline, and executive-level communication to deliver reliable digital systems that scale."
            backLabel="Back to Home"
            onBack={() => navigate('/enitexa.ai')}
            actions={(
                <button
                    type="button"
                    onClick={() => navigate('/enitexa.ai/contact')}
                    className="inline-flex items-center gap-2 rounded-full border border-indigo-300/35 bg-indigo-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-indigo-100 transition hover:bg-indigo-500/30"
                >
                    Contact Leadership
                    <ArrowRight className="h-4 w-4" />
                </button>
            )}
        >
            <div className="space-y-20">
                <section className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] lg:grid-cols-4">
                    {statCards.map((stat, index) => (
                        <Motion.article
                            key={stat.label}
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group bg-[#0B0F19] p-6 transition-colors duration-500 hover:bg-[#10152a]"
                        >
                            <stat.icon className="h-5 w-5 text-indigo-300 transition-transform duration-500 group-hover:-translate-y-1" />
                            <p className="pf-display mt-4 text-xl font-bold text-white sm:text-2xl">{stat.value}</p>
                            <p className="pf-mono mt-2 text-[9px] uppercase tracking-[0.22em] text-slate-500">{stat.label}</p>
                        </Motion.article>
                    ))}
                </section>

                <section>
                    <SectionHeader index="01" label="Who We Are" />
                    <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
                        <div>
                            <h2 className="pf-display text-[clamp(1.7rem,3.2vw,2.5rem)] font-bold leading-tight text-white">
                                Built to bridge business decisions and technical execution.
                            </h2>
                            <p className="mt-5 max-w-2xl leading-relaxed text-slate-300">
                                Enitexa.Ai was built to bridge the gap between fast-moving business decisions and high-quality technical execution. We support
                                founders, operational leaders, and enterprise teams with practical architecture, accountable delivery, and long-term product stability.
                            </p>
                            <p className="mt-3 max-w-2xl leading-relaxed text-slate-300">
                                Our approach emphasizes transparent communication, measurable milestones, and senior engineering oversight across every engagement.
                            </p>
                        </div>
                        <div className="rounded-3xl border border-white/[0.08] bg-[#0B0F19] p-7">
                            <p className="pf-mono text-[10px] uppercase tracking-[0.28em] text-slate-400">Global Presence</p>
                            <p className="mt-3 text-sm leading-relaxed text-slate-400">
                                We collaborate with clients across major growth markets while maintaining one consistent quality benchmark.
                            </p>
                            <div className="mt-5 divide-y divide-white/[0.07]">
                                {globalFootprint.map((region, index) => (
                                    <div key={region} className="flex items-baseline gap-4 py-3 text-sm text-slate-200">
                                        <span className="pf-mono text-[10px] text-indigo-300">0{index + 1}</span>
                                        {region}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <SectionHeader index="02" label="Capabilities" />
                    <h2 className="pf-display mb-4 text-[clamp(1.7rem,3.2vw,2.5rem)] font-bold text-white">Core capabilities</h2>
                    <div className="grid gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-2">
                        {coreCapabilities.map((capability, index) => (
                            <article key={capability.title} className="group bg-[#0B0F19] p-8 transition-colors duration-500 hover:bg-[#10152a]">
                                <span className="pf-display text-4xl font-extrabold text-white/[0.07] transition-colors duration-500 group-hover:text-indigo-400/40">
                                    0{index + 1}
                                </span>
                                <h3 className="pf-display mt-6 text-lg font-bold text-white">{capability.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-slate-400">{capability.detail}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section>
                    <SectionHeader index="03" label="Direction" />
                    <div className="grid gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-2">
                        <article className="group bg-[#0B0F19] p-9 transition-colors duration-500 hover:bg-[#10152a]">
                            <Target className="h-6 w-6 text-indigo-300 transition-transform duration-500 group-hover:-translate-y-1" />
                            <h3 className="pf-display mt-5 text-2xl font-bold text-white">Vision</h3>
                            <p className="mt-3 leading-relaxed text-slate-400">
                                To become a globally trusted engineering and product partner for organizations building category-defining digital experiences.
                            </p>
                        </article>
                        <article className="group bg-[#0B0F19] p-9 transition-colors duration-500 hover:bg-[#10152a]">
                            <Zap className="h-6 w-6 text-indigo-300 transition-transform duration-500 group-hover:-translate-y-1" />
                            <h3 className="pf-display mt-5 text-2xl font-bold text-white">Mission</h3>
                            <p className="mt-3 leading-relaxed text-slate-400">
                                Deliver secure, scalable, and business-aligned systems through disciplined execution, modern architecture, and continuous optimization.
                            </p>
                        </article>
                    </div>
                </section>

                <section>
                    <SectionHeader index="04" label="Leadership" />
                    <h2 className="pf-display mb-4 text-[clamp(1.7rem,3.2vw,2.5rem)] font-bold text-white">Leadership team</h2>
                    <div className="grid gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-2 xl:grid-cols-3">
                        {founders.map((founder, index) => (
                            <Motion.div
                                key={founder.name}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                className="h-full"
                            >
                                <FounderCard founder={founder} />
                            </Motion.div>
                        ))}
                    </div>
                </section>

                <section className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0B0F19] p-10 text-center sm:p-14">
                    <div className="pf-dotgrid absolute inset-0 opacity-30" aria-hidden="true" />
                    <div className="relative">
                        <p className="pf-mono mb-4 text-[10px] uppercase tracking-[0.3em] text-indigo-300">Let’s Talk</p>
                        <h2 className="pf-display mx-auto max-w-2xl text-[clamp(1.8rem,3.6vw,2.8rem)] font-bold leading-tight text-white">
                            Partner with Enitexa.Ai
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-slate-400">
                            If you are looking for a reliable technology partner with strategic clarity and execution accountability, our leadership team would be glad to connect.
                        </p>
                        <button
                            type="button"
                            onClick={() => navigate('/enitexa.ai/contact')}
                            data-cursor="Talk"
                            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white bg-white px-8 py-4 text-sm font-semibold text-black transition-all duration-500 hover:bg-transparent hover:text-white"
                        >
                            Schedule a Consultation
                            <ArrowRight className="h-4 w-4" />
                        </button>
                    </div>
                </section>
            </div>
        </EnitexaPageShell>
    );
}
