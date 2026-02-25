import React from 'react';
import { Smartphone, Monitor, PaintBucket, Share2, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon: Icon, title, technologies, description, colors, link }) => (
    <Link to={link} className={`p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm group hover:bg-white/[0.04] transition-all duration-300 relative overflow-hidden flex flex-col h-full block`}>
        {/* Glow effect on hover */}
        <div className={`absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl bg-gradient-to-br ${colors.borderGradient}`} />

        <div className="relative z-10 flex flex-col flex-grow">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300 ${colors.badgeBg}`}>
                <Icon className={`w-7 h-7 ${colors.iconColor}`} />
            </div>

            {/* Title with Webkit background clip trick: white by default, transparent on hover to reveal underlying background gradient */}
            <h3 className={`text-2xl font-bold text-white mb-4 transition-all duration-300 group-hover:text-transparent bg-clip-text bg-gradient-to-r ${colors.textGradient}`}>
                {title}
            </h3>

            <ul className="space-y-3 mb-6 flex-grow">
                {technologies.map((tech, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        <span className={`w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0 ${colors.dotColor}`} />
                        {tech}
                    </li>
                ))}
            </ul>

            {description && (
                <p className="text-gray-400 text-sm leading-relaxed mt-auto pt-4 border-t border-white/5 group-hover:text-gray-300 transition-colors">
                    {description}
                </p>
            )}
        </div>
    </Link>
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
                    <p className="text-xl text-gray-400 mb-8">
                        We provide end-to-end digital solutions to build, design, and grow your business in the modern digital world.
                    </p>
                </div>

                {/* ROW 1 (3 Cards) */}
                <div className="grid md:grid-cols-3 gap-8">
                    <ServiceCard
                        icon={Smartphone}
                        title="Mobile App Development"
                        link="/kksystems/services/mobile-app-development"
                        technologies={[
                            'Flutter Applications',
                            'Native Android (Kotlin)',
                            'iOS Applications',
                            'Cross-Platform Apps',
                            'App Store & Play Store Deployment',
                            'App Maintenance & Support'
                        ]}
                        description="We build scalable, secure, and high-performance mobile applications tailored to your business goals."
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
                        link="/kksystems/services/website-development"
                        technologies={[
                            'Business Websites',
                            'E-Commerce Solutions',
                            'Custom Web Applications',
                            'SEO Optimization',
                            'CMS Integration',
                            'Website Maintenance'
                        ]}
                        description="We create responsive, fast, and SEO-friendly websites that strengthen your online presence."
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
                        link="/kksystems/services/ui-ux-design"
                        technologies={[
                            'UI/UX Strategy',
                            'Wireframing & Prototyping',
                            'Mobile & Web Interface Design',
                            'Logo & Brand Identity',
                            'Creative Posters',
                            'Responsive Design Systems'
                        ]}
                        description="We design intuitive digital experiences that enhance engagement and usability."
                        colors={{
                            borderGradient: "from-indigo-500/40 to-transparent",
                            badgeBg: "bg-indigo-500/10",
                            iconColor: "text-indigo-400",
                            textGradient: "from-indigo-400 to-blue-400",
                            dotColor: "bg-indigo-400"
                        }}
                    />
                </div>

                {/* ROW 2 (2 Cards - Centered) */}
                <div className="grid md:grid-cols-2 gap-8 md:w-2/3 mx-auto mt-8">
                    <ServiceCard
                        icon={Share2}
                        title="Social Media Marketing"
                        link="/kksystems/services/social-media-marketing"
                        technologies={[
                            'Instagram & Facebook Marketing',
                            'Content Planning & Strategy',
                            'Creative Post Designs',
                            'Social Media Management',
                            'Audience Engagement Growth'
                        ]}
                        description="We help brands grow their social presence and connect effectively with their audience."
                        colors={{
                            borderGradient: "from-pink-500/40 to-transparent",
                            badgeBg: "bg-pink-500/10",
                            iconColor: "text-pink-400",
                            textGradient: "from-pink-400 to-rose-400",
                            dotColor: "bg-pink-400"
                        }}
                    />

                    <ServiceCard
                        icon={Target}
                        title="Digital Marketing"
                        link="/kksystems/services/digital-marketing"
                        technologies={[
                            'SEO (Search Engine Optimization)',
                            'Google Ads Campaigns',
                            'Meta Ads Management',
                            'Lead Generation Strategy',
                            'Performance Marketing',
                            'Analytics & Reporting'
                        ]}
                        description="We deliver measurable marketing results focused on ROI and sustainable growth."
                        colors={{
                            borderGradient: "from-emerald-500/40 to-transparent",
                            badgeBg: "bg-emerald-500/10",
                            iconColor: "text-emerald-400",
                            textGradient: "from-emerald-400 to-teal-400",
                            dotColor: "bg-emerald-400"
                        }}
                    />
                </div>

            </div>
        </section>
    );
};

export default Services;
