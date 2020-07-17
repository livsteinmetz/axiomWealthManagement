import React from "react";
import "./Masthead.scss";

export default function Masthead({ img, text, alignRight }) {
  const className = alignRight ? "alignRight" : null;
  return (
    <div className="Masthead">
      <img src={img} alt={text} />
      <h1 className={className}>{text}</h1>
    </div>
  );
}
