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
      <div className="pointer-events-auto ml-auto w-fit max-sm:max-w-[min(100%,18rem)]">
        <button
          onClick={() => navigate('/enitexa.ai/contact')}
          data-cursor="Book"
          className="group flex items-center gap-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 py-3.5 pl-6 pr-5 text-sm font-semibold text-white shadow-[0_18px_45px_-14px_rgba(99,102,241,0.7)] transition-all duration-300 hover:scale-[1.04]"
        >
          <Rocket className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
          <span>Book consultation</span>
        </button>
      </div>
    </div>
  );
};

export default StickyCTA;
