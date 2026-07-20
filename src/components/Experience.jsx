import React from 'react';

const Experience = () => {
    const experiences = [
        {
            role: 'Application Development Team Lead & Project Head',
            company: 'Viewy Digital Pvt Ltd',
            period: 'Oct 2023 – Present',
            description: 'Leading mobile innovation and architecture.',
            highlights: [
                'Designed and developed a modern Expense Tracker & Budget Planner with daily-wise tracking and interactive dashboards.',
                'Built budget planning features with real-time insights (Remaining daily budget, Monthly spent vs budget).',
                'Architected a Split Expense / Bill Split Flow system replacing traditional flow with a guided multi-screen experience.',
                'Integrated light & dark themes inspired by modern fintech applications.',
                'Used Provider/Riverpod for state management and real-time updates.',
            ],
        },
        {
            role: 'Mobile Application Developer',
            company: 'Viewy Digital Pvt Ltd',
            period: 'Mar 2023 – Oct 2023',
            description: 'Cross-platform delivery and API integration.',
            highlights: [
                'Developed cross-platform applications using Flutter & React Native.',
                'Integrated REST APIs, Firebase services, and local storage.',
                'Focused on performance optimization and clean UI architecture.',
                'Delivered production-ready apps following best practices.',
            ],
        },
        {
            role: 'Assistant Software Engineer',
            company: 'VAAS Intelligent Technology Services Pvt. Ltd',
            period: 'Feb 2022 – Sep 2022',
            description: 'Android & React Native on enterprise-grade applications with cross-functional teams.',
        },
        {
            role: 'Native Android Developer',
            company: 'Svaro Wellness | Ayurveda',
            period: 'Jan 2021 – Feb 2022',
            description: 'Started with Android native development. Built consumer-facing apps and learned the fundamentals of mobile software engineering.',
        },
    ];

    return (
        <section id="experience" className="relative border-t border-[#111110]/10 py-24 dark:border-white/10 sm:py-28">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <p className="port-mono mb-4 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#3f6212] dark:text-white/40">
                    <span className="dark:text-[#B8F03A]">(04)</span> Career
                </p>
                <h2 className="port-display mb-12 text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-[#111110] dark:text-[#F4F4F0]">
                    Professional experience
                </h2>

                <div className="border-t border-[#111110]/12 dark:border-white/10">
                    {experiences.map((exp, index) => (
                        <article
                            key={`${exp.company}-${exp.period}`}
                            className="group grid gap-4 border-b border-[#111110]/12 py-10 dark:border-white/10 sm:grid-cols-[200px_1fr] sm:gap-10 lg:grid-cols-[220px_1fr]"
                        >
                            <p className="port-mono inline-flex h-fit w-fit items-center rounded-full bg-[#3f6212]/12 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#365314] dark:bg-[#B8F03A]/15 dark:text-[#B8F03A]">
                                {exp.period}
                            </p>
                            <div>
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="port-display text-xl font-bold text-[#111110] transition-transform duration-300 group-hover:translate-x-1 dark:text-white sm:text-2xl">
                                            {exp.role}
                                        </h3>
                                        <p className="mt-1 text-sm font-semibold text-[#3a3a36] dark:text-white/55">{exp.company}</p>
                                    </div>
                                    <span className="port-mono hidden text-[11px] font-semibold text-[#3a3a36] dark:text-white/35 sm:block">
                                        0{index + 1}
                                    </span>
                                </div>
                                <p className="mt-3 text-base leading-relaxed text-[#3a3a36] dark:text-white/55">{exp.description}</p>
                                {exp.highlights ? (
                                    <ul className="mt-5 space-y-2.5">
                                        {exp.highlights.map((highlight) => (
                                            <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-[#3a3a36] dark:text-white/50">
                                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3f6212] dark:bg-[#B8F03A]" />
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                ) : null}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
