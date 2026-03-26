import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    ArrowRight, 
    ExternalLink, 
    Github, 
    Star, 
    Smartphone, 
    Globe, 
    Database, 
    Cpu,
    CheckCircle2,
    TrendingUp,
    Users,
    Zap,
    Layout
} from 'lucide-react';
import { projects } from '../../data/projects';

const CategoryBadge = ({ active, label, onClick }) => (
    <button
        onClick={onClick}
        className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 border ${
            active 
            ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]' 
            : 'bg-white/5 text-white/40 border-white/10 hover:bg-white/10 hover:text-white'
        }`}
    >
        {label}
    </button>
);

const ProjectCard = ({ project, onClick }) => (
    <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        whileHover={{ y: -10 }}
        className="group relative bg-[#0A0A0A] rounded-[40px] overflow-hidden border border-white/5 hover:border-white/10 transition-all shadow-2xl flex flex-col h-full"
    >
        {/* Visual Header / Mockup Area */}
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#111]">
            <img 
                src={project.heroImage} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-90" />
            
            {/* Floating Tech Stack */}
            <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                {project.technologies?.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-black uppercase text-white/70">
                        {tech}
                    </span>
                ))}
            </div>

            {/* Hover Solution Teaser */}
            <div className="absolute inset-0 bg-indigo-600/90 backdrop-blur-sm p-8 flex flex-col justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                <p className="text-[10px] font-black uppercase tracking-widest text-white/50 mb-2">The Solution</p>
                <p className="text-white text-lg font-bold italic tracking-tight leading-snug">
                    {project.solution ? project.solution.substring(0, 150) + '...' : project.description}
                </p>
                <div 
                    onClick={(e) => { e.stopPropagation(); onClick(project.slug); }}
                    className="mt-6 flex items-center gap-2 text-white font-black uppercase tracking-widest text-xs cursor-pointer hover:gap-4 transition-all"
                >
                    View Case Study <ArrowRight className="w-4 h-4" />
                </div>
            </div>
        </div>

        {/* Content Area */}
        <div className="p-8 flex-1 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[1px] bg-indigo-500 group-hover:w-12 transition-all" />
                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400">
                    {project.appDetails?.category || 'SaaS / App'}
                </span>
            </div>
            
            <h3 className="text-2xl font-black text-white mb-3 italic uppercase tracking-tighter group-hover:text-indigo-400 transition-colors">
                {project.title}
            </h3>
            <p className="text-white/40 text-sm font-medium leading-relaxed line-clamp-2 mb-8 flex-1 italic">
                {project.description}
            </p>

            <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                <div className="flex -space-x-3">
                     {[1, 2, 3].map(i => (
                         <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0A0A0A] bg-white/5 flex items-center justify-center">
                             <CheckCircle2 className="w-3 h-3 text-indigo-400" />
                         </div>
                     ))}
                </div>
                <button 
                    onClick={() => onClick(project.slug)}
                    className="p-3 bg-white/5 border border-white/10 rounded-2xl group-hover:bg-white group-hover:text-black transition-all"
                >
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    </motion.div>
);

export default function Work() {
    const navigate = useNavigate();
    const [repos, setRepos] = useState([]);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        fetch("https://api.github.com/users/kksarang/repos?sort=updated&per_page=10")
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    const nonForks = data.filter(repo => !repo.fork);
                    setRepos(nonForks);
                }
            })
            .catch(err => console.error("Error fetching GitHub repos:", err));
    }, []);

    const handleProjectClick = (slug) => {
        if (slug === '#') return;
        navigate(`/hexenity/work/${slug}`);
    };

    const filteredProjects = filter === 'All' 
        ? projects 
        : projects.filter(p => {
            const cat = p.appDetails?.category?.toLowerCase() || '';
            const platform = p.appDetails?.platform?.toLowerCase() || '';
            if (filter === 'Mobile') return platform.includes('android') || platform.includes('mobile');
            if (filter === 'Web') return platform.includes('web');
            if (filter === 'Enterprise') return cat.includes('corporate') || cat.includes('erp') || platform.includes('enterprise');
            return true;
        });

    return (
        <div className="bg-[#030303] text-white font-inter selection:bg-indigo-500/30 overflow-x-hidden">
            
            {/* 🌌 Background Elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-purple-600/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
            </div>

            {/* 🏛️ HERO SECTION */}
            <section className="pt-48 pb-20 px-6 container mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <div className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-bold text-xs uppercase tracking-widest mb-8">
                        The Portfolio
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9] italic uppercase">
                        Our Work Speaks <br />
                        <span className="premium-gradient-text">For Itself</span>
                    </h1>
                    <p className="max-w-2xl text-white/40 text-lg md:text-xl font-light leading-relaxed mb-12">
                        We don't just build software. We engineer high-performance digital experiences that solve complex business problems and drive growth.
                    </p>
                </motion.div>

                {/* 📊 METRICS SECTION */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
                    {[
                        { label: "Projects Completed", value: "50+", icon: Layout },
                        { label: "Client Satisfaction", value: "100%", icon: Users },
                        { label: "Avg System Uptime", value: "99.9%", icon: Zap },
                        { label: "Performance Gain", value: "40%", icon: TrendingUp }
                    ].map((stat, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col gap-4"
                        >
                            <stat.icon className="w-5 h-5 text-indigo-500" />
                            <div>
                                <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                                <div className="text-[10px] font-black uppercase tracking-widest text-white/20">{stat.label}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 📂 CATEGORY FILTER */}
            <section className="py-10 px-6 container mx-auto sticky top-20 z-30 pointer-events-none">
                <div className="flex flex-wrap gap-3 pointer-events-auto justify-center md:justify-start">
                    {['All', 'Mobile', 'Web', 'Enterprise'].map(cat => (
                        <CategoryBadge 
                            key={cat} 
                            label={cat} 
                            active={filter === cat} 
                            onClick={() => setFilter(cat)} 
                        />
                    ))}
                </div>
            </section>

            {/* 🏗️ PROJECTS GRID */}
            <section className="py-20 px-6 container mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <ProjectCard 
                                key={project.id} 
                                project={project} 
                                onClick={handleProjectClick} 
                            />
                        ))}
                    </AnimatePresence>
                </div>
            </section>

            {/* 🏢 CASE STUDY HIGHLIGHT (PROBLEM -> SOLUTION -> RESULT) */}
            <section className="py-32 px-6 bg-white/[0.01] border-y border-white/5 relative z-10 overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col gap-24">
                    <div className="text-center">
                        <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-4">Engineering <span className="text-indigo-400">Excellence</span></h2>
                        <p className="text-white/40 font-medium italic">Solving real problems with code.</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            { step: "Problem", title: "Fragmented Data", desc: "Monolithic legacy systems causing data silos and massive workflow friction.", icon: Database },
                            { step: "Solution", title: "Micro-Architectures", desc: "Engineered scalable, event-driven API gateways with strictly isolated services.", icon: Cpu },
                            { step: "Result", title: "40% Higher Efficiency", desc: "Consolidated disparate systems reducing daily reporting time by 2 hours.", icon: TrendingUp }
                        ].map((item, i) => (
                            <div key={i} className="p-12 rounded-[50px] bg-white/[0.02] border border-white/10 relative group hover:bg-white/5 transition-all">
                                <div className="absolute top-8 right-8 text-6xl font-black italic text-white/5 group-hover:text-white/10 transition-colors uppercase select-none">{item.step}</div>
                                <div className="w-16 h-16 rounded-2xl bg-indigo-600/10 border border-indigo-600/20 flex items-center justify-center mb-10">
                                    <item.icon className="w-8 h-8 text-indigo-400" />
                                </div>
                                <h4 className="text-2xl font-black italic uppercase tracking-tighter text-white mb-4">{item.title}</h4>
                                <p className="text-white/40 leading-relaxed font-light italic">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 🐙 GITHUB PROJECTS FEED */}
            <section className="py-32 px-6 container mx-auto relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/40 font-bold text-[10px] uppercase tracking-widest mb-6">
                            <Github className="w-3 h-3" /> Labs & Open Source
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">Live Tech <br /><span className="text-indigo-400">Experiments</span></h2>
                    </div>
                    <p className="text-white/40 font-medium max-w-sm">Direct feed from my GitHub repositories showcasing code quality and technical depth.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {repos.map((repo, i) => (
                        <motion.a
                            key={repo.id}
                            href={repo.html_url}
                            target="_blank"
                            rel="noreferrer"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="p-8 bg-[#0A0A0A] rounded-[40px] border border-white/5 hover:border-white/10 transition-all flex flex-col group"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                                    <Github className="w-5 h-5 group-hover:text-white transition-colors" />
                                </div>
                                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-[10px] font-black text-white/30 border border-white/5">
                                    <Star className="w-3 h-3" /> {repo.stargazers_count}
                                </div>
                            </div>

                            <h3 className="text-xl font-black uppercase tracking-tighter italic text-white mb-3 group-hover:text-indigo-400 transition-colors">{repo.name}</h3>
                            <p className="text-white/30 text-xs font-medium leading-relaxed italic line-clamp-2 mb-8">{repo.description || "Experimental repository."}</p>
                            
                            <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                                <span className="text-[10px] font-black uppercase tracking-widest text-white/20">
                                    {repo.language || 'Code'}
                                </span>
                                <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-white transition-colors" />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </section>

            {/* ☎️ FINAL CTA */}
            <section className="py-32 px-6 container mx-auto relative z-10 text-center">
                <div className="p-20 rounded-[80px] bg-gradient-to-br from-indigo-600/20 to-purple-600/10 border border-white/10 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-indigo-600/5 group-hover:scale-110 transition-transform duration-1000" />
                    <h2 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter mb-8 relative z-10">Have A <span className="text-indigo-400">Vision?</span> <br />Let's Code It.</h2>
                    <p className="text-white/40 text-lg mb-12 relative z-10">Ready to build the next generation of scalable software?</p>
                    <div className="flex justify-center relative z-10">
                         <button className="px-12 py-5 bg-white text-black rounded-3xl text-sm font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl flex items-center gap-3 group">
                            Start Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
