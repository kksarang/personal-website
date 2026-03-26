import React from 'react';
import { motion } from 'framer-motion';
import { 
    Users, 
    Rocket, 
    Target, 
    Heart, 
    Globe, 
    Zap, 
    Shield, 
    ChevronRight,
    Linkedin,
    Instagram,
    ExternalLink,
    Code2,
    Palette,
    Layers,
    Database,
    Smartphone
} from 'lucide-react';

const FounderCard = ({ name, role, links, bio, image, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.8 }}
        whileHover={{ y: -10 }}
        className="group relative p-10 rounded-[50px] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all overflow-hidden"
    >
        {/* Glassmorphism Background Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/10 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <div className="relative z-10">
            {/* Image Wrap */}
            <div className="w-32 h-32 rounded-full overflow-hidden mb-8 border-4 border-white/5 group-hover:border-indigo-500/50 transition-all duration-500 shadow-2xl mx-auto md:mx-0">
                <img 
                    src={image} 
                    alt={name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>
            
            <div className="text-center md:text-left">
                <h3 className="text-3xl font-black italic uppercase tracking-tighter text-white mb-1">{name}</h3>
                <p className="text-sm font-black uppercase tracking-widest text-indigo-400 mb-6">{role}</p>
                
                <p className="text-white/40 text-sm font-medium leading-relaxed mb-8 italic">
                    {bio}
                </p>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                    {links && links.map((link, idx) => (
                        <a 
                            key={idx}
                            href={link.url} 
                            target="_blank" 
                            rel="noreferrer"
                            className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-white/50 hover:bg-white hover:text-black hover:border-white transition-all flex items-center gap-2"
                        >
                            {link.url.includes('linkedin') ? <Linkedin className="w-3 h-3" /> : 
                             link.url.includes('instagram') ? <Instagram className="w-3 h-3" /> :
                             <ExternalLink className="w-3 h-3" />}
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </motion.div>
);

const ExpertiseCard = ({ icon: Icon, title, desc }) => (
    <div className="flex gap-4 group">
        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-indigo-600/20 group-hover:border-indigo-500/50 transition-all">
            <Icon className="w-6 h-6 text-indigo-400" />
        </div>
        <div>
            <h4 className="text-xl font-black italic uppercase tracking-tighter text-white mb-2">{title}</h4>
            <p className="text-white/40 text-sm font-medium italic leading-relaxed">{desc}</p>
        </div>
    </div>
);

export default function About() {
    return (
        <div className="bg-[#030303] text-white font-inter selection:bg-indigo-500/30 overflow-x-hidden">
            
            {/* 🌌 Background Elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-indigo-600/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/5 blur-[120px] rounded-full" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
            </div>

            {/* 🏛️ HERO SECTION */}
            <section className="pt-48 pb-32 px-6 container mx-auto relative z-10 text-center md:text-left">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-bold text-xs uppercase tracking-widest mb-8">
                            Our Identity
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9] italic uppercase">
                            About <br />
                            <span className="premium-gradient-text">Hexenity</span>
                        </h1>
                        <p className="max-w-xl text-white/60 text-lg md:text-xl font-medium leading-relaxed italic mb-8">
                            Hexenity is a modern IT solutions company focused on building high-performance mobile applications, scalable web platforms, and intelligent SaaS systems.
                        </p>
                        <p className="max-w-xl text-white/30 text-base md:text-lg font-light leading-relaxed italic">
                            We specialize in transforming ideas into real-world digital products with a strong focus on innovation, performance, and user experience.
                        </p>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative hidden lg:block"
                    >
                        <div className="p-8 rounded-[60px] bg-white/[0.02] border border-white/10 backdrop-blur-3xl overflow-hidden group">
                             <div className="absolute inset-0 bg-indigo-600/5 group-hover:bg-indigo-600/10 transition-colors" />
                             <img 
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                                alt="Hexenity Vision" 
                                className="rounded-[40px] shadow-2xl relative z-10 opacity-50 contrast-125 saturate-0 group-hover:saturate-100 transition-all duration-1000"
                             />
                        </div>
                        <div className="absolute -bottom-10 -left-10 p-8 rounded-3xl bg-indigo-600 shadow-2xl z-20">
                            <Rocket className="w-10 h-10 text-white" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 📖 OUR STORY SECTION */}
            <section className="py-32 px-6 container mx-auto relative z-10 border-t border-white/5">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-24">
                        <SectionBadge><Heart className="w-3 h-3" /> The Origins</SectionBadge>
                        <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-white mt-6">Our <span className="text-indigo-400">Story</span></h2>
                    </div>

                    <div className="space-y-16">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-12 rounded-[50px] bg-white/[0.02] border border-white/5 relative"
                        >
                            <p className="text-2xl md:text-3xl font-bold italic tracking-tight text-white/80 leading-snug mb-8">
                                Hexenity is not just a company — it’s a journey.
                            </p>
                            <div className="space-y-6 text-white/40 text-lg font-light leading-relaxed italic">
                                <p>The three of us met randomly in Kochi, and what started as conversations around technology, coding, and ideas quickly turned into something bigger.</p>
                                <p>We shared the same mindset — to build something impactful in the tech space.</p>
                                <p className="text-white font-bold uppercase tracking-tighter text-xl">
                                    From strangers to best friends, and now co-founders, Hexenity is truly our dream project, built with passion, trust, and a shared vision for the future.
                                </p>
                            </div>
                            <div className="absolute -right-6 -top-6 text-9xl font-black italic text-white/[0.02] select-none pointer-events-none uppercase">KOCHI</div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 🛠️ WHAT WE DO & EXPERTISE */}
            <section className="py-32 px-6 container mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-24">
                    {/* What We Do */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-12">What <br /><span className="text-indigo-400">We Do</span></h2>
                        <div className="space-y-6">
                            {[
                                { title: "Mobile App Development", icon: Smartphone, stack: "Flutter, Android, iOS" },
                                { title: "Web Development", icon: Globe, stack: "Modern UI & Scalable Systems" },
                                { title: "ERP & SaaS Products", icon: Layers, stack: "Enterprise Management Solutions" },
                                { title: "Product Engineering", icon: Zap, stack: "UI/UX & Product Strategy" },
                                { title: "Backend Solutions", icon: Database, stack: "API Integration & Infrastructure" }
                            ].map((item, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 flex items-center justify-between group hover:bg-white/5 transition-all"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold italic uppercase tracking-tight text-white">{item.title}</h4>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-white/30">{item.stack}</p>
                                        </div>
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-white/10 group-hover:text-white transition-colors" />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Our Expertise */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-12">Our <br /><span className="text-indigo-400">Expertise</span></h2>
                        <div className="p-12 rounded-[50px] bg-white/[0.01] border border-white/5 space-y-12">
                            <p className="text-white/40 text-lg font-medium italic leading-relaxed">
                                With <span className="text-white font-black">6+ years of combined experience</span> in software development, we bring deep expertise in core product lifecycles.
                            </p>
                            <div className="space-y-10">
                                <ExpertiseCard 
                                    icon={Code2} 
                                    title="Scalable Architecture" 
                                    desc="Clean, modular, and enterprise-grade code structures built for growth." 
                                />
                                <ExpertiseCard 
                                    icon={Rocket} 
                                    title="Product Development" 
                                    desc="Transforming complex requirements into user-centric digital products." 
                                />
                                <ExpertiseCard 
                                    icon={Zap} 
                                    title="Performance Tuning" 
                                    desc="Aggressive optimization ensuring sub-second response times and 120fps UI." 
                                />
                            </div>
                            <div className="pt-8 border-t border-white/5">
                                <p className="text-xl font-black italic uppercase tracking-tighter text-indigo-400">
                                    “Building products, not just projects.”
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 👤 FOUNDERS SECTION */}
            <section className="py-32 px-6 container mx-auto relative z-10 border-t border-white/5">
                <div className="text-center mb-24">
                    <SectionBadge><Users className="w-3 h-3" /> Leadership</SectionBadge>
                    <h2 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter text-white mt-6">Meet the <span className="text-indigo-400">Founders</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <FounderCard 
                        name="Sarang R" 
                        role="CEO" 
                        links={[
                            { label: 'LinkedIn', url: 'https://www.linkedin.com/in/sarang-rajan/' },
                            { label: 'Instagram', url: 'https://www.instagram.com/sarang_kkr/' },
                            { label: 'Portfolio', url: 'https://sarangrajan.in/' }
                        ]}
                        bio="Visionary leader driving Hexenity with a strong focus on innovation, growth, and product strategy. Passionate about building impactful digital solutions."
                        image="/assets/images/gallery/1.jpg"
                        delay={0.1}
                    />
                    <FounderCard 
                        name="Irshad KP" 
                        role="CEO & CTO" 
                        links={[
                            { label: 'LinkedIn', url: 'https://www.linkedin.com/in/irshad1212/' }
                        ]}
                        bio="Technical expert leading architecture and development. Specializes in building scalable systems, modern applications, and technical excellence."
                        image="/assets/images/gallery/irs.png"
                        delay={0.2}
                    />
                    <FounderCard 
                        name="Russel VK" 
                        role="COO" 
                        links={[
                            { label: 'LinkedIn', url: 'https://www.linkedin.com/in/russel-vk-7327152a3/' }
                        ]}
                        bio="Operations leader ensuring smooth execution of projects and business processes. Focused on delivering quality, efficiency, and client satisfaction."
                        image="/assets/images/gallery/russ.jpeg"
                        delay={0.3}
                    />
                </div>
            </section>

            {/* 🎯 VISION & MISSION */}
            <section className="py-32 px-6 relative z-10">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-16 rounded-[60px] bg-gradient-to-br from-indigo-600/20 to-transparent border border-indigo-500/10 group hover:border-indigo-500/30 transition-all"
                    >
                        <Target className="w-12 h-12 text-indigo-400 mb-8" />
                        <h3 className="text-4xl font-black italic uppercase tracking-tighter text-white mb-6">Our <span className="text-indigo-400">Vision</span></h3>
                        <p className="text-white/60 text-xl font-medium leading-relaxed italic">
                            To build a technology-driven ecosystem where innovative ideas are transformed into powerful digital products that create real impact.
                        </p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-16 rounded-[60px] bg-gradient-to-br from-purple-600/20 to-transparent border border-purple-500/10 group hover:border-purple-500/30 transition-all"
                    >
                        <Shield className="w-12 h-12 text-purple-400 mb-8" />
                        <h3 className="text-4xl font-black italic uppercase tracking-tighter text-white mb-6">Our <span className="text-purple-400">Mission</span></h3>
                        <p className="text-white/60 text-xl font-medium leading-relaxed italic">
                            To deliver high-quality, scalable, and user-focused solutions while continuously pushing the boundaries of technology.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 📢 MEDIA & COMMUNITY (Infopark Daily) */}
            <section className="py-32 px-6 container mx-auto relative z-10 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            {/* Instagram Card UI */}
                            <div className="p-1.5 rounded-[50px] bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-indigo-500/20 shadow-2xl">
                                <div className="p-12 rounded-[48px] bg-[#0A0A0A] border border-white/5 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/5 blur-[100px] rounded-full group-hover:bg-pink-500/10 transition-colors" />
                                    
                                    <div className="flex items-center gap-6 mb-10">
                                        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-1">
                                            <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                                                <Instagram className="w-10 h-10 text-white" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-3xl font-black italic uppercase tracking-tighter text-white">Infopark Daily 🚀</h4>
                                            <p className="text-indigo-400 font-black uppercase tracking-widest text-xs">14K+ Followers</p>
                                        </div>
                                    </div>

                                    <p className="text-2xl font-bold italic text-white/80 leading-snug mb-10 tracking-tight">
                                        “Building a tech-driven community in Kochi”
                                    </p>

                                    <a 
                                        href="https://www.instagram.com/infoparkdaily/" 
                                        target="_blank" 
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl"
                                    >
                                        Follow us <ChevronRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                            
                            {/* Floating Social Proof Pill */}
                            <div className="absolute -bottom-6 -right-6 px-6 py-4 rounded-3xl bg-indigo-600 text-white font-black italic uppercase tracking-widest text-xs shadow-2xl z-20">
                                📈 Community Reach
                            </div>
                        </motion.div>

                        <div className="space-y-8">
                            <SectionBadge><Globe className="w-3 h-3" /> Media & Community</SectionBadge>
                            <h3 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-white leading-[1.1]">
                                Our Digital <br />
                                <span className="text-indigo-400">Marketing Engine</span>
                            </h3>
                            <p className="text-white/40 text-lg font-medium leading-relaxed italic">
                                We also run a growing digital community through <span className="text-white">Infopark Daily</span>, a platform focused on tech updates, industry trends, and local innovation stories in Kochi.
                            </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Social Media Promotions",
                                    "Brand Collaborations",
                                    "Community Engagement",
                                    "Tech Awareness"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                                        <div className="w-2 h-2 rounded-full bg-indigo-500" />
                                        <span className="text-xs font-black uppercase tracking-widest text-white/60">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="pt-8 border-t border-white/5 text-white/30 text-sm font-light italic leading-relaxed">
                                This allows Hexenity to be more than just a development company; we are your growth partners, uniquely positioned to offer both engineering excellence and viral marketing reach.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ☎️ FINAL THEME CTA */}
            <section className="py-32 px-6 container mx-auto text-center relative z-10">
                <div className="inline-block p-1 rounded-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-indigo-500/20 mb-12">
                    <div className="px-6 py-2 rounded-full bg-black border border-white/5 text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                        Join the Revolution
                    </div>
                </div>
                <h2 className="text-4xl md:text-8xl font-black italic uppercase tracking-tighter mb-12">Let's Build <br /><span className="premium-gradient-text">The Future</span></h2>
                <div className="flex justify-center">
                    <button className="px-12 py-5 bg-white text-black rounded-3xl text-sm font-black uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.15)] flex items-center gap-4 group">
                        Work With Hexenity <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </section>
        </div>
    );
}

const ArrowRight = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
);

const SectionBadge = ({ children }) => (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-bold text-[10px] uppercase tracking-widest mb-6">
        {children}
    </div>
);
