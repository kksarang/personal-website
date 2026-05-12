import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PORTFOLIO_HEADER_SCROLL = 76;

const ScrollToSection = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const raw = hash.replace('#', '').trim();
            if (!raw) return;
            const element = document.getElementById(raw);
            const apply = () => {
                if (!element) return;
                const y = element.getBoundingClientRect().top + window.scrollY - PORTFOLIO_HEADER_SCROLL;
                window.scrollTo({ top: Math.max(0, y), behavior: 'auto' });
            };
            requestAnimationFrame(() => requestAnimationFrame(apply));
        } else {
            window.scrollTo({ top: 0, behavior: 'auto' });
        }
    }, [pathname, hash]);

    return null;
};

const PortfolioLayout = () => {
    return (
        <div className="flex min-h-screen flex-col bg-white transition-colors duration-300 dark:bg-slate-900">
            <Navbar />
            <ScrollToSection />
            <main className="min-h-0 flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default PortfolioLayout;
