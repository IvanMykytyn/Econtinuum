import axios from "axios";

export function userSignUpRequest(userData){
    return dispatch => {
        return axios.post('https://eco-project-back-end.herokuapp.com/register',JSON.stringify(userData))
    }
}