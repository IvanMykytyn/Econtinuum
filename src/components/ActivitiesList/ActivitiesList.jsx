import React, {useEffect, useState} from "react";
import ActivityItem from "../ActivityItem/ActivityItem";

import './activities-list.styles.scss'
import {connect} from "react-redux";
import WithSpinner from "../withSpinner/withSpinner";

const ActivitiesList = ({ activities}) => {
    const [listOfActivities, setListOfActivities] = useState([])

    useEffect(() => {
        setListOfActivities([...activities])
    }, [activities])

    return (
        listOfActivities.length
            ?
            <div className="tasks-box">
                {listOfActivities.map((activity, id) =>
                    <ActivityItem key={activity.title} id={id} activity={activity}/>)}
            </div>
            :
            <h2>ERROR</h2>
    )
}


const mapStateToProps = state => ({
    activities: state.activities.list
})

export default WithSpinner(connect(mapStateToProps)(ActivitiesList))