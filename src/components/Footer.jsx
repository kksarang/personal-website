import React from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative border-t border-[#111110]/10 bg-[#111110] text-[#F4F4F0] dark:border-white/10">
            <div className="port-lime-wash opacity-60" aria-hidden="true" />
            <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
                <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
                    <div>
                        <p className="port-mono mb-4 text-[10px] uppercase tracking-[0.3em] text-white/40">
                            Available for new work
                        </p>
                        <a
                            href="/#contact"
                            className="port-display group inline-flex items-end gap-3 text-[clamp(2.4rem,6vw,4.5rem)] font-extrabold leading-[0.95] tracking-tight"
                        >
                            Let&apos;s build
                            <span className="text-[#B8F03A]">.</span>
                            <ArrowUpRight className="mb-2 h-8 w-8 text-[#B8F03A] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 sm:h-10 sm:w-10" />
                        </a>
                    </div>
                    <div className="flex items-center gap-5">
                        <a href="https://github.com/kksarang" target="_blank" rel="noopener noreferrer" className="text-white/40 transition hover:text-[#B8F03A]" aria-label="GitHub">
                            <Github className="h-5 w-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/sarang-rajan/" target="_blank" rel="noopener noreferrer" className="text-white/40 transition hover:text-[#B8F03A]" aria-label="LinkedIn">
                            <Linkedin className="h-5 w-5" />
                        </a>
                        <a href="mailto:kksarangrajan@gmail.com" className="text-white/40 transition hover:text-[#B8F03A]" aria-label="Email">
                            <Mail className="h-5 w-5" />
                        </a>
                        <a href="https://www.instagram.com/sarang_rajan/" target="_blank" rel="noopener noreferrer" className="text-white/40 transition hover:text-[#B8F03A]" aria-label="Instagram">
                            <Instagram className="h-5 w-5" />
                        </a>
                    </div>
                </div>

                <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/40 sm:flex-row sm:items-center">
                    <p className="port-mono text-[10px] uppercase tracking-[0.2em]">
                        © {new Date().getFullYear()} Sarang Rajan
                    </p>
                    <p className="max-w-md text-sm leading-relaxed">
                        Mobile Team Lead &amp; Full Stack Developer — building apps that feel as good as they work.
                    </p>
                    <a href="/hexenity" className="port-mono text-[10px] uppercase tracking-[0.2em] text-[#B8F03A] transition hover:text-white">
                        Hexenity →
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
