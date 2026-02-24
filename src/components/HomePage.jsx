import React from 'react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import PhotoGallery from './PhotoGallery';
import Contact from './Contact';

const HomePage = () => {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <PhotoGallery />
            <Contact />
        </>
    );
};

export default HomePage;
