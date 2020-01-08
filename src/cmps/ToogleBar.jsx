import React from "react";
import "../style/index.css"

export default function ToogleBar({ handleClick, children }) {
  return (
    <div className="toggle-bar">
      <button className="btn" onClick={() => handleClick(true)}> {children[0]} </button>
      <button className="btn"onClick={() => handleClick(false)} > {children[1]} </button>
    </div>
  );
}
