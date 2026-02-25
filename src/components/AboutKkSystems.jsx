import React from 'react';
import { Smartphone, Globe, Layout, PenTool, Layers, ChevronRight, CheckCircle2, MonitorSmartphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AboutKkSystems = () => {
    const navigate = useNavigate();

    return (
        <section id="about-kksystems" className="relative py-24 lg:py-32 overflow-hidden text-white border-y border-white/5" style={{ background: 'linear-gradient(135deg, #0f172a, #1e293b)' }}>

            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* 1. HERO SECTION */}
                <div className="text-center max-w-4xl mx-auto mb-24">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-indigo-500/10 text-indigo-300 font-bold tracking-widest text-sm uppercase mb-6 border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                        Innovative Software Solutions
                    </span>
                    <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8" style={{ letterSpacing: '-0.5px' }}>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">kk systems</span> <br className="hidden md:block" />
                        Building Powerful <br className="md:hidden" /> Digital Experiences
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed mb-10 max-w-3xl mx-auto">
                        We design and develop modern mobile applications, websites, and digital branding solutions that help businesses grow faster in the digital world.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => navigate('/kksystems/work')}
                            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            🚀 View Our Work
                        </button>
                        <button
                            onClick={() => navigate('/kksystems/contact')}
                            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold transition-all hover:-translate-y-1 flex items-center justify-center gap-2 backdrop-blur-sm"
                        >
                            📞 Get a Free Consultation
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* LEFT COLUMN: ABOUT & WHY CHOOSE US */}
                    <div className="lg:col-span-5 space-y-16">

                        {/* 2. ABOUT SECTION */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-px bg-indigo-500/50 w-8" />
                                <h3 className="text-2xl font-bold tracking-tight">About kk systems</h3>
                            </div>
                            <div className="prose prose-lg prose-invert">
                                <p className="text-slate-300 font-medium text-lg leading-relaxed mb-4">
                                    <strong>kk systems</strong> is a modern software development company founded by Sarang, focused on delivering high-quality digital solutions for startups, businesses, and entrepreneurs.
                                </p>
                                <p className="text-slate-400 leading-relaxed mb-6">
                                    We specialize in Mobile App Development, iOS & Android Applications, Website Development, UI/UX Design, and Logo & Brand Identity.
                                </p>
                                <p className="text-slate-400 leading-relaxed border-l-2 border-indigo-500 pl-4 italic">
                                    Our mission is to transform ideas into scalable digital products with clean design, high performance, and long-term reliability. We don't just build applications — we build digital experiences.
                                </p>
                            </div>
                        </div>

                        {/* 3. WHY CHOOSE US SECTION */}
                        <div className="p-8 rounded-2xl border border-white/10 relative overflow-hidden group" style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)' }}>
                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-400 to-indigo-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                            <h4 className="text-xl font-bold mb-6">Why Choose Us?</h4>
                            <ul className="space-y-4">
                                {[
                                    "Modern & Clean Development Approach",
                                    "Performance-Focused Applications",
                                    "SEO-Optimized Websites",
                                    "Scalable Architecture",
                                    "Long-Term Technical Support",
                                    "Affordable & Transparent Pricing"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-slate-300 font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                    {/* RIGHT COLUMN: SERVICES SECTION */}
                    <div className="lg:col-span-7">
                        <div className="flex items-center gap-4 mb-8">
                            <h3 className="text-2xl font-bold tracking-tight">Our Core Services</h3>
                            <div className="h-px bg-white/10 flex-grow" />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                            {[
                                { title: "Mobile App Development", icon: Layers, color: "text-blue-400", desc: "Custom Android and iOS applications built using modern technologies like Flutter, React Native, and Native platforms." },
                                { title: "iOS App Development", icon: Smartphone, color: "text-purple-400", desc: "Premium iPhone & iPad applications designed with performance, security, and user experience in mind." },
                                { title: "Android App Development", icon: MonitorSmartphone, color: "text-emerald-400", desc: "Scalable and powerful Android applications optimized for all screen sizes and devices." },
                                { title: "Website Development", icon: Globe, color: "text-sky-400", desc: "Responsive, SEO-optimized, and high-performance websites built using modern frameworks." },
                                { title: "UI/UX Design", icon: Layout, color: "text-pink-400", desc: "Elegant, user-centered interface designs that improve engagement and user satisfaction." },
                                { title: "Branding & Creative Design", icon: PenTool, color: "text-amber-400", desc: "Professional logo design, posters, social media creatives, and complete brand identity solutions." }
                            ].map((service, idx) => (
                                <div
                                    key={idx}
                                    className="group p-6 rounded-[20px] border border-white/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:border-white/10"
                                    style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)' }}
                                >
                                    <div className={`p-3 rounded-xl bg-white/5 inline-flex mb-5 group-hover:scale-110 transition-transform duration-300`}>
                                        <service.icon className={`w-6 h-6 ${service.color}`} />
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-3 tracking-tight group-hover:text-indigo-300 transition-colors">{service.title}</h4>
                                    <p className="text-sm text-slate-400 leading-relaxed font-light">{service.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* 4. POSITIONING LINE (BOTTOM) */}
                        <div className="mt-10 p-6 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 text-center px-8">
                            <p className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-300 italic">
                                "From Idea to App Store – We Build Complete Digital Products."
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutKkSystems;
