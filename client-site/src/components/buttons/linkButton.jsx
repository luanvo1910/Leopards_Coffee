import React from "react";

const LinkButton = ({ type = "button", onClick, children, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-secondary hover:underline text-sm ${className}`}
    >
      {children}
    </button>
  );
};

export default LinkButton;
