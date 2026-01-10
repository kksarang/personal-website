import React from 'react';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

const AboutMaker = () => {
    return (
        <section className="py-24 bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="relative inline-block mb-8">
                    <div className="absolute inset-0 bg-indigo-500 blur-2xl opacity-20 rounded-full"></div>
                    <img
                        src="/assets/images/sarang-profile.jpg"
                        alt="Sarang Rajan"
                        className="relative w-24 h-24 rounded-full border-4 border-white dark:border-slate-800 shadow-lg object-cover mx-auto"
                    />
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Built by Sarang Rajan</h3>
                <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto mb-8 font-light">
                    Mobile Team Lead & Passionate Developer. I build apps that are not just functional, but delightful to use.
                </p>

                <div className="flex justify-center space-x-6">
                    <a href="https://github.com/kksarang" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/sarang-rajan/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="mailto:kksarangrajan@gmail.com" className="text-gray-400 hover:text-rose-500 transition-colors">
                        <Mail className="w-5 h-5" />
                    </a>
                    <a href="https://www.instagram.com/sarang_rajan/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">
                        <Instagram className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AboutMaker;
