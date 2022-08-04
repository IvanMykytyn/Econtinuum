import React from 'react'

import './landingPage.styles.scss'

// components
import InstructionBox from './InstructionBox'

// icons as a component
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'
import { IoIosArrowDroprightCircle } from 'react-icons/io'

// icons as an img
import {
  EllipseDownLeftBg,
  EllipseRightUpBg,
  leftSideLines,
  leftSideCircles,
  rightSideCircles,
  NumbersIcon,
  TasksIcon,
  LayersIcon,
} from './images'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const LandingPage = ({ user }) => {
  return (
    <main className="landing-page-content">
      <div className="landing-title-box">
        <div className="title-left-side">
          <h5>Discover</h5>
          <h1>a new</h1>
          <h4>
            help using
            <span className="site-name-eco">
              eco<span>ntinuum</span>
            </span>
          </h4>
          <p className="title-description">
            What is Econtinuum? We propose a creative solution where end-up
            users are motivated to complete some small eco-tasks with points
            scoring and exchanging them further.
          </p>
          <div className="sign-up-now">
            {user ? (
              <Link to={'/profile'}>go to profile</Link>
            ) : (
              <Link to={'/sign-up'}>sign up now</Link>
            )}
            <IoIosArrowDroprightCircle size={24} color={'#FFFFFF66'} />
          </div>
        </div>
        <div className="title-right-side">
          <h1>world</h1>
        </div>
      </div>
      <div className="about-us-box">
        <div className="lines-img">
          <img src={leftSideLines} alt="bg-lines" />
        </div>
        <div className="about-us-description">
          <ImQuotesLeft size={100} />
          <h2>About us</h2>
          <p className="about-us-paragraph">
            By the way people who work at Econtinuum share common vision and
            values. We are driven by the idea that the best work is born from
            perseverance, diligence and fun. Our project is concerned about
            community and charitable concerns. We also adopt environmental
            issues as part of our branding.
          </p>
          <p className="about-us-author">- Econtinuum team</p>
          <div>
            <ImQuotesRight size={100} />
          </div>
        </div>
      </div>
      <div className="app-features-box">
        <div className="app-features-title">
          <img src={leftSideCircles} alt="leftSideCircles" />
          <div className="title-text">
            <h2>Awesome Web App Features </h2>
            <div className="line-box">
              <hr />
            </div>
            <p>
              Our web application offers indeed many special features. All of
              them were made to create the most user-friendly design possible.
              Here are just a few of them.
            </p>
          </div>

          <img src={rightSideCircles} alt="rightSideCircles" />
        </div>

        <div className="app-features">
          <div className="feature-box" id="creative-design">
            <img src={LayersIcon} alt="LayersIcon" />
            <h4>Creative design</h4>
            <p>
              Who said that the beautiful design is not a crucial part of the
              project? We didn’t say that either!
            </p>
          </div>
          <div className="feature-box" id="eco-tasks">
            <img src={TasksIcon} alt="TasksIcon" />
            <h4>Eco tasks</h4>
            <p>
              Complete some tasks to help the environment and recieve plenty of
              points to show off
            </p>
          </div>
          <div className="feature-box" id="points-exchange">
            <img src={NumbersIcon} alt="NumbersIcon" />
            <h4>Points exchange</h4>
            <p>
              Isn’t it a dream to exchange some of your points for gifts? All we
              have to do is to agree with you
            </p>
          </div>
        </div>
      </div>
      <div className="how-it-works-box">
        <img id="ellipse-down" src={EllipseDownLeftBg} alt="ellipse-bg" />
        <img id="ellipse-up" src={EllipseRightUpBg} alt="ellipse-bg" />

        <div className="how-it-works-title">
          <h2>How it works?</h2>
          <div className="line-box">
            <hr />
          </div>

          <p>
            Get acquainted with the steps below to get started easily and{' '}
            <Link to="/activities">try it yourself</Link> for sure.
          </p>
        </div>

        <div className="instruction-boxes">
          <InstructionBox
            title="Choose a task"
            text="You can choose between some task categories and decide which one is for you to try doing. "
          />
          <InstructionBox
            title="Fill a form"
            text="After getting your task completed you are supposed to fill a little form to report about your actions."
          />
          <InstructionBox
            title="Send to validate"
            text="Just click a send button and wait to get your form checked by our admins. You can go on doing tasks."
          />
          <InstructionBox
            title="Receive points"
            text="If a form is filled correctly and your actions are confirmed you will receive the points depending on a task."
          />
        </div>
      </div>
    </main>
  )
}
const mapStateToProps = (state) => ({
  user: state.auth.userObject,
})
export default connect(mapStateToProps)(LandingPage)
