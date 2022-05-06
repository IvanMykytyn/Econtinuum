import axios from "axios";
import {AuthActionTypes} from "./auth.types";

export const signUpRequestStart = () => ({
    type: AuthActionTypes.SIGN_UP_REQUEST_START
})

export const signUpRequestSuccess = (data) => ({
    type: AuthActionTypes.SIGN_UP_REQUEST_SUCCESS,
    payload: data,
})

export const signUpRequestFailure = (errorsObject) => ({
    type: AuthActionTypes.SIGN_UP_REQUEST_FAILURE,
    payload: errorsObject.message
})

export function userSignUpRequest(userData) {
    return async dispatch => {
        dispatch(signUpRequestStart())
        await axios.post('https://eco-project-back-end.herokuapp.com/register', userData)
            .then(data => dispatch(signUpRequestSuccess(data.data)))
            .catch(errorObject => {
                dispatch(signUpRequestFailure(errorObject))
                return false
            })
        return true
    }
}