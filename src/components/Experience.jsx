import React from 'react';

const Experience = () => {
    const experiences = [
        {
            role: "Application Development Team Lead & Project Head",
            company: "Viewy Digital Pvt Ltd",
            period: "Oct 2023 – Present",
            description: "Leading mobile innovation and architecture. Highlights include:",
            highlights: [
                "Designed and developed a modern Expense Tracker & Budget Planner with daily-wise tracking and interactive dashboards.",
                "Built budget planning features with real-time insights (Remaining daily budget, Monthly spent vs budget).",
                "Architected a Split Expense / Bill Split Flow system replacing traditional flow with a guided multi-screen experience.",
                "Integrated light & dark themes inspired by modern fintech applications.",
                "Used Provider/Riverpod for state management and real-time updates."
            ]
        },
        {
            role: "Mobile Application Developer",
            company: "Viewy Digital Pvt Ltd",
            period: "Mar 2023 - Oct 2023",
            description: "Key Contributions:",
            highlights: [
                "Developed cross-platform applications using Flutter & React Native.",
                "Integrated REST APIs, Firebase services, and local storage.",
                "Focused on performance optimization and clean UI architecture.",
                "Delivered production-ready apps following best practices."
            ]
        },
        {
            role: "Assistant Software Engineer",
            company: "VAAS Intelligent Technology Services Pvt. Ltd",
            period: "Feb 2022 - Sep 2022",
            description: "Android & React Native Development. Worked on enterprise-grade applications and collaborated with cross-functional teams."
        },
        {
            role: "Native Android Developer",
            company: "Svaro Wellness | Ayurveda",
            period: "Jan 2021 - Feb 2022",
            description: "Started journey with Android native development. Built several consumer-facing apps and learned the fundamentals of mobile software engineering."
        }
    ];

    return (
        <section id="experience" className="py-20 bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">Career Path</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Professional Experience
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative border-l-2 border-indigo-200 dark:border-slate-700 ml-3 md:ml-0 space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative pl-8 md:pl-12">
                                <span className="absolute top-0 left-[-9px] bg-white dark:bg-slate-900 w-4 h-4 rounded-full border-2 border-indigo-600"></span>
                                <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                                        <span className="text-sm text-indigo-600 dark:text-indigo-400 font-mono mt-1 sm:mt-0 px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 rounded-full w-fit">
                                            {exp.period}
                                        </span>
                                    </div>
                                    <h4 className="text-md text-gray-700 dark:text-gray-300 font-medium mb-4">{exp.company}</h4>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                                        {exp.description}
                                    </p>
                                    {exp.highlights && (
                                        <ul className="list-disc list-outside ml-5 space-y-2 text-gray-600 dark:text-gray-400">
                                            {exp.highlights.map((highlight, idx) => (
                                                <li key={idx}>{highlight}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
