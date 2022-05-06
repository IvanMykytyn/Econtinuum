import React, {useState} from "react";

import {Link} from "react-router-dom";
import './sign-up.styles.scss'
import FormInput from "../../components/FormInput/FormInput";
import Password from "../../components/Password/Password";
import CustomButton from "../../components/CustomButton/CustomButton";
import {userSignUpRequest} from "../../redux/auth/auth.actions";
import {connect} from "react-redux";
import {validateInput} from "../../utils/SignUp/validateInput";

const SignUp = ({signUpRequest, auth: {isLoading, userObject, errorMessage}}) => {
    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        email: '',
        day: '',
        month: '',
        year: '',
        password: '',
        confirmPassword: '',
    })
    const [errors, setErrors] = useState({})

    const handleChange = event => {
        const {name, value} = event.target
        setUser({...user, [name]: value})
    }

    const isValid = () => {
        const {errors, isValid} = validateInput(user)
        if (!isValid) {
            setErrors(errors)
        }
        return isValid
    }

    const handleSubmit = event => {
        event.preventDefault()

        if (isValid()) {
            const send_user = {
                first_name: user.first_name,
                last_name: user.last_name,
                date_of_birth: `${user.year}-${user.month}-${user.day}`,
                email: user.email,
                password: user.password.toString(),
            }
            const result = signUpRequest(send_user)
            if (!result) {
                console.log(errorMessage)
                return
            }
            localStorage.setItem('user', JSON.stringify(userObject))
            setUser({
                first_name: '',
                last_name: '',
                email: '',
                day: '',
                month: '',
                year: '',
                password: '',
                confirmPassword: '',
            })
            setErrors({})
        }
    }
    return (
        <div className='container'>
            <div className='signup'>
                <h2 className='signup__title'>Sign up</h2>
                <span className='signup__subtitle'>Create your own story</span>
                <form className='signup-form' onSubmit={handleSubmit}>
                    <div className='signup-form__flex'>
                        <FormInput
                            type='text'
                            name={'first_name'}
                            value={user.first_name}
                            onChange={handleChange}
                            label={'First name'}
                            error={errors.first_name}
                        />
                        <FormInput
                            type='text'
                            name={'last_name'}
                            value={user.last_name}
                            onChange={handleChange}
                            label={'Last name'}
                            error={errors.last_name}
                        />
                    </div>
                    <FormInput
                        type='text'
                        name={'email'}
                        value={user.email}
                        onChange={handleChange}
                        label={'Email address'}
                        error={errors.email}
                    />
                    <div className='signup-form__flex'>
                        <FormInput
                            type='number'
                            name={'day'}
                            value={user.day}
                            onChange={handleChange}
                            label={'Day'}
                            error={errors.day}
                        />
                        <FormInput
                            type='number'
                            name={'month'}
                            value={user.month}
                            onChange={handleChange}
                            label={'Month'}
                            error={errors.month}
                        />
                        <FormInput
                            type='number'
                            name={'year'}
                            value={user.year}
                            onChange={handleChange}
                            label={'Year'}
                            error={errors.year}
                        />
                    </div>
                    <div className='signup-form__flex'>
                        <Password
                            name={'password'}
                            value={user.password}
                            onChange={handleChange}
                            label={'Password'}
                            error={errors.password}
                        />
                        <Password
                            name={'confirmPassword'}
                            value={user.confirmPassword}
                            onChange={handleChange}
                            label={'Repeat password'}
                            error={errors.confirmPassword}

                        />
                    </div>
                    <div className={'signup-form__buttons signup-form__flex'}>
                        <CustomButton disabled={isLoading} type='submit'>Sign up</CustomButton>
                        <div className='signup-form__text'>or</div>
                        <CustomButton googleButton>Sign up with Google</CustomButton>
                    </div>
                </form>
                <p className='signup__description'>
                    Already have an account? <Link className='signup__link' to={'/sign-in'}>Log in</Link>
                </p>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    signUpRequest: user => dispatch(userSignUpRequest(user))
})
const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)