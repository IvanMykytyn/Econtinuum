import {RatingTypes} from "./rating.types";
import axios from "axios";

export const startLoadRatingList = () => ({
    type: RatingTypes.START_LOAD_LIST
})
export const successLoadRatingList = (data) => ({
    type: RatingTypes.SUCCESS_LOAD_LIST,
    payload:data
})
export const failureLoadRatingList = (error) => ({
    type: RatingTypes.FAILURE_LOAD_LIST,
    payload:error
})

export const requestLoadRatingList = () => dispatch => {
    dispatch(startLoadRatingList())
    axios.get(`https://eco-project-back-end.herokuapp.com/rating`)
        .then(res=>res.data)
        .then(data=>dispatch(successLoadRatingList(data)))
        .catch(error=>dispatch(failureLoadRatingList(error)))
}


export const setRatingSortBy = option => ({
    type:RatingTypes.SET_RATING_FILTER,
    payload:option
})