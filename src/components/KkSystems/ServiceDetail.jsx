import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Clock3, MessageCircle, Sparkles } from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import HexenityPageShell from './HexenityPageShell';

const ServiceDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const service = servicesData[slug];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!service) {
        return (
            <HexenityPageShell
                badge="Service"
                title="Service Not Found"
                subtitle="This service page could not be loaded."
                backLabel="Back to Services"
                onBack={() => navigate('/hexenity')}
            >
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-slate-200">
                    Please go back and choose a valid service.
                </div>
            </HexenityPageShell>
        );
    }

    return (
        <HexenityPageShell
            badge="Service Detail"
            title={service.title}
            subtitle={service.overview}
            backLabel="Back to Services"
            onBack={() => navigate('/hexenity')}
            actions={(
                <button
                    onClick={() => navigate('/hexenity/contact')}
                    className="inline-flex items-center gap-2 rounded-xl border border-indigo-300/35 bg-indigo-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-indigo-100 transition hover:bg-indigo-500/30"
                >
                    Start Project
                    <ArrowRight className="h-4 w-4" />
                </button>
            )}
        >
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.45fr_0.55fr]">
                <div className="space-y-8">
                    <section className="premium-surface gradient-stroke rounded-3xl p-7">
                        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-300/35 bg-indigo-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-200">
                            <Sparkles className="h-3.5 w-3.5" />
                            Scope Areas
                        </p>
                        <h2 className="mb-5 text-2xl font-bold text-white">{service.typesTitle}</h2>
                        <div className="grid gap-3 sm:grid-cols-2">
                            {service.types.map((type) => (
                                <div key={type} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:border-indigo-300/40 hover:bg-indigo-500/10">
                                    {type}
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="premium-surface gradient-stroke rounded-3xl p-7">
                        <h2 className="mb-5 text-2xl font-bold text-white">{service.processTitle}</h2>
                        <div className="space-y-4">
                            {service.process.map((stepItem, index) => (
                                <div key={stepItem.step} className="rounded-xl border border-white/10 bg-white/5 p-4">
                                    <div className="mb-2 flex items-center gap-3">
                                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-indigo-400/20 text-xs font-bold text-indigo-100">
                                            {index + 1}
                                        </span>
                                        <p className="text-xs uppercase tracking-[0.14em] text-indigo-300">Step {index + 1}</p>
                                    </div>
                                    <h3 className="mt-1 text-lg font-semibold text-white">{stepItem.step}</h3>
                                    {stepItem.desc ? <p className="mt-1 text-slate-300">{stepItem.desc}</p> : null}
                                </div>
                            ))}
                        </div>
                    </section>

                    {service.techStack?.length ? (
                        <section className="premium-surface rounded-3xl p-7">
                            <h2 className="mb-5 text-2xl font-bold text-white">Technology Stack</h2>
                            <div className="flex flex-wrap gap-2">
                                {service.techStack.map((tech) => (
                                    <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-indigo-300/35 hover:text-white">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </section>
                    ) : null}

                    {service.faqs?.length ? (
                        <section className="premium-surface rounded-3xl p-7">
                            <h2 className="mb-5 text-2xl font-bold text-white">FAQs</h2>
                            <div className="space-y-3">
                                {service.faqs.map((faq) => (
                                    <div key={faq.q} className="rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-indigo-300/30">
                                        <p className="font-semibold text-white">{faq.q}</p>
                                        <p className="mt-1 text-slate-300">{faq.a}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ) : null}
                </div>

                <div className="space-y-6">
                    <aside className="premium-surface rounded-3xl p-6">
                        <h3 className="mb-4 inline-flex items-center gap-2 text-lg font-bold text-white">
                            <Clock3 className="h-5 w-5 text-indigo-300" />
                            Delivery Timeline
                        </h3>
                        <ul className="space-y-3">
                            {service.timeline.map((item) => (
                                <li key={item} className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-slate-200">
                                    {item}
                                </li>
                            ))}
                        </ul>
                        {service.timelineNote ? <p className="mt-4 text-xs text-slate-400">{service.timelineNote}</p> : null}
                    </aside>

                    <aside className="premium-surface rounded-3xl p-6">
                        <h3 className="mb-4 text-lg font-bold text-white">Included in Service</h3>
                        <ul className="space-y-3">
                            {service.whatYouGet.map((item) => (
                                <li key={item} className="flex items-start gap-2 text-sm text-slate-200">
                                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </aside>

                    <aside className="rounded-3xl border border-indigo-300/25 bg-indigo-500/15 p-6">
                        <h3 className="text-xl font-bold text-white">Need a custom package?</h3>
                        <p className="mt-2 text-slate-200">Tell us your goals and we will propose a tailored scope, timeline, and delivery plan.</p>
                        <button
                            onClick={() => navigate('/hexenity/contact')}
                            className="mt-4 inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
                        >
                            <MessageCircle className="h-4 w-4" />
                            Talk to Hexenity
                        </button>
                    </aside>
                </div>
            </div>
        </HexenityPageShell>
    );
};

export default ServiceDetail;
