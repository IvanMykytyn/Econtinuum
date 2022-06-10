import {ActivityFormActionTypes} from "./activityForm.types";
import axios from "axios";

export const openActivityForm = (item) => ({
    type: ActivityFormActionTypes.OPEN_ACTIVITIES_FORM,
    payload: item
})
export const closeActivityForm = () => ({
    type: ActivityFormActionTypes.CLOSE_ACTIVITIES_FORM
})

export const startRequestActivityForm = () => ({
    type: ActivityFormActionTypes.START_REQUEST_ACTIVITY_FORM
})
export const successRequestActivityForm = () => ({
    type: ActivityFormActionTypes.SUCCESS_REQUEST_ACTIVITY_FORM
})
export const failureRequestActivityForm = (error) => ({
    type: ActivityFormActionTypes.FAILURE_REQUEST_ACTIVITY_FORM,
    payload: error
})

export const requestActivityForm = (form) => async dispatch => {
    dispatch(startRequestActivityForm())
    const headers  = {
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
        "X-Requested-With": "XMLHttpRequest",
        "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
    }
    await axios.post('https://eco-project-back-end.herokuapp.com/task', form, {headers}).then(() => dispatch(successRequestActivityForm())).catch(error => dispatch(failureRequestActivityForm(error)))
}