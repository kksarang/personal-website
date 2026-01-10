import React from 'react';
import { Target, Lightbulb, AlertCircle, Zap, Lock, Cloud, Layers, CheckCircle } from 'lucide-react';

const IconMap = {
    'Zap': Zap,
    'Lock': Lock,
    'Cloud': Cloud,
    'Layers': Layers,
    'Default': Lightbulb
};

const getIcon = (name) => IconMap[name] || IconMap['Default'];

const CaseStudyContent = ({ project }) => {
    return (
        <div className="py-20 bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Intro Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                    <div>
                        <h2 className="text-sm font-bold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase mb-3">Project Overview</h2>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Why this project exists</h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                            {project.intro.problem}
                        </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-slate-800 p-8 rounded-2xl border-l-4 border-indigo-500">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Lightbulb className="w-6 h-6 mr-2 text-indigo-500" />
                            The Solution
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {project.intro.solution}
                        </p>
                    </div>
                </div>

                {/* Challenges & Solutions */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase mb-2">Engineering Deep Dive</h2>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white">Business & Technical Challenges</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {project.challenges.map((challenge, idx) => {
                            const ChallengeIcon = getIcon(challenge.icon);
                            return (
                                <div key={idx} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-indigo-50 dark:bg-slate-700 rounded-xl flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-400">
                                        <ChallengeIcon className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{challenge.title}</h4>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                                        {challenge.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Role & Ownership */}
                <div className="bg-indigo-900 rounded-3xl p-8 md:p-16 text-white text-center md:text-left">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="flex-1">
                            <h2 className="text-sm font-bold text-indigo-300 tracking-wide uppercase mb-2">My Role</h2>
                            <h3 className="text-3xl font-bold mb-6">{project.role.title}</h3>
                            <p className="text-indigo-100 text-lg mb-8 max-w-2xl">
                                I took ownership of the entire mobile lifecycle, from architectural decisions to the final Play Store rollout.
                            </p>
                        </div>
                        <div className="flex-1 w-full bg-white/5 p-8 rounded-2xl border border-white/10">
                            <ul className="space-y-4">
                                {project.role.responsibilities.map((resp, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <Target className="w-5 h-5 text-green-400 mr-3 mt-1 shrink-0" />
                                        <span className="text-white/90">{resp}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CaseStudyContent;
