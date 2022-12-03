import axios from 'axios'
import { AuthActionTypes } from './auth.types'

export const authRequestStart = () => ({
  type: AuthActionTypes.USER_AUTH_REQUEST_START,
})
export const authFailureReset = () => ({
  type: AuthActionTypes.USER_AUTH_FAILURE_RESET,
})

export const authRequestSuccess = (data) => ({
  type: AuthActionTypes.USER_AUTH_REQUEST_SUCCESS,
  payload: data,
})

export const authRequestFailure = (errorsObject) => ({
  type: AuthActionTypes.USER_AUTH_REQUEST_FAILURE,
  payload: errorsObject.message,
})

export function userSignUpRequest(userData) {
  return async (dispatch) => {
    let result = false
    dispatch(authRequestStart())
    await axios
      .post('https://eco-project-back-end.vercel.app/register', userData)
      .then((data) => {
        result = true
        localStorage.setItem('user', JSON.stringify(data.data))
        dispatch(authRequestSuccess(data.data))
      })
      .catch((errorObject) => {
        dispatch(authRequestFailure(errorObject.response.data))
        result = false
      })
    return result
  }
}

export function userSignInRequest(userData) {
  return async (dispatch) => {
    let result = true
    dispatch(authRequestStart())
    await axios
      .post('https://eco-project-back-end.vercel.app/login', userData)
      .then((data) => {
        localStorage.setItem('user', JSON.stringify(data.data))
        dispatch(authRequestSuccess(data.data))
      })
      .catch((errorObject) => {
        result = false
        dispatch(authRequestFailure(errorObject.response.data))
      })
    return result
  }
}

export const userLogout = () => ({
  type: AuthActionTypes.USER_AUTH_LOGOUT,
})

export const userLogoutRequest = () => (dispatch) => {
  dispatch(userLogout())
  localStorage.removeItem('user')
}

export const setCurrentUser = (user) => ({
  type: AuthActionTypes.SET_CURRENT_USER,
  payload: user,
})

export const getPointsSuccess = (points) => ({
  type: AuthActionTypes.GET_TOTAL_POINTS,
  payload: points,
})

export const getPointsFailure = (errorObject) => ({
  type: AuthActionTypes.GET_TOTAL_POINTS_FAILURE,
  payload: errorObject.message,
})

export const getPointsRequest = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(
      'https://eco-project-back-end.vercel.app/user/points',
      { headers: { authorization: getState().auth.userObject.token } }
    )
    dispatch(getPointsSuccess(response.data.points))
  } catch (error) {
    dispatch(getPointsFailure(error.response.data))
  }
}
