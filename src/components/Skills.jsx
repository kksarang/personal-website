import React from 'react';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Mobile Development',
            skills: ['Flutter', 'Android (Java/Kotlin)', 'React Native', 'iOS (Swift/Obj-C)'],
        },
        {
            title: 'Frontend & Web',
            skills: ['React.js', 'HTML5 & CSS3', 'JavaScript (ES6+)'],
        },
        {
            title: 'Backend & Services',
            skills: ['Firebase', 'REST APIs', 'Node.js'],
        },
        {
            title: 'Tools & IDEs',
            skills: ['Android Studio', 'VS Code', 'Xcode', 'IntelliJ IDEA', 'Git & GitHub'],
        },
    ];

    return (
        <section id="skills" className="relative border-t border-[#111110]/10 bg-[#ecece6] py-24 dark:border-white/10 dark:bg-white/[0.03] sm:py-28">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <p className="port-mono mb-4 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#3f6212] dark:text-white/40">
                    <span className="dark:text-[#B8F03A]">(03)</span> Expertise
                </p>
                <h2 className="port-display mb-12 text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-[#111110] dark:text-[#F4F4F0]">
                    Skills & technologies
                </h2>

                <div className="space-y-10">
                    {skillCategories.map((category, catIdx) => (
                        <div key={category.title}>
                            <div className="mb-4 flex items-baseline gap-4">
                                <span className="port-mono text-[11px] font-bold text-[#3f6212] dark:text-[#B8F03A]">
                                    0{catIdx + 1}
                                </span>
                                <h3 className="port-display text-xl font-bold text-[#111110] dark:text-white">{category.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2.5">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="port-skill-row cursor-default rounded-full border-2 border-[#111110]/15 bg-white px-4 py-2.5 text-sm font-medium text-[#111110] shadow-sm dark:border-white/15 dark:bg-white/[0.05] dark:text-white/90 dark:shadow-none"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
