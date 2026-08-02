import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Mail, MapPin, MessageCircle, Phone, Send, Sparkles } from 'lucide-react';
import { motion as Motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import EnitexaPageShell from '../../components/KkSystems/EnitexaPageShell';

const inquiryTypes = [
    { id: 'mobile', label: 'Mobile App' },
    { id: 'web', label: 'Web Platform' },
    { id: 'erp', label: 'ERP / Ops System' },
    { id: 'consulting', label: 'Technical Consulting' },
];

export default function Contact() {
    const navigate = useNavigate();
    const [status, setStatus] = useState('idle');
    const [projectType, setProjectType] = useState('mobile');

    const onSubmit = (event) => {
        event.preventDefault();
        setStatus('sending');
        setTimeout(() => setStatus('success'), 900);
    };

    return (
        <EnitexaPageShell
            badge="Contact Enitexa.Ai"
            title="Let’s scope your next digital build"
            subtitle="Share your goals and we will respond with a practical plan, timeline estimate, and recommended execution model."
            backLabel="Back to Home"
            onBack={() => navigate('/enitexa.ai')}
            actions={(
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/35 bg-emerald-300/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-emerald-200">
                    <Sparkles className="h-3.5 w-3.5" />
                    Avg response &lt; 24h
                </span>
            )}
        >
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
                <section className="space-y-5">
                    <article className="rounded-3xl border border-white/[0.08] bg-[#0B0F19] p-7">
                        <p className="pf-mono mb-2 text-[10px] uppercase tracking-[0.28em] text-slate-400">Direct Contact</p>
                        <div className="divide-y divide-white/[0.07]">
                            <ContactRow icon={Mail} label="Email" value="info.enitexa@gmail.com" href="mailto:info.enitexa@gmail.com" />
                            <ContactRow icon={Phone} label="Phone" value="+91 99952 54290" href="tel:+919995254290" />
                            <ContactRow icon={MapPin} label="Location" value="Kakkanad, Kochi, India" />
                        </div>
                    </article>

                    <article className="rounded-3xl border border-white/[0.08] bg-[#0B0F19] p-7">
                        <p className="pf-mono mb-5 text-[10px] uppercase tracking-[0.28em] text-slate-400">How We Engage</p>
                        <ul className="space-y-3.5 text-sm text-slate-300">
                            <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" /> Discovery call to align on goals and constraints</li>
                            <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" /> Scope + timeline recommendation</li>
                            <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" /> Transparent milestone-based execution</li>
                        </ul>
                    </article>

                    <article className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0B0F19] p-7">
                        <div className="pf-dotgrid absolute inset-0 opacity-30" aria-hidden="true" />
                        <div className="relative">
                            <h3 className="pf-display text-xl font-bold text-white">Prefer a quick call?</h3>
                            <p className="mt-2 text-sm leading-relaxed text-slate-400">Send a short note and we’ll schedule an introductory call with the right team lead.</p>
                            <button
                                onClick={() => navigate('/enitexa.ai/work')}
                                data-cursor="Work"
                                className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all duration-500 hover:border-white hover:bg-white/[0.05]"
                            >
                                See recent work
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>
                    </article>
                </section>

                <Motion.section
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="rounded-3xl border border-white/[0.08] bg-[#0B0F19] p-6 md:p-9"
                >
                    <p className="pf-mono mb-2 text-[10px] uppercase tracking-[0.28em] text-indigo-300">Project Inquiry</p>
                    <h2 className="pf-display text-2xl font-bold text-white sm:text-3xl">Tell us what you’re building</h2>
                    <p className="mt-2 text-sm text-slate-400">Share where you need support and we’ll respond within 24 hours.</p>

                    <form onSubmit={onSubmit} className="mt-6 space-y-5">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <Field label="Full name" placeholder="Your name" required />
                            <Field label="Email" type="email" placeholder="you@company.com" required />
                        </div>

                        <div>
                            <label className="text-xs uppercase tracking-[0.14em] text-slate-400">Project Type</label>
                            <div className="mt-2 grid grid-cols-2 gap-2">
                                {inquiryTypes.map((item) => (
                                    <button
                                        key={item.id}
                                        type="button"
                                        onClick={() => setProjectType(item.id)}
                                        className={`rounded-xl border px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition ${
                                            projectType === item.id
                                                ? 'border-indigo-300/45 bg-indigo-500/20 text-indigo-100'
                                                : 'border-white/10 bg-white/5 text-slate-300 hover:border-indigo-300/30'
                                        }`}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <Field label="Budget range" placeholder="$5k - $20k" />
                            <Field label="Timeline" placeholder="4 - 12 weeks" />
                        </div>

                        <div>
                            <label className="text-xs uppercase tracking-[0.14em] text-slate-400">Project Brief</label>
                            <textarea
                                rows={6}
                                required
                                placeholder="Goals, target users, current challenges, and desired outcomes..."
                                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition focus:border-indigo-300/45"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.13em] text-white transition hover:bg-indigo-500 disabled:opacity-80"
                        >
                            {status === 'success' ? (
                                <>
                                    <CheckCircle2 className="h-4 w-4" />
                                    Request Sent
                                </>
                            ) : status === 'sending' ? (
                                <>
                                    <MessageCircle className="h-4 w-4 animate-pulse" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Send className="h-4 w-4" />
                                    Submit Inquiry
                                </>
                            )}
                        </button>
                    </form>
                </Motion.section>
            </div>
        </EnitexaPageShell>
    );
}

function ContactRow({ icon, label, value, href }) {
    const Icon = icon;
    const content = (
        <div className="group flex items-center gap-4 py-4 text-slate-200">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-indigo-300 transition-colors duration-300 group-hover:border-indigo-300/50">
                <Icon className="h-4 w-4" />
            </span>
            <div className="min-w-0">
                <p className="pf-mono text-[9px] uppercase tracking-[0.24em] text-slate-500">{label}</p>
                <p className="mt-1 truncate text-sm font-medium text-white transition-colors duration-300 group-hover:text-indigo-200">{value}</p>
            </div>
        </div>
    );
    return href ? <a href={href} className="block">{content}</a> : content;
}

function Field({ label, ...props }) {
    return (
        <div>
            <label className="text-xs uppercase tracking-[0.14em] text-slate-400">{label}</label>
            <input
                {...props}
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition focus:border-indigo-300/45"
            />
        </div>
    );
}
