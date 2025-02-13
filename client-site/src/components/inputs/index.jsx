import React from 'react';

const Input = ({ id, name, type, placeholder, required, autoComplete, className }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-[#B17457]">
        {placeholder}
      </label>
      <div className="mt-2">
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          className={`block w-full rounded-md bg-[#B17457] text-[#4A4947] px-3 py-1.5 text-base placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4A4947] ${className}`}
        />
      </div>
    </div>
  );
};

export default Input;