import React from 'react';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white to-gray-50 dark:from-slate-900 dark:to-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-sm uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold mb-4">
                            Hello, I'm
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                            Sarang <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Rajan</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-medium">
                            Mobile Application Developer
                            <span className="block text-lg mt-2 font-normal text-gray-500 dark:text-gray-400">
                                Flutter | Android (Native) | React Native
                            </span>
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mb-10 text-lg leading-relaxed">
                            I am a passionate Mobile Team Lead and Developer with extensive experience in building high-quality mobile applications.
                            I specialize in creating seamless user experiences across Android and iOS platforms.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg transition-all shadow-lg hover:shadow-indigo-500/25"
                            >
                                Contact Me
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                            <a
                                href="#projects"
                                className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-slate-600 text-base font-medium rounded-lg text-gray-700 dark:text-gray-200 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 md:text-lg transition-all"
                            >
                                View Projects
                            </a>
                        </div>

                        <div className="mt-12 flex items-center justify-center md:justify-start space-x-6">
                            <span className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wider">Connect with me:</span>
                            <div className="flex space-x-4">
                                <a href="https://github.com/kksarang" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                    <Github className="w-6 h-6" />
                                </a>
                                <a href="https://www.linkedin.com/in/sarang-rajan/" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                    <Linkedin className="w-6 h-6" />
                                </a>
                                <a href="mailto:kksarangrajan@gmail.com" className="p-2 text-gray-400 hover:text-rose-500 transition-colors">
                                    <Mail className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 relative hidden md:block">
                        <div className="relative w-[500px] h-[500px]">
                            {/* Abstract shapes/blobs */}
                            <div className="absolute top-0 right-0 w-72 h-72 bg-purple-300 dark:bg-purple-900/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                            <div className="absolute top-0 -left-4 w-72 h-72 bg-indigo-300 dark:bg-indigo-900/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-900/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

                            {/* Code block decoration */}
                            <div className="relative bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl">
                                <div className="flex space-x-2 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <pre className="text-sm leading-relaxed">
                                    <code>
                                        <span className="text-indigo-600 dark:text-indigo-400">class</span>{' '}
                                        <span className="text-yellow-600 dark:text-yellow-400">Developer</span> {'{'}
                                        <br />
                                        &nbsp;&nbsp;
                                        <span className="text-purple-600 dark:text-purple-400">constructor</span>() {'{'}
                                        <br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <span className="text-blue-600 dark:text-blue-400">this</span>.name ={' '}
                                        <span className="text-green-600 dark:text-green-400">'Sarang Rajan'</span>;
                                        <br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <span className="text-blue-600 dark:text-blue-400">this</span>.role ={' '}
                                        <span className="text-green-600 dark:text-green-400">'Mobile Lead'</span>;
                                        <br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <span className="text-blue-600 dark:text-blue-400">this</span>.skills = [
                                        <br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <span className="text-green-600 dark:text-green-400">'Flutter & React Native'</span>,
                                        <br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <span className="text-green-600 dark:text-green-400">'Android & iOS'</span>,
                                        <br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <span className="text-green-600 dark:text-green-400">'React.js & HTML5|CSS3'</span>
                                        <br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;];
                                        <br />
                                        &nbsp;&nbsp;{'}'}
                                        <br />
                                        {'}'}
                                    </code>
                                </pre>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
