import React from 'react';
import { Landmark, Stethoscope, Car, Building2, ShoppingBag, Rocket } from 'lucide-react';

const TrustedBy = () => {
    const partners = [
        { name: 'Automobile Group', icon: Car },
        { name: 'Healthcare Network', icon: Stethoscope },
        { name: 'Retail Brands', icon: ShoppingBag },
        { name: 'Enterprise Teams', icon: Building2 },
        { name: 'Growth Startups', icon: Rocket },
        { name: 'Service Businesses', icon: Landmark },
    ];

    return (
        <section className="border-y border-white/5 bg-[#0A0B14] py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Trusted by teams across industries
                </p>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
                    {partners.map((partner) => (
                        <article key={partner.name} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-indigo-300/35">
                            <partner.icon className="h-4 w-4 text-indigo-300" />
                            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-200">{partner.name}</span>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;
