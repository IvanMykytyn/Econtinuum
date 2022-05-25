import React from "react";

import "./landingPage.styles.scss";

import { BsCheck2 } from "react-icons/bs";

const InstructionBox = ({ title, text }) => {
  return (
    <div className="instruction-box">
      <div className="div-circle">
        <BsCheck2 size={30} />
      </div>
      <div>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default InstructionBox;
