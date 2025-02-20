import React from 'react';

const Button = ({ type, onClick, children, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex w-full justify-center rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold text-primary shadow-md hover:bg-background focus:outline-none focus:ring-2 focus:ring-primary ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
