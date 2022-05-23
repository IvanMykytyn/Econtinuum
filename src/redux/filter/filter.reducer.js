import {FilterTypes} from "./filter.types";

const INITIAL_STATE = {
    category: 'any',
    status: 'any',
}

export const FilterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FilterTypes.SET_CATEGORY_FILTER:
            return {
                ...state,
                category: action.payload
            }
        case FilterTypes.SET_STATUS_FILTER:
            return {
                ...state,
                status: action.payload
            }
        default:
            return state
    }
}