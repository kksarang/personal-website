import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
    {
        question: "What kind of businesses does Hexenity work with?",
        answer: "We partner with startups, agencies, non-technical businesses, and enterprise teams that need digital systems, applications, automation, branding, or growth infrastructure."
    },
    {
        question: "Do we need an internal tech team before starting?",
        answer: "No. Hexenity can act as your external innovation and execution team, handling discovery, design, engineering, launch, and optimization with clear governance."
    },
    {
        question: "Can Hexenity handle both technology and growth services?",
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
        <section className="relative bg-[#0A0B14] py-24">
            {/* Inject SEO Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-indigo-600/5 rounded-bl-[100px] pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <div className="mb-6 inline-flex rounded-full border border-indigo-300/25 bg-indigo-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-indigo-200">
                        FAQ
                    </div>
                    <h2 className="mb-6 text-4xl font-black text-white md:text-5xl">
                        Frequently asked questions
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-400">
                        Clear answers about our execution model, service coverage, and how Hexenity supports business growth.
                    </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 px-5 py-2 sm:px-8">
                    {faqData.map((faq, index) => {
                        const isOpen = activeIndex === index;
                        return (
                            <div
                                key={index}
                                className="border-b border-white/10 py-5"
                            >
                                <button
                                    className="w-full flex items-center justify-between text-left group focus:outline-none"
                                    onClick={() => toggleFAQ(index)}
                                    aria-expanded={isOpen}
                                >
                                    <span className={`text-base font-semibold transition-colors duration-300 sm:text-lg ${isOpen ? 'text-indigo-300' : 'text-white group-hover:text-indigo-300'}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`ml-6 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-indigo-300' : 'text-gray-500 group-hover:text-indigo-300'}`}>
                                        {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                    </div>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}
                                >
                                    <p className="text-slate-300 leading-relaxed pr-8">
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
