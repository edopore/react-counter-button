import React from "react";
import "../styles/Button.css";

function Button({ text, isClickButton, mannageClick }) {
  return (
    <button
      className={isClickButton ? "Button-click" : "Button-reset"}
      onClick={mannageClick}
    >
      {text}
    </button>
  );
}

export default Button;
