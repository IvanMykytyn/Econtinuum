import {AuthActionTypes} from "./auth.types";

const INITIAL_STATE = {
    isLoading: false,
    userObject: null,
    errorMessage: undefined,
}


export const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AuthActionTypes.SIGN_UP_REQUEST_START:
            return {
                ...state,
                isLoading: true
            }
        case AuthActionTypes.SIGN_UP_REQUEST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userObject: action.payload
            }
        case AuthActionTypes.SIGN_UP_REQUEST_FAILURE:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload
            }
        default:
            return state
    }
}
