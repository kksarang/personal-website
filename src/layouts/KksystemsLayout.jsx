import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import KksystemsNavbar from '../components/KkSystems/KksystemsNavbar';
import StickyCTA from '../components/KkSystems/StickyCTA';

const ScrollToSection = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const raw = hash.replace('#', '').trim();
            if (!raw) return;
            const element = document.getElementById(raw);
            const apply = () => {
                if (!element) return;
                const headerReserve =
                    typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches ? 104 : 96;
                const y = element.getBoundingClientRect().top + window.scrollY - headerReserve;
                window.scrollTo({ top: Math.max(0, y), behavior: 'auto' });
            };
            requestAnimationFrame(() => requestAnimationFrame(apply));
        } else {
            window.scrollTo({ top: 0, behavior: 'auto' });
        }
    }, [pathname, hash]);

    return null;
};

const KksystemsLayout = () => {
    const location = useLocation();

    useEffect(() => {
        document.documentElement.classList.add('hexenity-site-scroll');
        return () => document.documentElement.classList.remove('hexenity-site-scroll');
    }, []);

    return (
        <div className="hexenity-root relative flex min-h-screen flex-col overflow-x-hidden bg-white text-gray-900 dark:bg-[#040713] dark:text-white">
            <div className="pointer-events-none fixed inset-0 z-0">
                <div className="hexenity-ambient absolute inset-0" />
                <div className="absolute left-[-10%] top-[-10%] h-[260px] w-[260px] rounded-full bg-indigo-600/10 blur-[70px]" />
                <div className="absolute bottom-[-16%] right-[-8%] h-[260px] w-[260px] rounded-full bg-cyan-500/10 blur-[75px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.1),transparent_45%)]" />
            </div>
            <KksystemsNavbar />
            <ScrollToSection />
            <main className="relative z-10 min-h-0 min-w-0 w-full flex-1 pb-[env(safe-area-inset-bottom,0px)]">
                <Outlet />
            </main>
            <StickyCTA />

            {/* Simple matching footer for the agency */}
            {location.pathname !== '/hexenity/ai' && (
                <footer className="relative z-10 border-t border-white/10 bg-white/70 py-8 text-center dark:bg-[rgba(4,7,19,0.7)]">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        &copy; {new Date().getFullYear()} hexenity - Digital & Software Solutions Company. All rights reserved.
                    </p>
                </footer>
            )}
        </div>
    );
};

export default KksystemsLayout;
