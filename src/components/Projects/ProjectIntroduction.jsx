import React from 'react';

const ProjectIntroduction = ({ project }) => {
    return (
        <section className="py-24 bg-white dark:bg-slate-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
                <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase bg-indigo-50 dark:bg-indigo-900/30 rounded-full">
                    The Origin Story
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                    {project.detailedIntro.title}
                </h2>
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 leading-relaxed">
                    <p className="text-xl">
                        {project.detailedIntro.story}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProjectIntroduction;
