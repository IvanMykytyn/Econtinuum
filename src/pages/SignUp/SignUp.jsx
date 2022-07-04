import React, { useEffect, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import './sign-up.styles.scss'
import FormInput from '../../components/FormInput/FormInput'
import Password from '../../components/Password/Password'
import CustomButton from '../../components/CustomButton/CustomButton'
import {
  authFailureReset,
  userSignUpRequest,
  userSignRequestViaGoogle,
} from '../../redux/auth/auth.actions'
import { connect } from 'react-redux'
import { validateInput } from '../../utils/SignUp/validateInput'
import TitleFormField from '../../components/_common/TitleFormField/TitleFormField'
import SubtitleFormField from '../../components/_common/SubtitleFormField/SubtitleFormField'
import { GoogleLogin } from 'react-google-login'

const SignUp = ({
  signUpRequest,
  resetErrorMessage,
  signRequestViaGoogle,

  auth: { isLoading, errorMessage },
}) => {
  useEffect(
    () => () => {
      if (errorMessage) {
        resetErrorMessage()
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    []
  )
  const navigate = useNavigate()
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

  const handleChange = (event) => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
    if (name === 'email') {
      resetErrorMessage()
    }
    setErrors({ ...errors, [name]: '' })
  }

  const isValid = () => {
    const { errors, isValid } = validateInput(user)
    if (!isValid) {
      setErrors(errors)
    }
    return isValid
  }

  const handleOAuth = async (googleData) => {
    try {
      const result = await signRequestViaGoogle(googleData)
      if (result) {
        setErrors({})
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (isValid()) {
      const send_user = {
        first_name: user.first_name,
        last_name: user.last_name,
        date_of_birth: `${user.year}-${user.month}-${user.day}`,
        email: user.email,
        password: user.password.toString(),
      }
      const result = await signUpRequest(send_user)

      if (result) {
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
        navigate('/')
      }
    }
  }
  return (
    <div className="signup-container">
      <div className="signup">
        <TitleFormField>Sign Up</TitleFormField>
        <SubtitleFormField>Create your own story</SubtitleFormField>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="signup-form__flex">
            <FormInput
              type="text"
              name={'first_name'}
              value={user.first_name}
              onChange={handleChange}
              label={'First name'}
              error={errors.first_name}
            />
            <FormInput
              type="text"
              name={'last_name'}
              value={user.last_name}
              onChange={handleChange}
              label={'Last name'}
              error={errors.last_name}
            />
          </div>
          <FormInput
            type="text"
            name={'email'}
            value={user.email}
            onChange={handleChange}
            label={'Email address'}
            error={errors.email ? errors.email : errorMessage}
          />
          <div className="signup-form__flex">
            <FormInput
              type="number"
              name={'day'}
              value={user.day}
              onChange={handleChange}
              label={'Day'}
              error={errors.day}
              min={1}
              max={31}
            />
            <FormInput
              type="number"
              name={'month'}
              value={user.month}
              onChange={handleChange}
              label={'Month'}
              error={errors.month}
              min={1}
              max={12}
            />
            <FormInput
              type="number"
              name={'year'}
              value={user.year}
              onChange={handleChange}
              label={'Year'}
              error={errors.year}
              min={1960}
              max={new Date().getFullYear()}
            />
          </div>
          <div className="signup-form__flex">
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
            <CustomButton disabled={isLoading} type="submit">
              Sign up
            </CustomButton>
            <div className="signup-form__text">or</div>
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              render={(renderProps) => (
                <CustomButton
                  googleButton
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  Sign up with Google
                </CustomButton>
              )}
              onSuccess={handleOAuth}
              onFailure={handleOAuth}
            />
          </div>
        </form>
        <p className="signup__description">
          Already have an account?{' '}
          <Link className="signup__link" to={'/sign-in'}>
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  signUpRequest: (user) => dispatch(userSignUpRequest(user)),
  signRequestViaGoogle: (user) => dispatch(userSignRequestViaGoogle(user)),
  resetErrorMessage: () => dispatch(authFailureReset()),
})
const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
