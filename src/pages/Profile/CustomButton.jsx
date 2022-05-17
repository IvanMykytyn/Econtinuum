import "./editProfile.styles.scss";

import React from "react";

const CustomButton = ({ label, customClass, ...otherProps }) => {
  return (
    <button
      className={"edit-btn " + (customClass ? customClass : "edit-btn-white")}
      {...otherProps}
    >
      {label}
    </button>
  );
};

export default CustomButton;
