import axios from "axios";
import { AuthActionTypes } from "./auth.types";

export const authRequestStart = () => ({
  type: AuthActionTypes.USER_AUTH_REQUEST_START,
});
export const authFailureReset = () => ({
  type: AuthActionTypes.USER_AUTH_FAILURE_RESET,
});

export const authRequestSuccess = (data) => ({
  type: AuthActionTypes.USER_AUTH_REQUEST_SUCCESS,
  payload: data,
});

export const authRequestFailure = (errorsObject) => ({
  type: AuthActionTypes.USER_AUTH_REQUEST_FAILURE,
  payload: errorsObject.message,
});

export function userSignUpRequest(userData) {
  return async (dispatch) => {
    let result = false;
    dispatch(authRequestStart());
    await axios
      .post("https://eco-project-back-end.herokuapp.com/register", userData)
      .then((data) => {
        result = true;
        localStorage.setItem("user", JSON.stringify(data.data));
        dispatch(authRequestSuccess(data.data));
      })
      .catch((errorObject) => {
        dispatch(authRequestFailure(errorObject.response.data));
        result = false;
      });
    return result;
  };
}

export function userSignRequestViaGoogle(googleData) {
  return async (dispatch) => {
    let result = false;
    dispatch(authRequestStart());

    await axios
      // write data to db
      .post("https://eco-project-back-end.herokuapp.com/auth/google", {
        token: googleData.tokenId,
      })
      .then((userData) => {
        result = true;

        // get data back
        const data = userData.data;

        const user = {
          id: data._id,
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          token: data.token,
        };

        localStorage.setItem("user", JSON.stringify(user));
        dispatch(authRequestSuccess(user));
      })
      .catch((errorObject) => {
        dispatch(authRequestFailure(errorObject.response.data));
        result = false;
      });
    return result;
  };
}

export function userSignInRequest(userData) {
  return async (dispatch) => {
    let result = true;
    dispatch(authRequestStart());
    await axios
      .post("https://eco-project-back-end.herokuapp.com/login", userData)
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data.data));
        dispatch(authRequestSuccess(data.data));
      })
      .catch((errorObject) => {
        result = false;
        dispatch(authRequestFailure(errorObject.response.data));
      });
    return result;
  };
}

export const userLogout = () => ({
  type: AuthActionTypes.USER_AUTH_LOGOUT,
});

export const userLogoutRequest = () => (dispatch) => {
  dispatch(userLogout());
  localStorage.removeItem("user");
};
