import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({ to, children, className }) => {
  return (
    <Link to={to} className={`text-sm text-[#B17457] hover:underline ${className}`}>
      {children}
    </Link>
  );
};

export default LinkButton;