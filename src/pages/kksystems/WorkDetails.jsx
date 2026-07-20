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
                            className="inline-flex items-center gap-2 rounded-full border border-indigo-300/35 bg-indigo-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-indigo-100 transition hover:bg-indigo-500/30"
                        >
                            Product Page
                            <ArrowRight className="h-4 w-4" />
                        </button>
                    ) : null}
                </>
            )}
        >
            <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
                <div className="space-y-14">
                    {project.heroImage ? (
                        <section className="overflow-hidden rounded-3xl border border-white/[0.08]">
                            <img src={project.heroImage} alt={project.title} className="h-72 w-full object-cover md:h-96" />
                        </section>
                    ) : null}

                    <section>
                        <SectionHeader index="01" label="Summary" />
                        <h2 className="pf-display mb-4 text-[clamp(1.5rem,2.8vw,2.1rem)] font-bold text-white">Executive summary</h2>
                        <p className="whitespace-pre-line max-w-3xl leading-relaxed text-slate-300">{project.overview || project.content || project.description}</p>
                    </section>

                    {isFullStudy ? (
                        <section>
                            <SectionHeader index="02" label="Challenge / Solution" />
                            <div className="grid gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-2">
                                <ContentPanel title="Business Challenge" content={project.problem} />
                                <ContentPanel title="Strategic Solution" content={project.solution} />
                            </div>
                        </section>
                    ) : null}

                    {project.features?.length ? (
                        <section>
                            <SectionHeader index="03" label="Capabilities" />
                            <h2 className="pf-display mb-4 text-[clamp(1.5rem,2.8vw,2.1rem)] font-bold text-white">Capabilities delivered</h2>
                            <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2">
                                {project.features.map((feature) => (
                                    <div key={feature} className="group flex items-start gap-3 bg-[#0B0F19] px-5 py-4 text-sm text-slate-300 transition-colors duration-300 hover:bg-[#10152a] hover:text-white">
                                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ) : null}

                    {project.techStack?.length ? (
                        <section>
                            <SectionHeader index="04" label="Stack" />
                            <h2 className="pf-display mb-4 text-[clamp(1.5rem,2.8vw,2.1rem)] font-bold text-white">Engineering stack</h2>
                            <div className="flex flex-wrap gap-2.5">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="pf-mono rounded-full border border-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-slate-300 transition-colors duration-300 hover:border-indigo-300/50 hover:text-white"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </section>
                    ) : null}

                    {project.technicalArchitecture?.length ? (
                        <section>
                            <SectionHeader index="05" label="Architecture" />
                            <h2 className="pf-display mb-4 text-[clamp(1.5rem,2.8vw,2.1rem)] font-bold text-white">Architecture notes</h2>
                            <div className="border-t border-white/[0.08]">
                                {project.technicalArchitecture.map((item) => (
                                    <article key={item.layer} className="grid gap-2 border-b border-white/[0.08] py-5 sm:grid-cols-[220px_1fr] sm:gap-8">
                                        <p className="pf-mono text-[10px] uppercase tracking-[0.22em] text-indigo-300">{item.layer}</p>
                                        <p className="text-sm leading-relaxed text-slate-300">{item.stack}</p>
                                    </article>
                                ))}
                            </div>
                        </section>
                    ) : null}

                    {project.userFeedback?.length ? (
                        <section>
                            <SectionHeader index="06" label="Feedback" />
                            <h2 className="pf-display mb-4 text-[clamp(1.5rem,2.8vw,2.1rem)] font-bold text-white">Client & user feedback</h2>
                            <div className="space-y-6">
                                {project.userFeedback.slice(0, 3).map((feedback) => (
                                    <blockquote key={feedback} className="border-l-2 border-indigo-400/60 pl-6">
                                        <p className="pf-display text-lg font-semibold leading-relaxed text-white/90">“{feedback}”</p>
                                    </blockquote>
                                ))}
                            </div>
                        </section>
                    ) : null}
                </div>

                <aside className="space-y-5">
                    <section className="rounded-3xl border border-white/[0.08] bg-[#0B0F19] p-7">
                        <p className="pf-mono mb-2 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-slate-400">
                            <Briefcase className="h-4 w-4 text-indigo-300" />
                            At a Glance
                        </p>
                        <div className="divide-y divide-white/[0.07]">
                            {quickSpecs.map((spec) => (
                                <div key={spec.label} className="py-4">
                                    <p className="pf-mono text-[9px] uppercase tracking-[0.24em] text-slate-500">{spec.label}</p>
                                    <p className="mt-1.5 text-sm font-medium text-white">{spec.value}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {project.storePerformance ? (
                        <section className="rounded-3xl border border-white/[0.08] bg-[#0B0F19] p-7">
                            <p className="pf-mono mb-2 text-[10px] uppercase tracking-[0.28em] text-slate-400">Store Performance</p>
                            <div className="divide-y divide-white/[0.07]">
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
                        <section className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0B0F19] p-7">
                            <div className="pf-dotgrid absolute inset-0 opacity-30" aria-hidden="true" />
                            <div className="relative">
                                <p className="pf-mono mb-3 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-indigo-300">
                                    <ShieldCheck className="h-4 w-4" />
                                    Business Impact
                                </p>
                                <p className="text-sm leading-relaxed text-slate-200">{project.results}</p>
                            </div>
                        </section>
                    ) : null}

                    <section className="rounded-3xl border border-white/[0.08] bg-[#0B0F19] p-7">
                        <h3 className="pf-display text-lg font-bold text-white">Need a similar solution?</h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-400">Share your requirements and we will propose the right architecture, timeline, and engagement model.</p>
                        <button
                            type="button"
                            onClick={() => navigate('/hexenity/contact')}
                            data-cursor="Talk"
                            className="mt-5 inline-flex items-center gap-2 rounded-full border border-white bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-500 hover:bg-transparent hover:text-white"
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

function SectionHeader({ index, label }) {
    return (
        <div className="pf-mono mb-2 flex items-center gap-4 text-[11px] uppercase tracking-[0.35em] text-white/35">
            <span className="text-indigo-300">({index})</span>
            <span>{label}</span>
            <span className="h-px flex-1 bg-white/[0.08]" />
        </div>
    );
}

function Spec({ label, value }) {
    return (
        <div className="py-4">
            <p className="pf-mono text-[9px] uppercase tracking-[0.24em] text-slate-500">{label}</p>
            <p className="mt-1.5 text-sm font-medium text-white">{value}</p>
        </div>
    );
}

function ContentPanel({ title, content }) {
    if (!content) return null;
    return (
        <section className="bg-[#0B0F19] p-8">
            <h2 className="pf-display mb-4 text-xl font-bold text-white">{title}</h2>
            <div className="space-y-3 text-sm leading-relaxed text-slate-300">
                {content.split('\n\n').map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                ))}
            </div>
        </section>
    );
}
