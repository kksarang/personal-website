import React, { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const KksystemsNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
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
        { title: 'Work', href: '/hexenity/work' },
        { title: 'About', href: '/hexenity/about' },
        { title: 'Contact', href: '/hexenity/contact' },
    ];

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 18);
        onScroll();
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleNavClick = (e, href) => {
        setIsOpen(false);
        e.preventDefault();

        if (href === '/hexenity') {
            if (location.pathname === '/hexenity') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                navigate('/hexenity');
            }
            return;
        }

        if (href.includes('#')) {
            const hash = href.split('#')[1];

            if (location.pathname !== '/hexenity') {
                navigate('/hexenity');
                setTimeout(() => {
                    const element = document.getElementById(hash);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            } else {
                const element = document.getElementById(hash);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
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
        <nav className="fixed top-4 z-50 w-full px-3 sm:px-6">
            <div
                className={`hexenity-nav-shell mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-4 backdrop-blur-xl transition-all duration-300 ${
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
                                onClick={(e) => handleNavClick(e, link.href)}
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
                <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/10 bg-[rgba(6,9,20,0.95)] p-3 backdrop-blur-xl md:hidden">
                    {navLinks.map((link) => (
                        <a
                            key={link.title}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
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
