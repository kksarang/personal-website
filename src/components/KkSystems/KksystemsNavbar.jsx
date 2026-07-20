import React, { useEffect, useRef, useState } from 'react';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import Magnetic from '../ui/Magnetic';
import HexenityMark from './HexenityMark';

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
        if (window.__lenis) {
            window.__lenis.scrollTo(Math.max(0, y));
        } else {
            window.scrollTo({ top: Math.max(0, y), behavior: 'auto' });
        }
    };
    requestAnimationFrame(() => requestAnimationFrame(apply));
};

const NAV_LINKS = [
    { title: 'Home', href: '/hexenity', index: '01' },
    { title: 'Services', href: '/hexenity/services', index: '02' },
    { title: 'Core', href: '/hexenity/core-hexenity', index: '03' },
    { title: 'Work', href: '/hexenity/work', index: '04' },
    { title: 'Learning', href: '/hexenity/learning', index: '05' },
    { title: 'About', href: '/hexenity/about', index: '06' },
];

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

    useLockBodyScroll(isOpen);

    const handleNavClick = (e, href) => {
        setIsOpen(false);
        e.preventDefault();

        if (href === '/hexenity') {
            if (location.pathname === '/hexenity') {
                if (window.__lenis) {
                    window.__lenis.scrollTo(0);
                } else {
                    window.scrollTo({ top: 0, behavior: 'auto' });
                }
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
                className={`hexenity-nav-shell mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 transition-all duration-300 sm:px-5 ${
                    isScrolled
                        ? 'border-white/[0.12] bg-[rgba(4,6,14,0.92)] py-2 shadow-[0_18px_50px_-18px_rgba(0,0,0,0.6)]'
                        : 'border-white/[0.08] bg-[rgba(4,6,14,0.82)] py-2.5'
                }`}
            >
                <a
                    href="/hexenity"
                    onClick={(e) => handleNavClick(e, '/hexenity')}
                    className="hexenity-nav-brand pf-display flex items-center gap-2.5 text-base font-bold tracking-tight text-white"
                >
                    <HexenityMark size={24} />
                    <span>
                        Hexenity<span className="text-indigo-400">.</span>
                    </span>
                </a>

                <div className="hidden items-center gap-7 md:flex">
                    {NAV_LINKS.map((link) => {
                        const active = linkIsActive(link);
                        return (
                            <a
                                key={link.title}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`hexenity-nav-link-item group pf-mono relative text-[10.5px] uppercase tracking-[0.22em] transition-colors duration-300 ${
                                    active ? 'text-indigo-300' : 'text-slate-400 hover:text-white'
                                }`}
                            >
                                <sup className="mr-1 text-[8px] text-indigo-400/60">{link.index}</sup>
                                {link.title}
                                <span
                                    className={`absolute -bottom-1.5 left-0 h-px bg-indigo-400 transition-all duration-500 ${
                                        active ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`}
                                />
                            </a>
                        );
                    })}
                </div>

                <div className="flex items-center gap-2">
                    <Magnetic strength={0.25}>
                        <button
                            onClick={() => navigate('/hexenity/contact')}
                            className="group hidden items-center gap-1.5 rounded-full border border-white bg-white py-2 pl-4 pr-3 text-xs font-semibold text-black transition-all duration-500 hover:bg-transparent hover:text-white lg:inline-flex"
                        >
                            Start a project
                            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </button>
                    </Magnetic>
                    <button
                        onClick={() => setIsDark(!isDark)}
                        className="hexenity-theme-btn flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:border-indigo-300/45 hover:text-indigo-200"
                        aria-label="Toggle dark mode"
                    >
                        {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:border-indigo-300/45 hover:text-indigo-200 md:hidden"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="hexenity-contained-scroll mx-auto mt-2 max-h-[calc(100dvh-120px-env(safe-area-inset-top,0px)-env(safe-area-inset-bottom,0px))] max-w-6xl overflow-y-auto rounded-2xl border border-white/10 bg-[rgba(4,6,14,0.96)] p-4 md:hidden">
                    {NAV_LINKS.map((link, i) => (
                        <a
                            key={link.title}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="pf-display flex items-baseline gap-3 rounded-xl px-3 py-3 text-2xl font-bold text-white transition hover:bg-indigo-300/10 hover:text-indigo-200"
                            style={{ transitionDelay: `${i * 30}ms` }}
                        >
                            <span className="pf-mono text-[10px] text-indigo-400">{link.index}</span>
                            {link.title}
                        </a>
                    ))}
                    <button
                        onClick={(e) => {
                            setIsOpen(false);
                            handleNavClick(e, '/hexenity/contact');
                        }}
                        className="pf-mono mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-black"
                    >
                        Start a project <ArrowUpRight className="h-4 w-4" />
                    </button>
                </div>
            )}
        </nav>
    );
};

export default KksystemsNavbar;
