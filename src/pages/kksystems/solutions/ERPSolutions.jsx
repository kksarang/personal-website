import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Layers, Rocket, Users, Briefcase, Database, PieChart, ArrowRight, Zap } from 'lucide-react';

export default function ERPSolutions() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0B0F19] min-h-screen text-white px-6 py-24 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 mb-6">
            <Layers className="w-3 h-3" /> Enterprise OS
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            ERP Development Solutions
          </h1>
          <p className="text-xl opacity-60 mb-12 max-w-2xl mx-auto leading-relaxed">
            Build proprietary business operating systems to automate complex workflows, manage global operations, and drive hyper-growth.
          </p>
        </motion.div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-16" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
          {[
            { title: "Customer Management", icon: Users, color: "text-indigo-400" },
            { title: "Project Tracking", icon: Briefcase, color: "text-cyan-400" },
            { title: "Inventory Control", icon: Database, color: "text-purple-400" },
            { title: "Analytics Dashboard", icon: PieChart, color: "text-emerald-400" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 + 0.5 }}
              whileHover={{ y: -5, borderColor: 'rgba(255,255,255,0.2)' }}
              className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl flex flex-col items-center gap-4 group transition-all"
            >
              <div className={`p-4 rounded-xl bg-white/5 ${item.color} group-hover:scale-110 transition-transform`}>
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white/80 group-hover:text-white transition-colors">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* DEMO ERP CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="bg-gradient-to-br from-indigo-500/10 to-purple-600/10 border border-white/10 rounded-3xl p-10 max-w-3xl mx-auto shadow-2xl backdrop-blur-md"
        >
          <h2 className="text-3xl font-bold mb-4">Experience Hexenity OS</h2>
          <p className="text-white/40 mb-8 leading-relaxed">
            Don't just take our word for it. Step inside our custom-built Enterprise OS and see how we manage global assets, 
            analytics, and workflows in real-time.
          </p>
          <button
            onClick={() => navigate("/hexenity/erp/dashboard")}
            className="px-10 py-5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl text-lg font-bold text-white shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3 mx-auto group"
          >
            <Rocket className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            Launch Demo OS
          </button>
        </motion.div>
      </div>
    </div>
  );
}
