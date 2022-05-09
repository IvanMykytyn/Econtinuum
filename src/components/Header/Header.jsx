import React from "react";

import './header.styles.scss'
import {Link, NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {userLogoutRequest} from "../../redux/auth/auth.actions";
import Logo from "../_common/Logo/Logo";

const Header = ({user,userLogout}) => {
    return (
        <header className="header">
            <div className='header-content'>
                <Link to='/' className="header-logo">
                    <Logo/>
                </Link>
                <nav className="header-buttons">
                    <ul className='header-links'>
                        <li className="header-buttons__button"><NavLink to='/tutorial'>Tutorial</NavLink></li>
                        <li className="header-buttons__button"><NavLink to='/activities'>Activities</NavLink></li>
                        <li className="header-buttons__button"><NavLink to='/rating'>Rating</NavLink></li>
                    </ul>
                </nav>
            </div>
            <div className="header-auth">
                {user
                    ?
                    <>
                        <NavLink to='/profile' className="header-auth__signup">Profile</NavLink>
                        <div className="header-auth__signin" onClick={userLogout}>Log out</div>
                    </>
                    :
                    <>
                        <NavLink to='/sign-up' className="header-auth__signup">Sign up</NavLink>
                        <NavLink to='/sign-in' className="header-auth__signin">Sign in</NavLink>
                    </>
                }
            </div>
        </header>
    )
}

const mapStateToProps = state => ({
    user: state.auth.userObject
})
const mapDispatchToProps = dispatch => ({
    userLogout: () => dispatch(userLogoutRequest())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)