import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle2, Star } from 'lucide-react';
import { projects } from '../../data/projects';
import HexenityPageShell from '../../components/KkSystems/HexenityPageShell';

export default function WorkDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find((p) => p.slug === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <HexenityPageShell
                badge="Case Study"
                title="Case Study Not Found"
                subtitle="The selected project detail is unavailable."
                backLabel="Back to Work"
                onBack={() => navigate('/hexenity/work')}
            />
        );
    }

    const isFullStudy = Boolean(project.overview);

    return (
        <HexenityPageShell
            badge="Case Study"
            title={project.title}
            subtitle={project.description}
            backLabel="Back to Work"
            onBack={() => navigate('/hexenity/work')}
            actions={(
                <>
                    {project.github !== '#' ? (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-slate-100 transition hover:border-indigo-300/45 hover:text-indigo-200"
                        >
                            Open Link
                            <ExternalLink className="h-4 w-4" />
                        </a>
                    ) : null}
                    {project.slug === 'expenser-app' ? (
                        <Link
                            to="/expenser"
                            className="inline-flex items-center gap-2 rounded-xl border border-indigo-300/35 bg-indigo-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-indigo-100 transition hover:bg-indigo-500/30"
                        >
                            Product Page
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    ) : null}
                </>
            )}
        >
            <div className="space-y-8">
                {project.appDetails ? (
                    <section className="premium-surface gradient-stroke rounded-3xl p-7">
                        <h2 className="mb-5 text-2xl font-bold text-white">Application Specifications</h2>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            <Spec label="Category" value={project.appDetails.category} />
                            <Spec label="Platform" value={project.appDetails.platform} />
                            <Spec label="Tech Stack" value={project.appDetails.techStack} />
                            <Spec label="Status" value={project.appDetails.availability} />
                        </div>
                    </section>
                ) : null}

                {project.storePerformance ? (
                    <section className="premium-surface rounded-3xl p-7">
                        <h2 className="mb-5 text-2xl font-bold text-white">Store Performance</h2>
                        <div className="grid gap-4 sm:grid-cols-3">
                            <Spec label="Downloads" value={project.storePerformance.downloads} />
                            <Spec
                                label="Rating"
                                value={(
                                    <span className="inline-flex items-center gap-1.5 text-amber-300">
                                        {project.storePerformance.rating}
                                        <Star className="h-4 w-4 fill-current" />
                                    </span>
                                )}
                            />
                            <Spec label="Platform" value={project.storePerformance.platform} />
                        </div>
                    </section>
                ) : null}

                {isFullStudy ? (
                    <>
                        <section className="grid gap-8 lg:grid-cols-2">
                            <ContentPanel title="Challenge" content={project.problem} />
                            <ContentPanel title="Solution" content={project.solution} />
                        </section>

                        {project.features?.length ? (
                            <section className="premium-surface rounded-3xl p-7">
                                <h2 className="mb-5 text-2xl font-bold text-white">Core Features Delivered</h2>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    {project.features.map((feature) => (
                                        <div key={feature} className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200">
                                            <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 text-emerald-300" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        ) : null}

                        {project.techStack?.length ? (
                            <section className="premium-surface rounded-3xl p-7">
                                <h2 className="mb-5 text-2xl font-bold text-white">Engineering Stack</h2>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech) => (
                                        <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </section>
                        ) : null}

                        {project.results ? (
                            <section className="rounded-3xl border border-indigo-300/25 bg-indigo-500/15 p-8">
                                <h2 className="text-2xl font-bold text-white">Business Impact</h2>
                                <p className="mt-3 text-lg text-indigo-100">"{project.results}"</p>
                            </section>
                        ) : null}
                    </>
                ) : (
                    <section className="premium-surface rounded-3xl p-7">
                        <h2 className="mb-3 text-2xl font-bold text-white">Project Notes</h2>
                        <p className="whitespace-pre-line text-slate-300">{project.content}</p>
                    </section>
                )}
            </div>
        </HexenityPageShell>
    );
}

function Spec({ label, value }) {
    return (
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.12em] text-slate-400">{label}</p>
            <p className="mt-1 text-white">{value}</p>
        </div>
    );
}

function ContentPanel({ title, content }) {
    if (!content) return null;
    return (
        <section className="premium-surface rounded-3xl p-7">
            <h2 className="mb-3 text-2xl font-bold text-white">{title}</h2>
            <div className="space-y-3 text-slate-300">
                {content.split('\n\n').map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                ))}
            </div>
        </section>
    );
}
