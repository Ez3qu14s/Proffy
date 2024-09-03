import React from 'react';

function Textarea({ label, sublabel }) {
  return (
    <label>
      {label} <span>{sublabel && sublabel}</span>
      <textarea rows="5" name="" id=""></textarea>
    </label>
  );
}

export default Textarea;
