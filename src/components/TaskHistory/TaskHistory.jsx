import React, { useEffect } from 'react'
import './task-history.styles.scss'

import TaskHistoryList from '../TaskHistoryList/TaskHistoryList'
import { connect } from 'react-redux'
import {
  requestLoadTasks,
  changePage,
} from '../../redux/tasksHistory/tasksHistory.actions'

import PaginationTaskHistory from '../Pagination/PaginationTaskHistory'

const TaskHistory = ({
  loadTasks,
  isLoading,
  categoryFilter,
  statusFilter,
  page,
  changePage,
}) => {
  
  // go to the first page after changing the filter
    useEffect(() => {
      changePage(1)
    }, [categoryFilter, statusFilter])

  // load tasks
  useEffect(() => {
    loadTasks(categoryFilter, statusFilter)
  }, [categoryFilter, statusFilter, page])

  return (
    <div className="task-history" id="task-history">
      <h1>Task history</h1>
      <div className="task-table">
        <div className="table-header">
          <p className="table-header-id">ID</p>
          <p className="table-header-points">Points</p>
          <p className="table-header-status">Status</p>
          <p className="table-header-category">Category</p>
        </div>
        <TaskHistoryList isLoading={isLoading} />
      </div>
      <PaginationTaskHistory />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  loadTasks: (categoryFilter, statusFilter) =>
    dispatch(requestLoadTasks(categoryFilter, statusFilter)),
  changePage: (page) => dispatch(changePage(page)),
})
const mapStateToProps = (state) => ({
  isLoading: state.tasksHistory.isFetching,
  categoryFilter: state.filter.category,
  statusFilter: state.filter.status,
  page: state.tasksHistory.page,
})
export default connect(mapStateToProps, mapDispatchToProps)(TaskHistory)
