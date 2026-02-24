import React from 'react';
import { Smartphone, Monitor, PaintBucket } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, technologies, colors }) => (
    <div className={`p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm group hover:bg-white/[0.04] transition-all duration-300 relative overflow-hidden block`}>
        {/* Glow effect on hover */}
        <div className={`absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl bg-gradient-to-br ${colors.borderGradient}`} />

        <div className="relative z-10">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300 ${colors.badgeBg}`}>
                <Icon className={`w-7 h-7 ${colors.iconColor}`} />
            </div>

            {/* Title with Webkit background clip trick: white by default, transparent on hover to reveal underlying background gradient */}
            <h3 className={`text-2xl font-bold text-white mb-4 transition-all duration-300 group-hover:text-transparent bg-clip-text bg-gradient-to-r ${colors.textGradient}`}>
                {title}
            </h3>

            <ul className="space-y-3">
                {technologies.map((tech, idx) => (
                    <li key={idx} className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors">
                        <span className={`w-1.5 h-1.5 rounded-full mr-3 ${colors.dotColor}`} />
                        {tech}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const Services = () => {
    return (
        <section id="services" className="py-[100px] bg-[#0A0B14] relative">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-semibold mb-6">
                        Our Expertise
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Premium Digital Services
                    </h2>
                    <p className="text-xl text-gray-400">
                        We provide end-to-end development services to bring your innovative ideas to life.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ServiceCard
                        icon={Smartphone}
                        title="Mobile App Development"
                        technologies={['Flutter Apps', 'Native Android (Kotlin)', 'iOS Applications', 'React Native']}
                        colors={{
                            borderGradient: "from-purple-500/40 to-transparent",
                            badgeBg: "bg-purple-500/10",
                            iconColor: "text-purple-400",
                            textGradient: "from-fuchsia-400 to-purple-400",
                            dotColor: "bg-purple-400"
                        }}
                    />

                    <ServiceCard
                        icon={Monitor}
                        title="Website Development"
                        technologies={['Business Websites', 'E-Commerce', 'Custom Web Applications', 'SEO Optimization', 'Content Management']}
                        colors={{
                            borderGradient: "from-blue-500/40 to-transparent",
                            badgeBg: "bg-blue-500/10",
                            iconColor: "text-blue-400",
                            textGradient: "from-cyan-400 to-blue-500",
                            dotColor: "bg-blue-400"
                        }}
                    />

                    <ServiceCard
                        icon={PaintBucket}
                        title="UI/UX & Design"
                        technologies={['Professional Designers', 'Modern Interfaces', 'Brand Identity', 'Responsive Design']}
                        colors={{
                            borderGradient: "from-indigo-500/40 to-transparent",
                            badgeBg: "bg-indigo-500/10",
                            iconColor: "text-indigo-400",
                            textGradient: "from-indigo-400 to-blue-400",
                            dotColor: "bg-indigo-400"
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Services;
