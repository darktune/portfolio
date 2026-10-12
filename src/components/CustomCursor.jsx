import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [coords, setCoords] = useState({ x: -100, y: -100 });
  const [hoveredType, setHoveredType] = useState(null); // null | 'button' | 'project' | 'gwen' | 'input'
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const ringRef = useRef(null);
  const targetPos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });
  const rafId = useRef(null);

  useEffect(() => {
    // Disable completely on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      setCoords({ x: Math.round(e.clientX), y: Math.round(e.clientY) });
      if (!isVisible) setIsVisible(true);

      const target = e.target.closest('button, a, [data-cursor], input, textarea, .ios-glass-card');
      if (target) {
        const customType = target.getAttribute('data-cursor');
        if (customType === 'gwen' || target.closest('[data-cursor="gwen"]')) {
          setHoveredType('gwen');
        } else if (customType === 'project' || target.closest('.ios-glass-card')) {
          setHoveredType('project');
        } else if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
          setHoveredType('input');
        } else {
          setHoveredType('button');
        }
      } else {
        setHoveredType(null);
      }
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    // High performance RAF position lerping for the HUD ring
    const render = () => {
      const lerp = 0.22;
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * lerp;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * lerp;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0)`;
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
      
      {/* ─── 1. Instant Sub-Pixel Center Dot ─── */}
      <div
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400 dark:bg-emerald-400 shadow-[0_0_8px_#34d399,0_0_16px_#06b6d4] transition-transform duration-75"
        style={{
          transform: `translate3d(${targetPos.current.x}px, ${targetPos.current.y}px, 0)`
        }}
      />

      {/* ─── 2. Trailing Techy HUD Reticle Ring ─── */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center transition-[width,height,border-color,background-color] duration-150 ease-out"
        style={{
          width: hoveredType === 'project' ? '56px' : hoveredType ? '44px' : '28px',
          height: hoveredType === 'project' ? '56px' : hoveredType ? '44px' : '28px'
        }}
      >
        {/* Outer Ring Circle with Micro Crosshairs */}
        <div className={`relative w-full h-full rounded-full border transition-all duration-200 ${
          hoveredType === 'gwen'
            ? 'border-emerald-400 bg-emerald-500/10 shadow-[0_0_20px_rgba(52,211,153,0.4)]'
            : hoveredType === 'project'
            ? 'border-cyan-400/80 bg-cyan-500/5 shadow-[0_0_25px_rgba(6,182,212,0.35)]'
            : hoveredType
            ? 'border-emerald-400/80 bg-emerald-500/5 shadow-[0_0_15px_rgba(52,211,153,0.3)]'
            : 'border-zinc-500/40 dark:border-white/30 bg-transparent'
        }`}>
          
          {/* Micro HUD Crosshair Ticks (Top, Right, Bottom, Left) */}
          <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-0.5 h-1.5 bg-emerald-400/80" />
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0.5 h-1.5 bg-emerald-400/80" />
          <span className="absolute -left-1 top-1/2 -translate-y-1/2 w-1.5 h-0.5 bg-cyan-400/80" />
          <span className="absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-0.5 bg-cyan-400/80" />

          {/* Corner Framing Brackets When Hovering */}
          {hoveredType && (
            <>
              <span className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-emerald-400" />
              <span className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-cyan-400" />
              <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-cyan-400" />
              <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-emerald-400" />
            </>
          )}
        </div>

        {/* ─── 3. Telemetry Coordinates & State Tag ─── */}
        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 flex flex-col items-start gap-0.5 pointer-events-none opacity-80">
          <div className="px-1.5 py-0.5 rounded bg-zinc-900/90 dark:bg-black/90 backdrop-blur-md border border-emerald-500/30 text-[9px] font-mono tracking-wider text-emerald-400 whitespace-nowrap shadow-xs">
            {hoveredType === 'gwen' ? (
              <span>AI // GWEN</span>
            ) : hoveredType === 'project' ? (
              <span>SPEC // 105D</span>
            ) : hoveredType === 'button' ? (
              <span>SYS // LOCK</span>
            ) : hoveredType === 'input' ? (
              <span>TXT // EDIT</span>
            ) : (
              <span>SYS // OK</span>
            )}
          </div>
          
          {/* Micro X/Y Coordinates */}
          <span className="text-[8px] font-mono text-zinc-500 dark:text-zinc-400 tracking-tighter whitespace-nowrap pl-0.5">
            {coords.x},{coords.y}
          </span>
        </div>

      </div>

    </div>
  );
}
