import React from 'react';
import { Quote, Star } from 'lucide-react';

const TestimonialCard = ({ quote, author, role, company }) => (
    <article className="relative rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:border-indigo-300/35">
        <Quote className="absolute right-6 top-6 h-10 w-10 rotate-180 text-white/10" />
        <div className="mb-5 flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
        </div>
        <p className="relative z-10 mb-6 text-lg font-medium leading-relaxed text-slate-200">
            "{quote}"
        </p>
        <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 text-sm font-bold text-white">
                {author.charAt(0)}
            </div>
            <div>
                <h4 className="font-bold text-white">{author}</h4>
                <p className="text-sm text-slate-400">{role}, {company}</p>
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
                    <div className="mb-6 inline-flex rounded-full border border-indigo-300/25 bg-indigo-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-indigo-200">
                        Client trust
                    </div>
                    <h2 className="mb-6 text-4xl font-black text-white md:text-5xl">
                        Trusted by ambitious business teams
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
