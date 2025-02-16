import React from 'react';

const HomeButton = ({ type, onClick, children, className, icon }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center justify-center gap-3 w-full h-full rounded-md bg-[#D8D2C2] px-6 py-10 text-lg font-semibold text-[#B17457] shadow-lg hover:bg-[#4A4947] hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-[#4A4947] ${className}`}
    >
      {icon && (
        <img
          src={icon}
          alt="icon"
          className="h-6 w-6 filter invert sepia saturate-1000 hue-rotate-[330deg] brightness-90 contrast-100"
          style={{ filter: 'brightness(0) saturate(100%) invert(57%) sepia(5%) saturate(4275%) hue-rotate(335deg) brightness(86%) contrast(80%)' }}
        />
      )}
      {children}
    </button>
  );
};

export default HomeButton;