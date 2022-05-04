import React, {useState} from "react";

import {Link} from "react-router-dom";

import './sign-up.styles.scss'
import FormInput from "../../components/FormInput/FormInput";
import Password from "../../components/Password/Password";
import CustomButton from "../../components/CustomButton/CustomButton";

const SignUp = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        day: '',
        month: '',
        year: '',
        password: '',
        confirmPassword: '',
    })
    const handleChange = event => {
        const {name, value} = event.target
        setUser({...user, [name]: value})
    }

    return (
        <div className='container'>
            <div className='signup'>
                <h2 className='signup__title'>Sign up</h2>
                <span className='signup__subtitle'>Create your own story</span>
                <form className='signup-form'>
                    <div className='signup-form__flex'>
                        <FormInput
                            type='text'
                            name={'firstName'}
                            value={user.firstName}
                            onChange={handleChange}
                            label={'First name'}
                            required/>
                        <FormInput
                            type='text'
                            name={'lastName'}
                            value={user.lastName}
                            onChange={handleChange}
                            label={'Last name'}
                            required/>
                    </div>
                    <FormInput
                        type='email'
                        name={'email'}
                        value={user.email}
                        onChange={handleChange}
                        label={'Email address'}
                        required
                    />
                    <div className='signup-form__flex'>
                        <FormInput
                            type='number'
                            name={'day'}
                            value={user.day}
                            onChange={handleChange}
                            label={'Day'}
                            required/>
                        <FormInput
                            type='number'
                            name={'month'}
                            value={user.month}
                            onChange={handleChange}
                            label={'Month'}
                            required/>
                        <FormInput
                            type='number'
                            name={'year'}
                            value={user.year}
                            onChange={handleChange}
                            label={'Year'}
                            required/>
                    </div>
                    <div className='signup-form__flex'>
                        <Password
                            name={'password'}
                            value={user.password}
                            onChange={handleChange}
                            label={'Password'}
                            required
                        />
                        <Password
                            name={'confirmPassword'}
                            value={user.confirmPassword}
                            onChange={handleChange}
                            label={'Repeat password'}
                            required
                        />
                    </div>
                    <div className={'signup-form__buttons signup-form__flex'}>
                        <CustomButton type='submit'>Sign up</CustomButton>
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

export default SignUp