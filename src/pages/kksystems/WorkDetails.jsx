import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle2, Star, Briefcase, ShieldCheck } from 'lucide-react';
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

    const isFullStudy = Boolean(project.overview || project.problem || project.solution);
    const primaryLink = project.playStore || (project.github && project.github !== '#' ? project.github : null);
    const quickSpecs = [
        { label: 'Category', value: project.appDetails?.category || 'Digital Product' },
        { label: 'Platform', value: project.appDetails?.platform || 'Web / Mobile' },
        { label: 'Availability', value: project.appDetails?.availability || 'Private / Client Usage' },
        { label: 'Core Stack', value: project.appDetails?.techStack || (project.technologies || []).slice(0, 2).join(' + ') || 'Custom Stack' },
    ];

    return (
        <HexenityPageShell
            badge="Case Study"
            title={project.title}
            subtitle={project.description}
            backLabel="Back to Work"
            onBack={() => navigate('/hexenity/work')}
            actions={(
                <>
                    {primaryLink ? (
                        <a
                            href={primaryLink}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-slate-100 transition hover:border-indigo-300/45 hover:text-indigo-200"
                        >
                            View Live
                            <ExternalLink className="h-4 w-4" />
                        </a>
                    ) : null}
                    {project.slug === 'expenser-app' ? (
                        <button
                            type="button"
                            onClick={() => navigate('/expenser')}
                            className="inline-flex items-center gap-2 rounded-xl border border-indigo-300/35 bg-indigo-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-indigo-100 transition hover:bg-indigo-500/30"
                        >
                            Product Page
                            <ArrowRight className="h-4 w-4" />
                        </button>
                    ) : null}
                </>
            )}
        >
            <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
                <div className="space-y-8">
                    {project.heroImage ? (
                        <section className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70">
                            <img src={project.heroImage} alt={project.title} className="h-72 w-full object-cover md:h-96" />
                        </section>
                    ) : null}

                    <section className="premium-surface gradient-stroke rounded-3xl p-7">
                        <h2 className="text-2xl font-bold text-white">Executive Summary</h2>
                        <p className="mt-3 whitespace-pre-line text-slate-300">{project.overview || project.content || project.description}</p>
                    </section>

                    {isFullStudy ? (
                        <section className="grid gap-6 md:grid-cols-2">
                            <ContentPanel title="Business Challenge" content={project.problem} />
                            <ContentPanel title="Strategic Solution" content={project.solution} />
                        </section>
                    ) : null}

                    {project.features?.length ? (
                        <section className="premium-surface rounded-3xl p-7">
                            <h2 className="mb-5 text-2xl font-bold text-white">Capabilities Delivered</h2>
                            <div className="grid gap-3 sm:grid-cols-2">
                                {project.features.map((feature) => (
                                    <div key={feature} className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200">
                                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" />
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

                    {project.technicalArchitecture?.length ? (
                        <section className="premium-surface rounded-3xl p-7">
                            <h2 className="mb-5 text-2xl font-bold text-white">Architecture Notes</h2>
                            <div className="space-y-3">
                                {project.technicalArchitecture.map((item) => (
                                    <article key={item.layer} className="rounded-xl border border-white/10 bg-white/5 p-4">
                                        <p className="text-xs uppercase tracking-[0.14em] text-indigo-300">{item.layer}</p>
                                        <p className="mt-1 text-slate-200">{item.stack}</p>
                                    </article>
                                ))}
                            </div>
                        </section>
                    ) : null}

                    {project.userFeedback?.length ? (
                        <section className="premium-surface rounded-3xl p-7">
                            <h2 className="mb-5 text-2xl font-bold text-white">Client & User Feedback</h2>
                            <div className="space-y-3">
                                {project.userFeedback.slice(0, 3).map((feedback) => (
                                    <blockquote key={feedback} className="rounded-xl border border-white/10 bg-white/5 p-4 text-slate-200">
                                        "{feedback}"
                                    </blockquote>
                                ))}
                            </div>
                        </section>
                    ) : null}
                </div>

                <aside className="space-y-6">
                    <section className="premium-surface rounded-3xl p-6">
                        <h3 className="mb-4 inline-flex items-center gap-2 text-lg font-bold text-white">
                            <Briefcase className="h-5 w-5 text-indigo-300" />
                            Project At a Glance
                        </h3>
                        <div className="space-y-3">
                            {quickSpecs.map((spec) => (
                                <div key={spec.label} className="rounded-xl border border-white/10 bg-white/5 p-3">
                                    <p className="text-[11px] uppercase tracking-[0.14em] text-slate-400">{spec.label}</p>
                                    <p className="mt-1 text-sm text-white">{spec.value}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {project.storePerformance ? (
                        <section className="premium-surface rounded-3xl p-6">
                            <h3 className="mb-4 text-lg font-bold text-white">Store Performance</h3>
                            <div className="space-y-3">
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

                    {project.results ? (
                        <section className="rounded-3xl border border-indigo-300/25 bg-indigo-500/15 p-6">
                            <h3 className="inline-flex items-center gap-2 text-lg font-bold text-white">
                                <ShieldCheck className="h-5 w-5 text-indigo-200" />
                                Business Impact
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-indigo-100">{project.results}</p>
                        </section>
                    ) : null}

                    <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
                        <h3 className="text-lg font-bold text-white">Need a similar solution?</h3>
                        <p className="mt-2 text-sm text-slate-300">Share your requirements and we will propose the right architecture, timeline, and engagement model.</p>
                        <button
                            type="button"
                            onClick={() => navigate('/hexenity/contact')}
                            className="mt-4 inline-flex items-center gap-2 rounded-xl border border-indigo-300/35 bg-indigo-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-indigo-100 transition hover:bg-indigo-500/30"
                        >
                            Start Consultation
                            <ArrowRight className="h-4 w-4" />
                        </button>
                    </section>
                </aside>
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
