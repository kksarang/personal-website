import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Github, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
    const [status, setStatus] = useState('idle');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        const formData = new FormData(e.target);

        try {
            const response = await fetch('https://formsubmit.co/ajax/info.hexenity@gmil.com', {
                method: 'POST',
                body: formData,
                headers: { Accept: 'application/json' },
            });

            if (response.ok) {
                setStatus('success');
                e.target.reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setStatus('error');
        }
    };

    const fieldClass =
        'mt-2 w-full rounded-xl border-2 border-[#111110]/20 bg-white px-4 py-3.5 text-base text-[#111110] placeholder:text-[#6b6b63] outline-none transition focus:border-[#3f6212] dark:border-white/20 dark:bg-[#121214] dark:text-white dark:placeholder:text-white/40 dark:focus:border-[#B8F03A]';

    const labelClass =
        'port-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#111110] dark:text-white/70';

    return (
        <section id="contact" className="relative border-t border-[#111110]/10 py-24 dark:border-white/10 sm:py-28">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <p className="port-mono mb-4 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#3f6212] dark:text-white/40">
                    <span className="dark:text-[#B8F03A]">(07)</span> Contact
                </p>
                <h2 className="port-display text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-[#111110] dark:text-[#F4F4F0]">
                    Let&apos;s talk about what you&apos;re building.
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-[#3a3a36] dark:text-white/55">
                    Open to collaborations, product roles, and serious project work. Drop a note — I&apos;ll get back soon.
                </p>

                <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
                    <aside className="space-y-8">
                        <div>
                            <p className={labelClass}>Email</p>
                            <a href="mailto:kksarangrajan@gmail.com" className="mt-2 inline-flex items-center gap-2 text-lg font-semibold text-[#111110] transition hover:text-[#3f6212] dark:text-white dark:hover:text-[#B8F03A]">
                                <Mail className="h-4 w-4 text-[#3f6212] dark:text-[#B8F03A]" />
                                kksarangrajan@gmail.com
                            </a>
                        </div>
                        <div>
                            <p className={labelClass}>Location</p>
                            <p className="mt-2 inline-flex items-center gap-2 text-lg font-semibold text-[#111110] dark:text-white">
                                <MapPin className="h-4 w-4 text-[#3f6212] dark:text-[#B8F03A]" />
                                India
                            </p>
                        </div>
                        <div>
                            <p className={`${labelClass} mb-3`}>Socials</p>
                            <div className="flex gap-4">
                                <a href="https://github.com/kksarang" target="_blank" rel="noopener noreferrer" className="text-[#3a3a36] transition hover:text-[#111110] dark:text-white/50 dark:hover:text-[#B8F03A]" aria-label="GitHub"><Github className="h-5 w-5" /></a>
                                <a href="https://www.linkedin.com/in/sarang-rajan/" target="_blank" rel="noopener noreferrer" className="text-[#3a3a36] transition hover:text-[#111110] dark:text-white/50 dark:hover:text-[#B8F03A]" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
                                <a href="https://www.instagram.com/sarang_rajan/" target="_blank" rel="noopener noreferrer" className="text-[#3a3a36] transition hover:text-[#111110] dark:text-white/50 dark:hover:text-[#B8F03A]" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
                            </div>
                        </div>
                    </aside>

                    <div className="rounded-3xl border border-[#111110]/15 bg-white p-7 shadow-[0_8px_30px_rgba(17,17,16,0.06)] dark:border-white/10 dark:bg-[#121214] dark:shadow-none sm:p-9">
                        {status === 'success' ? (
                            <div className="flex flex-col items-center justify-center py-16 text-center">
                                <CheckCircle className="mb-4 h-12 w-12 text-[#3f6212] dark:text-[#B8F03A]" />
                                <h3 className="port-display text-2xl font-bold text-[#111110] dark:text-white">Message sent</h3>
                                <p className="mt-2 text-[#3a3a36] dark:text-white/50">I&apos;ll get back to you soon.</p>
                                <button type="button" onClick={() => setStatus('idle')} className="mt-6 text-sm font-semibold text-[#3f6212] underline dark:text-[#B8F03A]">
                                    Send another
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="_template" value="table" />

                                <div className="grid gap-5 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="name" className={labelClass}>Name</label>
                                        <input type="text" id="name" name="name" required className={fieldClass} placeholder="Your name" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className={labelClass}>Email</label>
                                        <input type="email" id="email" name="email" required className={fieldClass} placeholder="you@company.com" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="service_interest" className={labelClass}>Interest</label>
                                    <select id="service_interest" name="service_interest" required className={fieldClass}>
                                        <option value="">Select a service…</option>
                                        <option value="Mobile App Development">Mobile App Development</option>
                                        <option value="Website Development">Website Development</option>
                                        <option value="General Enquiry">General Enquiry</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className={labelClass}>Message</label>
                                    <textarea id="message" name="message" rows="5" required className={`${fieldClass} resize-none`} placeholder="Tell me about the project…" />
                                </div>

                                {status === 'error' && (
                                    <div className="flex items-center text-sm text-red-600 dark:text-red-400">
                                        <AlertCircle className="mr-2 h-4 w-4" />
                                        Something went wrong. Please try again.
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#111110] px-6 py-4 text-sm font-semibold text-[#B8F03A] transition hover:bg-[#3f6212] hover:text-white disabled:opacity-70 dark:bg-[#B8F03A] dark:text-[#09090b] dark:hover:bg-white"
                                >
                                    {status === 'submitting' ? 'Sending…' : 'Send message'}
                                    <Send className="h-4 w-4" />
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
