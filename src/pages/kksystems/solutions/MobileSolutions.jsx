import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Zap, Shield, Sparkles, CheckCircle2, ArrowRight, MessageSquare } from 'lucide-react';

export default function MobileSolutions() {
  const steps = [
    { title: "Discovery", desc: "Deep dive into your user needs and business goals." },
    { title: "Architecture", desc: "Designing scalable cloud-native mobile structures." },
    { title: "Sprint-Build", desc: "Rapid 2-week iteration cycles with live demos." },
    { title: "QA & Testing", desc: "Rigorous automation and manual device testing." },
    { title: "Deployment", desc: "Seamless App Store & Play Store publication." },
  ];

  return (
    <div className="bg-[#0B0F19] min-h-screen text-white px-6 py-24 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 mb-6 font-mono">
              <Smartphone className="w-3 h-3" /> Mobile Excellence
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent tracking-tight">
              Mobile Application Development
            </h1>
            <p className="text-xl opacity-60 mb-12 max-w-2xl mx-auto leading-relaxed">
              We build high-performance, scalable mobile applications with seamless UI and robust cloud-native architecture.
            </p>
          </motion.div>
        </div>

        {/* Technology Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {[
            { 
              title: "Flutter Cross Platform", 
              desc: "Unified codebases for iOS and Android with zero compromise on performance or design.",
              benefits: ["Single Codebase", "Native Performance", "Fast UI Iteration"],
              icon: Zap,
              color: "from-blue-500 to-cyan-500",
              cta: "Request Tech Review"
            },
            { 
              title: "Android Native", 
              desc: "Deeply integrated Kotlin-based solutions for maximum device leverage and speed.",
              benefits: ["Kotlin-First", "Jetpack Compose", "Optimized Core"],
              icon: Smartphone,
              color: "from-emerald-500 to-teal-500",
              cta: "Explore Native"
            },
            { 
              title: "iOS Development", 
              desc: "Premium Swift-powered applications following Apple's strictest quality and design standards.",
              benefits: ["SwiftUI / UIKit", "Metal Graphics", "Secure Core"],
              icon: Shield,
              color: "from-pink-500 to-rose-500",
              cta: "Start iOS Project"
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 bg-white/[0.03] border border-white/10 rounded-2xl hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 group text-left shadow-2xl backdrop-blur-sm flex flex-col h-full"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-indigo-400 transition-colors uppercase tracking-tight">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">{item.desc}</p>
              
              <ul className="space-y-3 mb-8 flex-1">
                {item.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-white/40 uppercase tracking-wider">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400/50" />
                    {benefit}
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 bg-white/5 border border-white/10 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all group/btn flex items-center justify-center gap-2">
                {item.cta} <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Development Lifecycle */}
        <div className="bg-white/[0.02] border border-white/5 rounded-[40px] p-12 mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-5">
            <Sparkles className="w-64 h-64 text-white" />
          </div>
          
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl font-bold mb-4">How We Develop</h2>
            <p className="text-white/40 max-w-xl mx-auto">A standardized, professional approach to building high-fidelity mobile solutions from concept to scale.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-black text-white/[0.03] absolute -top-10 -left-6 pointer-events-none">0{i+1}</div>
                <h4 className="text-lg font-bold mb-3 text-indigo-400 tracking-tight">{step.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 translate-y-[-50%] text-white/10">
                    <ArrowRight className="w-8 h-8 font-thin" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-gradient-to-br from-indigo-500/10 to-purple-600/10 border border-white/10 rounded-3xl p-12 backdrop-blur-md">
          <h2 className="text-3xl font-bold mb-6 tracking-tight">Ready to build your mobile future?</h2>
          <button className="px-10 py-5 bg-indigo-600 hover:bg-indigo-500 rounded-2xl text-lg font-bold text-white shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3 mx-auto">
            <MessageSquare className="w-6 h-6" /> Book Architecture Review
          </button>
        </div>
      </div>
    </div>
  );
}
