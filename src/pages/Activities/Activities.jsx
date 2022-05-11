import React, { useState } from "react";
import "./styles/activities.styles.scss";
import { IoClose } from "react-icons/io5";

import {
  LeftSideLine,
  GarbageIcon,
  LeafIcon,
  TechnologyIcon,
  PlantIcon,
  BroomIcon,
  PlanetIcon,
  ClipIcon,
  LocationIcon,
  NumbersIcon,
} from "./styles/images";

import { Link } from "react-router-dom";

const Activities = () => {
  const [showForm, setShowForm] = useState(false);

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
        <div id="garbage-sorting" onClick={() => setShowForm(true)}>
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
        <div id="paper-waste" onClick={() => setShowForm(true)}>
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
        <div id="resource-saving" onClick={() => setShowForm(true)}>
          <img src={TechnologyIcon} alt="garbage-icon"></img>
          <h3>Resource saving tech</h3>
          <p className="count-of">
            <span>1</span> point per unit
          </p>
        </div>
        <div id="plant-flora" onClick={() => setShowForm(true)}>
          <img src={PlantIcon} alt="garbage-icon"></img>
          <h3>Plant a piece of flora</h3>
          <p className="count-of">
            <span>1</span> point per unit
          </p>
        </div>
        <div id="clean-land" onClick={() => setShowForm(true)}>
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
      <div className={"form-bg" + (showForm ? " active-form" : "")}>
        <div className="form-box">
          <IoClose
            size={45}
            className="close-icon"
            onClick={() => setShowForm(false)}
          />
          <div className="form-description-box">
            <h2>Fill the form</h2>
            <p className="task-description">
              Write down some description information if needed
            </p>
            <hr />
            <p className="p-category-name">__name of category__</p>
            <p className="p-count-of-points">n points per unit.</p>
            <img src={PlanetIcon}></img>
          </div>
          <form className="form-fields">
            <div className="location">
              <img src={LocationIcon} />
              <p>Location</p>
            </div>
            <div className="photos">
              <img src={ClipIcon} />
              <p>Attach photos</p>
            </div>
            <div className="number">
              <img src={NumbersIcon} />
              <input
                name="count"
                type="number"
                min="0"
                placeholder="number"
              ></input>
            </div>
            <div className="description-input">
              <textarea
                name="description"
                type="text"
                placeholder="Description"
              ></textarea>
            </div>
            <div className="confirm-button">
              <button type="submit">Confirm</button>
            </div>
          </form>
        </div>
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
