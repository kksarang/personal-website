import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { caseStudies } from '../../data/caseStudies';

const RelatedProjects = ({ currentSlug }) => {
    const navigate = useNavigate();
    const otherProjects = caseStudies.filter(p => p.slug !== currentSlug);

    if (otherProjects.length === 0) return null;

    return (
        <section className="py-24 bg-gray-50 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">More Case Studies</h3>
                    <a href="/#projects" className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline flex items-center">
                        View All <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {otherProjects.map((project) => (
                        <div
                            key={project.slug}
                            onClick={() => navigate(`/our-projects/${project.slug}`)}
                            className="group cursor-pointer bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-100 dark:border-slate-700 hover:shadow-xl transition-all hover:border-indigo-500/30"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase rounded-full">
                                    {project.category}
                                </span>
                                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-500 group-hover:translate-x-2 transition-all" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                {project.title.split('-')[0]}
                            </h4>
                            <p className="text-gray-500 line-clamp-2">
                                {project.subtitle}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RelatedProjects;
