import React from 'react';
import { Heart, Github, Linkedin, Mail, Instagram } from 'lucide-react';
import profileImage from '../assets/profile.jpg';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

                {/* Profile Image */}
                <div className="mb-6 relative group">
                    <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50"></div>
                    <img
                        src={profileImage}
                        alt="Sarang Rajan"
                        className="relative w-24 h-24 rounded-full border-4 border-white dark:border-slate-800 shadow-xl object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Name & Role */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Built by Sarang Rajan
                </h3>
                <p className="text-gray-500 dark:text-gray-400 max-w-lg mb-8 leading-relaxed">
                    Mobile Team Lead & Passionate Developer. I build apps that are not just functional, but delightful to use.
                </p>

                {/* Social Icons */}
                <div className="flex items-center space-x-6 mb-12">
                    <a href="https://github.com/kksarang" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 transform hover:-translate-y-1">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/sarang-rajan/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 transform hover:-translate-y-1">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="mailto:kksarangrajan@gmail.com" className="text-gray-400 hover:text-rose-500 transition-colors duration-300 transform hover:-translate-y-1">
                        <Mail className="w-5 h-5" />
                    </a>
                    <a href="https://www.instagram.com/sarang_rajan/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors duration-300 transform hover:-translate-y-1">
                        <Instagram className="w-5 h-5" />
                    </a>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-100 dark:bg-slate-800 mb-8"></div>

                {/* Bottom Bar */}
                <div className="w-full flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                    <p className="mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Sarang Rajan. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-1">
                        <span>Made with</span>
                        <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse bg-red-500/20 rounded-full" />
                        <span>using React & Tailwind</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
