import {TaskHistoryTypes} from "./tasksHistory.types";

const INITIAL_STATE = {
    isFetching: false,
    tasks: [],
    errorMessage: null,
}

export const tasksHistoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TaskHistoryTypes.START_LOAD_TASKS_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case TaskHistoryTypes.SUCCESS_LOAD_TASKS_REQUEST:
            return {
                ...state,
                isFetching: false,
                tasks: action.payload,
                errorMessage: null
            }
        case TaskHistoryTypes.FAILURE_LOAD_TASKS_REQUEST:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }

        default:
            return state
    }
}