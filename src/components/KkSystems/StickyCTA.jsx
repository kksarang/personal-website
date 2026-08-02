import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
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
        const scrollY = window.scrollY;
        const doc = document.documentElement;
        const nearBottom = scrollY + window.innerHeight > doc.scrollHeight - 420;
        const footer = document.querySelector('.enitexa-footer');
        const overFooter = footer
          ? footer.getBoundingClientRect().top < window.innerHeight - 80
          : nearBottom;
        setIsVisible(scrollY > 520 && !overFooter);
        ticking = false;
      });
    };

    toggleVisibility();
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    window.addEventListener('resize', toggleVisibility, { passive: true });
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('resize', toggleVisibility);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed bottom-[calc(1.5rem+env(safe-area-inset-bottom,0px))] right-[calc(1.5rem+env(safe-area-inset-right,0px))] z-[100] max-sm:left-4 max-sm:right-4">
      <div className="pointer-events-auto ml-auto w-fit max-sm:max-w-[min(100%,18rem)]">
        <button
          type="button"
          onClick={() => navigate('/enitexa.ai/contact')}
          className="group flex items-center gap-2 rounded-full border border-white/15 bg-[#0b1020]/92 py-3 pl-5 pr-4 text-sm font-semibold text-white shadow-[0_16px_40px_-18px_rgba(15,23,42,0.65)] backdrop-blur-md transition-all duration-300 hover:border-indigo-300/50 hover:bg-indigo-600 dark:border-white/15"
        >
          <span>Start a project</span>
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </div>
  );
};

export default StickyCTA;
