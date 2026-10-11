import React from 'react';

/**
 * Gwen AI Icon:
 * Circular-cornered rectangular chatbox with speech tail
 * and intelligent message lines / activity dots.
 */
export default function GwenIcon({ size = 20, className = "", isThinking = false, isTyping = false }) {
  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        {/* Circular-Cornered Rectangular Chatbox Outline */}
        <path
          d="M 6 3 H 18 A 3 3 0 0 1 21 6 V 14 A 3 3 0 0 1 18 17 H 8.5 L 4.5 21 V 17 H 6 A 3 3 0 0 1 3 14 V 6 A 3 3 0 0 1 6 3 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Interior: Message Lines or Animated Thinking Indicator */}
        {!isThinking && !isTyping ? (
          <g opacity="0.85">
            <line x1="7" y1="8" x2="17" y2="8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <line x1="7" y1="12" x2="13" y2="12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </g>
        ) : (
          <g transform="translate(12, 10)">
            <circle cx="-4" cy="0" r="1.1" fill="currentColor" className="animate-ping" />
            <circle cx="0" cy="0" r="1.1" fill="currentColor" />
            <circle cx="4" cy="0" r="1.1" fill="currentColor" className="animate-ping" />
          </g>
        )}
      </svg>
    </div>
  );
}
