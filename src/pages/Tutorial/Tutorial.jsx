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
          <p>Some text text text text text text text text text </p>
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
        <div className="eco-in-numbers-boxes">
          <NumberBox
            icon={PlantIcon}
            count={1500}
            text={"text text text text text text text text "}
          />
          <NumberBox
            icon={ParkIcon}
            count={1500}
            text={"text text text text text text text text "}
          />
          <NumberBox
            icon={LayoutIcon}
            count={1500}
            text={"text text text text text text text text "}
          />
          <NumberBox
            icon={GarbageIcon}
            count={1500}
            text={"text text text text text text text text "}
          />
          <NumberBox
            icon={LampIcon}
            count={1500}
            text={"text text text text text text text text "}
          />
        </div>
      </div>
    </main>
  );
};

export default Tutorial;
