import React, { useEffect, useState } from "react";
import "./dashboard.styles.scss";
import RatingList from "../RatingList/RatingList";
import {
  requestLoadRatingList,
  setRatingSortBy,
} from "../../redux/rating/rating.actions";
import { connect } from "react-redux";

const initialFilter = {
  points: "points",
  quantity: "count_of_tasks",
};

const Dashboard = ({ loadRating, setRatingSortBy, sortBy,categoryFilter,isFetching }) => {
  const [isTopInTheActivity, setIsTopInTheActivity] = useState(false);

  useEffect(() => {
    loadRating(categoryFilter);
  }, [loadRating, categoryFilter]);

  return (
    <div className="dashboard">
      <h1>Current</h1>
      <div className="filter-buttons">
        <button
          className={sortBy === initialFilter.points ? "active-filter" : ""}
          onClick={() => setRatingSortBy(initialFilter.points)}
        >
          Points
        </button>
        <button
          className={sortBy === initialFilter.quantity ? "active-filter" : ""}
          onClick={() => setRatingSortBy(initialFilter.quantity)}
        >
          Quantity
        </button>
        <button
          className={isTopInTheActivity ? "active-filter" : ""}
          onClick={() => setIsTopInTheActivity(!isTopInTheActivity)}
        >
          Top in the activity
        </button>
      </div>

      <div className="dashboard-task-table">
        <div className="dashboard-table-header">
          <p>Place</p>
          <p>Full Name</p>
          <p>Points</p>
          <p>Tasks done</p>
          <p>Favorite</p>
        </div>
        <RatingList isTopInTheActivity={isTopInTheActivity} isLoading={isFetching} />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  loadRating: (categoryFilter) => dispatch(requestLoadRatingList(categoryFilter)),
  setRatingSortBy: (option) => dispatch(setRatingSortBy(option)),
});

const mapStateToProps = (state) => ({
  isFetching: state.rating.isFetching,
  sortBy: state.rating.sortBy,
  categoryFilter: state.filter.category
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
