import axios from "axios";
import {AuthActionTypes} from "./auth.types";

export const authRequestStart = () => ({
    type: AuthActionTypes.USER_AUTH_REQUEST_START
})

export const authRequestSuccess = (data) => ({
    type: AuthActionTypes.USER_AUTH_REQUEST_SUCCESS,
    payload: data,
})

export const authRequestFailure = (errorsObject) => ({
    type: AuthActionTypes.USER_AUTH_REQUEST_FAILURE,
    payload: errorsObject.message
})

export function userSignUpRequest(userData) {
    return  dispatch => {
        let result = true
        dispatch(authRequestStart())
         axios.post('https://eco-project-back-end.herokuapp.com/register', userData)
            .then(data => {
                localStorage.setItem('user', JSON.stringify(data.data))
                dispatch(authRequestSuccess(data.data))
            })
            .catch(errorObject => {
                dispatch(authRequestFailure(errorObject.response.data))
                result = false
            })
        return result
    }
}

export function userSignInRequest(userData) {
    return  dispatch => {
        let result = true
        dispatch(authRequestStart())
         axios.post('https://eco-project-back-end.herokuapp.com/login', userData)
            .then(data => {
                localStorage.setItem('user', JSON.stringify(data.data))
                dispatch(authRequestSuccess(data.data))
            })
            .catch(errorObject => {
                dispatch(authRequestFailure(errorObject.response.data))
                result = false
            })
        return result
    }
}