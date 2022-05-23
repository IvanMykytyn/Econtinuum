import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import "./sign-up.styles.scss";
import FormInput from "../../components/FormInput/FormInput";
import Password from "../../components/Password/Password";
import CustomButton from "../../components/CustomButton/CustomButton";
import {
  authFailureReset,
  userSignUpRequest,
  userSignUpRequestViaGoogle,
} from "../../redux/auth/auth.actions";
import { connect } from "react-redux";
import { validateInput } from "../../utils/SignUp/validateInput";
import TitleFormField from "../../components/_common/TitleFormField/TitleFormField";
import SubtitleFormField from "../../components/_common/SubtitleFormField/SubtitleFormField";
import axios from "axios";
import { GoogleLogin } from "react-google-login";

const SignUp = ({
  signUpRequest,
  signUpRequestViaGoogle,
  resetErrorMessage,
  auth: { isLoading, errorMessage },
}) => {
  useEffect(
    () => () => {
      if (errorMessage) {
        resetErrorMessage();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    []
  );
  const navigate = useNavigate();
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    day: "",
    month: "",
    year: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    if (name === "email") {
      resetErrorMessage();
    }
    setErrors({ ...errors, [name]: "" });
  };

  const handleOAuth = async (googleData) => {
    try {
      // write data to db
      // https://eco-project-back-end.herokuapp.com/auth/google
      const res = await axios.post("http://localhost:3000/auth/google", {
        token: googleData.tokenId,
      });
      // get data back
      const data = res.data;

      const user = {
        id: data._id,
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        token: data.token,
      };

      // doesn't work
      const result = await signUpRequestViaGoogle(user);

      console.log(result);
      if (result) {
        setErrors({});
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const isValid = () => {
    const { errors, isValid } = validateInput(user);
    if (!isValid) {
      setErrors(errors);
    }
    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isValid()) {
      const send_user = {
        first_name: user.first_name,
        last_name: user.last_name,
        date_of_birth: `${user.year}-${user.month}-${user.day}`,
        email: user.email,
        password: user.password.toString(),
      };

      const result = await signUpRequest(send_user);

      if (result) {
        setUser({
          first_name: "",
          last_name: "",
          email: "",
          day: "",
          month: "",
          year: "",
          password: "",
          confirmPassword: "",
        });
        setErrors({});
        navigate("/");
      }
    }
  };
  return (
    <div className="signup-container">
      <div className="signup">
        <TitleFormField>Sign Up</TitleFormField>
        <SubtitleFormField>Create your own story</SubtitleFormField>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="signup-form__flex">
            <FormInput
              type="text"
              name={"first_name"}
              value={user.first_name}
              onChange={handleChange}
              label={"First name"}
              error={errors.first_name}
            />
            <FormInput
              type="text"
              name={"last_name"}
              value={user.last_name}
              onChange={handleChange}
              label={"Last name"}
              error={errors.last_name}
            />
          </div>
          <FormInput
            type="text"
            name={"email"}
            value={user.email}
            onChange={handleChange}
            label={"Email address"}
            error={errors.email ? errors.email : errorMessage}
          />
          <div className="signup-form__flex">
            <FormInput
              type="number"
              name={"day"}
              value={user.day}
              onChange={handleChange}
              label={"Day"}
              error={errors.day}
              min={1}
              max={31}
            />
            <FormInput
              type="number"
              name={"month"}
              value={user.month}
              onChange={handleChange}
              label={"Month"}
              error={errors.month}
              min={1}
              max={12}
            />
            <FormInput
              type="number"
              name={"year"}
              value={user.year}
              onChange={handleChange}
              label={"Year"}
              error={errors.year}
              min={1950}
              max={new Date().getFullYear()}
            />
          </div>
          <div className="signup-form__flex">
            <Password
              name={"password"}
              value={user.password}
              onChange={handleChange}
              label={"Password"}
              error={errors.password}
            />
            <Password
              name={"confirmPassword"}
              value={user.confirmPassword}
              onChange={handleChange}
              label={"Repeat password"}
              error={errors.confirmPassword}
            />
          </div>
          <div className={"signup-form__buttons signup-form__flex"}>
            <CustomButton disabled={isLoading} type="submit">
              Sign up
            </CustomButton>
            <div className="signup-form__text">or</div>
            <GoogleLogin
              clientId={
                "1082923325369-fl0l9enjil6fbp6o8bh73e1s7vtn0l5p.apps.googleusercontent.com"
              }
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
          Already have an account?
          <Link className="signup__link" to={"/sign-in"}>
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpRequest: (user) => dispatch(userSignUpRequest(user)),
  SignUpRequestViaGoogle: (user) => dispatch(userSignUpRequestViaGoogle(user)),
  resetErrorMessage: () => dispatch(authFailureReset()),
});

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
