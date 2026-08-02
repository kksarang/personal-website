import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AboutKkSystems = () => {
    const navigate = useNavigate();

    const points = [
        'Modern & clean development',
        'Performance-focused apps',
        'SEO-optimized websites',
        'Scalable architecture',
        'Creative brand positioning',
        'Long-term technical support',
    ];

    return (
        <section
            id="about-enitexa"
            className="relative overflow-hidden border-t border-[#111110]/10 bg-[#e8e8e2] py-24 text-[#111110] dark:border-white/10 dark:bg-[#111110] dark:text-[#F4F4F0] sm:py-28"
        >
            <div className="port-lime-wash opacity-40 dark:opacity-100" aria-hidden="true" />
            <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
                <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                    <div>
                        <p className="port-mono mb-4 text-[11px] uppercase tracking-[0.35em] text-[#3a3a36] dark:text-white/40">
                            <span className="port-accent">(05)</span> Venture
                        </p>
                        <h2 className="port-display text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.05] text-[#111110] dark:text-[#F4F4F0]">
                            Enitexa.Ai — the studio behind the products.
                        </h2>
                        <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#3a3a36] dark:text-white/50">
                            A digital &amp; software solutions company delivering mobile apps, websites, UI/UX, branding, and growth systems under one partner model.
                        </p>
                        <button
                            type="button"
                            onClick={() => navigate('/enitexa.ai')}
                            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#111110] px-7 py-3.5 text-sm font-semibold text-[#B8F03A] transition hover:bg-[#3f6212] hover:text-white dark:bg-[#B8F03A] dark:text-[#09090b] dark:hover:bg-white"
                        >
                            Explore Enitexa.Ai
                            <ArrowUpRight className="h-4 w-4" />
                        </button>
                    </div>

                    <ul className="grid gap-3 sm:grid-cols-2">
                        {points.map((item) => (
                            <li
                                key={item}
                                className="flex items-start gap-3 rounded-xl border border-[#111110]/12 bg-white px-4 py-3.5 text-sm text-[#111110] dark:border-white/10 dark:bg-white/[0.04] dark:text-white/70"
                            >
                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#3f6212] dark:text-[#B8F03A]" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default AboutKkSystems;
