import React, { useState, useEffect } from 'react';
import { Rocket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let ticking = false;
    const toggleVisibility = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setIsVisible(window.scrollY > 400);
        ticking = false;
      });
    };

    toggleVisibility();
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed bottom-[calc(2rem+env(safe-area-inset-bottom,0px))] right-[calc(2rem+env(safe-area-inset-right,0px))] z-[100] max-sm:left-4 max-sm:right-4">
      <div className="pointer-events-auto ml-auto rounded-2xl border border-slate-200/90 bg-white/95 p-2.5 shadow-[0_10px_24px_rgba(15,23,42,0.14)] dark:border-white/15 dark:bg-[rgba(10,15,31,0.9)] dark:shadow-none max-sm:max-w-[min(100%,18rem)]">
        <button
          onClick={() => navigate('/hexenity/contact')}
          className="group flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-indigo-500"
        >
          <Rocket className="w-4 h-4" />
          <span>Book consultation</span>
        </button>
      </div>
    </div>
  );
};

export default StickyCTA;
