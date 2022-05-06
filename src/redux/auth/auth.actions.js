import axios from "axios";

export function userSignUpRequest(userData){
    return dispatch => {
        console.log(JSON.stringify(userData))
        return axios.post('https://eco-project-back-end.herokuapp.com/register',JSON.stringify(userData))
    }
}