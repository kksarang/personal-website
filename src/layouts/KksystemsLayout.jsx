import React, { useEffect } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import Lenis from 'lenis';
import { ArrowUpRight, ArrowUp } from 'lucide-react';
import KksystemsNavbar from '../components/KkSystems/KksystemsNavbar';
import StickyCTA from '../components/KkSystems/StickyCTA';
import PremiumCursor from '../components/ui/PremiumCursor';
import Magnetic from '../components/ui/Magnetic';
import EnitexaMark from '../components/KkSystems/EnitexaMark';

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
                if (window.__lenis) {
                    window.__lenis.scrollTo(Math.max(0, y), { immediate: true });
                } else {
                    window.scrollTo({ top: Math.max(0, y), behavior: 'auto' });
                }
            };
            requestAnimationFrame(() => requestAnimationFrame(apply));
        } else if (window.__lenis) {
            window.__lenis.scrollTo(0, { immediate: true });
        } else {
            window.scrollTo({ top: 0, behavior: 'auto' });
        }
    }, [pathname, hash]);

    return null;
};

/* App-like routes (dashboards/demos) keep native scrolling for nested panes */
const isAppRoute = (pathname) =>
    pathname.includes('/erp') || pathname.includes('/saas/demo') || pathname.includes('/learning/practice');

const useSmoothScroll = (enabled) => {
    useEffect(() => {
        if (!enabled) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const lenis = new Lenis({
            duration: 1.1,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });
        window.__lenis = lenis;

        let raf;
        const loop = (time) => {
            lenis.raf(time);
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);

        return () => {
            cancelAnimationFrame(raf);
            lenis.destroy();
            delete window.__lenis;
        };
    }, [enabled]);
};

const FOOTER_LINKS = [
    {
        title: 'Company',
        links: [
            { label: 'About', to: '/enitexa.ai/about' },
            { label: 'Services', to: '/enitexa.ai/services' },
            { label: 'Work', to: '/enitexa.ai/work' },
            { label: 'Core Enitexa.Ai', to: '/enitexa.ai/core-enitexa' },
        ],
    },
    {
        title: 'Products',
        links: [
            { label: 'Enitexa.Ai', to: '/enitexa.ai/ai' },
            { label: 'SaaS Platform', to: '/enitexa.ai/saas' },
            { label: 'ERP Demo', to: '/enitexa.ai/erp/dashboard' },
            { label: 'Learning', to: '/enitexa.ai/learning' },
        ],
    },
    {
        title: 'Solutions',
        links: [
            { label: 'Mobile Apps', to: '/enitexa.ai/solutions/mobile' },
            { label: 'Web Platforms', to: '/enitexa.ai/solutions/web' },
            { label: 'ERP Systems', to: '/enitexa.ai/solutions/erp' },
            { label: 'Contact', to: '/enitexa.ai/contact' },
        ],
    },
];

const EnitexaFooter = () => (
    <footer className="enitexa-footer relative z-10 overflow-hidden border-t border-white/[0.08] bg-[#030408]">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" aria-hidden="true" />
        <div className="absolute left-1/2 top-0 h-72 w-[720px] -translate-x-1/2 rounded-full bg-indigo-500/[0.07] blur-[110px]" aria-hidden="true" />

        <div className="relative mx-auto max-w-[90rem] px-6 pt-20 sm:px-10 lg:px-16">
            {/* Giant CTA */}
            <div className="flex flex-col items-start justify-between gap-10 pb-16 md:flex-row md:items-end">
                <Link to="/enitexa.ai/contact" data-cursor="Say hi" className="group block">
                    <p className="pf-mono mb-5 text-[11px] uppercase tracking-[0.35em] text-white/35">
                        Ready to scale your business?
                    </p>
                    <h2 className="pf-cta-giant pf-display text-[clamp(2rem,5vw,4rem)] font-extrabold leading-[0.95] text-white">
                        Start a project
                        <span className="pf-gradient-text">.</span>
                    </h2>
                </Link>
                <Magnetic strength={0.35}>
                    <Link
                        to="/enitexa.ai/contact"
                        aria-label="Contact Enitexa.Ai"
                        className="enitexa-footer-orb group flex h-24 w-24 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-500 hover:border-indigo-400 hover:bg-indigo-500 sm:h-32 sm:w-32"
                    >
                        <ArrowUpRight className="h-8 w-8 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                </Magnetic>
            </div>

            {/* Link columns */}
            <div className="grid grid-cols-2 gap-10 border-t border-white/[0.07] py-14 md:grid-cols-5">
                <div className="col-span-2">
                    <p className="pf-display flex items-center gap-3 text-xl font-bold text-white">
                        <EnitexaMark size={30} />
                        <span>Enitexa.Ai</span>
                    </p>
                    <p className="pf-mono mt-5 text-[10px] uppercase tracking-[0.3em] text-indigo-300/80">
                        Digital & Software Solutions
                    </p>
                    <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/50">
                        Apps, platforms, AI, branding, and growth systems —
                        <span className="text-white/80"> under one partner model.</span>
                    </p>
                </div>
                {FOOTER_LINKS.map((col) => (
                    <div key={col.title}>
                        <p className="pf-mono mb-5 text-[10px] uppercase tracking-[0.3em] text-white/30">
                            {col.title}
                        </p>
                        <ul className="space-y-3">
                            {col.links.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        to={link.to}
                                        className="text-sm text-white/55 transition-colors duration-300 hover:text-white"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Bottom bar */}
            <div className="flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] py-7 text-[11px] text-white/30 md:flex-row">
                <p className="pf-mono uppercase tracking-[0.2em]">
                    © {new Date().getFullYear()} Enitexa.Ai — All rights reserved
                </p>
                <button
                    type="button"
                    onClick={() => (window.__lenis ? window.__lenis.scrollTo(0) : window.scrollTo({ top: 0, behavior: 'smooth' }))}
                    className="pf-mono flex items-center gap-2 uppercase tracking-[0.2em] transition-colors hover:text-white"
                >
                    Back to top <ArrowUp className="h-3.5 w-3.5" />
                </button>
            </div>
        </div>
    </footer>
);

const KksystemsLayout = () => {
    const location = useLocation();
    const appRoute = isAppRoute(location.pathname);
    useSmoothScroll(!appRoute);

    useEffect(() => {
        document.documentElement.classList.add('enitexa-site-scroll');
        return () => document.documentElement.classList.remove('enitexa-site-scroll');
    }, []);

    return (
        <div className="enitexa-root relative flex min-h-screen flex-col overflow-x-hidden bg-white text-gray-900 dark:bg-[#040713] dark:text-white">
            <PremiumCursor />
            <div className="pf-grain" aria-hidden="true" />
            <div className="pointer-events-none fixed inset-0 z-0">
                <div className="enitexa-ambient absolute inset-0" />
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

            {location.pathname !== '/enitexa.ai/ai' && <EnitexaFooter />}
        </div>
    );
};

export default KksystemsLayout;
