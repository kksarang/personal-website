import React from 'react';

const TrustedBy = () => {
    return (
        <section className="py-10 border-b border-white/5 bg-[#0A0B14]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm font-medium text-gray-500 mb-8 uppercase tracking-widest">
                    Trusted by innovative teams worldwide
                </p>
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500" />
                        <span className="text-xl font-bold text-white">StartupTech</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rotate-45 bg-blue-500" />
                        <span className="text-xl font-bold text-white">GlobalBusiness</span>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                        <span className="text-2xl font-bold">50+ Projects</span>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                        <span className="text-2xl font-bold">20+ Clients</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;
