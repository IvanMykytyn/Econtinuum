import {EditProfileTypes} from "./editProfile.types";

const INITIAL_STATE = {
    isLoading: false,
    errorMessage: undefined,
}


export const editProfileReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EditProfileTypes.START_EDIT_USER_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case EditProfileTypes.SUCCESS_EDIT_USER_REQUEST:
            return {
                ...state,
                isLoading: false,
                errorMessage: null
            }
        case EditProfileTypes.FAILURE_EDIT_USER_REQUEST:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload
            }

        default:
            return state
    }
}
