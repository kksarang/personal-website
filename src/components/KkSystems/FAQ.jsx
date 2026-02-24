import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
    {
        question: "What mobile app development services do you offer?",
        answer: "We provide custom mobile app development services including Flutter app development, Android applications, cross-platform solutions, and backend-integrated mobile systems designed for scalability and performance."
    },
    {
        question: "Do you develop both Android and iOS applications?",
        answer: "Yes. We build cross-platform applications using Flutter, ensuring native-like performance on both Android and iOS devices while maintaining a single codebase."
    },
    {
        question: "What technologies do you use for backend development?",
        answer: "We use modern backend technologies including Firebase, REST APIs, Node.js, cloud-based databases, and secure authentication systems to ensure high-performance and scalable infrastructure."
    },
    {
        question: "Can you build scalable web applications?",
        answer: "Yes. We design and develop scalable web applications using modern frontend frameworks and secure backend architectures optimized for performance and cloud deployment."
    },
    {
        question: "How long does it take to develop a mobile app?",
        answer: "Development timelines depend on complexity, features, and integrations. A standard mobile app may take 4–8 weeks, while complex enterprise applications may take longer."
    },
    {
        question: "Do you provide post-launch support?",
        answer: "Yes. We offer maintenance, performance monitoring, feature upgrades, and technical support after deployment."
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
        <section className="py-[100px] bg-[#0A0B14] relative">
            {/* Inject SEO Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-indigo-600/5 rounded-bl-[100px] pointer-events-none" />

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Everything you need to know about our mobile app development, backend engineering, and engagement models.
                    </p>
                </div>

                <div className="flex flex-col">
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
                                    <span className={`text-lg font-semibold transition-colors duration-300 ${isOpen ? 'text-indigo-400' : 'text-white group-hover:text-indigo-400'}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`ml-6 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-indigo-400' : 'text-gray-500 group-hover:text-indigo-400'}`}>
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
