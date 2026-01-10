import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { caseStudies } from '../../data/caseStudies';
import CaseStudyHero from './CaseStudyHero';
import CaseStudyContent from './CaseStudyContent';
import PlayConsoleSection from './PlayConsoleSection';
import TechStackDeepDive from './TechStackDeepDive';

const ProjectDetail = () => {
    const { projectSlug } = useParams();
    const project = caseStudies.find(p => p.slug === projectSlug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [projectSlug]);

    if (!project) {
        return <Navigate to="/#projects" replace />;
    }

    return (
        <div className="bg-white dark:bg-slate-900 min-h-screen">
            <CaseStudyHero project={project} />
            <CaseStudyContent project={project} />
            <PlayConsoleSection project={project} />
            <TechStackDeepDive project={project} />

            {/* Footer CTA */}
            <div className="py-24 bg-gray-50 dark:bg-slate-900 text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Ready to build something similar?</h2>
                <a href="mailto:sarangrajan@example.com" className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/30">
                    Start a Conversation
                </a>
            </div>
        </div>
    );
};

export default ProjectDetail;
