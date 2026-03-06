import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Wallet, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Calendar, 
  Download, 
  ArrowRight, 
  ShieldCheck, 
  PieChart, 
  Smartphone,
  CheckCircle2,
  Globe,
  Cloud,
  Instagram,
  Twitter,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ExpenserLanding = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  const features = [
    {
      title: "Track Daily Flow",
      description: "Manage your daily expenses and income with just a few taps.",
      icon: <TrendingUp className="w-6 h-6 text-indigo-500" />,
      color: "bg-indigo-50"
    },
    {
      title: "Category Analytics",
      description: "Get deep category-wise insights into your spending habits.",
      icon: <BarChart3 className="w-6 h-6 text-purple-500" />,
      color: "bg-purple-50"
    },
    {
      title: "Cloud Backup",
      description: "Your financial data stays safe and synced with Firebase.",
      icon: <Cloud className="w-6 h-6 text-blue-500" />,
      color: "bg-blue-50"
    },
    {
        title: "Simple & Clean UI",
        description: "Experience a minimalist design that makes finance easy.",
        icon: <Smartphone className="w-6 h-6 text-slate-500" />,
        color: "bg-slate-50"
    },
    {
        title: "Secure Auth",
        description: "Your data is protected with secure Firebase authentication.",
        icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
        color: "bg-green-50"
    },
    {
        title: "Multi-Device Sync",
        description: "Access your account and data across all your devices.",
        icon: <Globe className="w-6 h-6 text-orange-500" />,
        color: "bg-orange-50"
    }
  ];

  const floatingBubbles = [
    { id: 1, top: '15%', left: '10%', size: 'w-16 h-16', delay: 0, content: '📈' },
    { id: 2, top: '25%', right: '15%', size: 'w-20 h-20', delay: 0.5, content: '💳' },
    { id: 3, bottom: '20%', left: '15%', size: 'w-14 h-14', delay: 1, content: '📊' },
    { id: 4, bottom: '25%', right: '12%', size: 'w-18 h-18', delay: 1.5, content: '☁️' },
    { id: 5, top: '50%', left: '5%', size: 'w-12 h-12', delay: 2, content: '🔒' },
  ];

  return (
    <div className="bg-[#FCFCFD] text-[#1D1D1F] font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      {/* Premium Navbar */}
      <nav className="fixed top-0 inset-x-0 h-20 bg-white/70 backdrop-blur-xl z-[100] border-b border-slate-100 px-6">
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 overflow-hidden rounded-xl bg-black flex items-center justify-center group-hover:rotate-12 transition-transform">
              <img src="/assets/expenser/expenser_logo.jpg" alt="E" className="w-full h-full object-cover" />
            </div>
            <span className="font-bold text-xl tracking-tight">Expenser</span>
          </Link>

          <a href="#download" className="px-6 py-2.5 bg-black text-white rounded-full text-sm font-bold hover:scale-105 transition-transform">
            Download App
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6">
        {/* Background Gradient & Light Effect */}
        <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
            <div className="w-[1000px] h-[1000px] bg-gradient-to-tr from-indigo-100/50 via-white to-purple-100/50 rounded-full blur-[120px]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-30"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
                Track Expenses & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900">
                Income Effortlessly
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
              Expenser helps you track your daily financial flow with ease. <br className="hidden md:block" />
              Your financial data stays safe, secure, and synced across all your devices.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-20">
                <a href="https://play.google.com/store/apps/details?id=com.kksystems.expenser" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 bg-black text-white px-8 py-4 rounded-2xl hover:scale-105 transition-all shadow-xl shadow-black/10">
                    <div className="w-6 h-6 flex items-center justify-center font-bold"></div>
                    <div className="text-left leading-tight">
                        <div className="text-[10px] opacity-70">Download on the</div>
                        <div className="text-base font-bold">App Store</div>
                    </div>
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.kksystems.expenser" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 bg-black text-white px-8 py-4 rounded-2xl hover:scale-105 transition-all shadow-xl shadow-black/10">
                    <div className="w-6 h-6 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.523 15.341c-.551 0-1.002.47-1.002 1.039 0 .57.451 1.04 1.002 1.04.552 0 1.002-.47 1.002-1.04 0-.569-.45-1.039-1.002-1.039zM8.337 15.341c-.551 0-1.003.47-1.003 1.039 0 .57.452 1.04 1.003 1.04.551 0 1.002-.47 1.002-1.04 0-.569-.451-1.039-1.002-1.039zM21.2 5.3c-.4-.4-1.1-.5-1.5-.1l-1.6 1.1c-1.2-.5-2.5-.8-3.9-.8-1.4 0-2.6.3-3.8.8L8.7 5.2c-.4-.4-1.1-.3-1.5.1-.4.4-.5 1.1-.1 1.5l1.6 1.1c-1.7 1.5-2.7 3.6-2.7 5.9 0 4.4 3.6 8.1 8 8.1s8-3.7 8-8.1c0-2.3-1-4.4-2.7-5.9l1.6-1.1c.4-.4.5-1.1.1-1.5z"></path></svg>
                    </div>
                    <div className="text-left leading-tight">
                        <div className="text-[10px] opacity-70">Get it on</div>
                        <div className="text-base font-bold">Google Play</div>
                    </div>
                </a>
            </div>
          </motion.div>

          {/* Central Phone Mockup Area */}
          <div className="relative w-full max-w-[500px] mx-auto mt-10">
            {/* Connection Lines (SVGs) */}
            <svg className="absolute inset-0 w-full h-full -z-10 opacity-10" viewBox="0 0 500 600">
                <path d="M50 100 Q 250 50 250 200" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 5" />
                <path d="M450 150 Q 250 100 250 200" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 5" />
                <path d="M40 450 Q 250 400 250 400" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 5" />
                <path d="M460 480 Q 250 450 250 400" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 5" />
            </svg>

            {/* Floating Avatars/Icons */}
            {floatingBubbles.map((bubble) => (
                <motion.div
                    key={bubble.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                        type: 'spring', 
                        delay: bubble.delay,
                        duration: 1
                    }}
                    style={{
                        top: bubble.top,
                        left: bubble.left,
                        right: bubble.right,
                        bottom: bubble.bottom,
                    }}
                    className={`absolute ${bubble.size} bg-white rounded-full shadow-2xl border border-white flex items-center justify-center text-2xl z-20`}
                >
                    <motion.span
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: bubble.delay }}
                    >
                        {bubble.content}
                    </motion.span>
                </motion.div>
            ))}

            {/* Phone Container - Using Real Login Mockup */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative z-10 bg-[#0d0d0d] rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-15px_rgba(0,0,0,0.3)] border-[10px] border-[#1f1f1f]"
            >
                <img 
                    src="/assets/expenser/login_mockup.png" 
                    alt="Expenser Login" 
                    className="w-full h-auto object-cover"
                />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Content (Simple Cards) */}
      <section id="features" className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
                <div className="max-w-2xl">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Built for your <br /> daily financial needs.</h2>
                    <p className="text-slate-500 text-lg">Powerful features wrapped in a simple, clean UI. Your data stays safe and synced across all your devices.</p>
                </div>
                <div className="flex gap-4">
                    <button className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all">
                        <ArrowRight className="w-5 h-5 rotate-180" />
                    </button>
                    <button className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all">
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, idx) => (
                    <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl hover:shadow-indigo-500/5 transition-all group">
                        <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                            {feature.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                        <p className="text-slate-500 leading-relaxed mb-6">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Download App Redesign Section */}
      <section id="download" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
            <div className="bg-[#F2F2F7] rounded-[4rem] relative overflow-hidden h-auto min-h-[600px] flex flex-col lg:flex-row items-center p-12 lg:p-20">
                <div className="z-20 max-w-xl text-center lg:text-left">
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 block">Ready to Manage Your Spending?</span>
                    <h2 className="text-6xl md:text-8xl font-bold mb-10 tracking-tighter">
                        Download <br /> 
                        Mobile App
                    </h2>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                        <a href="https://play.google.com/store/apps/details?id=com.kksystems.expenser" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-8 py-4 rounded-2xl flex items-center gap-3 hover:scale-105 transition-transform">
                            <span className="font-bold">App Store</span>
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.kksystems.expenser" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-8 py-4 rounded-2xl flex items-center gap-3 hover:scale-105 transition-transform">
                            <span className="font-bold">Google Play</span>
                        </a>
                    </div>
                    <p className="text-slate-500 font-medium">Download Expenser & experience <br /> luxury financial tracking today!</p>
                </div>

                <div className="mt-12 lg:mt-0 lg:ml-auto flex gap-6 overflow-hidden">
                    <motion.div 
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="w-[280px] shrink-0"
                    >
                        <img 
                            src="/assets/expenser/profile_sarang.jpg" 
                            alt="Profile"
                            className="rounded-[3rem] shadow-2xl border-white border-[8px]"
                        />
                    </motion.div>
                    <motion.div 
                        initial={{ y: 200, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-[280px] shrink-0 hidden md:block"
                    >
                        <img 
                            src="/assets/expenser/profile_support.jpg" 
                            alt="Support"
                            className="rounded-[3rem] shadow-2xl border-white border-[8px]"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto border-t border-slate-100 pt-20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
                <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-black rounded-2xl overflow-hidden flex items-center justify-center">
                         <img src="/assets/expenser/expenser_logo.jpg" alt="E" className="w-full h-full object-cover" />
                    </div>
                    <span className="font-black text-3xl tracking-tighter uppercase italic">Expenser</span>
                </div>

                <div className="flex flex-wrap justify-center gap-10 text-sm font-bold text-slate-400 uppercase tracking-widest">
                    <a href="#" className="hover:text-black transition-colors">Home</a>
                    <a href="#download" className="hover:text-black transition-colors">Download</a>
                </div>

                <div className="flex items-center space-x-4">
                    <a href="#" className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all">
                        <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all">
                        <Twitter className="w-5 h-5" />
                    </a>
                </div>
            </div>

            <div className="mt-20 flex flex-col md:flex-row items-center justify-between text-slate-400 text-sm font-medium">
                <p>@2025 All Rights Reversed</p>
                <div className="flex space-x-8 mt-4 md:mt-0">
                    <a href="#">Terms and Privacy</a>
                </div>
            </div>

            <div className="mt-20 text-center">
                <h3 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 mb-10">Let's Collaborate on Something Amazing!</h3>
                <Link to="/" className="inline-block px-12 py-5 bg-black text-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl shadow-black/20">
                    Hire Me
                </Link>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default ExpenserLanding;
