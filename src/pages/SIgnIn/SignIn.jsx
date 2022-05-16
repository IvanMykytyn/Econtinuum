import React, {useEffect, useState} from "react";

import './sign-in.styles.scss'
import FormInput from "../../components/FormInput/FormInput";
import Password from "../../components/Password/Password";
import CustomButton from "../../components/CustomButton/CustomButton";

import {Link, useNavigate} from "react-router-dom";
import TitleFormField from "../../components/_common/TitleFormField/TitleFormField";
import SubtitleFormField from "../../components/_common/SubtitleFormField/SubtitleFormField";
import {validateInput} from "../../utils/SignIn/validateInput";
import {authFailureReset, userSignInRequest} from "../../redux/auth/auth.actions";
import {connect} from "react-redux";

const SignIn = ({signInRequest, resetErrorMessage, auth: {isLoading, errorMessage}}) => {
    const navigate = useNavigate()
    useEffect(() => () => {
        if (errorMessage) {
            resetErrorMessage()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const [user, setUser] = useState({
        email: '',
        password: '',
    })
    const [errors, setErrors] = useState({})
    const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value})
        setErrors({...errors, [name]: ''})
    }
    const isValid = () => {
        const {errors, isValid} = validateInput(user)
        if (!isValid) {
            setErrors(errors)
        }
        return isValid
    }
    const handleSubmit = async event => {
        event.preventDefault()
        if (isValid()) {
            const result = await signInRequest(user)
            if (result) {
                setUser({
                    email: '',
                    password: '',
                })
                setErrors({})
                navigate('/')
            }
        }
    }
    return (
        <div className="sign-in-wrapper">
            <div className="sign-form">
                <TitleFormField>Sign In</TitleFormField>
                <SubtitleFormField>Sign in to your account</SubtitleFormField>
                <form onSubmit={handleSubmit}>
                    <FormInput
                        name={'email'}
                        type='text'
                        label={'Email address'}
                        value={user.email}
                        onChange={handleChange}
                        error={errors.email}
                    />
                    <Password
                        name={'password'}
                        label={'Password'}
                        value={user.password}
                        onChange={handleChange}
                        error={errors.password ? errors.password : errorMessage}
                    />

                    <div className="sign-form__link">
                        Forgot your <Link className="sign-form__link-forget" to={'/forget'}>password?</Link>
                    </div>

                    <CustomButton disabled={isLoading} type='submit'>Sign in</CustomButton>
                    <p className="sign-in__text-or">or</p>
                    <CustomButton googleButton>Sign in with google</CustomButton>
                </form>

                <div className="sign-form__link">
                    Don't have an account? <Link className="sign-form__link-not" to='/sign-up'>Sign up</Link>
                </div>
            </div>

        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    signInRequest: data => dispatch(userSignInRequest(data)),
    resetErrorMessage: () => dispatch(authFailureReset())
})
const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)