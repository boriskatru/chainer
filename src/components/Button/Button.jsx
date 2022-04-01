
import React from "react";
import "./Button.scss";

const Button = ({ label, callback, outline, padding }) => {
  return (
    <button
      style={padding ? { padding } : {}}
      onClick={callback}
      className={`btn ${outline ? "btn--outline" : "btn--primary"}`}
    >
      {label}
    </button>
  );
};

export default Button;
