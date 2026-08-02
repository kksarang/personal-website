import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Zap, Shield, CheckCircle2, ArrowRight, MessageSquare, Layers3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import EnitexaPageShell from '../../../components/KkSystems/EnitexaPageShell';

export default function MobileSolutions() {
  const navigate = useNavigate();
  const steps = [
    { title: "Discovery", desc: "Deep dive into product goals, users, and success metrics." },
    { title: "Architecture", desc: "Scalable app structure, API contracts, and release design." },
    { title: "Sprint Build", desc: "Rapid iteration with weekly demos and shared priorities." },
    { title: "QA & Hardening", desc: "Automated tests plus real-device reliability checks." },
    { title: "Launch & Growth", desc: "Store rollout, observability, and post-launch support." },
  ];

  return (
    <EnitexaPageShell
      badge="Solution Page"
      title="Mobile Application Development"
      subtitle="High-performance mobile experiences built for scale, reliability, and long-term maintainability."
      backLabel="Back to Enitexa.Ai"
      onBack={() => navigate('/enitexa.ai')}
      actions={(
        <button
          onClick={() => navigate('/enitexa.ai/contact')}
          className="inline-flex items-center gap-2 rounded-full border border-indigo-300/35 bg-indigo-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-indigo-100 transition hover:bg-indigo-500/30"
        >
          Book Consultation
          <ArrowRight className="h-4 w-4" />
        </button>
      )}
    >
      <div className="space-y-8">
        <section className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="premium-surface gradient-stroke rounded-3xl p-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-200">
              <Layers3 className="h-3.5 w-3.5" />
              Mobile delivery model
            </p>
            <h2 className="mt-4 text-[clamp(1.5rem,4.5vw,1.875rem)] font-black text-white">Build once, ship confidently</h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Enitexa.Ai teams combine product thinking with platform-level engineering to deliver stable, high-performance mobile apps that scale with your business.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {["Weekly check-ins", "Store-ready releases", "Post-launch support"].map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <aside className="premium-surface rounded-3xl p-6">
            <h3 className="text-lg font-bold text-white">Best fit for</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" /> Founders launching mobile-first products</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" /> Teams replacing unstable legacy apps</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" /> Businesses needing app + backend coherence</li>
            </ul>
          </aside>
        </section>

        <div className="grid gap-6 md:grid-cols-3">
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
              className="premium-surface gradient-stroke flex h-full flex-col rounded-2xl p-7 transition-all duration-300 hover:border-indigo-300/35"
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

        <div className="premium-surface relative overflow-hidden rounded-[1.5rem] p-5 sm:rounded-[2rem] sm:p-10">
          <div className="relative z-10 mb-8 text-center sm:mb-12">
            <h2 className="mb-3 text-[clamp(1.5rem,5vw,2.25rem)] font-bold sm:mb-4">How We Develop</h2>
            <p className="mx-auto max-w-xl text-sm text-white/40 sm:text-base">A clear operating system that keeps delivery fast, transparent, and measurable.</p>
          </div>

          <div className="relative z-10 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-5">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="pointer-events-none absolute -left-2 -top-6 text-5xl font-black text-white/[0.03] sm:-left-6 sm:-top-10 sm:text-6xl">0{i+1}</div>
                <h4 className="mb-2 text-base font-bold tracking-tight text-indigo-400 sm:mb-3 sm:text-lg">{step.title}</h4>
                <p className="text-sm leading-relaxed text-white/40">{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className="absolute top-1/2 hidden -right-4 translate-y-[-50%] text-white/10 md:block">
                    <ArrowRight className="h-8 w-8 font-thin" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-indigo-300/25 bg-indigo-500/15 p-6 text-center sm:rounded-3xl sm:p-12">
          <h2 className="mb-5 text-[clamp(1.35rem,4.5vw,1.875rem)] font-bold tracking-tight sm:mb-6">Ready to build your mobile future?</h2>
          <button onClick={() => navigate('/enitexa.ai/contact')} className="mx-auto flex w-full max-w-sm items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-2xl transition-all hover:bg-indigo-500 hover:scale-[1.02] active:scale-95 sm:w-auto sm:gap-3 sm:rounded-2xl sm:px-10 sm:py-5 sm:text-lg">
            <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6" /> Book Architecture Review
          </button>
        </div>
      </div>
    </EnitexaPageShell>
  );
}
