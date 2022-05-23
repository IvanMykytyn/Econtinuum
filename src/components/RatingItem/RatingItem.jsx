import React from "react";

import './rating-item.styles.scss'

const RatingItem = ({place, full_name, points, count_of_tasks, favorite}) => (
    <div className="task-item">
        <div className="task-data task-id">
            <p>{place}</p>
        </div>
        <div className="task-data task-full-name">
            <p>{full_name}</p>
        </div>
        <div className="task-data task-points">
            <p>{points}</p>
        </div>
        <div className="task-data task-points">
            <p>{count_of_tasks}</p>
        </div>
        <div className={"category " + favorite.toLowerCase()}>
            <p>{favorite}</p>
        </div>
    </div>
)

export default RatingItem