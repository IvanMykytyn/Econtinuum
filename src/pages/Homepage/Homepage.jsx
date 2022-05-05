import React from "react";

import './homepage.styles.scss'

const Homepage = () => {

    return (
        <>
        <header class="header">
            <div class="container">
                <div class="headerLogo">
                    <a href="#"><img class="headerLogoPicture" src="Logo.svg"></img></a>
                    <a href="#" class="header_logo_text"><b >ECO</b>ntinuum</a>
                </div>
                <div class="headerButtons">   
                    <div class="headerButton"><a href="#" c> Tutorial </a></div>
                    <div class="headerButton"><a href="#" class="middleButton"> Select activities </a></div>
                    <div class="headerButton"><a href="#"> Rating </a></div>
                </div>
                <div class="headerSignUpButton">
                    <a href="#" class="signUpText"> Sing up </a>
                    <a href="#"><img class="signUpPicture" src="Profile.svg"></img></a>
                </div>
            </div>
        </header>
        </>
    )
}

export default Homepage