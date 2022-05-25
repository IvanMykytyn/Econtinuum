import React from "react";

import "./tutorial.styles.scss";

import {
  GarbageIcon,
  LampIcon,
  LayoutIcon,
  ParkIcon,
  PlantIcon,
} from "./images";

import TutorialBlocks from "./tutorialBlocks/TutorialBlocks";
import NumberBox from "./NumberBox";

const Tutorial = () => {
  return (
    <main className="tutorial-main-box">
      <div className="title-box">
        <div>
          <h1>TUTORIAL PAGE</h1>
          <p>Choose a tutorial to start learning about our tasks</p>
        </div>
      </div>
      <div className="dots">
        <hr />
      </div>
      <TutorialBlocks />
      <div className="line-box">
        <hr />
      </div>
      <div className="additional-info">
        <h2>Econtinuum in Numbers</h2>
        <p className="additional-info-paragraph">
          If a million users join our project and do a task a day then in a year
        </p>
        <div className="eco-in-numbers-boxes">
          <NumberBox
            icon={PlantIcon}
            count={"13.5m"}
            text={"plants will be planted "}
          />
          <NumberBox
            icon={ParkIcon}
            count={"148k sq.m."}
            text={"of grounds are going to be cleaned"}
          />
          <NumberBox
            icon={LayoutIcon}
            count={"280k tons"}
            text={"of paper will be recycled"}
          />
          <NumberBox
            icon={GarbageIcon}
            count={"7.1m tons"}
            text={"of garbage will be sorted"}
          />
          <NumberBox
            icon={LampIcon}
            count={"800k"}
            text={"of energy-saving tech are will be installed"}
          />
        </div>
      </div>
    </main>
  );
};

export default Tutorial;
