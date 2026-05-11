import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Layers, Rocket, Users, Briefcase, Database, PieChart, ArrowRight, CheckCircle2 } from 'lucide-react';
import HexenityPageShell from '../../../components/KkSystems/HexenityPageShell';

export default function ERPSolutions() {
  const navigate = useNavigate();

  return (
    <HexenityPageShell
      badge="Solution Page"
      title="ERP Development Solutions"
      subtitle="Custom enterprise systems to centralize operations, automate workflows, and improve decision speed."
      backLabel="Back to Hexenity"
      onBack={() => navigate('/hexenity')}
      actions={(
        <button
          onClick={() => navigate('/hexenity/contact')}
          className="inline-flex items-center gap-2 rounded-xl border border-indigo-300/35 bg-indigo-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-indigo-100 transition hover:bg-indigo-500/30"
        >
          Talk to ERP Team
          <ArrowRight className="h-4 w-4" />
        </button>
      )}
    >
      <div className="mx-auto max-w-6xl space-y-8">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]"
        >
          <div className="premium-surface gradient-stroke rounded-3xl p-7">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300">
              <Layers className="h-3 w-3" /> Enterprise OS
            </span>
            <h2 className="mt-4 text-3xl font-black text-white">A single control layer for operations</h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Build a custom business operating system that unifies your teams, workflows, and reporting with one reliable source of truth.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {["Modular architecture", "Role-based access", "Automation-ready workflows"].map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <aside className="premium-surface rounded-3xl p-6">
            <h3 className="text-lg font-bold text-white">What you gain</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" /> Faster team coordination across departments</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" /> Lower manual overhead and fewer process gaps</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" /> Real-time visibility for faster decisions</li>
            </ul>
          </aside>
        </motion.section>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Customer Management", icon: Users, color: "text-indigo-400" },
            { title: "Project Tracking", icon: Briefcase, color: "text-cyan-400" },
            { title: "Inventory Control", icon: Database, color: "text-purple-400" },
            { title: "Analytics Dashboard", icon: PieChart, color: "text-emerald-400" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08 }}
              className="premium-surface gradient-stroke p-6 rounded-2xl flex flex-col items-center gap-4 text-center group transition-all hover:border-indigo-300/35"
            >
              <div className={`rounded-xl bg-white/5 p-4 ${item.color}`}>
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white/80 group-hover:text-white transition-colors">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="rounded-3xl border border-indigo-300/25 bg-indigo-500/15 p-10 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Experience Hexenity OS</h2>
          <p className="mx-auto mb-8 max-w-3xl text-white/60 leading-relaxed">
            Explore our interactive ERP demo to see how dashboards, workflows, and analytics work together in one enterprise-grade system.
          </p>
          <button
            onClick={() => navigate("/hexenity/erp/dashboard")}
            className="mx-auto flex items-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 px-10 py-5 text-lg font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Rocket className="h-6 w-6" />
            Launch Demo OS
          </button>
        </motion.div>
      </div>
    </HexenityPageShell>
  );
}
