import React from 'react';
import PremiumHero from '../../components/KkSystems/PremiumHero';
import { Positioning, CoreOfferings } from '../../components/KkSystems/PremiumPositioning';
import { PremiumSolutions, ProductLayer } from '../../components/KkSystems/PremiumSolutions';
import { ImpactMetrics, HowWeWork, Industries, GlobalPresence } from '../../components/KkSystems/PremiumTrust';
import { TechStack, WhyHexenity, ERPDemoEntry, FinalCTA } from '../../components/KkSystems/PremiumFinal';
import HexenityValueStack from '../../components/KkSystems/HexenityValueStack';

const KksystemsHome = () => {
    return (
        <div className="w-full min-h-screen bg-[#0B0F19] text-white font-sans overflow-x-hidden transition-colors duration-300">
            {/* 1. Hero (Impact) & 2. Trust + Stats (Inside Hero) */}
            <PremiumHero />

            {/* 3. What Hexenity Is (Positioning) */}
            <Positioning />
            <HexenityValueStack />

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

            {/* 10. Global Presence */}
            <GlobalPresence />

            {/* 11. Tech Stack */}
            <TechStack />

            {/* 12. Why Hexenity (Differentiation) */}
            <WhyHexenity />

            {/* 13. Demo ERP Entry (Product Feel) */}
            <ERPDemoEntry />

            {/* 14. Final CTA */}
            <FinalCTA />
        </div>
    );
};

export default KksystemsHome;
