import React from 'react';
import { ArrowRight, Smartphone, Monitor, PaintBucket, Share2, Target, Database, Cpu, Activity, Star, BrainCircuit, Search, LayoutDashboard, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SpotlightCard from '../ui/SpotlightCard';

export const PremiumSolutions = () => {
    const navigate = useNavigate();

    const featuredSolutions = [
        {
            title: "Mobile App Development",
            benefit: "Scalable app ecosystems for consumer, enterprise, and startup use cases.",
            items: ["iOS + Android", "Cross-platform", "Store deployment", "Post-launch optimization"],
            icon: Smartphone,
            link: "/enitexa.ai/services/mobile-app-development",
            tag: "Application Engineering"
        },
        {
            title: "Web Platform Development",
            benefit: "Conversion-oriented websites and SaaS-ready web platforms.",
            items: ["Corporate websites", "Web applications", "E-commerce systems", "Performance optimization"],
            icon: Monitor,
            link: "/enitexa.ai/services/website-development",
            tag: "Digital Presence"
        },
        {
            title: "Digital Marketing",
            benefit: "Data-led growth campaigns engineered for leads, sales, and retention.",
            items: ["Paid ads", "Lead funnels", "Performance analytics", "Campaign scaling"],
            icon: Target,
            link: "/enitexa.ai/services/digital-marketing",
            tag: "Revenue Growth"
        },
    ];

    const extendedSolutions = [
        {
            title: "UI/UX & Design",
            benefit: "Premium interface systems focused on usability, trust, and conversion.",
            items: ["UX strategy", "Interface design", "Design systems", "Conversion journeys"],
            icon: PaintBucket,
            link: "/enitexa.ai/services/ui-ux-design",
            tag: "Experience Layer"
        },
        {
            title: "SEO Systems",
            benefit: "Technical and content SEO strategy to build compounding visibility.",
            items: ["Technical SEO", "Keyword strategy", "On-page structure", "Organic growth roadmap"],
            icon: Search,
            link: "/enitexa.ai/services",
            tag: "Search Growth"
        },
        {
            title: "Branding Systems",
            benefit: "Modern brand language and visual identity aligned to digital scale.",
            items: ["Brand identity", "Creative direction", "Messaging framework", "Digital assets"],
            icon: PaintBucket,
            link: "/enitexa.ai/services",
            tag: "Brand Authority"
        },
        {
            title: "AI Integrations",
            benefit: "AI-driven workflows and copilots that improve decision speed and execution.",
            items: ["LLM integrations", "Process automation", "AI assistants", "Operational intelligence"],
            icon: BrainCircuit,
            link: "/enitexa.ai/services",
            tag: "AI Innovation"
        },
        {
            title: "Automation Systems",
            benefit: "Automation pipelines to reduce manual work and improve business velocity.",
            items: ["Workflow automation", "Data sync systems", "Ops triggers", "Approval chains"],
            icon: Activity,
            link: "/enitexa.ai/services",
            tag: "Operational Scale"
        },
        {
            title: "Business Dashboards",
            benefit: "Executive dashboards for real-time visibility into operations and growth.",
            items: ["KPI panels", "Sales analytics", "Ops tracking", "Reporting controls"],
            icon: LayoutDashboard,
            link: "/enitexa.ai/services",
            tag: "Decision Intelligence"
        },
        {
            title: "Enterprise Platforms",
            benefit: "Secure management platforms for cross-team workflow and governance.",
            items: ["ERP foundations", "Role access control", "Department modules", "Governance layer"],
            icon: Shield,
            link: "/enitexa.ai/services/erp-development",
            tag: "Enterprise Systems"
        },
        {
            title: "Social Media Marketing",
            benefit: "Consistent social growth with strategy-led content execution.",
            items: ["Campaign planning", "Creative assets", "Audience growth", "Community operations"],
            icon: Share2,
            link: "/enitexa.ai/services/social-media-marketing",
            tag: "Brand Visibility"
        }
    ];

    return (
        <section id="services" className="bg-[#0B0F19] py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <div className="pf-mono mb-6 flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.35em] text-slate-400">
                        <span className="text-indigo-300">(04)</span>
                        <span>Services</span>
                    </div>
                    <h2 className="pf-display mb-5 text-[clamp(1.7rem,3.2vw,2.5rem)] font-bold leading-[1.05] text-white">
                        Interactive digital <span className="pf-outline-text">solution stack.</span>
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-400">
                        App development, digital presence, AI systems, and growth operations delivered under one premium execution model.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-6">
                    {featuredSolutions.map((solution, index) => (
                        <SpotlightCard
                            key={solution.title}
                            data-cursor="Explore"
                            onClick={() => navigate(solution.link)}
                            className={`group relative flex h-full cursor-pointer flex-col rounded-3xl border border-white/10 bg-slate-950/70 p-9 transition-all duration-500 hover:-translate-y-1.5 hover:border-indigo-300/40 ${
                                index === 0 ? 'md:col-span-6 lg:col-span-2' : 'md:col-span-3 lg:col-span-2'
                            }`}
                        >
                            <div className="mb-8 flex items-start justify-between">
                                <span className="pf-display text-5xl font-extrabold text-white/[0.07] transition-colors duration-500 group-hover:text-indigo-400/40">
                                    0{index + 1}
                                </span>
                                <span className="pf-mono inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-[9px] uppercase tracking-[0.18em] text-slate-300">
                                    <Star className="h-3 w-3 text-indigo-300" />
                                    {solution.tag}
                                </span>
                            </div>
                            <div className="mb-5 flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-500/20 bg-indigo-500/10">
                                    <solution.icon className="h-6 w-6 text-indigo-400" />
                                </div>
                                <h3 className="pf-display text-2xl font-bold leading-tight text-white">{solution.title}</h3>
                            </div>

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
                                <span className="pf-mono inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-indigo-200 transition-all duration-300 group-hover:gap-3.5 group-hover:text-white">
                                    Explore service <ArrowRight className="h-4 w-4" />
                                </span>
                            </div>
                        </SpotlightCard>
                    ))}
                </div>

                <div className="mt-12 flex flex-col items-center gap-4">
                    <button
                        onClick={() => navigate('/enitexa.ai/services')}
                        className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-500 hover:border-white hover:bg-white hover:text-black"
                    >
                        Show all services
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                    <p className="pf-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
                        {extendedSolutions.length + featuredSolutions.length} total services available
                    </p>
                </div>
            </div>
        </section>
    );
};

export const ProductLayer = () => {
    const products = [
        { title: "AI Command Layer", desc: "AI copilots and automations integrated directly into your business workflows.", icon: BrainCircuit, color: "text-blue-400" },
        { title: "Enitexa.Ai Ops Core", desc: "Execution intelligence model combining apps, dashboards, and process automation.", icon: Cpu, color: "text-indigo-400" },
        { title: "Signal Analytics Grid", desc: "Real-time behavior and performance insights to power faster growth decisions.", icon: Database, color: "text-purple-400" }
    ];

    return (
        <section className="relative bg-[#0B0F19] py-28">
            <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <div className="pf-mono mb-6 flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.35em] text-slate-400">
                        <span className="text-indigo-300">(05)</span>
                        <span>AI Innovation Layer</span>
                    </div>
                    <h2 className="pf-display mb-5 mt-5 text-[clamp(1.7rem,3.2vw,2.5rem)] font-bold text-white">
                        Futuristic systems that <span className="pf-outline-text">drive execution.</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-400">
                        Built with automation, observability, and intelligence-first architecture to support long-term client growth.
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
