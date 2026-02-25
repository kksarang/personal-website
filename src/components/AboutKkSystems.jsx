import React from 'react';
import { ShieldCheck, Truck, HardHat, Wrench, Users, Factory } from 'lucide-react';

const AboutKkSystems = () => {
    return (
        <section id="about-kksystems" className="py-24 bg-slate-50 dark:bg-slate-800/50 border-y border-gray-100 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">Your Trusted Service Partner</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        KK Systems – Professional Service Solutions
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFTSIDE: SEO TEXT CONTENT */}
                    <div className="space-y-6">
                        <div className="prose prose-lg dark:prose-invert">
                            <p className="text-gray-700 dark:text-gray-300 font-medium text-lg leading-relaxed">
                                <strong>KK Systems</strong> is a service-oriented company established by Sarang, focused on delivering reliable industrial and commercial service solutions. We operate with a commitment to quality, safety, and efficiency across multiple sectors.
                            </p>

                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Our mission is to support businesses with dependable services that enhance operational efficiency and long-term growth. We combine industry expertise, quality standards, and trusted partnerships to deliver solutions perfectly tailored to client needs.
                            </p>

                            <div className="mt-8 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700">
                                <h4 className="text-gray-900 dark:text-white font-bold mb-3">Our Core Commitment</h4>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                    KK Systems is committed to becoming a leading service provider in industrial supply, logistics, construction contracting, and manpower solutions. Our team ensures quality standards, competitive pricing, and timely delivery for every project we undertake.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHTSIDE: SERVICES GRID */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { title: "Oil, Gas & LNG Components", icon: Factory, color: "text-orange-500", bg: "bg-orange-50 dark:bg-orange-500/10" },
                            { title: "Building Materials Supply", icon: ShieldCheck, color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-500/10" },
                            { title: "Transportation & Logistics", icon: Truck, color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-500/10" },
                            { title: "Construction & Contracting", icon: HardHat, color: "text-yellow-600", bg: "bg-yellow-50 dark:bg-yellow-500/10" },
                            { title: "Building Maintenance", icon: Wrench, color: "text-purple-500", bg: "bg-purple-50 dark:bg-purple-500/10" },
                            { title: "Professional Manpower", icon: Users, color: "text-indigo-500", bg: "bg-indigo-50 dark:bg-indigo-500/10" }
                        ].map((service, idx) => (
                            <div key={idx} className="flex items-start gap-4 p-5 rounded-xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                                <div className={`p-3 rounded-lg ${service.bg} flex-shrink-0`}>
                                    <service.icon className={`w-6 h-6 ${service.color}`} />
                                </div>
                                <div>
                                    <h4 className="text-gray-900 dark:text-white font-bold text-sm leading-snug">{service.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutKkSystems;
