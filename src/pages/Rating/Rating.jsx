import React, { useState } from 'react'
import {connect} from "react-redux"
import {showMeInList} from "../../redux/rating/rating.actions"

import './rating.styles.scss'
import '../Profile/profile.styles.scss'

import { MdPersonOutline } from 'react-icons/md'
import { BsDot } from 'react-icons/bs'

import Dashboard from '../../components/Dashboard/Dashboard'
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter'

const Rating = ({showMe, setShowMe}) => {
  
  return (
    <div className="rating-content">
      <nav>
        <div className="filter-box">
          <ul>
            {localStorage.getItem('user') && (
              <li className="show-me-section">
                <div
                  className={
                    'show-me-title' + (showMe ? ' active-show-me' : '')
                  }
                  onClick={() => setShowMe(!showMe)}
                >
                  <div>
                    <MdPersonOutline size={30} />
                    <h4>Show me</h4>
                  </div>
                  <BsDot size={30} />
                </div>
              </li>
            )}

            <CategoryFilter />
          </ul>
        </div>
      </nav>
      <main>
        <h1 className="title">Dashboard — User rating</h1>
        <Dashboard />
      </main>
    </div>
  )
}

const mapStateToProps = (state) => ({
  showMe: state.rating.showMe
})

const mapDispatchToProps = (dispatch) => ({
  setShowMe: (showMe) => dispatch(showMeInList(showMe))
})

export default connect(mapStateToProps, mapDispatchToProps)(Rating)
