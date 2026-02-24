import React from 'react';
import { ExternalLink, Github, PieChart, Split, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Projects = () => {

    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">My Portfolio</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Selected Work
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100 dark:border-slate-700">
                            <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                                <div className="transform group-hover:scale-110 transition-transform duration-300">
                                    {/* Icon placeholder for the shared data file where we omitted JSX */}
                                    {index === 0 && <PieChart className="w-10 h-10 text-white" />}
                                    {index === 1 && <Split className="w-10 h-10 text-white" />}
                                    {index === 2 && <Briefcase className="w-10 h-10 text-white" />}
                                    {index === 3 && <ExternalLink className="w-10 h-10 text-white" />}
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1 text-base leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-medium rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center space-x-4 mt-auto">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-colors">
                                        <Github className="w-4 h-4 mr-1" /> Code
                                    </a>

                                    {project.slug !== '#' ? (
                                        <Link to={`/our-projects/${project.slug}`} className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 text-sm font-medium transition-colors">
                                            <ArrowRight className="w-4 h-4 mr-1" /> View Case Study
                                        </Link>
                                    ) : (
                                        <span className="flex items-center text-gray-400 text-sm font-medium cursor-not-allowed">
                                            Coming Soon
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
