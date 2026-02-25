import React from 'react';
import { Mail, Phone, MapPin, Send, Instagram } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">Get in touch</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Contact Me
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto">
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 md:p-12 text-white shadow-xl">
                        <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                        <p className="text-indigo-100 mb-8 leading-relaxed">
                            I am currently open to new opportunities and collaborations. Feel free to reach out via email or connect on social media.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <Mail className="w-6 h-6 text-indigo-200 mt-1" />
                                <div>
                                    <p className="font-medium text-lg">Email</p>
                                    <div className="flex flex-col gap-2 mt-1">
                                        <a href="mailto:kksarangrajan@gmail.com" className="text-indigo-100 hover:text-white transition-colors">
                                            kksarangrajan@gmail.com
                                        </a>
                                        <a href="mailto:kksystemspvtltd@gmail.com" className="text-indigo-100 hover:text-white transition-colors">
                                            kksystemspvtltd@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <MapPin className="w-6 h-6 text-indigo-200 mt-1" />
                                <div>
                                    <p className="font-medium text-lg">Location</p>
                                    <p className="text-indigo-100">India</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <Phone className="w-6 h-6 text-indigo-200 mt-1" />
                                <div>
                                    <p className="font-medium text-lg">Socials</p>
                                    <div className="flex space-x-4 mt-2">
                                        <a href="https://github.com/kksarang" target="_blank" rel="noopener noreferrer" className="text-indigo-200 hover:text-white transition-colors">GitHub</a>
                                        <a href="https://www.linkedin.com/in/sarang-rajan/" target="_blank" rel="noopener noreferrer" className="text-indigo-200 hover:text-white transition-colors">LinkedIn</a>
                                        <a href="https://www.instagram.com/sarang_rajan/" target="_blank" rel="noopener noreferrer" className="text-indigo-200 hover:text-white transition-colors">Instagram</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 dark:border-slate-700">
                        <form className="space-y-6" name="contact" method="post" data-netlify="true">
                            <input type="hidden" name="form-name" value="contact" />

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                    placeholder="you@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                                    placeholder="How can I help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full inline-flex items-center justify-center px-6 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/25"
                            >
                                Send Message
                                <Send className="ml-2 w-5 h-5" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
