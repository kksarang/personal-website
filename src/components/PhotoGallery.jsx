import React from 'react';
import { Camera, MapPin } from 'lucide-react';

const PhotoGallery = () => {
    const photos = [
        {
            id: 1,
            url: "/assets/images/gallery/1.jpg",
            span: "md:col-span-2 md:row-span-2",
            caption: "Mountain Trails",
            location: "Munnar, Kerala"
        },
        {
            id: 2,
            url: "/assets/images/gallery/2.jpg",
            span: "md:col-span-1 md:row-span-1",
            caption: "Coastal Rides",
            location: "Varkala"
        },
        {
            id: 3,
            url: "/assets/images/gallery/3.jpg",
            span: "md:col-span-1 md:row-span-1",
            caption: "City Lights",
            location: "Bangalore"
        },
        {
            id: 4,
            url: "/assets/images/gallery/4.jpg",
            span: "md:col-span-1 md:row-span-1",
            caption: "Weekend Getaways",
            location: "Wayanad"
        },
        {
            id: 5,
            url: "/assets/images/gallery/5.jpg",
            span: "md:col-span-1 md:row-span-1",
            caption: "Café Hunting",
            location: "Kochi"
        },
        {
            id: 6,
            url: "/assets/images/gallery/6.jpg",
            span: "md:col-span-2 md:row-span-1",
            caption: "Nature Walks",
            location: "Kerala"
        },
        {
            id: 7,
            url: "/assets/images/gallery/7.jpg",
            span: "md:col-span-2 md:row-span-1",
            caption: "Hidden Gems",
            location: "South India"
        }
    ];

    return (
        <section id="adventures" className="py-24 bg-white dark:bg-[#0A0B14] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center space-x-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 mb-4 font-semibold tracking-wide text-sm">
                        <Camera className="w-4 h-4" />
                        <span>Life Outside Code</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
                        Adventures & Explorations
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        When I'm not architecting software systems, you'll usually find me exploring new trails, capturing moments, and riding through the winding roads of South India.
                    </p>
                </div>

                {/* Masonry Grid Layout (Tailwind Grid Approach) */}
                <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[250px] gap-4 md:gap-6 mt-12">
                    {photos.map((photo) => (
                        <div
                            key={photo.id}
                            className={`group relative rounded-[2rem] overflow-hidden bg-gray-100 dark:bg-slate-800 shadow-xl ${photo.span}`}
                        >
                            {/* Image with fallback styling */}
                            <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 flex flex-col items-center justify-center text-slate-400 dark:text-slate-600 text-sm p-4 text-center">
                                <Camera className="w-8 h-8 mb-2 opacity-50" />
                                <span>Save image as<br /><b>/assets/images/gallery/{photo.id}.jpg</b></span>
                            </div>

                            <img
                                src={photo.url}
                                alt={photo.caption}
                                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] z-10"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                }}
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

                            {/* Hover Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-30">
                                <h3 className="text-white text-xl font-bold tracking-wide mb-2">{photo.caption}</h3>
                                <div className="flex items-center text-gray-300 text-sm">
                                    <MapPin className="w-4 h-4 mr-1.5" />
                                    {photo.location}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PhotoGallery;
