import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, Layers3, ShieldCheck, TrendingUp, Users } from 'lucide-react';
import { projects } from '../../data/projects';
import HexenityPageShell from '../../components/KkSystems/HexenityPageShell';

const filters = ['All', 'Mobile', 'Web', 'Enterprise'];

function SectionHeader({ index, label, extra }) {
    return (
        <div className="pf-mono mb-2 flex items-center gap-4 text-[11px] uppercase tracking-[0.35em] text-white/35">
            <span className="text-indigo-300">({index})</span>
            <span>{label}</span>
            <span className="h-px flex-1 bg-white/[0.08]" />
            {extra}
        </div>
    );
}

function FilterChip({ label, active, onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`pf-mono rounded-full border px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
                active
                    ? 'border-indigo-400 bg-indigo-500 text-white'
                    : 'border-white/10 text-slate-400 hover:border-white/40 hover:text-white'
            }`}
        >
            {label}
        </button>
    );
}

function MetricCard({ title, value, icon }) {
    const Icon = icon;
    return (
        <div className="group bg-[#0B0F19] p-6 transition-colors duration-500 hover:bg-[#10152a]">
            <Icon className="h-5 w-5 text-indigo-300 transition-transform duration-500 group-hover:-translate-y-1" />
            <p className="pf-display mt-4 text-2xl font-bold text-white">{value}</p>
            <p className="pf-mono mt-2 text-[9px] uppercase tracking-[0.22em] text-slate-500">{title}</p>
        </div>
    );
}

function ProjectCard({ project, onOpen }) {
    return (
        <article
            onClick={() => onOpen(project.slug)}
            data-cursor="View"
            className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0B0F19] transition-all duration-500 hover:-translate-y-1 hover:border-indigo-300/35"
        >
            <div className="relative aspect-[16/9] overflow-hidden">
                <img
                    src={project.heroImage}
                    alt={project.title}
                    className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent" />
                <div className="pf-mono absolute left-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-200 backdrop-blur">
                    {project.appDetails?.category || 'Digital Product'}
                </div>
            </div>

            <div className="flex flex-1 flex-col p-7">
                <div className="flex items-start justify-between gap-4">
                    <h3 className="pf-display text-2xl font-bold text-white">{project.title}</h3>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all duration-500 group-hover:rotate-45 group-hover:border-white group-hover:text-white">
                        <ArrowRight className="h-4 w-4" />
                    </span>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                    {(project.technologies || []).slice(0, 4).map((tech) => (
                        <span
                            key={tech}
                            className="pf-mono rounded-full border border-white/10 px-3 py-1 text-[9px] uppercase tracking-[0.16em] text-slate-400 transition-colors duration-300 group-hover:border-white/25 group-hover:text-slate-200"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
}

export default function Work() {
    const navigate = useNavigate();
    const [repos, setRepos] = useState([]);
    const [loadingRepos, setLoadingRepos] = useState(true);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        let isMounted = true;

        fetch('https://api.github.com/users/kksarang/repos?sort=updated&per_page=8')
            .then((res) => res.json())
            .then((data) => {
                if (!isMounted) return;
                if (Array.isArray(data)) {
                    setRepos(data.filter((repo) => !repo.fork));
                }
            })
            .catch(() => {
                if (isMounted) setRepos([]);
            })
            .finally(() => {
                if (isMounted) setLoadingRepos(false);
            });

        return () => {
            isMounted = false;
        };
    }, []);

    const filteredProjects = useMemo(() => {
        if (filter === 'All') return projects;

        return projects.filter((project) => {
            const category = (project.appDetails?.category || '').toLowerCase();
            const platform = (project.appDetails?.platform || '').toLowerCase();

            if (filter === 'Mobile') return platform.includes('android') || platform.includes('mobile') || category.includes('app');
            if (filter === 'Web') return platform.includes('web') || category.includes('web');
            if (filter === 'Enterprise') return category.includes('corporate') || category.includes('erp') || platform.includes('enterprise');
            return true;
        });
    }, [filter]);

    const openProject = (slug) => {
        if (!slug || slug === '#') return;
        navigate(`/hexenity/work/${slug}`);
    };

    return (
        <HexenityPageShell
            badge="Case Studies"
            title="Delivery outcomes built for serious business growth"
            subtitle="Explore selected work across mobile apps, enterprise web systems, and business automation products delivered for growth-focused organizations."
            backLabel="Back to Home"
            onBack={() => navigate('/hexenity')}
            actions={(
                <button
                    type="button"
                    onClick={() => navigate('/hexenity/contact')}
                    className="inline-flex items-center gap-2 rounded-full border border-indigo-300/35 bg-indigo-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-indigo-100 transition hover:bg-indigo-500/30"
                >
                    Discuss your project
                    <ArrowRight className="h-4 w-4" />
                </button>
            )}
        >
            <div className="space-y-20">
                <section className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] lg:grid-cols-4">
                    <MetricCard title="Projects Delivered" value="50+" icon={TrendingUp} />
                    <MetricCard title="Strategic Clients" value="Global" icon={Users} />
                    <MetricCard title="Delivery Process" value="Structured" icon={ShieldCheck} />
                    <MetricCard title="Execution Model" value="Outcome-led" icon={Layers3} />
                </section>

                <section className="overflow-hidden rounded-3xl border border-indigo-300/25 bg-gradient-to-br from-indigo-500/15 via-[#0B0F19] to-cyan-500/10 p-7 sm:p-9">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                        <div className="max-w-2xl">
                            <p className="pf-mono mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-indigo-300">
                                New software solution
                            </p>
                            <h2 className="pf-display text-[clamp(1.5rem,3vw,2.2rem)] font-bold text-white">
                                Cleanso — custom laundry software product plan
                            </h2>
                            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                                White-label booking app, delivery app, and CMS + POS — planned and built by Hexenity for laundry operators in India, UAE &amp; GCC.
                                Live site:{' '}
                                <a
                                    href="https://kksarang.github.io/laundry/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-indigo-200 underline decoration-indigo-400/40 underline-offset-2 hover:text-white"
                                >
                                    kksarang.github.io/laundry
                                </a>
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <button
                                type="button"
                                onClick={() => navigate('/hexenity/solutions/laundry')}
                                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#070B17] transition hover:bg-indigo-100"
                            >
                                View product plan
                                <ArrowRight className="h-4 w-4" />
                            </button>
                            <button
                                type="button"
                                onClick={() => openProject('cleanso')}
                                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:border-indigo-300/40"
                            >
                                Case study
                            </button>
                        </div>
                    </div>
                </section>

                <section>
                    <SectionHeader
                        index="01"
                        label="Selected Work"
                        extra={<span className="hidden sm:block">{filteredProjects.length} projects</span>}
                    />
                    <div className="mb-8 mt-4 flex flex-wrap gap-2.5">
                        {filters.map((item) => (
                            <FilterChip key={item} label={item} active={filter === item} onClick={() => setFilter(item)} />
                        ))}
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        {filteredProjects.map((project, index) => (
                            <Motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <ProjectCard project={project} onOpen={openProject} />
                            </Motion.div>
                        ))}
                    </div>
                </section>

                <section>
                    <SectionHeader index="02" label="Method" />
                    <h2 className="pf-display mb-4 text-[clamp(1.7rem,3.2vw,2.5rem)] font-bold text-white">How we structure each engagement</h2>
                    <div className="border-t border-white/[0.08]">
                        {[
                            { title: 'Problem Definition', desc: 'We align on business priorities, constraints, and measurable success outcomes.' },
                            { title: 'Solution Design', desc: 'Architecture, scope, and execution plans are documented before core build starts.' },
                            { title: 'Measured Delivery', desc: 'Milestone-based implementation with quality checks and leadership-level updates.' },
                        ].map((item, index) => (
                            <article
                                key={item.title}
                                className="group grid grid-cols-[auto_1fr] items-start gap-6 border-b border-white/[0.08] py-8 sm:grid-cols-[110px_1fr] sm:gap-10"
                            >
                                <span className="pf-display text-4xl font-extrabold leading-none text-white/[0.08] transition-colors duration-500 group-hover:text-indigo-400/50 sm:text-6xl">
                                    0{index + 1}
                                </span>
                                <div>
                                    <h3 className="pf-display text-xl font-bold text-white sm:text-2xl">{item.title}</h3>
                                    <p className="mt-2 max-w-3xl leading-relaxed text-slate-400">{item.desc}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section>
                    <SectionHeader
                        index="03"
                        label="Open Source"
                        extra={<Github className="h-4 w-4 text-indigo-300" />}
                    />
                    <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                        <h2 className="pf-display text-[clamp(1.7rem,3.2vw,2.5rem)] font-bold text-white">Public engineering labs</h2>
                        <p className="max-w-md text-sm text-slate-400">Live repositories that showcase implementation style, tooling choices, and engineering discipline.</p>
                    </div>

                    {loadingRepos ? (
                        <div className="rounded-2xl border border-white/[0.08] bg-[#0B0F19] p-6 text-slate-300">Loading repositories...</div>
                    ) : repos.length === 0 ? (
                        <div className="rounded-2xl border border-white/[0.08] bg-[#0B0F19] p-6 text-slate-300">No public repositories available at the moment.</div>
                    ) : (
                        <div className="grid gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-2 lg:grid-cols-3">
                            {repos.slice(0, 6).map((repo) => (
                                <a
                                    key={repo.id}
                                    href={repo.html_url}
                                    target="_blank"
                                    rel="noreferrer"
                                    data-cursor="Open"
                                    className="group flex h-full flex-col bg-[#0B0F19] p-7 transition-colors duration-500 hover:bg-[#10152a]"
                                >
                                    <div className="flex items-center justify-between gap-3">
                                        <h3 className="pf-display truncate text-lg font-bold text-white">{repo.name}</h3>
                                        <ExternalLink className="h-4 w-4 shrink-0 text-slate-500 transition-colors duration-300 group-hover:text-white" />
                                    </div>
                                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                                        {repo.description || 'Repository showcasing active development experiments and technical exploration.'}
                                    </p>
                                    <p className="pf-mono mt-5 text-[9px] uppercase tracking-[0.2em] text-indigo-300">{repo.language || 'Codebase'}</p>
                                </a>
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </HexenityPageShell>
    );
}
