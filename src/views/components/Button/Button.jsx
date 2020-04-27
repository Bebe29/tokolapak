import React from "react";
import "./Button.css";

// const ButtonUI = props => {
//   let buttonClass = `custom-btn custom-btn-${props.type}`;
//   return <div className={buttonClass}>Button</div>;
// };

const ButtonUI = ({ type = "contained", children }) => {
  // if (type == "outline") {
  //   return <div className="custom-btn custom-btn-outline">{children}</div>;
  // } else if (type == "contained") {
  //   return <div className="custom-btn custom-btn-contained">{children}</div>;
  // } else if (type == "textual") {
  //   return <div className="custom-btn custom-btn-texttual">{children}</div>;
  // }

  // nama props => type
  // button types
  // - contained
  // - outline
  // - textual
  return <div className={`custom-btn custom-btn-${type}`}>{children}</div>;
};

export default ButtonUI;
