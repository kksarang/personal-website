import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Layout, Cpu, ArrowRight, Zap, Code, CheckCircle2, Terminal } from 'lucide-react';

export default function WebSolutions() {
  const steps = [
    { title: "Strategy", desc: "Defining user personas, user flows, and business logic." },
    { title: "Prototype", desc: "High-fidelity UX wireframing and interactive prototyping." },
    { title: "Development", desc: "Building scalable frontends with solid backend APIs." },
    { title: "Optimization", desc: "Rigorous performance tuning for speed and SEO." },
    { title: "Cloud Launch", desc: "Global deployment with CI/CD and edge caching." },
  ];

  return (
    <div className="bg-[#0B0F19] min-h-screen text-white px-6 py-24 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-purple-500/20 text-purple-300 border border-purple-500/30 mb-6 font-mono">
              <Globe className="w-3 h-3" /> Digital Performance
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent tracking-tight">
              Web Platform Development
            </h1>
            <p className="text-xl opacity-60 mb-12 max-w-2xl mx-auto leading-relaxed">
              Modern, enterprise-grade web platforms built for high performance, infinite scale, and pixel-perfect responsiveness.
            </p>
          </motion.div>
        </div>

        {/* Technology Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {[
            { 
              title: "React / Next.js Apps", 
              desc: "Fast, SEO-optimized, and dynamic user interfaces using the latest full-stack React techniques.",
              benefits: ["Server Components", "Edge Rendering", "SEO Optimized"],
              icon: Zap,
              color: "from-blue-600 to-indigo-600",
              cta: "View Architecture"
            },
            { 
              title: "Admin Dashboards", 
              desc: "Complex data-heavy interfaces designed for maximum productivity and clarity of operations.",
              benefits: ["Real-time Data", "Advanced Charts", "Role-Based Access"],
              icon: Layout,
              color: "from-purple-600 to-pink-600",
              cta: "See Dashboard UI"
            },
            { 
              title: "Custom Web Systems", 
              desc: "Bespoke internal tools and platforms tailored precisely to your unique business workflows.",
              benefits: ["API Integration", "Secure Database", "Custom Workflow"],
              icon: Cpu,
              color: "from-indigo-600 to-cyan-600",
              cta: "Start Web Project"
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
              <h3 className="text-xl font-bold mb-4 group-hover:text-purple-400 transition-colors uppercase tracking-tight">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">{item.desc}</p>
              
              <ul className="space-y-3 mb-8 flex-1">
                {item.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-white/40 uppercase tracking-wider">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400/50" />
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
            <Terminal className="w-64 h-64 text-white" />
          </div>
          
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl font-bold mb-4">How We Develop</h2>
            <p className="text-white/40 max-w-xl mx-auto">A standardized, professional approach to building high-fidelity web platforms from strategy to global scale.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-black text-white/[0.03] absolute -top-10 -left-6 pointer-events-none">0{i+1}</div>
                <h4 className="text-lg font-bold mb-3 text-purple-400 tracking-tight">{step.title}</h4>
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

        <div className="text-center bg-gradient-to-br from-purple-500/10 to-indigo-600/10 border border-white/10 rounded-3xl p-12 backdrop-blur-md">
          <h2 className="text-3xl font-bold mb-6 tracking-tight">Ready to build your web future?</h2>
          <button className="px-10 py-5 bg-purple-600 hover:bg-purple-500 rounded-2xl text-lg font-bold text-white shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3 mx-auto">
            <Code className="w-6 h-6" /> Start Web Project
          </button>
        </div>
      </div>
    </div>
  );
}
