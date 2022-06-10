import {ActivityFormActionTypes} from "./activityForm.types";

const INITIAL_STATE = {
    hidden: true,
    isLoading: false,
    error: undefined
}


export const activityFormReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case ActivityFormActionTypes.OPEN_ACTIVITIES_FORM:
            return ({
                ...state,
                hidden: false,
                activity: action.payload
            })
        case ActivityFormActionTypes.CLOSE_ACTIVITIES_FORM:
            return ({
                ...state,
                hidden: true
            })
        case ActivityFormActionTypes.START_REQUEST_ACTIVITY_FORM:
            return ({
                ...state,
                isLoading: true
            })
        case ActivityFormActionTypes.SUCCESS_REQUEST_ACTIVITY_FORM:
            return ({
                ...state,
                isLoading: false,
            })
        case ActivityFormActionTypes.FAILURE_REQUEST_ACTIVITY_FORM:
            return ({
                ...state,
                isLoading: false,
                error: action.payload
            })


        default:
            return state
    }
}

