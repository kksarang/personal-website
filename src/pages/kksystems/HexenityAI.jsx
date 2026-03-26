import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Send, 
    Bot, 
    User, 
    Sparkles, 
    Cpu, 
    Zap, 
    BarChart3, 
    History, 
    Settings, 
    ChevronRight,
    Search,
    BrainCircuit,
    Terminal,
    ArrowLeft
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HexenityAI = () => {
    const navigate = useNavigate();
    const [messages, setMessages] = useState([
        { role: 'ai', text: 'Welcome to the Hexenity Intelligence Layer. I am calibrated to assist with development, system optimization, and business logic. How can I facilitate your project today?', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [activeMode, setActiveMode] = useState('Assistant');
    const scrollRef = useRef(null);

    const modes = [
        { name: 'Assistant', icon: Bot, desc: 'General AI Support' },
        { name: 'Dev Helper', icon: Terminal, desc: 'Code & Architecture' },
        { name: 'Logic Engine', icon: BrainCircuit, desc: 'ERP & Workflow Logic' },
        { name: 'Analytics', icon: BarChart3, desc: 'Data Insights' }
    ];

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSendMessage = () => {
        if (!input.trim()) return;

        const userMsg = { 
            role: 'user', 
            text: input, 
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
        };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        // Simulated AI response
        setTimeout(() => {
            const responses = {
                'Assistant': "I've analyzed your request. Based on current Hexenity engineering standards, I recommend a modular approach for maximum scalability. Would you like me to draft a technical roadmap?",
                'Dev Helper': "Accessing code repository... I have identified potential optimization points in the primary logic hooks. I can generate a refactored TypeScript snippet for you now.",
                'Logic Engine': "Cross-referencing ERP modules... The proposed workflow synchronization can be achieved by injecting an intermediate event-bus layer. This will reduce latency by approximately 40%.",
                'Analytics': "Processing data telemetry... Project performance metrics indicate a high satisfaction index. I suggest scaling the server instances to handle the projected traffic growth."
            };

            const aiMsg = { 
                role: 'ai', 
                text: responses[activeMode] || responses['Assistant'], 
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
            };
            setMessages(prev => [...prev, aiMsg]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div className="h-screen flex bg-[#030303] text-white overflow-hidden font-inter selection:bg-indigo-500/30">
            {/* 🌌 DYNAMIC BACKGROUND BLOBS */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute w-[800px] h-[800px] bg-indigo-600/10 blur-[160px] rounded-full -top-40 -left-40 animate-pulse" />
                <div className="absolute w-[600px] h-[600px] bg-purple-600/10 blur-[140px] rounded-full bottom-0 right-0" />
                <div className="absolute w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
            </div>

            {/* 🛠️ SIDEBAR */}
            <aside className="w-72 bg-[#0B0F19]/40 backdrop-blur-3xl border-r border-white/5 flex flex-col z-10 hidden lg:flex">
                <div className="p-8">
                    <button 
                        onClick={() => navigate('/hexenity/core-hexenity')}
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-10 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm font-medium tracking-tight">Core Hexenity</span>
                    </button>

                    <div className="flex items-center gap-3 mb-10">
                        <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center shadow-[0_0_20px_rgba(79,70,229,0.5)]">
                            <Sparkles className="w-6 h-6 text-white" />
                        </div>
                        <h1 className="text-xl font-black tracking-tighter uppercase italic">hexenity.ai</h1>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-4">AI Modalities</p>
                            <div className="space-y-1">
                                {modes.map(mode => (
                                    <button
                                        key={mode.name}
                                        onClick={() => setActiveMode(mode.name)}
                                        className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${activeMode === mode.name ? 'bg-white/10 border border-white/10 text-white shadow-xl' : 'text-white/40 hover:bg-white/5 hover:text-white border border-transparent'}`}
                                    >
                                        <mode.icon className={`w-4 h-4 ${activeMode === mode.name ? 'text-indigo-400' : ''}`} />
                                        <div className="text-left">
                                            <p className="text-sm font-bold">{mode.name}</p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-4">Historical Segments</p>
                            <div className="space-y-4">
                                <button 
                                    onClick={() => setMessages(prev => [...prev, { role: 'ai', text: 'Loading ERP Architecture logs...', time: 'Now' }])}
                                    className="w-full flex items-center gap-3 text-white/40 hover:text-white cursor-pointer px-3 transition-colors group/hist"
                                >
                                    <History className="w-4 h-4" />
                                    <span className="text-sm font-medium truncate">ERP Architecture...</span>
                                </button>
                                <button 
                                    onClick={() => setMessages(prev => [...prev, { role: 'ai', text: 'Recalibrating React Hooks analysis...', time: 'Now' }])}
                                    className="w-full flex items-center gap-3 text-white/40 hover:text-white cursor-pointer px-3 transition-colors group/hist"
                                >
                                    <History className="w-4 h-4" />
                                    <span className="text-sm font-medium truncate">Fixing React Hooks...</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-auto p-8 pt-0">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-white/10">
                        <p className="text-xs font-bold text-white mb-2">Early Access Pro</p>
                        <p className="text-[10px] text-white/50 leading-relaxed mb-4">Unlock advanced autonomous agents and infinite context windows.</p>
                        <button className="w-full py-2 bg-white text-black text-[10px] font-black uppercase rounded-lg hover:bg-gray-200 transition-colors">Upgrade Plan</button>
                    </div>
                </div>
            </aside>

            {/* 🗨️ MAIN CHAT INTERFACE */}
            <main className="flex-1 flex flex-col relative z-10">
                {/* HEAD BAR */}
                <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 backdrop-blur-xl bg-black/20">
                    <div className="flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <h2 className="text-sm font-bold tracking-tight text-white/80">System Core <span className="text-white/30 mx-2">|</span> <span className="text-indigo-400 uppercase tracking-widest text-[10px]">{activeMode} Mode</span></h2>
                    </div>
                    
                    <div className="flex items-center gap-4">
                        <div className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                            <Settings className="w-4 h-4 text-white/60" />
                        </div>
                        <div className="hidden sm:flex items-center gap-3 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                            <Zap className="w-3 h-3 text-indigo-400" />
                            <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest leading-none">High Velocity Mode</span>
                        </div>
                    </div>
                </header>

                {/* MESSAGES AREA */}
                <div 
                    ref={scrollRef}
                    className="flex-1 overflow-y-auto p-6 md:p-12 space-y-8 scroll-smooth"
                >
                    <AnimatePresence>
                        {messages.map((msg, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                className={`flex gap-4 md:gap-6 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                            >
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${msg.role === 'ai' ? 'bg-indigo-600 shadow-[0_0_15px_rgba(79,70,229,0.3)]' : 'bg-white/10 border border-white/10'}`}>
                                    {msg.role === 'ai' ? <Bot className="w-5 h-5 text-white" /> : <User className="w-5 h-5 text-white" />}
                                </div>
                                <div className={`max-w-2xl space-y-2 ${msg.role === 'user' ? 'text-right' : ''}`}>
                                    <div className={`p-5 rounded-2xl leading-relaxed text-sm md:text-base ${msg.role === 'user' ? 'bg-indigo-600 text-white' : 'bg-white/[0.03] border border-white/10 text-white/80'}`}>
                                        {msg.text}
                                    </div>
                                    <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest">{msg.time}</p>
                                </div>
                            </motion.div>
                        ))}

                        {isTyping && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex gap-4 md:gap-6"
                            >
                                <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center animate-pulse">
                                    <Bot className="w-5 h-5 text-white" />
                                </div>
                                <div className="flex items-center gap-1.5 p-5 bg-white/[0.03] border border-white/10 rounded-2xl">
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce [animation-delay:-0.15s]" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce [animation-delay:-0.3s]" />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* INPUT AREA */}
                <div className="p-6 md:p-10 bg-gradient-to-t from-black via-black/80 to-transparent">
                    <div className="max-w-4xl mx-auto relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
                        <div className="relative bg-[#0B0F19] rounded-2xl border border-white/10 flex items-center p-2 shadow-2xl">
                            <input 
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                placeholder={`Ask Hexenity AI about ${activeMode === 'Assistant' ? 'your project' : activeMode.toLowerCase()}...`}
                                className="flex-1 bg-transparent border-none outline-none px-4 py-3 text-sm placeholder:text-white/20"
                            />
                            <button 
                                onClick={handleSendMessage}
                                className="w-11 h-11 bg-white text-black rounded-xl flex items-center justify-center hover:bg-gray-200 transition-transform active:scale-95 group/send"
                            >
                                <Send className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                            </button>
                        </div>
                        <div className="mt-4 flex justify-center items-center gap-6">
                            <p className="text-[10px] text-white/20 font-bold uppercase tracking-widest">Available Commands: <span className="text-indigo-400/50">/build  /fix  /analyze</span></p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HexenityAI;
