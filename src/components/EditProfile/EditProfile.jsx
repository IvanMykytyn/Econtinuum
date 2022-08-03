import React, { useEffect, useState } from 'react'

import FormInput from '../FormInput/FormInput'
import Password from '../Password/Password'
import './edit-profile.styles.scss'
import ProfileCustomButton from '../ProfileCustomButton/ProfileCustomButton'
import { connect } from 'react-redux'
import { validateInput } from '../../utils/SignUp/validateInput'
import {
  editUserRequest,
  tasksDoneRequest,
} from '../../redux/editProfile/editProfile.actions'
import { getPointsRequest } from '../../redux/auth/auth.actions'


const EditProfile = ({
  userObject,
  editUserRequest,
  tasksDoneRequest,
  tasksDone,
  getPointsRequest
}) => {

  useEffect(() => {
    if (userObject) {
      setUser(convertJSONUserToObject(userObject))
    }
    tasksDoneRequest()
  }, [userObject])

  useEffect(()=> {
    getPointsRequest()
  }, [tasksDone])

  const convertJSONUserToObject = (user) => {
    if (!user.date_of_birth) {
      return {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        password: '',
        confirmPassword: '',
        day: '',
        month: '',
        year: '',
        points: user.points,
      }
    }
    const date = user.date_of_birth.split('-')
    return {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      password: '',
      confirmPassword: '',
      day: date[2].split('T')[0],
      month: date[1],
      year: date[0],
      points: user.points,
    }
  }
  const [errors, setErrors] = useState({})
  const [edit, setEdit] = useState(true)
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirmPassword: '',
    day: '',
    month: '',
    year: '',
    points: '',
  })
  const isValid = () => {
    const { errors, isValid } = validateInput(user)
    if (!isValid) {
      setErrors(errors)
    }
    return isValid
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    if (isValid()) {
      const send_user = {
        first_name: user.first_name,
        last_name: user.last_name,
        date_of_birth: `${user.year}-${user.month}-${user.day}`,
        email: user.email,
        password: user.password,
        token: userObject.token,
      }
      editUserRequest(send_user)
      setErrors({})
    }
  }
  const handleChange = (event) => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }
  return (
    <>
      <div className="profile-description">
        <div className="name-description">
          <h4>Welcome</h4>
          <h2>{user.first_name + ' ' + user.last_name}</h2>
        </div>
        <div className="score-description">
          <h4>
            Your score: <span>{user.points}</span> points
          </h4>
          <h4>
            Tasks done: <span>{tasksDone}</span>
          </h4>
        </div>
      </div>
      <form className="edit-form" onSubmit={handleSubmit}>
        <h3>Edit your information</h3>
        <div className="inputs">
          <div className="edit-form__flex">
            <FormInput
              type="text"
              name={'first_name'}
              value={user.first_name}
              labelText={'First name:'}
              onChange={handleChange}
              disabled={edit}
              error={errors.first_name}
            />
            <FormInput
              type="text"
              name={'last_name'}
              value={user.last_name}
              labelText={'Last name:'}
              onChange={handleChange}
              disabled={edit}
              error={errors.last_name}
            />
          </div>
          <div className="edit-form__flex">
            <FormInput
              type="text"
              name={'email'}
              value={user.email}
              labelText={'Email address:'}
              onChange={handleChange}
              disabled={edit}
              error={errors.email}
            />
          </div>
          <div className="edit-form__flex">
            <Password
              name={'password'}
              value={user.password}
              labelText={'Password:'}
              onChange={handleChange}
              disabled={edit}
              error={errors.password}
            />
            <Password
              name={'confirmPassword'}
              value={user.confirmPassword}
              labelText={'Confirm password:'}
              onChange={handleChange}
              disabled={edit}
              error={errors.confirmPassword}
            />
          </div>
          <div className="edit-form__flex">
            <FormInput
              type="number"
              name={'day'}
              min={1}
              max={31}
              value={user.day}
              labelText={'Day:'}
              onChange={handleChange}
              disabled={edit}
              error={errors.day}
            />
            <FormInput
              type="number"
              name={'month'}
              min={1}
              max={12}
              value={user.month}
              labelText={'Month:'}
              onChange={handleChange}
              disabled={edit}
              error={errors.month}
            />
            <FormInput
              type="number"
              name={'year'}
              min={1960}
              max={new Date().getFullYear()}
              value={user.year}
              labelText={'Year:'}
              onChange={handleChange}
              disabled={edit}
              error={errors.year}
            />
          </div>
        </div>
        <div className="adjust-buttons">
          <ProfileCustomButton
            type="button"
            onClick={() => {
              setErrors({})
              setEdit(!edit)
            }}
            customClass={'edit-btn-green'}
            label={'Edit'}
          />
          <div className="save-cancel">
            <ProfileCustomButton
              customClass={edit && 'edit-btn-green'}
              type="submit"
              label={'Save'}
            />
            <ProfileCustomButton
              type="button"
              label={'Cancel'}
              onClick={() =>
                setUser({ ...convertJSONUserToObject(userObject) })
              }
            />
          </div>
        </div>
      </form>
    </>
  )
}
const mapStateToProps = (state) => ({
  userObject: state.auth.userObject,
  countOfDoneTasks: state.tasksHistory.tasks.length,
  tasksDone: state.editProfile.tasksDone,
})

const mapDispatchToProps = (dispatch) => ({
  editUserRequest: (user) => dispatch(editUserRequest(user)),
  tasksDoneRequest: () => dispatch(tasksDoneRequest()),
  getPointsRequest: () => dispatch(getPointsRequest()),
})
export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)
