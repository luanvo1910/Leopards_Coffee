import React from 'react';

const Button = ({ type, onClick, children, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex w-full justify-center rounded-md bg-[#B17457] px-3 py-1.5 text-sm font-semibold text-[#4A4947] shadow-md hover:bg-[#FAF7F0] focus:outline-none focus:ring-2 focus:ring-[#4A4947] ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;