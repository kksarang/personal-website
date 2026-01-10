import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LearningPage from './components/Learning/LearningPage';
import LearningDetail from './components/Learning/LearningDetail';
import ProjectDetail from './components/Projects/ProjectDetail';
import WorkPage from './components/Work/WorkPage';
import ErrorBoundary from './components/ErrorBoundary';

const ScrollToSection = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return null;
};

const HomePage = () => (
  <>
    <Hero />
    <About />
    <Skills />
    <Experience />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
        <Navbar />
        <ScrollToSection />
        <ErrorBoundary>
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/learning" element={<LearningPage />} />
              <Route path="/learning/:slug" element={<LearningDetail />} />
              <Route path="/our-projects/:projectSlug" element={<ProjectDetail />} />
            </Routes>
          </main>
        </ErrorBoundary>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
