import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { caseStudies } from '../../data/caseStudies';

// Components
import CaseStudyHero from './CaseStudyHero';
import ProjectIntroduction from './ProjectIntroduction';
import BusinessAnalysis from './BusinessAnalysis';
import RoleOwnership from './RoleOwnership';
import PlayStoreShowcase from './PlayStoreShowcase';
import TechStackDeepDive from './TechStackDeepDive';
import PlayConsoleSection from './PlayConsoleSection'; // Keeping this if needed, or PlayStoreShowcase replaces it? Plan says both? Analysis says "Play Console Showcase" is sec 5.
// Plan says:
// 1. Hero
// 2. Intro
// 3. Business Problem
// 4. Role
// 5. Play Console Showcase (This is PlayConsoleSection.jsx)
// 6. Play Store App Showcase (This is PlayStoreShowcase.jsx)
// 7. Features (Tech Stack & Deep Dive can cover this or new?) TechStackDeepDive likely.
// 8. Tech Stack (TechStackDeepDive)
// 9. Challenges (BusinessAnalysis covers problems, TechStack could cover tech challenges?)
// 10. Results (ResultsSection)
// 11. Related (RelatedProjects)

// Let's stick to the implementation plan structure.
import ResultsSection from './ResultsSection';
import RelatedProjects from './RelatedProjects';
import AboutMaker from './AboutMaker';

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
            {/* 1. Hero - Identity & Value */}
            <CaseStudyHero project={project} />

            {/* 2. Introduction - Origin Story */}
            <ProjectIntroduction project={project} />

            {/* 3. Business & Technical Analysis */}
            <BusinessAnalysis project={project} />

            {/* 4. Role & Ownership */}
            <RoleOwnership project={project} />

            {/* 5. Google Play Console Showcase (The Publish Journey) */}
            <PlayConsoleSection project={project} />

            {/* 6. Play Store App Showcase (The Product) */}
            <div id="play-store-showcase">
                <PlayStoreShowcase project={project} />
            </div>

            {/* 7 & 8. Tech Stack & Features Deep Dive */}
            <TechStackDeepDive project={project} />

            {/* 9 & 10. Results & Impact */}
            <ResultsSection project={project} />

            {/* 11. Related Projects */}
            <RelatedProjects currentSlug={project.slug} />

            {/* 12. About the Maker */}
            <AboutMaker />
        </div>
    );
};

export default ProjectDetail;

