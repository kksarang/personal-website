import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const KksystemsNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
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
        { title: 'Services', href: '/hexenity#services' },
        { title: 'Work', href: '/hexenity/work' },
        { title: 'Learning', href: '/hexenity/learning' },
        { title: 'Life at Hexenity', href: '/hexenity/life-at-hexenity' },
        { title: 'Contact', href: '/hexenity/contact' },
    ];

    const handleNavClick = (e, href) => {
        setIsOpen(false);
        e.preventDefault();

        if (href.includes('#')) {
            // It's a hash link for the home page sections
            if (location.pathname !== '/hexenity') {
                navigate('/hexenity');
                setTimeout(() => {
                    const hash = href.split('#')[1];
                    const element = document.getElementById(hash);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            } else {
                const hash = href.split('#')[1];
                const element = document.getElementById(hash);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Standard page routing
            navigate(href);
        }
    };

    const linkIsActive = (href) =>
        location.pathname === href || (location.pathname.startsWith(href) && href !== '/hexenity');

    return (
        <nav
            className={`fixed top-0 z-50 w-full border-b backdrop-blur-[12px] transition-colors duration-300 ${
                isDark
                    ? 'border-white/10 bg-[rgba(11,15,25,0.72)]'
                    : 'border-gray-200/80 bg-white/85'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 flex items-center">
                        <Link
                            to="/hexenity"
                            onClick={() => window.scrollTo(0, 0)}
                            className="flex items-center group cursor-pointer"
                            aria-label="Go to Hexenity home"
                        >
                            <h1 className="font-inter font-extrabold text-2xl tracking-tighter bg-gradient-to-r from-[#4F46E5] via-[#7c3aed] to-[#9333EA] bg-clip-text text-transparent group-hover:opacity-90 transition-opacity duration-300">
                                hexenity
                            </h1>
                        </Link>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex items-baseline space-x-6">
                            {navLinks.map((link) => {
                                const active = linkIsActive(link.href);
                                return (
                                    <a
                                        key={link.title}
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className={`hexenity-nav-link px-2 py-2 cursor-pointer font-inter ${
                                            active
                                                ? 'hexenity-nav-link-active text-indigo-700 dark:text-white'
                                                : 'text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-white'
                                        }`}
                                    >
                                        {link.title}
                                    </a>
                                );
                            })}
                        </div>
                        <button
                            onClick={() => setIsDark(!isDark)}
                            className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800 transition-colors"
                            aria-label="Toggle dark mode"
                        >
                            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                        <div className="flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-indigo-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/10 focus:outline-none transition-colors"
                            >
                                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div
                    className={`md:hidden border-b transition-colors duration-300 ${
                        isDark ? 'border-white/10 bg-[rgba(11,15,25,0.95)]' : 'border-gray-200 bg-white/95'
                    }`}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => {
                            const active = linkIsActive(link.href);
                            return (
                                <a
                                    key={link.title}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className={`block px-3 py-2 rounded-xl text-base font-inter font-medium hexenity-nav-link ${
                                        active
                                            ? 'hexenity-nav-link-active text-indigo-700 dark:text-white'
                                            : 'text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-white'
                                    }`}
                                >
                                    {link.title}
                                </a>
                            );
                        })}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default KksystemsNavbar;
