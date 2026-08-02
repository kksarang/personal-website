import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
    {
        question: "What kind of businesses does Enitexa.Ai work with?",
        answer: "We partner with startups, agencies, non-technical businesses, and enterprise teams that need digital systems, applications, automation, branding, or growth infrastructure."
    },
    {
        question: "Do we need an internal tech team before starting?",
        answer: "No. Enitexa.Ai can act as your external innovation and execution team, handling discovery, design, engineering, launch, and optimization with clear governance."
    },
    {
        question: "Can Enitexa.Ai handle both technology and growth services?",
        answer: "Yes. We support product engineering plus digital growth capabilities including branding, SEO, campaign systems, and conversion-focused optimization."
    },
    {
        question: "How do you keep projects professional and predictable?",
        answer: "Every engagement follows milestone planning, sprint reviews, QA checkpoints, architecture governance, and transparent status reporting."
    },
    {
        question: "Can you modernize an existing product or broken project?",
        answer: "Absolutely. We take over existing codebases, improve architecture and UX, fix performance issues, and move products toward scalable and maintainable standards."
    },
    {
        question: "Do you provide post-launch support and growth planning?",
        answer: "Yes. We provide ongoing support, analytics review, performance optimization, and strategic roadmap guidance after launch."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // SEO Schema Markup Generation
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <section className="enitexa-editorial relative border-t border-white/[0.06] bg-[#0B0F19] py-20 sm:py-28">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="relative z-10 mx-auto max-w-[90rem] px-4 sm:px-10 lg:px-16">
                <div className="mb-12 max-w-3xl sm:mb-16">
                    <div className="pf-mono mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-slate-500 sm:text-[11px]">
                        <span className="text-indigo-300">(07)</span>
                        <span>FAQ</span>
                        <span className="h-px flex-1 bg-white/[0.08]" />
                    </div>
                    <h2 className="pf-display text-[clamp(1.85rem,4.5vw,3.1rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-white">
                        Questions, answered.
                    </h2>
                    <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
                        How we work, who we partner with, and what to expect from an Enitexa.Ai engagement.
                    </p>
                </div>

                <div className="max-w-4xl border-t border-white/[0.08]">
                    {faqData.map((faq, index) => {
                        const isOpen = activeIndex === index;
                        return (
                            <div key={index} className="border-b border-white/[0.08]">
                                <button
                                    className="group flex w-full items-baseline gap-4 py-6 text-left focus:outline-none sm:gap-8"
                                    onClick={() => toggleFAQ(index)}
                                    aria-expanded={isOpen}
                                >
                                    <span className={`pf-mono text-xs transition-colors duration-300 ${isOpen ? 'text-indigo-300' : 'text-slate-500'}`}>
                                        0{index + 1}
                                    </span>
                                    <span className={`pf-display flex-1 text-base font-bold transition-colors duration-300 sm:text-xl ${isOpen ? 'text-white' : 'text-white/90 group-hover:text-white'}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`flex-shrink-0 self-center transition-colors duration-300 ${isOpen ? 'text-indigo-300' : 'text-slate-600 group-hover:text-slate-300'}`}>
                                        {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                                    </div>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
                                >
                                    <p className="max-w-2xl pl-10 text-sm leading-relaxed text-slate-400 sm:pl-14 sm:text-base">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
