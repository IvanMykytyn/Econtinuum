import {ActivitiesActionTypes} from "./activities.types";

const INITIAL_STATE = {
    hidden: true,
    list: [],
    isLoading: false,
    error: undefined
}


export const activitiesReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case ActivitiesActionTypes.OPEN_ACTIVITIES_FORM:
            return ({
                ...state,
                hidden: false,
                activity: action.payload
            })
        case ActivitiesActionTypes.CLOSE_ACTIVITIES_FORM:
            return ({
                ...state,
                hidden: true
            })
        case ActivitiesActionTypes.START_LOAD_ACTIVITIES:
            return ({
                ...state,
                isLoading: true
            })
        case ActivitiesActionTypes.SUCCESS_LOAD_ACTIVITIES:
            return ({
                ...state,
                isLoading: false,
                list: action.payload
            })
        case ActivitiesActionTypes.FAILURE_LOAD_ACTIVITIES:
            return ({
                ...state,
                isLoading: false,
                error: action.payload
            })


        default:
            return state
    }
}

