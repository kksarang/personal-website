import React, { useState, useEffect } from 'react';
import { Rocket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          className="fixed bottom-8 right-8 z-[100]"
        >
          <button
            onClick={() => navigate('/hexenity/contact')}
            className="group flex items-center gap-3 px-6 py-4 rounded-2xl bg-hexenity-gradient text-white font-bold shadow-hexenity-glow hover:shadow-hexenity-glow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <Rocket className="w-5 h-5 group-hover:animate-bounce" />
            <span>Start Project 🚀</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;
