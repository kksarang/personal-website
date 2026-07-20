import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Cpu, ArrowRight, Zap, Code, CheckCircle2, Terminal, Layers3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import HexenityPageShell from '../../../components/KkSystems/HexenityPageShell';

export default function WebSolutions() {
  const navigate = useNavigate();
  const steps = [
    { title: "Strategy", desc: "Defining product goals, conversion paths, and platform constraints." },
    { title: "Prototype", desc: "User journeys and interface prototypes validated early." },
    { title: "Development", desc: "Scalable frontends with robust APIs and integrations." },
    { title: "Optimization", desc: "Performance, SEO, and reliability tuning before release." },
    { title: "Cloud Launch", desc: "Controlled deployments with observability and support." },
  ];

  return (
    <HexenityPageShell
      badge="Solution Page"
      title="Web Platform Development"
      subtitle="Modern web engineering for conversion-focused products, internal platforms, and scalable SaaS."
      backLabel="Back to Hexenity"
      onBack={() => navigate('/hexenity')}
      actions={(
        <button
          onClick={() => navigate('/hexenity/contact')}
          className="inline-flex items-center gap-2 rounded-full border border-indigo-300/35 bg-indigo-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-indigo-100 transition hover:bg-indigo-500/30"
        >
          Start Web Project
          <ArrowRight className="h-4 w-4" />
        </button>
      )}
    >
      <div className="space-y-8">
        <section className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="premium-surface gradient-stroke rounded-3xl p-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-purple-300/35 bg-purple-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-purple-200">
              <Layers3 className="h-3.5 w-3.5" />
              Web execution model
            </p>
            <h2 className="mt-4 text-3xl font-black text-white">Web products engineered for growth</h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              From marketing sites to internal dashboards and SaaS products, we design systems that stay fast, stable, and adaptable as usage grows.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {["Performance-first UI", "Stable API design", "SEO + analytics ready"].map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <aside className="premium-surface rounded-3xl p-6">
            <h3 className="text-lg font-bold text-white">Best fit for</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" /> SaaS teams launching new modules fast</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" /> Businesses modernizing existing web stacks</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" /> Operations-heavy products with custom dashboards</li>
            </ul>
          </aside>
        </section>

        <div className="grid gap-6 md:grid-cols-3">
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
              className="premium-surface gradient-stroke flex h-full flex-col rounded-2xl p-7 transition-all duration-300 hover:border-purple-300/35"
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

        <div className="premium-surface rounded-[2rem] p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-5">
            <Terminal className="w-64 h-64 text-white" />
          </div>
          
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl font-bold mb-4">How We Develop</h2>
            <p className="text-white/40 max-w-xl mx-auto">A delivery cadence that combines product clarity, technical depth, and measurable output.</p>
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

        <div className="text-center rounded-3xl border border-indigo-300/25 bg-indigo-500/15 p-12">
          <h2 className="text-3xl font-bold mb-6 tracking-tight">Ready to build your web future?</h2>
          <button onClick={() => navigate('/hexenity/contact')} className="px-10 py-5 bg-purple-600 hover:bg-purple-500 rounded-2xl text-lg font-bold text-white shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3 mx-auto">
            <Code className="w-6 h-6" /> Start Web Project
          </button>
        </div>
      </div>
    </HexenityPageShell>
  );
}
