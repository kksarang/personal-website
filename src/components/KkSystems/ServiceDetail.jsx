import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import KksystemsNavbar from './KksystemsNavbar';
import Footer from '../Footer';

const ServiceDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    // Find the current service data
    const service = servicesData[slug];

    // Scroll to top when loading
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!service) {
        return (
            <div className="min-h-screen bg-[#0A0B14] flex flex-col items-center justify-center text-white">
                <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
                <button
                    onClick={() => navigate('/kksystems')}
                    className="px-6 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
                >
                    Back to IT Services
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0A0B14] text-white selection:bg-indigo-500/30">
            <KksystemsNavbar />

            <main className="pt-24 pb-20">
                {/* HERO SECTION */}
                <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 lg:py-24">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

                    <button
                        onClick={() => navigate('/kksystems')}
                        className="flex items-center text-gray-400 hover:text-white transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Services
                    </button>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                            {service.title}
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed">
                        {service.overview}
                    </p>
                </section>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

                        {/* LEFT COLUMN (Main Content) */}
                        <div className="lg:col-span-2 space-y-16">

                            {/* TYPES OF SERVICE */}
                            <section>
                                <h2 className="text-3xl font-bold mb-8 flex items-center">
                                    <span className="w-8 h-1 bg-indigo-500 mr-4 rounded-full"></span>
                                    {service.typesTitle}
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {service.types.map((type, idx) => (
                                        <div key={idx} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm flex items-center text-gray-300">
                                            <div className="w-2 h-2 rounded-full bg-blue-400 mr-3 shadow-[0_0_10px_rgba(96,165,250,0.5)]"></div>
                                            {type}
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* DEVELOPMENT PROCESS */}
                            <section>
                                <h2 className="text-3xl font-bold mb-8 flex items-center">
                                    <span className="w-8 h-1 bg-purple-500 mr-4 rounded-full"></span>
                                    {service.processTitle}
                                </h2>
                                <div className="space-y-6">
                                    {service.process.map((stepItem, idx) => (
                                        <div key={idx} className="flex flex-col sm:flex-row sm:items-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors gap-4">
                                            <div className="text-xl font-bold text-white min-w-[250px]">
                                                {stepItem.step}
                                            </div>
                                            {stepItem.desc && (
                                                <div className="text-gray-400 border-l border-white/10 pl-4 sm:pl-6 ml-2 sm:ml-0">
                                                    {stepItem.desc}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </section>

                        </div>

                        {/* RIGHT COLUMN (Sidebar details) */}
                        <div className="space-y-12">

                            {/* TIMELINE */}
                            <div className="p-8 rounded-3xl bg-gradient-to-br from-indigo-900/20 to-transparent border border-indigo-500/20">
                                <h3 className="text-xl font-bold text-white mb-6">Development Timeline</h3>
                                <ul className="space-y-4 mb-4">
                                    {service.timeline.map((item, idx) => (
                                        <li key={idx} className="flex flex-col">
                                            <span className="text-indigo-300 font-medium">{item.split(' – ')[0]}</span>
                                            <span className="text-gray-400 text-sm mt-1">{item.split(' – ')[1] ? `– ${item.split(' – ')[1]}` : ''}</span>
                                        </li>
                                    ))}
                                </ul>
                                {service.timelineNote && (
                                    <p className="text-xs text-gray-500 italic mt-6 pt-4 border-t border-indigo-500/10">
                                        {service.timelineNote}
                                    </p>
                                )}
                            </div>

                            {/* WHAT YOU GET */}
                            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-6 pb-4 border-b border-white/10">What You Get</h3>
                                <ul className="space-y-4">
                                    {service.whatYouGet.map((item, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-300">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

                {/* BOTTOM CTA SECTION */}
                <section className="mt-24 max-w-5xl mx-auto px-4 sm:px-6">
                    <div className="p-12 md:p-16 rounded-[2rem] bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border border-indigo-500/20 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Ready to transform your idea into a powerful digital solution?
                            </h2>
                            <p className="text-xl text-indigo-200 mb-10 max-w-2xl mx-auto">
                                Let's collaborate to build something exceptional that drives real growth for your business.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <button className="px-8 py-4 rounded-xl bg-white text-indigo-900 font-bold hover:bg-gray-100 transition-colors shadow-xl">
                                    Start Your Project
                                </button>
                                <button
                                    onClick={() => navigate('/kksystems/contact')}
                                    className="px-8 py-4 rounded-xl bg-indigo-600/20 text-white font-bold border border-indigo-500/30 hover:bg-indigo-600/40 transition-colors"
                                >
                                    Contact kk systems
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default ServiceDetail;
