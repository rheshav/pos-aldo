import React from "react";

import "../App.css";

function TextTitle(props) {
  return <h1 style={{ color: props.customColor }}>{props.children}</h1>;
}

function TextParagraph(props) {
  return <p style={{ color: props.customColor }}>{props.children}</p>;
}

function TextBold(props) {
  return <strong style={{ color: props.customColor }}>{props.children}</strong>;
}

function TextItalic(props) {
  console.log("props TextItalic", props);

  return <em style={{ color: props.customColor }}>{props.children}</em>;
}

export {
  TextTitle,
  TextParagraph as CustomTextParagraph,
  TextBold as CustomTextBold,
  TextItalic,
};
