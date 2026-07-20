import React from 'react';
import { Landmark, Stethoscope, Car, Building2, ShoppingBag, Rocket } from 'lucide-react';

const PARTNERS = [
    { name: 'Automobile Group', icon: Car },
    { name: 'Healthcare Network', icon: Stethoscope },
    { name: 'Retail Brands', icon: ShoppingBag },
    { name: 'Enterprise Teams', icon: Building2 },
    { name: 'Growth Startups', icon: Rocket },
    { name: 'Service Businesses', icon: Landmark },
];

const Row = () => (
    <div className="pf-marquee-track" aria-hidden="true">
        {PARTNERS.map((partner) => (
            <span
                key={partner.name}
                className="pf-mono flex shrink-0 items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.03] px-6 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300"
            >
                <partner.icon className="h-4 w-4 text-indigo-300" />
                {partner.name}
            </span>
        ))}
    </div>
);

const TrustedBy = () => {
    return (
        <section className="border-y border-white/5 bg-[#0A0B14] py-14">
            <p className="pf-mono mb-8 text-center text-[10px] uppercase tracking-[0.35em] text-slate-500">
                Trusted by teams across industries
            </p>
            <div className="pf-marquee">
                <Row />
                <Row />
            </div>
        </section>
    );
};

export default TrustedBy;
