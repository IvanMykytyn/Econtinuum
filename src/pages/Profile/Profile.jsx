import React, { useState } from "react";

import { IoMdCheckboxOutline } from "react-icons/io";
import {
  BiLockAlt,
  BiCategory,
  BiLoaderCircle,
  BiChevronUp,
  BiChevronDown,
} from "react-icons/bi";

import { BsCheck2, BsCircle } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { CgSandClock } from "react-icons/cg";

import EditProfile from "./EditProfile";
import TaskHistory from "./TaskHistory";

import "./profile.styles.scss";

const initialCategories = {
  any: "any",
  waste: "waste",
  flora: "flora",
  land: "land",
  sorting: "sorting",
  tech: "tech",
};
const initialStatus = {
  any: "any",
  success: "success",
  failed: "failed",
  validating: "validating",
};

const Profile = () => {
  const [categoryList, setCategoryList] = useState(true);
  const [activeCategory, setActiveCategory] = useState(initialCategories.any);

  const [statusList, setStatusList] = useState(true);
  const [activeList, setActiveList] = useState(initialStatus.any);

  return (
    <div className="content">
      <nav>
        <div className="navigation-box">
          <ul>
            <li>
              <IoMdCheckboxOutline size={24} />
              <h3>Go to task history</h3>
            </li>
            <li className="privacy-issues">
              <BiLockAlt size={24} />
              <h3>Have privacy issues?</h3>
            </li>
            <li>
              <p>Please, contact us using our social media below</p>
            </li>
          </ul>
        </div>
        <div className="filter-box">
          <ul>
            <li className="category-section">
              <div
                className="category-title"
                onClick={() => {
                  setCategoryList(!categoryList);
                }}
              >
                <div>
                  <BiCategory size={30} />
                  <h4>Category</h4>
                </div>
                {categoryList && <BiChevronUp size={30} />}
                {!categoryList && <BiChevronDown size={30} />}
              </div>
              {!categoryList && (
                <ul className="category-list">
                  <li
                    id="category-any"
                    className={
                      activeCategory === initialCategories.any &&
                      "active-category"
                    }
                    onClick={() => {
                      setActiveCategory(initialCategories.any);
                    }}
                  >
                    <div></div>
                    <p>Any</p>
                  </li>
                  <li
                    id="category-waste"
                    className={
                      activeCategory === initialCategories.waste &&
                      "active-category"
                    }
                    onClick={() => {
                      setActiveCategory(initialCategories.waste);
                    }}
                  >
                    <div></div>
                    <p>Paper waste</p>
                  </li>
                  <li
                    id="category-sorting"
                    className={
                      activeCategory === initialCategories.sorting &&
                      "active-category"
                    }
                    onClick={() => {
                      setActiveCategory(initialCategories.sorting);
                    }}
                  >
                    <div></div>
                    <p>Sorting</p>
                  </li>
                  <li
                    id="category-tech"
                    className={
                      activeCategory === initialCategories.tech &&
                      "active-category"
                    }
                    onClick={() => {
                      setActiveCategory(initialCategories.tech);
                    }}
                  >
                    <div></div>
                    <p>Tech</p>
                  </li>
                  <li
                    id="category-flora"
                    className={
                      activeCategory === initialCategories.flora &&
                      "active-category"
                    }
                    onClick={() => {
                      setActiveCategory(initialCategories.flora);
                    }}
                  >
                    <div></div>
                    <p>Flora</p>
                  </li>
                  <li
                    id="category-land"
                    className={
                      activeCategory === initialCategories.land &&
                      "active-category"
                    }
                    onClick={() => {
                      setActiveCategory(initialCategories.land);
                    }}
                  >
                    <div></div>
                    <p>Land</p>
                  </li>
                </ul>
              )}
            </li>
            <li className="status-section">
              <div
                className="status-title"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setStatusList(!statusList);
                }}
              >
                <div>
                  <BiLoaderCircle size={30} />
                  <h4>Status</h4>
                </div>
                {statusList && <BiChevronUp size={30} />}
                {!statusList && <BiChevronDown size={30} />}
              </div>
              {!statusList && (
                <ul className="status-list">
                  <li
                    id="status-any"
                    className={
                      activeList === initialStatus.any && "active-category"
                    }
                    onClick={() => {
                      setActiveList(initialStatus.any);
                    }}
                  >
                    <BsCircle
                      size={18}
                      color={"#339BD6"}
                      style={{ margin: "0 3px" }}
                    />
                    <p>Any</p>
                  </li>
                  <li
                    id="status-success"
                    className={
                      activeList === initialStatus.success && "active-category"
                    }
                    onClick={() => {
                      setActiveList(initialStatus.success);
                    }}
                  >
                    <BsCheck2 size={24} color={"#6EB29A"} />
                    <p>Success</p>
                  </li>
                  <li
                    id="status-failed"
                    className={
                      activeList === initialStatus.failed && "active-category"
                    }
                    onClick={() => {
                      setActiveList(initialStatus.failed);
                    }}
                  >
                    <IoClose size={24} color={"#ff5f71"} />
                    <p>Failed</p>
                  </li>
                  <li
                    id="status-validating"
                    className={
                      activeList === initialStatus.validating &&
                      "active-category"
                    }
                    onClick={() => {
                      setActiveList(initialStatus.validating);
                    }}
                  >
                    <CgSandClock size={24} color={"#708090"} />
                    <p>Validating</p>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <h1 className="title">Look over your profile info</h1>
        <EditProfile />
        <TaskHistory />
      </main>
    </div>
  );
};

export default Profile;
