import React from "react";
import Logo from "./images/Logo.svg"
import Profile from "./images/Profile.svg"

import './homepage.styles.scss'

const Homepage = () => {

    return (
        <>
        <header className="header">
            <div className="container">
                <div className="headerLogo">
                    <a href="#"><img className="headerLogoPicture" src={Logo}></img></a>
                    <a href="#" className="headerLogoText"><b >ECO</b>ntinuum</a>
                </div>
                <div className="headerButtons">   
                    <div className="headerButton"><a href="#" c> Tutorial </a></div>
                    <div className="headerButton"><a href="#" className="middleButton"> Select activities </a></div>
                    <div className="headerButton"><a href="#"> Rating </a></div>
                </div>
                <div className="headerSignUpButton">
                    <a href="#" className="signUpText"> Sing up </a>
                    <a href="#"><img className="signUpPicture" src={Profile}></img></a>
                </div>
            </div>
        </header>
        </>
    )
}

export default Homepage