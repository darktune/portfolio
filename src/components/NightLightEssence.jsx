import React, { useEffect, useState } from 'react';

/**
 * NightLightEssence
 * Resend-inspired atmospheric lighting engine for dark theme.
 * Features an ethereal top-center beam of "grey light / night light",
 * negative color dusk auras in the shadows, and a subtle mouse-following spotlight
 * that illuminates the dark canvas with specular luminescence.
 */
export default function NightLightEssence() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden dark:opacity-100 opacity-0 transition-opacity duration-700">
      
      {/* 1. Primary Top Center "Ray of Light" (Resend Moonbeam / Grey Light Beam) */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[650px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 75% 55% at 50% -10%, rgba(255, 255, 255, 0.11) 0%, rgba(203, 213, 225, 0.04) 40%, rgba(148, 163, 184, 0.015) 60%, transparent 80%)'
        }}
      />

      {/* 2. Secondary Architectural Dusk Line / Horizon Shimmer */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] pointer-events-none opacity-40"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)'
        }}
      />

      {/* 3. Negative Shadow Glow (Ethereal Emerald & Silver Dusk in the Shadows) */}
      <div 
        className="absolute top-36 right-[15%] w-[550px] h-[550px] rounded-full blur-[110px] pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.07) 0%, rgba(56, 189, 248, 0.03) 50%, transparent 75%)'
        }}
      />

      <div 
        className="absolute top-[48%] left-[10%] w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.04) 0%, rgba(148, 163, 184, 0.02) 45%, transparent 70%)'
        }}
      />

      {/* 4. Interactive Mouse-Following Night Light Spotlight */}
      <div
        className="absolute w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-transform duration-75 ease-out"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.035) 0%, rgba(255, 255, 255, 0.01) 40%, transparent 70%)',
          willChange: 'transform'
        }}
      />

      {/* 5. Delicate Architectural Radial Grid (Only visible under the light beam) */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.6) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 65% 45% at 50% 15%, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 65% 45% at 50% 15%, black 20%, transparent 80%)'
        }}
      />

    </div>
  );
}
