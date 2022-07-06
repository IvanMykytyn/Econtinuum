import React from 'react'

import './pagination.styles.scss'

import PaginationList from './PaginationList'

//redux
import { connect } from 'react-redux'
import { changePage } from '../../redux/tasksHistory/tasksHistory.actions'

const PaginationTaskHistory = ({ page, changePage, totalTasks }) => {
  const AMOUNT = 6
  // max number of pages to show from left and right sides
  const MAX_NUM_OF_PAGES = 2

  return (
    <PaginationList
      page={page}
      changePage={changePage}
      totalTasks={totalTasks}
      amount={AMOUNT}
      maxNumOfPages={MAX_NUM_OF_PAGES}
    />
  )
}
const mapStateToProps = (state) => ({
  page: state.tasksHistory.page,
  totalTasks: state.tasksHistory.totalTasks,
})

const mapDispatchToProps = (dispatch) => ({
  changePage: (page) => dispatch(changePage(page)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PaginationTaskHistory)
