import React from 'react';
import { Briefcase, CheckCircle2 } from 'lucide-react';

const RoleOwnership = ({ project }) => {
    return (
        <section className="py-24 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-3xl p-8 md:p-16 text-white overflow-hidden relative">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex items-center space-x-3 mb-6">
                                <Briefcase className="w-6 h-6 text-indigo-400" />
                                <span className="text-sm font-bold tracking-widest text-indigo-300 uppercase">My Role & Ownership</span>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                                {project.role.title}
                            </h3>
                            <p className="text-lg text-indigo-100/80 leading-relaxed mb-8">
                                {project.role.summary}
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                            <h4 className="font-semibold text-white mb-6">Key Responsibilities</h4>
                            <ul className="space-y-4">
                                {project.role.responsibilities.map((resp, idx) => (
                                    <li key={idx} className="flex items-start group">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 mr-3 mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                                        <span className="text-white/90 font-light">{resp}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoleOwnership;
