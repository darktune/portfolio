import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const targetPos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef(null);

  useEffect(() => {
    // Disable completely on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check if hovering over clickable elements
      const target = e.target.closest('button, a, [data-cursor], input, textarea, [role="button"]');
      setIsHovered(Boolean(target));
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    // Smooth fluid lerp for the outer circle ring
    const render = () => {
      const lerp = 0.18;
      ringPos.current.x += (targetPos.current.x - ringPos.current.x) * lerp;
      ringPos.current.y += (targetPos.current.y - ringPos.current.y) * lerp;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }
      rafId.current = requestAnimationFrame(render);
    };

    rafId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden select-none">
      
      {/* Center Precision Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-zinc-900 dark:bg-white transition-opacity duration-150"
        style={{
          opacity: isHovered ? 0 : 0.9
        }}
      />

      {/* Minimalist Trailing Circle Ring (Adeola Adeoti Style) */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full border transition-[width,height,border-color,background-color] duration-200 ease-out flex items-center justify-center"
        style={{
          width: isHovered ? '48px' : '28px',
          height: isHovered ? '48px' : '28px',
          borderColor: isHovered ? 'rgba(0, 0, 0, 0.45)' : 'rgba(0, 0, 0, 0.25)',
          backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.04)' : 'transparent'
        }}
      >
        {/* Dark mode border override */}
        <div 
          className={`w-full h-full rounded-full border transition-all duration-200 ${
            isHovered 
              ? 'border-zinc-900/60 dark:border-white/70 bg-zinc-900/[0.04] dark:bg-white/[0.08]' 
              : 'border-zinc-900/35 dark:border-white/35 bg-transparent'
          }`} 
        />
      </div>

    </div>
  );
}
