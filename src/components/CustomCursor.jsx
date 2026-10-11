import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hoveredState, setHoveredState] = useState(null); // 'interactive', 'project', 'gwen', 'art', null
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target.closest('button, a, [data-cursor], input, textarea');
      if (target) {
        const customType = target.getAttribute('data-cursor');
        if (customType === 'gwen') {
          setHoveredState('gwen');
        } else if (customType === 'project') {
          setHoveredState('project');
        } else if (customType === 'art') {
          setHoveredState('art');
        } else {
          setHoveredState('interactive');
        }
      } else {
        setHoveredState(null);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (isTouch) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-150 select-none">
      {/* Outer Tracking Ring with iOS 26 Glass Aura */}
      <div
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-100 ease-out flex items-center justify-center ${
          hoveredState === 'interactive'
            ? 'w-11 h-11 border border-white/80 bg-white/10 backdrop-blur-sm scale-110 shadow-[0_0_15px_rgba(255,255,255,0.3)]'
            : hoveredState === 'project'
            ? 'w-14 h-14 border-2 border-white bg-white/5 backdrop-blur-md scale-125 shadow-[0_0_25px_rgba(255,255,255,0.4)]'
            : hoveredState === 'gwen'
            ? 'px-3 py-1.5 rounded-full bg-white text-black font-mono text-[10px] font-extrabold tracking-widest shadow-2xl scale-110'
            : 'w-6 h-6 border border-white/40 bg-white/[0.02]'
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`
        }}
      >
        {hoveredState === 'gwen' && (
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-black animate-ping" />
            <span>GWEN</span>
          </span>
        )}
      </div>

      {/* Center Precision Star Beacon */}
      {hoveredState !== 'gwen' && (
        <div
          className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#ffffff]"
          style={{
            transform: `translate3d(${position.x}px, ${position.y}px, 0)`
          }}
        />
      )}
    </div>
  );
}
