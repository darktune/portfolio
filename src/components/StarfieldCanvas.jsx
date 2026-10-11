import React, { useEffect, useRef } from 'react';

/**
 * StarfieldCanvas: Interactive cosmic night sky background with drifting stars,
 * constellation lines, and subtle mouse gravity.
 */
export default function StarfieldCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Generate 120 stars with varied depth, velocity, and brightness
    const stars = Array.from({ length: 120 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.6 + 0.4,
      baseAlpha: Math.random() * 0.7 + 0.2,
      alpha: Math.random() * 0.7 + 0.2,
      pulseSpeed: Math.random() * 0.02 + 0.005,
      vx: (Math.random() - 0.5) * 0.12,
      vy: -Math.random() * 0.18 - 0.05
    }));

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Check if dark mode is active
      const isDark = document.documentElement.classList.contains('dark');
      if (!isDark) {
        animationFrameId = requestAnimationFrame(render);
        return; // Leave clean in cream light mode
      }

      // Draw starry sky
      stars.forEach((star, i) => {
        // Subtle drift
        star.x += star.vx;
        star.y += star.vy;

        // Wrap around boundaries
        if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
        }
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;

        // Twinkle pulse
        star.alpha += star.pulseSpeed;
        if (star.alpha > 1 || star.alpha < 0.15) {
          star.pulseSpeed = -star.pulseSpeed;
        }

        ctx.fillStyle = `rgba(240, 244, 255, ${Math.max(0.1, star.alpha)})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby stars with delicate constellation lines
        for (let j = i + 1; j < stars.length; j++) {
          const s2 = stars[j];
          const dist = Math.hypot(star.x - s2.x, star.y - s2.y);
          if (dist < 75) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.08 * (1 - dist / 75)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(s2.x, s2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-85 transition-opacity duration-500"
    />
  );
}
