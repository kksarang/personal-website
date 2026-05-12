import React, { useEffect, useRef, useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';

const HEADER_SCROLL_RESERVE = {
    mdUp: 104,
    sm: 96,
};

const scrollToAnchorId = (id) => {
    const raw = (id ?? '').replace(/^#/, '').trim();
    if (!raw || typeof window === 'undefined') return;
    const el = document.getElementById(raw);
    if (!el) return;
    const headerReserve = window.matchMedia('(min-width: 768px)').matches
        ? HEADER_SCROLL_RESERVE.mdUp
        : HEADER_SCROLL_RESERVE.sm;
    const apply = () => {
        const y = el.getBoundingClientRect().top + window.scrollY - headerReserve;
        window.scrollTo({ top: Math.max(0, y), behavior: 'auto' });
    };
    requestAnimationFrame(() => requestAnimationFrame(apply));
};

const KksystemsNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const scrollTickingRef = useRef(false);
    const [isDark, setIsDark] = useState(() => {
        if (localStorage.getItem('hexenity-theme')) {
            return localStorage.getItem('hexenity-theme') === 'dark';
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('hexenity-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('hexenity-theme', 'light');
        }
    }, [isDark]);

    const navLinks = [
        { title: 'Home', href: '/hexenity' },
        { title: 'Services', href: '/hexenity/services' },
        { title: 'Core Hexenity', href: '/hexenity/core-hexenity' },
        { title: 'Work', href: '/hexenity/work' },
        { title: 'Learning', href: '/hexenity/learning' },
        { title: 'About', href: '/hexenity/about' },
        { title: 'Contact', href: '/hexenity/contact' },
    ];

    useEffect(() => {
        const onScroll = () => {
            if (scrollTickingRef.current) return;
            scrollTickingRef.current = true;
            requestAnimationFrame(() => {
                setIsScrolled(window.scrollY > 18);
                scrollTickingRef.current = false;
            });
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    useLockBodyScroll(isOpen);

    const handleNavClick = (e, href) => {
        setIsOpen(false);
        e.preventDefault();

        if (href === '/hexenity') {
            if (location.pathname === '/hexenity') {
                window.scrollTo({ top: 0, behavior: 'auto' });
            } else {
                navigate('/hexenity');
            }
            return;
        }

        if (href.includes('#')) {
            const hash = href.split('#')[1];

            if (location.pathname !== '/hexenity') {
                navigate('/hexenity');
                setTimeout(() => scrollToAnchorId(hash), 140);
            } else {
                scrollToAnchorId(hash);
            }
        } else {
            navigate(href);
        }
    };

    const linkIsActive = (link) => {
        if (link.href === '/hexenity') {
            return location.pathname === '/hexenity';
        }
        return location.pathname === link.href || location.pathname.startsWith(`${link.href}/`);
    };

    return (
        <nav className="fixed left-0 right-0 top-[max(1rem,env(safe-area-inset-top,0px))] z-50 px-3 sm:px-6">
            <div
                className={`hexenity-nav-shell mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-4 transition-colors duration-200 ${
                    isScrolled
                        ? 'border-indigo-300/30 bg-[rgba(6,9,20,0.95)] py-2 shadow-[0_10px_30px_rgba(0,0,0,0.35)]'
                        : 'border-white/10 bg-[rgba(6,9,20,0.88)] py-2.5'
                }`}
            >
                <a
                    href="/hexenity"
                    onClick={(e) => handleNavClick(e, '/hexenity')}
                    className="hexenity-nav-brand inline-flex items-center rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1.5 text-sm font-bold tracking-wide text-indigo-200"
                >
                    HEXENITY
                </a>

                <div className="hidden items-center gap-1.5 md:flex">
                    {navLinks.map((link) => {
                        const active = linkIsActive(link);
                        return (
                            <a
                                key={link.title}
                                href={link.href}
                                onClick={link.newTab ? undefined : (e) => handleNavClick(e, link.href)}
                                target={link.newTab ? '_blank' : undefined}
                                rel={link.newTab ? 'noopener noreferrer' : undefined}
                                className={`hexenity-nav-link-item inline-flex items-center rounded-full border px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] transition-all duration-300 ${
                                    active
                                        ? 'border-indigo-300/45 bg-indigo-400/20 text-indigo-100'
                                        : 'border-transparent text-slate-300 hover:border-indigo-300/30 hover:bg-indigo-300/10 hover:text-indigo-100'
                                }`}
                            >
                                {link.title}
                            </a>
                        );
                    })}
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={() => navigate('/hexenity/contact')}
                        className="hidden rounded-full border border-indigo-300/35 bg-indigo-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-indigo-100 transition hover:bg-indigo-500/30 lg:inline-flex"
                    >
                        Executive call
                    </button>
                    <button
                        onClick={() => setIsDark(!isDark)}
                        className="hexenity-theme-btn rounded-full border border-white/10 p-2 text-slate-300 transition hover:border-indigo-300/45 hover:text-indigo-200"
                        aria-label="Toggle dark mode"
                    >
                        {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="rounded-full border border-white/10 p-2 text-slate-300 transition hover:border-indigo-300/45 hover:text-indigo-200 md:hidden"
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="hexenity-contained-scroll mx-auto mt-2 max-h-[calc(100dvh-120px-env(safe-area-inset-top,0px)-env(safe-area-inset-bottom,0px))] max-w-7xl overflow-y-auto rounded-2xl border border-white/10 bg-[rgba(6,9,20,0.95)] p-3 md:hidden">
                    {navLinks.map((link) => (
                        <a
                            key={link.title}
                            href={link.href}
                            onClick={link.newTab ? undefined : (e) => handleNavClick(e, link.href)}
                            target={link.newTab ? '_blank' : undefined}
                            rel={link.newTab ? 'noopener noreferrer' : undefined}
                            className="block rounded-lg px-3 py-2 text-sm text-slate-200 transition hover:bg-indigo-300/10 hover:text-indigo-100"
                        >
                            {link.title}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default KksystemsNavbar;
