import React from "react";

const ProfileCustomButton = ({ label, customClass, ...otherProps }) => {
    return (
        <button
            className={"edit-btn " + (customClass ? customClass : "edit-btn-white")}
            {...otherProps}
        >
            {label}
        </button>
    );
};

export default ProfileCustomButton;