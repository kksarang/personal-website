import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Mail, MapPin, MessageCircle, Phone, Send, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import HexenityPageShell from '../../components/KkSystems/HexenityPageShell';

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
        <HexenityPageShell
            badge="Contact Hexenity"
            title="Let’s scope your next digital build"
            subtitle="Share your goals and we will respond with a practical plan, timeline estimate, and recommended execution model."
            backLabel="Back to Home"
            onBack={() => navigate('/hexenity')}
            actions={(
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/35 bg-emerald-300/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-emerald-200">
                    <Sparkles className="h-3.5 w-3.5" />
                    Avg response &lt; 24h
                </span>
            )}
        >
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
                <section className="space-y-6">
                    <article className="premium-surface gradient-stroke rounded-3xl p-6">
                        <h2 className="text-xl font-bold text-white">Direct Contact</h2>
                        <div className="mt-5 space-y-4">
                            <ContactRow icon={Mail} label="Email" value="info.hexenity@gmail.com" href="mailto:info.hexenity@gmail.com" />
                            <ContactRow icon={Phone} label="Phone" value="+91 99952 54290" href="tel:+919995254290" />
                            <ContactRow icon={MapPin} label="Location" value="Kakkanad, Kochi, India" />
                        </div>
                    </article>

                    <article className="premium-surface rounded-3xl p-6">
                        <h3 className="text-lg font-bold text-white">How we engage</h3>
                        <ul className="mt-4 space-y-3 text-sm text-slate-300">
                            <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4.5 w-4.5 text-emerald-300" /> Discovery call to align on goals and constraints</li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4.5 w-4.5 text-emerald-300" /> Scope + timeline recommendation</li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4.5 w-4.5 text-emerald-300" /> Transparent milestone-based execution</li>
                        </ul>
                    </article>

                    <article className="rounded-3xl border border-indigo-300/25 bg-indigo-500/15 p-6">
                        <h3 className="text-lg font-bold text-white">Prefer a quick call?</h3>
                        <p className="mt-2 text-sm text-slate-200">Send a short note and we’ll schedule an introductory call with the right team lead.</p>
                        <button
                            onClick={() => navigate('/hexenity/work')}
                            className="mt-4 inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
                        >
                            See recent work
                            <ArrowRight className="h-4 w-4" />
                        </button>
                    </article>
                </section>

                <motion.section
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="premium-surface gradient-stroke rounded-3xl p-6 md:p-8"
                >
                    <h2 className="text-2xl font-black text-white">Project Inquiry</h2>
                    <p className="mt-2 text-slate-300">Tell us what you are building and where you need support.</p>

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
                            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.13em] text-white transition hover:bg-indigo-500 disabled:opacity-80"
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
                </motion.section>
            </div>
        </HexenityPageShell>
    );
}

function ContactRow({ icon: Icon, label, value, href }) {
    const content = (
        <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-slate-200 transition hover:border-indigo-300/35">
            <Icon className="mt-0.5 h-4.5 w-4.5 text-indigo-300" />
            <div>
                <p className="text-xs uppercase tracking-[0.12em] text-slate-400">{label}</p>
                <p className="text-sm">{value}</p>
            </div>
        </div>
    );
    return href ? <a href={href}>{content}</a> : content;
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
