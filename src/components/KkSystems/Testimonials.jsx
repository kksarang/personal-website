import React from 'react';
import { Quote, Star } from 'lucide-react';

const TestimonialCard = ({ quote, author, role, company }) => (
    <div className="relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300">
        <Quote className="absolute top-6 right-8 w-12 h-12 text-white/5 rotate-180" />
        <div className="flex gap-1 mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
            ))}
        </div>
        <p className="text-xl text-gray-200 mb-8 relative z-10 font-medium leading-relaxed tracking-wide">
            "{quote}"
        </p>
        <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                {author.charAt(0)}
            </div>
            <div>
                <h4 className="text-white font-bold">{author}</h4>
                <p className="text-gray-500 text-sm">{role}, {company}</p>
            </div>
        </div>
    </div>
);

const Testimonials = () => {
    return (
        <section className="py-[100px] bg-[#0F111A] relative overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="absolute -top-24 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-semibold mb-6">
                        Client Success
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Trusted by Visionaries
                    </h2>
                    <p className="text-xl text-gray-400">
                        Don't just take our word for it—see what our partners have to say.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <TestimonialCard
                        quote="KKSYSTEMS delivered our complex mobile app on time with excellent quality. Pwoli work by the entire tech team, highly recommended!"
                        author="Sourav"
                        role="Product Manager"
                        company="Kochi Tech Solutions"
                    />
                    <TestimonialCard
                        quote="The team completely revamped our e-commerce platform. It's faster, more secure, and extremely user-friendly. Adipoli experience working with them."
                        author="Amal"
                        role="Founder"
                        company="KeralaKart"
                    />
                    <TestimonialCard
                        quote="Working with hexenity felt like having an in-house tech team. They communicated clearly and brought innovative solutions to the table from day one."
                        author="Razzal"
                        role="Marketing Head"
                        company="HOLY BRO Qatar"
                    />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
