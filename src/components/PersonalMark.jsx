import React from 'react';

/**
 * PersonalMark
 * A unique, simple, and minimalist geometric architectural mark
 * representing Abraham Toluwani: Systems Architect & Smart Contract Engineer.
 * Features a sovereign architectural apex with an elevated inner nexus.
 */
export default function PersonalMark({ size = 16, className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      {/* Precision architectural 'A' apex with inner sovereign nexus */}
      <path d="M12 2.5L3.5 21h4.2l1.9-4.8h4.8l1.9 4.8h4.2L12 2.5z" />
      <circle cx="12" cy="11.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
