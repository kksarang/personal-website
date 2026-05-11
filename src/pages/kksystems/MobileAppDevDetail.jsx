import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Code2, Layers, Shield, Smartphone, Truck, Activity, ShoppingBag } from 'lucide-react';
import HexenityPageShell from '../../components/KkSystems/HexenityPageShell';

const serviceAreas = [
    {
        title: 'Custom Mobile Product Development',
        description: 'End-to-end product delivery aligned to your business goals, user behavior, and growth roadmap.',
        points: ['Business-aligned architecture', 'User-first interface decisions', 'Scalable release planning'],
        icon: Code2,
    },
    {
        title: 'Mobile App Modernization',
        description: 'Upgrade legacy applications with modern architecture, improved performance, and maintainable code.',
        points: ['Legacy refactoring strategy', 'Performance optimization', 'Security and compliance updates'],
        icon: Activity,
    },
    {
        title: 'Native Platform Engineering',
        description: 'iOS and Android native implementations optimized for device-level performance and reliability.',
        points: ['Swift / SwiftUI', 'Kotlin / Jetpack', 'Deep OS integration'],
        icon: Smartphone,
    },
    {
        title: 'Cross-Platform Delivery',
        description: 'High-quality apps across iOS and Android from a shared, efficient codebase.',
        points: ['Flutter & React Native', 'Consistent product behavior', 'Lower maintenance overhead'],
        icon: Layers,
    },
];

const industries = [
    { name: 'FinTech', icon: Shield, description: 'Secure transaction systems, wallets, and compliance-aware products.' },
    { name: 'HealthTech', icon: Activity, description: 'Patient workflows, diagnostics, and healthcare process tools.' },
    { name: 'E-commerce', icon: ShoppingBag, description: 'Scalable storefront and operational commerce experiences.' },
    { name: 'Logistics', icon: Truck, description: 'Fleet operations, route intelligence, and delivery workflows.' },
];

const processSteps = [
    'Discovery & Business Alignment',
    'Experience Design & Architecture Planning',
    'Agile Development Sprints',
    'Quality Engineering & Security Validation',
    'Store Deployment & Release Governance',
    'Post-Launch Support & Optimization',
];

const assurancePoints = [
    'Transparent milestone reporting',
    'Dedicated technical ownership',
    'Flexible engagement models',
    'Security and reliability-first decisions',
    'Post-launch iteration support',
    'Business-focused delivery outcomes',
];

export default function MobileAppDevDetail() {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <HexenityPageShell
            badge="Mobile Engineering"
            title="Enterprise-grade mobile product delivery"
            subtitle="We build secure, scalable, and high-performance mobile applications for ambitious teams and business-critical use cases."
            backLabel="Back to Hexenity"
            onBack={() => navigate('/hexenity')}
            actions={(
                <button
                    type="button"
                    onClick={() => navigate('/hexenity/contact')}
                    className="inline-flex items-center gap-2 rounded-xl border border-indigo-300/35 bg-indigo-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-indigo-100 transition hover:bg-indigo-500/30"
                >
                    Start a Mobile Project
                    <ArrowRight className="h-4 w-4" />
                </button>
            )}
        >
            <div className="space-y-8">
                <section className="grid gap-6 md:grid-cols-2">
                    {serviceAreas.map((area) => (
                        <article key={area.title} className="premium-surface rounded-3xl p-7">
                            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10">
                                <area.icon className="h-6 w-6 text-indigo-300" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">{area.title}</h2>
                            <p className="mt-2 text-sm leading-relaxed text-slate-300">{area.description}</p>
                            <ul className="mt-4 space-y-2">
                                {area.points.map((point) => (
                                    <li key={point} className="flex items-start gap-2 text-sm text-slate-200">
                                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </section>

                <section className="premium-surface gradient-stroke rounded-3xl p-7">
                    <h2 className="text-2xl font-bold text-white">Delivery Process</h2>
                    <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                        {processSteps.map((step, index) => (
                            <article key={step} className="rounded-xl border border-white/10 bg-white/5 p-4">
                                <p className="text-xs uppercase tracking-[0.14em] text-indigo-300">Stage {index + 1}</p>
                                <h3 className="mt-1 font-semibold text-white">{step}</h3>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                    <article className="premium-surface rounded-3xl p-7">
                        <h2 className="text-2xl font-bold text-white">Industry Expertise</h2>
                        <div className="mt-5 grid gap-4 sm:grid-cols-2">
                            {industries.map((industry) => (
                                <article key={industry.name} className="rounded-xl border border-white/10 bg-white/5 p-4">
                                    <industry.icon className="h-5 w-5 text-indigo-300" />
                                    <h3 className="mt-2 font-semibold text-white">{industry.name}</h3>
                                    <p className="mt-1 text-sm text-slate-300">{industry.description}</p>
                                </article>
                            ))}
                        </div>
                    </article>

                    <article className="rounded-3xl border border-indigo-300/25 bg-indigo-500/15 p-7">
                        <h2 className="text-2xl font-bold text-white">Execution Assurance</h2>
                        <ul className="mt-4 space-y-2">
                            {assurancePoints.map((point) => (
                                <li key={point} className="flex items-start gap-2 text-sm text-indigo-100">
                                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-indigo-200" />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                        <button
                            type="button"
                            onClick={() => navigate('/hexenity/contact')}
                            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500"
                        >
                            Book Architecture Discussion
                            <ArrowRight className="h-4 w-4" />
                        </button>
                    </article>
                </section>
            </div>
        </HexenityPageShell>
    );
}
