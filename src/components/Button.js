import React from "react";

import "../App.css";

function Button(props) {
  const label = "Button Ald";
  return (
    <button id="button1" className="buttonCustom">
      {label}
    </button>
  );
}

export default Button;
