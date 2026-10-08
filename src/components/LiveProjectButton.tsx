import React from 'react';

interface LiveProjectButtonProps {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  onClick,
  className = '',
  children = 'Live Project',
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest transition-all duration-200 hover:bg-[#D7E2EA]/10 active:scale-95 cursor-pointer whitespace-nowrap px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base ${className}`}
    >
      <span>{children}</span>
    </button>
  );
};

export default LiveProjectButton;
