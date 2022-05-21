import React, { useState } from "react";

import "./rating.styles.scss";
import "../Profile/profile.styles.scss";


import { MdPersonOutline } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import {
  BiCategory,
  BiChevronUp,
  BiChevronDown,
} from "react-icons/bi";
import Dashboard from "../../components/Dashboard/Dashboard";

const initialCategories = {
  any: "any",
  waste: "waste",
  flora: "flora",
  land: "land",
  sorting: "sorting",
  tech: "tech",
};

const initialDates = {
  current: "current",
  lastWeek: "last week",
  lastMonth: "last month",
  lastYear: "last year",
};

const Rating = () => {
  const [categoryList, setCategoryList] = useState(true);
  const [activeCategory, setActiveCategory] = useState(initialCategories.any);

  const [dateList, setDateList] = useState(true);
  const [activeDate, setActiveDate] = useState(initialDates.current);

  const [showMe, setShowMe] = useState(false);

  return (
    <div className="rating-content">
      <nav>
        <div className="filter-box">
          <ul>
            <li className="date-section">
              <div
                className="date-title"
                onClick={() => setDateList(!dateList)}
              >
                <div>
                  <AiOutlineCalendar size={30} />
                  <h4>Date</h4>
                </div>
                {dateList && <BiChevronUp size={30} />}
                {!dateList && <BiChevronDown size={30} />}
              </div>
              {!dateList && (
                <ul className="date-list">
                  <li
                    className={
                      activeDate === initialDates.current && "active-category"
                    }
                    onClick={() => {
                      setActiveDate(initialDates.current);
                    }}
                  >
                    <div/>
                    <p>Current</p>
                  </li>

                  <li
                    className={
                      activeDate === initialDates.lastWeek && "active-category"
                    }
                    onClick={() => {
                      setActiveDate(initialDates.lastWeek);
                    }}
                  >
                    <div/>
                    <p>Last week</p>
                  </li>
                  <li
                    className={
                      activeDate === initialDates.lastMonth && "active-category"
                    }
                    onClick={() => {
                      setActiveDate(initialDates.lastMonth);
                    }}
                  >
                    <div/>
                    <p>Last month</p>
                  </li>
                  <li
                    id="date-current"
                    className={
                      activeDate === initialDates.lastYear && "active-category"
                    }
                    onClick={() => {
                      setActiveDate(initialDates.lastYear);
                    }}
                  >
                    <div/>
                    <p>Last year</p>
                  </li>
                </ul>
              )}
            </li>
            <li className="show-me-section">
              <div
                className={"show-me-title" + (showMe ? " active-show-me" : "")}
                onClick={() => setShowMe(!showMe)}
              >
                <div>
                  <MdPersonOutline size={30} />
                  <h4>Show me</h4>
                </div>
                <BsDot size={30} />
              </div>
            </li>

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
                    <div/>
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
                    <div/>
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
                    <div/>
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
                    <div/>
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
                    <div/>
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
                    <div/>
                    <p>Land</p>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <h1 className="title">Dashboard — User rating</h1>
        <Dashboard />
      </main>
    </div>
  );
};

export default Rating;
