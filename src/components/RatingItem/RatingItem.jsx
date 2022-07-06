import React from "react";
import {connect} from "react-redux"

import "./rating-item.styles.scss";

const categoryEnum = {
  "Garbage sorting": "Sorting",
  "Paper waste sale": "Waste",
  "Resource saving tech": "Tech",
  "Plant a piece of flora": "Flora",
  "Clean a patch of land": "Land",
};

const RatingItem = ({ _id, place, full_name, points, count_of_tasks, favorite, userId,showMe }) =>
{
  return (
  <div className={((showMe && _id === userId) ? "task-item task-item-this-user" : "task-item" )} >
    <div className="task-data dashboard-task-id">
      <p>{place}</p>
    </div>
    <div className="task-data dashboard-task-full-name">
      <p>{full_name}</p>
    </div>
    <div className="task-data dashboard-task-points">
      <p>{points}</p>
    </div>
    <div className="task-data dashboard-task-points">
      <p>{count_of_tasks}</p>
    </div>
    <div className={"dashboard-category " + favorite.toLowerCase()}>
      <p>{categoryEnum[favorite]}</p>
    </div>
  </div>
)};

const mapStateToProps = (state) => ({
  showMe: state.rating.showMe
})
export default connect(mapStateToProps)(RatingItem);
