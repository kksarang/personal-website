import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const KksystemsNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(() => {
        if (localStorage.getItem('theme')) {
            return localStorage.getItem('theme') === 'dark';
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    const navLinks = [
        { title: 'Home', href: '/kksystems' },
        { title: 'Services', href: '/kksystems#services' },
        { title: 'Work', href: '/kksystems/work' },
        { title: 'Learning', href: '/kksystems/learning' },
        { title: 'Contact', href: '/kksystems/contact' },
    ];

    const handleNavClick = (e, href) => {
        setIsOpen(false);
        e.preventDefault();

        if (href.includes('#')) {
            // It's a hash link for the home page sections
            if (location.pathname !== '/kksystems') {
                navigate('/kksystems');
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

    return (
        <nav className="fixed top-0 z-50 w-full bg-white/90 dark:bg-[#0A0B14]/90 backdrop-blur-md border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="flex items-center group">
                            <h1 className="font-extrabold text-2xl tracking-tighter text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                                kksystems
                            </h1>
                        </Link>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex items-baseline space-x-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.title}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${location.pathname === link.href || (location.pathname.startsWith(link.href) && link.href !== '/kksystems')
                                        ? 'text-indigo-600 bg-indigo-50 dark:text-white dark:bg-white/10'
                                        : 'text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-white'
                                        }`}
                                >
                                    {link.title}
                                </a>
                            ))}
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
                <div className="md:hidden bg-white dark:bg-[#0F111A] border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.title}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === link.href || (location.pathname.startsWith(link.href) && link.href !== '/kksystems')
                                    ? 'text-indigo-600 bg-indigo-50 dark:text-white dark:bg-white/10'
                                    : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/5'
                                    }`}
                            >
                                {link.title}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default KksystemsNavbar;
