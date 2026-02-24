import React from 'react';
import Hero from '../../components/KkSystems/Hero';
import Services from '../../components/KkSystems/Services';
import HowItWorks from '../../components/KkSystems/HowItWorks';
import Features from '../../components/KkSystems/Features';
import PortfolioSection from '../../components/KkSystems/PortfolioSection';
import LearningSection from '../../components/KkSystems/LearningSection';
import Testimonials from '../../components/KkSystems/Testimonials';
import FAQ from '../../components/KkSystems/FAQ';
import ContactPrompt from '../../components/KkSystems/ContactPrompt';

const KksystemsHome = () => {
    return (
        <div className="w-full min-h-screen bg-white dark:bg-[#0A0B14] text-gray-900 dark:text-white font-sans overflow-x-hidden transition-colors duration-300">
            <Hero />
            <Services />
            <HowItWorks />
            <Features />
            <PortfolioSection />
            <LearningSection />
            <Testimonials />
            <FAQ />
            <ContactPrompt />
        </div>
    );
};

export default KksystemsHome;
