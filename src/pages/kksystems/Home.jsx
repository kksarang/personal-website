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

const sectionReveal = {
    initial: { opacity: 0, y: 42, filter: 'blur(10px)' },
    whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
    viewport: { once: true, amount: 0.18 },
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
};

const RevealSection = ({ children }) => (
    <motion.div
        initial={sectionReveal.initial}
        whileInView={sectionReveal.whileInView}
        viewport={sectionReveal.viewport}
        transition={sectionReveal.transition}
    >
        {children}
    </motion.div>
);

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
        <div className="w-full min-h-screen bg-white font-sans text-gray-900 transition-colors duration-300 overflow-x-hidden dark:bg-[#0B0F19] dark:text-white">
            <AnimatePresence>
                {showIntro && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.45 }}
                        className="hexenity-intro-overlay fixed inset-0 z-[120] flex items-center justify-center bg-[#050816]"
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
            <RevealSection>
                <PremiumHero />
            </RevealSection>

            {/* 2. Trusted By / Partners */}
            <RevealSection>
                <TrustedBy />
            </RevealSection>

            {/* 3. What Hexenity Is (Positioning) */}
            <RevealSection>
                <Positioning />
            </RevealSection>
            <RevealSection>
                <HexenityValueStack />
            </RevealSection>

            {/* 4. Core Offerings (Build / Optimize / Scale) */}
            <RevealSection>
                <CoreOfferings />
            </RevealSection>

            {/* 5. Solutions (Mobile / Web / ERP) */}
            <RevealSection>
                <PremiumSolutions />
            </RevealSection>

            {/* 6. Product Layer (ERP + AI) */}
            <RevealSection>
                <ProductLayer />
            </RevealSection>

            {/* 7. Impact Metrics */}
            <RevealSection>
                <ImpactMetrics />
            </RevealSection>

            {/* 8. How We Work (Process) */}
            <RevealSection>
                <HowWeWork />
            </RevealSection>

            {/* 9. Industries */}
            <RevealSection>
                <Industries />
            </RevealSection>

            {/* 10. Global Presence */}
            <RevealSection>
                <GlobalPresence />
            </RevealSection>

            {/* 11. Tech Stack */}
            <RevealSection>
                <TechStack />
            </RevealSection>

            {/* 12. Why Hexenity (Differentiation) */}
            <RevealSection>
                <WhyHexenity />
            </RevealSection>

            {/* 13. Testimonials */}
            <RevealSection>
                <Testimonials />
            </RevealSection>

            {/* 14. FAQ */}
            <RevealSection>
                <FAQ />
            </RevealSection>

            {/* 15. Demo ERP Entry (Product Feel) */}
            <RevealSection>
                <ERPDemoEntry />
            </RevealSection>

            {/* 16. Final CTA */}
            <RevealSection>
                <FinalCTA />
            </RevealSection>
        </div>
    );
};

export default KksystemsHome;
