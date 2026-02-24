import React from 'react';
import { MessageSquare, PenTool, Rocket } from 'lucide-react';

const Step = ({ number, title, description, icon: Icon, isLast }) => (
    <div className="relative flex-1 flex flex-col items-center text-center group">
        {/* Connecting Line */}
        {!isLast && (
            <div className="absolute top-12 left-[60%] w-[80%] h-[2px] hidden lg:block">
                <div className="w-full h-full bg-gradient-to-r from-purple-500/50 to-blue-500/50 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 -translate-x-full animate-[shimmer_2s_infinite]" />
                </div>
            </div>
        )}

        {/* Icon Container */}
        <div className="w-24 h-24 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform duration-500 group-hover:bg-gradient-to-br from-purple-500/20 to-blue-500/20">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500" />
            <Icon className="w-10 h-10 text-gray-300 group-hover:text-white transition-colors duration-500" />
            <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-sm font-bold text-white shadow-lg">
                {number}
            </div>
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-400 max-w-sm">{description}</p>
    </div>
);

const HowItWorks = () => {
    return (
        <section className="py-[100px] bg-[#0F111A] relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-semibold mb-6">
                        Process
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        How We Bring Ideas to Life
                    </h2>
                    <p className="text-xl text-gray-400">
                        A streamlined, transparent development process ensuring quality at every step.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 justify-between relative">
                    <Step
                        number="01"
                        icon={MessageSquare}
                        title="Discuss & Plan"
                        description="We start by understanding your vision, requirements, and target audience to create a solid technical roadmap."
                    />
                    <Step
                        number="02"
                        icon={PenTool}
                        title="Design & Develop"
                        description="Our team designs intuitive interfaces and builds robust, scalable applications using cutting-edge technologies."
                    />
                    <Step
                        number="03"
                        icon={Rocket}
                        title="Deploy & Support"
                        description="We handle the complex deployment process to app stores and servers, providing ongoing maintenance."
                        isLast={true}
                    />
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
