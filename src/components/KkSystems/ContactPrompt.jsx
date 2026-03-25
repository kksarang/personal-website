import React from 'react';
import { Phone, Instagram, MessageCircle, Send, ArrowRight } from 'lucide-react';

const ContactPrompt = () => {
    return (
        <section id="contact" className="py-[100px] bg-[#0F111A] relative overflow-hidden">
            {/* Background Map / Grid pattern simulation */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F111A] via-transparent to-[#0A0B14] z-0" />

            <div className="absolute right-0 top-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] -translate-y-1/2 z-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left Column: Contact Info */}
                    <div>
                        <div className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-semibold mb-6">
                            Let's Talk
                        </div>
                        <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
                            Ready to build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">extraordinary?</span>
                        </h2>
                        <p className="text-lg text-gray-400 mb-12 max-w-lg">
                            Whether you need a cutting-edge mobile app, a scalable web platform, or an entirely new brand identity, our team is ready to bring your vision to life.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                                <div className="w-14 h-14 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30 group-hover:scale-110 transition-transform">
                                    <Phone className="w-6 h-6 text-purple-400" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm mb-1 uppercase tracking-wider">Call Us Directly</p>
                                    <a href="tel:+919995254290" className="text-2xl font-bold text-white hover:text-purple-400 transition-colors">
                                        +91 9995254290
                                    </a>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <a
                                    href="https://wa.me/919995254290"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-semibold hover:bg-[#25D366]/20 transition-all duration-300"
                                >
                                    <MessageCircle className="w-5 h-5 fill-current" />
                                    WhatsApp
                                </a>
                                <a
                                    href="https://www.instagram.com/hexenity/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-[#833AB4]/10 via-[#FD1D1D]/10 to-[#F56040]/10 border border-[#E1306C]/30 text-[#E1306C] font-semibold hover:from-[#833AB4]/20 hover:via-[#FD1D1D]/20 hover:to-[#F56040]/20 transition-all duration-300"
                                >
                                    <Instagram className="w-5 h-5" />
                                    Instagram
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-3xl blur-xl opacity-20" />
                        <div className="relative p-8 md:p-10 rounded-3xl bg-[#131520] border border-white/10 shadow-2xl">
                            <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
                            <p className="text-gray-400 mb-8">Fill out the form below and we'll get back to you shortly.</p>

                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">First Name</label>
                                        <input
                                            type="text"
                                            placeholder="John"
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Last Name</label>
                                        <input
                                            type="text"
                                            placeholder="Doe"
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Project Details</label>
                                    <textarea
                                        rows={4}
                                        placeholder="Tell us about your project goals..."
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all resize-none"
                                    ></textarea>
                                </div>
                                <button className="w-full group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-lg hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all">
                                    Send Message
                                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactPrompt;
