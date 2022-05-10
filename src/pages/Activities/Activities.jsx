import React from "react";
import "./styles/activities.styles.scss";

import {
  LeftSideLine,
  GarbageIcon,
  LeafIcon,
  TechnologyIcon,
  PlantIcon,
  BroomIcon,
} from "./styles/images";

import { Link } from "react-router-dom";

const Activities = () => {
  return (
    <main>
      <div className="title-box">
        <div>
          <h1>Categories choice</h1>
          <p>Choose your category to start helping our planet</p>
        </div>
      </div>

      <div className="dots">
        <hr />
      </div>
      <div className="tasks-box">
        <div id="garbage-sorting">
          <img src={GarbageIcon} alt="garbage-icon"></img>
          <h3>Garbage sorting</h3>
          <p className="task-description">
            Waste sorting is the process by which waste is separated into
            different elements.
          </p>
          <p className="count-of">
            <span>2</span> points per kg.
          </p>
        </div>
        <div id="paper-waste">
          <img src={LeafIcon} alt="garbage-icon"></img>
          <h3>Paper waste sale</h3>
          <p className="task-description">
            Recycling paper simply defined as the process of reutilising waste
            paper for reuse, is called recycling paper.
          </p>
          <p className="count-of">
            <span>3</span> points per kg.
          </p>
        </div>
        <div id="resource-saving">
          <img src={TechnologyIcon} alt="garbage-icon"></img>
          <h3>Resource saving tech</h3>
          <p className="count-of">
            <span>1</span> point per unit
          </p>
        </div>
        <div id="plant-flora">
          <img src={PlantIcon} alt="garbage-icon"></img>
          <h3>Plant a piece of flora</h3>
          <p className="count-of">
            <span>1</span> point per unit
          </p>
        </div>
        <div id="clean-land">
          <img src={BroomIcon} alt="garbage-icon"></img>
          <h3>Clean a patch of land</h3>
          <p className="count-of">
            <span>1</span> point per unit
          </p>
        </div>
        {/* <div id="cleaning-land">
            <h3></h3>
            <p className="count-of"></p>
          </div>
          <div id="cleaning-land2">
            <h3></h3>
            <p className="count-of"></p>
          </div> */}
      </div>
      <div className="line-box">
        <hr />
      </div>
      <div className="additional-info">
        <img src={LeftSideLine}></img>
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
    </main>
  );
};

export default Activities;
