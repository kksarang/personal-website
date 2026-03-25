import React from 'react';
import { Zap, ShieldCheck, Search, Code2, Headphones, Layers } from 'lucide-react';

const FeatureItem = ({ icon: Icon, title, description, delay }) => (
    <div className={`p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 flex gap-4 animate-fade-in-up`} style={{ animationDelay: `${delay}ms` }}>
        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center border border-white/5">
            <Icon className="w-6 h-6 text-indigo-400" />
        </div>
        <div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-400 leading-relaxed">{description}</p>
        </div>
    </div>
);

const Features = () => {
    const features = [
        {
            icon: Code2,
            title: "Clean Code",
            description: "Maintainable, scalable, and well-documented codebases following industry best practices to ensure longevity.",
            delay: 100
        },
        {
            icon: ShieldCheck,
            title: "Secure Architecture",
            description: "Implementing top-tier security measures to protect your applications and user data from threats.",
            delay: 200
        },
        {
            icon: Zap,
            title: "On-time Delivery",
            description: "We respect your time. Professional project management guarantees your applications launch exactly when promised.",
            delay: 300
        },
        {
            icon: Headphones,
            title: "Client Satisfaction",
            description: "Dedicated collaboration, transparent communication, and post-launch support to keep your digital products running flawlessly.",
            delay: 400
        }
    ];

    return (
        <section className="py-[100px] bg-[#0A0B14] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left Sticky Content */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-24">
                            <div className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-semibold mb-6">
                                Advantages
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Why Choose hexenity
                            </h2>
                            <p className="text-lg text-gray-400 mb-8">
                                We don't just write code; we engineer comprehensive digital solutions tailored to elevate your business.
                            </p>
                            <div className="hidden lg:block w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
                        </div>
                    </div>

                    {/* Right Grid Content */}
                    <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
                        {features.map((feature, idx) => (
                            <FeatureItem key={idx} {...feature} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
