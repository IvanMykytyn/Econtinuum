import {TaskHistoryTypes} from "./tasksHistory.types";
import axios from "axios";

export const startLoadTasks = () => ({
    type: TaskHistoryTypes.START_LOAD_TASKS_REQUEST
})
export const successLoadTasks = (tasks) => ({
    type: TaskHistoryTypes.SUCCESS_LOAD_TASKS_REQUEST,
    payload: tasks
})
export const failureLoadTasks = (error) => ({
    type: TaskHistoryTypes.FAILURE_LOAD_TASKS_REQUEST,
    payload: error
})

const categoryEnum = {
    'sorting': "Garbage sorting",
    'waste': "Paper waste sale",
    'tech': "Resource saving tech",
    'flora': "Plant a piece of flora",
    'land': "Clean a patch of land",
    'any': 'any'
}

export const requestLoadTasks = (categoryFilter, statusFilter) => (dispatch, getState) => {
    dispatch(startLoadTasks())
    let result = []

    axios.get(
        `https://eco-project-back-end.herokuapp.com/taskHistory?status=${statusFilter}&category=${categoryEnum[categoryFilter]}&amount=all`,
        {headers: {authorization: getState().auth.userObject.token}})
        .then(res => {
            result = res.data
            dispatch(successLoadTasks(res.data))
        })
        .catch(error => dispatch(failureLoadTasks(error)))

    return result
}

