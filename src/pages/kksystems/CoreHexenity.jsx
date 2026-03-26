import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
    Rocket,
    Building2,
    Zap,
    Brain,
    Wrench,
    Users,
    CheckCircle2,
    ArrowRight,
    Sparkles,
    Timer,
    Layout,
    Cpu,
    Shield,
    Globe,
    HeartHandshake,
    Layers,
    TrendingUp,
    Mail,
    ChevronRight,
    UserPlus,
    Image,
    Table,
    Activity,
    ShoppingBag,
    Truck,
    Quote,
} from 'lucide-react';

/* ─── Animation variants ─── */
const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    }),
};
const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.7 } },
};

/* ─── Section heading component ─── */
const SectionBadge = ({ children }) => (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#4F46E5]/20 text-[#a5b4fc] border border-[#4F46E5]/30 mb-4">
        {children}
    </span>
);

/* ─── Animated counter ─── */
const AnimatedCounter = ({ target, suffix = '' }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const [count, setCount] = React.useState(0);

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const duration = 1600;
        const step = Math.ceil(target / (duration / 30));
        const timer = setInterval(() => {
            start += step;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(start);
            }
        }, 30);
        return () => clearInterval(timer);
    }, [inView, target]);

    return (
        <span ref={ref} className="text-5xl font-bold text-white tabular-nums">
            {count}{suffix}
        </span>
    );
};

/* ─── Grid background ─── */
const GridBg = () => (
    <div
        className="fixed inset-0 pointer-events-none opacity-[0.3] z-0"
        style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)`,
            backgroundSize: '44px 44px',
        }}
    />
);

/* ─── Glow orb ─── */
const Orb = ({ className }) => (
    <div className={`absolute rounded-full blur-3xl pointer-events-none ${className}`} />
);

/* ─────────────────────────────── MAIN PAGE ─────────────────────────────── */
const CoreHexenity = () => {
    const navigate = useNavigate();
    const [isLaunching, setIsLaunching] = React.useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleLaunchERP = (path = '/hexenity/erp/dashboard') => {
        setIsLaunching(true);
        setTimeout(() => {
            navigate(path);
        }, 2000);
    };

    /* ── Data ── */
    const services = [
        {
            icon: Rocket,
            title: 'Build',
            subtitle: 'New Product Engineering',
            color: '#22D3EE',
            gradient: 'from-[#4F46E5]/40 to-[#22D3EE]/20',
            description: 'We turn ambitious ideas into production-ready digital products with scalable architecture.',
            items: ['Mobile Applications (iOS/Android)', 'Web Platforms (React/Next.js)', 'Cloud-Native Infrastructure'],
            link: '/hexenity/solutions/mobile'
        },
        {
            icon: Wrench,
            title: 'Optimize',
            subtitle: 'Legacy Logic & Performance',
            color: '#9333EA',
            gradient: 'from-[#9333EA]/40 to-[#4F46E5]/20',
            description: 'We rescue struggling projects and optimize system performance for peak efficiency.',
            items: ['Fix Incomplete/Broken Apps', 'Architecture Refactoring', 'Performance & Speed Optimization'],
            link: '/hexenity/solutions/web'
        },
        {
            icon: Building2,
            title: 'Scale',
            subtitle: 'Enterprise Automation',
            color: '#4F46E5',
            gradient: 'from-[#4F46E5]/40 to-[#9333EA]/20',
            description: 'We build the backbone of your business with custom ERP and automation suites.',
            items: ['Custom ERP Development', 'Workflow Automation', 'Internal Business Platforms'],
            link: '/hexenity/solutions/erp'
        },
    ];

    const products = [
        {
            title: 'Hexenity ERP',
            desc: 'A unified operations system for modern businesses.',
            icon: Layers,
            features: ['Inventory', 'HRM', 'CRM']
        },
        {
            title: 'AI Dev Engine',
            desc: 'Proprietary tools that accelerate coding by 3x.',
            icon: Brain,
            features: ['Auto-CodeGen', 'Smart QA']
        },
        {
            title: 'Automation OS',
            desc: 'System-wide bots to handle repetitive tasks.',
            icon: Zap,
            features: ['Logic Bots', 'API Sync']
        }
    ];

    const impactMetrics = [
        { val: '3x', label: 'Faster Delivery', desc: 'AI-assisted development cycles' },
        { val: '60%', label: 'Cost Reduction', desc: 'compared to traditional agencies' },
        { val: '2-6', label: 'Week Cycles', desc: 'from concept to production' },
        { val: 'Zero', label: 'Technical Debt', desc: 'Built for long-term scalability' }
    ];

    const industries = [
        { name: 'FinTech', icon: Shield, desc: 'High-security transaction platforms & digital wallets.' },
        { name: 'HealthTech', icon: Activity, desc: 'Patient management & diagnostic OS layers.' },
        { name: 'E-commerce', icon: ShoppingBag, desc: 'Scalable marketplaces & headless commerce.' },
        { name: 'Logistics', icon: Truck, desc: 'Fleet tracking & supply chain automation.' }
    ];

    const processSteps = [
        { number: '01', label: 'Strategic Alignment', desc: 'Defining KPIs and product roadmap.' },
        { number: '02', label: 'Architecture Design', desc: 'Deep-dive into tech stack & scalability.' },
        { number: '03', label: 'AI-Powered Build', desc: 'Rapid development with automated QA.' },
        { number: '04', label: 'Stress Testing', desc: 'Ensuring security and performance peaks.' },
        { number: '05', label: 'Global Deployment', desc: 'Rolling out to production environments.' },
        { number: '06', label: 'Growth Optimization', desc: 'Iterative scaling based on real data.' },
    ];

    const stats = [
        { target: 50, suffix: '+', label: 'Projects Delivered' },
        { target: 8, suffix: '+', label: 'Years Experience' },
        { target: 100, suffix: '%', label: 'Reliability Rate' },
    ];

    const techStack = [
        { name: 'React', icon: '⚛️' },
        { name: 'Next.js', icon: '▲' },
        { name: 'Node.js', icon: '🟢' },
        { name: 'Typescript', icon: '📘' },
        { name: 'Python', icon: '🐍' },
        { name: 'Flutter', icon: '💙' },
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'AWS', icon: '☁️' }
    ];

    const whyPoints = [
        { icon: Zap, title: 'Extreme Velocity', desc: 'We ship production-grade code in weeks, not months, using AI-powered workflows.' },
        { icon: Shield, title: 'Enterprise Security', desc: 'Built-in compliance and high-security architecture for sensitive data.' },
        { icon: Cpu, title: 'Intelligent Logic', desc: 'Predictive algorithms and automation at the core of every solution.' },
        { icon: Layers, title: 'Cloud Scalability', desc: 'Auto-scaling infrastructure designed to handle millions of requests.' }
    ];

    const engagementModels = [
        { 
            title: 'Product Sprint', 
            desc: 'Fixed-scope delivery of an MVP or major feature in 4-6 weeks.',
            icon: Rocket
        },
        { 
            title: 'Dedicated Squad', 
            desc: 'A full-time engineering team integrated with your company.',
            icon: Users
        },
        { 
            title: 'Technical Consulting', 
            desc: 'Strategic architecture review and legacy system optimization.',
            icon: Brain
        }
    ];

    /* ── Particles ── */
    const particles = Array.from({ length: 18 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: `${2 + Math.random() * 3}px`,
        delay: `${Math.random() * 4}s`,
        duration: `${4 + Math.random() * 5}s`,
    }));

    return (
        <div className="font-inter min-h-screen bg-hexenity-bg text-white selection:bg-[#4F46E5]/40 overflow-x-hidden">
            {/* ─── Product Mode Transition Loader ─── */}
            {isLaunching && (
                <div className="fixed inset-0 z-[100] bg-[#0B0F19] flex flex-col items-center justify-center">
                    <Orb className="w-[400px] h-[400px] bg-[#4F46E5]/20" />
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center relative z-10"
                    >
                        <div className="w-16 h-16 border-4 border-[#4F46E5]/20 border-t-[#4F46E5] rounded-full animate-spin mx-auto mb-6" />
                        <h2 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                            Launching Hexenity OS...
                        </h2>
                        <p className="text-white/40 text-sm animate-pulse tracking-widest uppercase">Initializing Core Modules</p>
                    </motion.div>
                </div>
            )}
            <GridBg />

            {/* ───────────────── 1. HERO ───────────────── */}
            <section className="relative z-10 overflow-hidden border-b border-white/10 pt-28 pb-24 md:pb-36">
                {/* gradient orbs */}
                <Orb className="w-[600px] h-[600px] bg-[#4F46E5]/25 -top-40 -left-40" />
                <Orb className="w-[400px] h-[400px] bg-[#9333EA]/15 top-20 right-0" />
                <Orb className="w-[300px] h-[300px] bg-[#22D3EE]/10 bottom-0 left-1/2" />

                {/* floating particles */}
                {particles.map((p) => (
                    <div
                        key={p.id}
                        className="absolute rounded-full bg-white/30 animate-ping"
                        style={{
                            left: p.left,
                            top: p.top,
                            width: p.size,
                            height: p.size,
                            animationDelay: p.delay,
                            animationDuration: p.duration,
                        }}
                    />
                ))}

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
                    >
                        <motion.div variants={fadeUp} custom={0}>
                            <SectionBadge>
                                <Cpu className="w-3 h-3" /> Engineering Speed. Delivering Intelligent Solutions.
                            </SectionBadge>
                        </motion.div>
                        <motion.h1
                            variants={fadeUp}
                            custom={1}
                            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
                        >
                            Scaling Innovation at{' '}
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    backgroundImage: 'linear-gradient(90deg, #4F46E5, #9333EA, #22D3EE)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                Hexenity OS
                            </span>
                        </motion.h1>
                        <motion.p
                            variants={fadeUp}
                            custom={2}
                            className="text-xl md:text-2xl text-white/80 font-medium mb-6 max-w-4xl mx-auto"
                        >
                            We build high-performance mobile apps, web platforms, and ERP systems using <span className="text-indigo-400">AI-powered development</span> — delivered in weeks, not months.
                        </motion.p>
                        
                        <motion.div variants={fadeUp} custom={4} className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                            <button
                                type="button"
                                onClick={() => navigate('/hexenity/contact')}
                                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-bold text-white bg-hexenity-gradient shadow-hexenity-glow hover:shadow-hexenity-glow-lg hover:-translate-y-1 transition-all duration-300 text-lg group"
                            >
                                <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" /> 
                                Get Started
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ───────────────── LIVE STATS STRIP ───────────────── */}
            <section className="relative z-10 border-b border-white/10" style={{ background: 'linear-gradient(180deg, #0B0F19, #111827)' }}>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid sm:grid-cols-3 gap-10 text-center">
                    {stats.map((s, i) => (
                        <motion.div
                            key={s.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <AnimatedCounter target={s.target} suffix={s.suffix} />
                            <p className="text-white/50 text-sm mt-2 font-medium">{s.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ───────────────── QUOTE STRIP ───────────────── */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
                className="relative z-10 border-b border-white/10 py-12 md:py-16 overflow-hidden"
            >
                <div
                    className="absolute inset-0 opacity-40"
                    style={{ background: 'linear-gradient(90deg, rgba(79,70,229,0.2), rgba(147,51,234,0.2), rgba(34,211,238,0.1))' }}
                />
                <div className="relative text-center px-6">
                    <p className="text-2xl md:text-4xl font-light text-white/70 tracking-tight">
                        "Speed is our advantage."
                    </p>
                    <p className="text-3xl md:text-5xl font-black mt-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-cyan-300 to-purple-300">
                        Quality is our standard.
                    </p>
                </div>
            </motion.section>

            <div className="relative z-10 space-y-0">

                {/* ───────────────── 2. WHAT HEXENITY IS (POSITIONING) ───────────────── */}
                <section className="py-24 md:py-32" style={{ background: '#0B0F19' }}>
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="grid lg:grid-cols-1 gap-16 items-center">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                                className="text-center"
                            >
                                <motion.div variants={fadeUp} className="flex justify-center"><SectionBadge><Rocket className="w-3 h-3" /> AI-First Mobile Architecture</SectionBadge></motion.div>
                                <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1]">
                                    A Modern<br />
                                    <span
                                        className="bg-clip-text text-transparent"
                                        style={{ backgroundImage: 'linear-gradient(90deg, #4F46E5, #9333EA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                                    >
                                        Technology Partner
                                    </span>
                                </motion.h2>
                                <motion.p variants={fadeUp} className="text-white/70 text-xl md:text-2xl leading-relaxed mb-10 font-light max-w-4xl mx-auto italic">
                                    Pioneering <span className="text-white font-medium">Mobile Application Development</span> with the power of <span className="text-indigo-400 font-bold">AI and advanced architectures</span>. 
                                    Hexenity engineering ensures your product is built on the most robust, high-performance foundations available today.
                                </motion.p>
                                
                                <motion.div variants={fadeUp} className="flex justify-center gap-6 mt-12">
                                    <button 
                                        onClick={() => navigate('/hexenity/solutions/mobile-detail')}
                                        className="px-12 py-6 rounded-[24px] bg-hexenity-gradient text-white font-black text-xl shadow-hexenity-glow hover:shadow-hexenity-glow-lg hover:-translate-y-2 transition-all duration-300 font-inter flex items-center gap-3 group"
                                    >
                                        Explore Mobile Architecture <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </motion.div>

                                <motion.div variants={fadeUp} className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {[
                                        { title: 'AI-Driven Delivery', desc: 'Predictive coding and autonomous QA for 3x faster release cycles.', icon: Sparkles },
                                        { title: 'Best-in-Class Architecture', desc: 'Enterprise-grade microservices and secure data synchronization.', icon: Cpu },
                                        { title: 'New Level Performance', desc: 'High-fidelity mobile experiences that outperform traditional apps.', icon: Zap }
                                    ].map((item, idx) => (
                                        <div key={idx} className="p-8 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all text-left">
                                            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6 border border-indigo-500/20">
                                                <item.icon className="w-6 h-6 text-indigo-400" />
                                            </div>
                                            <h4 className="text-xl font-bold text-white mb-3 tracking-tight">{item.title}</h4>
                                            <p className="text-sm text-white/40 leading-relaxed font-medium">{item.desc}</p>
                                        </div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ───────────────── 3. MISSION & VISION ───────────────── */}
                <section className="py-20 md:py-28 border-t border-white/5" style={{ background: '#111827' }}>
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-14 text-center"
                        >
                            <SectionBadge><Rocket className="w-3 h-3" /> Purpose & Direction</SectionBadge>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">Our Mission & Vision</h2>
                        </motion.div>
                        <div className="grid lg:grid-cols-2 gap-8">
                            {/* Mission */}
                            <motion.div
                                initial={{ opacity: 0, x: -24 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative hexenity-glass hexenity-glass-hover p-8 md:p-10 overflow-hidden"
                            >
                                <Orb className="w-56 h-56 bg-[#4F46E5]/20 -top-10 -right-10" />
                                <div className="relative">
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="w-12 h-12 rounded-2xl bg-hexenity-gradient flex items-center justify-center shadow-hexenity-glow">
                                            <Rocket className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-white/40 uppercase tracking-widest">Our</p>
                                            <h3 className="text-2xl font-bold text-white">Mission</h3>
                                        </div>
                                    </div>
                                    <p className="text-white/65 leading-relaxed text-base">
                                        To help startups and enterprises <span className="text-white font-medium">launch, scale, and optimize</span> digital products faster using AI-powered development and agile execution.
                                    </p>
                                </div>
                            </motion.div>
                            {/* Vision */}
                            <motion.div
                                initial={{ opacity: 0, x: 24 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative hexenity-glass hexenity-glass-hover p-8 md:p-10 overflow-hidden"
                            >
                                <Orb className="w-56 h-56 bg-[#22D3EE]/15 -bottom-10 -left-10" />
                                <div className="relative">
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-cyan-glow"
                                            style={{ background: 'linear-gradient(135deg, #06b6d4, #22D3EE)' }}>
                                            <Globe className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-white/40 uppercase tracking-widest">Our</p>
                                            <h3 className="text-2xl font-bold text-white">Vision</h3>
                                        </div>
                                    </div>
                                    <p className="text-white/65 leading-relaxed text-base">
                                        To become a <span className="text-white font-medium">globally trusted rapid development partner</span>, enabling businesses to innovate without delays.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ───────────────── 4. CORE OFFERINGS (BUILD/OPTIMIZE/SCALE) ───────────────── */}
                <section className="py-24 md:py-32" style={{ background: 'linear-gradient(180deg, #0B0F19, #111827)' }}>
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-20"
                        >
                            <SectionBadge><Zap className="w-3 h-3" /> Solutions Architecture</SectionBadge>
                            <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6">Core Capability Pillars</h2>
                            <p className="text-white/50 text-xl max-w-2xl mx-auto">Precision-engineered services designed to handle every stage of your product lifecycle.</p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {services.map((s, i) => (
                                <motion.div
                                    key={s.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="relative group p-10 rounded-[32px] border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 flex flex-col h-full overflow-hidden"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                                    
                                    <div className="relative z-10">
                                        <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                                            <s.icon className="w-8 h-8" style={{ color: s.color }} />
                                        </div>
                                        <div className="mb-6">
                                            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: s.color }}>{s.subtitle}</p>
                                            <h3 className="text-3xl font-bold text-white tracking-tight">{s.title}</h3>
                                        </div>
                                        <p className="text-white/60 text-lg leading-relaxed mb-8">{s.description}</p>
                                        
                                        <ul className="space-y-4 mb-10 border-t border-white/5 pt-8">
                                            {s.items.map((item, idx) => (
                                                <li key={idx} className="flex items-center gap-3 text-white/40 group-hover:text-white/70 transition-colors">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-indigo-400 transition-colors" />
                                                    <span className="text-sm font-medium">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <button 
                                        onClick={() => navigate(s.link)}
                                        className="mt-auto relative z-10 flex items-center justify-center gap-2 w-full py-4 rounded-2xl border border-white/10 bg-white/5 text-sm font-bold uppercase tracking-widest hover:bg-white/10 hover:border-white/20 transition-all text-white/50 hover:text-white group/btn"
                                    >
                                        Explore Solution <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ───────────────── 5. OUR PRODUCT ECOSYSTEM ───────────────── */}
                <section className="py-24 md:py-32 border-t border-white/5" style={{ background: '#0B0F19' }}>
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="flex flex-col lg:flex-row gap-16 items-start">
                            <div className="lg:w-1/3">
                                <SectionBadge><Layers className="w-3 h-3" /> IP & Platforms</SectionBadge>
                                <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-8">Our Product Ecosystem</h2>
                                <p className="text-white/50 text-lg leading-relaxed mb-8">Beyond services, we build proprietary technology platforms that serve as the foundation for your success. This is what separates Hexenity from traditional agencies.</p>
                                <div className="p-8 rounded-3xl bg-indigo-500/5 border border-indigo-500/20">
                                    <p className="text-indigo-300 font-bold mb-2 uppercase tracking-widest text-xs">Proprietary Edge</p>
                                    <p className="text-white/70">Our products are built for rapid white-labeling and deep enterprise integration.</p>
                                </div>
                            </div>

                            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6 w-full">
                                {products.map((p, i) => (
                                    <motion.div
                                        key={p.title}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="p-8 rounded-[32px] border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 group"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/40 transition-all">
                                            <p.icon className="w-6 h-6 text-white/40 group-hover:text-indigo-400 transition-colors" />
                                        </div>
                                        <h4 className="text-2xl font-bold text-white mb-3 tracking-tight">{p.title}</h4>
                                        <p className="text-white/40 mb-6 font-medium leading-relaxed">{p.desc}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {p.features.map(f => (
                                                <span key={f} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-white/30 group-hover:text-indigo-300 transition-colors">
                                                    {f}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ───────────────── 6. REAL IMPACT (METRICS) ───────────────── */}
                <section className="py-24 md:py-32" style={{ background: 'linear-gradient(180deg, #0B0F19, #131521)' }}>
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-20">
                            <SectionBadge><Timer className="w-3 h-3" /> Efficiency Metrics</SectionBadge>
                            <h2 className="text-4xl md:text-6xl font-black text-white mt-4 tracking-tight">Engineering for Impact</h2>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {impactMetrics.map((m, i) => (
                                <motion.div
                                    key={m.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-10 rounded-[32px] border border-white/5 bg-white/[0.01] hover:bg-indigo-500/5 transition-all duration-500 group"
                                >
                                    <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-4 group-hover:scale-110 transition-transform origin-left">
                                        {m.val}
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-3">{m.label}</h4>
                                    <p className="text-white/40 leading-relaxed font-medium">{m.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ───────────────── 7. HOW WE WORK (PROCESS) ───────────────── */}
                <section className="py-24 md:py-32 border-t border-white/5" style={{ background: '#0B0F19' }}>
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-20"
                        >
                            <SectionBadge><Timer className="w-3 h-3" /> Execution Model</SectionBadge>
                            <h2 className="text-4xl md:text-6xl font-black text-white mt-4 mb-6">How We Deliver</h2>
                            <p className="text-white/40 text-xl max-w-2xl mx-auto">From strategic alignment to global deployment — a rigorous, AI-enhanced engineering process.</p>
                        </motion.div>

                        <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                            {processSteps.map((step, idx) => (
                                <motion.div
                                    key={step.number}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="relative group"
                                >
                                    <div className="flex items-center gap-6 mb-6">
                                        <div className="text-6xl font-black text-white/5 group-hover:text-indigo-500/20 transition-colors duration-500">{step.number}</div>
                                        <div className="h-px flex-1 bg-white/5 group-hover:bg-indigo-500/20 transition-colors duration-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{step.label}</h3>
                                    <p className="text-white/40 text-lg leading-relaxed">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 8 (Specialized Sector Expertise) moved to Mobile App Development Detail page */}



                {/* ───────────────── 9. TECH STACK ───────────────── */}
                <section className="py-24 md:py-32 border-t border-white/5" style={{ background: '#0B0F19' }}>
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">
                            <div className="lg:w-1/3 text-center lg:text-left">
                                <SectionBadge><Cpu className="w-3 h-3" /> Core Infrastructure</SectionBadge>
                                <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Our Engineering Stack</h2>
                                <p className="text-white/40 text-lg leading-relaxed">We leverage the most advanced frameworks and cloud-native tools to ensure your product is built for the next decade.</p>
                            </div>
                            <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
                                {techStack.map((tech, idx) => (
                                    <motion.div
                                        key={tech.name}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] flex flex-col items-center justify-center gap-4 group hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300"
                                    >
                                        <span className="text-4xl group-hover:scale-110 transition-transform duration-500">{tech.icon}</span>
                                        <span className="text-white/40 text-xs font-bold uppercase tracking-widest group-hover:text-white/70 transition-colors">{tech.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ───────────────── 10. WHY HEXENITY (DIFFERENTIATION) ───────────────── */}
                <section className="py-24 md:py-32" style={{ background: 'linear-gradient(180deg, #111827, #0B0F19)' }}>
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-20"
                        >
                            <SectionBadge><Shield className="w-3 h-3" /> The Hexenity Edge</SectionBadge>
                            <h2 className="text-4xl md:text-6xl font-black text-white mt-4 mb-6 tracking-tight">Why Industry Leaders<br />Choose Us</h2>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {whyPoints.map((p, i) => (
                                <motion.div
                                    key={p.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-10 rounded-[40px] border border-white/5 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-500 group flex flex-col text-center items-center"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-8 border border-indigo-500/20 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all duration-500">
                                        <p.icon className="w-8 h-8 text-indigo-400" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">{p.title}</h4>
                                    <p className="text-white/40 leading-relaxed font-medium">{p.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ───────────────── 11. PRODUCT ECOSYSTEM (ERP SHOWCASE) ───────────────── */}
                <section className="py-24 md:py-32 border-t border-white/5" style={{ background: '#0B0F19' }}>
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <SectionBadge><Layers className="w-3 h-3" /> Proprietary Platform</SectionBadge>
                                <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-8">Hexenity ERP OS</h2>
                                <p className="text-white/50 text-xl leading-relaxed mb-10">We developed a modular ERP core that enables us to deploy comprehensive business management systems <span className="text-indigo-400 italic">4x faster</span> than standard builds.</p>
                                
                                <div className="space-y-6 mb-12">
                                    {[
                                        { title: 'Inventory Management', desc: 'Real-time stock tracking with predictive restocking alerts.' },
                                        { title: 'HRM Suite', desc: 'Automated payroll, attendance, and performance tracking.' },
                                        { title: 'CRM Engine', desc: 'Deep analytics and automated lead progression logic.' }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex gap-5">
                                            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                                                <CheckCircle2 className="w-6 h-6 text-indigo-400" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                                                <p className="text-white/40">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <button 
                                    onClick={() => navigate('/hexenity/solutions/erp')}
                                    className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all font-inter"
                                >
                                    Browse Solutions
                                </button>
                            </motion.div>
                            
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="rounded-3xl border border-white/10 overflow-hidden shadow-2xl bg-[#111827] p-4">
                                    <img src="/assets/showcase/erp_os_premium.png" alt="Hexenity ERP Dashboard" className="rounded-2xl" />
                                </div>
                                <Orb className="w-64 h-64 bg-indigo-500/30 -top-10 -right-10" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ───────────────── 12. HEXENITY SAAS PLATFORM ───────────────── */}
                <section className="py-28 px-6 bg-[#0B0F19] text-white relative overflow-hidden border-t border-white/5">
                    {/* Glow */}
                    <div className="absolute w-[600px] h-[600px] bg-indigo-600 blur-[140px] opacity-20 rounded-full top-0 left-1/2 -translate-x-1/2 pointer-events-none"></div>
                    
                    <div className="max-w-6xl mx-auto text-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
                                Introducing <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent uppercase">
                                    Hexenity SaaS Platform
                                </span>
                            </h2>

                            <p className="opacity-70 max-w-3xl mx-auto text-lg mb-16 font-light leading-relaxed">
                                A comprehensive, cloud-native ecosystem engineered to centralize your entire digital infrastructure. 
                                Hexenity SaaS provides a <span className="text-white font-medium italic">"Single Pane of Glass"</span> command center, 
                                allowing you to govern ERP modules, web deployments, and mobile application fleets through a unified, 
                                high-security administrative layer.
                            </p>

                            {/* 🚀 CORE SAAS VALUE PILLARS */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 text-left">
                                {[
                                    { icon: Layout, title: 'Unified Governance', desc: 'Manage ERP, Web, and Mobile assets from one dashboard.' },
                                    { icon: Zap, title: 'Instant Scalability', desc: 'Architecture built to grow from 10 to 1 million users seamlessly.' },
                                    { icon: Activity, title: 'Zero-Latency Sync', desc: 'Real-time data propagation across all company sub-systems.' },
                                    { icon: Shield, title: 'Enterprise Security', desc: 'Military-grade encryption and multi-tenant isolation standards.' }
                                ].map((pillar, i) => (
                                    <div key={i} className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-colors group">
                                        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <pillar.icon className="w-5 h-5 text-indigo-400" />
                                        </div>
                                        <h4 className="text-sm font-bold text-white mb-2">{pillar.title}</h4>
                                        <p className="text-xs text-white/40 leading-relaxed font-medium">{pillar.desc}</p>
                                    </div>
                                ))}
                            </div>

                            {/* 🖥️ PLATFORM PREVIEW BOARDS */}
                            <div className="mt-20 space-y-12 text-left">
                                <h3 className="text-2xl font-bold text-center mb-10 opacity-40 uppercase tracking-[0.2em]">Platform Preview</h3>
                                
                                <div className="grid lg:grid-cols-2 gap-8">
                                    {/* BOARD 1: Admin Control */}
                                    <motion.div 
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="hexenity-glass p-8 rounded-[40px] border border-white/5 hover:scale-[1.02] transition duration-500 shadow-2xl group"
                                    >
                                        <div className="flex justify-between items-start mb-8">
                                            <div>
                                                <h4 className="text-xl font-bold mb-1">Admin Control Dashboard</h4>
                                                <p className="text-xs text-white/30 truncate">Centralized command center for all business units.</p>
                                            </div>
                                            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                                                <Layout className="w-5 h-5" />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-3 gap-4">
                                            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                                <span className="text-[10px] font-bold text-white/20 uppercase">Users</span>
                                                <h5 className="text-xl font-black mt-1">1,240</h5>
                                            </div>
                                            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                                <span className="text-[10px] font-bold text-white/20 uppercase">Projects</span>
                                                <h5 className="text-xl font-black mt-1">32</h5>
                                            </div>
                                            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                                <span className="text-[10px] font-bold text-white/20 uppercase">Revenue</span>
                                                <h5 className="text-xl font-black mt-1">$24K</h5>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* BOARD 2: Business Ops */}
                                    <motion.div 
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="hexenity-glass p-8 rounded-[40px] border border-white/5 hover:scale-[1.02] transition duration-500 shadow-2xl group"
                                    >
                                        <div className="flex justify-between items-start mb-8">
                                            <div>
                                                <h4 className="text-xl font-bold mb-1">Business Operations Panel</h4>
                                                <p className="text-xs text-white/30">Module-based management and live tracking.</p>
                                            </div>
                                            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                                                <Activity className="w-5 h-5" />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-3">
                                            {['Project Tracking', 'Client Management', 'Inventory System', 'Website Control'].map(m => (
                                                <div key={m} className="p-3 bg-white/5 rounded-xl border border-white/5 text-[10px] font-bold text-white/40 flex items-center gap-2">
                                                    <div className="w-1 h-1 rounded-full bg-indigo-500" /> {m}
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>

                                {/* BOARD 3: AI Insights */}
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="hexenity-glass p-10 rounded-[40px] border border-white/10 hover:scale-[1.01] transition duration-500 shadow-2xl relative overflow-hidden group"
                                >
                                    <div className="absolute top-0 right-0 p-8">
                                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                                            <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400">AI Active</span>
                                        </div>
                                    </div>
                                    <h4 className="text-2xl font-black mb-10 italic premium-gradient-text">AI Insights Dashboard</h4>
                                    <div className="grid md:grid-cols-3 gap-8">
                                        <div className="space-y-1">
                                            <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">Efficiency Score</span>
                                            <h5 className="text-4xl font-black text-white">92%</h5>
                                            <p className="text-[10px] text-emerald-400 font-bold">+4% Optimization</p>
                                        </div>
                                        <div className="md:col-span-2 p-6 bg-white/5 rounded-3xl border border-white/10">
                                            <div className="flex items-center gap-3 mb-4">
                                                <Sparkles className="w-4 h-4 text-indigo-400" />
                                                <span className="text-xs font-bold uppercase tracking-widest text-white/60">Autonomous Suggestion</span>
                                            </div>
                                            <p className="text-sm text-white/80 font-light italic leading-relaxed">"System detected peak traffic latency in API Gateway. Recommendation: Auto-scale secondary load balancers by 15%."</p>
                                            <div className="mt-4 flex gap-4 text-[10px] font-mono text-white/20 tracking-tighter">
                                                <span>/optimize-system</span>
                                                <span>/analyze-growth</span>
                                                <span>/fix-errors</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* 🤖 AI-POWERED INTEGRATION HIGHLIGHT */}
                            <div className="mt-32 mb-20">
                                <h3 className="text-3xl font-bold mb-6">AI-Powered <span className="premium-gradient-text italic">SaaS Intelligence</span></h3>
                                <p className="max-w-2xl mx-auto opacity-50 mb-12 font-light">
                                    Hexenity integrates AI into every layer of your SaaS platform — from development to 
                                    predictive analytics and autonomous decision making.
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {[
                                        "Automated Dev Assistance",
                                        "Smart System Optimization",
                                        "Predictive Analytics",
                                        "AI Debugging Engine",
                                        "Performance Monitoring",
                                        "Autonomous Deployment"
                                    ].map((item, i) => (
                                        <div key={i} className="p-5 rounded-2xl border border-white/5 bg-white/[0.02] text-xs font-bold text-white/40 hover:text-white/80 hover:bg-white/5 transition-colors cursor-default">
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button
                                onClick={() => navigate("/hexenity/saas")}
                                className="px-12 py-5 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl text-lg font-black shadow-[0_0_30px_rgba(79,70,229,0.3)] hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto group"
                            >
                                Explore SaaS Platform <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    </div>
                </section>

                {/* ───────────────── 13. ENGAGEMENT MODELS (MODIFIED) ───────────────── */}
                <section className="py-24 md:py-32 border-t border-white/5" style={{ background: 'linear-gradient(180deg, #0B0F19, #111827)' }}>
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-20"
                        >
                            <SectionBadge><UserPlus className="w-3 h-3" /> Partnership Frameworks</SectionBadge>
                            <h2 className="text-4xl md:text-5xl font-black text-white mt-4 tracking-tight">How to Work With Us</h2>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {engagementModels.map((mode, i) => (
                                <motion.div
                                    key={mode.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-10 rounded-[40px] border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all group flex flex-col"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/40 transition-all">
                                        <mode.icon className="w-7 h-7 text-white/40 group-hover:text-indigo-400 transition-colors" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{mode.title}</h3>
                                    <p className="text-white/40 text-lg leading-relaxed mb-10">{mode.desc}</p>
                                    <button 
                                        onClick={() => navigate('/hexenity/contact')}
                                        className="mt-auto py-4 rounded-xl border border-white/10 text-white/60 font-bold hover:text-white hover:border-white/20 transition-all font-inter"
                                    >
                                        Select Model
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ───────────────── 13. INTRODUCING HEXENITY.AI ───────────────── */}
                <section className="py-32 px-6 text-center bg-gradient-to-b from-[#0B0F19] to-black relative overflow-hidden border-t border-white/5">
                    {/* Glow */}
                    <div className="absolute w-[600px] h-[600px] bg-indigo-600 blur-[160px] opacity-10 rounded-full top-0 left-1/4 -translate-x-1/2 pointer-events-none"></div>
                    <div className="absolute w-[600px] h-[600px] bg-purple-600 blur-[140px] opacity-10 rounded-full bottom-0 right-1/4 translate-x-1/2 pointer-events-none"></div>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-7xl mx-auto"
                    >
                        <SectionBadge><Sparkles className="w-3 h-3" /> System Intelligence</SectionBadge>
                        <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter leading-tight">
                            Introducing <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent lowercase">
                                hexenity.ai
                            </span>
                        </h2>

                        <p className="max-w-3xl mx-auto opacity-70 text-xl mb-20 font-light leading-relaxed">
                            A highly autonomous intelligence layer integrated directly into the Hexenity OS. 
                            Our AI platform is engineered to <span className="text-white font-medium">automate complex development cycles</span>, 
                            solve architectural bottlenecks, and provide real-time predictive analytics to power modern product ecosystems at scale.
                        </p>

                        {/* 🤖 AI FEATURE GRID */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 text-left">
                            {[
                                { 
                                    title: 'Autonomous Code Engine', 
                                    desc: 'Generates production-grade boilerplates and fixes complex logic loops in seconds.',
                                    icon: Cpu
                                },
                                { 
                                    title: 'Predictive Performance', 
                                    desc: 'Analyzes system telemetry to identify and resolve scaling bottlenecks before they occur.',
                                    icon: Activity
                                },
                                { 
                                    title: 'Intelligent Workflows', 
                                    desc: 'Automates repetitive business logic and integrates deep AI agents into everyday tasks.',
                                    icon: Brain
                                }
                            ].map((feature, i) => (
                                <div key={i} className="p-8 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all group backdrop-blur-sm">
                                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6 border border-indigo-500/20 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all">
                                        <feature.icon className="w-6 h-6 text-indigo-400" />
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-3 tracking-tight">{feature.title}</h4>
                                    <p className="text-sm text-white/40 leading-relaxed font-medium">{feature.desc}</p>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => navigate("/hexenity/ai")}
                            className="px-12 py-6 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl text-lg font-black shadow-[0_0_40px_rgba(79,70,229,0.3)] hover:scale-105 hover:shadow-[0_0_50px_rgba(79,70,229,0.5)] transition-all duration-300 flex items-center gap-3 mx-auto group relative z-20"
                        >
                            Explore hexenity.ai <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                        </button>
                    </motion.div>
                </section>

                {/* ───────────────── 13.5 INTRODUCING HEXENITY SAAS ───────────────── */}
                <section className="py-32 px-6 text-center bg-[#030303] relative overflow-hidden border-t border-white/5">
                    {/* Glow */}
                    <div className="absolute w-[800px] h-[800px] bg-blue-600 blur-[180px] opacity-[0.07] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-7xl mx-auto"
                    >
                        <SectionBadge><Layers className="w-3 h-3" /> Enterprise Hub</SectionBadge>
                        <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter leading-tight">
                            Introducing <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent uppercase">
                                Hexenity SaaS
                            </span>
                        </h2>

                        <p className="max-w-3xl mx-auto opacity-70 text-xl mb-20 font-light leading-relaxed">
                            The backbone of modern business operations. Our SaaS platform provides a 
                            <span className="text-white font-medium italic"> centralized command center</span> 
                            to govern your entire digital ecosystem—from ERP and internal tools to customer-facing 
                            web and mobile applications—all from a single, high-fidelity interface.
                        </p>

                        {/* 🚀 SAAS FEATURE GRID */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 text-left">
                            {[
                                { 
                                    title: 'Unified ERP Core', 
                                    desc: 'Pre-integrated modules for inventory, HR, and CRM that deploy in a fraction of the time.',
                                    icon: Building2
                                },
                                { 
                                    title: 'Universal Sync', 
                                    desc: 'Instant data propagation across web, mobile, and administrative layers.',
                                    icon: Zap
                                },
                                { 
                                    title: 'Multi-Tenant OS', 
                                    desc: 'Bank-grade isolation and security for complex enterprise hierarchies.',
                                    icon: Shield
                                }
                            ].map((feature, i) => (
                                <div key={i} className="p-8 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all group backdrop-blur-sm">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                                        <feature.icon className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-3 tracking-tight">{feature.title}</h4>
                                    <p className="text-sm text-white/40 leading-relaxed font-medium">{feature.desc}</p>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => navigate("/hexenity/saas")}
                            className="px-12 py-6 bg-white text-black rounded-2xl text-lg font-black shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto group relative z-20"
                        >
                            Explore SaaS Platform <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </section>

                {/* ───────────────── 14. FINAL CTA (UNIFIED) ───────────────── */}
                <section className="py-32 relative overflow-hidden" style={{ background: '#0B0F19' }}>
                    <Orb className="w-[800px] h-[800px] bg-[#4F46E5]/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    <div className="relative max-w-5xl mx-auto px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">Ready to Engineer<br />Your Momentum?</h2>
                            <p className="text-white/50 text-xl md:text-2xl max-w-2xl mx-auto mb-12">Stop waiting. Start building. Let's launch your next-gen solution in weeks.</p>
                            
                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                                <button
                                    onClick={() => navigate('/hexenity/contact')}
                                    className="px-12 py-6 rounded-[24px] bg-hexenity-gradient text-white font-black text-xl shadow-hexenity-glow hover:shadow-hexenity-glow-lg hover:-translate-y-2 transition-all duration-300 font-inter"
                                >
                                    Book Technical Strategy
                                </button>
                                <button
                                    onClick={() => handleLaunchERP()}
                                    className="px-12 py-6 rounded-[24px] border border-white/10 bg-white/5 text-white/70 font-bold text-xl hover:bg-white/10 hover:text-white transition-all font-inter"
                                >
                                    Launch Demo OS
                                </button>
                            </div>
                            
                            <div className="mt-16 flex flex-wrap justify-center gap-12 opacity-30 grayscale contrast-125">
                                <div className="flex items-center gap-2"><Globe className="w-5 h-5 text-white" /><span className="text-sm font-bold uppercase tracking-widest text-white">Global Partners</span></div>
                                <div className="flex items-center gap-2"><Cpu className="w-5 h-5 text-indigo-400" /><span className="text-sm font-bold uppercase tracking-widest text-white">AI-Powered</span></div>
                                <div className="flex items-center gap-2"><Shield className="w-5 h-5 text-cyan-400" /><span className="text-sm font-bold uppercase tracking-widest text-white">Enterprise Ready</span></div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CoreHexenity;
