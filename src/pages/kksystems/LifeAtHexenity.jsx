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
const LifeAtHexenity = () => {
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
            icon: Zap,
            title: 'Rapid Development',
            color: '#22D3EE',
            gradient: 'from-[#4F46E5]/40 to-[#22D3EE]/20',
            items: ['Mobile apps (Flutter, Android, iOS)', 'Web platforms (React, Next.js)', 'MVP development'],
        },
        {
            icon: Wrench,
            title: 'Project Rescue',
            color: '#9333EA',
            gradient: 'from-[#9333EA]/40 to-[#4F46E5]/20',
            items: ['Fix incomplete apps', 'Improve bad architecture', 'Optimize performance'],
        },
        {
            icon: Building2,
            title: 'Enterprise Solutions',
            color: '#4F46E5',
            gradient: 'from-[#4F46E5]/40 to-[#9333EA]/20',
            items: ['ERP systems', 'CRM solutions', 'Internal dashboards', 'Automation tools'],
        },
        {
            icon: Brain,
            title: 'AI-Powered Development',
            color: '#f59e0b',
            gradient: 'from-[#f59e0b]/30 to-[#4F46E5]/20',
            items: ['Faster coding', 'Smart debugging', 'Automation workflows'],
        },
    ];

    const futurePlans = [
        { icon: Layers, title: 'ERP Product Development', desc: 'Industry-specific ERP solutions for businesses' },
        { icon: Globe, title: 'SaaS Platforms', desc: 'Subscription-based tools for startups' },
        { icon: Brain, title: 'AI Development Tools', desc: 'Internal systems to accelerate coding' },
        { icon: TrendingUp, title: 'Global Expansion', desc: 'Serving clients worldwide' },
        { icon: HeartHandshake, title: 'Dedicated Support Ecosystem', desc: '24/7 tech support platform' },
    ];

    const processSteps = [
        { number: '01', label: 'Understand Requirement' },
        { number: '02', label: 'Plan Architecture' },
        { number: '03', label: 'Rapid Development' },
        { number: '04', label: 'Testing & QA' },
        { number: '05', label: 'Delivery' },
        { number: '06', label: 'Continuous Support' },
    ];

    const cultureHighlights = [
        { icon: Zap, text: 'Fast-paced environment' },
        { icon: Sparkles, text: 'Innovation-driven culture' },
        { icon: TrendingUp, text: 'Learning & growth' },
        { icon: Users, text: 'Team collaboration' },
        { icon: Rocket, text: 'Ownership mindset' },
    ];

    const whyPoints = [
        { icon: Shield, text: '8+ Years Experience' },
        { icon: Timer, text: 'Fast Delivery' },
        { icon: Brain, text: 'AI-driven workflow' },
        { icon: Layers, text: 'Scalable solutions' },
        { icon: Users, text: 'Dedicated team' },
    ];

    const techStack = [
        { name: 'Flutter', icon: '🐦' },
        { name: 'React', icon: '⚛️' },
        { name: 'Node.js', icon: '🟢' },
        { name: 'AWS', icon: '☁️' },
        { name: 'Firebase', icon: '🔥' },
        { name: 'Next.js', icon: '⚡' },
        { name: 'AI Tools', icon: '🤖' },
        { name: 'Android', icon: '📱' },
    ];

    const stats = [
        { target: 50, suffix: '+', label: 'Projects Delivered' },
        { target: 8, suffix: '+', label: 'Years Experience' },
        { target: 100, suffix: '%', label: 'Client Satisfaction' },
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
                                <Sparkles className="w-3 h-3" /> Premium Tech Partner
                            </SectionBadge>
                        </motion.div>
                        <motion.h1
                            variants={fadeUp}
                            custom={1}
                            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-4"
                        >
                            Life at{' '}
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    backgroundImage: 'linear-gradient(90deg, #4F46E5, #9333EA, #22D3EE)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                Hexenity
                            </span>
                        </motion.h1>
                        <motion.p
                            variants={fadeUp}
                            custom={2}
                            className="text-xl md:text-2xl text-white/70 font-medium mb-4"
                        >
                            Where speed meets innovation. Where ideas turn into real products — faster than ever.
                        </motion.p>
                        <motion.p
                            variants={fadeUp}
                            custom={3}
                            className="text-base md:text-lg text-white/45 mb-10"
                        >
                            We don't just build software. We build momentum.
                        </motion.p>
                        <motion.div variants={fadeUp} custom={4} className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                type="button"
                                onClick={() => navigate('/hexenity/contact')}
                                className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-2xl font-semibold text-white bg-hexenity-gradient shadow-hexenity-glow hover:shadow-hexenity-glow-lg hover:-translate-y-1 transition-all duration-300"
                            >
                                <Mail className="w-5 h-5" /> Contact Us
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

                {/* ───────────────── 2. WHO WE ARE ───────────────── */}
                <section className="py-20 md:py-28" style={{ background: '#0B0F19' }}>
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-80px' }}
                            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                        >
                            <motion.div variants={fadeUp}><SectionBadge><Building2 className="w-3 h-3" /> Who We Are</SectionBadge></motion.div>
                            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                A modern technology<br />
                                <span
                                    className="bg-clip-text text-transparent"
                                    style={{ backgroundImage: 'linear-gradient(90deg, #4F46E5, #9333EA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                                >
                                    partner built for scale.
                                </span>
                            </motion.h2>
                            <motion.p variants={fadeUp} className="text-white/60 text-lg max-w-3xl leading-relaxed mb-6">
                                Hexenity is a modern technology partner built to solve real-world business challenges through fast, scalable, and intelligent solutions.
                            </motion.p>
                            <motion.p variants={fadeUp} className="text-white/50 text-base max-w-3xl leading-relaxed">
                                With <span className="text-[#a5b4fc] font-semibold">8+ years of experience</span>, we specialize in delivering high-quality mobile apps, web platforms, and enterprise systems — with a strong focus on speed and efficiency.
                            </motion.p>
                        </motion.div>
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

                {/* ───────────────── 4. WHAT WE DO ───────────────── */}
                <section className="py-20 md:py-28 border-t border-white/5" style={{ background: '#0B0F19' }}>
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-14"
                        >
                            <SectionBadge><Zap className="w-3 h-3" /> Services</SectionBadge>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">What We Do</h2>
                        </motion.div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {services.map((s, idx) => (
                                <motion.div
                                    key={s.title}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="hexenity-glass hexenity-glass-hover p-6 flex flex-col gap-4"
                                >
                                    <div
                                        className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${s.gradient} flex items-center justify-center`}
                                    >
                                        <s.icon className="w-6 h-6" style={{ color: s.color }} />
                                    </div>
                                    <h3 className="font-bold text-lg text-white">{s.title}</h3>
                                    <ul className="space-y-2">
                                        {s.items.map((item) => (
                                            <li key={item} className="flex items-start gap-2 text-white/55 text-sm">
                                                <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: s.color }} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ───────────────── 5. FUTURE PLANS ───────────────── */}
                <section className="py-20 md:py-28 border-t border-white/5 relative overflow-hidden" style={{ background: '#111827' }}>
                    <Orb className="w-[500px] h-[500px] bg-[#9333EA]/12 top-0 right-0" />
                    <Orb className="w-[400px] h-[400px] bg-[#4F46E5]/10 bottom-0 left-0" />
                    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-14"
                        >
                            <SectionBadge><TrendingUp className="w-3 h-3" /> What's Next</SectionBadge>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">Future Plans</h2>
                            <p className="text-white/55 text-lg max-w-2xl">
                                At Hexenity, we are continuously evolving to build the future of digital solutions.
                            </p>
                        </motion.div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {futurePlans.map((plan, idx) => (
                                <motion.div
                                    key={plan.title}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group hexenity-glass hexenity-glass-hover p-6 relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5]/0 to-[#9333EA]/0 group-hover:from-[#4F46E5]/10 group-hover:to-[#9333EA]/10 transition-all duration-500 rounded-2xl" />
                                    <div className="relative">
                                        <div className="w-11 h-11 rounded-xl bg-hexenity-gradient flex items-center justify-center mb-4 shadow-hexenity-glow/60 group-hover:shadow-hexenity-glow transition-all duration-300">
                                            <plan.icon className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-xs font-bold text-[#a5b4fc] bg-[#4F46E5]/20 px-2 py-0.5 rounded-full">Coming Soon</span>
                                        </div>
                                        <h3 className="font-bold text-white mb-2">{plan.title}</h3>
                                        <p className="text-white/50 text-sm leading-relaxed flex items-center gap-1.5">
                                            <ArrowRight className="w-3.5 h-3.5 text-[#22D3EE] shrink-0" />
                                            {plan.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ───────────────── 6. HOW WE WORK ───────────────── */}
                <section className="py-20 md:py-28 border-t border-white/5" style={{ background: '#0B0F19' }}>
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-16 text-center"
                        >
                            <SectionBadge><Timer className="w-3 h-3" /> Process</SectionBadge>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">How We Work</h2>
                        </motion.div>

                        {/* Desktop timeline */}
                        <div className="hidden md:block">
                            <div className="relative">
                                {/* connecting line */}
                                <div className="absolute top-8 left-[4%] right-[4%] h-0.5 rounded-full" style={{ background: 'linear-gradient(90deg, #4F46E5, #9333EA, #22D3EE)' }} />
                                <div className="grid grid-cols-6 gap-4">
                                    {processSteps.map((step, idx) => (
                                        <motion.div
                                            key={step.number}
                                            initial={{ opacity: 0, y: 24 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="flex flex-col items-center text-center"
                                        >
                                            <div
                                                className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center font-bold text-white text-sm mb-4 shadow-hexenity-glow"
                                                style={{ background: 'linear-gradient(135deg, #4F46E5, #9333EA)' }}
                                            >
                                                {step.number}
                                            </div>
                                            <p className="text-sm text-white/60 leading-snug px-1">{step.label}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Mobile timeline */}
                        <div className="md:hidden space-y-0">
                            {processSteps.map((step, idx) => (
                                <motion.div
                                    key={step.number}
                                    initial={{ opacity: 0, x: -16 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.08 }}
                                    className="flex gap-4 items-stretch"
                                >
                                    <div className="flex flex-col items-center">
                                        <div
                                            className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-sm shrink-0 shadow-hexenity-glow"
                                            style={{ background: 'linear-gradient(135deg, #4F46E5, #9333EA)' }}
                                        >
                                            {step.number}
                                        </div>
                                        {idx < processSteps.length - 1 && (
                                            <div className="w-0.5 flex-1 my-1" style={{ background: 'linear-gradient(180deg, #9333EA, #4F46E5)' }} />
                                        )}
                                    </div>
                                    <div className="pb-6 pt-2">
                                        <p className="text-white/75 font-medium text-sm">{step.label}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ───────────────── 7. LIFE / CULTURE ───────────────── */}
                <section className="py-20 md:py-28 border-t border-white/5 relative overflow-hidden" style={{ background: '#111827' }}>
                    <Orb className="w-[400px] h-[400px] bg-[#22D3EE]/8 top-1/2 -translate-y-1/2 left-0" />
                    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -24 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <SectionBadge><HeartHandshake className="w-3 h-3" /> Our Culture</SectionBadge>
                                <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-5 leading-tight">
                                    Life at Hexenity
                                </h2>
                                <p className="text-white/60 text-base leading-relaxed mb-8">
                                    At Hexenity, we believe in speed, collaboration, and continuous learning. Every team member is empowered to take ownership and make an impact.
                                </p>
                                <ul className="space-y-4">
                                    {cultureHighlights.map((c, i) => (
                                        <motion.li
                                            key={c.text}
                                            initial={{ opacity: 0, x: -16 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.08 }}
                                            className="flex items-center gap-3"
                                        >
                                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#4F46E5]/30 to-[#9333EA]/20 flex items-center justify-center shrink-0">
                                                <c.icon className="w-4 h-4 text-[#a5b4fc]" />
                                            </div>
                                            <span className="text-white/80 font-medium">{c.text}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                            {/* Visual card collage */}
                            <motion.div
                                initial={{ opacity: 0, x: 24 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative h-[380px]"
                            >
                                <div className="absolute top-0 left-0 w-4/5 h-3/5 hexenity-glass rounded-2xl overflow-hidden">
                                    <div className="w-full h-full flex items-center justify-center p-4"
                                        style={{ background: 'linear-gradient(135deg, rgba(79,70,229,0.3), rgba(147,51,234,0.2))' }}>
                                        <div className="text-center">
                                            <Brain className="w-10 h-10 text-[#a5b4fc] mx-auto mb-3" />
                                            <p className="text-white/70 text-sm font-medium">AI-Driven Workflow</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 right-0 w-3/5 h-2/5 hexenity-glass rounded-2xl overflow-hidden">
                                    <div className="w-full h-full flex items-center justify-center"
                                        style={{ background: 'linear-gradient(135deg, rgba(34,211,238,0.2), rgba(79,70,229,0.15))' }}>
                                        <div className="text-center px-4">
                                            <Zap className="w-8 h-8 text-[#22D3EE] mx-auto mb-2" />
                                            <p className="text-white/60 text-xs">Rapid Delivery</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute bottom-8 left-4 w-2/5 h-[90px] hexenity-glass rounded-2xl overflow-hidden">
                                    <div className="w-full h-full flex items-center justify-center"
                                        style={{ background: 'linear-gradient(135deg, rgba(147,51,234,0.25), rgba(79,70,229,0.15))' }}>
                                        <div className="text-center px-3">
                                            <Users className="w-7 h-7 text-[#9333EA] mx-auto mb-1" />
                                            <p className="text-white/60 text-xs">Team First</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ───────────────── 8. WHY HEXENITY ───────────────── */}
                <section className="py-20 md:py-28 border-t border-white/5" style={{ background: '#0B0F19' }}>
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-14 text-center"
                        >
                            <SectionBadge><Shield className="w-3 h-3" /> Trust</SectionBadge>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">Why Hexenity</h2>
                        </motion.div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
                            {whyPoints.map((p, idx) => (
                                <motion.div
                                    key={p.text}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="hexenity-glass hexenity-glass-hover p-6 flex flex-col items-center text-center gap-4"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-hexenity-gradient flex items-center justify-center shadow-hexenity-glow">
                                        <p.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <span className="text-white/85 font-semibold text-sm leading-snug">{p.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ───────────────── 9. TECH STACK ───────────────── */}
                <section className="py-20 md:py-28 border-t border-white/5" style={{ background: '#111827' }}>
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-14 text-center"
                        >
                            <SectionBadge><Cpu className="w-3 h-3" /> Technologies</SectionBadge>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-3">Our Tech Stack</h2>
                            <p className="text-white/45 text-base">The tools powering our rapid, scalable builds</p>
                        </motion.div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
                            {techStack.map((tech, idx) => (
                                <motion.div
                                    key={tech.name}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.06 }}
                                    whileHover={{ y: -6, scale: 1.05 }}
                                    className="hexenity-glass flex flex-col items-center justify-center py-5 px-3 gap-2 cursor-default"
                                    style={{ transition: 'transform 0.25s ease, border-color 0.25s' }}
                                >
                                    <span className="text-2xl">{tech.icon}</span>
                                    <span className="text-white/65 text-xs font-medium text-center">{tech.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>


        {/* ───────────────── 11. TRUSTED EXECUTION ───────────────── */}
        <section className="py-20 md:py-28 border-t border-white/5" style={{ background: '#111827' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-14 text-center"
            >
              <SectionBadge><Shield className="w-3 h-3" /> Trusted Execution</SectionBadge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">Delivering real results</h2>
            </motion.div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Zap, label: 'FinTech Platform', color: '#4F46E5' },
                { icon: Building2, label: 'Enterprise ERP', color: '#9333EA' },
                { icon: CheckCircle2, label: 'HealthTech OS', color: '#10B981' },
                { icon: Globe, label: 'E-commerce', color: '#F59E0B' },
                { icon: Cpu, label: 'AI Automation', color: '#6366F1' },
                { icon: Wrench, label: 'SaaS Dashboard', color: '#EC4899' },
                { icon: Layers, label: 'Logistics OS', color: '#3B82F6' },
                { icon: Shield, label: 'Cyber Security', color: '#22D3EE' }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all group"
                >
                  <item.icon className="w-8 h-8 mb-4 opacity-50 group-hover:opacity-100 transition-opacity" style={{ color: item.color }} />
                  <span className="text-white/70 text-sm font-semibold group-hover:text-white transition-colors">{item.label}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 grid md:grid-cols-3 gap-8 text-center border-t border-white/5 pt-12">
              <div>
                <p className="text-3xl font-bold text-white mb-2">50+</p>
                <p className="text-white/40 text-sm uppercase tracking-widest font-medium">Projects Delivered</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white mb-2">12+</p>
                <p className="text-white/40 text-sm uppercase tracking-widest font-medium">Industries Served</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white mb-2">100%</p>
                <p className="text-white/40 text-sm uppercase tracking-widest font-medium">Rapid Delivery model</p>
              </div>
            </div>
          </div>
        </section>



        {/* ───────────────── 13. ERP & PRODUCT VISION ───────────────── */}
        <section className="py-20 md:py-28 border-t border-white/5" style={{ background: '#111827' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-14 text-center"
            >
              <SectionBadge><Layers className="w-3 h-3" /> Our Product Vision</SectionBadge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">Scalable ERP & Business Solutions</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {['HR Management', 'Inventory Systems', 'Business Automation', 'Analytics Dashboards'].map((item) => (
                <div key={item} className="hexenity-glass hexenity-glass-hover p-6 text-center">
                  <h3 className="text-white font-semibold mb-2">{item}</h3>
                  <p className="text-white/60 text-sm">Designed to simplify operations and accelerate growth.</p>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* ───────────────── 15. ENGAGEMENT MODEL ───────────────── */}
        <section className="py-20 md:py-28 border-t border-white/5" style={{ background: '#111827' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-14 text-center"
            >
              <SectionBadge><UserPlus className="w-3 h-3" /> How You Can Work With Us</SectionBadge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">Engagement Models</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {['Fixed Project', 'Dedicated Team', 'Emergency Support'].map((mode) => (
                <div key={mode} className="hexenity-glass hexenity-glass-hover p-6 text-center">
                  <CheckCircle2 className="w-8 h-8 mx-auto mb-3 text-[#22D3EE]" />
                  <h3 className="text-white font-semibold mb-2">{mode}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────────── 16. TESTIMONIALS ───────────────── */}
        <section className="py-20 md:py-28 border-t border-white/5" style={{ background: '#0B0F19' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <SectionBadge><Quote className="w-3 h-3" /> Testimonials</SectionBadge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">What Clients Say</h2>
            </motion.div>
            <div className="space-y-6">
              <blockquote className="text-white/70 italic">
                “Built with a vision to deliver speed, reliability, and innovation.”
              </blockquote>
              <blockquote className="text-white/70 italic">
                “Hexenity turned our ideas into a market‑ready product in weeks.”
              </blockquote>
            </div>
          </div>
        </section>

        {/* ───────────────── 17. CAREERS ───────────────── */}
        <section className="py-20 md:py-28 border-t border-white/5" style={{ background: '#111827' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-14 text-center"
            >
              <SectionBadge><UserPlus className="w-3 h-3" /> Join Us</SectionBadge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">Careers at Hexenity</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {['Frontend Engineer', 'Backend Engineer', 'Product Designer'].map((role) => (
                <div key={role} className="hexenity-glass hexenity-glass-hover p-6 text-center">
                  <h3 className="text-white font-semibold mb-2">{role}</h3>
                  <p className="text-white/60 text-sm">Coming Soon</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────────── 18. PERFORMANCE BADGE ───────────────── */}
        <section className="pt-20 md:pt-28 pb-10 border-t border-white/5" style={{ background: '#0B0F19' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <SectionBadge><Cpu className="w-3 h-3" /> Performance Badge</SectionBadge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">Built for Performance</h2>
            </motion.div>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white/70">
              <li className="flex items-center gap-2 justify-center"><CheckCircle2 className="w-4 h-4 text-[#22D3EE]" /> Fast load</li>
              <li className="flex items-center gap-2 justify-center"><CheckCircle2 className="w-4 h-4 text-[#22D3EE]" /> Scalable architecture</li>
              <li className="flex items-center gap-2 justify-center"><CheckCircle2 className="w-4 h-4 text-[#22D3EE]" /> Secure systems</li>
            </ul>
          </div>
        </section>

        {/* ───────────────── 19. A GLIMPSE INTO OUR SOLUTIONS ───────────────── */}
        <section className="pt-10 pb-24 px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <SectionBadge><Sparkles className="w-3 h-3" /> Solutions Showcase</SectionBadge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">A Glimpse Into Our Solutions</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* CARD: Mobile */}
            <div 
              onClick={() => navigate('/hexenity/solutions/mobile')}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:scale-[1.02] transition duration-500 shadow-2xl cursor-pointer"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="/assets/showcase/mobile_app_premium.png" 
                  alt="Mobile App"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">Mobile Applications</h3>
                <p className="opacity-60 leading-relaxed">
                  Scalable cross-platform apps with smooth performance, native-like animations, and modern UI/UX design.
                </p>
                <div className="mt-6 flex items-center gap-2 text-indigo-400 font-semibold cursor-pointer group-hover:translate-x-2 transition-transform">
                  Explore Tech <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* CARD: Web */}
            <div 
              onClick={() => navigate('/hexenity/solutions/web')}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:scale-[1.02] transition duration-500 shadow-2xl cursor-pointer"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="/assets/showcase/web_platform_premium.png" 
                  alt="Web Platform"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">Web Platforms</h3>
                <p className="opacity-60 leading-relaxed">
                  Powerful dashboards and complex enterprise platforms built for high performance and global scale.
                </p>
                <div className="mt-6 flex items-center gap-2 text-purple-400 font-semibold cursor-pointer group-hover:translate-x-2 transition-transform">
                  View Architecture <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* CARD: ERP */}
            <div 
              onClick={() => navigate('/hexenity/solutions/erp')}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:scale-[1.02] transition duration-500 shadow-2xl cursor-pointer"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="/assets/showcase/erp_os_premium.png" 
                  alt="ERP OS"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">ERP Systems</h3>
                <p className="opacity-60 leading-relaxed">
                  End-to-end business automation systems designed to simplify operations and accelerate your growth.
                </p>
                <div className="mt-6 flex items-center gap-2 text-cyan-400 font-semibold cursor-pointer group-hover:translate-x-2 transition-transform">
                  Explore Solutions <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────── 10. FINAL CTA (UPGRADED) ───────────────── */}
        <section className="py-24 text-center relative overflow-hidden border-t border-white/5" style={{ background: 'linear-gradient(180deg, #0B0F19, #111827)' }}>
          <Orb className="w-[600px] h-[600px] bg-[#4F46E5]/15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div className="relative max-w-4xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-xs font-bold text-emerald-400 mb-6 uppercase tracking-widest">
                  <Zap className="w-3 h-3" /> Live Product Demo
                </span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Experience Our ERP in Action
              </motion.h2>
              <motion.p variants={fadeUp} className="text-white/50 text-lg mb-12 max-w-2xl mx-auto">
                Explore a live demo of Hexenity OS — our end-to-end ERP system designed to manage customers, projects, 
                inventory, and deep analytics all in one unified place.
              </motion.p>
              
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-5 justify-center mt-8 items-center flex-wrap">
                <button
                  onClick={() => handleLaunchERP()}
                  className="px-10 py-5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl text-lg font-bold text-white shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3 group"
                >
                  <Rocket className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  Launch Demo OS
                </button>

              </motion.div>
            </motion.div>
          </div>
        </section>
            </div>
        </div>
    );
};

export default LifeAtHexenity;
