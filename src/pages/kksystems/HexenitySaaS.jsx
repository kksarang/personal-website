import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    LineChart, 
    Line, 
    XAxis, 
    YAxis, 
    Tooltip, 
    ResponsiveContainer,
    AreaChart,
    Area
} from 'recharts';
import { 
    Layout, 
    Settings, 
    Cpu, 
    Zap, 
    ArrowLeft, 
    Database, 
    Users, 
    PieChart, 
    Activity, 
    CheckCircle2, 
    ArrowRight,
    Terminal,
    Sparkles,
    Layers,
    Shield,
    ChevronRight,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const chartData = [
  { name: "Jan", value: 400, uv: 2400 },
  { name: "Feb", value: 800, uv: 2210 },
  { name: "Mar", value: 600, uv: 2290 },
  { name: "Apr", value: 1200, uv: 2000 },
  { name: "May", value: 900, uv: 2181 },
  { name: "Jun", value: 1500, uv: 2500 },
];

export default function HexenitySaaS() {
  const [tab, setTab] = useState("admin");
  const [activeDesign, setActiveDesign] = useState("enterprise");
  const navigate = useNavigate();

  const designs = [
    { id: "enterprise", label: "Modern Enterprise", icon: Layout },
    { id: "fintech", label: "Fintech Core", icon: Shield },
    { id: "logistics", label: "Logistics Hub", icon: Zap },
    { id: "healthcare", label: "Healthcare OS", icon: Activity }
  ];

  return (
    <div className="min-h-screen bg-[#030303] text-white relative overflow-hidden font-inter selection:bg-indigo-500/30">
      
      {/* 🌌 High-Fidelity Glow Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute w-[800px] h-[800px] bg-indigo-600/10 blur-[160px] rounded-full -top-40 -left-40 animate-pulse" />
        <div className="absolute w-[600px] h-[600px] bg-purple-600/10 blur-[140px] rounded-full bottom-0 right-0" />
        <div className="absolute w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      </div>

      {/* 🏛️ HEADER / NAVIGATION BAR */}
      <header className="fixed top-0 z-50 w-full border-b border-white/5 backdrop-blur-3xl bg-black/40">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button 
                onClick={() => navigate('/hexenity/core-hexenity')}
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-all hover:scale-105"
            >
                <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="h-8 w-[1px] bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <Layout className="w-4 h-4 text-white" />
              </div>
              <h1 className="text-xl font-black tracking-tighter uppercase italic">Hexenity SaaS</h1>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 p-1 bg-white/5 border border-white/10 rounded-2xl">
            {["admin", "operations", "ai"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                  tab === t 
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20" 
                  : "text-white/40 hover:text-white"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
             {tab === "admin" && (
                <div className="relative group/designs">
                    <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2">
                        <span>Theme: {designs.find(d => d.id === activeDesign)?.label}</span>
                        <ChevronRight className="w-3 h-3 rotate-90" />
                    </button>
                    <div className="absolute top-full right-0 mt-2 w-56 bg-[#0B0F19] border border-white/10 rounded-2xl p-2 opacity-0 translate-y-2 pointer-events-none group-hover/designs:opacity-100 group-hover/designs:translate-y-0 group-hover/designs:pointer-events-auto transition-all shadow-2xl z-50">
                        {designs.map((d) => (
                            <button
                                key={d.id}
                                onClick={() => setActiveDesign(d.id)}
                                className={`w-full text-left p-3 rounded-xl text-[10px] font-bold uppercase tracking-widest flex items-center gap-3 transition-colors ${
                                    activeDesign === d.id ? "bg-indigo-600 text-white" : "hover:bg-white/5 text-white/40 hover:text-white"
                                }`}
                            >
                                <d.icon className="w-3.5 h-3.5" />
                                {d.label}
                            </button>
                        ))}
                    </div>
                </div>
             )}
             <button className="px-6 py-2.5 bg-white text-black text-xs font-black uppercase tracking-widest rounded-xl hover:bg-indigo-50 transition-colors shadow-xl">
               Live Console
             </button>
          </div>
        </div>
      </header>

      {/* 🧪 CONTENT AREA */}
      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {tab === "admin" && <AdminPanel navigate={navigate} theme={activeDesign} />}
            {tab === "operations" && <OperationsPanel />}
            {tab === "ai" && <AIEngine />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 🚀 FOOTER CTA */}
      <footer className="py-20 border-t border-white/5 bg-black/40 backdrop-blur-xl relative z-10">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-black mb-6 tracking-tight">Ready to launch your <span className="premium-gradient-text italic">Ecosystem?</span></h2>
          <p className="text-white/40 text-lg mb-10 font-light">Join the elite enterprises scaling their business with the Hexenity SaaS backbone.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-indigo-600 rounded-2xl text-sm font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-indigo-600/20">
              Get Started Now
            </button>
            <button className="px-10 py-4 bg-white/5 border border-white/10 rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-white/10 transition-all">
              Schedule Deep Dive
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ─────────────────────────────── ADMIN PANEL ─────────────────────────────── */
function AdminPanel({ navigate, theme }) {
  const themeConfigs = {
    enterprise: {
        stats: [
            { title: "Total Enterprise Users", value: "1,240", sub: "+12% from last month", icon: Users, color: "text-indigo-400" },
            { title: "Active Digital Assets", value: "32", sub: "Across Web & Mobile", icon: Zap, color: "text-yellow-400" },
            { title: "Platform Revenue (Arr)", value: "$24.4k", sub: "Subscription Model", icon: Database, color: "text-emerald-400" }
        ],
        chartTitle: "Growth Velocity",
        chartColor: "#6366F1",
        actionBtn: "Launch Live ERP"
    },
    fintech: {
        stats: [
            { title: "Total Transactions", value: "85.2k", sub: "Processed Today", icon: Shield, color: "text-blue-400" },
            { title: "Liquidity Pool", value: "$4.1M", sub: "Available Capital", icon: Database, color: "text-emerald-400" },
            { title: "Fraud Alerts", value: "0", sub: "System Secured", icon: Activity, color: "text-indigo-400" }
        ],
        chartTitle: "Market Volatility Index",
        chartColor: "#22c55e",
        actionBtn: "Trading Terminal"
    },
    logistics: {
        stats: [
            { title: "Fleet Utilization", value: "94%", sub: "420 Active Vehicles", icon: Zap, color: "text-orange-400" },
            { title: "Delayed Shipments", value: "2", sub: "Optimizing Routes...", icon: Activity, color: "text-rose-400" },
            { title: "Fuel Efficiency", value: "+18%", sub: "AI Optimized", icon: Cpu, color: "text-cyan-400" }
        ],
        chartTitle: "Supply Chain Latency",
        chartColor: "#f97316",
        actionBtn: "Fleet Control"
    },
    healthcare: {
        stats: [
            { title: "Patient Throughput", value: "4.2k", sub: "Monthly Average", icon: Activity, color: "text-rose-400" },
            { title: "Diagnostic Accuracy", value: "99.8%", sub: "AI-Assisted", icon: Sparkles, color: "text-indigo-400" },
            { title: "Lab Availability", value: "12", sub: "Fully Operational", icon: Database, color: "text-emerald-400" }
        ],
        chartTitle: "Patient Recovery Metrics",
        chartColor: "#f43f5e",
        actionBtn: "Patient OS"
    }
  };

  const config = themeConfigs[theme] || themeConfigs.enterprise;

  return (
    <div className="space-y-8">
      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {config.stats.map((s, i) => (
            <StatCard key={i} title={s.title} value={s.value} sub={s.sub} icon={s.icon} color={s.color} />
        ))}
      </div>

      {/* Chart Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 hexenity-glass p-8 rounded-[32px]">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-xl font-bold">{config.chartTitle}</h3>
              <p className="text-sm text-white/30">Theme: {theme.toUpperCase()} Environment</p>
            </div>
            <div className={`px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-indigo-400`}>
               Active Stream
            </div>
          </div>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id={`colorValue-${theme}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={config.chartColor} stopOpacity={0.3}/>
                    <stop offset="95%" stopColor={config.chartColor} stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#ffffff20" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#ffffff20" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ background: '#111827', border: '1px solid #ffffff10', borderRadius: '12px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="value" stroke={config.chartColor} strokeWidth={3} fillOpacity={1} fill={`url(#colorValue-${theme})`} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="hexenity-glass p-8 rounded-[32px] flex-1 flex flex-col justify-center border-indigo-500/10 hover:border-indigo-500/50 transition-all duration-700">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6">
               <Activity className="w-6 h-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Unified {theme.charAt(0).toUpperCase() + theme.slice(1)} Control</h3>
            <p className="text-sm text-white/40 mb-8 leading-relaxed font-medium">Connect your industry-specific internal operations directly to your customer-facing platforms.</p>
            <button 
                onClick={() => navigate('/hexenity/erp/dashboard')}
                className="w-full py-4 bg-white/5 border border-white/10 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-2 group"
            >
                {config.actionBtn} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────── OPERATIONS PANEL ─────────────────────────────── */
function OperationsPanel() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {['Project Tracking', 'Client Management', 'Inventory Control', 'Website Management'].map((m, i) => (
           <div key={i} className="hexenity-glass p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all group">
             <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
                 <CheckCircle2 className="w-5 h-5 text-indigo-400" />
             </div>
             <p className="text-sm font-bold tracking-tight text-white/80">{m}</p>
           </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
         <div className="hexenity-glass p-10 rounded-[40px]">
            <h3 className="text-2xl font-bold mb-6 italic premium-gradient-text">Active Operations</h3>
            <div className="space-y-6">
               {[
                 { label: "Frontend Deployment", val: "Deploying...", status: "bg-yellow-500" },
                 { label: "Database Migration", val: "Completed", status: "bg-emerald-500" },
                 { label: "Client Sync", val: "Active", status: "bg-indigo-500" }
               ].map((op, i) => (
                 <div key={i} className="flex justify-between items-center p-4 rounded-2xl bg-white/[0.02]">
                    <div className="flex items-center gap-3">
                       <div className={`w-2 h-2 rounded-full ${op.status} animate-pulse`} />
                       <span className="text-sm font-medium">{op.label}</span>
                    </div>
                    <span className="text-xs font-bold text-white/40 uppercase tracking-widest">{op.val}</span>
                 </div>
               ))}
            </div>
         </div>

         <div className="hexenity-glass p-10 rounded-[40px] flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-8 animate-glow">
               <Layers className="w-10 h-10 text-indigo-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Unified System Control</h3>
            <p className="text-white/40 max-w-sm mb-8 leading-relaxed">
               Deploy, monitor, and scale your entire digital presence from this single interface.
            </p>
            <button className="px-8 py-3 bg-white text-black text-xs font-black uppercase rounded-xl">
               Configure Modules
            </button>
         </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────── AI ENGINE ─────────────────────────────── */
function AIEngine() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const messages = [
      "Initializing AI Intelligence Layer...",
      "Analyzing system cluster A-92...",
      "Optimizing database indexing query...",
      "Identifying latency bottleneck in API v2...",
      "Reducing load time by 420ms...",
      "Predictive analytics calibrated.",
      "System baseline optimization complete.",
      "Listening for autonomous triggers...",
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < messages.length) {
        setLogs((prev) => [...prev, { text: messages[i], time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }) }]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 hexenity-glass p-8 rounded-[40px] flex flex-col h-[600px]">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <Terminal className="w-5 h-5 text-indigo-400" />
            <h3 className="text-xl font-bold">AI Compute Logs</h3>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
            <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400">Processing</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto bg-black/40 rounded-2xl p-6 font-mono text-xs md:text-sm space-y-4 border border-white/5">
          {logs.map((log, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex gap-4"
            >
              <span className="text-white/20 whitespace-nowrap">{log.time}</span>
              <span className="text-indigo-400">⚡</span>
              <span className="text-white/80">{log.text}</span>
            </motion.div>
          ))}
          <div className="animate-pulse text-indigo-500">_</div>
        </div>
      </div>

      <div className="space-y-6">
         <div className="hexenity-glass p-8 rounded-[32px] bg-gradient-to-br from-indigo-900/20 to-transparent border border-indigo-500/10">
            <div className="flex items-center gap-4 mb-6">
               <Sparkles className="w-6 h-6 text-indigo-400" />
               <h4 className="font-bold text-white">Autonomous Agent</h4>
            </div>
            <p className="text-sm text-white/50 leading-relaxed mb-8 italic">
              "System performance improved by 14.5% using predictive cache pre-loading."
            </p>
            <div className="flex justify-between items-center p-3 rounded-xl bg-white/5">
               <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Trust Index</span>
               <span className="text-sm font-black text-emerald-400">99.2%</span>
            </div>
         </div>

         <div className="hexenity-glass p-8 rounded-[32px] border border-white/5">
            <h4 className="font-bold text-white mb-6">Quick AI Optimizations</h4>
            <div className="space-y-4">
               {['Optimize Image Assets', 'Clean Microservices', 'Scale Database Pods'].map((opt, i) => (
                 <button key={i} className="w-full p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 text-xs font-bold text-left transition-colors flex justify-between items-center group">
                   {opt}
                   <ChevronRight className="w-3 h-3 text-white/20 group-hover:text-indigo-400" />
                 </button>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────── UI COMPONENTS ─────────────────────────────── */
function StatCard({ title, value, sub, icon: Icon, color }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="hexenity-glass p-8 rounded-[32px] group relative overflow-hidden"
    >
      <div className={`absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity ${color}`}>
        <Icon size={120} />
      </div>
      <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-white/20 transition-all ${color}`}>
        <Icon className="w-6 h-6" />
      </div>
      <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-2">{title}</p>
      <h3 className="text-3xl font-black text-white mb-2">{value}</h3>
      <p className="text-[10px] font-medium text-white/20 tracking-tight">{sub}</p>
    </motion.div>
  );
}

const SparklesIcon = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
    </svg>
);
