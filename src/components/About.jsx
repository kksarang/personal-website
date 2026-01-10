import React from 'react';
import { User, Briefcase, Award, MapPin } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">About Me</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Who am I?
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <div className="prose prose-lg dark:prose-invert">
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                I am a dedicated <strong>Mobile Application Developer</strong> and <strong>Team Lead</strong> with a passion for building robust and user-friendly applications. With years of experience in the mobile development landscape, I have successfully delivered projects ranging from native Android apps to cross-platform solutions using Flutter and React Native.
                            </p>
                            {/* <p className="text-gray-600 dark:text-gray-300 mb-6">
                                My philosophy centers on writing clean, maintainable code and dealing with complex problems by breaking them down into simpler, manageable tasks. As a leader, I mentor junior developers and ensure best practices are followed to maintain high-quality codebases.
                            </p> */}

                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
                                    <Briefcase className="w-8 h-8 text-indigo-600 mb-2" />
                                    <h3 className="font-bold text-gray-900 dark:text-white">Experience</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Mobile Team Lead</p>
                                </div>
                                <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
                                    <User className="w-8 h-8 text-indigo-600 mb-2" />
                                    <h3 className="font-bold text-gray-900 dark:text-white">Role</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Full Stack Mobile Dev</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 md:order-2 flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 transform rotate-6 rounded-2xl opacity-20 dark:opacity-40"></div>
                            <div className="relative bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700">
                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <MapPin className="w-6 h-6 text-gray-400" />
                                        <div>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                                            <p className="font-medium text-gray-900 dark:text-white">India</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <Award className="w-6 h-6 text-gray-400" />
                                        <div>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Specialization</p>
                                            <p className="font-medium text-gray-900 dark:text-white">Mobile Architecture</p>
                                        </div>
                                    </div>
                                    <hr className="border-gray-100 dark:border-slate-700" />
                                    <p className="text-gray-500 dark:text-gray-400 italic">
                                        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
