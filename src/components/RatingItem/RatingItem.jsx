import React from "react";

import './rating-item.styles.scss'

const RatingItem = ({place, fullName, points, tasksDone, favorite}) => (
    <div className="task-item">
        <div className="task-data task-id">
            <p>{place}</p>
        </div>
        <div className="task-data task-full-name">
            <p>{fullName}</p>
        </div>
        <div className="task-data task-points">
            <p>{points}</p>
        </div>
        <div className="task-data task-points">
            <p>{tasksDone}</p>
        </div>
        <div className={"category " + favorite.toLowerCase()}>
            <p>{favorite}</p>
        </div>
    </div>
)

export default RatingItem