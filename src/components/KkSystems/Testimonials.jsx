import React from 'react';
import { Quote, Star } from 'lucide-react';

const TestimonialCard = ({ quote, author, role, company }) => (
    <article className="group relative flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-9 transition-all duration-500 hover:-translate-y-1.5 hover:border-indigo-300/35 hover:bg-white/[0.05]">
        <Quote className="mb-7 h-9 w-9 rotate-180 text-indigo-400/50 transition-colors duration-500 group-hover:text-indigo-300" />
        <p className="pf-display relative z-10 mb-8 flex-1 text-xl font-medium leading-snug text-slate-100">
            "{quote}"
        </p>
        <div className="flex items-center justify-between border-t border-white/[0.07] pt-6">
            <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 text-sm font-bold text-white">
                    {author.charAt(0)}
                </div>
                <div>
                    <h4 className="text-sm font-semibold text-white">{author}</h4>
                    <p className="pf-mono text-[9px] uppercase tracking-[0.18em] text-slate-500">
                        {role} — {company}
                    </p>
                </div>
            </div>
            <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-3 w-3 fill-amber-400 text-amber-400" />
                ))}
            </div>
        </div>
    </article>
);

const Testimonials = () => {
    return (
        <section className="relative overflow-hidden bg-[#0F111A] py-24">
            <div className="absolute -right-24 -top-16 h-80 w-80 rounded-full bg-indigo-500/10 blur-[120px]" />
            <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <div className="pf-mono mb-6 flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.35em] text-slate-400">
                        <span className="text-indigo-300">(06)</span>
                        <span>Client trust</span>
                    </div>
                    <h2 className="pf-display mb-6 text-[clamp(1.7rem,3.2vw,2.5rem)] font-bold text-white">
                        Trusted by ambitious <span className="pf-outline-text">business teams.</span>
                    </h2>
                    <p className="text-lg text-slate-400">
                        Strategic collaboration, transparent execution, and measurable outcomes for modern businesses.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <TestimonialCard
                        quote="Hexenity became our external product and technology team. Their structured process made delivery predictable and premium."
                        author="Rahul"
                        role="Director"
                        company="Automotive Brand"
                    />
                    <TestimonialCard
                        quote="From UX redesign to engineering and launch, they helped us improve lead conversion and customer confidence."
                        author="Neha"
                        role="Marketing Lead"
                        company="Healthcare Group"
                    />
                    <TestimonialCard
                        quote="Their communication cadence and governance model gave our team enterprise-level visibility without hiring a large in-house tech department."
                        author="Arjun"
                        role="Founder"
                        company="Growth Startup"
                    />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
