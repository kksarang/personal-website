import React from 'react';
import { Star, Smartphone, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const PlayStoreShowcase = ({ project }) => {
    if (!project.playStoreShowcase) return null;

    return (
        <section className="py-24 bg-gray-50 dark:bg-slate-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-green-600 dark:text-green-500 tracking-wide uppercase mb-2">Live Product</h2>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Play Store Showcase</h3>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* App Identity Card */}
                    <div className="lg:w-1/3">
                        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-slate-700">
                            <div className="flex items-center space-x-4 mb-8">
                                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg flex items-center justify-center text-white text-2xl font-bold">
                                    {project.title.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">{project.storeDetails.appName}</h4>
                                    <p className="text-sm text-gray-500">{project.storeDetails.packageName}</p>
                                    <div className="flex items-center mt-2 space-x-1">
                                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                        <span className="text-xs text-gray-400 ml-2">({project.storeDetails.reviews})</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {project.playStoreShowcase.featureHighlights.map((feature, idx) => (
                                    <div key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                                        <ShieldCheck className="w-5 h-5 text-green-500 mr-3" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <a
                                href={project.storeDetails.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-8 w-full block text-center py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-green-500/20"
                            >
                                Install App
                            </a>
                            {project.slug?.includes('expenser') && (
                                <Link
                                    to="/expenser"
                                    className="mt-4 w-full block text-center py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-indigo-500/20"
                                >
                                    More About Expenser
                                </Link>
                            )}
                        </div>
                    </div>

                    {/* Screenshots Carousel (Mock) */}
                    <div className="lg:w-2/3 w-full overflow-x-auto pb-8">
                        <div className="flex space-x-6">
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="flex-none w-64 h-[500px] bg-gray-200 dark:bg-slate-700 rounded-3xl border-4 border-gray-900 dark:border-slate-800 shadow-2xl flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
                                    <Smartphone className="w-16 h-16 text-gray-400" />
                                    <span className="absolute bottom-10 text-gray-500 text-sm font-medium">Screenshot {item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlayStoreShowcase;
