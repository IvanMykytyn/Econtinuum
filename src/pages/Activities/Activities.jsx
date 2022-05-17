import React, { useEffect } from "react";
import "./styles/activities.styles.scss";

import { LeftSideLine } from "./styles/images";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ActivitiesForm from "../../components/ActivitiesForm/ActivitiesForm";
import ActivitiesList from "../../components/ActivitiesList/ActivitiesList";
import { requestLoadActivities } from "../../redux/activities/activities.actions";

const Activities = ({ hidden, isLoading, loadActivitiesList }) => {
  useEffect(() => {
    loadActivitiesList();
  }, [loadActivitiesList]);
  return (
    <div className="main-box">
      <div className="title-box">
        <div>
          <h1>Categories choice</h1>
          <p>Choose your category to start helping our planet</p>
        </div>
      </div>
      <div className="dots">
        <hr />
      </div>
      <ActivitiesList isLoading={isLoading} />
      {hidden ? null : <ActivitiesForm />}
      <div className="line-box">
        <hr />
      </div>
      <div className="additional-info">
        <img src={LeftSideLine} alt="left side line" />
        <div className="text-info">
          <h1>Don’t know what to do? </h1>
          <p>
            If you’re a newby to our project, please watch some tutorial videos
            or read some additional information on{" "}
            <Link className="tutorial-link" to="/tutorial">
              Tutorial page.
            </Link>
          </p>
          <h1>We accept your advice!</h1>
          <p>
            If you’re a newby to our project If you’re a newby to our project If
            you’re a newby to our project If you’re a newby to our project If
            you’re a newby to our projectIf you’re a newby to our project If
            you’re a newby to our project If you’re a newby to our project If
            you’re a newby to our project
          </p>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  hidden: state.activityForm.hidden,
  isLoading: state.activities.isLoading,
});
const mapDispatchToProps = (dispatch) => ({
  loadActivitiesList: () => dispatch(requestLoadActivities()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Activities);
