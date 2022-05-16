import React from "react";
import {connect} from "react-redux";

import './activity-item.styles.scss'
import {openActivityForm} from "../../redux/activityForm/activityForm.actions";

const ActivityItem = ({id,activity,openForm}) => {
    const {title,description,icon,number_of_points,unit_of_measure} = activity;
    return(
        <div className={`item__${id+1} item`} onClick={()=>openForm(activity)}>
            <img src={`data:image/svg+xml;base64,${icon}`} alt=""/>
            <div>
            <h3>{title}</h3>
            <p className="task-description">
                {description}
            </p>
            <p className="count-of">
                <span>{number_of_points}</span> points per {unit_of_measure}
            </p>
            </div>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => ({
    openForm: (item) => dispatch(openActivityForm(item))
})


export default connect(null,mapDispatchToProps)(ActivityItem)