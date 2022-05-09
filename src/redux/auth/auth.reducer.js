import {AuthActionTypes} from "./auth.types";

const INITIAL_STATE = {
    isLoading: false,
    userObject: null,
    errorMessage: undefined,
}


export const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AuthActionTypes.USER_AUTH_REQUEST_START:
            return {
                ...state,
                isLoading: true
            }
        case AuthActionTypes.USER_AUTH_REQUEST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userObject: action.payload,
                errorMessage: null
            }
        case AuthActionTypes.USER_AUTH_REQUEST_FAILURE:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload
            }
        case AuthActionTypes.USER_AUTH_LOGOUT:
            return {
                ...state,
                userObject: null,
            }
        case AuthActionTypes.USER_AUTH_FAILURE_RESET:
            return {
                ...state,
                errorMessage: null
            }
        default:
            return state
    }
}
