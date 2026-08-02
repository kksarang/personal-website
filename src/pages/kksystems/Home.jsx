import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion as Motion } from 'framer-motion';
import PremiumHero from '../../components/KkSystems/PremiumHero';
import { Positioning, CoreOfferings } from '../../components/KkSystems/PremiumPositioning';
import { PremiumSolutions, ProductLayer } from '../../components/KkSystems/PremiumSolutions';
import { ImpactMetrics, HowWeWork, Industries, GlobalPresence } from '../../components/KkSystems/PremiumTrust';
import { TechStack, WhyEnitexa, ERPDemoEntry, FinalCTA } from '../../components/KkSystems/PremiumFinal';
import EnitexaValueStack from '../../components/KkSystems/EnitexaValueStack';
import EnitexaMark from '../../components/KkSystems/EnitexaMark';
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
    <Motion.div
        initial={sectionReveal.initial}
        whileInView={sectionReveal.whileInView}
        viewport={sectionReveal.viewport}
        transition={sectionReveal.transition}
    >
        {children}
    </Motion.div>
);

const MARQUEE_ITEMS = ['Mobile Apps', 'Web Platforms', 'AI Systems', 'ERP', 'Branding', 'Automation', 'Growth'];

/* Giant kinetic type ribbon between hero and content */
const KineticStrip = () => (
    <div className="overflow-hidden border-y border-white/5 bg-[#07080f] py-7">
        <div className="pf-marquee">
            {[0, 1].map((dup) => (
                <div key={dup} className="pf-marquee-track" aria-hidden={dup === 1}>
                    {MARQUEE_ITEMS.map((item) => (
                        <span
                            key={item}
                            className="pf-display flex shrink-0 items-center gap-8 whitespace-nowrap text-[clamp(1.6rem,3.4vw,2.7rem)] font-extrabold leading-none"
                        >
                            <span className="pf-outline-text">{item}</span>
                            <span className="text-xl text-indigo-400">✦</span>
                        </span>
                    ))}
                </div>
            ))}
        </div>
    </div>
);

const KksystemsHome = () => {
    const [showIntro, setShowIntro] = useState(() => {
        if (typeof window === 'undefined') return false;
        return !sessionStorage.getItem('enitexa-intro-seen');
    });

    useEffect(() => {
        if (!showIntro) return;
        const timer = setTimeout(() => {
            sessionStorage.setItem('enitexa-intro-seen', 'true');
            setShowIntro(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, [showIntro]);

    return (
        <div className="w-full min-h-screen bg-white font-sans text-gray-900 transition-colors duration-300 overflow-x-hidden dark:bg-[#0B0F19] dark:text-white">
            <AnimatePresence>
                {showIntro && (
                    <Motion.div
                        initial={{ opacity: 1 }}
                        exit={{ y: '-100%' }}
                        transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
                        className="enitexa-intro-overlay fixed inset-0 z-[120] flex items-center justify-center bg-[#050505]"
                    >
                        <div className="relative flex w-full max-w-4xl items-end justify-between px-10 sm:px-14">
                            <div>
                                <p className="pf-mono mb-4 text-[10px] uppercase tracking-[0.4em] text-white/40">
                                    Digital & Software Solutions
                                </p>
                                <h2 className="pf-display flex items-center gap-4 text-4xl font-bold text-white sm:text-6xl">
                                    <EnitexaMark size={52} withGlow />
                                    <span>
                                        Enitexa.Ai
                                    </span>
                                </h2>
                            </div>
                            <div className="w-40 sm:w-56">
                                <div className="overflow-hidden rounded-full bg-white/10">
                                    <Motion.div
                                        initial={{ width: '0%' }}
                                        animate={{ width: '100%' }}
                                        transition={{ duration: 1.6, ease: 'easeInOut' }}
                                        className="h-1 bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400"
                                    />
                                </div>
                            </div>
                        </div>
                    </Motion.div>
                )}
            </AnimatePresence>

            {/* 1. Hero (Impact) & 2. Trust + Stats (Inside Hero) */}
            <RevealSection>
                <PremiumHero />
            </RevealSection>

            {/* Kinetic type ribbon */}
            <KineticStrip />

            {/* 2. Trusted By / Partners */}
            <RevealSection>
                <TrustedBy />
            </RevealSection>

            {/* 3. What Enitexa.Ai Is (Positioning) */}
            <RevealSection>
                <Positioning />
            </RevealSection>
            <RevealSection>
                <EnitexaValueStack />
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

            {/* 12. Why Enitexa.Ai (Differentiation) */}
            <RevealSection>
                <WhyEnitexa />
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
