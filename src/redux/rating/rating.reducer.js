import {RatingTypes} from "./rating.types";

const INITIAL_STATE = {
    isFetching: false,
    ratingList: [],
    errorMessage: null,
    sortBy:'points',
    showMe:null
}

export const ratingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RatingTypes.START_LOAD_LIST:
            return {
                ...state,
                isFetching: true
            }
        case RatingTypes.SUCCESS_LOAD_LIST:
            return {
                ...state,
                isFetching: false,
                ratingList: action.payload,
                errorMessage: null
            }
        case RatingTypes.FAILURE_LOAD_LIST:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        case RatingTypes.SET_RATING_FILTER:
            return {
                ...state,
                sortBy: action.payload
            }
        case RatingTypes.SHOW_ME_IN_LIST:
            return {
                ...state,
                showMe:action.payload
            }
        default:
            return state
    }
}