import {ReactComponent as Logo} from "../../pages/Homepage/images/Logo.svg";
import React from "react";

import './header.styles.scss'
import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
                <Link to='/' className="header-logo">
                    <Logo className="header-logo__picture"/>
                    <span className="header-logo__text"><b>ECO</b>ntinuum</span>
                </Link>
            <nav className="header-buttons">
                <ul className='header-links'>
                    <li className="header-buttons__button"><NavLink to='/tutorial'>TUTORIAL</NavLink></li>
                    <li className="header-buttons__button"><NavLink to='/activities'>SELECT ACTIVITIES</NavLink></li>
                    <li className="header-buttons__button"><NavLink to='/rating'>RATING</NavLink></li>
                </ul>
            </nav>
            <div className="header-signup-button">
                <NavLink to='/sign-up' className="header-signup-button__text">SIGN UP</NavLink>
                {/*<a href="#"><Profile className="header-signup-button__picture"/></a>*/}
            </div>
        </header>
    )
}

export default Header