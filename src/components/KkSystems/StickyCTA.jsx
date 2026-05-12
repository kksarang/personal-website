import React, { useState, useEffect } from 'react';
import { Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const toggleVisibility = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setIsVisible(window.scrollY > 320);
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

  // Mobile: intrinsic-width pill (narrow), centered — avoids a full-bleed bar. Desktop: bottom-right chip.
  return (
    <div
      className="fixed bottom-[max(0.75rem,calc(env(safe-area-inset-bottom,0px)+0.375rem))] left-1/2 z-[260] w-max max-w-[calc(100vw-1.25rem)] -translate-x-1/2 sm:bottom-[calc(1.5rem+env(safe-area-inset-bottom,0px))] sm:left-auto sm:right-[calc(1rem+env(safe-area-inset-right,0px))] sm:max-w-none sm:translate-x-0"
      role="complementary"
      aria-label="Book a consultation"
    >
      <div className="rounded-xl border border-slate-200/90 bg-white/95 p-1 shadow-[0_8px_22px_rgba(15,23,42,0.12)] dark:border-white/15 dark:bg-[rgba(10,15,31,0.94)] dark:shadow-[0_8px_26px_rgba(0,0,0,0.45)] sm:rounded-2xl sm:p-1.5">
        <Link
          to="/hexenity/contact"
          draggable={false}
          className="group inline-flex min-h-[44px] shrink-0 touch-manipulation items-center justify-center gap-1.5 whitespace-nowrap rounded-lg bg-indigo-600 px-4 py-2.5 text-[13px] font-semibold leading-tight !text-white no-underline transition-colors duration-200 hover:bg-indigo-500 active:bg-indigo-700 sm:min-h-[48px] sm:gap-2 sm:rounded-xl sm:px-5 sm:text-sm md:px-6"
        >
          <Rocket className="h-[1.05rem] w-[1.05rem] shrink-0 sm:h-[1.125rem] sm:w-[1.125rem]" aria-hidden />
          <span>Book consultation</span>
        </Link>
      </div>
    </div>
  );
};

export default StickyCTA;
