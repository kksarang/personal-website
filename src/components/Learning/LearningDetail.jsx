import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, Clock, BarChart, CheckCircle, Lock, PlayCircle, BookOpen, Layers } from 'lucide-react';
import { learningData } from '../../data/learningData';

const LearningDetail = () => {
    const { slug } = useParams();
    const course = learningData.find(c => c.slug === slug);

    if (!course) {
        return <Navigate to="/learning" replace />;
    }

    return (
        <div className="bg-white dark:bg-slate-900 min-h-screen pt-20">
            {/* Hero Section */}
            <div className={`relative ${course.bgColor} py-16`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link to="/learning" className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Learning
                    </Link>

                    <div className="md:flex md:items-start md:justify-between">
                        <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-4">
                                <span className="px-3 py-1 bg-white/50 dark:bg-black/20 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-white/10">
                                    {course.level}
                                </span>
                                <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                                    <Clock className="w-4 h-4 mr-1" /> {course.duration}
                                </div>
                            </div>

                            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                                {course.title}
                            </h1>
                            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed">
                                {course.overview}
                            </p>
                        </div>

                        <div className="mt-8 md:mt-0 md:ml-8">
                            <button className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-indigo-500/30 flex items-center">
                                <PlayCircle className="w-5 h-5 mr-2" /> Start Learning
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Modules */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                                <Layers className="w-6 h-6 mr-3 text-indigo-500" />
                                Course Modules
                            </h2>
                            <div className="bg-gray-50 dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 overflow-hidden">
                                {course.modules.map((module, index) => (
                                    <div
                                        key={index}
                                        className={`p-6 flex items-center justify-between border-b last:border-0 border-gray-100 dark:border-slate-700 ${module.status === 'Completed' ? 'bg-indigo-50/50 dark:bg-indigo-900/10' : ''}`}
                                    >
                                        <div className="flex items-center">
                                            {module.status === 'Completed' ? (
                                                <CheckCircle className="w-5 h-5 text-green-500 mr-4" />
                                            ) : (
                                                <div className="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-slate-600 mr-4"></div>
                                            )}
                                            <div>
                                                <h4 className={`font-medium ${module.status === 'Locked' ? 'text-gray-500 dark:text-gray-500' : 'text-gray-900 dark:text-white'}`}>
                                                    {module.title}
                                                </h4>
                                                <p className="text-xs text-gray-500 mt-1">{module.duration}</p>
                                            </div>
                                        </div>
                                        {module.status === 'Locked' && <Lock className="w-4 h-4 text-gray-300 dark:text-slate-600" />}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* What you'll learn */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                                <BookOpen className="w-6 h-6 mr-3 text-indigo-500" />
                                What You'll Learn
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {course.whatYouWillLearn.map((item, index) => (
                                    <div key={index} className="flex items-start p-4 bg-gray-50 dark:bg-slate-800 rounded-xl">
                                        <div className="w-2 h-2 mt-2 bg-indigo-500 rounded-full mr-3 shrink-0"></div>
                                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm sticky top-24">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {course.techStack.map((tech, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LearningDetail;
