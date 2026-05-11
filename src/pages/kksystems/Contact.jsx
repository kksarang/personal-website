import React, { useEffect, useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2, Instagram, Github, Globe, Zap, Clock, Rocket, Shield, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
    const [selectedType, setSelectedType] = useState("");
    const [formStatus, setFormStatus] = useState("idle");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus("sending");
        setTimeout(() => {
            setFormStatus("success");
            setTimeout(() => setFormStatus("idle"), 5000);
        }, 1500);
    };

    const quickOptions = [
        { label: "Build App", type: "mobile_app", icon: Rocket },
        { label: "Fix Project", type: "fix_project", icon: Shield },
        { label: "ERP Solution", type: "erp_system", icon: Sparkles }
    ];

    return (
        <div className="min-h-screen overflow-hidden bg-[#0B0F19] pt-32 pb-20 font-sans">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full grid-pattern opacity-10" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1 text-xs font-black uppercase tracking-widest text-indigo-400 mb-6"
                    >
                        <Zap className="w-3 h-3" /> Get a response within 24 hours
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight"
                    >
                        Let's Build Something <br />
                        <span className="premium-gradient-text">Powerful Together.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 font-light max-w-2xl mx-auto"
                    >
                        Share your goals, timelines, and constraints. We will return with a practical execution plan you can act on immediately.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                    <div className="lg:col-span-5 space-y-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3 className="text-2xl font-black text-white mb-8">Direct Contact</h3>
                            <div className="space-y-6">
                                <ContactItem icon={Mail} label="Email Us" value="info.hexenity@gmail.com" link="mailto:info.hexenity@gmail.com" color="text-indigo-400" />
                                <ContactItem icon={Phone} label="Call Direct" value="+91 9995254290" link="tel:+919995254290" color="text-blue-400" />
                                <ContactItem icon={MapPin} label="Global HQ" value="Kakkanad, Kochi, India" color="text-purple-400" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="hexenity-glass border-indigo-500/10 p-8"
                        >
                            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <Clock className="w-5 h-5 text-indigo-400" /> Quick Response Guarantee
                            </h4>
                            <p className="text-gray-400 font-light text-sm leading-relaxed">
                                Every inquiry is reviewed by a product and engineering lead. You can expect a detailed response or meeting invite within <span className="text-white font-medium">one business day</span>.
                            </p>
                            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
                                <p className="text-xs uppercase tracking-[0.16em] text-gray-500">Typical first response includes</p>
                                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                                    <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" /> Scope assumptions</li>
                                    <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" /> Suggested engagement model</li>
                                    <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" /> Initial timeline estimate</li>
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex gap-4"
                        >
                            <SocialIcon icon={Instagram} link="https://instagram.com/hexenity" />
                            <SocialIcon icon={Github} link="https://github.com/kksarang" />
                            <SocialIcon icon={Globe} link="https://sarangrajan.in" />
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-7"
                    >
                        <div className="relative border-white/5 bg-[#131521]/50 hexenity-glass p-8 md:p-12 shadow-2xl">
                            <h3 className="text-2xl font-black text-white mb-10">Project Inquiry</h3>

                            <div className="grid grid-cols-3 gap-4 mb-10">
                                {quickOptions.map((option) => (
                                    <QuickOptionBtn
                                        key={option.type}
                                        label={option.label}
                                        onClick={() => setSelectedType(option.type)}
                                        active={selectedType === option.type}
                                        icon={option.icon}
                                    />
                                ))}
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <FormInput label="Full Name" placeholder="John Doe" required />
                                    <FormInput label="Email Address" type="email" placeholder="john@example.com" required />
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Project Type</label>
                                        <select
                                            value={selectedType}
                                            onChange={(e) => setSelectedType(e.target.value)}
                                            className="w-full bg-[#0A0B14] border border-white/10 rounded-xl px-4 py-4 text-white focus:border-indigo-500 transition-all outline-none appearance-none cursor-pointer"
                                            required
                                        >
                                            <option value="">Select Type</option>
                                            <option value="mobile_app">Mobile Application</option>
                                            <option value="web_platform">Web Platform / SaaS</option>
                                            <option value="erp_system">ERP / Enterprise System</option>
                                            <option value="ai_solution">AI Integration</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Budget Range</label>
                                        <select
                                            className="w-full bg-[#0A0B14] border border-white/10 rounded-xl px-4 py-4 text-white focus:border-indigo-500 transition-all outline-none appearance-none cursor-pointer"
                                            required
                                        >
                                            <option value="">Select Budget</option>
                                            <option value="small">&lt; $5,000</option>
                                            <option value="medium">$5,000 - $20,000</option>
                                            <option value="large">$20,000 - $50,000</option>
                                            <option value="enterprise">$50,000+</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Project Details</label>
                                    <textarea
                                        rows="5"
                                        className="w-full bg-[#0A0B14] border border-white/10 rounded-xl px-4 py-4 text-white focus:border-indigo-500 transition-all outline-none resize-none"
                                        placeholder="Briefly describe your goals and requirements..."
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={formStatus !== "idle"}
                                    className={`w-full py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 ${
                                        formStatus === "success"
                                        ? "bg-green-500 text-white"
                                        : "bg-indigo-600 text-white hover:bg-indigo-500 hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-indigo-600/20"
                                    }`}
                                >
                                    {formStatus === "idle" && <>Send Inquiry <Send className="w-5 h-5" /></>}
                                    {formStatus === "sending" && <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
                                    {formStatus === "success" && <>Message Sent! <CheckCircle2 className="w-5 h-5" /></>}
                                </button>

                                <p className="text-center text-xs text-gray-500">
                                    Prefer direct communication? Email <a className="text-indigo-300 hover:text-indigo-200" href="mailto:info.hexenity@gmail.com">info.hexenity@gmail.com</a>.
                                </p>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

// Sub-components for cleaner code
const ContactItem = ({ icon: Icon, label, value, link, color }) => (
    <div className="flex items-start gap-4 group">
        <div className={`w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center flex-shrink-0 group-hover:border-indigo-500/30 transition-all`}>
            <Icon className={`w-6 h-6 ${color}`} />
        </div>
        <div>
            <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">{label}</div>
            {link ? (
                <a href={link} className="text-lg font-bold text-white hover:text-indigo-400 transition-colors">{value}</a>
            ) : (
                <span className="text-lg font-bold text-white">{value}</span>
            )}
        </div>
    </div>
);

const SocialIcon = ({ icon: Icon, link }) => (
    <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all text-gray-400"
    >
        <Icon className="w-5 h-5" />
    </a>
);

const FormInput = ({ label, ...props }) => (
    <div className="space-y-2">
        <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">{label}</label>
        <input
            {...props}
            className="w-full bg-[#0A0B14] border border-white/10 rounded-xl px-4 py-4 text-white focus:border-indigo-500 transition-all outline-none"
        />
    </div>
);

const QuickOptionBtn = ({ label, active, onClick, icon: Icon }) => (
    <button
        type="button"
        onClick={onClick}
        className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl border transition-all ${
            active
            ? "bg-indigo-600 border-indigo-500 text-white shadow-lg"
            : "bg-[#0A0B14] border-white/10 text-gray-500 hover:border-white/30 hover:text-gray-300"
        }`}
    >
        <Icon className="w-5 h-5" />
        <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
    </button>
);
