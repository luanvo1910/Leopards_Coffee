import React from 'react';

const Input = ({ id, name, type, placeholder, required, autoComplete, className }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-secondary">
        {placeholder}
      </label>
      <div className="mt-2">
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          className={`block w-full rounded-md bg-secondary text-primary px-3 py-1.5 text-base placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-primary ${className}`}
        />
      </div>
    </div>
  );
};

export default Input;
