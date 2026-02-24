import React from 'react';

const StatCard = ({ number, text }) => (
    <div className="flex flex-col items-center justify-center p-6 text-center transform hover:scale-105 transition-transform duration-300">
        <h3 className="text-4xl md:text-6xl font-extrabold text-white mb-2 tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
            {number}
        </h3>
        <p className="text-lg md:text-xl font-medium text-white/80 uppercase tracking-widest">
            {text}
        </p>
    </div>
);

const Stats = () => {
    return (
        <section className="py-20 relative">
            <div className="absolute inset-x-0 top-0 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Purple/Blue Gradient Block */}
                <div className="w-full h-full rounded-[3rem] bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 shadow-2xl relative overflow-hidden">
                    {/* Abstract Shapes overlay */}
                    <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyIiBmaWxsPSIjRkZGRkZGIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9jaXJjbGU+Cjwvc3ZnPg==')] pointer-events-none" />

                    {/* Animated Light Sweep */}
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />

                    <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 py-16 px-8 items-center h-full">
                        <StatCard number="50+" text="Projects Completed" />
                        <StatCard number="20+" text="Happy Clients" />
                        <StatCard number="5+" text="Years Experience" />
                        <StatCard number="100%" text="Client Satisfaction" />
                    </div>
                </div>
            </div>
            {/* Spacer for the absolute positioned container */}
            <div className="h-64 sm:h-48 md:h-32 lg:h-48" />
        </section>
    );
};

export default Stats;
