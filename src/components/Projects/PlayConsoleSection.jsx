import React from 'react';
import { Layout, Smartphone, Star, Download, Calendar } from 'lucide-react';

const PlayConsoleSection = ({ project }) => {
    return (
        <div id="play-console-section" className="py-20 bg-gray-50 dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-green-600 dark:text-green-500 tracking-wide uppercase mb-2">Publishing & Distribution</h2>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">Google Play Console Ownership</p>
                </div>

                <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-gray-200 dark:border-slate-700 overflow-hidden">
                    {/* Mock Console Header */}
                    <div className="bg-gray-100 dark:bg-slate-900 px-6 py-4 border-b border-gray-200 dark:border-slate-700 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-white">
                                <Layout className="w-5 h-5" />
                            </div>
                            <span className="font-semibold text-gray-700 dark:text-gray-200">Google Play Console</span>
                        </div>
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                    </div>

                    <div className="p-8 md:p-12">
                        <div className="flex flex-col md:flex-row items-center gap-12">

                            {/* Left: App Identity */}
                            <div className="text-center md:text-left">
                                <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mx-auto md:mx-0 mb-6 shadow-lg flex items-center justify-center">
                                    <Smartphone className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{project.storeDetails.appName}</h3>
                                <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold uppercase rounded-full tracking-wide">
                                    Production
                                </span>
                            </div>

                            {/* Right: Metrics Grid */}
                            <div className="flex-1 w-full grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div className="p-4 bg-gray-50 dark:bg-slate-900 rounded-xl text-center">
                                    <Download className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{project.storeDetails.downloads}</div>
                                    <div className="text-xs text-gray-500">Downloads</div>
                                </div>
                                <div className="p-4 bg-gray-50 dark:bg-slate-900 rounded-xl text-center">
                                    <Star className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{project.storeDetails.rating}</div>
                                    <div className="text-xs text-gray-500">Avg Rating</div>
                                </div>
                                <div className="p-4 bg-gray-50 dark:bg-slate-900 rounded-xl text-center">
                                    <Layout className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{project.storeDetails.reviews}</div>
                                    <div className="text-xs text-gray-500">Reviews</div>
                                </div>
                                <div className="p-4 bg-gray-50 dark:bg-slate-900 rounded-xl text-center">
                                    <Calendar className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                                    <div className="text-lg font-bold text-gray-900 dark:text-white mt-1">{project.storeDetails.releaseDate}</div>
                                    <div className="text-xs text-gray-500">Released</div>
                                </div>
                            </div>

                        </div>

                        {/* Release Pipeline */}
                        <div className="mt-12 pt-8 border-t border-gray-100 dark:border-slate-700">
                            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-6 uppercase tracking-wider">Release Lifecycle Managed</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {['Internal Testing', 'Closed Alpha', 'Production Rollout'].map((stage, idx) => (
                                    <div key={idx} className="flex items-center p-3 bg-gray-50 dark:bg-slate-900 rounded-lg">
                                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">
                                            {idx + 1}
                                        </div>
                                        <span className="text-gray-700 dark:text-gray-300 font-medium">{stage}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default PlayConsoleSection;
