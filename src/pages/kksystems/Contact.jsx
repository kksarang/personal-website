import React, { useEffect, useState } from 'react';
import { ArrowLeft, Mail, MapPin, Phone, Calendar, Clock, Send, CheckCircle2, Instagram, Github, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
    const navigate = useNavigate();
    const [selectedDay, setSelectedDay] = useState(1); // Default to Tuesday
    const [selectedTime, setSelectedTime] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder for future form submission logic
        alert("Thank you for your inquiry! We will contact you shortly.");
    };

    return (
        <div className="bg-[#0A0B14] min-h-screen pb-32 pt-32">

            {/* HERO BANNER */}
            <div
                className="relative pb-24 border-b border-white/5 overflow-hidden"
                style={{ background: "linear-gradient(135deg, #0f172a, #0A0B14)" }}
            >
                {/* Ambient Glow */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: "radial-gradient(circle at top left, rgba(124,58,237,0.15), transparent 60%)" }}
                />

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">

                    <div className="animate-fade-in-up md:text-center flex flex-col md:items-center">

                        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                            Let's build your next <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500">
                                great product.
                            </span>
                        </h1>

                        <p className="text-xl text-gray-400 font-light leading-snug max-w-2xl mx-auto">
                            Schedule a free technical consultation or send us a direct message detailing your project requirements. We respond within 24 hours.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
                <div className="grid lg:grid-cols-2 gap-16">

                    {/* LEFT COLUMN: CONTACT FORM & INFO */}
                    <div className="space-y-8 animate-fade-in-up animation-delay-100 flex flex-col h-full">

                        {/* 1. Direct Messaging Form */}
                        <div className="bg-[#131521] border border-white/5 rounded-3xl p-8 lg:p-10 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px] transition-opacity duration-500 group-hover:opacity-100 opacity-50" />

                            <h3 className="text-2xl font-bold text-white mb-8 relative z-10 flex items-center gap-3">
                                <Mail className="w-6 h-6 text-indigo-400" />
                                Project Inquiry
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-[#0A0B14] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder-gray-600"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full bg-[#0A0B14] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder-gray-600"
                                            placeholder="john@example.com"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="service" className="block text-sm font-medium text-gray-400 mb-2">What do you need?</label>
                                        <select
                                            id="service"
                                            className="w-full bg-[#0A0B14] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all appearance-none cursor-pointer"
                                            required
                                        >
                                            <option value="">Select a service...</option>
                                            <option value="mobile_app">Mobile App Development</option>
                                            <option value="website">Website Development</option>
                                            <option value="posters">Posters & Branding</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Project Details</label>
                                    <textarea
                                        id="message"
                                        rows="5"
                                        className="w-full bg-[#0A0B14] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder-gray-600 resize-none"
                                        placeholder="Tell us about the problem you are trying to solve..."
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-500 transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:scale-[1.02]"
                                >
                                    Send Inquiry <Send className="w-5 h-5" />
                                </button>
                            </form>
                        </div>

                        {/* Minimal About Block */}
                        <div className="bg-[#131521] border border-white/5 rounded-3xl p-8 shadow-lg relative overflow-hidden">
                            <h3 className="text-xl font-bold text-white mb-4">About kksystems</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                We are a specialized architecture firm dedicated to engineering high-performance mobile applications and scalable backend systems. We believe in writing clean, maintainable code rather than relying on bloated templates, delivering authentic digital products that drive true enterprise value.
                            </p>
                        </div>

                        {/* Official Branding Logo */}
                        <div className="rounded-3xl overflow-hidden border border-white/5 shadow-2xl relative group h-56 xl:h-64">
                            <img
                                src="/assets/images/gallery/10.jpg"
                                alt="kksystems Official"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B14] via-[#0A0B14]/40 to-transparent"></div>
                            <div className="absolute bottom-8 left-8 right-8 z-10">
                                <h3 className="text-3xl font-extrabold text-white tracking-tight mb-2">kksystems</h3>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT COLUMN: SCHEDULING & LOCATION */}
                    <div className="space-y-8 animate-fade-in-up animation-delay-200">

                        {/* 2. Call Scheduling UI */}
                        <div className="bg-[#131521] border border-white/5 rounded-3xl p-8 lg:p-10 shadow-2xl">
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <Calendar className="w-6 h-6 text-blue-400" />
                                Schedule a Concept Call
                            </h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Pick a time that works for your team. We'll hop on a 30-minute Google Meet to discuss architecture, timeline, and feasibility.
                            </p>

                            {/* Mock Calendar Selection Grid */}
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">Availability (Next 7 Days)</h4>
                                    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setSelectedDay(idx)}
                                                className={`flex-shrink-0 w-20 py-3 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all ${selectedDay === idx ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg scale-105' : 'bg-[#0A0B14] border-white/10 text-gray-400 hover:border-gray-500'}`}
                                            >
                                                <span className="text-xs uppercase font-bold">{day}</span>
                                                <span className="text-lg font-bold">{14 + idx}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">Select Time (EST)</h4>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                        {['09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM'].map((time, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setSelectedTime(time)}
                                                className={`py-3 rounded-xl border font-medium transition-all flex items-center justify-center gap-2 ${selectedTime === time ? 'bg-indigo-500/20 border-indigo-500 text-indigo-400' : 'bg-[#0A0B14] border-white/10 text-gray-300 hover:border-indigo-500/50 hover:text-indigo-400'}`}
                                            >
                                                <Clock className="w-4 h-4" /> {time}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    onClick={() => {
                                        if (selectedTime) {
                                            alert(`Call scheduled for ${['Mon', 'Tue', 'Wed', 'Thu', 'Fri'][selectedDay]}, ${14 + selectedDay}th at ${selectedTime} EST.`);
                                        } else {
                                            alert("Please select a time slot first.");
                                        }
                                    }}
                                    className={`w-full py-4 mt-6 rounded-xl border font-bold transition-all flex items-center justify-center gap-2 ${selectedTime ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg hover:bg-indigo-500 hover:scale-[1.02]' : 'bg-white/5 border-white/10 text-gray-400 cursor-not-allowed hidden'}`}
                                >
                                    Confirm Call <CheckCircle2 className={`w-5 h-5 ${selectedTime ? 'text-white' : 'text-gray-500'}`} />
                                </button>

                                {!selectedTime && (
                                    <button className="w-full py-4 mt-6 rounded-xl bg-white/5 border border-white/10 text-gray-500 font-bold cursor-not-allowed flex items-center justify-center gap-2">
                                        Select a time to confirm
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* 3. Location & Meta */}
                        <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20 rounded-3xl p-8 lg:p-10 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-[50px] pointer-events-none" />
                            <div className="flex flex-col gap-6 relative z-10 w-full">
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-3 mb-2">
                                        <MapPin className="w-6 h-6 text-indigo-400" />
                                        <h4 className="text-white font-bold text-lg">Office Location</h4>
                                    </div>
                                    <div className="w-full h-48 rounded-2xl overflow-hidden border border-white/10 relative">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.155700877546!2d76.33596541527339!3d10.004128092847957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c8e94a07a07%3A0x49f24b8d78ab498!2sKakkanad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1689408453303!5m2!1sen!2sin"
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(100%)' }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>
                                    <p className="text-gray-400 text-sm mt-1 ml-9">Kakkanad, Ernakulam, Kochi - 682030</p>
                                </div>
                                <div className="w-full h-[1px] bg-white/5" />
                                <div className="flex items-start gap-4">
                                    <Phone className="w-6 h-6 text-indigo-400 mt-1" />
                                    <div>
                                        <h4 className="text-white font-bold text-lg">Direct Line</h4>
                                        <a href="tel:+919995254290" className="text-gray-400 mt-1 hover:text-indigo-400 transition-colors block">+91 9995254290</a>
                                    </div>
                                </div>
                                <div className="w-full h-[1px] bg-white/5" />
                                <div className="flex items-start gap-4">
                                    <Globe className="w-6 h-6 text-blue-400 mt-1" />
                                    <div>
                                        <h4 className="text-white font-bold text-lg">Official Website</h4>
                                        <a href="https://www.sarangrajan.in/" target="_blank" rel="noreferrer" className="text-gray-400 mt-1 hover:text-blue-400 transition-colors block">sarangrajan.in</a>
                                    </div>
                                </div>
                                <div className="w-full h-[1px] bg-white/5" />
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex items-start gap-4">
                                        <Instagram className="w-6 h-6 text-pink-500 mt-1" />
                                        <div>
                                            <h4 className="text-white font-bold text-lg">Instagram</h4>
                                            <a href="https://www.instagram.com/kksystems_offical/" target="_blank" rel="noreferrer" className="text-gray-400 mt-1 hover:text-pink-400 transition-colors block">@kksystems_offical</a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Github className="w-6 h-6 text-gray-300 mt-1" />
                                        <div>
                                            <h4 className="text-white font-bold text-lg">GitHub</h4>
                                            <a href="https://github.com/kksarang" target="_blank" rel="noreferrer" className="text-gray-400 mt-1 hover:text-white transition-colors block">/kksarang</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}
