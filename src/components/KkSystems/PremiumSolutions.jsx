import React from 'react';
import { ArrowRight, Smartphone, Monitor, PaintBucket, Share2, Target, Database, Cpu, Activity, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const PremiumSolutions = () => {
    const navigate = useNavigate();

    const solutions = [
        {
            title: "Mobile App Development",
            benefit: "Scalable and secure mobile applications tailored to your product goals.",
            items: ["Flutter Applications", "Native Android (Kotlin)", "iOS Applications", "Cross-Platform Apps"],
            icon: Smartphone,
            link: "/hexenity/services/mobile-app-development",
            tag: "Most Requested"
        },
        {
            title: "Website Development",
            benefit: "Fast and conversion-oriented web platforms built for growth.",
            items: ["Business Websites", "E-Commerce Solutions", "Custom Web Applications", "SEO Optimization"],
            icon: Monitor,
            link: "/hexenity/services/website-development",
            tag: "Business Growth"
        },
        {
            title: "UI/UX & Design",
            benefit: "Practical user experiences that improve engagement and usability.",
            items: ["UI/UX Strategy", "Wireframes", "Design Systems", "Brand Identity"],
            icon: PaintBucket,
            link: "/hexenity/services/ui-ux-design",
            tag: "User Experience"
        },
        {
            title: "Social Media Marketing",
            benefit: "Consistent social growth with strategy-led content execution.",
            items: ["Campaign Planning", "Creative Design", "Audience Growth", "Management"],
            icon: Share2,
            link: "/hexenity/services/social-media-marketing",
            tag: "Brand Visibility"
        },
        {
            title: "Digital Marketing",
            benefit: "Performance marketing focused on measurable business outcomes.",
            items: ["SEO", "Google Ads", "Meta Ads", "Analytics Reporting"],
            icon: Target,
            link: "/hexenity/services/digital-marketing",
            tag: "Lead Generation"
        },
        {
            title: "ERP Development",
            benefit: "Custom ERP systems that centralize operations and workflows.",
            items: ["ERP Core", "Inventory + CRM", "HRM", "Workflow Automation"],
            icon: Cpu,
            link: "/hexenity/services/erp-development",
            tag: "Enterprise Scale"
        }
    ];

    return (
        <section id="services" className="bg-[#0B0F19] py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <div className="mb-5 inline-block rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-indigo-400">
                        Services
                    </div>
                    <h2 className="mb-5 text-4xl font-black leading-tight text-white md:text-5xl">End-to-end technology services</h2>
                    <p className="text-lg leading-relaxed text-gray-400">
                        From product planning to release and support, we help you ship better software with consistent execution.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {solutions.map((solution) => (
                        <div
                            key={solution.title}
                            className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-8 transition hover:border-indigo-300/40"
                        >
                            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-300/70 via-indigo-300/70 to-violet-300/70" />
                            <div className="mb-5 flex items-center justify-between">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-indigo-500/20 bg-indigo-500/10">
                                    <solution.icon className="h-6 w-6 text-indigo-400" />
                                </div>
                                <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-widest text-slate-300">
                                    <Star className="h-3 w-3 text-indigo-300" />
                                    {solution.tag}
                                </span>
                            </div>
                            <h3 className="mb-4 text-2xl font-bold text-white">{solution.title}</h3>

                            <ul className="mb-8 flex-grow space-y-3">
                                {solution.items.map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                                        <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400/60" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="border-t border-white/5 pt-6">
                                <p className="mb-6 text-sm leading-relaxed text-gray-300">{solution.benefit}</p>
                                <button
                                    onClick={() => navigate(solution.link)}
                                    className="inline-flex items-center gap-2 rounded-lg border border-indigo-300/25 bg-indigo-400/10 px-3 py-2 text-xs font-bold uppercase tracking-widest text-indigo-100 transition hover:bg-indigo-400/20"
                                >
                                    View details <ArrowRight className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const ProductLayer = () => {
    const products = [
        { title: "Hexenity ERP", desc: "A complete business management platform.", icon: Database, color: "text-blue-400" },
        { title: "AI Development Engine", desc: "Faster development workflows using proprietary AI tools.", icon: Cpu, color: "text-indigo-400" },
        { title: "Automation Systems", desc: "Workflow automation designed for operational scale.", icon: Activity, color: "text-purple-400" }
    ];

    return (
        <section className="relative bg-[#0B0F19] py-28">
            <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-5 text-4xl font-black text-white md:text-5xl">Our products and platforms</h2>
                    <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-400">
                        We build our own internal technology layers to improve delivery speed and reliability for every project.
                    </p>
                </div>

                <div className="grid gap-10 md:grid-cols-3">
                    {products.map((product) => (
                        <div key={product.title} className="text-center">
                            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/5">
                                <product.icon className={`h-10 w-10 ${product.color}`} />
                            </div>
                            <h3 className="mb-3 text-2xl font-bold text-white">{product.title}</h3>
                            <p className="leading-relaxed text-gray-400">{product.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
