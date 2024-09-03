import React from 'react';

function Input({ label, sublabel, type, ...props }) {
  return (
    <label>
      {label} <span>{sublabel && sublabel}</span>
      <input type={type} {...props} />
    </label>
  );
}

export default Input;
