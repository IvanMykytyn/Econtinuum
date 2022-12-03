import {ActivitiesActionTypes} from "./activities.types";
import axios from "axios";

export const startLoadingActivities = () => ({
    type: ActivitiesActionTypes.START_LOAD_ACTIVITIES
})
export const successLoadActivities = (activities) => ({
    type: ActivitiesActionTypes.SUCCESS_LOAD_ACTIVITIES,
    payload: activities
})
export const failureLoadActivities = (error) => ({
    type: ActivitiesActionTypes.FAILURE_LOAD_ACTIVITIES,
    payload: error
})


export const requestLoadActivities = () => async dispatch => {
    dispatch(startLoadingActivities())
    await axios.get('https://eco-project-back-end.vercel.app/activities')
        .then(data => data.data)
        .then(data => dispatch(successLoadActivities([...data])))
        .catch(error => dispatch(failureLoadActivities(error)))

}