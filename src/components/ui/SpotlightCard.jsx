import React, { useRef } from 'react';

/** Card whose radial highlight follows the cursor (via --pf-x / --pf-y). */
const SpotlightCard = ({ children, className = '', ...rest }) => {
    const ref = useRef(null);

    const handleMove = (e) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        el.style.setProperty('--pf-x', `${e.clientX - rect.left}px`);
        el.style.setProperty('--pf-y', `${e.clientY - rect.top}px`);
    };

    return (
        <div ref={ref} onMouseMove={handleMove} className={`pf-spot ${className}`} {...rest}>
            {children}
        </div>
    );
};

export default SpotlightCard;
