import React from 'react'
import { connect } from 'react-redux'

import { useNavigate } from 'react-router-dom'

import './activity-item.styles.scss'
import { openActivityForm } from '../../redux/activityForm/activityForm.actions'

const ActivityItem = ({ id, activity, openForm }) => {
  let navigate = useNavigate()

  const { title, description, icon, number_of_points, unit_of_measure } =
    activity

  const handleClick = () => {
    const user = localStorage.getItem('user')
    if (user) {
      return openForm(activity)
    } else {
      return navigate('/sign-in')
    }
  }
  return (
    <div className={`item__${id + 1} item`} onClick={handleClick}>
      <img src={`data:image/svg+xml;base64,${icon}`} alt="" />
      <div>
        <h3>{title}</h3>
        <p className="task-description">{description}</p>
        <p className="count-of">
          <span>{number_of_points}</span> points per {unit_of_measure}
        </p>
      </div>
    </div>
  )
}
const mapDispatchToProps = (dispatch) => ({
  openForm: (item) => dispatch(openActivityForm(item)),
})

export default connect(null, mapDispatchToProps)(ActivityItem)
