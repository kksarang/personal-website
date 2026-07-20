import React from 'react';
import { Briefcase, MapPin, Award } from 'lucide-react';

const About = () => {
    const facts = [
        { icon: Briefcase, label: 'Role', value: 'Mobile Team Lead' },
        { icon: Award, label: 'Focus', value: 'Mobile Architecture' },
        { icon: MapPin, label: 'Based', value: 'India' },
    ];

    return (
        <section id="about" className="relative border-t border-[#111110]/10 py-24 dark:border-white/10 sm:py-28">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
                    <div>
                        <p className="port-mono mb-4 text-[11px] uppercase tracking-[0.35em] text-[#6b6b63] dark:text-white/40">
                            <span className="text-[#B8F03A]">(02)</span> About
                        </p>
                        <h2 className="port-display text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.05] text-[#111110] dark:text-[#F4F4F0]">
                            Who I am when the IDE is open.
                        </h2>
                        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#6b6b63] dark:text-white/55">
                            I am a dedicated <strong className="font-semibold text-[#111110] dark:text-white">Mobile Application Developer</strong> and{' '}
                            <strong className="font-semibold text-[#111110] dark:text-white">Team Lead</strong> with a passion for building robust,
                            user-friendly applications. From native Android to Flutter and React Native, I deliver products that hold up in production.
                        </p>
                        <p className="mt-4 max-w-xl leading-relaxed text-[#6b6b63] dark:text-white/45">
                            Clean architecture, clear ownership, and experiences that feel effortless on every device.
                        </p>
                    </div>

                    <div className="divide-y divide-[#111110]/10 border-y border-[#111110]/10 dark:divide-white/10 dark:border-white/10">
                        {facts.map((fact) => (
                            <div key={fact.label} className="flex items-center gap-5 py-6">
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#111110]/12 text-[#111110] dark:border-white/15 dark:text-[#B8F03A]">
                                    <fact.icon className="h-5 w-5" />
                                </span>
                                <div>
                                    <p className="port-mono text-[10px] uppercase tracking-[0.22em] text-[#6b6b63] dark:text-white/40">{fact.label}</p>
                                    <p className="port-display mt-1 text-lg font-bold text-[#111110] dark:text-white">{fact.value}</p>
                                </div>
                            </div>
                        ))}
                        <blockquote className="py-6">
                            <p className="port-display text-lg font-semibold leading-snug text-[#111110] dark:text-white/90">
                                “Good programmers write code that humans can understand.”
                            </p>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
