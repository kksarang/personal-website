import React from 'react';
import { Smartphone, Code, Database, Globe, Layers, Settings } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Mobile Development",
            icon: <Smartphone className="w-8 h-8 text-indigo-500" />,
            skills: ["Flutter", "Android (Java/Kotlin)", "React Native", "iOS (Swift/Obj-C)"]
        },
        {
            title: "Frontend & Web",
            icon: <Globe className="w-8 h-8 text-blue-500" />,
            skills: ["React.js", "HTML5 & CSS3", "JavaScript (ES6+)"]
        },
        {
            title: "Backend & Services",
            icon: <Database className="w-8 h-8 text-green-500" />,
            skills: ["Firebase", "REST APIs", "Node.js (Basic)"]
        },
        {
            title: "Tools & IDEs",
            icon: <Settings className="w-8 h-8 text-orange-500" />,
            skills: ["Android Studio", "VS Code", "Xcode", "IntelliJ IDEA", "Git & GitHub"]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-gray-50 dark:bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">My Expertise</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Skills & Technologies
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 dark:border-slate-700"
                        >
                            <div className="flex items-center justify-center w-12 h-12 bg-gray-50 dark:bg-slate-800 rounded-lg mb-6">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{category.title}</h3>
                            <ul className="space-y-3">
                                {category.skills.map((skill, idx) => (
                                    <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                                        <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
