import React from "react";

import './sign-in.styles.scss'
import FormInput from "../../components/FormInput/FormInput";
import Password from "../../components/Password/Password";
import CustomButton from "../../components/CustomButton/CustomButton";
import {Link} from "react-router-dom";

const SignIn = () => {

    return (
        <div className="wrapper">
            <div className="form sign-in">
                <h2 className="title">Sign In</h2>
                <p className="description">Sign in to your account</p>
                <form action="#">
                    <FormInput
                        type='email'
                        label={'Email address'}
                        required
                    />
                    <Password
                        label={'Password'}
                        required
                    />
                    <div className="forget-the-password">
                        Forgot your <Link className="form-link" to={'/forget'}>password?</Link>
                    </div>

                    <CustomButton type='submit'>Sign in</CustomButton>
                    <p className="or-text">or</p>
                    <CustomButton googleButton>Sign in with google</CustomButton>
                </form>

                <div className="not-sign-up">
                    Don't have an account? <Link className="sign-up-link" to='/sign-up'>Sign up</Link>
                </div>
            </div>
        </div>


    )
}

export default SignIn