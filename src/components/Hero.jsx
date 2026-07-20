import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section
            id="home"
            className="relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-10 sm:pt-14"
        >
            <div className="port-lime-wash" aria-hidden="true" />

            <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
                <div className="port-reveal">
                    <p className="port-mono mb-6 text-[11px] uppercase tracking-[0.35em] text-[#6b6b63] dark:text-white/40">
                        <span className="text-[#B8F03A]">(01)</span> Mobile Team Lead
                    </p>

                    <h1 className="port-display text-[clamp(2.8rem,8vw,6.5rem)] font-extrabold leading-[0.92] tracking-tight text-[#111110] dark:text-[#F4F4F0]">
                        Sarang
                        <br />
                        Rajan<span className="text-[#B8F03A]">.</span>
                    </h1>

                    <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#6b6b63] dark:text-white/55 sm:text-xl">
                        I design and ship mobile products people actually use —
                        Flutter, native Android &amp; iOS, React Native.
                    </p>

                    <div className="mt-10 flex flex-wrap items-center gap-4">
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 rounded-full bg-[#111110] px-7 py-3.5 text-sm font-semibold text-[#B8F03A] transition hover:bg-[#B8F03A] hover:text-[#09090b] dark:bg-[#B8F03A] dark:text-[#09090b] dark:hover:bg-white"
                        >
                            Start a conversation
                            <ArrowRight className="h-4 w-4" />
                        </a>
                        <a
                            href="#adventures"
                            className="inline-flex items-center gap-2 rounded-full border border-[#111110]/15 px-7 py-3.5 text-sm font-semibold text-[#111110] transition hover:border-[#B8F03A] hover:bg-[#B8F03A]/15 dark:border-white/20 dark:text-white dark:hover:border-[#B8F03A]"
                        >
                            See adventures
                        </a>
                    </div>

                    <div className="mt-12 flex items-center gap-5">
                        <span className="port-mono text-[10px] uppercase tracking-[0.25em] text-[#6b6b63] dark:text-white/35">
                            Connect
                        </span>
                        <div className="h-px w-8 bg-[#111110]/15 dark:bg-white/15" />
                        <a href="https://github.com/kksarang" target="_blank" rel="noopener noreferrer" className="text-[#6b6b63] transition hover:text-[#111110] dark:text-white/40 dark:hover:text-[#B8F03A]" aria-label="GitHub">
                            <Github className="h-5 w-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/sarang-rajan/" target="_blank" rel="noopener noreferrer" className="text-[#6b6b63] transition hover:text-[#111110] dark:text-white/40 dark:hover:text-[#B8F03A]" aria-label="LinkedIn">
                            <Linkedin className="h-5 w-5" />
                        </a>
                        <a href="mailto:kksarangrajan@gmail.com" className="text-[#6b6b63] transition hover:text-[#111110] dark:text-white/40 dark:hover:text-[#B8F03A]" aria-label="Email">
                            <Mail className="h-5 w-5" />
                        </a>
                    </div>
                </div>

                <div className="port-reveal relative mx-auto w-full max-w-md lg:max-w-none" style={{ animationDelay: '120ms' }}>
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-[#111110]/10 dark:border-white/10">
                        <img
                            src={profileImage}
                            alt="Sarang Rajan"
                            className="h-full w-full object-cover grayscale transition duration-700 hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/70 via-transparent to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6">
                            <p className="port-mono text-[10px] uppercase tracking-[0.25em] text-[#B8F03A]">
                                Based in India
                            </p>
                            <p className="port-display mt-1 text-xl font-bold text-white">
                                Flutter · Android · iOS · RN
                            </p>
                        </div>
                    </div>
                    <div className="absolute -right-3 -top-3 rounded-full bg-[#B8F03A] px-4 py-2 port-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#09090b] sm:-right-4 sm:-top-4">
                        Open to work
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
