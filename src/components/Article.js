import React from "react";

import * as TextCustom from "./Text";

export default function Article(props) {
  return (
    <div
      style={{
        marginTop: 10,
        marginBottom: 10,
        borderBottom: "2px solid #ccc",
      }}
    >
      <TextCustom.TextTitle {...props}>{props.title}</TextCustom.TextTitle>
      <br />
      <TextCustom.TextItalic {...props}>{props.writer}</TextCustom.TextItalic>
      <div style={{ height: 20 }} />
      <TextCustom.CustomTextBold {...props}>
        {props.date}
      </TextCustom.CustomTextBold>
      <br />
      <br />
      <TextCustom.CustomTextParagraph {...props}>
        {props.content}
      </TextCustom.CustomTextParagraph>
    </div>
  );
}
