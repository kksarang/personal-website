import React from 'react';
import { TrendingUp, Users, Zap, Award } from 'lucide-react';

const ResultsSection = ({ project }) => {
    if (!project.results) return null;

    return (
        <section className="py-24 bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase mb-2">Outcomes</h2>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Results & Learnings</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Technical Wins */}
                    <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Zap className="w-32 h-32" />
                        </div>
                        <div className="relative z-10">
                            <h4 className="text-xl font-bold mb-6 flex items-center">
                                <Zap className="w-6 h-6 mr-3 text-yellow-400" />
                                Technical Achievements
                            </h4>
                            <ul className="space-y-4">
                                {project.results.technical.map((result, idx) => (
                                    <li key={idx} className="flex items-center text-lg font-light border-b border-white/10 pb-2 last:border-0">
                                        <span className="text-green-400 mr-4 text-xl">✓</span>
                                        {result}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Business/User Wins */}
                    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Users className="w-32 h-32" />
                        </div>
                        <div className="relative z-10">
                            <h4 className="text-xl font-bold mb-6 flex items-center">
                                <TrendingUp className="w-6 h-6 mr-3 text-green-300" />
                                Business Impact
                            </h4>
                            <ul className="space-y-4">
                                {project.results.business.map((result, idx) => (
                                    <li key={idx} className="flex items-center text-lg font-light border-b border-white/10 pb-2 last:border-0">
                                        <Award className="w-5 h-5 text-yellow-300 mr-4" />
                                        {result}
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

export default ResultsSection;
