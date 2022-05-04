import React from "react";

import './homepage.styles.scss'

const Homepage = () => {

    return (
        <>
        <div className="header">
            <div className="header_section">
                <div className="header_item headerLogo">
                    Eco project
                </div>
                <div className="header_section">
                    <div className="header_item headerButton"><a href="#"> Tutorial </a></div>
                    <div className="header_item headerButton"><a href="#"> Select activities </a></div>
                    <div className="header_item headerButton"><a href="#"> Rating </a></div>
                </div>
            </div>
            <div className="header_section">
                <div className="header_item headerButton"><a href="#"> Sing up </a></div>
            </div>
        </div>
        </>
    )
}

export default Homepage