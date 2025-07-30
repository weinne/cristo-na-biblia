import React from 'react';

interface ChristBibleIconProps {
  className?: string;
  size?: number;
}

const ChristBibleIcon = ({ className = "", size = 32 }: ChristBibleIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Open Book */}
      <path
        d="M4 8C4 6.89543 4.89543 6 6 6H14V24H6C4.89543 24 4 23.1046 4 22V8Z"
        fill="currentColor"
        fillOpacity="0.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M18 6H26C27.1046 6 28 6.89543 28 8V22C28 23.1046 27.1046 24 26 24H18V6Z"
        fill="currentColor"
        fillOpacity="0.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M14 6V24C14 24 15 23 16 23C17 23 18 24 18 24V6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Cross */}
      <path
        d="M16 2V10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 6H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      {/* Small decorative elements */}
      <circle
        cx="8"
        cy="12"
        r="0.5"
        fill="currentColor"
        fillOpacity="0.6"
      />
      <circle
        cx="24"
        cy="12"
        r="0.5"
        fill="currentColor"
        fillOpacity="0.6"
      />
      <circle
        cx="8"
        cy="16"
        r="0.5"
        fill="currentColor"
        fillOpacity="0.6"
      />
      <circle
        cx="24"
        cy="16"
        r="0.5"
        fill="currentColor"
        fillOpacity="0.6"
      />
    </svg>
  );
};

export default ChristBibleIcon;