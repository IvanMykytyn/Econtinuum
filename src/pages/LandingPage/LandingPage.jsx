import React from "react";

import "./landingPage.styles.scss";

// components
import InstructionBox from "./InstructionBox";

// icons as a component
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { IoIosArrowDroprightCircle } from "react-icons/io";

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
} from "./images";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const LandingPage = ({user}) => {
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            ligula tortor, iaculis sit amet dolor vel, mollis dictum nisi. Donec
            at ultrices felis. Cras est leo, sodales viverra consequat non,
            viverra at felis.
          </p>
          <div className="sign-up-now">
            {
              user
                  ? <Link to={'/profile'}>go to profile</Link>
                  : <Link to={'/sign-up'}>sign up now</Link>
            }
            <IoIosArrowDroprightCircle size={24} color={"#FFFFFF66"} />
          </div>
        </div>
        <div className="title-right-side">
          <h1>world</h1>
        </div>
      </div>
      <div className="about-us-box">
        <div className="lines-img">
          <img src={leftSideLines} alt="bg-lines"/>
        </div>
        <div className="about-us-description">
          <ImQuotesLeft size={100} />
          <h2>About us</h2>
          <p className="about-us-paragraph">
            Praesent dui nunc, ullamcorper id quam tempor, dictum pellentesque
            lectus. Sed at quam tortor. Donec id nibh quis ipsum ullamcorper
            ornare. Sed dui elit, dapibus ac lorem sit amet, blandit eleifend
            orci. Proin blandit mauris nec est ornare, quis tempus purus
            porttitor.
          </p>
          <p className="about-us-author">- Econtinuum team</p>
          <div>
            <ImQuotesRight size={100} />
          </div>
        </div>
      </div>
      <div className="app-features-box">
        <div className="app-features-title">
          <img src={leftSideCircles} alt='leftSideCircles'/>
          <div className="title-text">
            <h2>Awesome Web App Features </h2>
            <div className="line-box">
              <hr />
            </div>
            <p>
              Vivamus scelerisque eget dolor non sollicitudin. Pellentesque nec
              iaculis lectus. Interdum et malesuada fames ac ante ipsum primis
              in faucibus. Suspendisse lectus turpis, rutrum ut quam non, luctus
              ultricies lorem.
            </p>
          </div>

          <img src={rightSideCircles} alt='rightSideCircles'/>
        </div>

        <div className="app-features">
          <div className="feature-box" id="creative-design">
            <img src={LayersIcon} alt="LayersIcon" />
            <h4>Creative design</h4>
            <p>
              Proin egestas efficitur ipsum non iaculis. Morbi vel magna nibh.
              Donec varius aliquam libero, sit amet pellentesque risus blandit
              eu.
            </p>
          </div>
          <div className="feature-box" id="eco-tasks">
            <img src={TasksIcon} alt="TasksIcon" />
            <h4>Eco tasks</h4>
            <p>
              Proin egestas efficitur ipsum non iaculis. Morbi vel magna nibh.
              Donec varius aliquam libero, sit amet pellentesque risus blandit
              eu.
            </p>
          </div>
          <div className="feature-box" id="points-exchange">
            <img src={NumbersIcon} alt="NumbersIcon" />
            <h4>Points exchange</h4>
            <p>
              Proin egestas efficitur ipsum non iaculis. Morbi vel magna nibh.
              Donec varius aliquam libero, sit amet pellentesque risus blandit
              eu.
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
            Awesome web app features web app features web app features web app
            features web app features <Link to='/activities'>try it yourself</Link>
          </p>
        </div>

        <div className="instruction-boxes">
          <InstructionBox
            title="Choose a task"
            text="Awesome web app features web app features web app features web app
          features web app features web app features"
          />
          <InstructionBox
            title="Fill a form"
            text="Awesome web app features web app features web app features web app
          features web app features web app features"
          />
          <InstructionBox
            title="Send to validate"
            text="Awesome web app features web app features web app features web app
          features web app features web app features"
          />
          <InstructionBox
            title="Recieve points"
            text="Awesome web app features web app features web app features web app
          features web app features web app features"
          />
        </div>
      </div>
    </main>
  );
};
const mapStateToProps = state => ({
  user: state.auth.userObject
})
export default connect(mapStateToProps)(LandingPage);
