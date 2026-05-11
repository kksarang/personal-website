import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ExternalLink, Github, Layers3, ShieldCheck, TrendingUp, Users } from 'lucide-react';
import { projects } from '../../data/projects';

const filters = ['All', 'Mobile', 'Web', 'Enterprise'];

function FilterChip({ label, active, onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition ${
                active
                    ? 'border-indigo-300/50 bg-indigo-500/20 text-indigo-100'
                    : 'border-white/10 bg-white/5 text-slate-300 hover:border-indigo-300/35 hover:text-white'
            }`}
        >
            {label}
        </button>
    );
}

function MetricCard({ title, value, icon: Icon }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <Icon className="h-5 w-5 text-indigo-300" />
            <p className="mt-4 text-2xl font-bold text-white">{value}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-400">{title}</p>
        </div>
    );
}

function ProjectCard({ project, onOpen }) {
    return (
        <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 transition hover:border-indigo-300/35">
            <div className="relative aspect-[16/9] overflow-hidden">
                <img src={project.heroImage} alt={project.title} className="h-full w-full object-cover opacity-75" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-200">
                    {project.appDetails?.category || 'Digital Product'}
                </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                    {(project.technologies || []).slice(0, 4).map((tech) => (
                        <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-slate-200">
                            {tech}
                        </span>
                    ))}
                </div>

                <button
                    type="button"
                    onClick={() => onOpen(project.slug)}
                    className="mt-6 inline-flex items-center gap-2 self-start rounded-xl border border-indigo-300/35 bg-indigo-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-indigo-100 transition hover:bg-indigo-500/30"
                >
                    View Case Study
                    <ArrowRight className="h-4 w-4" />
                </button>
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
        <div className="bg-[#0B0F19] pb-24 pt-36 text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <section className="mb-14">
                    <span className="inline-flex items-center gap-2 rounded-full border border-indigo-300/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-indigo-200">
                        <Layers3 className="h-3.5 w-3.5" />
                        Case Studies
                    </span>
                    <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight text-white md:text-6xl">
                        Delivery outcomes built for serious business growth
                    </h1>
                    <p className="mt-5 max-w-3xl text-lg text-slate-300">
                        Explore selected work across mobile apps, enterprise web systems, and business automation products delivered for high-growth organizations.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <button
                            type="button"
                            onClick={() => navigate('/hexenity/contact')}
                            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
                        >
                            Discuss your project
                            <ArrowRight className="h-4 w-4" />
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate('/hexenity/solutions/erp')}
                            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-indigo-300/35 hover:bg-white/10"
                        >
                            Explore enterprise solutions
                        </button>
                    </div>
                </section>

                <section className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <MetricCard title="Projects Delivered" value="50+" icon={TrendingUp} />
                    <MetricCard title="Strategic Clients" value="Global" icon={Users} />
                    <MetricCard title="Delivery Process" value="Structured" icon={ShieldCheck} />
                    <MetricCard title="Execution Model" value="Outcome-led" icon={Layers3} />
                </section>

                <section className="mb-10 flex flex-wrap gap-3">
                    {filters.map((item) => (
                        <FilterChip key={item} label={item} active={filter === item} onClick={() => setFilter(item)} />
                    ))}
                </section>

                <section className="grid gap-8 md:grid-cols-2">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} onOpen={openProject} />
                    ))}
                </section>

                <section className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
                    <h2 className="text-3xl font-black text-white md:text-4xl">How we structure each engagement</h2>
                    <div className="mt-8 grid gap-6 md:grid-cols-3">
                        {[
                            { title: 'Problem Definition', desc: 'We align on business priorities, constraints, and measurable success outcomes.' },
                            { title: 'Solution Design', desc: 'Architecture, scope, and execution plans are documented before core build starts.' },
                            { title: 'Measured Delivery', desc: 'Milestone-based implementation with quality checks and leadership-level updates.' },
                        ].map((item) => (
                            <article key={item.title} className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
                                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.desc}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="mt-20">
                    <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                        <div>
                            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-300">
                                <Github className="h-3.5 w-3.5" />
                                Open Source
                            </span>
                            <h2 className="mt-4 text-3xl font-black text-white md:text-4xl">Public engineering labs</h2>
                        </div>
                        <p className="max-w-md text-sm text-slate-400">Live repositories that showcase implementation style, tooling choices, and engineering discipline.</p>
                    </div>

                    {loadingRepos ? (
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-300">Loading repositories...</div>
                    ) : repos.length === 0 ? (
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-300">No public repositories available at the moment.</div>
                    ) : (
                        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                            {repos.slice(0, 6).map((repo) => (
                                <a
                                    key={repo.id}
                                    href={repo.html_url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-indigo-300/35"
                                >
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-bold text-white">{repo.name}</h3>
                                        <ExternalLink className="h-4 w-4 text-slate-300 group-hover:text-indigo-200" />
                                    </div>
                                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">
                                        {repo.description || 'Repository showcasing active development experiments and technical exploration.'}
                                    </p>
                                    <p className="mt-4 text-xs uppercase tracking-[0.13em] text-slate-400">{repo.language || 'Codebase'}</p>
                                </a>
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
}
