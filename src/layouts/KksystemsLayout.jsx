import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import KksystemsNavbar from '../components/KkSystems/KksystemsNavbar';

const ScrollToSection = () => {
    const { hash } = useLocation();

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
    }, [hash]);

    return null;
};

const KksystemsLayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-[#0A0B14] text-gray-900 dark:text-white font-sans transition-colors duration-300">
            <KksystemsNavbar />
            <ScrollToSection />
            <main className="flex-grow">
                <Outlet />
            </main>

            {/* Simple matching footer for the agency */}
            <footer className="bg-gray-50 dark:bg-[#0A0B14] py-8 border-t border-gray-200 dark:border-white/10 text-center transition-colors duration-300">
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} KKSYSTEMS. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default KksystemsLayout;
