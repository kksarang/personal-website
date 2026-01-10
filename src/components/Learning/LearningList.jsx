import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, BarChart } from 'lucide-react';
import { learningData } from '../../data/learningData';

const LearningList = () => {
    return (
        <div className="pt-24 pb-20 bg-gray-50 dark:bg-slate-900 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">Knowledge Base</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Learning Pathways
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto">
                        Deep dives into Mobile Architecture, Flutter, and Native Development.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {learningData.map((course) => (
                        <Link
                            to={`/learning/${course.slug}`}
                            key={course.slug}
                            className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700 flex flex-col"
                        >
                            <div className={`h-32 ${course.bgColor} flex items-center justify-center`}>
                                <course.icon className={`w-12 h-12 ${course.color}`} />
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center justify-between mb-4">
                                    <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300`}>
                                        {course.level}
                                    </span>
                                    <div className="flex items-center text-gray-400 text-xs">
                                        <Clock className="w-3 h-3 mr-1" />
                                        {course.duration}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                    {course.title}
                                </h3>

                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-1">
                                    {course.description}
                                </p>

                                <div className="flex items-center text-indigo-600 dark:text-indigo-400 font-medium text-sm mt-auto">
                                    View Learning
                                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LearningList;
