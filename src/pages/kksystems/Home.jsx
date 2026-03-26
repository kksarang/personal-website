import React from 'react';
import PremiumHero from '../../components/KkSystems/PremiumHero';
import { Positioning, CoreOfferings } from '../../components/KkSystems/PremiumPositioning';
import { PremiumSolutions, ProductLayer } from '../../components/KkSystems/PremiumSolutions';
import { ImpactMetrics, HowWeWork, Industries } from '../../components/KkSystems/PremiumTrust';
import { TechStack, WhyHexenity, ERPDemoEntry, FinalCTA } from '../../components/KkSystems/PremiumFinal';

// We'll keep these for additional depth if needed, but primary focus is the new structure
import PortfolioSection from '../../components/KkSystems/PortfolioSection';
import Testimonials from '../../components/KkSystems/Testimonials';
import FAQ from '../../components/KkSystems/FAQ';

const KksystemsHome = () => {
    return (
        <div className="w-full min-h-screen bg-[#0B0F19] text-white font-sans overflow-x-hidden transition-colors duration-300">
            {/* 1. Hero (Impact) & 2. Trust + Stats (Inside Hero) */}
            <PremiumHero />

            {/* 3. What Hexenity Is (Positioning) */}
            <Positioning />

            {/* 4. Core Offerings (Build / Optimize / Scale) */}
            <CoreOfferings />

            {/* 5. Solutions (Mobile / Web / ERP) */}
            <PremiumSolutions />

            {/* 6. Product Layer (ERP + AI) */}
            <ProductLayer />

            {/* 7. Impact Metrics */}
            <ImpactMetrics />

            {/* 8. How We Work (Process) */}
            <HowWeWork />

            {/* 9. Industries */}
            <Industries />

            {/* 10. Tech Stack */}
            <TechStack />

            {/* 11. Why Hexenity (Differentiation) */}
            <WhyHexenity />

            {/* Additional Trust Layers (Optional but good for premium) */}
            <PortfolioSection />
            <Testimonials />
            <FAQ />

            {/* 12. Demo ERP Entry (Product Feel) */}
            <ERPDemoEntry />

            {/* 13. Final CTA */}
            <FinalCTA />
        </div>
    );
};

export default KksystemsHome;
