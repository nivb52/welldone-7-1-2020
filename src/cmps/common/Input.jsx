import React, { useState } from "react";

export default function Input({
  label = "name",
  objectKey = '',
  placeholder = "enter here",
  onEnter,
  handleInput,
  handleBlur,
  classInput = "",
  defaultValue = ""
}) {
  const [userInput, setUserInput] = useState(defaultValue);
  const [isValid, setIsValide] = useState(true);
  const handleEnter = e => {
    if (e.keyCode === 13) return onEnter();
  };
  const handleChange = e => {
    const { value } = e.target;
    if (!value || !value.trim()) return setIsValide(false);
    else {
      setIsValide(true);
      setUserInput(value);
      handleInput(key,userInput)
    }
  };

  const key = objectKey || label

  return (
    <div className="block">
      <label className="block">{label}</label>
      <input
        className={classInput}
        onKeyDown={handleEnter}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={() => handleBlur(key, userInput)}
      />
      {isValid ? "✅" : "❌"}
    </div>
  );
}
