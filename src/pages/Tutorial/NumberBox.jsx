import React from "react";

const NumberBox = ({ icon, count, text }) => {
  return (
    <div className="eco-in-numbers-box">
      <img src={icon}  alt={'icon'}/>
      <h5>{count}</h5>
      <p>{text}</p>
    </div>
  );
};

export default NumberBox;
