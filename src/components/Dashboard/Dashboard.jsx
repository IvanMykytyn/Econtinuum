import React, { useEffect, useState } from 'react'
import './dashboard.styles.scss'

import RatingList from '../RatingList/RatingList'
import PaginationRating from '../../components/Pagination/PaginationRating'

import {
  requestLoadRatingList,
  setRatingSortBy,
  changePage,
} from '../../redux/rating/rating.actions'
import { connect } from 'react-redux'

const initialFilter = {
  points: 'points',
  quantity: 'count_of_tasks',
}

const Dashboard = ({
  loadRating,
  setRatingSortBy,
  sortBy,
  categoryFilter,
  statusFilter,
  isFetching,
  page,
  changePage,
}) => {
  const [isTopInTheActivity, setIsTopInTheActivity] = useState(false)

  // go to the first page after changing the filter
  useEffect(() => {
    changePage(1)
  }, [categoryFilter, statusFilter, sortBy])

  // load users
  useEffect(() => {
    loadRating(categoryFilter)
  }, [loadRating, categoryFilter, page, statusFilter, sortBy])


  return (
    <div className="dashboard">
      <h1>Current</h1>
      <div className="filter-buttons">
        <button
          className={sortBy === initialFilter.points ? 'active-filter' : ''}
          onClick={() => setRatingSortBy(initialFilter.points)}
        >
          Points
        </button>
        <button
          className={sortBy === initialFilter.quantity ? 'active-filter' : ''}
          onClick={() => setRatingSortBy(initialFilter.quantity)}
        >
          Quantity
        </button>
        <button
          className={isTopInTheActivity ? 'active-filter' : ''}
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
        <RatingList
          isTopInTheActivity={isTopInTheActivity}
          isLoading={isFetching}
        />
      </div>
      <PaginationRating />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  loadRating: (categoryFilter) =>
    dispatch(requestLoadRatingList(categoryFilter)),
  setRatingSortBy: (option) => dispatch(setRatingSortBy(option)),
  changePage: (page) => dispatch(changePage(page)),
})

const mapStateToProps = (state) => ({
  isFetching: state.rating.isFetching,
  sortBy: state.rating.sortBy,
  categoryFilter: state.filter.category,
  page: state.rating.page,
  statusFilter: state.filter.status,
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
