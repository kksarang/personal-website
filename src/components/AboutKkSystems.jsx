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
        <section id="about-hexenity" className="relative overflow-hidden border-t border-[#111110]/10 bg-[#111110] py-24 text-[#F4F4F0] dark:border-white/10 sm:py-28">
            <div className="port-lime-wash" aria-hidden="true" />
            <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
                <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                    <div>
                        <p className="port-mono mb-4 text-[11px] uppercase tracking-[0.35em] text-white/40">
                            <span className="text-[#B8F03A]">(05)</span> Venture
                        </p>
                        <h2 className="port-display text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.05]">
                            Hexenity — the studio behind the products.
                        </h2>
                        <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/50">
                            A digital &amp; software solutions company delivering mobile apps, websites, UI/UX, branding, and growth systems under one partner model.
                        </p>
                        <button
                            type="button"
                            onClick={() => navigate('/hexenity')}
                            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#B8F03A] px-7 py-3.5 text-sm font-semibold text-[#09090b] transition hover:bg-white"
                        >
                            Explore Hexenity
                            <ArrowUpRight className="h-4 w-4" />
                        </button>
                    </div>

                    <ul className="grid gap-3 sm:grid-cols-2">
                        {points.map((item) => (
                            <li key={item} className="flex items-start gap-3 border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white/70">
                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#B8F03A]" />
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
