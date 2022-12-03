import {TaskHistoryTypes} from "./tasksHistory.types";
import axios from "axios";

export const startLoadTasks = () => ({
    type: TaskHistoryTypes.START_LOAD_TASKS_REQUEST
})
export const successLoadTasks = (tasks, totalTasks) => ({
    type: TaskHistoryTypes.SUCCESS_LOAD_TASKS_REQUEST,
    payload: {tasks, totalTasks}
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
    const AMOUNT = 6
    axios.get(
        `https://eco-project-back-end.vercel.app/taskHistory?status=${statusFilter}&category=${categoryEnum[categoryFilter]}&page=${getState().tasksHistory.page}&amount=${AMOUNT}`,
        {headers: {authorization: getState().auth.userObject.token}})
        .then(res => {
            dispatch(successLoadTasks(res.data.tasks, res.data.totalTasks))
        })
        .catch(error => dispatch(failureLoadTasks(error)))

}

export const changePage = (page) => ({
    type: TaskHistoryTypes.CHANGE_PAGE,
    payload: page
})