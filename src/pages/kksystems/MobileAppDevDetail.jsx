import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
    Smartphone, 
    Cpu, 
    Layers, 
    Zap, 
    Shield, 
    ArrowLeft, 
    CheckCircle2, 
    Globe, 
    Code2, 
    Rocket,
    Brain,
    Sparkles,
    Activity,
    SmartphoneNfc,
    Workflow,
    ArrowRight,
    Truck,
    ShoppingBag
} from 'lucide-react';

const SectionBadge = ({ children, className = "" }) => (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-6 ${className}`}>
        {children}
    </span>
);

const FeatureCard = ({ icon: Icon, title, desc, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="p-8 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 transition-all group backdrop-blur-sm"
    >
        <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6 border border-indigo-500/20 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all">
            <Icon className="w-7 h-7 text-indigo-400" />
        </div>
        <h4 className="text-xl font-bold text-white mb-3 tracking-tight">{title}</h4>
        <p className="text-sm text-white/40 leading-relaxed font-medium">{desc}</p>
    </motion.div>
);

const MobileAppDevDetail = () => {
    const navigate = useNavigate();

    const industries = [
        { name: 'FinTech', icon: Shield, desc: 'High-security transaction platforms & digital wallets.' },
        { name: 'HealthTech', icon: Activity, desc: 'Patient management & diagnostic OS layers.' },
        { name: 'E-commerce', icon: ShoppingBag, desc: 'Scalable marketplaces & headless commerce.' },
        { name: 'Logistics', icon: Truck, desc: 'Fleet tracking & supply chain automation.' }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#030303] text-white selection:bg-indigo-500/30 font-inter overflow-hidden">
            
            {/* 🌌 Atmospheric Background */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute w-[1000px] h-[1000px] bg-indigo-600/5 blur-[160px] rounded-full -top-40 -left-40" />
                <div className="absolute w-[800px] h-[800px] bg-purple-600/5 blur-[140px] rounded-full bottom-0 right-0" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay" />
            </div>

            {/* 🏛️ Navigation Header */}
            <header className="fixed top-0 z-50 w-full border-b border-white/5 backdrop-blur-3xl bg-black/40">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <button 
                            onClick={() => navigate('/hexenity/core-hexenity')}
                            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-all hover:scale-105 active:scale-95 flex items-center gap-2 group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span className="text-xs font-bold uppercase tracking-widest hidden sm:block">Back</span>
                        </button>
                        <div className="h-8 w-[1px] bg-white/10" />
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                                <Smartphone className="w-4 h-4 text-white" />
                            </div>
                            <h1 className="text-xl font-black tracking-tighter uppercase italic">Mobile Intelligence</h1>
                        </div>
                    </div>
                </div>
            </header>

            <main className="relative z-10 pt-32 pb-24">
                
                {/* 🚀 HERO SECTION: NEW LEVEL MOBILE APPROACHING */}
                <section className="px-6 mb-32">
                    <div className="max-w-5xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <SectionBadge><Sparkles className="w-3 h-3" /> Architecture Reinvented</SectionBadge>
                            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
                                A New Level of <br />
                                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent italic">
                                    Mobile Intelligence
                                </span>
                            </h2>
                            <p className="max-w-3xl mx-auto text-lg md:text-2xl text-white/50 font-light leading-relaxed mb-12">
                                We don't just build apps. We architect <span className="text-white font-medium">high-performance ecosystems</span> powered by 
                                autonomous AI agents, ensuring 3x faster delivery and zero technical debt.
                            </p>
                        </motion.div>
                    </div>

                    {/* High-Fidelity Device Mockup Placeholder */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-6xl mx-auto mt-20 relative px-4"
                    >
                        <div className="aspect-[21/9] rounded-[48px] bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 overflow-hidden relative group">
                            <div className="absolute inset-0 bg-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <h3 className="text-3xl font-black italic tracking-tighter text-white/20 uppercase group-hover:text-indigo-400/40 transition-colors">Architecture Visualized</h3>
                                    <div className="mt-4 flex gap-4 justify-center">
                                        {[Smartphone, Brain, Zap, Shield, Cpu].map((Icon, i) => (
                                            <div key={i} className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}>
                                                <Icon className="w-5 h-5 text-white/10" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* Animated scan line */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent animate-scan" />
                        </div>
                        {/* Glows */}
                        <div className="absolute -top-20 -left-20 w-64 h-64 bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none" />
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />
                    </motion.div>
                </section>

                {/* 🏗️ END-TO-END SERVICES: THE SERVICE PORTFOLIO */}
                <section className="px-6 mb-32 py-24 bg-white/[0.01] border-y border-white/5 relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -mr-64 -mt-64" />
                    
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="text-center mb-24">
                            <SectionBadge><Cpu className="w-3 h-3" /> Comprehensive Solutions</SectionBadge>
                            <h3 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 leading-tight">
                                End-To-End Mobile App <br />
                                <span className="text-indigo-400 italic">Development Services</span> We Provide
                            </h3>
                            <p className="max-w-3xl mx-auto text-white/40 text-xl font-light leading-relaxed">
                                Launch revenue-driven mobile experiences that scale with your business through our end-to-end mobile app
                                development services. From product strategy to post-launch optimization, we build secure, high-performance
                                mobile applications for enterprises, startups, and digital-first brands.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                {
                                    title: "Custom App Development",
                                    desc: "We design and develop custom mobile applications tailored to your business model, user behavior, and long-term growth strategy. Our team blends product thinking with scalable architecture to build high-performance apps that drive engagement, revenue, and operational efficiency.",
                                    icon: Code2,
                                    bullets: ["Business-Tailored Architecture", "User-Centric UI/UX Design", "Scalable Product Roadmap"]
                                },
                                {
                                    title: "Mobile App Modernization",
                                    desc: "Our modernization services revolve around upgrading architecture, redesigning user experience, and integrating modern technologies. We focus on reducing technical debt, enhancing security, and extending the product lifecycle to ensure higher ROI from your existing systems.",
                                    icon: Activity,
                                    bullets: ["Architecture Refactoring", "Performance Optimization", "Legacy Logic Porting"]
                                },
                                {
                                    title: "Native App Development",
                                    desc: "Deliver unparalleled performance and security with native iOS and Android applications. We leverage platform-specific capabilities (Swift for iOS, Kotlin for Android) to create fluid, high-fidelity experiences that fully utilize device hardware and OS features.",
                                    icon: Smartphone,
                                    bullets: ["Swift / SwiftUI Expertise", "Kotlin / Jetpack Compose", "Optimized OS Integration"]
                                },
                                {
                                    title: "Cross-platform Development",
                                    desc: "Maximize market reach while minimizing costs with cross-platform frameworks like Flutter and React Native. We build high-fidelity apps with a single codebase that perform like native, ensuring a consistent user experience across iOS and Android platforms.",
                                    icon: Layers,
                                    bullets: ["Flutter & React Native Mastery", "Single Codebase Efficiency", "Direct Native Bridging"]
                                }
                            ].map((service, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-10 rounded-[48px] bg-white/[0.02] border border-white/10 hover:border-indigo-500/30 transition-all group relative overflow-hidden flex flex-col h-full"
                                >
                                    <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ArrowRight className="w-8 h-8 text-indigo-500/40 -rotate-45" />
                                    </div>

                                    <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-8 border border-white/5">
                                        <service.icon className="w-8 h-8 text-indigo-400" />
                                    </div>

                                    <h4 className="text-3xl font-black mb-6 tracking-tight text-white group-hover:text-indigo-400 transition-colors uppercase italic">{service.title}</h4>
                                    <p className="text-white/40 text-base leading-relaxed mb-8 flex-grow font-medium">
                                        {service.desc}
                                    </p>

                                    <ul className="space-y-4 pt-6 border-t border-white/5">
                                        {service.bullets.map((bullet, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-white/20 group-hover:text-white/60 transition-colors">
                                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 🧠 AI-POWERED WORKFLOW */}
                <section className="px-6 mb-32">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <SectionBadge><Zap className="w-3 h-3" /> Performance First</SectionBadge>
                                <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight mb-8">
                                    Built with the <br />
                                    <span className="text-indigo-400">Help of AI</span>
                                </h3>
                                <div className="space-y-8">
                                    {[
                                        { title: "Predictive UI", desc: "Algorithms that anticipate user actions to pre-load content instantly." },
                                        { title: "Auto-CodeGen", desc: "AI-accelerated development for boilerplate and architectural setup." },
                                        { title: "Intelligent Testing", desc: "Bots that simulate millions of user interactions in minutes." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-6 group">
                                            <div className="w-12 h-12 rounded-xl bg-white/5 flex-shrink-0 flex items-center justify-center border border-white/10 group-hover:border-indigo-500/50 transition-colors">
                                                <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                                            </div>
                                            <div>
                                                <h5 className="text-xl font-bold mb-1">{item.title}</h5>
                                                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative rounded-[40px] overflow-hidden border border-white/10 bg-gradient-to-br from-indigo-500/10 to-transparent p-1"
                            >
                                <div className="bg-[#030303] rounded-[38px] p-12 aspect-square flex flex-col justify-center">
                                    <div className="space-y-6">
                                        <div className="h-2 w-32 bg-indigo-500 rounded-full" />
                                        <div className="h-2 w-48 bg-white/10 rounded-full" />
                                        <div className="h-2 w-24 bg-white/10 rounded-full" />
                                        <div className="grid grid-cols-2 gap-4 mt-12">
                                            <div className="h-24 rounded-2xl bg-white/5 border border-white/10" />
                                            <div className="h-24 rounded-2xl bg-indigo-500/20 border border-indigo-500/20" />
                                        </div>
                                        <div className="mt-8 flex items-center justify-between">
                                            <div className="flex gap-2">
                                                <div className="w-4 h-4 rounded-full bg-blue-400" />
                                                <div className="w-4 h-4 rounded-full bg-green-400" />
                                            </div>
                                            <div className="text-[10px] font-black uppercase tracking-widest text-white/20">System Optimized</div>
                                        </div>
                                    </div>
                                </div>
                                <Orb className="w-48 h-48 bg-indigo-500/30 -top-10 -right-10" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 🏢 TECH STACK GRID */}
                <section className="px-6 mb-32 pb-24">
                    <div className="max-w-7xl mx-auto text-center mb-20">
                        <SectionBadge><Globe className="w-3 h-3" /> Multi-Platform</SectionBadge>
                        <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Universal Technology Stack</h3>
                        <p className="max-w-2xl mx-auto text-white/40">
                            We utilize the most advanced frameworks to deliver native-quality experiences across all devices.
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { name: "Flutter", icon: "💙", tag: "Fast" },
                            { name: "React Native", icon: "⚛️", tag: "Versatile" },
                            { name: "Swift / iOS", icon: "🍎", tag: "Native" },
                            { name: "Kotlin / Android", icon: "🤖", tag: "Native" }
                        ].map((tech, i) => (
                            <motion.div 
                                key={i}
                                whileHover={{ y: -5 }}
                                className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all"
                            >
                                <div className="text-4xl mb-4">{tech.icon}</div>
                                <div className="text-lg font-black tracking-tight mb-1">{tech.name}</div>
                                <div className="text-[10px] font-black uppercase text-indigo-400 opacity-60 tracking-widest">{tech.tag}</div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* 🌍 SPECIALIZED SECTOR EXPERTISE (RELOCATED) */}
                <section className="px-6 mb-32 py-24 bg-white/[0.01] border-y border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <SectionBadge><Globe className="w-3 h-3" /> Global Reach</SectionBadge>
                                <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 leading-tight">Specialized Sector <br /><span className="text-indigo-400 italic">Expertise</span></h2>
                                <p className="text-white/40 text-xl font-light leading-relaxed mb-12">
                                    We don't believe in one-size-fits-all. Our engineering teams are organized by domain to ensure deep industry insights and compliance standards.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {industries.map((ind, i) => (
                                        <motion.div 
                                            key={ind.name}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                            className="p-8 rounded-[32px] border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all group"
                                        >
                                            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6 border border-indigo-500/20 group-hover:scale-110 transition-transform">
                                                <ind.icon className="w-6 h-6 text-indigo-400" />
                                            </div>
                                            <h4 className="text-xl font-bold text-white mb-3 tracking-tight">{ind.name}</h4>
                                            <p className="text-white/40 text-sm leading-relaxed font-medium">{ind.desc}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative group">
                                <div className="aspect-[4/5] rounded-[64px] overflow-hidden border border-white/10 relative shadow-2xl">
                                    <img 
                                        src="/assets/showcase/mobile_app_premium.png" 
                                        alt="Specialized Mobile Solutions" 
                                        className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                      <div className="text-center p-12 bg-black/40 backdrop-blur-xl border border-white/10 rounded-[48px] scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700">
                                        <div className="text-7xl font-black text-white/20 mb-4 italic tracking-tighter">12+</div>
                                        <p className="text-white/40 font-black uppercase tracking-[0.3em] text-[10px]">Domains Optimized</p>
                                      </div>
                                    </div>
                                </div>
                                <Orb className="w-72 h-72 bg-indigo-500/20 -top-10 -right-10" />
                                <Orb className="w-56 h-56 bg-purple-500/10 -bottom-10 -left-10" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* 🛡️ WHAT WE ASSURE TO PROVIDE */}
                <section className="px-6 mb-32">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <SectionBadge><CheckCircle2 className="w-3 h-3" /> Quality Assurance</SectionBadge>
                                <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight mb-8">What We Assure <br /><span className="text-indigo-400">To Provide</span></h3>
                                <p className="text-white/40 text-lg font-light leading-relaxed mb-12">
                                    We believe in complete transparency and dedicated partnership. Our commitment goes beyond code; we ensure your business has the resources it needs to scale.
                                </p>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    "Daily code delivery",
                                    "Flexible office hours",
                                    "Daily reporting via email",
                                    "Weekly/monthly/yearly hiring",
                                    "Guaranteed 160 working hours",
                                    "Direct communication"
                                ].map((item, i) => (
                                    <motion.div 
                                        key={i}
                                        whileHover={{ x: 5 }}
                                        className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-4 group transition-all"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-all">
                                            <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                                        </div>
                                        <span className="text-sm font-bold text-white/70 group-hover:text-white transition-colors tracking-tight">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 🏗️ THE MODERN DEVELOPMENT PROCESS */}
                <section className="px-6 mb-32 py-24 bg-white/[0.01] border-y border-white/5 relative">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-24">
                            <SectionBadge><Rocket className="w-3 h-3" /> Execution Blueprint</SectionBadge>
                            <h3 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 italic uppercase">Our Mobile App <br />Development <span className="text-indigo-400">Process</span></h3>
                            <p className="max-w-3xl mx-auto text-white/40 text-xl font-light">
                                Built for speed, scalability, and clarity, helping enterprises and growth-focused businesses turn ideas into 
                                <span className="text-white font-medium"> secure, high-performance</span> mobile applications.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {[
                                {
                                    step: "1",
                                    title: "Discovery",
                                    desc: "As a part of our product discovery services, we analyze business goals, user needs, and technical feasibility to define a clear mobile app strategy, roadmap, and success metrics from day one."
                                },
                                {
                                    step: "2",
                                    title: "Design",
                                    desc: "By leveraging expert-led UI/UX design services, we help you design intuitive app interfaces focused on usability, accessibility, brand consistency, and seamless experiences across devices and platforms."
                                },
                                {
                                    step: "3",
                                    title: "Development",
                                    desc: "We build scalable, secure mobile apps using modern frameworks, cloud-ready architectures, and agile practices to ensure performance and long-term flexibility."
                                },
                                {
                                    step: "4",
                                    title: "Testing",
                                    desc: "With end-to-end software testing & QA services, we conduct rigorous functional, performance, and security testing to ensure app stability, reliability, and a flawless user experience before launch."
                                },
                                {
                                    step: "5",
                                    title: "Launch",
                                    desc: "Our work doesn’t end with testing; we also handle smooth app store deployment, compliance checks, and performance optimization to ensure a successful, market-ready mobile app release."
                                },
                                {
                                    step: "6",
                                    title: "Support",
                                    desc: "We provide continuous monitoring, updates, and optimization to keep your mobile app secure, scalable, and aligned with evolving business needs."
                                }
                            ].map((s, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-10 rounded-[48px] bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 transition-all group relative overflow-hidden"
                                >
                                    <div className="flex items-center gap-6 mb-8">
                                        <div className="text-6xl font-black text-white/5 group-hover:text-indigo-500/20 transition-all font-inter italic tracking-tighter">0{s.step}</div>
                                        <div className="h-px flex-1 bg-white/5 group-hover:bg-indigo-500/20 transition-all" />
                                    </div>
                                    <h4 className="text-2xl font-black text-white mb-4 tracking-tighter uppercase italic">{s.title}</h4>
                                    <p className="text-white/40 text-base leading-relaxed font-medium">
                                        {s.desc}
                                    </p>
                                    
                                    {/* Hover interaction decoration */}
                                    <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Zap className="w-6 h-6 text-indigo-500/30 translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 🏁 FINAL CTA: START THE PROJECT */}
                <section className="px-6">
                    <div className="max-w-5xl mx-auto p-12 md:p-24 rounded-[64px] bg-gradient-to-br from-indigo-600 to-purple-800 relative overflow-hidden text-center group">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.1] mix-blend-overlay" />
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-8">Ready to Build the Core?</h2>
                            <p className="max-w-2xl mx-auto text-white/70 text-lg mb-12">
                                Launch your next-level mobile application with Hexenity Engineering. 
                                We deliver production-grade software in weeks, not months.
                            </p>
                            <button 
                                onClick={() => navigate('/hexenity/contact')}
                                className="px-12 py-6 bg-white text-black rounded-2xl text-xl font-black shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto"
                            >
                                Start Your Project <ArrowRight className="w-6 h-6" />
                            </button>
                        </div>
                        {/* Decorative orbs */}
                        <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 blur-[100px] rounded-full group-hover:scale-110 transition-transform duration-1000" />
                        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-indigo-400/20 blur-[100px] rounded-full group-hover:scale-110 transition-transform duration-1000 delay-200" />
                    </div>
                </section>
            </main>

            {/* 🏗️ Custom CSS for Scan Line Animation */}
            <style jsx="true text-sm">{`
                @keyframes scan {
                    0% { top: 0; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                }
                .animate-scan {
                    animation: scan 3s linear infinite;
                }
            `}</style>

        </div>
    );
};

const Orb = ({ className }) => (
    <div className={`absolute rounded-full blur-3xl pointer-events-none ${className}`} />
);

export default MobileAppDevDetail;
