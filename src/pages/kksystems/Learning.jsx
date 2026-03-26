import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
    Smartphone, 
    Globe, 
    Server, 
    Shield, 
    Palette, 
    Rocket, 
    ChevronRight, 
    CheckCircle2, 
    Zap, 
    Play, 
    Users, 
    Target,
    Cpu
} from 'lucide-react';

const CategoryCard = ({ icon: Icon, title, desc, skills, level, color, onClick, slug }) => (
    <motion.div
        whileHover={{ y: -10 }}
        onClick={() => onClick(slug)}
        className="group p-8 rounded-[40px] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all cursor-pointer relative overflow-hidden"
    >
        <div className={`absolute top-0 right-0 w-32 h-32 blur-[60px] opacity-10 rounded-full transition-opacity group-hover:opacity-20 ${color}`} />
        
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform ${color.replace('bg-', 'text-').replace('-600', '-400')}`}>
            <Icon className="w-7 h-7" />
        </div>

        <div className="flex items-center gap-3 mb-4">
            <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-white/5 border border-white/10 ${level === 'Beginner' ? 'text-emerald-400' : 'text-indigo-400'}`}>
                {level}
            </span>
            <span className="text-white/20 text-[10px] font-black uppercase tracking-widest">Available Now</span>
        </div>

        <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{title}</h3>
        <p className="text-white/40 text-sm font-medium leading-relaxed mb-8">{desc}</p>
        
        <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
                <span key={i} className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-[10px] font-bold text-white/60">
                    {skill}
                </span>
            ))}
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between group-hover:border-white/10 transition-colors">
            <span className="text-xs font-black uppercase tracking-widest text-white/20 group-hover:text-white transition-colors">View Curriculum</span>
            <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-white group-hover:translate-x-1 transition-all" />
        </div>
    </motion.div>
);

const roadmapSteps = [
    {
        id: "01",
        title: "Foundation",
        desc: "Master the syntax, basic structures, and logical thinking required for any language.",
        icon: Target,
        color: "bg-emerald-600"
    },
    {
        id: "02",
        title: "Deep Dive",
        desc: "Understand frameworks, systems architecture, and professional tooling.",
        icon: Cpu,
        color: "bg-indigo-600"
    },
    {
        id: "03",
        title: "Mastery",
        desc: "Focus on optimization, security, and advanced design patterns.",
        icon: Zap,
        color: "bg-purple-600"
    },
    {
        id: "04",
        title: "Production",
        desc: "Build and deploy a full-scale real-world application to your portfolio.",
        icon: Rocket,
        color: "bg-rose-600"
    }
];

export default function Learning() {
    const navigate = useNavigate();

    const handleBadgeClick = (slug) => {
        navigate(`/hexenity/learning/${slug}`);
    };

    const categories = [
        {
            icon: Smartphone,
            title: "Mobile App Dev",
            desc: "Build high-performance, cross-platform apps with premium UI/UX focus.",
            skills: ["Flutter", "Kotlin", "Swift", "Clean Architecture"],
            level: "Intermediate",
            color: "bg-purple-600",
            slug: "mobile-development"
        },
        {
            icon: Globe,
            title: "Web Engineering",
            desc: "Master the modern web stack from vanilla JS to advanced React patterns.",
            skills: ["React", "Next.js", "Three.js", "Animations"],
            level: "Beginner",
            color: "bg-blue-600",
            slug: "frontend-architecture"
        },
        {
            icon: Server,
            title: "Backend & Cloud",
            desc: "Engineer scalable infrastructures, secure APIs, and distributed systems.",
            skills: ["Node.js", "Go", "Docker", "AWS"],
            level: "Intermediate",
            color: "bg-indigo-600",
            slug: "backend-engineering"
        },
        {
            icon: Palette,
            title: "UI/UX Design",
            desc: "Learn to design products that are beautiful, functional, and accessible.",
            skills: ["Figma", "Design Systems", "Prototyping"],
            level: "Beginner",
            color: "bg-pink-600",
            slug: "ui-ux-basics"
        },
        {
            icon: Shield,
            title: "Cybersecurity",
            desc: "Understand the foundations of application security and data protection.",
            skills: ["JWT", "encryption", "OWASP Top 10"],
            level: "Beginner",
            color: "bg-rose-600",
            slug: "cybersecurity-basics"
        }
    ];

    return (
        <div className="bg-[#030303] text-white font-inter selection:bg-indigo-500/30">
            
            {/* 📢 PERSISTENT TOP BANNER */}
            <div className="fixed top-20 z-40 w-full px-6 pointer-events-none hidden md:block">
                <div className="max-w-7xl mx-auto flex justify-center">
                    <motion.div 
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="pointer-events-auto px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex items-center gap-3"
                    >
                        <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-white/70">
                            👉 “Learn coding by building real apps, not just watching tutorials.”
                        </span>
                    </motion.div>
                </div>
            </div>

            {/* 🌌 High-Fidelity Background Elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
            </div>

            {/* 🏛️ HERO SECTION */}
            <section className="pt-48 pb-32 px-6 container mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-bold text-xs uppercase tracking-widest mb-8">
                        The Academy
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9] max-w-4xl mx-auto italic uppercase">
                        Start Your Coding <br />
                        <span className="premium-gradient-text">Journey with</span> <br />
                        Real-World Skills
                    </h1>
                    <p className="max-w-2xl mx-auto text-white/40 text-lg md:text-xl font-light leading-relaxed mb-12">
                        Escape the tutorial hell. Our curriculum is built around actual production code, enterprise-grade architectures, and high-performance design.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button className="px-10 py-5 bg-white text-black rounded-2xl text-lg font-black uppercase tracking-widest hover:bg-indigo-50 transition-all shadow-2xl flex items-center gap-3 justify-center group">
                            Explore Courses <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl text-lg font-black uppercase tracking-widest hover:bg-white/10 transition-all backdrop-blur-sm">
                            Join Discord
                        </button>
                    </div>
                </motion.div>
            </section>

            {/* 🛣️ LEARNING PATH ROADMAP */}
            <section className="py-32 px-6 container mx-auto relative z-10">
                <div className="text-center mb-24">
                    <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-4">The Mastery <span className="text-indigo-400">Roadmap</span></h2>
                    <p className="text-white/40 font-medium">Clear. Structured. Professional.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6 relative">
                    {/* SVG Connector Line */}
                    <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 hidden lg:block -z-10" />
                    
                    {roadmapSteps.map((step, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-[40px] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all group"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <span className="text-5xl font-black text-white/5 font-inter italic tracking-tighter group-hover:text-indigo-500/20 transition-colors">{step.id}</span>
                                <div className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center shadow-2xl`}>
                                    <step.icon className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <h4 className="text-xl font-black text-white mb-2 uppercase italic tracking-tighter">{step.title}</h4>
                            <p className="text-white/40 text-sm font-medium leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 🏷️ CATEGORIES GRID */}
            <section className="py-32 px-6 container mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((cat, i) => (
                        <CategoryCard key={i} {...cat} onClick={handleBadgeClick} />
                    ))}
                </div>
            </section>

            {/* ✨ BENEFITS / FEATURES */}
            <section className="py-32 px-6 bg-white/[0.01] border-y border-white/5 relative overflow-hidden">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-white mb-8">Why Learn <br /><span className="text-indigo-400">With Us?</span></h2>
                        <div className="space-y-8">
                            {[
                                { title: "Real-World Project Based", desc: "Every module ends with a production-grade application for your portfolio.", icon: CheckCircle2 },
                                { title: "Industry Relevant Skills", desc: "No outdated syntax. We teach what the top-tier IT companies actually use.", icon: CheckCircle2 },
                                { title: "Portfolio Building Support", desc: "Get review sessions on your code and help with your GitHub presentation.", icon: CheckCircle2 },
                                { title: "Hands-on Debugging", desc: "Learn how to solve complex bugs, not just follow happy-path tutorials.", icon: CheckCircle2 }
                            ].map((f, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <f.icon className="w-5 h-5 text-indigo-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-black text-white italic tracking-tight">{f.title}</h4>
                                        <p className="text-white/40 text-sm">{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* 🎮 LESSON PREVIEW MOCKUP */}
                    <div className="relative group">
                         <div className="p-1 rounded-[50px] bg-gradient-to-br from-indigo-500/20 to-purple-500/10 shadow-2xl">
                            <div className="bg-[#0A0A0A] rounded-[48px] overflow-hidden border border-white/10 p-8 shadow-inner">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/20" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/20" />
                                    </div>
                                    <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase text-white/30">Module Preview</div>
                                </div>
                                
                                <div className="flex items-center gap-6 mb-8">
                                    <div className="w-20 h-20 rounded-3xl bg-indigo-600 flex items-center justify-center shadow-indigo-500/40 shadow-xl group-hover:scale-110 transition-transform duration-700">
                                        <Play className="w-8 h-8 text-white fill-current" />
                                    </div>
                                    <div>
                                        <h5 className="text-xl font-black text-white mb-1 uppercase tracking-tighter">Build Your First App</h5>
                                        <p className="text-white/30 text-sm">30 Mins • Zero Experience Required</p>
                                    </div>
                                </div>
                                
                                <div className="space-y-3">
                                    <div className="w-full h-3 bg-white/5 rounded-full" />
                                    <div className="w-3/4 h-3 bg-white/5 rounded-full" />
                                    <div className="w-1/2 h-3 bg-white/5 rounded-full" />
                                </div>
                                <div className="mt-10 p-6 rounded-2xl bg-indigo-500/5 border border-indigo-500/10 flex items-center justify-between">
                                    <span className="text-xs font-black text-indigo-400 uppercase tracking-widest">Start Trial Lesson</span>
                                    <ChevronRight className="w-4 h-4 text-indigo-400" />
                                </div>
                            </div>
                         </div>
                         <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-600/10 blur-[80px] -z-10 group-hover:scale-150 transition-transform duration-1000" />
                    </div>
                </div>
            </section>

            {/* 💬 TESTIMONIALS / TRUST */}
            <section className="py-32 px-6 container mx-auto">
                <div className="text-center mb-20">
                    <SectionBadge><Users className="w-3 h-3" /> Community</SectionBadge>
                    <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">Trusted by <span className="text-indigo-400">Learners</span></h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { name: "Siddharth V.", role: "Full Stack Lead", quote: "The way complex architectural patterns are explained is literally better than any Bootcamp I've attended." },
                        { name: "Priya R.", role: "UI Designer", quote: "Started with zero code knowledge. Now I build my own Figma prototypes in React. Highly recommended!" },
                        { name: "Marcus L.", role: "Junior Android Dev", quote: "Clean Architecture for Flutter finally clicked after the real-world project module." }
                    ].map((t, i) => (
                        <div key={i} className="p-8 rounded-[40px] bg-white/[0.02] border border-white/5 flex flex-col justify-between">
                            <p className="text-white/60 text-lg font-medium leading-relaxed mb-10 italic">"{t.quote}"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10" />
                                <div>
                                    <h5 className="font-bold text-white tracking-tight">{t.name}</h5>
                                    <p className="text-xs font-black uppercase tracking-widest text-indigo-400">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

const SectionBadge = ({ children }) => (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-bold text-[10px] uppercase tracking-widest mb-6">
        {children}
    </div>
);
