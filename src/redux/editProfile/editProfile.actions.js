import { EditProfileTypes } from './editProfile.types'
import axios from 'axios'
import { setCurrentUser } from '../auth/auth.actions'

export const startEditUserRequest = () => ({
  type: EditProfileTypes.START_EDIT_USER_REQUEST,
})
export const successEditUserRequest = (user) => ({
  type: EditProfileTypes.SUCCESS_EDIT_USER_REQUEST,
  payload: user,
})
export const failureEditUserRequest = (error) => ({
  type: EditProfileTypes.FAILURE_EDIT_USER_REQUEST,
  payload: error,
})

export const editUserRequest = (data) => (dispatch) => {
  dispatch(startEditUserRequest())
  axios
    .patch('https://eco-project-back-end.herokuapp.com/userInformation', data)
    .then((res) => {
      const token = JSON.parse(localStorage.getItem('user')).token
      localStorage.setItem('user', JSON.stringify({ ...res.data, token }))
      dispatch(setCurrentUser(res.data))
      dispatch(successEditUserRequest(res))
    })
    .catch((error) => dispatch(failureEditUserRequest(error)))
}
export const startTasksDoneRequest = () => ({
  type: EditProfileTypes.START_TASKS_DONE_REQUEST,
})
export const successTasksDoneRequest = (user) => ({
  type: EditProfileTypes.SUCCESS_TASKS_DONE_REQUEST,
  payload: user,
})

export const tasksDoneRequest = () => (dispatch, getState) => {
  dispatch(startTasksDoneRequest())
  axios
    .get('https://eco-project-back-end.herokuapp.com/tasks/done', {
      headers: { authorization: getState().auth.userObject.token },
    })
    .then((res) => {
      dispatch(successTasksDoneRequest(res.data.tasksDone))
    })
    .catch(() => {})
}
