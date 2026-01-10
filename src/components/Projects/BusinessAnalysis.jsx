import React from 'react';
import { Target, Lightbulb, Zap } from 'lucide-react';

const BusinessAnalysis = ({ project }) => {
    return (
        <section className="py-24 bg-gray-50 dark:bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-sm font-bold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase mb-2">Problem & Solution</h2>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Business & Technical Analysis</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* The Problem */}
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700">
                        <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/30 rounded-xl flex items-center justify-center mb-6 text-rose-600 dark:text-rose-400">
                            <Target className="w-6 h-6" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">The Challenge</h4>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {project.businessAnalysis.problem}
                        </p>
                    </div>

                    {/* The Solution */}
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-md border-t-4 border-indigo-500 relative transform md:-translate-y-4">
                        <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-400">
                            <Lightbulb className="w-6 h-6" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">The Solution</h4>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {project.businessAnalysis.solution}
                        </p>
                    </div>

                    {/* The Impact */}
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700">
                        <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400">
                            <Zap className="w-6 h-6" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">The Impact</h4>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {project.businessAnalysis.impact}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessAnalysis;
