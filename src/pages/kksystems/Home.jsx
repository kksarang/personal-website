import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PremiumHero from '../../components/KkSystems/PremiumHero';
import { Positioning, CoreOfferings } from '../../components/KkSystems/PremiumPositioning';
import { PremiumSolutions, ProductLayer } from '../../components/KkSystems/PremiumSolutions';
import { ImpactMetrics, HowWeWork, Industries, GlobalPresence } from '../../components/KkSystems/PremiumTrust';
import { TechStack, WhyHexenity, ERPDemoEntry, FinalCTA } from '../../components/KkSystems/PremiumFinal';
import HexenityValueStack from '../../components/KkSystems/HexenityValueStack';
import TrustedBy from '../../components/KkSystems/TrustedBy';
import Testimonials from '../../components/KkSystems/Testimonials';
import FAQ from '../../components/KkSystems/FAQ';

const KksystemsHome = () => {
    const [showIntro, setShowIntro] = useState(() => {
        if (typeof window === 'undefined') return false;
        return !sessionStorage.getItem('hexenity-intro-seen');
    });

    useEffect(() => {
        if (!showIntro) return;
        const timer = setTimeout(() => {
            sessionStorage.setItem('hexenity-intro-seen', 'true');
            setShowIntro(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, [showIntro]);

    return (
        <div className="w-full min-h-screen bg-[#0B0F19] text-white font-sans overflow-x-hidden transition-colors duration-300">
            <AnimatePresence>
                {showIntro && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.45 }}
                        className="fixed inset-0 z-[120] flex items-center justify-center bg-[#050816]"
                    >
                        <div className="relative w-full max-w-xl px-8">
                            <div className="pointer-events-none absolute -top-28 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[90px]" />
                            <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.26em] text-indigo-300">
                                Initializing Hexenity Systems
                            </p>
                            <h2 className="text-center text-3xl font-black text-white md:text-4xl">
                                Innovation Engine Online
                            </h2>
                            <div className="mt-8 overflow-hidden rounded-full border border-white/10 bg-white/5">
                                <motion.div
                                    initial={{ width: '0%' }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 1.6, ease: 'easeInOut' }}
                                    className="h-2 bg-gradient-to-r from-indigo-400 via-cyan-400 to-violet-400"
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 1. Hero (Impact) & 2. Trust + Stats (Inside Hero) */}
            <PremiumHero />

            {/* 2. Trusted By / Partners */}
            <TrustedBy />

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

            {/* 13. Testimonials */}
            <Testimonials />

            {/* 14. FAQ */}
            <FAQ />

            {/* 15. Demo ERP Entry (Product Feel) */}
            <ERPDemoEntry />

            {/* 16. Final CTA */}
            <FinalCTA />
        </div>
    );
};

export default KksystemsHome;
