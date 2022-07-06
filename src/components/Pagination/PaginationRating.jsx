import React from 'react'

import './pagination.styles.scss'

import PaginationList from './PaginationList'

//redux
import { connect } from 'react-redux'
import { changePage } from '../../redux/rating/rating.actions'

const PaginationTaskHistory = ({ page, changePage, totalTasks }) => {
  const AMOUNT = 8
  // max number of pages to show from left and right sides
  const MAX_NUM_OF_PAGES = 3

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
  page: state.rating.page,
  totalTasks: state.rating.totalTasks,
})

const mapDispatchToProps = (dispatch) => ({
  changePage: (page) => dispatch(changePage(page)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PaginationTaskHistory)
