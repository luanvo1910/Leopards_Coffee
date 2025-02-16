import React from "react";

const HomeLinkButton = ({ type = "button", onClick, children, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-[#B17457] text-xl font-bold hover:underline text-sm ${className}`}
    >
      {children}
    </button>
  );
};

export default HomeLinkButton;