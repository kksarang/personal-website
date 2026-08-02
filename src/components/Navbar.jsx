import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, ArrowUpRight } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLockBodyScroll } from '../hooks/useLockBodyScroll';

const PORTFOLIO_HEADER_SCROLL = 76;

const scrollToPortfolioHash = (href) => {
    const selector = href.replace(/^\//, '');
    const element = typeof document !== 'undefined' ? document.querySelector(selector) : null;
    if (!element) return;
    const apply = () => {
        const y = element.getBoundingClientRect().top + window.scrollY - PORTFOLIO_HEADER_SCROLL;
        window.scrollTo({ top: Math.max(0, y), behavior: 'auto' });
    };
    requestAnimationFrame(() => requestAnimationFrame(apply));
};

const Navbar = () => {
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

    useLockBodyScroll(isOpen);

    const navLinks = [
        { title: 'Home', href: '/#home', type: 'hash' },
        { title: 'About', href: '/#about', type: 'hash' },
        { title: 'Skills', href: '/#skills', type: 'hash' },
        { title: 'Experience', href: '/#experience', type: 'hash' },
        { title: 'Enitexa.Ai', href: '/enitexa.ai', type: 'page' },
        { title: 'Contact', href: '/#contact', type: 'hash' },
    ];

    const handleNavClick = (e, link) => {
        setIsOpen(false);
        if (link.type === 'hash') {
            e.preventDefault();
            if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => scrollToPortfolioHash(link.href), 140);
            } else {
                scrollToPortfolioHash(link.href);
            }
        } else {
            navigate(link.href);
        }
    };

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-[#111110]/10 bg-[#F4F4F0]/85 backdrop-blur-md dark:border-white/10 dark:bg-[#09090b]/85">
            <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
                <a
                    href="/#home"
                    onClick={(e) => handleNavClick(e, { href: '/#home', type: 'hash' })}
                    className="port-display text-xl font-bold tracking-tight text-[#111110] dark:text-[#F4F4F0]"
                >
                    Sarang<span className="port-accent">.</span>
                </a>

                <div className="hidden items-center gap-1 lg:flex">
                    {navLinks.map((link, i) => (
                        <a
                            key={link.title}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link)}
                            className="port-mono group relative px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-[#3a3a36] transition-colors hover:text-[#111110] dark:text-white/45 dark:hover:text-white"
                        >
                            <span className="mr-1.5 port-accent">0{i + 1}</span>
                            {link.title}
                            <span className="absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-[#B8F03A] transition-transform duration-300 group-hover:scale-x-100" />
                        </a>
                    ))}
                    <button
                        type="button"
                        onClick={() => setIsDark(!isDark)}
                        className="ml-3 rounded-full border border-[#111110]/12 p-2 text-[#111110] transition hover:border-[#B8F03A] hover:bg-[#B8F03A] dark:border-white/15 dark:text-white dark:hover:text-[#09090b]"
                        aria-label="Toggle theme"
                    >
                        {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                    </button>
                    <a
                        href="/#contact"
                        onClick={(e) => handleNavClick(e, { href: '/#contact', type: 'hash' })}
                        className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-[#111110] px-4 py-2 text-xs font-semibold text-[#B8F03A] transition hover:bg-[#B8F03A] hover:text-[#09090b] dark:bg-[#B8F03A] dark:text-[#09090b] dark:hover:bg-white"
                    >
                        Let&apos;s talk
                        <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                </div>

                <div className="flex items-center gap-2 lg:hidden">
                    <button
                        type="button"
                        onClick={() => setIsDark(!isDark)}
                        className="rounded-full border border-[#111110]/12 p-2 dark:border-white/15"
                        aria-label="Toggle theme"
                    >
                        {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                    </button>
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="rounded-full border border-[#111110]/12 p-2 dark:border-white/15"
                        aria-label="Menu"
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="border-t border-[#111110]/10 bg-[#F4F4F0] px-5 py-4 dark:border-white/10 dark:bg-[#09090b] lg:hidden">
                    {navLinks.map((link, i) => (
                        <a
                            key={link.title}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link)}
                            className="port-mono flex items-center gap-3 border-b border-[#111110]/08 py-3.5 text-[11px] uppercase tracking-[0.2em] text-[#111110] last:border-0 dark:border-white/10 dark:text-[#F4F4F0]"
                        >
                            <span className="port-accent">0{i + 1}</span>
                            {link.title}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
