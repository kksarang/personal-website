import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center bg-transparent">
                <div className="mb-4 md:mb-0">
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} Sarang Rajan. All rights reserved.
                    </p>
                </div>

                <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 text-sm">
                    <span>Made with</span>
                    <Heart className="w-4 h-4 text-red-500 fill-current" />
                    <span>using React & Tailwind</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
