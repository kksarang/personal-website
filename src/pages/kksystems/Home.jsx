import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion as Motion } from 'framer-motion';
import PremiumHero from '../../components/KkSystems/PremiumHero';
import { Positioning } from '../../components/KkSystems/PremiumPositioning';
import {
    ServiceIndex,
    ProcessStrip,
    ProofBand,
    ProductSpotlight,
    Voices,
} from '../../components/KkSystems/EditorialHomeSections';
import EnitexaMark from '../../components/KkSystems/EnitexaMark';
import FAQ from '../../components/KkSystems/FAQ';

const sectionReveal = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.14 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
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

const KineticStrip = () => (
    <div className="enitexa-kinetic-strip overflow-hidden border-y border-white/5 bg-[#07080f] py-6 sm:py-7">
        <div className="pf-marquee">
            {[0, 1].map((dup) => (
                <div key={dup} className="pf-marquee-track" aria-hidden={dup === 1}>
                    {MARQUEE_ITEMS.map((item) => (
                        <span
                            key={item}
                            className="pf-display flex shrink-0 items-center gap-8 whitespace-nowrap text-[clamp(1.45rem,3.2vw,2.5rem)] font-extrabold leading-none"
                        >
                            <span className="pf-outline-text">{item}</span>
                            <span className="text-lg text-indigo-400/80">/</span>
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
        }, 1800);
        return () => clearTimeout(timer);
    }, [showIntro]);

    return (
        <div className="w-full min-h-screen overflow-x-hidden bg-white font-sans text-gray-900 transition-colors duration-300 dark:bg-[#0B0F19] dark:text-white">
            <AnimatePresence>
                {showIntro && (
                    <Motion.div
                        initial={{ opacity: 1 }}
                        exit={{ y: '-100%' }}
                        transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
                        className="enitexa-intro-overlay fixed inset-0 z-[120] flex items-center justify-center bg-[#050505]"
                    >
                        <div className="relative flex w-full max-w-4xl flex-col gap-8 px-6 sm:flex-row sm:items-end sm:justify-between sm:px-14">
                            <div className="min-w-0">
                                <p className="pf-mono mb-4 text-[10px] uppercase tracking-[0.4em] text-white/40">
                                    Digital & Software Solutions
                                </p>
                                <h2 className="flex items-center">
                                    <EnitexaMark height={52} tone="light" withGlow alt="Enitexa.Ai" />
                                </h2>
                            </div>
                            <div className="w-full max-w-[14rem] sm:w-56">
                                <div className="overflow-hidden rounded-full bg-white/10">
                                    <Motion.div
                                        initial={{ width: '0%' }}
                                        animate={{ width: '100%' }}
                                        transition={{ duration: 1.5, ease: 'easeInOut' }}
                                        className="h-1 bg-gradient-to-r from-[#c5cee8] via-[#9eb0ff] to-[#7d96ff]"
                                    />
                                </div>
                            </div>
                        </div>
                    </Motion.div>
                )}
            </AnimatePresence>

            <RevealSection>
                <PremiumHero />
            </RevealSection>

            <KineticStrip />

            <RevealSection>
                <Positioning />
            </RevealSection>

            <RevealSection>
                <ServiceIndex />
            </RevealSection>

            <RevealSection>
                <ProcessStrip />
            </RevealSection>

            <RevealSection>
                <ProofBand />
            </RevealSection>

            <RevealSection>
                <ProductSpotlight />
            </RevealSection>

            <RevealSection>
                <Voices />
            </RevealSection>

            <RevealSection>
                <FAQ />
            </RevealSection>
        </div>
    );
};

export default KksystemsHome;
