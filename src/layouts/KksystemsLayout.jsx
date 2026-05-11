import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import KksystemsNavbar from '../components/KkSystems/KksystemsNavbar';
import StickyCTA from '../components/KkSystems/StickyCTA';

const ScrollToSection = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                // Add a small delay for page transitions
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
};

const KksystemsLayout = () => {
    const location = useLocation();
    return (
        <div className="hexenity-root relative flex min-h-screen flex-col overflow-x-hidden bg-white text-gray-900 transition-colors duration-300 dark:bg-[#040713] dark:text-white">
            <div className="pointer-events-none fixed inset-0 z-0">
                <div className="hexenity-ambient absolute inset-0" />
                <div className="hexenity-noise absolute inset-0" />
                <div className="absolute left-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-indigo-600/15 blur-[120px]" />
                <div className="animate-float-slow absolute bottom-[-16%] right-[-8%] h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[140px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.1),transparent_45%)]" />
            </div>
            <KksystemsNavbar />
            <ScrollToSection />
            <main className="relative z-10 flex-grow">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.28, ease: 'easeOut' }}
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </main>
            <StickyCTA />

            {/* Simple matching footer for the agency */}
            {location.pathname !== '/hexenity/ai' && (
                <footer className="relative z-10 border-t border-white/10 bg-white/70 py-8 text-center backdrop-blur-xl transition-colors duration-300 dark:bg-[rgba(4,7,19,0.7)]">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        &copy; {new Date().getFullYear()} hexenity - Digital & Software Solutions Company. All rights reserved.
                    </p>
                </footer>
            )}
        </div>
    );
};

export default KksystemsLayout;
