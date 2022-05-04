import React from "react";

import './sign-in.styles.scss'

const SignIn = () => {

    return (
       <div className="wrapper">
        <div className="container">
            <div className="forms">
                <div className="form sign-in">
                    <h2 className="title">Sign In</h2>
                    <p className="description">Sign in to your account</p>
                    <form action="#">
                        <div className="input-field">
                             <input type="text" placeholder="Email address" required/>
                        </div>
                        <div className="input-field">
                             <input type="password" placeholder="Password" required/>
                             {/* <i className="uil uil-lock icon"></i>
                             <i className="uil uil-slash showHidePw icon"></i> */}
                        </div>

                        <div className="forget-the-password">
                            <a href="#" className="forget">Forgot your <span className="green_text">password?</span></a>
                        </div>
                        
                        <button id="sign-in">Sign in</button>

                        <p className="or-text">or</p>

                        <button id="google">Sign in with google</button>
                        
                      
                    </form>
                    
                    <div className="not-sign-up">
                        <span className="text">Don't have an account? 
                             <a href="#" className="sign-up-link">Sign up</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
       </div> 
        
        
    )
}

export default SignIn