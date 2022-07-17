import { TaskHistoryTypes } from './tasksHistory.types'

const INITIAL_STATE = {
  isFetching: false,
  tasks: [],
  totalTasks: 0,
  errorMessage: null,
  page: 1,
}

export const tasksHistoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TaskHistoryTypes.START_LOAD_TASKS_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case TaskHistoryTypes.SUCCESS_LOAD_TASKS_REQUEST:
      return {
        ...state,
        isFetching: false,
        tasks: action.payload.tasks,
        totalTasks: action.payload.totalTasks,
        errorMessage: null,
      }
    case TaskHistoryTypes.FAILURE_LOAD_TASKS_REQUEST:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      }

    case TaskHistoryTypes.CHANGE_PAGE:
      return {
        ...state,
        page: action.payload,
      }
    default:
      return state
  }
}
