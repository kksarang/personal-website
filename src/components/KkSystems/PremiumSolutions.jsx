import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, Monitor, PaintBucket, Share2, Target, Database, Cpu, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const PremiumSolutions = () => {
    const navigate = useNavigate();

    const solutions = [
        {
            title: "Mobile App Development",
            benefit: "We build scalable, secure, and high-performance mobile applications tailored to your business goals.",
            items: [
                'Flutter Applications',
                'Native Android (Kotlin)',
                'iOS Applications',
                'Cross-Platform Apps',
                'App Store & Play Store Deployment',
                'App Maintenance & Support'
            ],
            icon: Smartphone,
            link: "/hexenity/services/mobile-app-development"
        },
        {
            title: "Website Development",
            benefit: "We create responsive, fast, and SEO-friendly websites that strengthen your online presence.",
            items: [
                'Business Websites',
                'E-Commerce Solutions',
                'Custom Web Applications',
                'SEO Optimization',
                'CMS Integration',
                'Website Maintenance'
            ],
            icon: Monitor,
            link: "/hexenity/services/website-development"
        },
        {
            title: "UI/UX & Design",
            benefit: "We design intuitive digital experiences that enhance engagement and usability.",
            items: [
                'UI/UX Strategy',
                'Wireframing & Prototyping',
                'Mobile & Web Interface Design',
                'Logo & Brand Identity',
                'Creative Posters',
                'Responsive Design Systems'
            ],
            icon: PaintBucket,
            link: "/hexenity/services/ui-ux-design"
        },
        {
            title: "Social Media Marketing",
            benefit: "We help brands grow their social presence and connect effectively with their audience.",
            items: [
                'Instagram & Facebook Marketing',
                'Content Planning & Strategy',
                'Creative Post Designs',
                'Social Media Management',
                'Audience Engagement Growth'
            ],
            icon: Share2,
            link: "/hexenity/services/social-media-marketing"
        },
        {
            title: "Digital Marketing",
            benefit: "We deliver measurable marketing results focused on ROI and sustainable growth.",
            items: [
                'SEO (Search Engine Optimization)',
                'Google Ads Campaigns',
                'Meta Ads Management',
                'Lead Generation Strategy',
                'Performance Marketing',
                'Analytics & Reporting'
            ],
            icon: Target,
            link: "/hexenity/services/digital-marketing"
        },
        {
            title: "ERP Development",
            benefit: "Custom ERP systems to automate your business operations and maximize efficiency.",
            items: [
                'Custom ERP Core',
                'Inventory & CRM Modules',
                'Human Resource (HRM)',
                'Accounting & Finance',
                'Workflow Automation',
                'Staff Training & Support'
            ],
            icon: Cpu,
            link: "/hexenity/services/erp-development"
        }
    ];

    return (
        <section id="services" className="py-32 bg-[#0B0F19]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-bold text-xs uppercase tracking-widest mb-6"
                    >
                        Our Expertise
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight"
                    >
                        Premium Digital <span className="premium-gradient-text">Services.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 font-light leading-relaxed"
                    >
                        We provide end-to-end digital solutions to build, design, and grow your business in the modern digital world.
                    </motion.p>
                </div>

                {/* 3x2 Grid for 6 services */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((solution, idx) => (
                        <ServiceCard key={idx} solution={solution} idx={idx} navigate={navigate} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ServiceCard = ({ solution, idx, navigate }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: idx * 0.1 }}
        className="hexenity-glass p-8 flex flex-col h-full hexenity-glass-hover group"
    >
        <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6">
            <solution.icon className="w-6 h-6 text-indigo-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">{solution.title}</h3>
        
        <ul className="space-y-3 mb-8 flex-grow">
            {solution.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/50 mt-1.5 flex-shrink-0" />
                    {item}
                </li>
            ))}
        </ul>

        <div className="pt-6 border-t border-white/5">
            <p className="text-gray-400 font-light mb-6 text-sm leading-relaxed">{solution.benefit}</p>
            <button
                onClick={() => navigate(solution.link)}
                className="inline-flex items-center gap-2 text-indigo-400 font-bold text-sm uppercase tracking-widest group-hover:gap-4 transition-all"
            >
                View Details <ArrowRight className="w-4 h-4" />
            </button>
        </div>
    </motion.div>
);

export const ProductLayer = () => {
    const products = [
        {
            title: "Hexenity ERP",
            desc: "Complete business management system.",
            icon: Database,
            color: "text-blue-400"
        },
        {
            title: "AI Development Engine",
            desc: "Faster development using proprietary AI tools.",
            icon: Cpu,
            color: "text-indigo-400"
        },
        {
            title: "Automation Systems",
            desc: "Workflow automation for enterprise scale.",
            icon: Activity,
            color: "text-purple-400"
        }
    ];

    return (
        <section className="py-32 bg-[#0B0F19] relative">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Our Products & <br /><span className="premium-gradient-text">Platforms.</span></h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                        We build our own core technologies to accelerate your digital transformation. This is what separates us from the rest.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {products.map((product, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="text-center group"
                        >
                            <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-8 group-hover:border-indigo-500/30 group-hover:bg-indigo-500/5 transition-all duration-500 animate-glow">
                                <product.icon className={`w-10 h-10 ${product.color}`} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{product.title}</h3>
                            <p className="text-gray-400 font-light leading-relaxed">{product.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
