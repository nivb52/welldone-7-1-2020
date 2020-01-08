import React from "react";

export default function Input({ onEnter, placeholder, handleInput }) {

  const handleEnter = e => {
    if (e.keyCode === 13) return onEnter();
  };
  const handleChange = e => {
    const { value } = e.target;
    handleInput(value);
  };

  return (
    <input
      autoFocus
      onKeyDown={handleEnter}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}
