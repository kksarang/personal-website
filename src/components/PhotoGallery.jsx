import React from 'react';
import { MapPin } from 'lucide-react';

const PhotoGallery = () => {
    const photos = [
        { id: 1, url: '/assets/images/gallery/1.jpg', span: 'md:col-span-2 md:row-span-2', caption: 'Mountain Trails', location: 'Munnar, Kerala' },
        { id: 2, url: '/assets/images/gallery/2.jpg', span: 'md:col-span-1 md:row-span-1', caption: 'Coastal Rides', location: 'Varkala' },
        { id: 3, url: '/assets/images/gallery/3.jpg', span: 'md:col-span-1 md:row-span-1', caption: 'City Lights', location: 'Bangalore' },
        { id: 4, url: '/assets/images/gallery/4.jpg', span: 'md:col-span-1 md:row-span-1', caption: 'Weekend Getaways', location: 'Wayanad' },
        { id: 5, url: '/assets/images/gallery/5.jpg', span: 'md:col-span-1 md:row-span-1', caption: 'Café Hunting', location: 'Kochi' },
        { id: 6, url: '/assets/images/gallery/6.jpg', span: 'md:col-span-2 md:row-span-1', caption: 'Nature Walks', location: 'Kerala' },
        { id: 7, url: '/assets/images/gallery/7.jpg', span: 'md:col-span-2 md:row-span-1', caption: 'Hidden Gems', location: 'South India' },
    ];

    return (
        <section id="adventures" className="relative border-t border-[#111110]/10 py-24 dark:border-white/10 sm:py-28">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <p className="port-mono mb-4 text-[11px] uppercase tracking-[0.35em] text-[#3a3a36] dark:text-white/40">
                    <span className="port-accent">(06)</span> Life outside code
                </p>
                <h2 className="port-display max-w-2xl text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-[#111110] dark:text-[#F4F4F0]">
                    Adventures & explorations
                </h2>
                <p className="mt-4 max-w-xl text-[#3a3a36] dark:text-white/50">
                    When I&apos;m not shipping product, you&apos;ll find me on trails, coastal roads, and café corners across South India.
                </p>

                <div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-4 md:auto-rows-[220px] md:gap-4">
                    {photos.map((photo) => (
                        <div
                            key={photo.id}
                            className={`group relative overflow-hidden rounded-2xl bg-[#111110]/5 dark:bg-white/5 ${photo.span}`}
                        >
                            <img
                                src={photo.url}
                                alt={photo.caption}
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                            <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                                <h3 className="port-display text-lg font-bold text-white">{photo.caption}</h3>
                                <p className="mt-1 flex items-center gap-1.5 text-sm text-white/70">
                                    <MapPin className="h-3.5 w-3.5 port-accent" />
                                    {photo.location}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PhotoGallery;
