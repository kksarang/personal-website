import React from 'react';
import { Database, Server, Smartphone, Layers, Wind, Cloud, Star, Users, CheckCircle } from 'lucide-react';

const IconMap = {
    'Database': Database,
    'Server': Server,
    'Smartphone': Smartphone,
    'Layers': Layers,
    'Wind': Wind,
    'Cloud': Cloud,
    'Star': Star,
    'Users': Users,
    'CheckCircle': CheckCircle,
    'Default': Layers
};

const getIcon = (name) => IconMap[name] || IconMap['Default'];

const TechStackDeepDive = ({ project }) => {
    return (
        <div className="py-20 bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase mb-2">Under the Hood</h2>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">Tech Stack & Architecture</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {project.techStack.map((tech, idx) => (
                        <div key={idx} className="flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 hover:border-indigo-500 transition-colors group">
                            <div className="mb-4 text-gray-400 group-hover:text-indigo-500 transition-colors">
                                {/* Dynamically assign icons based on type if possible, or generic */}
                                <Layers className="w-8 h-8" />
                            </div>
                            <h4 className="font-bold text-gray-900 dark:text-white mb-1">{tech.name}</h4>
                            <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">{tech.type}</span>
                        </div>
                    ))}
                </div>

                {/* Feature Grid */}
                <div className="mt-24">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Key Features implemented</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {project.features.map((feature, idx) => {
                            const FeatureIcon = getIcon(feature.icon);
                            return (
                                <div key={idx} className="flex items-start">
                                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl flex items-center justify-center mr-4 text-indigo-600 dark:text-indigo-400 shrink-0">
                                        <FeatureIcon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {feature.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechStackDeepDive;
