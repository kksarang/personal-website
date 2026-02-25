import React from 'react';
import { Globe, Layout, PenTool, Layers, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AboutKkSystems = () => {
    const navigate = useNavigate();

    return (
        <section id="about-kksystems" className="py-20 bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* 1. SECTION HEADER (Matching About.jsx format) */}
                <div className="text-center mb-16">
                    <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">
                        kk systems – Digital & Software Solutions
                    </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Building Powerful Digital Experiences
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto">
                        We design and develop modern mobile applications, websites, and digital branding solutions that help businesses grow faster in the digital world.
                    </p>
                    <div className="mt-8 flex justify-center gap-4">
                        <button
                            onClick={() => navigate('/kksystems/work')}
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition"
                        >
                            View Our Work
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                    {/* LEFT COLUMN: ABOUT & WHY CHOOSE US */}
                    <div className="space-y-12">

                        <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300">
                            <p>
                                <strong>kk systems</strong> is a modern software development company founded by Sarang, focused on delivering high-quality digital solutions for startups, businesses, and entrepreneurs.
                            </p>
                            <p>
                                We specialize in Mobile App Development, iOS & Android Applications, Website Development, UI/UX Design, and Logo & Brand Identity.
                            </p>
                            <p className="border-l-4 border-indigo-500 pl-4 italic mt-6">
                                Our mission is to transform ideas into scalable digital products with clean design, high performance, and long-term reliability. We don't just build applications — we build digital experiences.
                            </p>
                        </div>

                        {/* WHY CHOOSE US */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Why Choose Us?</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Modern & Clean Development",
                                    "Performance-Focused Apps",
                                    "SEO-Optimized Websites",
                                    "Scalable Architecture",
                                    "Long-Term Technical Support",
                                    "Affordable & Transparent Pricing"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* RIGHT COLUMN: SERVICES GRID */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-slate-800 pb-4">Our Core Services</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { title: "Mobile App Development", icon: Layers, desc: "Custom Android and iOS applications built using Flutter and React Native." },
                                { title: "Website Development", icon: Globe, desc: "Responsive, SEO-optimized, and high-performance websites." },
                                { title: "UI/UX Design", icon: Layout, desc: "Elegant, user-centered interface designs that improve engagement." },
                                { title: "Branding & Digital Marketing", icon: PenTool, desc: "Professional logo design, digital marketing, social media creatives, & brand identity." }
                            ].map((service, idx) => (
                                <div key={idx} className="p-5 bg-gray-50 dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700 flex flex-col items-start gap-4">
                                    <div className="p-3 bg-white dark:bg-slate-900 rounded-lg shadow-sm">
                                        <service.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">{service.title}</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{service.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                <div className="mt-16 text-center flex justify-center">
                    <div className="w-24 h-1 bg-indigo-500 rounded-full opacity-80" />
                </div>

            </div>
        </section>
    );
};

export default AboutKkSystems;
